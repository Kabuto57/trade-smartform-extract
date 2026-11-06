"""Recount the Trade Smart Form XFA template and print each doc claim next to the real value."""
import re, sys, json
import xml.etree.ElementTree as ET
from collections import Counter

T = sys.argv[1]
root = ET.parse(T).getroot()
for el in root.iter():  # drop namespaces
    if isinstance(el.tag, str) and "}" in el.tag:
        el.tag = el.tag.split("}", 1)[1]
parent = {c: p for p in root.iter() for c in p}
form1 = root.find("subform")

def path(el):
    names = []
    while el is not None and el is not root:
        if el.tag in ("subform", "field", "exclGroup", "subformSet", "area", "pageSet", "pageArea", "variables", "script", "draw") and el.get("name"):
            names.append(el.get("name"))
        el = parent.get(el)
    return ".".join(reversed(names))

fields = list(root.iter("field")); groups = list(root.iter("exclGroup")); subforms = list(root.iter("subform"))
ui = Counter()
multiline = round_ = square = 0
for f in fields:
    u = f.find("ui")
    kind = next((c.tag for c in u if c.tag not in ("extras", "picture", "margin", "border")), "?") if u is not None else "?"
    ui[kind] += 1
    if kind == "textEdit" and u.find("textEdit").get("multiLine") == "1": multiline += 1
    if kind == "checkButton":
        if u.find("checkButton").get("shape") == "round": round_ += 1
        else: square += 1
bar = Counter(f.find("ui/barcode").get("type") for f in fields if f.find("ui/barcode") is not None)
ecc = Counter(f.find("ui/barcode").get("errorCorrectionLevel") for f in fields if f.find("ui/barcode") is not None and f.find("ui/barcode").get("type") == "pdf417")

R = []
def claim(name, doc, actual): R.append((name, str(doc), str(actual), "OK" if str(doc) == str(actual) else "DIFF"))

top = [c.get("name") for c in form1 if c.tag == "subform"]
claim("sections under form1 (excl. MainPage)", 17, len(top) - 1)
apps = [n for n in top if n and n != "MainPage" and "Terms" not in n]
claim("application forms", "13 (Layer 2) / 14 (Overview, Navigation)", f"{len(apps)}: {', '.join(apps)}")
claim("fields", 1129, len(fields)); claim("radio groups (exclGroup)", 52, len(groups)); claim("inputs total", 1181, len(fields) + len(groups))
for k, v in [("textEdit", 662), ("checkButton", 194), ("choiceList", 64), ("barcode", 62), ("button", 53), ("dateTimeEdit", 49), ("numericEdit", 45)]:
    claim(f"ui {k}", v, ui[k])
claim("textEdit multi-line", 92, multiline); claim("checkButton round / square", "137 / 57", f"{round_} / {square}")
claim("barcodes pdf417 / code128 / code3Of9", "42 / 10 / 10", f"{bar.get('pdf417',0)} / {bar.get('code128',0)} / {bar.get('code3Of9',0)}  (all types: {dict(bar)})")
claim("pdf417 error correction level", 5, dict(ecc))

names = [e.get("name") or "" for e in fields + groups]
for p, v in [("txt", 731), ("drp", 69), ("chk", 63), ("btn", 49), ("rad", 20)]:
    claim(f"names starting '{p}'", v, sum(n.startswith(p) for n in names))
claim("subforms named subfrm*", 432, sum((s.get("name") or "").startswith("subfrm") for s in subforms))
claim("all subforms", "(not stated)", len(subforms))

mc = [int(f.find("value/text").get("maxChars")) for f in fields if f.find("value/text") is not None and f.find("value/text").get("maxChars")]
mcc = Counter(mc)
claim("fields with maxChars", 452, len(mc)); claim("maxChars=35", 199, mcc[35]); claim("maxChars=3", 76, mcc[3])
claim("validate nullTest=error", 137, sum(1 for e in fields + groups if e.find("validate") is not None and e.find("validate").get("nullTest") == "error"))
claim("validate scriptTest=warning", 13, sum(1 for e in fields + groups if e.find("validate") is not None and e.find("validate").get("scriptTest") == "warning"))
acc = Counter(f.get("access", "open") for f in fields)
claim("access open / readOnly / protected", "779 / 341 / 9", f"{acc['open']} / {acc['readOnly']} / {acc['protected']}  {dict(acc)}")
claim("fields presence=hidden", 115, sum(f.get("presence") == "hidden" for f in fields))
claim("bind match=none (fields)", 934, sum(1 for f in fields if f.find("bind") is not None and f.find("bind").get("match") == "none"))
claim("bind match=global", 5, sum(1 for e in fields + groups if e.find("bind") is not None and e.find("bind").get("match") == "global"))
lay = Counter(s.get("layout", "position") for s in subforms)
claim("subform layout tb / lr-tb / table+row / position", "98 / 51 / 14 / 269", f"{lay['tb']} / {lay['lr-tb']} / {lay['table']+lay['row']} / {lay['position']}  {dict(lay)}")
claim("repeating groups occur max=-1", 6, sum(1 for s in subforms if s.find("occur") is not None and s.find("occur").get("max") == "-1"))
fonts = Counter(f.get("typeface") for f in root.iter("font") if f.get("typeface"))
claim("font Arial / Myriad Pro uses", "1792 / 349", f"{fonts['Arial']} / {fonts['Myriad Pro']}  {dict(fonts)}")
claim("speak / assist / traversal", "1024 / 1042 / 1520", f"{len(list(root.iter('speak')))} / {len(list(root.iter('assist')))} / {len(list(root.iter('traversal')))}")
pats = Counter((p.text or "").strip() for p in root.iter("picture") if p.text and "date" in (p.text or ""))
claim("date display pictures", "DD MMM, YYYY 49 / DD/MM/YYYY 47 / YYYY-MM-DD 8", dict(pats.most_common(6)))

# scripts
all_scripts = list(root.iter("script"))
var_scripts = [s for s in form1.find("variables").iter("script")] if form1.find("variables") is not None else []
claim("total <script> elements", 1281, len(all_scripts))
events = Counter()
for ev in root.iter("event"):
    if ev.find("script") is None: continue
    act = ev.get("activity"); events[f"{act} ({ev.get('ref')})" if act == "ready" else act] += 1
calc = sum(1 for c in root.iter("calculate") if c.find("script") is not None)
vscr = sum(1 for c in root.iter("validate") if c.find("script") is not None)
for k, v in [("change", 738), ("exit", 239), ("ready ($form)", 96), ("initialize", 75), ("click", 54), ("full", 23), ("ready ($layout)", 7), ("prePrint", 1)]:
    claim(f"event {k}", v, events[k])
claim("calculate scripts", 43, calc); claim("validate scripts", "(not stated)", vscr)
claim("event+calculate scripts", 1276, sum(events.values()) + calc)
claim("all JavaScript (no FormCalc)", True, all((s.get("contentType") or "") == "application/x-javascript" for s in all_scripts))
lib = {}
for s in var_scripts:
    body = s.text or ""
    lib[s.get("name")] = (round(len(body.encode()) / 1024, 1), len(re.findall(r"^\s*function\s+\w+", body, re.M)))
claim("script objects", "controlScript 111KB/79, barcodeScript 157KB/21, fieldsCheck 22KB/6, currencyConvertor 6KB/5, errorMessage 0.2KB/0", lib)
claim("total library functions", "111 (Layer 4) / about 120 (Overview)", sum(v[1] for v in lib.values()))
calls = Counter(re.findall(r"\b(controlScript\.\w+)\s*\(", "\n".join(s.text or "" for s in all_scripts if s not in var_scripts)))
for k, v in [("controlScript.mandatoryChange", 684), ("controlScript.accessChange", 674), ("controlScript.changeUpper", 592), ("controlScript.validateRegularExpChange", 272), ("controlScript.exchangeMap", 115), ("controlScript.presenceChange", 114), ("controlScript.setMandatoryBackColor", 61), ("controlScript.populateDropDownlist", 45), ("controlScript.plusNumeric", 44), ("controlScript.forceNumberOnly", 43)]:
    claim(f"calls {k}", v, calls[k])
claim("event scripts calling mandatoryChange", 166, sum(1 for s in all_scripts if s not in var_scripts and "mandatoryChange(" in (s.text or "")))
cs = dict((s.get("name"), s.text or "") for s in var_scripts)
m = re.search(r"currencyArray\s*=\s*new Array\((.*?)\);", cs.get("controlScript", ""), re.S) or re.search(r"currencyArray\s*=\s*\[(.*?)\]", cs.get("controlScript", ""), re.S)
claim("currencyArray entries", 58, len(re.findall(r'"[^"]*"', m.group(1))) if m else "not found")
claim("form variable AlphaNumericSwift", "[^a-zA-Z0-9\\s,.:'\\+\\(\\)\\?'\\-/]", next(((t.text or "").strip() for t in form1.find("variables").iter("text") if t.get("name") == "AlphaNumericSwift"), "not found"))
bs = cs.get("barcodeScript", "")
claim("barcode uses '|' separator", True, '"|"' in bs or "'|'" in bs)
claim("barcode uses '~' internally", True, "~" in bs)
claim("SWIFT code L5Y in barcodeScript", True, "L5Y" in bs); claim("SWIFT tag 44E in barcodeScript", True, "44E" in bs)
claim("checkSum uses SHA-1 (hex_sha1)", True, "hex_sha1" in cs.get("controlScript", ""))
claim("currencyConvertor functions", "toWords, addDecimalCurrency, massageString, getWholeWord, cutString", re.findall(r"function\s+(\w+)", cs.get("currencyConvertor", "")))
claim("fieldsCheck functions", "checkLCMandatory, checkOBCMandatory, checkBEMandatory, checkBEEBLCMandatory, checkBEOBCMandatory, checkBEGenericMandatory", re.findall(r"function\s+(\w+)", cs.get("fieldsCheck", "")))
claim("barcodeScript functions", "LCbarcode … EXPORTbarcode + cleanUp… + 6 Get… (21)", re.findall(r"function\s+(\w+)", bs))
em = cs.get("errorMessage", "")
claim("errorMessage strings", 3, len(re.findall(r'"[^"]{8,}"', em)))

w = max(len(r[0]) for r in R)
for name, doc, act, ok in R:
    print(f"{ok:4} {name:<{w}} | doc: {doc} | file: {act}")
print("\nDIFF count:", sum(r[3] == "DIFF" for r in R), "of", len(R))

"""Write every script in an XFA template to files: shared libraries, event scripts per section, and an index."""
import csv, re, sys
from collections import defaultdict
from pathlib import Path
import xml.etree.ElementTree as ET

template, out = Path(sys.argv[1]), Path(sys.argv[2])
root = ET.parse(template).getroot()
for el in root.iter():
    if isinstance(el.tag, str) and "}" in el.tag:
        el.tag = el.tag.split("}", 1)[1]
parent = {c: p for p in root.iter() for c in p}
NAMED = {"subform", "field", "exclGroup", "subformSet", "pageSet", "pageArea", "draw", "area"}

def som(el):
    """Designer-style path, e.g. form1.LC.subfrmLC.subfrmBeneficiary.txtName; unnamed nodes as #tag[i]."""
    parts = []
    while el is not None and el.tag != "template":
        if el.tag in NAMED:
            if el.get("name"):
                parts.append(el.get("name"))
            elif el.tag == "pageSet":  # the master-page set is unnamed in Designer
                parts.append("pageSet")
            else:
                p = parent[el]
                same = [c for c in p if c.tag == el.tag and not c.get("name")]
                parts.append(f"#{el.tag}[{same.index(el)}]")
        el = parent.get(el)
    return ".".join(reversed(parts))

form1 = root.find("subform")
libs = form1.find("variables")
lib_scripts = list(libs.iter("script")) if libs is not None else []
(out / "libraries").mkdir(parents=True, exist_ok=True)
(out / "events").mkdir(parents=True, exist_ok=True)
for s in lib_scripts:
    (out / "libraries" / f"{s.get('name')}.js").write_text(
        f"// Shared script object form1.variables.{s.get('name')} (Designer: Hierarchy > Variables)\n"
        f"// Extracted verbatim from Trade-Smartform.pdf (XFA template). Language: JavaScript.\n\n{s.text or ''}\n")

rows, by_section = [], defaultdict(list)
for s in root.iter("script"):
    if s in lib_scripts:
        continue
    holder = parent[s]  # <event>, <calculate> or <validate>
    owner = parent[holder]
    event = holder.get("activity") if holder.tag == "event" else holder.tag
    if holder.tag == "event" and holder.get("ref") not in (None, "$"):
        event += f" ({holder.get('ref')})"
    path = som(owner)
    section = path.split(".")[1] if path.startswith("form1.") and path.count(".") >= 1 else path.split(".")[0]
    body = (s.text or "").strip("\n")
    lang = "FormCalc" if (s.get("contentType") or "").endswith("formcalc") else "JavaScript"
    by_section[section].append((path, event, body))
    calls = sorted(set(re.findall(r"\b((?:controlScript|barcodeScript|fieldsCheck|currencyConvertor|errorMessage)\.\w+)", body)))
    rows.append({"section": section, "path": path, "event": event, "language": lang, "lines": body.count("\n") + 1 if body else 0, "library_calls": " ".join(calls)})

for section, items in by_section.items():
    safe = re.sub(r"[^\w.-]+", "_", section)
    with open(out / "events" / f"{safe}.js", "w") as fh:
        fh.write(f"// Event scripts for {section}: {len(items)} scripts, in template order.\n"
                 "// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.\n\n")
        for path, event, body in items:
            fh.write(f"// ===== {path}  ::  {event} =====\n{body}\n\n")

with open(out / "index.csv", "w", newline="") as fh:
    w = csv.DictWriter(fh, fieldnames=list(rows[0]))
    w.writeheader(); w.writerows(rows)
print(f"libraries: {len(lib_scripts)}, event/calculate scripts: {len(rows)}, section files: {len(by_section)}, total: {len(lib_scripts) + len(rows)}")

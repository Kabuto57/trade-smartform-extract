"""LC-form figures for the reverse-engineering document: real scripts with callouts, and barcode positions.
Script text is read VERBATIM from the anonymised extract (../trade-smartform-extract), so the pictures can't drift.

    ../lc-form/.venv/bin/python lc_figures.py      -> img/l-*.png
"""
import json
import os

from PIL import Image, ImageDraw, ImageFont
import zxingcpp

from extra_images import code_image
from make_images import IMG, wrap
from swimlanes import bold, black, LANES, PAIN, GAIN

EX = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "trade-smartform-extract")
MONO = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 22)
W = 1400
BG, FG, NUM, COMMENT = "#1E1E1E", "#E8E8E8", "#6E7681", "#7FB069"
BLUE, GREEN, AMBER, PURPLE = (c for _, c, _ in LANES)


def lines_of(path, start, end):
    return open(os.path.join(EX, path)).read().split("\n")[start - 1:end]


def find(path, needle):
    for i, l in enumerate(open(os.path.join(EX, path)).read().split("\n"), 1):
        if needle in l:
            return i
    raise SystemExit("not found: " + needle)


def code_panel(d, x, y, w, code, marks, label=None, mark_bg=None):
    """Draw code lines in a dark panel. marks = {line index: callout number}; mark_bg = {line index: colour}."""
    rows = []
    for i, line in enumerate(code):
        line = line.replace("\t", "    ")
        parts = wrap(line, MONO, w - 150) if line.strip() else [""]
        for j, p in enumerate(parts):
            rows.append((i, ("      " if j else "") + p.lstrip() if j else p))
    h = len(rows) * 30 + 30 + (40 if label else 0)
    d.rounded_rectangle([x, y, x + w, y + h], radius=10, fill=BG)
    ty = y + 15
    if label:
        d.text((x + 20, ty), label, font=bold(24), fill="#F2C94C"); ty += 40
    seen = set()
    for i, text in rows:
        if mark_bg and i in mark_bg:
            d.rectangle([x + 4, ty - 2, x + w - 4, ty + 28], fill=mark_bg[i])
        if i not in seen:
            d.text((x + 14, ty), f"{i + 1:>2}", font=MONO, fill=NUM)
        col = COMMENT if text.strip().startswith("//") else FG
        d.text((x + 64, ty), text, font=MONO, fill=col)
        if i in marks and i not in seen:
            cx = x + w - 30
            d.ellipse([cx - 18, ty - 3, cx + 18, ty + 33], fill="#F2C94C")
            n = str(marks[i]); d.text((cx - d.textlength(n, font=bold(22)) / 2, ty + 2), n, font=bold(22), fill="#111111")
        seen.add(i)
        ty += 30
    return y + h


def callouts(d, y, items, x=40):
    for n, text in items:
        d.ellipse([x, y, x + 36, y + 36], fill="#F2C94C", outline="#111111", width=2)
        d.text((x + 18 - d.textlength(str(n), font=bold(22)) / 2, y + 5), str(n), font=bold(22), fill="#111111")
        f = bold(25)
        for line in wrap(text, f, W - x - 120):
            d.text((x + 56, y + 3), line, font=f, fill="#1A1A1A"); y += 34
        y += 12
    return y


def title(d, text, sub=None):
    d.rectangle([20, 20, W - 20, 94], fill="#212121")
    d.text((44, 34), text, font=black(34), fill="white")
    if sub:
        d.text((40, 110), sub, font=bold(24), fill="#424242")


def script_simple():
    """LC applicant name: its change script, and the two shared functions it calls."""
    s = find("events/LC.js", "form1.LC.subfrmLC.subfrmApplicant.txtName  ::  change")
    ev = lines_of("events/LC.js", s, s + 2)
    a = find("libraries/controlScript.js", "function changeUpper()")
    up = lines_of("libraries/controlScript.js", a, a + 2)
    b = find("libraries/controlScript.js", "function validateRegularExp(regExp)")
    rx = lines_of("libraries/controlScript.js", b, b + 13)
    swift = "[^a-zA-Z0-9\\s,.:'\\+\\(\\)\\?'\\-/]"
    assert swift in open(os.path.join(EX, "xfa/template.xml")).read()

    img = Image.new("RGB", (W, 2000), "white"); d = ImageDraw.Draw(img)
    title(d, "LC script 1: Applicant Name, on every key press", "events/LC.js  (one of the LC form's 176 scripts, verbatim)")
    y = code_panel(d, 40, 150, W - 80, ev, {0: 1, 1: 2, 2: 3}, "The field's own 'change' script") + 24
    y = code_panel(d, 40, y, W - 80, up, {1: 4}, "Shared library: controlScript.changeUpper()") + 24
    y = code_panel(d, 40, y, W - 80, rx, {2: 5, 3: 6, 5: 7}, "Shared library: controlScript.validateRegularExp(), called by validateRegularExpChange()") + 24
    y = code_panel(d, 40, y, W - 80, ["AlphaNumericSwift = " + swift], {0: 8}, "Form variable (in the template)") + 30
    y = callouts(d, y, [
        (1, "The header the extract adds: which object (the LC's Applicant Name box) and which event (change). Adobe runs this on EVERY key press in that box."),
        (2, "Line 1 of the script: make the typed letter uppercase."),
        (3, "Line 2: refuse characters that SWIFT messages can't carry."),
        (4, "xfa.event.change is the character just typed; this replaces it with its uppercase."),
        (5, "Build a pattern from AlphaNumericSwift (8) and test the typed character against it."),
        (6, "If it is NOT allowed, set the change to nothing: the key press is swallowed."),
        (7, "The comment says 'start/en': the vendor's code, as written."),
        (8, "The allowed set: letters, digits, space and , . : ' + ( ) ? - /. The ^ means 'anything else'."),
    ])
    img.crop((0, 0, W, y + 20)).save(os.path.join(IMG, "l-script-1.png"))


def script_twice():
    """One LC rule (open-cover insurance makes 2 fields mandatory) written twice, and the two copies differ."""
    s = find("events/LC.js", "form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR  ::  change")
    ch = lines_of("events/LC.js", s, s + 18)
    r = find("events/LC.js", 'if ((form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.rawValue == "Insurance covered by applicant under open Cover No.")')
    rd = lines_of("events/LC.js", r + 8, r + 15)
    hdr = [l for l in open(os.path.join(EX, "events/LC.js")).read().split("\n")[:r] if l.startswith("// =====")][-1]
    short = lambda l: l.replace("form1.LC.subfrmLC.subfrmInsurance.", "")
    rd = [short(l) for l in rd]
    # lines that differ: change script keeps the old answer (clearing commented out); ready script clears it
    ci = [i for i, l in enumerate(ch) if "//\tsubfrmCoverNo" in l or "// subfrmCoverNo" in l or l.strip().startswith("//\tsubfrmCoverNo") or l.lstrip().startswith("//") and "subfrmCoverNo" in l]
    ri = [i for i, l in enumerate(rd) if "rawValue = null" in l]
    assert len(ci) == 3 and len(ri) == 2, (ci, ri)

    img = Image.new("RGB", (W, 2600), "white"); d = ImageDraw.Draw(img)
    title(d, "LC script 2: one rule, written 4 times", "Rule: Insurance 'covered by applicant under open Cover No.'  makes Cover No. and With mandatory")
    y = code_panel(d, 40, 150, W - 80, ch, {0: 1, 1: 2, 3: 3, 4: 4, 9: 5, ci[0]: 6},
                   "Copy 1: the Insurance drop-down's 'change' script (runs when the customer picks)", {i: "#5A1E1E" for i in ci}) + 24
    y = code_panel(d, 40, y, W - 80, ["// ... the else part of the same rule, in:", hdr] + rd, {1: 7, 2 + ri[0]: 8},
                   "Copy 3: the same rule inside the Price Basis 'change' script (runs when price basis changes)", {2 + i: "#1E4A2A" for i in ri}) + 30
    y = callouts(d, y, [
        (1, "Runs when the customer picks a value in the Insurance drop-down (FOB / CFR price basis only)."),
        (2, "xfa.event.newText = the value just picked. The rule is written as a hard-coded sentence."),
        (3, "Show the Cover No. section."),
        (4, "Make Cover No. mandatory: mandatoryChange(field, 1) sets the field's nullTest to \"error\". Nothing turns red yet; that happens at Confirm & Print."),
        (5, "Any other choice: hide the section and switch 'mandatory' off again."),
        (6, "RED lines: clearing the old answer is COMMENTED OUT here, so a cover number typed earlier stays in the hidden field."),
        (7, "The same rule again, in a script on a different field: Price Basis. Changing FOB/CFR to another basis must hide the cover number too."),
        (8, "GREEN lines: this copy DOES clear the answers. Same rule, different behaviour depending on which field the customer changed."),
    ])
    y += 10
    d.text((40, y), "All 4 copies of this rule in events/LC.js:", font=bold(26), fill="#212121"); y += 44
    hdrs = ["#", "Script (object :: event)", "Clears the old cover no.?"]
    cws = [60, 860, 400]
    copies = [("1", "Insurance drop-down :: change", "No (commented out)"),
              ("2", "Insurance drop-down :: ready", "No; and it tests newText, the value 'just picked', when reopening"),
              ("3", "Price Basis :: change", "Yes"),
              ("4", "Price Basis :: ready", "Yes")]
    for r, row in enumerate([hdrs] + copies):
        x = 40; rh = 44 if r == 0 else 40 * max(len(wrap(t, bold(22), w - 24)) for t, w in zip(row, cws)) + 8
        for t, w in zip(row, cws):
            d.rectangle([x, y, x + w - 3, y + rh - 3], fill="#424242" if r == 0 else "#F5F5F5")
            for j, l in enumerate(wrap(t, bold(22), w - 24)):
                d.text((x + 12, y + 8 + j * 40), l, font=bold(22), fill="white" if r == 0 else ("#7F0000" if t.startswith("No") else "#1B4D1E" if t == "Yes" else "#111111"))
            x += w
        y += rh
    y += 10
    d.rectangle([40, y + 10, W - 40, y + 150], fill="#FFEBEE", outline=PAIN[1], width=5)
    for i, line in enumerate(wrap("This is why 1,281 hand-written scripts are hard to maintain: the LC's 24 'mandatory when' rules are spread over its 176 scripts, and one rule can live in up to 4 scripts that must be changed together, by hand.", bold(26), W - 140)):
        d.text((64, y + 24 + i * 36), line, font=bold(26), fill=PAIN[2])
    img.crop((0, 0, W, y + 170)).save(os.path.join(IMG, "l-script-2.png"))


def positions():
    """Form questions (cropped from the real LC screenshot) to their slot in barcode record 1."""
    shot = Image.open(os.path.join(IMG, "smartform-lc.png")).convert("RGB")
    ans = json.load(open(os.path.join(EX, "docs/lc/sample-lc-input.json")))
    out = open(os.path.join(EX, "docs/lc/sample-lc-output.txt")).read()
    rec1 = [l for l in out.split("\n") if l.startswith("1|")][0]
    vals = rec1.split("|")
    rows = [  # (crop box on the screenshot, position number 1-based, what)
        ((105, 378, 885, 408), 3, "Applicant Name"),
        ((110, 760, 878, 792), 4, "Beneficiary's Name"),
        ((895, 908, 1640, 948), 6, "Partial shipment: allowed"),
        ((895, 948, 1640, 988), 7, "Transhipment: not allowed"),
        ((895, 632, 1710, 668), 8, "Currency"),
        ((895, 668, 1710, 704), 9, "Amount"),
    ]
    img = Image.new("RGB", (W, 1700), "white"); d = ImageDraw.Draw(img)
    title(d, "Values by position: from the form to barcode 1", "Left: questions on the real LC form. Right: where each answer lands in barcode record 1.")
    y = 160
    for box, pos, what in rows:
        c = shot.crop(box); scale = 620 / c.width
        c = c.resize((620, int(c.height * scale)))
        img.paste(c, (40, y)); ch = c.height
        v = vals[pos - 1]
        d.line([(670, y + ch / 2), (760, y + ch / 2)], fill="#424242", width=5)
        d.polygon([(780, y + ch / 2), (758, y + ch / 2 - 12), (758, y + ch / 2 + 12)], fill="#424242")
        d.rounded_rectangle([790, y, 880, y + 50], radius=6, fill=PURPLE)
        d.text((835 - d.textlength(str(pos), font=black(28)) / 2, y + 7), str(pos), font=black(28), fill="white")
        d.text((900, y + 8), v, font=bold(28), fill="#111111")
        d.text((900, y + 44), what + {"L5Y": " → code L5Y", "L6N": " → code L6N"}.get(v, ""), font=bold(20), fill="#616161")
        y += max(ch, 76) + 26
    d.text((40, y + 6), "Barcode record 1, as the scanner gives it back (sample answers; 36 positions):", font=bold(26), fill="#212121")
    y += 50
    f = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 24)
    x = 40
    for i, v in enumerate(vals[:12]):
        piece = (v or " ") + "|"
        w = d.textlength(piece, font=f)
        if x + w > W - 40: x, y = 40, y + 76
        hl = i + 1 in {r[1] for r in rows}
        d.rectangle([x - 2, y, x + w - d.textlength("|", font=f), y + 34], fill="#F3EBF8" if hl else "#F5F5F5")
        d.text((x, y + 3), piece, font=f, fill="#111111")
        d.text((x, y + 38), str(i + 1), font=bold(18), fill=PURPLE if hl else "#9E9E9E")
        x += w
    d.text((x + 6, y + 3), "... 24 more", font=f, fill="#9E9E9E")
    y += 90
    for line in wrap("Nothing in the text says which value is which. The back-end only knows that position 8 is the currency because the vendor's code puts it there. The sample answers come from docs/lc/sample-lc-input.json; the record is what the form's own LCbarcode() produced for them.", bold(24), W - 80):
        d.text((40, y), line, font=bold(24), fill="#424242"); y += 34
    assert ans and vals[7] == "USD" and vals[8] == "1250000.00"
    img.crop((0, 0, W, y + 20)).save(os.path.join(IMG, "l-positions.png"))


def scan():
    """A PDF417 made from record 1, read back by a scanner library: what Trade Ops' system receives."""
    out = open(os.path.join(EX, "docs/lc/sample-lc-output.txt")).read()
    rec1 = [l for l in out.split("\n") if l.startswith("1|")][0]
    code = code_image(rec1, zxingcpp.BarcodeFormat.PDF417, ec_level="5")
    read = zxingcpp.read_barcodes(code.convert("L").resize((code.width * 3, code.height * 3), Image.NEAREST))[0].text
    assert read == rec1
    big = code.resize((code.width * 3, code.height * 3), Image.NEAREST).convert("RGB")
    if big.width > W - 80:
        big = big.resize((W - 80, int(big.height * (W - 80) / big.width)), Image.NEAREST)
    img = Image.new("RGB", (W, big.height + 600), "white"); d = ImageDraw.Draw(img)
    title(d, "What a scanner reads from the LC's barcode 1")
    img.paste(big, (40, 120)); y = 120 + big.height + 20
    d.text((40, y), "Scanner output (read back from the barcode above with zxing-cpp):", font=bold(26), fill="#212121"); y += 44
    d.rounded_rectangle([40, y, W - 40, y + 30 * len(wrap(read.replace("|", " | "), MONO, W - 120)) + 30], radius=8, fill=BG)
    for i, line in enumerate(wrap(read.replace("|", " | "), MONO, W - 120)):
        d.text((60, y + 15 + i * 30), line, font=MONO, fill=FG)
    y += 30 * len(wrap(read.replace("|", " | "), MONO, W - 120)) + 50
    for line in wrap("Just text: values between | signs. To use it, the back-end splits on | and takes value 3 as the applicant, value 8 as the currency, value 9 as the amount. Made from the sample answers with error correction level 5, as the form uses.", bold(24), W - 80):
        d.text((40, y), line, font=bold(24), fill="#424242"); y += 34
    img.crop((0, 0, W, y + 20)).save(os.path.join(IMG, "l-scan.png"))


def shift():
    """What breaks when a field is added: every later position moves by one."""
    before = ["1", "1234567", "ACME TRADING PTE LTD", "GLOBAL EXPORTS LLC", "[...]", "L5Y", "L6N", "USD", "1250000.00"]
    after = before[:2] + ["REF-001"] + before[2:]
    img = Image.new("RGB", (W, 900), "white"); d = ImageDraw.Draw(img)
    title(d, "Why 'by position' is fragile: add one field")
    f = bold(22); cw = (W - 80) / 10

    def row(y, vals, label, bad=None, new=None):
        d.text((40, y), label, font=bold(26), fill="#212121"); y += 40
        for i, v in enumerate(vals[:10]):
            x = 40 + i * cw
            fill = "#FFEBEE" if bad and i + 1 in bad else "#E8F5E9" if new == i + 1 else "#F5F5F5"
            outl = PAIN[1] if bad and i + 1 in bad else GAIN[1] if new == i + 1 else "#9E9E9E"
            d.rectangle([x + 3, y, x + cw - 3, y + 80], fill=fill, outline=outl, width=4)
            for j, l in enumerate(wrap(v, f, cw - 14)[:2]):
                d.text((x + 10, y + 8 + j * 28), l, font=f, fill="#111111")
            d.text((x + cw / 2 - 8, y + 88), str(i + 1), font=bold(22), fill="#616161")
        return y + 130

    y = row(120, before, "Today: the reader is written for this order")
    y = row(y, after, "The vendor adds 'applicant reference' after the CIF number", bad={8, 9}, new=3)
    for item in ["The bank's reader still takes position 8 as the currency: it now gets L6N.",
                 "Position 9 as the amount: it now gets USD. No error is raised; the values are just wrong.",
                 "So every form change must be matched by a change to the reader, at the same time. A named format (JSON) doesn't have this problem."]:
        d.ellipse([40, y + 8, 60, y + 28], fill=PAIN[1])
        for l in wrap(item, bold(25), W - 140):
            d.text((76, y), l, font=bold(25), fill="#1A1A1A"); y += 34
        y += 10
    img.crop((0, 0, W, y + 20)).save(os.path.join(IMG, "l-shift.png"))


if __name__ == "__main__":
    script_simple(); script_twice(); positions(); scan(); shift()
    print("done")

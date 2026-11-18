"""Makes every picture for the journey document (black and white, simple, large text).

    ../lc-form/.venv/bin/python make_images.py      -> img/*.png

Diagrams are drawn 1400 px wide and shown about 6 inches wide in Word, so 34 px text prints at about 11 pt.
"""
import io
import json
import math
import os
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont
import zxingcpp

HERE = os.path.dirname(os.path.abspath(__file__))
LC = os.path.join(HERE, "..", "lc-form")
IMG = os.path.join(HERE, "img")
sys.path.insert(0, LC)
sys.dont_write_bytecode = True

FONTS = "/System/Library/Fonts/Supplemental/"
GREY = (232, 232, 232)
DARK = (70, 70, 70)
WIDTH = 1400
BODY, HEAD, TITLE, MONO = 34, 40, 46, 30


def font(size, bold=False, mono=False):
    if mono:
        return ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", size)   # clear, even monospace (not Courier)
    return ImageFont.truetype(FONTS + ("Arial Bold.ttf" if bold else "Arial.ttf"), size)


_measure = ImageDraw.Draw(Image.new("RGB", (10, 10)))


def wrap(text, f, width):
    out = []
    for para in text.split("\n"):
        line = ""
        for w in para.split(" "):
            if _measure.textlength((line + " " + w).strip(), font=f) > width and line:
                out.append(line); line = w
            else:
                line = (line + " " + w).strip()
        out.append(line)
    return out


class Flow:
    """A top-to-bottom diagram: a title, then boxes joined by arrows (optionally side by side in a row)."""

    def __init__(self, title):
        self.title, self.items = title, []

    def box(self, head, body="", grey=False, dashed=False, mono=False, arrow=True, label=""):
        self.items.append(("row", [(head, body, grey, dashed, mono)], arrow, label))
        return self

    def row(self, boxes, arrow=True, label=""):
        self.items.append(("row", [(h, b, g, False, False) for h, b, g in boxes], arrow, label))
        return self

    def note(self, text):
        self.items.append(("note", text, False, ""))
        return self

    def _box_lines(self, head, body, mono, w):
        hf, bf = font(HEAD if w > 900 else 36, True), font(MONO if mono else BODY if w > 900 else 32, mono=mono)
        lines = [(l, hf) for l in wrap(head, hf, w - 50)] if head else []
        if body:
            lines += [(l, bf) for l in wrap(body, bf, w - 50)]
        return lines, sum(f.size * 1.3 for _, f in lines) + 44

    def save(self, name):
        x0, W = 40, WIDTH - 80
        # measure
        layout, y = [], 30 + TITLE * 1.6
        for kind, content, arrow, label in self.items:
            if kind == "note":
                lines = wrap(content, font(32), W)
                layout.append(("note", y, lines)); y += len(lines) * 42 + 20
                continue
            n = len(content); gap = 40; bw = (W - gap * (n - 1)) / n
            measured = [self._box_lines(h, b, m, bw) for h, b, g, d, m in content]
            h = max(m[1] for m in measured)
            if layout and arrow:
                y += 70
            layout.append(("row", y, content, measured, bw, gap, h, arrow and len(layout) > 0, label))
            y += h
        img = Image.new("RGB", (WIDTH, int(y + 40)), "white")
        d = ImageDraw.Draw(img)
        d.text((x0, 24), self.title, font=font(TITLE, True), fill="black")
        prev_bottom = None
        for item in layout:
            if item[0] == "note":
                for i, l in enumerate(item[2]):
                    d.text((x0, item[1] + i * 42), l, font=font(32), fill=DARK)
                continue
            _, top, content, measured, bw, gap, h, arrow, label = item
            if arrow and prev_bottom is not None:
                cx = WIDTH / 2
                d.line([(cx, prev_bottom + 6), (cx, top - 6)], fill="black", width=5)
                d.polygon([(cx, top - 4), (cx - 16, top - 26), (cx + 16, top - 26)], fill="black")
                if label:
                    d.text((cx + 26, prev_bottom + 16), label, font=font(32, True), fill=DARK)
            for i, ((head, body, grey, dashed, mono), (lines, _)) in enumerate(zip(content, measured)):
                bx = x0 + i * (bw + gap)
                if grey:
                    d.rectangle([bx, top, bx + bw, top + h], fill=GREY)
                if dashed:
                    for k in range(int(bx), int(bx + bw), 22):
                        d.line([(k, top), (min(k + 11, bx + bw), top)], fill="black", width=4)
                        d.line([(k, top + h), (min(k + 11, bx + bw), top + h)], fill="black", width=4)
                    for k in range(int(top), int(top + h), 22):
                        d.line([(bx, k), (bx, min(k + 11, top + h))], fill="black", width=4)
                        d.line([(bx + bw, k), (bx + bw, min(k + 11, top + h))], fill="black", width=4)
                else:
                    d.rectangle([bx, top, bx + bw, top + h], outline="black", width=4)
                ty = top + (h - sum(f.size * 1.3 for _, f in lines)) / 2
                for text, f in lines:
                    tx = bx + 25 if mono else bx + (bw - d.textlength(text, font=f)) / 2
                    d.text((tx, ty), text, font=f, fill="black")
                    ty += f.size * 1.3
            prev_bottom = top + h
        img.save(os.path.join(IMG, name))


def diagrams():
    Flow("The journey").box("1. Reverse-engineer the current smart form", "How it is built, its scripts, its PDF417 barcodes") \
        .box("2. PDF Template Studio", "A tool to design new forms. Built, then put on hold", dashed=True, grey=True) \
        .box("3. New LC form", "Built from one form file by 5 small Python files") \
        .box("4. PDF417 to QR code", "The answers as named JSON in one QR code (two if long)") \
        .box("5. QR code vs AI test", "10 fake scans read by the QR code and by Gemini").save("d-journey.png")

    Flow("Current smart form: 5 layers in one PDF") \
        .box("1. PDF wrapper", "Encrypted PDF with Adobe Reader Extensions, so free Reader can save it", arrow=False) \
        .box("2. Template (XML, 2.5 MB)", "13 forms + terms pages + a menu, in one XFA template", arrow=False) \
        .box("3. Fields: 1,181", "Text, tick boxes, drop-downs, dates, numbers, 62 barcodes, buttons", arrow=False) \
        .box("4. Shared scripts: 111 functions", "controlScript, barcodeScript, fieldsCheck, currencyConvertor, errorMessage", grey=True, arrow=False) \
        .box("5. Event scripts: 1,276", "Small JavaScript on each field (on change, on exit, on click ...)", grey=True, arrow=False) \
        .note("Built by the vendor in Adobe LiveCycle Designer. Grey = hand-written JavaScript.").save("d-old-layers.png")

    Flow("Current smart form: from customer to Trade Ops") \
        .box("Customer opens the form", "Only in Adobe Reader or Acrobat") \
        .box("Fills it in", "Scripts uppercase the text, block bad characters, switch fields mandatory") \
        .box("Presses Confirm & Print", "Checks mandatory fields, builds 4 text records, draws 4 PDF417 barcodes", grey=True) \
        .box("Paper goes to the bank") \
        .box("Trade Ops scans the barcodes", "The back-end splits each text on '|' and reads every value by its POSITION") \
        .save("d-old-flow.png")

    Flow("Current smart form: how a field becomes mandatory") \
        .box("Customer picks an option", "e.g. Insurance: covered by applicant under open cover") \
        .box("That field's own script runs", "mandatoryChange(field, 1) switches the 'mandatory' flag on") \
        .box("Nothing turns red yet", "", grey=True) \
        .box("Customer presses Confirm & Print") \
        .box("Shared check: setMandatoryBackColor()", "Paints every empty mandatory field red") \
        .box("Print, or refuse with a message").save("d-old-mandatory.png")

    Flow("New LC form: from form file to Trade Ops") \
        .box("lc_form.py (the form file)", "One line per question: wording, rules, limits", grey=True) \
        .box("python build.py lc_form.py", "Checks the form file, builds the PDF, checks the PDF") \
        .box("LC-Application.pdf", "A standard fillable PDF with Acrobat JavaScript inside") \
        .box("Customer fills it in Acrobat", "Red boxes, locking, formats, Check form") \
        .box("Generate QR Code", "All answers as named JSON in a QR code (two if long)") \
        .box("Printed or emailed to the bank") \
        .box("read_qr.py", "Reads the code and re-checks every answer", grey=True) \
        .box("Accepted JSON for the back-end", "Or NOT ACCEPTED, with the reasons").save("d-new-flow.png")

    Flow("The same answers, old and new") \
        .box("OLD: PDF417, meaning by POSITION", "1|1234567|ACME TRADING PTE LTD|GLOBAL EXPORTS LLC|[88 HARBOUR STREET][SHENZHEN 518000][CHINA]|L5Y|L6N|USD|1250000.00||5|5|C||44E|...", mono=True, arrow=False) \
        .note("Which value is the currency? The 8th. What is L5Y? 'Partial shipment allowed', from a code table.") \
        .box("NEW: QR code, JSON, meaning by NAME", '{"form": "LC-01", "version": "1.0", "data": {"applicant_name": "ACME TRADING PTE LTD", "beneficiary_name": "GLOBAL EXPORTS LLC", "partial_shipment": "allowed", "currency": "USD", "amount": "1,250,000.00", ...}}', mono=True, arrow=False) \
        .note("Every answer has its name, and the code says which form and version made it.").save("d-data-formats.png")

    Flow("The 5 files that build a form") \
        .box("lc_form.py", "WHAT the form asks. The only file you edit", grey=True) \
        .box("build.py", "RUN THIS. Checks the form file, runs the steps, saves the PDF", label="python build.py lc_form.py") \
        .box("layout.py", "Step 1: where everything goes on the page") \
        .box("pdf_writer.py + acrobat_js.py", "Steps 2 and 3: adds the JavaScript and buttons, writes the PDF, checks it") \
        .box("out/LC-Application.pdf", "The finished form") \
        .note("read_qr.py is the bank's side (reads the QR code); it is not needed to build.").save("d-five-files.png")

    Flow("New form: the rules run on every change") \
        .box("Customer types, ticks or picks") \
        .box("lcRules checks every question", "Using the rules table made from the form file") \
        .row([("Doesn't apply", "grey, locked, cleared", True), ("Mandatory, blank or wrong", "red outline, pink fill", False),
              ("Answered and right", "black outline", False)]).save("d-new-rules.png")

    Flow("What if the QR code can't be read?") \
        .box("Scan the QR page", "300 dpi, page flat") \
        .box("Read? Yes: read_qr.py re-checks every answer", "") \
        .box("No: rescan", "Error correction recovers about 15% damage", label="if not read") \
        .box("Still not read?", "", grey=True) \
        .row([("Emailed PDF", "Read the answers from the PDF's fields", False), ("Paper only", "AI reads it, a person checks", False),
              ("Or key it in", "As today", False)]).save("d-qr-unreadable.png")

    Flow("Changing a form: before and after") \
        .row([("Vendor smart form", "", True), ("New form", "", True)], arrow=False) \
        .row([("Raise a change request", "", False), ("Edit one line in the form file", "", False)], arrow=False) \
        .row([("Vendor edits scripts in Adobe Designer", "", False), ("Run python build.py", "It checks the file and the PDF", False)], arrow=False) \
        .row([("Vendor re-applies Reader Extensions", "", False), ("Open in Acrobat, press Check form", "", False)], arrow=False) \
        .row([("Bank tests, finds bugs, goes back", "", False), ("Done, in-house, the same day", "", False)], arrow=False) \
        .save("d-maintain.png")

    # ---- the code walkthrough: what runs, in order
    Flow("1. When you build: python build.py lc_form.py") \
        .box("load_form", "build.py: opens the form file") \
        .box("check_form", "build.py: stops with a plain message at the first mistake") \
        .box("Layout(...).draw()", "layout.py: places every section, question and box") \
        .box("add_scripts", "pdf_writer.py: rules table + JavaScript + buttons + QR rows") \
        .box("Writer(...).write()", "pdf_writer.py: makes the PDF with pikepdf") \
        .box("self_check", "pdf_writer.py: reopens the PDF and checks everything") \
        .box("Save out/LC-Application.pdf", "Prints PASS", grey=True).save("c-build.png")

    Flow("2. In Acrobat, while the customer fills the form") \
        .box("Form opens", "lcDates shows the calendars; lcRules colours every box") \
        .box("Customer leaves a box, or clicks a tick / option", "That field's event runs lcRules(this)") \
        .box("lcRules, for each question:", "applies?  any(activeIf)\nmandatory?  mandatory(id)\nwrong?  wrong(id), across()") \
        .box("Colour, lock, clear", "red if blank or wrong; grey and cleared if it doesn't apply") \
        .box("Returns the lists", "missing questions and wrong answers", grey=True).save("c-acrobat.png")

    Flow("3. Generate QR Code, then Print Form") \
        .box("generate-qr button", "Runs lcRules; stops and lists problems if any") \
        .box("lcPayload", "Collects every answer into JSON") \
        .box("lcDrawQr", "One code, or two if longer than 2,329 bytes") \
        .box("lcQrMatrix", "Builds the 177 x 177 squares of each code") \
        .box("177 rows written into the page", "Each dark square is a black character") \
        .box("print-form button", "Prints only if the code matches the current answers", grey=True).save("c-qr.png")

    Flow("4. At the bank: python read_qr.py scan.png") \
        .box("codes_in", "zxing-cpp finds every QR code in the scan") \
        .box("join", "Puts two codes together in the right order") \
        .box("find_form", "Finds the form file with the same form code (LC-01)") \
        .box("check_answers + checks_across", "Re-checks every answer, like the form does") \
        .box("ACCEPTED or NOT ACCEPTED", "Saves the JSON in out/", grey=True).save("c-read.png")


# ---------------------------------------------------------------------------------------------- real pictures
SAMPLE_RECORD = "1|1234567|ACME TRADING PTE LTD|GLOBAL EXPORTS LLC|[88 HARBOUR STREET][SHENZHEN 518000][CHINA]|L5Y|L6N|USD|1250000.00||5|5|C||44E|ANY CHINESE PORT||||44F|SINGAPORE||||2027-02-28|2027-03-31|21||||N|90|BILL OF LADING DATE|S|||"


def barcode(text, fmt, out, scale, **kw):
    code = zxingcpp.create_barcode(text, fmt, **kw)
    view = memoryview(zxingcpp.write_barcode_to_image(code, scale=scale, add_quiet_zones=True))
    Image.frombytes("L", (view.shape[1], view.shape[0]), view.tobytes()).save(os.path.join(IMG, out))


def samples():
    barcode(SAMPLE_RECORD, zxingcpp.BarcodeFormat.PDF417, "pdf417-sample.png", 3, ec_level="5")
    payload = {"form": "LC-01", "version": "1.0", "saved": "2026-11-17T10:30", "complete": True,
               "data": {"applicant_name": "ACME TRADING PTE LTD", "beneficiary_name": "GLOBAL EXPORTS LLC",
                        "beneficiary_address_1": "88 HARBOUR STREET", "beneficiary_address_2": "SHENZHEN 518000",
                        "beneficiary_address_3": "CHINA", "partial_shipment": "allowed", "transhipment": "not allowed",
                        "currency": "USD", "amount": "1,250,000.00", "tolerance_plus": "5", "tolerance_minus": "5",
                        "price_basis": "CIF", "shipment_from": "Port of Loading / Airport of Departure",
                        "shipment_from_place": "ANY CHINESE PORT", "latest_shipment_date": "28/02/2027",
                        "expiry_date": "31/03/2027", "presentation_days": "21", "mode_of_advising": "Full Swift"}}
    barcode(json.dumps(payload).ljust(2300), zxingcpp.BarcodeFormat.QRCode, "qr-sample.png", 4, ec_level="M", version=40)
    for name in ("pdf417-sample.png", "qr-sample.png"):
        got = zxingcpp.read_barcodes(Image.open(os.path.join(IMG, name)))
        print(name, "reads back:", bool(got))


def form_pages():
    from pdf_writer import build
    import lc_form
    import pikepdf
    pdf = pikepdf.open(io.BytesIO(build(lc_form.FORM, lc_form.DEFAULTS)))
    pdf.flatten_annotations("print")
    out = io.BytesIO(); pdf.save(out)
    path = os.path.join(HERE, "work-lc.pdf")
    open(path, "wb").write(out.getvalue())
    render = os.path.join(LC, "benchmark", "render.swift")
    subprocess.run(["swift", render, path, os.path.join(IMG, "lc-page"), "130"], check=True, capture_output=True)
    os.remove(path)
    subprocess.run(["swift", render, os.path.join(LC, "out", "EBLC-Application.pdf"), os.path.join(IMG, "eblc-page"), "110"], check=True, capture_output=True)


def crops():
    Image.open(os.path.join(IMG, "xfa-placeholder-1.png")).crop((60, 60, 720, 320)).save(os.path.join(IMG, "xfa-placeholder.png"))


if __name__ == "__main__":
    os.makedirs(IMG, exist_ok=True)
    diagrams()
    if "--diagrams" not in sys.argv:
        samples(); form_pages(); crops()
    print("done")

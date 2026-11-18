"""Extra pictures: labelled PDF417 and QR codes, how a PDF417 record is built, and the 3-question example.

    ../lc-form/.venv/bin/python extra_images.py      -> img/*.png
"""
import io
import json
import os
import subprocess
import sys

from PIL import Image, ImageDraw
import zxingcpp

import make_images as mi
from make_images import Flow, font, IMG, LC, DARK

MENLO = "/System/Library/Fonts/Menlo.ttc"


def code_image(text, fmt, **kw):
    c = zxingcpp.create_barcode(text, fmt, **kw)
    v = memoryview(zxingcpp.write_barcode_to_image(c, scale=1, add_quiet_zones=False))
    return Image.frombytes("L", (v.shape[1], v.shape[0]), v.tobytes())


def label(d, text, xy, size=32, bold=False, anchor="la"):
    d.text(xy, text, font=font(size, bold), fill="black", anchor=anchor)


def pdf417_anatomy():
    code = code_image("1|ACME TRADING PTE LTD|1250000.00|L5Y", zxingcpp.BarcodeFormat.PDF417, ec_level="2")
    cols, rows = code.size                          # 120 modules wide
    s = 10
    big = code.resize((cols * s, rows * s * 2), Image.NEAREST)
    W = 1400
    img = Image.new("RGB", (W, big.height + 520), "white")
    d = ImageDraw.Draw(img)
    label(d, "Inside a PDF417 barcode", (40, 24), 46, True)
    x0, y0 = (W - big.width) // 2, 110
    img.paste(big.convert("RGB"), (x0, y0))
    parts = [("Start", 17), ("Left row\nindicator", 17), ("Data", 51), ("Right row\nindicator", 17), ("Stop", 18)]
    x, yb = x0, y0 + big.height + 20
    for name, n in parts:
        w = n * s
        d.line([(x + 4, yb), (x + 4, yb + 24), (x + w - 4, yb + 24), (x + w - 4, yb)], fill="black", width=4)
        for i, line in enumerate(name.split("\n")):
            label(d, line, (x + w / 2, yb + 40 + i * 38), 30, True, "ma")
        x += w
    y = yb + 140
    for line in ["Stacked rows of bars. Each row starts and ends with the same fixed patterns, so a scanner",
                 "can read it even if it is tilted. The 'Data' columns hold the text in small groups of bars",
                 "(codewords); extra codewords allow damaged parts to be recovered (error correction).",
                 "This one holds: 1|ACME TRADING PTE LTD|1250000.00|L5Y"]:
        label(d, line, (40, y), 32); y += 44
    img.save(os.path.join(IMG, "pdf417-anatomy.png"))


def qr_anatomy():
    code = code_image("1|ACME TRADING PTE LTD", zxingcpp.BarcodeFormat.QRCode, ec_level="M", version=2)   # 25 x 25
    n = code.size[0]
    s = 26
    big = code.resize((n * s, n * s), Image.NEAREST).convert("RGB")
    W = 1400
    img = Image.new("RGB", (W, big.height + 260), "white")
    d = ImageDraw.Draw(img)
    label(d, "Inside a QR code (a small version 2 code; the form uses version 40)", (40, 24), 42, True)
    x0, y0 = 60, 110
    img.paste(big, (x0, y0))
    # outline the parts
    def box(mx, my, mw, mh):
        d.rectangle([x0 + mx * s - 4, y0 + my * s - 4, x0 + (mx + mw) * s + 4, y0 + (my + mh) * s + 4], outline=(120, 120, 120), width=7)
    box(0, 0, 7, 7); box(n - 7, 0, 7, 7); box(0, n - 7, 7, 7)   # finders
    box(16, 16, 5, 5)                                             # alignment (version 2: centre 18,18)
    box(8, 6, n - 16, 1)                                          # timing row
    tx = x0 + big.width + 50
    notes = [("3 finder squares", "Corners: tell the scanner where the code is and which way up"),
             ("Timing line", "Alternating squares: give the size of one square"),
             ("Alignment square", "Corrects bending and tilt (big codes have many)"),
             ("Everything else", "The data, plus error correction: about 15% can be damaged (level M)")]
    y = y0
    for head, body in notes:
        label(d, head, (tx, y), 34, True); y += 46
        for line in mi.wrap(body, font(30), W - tx - 40):
            label(d, line, (tx, y), 30); y += 40
        y += 30
    label(d, "Version 40, used on the form: 177 x 177 squares, up to 2,331 bytes, about 0.6 mm per square.",
          (40, y0 + big.height + 40), 32)
    img.save(os.path.join(IMG, "qr-anatomy.png"))


def pdf417_build():
    Flow("How the current form builds its PDF417 barcode") \
        .box("1. The customer's answers", "Applicant: ACME TRADING PTE LTD\nAmount: 1,250,000.00\nPartial shipment: allowed") \
        .box("2. LCbarcode() turns choices into codes", "allowed  becomes  L5Y\n1,250,000.00  becomes  1250000.00") \
        .box("3. Joins them in a FIXED ORDER with |", "1|ACME TRADING PTE LTD|1250000.00|L5Y", mono=True) \
        .box("4. Puts the text in a hidden field", "txtBarcode1 (one of 4, for 4 barcodes)") \
        .box("5. The barcode field draws itself", "Designer's barcode object turns the text into PDF417 bars") \
        .box("6. At the bank", "The scanner gives back the same text; the back-end splits it on | and reads value 2 = applicant, value 3 = amount, value 4 = partial shipment", grey=True) \
        .note("Simplified example. The real LC record 1 has 36 values in a fixed order; the 4 records together have 62.").save("d-pdf417-build.png")


def mini_example():
    """A 3-question form, built by the real builder, filled in, plus its old and new codes."""
    form_file = os.path.join(LC, "zz_mini_example_form.py")
    with open(form_file, "w") as f:
        f.write('''from build import radio, section, text
FORM = {"title": "Mini LC Application", "note": "An example with 3 questions.", "issuer": "Demo Bank · Trade Services",
        "formCode": "Form XX-00 · v1.0 · Nov 2026", "sections": [
    section("Application", fields=[
        text("applicant_name", "Applicant name", required=True, max=35),
        text("amount", "Amount", required=True, format="amount"),
        radio("partial_shipment", "Partial shipment", ["allowed", "not allowed"], required=True),
    ]),
]}
DEFAULTS = {}
PDF_NAME = "zz-mini.pdf"
''')
    try:
        sys.path.insert(0, LC)
        import importlib.util
        spec = importlib.util.spec_from_file_location("mini", form_file)
        mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
        from pdf_writer import build
        import pikepdf
        answers = {"applicant_name": "ACME TRADING PTE LTD", "amount": "1,250,000.00", "partial_shipment": "allowed"}
        pdf = pikepdf.open(io.BytesIO(build(mod.FORM, answers)))
        pdf.flatten_annotations("print")
        out = io.BytesIO(); pdf.save(out)
        tmp = os.path.join(HERE_TMP, "mini.pdf")
        open(tmp, "wb").write(out.getvalue())
        subprocess.run(["swift", os.path.join(LC, "benchmark", "render.swift"), tmp, os.path.join(HERE_TMP, "mini"), "200"], check=True, capture_output=True)
        page = Image.open(os.path.join(HERE_TMP, "mini-1.png"))
        page.crop((0, 0, page.width, int(page.height * 0.27))).save(os.path.join(IMG, "mini-form.png"))
        payload = {"form": "XX-00", "version": "1.0", "complete": True, "data": answers}
        with open(os.path.join(IMG, "mini-payload.json"), "w") as f:
            json.dump(payload, f)
    finally:
        os.remove(form_file)
    pdf = code_image("1|ACME TRADING PTE LTD|1250000.00|L5Y", zxingcpp.BarcodeFormat.PDF417, ec_level="2")
    pdf.resize((pdf.width * 6, pdf.height * 6), Image.NEAREST).save(os.path.join(IMG, "mini-pdf417.png"))
    qr = code_image(json.dumps(payload), zxingcpp.BarcodeFormat.QRCode, ec_level="M")
    qr.resize((qr.width * 10, qr.height * 10), Image.NEAREST).save(os.path.join(IMG, "mini-qr.png"))


HERE_TMP = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tmp")

if __name__ == "__main__":
    os.makedirs(HERE_TMP, exist_ok=True)
    mi.MONO_FONT = MENLO
    pdf417_anatomy(); qr_anatomy(); pdf417_build(); mini_example()
    print("done")

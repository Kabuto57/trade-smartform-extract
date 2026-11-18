"""Anatomy pictures for the two documents (old smart form, new form). Bold text, dark colours.

    ../lc-form/.venv/bin/python anatomy.py      -> img/a-*.png
"""
import os

from PIL import Image, ImageDraw
import zxingcpp

from extra_images import code_image
from make_images import IMG, Flow, wrap
from swimlanes import bold, black, LANES, PAIN, GAIN

W = 1400
BLUE, GREEN, AMBER, PURPLE = (c for _, c, _ in LANES)
LIGHT = {BLUE: "#EAF4FB", GREEN: "#EDF5ED", AMBER: "#FFF8E1", PURPLE: "#F3EBF8"}


def canvas(h, title):
    img = Image.new("RGB", (W, h), "white")
    d = ImageDraw.Draw(img)
    d.rectangle([20, 20, W - 20, 94], fill="#212121")
    d.text((44, 34), title, font=black(36), fill="white")
    return img, d


def text_block(d, x, y, text, size=28, width=W - 80, color="#1A1A1A", gap=1.35):
    f = bold(size)
    for line in wrap(text, f, width):
        d.text((x, y), line, font=f, fill=color); y += size * gap
    return y


def pdf417_codeword():
    """One real data codeword from row 0 of the sample code, measured from the image (widths sum to 17)."""
    code = code_image("1|ACME TRADING PTE LTD|1250000.00|L5Y", zxingcpp.BarcodeFormat.PDF417, ec_level="2")
    row = [1 if code.getpixel((x, 0)) < 128 else 0 for x in range(code.width)]
    runs, cur, n = [], row[34], 0
    for b in row[34:51]:
        if b == cur: n += 1
        else: runs.append(n); cur, n = b, 1
    runs.append(n)
    assert len(runs) == 8 and sum(runs) == 17, runs
    bars = runs[0::2]
    cluster = (bars[0] - bars[1] + bars[2] - bars[3]) % 9
    assert cluster == 0, cluster                     # row 0 always uses cluster 0

    img, d = canvas(1400, "Inside one PDF417 codeword")
    # the row, in context
    s = 9
    strip = code.crop((0, 0, code.width, 1)).resize((code.width * s, 70), Image.NEAREST).convert("RGB")
    x0, y0 = (W - strip.width) // 2, 130
    img.paste(strip, (x0, y0))
    parts = [("START", 0, 17, "#424242"), ("ROW IND.", 17, 17, PURPLE), ("CODEWORD", 34, 17, PAIN[1])]
    for name, a, n, col in parts:
        d.rectangle([x0 + a * s, y0 - 6, x0 + (a + n) * s, y0 + 76], outline=col, width=6)
        f = bold(22)
        d.text((x0 + a * s + (n * s - d.textlength(name, font=f)) / 2, y0 + 86), name, font=f, fill=col)
    d.text((x0 + 51 * s + 14, y0 + 86), "... more codewords, row indicator, stop", font=bold(22), fill="#616161")
    d.text((40, y0 + 130), "Row 1 of the barcode. Below: the red codeword, enlarged.", font=bold(26), fill="#424242")

    # the codeword enlarged
    m = 66
    cx0, cy0 = (W - 17 * m) // 2, 340
    x = cx0
    for i, r in enumerate(runs):
        bar = i % 2 == 0
        d.rectangle([x, cy0, x + r * m - 1, cy0 + 230], fill="#111111" if bar else "#FFFFFF", outline="#BDBDBD", width=1)
        lab = str(r)
        f = bold(24)
        d.text((x + (r * m - d.textlength(lab, font=f)) / 2, cy0 + 244 + (0 if bar else 32)), lab, font=f, fill=PAIN[2] if bar else BLUE)
        x += r * m
    for k in range(18):                              # module ticks
        d.line([(cx0 + k * m, cy0 - 18), (cx0 + k * m, cy0 - 4)], fill="#616161", width=3)
    d.text((cx0, cy0 - 52), "17 modules wide. Numbers = width in modules (red: bars, blue: spaces)", font=bold(26), fill="#424242")

    y = cy0 + 330
    facts = [
        ("Always 17 modules, 4 bars + 4 spaces.", f"Here: {' + '.join(map(str, runs))} = 17. Each bar or space is 1 to 6 modules wide."),
        ("Each pattern stands for one number, 0 to 928.", "Data, error correction and row indicators are all just codewords."),
        ("Three 'clusters' (pattern sets) take turns by row.", f"Bars {bars[0]} - {bars[1]} + {bars[2]} - {bars[3]} = {cluster}, so this is cluster {cluster}: rows 1, 4, 7 use cluster 0, rows 2, 5, 8 cluster 3, rows 3, 6, 9 cluster 6. A scanner knows which row it is reading even when the code is tilted."),
        ("Letters are packed two per codeword (text mode).", "A = 0 ... Z = 25, space = 26; the pair 'AC' becomes 0 x 30 + 2 = 2. Digits use a denser numeric mode."),
    ]
    for head, body in facts:
        d.ellipse([40, y + 6, 62, y + 28], fill=PAIN[1])
        y = text_block(d, 80, y, head, 28)
        y = text_block(d, 80, y, body, 26, color="#424242") + 14
    img = img.crop((0, 0, W, int(y + 20)))
    img.save(os.path.join(IMG, "a-pdf417-codeword.png"))


def pdf417_layers():
    Flow("How text becomes a PDF417 barcode") \
        .box("1. Record text", "1|ACME TRADING PTE LTD|1250000.00|L5Y", mono=True) \
        .box("2. Data codewords", "Letters packed 2 per codeword, digits in numeric mode; the first codeword gives the length") \
        .box("3. + Error correction codewords", "Reed-Solomon. Level L adds 2^(L+1): level 2 = 8, level 5 (the smart form) = 64") \
        .box("4. Into rows", "Each row: start, left row indicator, data columns, right row indicator, stop") \
        .box("5. Each codeword drawn as bars", "17 modules, 4 bars + 4 spaces, cluster 0 / 3 / 6 by row", grey=True) \
        .note("Row indicators hold the number of rows, number of columns and error-correction level, spread over 3 rows.").save("a-pdf417-layers.png")


def segments(title, name, rows, foot):
    """rows: list of (text, label, colour) segments shown as a labelled strip, wrapping onto new lines."""
    img, d = canvas(1600, title)
    f, lf = bold(30), bold(22)
    x, y = 40, 140
    for text, label, col in rows:
        w = d.textlength(text, font=f) + 30
        w = max(w, max([d.textlength(l, font=lf) + 8 for l in wrap(label, lf, 210)] + [0]))
        if x + w > W - 40:
            x, y = 40, y + 150
        d.rectangle([x, y, x + w, y + 56], fill=LIGHT.get(col, "#F5F5F5"), outline=col, width=5)
        d.text((x + 15, y + 10), text, font=f, fill="#111111")
        for i, line in enumerate(wrap(label, lf, max(w, 210))):
            d.text((x + 4, y + 66 + i * 28), line, font=lf, fill=col)
        x += w + 10
    y = text_block(d, 40, y + 170, foot, 26, color="#424242")
    img.crop((0, 0, W, int(y + 20))).save(os.path.join(IMG, name))


def pdf417_record():
    segments("Inside a PDF417 record: meaning by POSITION", "a-pdf417-record.png", [
        ("1", "1 record no.", PURPLE), ("|", "", "#9E9E9E"),
        ("1234567", "2 CIF no.", BLUE), ("|", "", "#9E9E9E"),
        ("ACME TRADING PTE LTD", "3 applicant", BLUE), ("|", "", "#9E9E9E"),
        ("GLOBAL EXPORTS LLC", "4 beneficiary", BLUE), ("|", "", "#9E9E9E"),
        ("[88 HARBOUR STREET]", "5 address, line 1", GREEN), ("[SHENZHEN 518000]", "line 2", GREEN), ("[CHINA]", "line 3", GREEN), ("|", "", "#9E9E9E"),
        ("L5Y", "6 partial shipment code", AMBER), ("|", "", "#9E9E9E"),
        ("L6N", "7 a coded choice", AMBER), ("|", "", "#9E9E9E"),
        ("USD", "8 currency", BLUE), ("|", "", "#9E9E9E"),
        ("1250000.00", "9 amount", BLUE), ("|", "", "#9E9E9E"),
        ("", "10 empty", PAIN[1]), ("|  ...", "up to 36 values", "#9E9E9E"),
    ], "Nothing in the text names a value: the reader must know that the 8th is the currency. Square brackets wrap address lines, "
       "an empty answer leaves an empty slot (||), long text is cut into 64-character lines joined by {}, and choices become codes "
       "(L5Y = partial shipment allowed). Synthetic data.")


def qr_bits():
    segments("Inside the QR code's data: the bits, in order", "a-qr-bits.png", [
        ("0011", "structured append (only when 2 codes)", PURPLE), ("0000 0001", "code 1 of 2", PURPLE), ("parity", "8 bits", PURPLE),
        ("0100", "mode: bytes", AMBER), ("16 bits", "how many bytes", AMBER),
        ('{"form": "LC-01", ...}', "the JSON, 8 bits per byte", BLUE),
        ("0000", "end", "#616161"), ("11101100 00010001 ...", "padding to fill the code", "#616161"),
    ], "Version 40 at level M holds 2,334 data codewords (8 bits each). They are cut into 49 blocks (18 of 47 + 31 of 48 codewords); "
       "each block gets 28 Reed-Solomon error-correction codewords, so about 15% of the code can be damaged and still read exactly. "
       "The codewords are then interleaved, placed in 2-module-wide columns zig-zagging up and down from the bottom-right corner, "
       "and a mask pattern is applied so there are no large blank or black areas.")


def payload():
    segments("Inside the QR code's JSON: meaning by NAME", "a-payload.png", [
        ('"form": "LC-01"', "which form", PURPLE), ('"version": "1.0"', "which version of it", PURPLE),
        ('"saved": "2026-11-17T09:50"', "when the QR code was made", "#616161"), ('"complete": true', "every check passed", GREEN),
        ('"data": {', "the answers:", BLUE), ('"applicant_name": "ACME TRADING PTE LTD"', "question id: answer", BLUE),
        ('"currency": "USD"', "", BLUE), ('"amount": "1,250,000.00"', "", BLUE),
        ('"partial_shipment": "allowed"', "the option's own words", BLUE), ("... }", "only answered questions", BLUE),
    ], "Each answer is stored under its question's id from the form file, so new questions just add new names and old readers keep "
       "working. read_qr.py finds the form file by the form code, then re-checks every answer before accepting it. Synthetic data.")


def new_layers():
    Flow("New LC form: what is inside the PDF") \
        .box("1. A standard PDF form (AcroForm)", "4 pages; opens in any PDF viewer; no encryption, no Adobe server", arrow=False) \
        .box("2. Pages drawn as plain text and lines", "Questions, numbers, ruled panels; mandatory boxes outlined in red", arrow=False) \
        .box("3. Fields: 477", "118 for the 108 questions and the buttons + 359 that draw the QR codes", arrow=False) \
        .box("4. One document script (46 KB)", "lcRules engine, the rules table, lcPayload, the QR maker; generated by the build", grey=True, arrow=False) \
        .box("5. One line per field", "Each field calls lcRules(this) when it changes; buttons call the same functions", grey=True, arrow=False) \
        .note("Grey = JavaScript, all generated from the form file. Nobody writes it per field.").save("a-new-layers.png")


if __name__ == "__main__":
    pdf417_codeword(); pdf417_layers(); pdf417_record(); qr_bits(); payload(); new_layers()
    print("done")

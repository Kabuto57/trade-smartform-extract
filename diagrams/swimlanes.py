"""Swim-lane comparison, current smart form (As-Is) vs new LC form (To-Be), plus an at-a-glance table.
Colours from the "Swim Lane PPTX" design system (darkest token of each lane), bold Arial throughout.

    ../lc-form/.venv/bin/python swimlanes.py      -> img/s-asis.png, img/s-tobe.png, img/s-compare.png
"""
import os

from PIL import Image, ImageDraw, ImageFont

from make_images import IMG, wrap

S = "/System/Library/Fonts/Supplemental/"
def bold(size): return ImageFont.truetype(S + "Arial Bold.ttf", size)
def black(size): return ImageFont.truetype(S + "Arial Black.ttf", size)

W = 1400
INK, CONNECT, CRITICAL, DIVIDER = "#1A1A1A", "#424242", "#B71C1C", "#BDBDBD"
LANES = [  # name, dark (header + step fill), light (lane background)
    ("CUSTOMER", "#0D3D5E", "#EAF4FB"),
    ("TECH", "#1B4D1E", "#EDF5ED"),
    ("TESTING", "#6D4A00", "#FFF8E1"),
    ("TRADE OPS", "#3E0A5C", "#F3EBF8"),
]
PAIN = ("#FFEBEE", "#C62828", "#7F0000")
GAIN = ("#E8F5E9", "#1B5E20", "#1B4D1E")
PHASES = ["1  CHANGE", "2  TEST & RELEASE", "3  FILL & SUBMIT", "4  READ AT BANK"]
HEAD_W, PAD, TXT = 190, 18, 28


def arrow(d, pts, color, dashed=False):
    for a, b in zip(pts, pts[1:]):
        if dashed:
            (x1, y1), (x2, y2) = a, b
            n = int(max(abs(x2 - x1), abs(y2 - y1)) // 22) or 1
            for k in range(0, n, 2):
                t0, t1 = k / n, min(k + 1, n) / n
                d.line([(x1 + (x2 - x1) * t0, y1 + (y2 - y1) * t0), (x1 + (x2 - x1) * t1, y1 + (y2 - y1) * t1)], fill=color, width=6)
        else:
            d.line([a, b], fill=color, width=6)
    (x1, y1), (x2, y2) = pts[-2], pts[-1]
    dx, dy = (x2 > x1) - (x2 < x1), (y2 > y1) - (y2 < y1)
    px, py = -dy, dx
    d.polygon([(x2, y2), (x2 - dx * 26 + px * 15, y2 - dy * 26 + py * 15), (x2 - dx * 26 - px * 15, y2 - dy * 26 - py * 15)], fill=color)


def centered(d, lines, f, cx, top, color, gap=1.3):
    for i, line in enumerate(lines):
        d.text((cx - d.textlength(line, font=f) / 2, top + i * f.size * gap), line, font=f, fill=color)


def swimlane(title, tag, tag_color, team, steps, flow, back, notes, notes_style, name):
    """steps: {key: (lane, col, text)}; flow: [key, ...] in order; back: (from, to, label) or None; notes: 4 texts, one per column."""
    col_w = (W - 40 - HEAD_W) / 4
    x0 = 20 + HEAD_W
    f = bold(TXT)
    wrapped = {k: wrap(t, f, col_w - 2 * PAD - 30) for k, (_, _, t) in steps.items()}
    lane_h = [max([len(wrapped[k]) for k, (l, _, _) in steps.items() if l == i] + [2]) * TXT * 1.3 + 2 * PAD + 44 for i in range(4)]
    nf = bold(26)
    note_lines = [wrap(n, nf, col_w - 50) for n in notes]
    note_h = max(len(n) for n in note_lines) * 26 * 1.3 + 60
    top_title, top_phase = 20, 110
    top_lanes = top_phase + 60
    H = int(top_lanes + sum(lane_h) + 30 + note_h + 30)
    img = Image.new("RGB", (W, H), "white")
    d = ImageDraw.Draw(img)

    # title band
    d.rectangle([20, top_title, W - 20, top_title + 74], fill="#212121")
    d.text((44, top_title + 14), title, font=black(38), fill="white")
    tw = d.textlength(tag, font=black(30))
    d.rectangle([W - 44 - tw - 36, top_title + 14, W - 44, top_title + 60], fill=tag_color)
    d.text((W - 44 - tw - 18, top_title + 19), tag, font=black(30), fill="white")

    # phase header
    for c, p in enumerate(PHASES):
        cx = x0 + c * col_w
        d.rectangle([cx + 2, top_phase, cx + col_w - 2, top_phase + 50], fill="#424242")
        centered(d, [p], bold(26), cx + col_w / 2, top_phase + 10, "white")

    # lanes
    boxes, y = {}, top_lanes
    for i, (lane, dark, light) in enumerate(LANES):
        h = lane_h[i]
        d.rectangle([x0, y, W - 20, y + h], fill=light)
        d.rectangle([20, y, x0, y + h], fill=dark)
        label = [lane] + ([team] if lane == "TECH" else [])
        centered(d, [label[0]], black(28), 20 + HEAD_W / 2, y + h / 2 - (34 if len(label) > 1 else 18), "white")
        if len(label) > 1:
            centered(d, [label[1]], bold(24), 20 + HEAD_W / 2, y + h / 2 + 6, "white")
        d.line([(20, y + h), (W - 20, y + h)], fill="white", width=4)
        for k, (l, c, _) in steps.items():
            if l != i:
                continue
            bx, by = x0 + c * col_w + PAD, y + 22
            bw, bh = col_w - 2 * PAD, h - 44
            d.rounded_rectangle([bx, by, bx + bw, by + bh], radius=8, fill=dark)
            lines = wrapped[k]
            centered(d, lines, f, bx + bw / 2, by + (bh - len(lines) * TXT * 1.3) / 2 + 2, "white")
            boxes[k] = (bx, by, bx + bw, by + bh)
        y += h
    for c in range(1, 4):  # column dividers
        x = x0 + c * col_w
        for k in range(int(top_lanes), int(y), 20):
            d.line([(x, k), (x, min(k + 10, y))], fill=DIVIDER, width=2)

    # connectors
    for a, b in zip(flow, flow[1:]):
        ax1, ay1, ax2, ay2 = boxes[a]
        bx1, by1, bx2, by2 = boxes[b]
        if steps[a][1] == steps[b][1]:  # same column: straight down/up
            cx = (ax1 + ax2) / 2
            arrow(d, [(cx, ay2), (cx, by1)] if by1 > ay2 else [(cx, ay1), (cx, by2)], CONNECT)
        else:
            mx = (ax2 + bx1) / 2
            arrow(d, [(ax2, (ay1 + ay2) / 2), (mx, (ay1 + ay2) / 2), (mx, (by1 + by2) / 2), (bx1, (by1 + by2) / 2)], CONNECT)
    if back:
        a, b, label = back
        ax1, ay1, ax2, ay2 = boxes[a]
        bx1, by1, bx2, by2 = boxes[b]
        cx = (bx1 + bx2) / 2 + 40
        arrow(d, [(ax1, (ay1 + ay2) / 2 + 20), (cx, (ay1 + ay2) / 2 + 20), (cx, by2)], CRITICAL, dashed=True)
        d.text((cx + 14, (ay1 + ay2) / 2 + 34), label, font=black(22), fill=CRITICAL)

    # callouts, one per column
    bg, border, text = notes_style
    ny = y + 30
    for c, lines in enumerate(note_lines):
        nx = x0 + c * col_w + 8
        d.rounded_rectangle([nx, ny, nx + col_w - 16, ny + note_h], radius=6, fill=bg, outline=border, width=5)
        centered(d, lines, nf, nx + (col_w - 16) / 2, ny + (note_h - len(lines) * 26 * 1.3) / 2 + 2, text)
    d.text((24, ny + note_h / 2 - 34), "PAIN" if notes_style is PAIN else "GAIN", font=black(30), fill=border)
    d.text((24, ny + note_h / 2 + 4), "POINTS" if notes_style is PAIN else "", font=black(30), fill=border)
    img.save(os.path.join(IMG, name))


def compare():
    rows = [
        ("Who changes it", "The vendor, by change request", "Us, in-house"),
        ("Where the rules live", "1,281 hand-written scripts; one rule in 2+ places", "One line per question in one form file"),
        ("A change takes", "Vendor edit, Reader Extensions, bank test, repeat", "Edit one line, build, Check form: same day"),
        ("Tools", "Adobe LiveCycle Designer (licensed, Windows)", "Python + pikepdf (free, permissive licence)"),
        ("Opens in", "Adobe Reader or Acrobat only", "Any PDF viewer (checks run in Acrobat / Reader)"),
        ("Barcode", "4 PDF417, 62 values by POSITION", "1 QR code (2 if long), every answer by NAME"),
        ("Says which form + version", "No", "Yes"),
        ("Long text", "Goods description cut to 400 characters", "Kept in full"),
        ("Checked at the bank", "Split on '|' and trusted", "read_qr.py re-checks every answer"),
        ("Defects found", "10 (section 2.5)", "Self-check refuses to save a broken PDF"),
    ]
    cw = [330, 515, 515]
    f, hf = bold(28), black(30)
    heights = [max(len(wrap(t, f, w - 40)) for t, w in zip(r, cw)) * 28 * 1.3 + 34 for r in rows]
    H = int(20 + 74 + 20 + 64 + sum(heights) + 30)
    img = Image.new("RGB", (W, H), "white")
    d = ImageDraw.Draw(img)
    d.rectangle([20, 20, W - 20, 94], fill="#212121")
    d.text((44, 34), "As-Is vs To-Be at a glance", font=black(38), fill="white")
    y = 114
    x = 20
    for (label, fill), w in zip([("", "#424242"), ("AS-IS  current smart form", PAIN[1]), ("TO-BE  new LC form", GAIN[1])], cw):
        d.rectangle([x, y, x + w - 4, y + 60], fill=fill)
        d.text((x + 20, y + 13), label, font=hf, fill="white")
        x += w
    y += 64
    for r, h in zip(rows, heights):
        x = 20
        for i, (t, w) in enumerate(zip(r, cw)):
            fill, color = [("#EEEEEE", INK), (PAIN[0], PAIN[2]), (GAIN[0], GAIN[2])][i]
            d.rectangle([x, y, x + w - 4, y + h - 4], fill=fill)
            for j, line in enumerate(wrap(t, f, w - 40)):
                d.text((x + 20, y + 15 + j * 28 * 1.3), line, font=f, fill=color)
            x += w
        y += h
    img.save(os.path.join(IMG, "s-compare.png"))


if __name__ == "__main__":
    swimlane("Current smart form", "AS-IS", PAIN[1], "Vendor", {
        "ask": (3, 0, "Raises a change request"),
        "edit": (1, 0, "Edits scripts in Adobe Designer"),
        "ext": (1, 1, "Adobe server adds Reader Extensions"),
        "test": (2, 1, "Bank tests the form, finds bugs"),
        "fill": (0, 2, "Fills in Adobe Reader, prints 4 PDF417"),
        "read": (3, 3, "Scans paper, splits values on '|'"),
    }, ["ask", "edit", "ext", "test", "fill", "read"], ("test", "edit", "BUGS"), [
        "Every change goes through the vendor",
        "Fix, re-extend, re-test loop",
        "Adobe only; long text cut to 400 chars",
        "Meaning by position, no version",
    ], PAIN, "s-asis.png")
    swimlane("New LC form", "TO-BE", GAIN[1], "In-house", {
        "ask": (3, 0, "Asks for a change"),
        "edit": (1, 0, "Edits one line in lc_form.py"),
        "build": (1, 1, "build.py checks file and PDF"),
        "test": (2, 1, "Opens in Acrobat, presses Check form"),
        "fill": (0, 2, "Fills in with live red boxes, prints QR"),
        "read": (3, 3, "read_qr.py re-checks every answer"),
    }, ["ask", "edit", "build", "test", "fill", "read"], None, [
        "One line, in-house, same day",
        "Broken PDF is never saved",
        "One QR code, answers by name",
        "QR read 100% in the test, 0.04 s",
    ], GAIN, "s-tobe.png")
    compare()
    print("done")

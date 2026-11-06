"""Write the XFA packets of an Adobe XFA PDF to xfa/<packet>.xml.

    pip install pypdf cryptography
    python tools/extract_xfa.py path/to/Trade-Smartform.pdf xfa

The form opens with an empty user password (its encryption only restricts editing),
so it is opened the same way any PDF viewer opens it.
"""
import sys
from pathlib import Path

from pypdf import PdfReader

pdf, out = sys.argv[1], Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
reader = PdfReader(pdf)
if reader.is_encrypted:
    reader.decrypt("")
xfa = reader.trailer["/Root"]["/AcroForm"].get_object()["/XFA"].get_object()
for i in range(0, len(xfa), 2):
    data = xfa[i + 1].get_object().get_data()
    (out / f"{xfa[i]}.xml").write_bytes(data)
    print(f"{xfa[i]}: {len(data):,} bytes")

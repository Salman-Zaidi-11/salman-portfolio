from pathlib import Path

content = b"BT\n/F1 18 Tf\n72 72 Td\n(Syed Salman) Tj\nET\n"
objects = [
    b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 144] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n",
    (
        b"4 0 obj\n<< /Length "
        + str(len(content)).encode("latin-1")
        + b" >>\nstream\n"
        + content
        + b"endstream\nendobj\n"
    ),
    b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
]

pdf = b"%PDF-1.4\n"
offsets = [0]
for obj in objects:
    offsets.append(len(pdf))
    pdf += obj

xref_start = len(pdf)
pdf += ("xref\n0 %d\n" % (len(objects) + 1)).encode("latin-1")
pdf += b"0000000000 65535 f \n"
for off in offsets[1:]:
    pdf += f"{off:010d} 00000 n \n".encode("latin-1")
pdf += (
    f"trailer\n<< /Root 1 0 R /Size {len(objects) + 1} >>\n"
    f"startxref\n{xref_start}\n%%EOF\n"
).encode("latin-1")

path = Path("public/resume.pdf")
path.parent.mkdir(parents=True, exist_ok=True)
path.write_bytes(pdf)
print(f"Created {path} ({path.stat().st_size} bytes)")

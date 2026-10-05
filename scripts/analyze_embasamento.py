import os
import sys
import json
from pathlib import Path
from pypdf import PdfReader

EMBASAMENTO_DIR = Path(r"C:\Users\bibli\Documents\Embasamento")

def scan_all_pdfs():
    results = []
    pdf_files = sorted(list(EMBASAMENTO_DIR.rglob("*.pdf")))
    print(f"Total PDFs found: {len(pdf_files)}")

    for idx, pdf_path in enumerate(pdf_files):
        rel_path = pdf_path.relative_to(EMBASAMENTO_DIR)
        print(f"[{idx+1}/{len(pdf_files)}] Reading {rel_path}...")
        try:
            reader = PdfReader(str(pdf_path))
            num_pages = len(reader.pages)
            
            # Extract first 3 pages and outline/metadata
            first_pages_text = ""
            for p in range(min(4, num_pages)):
                text = reader.pages[p].extract_text() or ""
                first_pages_text += f"\n--- PAGE {p+1} ---\n" + text

            meta = reader.metadata or {}
            title = meta.get("/Title", "") or ""
            author = meta.get("/Author", "") or ""
            subject = meta.get("/Subject", "") or ""

            results.append({
                "filename": pdf_path.name,
                "rel_path": str(rel_path),
                "num_pages": num_pages,
                "meta_title": str(title),
                "meta_author": str(author),
                "meta_subject": str(subject),
                "sample_text": first_pages_text[:3500]
            })
        except Exception as e:
            print(f"Error reading {pdf_path.name}: {e}")
            results.append({
                "filename": pdf_path.name,
                "rel_path": str(rel_path),
                "error": str(e)
            })

    output_path = Path("scripts/embasamento_catalog.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"Catalog saved to {output_path}")

if __name__ == "__main__":
    scan_all_pdfs()

import os
import sys
from pypdf import PdfReader

def inspect_corpus():
    dir_path = os.path.join("acervo-estudos", "Questões")
    if not os.path.exists(dir_path):
        print(f"Directory not found: {dir_path}")
        return

    files = sorted(os.listdir(dir_path))
    print(f"TOTAL_FILES: {len(files)}")
    sys.stdout.flush()

    for f in files:
        full_path = os.path.join(dir_path, f)
        size_mb = os.path.getsize(full_path) / (1024 * 1024)
        ext = os.path.splitext(f)[1].lower()
        if ext != ".pdf":
            print(f"FILE: {f} | SIZE: {size_mb:.2f} MB | TYPE: {ext} | PAGES: 0 | NATIVE: N/A | GABARITO: N/A")
            sys.stdout.flush()
            continue
        try:
            reader = PdfReader(full_path)
            num_pages = len(reader.pages)
            sample_text = ""
            # Inspect first 2 pages and last 2 pages
            pages_to_check = [0, 1] if num_pages >= 2 else [0]
            if num_pages > 2:
                pages_to_check.extend([num_pages - 2, num_pages - 1])
            for p_idx in set(pages_to_check):
                if p_idx < num_pages:
                    t = reader.pages[p_idx].extract_text() or ""
                    sample_text += t + " "
            char_count = len(sample_text.strip())
            is_native = "NATIVO" if char_count > 100 else "DIGITALIZADO/IMAGEM"
            has_gab = "SIM" if any(w in sample_text.lower() for w in ["gabarito", "resposta", "gabaritos", "certo", "errado"]) else "INCERTO/VERIFICAR"
            snippet = sample_text[:120].replace("\n", " ").replace("\r", " ").strip()
            print(f"FILE: {f} | SIZE: {size_mb:.2f} MB | PAGES: {num_pages} | TEXTO: {is_native} ({char_count}c) | GAB: {has_gab} | SNIPPET: {snippet[:80]}")
            sys.stdout.flush()
        except Exception as e:
            print(f"FILE: {f} | SIZE: {size_mb:.2f} MB | ERROR: {str(e)[:100]}")
            sys.stdout.flush()

if __name__ == "__main__":
    inspect_corpus()

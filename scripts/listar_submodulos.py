import glob
import os
import re

files = sorted(glob.glob("src/content/modules/**/*.ts", recursive=True))
sub_files = [f for f in files if "sub-" in os.path.basename(f)]

for sf in sub_files:
    with open(sf, "r", encoding="utf-8") as f:
        c = f.read()
    num = re.search(r"numero:\s*['\"]([^'\"]+)['\"]", c)
    tit = re.search(r"titulo:\s*['\"]([^'\"]+)['\"]", c)
    has_adl = "antesDeLer:" in c and len(re.findall(r"\{\s*termo:", c)) > 0
    
    # contagem de palavras
    m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`\s*,\s*(?:secoes|antesDeLer|checkpoints|prioridade)', c)
    if not m_md:
        m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`', c)
    words = len(m_md.group(1).split()) if m_md else 0
    
    # checkpoints
    cp_count = len(re.findall(r"id:\s*['\"][^'\"]*cp", c))
    if cp_count == 0:
        cp_count = len(re.findall(r"gabarito:\s*['\"][CE]['\"]", c))

    n_str = num.group(1) if num else "?"
    t_str = tit.group(1) if tit else "?"
    print(f"{n_str:<6} | {os.path.basename(sf):<12} | ADL: {str(has_adl):<5} | Palavras: {words:<5} | CP: {cp_count} | {t_str}")

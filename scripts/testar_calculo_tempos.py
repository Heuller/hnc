import glob
import os
import re

files = sorted(glob.glob("src/content/modules/**/*.ts", recursive=True))
sub_files = [f for f in files if "sub-" in os.path.basename(f)]

print(f"Total de submódulos: {len(sub_files)}")
tempos_calculados = []

for sf in sub_files:
    with open(sf, "r", encoding="utf-8") as f:
        c = f.read()
    
    num = re.search(r"numero:\s*['\"]([^'\"]+)['\"]", c)
    num_str = num.group(1) if num else "?"

    m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`\s*,\s*(?:secoes|antesDeLer|checkpoints|prioridade)', c)
    if not m_md:
        m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`', c)
    words = len(m_md.group(1).split()) if m_md else 0

    m_cps = re.search(r'checkpoints:\s*\[([\s\S]*?)\]\s*,\s*mnemonicos', c)
    if m_cps:
        cp_count = len(re.findall(r'\{\s*id:', m_cps.group(1)))
    else:
        cp_count = len(re.findall(r"gabarito:\s*['\"][CE]['\"]", c))
    
    m_old_tempo = re.search(r'tempoEstimadoMinutos:\s*(\d+)', c)
    old_tempo = int(m_old_tempo.group(1)) if m_old_tempo else 0

    novo_tempo = max(5, round(words / 180) + cp_count * 2)
    tempos_calculados.append((num_str, os.path.basename(sf), words, cp_count, old_tempo, novo_tempo))

print(f"{'Num':<6} | {'Arquivo':<12} | {'Palavras':<8} | {'CPs':<3} | {'Antigo':<6} | {'Novo':<4}")
print("-" * 55)
for n, f, w, cp, ot, nt in tempos_calculados[:10]:
    print(f"{n:<6} | {f:<12} | {w:<8} | {cp:<3} | {ot:<6} | {nt:<4} min")

print("...")
for n, f, w, cp, ot, nt in tempos_calculados[-5:]:
    print(f"{n:<6} | {f:<12} | {w:<8} | {cp:<3} | {ot:<6} | {nt:<4} min")

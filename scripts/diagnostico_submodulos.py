import glob
import re
import os

files = glob.glob("src/content/modules/**/*.ts", recursive=True)
sub_files = [f for f in files if "sub-" in os.path.basename(f)]
print(f"Total submódulos encontrados: {len(sub_files)}")

vazio_antes_de_ler = 0
tem_antes_de_ler = 0
tempos = []
palavras = []

for sf in sub_files:
    with open(sf, "r", encoding="utf-8") as f:
        c = f.read()
    
    # antesDeLer
    if "antesDeLer" in c:
        m_adl = re.search(r'antesDeLer:\s*\[([\s\S]*?)\]', c)
        if m_adl and m_adl.group(1).strip():
            tem_antes_de_ler += 1
        else:
            vazio_antes_de_ler += 1
    else:
        vazio_antes_de_ler += 1

    # tempo
    m_tempo = re.search(r'tempoEstimadoMinutos:\s*(\d+)', c)
    if m_tempo:
        tempos.append(int(m_tempo.group(1)))

    # palavras
    m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`', c)
    if m_md:
        w_count = len(m_md.group(1).split())
        palavras.append((os.path.basename(sf), w_count))

print(f"Antes de ler: presentes com conteúdo = {tem_antes_de_ler}, vazios ou ausentes = {vazio_antes_de_ler}")
print(f"Tempos estimados distintos: {set(tempos)}")
print(f"Total palavras na teoria somadas: {sum(w for _, w in palavras)}")
palavras.sort(key=lambda x: -x[1])
print("Top 5 submódulos mais longos:")
for name, w in palavras[:5]:
    print(f"  {name}: {w} palavras (~{w/180:.1f} min)")
print("Top 5 submódulos mais curtos:")
for name, w in palavras[-5:]:
    print(f"  {name}: {w} palavras (~{w/180:.1f} min)")

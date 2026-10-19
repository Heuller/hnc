import glob
import re
import os

files = glob.glob("src/content/modules/**/*.ts", recursive=True)
sub_files = [f for f in files if "sub-" in os.path.basename(f)]

palavras_reais = []
tempos = []
antes_de_ler_counts = []

for sf in sub_files:
    with open(sf, "r", encoding="utf-8") as f:
        c = f.read()
    
    # Pegar bloco teoriaDensaMarkdown
    # Inicia com teoriaDensaMarkdown:\s*` e termina com `,\s*checkpoints ou `,\s*secoes ou `,\s*antesDeLer
    m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`\s*,\s*(?:secoes|antesDeLer|checkpoints|prioridade)', c)
    if not m_md:
        m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`', c)
    
    txt = m_md.group(1) if m_md else ""
    w = len(txt.split())
    palavras_reais.append((os.path.basename(sf), w))

    # tempo
    m_tempo = re.search(r'tempoEstimadoMinutos:\s*(\d+)', c)
    if m_tempo:
        tempos.append((os.path.basename(sf), int(m_tempo.group(1))))

    # antesDeLer
    m_adl = re.search(r'antesDeLer:\s*\[([\s\S]*?)\]\s*,', c)
    if m_adl:
        # contar itens no array antesDeLer
        itens = len(re.findall(r'\{\s*termo:', m_adl.group(1)))
        antes_de_ler_counts.append((os.path.basename(sf), itens))
    else:
        antes_de_ler_counts.append((os.path.basename(sf), 0))

print(f"Total de submódulos: {len(sub_files)}")
print(f"Total de palavras no acervo teórico real: {sum(w for _, w in palavras_reais)}")

sem_adl = [name for name, count in antes_de_ler_counts if count == 0]
print(f"Submódulos com antesDeLer VAZIO ou AUSENTE: {len(sem_adl)} de {len(sub_files)}")
print(f"Exemplo dos que têm antesDeLer:")
for name, c in [(n, cnt) for n, cnt in antes_de_ler_counts if cnt > 0][:5]:
    print(f"  {name}: {c} termos")

palavras_reais.sort(key=lambda x: -x[1])
print("\nTop 5 submódulos mais extensos:")
for name, w in palavras_reais[:5]:
    print(f"  {name}: {w} palavras (~{w/180:.1f} min)")

print("\nTop 5 submódulos mais enxutos:")
for name, w in palavras_reais[-5:]:
    print(f"  {name}: {w} palavras (~{w/180:.1f} min)")

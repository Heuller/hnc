import json
import re

with open("archive/corpus_questoes_reais_cebraspe.json", "r", encoding="utf-8") as f:
    corpus = json.load(f)

print(f"Total de questões reais Cebraspe no corpus minerado: {len(corpus)}")

# 1. Distribuição de gabarito geral no corpus real
c_count = sum(1 for q in corpus if q.get("gabarito") == "C")
e_count = sum(1 for q in corpus if q.get("gabarito") == "E")
print(f"Gabaritos reais: Certo = {c_count} ({c_count/len(corpus)*100:.1f}%), Errado = {e_count} ({e_count/len(corpus)*100:.1f}%)")

# 2. Medir quantificadores absolutos no corpus real Cebraspe
# Termos citados no relatório da Missão v2:
# sempre, nunca, somente, apenas, exclusivamente, todos, nenhum, jamais, unicamente
quant_pattern = re.compile(r'\b(sempre|nunca|somente|apenas|exclusivamente|todos|todas|nenhum|nenhuma|jamais|unicamente)\b', re.IGNORECASE)

com_quant = []
for q in corpus:
    text = q.get("item", "")
    if quant_pattern.search(text):
        com_quant.append(q)

q_c = sum(1 for q in com_quant if q.get("gabarito") == "C")
q_e = sum(1 for q in com_quant if q.get("gabarito") == "E")
print(f"Itens com quantificadores absolutos no corpus real: {len(com_quant)} ({len(com_quant)/len(corpus)*100:.1f}%)")
print(f"  Gabarito com quantificadores no mundo REAL: Certo = {q_c} ({q_c/len(com_quant)*100:.1f}%), Errado = {q_e} ({q_e/len(com_quant)*100:.1f}%)")

# 3. Distribuição por módulo
dist = {}
for q in corpus:
    m = q.get("modulo", "outros")
    dist[m] = dist.get(m, 0) + 1

print("\nDistribuição por Módulo no Corpus Real:")
for k in sorted(dist.keys()):
    print(f"  {k}: {dist[k]} questões")

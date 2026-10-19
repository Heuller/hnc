import glob
import os
import re
import sys
sys.path.append('.')
from scripts.dados_antes_de_ler import DADOS_ANTES_DE_LER

files = sorted(glob.glob("src/content/modules/**/*.ts", recursive=True))
sub_files = [f for f in files if "sub-" in os.path.basename(f)]

sem_adl = []
for sf in sub_files:
    with open(sf, "r", encoding="utf-8") as f:
        c = f.read()
    num = re.search(r"numero:\s*['\"]([^'\"]+)['\"]", c)
    has_adl = "antesDeLer:" in c and len(re.findall(r"\{\s*termo:", c)) > 0
    if not has_adl and num:
        sem_adl.append((num.group(1), os.path.basename(sf)))

missing = [n for n, f in sem_adl if n not in DADOS_ANTES_DE_LER]
print("Total sem ADL no código:", len(sem_adl))
print("Total no dicionário:", len(DADOS_ANTES_DE_LER))
print("Faltam no dicionário:", missing)

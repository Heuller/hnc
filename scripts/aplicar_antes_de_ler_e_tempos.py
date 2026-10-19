import glob
import os
import re
import sys
sys.path.append('.')
from scripts.dados_antes_de_ler import DADOS_ANTES_DE_LER

files = sorted(glob.glob("src/content/modules/**/*.ts", recursive=True))
sub_files = [f for f in files if "sub-" in os.path.basename(f)]

def escape_js_str(s: str) -> str:
    # escapa aspas simples para JS/TS
    s_clean = s.replace("\\", "\\\\").replace("'", "\\'")
    return f"'{s_clean}'"

def format_antes_de_ler_ts(termos: list) -> str:
    linhas = ["  antesDeLer: ["]
    for t in termos:
        linhas.append("    {")
        linhas.append(f"      termo: {escape_js_str(t['termo'])},")
        linhas.append(f"      definicao: {escape_js_str(t['definicao'])},")
        linhas.append(f"      exemploBiblioteca: {escape_js_str(t['exemploBiblioteca'])},")
        linhas.append("    },")
    linhas.append("  ],")
    return "\n".join(linhas)

modificados_adl = 0
modificados_tempo = 0

for sf in sub_files:
    with open(sf, "r", encoding="utf-8") as f:
        content = f.read()
    
    num_match = re.search(r"numero:\s*['\"]([^'\"]+)['\"]", content)
    if not num_match:
        print(f"Aviso: número não encontrado em {sf}")
        continue
    
    num = num_match.group(1)

    # 1. Calcular tempo estimado dinâmico
    m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`\s*,\s*(?:secoes|antesDeLer|checkpoints|prioridade)', content)
    if not m_md:
        m_md = re.search(r'teoriaDensaMarkdown:\s*`([\s\S]*?)`', content)
    words = len(m_md.group(1).split()) if m_md else 0

    m_cps = re.search(r'checkpoints:\s*\[([\s\S]*?)\]\s*,\s*mnemonicos', content)
    if m_cps:
        cp_count = len(re.findall(r'\{\s*id:', m_cps.group(1)))
    else:
        cp_count = len(re.findall(r"gabarito:\s*['\"][CE]['\"]", content))
    
    novo_tempo = max(5, round(words / 180) + cp_count * 2)

    # Substituir tempoEstimadoMinutos
    novo_content = re.sub(
        r'tempoEstimadoMinutos:\s*\d+',
        f'tempoEstimadoMinutos: {novo_tempo}',
        content
    )
    if novo_content != content:
        modificados_tempo += 1
        content = novo_content

    # 2. Injetar antesDeLer se for um dos 69 que precisam
    has_adl = "antesDeLer:" in content and len(re.findall(r"\{\s*termo:", content)) > 0
    if not has_adl and num in DADOS_ANTES_DE_LER:
        bloco_adl = format_antes_de_ler_ts(DADOS_ANTES_DE_LER[num])
        
        # Local de inserção: logo antes de descricaoCurta:
        if "descricaoCurta:" in content:
            novo_content = content.replace("  descricaoCurta:", f"{bloco_adl}\n  descricaoCurta:")
        elif "tempoEstimadoMinutos:" in content:
            novo_content = content.replace("  tempoEstimadoMinutos:", f"{bloco_adl}\n  tempoEstimadoMinutos:")
        else:
            print(f"Erro: ponto de inserção de antesDeLer não encontrado em {sf}")
            continue

        if novo_content != content:
            modificados_adl += 1
            content = novo_content

    # Salvar arquivo atualizado
    with open(sf, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Sucesso! Submódulos com tempo atualizado: {modificados_tempo}")
print(f"Sucesso! Submódulos com antesDeLer injetado: {modificados_adl}")

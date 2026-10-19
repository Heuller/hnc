import pypdf
import re
import json
import glob
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def limpar_texto(t):
    if not t:
        return ''
    t = re.sub(r'(\w+)-\s*\n\s*(\w+)', r'\1\2', t)
    t = t.replace('\xad', '').replace('\u00ad', '').replace('­', '')
    t = re.sub(r'\r\n|\r|\n', ' ', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t

def inferir_modulo(texto, assunto, nome_arquivo):
    t_full = (texto + " " + assunto + " " + nome_arquivo).lower()
    
    # M13 - Português
    if 'língua portuguesa' in t_full or 'português' in t_full or 'concordância' in t_full or 'crase' in t_full or 'pontuação' in t_full:
        return 'M13'
    # M12 - Inglês
    if 'língua inglesa' in t_full or 'inglesa' in t_full or 'english' in t_full or 'according to the text' in t_full or 'the word' in t_full:
        return 'M12'
    # M11 - Direito Administrativo
    if 'direito administrativo' in t_full or '8.112' in t_full or '8112' in t_full or 'ato administrativo' in t_full or 'improbidade' in t_full or 'licitação' in t_full or '14.133' in t_full:
        return 'M11'
    # M10 - Legislação, Regimento Interno, Direito Constitucional aplicado
    if 'regimento interno' in t_full or 'ricd' in t_full or 'processo legislativo' in t_full or 'deputados' in t_full or 'mesa diretora' in t_full or 'comissão mista' in t_full:
        return 'M10'
    # M14 - TI, Segurança, Dados, Redes
    if 'criptografia' in t_full or 'firewall' in t_full or 'malware' in t_full or 'segurança da informação' in t_full or 'sql' in t_full or 'banco de dados' in t_full:
        return 'M14'
    # M2 - Catalogação, AACR2, RDA, MARC 21, FRBR, Dublin Core
    if 'catalogação' in t_full or 'aacr' in t_full or 'rda' in t_full or 'marc 21' in t_full or 'marc21' in t_full or 'frbr' in t_full or 'lrm' in t_full or 'dublin core' in t_full:
        return 'M2'
    # M3 - Classificação, CDD, CDU, CDDir, Tesauros
    if 'classificação decimal' in t_full or 'cdd' in t_full or 'cdu' in t_full or 'cddir' in t_full or 'cutter' in t_full or 'tabela de cutter' in t_full:
        return 'M3'
    # M4 - Recuperação, Indexação, Fontes, Serviços de Referência
    if 'recuperação da informação' in t_full or 'serviço de referência' in t_full or 'estudo de usuários' in t_full or 'dsi' in t_full or 'disseminação seletiva' in t_full or 'álgebra booleana' in t_full or 'precisão e revocação' in t_full:
        return 'M4'
    # M5 - Gestão, Planejamento, Coleções
    if 'desenvolvimento de coleções' in t_full or 'planejamento' in t_full or 'avaliação de coleções' in t_full or 'desbaste' in t_full or 'marketing' in t_full:
        return 'M5'
    # M6 - Digital, Repositórios, IA, OAI-PMH
    if 'biblioteca digital' in t_full or 'repositório institucional' in t_full or 'dspace' in t_full or 'oai-pmh' in t_full or 'inteligência artificial' in t_full or 'interoperabilidade' in t_full or 'koha' in t_full:
        return 'M6'
    # M7 - Preservação, Conservação, Restauração, OAIS
    if 'preservação' in t_full or 'conservação' in t_full or 'restauração' in t_full or 'degradação' in t_full or 'oais' in t_full or 'higienização' in t_full or 'fungos' in t_full or 'traças' in t_full:
        return 'M7'
    # M8 - Normalização, ABNT
    if 'nbr' in t_full or 'abnt' in t_full or '6023' in t_full or '10520' in t_full or '14724' in t_full or 'resumo' in t_full or 'citação' in t_full or 'referências' in t_full:
        return 'M8'
    # M9 - Comunicação Científica, Bibliometria
    if 'bibliometria' in t_full or 'fator de impacto' in t_full or 'índice h' in t_full or 'bradford' in t_full or 'lotka' in t_full or 'zipf' in t_full or 'comunicação científica' in t_full or 'acesso aberto' in t_full:
        return 'M9'
    # M1 - Fundamentos
    if 'biblioteconomia' in t_full or 'ciência da informação' in t_full or 'documentação' in t_full or 'ranganathan' in t_full or 'código de ética' in t_full or 'otlet' in t_full or 'lei 4.084' in t_full:
        return 'M1'

    return 'M1'

def extrair_todos():
    corpus = []
    
    # 1. Extração do CAD CESPE
    cad_path = 'acervo-estudos/Questões/CAD CESPE.pdf'
    if os.path.exists(cad_path):
        print(f"Lendo {cad_path}...")
        reader = pypdf.PdfReader(cad_path)
        total_pages = len(reader.pages)
        texto_completo = ""
        for idx in range(4, total_pages):
            texto_pagina = reader.pages[idx].extract_text() or ""
            texto_pagina = re.sub(r'PAPIRVM BIBLIOTECONOMIA ESQUEMATIZADA \d+', '', texto_pagina)
            texto_pagina = re.sub(r'Capítulo: [^\n]+', '', texto_pagina)
            texto_pagina = re.sub(r'ANOTAÇÕES:', '', texto_pagina)
            texto_completo += "\n" + texto_pagina

        linhas = texto_completo.split('\n')
        ultimo_orgao_ano = "Cebraspe"
        ultimo_contexto = ""
        item_num_atual = None
        item_texto_atual = ""
        itens_pendentes = []
        
        for l in linhas:
            l_str = l.strip()
            if not l_str:
                continue
            m_orgao = re.match(r'^\(([A-Z0-9\-\s/]{3,30})\)\s*(.*)', l_str)
            if m_orgao:
                ultimo_orgao_ano = m_orgao.group(1).strip()
                ultimo_contexto = m_orgao.group(2).strip()
                continue
            m_gab = re.match(r'^GABARITO:\s*([CEX\s\-]+)', l_str, re.IGNORECASE)
            if m_gab:
                if item_num_atual is not None and item_texto_atual:
                    itens_pendentes.append({
                        'numero': item_num_atual,
                        'orgao_ano': ultimo_orgao_ano,
                        'contexto': ultimo_contexto,
                        'item': limpar_texto(item_texto_atual),
                    })
                    item_num_atual = None
                    item_texto_atual = ""
                gabs_raw = re.findall(r'[CE]', m_gab.group(1).upper())
                for idx, g in enumerate(gabs_raw):
                    if idx < len(itens_pendentes):
                        item_obj = itens_pendentes[idx]
                        modulo = inferir_modulo(item_obj['item'], item_obj['contexto'], 'CAD CESPE')
                        corpus.append({
                            'id': f"cespe-cad-{len(corpus)+1}",
                            'banca': 'Cebraspe',
                            'orgao_ano': item_obj['orgao_ano'],
                            'contexto': item_obj['contexto'],
                            'item': item_obj['item'],
                            'gabarito': g,
                            'modulo': modulo,
                            'fonteArquivo': 'CAD CESPE.pdf'
                        })
                itens_pendentes = []
                continue
            m_item = re.match(r'^(\d+)\.\s+(.*)', l_str)
            if m_item:
                if item_num_atual is not None and item_texto_atual:
                    itens_pendentes.append({
                        'numero': item_num_atual,
                        'orgao_ano': ultimo_orgao_ano,
                        'contexto': ultimo_contexto,
                        'item': limpar_texto(item_texto_atual),
                    })
                item_num_atual = int(m_item.group(1))
                item_texto_atual = m_item.group(2)
            else:
                if item_num_atual is not None:
                    item_texto_atual += " " + l_str

    print(f"Total após CAD CESPE: {len(corpus)}")

    # 2. Extração dos cadernos Tec Concursos
    tec_files = glob.glob('acervo-estudos/Questões/Tec Concursos*.PDF') + glob.glob('acervo-estudos/Questões/Tec Concursos*.pdf')
    print(f"Encontrados {len(tec_files)} arquivos Tec Concursos...")
    
    for tec_path in tec_files:
        try:
            reader = pypdf.PdfReader(tec_path)
            total_pages = len(reader.pages)
            if total_pages < 2:
                continue
            # Gabarito nas últimas páginas
            texto_fim = ""
            for p in range(max(0, total_pages - 3), total_pages):
                texto_fim += "\n" + (reader.pages[p].extract_text() or "")
            m_gab = re.search(r'Gabarito\s*\n', texto_fim, re.IGNORECASE)
            if not m_gab:
                continue
            gabaritos_raw = texto_fim[m_gab.end():]
            pares = re.findall(r'(\d+)\)\s*([A-Za-z]+)', gabaritos_raw)
            mapa_gabs = {}
            for n_str, g_str in pares:
                g_up = g_str.upper()
                if g_up == 'CERTO':
                    mapa_gabs[int(n_str)] = 'C'
                elif g_up == 'ERRADO':
                    mapa_gabs[int(n_str)] = 'E'

            # Páginas de questões
            texto_q = ""
            for p in range(total_pages):
                t = reader.pages[p].extract_text() or ""
                if 'Gabarito' in t and p >= total_pages - 3:
                    t = t.split('Gabarito')[0]
                texto_q += "\n" + t

            blocos = re.split(r'www\.tecconcursos\.com\.br/questoes/\d+', texto_q)
            nome_arq = os.path.basename(tec_path)
            for i, b in enumerate(blocos[1:], 1):
                if 'CEBRASPE' not in b and 'CESPE' not in b:
                    continue
                m_cab = re.search(r'CEBRASPE\s*\([^\)]+\)\s*-\s*([^\n]+)', b)
                cabecalho = m_cab.group(1).strip() if m_cab else "Cebraspe"
                texto_item = b[m_cab.end():] if m_cab else b
                m_opc = re.search(r'\n\s*Certo\s*\n\s*Errado', texto_item, re.IGNORECASE)
                if not m_opc:
                    continue
                item_limpo = limpar_texto(texto_item[:m_opc.start()])
                gab = mapa_gabs.get(i)
                if gab and len(item_limpo) > 20:
                    modulo = inferir_modulo(item_limpo, cabecalho, nome_arq)
                    corpus.append({
                        'id': f"cespe-tec-{len(corpus)+1}",
                        'banca': 'Cebraspe',
                        'orgao_ano': cabecalho,
                        'contexto': '',
                        'item': item_limpo,
                        'gabarito': gab,
                        'modulo': modulo,
                        'fonteArquivo': nome_arq
                    })
        except Exception as e:
            print(f"Erro ao processar {tec_path}: {e}")

    print(f"\n=== EXTRAÇÃO CONCLUÍDA ===")
    print(f"Total de itens no corpus Cebraspe real: {len(corpus)}")

    # Salva no arquivo canônico fora do bundle
    out_path = 'archive/corpus_questoes_reais_cebraspe.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(corpus, f, ensure_ascii=False, indent=2)
    print(f"Corpus salvo em: {out_path} ({os.path.getsize(out_path) / (1024*1024):.2f} MB)")

    # Distribuição por módulo
    mod_counts = {}
    for item in corpus:
        m = item['modulo']
        mod_counts[m] = mod_counts.get(m, 0) + 1
    
    print("\nDistribuição de questões reais Cebraspe por módulo:")
    for m in sorted(mod_counts.keys()):
        print(f"- {m}: {mod_counts[m]} questões reais")

extrair_todos()

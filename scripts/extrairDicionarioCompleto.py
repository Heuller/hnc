import sys
import os
import pypdf
import re
import json
import unicodedata

sys.stdout.reconfigure(encoding='utf-8')

PDF_PATH = r'c:\Users\bibli\Downloads\LIVRO_DicionarioBiblioteconomiaArquivologia.pdf'
OUTPUT_JSON = r'src/content/glossario/dicionario.json'
FALHAS_MD = r'docs/relatorios/glossario_falhas.md'

OBRA_INFO = {
    'obra': 'Dicionário de Biblioteconomia e Arquivologia',
    'autores': 'Murilo Bastos da Cunha, Cordélia Robalinho de Oliveira Cavalcanti',
    'editora': 'Briquet de Lemos',
    'ano': 2008
}

def slugify(text):
    if text.strip() == '@':
        return 'arroba'
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = re.sub(r'[^\w\s-]', '', text.lower())
    text = re.sub(r'[-\s]+', '-', text).strip('-')
    return text or 'item'

def clean_hyphens(text):
    # Remove soft hyphen character (\xad)
    text = text.replace('\xad', '').replace('\u00ad', '').replace('­', '')
    # Normalize multiple whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_all_raw_entries(reader, start_p=19, end_p=400):
    all_entries = []
    current_entry = None
    mid = 198.0

    for p_idx in range(start_p, end_p + 1):
        book_page = p_idx - 18
        page = reader.pages[p_idx]

        for col_idx in [0, 1]:
            lines = {}
            def visitor(text, cm, tm, fontDict, fontSize):
                y = round(tm[5], 1)
                x = round(tm[4], 1)
                if 15.0 <= y <= 580.0 and text.strip():
                    if (col_idx == 0 and x < mid) or (col_idx == 1 and x >= mid):
                        font = str(fontDict.get('/BaseFont', '')) if fontDict else ''
                        is_bold = 'Bold' in font or 'bold' in font
                        is_italic = 'Italic' in font or 'italic' in font
                        lines.setdefault(y, []).append((x, text, is_bold, is_italic, fontSize))

            page.extract_text(visitor_text=visitor)
            sorted_y = sorted(lines.keys(), reverse=True)
            if not sorted_y:
                continue

            all_x0 = [sorted(lines[y], key=lambda it: it[0])[0][0] for y in sorted_y]
            min_x = min(all_x0)

            for y in sorted_y:
                line_items = sorted(lines[y], key=lambda it: it[0])
                # Skip letter headings like 'A', 'B' (fontSize >= 12.0)
                if len(line_items) == 1 and line_items[0][4] >= 12.0 and len(line_items[0][1].strip()) <= 2:
                    continue

                x0 = line_items[0][0]
                is_new_entry = (x0 - min_x) >= 3.5

                if is_new_entry:
                    if current_entry:
                        all_entries.append(current_entry)
                    current_entry = {
                        'page': book_page,
                        'lines': [line_items]
                    }
                else:
                    if current_entry:
                        current_entry['lines'].append(line_items)
                    else:
                        current_entry = {
                            'page': book_page,
                            'lines': [line_items]
                        }

    if current_entry:
        all_entries.append(current_entry)

    return all_entries

def parse_entry(e):
    first_line = e['lines'][0]
    first_line_text = clean_hyphens(''.join([it[1] for it in first_line]))
    
    # Reconstruct all text while respecting hyphenation
    raw_lines = [''.join([it[1] for it in l]).strip() for l in e['lines']]
    combined_text = ''
    for i, l in enumerate(raw_lines):
        if not combined_text:
            combined_text = l
        elif combined_text.endswith('-') or combined_text.endswith('\xad'):
            combined_text = combined_text[:-1] + l
        else:
            combined_text += ' ' + l
    all_text = clean_hyphens(combined_text)
    page_num = e['page']

    termo = ''
    variantes = []
    remissivas = []
    definicao = ''

    # Case 1: Remissiva com '=>' (não precedida de '<')
    if re.search(r'(?<!<)=>\s*', first_line_text):
        parts = re.split(r'(?<!<)=>\s*', all_text, maxsplit=1)
        termo = parts[0].strip()
        alvo = parts[1].strip().rstrip('.')
        # Extract individual targets
        raw_targets = re.split(r'[,;]\s*(?:[a-z]\.\s*)?', alvo)
        for t in raw_targets:
            cleaned = re.sub(r'^[a-z]\.\s*', '', t.strip())
            cleaned = re.sub(r'\s*=>.*$', '', cleaned).strip()
            if cleaned and cleaned not in remissivas:
                remissivas.append(cleaned)
        definicao = f"=> {alvo}."
        return {
            'termo': termo,
            'variantes': variantes,
            'remissivas': remissivas,
            'definicao': definicao,
            'page': page_num
        }

    # Case 2: Italic English/foreign term on first line
    italic_idx = -1
    for idx, it in enumerate(first_line):
        if it[3] and it[1].strip(): # is_italic
            italic_idx = idx
            break

    if italic_idx > 0:
        termo_tokens = first_line[:italic_idx]
        termo = clean_hyphens(''.join([it[1] for it in termo_tokens]))
        italic_tokens = []
        rest_idx = italic_idx
        while rest_idx < len(first_line) and first_line[rest_idx][3]:
            italic_tokens.append(first_line[rest_idx][1])
            rest_idx += 1
        ing = clean_hyphens(''.join(italic_tokens))
        if ing:
            variantes.append(ing)

        rest_first_line = ''.join([it[1] for it in first_line[rest_idx:]]).strip()
        other_lines = [''.join([it[1] for it in l]).strip() for l in e['lines'][1:]]
        def_raw = clean_hyphens(' '.join([rest_first_line] + other_lines))
        
        # Check for see-also (<=>)
        if '<=>' in def_raw:
            parts = def_raw.split('<=>', 1)
            definicao = parts[0].strip()
            see_also = parts[1].strip().rstrip('.')
            for sa in re.split(r'[,;]\s*', see_also):
                sa_clean = sa.strip()
                if sa_clean and sa_clean not in remissivas:
                    remissivas.append(sa_clean)
        else:
            definicao = def_raw

        return {
            'termo': termo,
            'variantes': variantes,
            'remissivas': remissivas,
            'definicao': definicao,
            'page': page_num
        }

    # Case 3: Bold headword
    bold_tokens = []
    rest_idx = 0
    for idx, it in enumerate(first_line):
        if it[2] and it[1].strip(): # is_bold
            bold_tokens.append(it[1])
            rest_idx = idx + 1
        else:
            if bold_tokens:
                break

    if bold_tokens:
        termo = clean_hyphens(''.join(bold_tokens))
        rest_first_line = ''.join([it[1] for it in first_line[rest_idx:]]).strip()
        other_lines = [''.join([it[1] for it in l]).strip() for l in e['lines'][1:]]
        def_raw = clean_hyphens(' '.join([rest_first_line] + other_lines))

        if '<=>' in def_raw:
            parts = def_raw.split('<=>', 1)
            definicao = parts[0].strip()
            see_also = parts[1].strip().rstrip('.')
            for sa in re.split(r'[,;]\s*', see_also):
                sa_clean = sa.strip()
                if sa_clean and sa_clean not in remissivas:
                    remissivas.append(sa_clean)
        else:
            definicao = def_raw

        return {
            'termo': termo,
            'variantes': variantes,
            'remissivas': remissivas,
            'definicao': definicao,
            'page': page_num
        }

    # Fallback: first 2 words
    words = all_text.split()
    termo = ' '.join(words[:2]) if len(words) >= 2 else all_text
    def_raw = ' '.join(words[2:]) if len(words) > 2 else ''
    if '<=>' in def_raw:
        parts = def_raw.split('<=>', 1)
        definicao = parts[0].strip()
        see_also = parts[1].strip().rstrip('.')
        for sa in re.split(r'[,;]\s*', see_also):
            sa_clean = sa.strip()
            if sa_clean and sa_clean not in remissivas:
                remissivas.append(sa_clean)
    else:
        definicao = def_raw

    return {
        'termo': termo,
        'variantes': variantes,
        'remissivas': remissivas,
        'definicao': definicao,
        'page': page_num
    }

def main():
    print(f'Abrindo arquivo PDF: {PDF_PATH}')
    reader = pypdf.PdfReader(PDF_PATH)
    total_pages = len(reader.pages)
    print(f'Total de páginas no PDF: {total_pages}. Extraindo páginas 19 a 400 (miolo A-Z)...')

    raw_entries = extract_all_raw_entries(reader, 19, 400)
    print(f'Segmentação preliminar: {len(raw_entries)} blocos identificados.')

    verbetes_publicados = []
    falhas = []
    used_ids = set()
    termos_set = set()

    # Letter counter for distribution
    letras_dist = {}

    for idx, raw in enumerate(raw_entries):
        p = parse_entry(raw)
        termo = p['termo'].strip()
        definicao = p['definicao'].strip()
        page = p['page']

        # Validation rules:
        # 1. Termo e definição não vazios
        if not termo or not definicao:
            falhas.append({
                'pagina': page,
                'termo': termo or '[TERMO_VAZIO]',
                'motivo': 'Termo ou definição vazios após segmentação.'
            })
            continue

        # 2. Termo não pode ser excessivamente longo (> 85 caracteres)
        if len(termo) > 85:
            falhas.append({
                'pagina': page,
                'termo': termo[:40] + '...',
                'motivo': f'Termo anormalmente longo ({len(termo)} caracteres) - provável fusão de linhas.'
            })
            continue

        # 3. Definição mínima (para verbetes conceituais)
        if not definicao.startswith('=>') and len(definicao) < 8:
            falhas.append({
                'pagina': page,
                'termo': termo,
                'motivo': f'Definição muito curta ({len(definicao)} caracteres) sem ser remissiva.'
            })
            continue

        # 4. Generate clean, guaranteed-unique ID
        base_slug = slugify(termo)
        verbete_id = base_slug
        count = 1
        while verbete_id in used_ids:
            count += 1
            verbete_id = f'{base_slug}-{count}'
        used_ids.add(verbete_id)

        primeira_letra = unicodedata.normalize('NFKD', termo[:1]).upper()
        if 'A' <= primeira_letra <= 'Z':
            letras_dist[primeira_letra] = letras_dist.get(primeira_letra, 0) + 1

        termos_set.add(termo.lower())

        verbete = {
            'id': verbete_id,
            'termo': termo,
            'variantes': p['variantes'],
            'definicao': definicao,
            'remissivas': p['remissivas'],
            'fonte': {
                'obra': OBRA_INFO['obra'],
                'autores': OBRA_INFO['autores'],
                'editora': OBRA_INFO['editora'],
                'ano': OBRA_INFO['ano'],
                'pagina': page
            }
        }
        verbetes_publicados.append(verbete)

    # Cross-reference check: identify orphan remissivas
    orfas = []
    for v in verbetes_publicados:
        for rem in v['remissivas']:
            rem_norm = rem.lower()
            # Check if target exists directly or as substring
            if rem_norm not in termos_set and not any(rem_norm in t for t in termos_set):
                orfas.append({
                    'termoOrigem': v['termo'],
                    'remissivaOrfa': rem,
                    'pagina': v['fonte']['pagina']
                })

    # Ensure output dir exists
    os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)
    os.makedirs(os.path.dirname(FALHAS_MD), exist_ok=True)

    print(f'Salvando {len(verbetes_publicados)} verbetes publicados em {OUTPUT_JSON}...')
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(verbetes_publicados, f, ensure_ascii=False, indent=2)

    total_extraidos = len(verbetes_publicados) + len(falhas)
    taxa_falhas = (len(falhas) / total_extraidos * 100) if total_extraidos else 0

    print(f'Gerando relatório de falhas em {FALHAS_MD}...')
    with open(FALHAS_MD, 'w', encoding='utf-8') as f:
        f.write('# Relatório de Extração e Validação do Dicionário (U3.9)\n\n')
        f.write('## 1. Metadados da Obra Fonte\n')
        f.write(f"- **Obra:** {OBRA_INFO['obra']}\n")
        f.write(f"- **Autores:** {OBRA_INFO['autores']}\n")
        f.write(f"- **Editora:** {OBRA_INFO['editora']}\n")
        f.write(f"- **Ano:** {OBRA_INFO['ano']}\n")
        f.write(f"- **Páginas analisadas:** 1 a 382 (Parte 1: A-Z)\n\n")

        f.write('## 2. Estatísticas Gerais de Extração\n')
        f.write(f"- **Total de verbetes válidos e publicados:** {len(verbetes_publicados)}\n")
        f.write(f"- **Total de verbetes com extração duvidosa/descartados:** {len(falhas)}\n")
        f.write(f"- **Taxa de falhas:** {taxa_falhas:.2f}%\n")
        f.write(f"- **Remissivas órfãs detectadas:** {len(orfas)}\n\n")

        f.write('## 3. Distribuição de Verbetes por Letra\n\n')
        f.write('| Letra | Total de Verbetes |\n')
        f.write('| :---: | :---: |\n')
        for letra in sorted(letras_dist.keys()):
            f.write(f'| **{letra}** | {letras_dist[letra]} |\n')
        f.write('\n')

        f.write('## 4. Registro de Falhas Descartadas (Não Publicadas)\n\n')
        if not falhas:
            f.write('Nenhuma falha de extração registrada. Todos os verbetes atenderam aos critérios automáticos.\n\n')
        else:
            f.write('| Página | Termo Detectado | Motivo do Descarte |\n')
            f.write('| :---: | :--- | :--- |\n')
            for fl in falhas[:200]: # Cap first 200 in report
                f.write(f"| p. {fl['pagina']} | `{fl['termo']}` | {fl['motivo']} |\n")
            if len(falhas) > 200:
                f.write(f'\n*(Mais {len(falhas) - 200} falhas omitidas no relatório por brevidade)*\n\n')

        f.write('\n## 5. Amostra de Remissivas Órfãs (para Auditoria)\n\n')
        f.write('| Termo de Origem | Remissiva Apontada | Página |\n')
        f.write('| :--- | :--- | :---: |\n')
        for orf in orfas[:50]:
            f.write(f"| {orf['termoOrigem']} | `{orf['remissivaOrfa']}` | p. {orf['pagina']} |\n")

    print('\n================ RESUMO DA EXTRAÇÃO ================')
    print(f'Verbetes publicados: {len(verbetes_publicados)}')
    print(f'Falhas descartadas:  {len(falhas)} ({taxa_falhas:.2f}%)')
    print(f'Remissivas órfãs:    {len(orfas)}')
    print(f'Arquivo gerado:      {OUTPUT_JSON} ({os.path.getsize(OUTPUT_JSON) / 1024 / 1024:.2f} MB)')
    print('====================================================\n')

if __name__ == '__main__':
    main()

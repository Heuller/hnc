import os
import re
import json
from pypdf import PdfReader

BASE_DIR = r"C:\Users\bibli\Documents\Provas CEBRASPE"

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'[\r\n]+', ' ', text)
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

def parse_cebraspe_grid(text):
    mapping = {}
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    for i, line in enumerate(lines):
        # Encontra todos os números na linha
        raw_nums = re.findall(r'\b\d+\b', line)
        nums = [int(n) for n in raw_nums if 0 < int(n) <= 200]
        if nums and len(nums) >= 2:
            start_num = nums[0]
            end_num = nums[-1]
            expected_count = end_num - start_num + 1
            if 3 <= expected_count <= 25 and i + 1 < len(lines):
                next_line = lines[i+1]
                letters = [c for c in next_line.upper() if c in ['C', 'E', 'X']]
                if len(letters) >= expected_count:
                    letters = letters[:expected_count]
                    for idx, let in enumerate(letters):
                        mapping[start_num + idx] = let
                        
    # Complemento caso algum bloco use o formato clássico "(\d{1,3})\s+([CEX])\b"
    pairs = re.findall(r'\b(\d{1,3})\s+([CEX])\b', text)
    for n_str, g in pairs:
        n = int(n_str)
        if n not in mapping:
            mapping[n] = g
            
    return mapping

def extract_from_cad_cespe():
    cad_path = os.path.join(BASE_DIR, "CAD CESPE.pdf")
    if not os.path.exists(cad_path):
        return []
    
    print("Processando CAD CESPE.pdf (1.900+ questões)...")
    reader = PdfReader(cad_path)
    full_text = ""
    for idx, page in enumerate(reader.pages):
        full_text += f"\n--- PAGE {idx+1} ---\n" + page.extract_text()
        
    lines = full_text.split('\n')
    current_context = ""
    current_concurso = ""
    current_capitulo = "MÓDULO 1 – INTRODUÇÃO À BIBLIOTECONOMIA E CIÊNCIA DA INFORMAÇÃO"
    
    item_pattern = re.compile(r'^\s*(\d{1,4})\.\s+(.*)')
    concurso_pattern = re.compile(r'\(([A-Z0-9_\-\/]+)\/(\d{4})\)\s*(.*)')
    gabarito_pattern = re.compile(r'GABARITO:\s*([C|E|X|\-|\s]+)', re.IGNORECASE)
    capitulo_pattern = re.compile(r'Cap[íi]tulo:\s*(M[ÓO]DULO\s*\d+[^-\n]*)', re.IGNORECASE)
    subcapitulo_pattern = re.compile(r'^\s*(\d\.\d\.\s*-[^\n]+)')
    
    questions = []
    current_items_buffer = []
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        cap_match = capitulo_pattern.search(line)
        if cap_match:
            current_capitulo = cap_match.group(1).strip()
            
        sub_match = subcapitulo_pattern.match(line)
        if sub_match:
            current_capitulo += " - " + sub_match.group(1).strip()
        
        conc_match = concurso_pattern.search(line)
        if conc_match:
            current_concurso = f"{conc_match.group(1)}/{conc_match.group(2)}"
            current_context = conc_match.group(3).strip()
        
        item_match = item_pattern.match(line)
        if item_match:
            num = int(item_match.group(1))
            item_text = item_match.group(2).strip()
            j = i + 1
            while j < len(lines):
                next_l = lines[j].strip()
                if item_pattern.match(next_l) or gabarito_pattern.search(next_l) or concurso_pattern.search(next_l) or next_l.startswith('--- PAGE') or 'PAPIRVM' in next_l or 'ANOTA' in next_l:
                    break
                if next_l:
                    item_text += " " + next_l
                j += 1
            current_items_buffer.append({
                "numero": num,
                "texto": clean_text(item_text),
                "concurso": current_concurso,
                "contexto": clean_text(current_context),
                "capitulo": current_capitulo
            })
            i = j - 1
        
        gab_match = gabarito_pattern.search(line)
        if gab_match:
            gab_str = gab_match.group(1).strip()
            gabs = re.split(r'[\s\-]+', gab_str)
            gabs = [g.upper() for g in gabs if g.upper() in ['C', 'E', 'X']]
            
            for k in range(min(len(gabs), len(current_items_buffer))):
                item_obj = current_items_buffer[k]
                item_obj['gabarito'] = gabs[k]
                item_obj['origem'] = 'CAD_CESPE'
                if item_obj['gabarito'] in ['C', 'E']:
                    questions.append(item_obj)
            current_items_buffer = []
        i += 1
        
    print(f"CAD CESPE: {len(questions)} itens válidos extraídos.")
    return questions

def extract_from_pcdf():
    for root, dirs, files in os.walk(BASE_DIR):
        if "PC-DF" in root:
            for f in files:
                if "prova" in f and f.endswith(".pdf"):
                    p = os.path.join(root, f)
                    reader = PdfReader(p)
                    full_text = ""
                    for page in reader.pages:
                        full_text += page.extract_text() + "\n"
                        
                    items = []
                    raw_blocks = re.findall(r'(?:^|\n)\s*(\d{1,3})\s+([A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ].*?)\s*JUSTIFICATIVA\s*-\s*(Certo|Errado)\.\s*(.*?)(?=<FimJust>|\n\s*\d{1,3}\s+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]|$)', full_text, re.DOTALL)
                    for num_str, txt, gab_str, just in raw_blocks:
                        g = 'C' if gab_str.lower() == 'certo' else 'E'
                        items.append({
                            "numero": int(num_str),
                            "texto": clean_text(txt),
                            "gabarito": g,
                            "justificativa": clean_text(just),
                            "concurso": "PC-DF/2025 (Bibliotecário)",
                            "contexto": "",
                            "capitulo": "PC-DF 2025",
                            "origem": "PC_DF_2025"
                        })
                    print(f"PC-DF 2025: {len(items)} itens extraídos com justificativa oficial.")
                    return items
    return []

def extract_exam_with_grid(prova_part, gab_part, concurso_nome):
    prova_path = None
    gab_path = None
    for root, dirs, files in os.walk(BASE_DIR):
        for f in files:
            if prova_part.lower() in f.lower() and f.endswith('.pdf'):
                prova_path = os.path.join(root, f)
            if gab_part.lower() in f.lower() and f.endswith('.pdf'):
                gab_path = os.path.join(root, f)
                
    if not prova_path or not gab_path:
        print(f"Não encontrado: {concurso_nome}")
        return []
        
    gab_reader = PdfReader(gab_path)
    gab_text = ""
    for p in gab_reader.pages:
        gab_text += p.extract_text() + "\n"
    gabs = parse_cebraspe_grid(gab_text)
    
    prova_reader = PdfReader(prova_path)
    prova_text = ""
    for p in prova_reader.pages:
        prova_text += p.extract_text() + "\n"
        
    lines = prova_text.split('\n')
    items = []
    item_pattern = re.compile(r'^\s*(\d{1,3})\s+([A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ][^\n]+)')
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        it_m = item_pattern.match(line)
        if it_m:
            num = int(it_m.group(1))
            txt = it_m.group(2).strip()
            j = i + 1
            while j < len(lines):
                nl = lines[j].strip()
                if item_pattern.match(nl) or 'CEBRASPE' in nl or 'Folha de Respostas' in nl or 'PROVAS OBJETIVAS' in nl:
                    break
                if nl:
                    txt += " " + nl
                j += 1
                
            txt_clean = clean_text(txt)
            if len(txt_clean) > 20 and num in gabs and gabs[num] in ['C', 'E']:
                items.append({
                    "numero": num,
                    "texto": txt_clean,
                    "gabarito": gabs[num],
                    "concurso": concurso_nome,
                    "contexto": "",
                    "capitulo": concurso_nome,
                    "origem": "PROVA_RECENTE"
                })
            i = j - 1
        i += 1
        
    print(f"{concurso_nome}: {len(items)} itens extraídos com gabarito oficial (total gabaritos: {len(gabs)}).")
    return items

def classify_question(item):
    """
    Classifica precisamente uma questão Cebraspe com base no capítulo, texto e termos canônicos.
    """
    cap = item.get('capitulo', '').upper()
    txt = (item.get('texto', '') + ' ' + item.get('contexto', '')).lower()
    conc = item.get('concurso', '').upper()
    num = item.get('numero', 0)
    
    # 1. Regras diretas baseadas em provas com divisão fixa de itens:
    if 'CÂMARA DOS DEPUTADOS' in conc:
        if 1 <= num <= 30:
            return 'M13_PORTUGUES', 'Língua Portuguesa (Compreensão, Morfossintaxe e Reescrita)'
        elif 31 <= num <= 40:
            return 'M12_INGLES', 'Língua Inglesa (Compreensão e Vocabulário)'
        elif 51 <= num <= 70:
            return 'M11_DIREITO_ADMINISTRATIVO', 'Direito Administrativo (Atos, Servidores, Licitações)'
        elif 71 <= num <= 90:
            return 'M11_DIREITO_ADMINISTRATIVO', 'Administração Pública e Governança (NPM, NPG, Valor Público)'
        elif 91 <= num <= 140:
            return 'M10_LEGISLATIVO_CONSTITUCIONAL', 'Regimento Interno da Câmara (RICD) e Direito Constitucional'
            
    if 'PC-DF' in conc:
        if 1 <= num <= 20:
            # Itens de IA e Língua Portuguesa
            if any(k in txt for k in ['inteligência artificial', 'ia', 'linguagem', 'algoritmo']):
                return 'TECNOLOGIA_DADOS', 'Inteligência Artificial e Tecnologias Contemporâneas'
            return 'M13_PORTUGUES', 'Língua Portuguesa'
        elif 25 <= num <= 30:
            return 'M11_DIREITO_ADMINISTRATIVO', 'Ética no Serviço Público e Legislação'
            
    # 2. Regras baseadas nos capítulos do CAD CESPE:
    if 'MÓDULO 1' in cap or 'MODULO 1' in cap:
        return 'M1_FUNDAMENTOS', 'Fundamentos da Biblioteconomia, Documentação e Ciência da Informação'
        
    if 'MÓDULO 2' in cap or 'MODULO 2' in cap:
        if any(k in txt for k in ['referência', 'busca', 'recuperação', 'dsi', 'alerta', 'booleano']):
            return 'M4_RECUPERACAO', 'Serviço de Referência e Recuperação da Informação'
        return 'M5_GESTAO', 'Serviços ao Usuário, Gestão e Marketing'
        
    if 'MÓDULO 3' in cap or 'MODULO 3' in cap:
        if any(k in txt for k in ['jurídic', 'lei', 'legisla', 'jurisprudência', 'doutrina']):
            return 'M10_LEGISLATIVO_CONSTITUCIONAL', 'Informação Jurídica e Legislativa'
        if any(k in txt for k in ['científic', 'tecnológic', 'periódico', 'base de dados']):
            return 'M9_COMUNICACAO', 'Fontes de Informação Científica e Comunicação Científica'
        return 'M4_RECUPERACAO', 'Fontes de Informação Primárias, Secundárias e Terciárias'
        
    if 'MÓDULO 4' in cap or 'MODULO 4' in cap:
        return 'M2_CATALOGACAO', 'Catalogação e Descrição Bibliográfica (AACR2, RDA, MARC 21)'
        
    if 'MÓDULO 5' in cap or 'MODULO 5' in cap:
        return 'M3_CLASSIFICACAO', 'Classificação Decimal e Indexação (CDD, CDU, Tesauros)'
        
    if 'MÓDULO 6' in cap or 'MODULO 6' in cap:
        return 'M5_GESTAO', 'Gestão de Bibliotecas e Desenvolvimento de Coleções'
        
    if 'MÓDULO 7' in cap or 'MODULO 7' in cap:
        if any(k in txt for k in ['preservação digital', 'oais', 'migração', 'emulação']):
            return 'M7_PRESERVACAO', 'Preservação Digital e Modelo OAIS'
        return 'M6_DIGITAL_IA', 'Sistemas de Bibliotecas (SIGB), Repositórios Digitais e Interoperabilidade'
        
    if 'MÓDULO 8' in cap or 'MODULO 8' in cap:
        return 'M8_NORMALIZACAO', 'Normalização Documentária (Normas ABNT)'
        
    # 3. Classificação semântica por palavras-chave:
    # Tecnologia da Informação, Dados e IA:
    if any(k in txt for k in ['power bi', 'powerbi', 'tableau', 'excel', 'word', 'onedrive', 'teams', 'meet', 'firewall', 'phishing', 'backup', 'vírus', 'pragas virtuais', 'inteligência artificial', 'prompt', 'ia generativa', 'aprendizado supervisionado', 'box plot', 'storytelling']):
        return 'TECNOLOGIA_DADOS', 'Tecnologia da Informação, Dados e Inteligência Artificial'
        
    # Língua Portuguesa:
    if any(k in txt for k in ['no texto', 'segundo o texto', 'coesão', 'concordância verbal', 'regência verbal', 'sinal indicativo de crase', 'vírgula', 'orações subordinadas', 'reescrita de frases', 'tipologia textual']):
        return 'M13_PORTUGUES', 'Língua Portuguesa'
        
    # Língua Inglesa:
    if any(k in txt for k in ['according to the text', 'the text implies', 'the word', 'main idea', 'paragraph']):
        return 'M12_INGLES', 'Língua Inglesa'
        
    # Direito Administrativo:
    if any(k in txt for k in ['8.112', '14.133', '8.429', '9.784', 'ato administrativo', 'poder de polícia', 'licitação', 'servidor público federal', 'processo administrativo federal', 'improbidade']):
        return 'M11_DIREITO_ADMINISTRATIVO', 'Direito Administrativo e Administração Pública'
        
    # Direito Constitucional / RICD:
    if any(k in txt for k in ['regimento interno da câmara', 'ricd', 'regimento comum', 'rccn', 'processo legislativo', 'comissão permanente', 'mesa da câmara', 'deputado federal', 'constituição federal']):
        return 'M10_LEGISLATIVO_CONSTITUCIONAL', 'Direito Constitucional e Regimento Interno'
        
    # Biblioteconomia - Fundamentos:
    if any(k in txt for k in ['ranganathan', 'cinco leis', 'briet', 'otlet', 'ciência da informação', 'dikw', 'capurro', 'código de ética do cfb', 'lei 4.084']):
        return 'M1_FUNDAMENTOS', 'Fundamentos da Biblioteconomia e Ciência da Informação'
        
    # Catalogação:
    if any(k in txt for k in ['catalogação', 'aacr2', 'rda', 'frbr', 'ifla lrm', 'marc 21', 'metadados', 'dublin core', 'ponto de acesso']):
        return 'M2_CATALOGACAO', 'Catalogação e Metadados'
        
    # Classificação / Indexação:
    if any(k in txt for k in ['cdd', 'cdu', 'classificação decimal', 'tesauro', 'indexação', 'linguagem documentária', 'análise documentária']):
        return 'M3_CLASSIFICACAO', 'Classificação e Indexação'
        
    # Recuperação / Referência / LexML:
    if any(k in txt for k in ['serviço de referência', 'entrevista de referência', 'recuperação da informação', 'lexml', 'rvbi', 'fontes primárias', 'fontes secundárias', 'estratégia de busca']):
        return 'M4_RECUPERACAO', 'Recuperação, Fontes e Serviços de Referência'
        
    # Gestão de Coleções:
    if any(k in txt for k in ['desenvolvimento de coleções', 'seleção', 'aquisição', 'desbaste', 'descarte', 'avaliação de coleções', 'vergueiro']):
        return 'M5_GESTAO', 'Gestão e Desenvolvimento de Coleções'
        
    # Sistemas / Repositórios / IA:
    if any(k in txt for k in ['dspace', 'koha', 'folio', 'sigb', 'oai-pmh', 'z39.50', 'repositório', 'biblioteca digital', 'oais']):
        return 'M6_DIGITAL_IA', 'Sistemas de Bibliotecas, Repositórios e Preservação Digital'
        
    # Preservação Física:
    if any(k in txt for k in ['conservação preventiva', 'preservação física', 'restauração', 'agentes biológicos', 'controle ambiental']):
        return 'M7_PRESERVACAO', 'Preservação Física e Conservação'
        
    # Normalização ABNT:
    if any(k in txt for k in ['nbr 6023', 'nbr 10520', 'nbr 6028', 'abnt', 'referência bibliográfica', 'citação']):
        return 'M8_NORMALIZACAO', 'Normalização Documentária ABNT'
        
    # Comunicação Científica:
    if any(k in txt for k in ['bradford', 'lotka', 'zipf', 'bibliometria', 'cientometria', 'altmetria', 'ciência aberta', 'acesso aberto']):
        return 'M9_COMUNICACAO', 'Comunicação Científica e Métricas'
        
    return 'OUTROS_GERAL', 'Conhecimentos Gerais'

def main():
    all_questions = []
    
    # 1. CAD CESPE (1.935 questões)
    cad_qs = extract_from_cad_cespe()
    all_questions.extend(cad_qs)
    
    # 2. PC-DF 2025 (120 questões com justificativas oficiais)
    pcdf_qs = extract_from_pcdf()
    all_questions.extend(pcdf_qs)
    
    # 3. Câmara dos Deputados 2026 - Analista Legislativo
    camara_analista_qs = extract_exam_with_grid("proc (1)", "processo.pdf", "Câmara dos Deputados/2026 (Analista Legislativo)")
    all_questions.extend(camara_analista_qs)
    
    # 4. Câmara dos Deputados 2026 - Técnico Legislativo
    camara_tecnico_qs = extract_exam_with_grid("cd-al (1)", "cd-al-026.pdf", "Câmara dos Deputados/2026 (Técnico Legislativo)")
    all_questions.extend(camara_tecnico_qs)
    
    # 5. MPE-CE 2025 - Biblioteconomia
    mpece_qs = extract_exam_with_grid("mpe-ce-analista-ministerial-especialidade-biblioteconomia-prova", "mpe-ce-analista-ministerial-especialidade-biblioteconomia-gabarito", "MPE-CE/2025 (Biblioteconomia)")
    all_questions.extend(mpece_qs)
    
    # 6. STJ 2024 - Biblioteconomia
    stj_qs = extract_exam_with_grid("stj-analista-judiciario-area-apoio-especializado-especialidade-biblioteconomia-prova", "stj-analista-judiciario-area-apoio-especializado-especialidade-biblioteconomia-gabarito", "STJ/2024 (Biblioteconomia)")
    all_questions.extend(stj_qs)
    
    # 7. CAPES 2024 - Biblioteconomia
    capes_qs = extract_exam_with_grid("capes-analista-em-ciencia-e-tecnologia-especialidade-biblioteconomia-prova", "capes-analista-em-ciencia-e-tecnologia-especialidade-biblioteconomia-gabarito", "CAPES/2024 (Biblioteconomia)")
    all_questions.extend(capes_qs)
    
    # 8. ANM 2025 - Analista Administrativo
    anm_qs = extract_exam_with_grid("anm-analista-administrativo-especialidade-qualquer-area-de-formacao-prova", "anm-analista-administrativo-especialidade-qualquer-area-de-formacao-gabarito", "ANM/2025 (Analista Administrativo)")
    all_questions.extend(anm_qs)
    
    # 9. TJ-PA 2025 - Analista Judiciário
    tjpa_qs = extract_exam_with_grid("tj-pa-analista-judiciario-especialidade-administracao-prova", "tj-pa-analista-judiciario-especialidade-administracao-gabarito", "TJ-PA/2025 (Analista Judiciário)")
    all_questions.extend(tjpa_qs)
    
    # 10. FUB 2022 - Bibliotecário-Documentalista
    fub_qs = extract_exam_with_grid("bibliotecario_documentalista", "gabaritos_oficiais_definitivos", "FUB/2022 (Bibliotecário-Documentalista)")
    all_questions.extend(fub_qs)
    
    # Classificar todas as questões
    classified = {}
    for idx, q in enumerate(all_questions):
        q['id_banco_real'] = f"real-{q.get('origem', 'cebraspe').lower()}-{idx+1}"
        macro, topico = classify_question(q)
        q['macro_modulo'] = macro
        q['topico_especifico'] = topico
        
        if macro not in classified:
            classified[macro] = []
        classified[macro].append(q)
        
    print(f"\n==========================================")
    print(f"TOTAL GERAL DE QUESTÕES EXTRAÍDAS: {len(all_questions)}")
    print(f"==========================================")
    for macro, q_list in sorted(classified.items(), key=lambda x: len(x[1]), reverse=True):
        c_count = sum(1 for x in q_list if x.get('gabarito') == 'C')
        e_count = sum(1 for x in q_list if x.get('gabarito') == 'E')
        print(f"  * {macro:30}: {len(q_list):4} itens ({c_count:4} C / {e_count:4} E)")
        
    output_path = r"c:\Users\bibli\Downloads\CEBRASPE\curso-revisao\banco_questoes_cebraspe_reais_classificado.json"
    with open(output_path, "w", encoding="utf-8") as out_f:
        json.dump(all_questions, out_f, ensure_ascii=False, indent=2)
    print(f"\nBase salva com sucesso em: {output_path}")

if __name__ == "__main__":
    main()

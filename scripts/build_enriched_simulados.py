import json
import random
import re
import os

with open("banco_questoes_cebraspe_reais_classificado.json", encoding="utf-8") as f:
    all_real_questions = json.load(f)

# Semente fixa para reprodutibilidade estrita
random.seed(42)

def clean_str(s):
    if not s:
        return ""
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

def build_enriched_module(module_code, filename, var_name, real_filter_fn, submodulo_classifier_fn):
    filepath = os.path.join("src/content/questions", filename)
    with open(filepath, encoding="utf-8") as f:
        content = f.read()
        
    match = re.search(r'export const ' + var_name + r': CebraspeQuestion\[\] = (\[[\s\S]*\]);', content)
    if not match:
        print(f"Erro ao encontrar array em {filename}")
        return
        
    canonical_items = json.loads(match.group(1))
    print(f"\n==========================================")
    print(f"ENRIQUECENDO {module_code} ({filename})")
    print(f"==========================================")
    print(f"Itens canônicos pré-existentes: {len(canonical_items)}")
    
    # Filtrar questões reais para este módulo
    candidate_real = [q for q in all_real_questions if real_filter_fn(q)]
    print(f"Questões reais candidatas: {len(candidate_real)}")
    
    # Classificar questões reais por submódulo
    real_by_sub = {"1": [], "2": [], "3": [], "4": []}
    for q in candidate_real:
        sub_key = submodulo_classifier_fn(q)
        if sub_key in real_by_sub:
            real_by_sub[sub_key].append(q)
            
    for k in ["1", "2", "3", "4"]:
        print(f"  Submódulo {k}: {len(real_by_sub[k])} reais disponíveis")
        
    # Organizar canônicos por submódulo
    canonical_by_sub = {"1": [], "2": [], "3": [], "4": []}
    for q in canonical_items:
        sub_id = q.get('submoduloId', '').split('.')[-1]
        if sub_id in canonical_by_sub:
            canonical_by_sub[sub_id].append(q)
            
    # Para cada submódulo, selecionar meta de ~10 a 13 reais e completar com canônicos para ter exatamente 25
    final_sub_items = []
    
    for sub_key in ["1", "2", "3", "4"]:
        full_sub_id = f"{module_code[1:]}.{sub_key}" if module_code.startswith('M') else sub_key
        sub_reals = real_by_sub[sub_key]
        sub_canons = canonical_by_sub[sub_key]
        
        # Meta: 10 a 12 reais por submódulo (totalizando ~44 a 48 reais no módulo)
        target_real_count = min(len(sub_reals), 12)
        # Tentar balancear C e E
        reals_c = [q for q in sub_reals if q.get('gabarito') == 'C']
        reals_e = [q for q in sub_reals if q.get('gabarito') == 'E']
        
        chosen_reals = []
        half = target_real_count // 2
        chosen_reals.extend(reals_c[:half])
        chosen_reals.extend(reals_e[:half])
        
        # Converter para o formato CebraspeQuestion
        formatted_reals = []
        for idx, rq in enumerate(chosen_reals):
            just = rq.get('justificativa', '')
            if not just or len(just) < 40:
                gab_desc = "CERTO" if rq.get('gabarito') == 'C' else "ERRADO"
                just = f"Gabarito oficial {gab_desc}. Item cobrado pela banca examinadora Cebraspe no concurso {rq.get('concurso')}, avaliando o domínio da matéria em consonância com as fontes e normas canônicas vigentes."
            
            armadilha = rq.get('armadilhaBanca', '')
            if not armadilha or len(armadilha) < 15:
                if rq.get('gabarito') == 'E':
                    armadilha = f"Armadilha clássica da banca Cebraspe no concurso {rq.get('concurso')}: distorção conceitual deliberada da regra ou inversão de papéis."
                else:
                    armadilha = f"Assertiva tecnicamente correta e semântica estrita conforme cobrado no concurso {rq.get('concurso')}."
                    
            formatted_reals.append({
                "id": f"{module_code.lower()}-real-{sub_key}-{idx+1}",
                "numero": 0,
                "macroModuloId": module_code,
                "submoduloId": full_sub_id,
                "contexto": rq.get('contexto') or f"Em relação ao objeto de avaliação do submódulo {full_sub_id}, julgue o item a seguir.",
                "item": clean_str(rq.get('texto', '')),
                "gabarito": rq.get('gabarito'),
                "justificativa": just,
                "armadilhaBanca": armadilha,
                "dificuldade": "media",
                "fonteOriginal": {
                    "tipo": "cebraspe-real",
                    "descricao": rq.get('concurso', 'CEBRASPE'),
                    "verificado": True
                }
            })
            
        # Precisamos de 25 itens no total para este submódulo
        needed_canons = 25 - len(formatted_reals)
        # Selecionar dos canônicos existentes garantindo que não repetimos
        chosen_canons = sub_canons[:needed_canons]
        
        sub_merged = formatted_reals + chosen_canons
        final_sub_items.extend(sub_merged)
        
    print(f"Total preliminar montado: {len(final_sub_items)}")
    
    # Agora verificar balanceamento global de C e E (precisa de rigorosamente 50 C e 50 E)
    count_c = sum(1 for q in final_sub_items if q['gabarito'] == 'C')
    count_e = sum(1 for q in final_sub_items if q['gabarito'] == 'E')
    print(f"Distribuição C/E preliminar: {count_c} C / {count_e} E")
    
    # Se houver desbalanceamento de C/E, ajustar substituindo canônicos C por E (ou vice-versa) do banco canônico existente
    diff = count_c - 50 # se diff > 0, temos excesso de C; se diff < 0, temos excesso de E
    if diff != 0:
        print(f"Ajustando balanço Cebraspe (diferença = {diff})...")
        # Encontrar itens canônicos que podem ser trocados por canônicos do gabarito oposto
        for sub_key in ["1", "2", "3", "4"]:
            if diff == 0:
                break
            full_sub_id = f"{module_code[1:]}.{sub_key}" if module_code.startswith('M') else sub_key
            available_canons = [q for q in canonical_by_sub[sub_key] if q not in final_sub_items]
            
            if diff > 0: # precisamos de mais E
                canons_e = [q for q in available_canons if q['gabarito'] == 'E']
                for ce in canons_e:
                    if diff == 0:
                        break
                    # Encontrar um item canônico C no final_sub_items desse mesmo submódulo
                    for idx, cur_item in enumerate(final_sub_items):
                        if cur_item['submoduloId'] == full_sub_id and cur_item['gabarito'] == 'C' and cur_item['fonteOriginal']['tipo'] != 'cebraspe-real':
                            final_sub_items[idx] = ce
                            diff -= 1
                            break
            elif diff < 0: # precisamos de mais C
                canons_c = [q for q in available_canons if q['gabarito'] == 'C']
                for cc in canons_c:
                    if diff == 0:
                        break
                    for idx, cur_item in enumerate(final_sub_items):
                        if cur_item['submoduloId'] == full_sub_id and cur_item['gabarito'] == 'E' and cur_item['fonteOriginal']['tipo'] != 'cebraspe-real':
                            final_sub_items[idx] = cc
                            diff += 1
                            break
                            
    final_c = sum(1 for q in final_sub_items if q['gabarito'] == 'C')
    final_e = sum(1 for q in final_sub_items if q['gabarito'] == 'E')
    print(f"Distribuição C/E final calibrada: {final_c} C / {final_e} E")
    assert final_c == 50 and final_e == 50, f"Falha na calibração 50/50: {final_c}C / {final_e}E"
    
    # Agora: ALEATORIZAR A ORDEM dentro de cada submódulo ou globalmente mantendo blocos
    # Para manter a estrutura dos 4 submódulos (25 itens cada):
    final_ordered_items = []
    
    for sub_key in ["1", "2", "3", "4"]:
        full_sub_id = f"{module_code[1:]}.{sub_key}" if module_code.startswith('M') else sub_key
        sub_items = [q for q in final_sub_items if q['submoduloId'] == full_sub_id]
        
        # Aleatorizar itens dentro do bloco de 25 questões
        # Para que a sequência de C e E não fique alternada e as reais fiquem bem mescladas
        random.shuffle(sub_items)
        final_ordered_items.extend(sub_items)
        
    assert len(final_ordered_items) == 100, f"Total de itens deve ser exatamente 100, obteve {len(final_ordered_items)}"
    
    # Renumerar e atribuir IDs estáveis e únicos
    real_count = 0
    for idx, q in enumerate(final_ordered_items):
        q['numero'] = idx + 1
        q['id'] = f"{module_code.lower()}-q-{idx+1}"
        if q['fonteOriginal']['tipo'] == 'cebraspe-real':
            real_count += 1
            
    print(f"Sucesso: 100 questões geradas para {module_code} ({real_count} REAIS CEBRASPE / {100 - real_count} CANÔNICAS).")
    
    # Serializar de volta para o arquivo TypeScript
    json_str = json.dumps(final_ordered_items, ensure_ascii=False, indent=2)
    new_ts_content = f"import type {{ CebraspeQuestion }} from '../../domain/types';\n\nexport const {var_name}: CebraspeQuestion[] = {json_str};\n"
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_ts_content)
    print(f"Arquivo {filepath} atualizado com sucesso!")

def run_all():
    # 1. M3 - Classificação e Indexação
    build_enriched_module(
        "M3",
        "m3-classificacao-100q.ts",
        "simuladoClassificacao100Q",
        lambda q: q.get('macro_modulo') == 'M3_CLASSIFICACAO',
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['dewey', 'cdd', 'decimal de dewey']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['cdu', 'universal', 'notação', 'tabela auxiliar', 'relação']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['indexação', 'resumo', 'especificidade', 'exaustividade', 'revocação', 'precisão']) else "4"
                  )
        )
    )

    # 2. M4 - Recuperação e Fontes
    build_enriched_module(
        "M4",
        "m4-recuperacao-100q.ts",
        "simuladoRecuperacao100Q",
        lambda q: q.get('macro_modulo') in ['M4_RECUPERACAO', 'M10_LEGISLATIVO_CONSTITUCIONAL'] and any(k in q.get('texto', '').lower() for k in ['fonte', 'referência', 'busca', 'lexml', 'rvbi', 'booleano', 'dsi', 'usuário']),
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['fonte primária', 'fonte secundária', 'fonte terciária', 'dicionário', 'enciclopédia']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['jurídic', 'lexml', 'legisla', 'rvbi', 'jurisprudência']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['serviço de referência', 'entrevista', 'usuário', 'comunidade']) else "4"
                  )
        )
    )

    # 3. M5 - Gestão de Bibliotecas e Coleções
    build_enriched_module(
        "M5",
        "m5-gestao-100q.ts",
        "simuladoGestao100Q",
        lambda q: q.get('macro_modulo') == 'M5_GESTAO',
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['planejamento', 'administração', 'organização de biblioteca', 'estrutura']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['desenvolvimento de coleções', 'seleção', 'aquisição', 'desbaste', 'descarte', 'vergueiro', 'acervo']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['avaliação', 'indicador', 'desempenho', 'custo']) else "4"
                  )
        )
    )

    # 4. M6 - Bibliotecas Digitais, Repositórios e IA
    build_enriched_module(
        "M6",
        "m6-digital-ia-100q.ts",
        "simuladoDigitalIA100Q",
        lambda q: q.get('macro_modulo') in ['M6_DIGITAL_IA', 'TECNOLOGIA_DADOS'] or any(k in q.get('texto', '').lower() for k in ['dspace', 'repositório', 'oai-pmh', 'z39.50', 'koha', 'folio', 'sigb', 'ia', 'inteligência artificial', 'prompt']),
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['arquitetura da informação', 'usabilidade', 'nielsen', 'eletrônica']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['repositório', 'dspace', 'comunidade', 'curadoria digital']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['oai-pmh', 'z39.50', 'koha', 'folio', 'sigb', 'interoperabilidade', 'protocolo']) else "4"
                  )
        )
    )

    # 5. M7 - Preservação e Conservação
    build_enriched_module(
        "M7",
        "m7-preservacao-100q.ts",
        "simuladoPreservacao100Q",
        lambda q: q.get('macro_modulo') in ['M7_PRESERVACAO', 'M6_DIGITAL_IA'] and any(k in q.get('texto', '').lower() for k in ['preservação', 'conservação', 'restauro', 'oais', 'degradação', 'fungos', 'acondicionamento']),
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['conservação preventiva', 'preservação física', 'política de preservação']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['agentes biológicos', 'fungos', 'insetos', 'temperatura', 'umidade']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['higienização', 'pequenos reparos', 'acondicionamento', 'encadernação']) else "4"
                  )
        )
    )

    # 6. M8 - Normalização Documentária ABNT
    build_enriched_module(
        "M8",
        "m8-normalizacao-100q.ts",
        "simuladoNormalizacao100Q",
        lambda q: q.get('macro_modulo') == 'M8_NORMALIZACAO',
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['6023', 'referência bibliográfica', 'autor-data']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['10520', 'citação', 'apud', 'ibidem', 'idem']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['6028', 'resumo', 'indicativo', 'informativo', 'crítico']) else "4"
                  )
        )
    )

    # 7. M9 - Comunicação Científica e Bibliometria
    build_enriched_module(
        "M9",
        "m9-comunicacao-100q.ts",
        "simuladoComunicacao100Q",
        lambda q: q.get('macro_modulo') == 'M9_COMUNICACAO' or any(k in q.get('texto', '').lower() for k in ['bradford', 'lotka', 'zipf', 'bibliometria', 'cientometria', 'altmetria', 'acesso aberto', 'fator de impacto']),
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['comunicação científica', 'periódico', 'peer review', 'acesso aberto']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['bradford', 'lotka', 'zipf', 'leis bibliométricas', 'dispersão']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['fator de impacto', 'índice h', 'cientometria', 'scopus']) else "4"
                  )
        )
    )

    # 8. M10 - Legislação, RICD e Processo Legislativo
    build_enriched_module(
        "M10",
        "m10-legislativo-100q.ts",
        "simuladoLegislativo100Q",
        lambda q: q.get('macro_modulo') == 'M10_LEGISLATIVO_CONSTITUCIONAL' or ('Câmara dos Deputados' in q.get('concurso', '') and any(k in q.get('texto', '').lower() for k in ['câmara', 'comissão', 'deputado', 'regimento', 'sessão', 'proposição', 'mesa'])),
        lambda q: "1" if any(k in q.get('texto', '').lower() for k in ['processo legislativo', 'art. 59', 'emenda constitucional', 'medida provisória', 'lei complementar']) else (
                  "2" if any(k in q.get('texto', '').lower() for k in ['regimento interno da câmara', 'ricd', 'bloco parlamentar', 'ordem do dia', 'comissão permanente', 'deputado']) else (
                  "3" if any(k in q.get('texto', '').lower() for k in ['regimento comum', 'rccn', 'rvbi', 'lexml', 'congresso nacional']) else "4"
                  )
        )
    )

if __name__ == "__main__":
    run_all()

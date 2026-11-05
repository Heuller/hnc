#!/usr/bin/env python3
"""Triagem, não homologação: extrai candidatos C/E com gabarito atribuído na fonte.

Exemplo: python scripts/extrairCandidatosCebraspe.py --textos /tmp/textos --inventario docs/simulados-reais/inventario-drive.json --saida /tmp/candidatos.json
Os PDFs/textos extraídos e a saída devem permanecer em área privada de trabalho.
"""
import argparse
import hashlib
import json
import re
import unicodedata
from pathlib import Path

BANCA = re.compile(r'\b(?:CESPE|CEBRASPE)\b', re.I)
URL = re.compile(r'(?:https?://)?(?:www\.)?tecconcursos\.com\.br/questoes/(\d+)', re.I)
ANSWER = re.compile(r'(?<!\d)(\d{1,4})\s*\)?[.\-]?\s+(Certo|Errado|Anulad[ao]|[A-E])\b', re.I)
SECTION = re.compile(r'(?im)^\s*GABARITO\s*$')
LIST_ITEM = re.compile(r'(?m)^\s*(\d{1,3})\s*[.)]\s*\(([^\n)]*(?:CESPE|CEBRASPE)[^\n)]*)\)', re.I)
ANY_LIST = re.compile(r'(?m)^\s*\d{1,3}\s*[.)]\s*\([^\n)]*\)')


def limpar(s):
    s = re.sub(r'(?im)^.*Licensed to .*$', '', s)
    s = re.sub(r'(?im)^.*Biblioteconomia para concursos com Prof.*$', '', s)
    s = re.sub(r'(?im)^\s*Aula\s+\d+\s*$', '', s)
    s = re.sub(r'(?m)^\s*\d{1,3}\s*$', '', s)
    s = re.sub(r'\b(?:Certo|Errado)\s*$', '', s, flags=re.I)
    s = re.sub(r'\s+', ' ', s).strip(' •\u2022\x0c\n')
    return s


def chave_texto(s):
    s = unicodedata.normalize('NFKD', s.lower())
    s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]+', '', s)


def gab_map(s):
    result = {}
    for num, answer in ANSWER.findall(s):
        answer = answer.lower()
        value = {'certo': 'C', 'errado': 'E', 'anulada': 'X', 'anulado': 'X'}.get(answer, answer.upper())
        result.setdefault(int(num), set()).add(value)
    return result


def tec(text, meta):
    sections = list(SECTION.finditer(text))
    if not sections:
        return []
    cut = sections[-1].start()
    answers = gab_map(text[cut:])
    text = text[:cut]
    markers = list(URL.finditer(text))
    result = []
    for i, marker in enumerate(markers):
        block = text[marker.end():markers[i + 1].start() if i + 1 < len(markers) else len(text)]
        if not re.search(r'CEBRASPE\s*\(CESPE\)', block[:400], re.I):
            continue
        number = re.search(r'(?m)^\s*(\d{1,4})\)\s*', block)
        if not number:
            continue
        av = answers.get(int(number.group(1)), set())
        if len(av) != 1 or next(iter(av)) not in ('C', 'E'):
            continue
        body = block[number.end():]
        option = re.search(r'(?im)^\s*Certo\s*$', body)
        wrong = re.search(r'(?im)^\s*Errado\s*$', body)
        if not option or not wrong or wrong.start() < option.start():
            continue
        content = limpar(body[:option.start()])
        if len(content) < 35:
            continue
        head = limpar(block[:number.start()])
        result.append({'identificador': 'tec-' + marker.group(1), 'numero_no_caderno': int(number.group(1)),
                       'origem_prova_declarada': head, 'texto': content, 'gabarito_fonte': next(iter(av)),
                       'fontes': [{'id': meta['id'], 'nome': meta['nome']}], 'status': 'triagem-pendente'})
    return result


def apostila(text, meta):
    sections = list(SECTION.finditer(text))
    if not sections:
        return []
    cut = sections[-1].start()
    answers = gab_map(text[cut:]); text = text[:cut]
    all_starts = list(ANY_LIST.finditer(text))
    result = []
    for i, start in enumerate(all_starts):
        match = LIST_ITEM.match(text, start.start())
        if not match:
            continue
        n = int(match.group(1)); av = answers.get(n, set())
        if len(av) != 1 or next(iter(av)) not in ('C', 'E'):
            continue
        block = text[match.end():all_starts[i+1].start() if i+1 < len(all_starts) else len(text)]
        certo = re.search(r'(?im)^\s*[•\u2022]?\s*Certo\s*$', block)
        errado = re.search(r'(?im)^\s*[•\u2022]?\s*Errado\s*$', block)
        if not certo or not errado or errado.start() < certo.start():
            continue
        content = limpar(block[:certo.start()])
        if len(content) < 35:
            continue
        result.append({'identificador': None, 'numero_no_caderno': n, 'origem_prova_declarada': match.group(2),
                       'texto': content, 'gabarito_fonte': next(iter(av)),
                       'fontes': [{'id': meta['id'], 'nome': meta['nome']}], 'status': 'triagem-pendente'})
    return result


def apostila_esquematizada(text, meta):
    """Questões com gabarito junto ao enunciado; extração conservadora e pendente de revisão."""
    starts = list(ANY_LIST.finditer(text)); result = []
    for i, start in enumerate(starts):
        match = LIST_ITEM.match(text, start.start())
        if not match:
            continue
        block = text[match.end():starts[i + 1].start() if i + 1 < len(starts) else len(text)]
        answer = re.search(r'(?<![a-zA-Z])(?:GABARITO\s*[:—-]?\s*)?(CERTO|ERRADO)\s*[.!](?:\s|$)', block)
        if not answer:
            continue
        body = block[:answer.start()]
        if re.search(r'(?im)^\s*[a-e][.)]\s+', body) or re.search(r'(?i)\banulad[oa]\b', body):
            continue
        content = limpar(body)
        if len(content) < 35:
            continue
        result.append({'identificador': None, 'numero_no_caderno': int(match.group(1)),
                       'origem_prova_declarada': match.group(2), 'texto': content,
                       'gabarito_fonte': 'C' if answer.group(1) == 'CERTO' else 'E',
                       'fontes': [{'id': meta['id'], 'nome': meta['nome']}], 'status': 'triagem-pendente'})
    return result


def apostila_gabarito_em_blocos(text, meta):
    """Associa gabarito em sequência a itens imediatamente anteriores; exige revisão."""
    results = []
    previous_end = 0
    pattern = re.compile(r'(?im)^[ \t]*GABARITO[ \t]*:[ \t]*([CEX](?:(?:[ \t]*[-–][ \t]*|[ \t]+)[CEX])*)[ \t]*\.?[ \t]*(?:Capítulo:[^\n]*)?$')
    for g in pattern.finditer(text):
        segment = text[previous_end:g.start()]
        previous_end = g.end()
        answers = re.findall(r'[CEX]', g.group(1).upper())
        headers = list(re.finditer(r'(?m)^\s*\(([^\n)]{2,100}/(?:19|20)\d{2})\)\s*', segment))
        if not headers:
            continue
        head = headers[-1]
        exam = head.group(1)
        question_text = segment[head.end():]
        matches = list(re.finditer(r'(?m)^\s*(\d{1,4})\.\s+', question_text))
        if len(matches) != len(answers):
            continue
        nums = [int(m.group(1)) for m in matches]
        if any(b != a + 1 for a, b in zip(nums, nums[1:])):
            continue
        context = limpar(question_text[:matches[0].start()])
        for idx, m in enumerate(matches):
            if answers[idx] == 'X':
                continue
            body = question_text[m.end():matches[idx + 1].start() if idx + 1 < len(matches) else len(question_text)]
            body = re.sub(r'(?im)^.*(?:PAPIRVM BIBLIOTECONOMIA ESQUEMATIZADA|Capítulo: MÓDULO|ANOTAÇÕES:).*$','',body)
            body = re.sub(r'(?<=\w)-\s*\n\s*(?=\w)', '', body)
            content = limpar(body)
            if len(content) < 35 or re.search(r'(?im)^\s*[a-e][.)]\s+', body):
                continue
            results.append({'identificador': None, 'numero_no_caderno': nums[idx],
                'origem_prova_declarada': exam, 'contexto': context, 'texto': content,
                'gabarito_fonte': answers[idx], 'fontes': [{'id': meta['id'], 'nome': meta['nome']}],
                'status': 'triagem-pendente', 'observacao': 'Banca e associação ao gabarito dependem de conferência.'})
    return results


def coletar(texts, inventory):
    candidatos = []
    for meta in inventory:
        path = texts / (meta['id'] + '.txt')
        if not path.is_file():
            continue
        text = path.read_text(errors='replace')
        if meta['id'] == '18uQCP0IGW-_I5Rp6kbHKZEpGbxfCvORv':
            candidatos.extend(apostila_gabarito_em_blocos(text, meta))
        elif URL.search(text):
            candidatos.extend(tec(text, meta))
        elif BANCA.search(text):
            candidatos.extend(apostila(text, meta))
            candidatos.extend(apostila_esquematizada(text, meta))
    # A identidade por texto é apenas filtro de triagem: cada união deve ser revista.
    groups = {}
    ids_por_texto = {}
    for c in candidatos:
        signature = hashlib.sha256(chave_texto(c['texto']).encode()).hexdigest()
        source_key = c['identificador'] or 'texto-' + signature
        key = source_key if source_key in groups else ids_por_texto.get(signature, source_key)
        ids_por_texto.setdefault(signature, key)
        if key not in groups:
            groups[key] = c
            c['identificadores_encontrados'] = [c['identificador']] if c['identificador'] else []
        else:
            current = groups[key]
            current['fontes'].extend(x for x in c['fontes'] if x not in current['fontes'])
            if c['identificador'] and c['identificador'] not in current['identificadores_encontrados']:
                current['identificadores_encontrados'].append(c['identificador'])
            if current['gabarito_fonte'] != c['gabarito_fonte'] or chave_texto(current['texto']) != chave_texto(c['texto']):
                current['status'] = 'conflito-em-conferencia'
    return candidatos, list(groups.values())


def main():
    p = argparse.ArgumentParser(); p.add_argument('--textos', type=Path, required=True); p.add_argument('--inventario', type=Path, required=True); p.add_argument('--saida', type=Path, required=True)
    args = p.parse_args(); inv = json.loads(args.inventario.read_text())['arquivos']
    raw, unique = coletar(args.textos, inv)
    args.saida.write_text(json.dumps(unique, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'ocorrencias': len(raw), 'candidatos_distintos': len(unique), 'conflitos': sum(c['status'] != 'triagem-pendente' for c in unique)}, ensure_ascii=False))

if __name__ == '__main__':
    main()

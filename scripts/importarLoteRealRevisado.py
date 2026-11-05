#!/usr/bin/env python3
"""Integra um manifesto editorial privado já confrontado com seus cadernos.

Valida cobertura e integridade; não homologa gabaritos ou verdade conceitual.
Nenhum comentário é gerado por este script. Prepare e revise os textos antes.
"""
import argparse
import csv
import hashlib
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse


def chave(texto):
    partes = list(re.finditer(r'(?i)\bjulgue\s+(?:o|os|a|as)\b[^.]*\.\s*', texto))
    if partes and len(texto[partes[-1].end():].strip()) > 35:
        texto = texto[partes[-1].end():]
    texto = unicodedata.normalize('NFKD', texto.casefold())
    return re.sub(r'[^a-z0-9]', '', texto.encode('ascii', 'ignore').decode())


def integrar(manifesto, base, anotacoes, perfis, inline):
    lote = manifesto['lote']
    anteriores = [q for q in base if q.get('loteRevisao') != lote]
    antigos = anteriores + inline
    if len(antigos) != manifesto['baseEsperada']:
        raise ValueError('O banco anterior mudou; refaça a conferência antes de integrar.')
    entradas = manifesto['questoes']
    if len(entradas) != 300 or manifesto['quantidade'] != 300:
        raise ValueError('O lote precisa conter exatamente 300 revisões completas.')
    ids = {q['id'] for q in antigos}
    textos = {chave(q['item']) for q in antigos}
    if len(ids) != len(antigos):
        raise ValueError('IDs duplicados no banco anterior.')
    resultado = list(anteriores)
    notas = {id: a for id, a in anotacoes.items() if id in ids}
    for entrada in entradas:
        q, a, ev = (entrada[k] for k in ['questao', 'anotacao', 'evidencia'])
        ident = q['id']
        if ident in ids or chave(q['item']) in textos:
            raise ValueError('Questão duplicada: ' + ident)
        if q.get('loteRevisao') != lote or q.get('estadoConferencia') != 'caderno' or q.get('gabaritoUrl'):
            raise ValueError('Proveniência inconsistente: ' + ident)
        if q['gabarito'] not in ['C', 'E'] or q['gabarito'] != ev['gabarito']:
            raise ValueError('Gabarito inconsistente: ' + ident)
        if hashlib.sha256(q['item'].encode()).hexdigest() != ev['sha256Texto']:
            raise ValueError('Enunciado diferente da transcrição conferida: ' + ident)
        if q['modulo'] != 'M' + q['submoduloId'].split('.')[0] or a['perfil'] not in perfis:
            raise ValueError('Vínculo didático inválido: ' + ident)
        if not a['gatilho'] or a['gatilho'] not in q['item'] or len(a.get('exemplo', '')) < 80:
            raise ValueError('Trecho ou exemplo ausente: ' + ident)
        contraste = q.get('versao_correta' if q['gabarito'] == 'E' else 'versao_errada', '')
        if len(q['justificativa']) < 90 or len(contraste) < 30 or re.search(r'\bindevidamente\b', contraste, re.I):
            raise ValueError('Comentário ou contraste incompleto: ' + ident)
        if any(urlparse(q[k]).scheme != 'https' for k in ['provaUrl', 'acervoUrl']):
            raise ValueError('Link de fonte inválido: ' + ident)
        if ev['paginaEnunciado'] < 1 or ev['paginaGabarito'] < 1:
            raise ValueError('Localização da fonte ausente: ' + ident)
        ids.add(ident)
        textos.add(chave(q['item']))
        resultado.append(q)
        notas[ident] = a
    for campo, valores in [('comentários', [e['questao']['justificativa'] for e in entradas]),
                            ('exemplos', [e['anotacao']['exemplo'] for e in entradas])]:
        if len(set(valores)) != len(valores):
            raise ValueError('Há repetição literal entre os ' + campo + ' do lote.')
    return resultado, notas


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--manifesto', type=Path, required=True)
    parser.add_argument('--raiz', type=Path, default=Path.cwd())
    args = parser.parse_args()
    raiz = args.raiz
    dados = raiz / 'src/content/questoesReaisTriadas.json'
    notas = raiz / 'src/content/estudoReversoReais/anotacoes.json'
    perfis = json.loads((notas.parent / 'perfis.json').read_text())
    manifesto = json.loads(args.manifesto.read_text())
    base = json.loads(dados.read_text())
    # Os quatro itens oficiais em TS não mudam na importação; entram na deduplicação.
    ts = (dados.parent / 'questoesReais.ts').read_text()
    inline = [{'id': id, 'item': item} for id, item in re.findall(r"id: '([^']+)'[\s\S]*?\n\s*item: '([^']+)'", ts)]
    if len(inline) != 4:
        raise ValueError('A estrutura dos itens em TS mudou; atualize o importador.')
    fontes = json.loads((notas.parent / 'referencias.json').read_text())
    for e in manifesto['questoes']:
        if e['anotacao'].get('referencia') and e['anotacao']['referencia'] not in fontes:
            raise ValueError('Referência didática ausente: ' + e['questao']['id'])
    resultado, anotacoes = integrar(manifesto, base, json.loads(notas.read_text()), perfis, inline)
    assinaturas_anteriores = sorted([[q['id'], q['item'], q['contexto'], q['gabarito']] for q in base if q.get('loteRevisao') != manifesto['lote']])
    assinatura_anterior = hashlib.sha256(json.dumps(assinaturas_anteriores, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
    report = {
        'lote': manifesto['lote'], 'dataEditorial': manifesto['dataEditorial'],
        'novasQuestoes': len(manifesto['questoes']),
        'totalAntes': manifesto['baseEsperada'], 'totalDepois': len(resultado) + len(inline),
        'apostilaEsquematizada': manifesto['apostilaEsquematizada'],
        'outrosCadernos': manifesto['outrosCadernos'],
        'ids': [e['questao']['id'] for e in manifesto['questoes']],
        'porModulo': dict(Counter(e['questao']['modulo'] for e in manifesto['questoes'])),
        'gabaritos': dict(Counter(e['questao']['gabarito'] for e in manifesto['questoes'])),
        'criterio': manifesto['criterio'],
        'assinaturaItensJSONAnteriores': assinatura_anterior,
        'evidencias': [{'id': e['questao']['id'], **e['evidencia']} for e in manifesto['questoes']],
    }
    for destino, objeto in [(dados, resultado), (notas, anotacoes),
                            (raiz/'docs/simulados-reais/LOTE-300-ACERVO-05.json', report)]:
        temporario = destino.with_suffix(destino.suffix + '.tmp')
        temporario.write_text(json.dumps(objeto, ensure_ascii=False, indent=2) + '\n')
        temporario.replace(destino)
    with (raiz/'docs/simulados-reais/LOTE-300-ACERVO-05.csv').open('w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f, delimiter=';')
        writer.writerow(['id', 'modulo', 'submodulo', 'gabarito', 'fonte', 'pagina_enunciado', 'pagina_gabarito', 'identificador_tec', 'trecho_decisivo'])
        for e in manifesto['questoes']:
            q, a, ev = e['questao'], e['anotacao'], e['evidencia']
            writer.writerow([q['id'], q['modulo'], q['submoduloId'], q['gabarito'], ev['arquivo'], ev['paginaEnunciado'], ev['paginaGabarito'], ev.get('identificadorTec', ''), a['gatilho']])
    print(json.dumps({k: report[k] for k in ['novasQuestoes', 'totalAntes', 'totalDepois', 'porModulo']}, ensure_ascii=False))


if __name__ == '__main__':
    main()

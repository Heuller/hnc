#!/usr/bin/env python3
"""Integra lotes conferidos de 300 itens ou curadorias por lacunas de tamanho declarado.

O script valida o manifesto; não produz comentários nem certifica sua verdade.
Dados e conferências de lotes anteriores permanecem intactos.
"""
import argparse
import csv
import hashlib
import json
import re
import unicodedata
from collections import Counter
from difflib import SequenceMatcher
from pathlib import Path
from urllib.parse import urlparse


def assinatura(objeto):
    return hashlib.sha256(json.dumps(objeto, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode()).hexdigest()


def chave(texto):
    return re.sub('[^a-z0-9]', '', unicodedata.normalize('NFKD', texto.lower()).encode('ascii', 'ignore').decode())


def integrar(manifesto, base, inline, anotacoes, perfis, referencias, registro, *, curadoria=False):
    if len(base) + len(inline) != manifesto['baseHistoricaEsperada'] or assinatura(base) != manifesto['sha256BaseJSON']:
        raise ValueError('O banco de origem mudou; refaça a conferência.')
    entradas = manifesto['questoes']
    quantidade = manifesto['quantidade'] if curadoria else 300
    if curadoria:
        if manifesto.get('tipoRevisao') != 'curadoria-lacunas' or type(quantidade) is not int or not 1 <= quantidade <= 300:
            raise ValueError('Curadoria por lacunas inválida.')
        objetivos = [e.get('curadoria', {}).get('objetivoId') for e in entradas]
        if any(not isinstance(objetivo, str) or not objetivo.strip() for objetivo in objetivos) or len(set(objetivos)) != len(objetivos):
            raise ValueError('A curadoria exige objetivos pedagógicos distintos.')
        if any(not isinstance(e['curadoria'].get(k), str) or len(e['curadoria'][k].strip()) < 40 for e in entradas for k in ['ganhoPedagogico', 'comparacaoComBanco']):
            raise ValueError('A curadoria exige justificativa de contribuição e comparação com o banco.')
    if len(entradas) != quantidade or manifesto['quantidade'] != quantidade:
        raise ValueError('São necessárias 300 revisões completas.' if not curadoria else 'Curadoria incompleta.')
    ativos_anteriores = [q for q in [*base, *inline] if registro['itens'].get(q['id'], {}).get('gabarito') != 'X' and (q.get('estadoConferencia') != 'caderno' or q['id'] in registro['itens'])]
    if len(ativos_anteriores) != manifesto['baseAtivaEsperada']:
        raise ValueError('A seleção ativa anterior mudou.')
    novos_perfis = {**perfis, **manifesto['perfisNovos']}
    novas_referencias = {**referencias, **manifesto['referenciasNovas']}
    if any(perfis[k] != manifesto['perfisNovos'][k] for k in set(perfis).intersection(manifesto['perfisNovos'])) or any(referencias[k] != manifesto['referenciasNovas'][k] for k in set(referencias).intersection(manifesto['referenciasNovas'])):
        raise ValueError('O lote não pode sobrescrever perfis ou referências anteriores.')
    for p in manifesto['perfisNovos'].values():
        if p['referencia'] not in novas_referencias or any(not p[k] for k in ['titulo', 'regra', 'exemplo', 'tecnica', 'contrasteErrado']):
            raise ValueError('Perfil conceitual incompleto.')
    ids = {q['id'] for q in [*base, *inline]}
    textos = [(chave(q['item']), q['id']) for q in [*base, *inline]]
    textos += [(chave(ed['item']), id) for id, ed in registro['editorial'].items() if ed.get('item')]
    oficiais = {(registro['fontes'][r['fonteId']]['provaUrl'], r['numero']) for r in registro['itens'].values()}
    novas_questoes = []; notas = dict(anotacoes); conferencias = {}; evidencias = []
    campos_fonte = ['provaUrl', 'gabaritoUrl', 'modo', 'tipoGabarito', 'codigo']
    fontes = {}
    for id, f in manifesto['fontes'].items():
        if id not in registro['fontes'] or any(f[k] != registro['fontes'][id][k] for k in campos_fonte):
            raise ValueError('Fonte diferente da conferência anterior: ' + id)
        for k in ['provaUrl', 'gabaritoUrl']:
            u = urlparse(f[k])
            if u.scheme != 'https' or f['modo'] == 'original' and u.hostname not in ['cdn.cebraspe.org.br', 'www.cespe.unb.br', 'www.cebraspe.org.br']:
                raise ValueError('Espelho ou endereço inválido apresentado como original.')
        fontes[id] = {k: f[k] for k in campos_fonte}
    for e in entradas:
        q, a, ev = (e[k] for k in ['questao', 'anotacao', 'evidencia'])
        id = q['id']; k = chave(q['item'])
        if id in ids or any(k == t for t, _ in textos):
            raise ValueError('Questão duplicada: ' + id)
        for t, anterior in textos:
            if min(len(t), len(k)) / max(len(t), len(k)) < .9:
                continue
            sm = SequenceMatcher(None, t, k, autojunk=False)
            if sm.quick_ratio() > .94 and sm.ratio() > .94:
                raise ValueError('Questão quase duplicada: ' + id + ' / ' + anterior)
        if q.get('loteRevisao') != manifesto['lote'] or q.get('estadoConferencia') != 'caderno':
            raise ValueError('Origem do lote inconsistente: ' + id)
        if q['gabarito'] not in ['C', 'E'] or q['gabarito'] != ev['gabaritoOficial']:
            raise ValueError('Gabarito inválido ou anulação incluída: ' + id)
        if hashlib.sha256(q['item'].encode()).hexdigest() != ev['sha256ItemConferido'] or ev['sha256ItemAnterior'] != ev['sha256ItemConferido']:
            raise ValueError('Enunciado diferente da revisão: ' + id)
        f = fontes[ev['fonteId']]
        if any(ev[k] != f[k] for k in ['provaUrl', 'gabaritoUrl', 'modo']) or not 1 <= ev['numeroOficial'] <= 200 or ev['paginaProva'] < 1:
            raise ValueError('Evidência documental inconsistente: ' + id)
        identidade = (f['provaUrl'], ev['numeroOficial'])
        if identidade in oficiais:
            raise ValueError('Mesmo item oficial já incorporado: ' + id)
        modulo_esperado = 'M2.5' if q['submoduloId'] == '2.5' else 'M' + q['submoduloId'].split('.')[0]
        if a['perfil'] not in novos_perfis or q['modulo'] != modulo_esperado:
            raise ValueError('Vínculo didático inválido: ' + id)
        if not a['gatilho'] or a['gatilho'] not in q['item'] or len(a.get('exemplo', '')) < 80:
            raise ValueError('Trecho decisivo ou exemplo ausente: ' + id)
        referencia = a.get('referencia', novos_perfis[a['perfil']]['referencia'])
        if referencia not in novas_referencias:
            raise ValueError('Referência inexistente: ' + id)
        contraste = q.get('versao_correta' if q['gabarito'] == 'E' else 'versao_errada', '')
        if len(q['justificativa']) < 150 or len(contraste) < 30 or re.search(r'\bindevidamente\b', contraste, re.I):
            raise ValueError('Estudo reverso incompleto: ' + id)
        if ev['gabaritoAcervo'] != ev['gabaritoOficial'] and (ev['resultado'] != 'corrigida' or 'definitivo' not in q['justificativa'].lower()):
            raise ValueError('Divergência sem explicação explícita: ' + id)
        ids.add(id); textos.append((k, id)); oficiais.add(identidade)
        novas_questoes.append(q); notas[id] = a
        conferencias[id] = {'fonteId': ev['fonteId'], 'numero': ev['numeroOficial'], 'gabarito': ev['gabaritoOficial']}
        evidencias.append({'id': id, **ev})
    for campo in ['justificativa', 'exemplo', 'contraste']:
        valores = [e['anotacao']['exemplo'] if campo == 'exemplo' else e['questao']['justificativa'] if campo == 'justificativa' else e['questao'].get('versao_correta' if e['questao']['gabarito'] == 'E' else 'versao_errada') for e in entradas]
        if len(set(valores)) != quantidade:
            raise ValueError('Blocos repetidos: ' + campo)
    report = {k: manifesto[k] for k in ['lote', 'dataEditorial', 'criterio', 'apostilaEsquematizada', 'outrasFontes']}
    report.update(novasQuestoes=quantidade, totalAntes=manifesto['baseAtivaEsperada'], totalDepois=manifesto['baseAtivaEsperada'] + quantidade,
                  baseHistoricaAntes=manifesto['baseHistoricaEsperada'], sha256BaseJSON=manifesto['sha256BaseJSON'],
                  ids=[q['id'] for q in novas_questoes], porModulo=dict(Counter(q['modulo'] for q in novas_questoes)),
                  gabaritos=dict(Counter(q['gabarito'] for q in novas_questoes)),
                  confrontoNaOrigem=sum(e['modo'] == 'original' for e in evidencias), confrontoEmCopia=sum(e['modo'] == 'copia' for e in evidencias),
                  gabaritosCorrigidos=sum(e['resultado'] == 'corrigida' for e in evidencias),
                  conferencia={'fontes': manifesto['fontes'], 'itens': evidencias})
    if curadoria:
        report.update(tipoRevisao='curadoria-lacunas', objetivos=[{'id': e['questao']['id'], **e['curadoria']} for e in entradas])
    return novas_questoes, notas, novos_perfis, novas_referencias, {'fontes': fontes, 'itens': conferencias, 'editorial': {}}, report


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--manifesto', required=True, type=Path)
    parser.add_argument('--write', action='store_true')
    parser.add_argument('--raiz', type=Path, default=Path.cwd())
    parser.add_argument('--numero-lote', type=int, default=6)
    parser.add_argument('--curadoria', action='store_true', help='Quantidade variável, com justificativa de lacuna e objetivo distinto por item; não altera o contrato dos lotes de 300.')
    parser.add_argument('--fontes-conferidas', type=Path,
                        help='Registro de fontes adicionais já conferidas documentalmente; não gera nem valida a revisão conceitual.')
    args = parser.parse_args(); raiz = args.raiz
    if not 6 <= args.numero_lote <= 99:
        raise ValueError('Número de lote fora da sequência admitida.')
    ler = lambda p: json.loads((raiz/p).read_text())
    manifesto = json.loads(args.manifesto.read_text())
    if args.curadoria:
        anteriores = set()
        for arquivo in (raiz/'docs/simulados-reais').glob('CURADORIA-LACUNAS-*.json'):
            if int(arquivo.stem.rsplit('-', 1)[1]) < args.numero_lote:
                anteriores.update(o['objetivoId'] for o in json.loads(arquivo.read_text())['objetivos'])
        if anteriores.intersection(e.get('curadoria', {}).get('objetivoId') for e in manifesto['questoes']):
            raise ValueError('Objetivo pedagógico já priorizado em curadoria anterior; documente uma contribuição distinta.')
    codigo = (raiz/'src/content/questoesReais.ts').read_text()
    inline = [{'id': id, 'item': item} for id, item in re.findall(r"id: '([^']+)'[\s\S]*?\n\s*item: '([^']+)'", codigo)]
    if len(inline) != 4:
        raise ValueError('A estrutura dos itens inline mudou.')
    base = ler('src/content/questoesReaisTriadas.json')
    registro_anterior = ler('src/content/conferenciaOficialReais/registro.json')
    for numero in range(6, args.numero_lote):
        base += ler(f'src/content/questoesReaisLote{numero:02d}.json')
        anterior = ler(f'src/content/conferenciaOficialReais/lote{numero:02d}.json')
        for campo in ['fontes', 'itens', 'editorial']:
            for id, valor in anterior[campo].items():
                if id in registro_anterior[campo] and registro_anterior[campo][id] != valor:
                    raise ValueError('Conferências anteriores conflitantes: ' + id)
                registro_anterior[campo][id] = valor
    if args.fontes_conferidas:
        for id, fonte in json.loads(args.fontes_conferidas.read_text()).items():
            if any(not re.fullmatch('[a-f0-9]{64}', fonte.get(k, '')) for k in ['sha256TextoExtraidoProva', 'sha256TextoExtraidoGabarito']):
                raise ValueError('Fonte adicional sem assinaturas da consulta: ' + id)
            campos = ['provaUrl', 'gabaritoUrl', 'modo', 'tipoGabarito', 'codigo']
            registro_fonte = {k: fonte[k] for k in campos}
            if id in registro_anterior['fontes'] and registro_anterior['fontes'][id] != registro_fonte:
                raise ValueError('Fonte adicional não pode substituir uma fonte anterior: ' + id)
            registro_anterior['fontes'][id] = registro_fonte
    resultado = integrar(manifesto, base, inline,
                         ler('src/content/estudoReversoReais/anotacoes.json'), ler('src/content/estudoReversoReais/perfis.json'),
                         ler('src/content/estudoReversoReais/referencias.json'), registro_anterior, curadoria=args.curadoria)
    questoes, notas, perfis, referencias, registro, report = resultado
    if args.write:
        numero = f'{args.numero_lote:02d}'
        prefixo = 'CURADORIA-LACUNAS' if args.curadoria else 'LOTE-300-ACERVO'
        for nome, objeto in [(f'src/content/questoesReaisLote{numero}.json', questoes), ('src/content/estudoReversoReais/anotacoes.json', notas),
                             ('src/content/estudoReversoReais/perfis.json', perfis), ('src/content/estudoReversoReais/referencias.json', referencias),
                             (f'src/content/conferenciaOficialReais/lote{numero}.json', registro), (f'docs/simulados-reais/{prefixo}-{numero}.json', report)]:
            p = raiz/nome; tmp = p.with_suffix('.json.tmp'); tmp.write_text(json.dumps(objeto, ensure_ascii=False, indent=2)+'\n'); tmp.replace(p)
        with (raiz/f'docs/simulados-reais/{prefixo}-{numero}.csv').open('w', encoding='utf-8-sig', newline='') as f:
            w = csv.writer(f, delimiter=';', lineterminator='\n'); w.writerow(['id', 'modulo', 'submodulo', 'gabarito', 'numero_oficial', 'pagina_prova', 'prova_url', 'gabarito_url'])
            for q, ev in zip(questoes, report['conferencia']['itens']):
                w.writerow([q['id'], q['modulo'], q['submoduloId'], q['gabarito'], ev['numeroOficial'], ev['paginaProva'], ev['provaUrl'], ev['gabaritoUrl']])
    print(json.dumps({k: report[k] for k in ['novasQuestoes', 'totalAntes', 'totalDepois', 'porModulo', 'confrontoNaOrigem', 'confrontoEmCopia', 'gabaritosCorrigidos']}, ensure_ascii=False))


if __name__ == '__main__':
    main()

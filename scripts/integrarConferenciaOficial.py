#!/usr/bin/env python3
"""Integra uma conferência documental revisada, sem gerar homologações.

O manifesto é editorial: correspondência textual por si só não autentica gabarito.
O banco original permanece como histórico; o registro determina a versão ativa.
"""
import argparse
import csv
import hashlib
import json
from pathlib import Path
from urllib.parse import urlparse


def validar(manifesto, registro, base):
    porid = {q['id']: q for q in base if q.get('estadoConferencia') == 'caderno'}
    revisoes = manifesto['itens']
    if len(revisoes) != len(porid) or {r['id'] for r in revisoes} != set(porid):
        raise ValueError('A conferência precisa cobrir todos os itens pendentes do banco de origem.')
    if len({r['id'] for r in revisoes}) != len(revisoes):
        raise ValueError('Revisões duplicadas.')
    ativos = {}
    for r in revisoes:
        id = r['id']; q = porid[id]
        if hashlib.sha256(q['item'].encode()).hexdigest() != r['sha256ItemAnterior']:
            raise ValueError('O enunciado de origem mudou: ' + id)
        if r['resultado'] == 'pendente':
            if id in registro['itens'] or not r.get('motivo'):
                raise ValueError('Item pendente promovido ou sem motivo: ' + id)
            continue
        n = registro['itens'][id]; f = registro['fontes'][n['fonteId']]
        if n['gabarito'] != r['gabaritoOficial'] or n['numero'] != r['numeroOficial'] or n['fonteId'] != r['fonteId']:
            raise ValueError('Registro diferente da evidência: ' + id)
        evidencia = manifesto['fontes'][n['fonteId']]
        if any(f[campo] != evidencia[campo] for campo in ['provaUrl', 'gabaritoUrl', 'modo', 'tipoGabarito', 'codigo']):
            raise ValueError('Fonte diferente da evidência: ' + id)
        if n['gabarito'] not in ['C', 'E', 'X'] or r['paginaProva'] < 1:
            raise ValueError('Gabarito ou localização inválidos: ' + id)
        for campo in ['provaUrl', 'gabaritoUrl']:
            u = urlparse(f[campo])
            if u.scheme != 'https': raise ValueError('Fonte sem HTTPS: ' + id)
            if f['modo'] == 'original' and u.hostname not in ['cdn.cebraspe.org.br', 'www.cespe.unb.br', 'www.cebraspe.org.br']:
                raise ValueError('Espelho apresentado como arquivo da banca: ' + id)
        if f['modo'] != r['modo'] or f['modo'] not in ['original', 'copia']:
            raise ValueError('Modalidade de conferência inválida: ' + id)
        ed = registro['editorial'].get(id, {})
        if q['gabarito'] != n['gabarito'] and n['gabarito'] != 'X':
            if r['resultado'] != 'corrigida' or not ed.get('justificativa') or not ed.get('versao_correta'):
                raise ValueError('Mudança de gabarito sem nova explicação: ' + id)
        item = ed.get('item', q['item'])
        if hashlib.sha256(item.encode()).hexdigest() != r['sha256ItemConferido']:
            raise ValueError('Redação conferida não corresponde ao registro: ' + id)
        if (n['gabarito'] == 'X') != (r['resultado'] == 'anulada'):
            raise ValueError('Anulação inconsistente: ' + id)
        ativos[id] = n
    if set(ativos) != set(registro['itens']):
        raise ValueError('Registro contém item sem evidência.')
    if not set(registro['editorial']).issubset(ativos):
        raise ValueError('Correção editorial sem conferência.')
    return True


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--manifesto', type=Path, required=True)
    parser.add_argument('--registro', type=Path, required=True)
    parser.add_argument('--raiz', type=Path, default=Path.cwd())
    args = parser.parse_args()
    manifesto = json.loads(args.manifesto.read_text())
    registro = json.loads(args.registro.read_text())
    base = json.loads((args.raiz/'src/content/questoesReaisTriadas.json').read_text())
    validar(manifesto, registro, base)
    for p, objeto in [(args.raiz/'src/content/conferenciaOficialReais/registro.json', registro),
                       (args.raiz/'docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.json', manifesto)]:
        tmp = p.with_suffix('.json.tmp')
        tmp.write_text(json.dumps(objeto, ensure_ascii=False, indent=2)+'\n')
        tmp.replace(p)
    p = args.raiz/'docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.csv'
    with p.open('w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f, delimiter=';')
        writer.writerow(['id','prova_declarada','resultado','modalidade','item_oficial','gabarito_anterior','gabarito_definitivo','pagina_prova','prova_url','gabarito_url','motivo_pendencia'])
        for r in manifesto['itens']:
            fonte = manifesto['fontes'].get(r.get('fonteId'), {})
            writer.writerow([r['id'],r['provaDeclarada'],r['resultado'],r.get('modo',''),r.get('numeroOficial',''),r.get('gabaritoAcervo',''),r.get('gabaritoOficial',''),r.get('paginaProva',''),fonte.get('provaUrl',''),fonte.get('gabaritoUrl',''),r.get('motivo','')])
    print(json.dumps(manifesto['resumo'], ensure_ascii=False))


if __name__ == '__main__':
    main()

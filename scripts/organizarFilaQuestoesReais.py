#!/usr/bin/env python3
"""Organiza uma fila privada de revisão. Não publica nem homologa questões."""
import argparse
import hashlib
import json
import re
import unicodedata
from pathlib import Path


def normalizar(texto):
    texto = unicodedata.normalize('NFKD', texto.casefold())
    return re.sub(r'[^a-z0-9]', '', ''.join(c for c in texto if not unicodedata.combining(c)))


def separar(c):
    texto = c['texto'].strip()
    # Apenas instrução no início, terminada por julgue. O prefixo fica preservado.
    m = re.match(r'(?is)^((?:(?:acerca|a respeito|com rela[çc][ãa]o|no que|considerando|com base)[^.]*?[,.:]\s*)?julgue\b[^.]*\.)\s*(.+)$', texto)
    if m:
        return m.group(2).strip(), ' '.join(filter(None, [c.get('contexto'), m.group(1)]))
    return texto, c.get('contexto', '')


def organizar(candidatos):
    grupos = {}
    for c in candidatos:
        item, contexto = separar(c)
        dependente = bool(re.search(r'(?i)\b(texto|imagem|figura|gr[áa]fico|tabela|precedente|supracitado|situa[çc][ãa]o hipot[ée]tica)\b', item))
        signature = normalizar(item) + ('|' + normalizar(contexto) if dependente else '')
        key = hashlib.sha256(signature.encode()).hexdigest()[:24]
        if key not in grupos:
            grupos[key] = {'id_fila': key, 'enunciado': item, 'depende_de_contexto': dependente,
                'variantes': [], 'gabaritos_encontrados': [], 'fontes': [], 'identificadores': [],
                'status': 'aguarda-revisao'}
        g = grupos[key]
        variante = {'texto_original': c['texto'], 'contexto': contexto,
            'prova_declarada': c['origem_prova_declarada'], 'numero_na_fonte': c['numero_no_caderno'],
            'gabarito_fonte': c['gabarito_fonte']}
        if variante not in g['variantes']:
            g['variantes'].append(variante)
        if c['gabarito_fonte'] not in g['gabaritos_encontrados']:
            g['gabaritos_encontrados'].append(c['gabarito_fonte'])
        for f in c['fontes']:
            if f not in g['fontes']:
                g['fontes'].append(f)
        for ident in c.get('identificadores_encontrados', []):
            if ident not in g['identificadores']:
                g['identificadores'].append(ident)
        if len(g['gabaritos_encontrados']) > 1:
            g['status'] = 'conflito-de-gabarito'
        elif c['status'] == 'conflito-em-conferencia' and g['status'] == 'aguarda-revisao':
            g['status'] = 'divergencia-na-fonte'
    return list(grupos.values())


def main():
    p = argparse.ArgumentParser(); p.add_argument('--entrada', type=Path, required=True); p.add_argument('--saida', type=Path, required=True)
    args = p.parse_args(); entrada = json.loads(args.entrada.read_text()); fila = organizar(entrada)
    args.saida.write_text(json.dumps(fila, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'candidatos_entrada': len(entrada), 'grupos_revisao': len(fila),
        'agrupamentos_adicionais': len(entrada)-len(fila),
        'conflitos': sum(q['status']!='aguarda-revisao' for q in fila),
        'dependentes_de_contexto': sum(q['depende_de_contexto'] for q in fila)}, ensure_ascii=False))

if __name__ == '__main__':
    main()

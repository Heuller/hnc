#!/usr/bin/env python3
"""Importa comentários editoriais específicos; nunca gera fundamentação automaticamente."""
import argparse
import csv
import hashlib
import importlib.util
import json
import re
from pathlib import Path

SOURCE_ID = '18uQCP0IGW-_I5Rp6kbHKZEpGbxfCvORv'
BATCH = 'esquematizada-300-2026-11-05'

def carregar_extrator():
    spec = importlib.util.spec_from_file_location('extrator', Path(__file__).with_name('extrairCandidatosCebraspe.py'))
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    return m

def main():
    p = argparse.ArgumentParser(); p.add_argument('--texto', type=Path, required=True); p.add_argument('--comentarios', type=Path, required=True); p.add_argument('--destino', type=Path, required=True); p.add_argument('--relatorio', type=Path, required=True)
    p.add_argument('--lote', default=BATCH, help='Identificador do lote; preserva os demais lotes já importados.')
    args = p.parse_args(); e = carregar_extrator()
    source = e.apostila_gabarito_em_blocos(args.texto.read_text(), {'id':SOURCE_ID,'nome':'PAPIRVM BIBLIOTECONOMIA ESQUEMATIZADA.pdf'})
    bynum = {}
    for q in source:
        if q['numero_no_caderno'] in bynum: raise ValueError('Numeração duplicada na fonte')
        bynum[q['numero_no_caderno']] = q
    dest = json.loads(args.destino.read_text()); base = [q for q in dest if q.get('loteRevisao') != args.lote]
    seen = {e.chave_texto(q['item']) for q in base}
    ts = args.destino.with_name('questoesReais.ts').read_text()
    seen.update(e.chave_texto(q) for q in re.findall(r"\n\s*item: '([^']+)'",ts))
    rows = list(csv.reader(args.comentarios.open(),delimiter='\t'))
    if len(rows) != 300 or len({r[0] for r in rows}) != 300: raise ValueError('Lote deve ter 300 comentários distintos')
    additions = []
    for row in rows:
        if len(row) != 4: raise ValueError('Registro TSV inválido')
        num,sub,comment,correct = row; q=bynum[int(num)]; text=q['texto']
        if len(comment) < 90: raise ValueError('Comentário insuficiente: '+num)
        if q['gabarito_fonte']=='E' and len(correct)<30: raise ValueError('Correção ausente: '+num)
        key=e.chave_texto(text)
        if key in seen: raise ValueError('Duplicata ativa ou no lote: '+num)
        seen.add(key)
        ident='real-esquematizada-'+num+'-'+hashlib.sha256(key.encode()).hexdigest()[:10]
        rec={'id':ident,'modulo':'M'+sub.split('.')[0],'submoduloId':sub,'prova':q['origem_prova_declarada']+' · atribuição na apostila','provaUrl':'https://drive.google.com/file/d/'+SOURCE_ID+'/view','acervoUrl':'https://drive.google.com/file/d/'+SOURCE_ID+'/view','contexto':q.get('contexto',''),'item':text,'gabarito':q['gabarito_fonte'],'justificativa':comment,'fonte':'PAPIRVM Biblioteconomia Esquematizada, afirmação '+num+', gabarito do bloco; comentário editorial HNC e aprofundamento na aula '+sub+'.','estadoConferencia':'caderno','loteRevisao':args.lote,'numeroNaFonte':int(num)}
        if correct:rec['versao_correta']=correct
        additions.append(rec)
    args.destino.write_text(json.dumps(base+additions,ensure_ascii=False,indent=2)+'\n')
    report={'lote':args.lote,'novasQuestoes':len(additions),'fonteDrive':SOURCE_ID,'ids':[q['id'] for q in additions],'criterio':'300 comentários editoriais específicos; gabaritos atribuídos à apostila, sem presumir confronto oficial.', 'totalAntes':len(base)+4, 'totalDepois':len(base+additions)+4}
    args.relatorio.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'novas':len(additions),'total_json':len(base+additions),'total_com_4_itens_ts':len(base+additions)+4}))

if __name__ == '__main__':main()

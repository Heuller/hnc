"""Executa exemplos publicados da aula 6.6 contra entradas positivas e negativas.
Requer apenas Python 3 e Node. Não consulta nem altera dados de terceiros.
"""
import contextlib
import io
import json
import pathlib
import re
import sqlite3
import subprocess

root = pathlib.Path(__file__).resolve().parents[1]
aula = json.loads((root / 'src/content/reforma/aulas/sub-6-6.json').read_text())
blocks = [(lang, code) for unit in aula['unidadesAprendizagem']
          for lang, code in re.findall(r'```(\w+)\n(.*?)```', unit['conteudo'], re.S)]
sql = [code for lang, code in blocks if lang == 'sql']
con = sqlite3.connect(':memory:')
con.executescript('''
CREATE TABLE assunto(id INTEGER PRIMARY KEY, nome TEXT);
CREATE TABLE livro(id INTEGER PRIMARY KEY, ano INTEGER);
CREATE TABLE livro_assunto(id_assunto INTEGER,id_livro INTEGER,PRIMARY KEY(id_assunto,id_livro));
INSERT INTO assunto VALUES(1,'Direito Constitucional'),(2,'Ciência Política'),(3,'História');
INSERT INTO livro VALUES(1,2020),(2,2021),(3,2022),(4,2019),(5,2023),(6,2024);
INSERT INTO livro_assunto VALUES(1,1),(1,2),(1,3),(1,4),(2,5),(2,6),(3,4);
CREATE TABLE proposicao(id INTEGER PRIMARY KEY);
CREATE TABLE relatoria(id_proposicao INTEGER, atual INTEGER, id_relator INTEGER);
INSERT INTO proposicao VALUES(1),(2),(3),(4);
INSERT INTO relatoria VALUES(1,1,10),(1,0,NULL),(2,0,20),(3,1,NULL);
''')
assert con.execute(sql[0]).fetchall() == [('Direito Constitucional', 3), ('Ciência Política', 2)]
assert con.execute(sql[1]).fetchall() == [(2,), (3,), (4,)]
env = {}
with contextlib.redirect_stdout(io.StringIO()):
    for lang, code in blocks:
        if lang == 'python':
            exec(compile(code, 'aula-6.6', 'exec'), env)
assert env['m'].groups() == ('PL', '1042', '2026')
assert env['numeros'] == ['102', '37', '5']
assert re.findall(env['padrao'], 'artesanato; Art. 102', re.IGNORECASE) == ['102']
pattern = r'(PL|PLP|PEC|PDL)[ \t]+([0-9]{1,5})/([0-9]{4})'
for invalid in ['MPV 100/2026', 'PL 123456/2026', 'PL 1/2026\n', 'PL\n1/2026']:
    assert re.fullmatch(pattern, invalid) is None
for text, valid in [('020',True),('025.4',True),('025..4',False),('025.4.1',False)]:
    assert bool(re.fullmatch(r'[0-9]{3}(?:\.[0-9]+)?', text)) == valid
js = next(code for lang, code in blocks if lang == 'javascript')
subprocess.run(['node', '--input-type=module', '-e', js + '''
import assert from 'node:assert/strict';
for(const response of [null, {}, {links:[]}, {links:[null]}, {links:'invalid'}]) {
  assert.equal(extrairProximaPagina(response),null);
}
assert.equal(extrairProximaPagina({links:[{rel:'next',href:'https://example.org/pagina/2'}]}),
  'https://example.org/pagina/2');
'''], check=True)
print('Aula 6.6: SQL, regex e paginação executados; casos positivos e negativos aprovados.')

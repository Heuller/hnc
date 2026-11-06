import copy
import importlib.util
import json
import re
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location('lote_conferido', RAIZ/'scripts/importarLoteRealConferido.py')
modulo = importlib.util.module_from_spec(spec)
spec.loader.exec_module(modulo)


class ImportacaoConferidaTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        ler = lambda nome: json.loads((RAIZ/nome).read_text())
        cls.base = ler('src/content/questoesReaisTriadas.json')
        cls.notas = ler('src/content/estudoReversoReais/anotacoes.json')
        cls.perfis = ler('src/content/estudoReversoReais/perfis.json')
        cls.refs = ler('src/content/estudoReversoReais/referencias.json')
        cls.registro = ler('src/content/conferenciaOficialReais/registro.json')
        codigo = (RAIZ/'src/content/questoesReais.ts').read_text()
        cls.inline = [{'id': id, 'item': item} for id, item in re.findall(r"id: '([^']+)'[\s\S]*?\n\s*item: '([^']+)'", codigo)]
        report = ler('docs/simulados-reais/LOTE-300-ACERVO-06.json')
        evidencias = {e['id']: e for e in report['conferencia']['itens']}
        cls.questoes = ler('src/content/questoesReaisLote06.json')
        cls.manifesto = {**report, 'baseHistoricaEsperada': report['baseHistoricaAntes'],
                         'baseAtivaEsperada': report['totalAntes'], 'quantidade': 300,
                         'fontes': report['conferencia']['fontes'],
                         'perfisNovos': {k: cls.perfis[k] for k in ['rag', 'heuristicas', 'redes-neurais']},
                         'referenciasNovas': {k: cls.refs[k] for k in ['rag-lewis-2020', 'aima-busca', 'deep-learning-mlp']},
                         'questoes': [{'questao': q, 'anotacao': cls.notas[q['id']], 'evidencia': evidencias[q['id']]} for q in cls.questoes]}

    def integrar(self, manifesto=None, base=None):
        return modulo.integrar(manifesto or self.manifesto, base or self.base, self.inline, self.notas, self.perfis, self.refs, self.registro)

    def test_reproduz_o_lote_publico_sem_alterar_o_historico(self):
        antes = modulo.assinatura(self.base)
        resultado = self.integrar()
        self.assertEqual(resultado[0], self.questoes)
        self.assertEqual(resultado[5]['totalDepois'], 1829)
        self.assertEqual(modulo.assinatura(self.base), antes)
        self.assertEqual(self.integrar()[0], resultado[0])

    def test_recusa_mudanca_posterior_no_banco_anterior(self):
        base = copy.deepcopy(self.base); base[0]['item'] += ' Alteração.'
        with self.assertRaisesRegex(ValueError, 'banco de origem mudou'):
            self.integrar(base=base)

    def test_recusa_mesmo_item_oficial_com_outro_id(self):
        m = copy.deepcopy(self.manifesto)
        e = m['questoes'][1]['evidencia']; anterior = m['questoes'][0]['evidencia']
        for k in ['provaUrl', 'gabaritoUrl', 'modo', 'fonteId', 'numeroOficial']:
            e[k] = anterior[k]
        with self.assertRaisesRegex(ValueError, 'Mesmo item oficial'):
            self.integrar(m)

    def test_recusa_anulacao_no_lote_de_treino(self):
        m = copy.deepcopy(self.manifesto)
        m['questoes'][0]['questao']['gabarito'] = 'X'
        m['questoes'][0]['evidencia']['gabaritoOficial'] = 'X'
        with self.assertRaisesRegex(ValueError, 'anulação incluída'):
            self.integrar(m)

    def test_recusa_comentario_sem_fundamentacao_preparada(self):
        m = copy.deepcopy(self.manifesto); m['questoes'][0]['questao']['justificativa'] = 'Conforme o gabarito.'
        with self.assertRaisesRegex(ValueError, 'Estudo reverso incompleto'):
            self.integrar(m)

    def test_recusa_troca_de_documento_da_fonte(self):
        m = copy.deepcopy(self.manifesto); f = next(iter(m['fontes'].values())); f['gabaritoUrl'] = f['provaUrl']
        with self.assertRaisesRegex(ValueError, 'Fonte diferente'):
            self.integrar(m)

    def test_recusa_ausencia_do_exemplo_individual(self):
        m = copy.deepcopy(self.manifesto); m['questoes'][0]['anotacao']['exemplo'] = ''
        with self.assertRaisesRegex(ValueError, 'exemplo ausente'):
            self.integrar(m)


class ContinuacaoLotesCLITest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        ler = lambda nome: json.loads((RAIZ/nome).read_text())
        report = ler('docs/simulados-reais/LOTE-300-ACERVO-07.json')
        notas = ler('src/content/estudoReversoReais/anotacoes.json')
        perfis = ler('src/content/estudoReversoReais/perfis.json')
        refs = ler('src/content/estudoReversoReais/referencias.json')
        questoes = ler('src/content/questoesReaisLote07.json')
        ev = {e['id']: e for e in report['conferencia']['itens']}
        cls.fontes = report['conferencia']['fontes']
        cls.manifesto = {**report, 'baseHistoricaEsperada': report['baseHistoricaAntes'],
                         'baseAtivaEsperada': report['totalAntes'], 'quantidade': 300,
                         'fontes': cls.fontes, 'perfisNovos': {}, 'referenciasNovas': {},
                         'questoes': [{'questao': q, 'anotacao': notas[q['id']], 'evidencia': ev[q['id']]} for q in questoes]}
        cls.anteriores = ler('src/content/conferenciaOficialReais/registro.json')['fontes']
        assert all(notas[q['id']]['perfil'] in perfis for q in questoes)
        assert all(p['referencia'] in refs for p in perfis.values())

    def executar(self, fontes=None):
        with tempfile.TemporaryDirectory() as pasta:
            manifesto = Path(pasta)/'manifesto.json'; arquivo_fontes = Path(pasta)/'fontes.json'
            manifesto.write_text(json.dumps(self.manifesto, ensure_ascii=False))
            arquivo_fontes.write_text(json.dumps(fontes if fontes is not None else self.fontes, ensure_ascii=False))
            return subprocess.run([sys.executable, str(RAIZ/'scripts/importarLoteRealConferido.py'),
                                   '--raiz', str(RAIZ), '--numero-lote', '7', '--manifesto', str(manifesto),
                                   '--fontes-conferidas', str(arquivo_fontes)], capture_output=True, text=True, timeout=30)

    def test_revalida_segundo_arquivo_de_lote_sem_recontar_o_historico(self):
        caminhos = [RAIZ/'src/content/questoesReaisTriadas.json', RAIZ/'src/content/questoesReaisLote06.json', RAIZ/'src/content/questoesReaisLote07.json']
        antes = [p.read_bytes() for p in caminhos]
        resultado = self.executar()
        self.assertEqual(resultado.returncode, 0, resultado.stderr)
        self.assertEqual(json.loads(resultado.stdout)['totalDepois'], 2129)
        self.assertEqual(antes, [p.read_bytes() for p in caminhos])

    def test_recusa_fonte_adicional_sem_assinatura_da_consulta(self):
        fontes = copy.deepcopy(self.fontes)
        next(iter(fontes.values()))['sha256TextoExtraidoProva'] = ''
        resultado = self.executar(fontes)
        self.assertNotEqual(resultado.returncode, 0)
        self.assertIn('sem assinaturas da consulta', resultado.stderr)

    def test_fonte_adicional_nao_pode_sobrescrever_um_par_anterior(self):
        fontes = copy.deepcopy(self.fontes)
        id = next(k for k in fontes if k in self.anteriores)
        fontes[id]['gabaritoUrl'] = fontes[id]['provaUrl']
        resultado = self.executar(fontes)
        self.assertNotEqual(resultado.returncode, 0)
        self.assertIn('não pode substituir uma fonte anterior', resultado.stderr)


if __name__ == '__main__':
    unittest.main()

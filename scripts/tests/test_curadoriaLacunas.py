import copy
import json
import subprocess
import sys
import tempfile
from pathlib import Path
import unittest
import test_importarLoteRealConferido as legado

modulo = legado.modulo


class CuradoriaLacunasTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        legado.ImportacaoConferidaTest.setUpClass()
        cls.origem = legado.ImportacaoConferidaTest

    def preparar(self, quantidade=2):
        m = copy.deepcopy(self.origem.manifesto)
        m.update(tipoRevisao='curadoria-lacunas', quantidade=quantidade)
        m['questoes'] = m['questoes'][:quantidade]
        for i, e in enumerate(m['questoes']):
            e['curadoria'] = {'objetivoId': f'objetivo-{i}',
                              'ganhoPedagogico': 'Acrescenta uma aplicação específica ainda não explorada na seleção didática existente.',
                              'comparacaoComBanco': 'A comparação editorial identificou um novo objetivo para o assunto sem repetir a aplicação anterior.'}
        return m

    def integrar(self, m, curadoria=True):
        o = self.origem
        return modulo.integrar(m, o.base, o.inline, o.notas, o.perfis, o.refs, o.registro, curadoria=curadoria)

    def test_aceita_quantidade_declarada_sem_exigir_trezentos(self):
        m = self.preparar(); r = self.integrar(m)
        self.assertEqual(len(r[0]), 2)
        self.assertEqual(r[5]['novasQuestoes'], 2)
        self.assertEqual(r[5]['totalDepois'], m['baseAtivaEsperada'] + 2)
        self.assertEqual(r[5]['tipoRevisao'], 'curadoria-lacunas')
        self.assertEqual(len(r[5]['objetivos']), 2)

    def test_modo_legado_continua_exigindo_trezentos(self):
        with self.assertRaisesRegex(ValueError, '300 revisões'):
            self.integrar(self.preparar(), curadoria=False)

    def test_recusa_rotulo_ausente_e_quantidade_incompleta(self):
        m = self.preparar(); del m['tipoRevisao']
        with self.assertRaisesRegex(ValueError, 'Curadoria por lacunas inválida'):
            self.integrar(m)
        m = self.preparar(); m['quantidade'] = 3
        with self.assertRaisesRegex(ValueError, 'Curadoria incompleta'):
            self.integrar(m)

    def test_recusa_objetivo_repetido_ou_sem_contribuicao(self):
        m = self.preparar(); m['questoes'][1]['curadoria']['objetivoId'] = m['questoes'][0]['curadoria']['objetivoId']
        with self.assertRaisesRegex(ValueError, 'objetivos pedagógicos distintos'):
            self.integrar(m)
        m = self.preparar(); m['questoes'][0]['curadoria']['ganhoPedagogico'] = ''
        with self.assertRaisesRegex(ValueError, 'contribuição'):
            self.integrar(m)

    def test_preserva_recusa_de_anulacoes_e_identidades_oficiais_repetidas(self):
        m = self.preparar(); m['questoes'][0]['questao']['gabarito'] = 'X'; m['questoes'][0]['evidencia']['gabaritoOficial'] = 'X'
        with self.assertRaisesRegex(ValueError, 'anulação incluída'):
            self.integrar(m)
        m = self.preparar()
        for campo in ['fonteId', 'numeroOficial', 'provaUrl', 'gabaritoUrl', 'modo']:
            m['questoes'][1]['evidencia'][campo] = m['questoes'][0]['evidencia'][campo]
        with self.assertRaisesRegex(ValueError, 'Mesmo item oficial'):
            self.integrar(m)

    def test_cli_recusa_objetivo_ja_priorizado_em_curadoria_anterior(self):
        relatorio = json.loads((legado.RAIZ/'docs/simulados-reais/CURADORIA-LACUNAS-11.json').read_text())
        m = self.preparar()
        m['questoes'][0]['curadoria']['objetivoId'] = relatorio['objetivos'][0]['objetivoId']
        with tempfile.TemporaryDirectory() as pasta:
            arquivo = Path(pasta)/'manifesto.json'
            arquivo.write_text(json.dumps(m, ensure_ascii=False))
            resultado = subprocess.run([sys.executable, str(legado.RAIZ/'scripts/importarLoteRealConferido.py'),
                                       '--raiz', str(legado.RAIZ), '--numero-lote', '12', '--curadoria',
                                       '--manifesto', str(arquivo)], capture_output=True, text=True, timeout=30)
        self.assertNotEqual(resultado.returncode, 0)
        self.assertIn('Objetivo pedagógico já priorizado', resultado.stderr)

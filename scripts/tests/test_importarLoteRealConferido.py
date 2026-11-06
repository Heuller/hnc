import copy
import importlib.util
import json
import re
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


if __name__ == '__main__':
    unittest.main()

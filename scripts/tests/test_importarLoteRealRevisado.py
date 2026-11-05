"""Regressões do importador usando o lote publicado e a evidência rastreável."""
import copy
import hashlib
import importlib.util
import json
import re
import unittest
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location('importador', RAIZ/'scripts/importarLoteRealRevisado.py')
importador = importlib.util.module_from_spec(spec)
spec.loader.exec_module(importador)


class ImportacaoRevisadaTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.base = json.loads((RAIZ/'src/content/questoesReaisTriadas.json').read_text())
        cls.notas = json.loads((RAIZ/'src/content/estudoReversoReais/anotacoes.json').read_text())
        cls.perfis = json.loads((RAIZ/'src/content/estudoReversoReais/perfis.json').read_text())
        relatorio = json.loads((RAIZ/'docs/simulados-reais/LOTE-300-ACERVO-05.json').read_text())
        evidencias = {e['id']: e for e in relatorio['evidencias']}
        cls.manifesto = {'lote': relatorio['lote'], 'baseEsperada': 1342, 'quantidade': 300,
                        'questoes': [{'questao': q, 'anotacao': cls.notas[q['id']], 'evidencia': evidencias[q['id']]}
                                     for q in cls.base if q['id'] in evidencias]}
        ts = (RAIZ/'src/content/questoesReais.ts').read_text()
        cls.inline = [{'id': id, 'item': item} for id, item in re.findall(r"id: '([^']+)'[\s\S]*?\n\s*item: '([^']+)'", ts)]

    def importar(self, manifesto):
        return importador.integrar(manifesto, self.base, self.notas, self.perfis, self.inline)

    def test_reimportacao_e_idempotente(self):
        base, notas = self.importar(self.manifesto)
        self.assertEqual(self.base, base)
        self.assertEqual(self.notas, notas)

    def test_recusa_gabarito_diferente_da_evidencia(self):
        manifesto = copy.deepcopy(self.manifesto)
        ev = manifesto['questoes'][0]['evidencia']
        ev['gabarito'] = 'E' if ev['gabarito'] == 'C' else 'C'
        with self.assertRaisesRegex(ValueError, 'Gabarito inconsistente'):
            self.importar(manifesto)

    def test_recusa_duplicata_de_questao_anterior(self):
        manifesto = copy.deepcopy(self.manifesto)
        e = manifesto['questoes'][0]
        anterior = next(q for q in self.base if q.get('loteRevisao') != manifesto['lote'])
        e['questao']['item'] = anterior['item']
        e['evidencia']['sha256Texto'] = hashlib.sha256(anterior['item'].encode()).hexdigest()
        with self.assertRaisesRegex(ValueError, 'Questão duplicada'):
            self.importar(manifesto)

    def test_recusa_exemplo_ausente(self):
        manifesto = copy.deepcopy(self.manifesto)
        manifesto['questoes'][0]['anotacao'].pop('exemplo')
        with self.assertRaisesRegex(ValueError, 'Trecho ou exemplo ausente'):
            self.importar(manifesto)

    def test_recusa_lote_incompleto(self):
        manifesto = copy.deepcopy(self.manifesto)
        manifesto['questoes'].pop()
        with self.assertRaisesRegex(ValueError, 'exatamente 300'):
            self.importar(manifesto)


if __name__ == '__main__':
    unittest.main()

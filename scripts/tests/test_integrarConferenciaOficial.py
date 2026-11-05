import copy
import importlib.util
import json
import unittest
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location('conferencia', RAIZ/'scripts/integrarConferenciaOficial.py')
conferencia = importlib.util.module_from_spec(spec)
spec.loader.exec_module(conferencia)


class ConferenciaDocumentalTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.relatorio = json.loads((RAIZ/'docs/simulados-reais/CONFERENCIA-OFICIAL-2026-11-05.json').read_text())
        cls.registro = json.loads((RAIZ/'src/content/conferenciaOficialReais/registro.json').read_text())
        cls.base = json.loads((RAIZ/'src/content/questoesReaisTriadas.json').read_text())

    def test_aceita_a_conferencia_editorial_rastreavel(self):
        self.assertTrue(conferencia.validar(self.relatorio, self.registro, self.base))

    def test_recusa_enunciado_modificado_sem_nova_conferencia(self):
        base = copy.deepcopy(self.base)
        q = next(q for q in base if q['estadoConferencia'] == 'caderno')
        q['item'] += ' Alteração posterior.'
        with self.assertRaisesRegex(ValueError, 'enunciado de origem mudou'):
            conferencia.validar(self.relatorio, self.registro, base)

    def test_recusa_promocao_de_item_pendente(self):
        registro = copy.deepcopy(self.registro)
        id = next(r['id'] for r in self.relatorio['itens'] if r['resultado'] == 'pendente')
        registro['itens'][id] = next(iter(registro['itens'].values()))
        with self.assertRaisesRegex(ValueError, 'Item pendente promovido'):
            conferencia.validar(self.relatorio, registro, self.base)

    def test_recusa_espelho_apresentado_como_fonte_na_banca(self):
        relatorio = copy.deepcopy(self.relatorio)
        registro = copy.deepcopy(self.registro)
        r = next(r for r in relatorio['itens'] if r.get('modo') == 'copia')
        registro['fontes'][r['fonteId']]['modo'] = 'original'
        relatorio['fontes'][r['fonteId']]['modo'] = 'original'
        r['modo'] = 'original'
        with self.assertRaisesRegex(ValueError, 'Espelho apresentado'):
            conferencia.validar(relatorio, registro, self.base)

    def test_recusa_url_diferente_da_fonte_conferida(self):
        registro = copy.deepcopy(self.registro)
        fonte = next(iter(registro['fontes'].values()))
        fonte['gabaritoUrl'] = fonte['provaUrl']
        with self.assertRaisesRegex(ValueError, 'Fonte diferente da evidência'):
            conferencia.validar(self.relatorio, registro, self.base)

    def test_recusa_mudanca_de_gabarito_sem_comentario_novo(self):
        relatorio = copy.deepcopy(self.relatorio)
        registro = copy.deepcopy(self.registro)
        r = next(r for r in relatorio['itens'] if r['resultado'] == 'confirmada' and r['gabaritoOficial'] == 'C')
        r['gabaritoOficial'] = 'E'
        registro['itens'][r['id']]['gabarito'] = 'E'
        registro['editorial'].pop(r['id'], None)
        with self.assertRaisesRegex(ValueError, 'Mudança de gabarito sem nova explicação'):
            conferencia.validar(relatorio, registro, self.base)


if __name__ == '__main__':
    unittest.main()

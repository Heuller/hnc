import importlib.util
from pathlib import Path
import unittest
spec = importlib.util.spec_from_file_location('fila', Path(__file__).parents[1] / 'organizarFilaQuestoesReais.py')
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)

def candidato(texto, gab='C', contexto=''):
    return {'texto': texto, 'contexto': contexto, 'origem_prova_declarada': 'Órgão/2020',
        'numero_no_caderno': 1, 'gabarito_fonte': gab, 'fontes': [{'id': 'arquivo', 'nome': 'fonte.pdf'}],
        'status': 'triagem-pendente', 'identificadores_encontrados': []}

class FilaTest(unittest.TestCase):
    def test_agrupa_enunciado_e_preserva_contexto_e_gabaritos_divergentes(self):
        a = candidato('A respeito de bibliotecas, julgue o item a seguir. A biblioteca oferece serviços.')
        b = candidato('A biblioteca oferece serviços.', 'E')
        fila = m.organizar([a, b])
        self.assertEqual(len(fila), 1)
        self.assertEqual(len(fila[0]['variantes']), 2)
        self.assertEqual(fila[0]['status'], 'conflito-de-gabarito')
        self.assertIn('A respeito', fila[0]['variantes'][0]['contexto'])

    def test_nao_une_enunciados_que_dependem_de_contextos_diferentes(self):
        a = candidato('A conclusão do texto precedente é correta.', contexto='Texto A')
        b = candidato('A conclusão do texto precedente é correta.', contexto='Texto B')
        self.assertEqual(len(m.organizar([a,b])), 2)

if __name__ == '__main__': unittest.main()

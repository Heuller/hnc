import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('extrator', Path(__file__).parents[1] / 'extrairCandidatosCebraspe.py')
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
META = {'id': 'arquivo', 'nome': 'caderno.pdf'}

class ExtracaoTest(unittest.TestCase):
    def test_seleciona_ce_e_exclui_anulada_multipla_e_outra_banca(self):
        text = '''www.tecconcursos.com.br/questoes/10
CEBRASPE (CESPE) - Cargo/2024
1) Julgue o seguinte item sobre um tema relevante.
Esta afirmação é suficientemente longa para ser uma questão válida.
Certo
Errado
www.tecconcursos.com.br/questoes/11
CEBRASPE (CESPE) - Cargo/2024
2) Julgue o seguinte item que foi anulado no gabarito.
Esta outra afirmação é suficientemente longa para ser uma questão.
Certo
Errado
www.tecconcursos.com.br/questoes/12
CEBRASPE (CESPE) - Cargo/2024
3) Assinale a alternativa correta entre as opções oferecidas abaixo.
a) Uma alternativa
b) Outra alternativa
www.tecconcursos.com.br/questoes/13
OUTRA BANCA - Cargo/2024
4) Julgue o seguinte item sobre um tema relevante.
Esta afirmação é suficientemente longa para ser uma questão válida.
Certo
Errado
Gabarito
1) Certo 2) Anulada 3) C 4) Errado
'''
        result = m.tec(text, META)
        self.assertEqual([i['identificador'] for i in result], ['tec-10'])
        self.assertEqual(result[0]['gabarito_fonte'], 'C')

    def test_gabarito_em_blocos_exige_correspondencia_integral(self):
        text = """(CAPES/2012) Julgue os itens a seguir.
1. Esta é uma afirmação suficientemente longa para ser identificada com segurança.
2. Esta é outra afirmação suficientemente longa para ser identificada com segurança.
GABARITO: E-C
(TJ/2013) Julgue os itens.
3. Uma questão cujo gabarito está incompleto e não deve ser processada automaticamente.
4. Outra questão cujo gabarito está incompleto e não deve ser processada automaticamente.
GABARITO: E
"""
        items = m.apostila_gabarito_em_blocos(text, META)
        self.assertEqual([q['gabarito_fonte'] for q in items], ['E', 'C'])
        self.assertEqual([q['numero_no_caderno'] for q in items], [1, 2])
        self.assertTrue(all(q['status'] == 'triagem-pendente' for q in items))

    def test_blocos_com_espacos_anulada_e_ponto_preservam_posicoes(self):
        text = """(CAPES/2012) Julgue os itens.
1. Esta primeira afirmação tem texto suficiente para ser identificada corretamente.
2. Esta segunda afirmação será anulada e deve ficar fora da importação.
3. Esta terceira afirmação também possui texto suficiente para ser identificada.
GABARITO: E X C.
"""
        items = m.apostila_gabarito_em_blocos(text, META)
        self.assertEqual([q['numero_no_caderno'] for q in items], [1, 3])
        self.assertEqual([q['gabarito_fonte'] for q in items], ['E', 'C'])

    def test_apostila_esquematizada_com_gabarito_inline(self):
        text = """1. (STJ/CESPE/2018) A informação deve ser organizada para acesso e recuperação. CERTO.
2. (DPU/CESPE/2016) Um enunciado longo e distinto descreve um procedimento que não existe. ERRADO.
3. (OUTRA/2020) Outra questão que não é atribuída à banca. CERTO.
"""
        result = m.apostila_esquematizada(text, META)
        self.assertEqual([q['gabarito_fonte'] for q in result], ['C', 'E'])
        self.assertTrue(all('CERTO' not in q['texto'] and 'ERRADO' not in q['texto'] for q in result))

    def test_lista_da_apostila_exclui_gabarito_anulado(self):
        text = '''1. (CESPE/Órgão - 2021) Julgue o item abaixo a respeito da questão tratada.
Certo
Errado
2. (CESPE/Órgão - 2021) Julgue outra afirmação apresentada nesta questão.
Certo
Errado
GABARITO
1 Errado 2 Anulada
'''
        result = m.apostila(text, META)
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]['gabarito_fonte'], 'E')

if __name__ == '__main__':
    unittest.main()

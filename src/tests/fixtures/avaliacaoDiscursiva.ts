import type { AvaliacaoCebraspe, TemaDiscursiva } from '../../domain/discursiva/types';

export function avaliacaoFixture(tema: TemaDiscursiva, linhas = 20): AvaliacaoCebraspe {
  const criterios = tema.criteriosPontuacao.map(c => ({ item: c.item, notaMaxima: c.pontuacaoMaxima, notaObtida: Number((c.pontuacaoMaxima * 0.8).toFixed(2)), parecer: 'Justificativa de avaliação apenas para teste de contrato.' }));
  const notaConteudo = Number(criterios.reduce((n, c) => n + c.notaObtida, 0).toFixed(2));
  return { id: 'eval-fixture', dataAvaliacao: '2026-10-29T12:00:00.000Z', temaId: tema.id, tipo: tema.tipo, totalLinhas: linhas,
    notaConteudo, notaConteudoMaxima: tema.tipo === 'peca_50' ? 30 : 15,
    numErrosGramaticais: 0, descontoGramatical: 0, notaFinal: notaConteudo, formulaAplicada: 'Fórmula sem desconto na fixture', situacao: 'HABILITADO',
    criterios, errosGramaticais: [], pontosFortes: ['Exemplo de feedback para teste.'], lacunasIdentificadas: [], parecerGeralExaminador: 'Avaliação formativa de teste.' };
}

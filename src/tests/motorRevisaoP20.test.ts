import { describe, it, expect } from 'vitest';
import {
  EXAM_DATE_CAMARA,
  DATA_LIMITE_REVISAO,
  calcularIntervaloComTetoProva,
  calcularProximaDataRevisaoCorridos,
  processarRespostaLeitnerP20,
  gerarEtapasFilaErro,
  calcularPrioridadeFragilidade,
  obterProporcoesFase,
  selecionarItensIntercaladosPorFase,
  type LeitnerItemP20,
} from '../domain/leitner';

describe('P20 — Motor de Revisão Ancorado na Data da Prova com Intercalação', () => {
  describe('(a) Nenhum agendamento após EXAM_DATE - 2 dias (15/01/2027)', () => {
    it('garante que a data da prova é 17/01/2027 e o limite máximo de agendamento é 15/01/2027', () => {
      expect(EXAM_DATE_CAMARA).toBe('2027-01-17');
      expect(DATA_LIMITE_REVISAO).toBe('2027-01-15');
    });

    it('encurta o intervalo caso a próxima revisão calculada ultrapasse EXAM_DATE - 2', () => {
      // Exemplo: estudante em 10/01/2027 com intervalo normal de 14 dias (iria para 24/01/2027)
      const dataAtual = '2027-01-10';
      const intervaloCalculado = 14;

      const intervaloAjustado = calcularIntervaloComTetoProva(dataAtual, intervaloCalculado, EXAM_DATE_CAMARA);

      // Deve encurtar para 5 dias (10/01 + 5 = 15/01)
      expect(intervaloAjustado).toBe(5);

      const proximaData = calcularProximaDataRevisaoCorridos(dataAtual, intervaloAjustado, []);
      expect(proximaData).toBe('2027-01-15');
      expect(proximaData <= DATA_LIMITE_REVISAO).toBe(true);
    });

    it('se a data atual já for a data limite (15/01) ou posterior, não agenda para depois da data limite', () => {
      const dataAtual = '2027-01-15';
      const intervaloAjustado = calcularIntervaloComTetoProva(dataAtual, 7, EXAM_DATE_CAMARA);
      expect(intervaloAjustado).toBe(0);

      const proximaData = calcularProximaDataRevisaoCorridos(dataAtual, intervaloAjustado, []);
      expect(proximaData).toBe('2027-01-15');
    });
  });

  describe('(b) Fila de Erros respeita ciclo 1, 3 e 7 dias e volta 1 caixa', () => {
    it('ao errar, o item volta apenas 1 caixa (ex: Caixa 4 -> Caixa 3), em vez de reset total cego para Caixa 1', () => {
      const item: LeitnerItemP20 = {
        id: 'q-test-1',
        submoduloId: '2.1',
        caixa: 4,
        ultimaRevisao: '2026-11-01',
        proximaRevisao: '2026-11-01',
        historicoAcertos: 5,
        historicoErros: 0,
      };

      const resultado = processarRespostaLeitnerP20(item, false, '2026-11-01', 'certeza', EXAM_DATE_CAMARA);

      expect(resultado.item.caixa).toBe(3); // Volta uma caixa
      expect(resultado.item.historicoErros).toBe(1);
      expect(resultado.entrouFilaErros).toBe(true);
    });

    it('cria a fila de erros com as 3 etapas rigorosamente em +1, +3 e +7 dias', () => {
      const dataErro = '2026-11-10';
      const etapas = gerarEtapasFilaErro('q-test-1', '2.1', dataErro, []);

      expect(etapas).toHaveLength(3);
      expect(etapas[0]).toEqual({
        itemId: 'q-test-1',
        submoduloId: '2.1',
        etapa: 1,
        diasOffset: 1,
        dataAgendada: '2026-11-11',
        concluida: false,
      });
      expect(etapas[1]).toEqual({
        itemId: 'q-test-1',
        submoduloId: '2.1',
        etapa: 2,
        diasOffset: 3,
        dataAgendada: '2026-11-13',
        concluida: false,
      });
      expect(etapas[2]).toEqual({
        itemId: 'q-test-1',
        submoduloId: '2.1',
        etapa: 3,
        diasOffset: 7,
        dataAgendada: '2026-11-17',
        concluida: false,
      });
    });
  });

  describe('(c) Mistura de módulos por fase e ordenação por fragilidade com seed determinística', () => {
    it('parametrizador de proporções reflete as metas das 3 fases: 70/30 -> 40/60 -> 25/75', () => {
      expect(obterProporcoesFase('fase1_cobertura')).toEqual({ atual: 0.70, precedentes: 0.30 });
      expect(obterProporcoesFase('fase2_intercalacao')).toEqual({ atual: 0.40, precedentes: 0.60 });
      expect(obterProporcoesFase('fase3_consolidacao')).toEqual({ atual: 0.25, precedentes: 0.75 });
    });

    it('calcula o score de fragilidade priorizando itens com menor taxa de acerto e marcação de chute/dúvida', () => {
      const itemFragil = { taxaAcerto: 0.2, historicoErros: 4, ultimaConfianca: 'chute' as const };
      const itemMedio = { taxaAcerto: 0.6, historicoErros: 1, ultimaConfianca: 'provavel' as const };
      const itemDominado = { taxaAcerto: 1.0, historicoErros: 0, ultimaConfianca: 'certeza' as const };

      const scoreFragil = calcularPrioridadeFragilidade(itemFragil.taxaAcerto, itemFragil.historicoErros, itemFragil.ultimaConfianca);
      const scoreMedio = calcularPrioridadeFragilidade(itemMedio.taxaAcerto, itemMedio.historicoErros, itemMedio.ultimaConfianca);
      const scoreDominado = calcularPrioridadeFragilidade(itemDominado.taxaAcerto, itemDominado.historicoErros, itemDominado.ultimaConfianca);

      expect(scoreFragil).toBeGreaterThan(scoreMedio);
      expect(scoreMedio).toBeGreaterThan(scoreDominado);
    });

    it('intercalação cumpre os pesos da fase com seed fixa e reprodutível', () => {
      const candidatosAtuais = Array.from({ length: 20 }, (_, i) => ({
        id: `atual-${i}`,
        submoduloId: '3.1',
        taxaAcerto: 0.8,
        historicoErros: 1,
        gabarito: (i % 2 === 0 ? 'C' : 'E') as 'C' | 'E',
      }));

      const candidatosPrecedentes = Array.from({ length: 40 }, (_, i) => ({
        id: `prec-${i}`,
        submoduloId: `${1 + (i % 2)}.${1 + (i % 4)}`,
        taxaAcerto: 0.3 + (i * 0.01),
        historicoErros: 3,
        gabarito: (i % 2 === 0 ? 'C' : 'E') as 'C' | 'E',
      }));

      // Seleção em Fase 2 (40% atual / 60% precedentes em sessão de 10 itens -> 4 atuais / 6 precedentes)
      const resultadoFase2 = selecionarItensIntercaladosPorFase({
        fase: 'fase2_intercalacao',
        totalDesejado: 10,
        candidatosAtuais,
        candidatosPrecedentes,
        semente: 12345,
      });

      expect(resultadoFase2).toHaveLength(10);
      const doAtual = resultadoFase2.filter((x) => x.id.startsWith('atual-')).length;
      const doPrec = resultadoFase2.filter((x) => x.id.startsWith('prec-')).length;

      expect(doAtual).toBe(4);
      expect(doPrec).toBe(6);

      // Reprodutibilidade com mesma semente
      const repeticao = selecionarItensIntercaladosPorFase({
        fase: 'fase2_intercalacao',
        totalDesejado: 10,
        candidatosAtuais,
        candidatosPrecedentes,
        semente: 12345,
      });

      expect(repeticao.map((r) => r.id)).toEqual(resultadoFase2.map((r) => r.id));
    });
  });

  describe('(d) Dias corridos e dias de folga configuráveis', () => {
    it('soma dias corridos pulando apenas os dias de folga configurados pelo usuário', () => {
      // 2026-10-23 é Sexta-feira.
      // Sábado 24 (dia 6), Domingo 25 (dia 0).
      // Se folga for apenas Domingo (0):
      // +2 dias a partir de sexta: sábado (24) é dia útil; domingo (25) pula; segunda (26).
      const folgaDomingo = [0];
      const proximaData = calcularProximaDataRevisaoCorridos('2026-10-23', 2, folgaDomingo);
      expect(proximaData).toBe('2026-10-26');
    });
  });
});

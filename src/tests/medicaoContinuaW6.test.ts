import { describe, it, expect } from 'vitest';
import {
  calcularMetricasItensIneditos,
  calcularBrierScore,
  calcularRetencaoLongitudinal,
  gerarRelatorioQuinzenalW6,
} from '../domain/metrics/medicaoContinuaW6';
import type { ItemAttempt } from '../domain/itemAttempts';

describe('Fase 6 (W6) — Metas, Simulados e Medição Contínua (Edital nº 1/2026)', () => {
  describe('Cálculo de Métricas Estritamente em Itens Inéditos (1ª Exposição)', () => {
    it('deve isolar a primeira tentativa de cada item e ignorar reexposições nas métricas de aprendizagem', () => {
      const mockAttempts: ItemAttempt[] = [
        // Item 1: 1ª tentativa (C, correto)
        {
          id: '550e8400-e29b-41d4-a716-446655440001',
          user_id: 'user-richard',
          item_id: 'item-1',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'teoria',
          resposta: 'C',
          correto: true,
          tentativa_n: 1,
          criado_em: '2026-10-20T10:00:00Z',
        },
        // Item 1: 2ª tentativa (reexposição - deve ser ignorada)
        {
          id: '550e8400-e29b-41d4-a716-446655440002',
          user_id: 'user-richard',
          item_id: 'item-1',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'E',
          correto: false,
          tentativa_n: 2,
          criado_em: '2026-10-28T10:00:00Z',
        },
        // Item 2: 1ª tentativa (E, erro)
        {
          id: '550e8400-e29b-41d4-a716-446655440003',
          user_id: 'user-richard',
          item_id: 'item-2',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'teoria',
          resposta: 'E',
          correto: false,
          tentativa_n: 1,
          criado_em: '2026-10-20T10:05:00Z',
        },
        // Item 3: 1ª tentativa (BRANCO - abstenção segura)
        {
          id: '550e8400-e29b-41d4-a716-446655440004',
          user_id: 'user-richard',
          item_id: 'item-3',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'teoria',
          resposta: 'BRANCO',
          correto: false,
          tentativa_n: 1,
          criado_em: '2026-10-20T10:10:00Z',
        },
        // Item contaminado com flag histórica: deve ser expurgado
        {
          id: '550e8400-e29b-41d4-a716-446655440005',
          user_id: 'user-richard',
          item_id: 'item-bugado',
          submodulo_id: '1.2',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'C',
          correto: true,
          tentativa_n: 1,
          criado_em: '2026-10-18T10:00:00Z',
          review_prefilled: true,
        },
      ];

      const res = calcularMetricasItensIneditos(mockAttempts);

      // Apenas Itens 1, 2 e 3 foram computados
      expect(res.totalItensIneditos).toBe(3);
      expect(res.acertos).toBe(1);
      expect(res.erros).toBe(1);
      expect(res.brancos).toBe(1);

      // Respondidos = 1 acerto + 1 erro = 2 itens
      expect(res.rawAccuracy).toBe(0.5); // 1 / 2 = 50%
      expect(res.pontosLiquidos).toBe(0); // 1 - 1 = 0 pts
      expect(res.netScorePercent).toBe(0.0); // 0 / 2 = 0%
      expect(res.desvioPadraoAmostral).toBeGreaterThan(0);
    });

    it('calcula net_score e desvio-padrão com fórmula canônica de Cebraspe (1 erro anula 1 acerto)', () => {
      // 10 itens inéditos: 8 certos, 2 errados
      const mockAttempts: ItemAttempt[] = [];
      for (let i = 1; i <= 8; i++) {
        mockAttempts.push({
          id: `550e8400-e29b-41d4-a716-44665544001${i}`,
          user_id: 'user-richard',
          item_id: `item-ok-${i}`,
          submodulo_id: '2.1',
          modulo_id: 'm2',
          contexto: 'simulado',
          resposta: 'C',
          correto: true,
          tentativa_n: 1,
          criado_em: '2026-10-20T14:00:00Z',
        });
      }
      for (let i = 1; i <= 2; i++) {
        mockAttempts.push({
          id: `550e8400-e29b-41d4-a716-44665544002${i}`,
          user_id: 'user-richard',
          item_id: `item-err-${i}`,
          submodulo_id: '2.1',
          modulo_id: 'm2',
          contexto: 'simulado',
          resposta: 'E',
          correto: false,
          tentativa_n: 1,
          criado_em: '2026-10-20T14:00:00Z',
        });
      }

      const res = calcularMetricasItensIneditos(mockAttempts);
      expect(res.totalItensIneditos).toBe(10);
      expect(res.acertos).toBe(8);
      expect(res.erros).toBe(2);
      expect(res.rawAccuracy).toBe(0.8); // 80% bruto
      expect(res.pontosLiquidos).toBe(6); // 8 - 2 = 6 pontos líquidos
      expect(res.netScorePercent).toBe(0.6); // 60% líquido
    });
  });

  describe('Calibração Metacognitiva via Brier Score', () => {
    it('deve calcular adequadamente o Brier Score de calibração entre confiança e acerto real', () => {
      const mockAttempts: ItemAttempt[] = [
        // Certeza / Alta (1.0) e acertou (1) -> (1 - 1)^2 = 0
        {
          id: '550e8400-e29b-41d4-a716-446655440031',
          user_id: 'user-richard',
          item_id: 'i1',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'C',
          correto: true,
          certeza: 'alta',
          tentativa_n: 1,
          criado_em: '2026-10-20T10:00:00Z',
        },
        // Certeza / Alta (1.0) e errou (0) -> (1 - 0)^2 = 1.0 (hipercorreção)
        {
          id: '550e8400-e29b-41d4-a716-446655440032',
          user_id: 'user-richard',
          item_id: 'i2',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'E',
          correto: false,
          certeza: 'alta',
          tentativa_n: 1,
          criado_em: '2026-10-20T10:01:00Z',
        },
        // Provável / Média (0.7) e acertou (1) -> (0.7 - 1)^2 = 0.09
        {
          id: '550e8400-e29b-41d4-a716-446655440033',
          user_id: 'user-richard',
          item_id: 'i3',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'C',
          correto: true,
          certeza: 'media',
          tentativa_n: 1,
          criado_em: '2026-10-20T10:02:00Z',
        },
        // Chute / Baixa (0.5) e errou (0) -> (0.5 - 0)^2 = 0.25
        {
          id: '550e8400-e29b-41d4-a716-446655440034',
          user_id: 'user-richard',
          item_id: 'i4',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'E',
          correto: false,
          certeza: 'baixa',
          tentativa_n: 1,
          criado_em: '2026-10-20T10:03:00Z',
        },
      ];

      const cal = calcularBrierScore(mockAttempts);
      expect(cal.totalAfericoes).toBe(4);
      // Média dos quadrados: (0 + 1 + 0.09 + 0.25) / 4 = 1.34 / 4 = 0.335
      expect(cal.brierScore).toBe(0.335);
      expect(cal.nivelCalibracao).toBe('descalibrado'); // Brier > 0.25
      expect(cal.distribuicaoConfianca.certeza.taxaReal).toBe(0.5); // 1 acerto em 2
      expect(cal.distribuicaoConfianca.provavel.taxaReal).toBe(1.0); // 1 acerto em 1
    });
  });

  describe('Retenção Longitudinal (7 e 21 dias)', () => {
    it('deve computar a taxa de retenção espaçada após 7 e 21 dias', () => {
      const agora = new Date('2026-11-20T12:00:00Z').getTime();
      const diaMs = 24 * 60 * 60 * 1000;

      const mockAttempts: ItemAttempt[] = [
        // Item A: inicial há 22 dias, reteste hoje (acertou -> entra em 21 dias)
        {
          id: '550e8400-e29b-41d4-a716-446655440041',
          user_id: 'user-richard',
          item_id: 'item-A',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'teoria',
          resposta: 'C',
          correto: true,
          tentativa_n: 1,
          criado_em: new Date(agora - 22 * diaMs).toISOString(),
        },
        {
          id: '550e8400-e29b-41d4-a716-446655440042',
          user_id: 'user-richard',
          item_id: 'item-A',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'C',
          correto: true,
          tentativa_n: 2,
          criado_em: new Date(agora).toISOString(),
        },
        // Item B: inicial há 10 dias, reteste hoje (errou -> entra em 7 dias)
        {
          id: '550e8400-e29b-41d4-a716-446655440043',
          user_id: 'user-richard',
          item_id: 'item-B',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'teoria',
          resposta: 'E',
          correto: true,
          tentativa_n: 1,
          criado_em: new Date(agora - 10 * diaMs).toISOString(),
        },
        {
          id: '550e8400-e29b-41d4-a716-446655440044',
          user_id: 'user-richard',
          item_id: 'item-B',
          submodulo_id: '1.1',
          modulo_id: 'm1',
          contexto: 'revisao',
          resposta: 'C',
          correto: false,
          tentativa_n: 2,
          criado_em: new Date(agora).toISOString(),
        },
      ];

      const ret = calcularRetencaoLongitudinal(mockAttempts);
      expect(ret.retencao7Dias.avaliacoes).toBe(1);
      expect(ret.retencao7Dias.acertos).toBe(0);
      expect(ret.retencao7Dias.taxa).toBe(0.0);

      expect(ret.retencao21Dias.avaliacoes).toBe(1);
      expect(ret.retencao21Dias.acertos).toBe(1);
      expect(ret.retencao21Dias.taxa).toBe(1.0);
    });
  });

  describe('Relatório Quinzenal e Meta Recalibrada do Edital nº 1/2026', () => {
    it('deve estruturar a meta oficial de 118 pts líquidos baseada no corte da 22ª vaga (103 pts) + 1.5 DP (+15 pts)', () => {
      const relatorio = gerarRelatorioQuinzenalW6([], []);

      expect(relatorio.metaRecalibrada.corteEstimado22Vaga).toBe(103.0);
      expect(relatorio.metaRecalibrada.margemSegurancaDP).toBe(15.0);
      expect(relatorio.metaRecalibrada.metaObjetivaLiquidaTotal).toBe(118.0);
      expect(relatorio.metaRecalibrada.metaP1Basicos).toBe(50.0);
      expect(relatorio.metaRecalibrada.metaP2Especificos).toBe(70.0);
      expect(relatorio.metaRecalibrada.metaP3Discursiva).toBe(45.0);

      // Critérios pré-registrados avaliados
      expect(relatorio.mecanismosAvaliados.length).toBe(4);
      const repeticao = relatorio.mecanismosAvaliados.find((m) => m.nome.includes('Repetição Espaçada'));
      expect(repeticao).toBeDefined();
      expect(repeticao?.status).toBe('manter');
    });
  });
});

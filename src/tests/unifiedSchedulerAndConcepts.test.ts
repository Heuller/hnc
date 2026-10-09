// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { REVIEW_CONFIG } from '../config/reviewConfig';
import { conceptRepository } from '../domain/concepts/conceptRepository';
import {
  isDiaUtil,
  somarDiasUteis,
  ajustarParaDiaUtil,
  processarRevisaoConceito,
  criarEstadoInicialConceito,
  selecionarFilaRevisaoDiaria,
} from '../domain/scheduler/unifiedScheduler';
import { useConceptStore } from '../store/useConceptStore';

describe('Banco de Conceitos Atômicos e Agendador Unificado (Marco R2)', () => {
  describe('Heurísticas e Configuração Canônica (reviewConfig.ts)', () => {
    it('deve ter regime de dias de estudo estritamente de segunda a sexta', () => {
      expect(REVIEW_CONFIG.scheduleDays).toBe('weekdays-only');
    });

    it('deve fixar o teto diário confortável em exatamente 30 itens/dia', () => {
      expect(REVIEW_CONFIG.dailyReviewCap).toBe(30);
    });

    it('deve limitar o teto de simulado/teste puro a 20% da fila diária', () => {
      expect(REVIEW_CONFIG.testCeilingPct).toBe(0.2);
    });

    it('deve ter limiar mínimo de aprovação fixado em 85% de retenção factual', () => {
      expect(REVIEW_CONFIG.minPassingRetention).toBe(0.85);
    });

    it('deve ter 5 caixas Leitner com intervalos em dias úteis calibrados', () => {
      expect(REVIEW_CONFIG.leitnerBoxesTotal).toBe(5);
      expect(REVIEW_CONFIG.intervalsDaysByBox[1]).toBe(1);
      expect(REVIEW_CONFIG.intervalsDaysByBox[2]).toBe(3);
      expect(REVIEW_CONFIG.intervalsDaysByBox[3]).toBe(7);
      expect(REVIEW_CONFIG.intervalsDaysByBox[4]).toBe(16);
      expect(REVIEW_CONFIG.intervalsDaysByBox[5]).toBe(35);
    });

    it('deve mapear os 8 formatos de exercícios cognitivos (F1 a F8)', () => {
      const formatos = Object.keys(REVIEW_CONFIG.exerciseFormats);
      expect(formatos).toHaveLength(8);
      expect(formatos).toContain('f1_ce_simples');
      expect(formatos).toContain('f2_com_justificativa');
      expect(formatos).toContain('f3_identificacao_erro');
      expect(formatos).toContain('f4_preenchimento_lacunas');
      expect(formatos).toContain('f5_associacao');
      expect(formatos).toContain('f6_caso_pratico');
      expect(formatos).toContain('f7_flashcard_ativo');
      expect(formatos).toContain('f8_inversao_papeis');
    });
  });

  describe('Cálculos de Dias Úteis e Calendário de Estudos', () => {
    it('deve identificar corretamente dias de semana e fins de semana', () => {
      // 2026-10-09 é Sexta-feira
      expect(isDiaUtil('2026-10-09')).toBe(true);
      // 2026-10-10 é Sábado
      expect(isDiaUtil('2026-10-10')).toBe(false);
      // 2026-10-11 é Domingo
      expect(isDiaUtil('2026-10-11')).toBe(false);
      // 2026-10-12 é Segunda-feira
      expect(isDiaUtil('2026-10-12')).toBe(true);
    });

    it('deve somar dias úteis pulando finais de semana', () => {
      // Sexta 2026-10-09 + 1 dia útil -> Segunda 2026-10-12
      expect(somarDiasUteis('2026-10-09', 1)).toBe('2026-10-12');
      // Sexta 2026-10-09 + 2 dias úteis -> Terça 2026-10-13
      expect(somarDiasUteis('2026-10-09', 2)).toBe('2026-10-13');
      // Quarta 2026-10-07 + 5 dias úteis -> Quarta 2026-10-14
      expect(somarDiasUteis('2026-10-07', 5)).toBe('2026-10-14');
    });

    it('deve ajustar datas que caiam no fim de semana para a próxima segunda-feira', () => {
      expect(ajustarParaDiaUtil('2026-10-10')).toBe('2026-10-12'); // Sábado -> Segunda
      expect(ajustarParaDiaUtil('2026-10-11')).toBe('2026-10-12'); // Domingo -> Segunda
      expect(ajustarParaDiaUtil('2026-10-12')).toBe('2026-10-12'); // Segunda permanece Segunda
    });
  });

  describe('Repositório de Conceitos Atômicos (conceptRepository)', () => {
    it('deve carregar todos os conceitos de todos os submódulos da grade oficial', () => {
      const conceitos = conceptRepository.getTodos();
      expect(conceitos.length).toBeGreaterThanOrEqual(180);
    });

    it('deve preservar 100% dos conceitos do submódulo 2.5 (Marc 21 e Autores)', () => {
      const conceitos25 = conceptRepository.getPorSubmodulo('2.5');
      expect(conceitos25.length).toBeGreaterThanOrEqual(2);
      for (const c of conceitos25) {
        expect(c.submoduloId).toBe('2.5');
        expect(c.enunciadoCanonic.length).toBeGreaterThan(15);
        expect(['C', 'E']).toContain(c.gabaritoCanonic);
        expect(c.justificativaCanonic.length).toBeGreaterThan(15);
        expect(c.formatosDisponiveis).toContain('f1_ce_simples');
      }
    });

    it('deve gerar variantes de exercícios compatíveis com F1 a F8', () => {
      const conceitos = conceptRepository.getTodos();
      const conceitoComVariantes = conceitos.find((c) => c.variantesFormatos?.f4_preenchimento_lacunas);
      expect(conceitoComVariantes).toBeDefined();
      expect(conceitoComVariantes?.variantesFormatos?.f4_preenchimento_lacunas?.lacunas?.textoComLacuna).toContain('_____');
    });
  });

  describe('Motor de Repetição Espaçada e Nível de Confiança', () => {
    it('deve avançar de caixa quando acerta com CERTEZA em item vencido', () => {
      const estado = criarEstadoInicialConceito('c_teste_1', 'user_1', '2026-10-09');
      // Simula item vencido na Caixa 1
      estado.proximaRevisao = '2026-10-09';

      const resultado = processarRevisaoConceito(
        estado,
        true,
        'certeza',
        'f1_ce_simples',
        'C',
        12,
        '2026-10-09'
      );

      expect(resultado.avancouCaixa).toBe(true);
      expect(resultado.novoEstado.caixaLeitner).toBe(2);
      // Caixa 2 = 3 dias úteis: Sexta 09 -> Quarta 14 (+3 dias úteis)
      expect(resultado.novoEstado.proximaRevisao).toBe('2026-10-14');
      expect(resultado.novoEstado.totalAcertos).toBe(1);
    });

    it('NÃO deve avançar de caixa se o item acertado não estiver vencido (Regra D.4)', () => {
      const estado = criarEstadoInicialConceito('c_teste_2', 'user_1', '2026-10-09');
      // Proxima revisão está para 2026-10-20 (futura)
      estado.proximaRevisao = '2026-10-20';

      const resultado = processarRevisaoConceito(
        estado,
        true,
        'certeza',
        'f1_ce_simples',
        'C',
        10,
        '2026-10-09'
      );

      expect(resultado.avancouCaixa).toBe(false);
      expect(resultado.novoEstado.caixaLeitner).toBe(1);
    });

    it('deve manter a caixa e agendar intervalo curto quando acerta com DÚVIDA', () => {
      const estado = criarEstadoInicialConceito('c_teste_3', 'user_1', '2026-10-09');
      estado.caixaLeitner = 3; // Caixa 3 = 7 dias úteis
      estado.proximaRevisao = '2026-10-09';

      const resultado = processarRevisaoConceito(
        estado,
        true,
        'duvida',
        'f2_com_justificativa',
        'C',
        15,
        '2026-10-09'
      );

      expect(resultado.avancouCaixa).toBe(false);
      expect(resultado.novoEstado.caixaLeitner).toBe(3);
      // Metade do intervalo da caixa 3 (floor(7/2) = 3 dias úteis)
      expect(resultado.diasAteProximaRevisao).toBe(3);
    });

    it('deve rebaixar para Caixa 1 e agendar para o próximo dia útil se CHUTOU', () => {
      const estado = criarEstadoInicialConceito('c_teste_4', 'user_1', '2026-10-09');
      estado.caixaLeitner = 4;
      estado.proximaRevisao = '2026-10-09';

      const resultado = processarRevisaoConceito(
        estado,
        true, // Acertou por sorte
        'chute', // Mas marcou chute
        'f1_ce_simples',
        'C',
        5,
        '2026-10-09'
      );

      expect(resultado.avancouCaixa).toBe(false);
      expect(resultado.novoEstado.caixaLeitner).toBe(1);
      // Próximo dia útil após Sexta 09 é Segunda 12
      expect(resultado.novoEstado.proximaRevisao).toBe('2026-10-12');
      expect(resultado.novoEstado.totalChutes).toBe(1);
    });

    it('deve rebaixar para Caixa 1 se ERROU e transicionar para estado crítico após reincidência', () => {
      const estado = criarEstadoInicialConceito('c_teste_5', 'user_1', '2026-10-09');
      estado.caixaLeitner = 3;
      estado.totalErros = 1;
      estado.proximaRevisao = '2026-10-09';

      const resultado = processarRevisaoConceito(
        estado,
        false, // Errou
        'certeza',
        'f1_ce_simples',
        'E',
        20,
        '2026-10-09'
      );

      expect(resultado.novoEstado.caixaLeitner).toBe(1);
      expect(resultado.novoEstado.totalErros).toBe(2);
      expect(resultado.novoEstado.estadoDominio).toBe('critico');
      expect(resultado.novoEstado.proximaRevisao).toBe('2026-10-12');
    });
  });

  describe('Agendador Diário e Fila de Revisão (selecionarFilaRevisaoDiaria)', () => {
    it('deve limitar a fila diária a no máximo 30 itens e aplicar teto de 20% para formato F1', () => {
      const todosConceitos = conceptRepository.getMapaCompleto();
      const estadosMock: Record<string, any> = {};

      // Marca 50 conceitos como vencidos na data de hoje
      let count = 0;
      for (const id of Object.keys(todosConceitos)) {
        if (count < 50) {
          estadosMock[id] = {
            conceptId: id,
            userId: 'user_mock',
            caixaLeitner: 1,
            proximaRevisao: '2026-10-09',
            totalAparicoes: 1,
            totalAcertos: 0,
            totalErros: 1,
            totalChutes: 0,
            estadoDominio: 'em_aprendizado',
            historico: [],
          };
          count++;
        }
      }

      const fila = selecionarFilaRevisaoDiaria({
        estados: estadosMock,
        conceitos: todosConceitos,
        dataHojeIso: '2026-10-09',
        limiteDiario: 30,
      });

      expect(fila.itensNaFila.length).toBeLessThanOrEqual(30);
      expect(fila.limiteDiarioAtingido).toBe(true);
      // Teto de 20%: em 30 itens, F1 não deve exceder 6 itens
      expect(fila.totalSimuladoPuro).toBeLessThanOrEqual(6);
      expect(fila.totalFormatosCognitivos).toBeGreaterThanOrEqual(24);
    });

    it('deve priorizar conceitos em estado crítico e com maior atraso', () => {
      const conceitosMock = conceptRepository.getMapaCompleto();
      const ids = Object.keys(conceitosMock);
      const idCritico = ids[0];
      const idNormal = ids[1];

      const estadosMock = {
        [idCritico]: {
          conceptId: idCritico,
          userId: 'user_mock',
          caixaLeitner: 1,
          proximaRevisao: '2026-10-05',
          totalAparicoes: 3,
          totalAcertos: 1,
          totalErros: 2,
          totalChutes: 0,
          estadoDominio: 'critico',
          historico: [],
        },
        [idNormal]: {
          conceptId: idNormal,
          userId: 'user_mock',
          caixaLeitner: 4,
          proximaRevisao: '2026-10-09',
          totalAparicoes: 5,
          totalAcertos: 5,
          totalErros: 0,
          totalChutes: 0,
          estadoDominio: 'dominado',
          historico: [],
        },
      };

      const fila = selecionarFilaRevisaoDiaria({
        estados: estadosMock as any,
        conceitos: conceitosMock,
        dataHojeIso: '2026-10-09',
        limiteDiario: 2,
      });

      expect(fila.itensNaFila[0].conceito.id).toBe(idCritico);
    });
  });

  describe('useConceptStore (Zustand com persistência)', () => {
    it('deve registrar respostas e atualizar o estado do conceito no store', () => {
      const store = useConceptStore.getState();
      const conceitos = store.getConceitos();
      const primeiroId = Object.keys(conceitos)[0];

      const res = store.registrarRespostaConceito({
        conceptId: primeiroId,
        acertou: true,
        confianca: 'certeza',
        formatoUsado: 'f1_ce_simples',
        respostaDada: 'C',
        tempoSegundos: 8,
        dataAtualIso: '2026-10-09',
      });

      expect(res).toBeDefined();
      const estadoGravado = useConceptStore.getState().estados[primeiroId];
      expect(estadoGravado).toBeDefined();
      expect(estadoGravado.totalAparicoes).toBe(1);
      expect(estadoGravado.historico).toHaveLength(1);
    });

    it('deve calcular estatísticas de domínio consistentes', () => {
      const stats = useConceptStore.getState().getEstatisticasDominio();
      expect(stats.totalConceitos).toBeGreaterThanOrEqual(180);
      expect(stats.distribuicaoCaixas[1]).toBeGreaterThanOrEqual(1);
    });
  });
});

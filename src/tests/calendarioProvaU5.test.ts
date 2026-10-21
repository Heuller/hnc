import { describe, it, expect } from 'vitest';
import { REVIEW_CONFIG } from '../config/reviewConfig';
import {
  isDiaUtil,
  somarDiasUteis,
  selecionarFilaRevisaoDiaria,
  criarEstadoInicialConceito,
  processarRevisaoConceito,
} from '../domain/scheduler/unifiedScheduler';
import { conceptRepository } from '../domain/concepts/conceptRepository';
import type { ConceptState } from '../domain/concepts/types';

describe('U5.4 - Calendário até a Prova (17/01/2027) e Rodada Cumulativa', () => {
  it('deve ter intervalos graduais calibrados estritamente em dias úteis', () => {
    expect(REVIEW_CONFIG.intervalsDaysByBox[1]).toBe(1);
    expect(REVIEW_CONFIG.intervalsDaysByBox[2]).toBe(3);
    expect(REVIEW_CONFIG.intervalsDaysByBox[3]).toBe(7);
    expect(REVIEW_CONFIG.intervalsDaysByBox[4]).toBe(16);
    expect(REVIEW_CONFIG.intervalsDaysByBox[5]).toBe(35);

    // Testar que nenhuma soma de dias úteis cai em fim de semana
    let dataAtual = '2026-10-16'; // Sexta-feira
    for (let box = 1 as const; box <= 5; box = (box + 1) as any) {
      const dias = REVIEW_CONFIG.intervalsDaysByBox[box];
      const proxima = somarDiasUteis(dataAtual, dias);
      expect(isDiaUtil(proxima)).toBe(true);
      expect(new Date(proxima).getUTCDay()).not.toBe(0); // Não Domingo
      expect(new Date(proxima).getUTCDay()).not.toBe(6); // Não Sábado
    }
  });

  it('deve puxar conceitos maduros (caixas 4 e 5) para a rodada final cumulativa a partir de 28/12/2026', () => {
    const todosConceitos = conceptRepository.getTodos();
    const c1 = todosConceitos[0];
    const c2 = todosConceitos[1];

    const conceitosMapa = {
      [c1.id]: c1,
      [c2.id]: c2,
    };

    // Conceito maduro na Caixa 5 cuja próxima revisão regular seria só em Fevereiro de 2027 (após a prova)
    const estadoC1: ConceptState = {
      ...criarEstadoInicialConceito(c1.id, 'user_test', '2026-10-16'),
      caixaLeitner: 5,
      proximaRevisao: '2027-02-15',
      dataUltimaRevisao: '2026-11-10',
      totalAparicoes: 5,
      totalAcertos: 5,
      totalErros: 0,
    };

    // Conceito na Caixa 2 cuja próxima revisão é em Janeiro
    const estadoC2: ConceptState = {
      ...criarEstadoInicialConceito(c2.id, 'user_test', '2026-10-16'),
      caixaLeitner: 2,
      proximaRevisao: '2027-01-05',
      dataUltimaRevisao: '2026-12-15',
      totalAparicoes: 2,
      totalAcertos: 2,
      totalErros: 0,
    };

    // Em 2026-12-15 (antes da reta final), c1 NÃO deve entrar na fila diária porque vence em Fevereiro
    const filaAntes = selecionarFilaRevisaoDiaria({
      estados: { [c1.id]: estadoC1, [c2.id]: estadoC2 },
      conceitos: conceitosMapa,
      dataHojeIso: '2026-12-15',
    });
    expect(filaAntes.itensNaFila.some((i) => i.conceito.id === c1.id)).toBe(false);

    // Em 2026-12-28 (início da reta final), c1 DEVE ser puxado antecipadamente para revisão pré-prova!
    const filaRetaFinal = selecionarFilaRevisaoDiaria({
      estados: { [c1.id]: estadoC1, [c2.id]: estadoC2 },
      conceitos: conceitosMapa,
      dataHojeIso: '2026-12-28',
    });
    expect(filaRetaFinal.itensNaFila.some((i) => i.conceito.id === c1.id)).toBe(true);
  });

  it('deve respeitar o teto diário de 30 itens e priorizar itens com erro e menor acerto', () => {
    const todosConceitos = conceptRepository.getTodos().slice(0, 50);
    const conceitosMapa: Record<string, any> = {};
    const estados: Record<string, ConceptState> = {};
    const dataRef = '2026-12-29';

    todosConceitos.forEach((c, idx) => {
      conceitosMapa[c.id] = c;
      const temErro = idx < 5; // Primeiros 5 têm histórico de erro
      estados[c.id] = {
        ...criarEstadoInicialConceito(c.id, 'user_test', '2026-10-16'),
        caixaLeitner: 1,
        proximaRevisao: dataRef,
        totalAparicoes: 3,
        totalAcertos: temErro ? 1 : 3,
        totalErros: temErro ? 2 : 0,
        dataUltimaRevisao: '2026-12-01',
      };
    });

    const fila = selecionarFilaRevisaoDiaria({
      estados,
      conceitos: conceitosMapa,
      dataHojeIso: dataRef,
      limiteDiario: 30,
    });

    // Carga diária nunca ultrapassa o teto
    expect(fila.itensNaFila.length).toBe(30);

    // Todos os 5 conceitos com histórico de erro devem estar no topo da seleção
    for (let i = 0; i < 5; i++) {
      expect(fila.itensNaFila.some((item) => item.conceito.id === todosConceitos[i].id)).toBe(true);
    }
  });

  it('simulação determinística até 17/01/2027: nenhum item em fim de semana, carga diária <= 30', () => {
    const todosConceitos = conceptRepository.getTodos();
    const conceitosMapa = conceptRepository.getMapaCompleto();
    const estados: Record<string, ConceptState> = {};

    // Inicializa 60 conceitos aleatórios em estudo
    for (let i = 0; i < 60; i++) {
      const c = todosConceitos[i];
      estados[c.id] = criarEstadoInicialConceito(c.id, 'sim_user', '2026-10-16');
      estados[c.id].caixaLeitner = (1 + (i % 5)) as 1 | 2 | 3 | 4 | 5;
      estados[c.id].proximaRevisao = somarDiasUteis('2026-10-16', REVIEW_CONFIG.intervalsDaysByBox[estados[c.id].caixaLeitner]);
    }

    let dataSimulada = '2026-10-16';
    const dataFinal = '2027-01-16'; // Véspera da prova
    let totalDiasUteisSimulados = 0;

    while (dataSimulada <= dataFinal) {
      if (isDiaUtil(dataSimulada)) {
        totalDiasUteisSimulados++;

        const fila = selecionarFilaRevisaoDiaria({
          estados,
          conceitos: conceitosMapa,
          dataHojeIso: dataSimulada,
        });

        // 1. Carga diária nunca passa de 30 itens
        expect(fila.itensNaFila.length).toBeLessThanOrEqual(30);

        // 2. Simula resposta dos itens da fila avançando caixas
        for (const item of fila.itensNaFila) {
          const resultado = processarRevisaoConceito(
            estados[item.conceito.id] || item.estado,
            true, // Acertou
            'certeza',
            item.formatoDesignado,
            'C',
            12,
            dataSimulada
          );
          estados[item.conceito.id] = resultado.novoEstado;

          // 3. Garantia matemática: a nova próxima revisão cai estritamente em dia útil
          expect(isDiaUtil(resultado.novoEstado.proximaRevisao)).toBe(true);
        }
      } else {
        // Garantia de que sábados e domingos são pulados
        const d = new Date(dataSimulada).getUTCDay();
        expect([0, 6]).toContain(d);
      }

      // Avança 1 dia corrido no calendário
      const [y, m, day] = dataSimulada.split('-').map(Number);
      const proximoDia = new Date(Date.UTC(y, m - 1, day + 1, 12, 0, 0));
      dataSimulada = proximoDia.toISOString().split('T')[0];
    }

    expect(totalDiasUteisSimulados).toBeGreaterThanOrEqual(60);
  });
});

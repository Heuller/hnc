import { describe, it, expect } from 'vitest';
import {
  calcularScorePrioridade,
  ordenarFilaRevisaoCadernoErros,
  processarRevisaoCadernoErro,
  calcularMetricasCadernoErros,
  type ItemCadernoErroScheduler,
} from '../domain/scheduler/cadernoErrosScheduler';

describe('CadernoErrosScheduler (Fase 2 - Deep Module TDD)', () => {
  const dataHoje = '2026-10-21';

  it('deve priorizar erros de alta confiança (Efeito Hipercorreção de Butterfield & Metcalfe 2001)', () => {
    const itemNormal: ItemCadernoErroScheduler = {
      id: 'item-1',
      chaveOriginal: 'q1',
      macroModuloId: 'm1',
      assertiva: 'Assertiva A',
      gabarito: 'C',
      caixa: 1,
      proximaRevisao: '2026-10-21',
      certeza: 'baixa',
      prioridadeHipercorrecao: false,
    };

    const itemHipercorrecao: ItemCadernoErroScheduler = {
      id: 'item-2',
      chaveOriginal: 'q2',
      macroModuloId: 'm1',
      assertiva: 'Assertiva B',
      gabarito: 'E',
      caixa: 1,
      proximaRevisao: '2026-10-21',
      certeza: 'alta',
      prioridadeHipercorrecao: true,
    };

    const scoreNormal = calcularScorePrioridade(itemNormal, dataHoje);
    const scoreHipercorrecao = calcularScorePrioridade(itemHipercorrecao, dataHoje);

    expect(scoreHipercorrecao).toBeGreaterThan(scoreNormal);
  });

  it('deve ordenar a fila de revisão posicionando hipercorreções e itens mais vencidos primeiro', () => {
    const fila: ItemCadernoErroScheduler[] = [
      {
        id: 'baixa-vencida-pouco',
        chaveOriginal: 'q1',
        macroModuloId: 'm1',
        assertiva: 'A',
        gabarito: 'C',
        caixa: 3,
        proximaRevisao: '2026-10-20', // vencido há 1 dia
        certeza: 'baixa',
      },
      {
        id: 'hipercorrecao-urgente',
        chaveOriginal: 'q2',
        macroModuloId: 'm2',
        assertiva: 'B',
        gabarito: 'E',
        caixa: 1,
        proximaRevisao: '2026-10-21', // vence hoje, mas com alta confiança
        certeza: 'alta',
        prioridadeHipercorrecao: true,
      },
      {
        id: 'nao-vencido',
        chaveOriginal: 'q3',
        macroModuloId: 'm1',
        assertiva: 'C',
        gabarito: 'C',
        caixa: 4,
        proximaRevisao: '2026-10-25', // futuro
        certeza: 'baixa',
      },
    ];

    const ordenada = ordenarFilaRevisaoCadernoErros(fila, dataHoje);

    expect(ordenada[0].id).toBe('hipercorrecao-urgente');
    expect(ordenada[1].id).toBe('baixa-vencida-pouco');
    expect(ordenada[2].id).toBe('nao-vencido');
  });

  it('ao errar novamente na revisão, deve rebaixar para Caixa 1 e agendar para o dia seguinte', () => {
    const item: ItemCadernoErroScheduler = {
      id: 'item-rebaixar',
      chaveOriginal: 'q1',
      macroModuloId: 'm1',
      assertiva: 'Assertiva X',
      gabarito: 'C',
      caixa: 3,
      proximaRevisao: '2026-10-21',
      historicoAcertos: 2,
      historicoErros: 1,
      certeza: 'alta',
    };

    const atualizado = processarRevisaoCadernoErro(item, {
      acertou: false,
      certeza: 'alta',
      dataAtualIso: dataHoje,
    });

    expect(atualizado.caixa).toBe(1);
    expect(atualizado.proximaRevisao).toBe('2026-10-22'); // +1 dia
    expect(atualizado.historicoErros).toBe(2);
    expect(atualizado.prioridadeHipercorrecao).toBe(true);
    expect(atualizado.pesoRevisao).toBe(2.0);
  });

  it('ao acertar item vencido, deve avançar para próxima caixa Leitner com intervalo expandido', () => {
    const item: ItemCadernoErroScheduler = {
      id: 'item-avancar',
      chaveOriginal: 'q1',
      macroModuloId: 'm1',
      assertiva: 'Assertiva Y',
      gabarito: 'E',
      caixa: 2,
      proximaRevisao: '2026-10-20', // vencido ontem
      historicoAcertos: 1,
      historicoErros: 1,
    };

    const atualizado = processarRevisaoCadernoErro(item, {
      acertou: true,
      certeza: 'alta',
      dataAtualIso: dataHoje,
    });

    // Caixa 2 -> Caixa 3 (intervalo de 7 dias na Caixa 3)
    expect(atualizado.caixa).toBe(3);
    expect(atualizado.proximaRevisao).toBe('2026-10-28'); // 2026-10-21 + 7 dias
    expect(atualizado.historicoAcertos).toBe(2);
  });

  it('ao acertar item NÃO vencido, NÃO deve avançar a caixa (Regra D.4 anti-decoreba imediata)', () => {
    const item: ItemCadernoErroScheduler = {
      id: 'item-cedo',
      chaveOriginal: 'q1',
      macroModuloId: 'm1',
      assertiva: 'Assertiva Z',
      gabarito: 'C',
      caixa: 2,
      proximaRevisao: '2026-10-25', // só vence em 4 dias
      historicoAcertos: 1,
      historicoErros: 1,
    };

    const atualizado = processarRevisaoCadernoErro(item, {
      acertou: true,
      certeza: 'media',
      dataAtualIso: dataHoje,
    });

    expect(atualizado.caixa).toBe(2); // manteve Caixa 2!
    expect(atualizado.proximaRevisao).toBe('2026-10-25'); // manteve data original!
    expect(atualizado.historicoAcertos).toBe(2);
  });

  it('deve comprimir os intervalos se a data da prova estiver muito próxima', () => {
    const item: ItemCadernoErroScheduler = {
      id: 'item-prova-perto',
      chaveOriginal: 'q1',
      macroModuloId: 'm1',
      assertiva: 'Assertiva W',
      gabarito: 'C',
      caixa: 1,
      proximaRevisao: '2026-10-21',
    };

    // Prova em 4 dias
    const atualizado = processarRevisaoCadernoErro(item, {
      acertou: true,
      certeza: 'alta',
      dataAtualIso: dataHoje,
      dataProvaIso: '2026-10-25',
    });

    // O intervalo padrão da Caixa 2 seria 3 dias, mas não pode ultrapassar a prova
    expect(atualizado.caixa).toBe(2);
    expect(new Date(atualizado.proximaRevisao).getTime()).toBeLessThanOrEqual(
      new Date('2026-10-25').getTime()
    );
  });

  it('deve calcular métricas agregadas e tempo de estudo previsto com precisão', () => {
    const itens: ItemCadernoErroScheduler[] = [
      {
        id: '1',
        chaveOriginal: 'q1',
        macroModuloId: 'm1',
        assertiva: 'A',
        gabarito: 'C',
        caixa: 1,
        proximaRevisao: '2026-10-21',
        certeza: 'alta',
        prioridadeHipercorrecao: true,
      },
      {
        id: '2',
        chaveOriginal: 'q2',
        macroModuloId: 'm1',
        assertiva: 'B',
        gabarito: 'E',
        caixa: 5, // resolvida/consolidada
        proximaRevisao: '2026-11-20',
        certeza: 'baixa',
      },
      {
        id: '3',
        chaveOriginal: 'q3',
        macroModuloId: 'm2',
        assertiva: 'C',
        gabarito: 'C',
        caixa: 2,
        proximaRevisao: '2026-10-21',
        certeza: 'media',
      },
    ];

    const metricas = calcularMetricasCadernoErros(itens, dataHoje);

    expect(metricas.totalItens).toBe(3);
    expect(metricas.errosAltaConfianca).toBe(1);
    expect(metricas.totalResolvidos).toBe(1); // Caixa 5
    expect(metricas.pendentesHoje).toBe(2); // itens 1 e 3 vencem em 2026-10-21
    expect(metricas.porModulo['M1']).toBe(2);
    expect(metricas.porModulo['M2']).toBe(1);
    expect(metricas.tempoEstimadoRevisaoMinutos).toBe(3); // 2 pendentes * 1.5 min = 3 min
  });
});

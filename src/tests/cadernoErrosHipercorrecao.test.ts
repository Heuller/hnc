import { describe, it, expect } from 'vitest';
import { getItensCadernoErros } from '../domain/cadernoErros';
import {
  processarRevisaoConceito,
  selecionarFilaRevisaoDiaria,
  criarEstadoInicialConceito,
} from '../domain/scheduler/unifiedScheduler';
import type { ItemAttempt } from '../domain/itemAttempts';
import type { Concept, ConceptState } from '../domain/concepts/types';

describe('U4.4 - Efeito da Hipercorreção (Butterfield & Metcalfe, 2001) e Caderno de Erros', () => {
  it('atribui prioridadeHipercorrecao e pesoRevisao 2x para erro cometido com alta certeza', () => {
    const checkpointsRespondidos: Record<string, 'C' | 'E'> = {
      'cp-1-1-1': 'E', // gabarito canônico em 1.1 é C
      'cp-1-1-2': 'C', // suponha outro checkpoint errado
    };

    const attempts: ItemAttempt[] = [
      {
        id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
        user_id: 'user-1',
        item_id: 'cp-1-1-1',
        submodulo_id: '1.1',
        modulo_id: 'm1',
        contexto: 'teoria',
        resposta: 'E',
        correto: false,
        certeza: 'alta', // ERRO COM ALTA CERTEZA -> HIPERCORREÇÃO
        tentativa_n: 1,
        criado_em: '2026-10-15T10:00:00.000Z',
      },
      {
        id: 'd67b5291-76bb-53fd-b056-6fe32efd1649',
        user_id: 'user-1',
        item_id: 'cp-1-1-2',
        submodulo_id: '1.1',
        modulo_id: 'm1',
        contexto: 'teoria',
        resposta: 'C',
        correto: false,
        certeza: 'baixa',
        tentativa_n: 1,
        criado_em: '2026-10-15T10:05:00.000Z',
      },
    ];

    const erros = getItensCadernoErros(checkpointsRespondidos, [], attempts);

    expect(erros.length).toBeGreaterThan(0);
    const erroHiper = erros.find((e) => e.chaveOriginal === 'cp-1-1-1');
    expect(erroHiper).toBeDefined();
    expect(erroHiper?.prioridadeHipercorrecao).toBe(true);
    expect(erroHiper?.pesoRevisao).toBe(2.0);
    expect(erroHiper?.certeza).toBe('alta');

    // O item de hipercorreção deve vir primeiro na ordenação
    expect(erros[0].prioridadeHipercorrecao).toBe(true);
  });

  it('processarRevisaoConceito gera mensagem de hipercorrecao e peso 2x ao errar com certeza', () => {
    const estadoInicial = criarEstadoInicialConceito('c_1.1_cp1', 'user-1', '2026-10-15');

    const resultado = processarRevisaoConceito(
      estadoInicial,
      false, // Errou
      'certeza', // Certeza absoluta
      'f1_ce_simples',
      'E',
      12,
      '2026-10-15'
    );

    expect(resultado.mensagemPedagogica).toContain('hipercorreção');
    expect(resultado.mensagemPedagogica).toContain('anula 1 acerto');
    expect(resultado.mensagemPedagogica).toContain('Butterfield & Metcalfe, 2001');
    expect(resultado.mensagemPedagogica).toContain('duplo (2x)');
    expect(resultado.novoEstado.prioridadeHipercorrecao).toBe(true);
    expect(resultado.novoEstado.pesoRevisao).toBe(2.0);
    expect(resultado.novoEstado.caixaLeitner).toBe(1);
  });

  it('processarRevisaoConceito mantem peso padrao 1x ao errar com duvida ou chute', () => {
    const estadoInicial = criarEstadoInicialConceito('c_1.1_cp1', 'user-1', '2026-10-15');

    const resultadoDuvida = processarRevisaoConceito(
      estadoInicial,
      false,
      'duvida',
      'f1_ce_simples',
      'E',
      10,
      '2026-10-15'
    );

    expect(resultadoDuvida.novoEstado.prioridadeHipercorrecao).toBe(false);
    expect(resultadoDuvida.novoEstado.pesoRevisao).toBe(1.0);
  });

  it('selecionarFilaRevisaoDiaria bonifica itens com hipercorrecao (+1500 pontos)', () => {
    const conceitoA: Concept = {
      id: 'c_par_1',
      submoduloId: '1.1',
      moduloId: 'm1',
      topico: 'Conceito A',
      enunciadoCanonic: 'Assertiva A',
      gabaritoCanonic: 'C',
      justificativaCanonic: 'Justificativa A',
      nivelDificuldade: 'medio',
      formatosDisponiveis: ['f1_ce_simples', 'f2_com_justificativa'],
    };

    const conceitoB: Concept = {
      id: 'c_par_2',
      submoduloId: '1.1',
      moduloId: 'm1',
      topico: 'Conceito B',
      enunciadoCanonic: 'Assertiva B',
      gabaritoCanonic: 'C',
      justificativaCanonic: 'Justificativa B',
      nivelDificuldade: 'medio',
      formatosDisponiveis: ['f1_ce_simples', 'f2_com_justificativa'],
    };

    // Ambos vencidos na mesma data e mesma caixa
    const estadoNormal: ConceptState = {
      ...criarEstadoInicialConceito('c_par_1', 'user-1', '2026-10-15'),
      proximaRevisao: '2026-10-15',
      caixaLeitner: 1,
    };

    const estadoHipercorrecao: ConceptState = {
      ...criarEstadoInicialConceito('c_par_2', 'user-1', '2026-10-15'),
      proximaRevisao: '2026-10-15',
      caixaLeitner: 1,
      prioridadeHipercorrecao: true,
      pesoRevisao: 2.0,
      totalErros: 1,
    };

    const fila = selecionarFilaRevisaoDiaria({
      estados: {
        c_par_1: estadoNormal,
        c_par_2: estadoHipercorrecao,
      },
      conceitos: {
        c_par_1: conceitoA,
        c_par_2: conceitoB,
      },
      dataHojeIso: '2026-10-15',
    });

    const itemNormal = fila.itensNaFila.find((i) => i.conceito.id === 'c_par_1');
    const itemHiper = fila.itensNaFila.find((i) => i.conceito.id === 'c_par_2');

    expect(itemNormal).toBeDefined();
    expect(itemHiper).toBeDefined();
    expect(itemHiper!.prioridadeScore).toBeGreaterThan(itemNormal!.prioridadeScore + 1000);
  });
});

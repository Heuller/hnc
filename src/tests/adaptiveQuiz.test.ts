// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import {
  diagnosticarVulnerabilidades,
} from '../domain/adaptiveQuiz/diagnosticEngine';
import {
  montarSimuladoOffline,
  calcularResultadoSimuladoAdaptativo,
} from '../domain/adaptiveQuiz/adaptiveQuizService';
import type { ItemSimuladoAdaptativo } from '../domain/adaptiveQuiz/types';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

describe('Gerador Inteligente de Simulados Adaptativos de Fraquezas', () => {
  const mockCheckpoints: Record<string, 'C' | 'E'> = {
    '1-1-1': 'E', // Errou (gabarito é C)
    '1-1-2': 'C', // Errou (gabarito é E)
    '1-2-1': 'C', // Acertou (gabarito é C)
  };

  const mockHistoricoSimulado: SimuladoFinalizado[] = [
    {
      id: 'sim-1',
      dataHora: '2026-10-02T10:00:00Z',
      respostas: {
        'q-1': { questionId: '1', resposta: 'C', certeza: 'certeza', acertou: false, timestamp: 1727870400000 },
        'q-2': { questionId: '2', resposta: 'E', certeza: 'provavel', acertou: true, timestamp: 1727870400000 },
        'q-3': { questionId: '3', resposta: 'C', certeza: 'chute', acertou: false, timestamp: 1727870400000 },
      },
      certos: 1,
      errados: 2,
      emBranco: 0,
      notaLiquida: -1,
      aproveitamentoPercent: 0,
      tempoGastoSegundos: 180,
      calibracao: {
        acertoCertezaPercent: 0,
        acertoProvavelPercent: 100,
        acertoChutePercent: 0,
        ganhoPotencialSeChuteBranco: 0,
      },
    },
  ];

  it('deve diagnosticar vulnerabilidades a partir dos erros em checkpoints e simulados', () => {
    const vulnerabilidades = diagnosticarVulnerabilidades(
      mockCheckpoints,
      mockHistoricoSimulado
    );

    expect(vulnerabilidades.length).toBeGreaterThan(0);
    // M1 possui múltiplos erros no mock
    const m1 = vulnerabilidades.find((v) => v.macroModuloId === 'm1');
    expect(m1).toBeDefined();
    expect(m1?.totalErros).toBeGreaterThanOrEqual(2);
    expect(m1?.nivelGravidade).toMatch(/CRITICA|ALTA|MODERADA/);
  });

  it('deve montar um simulado adaptativo offline com a quantidade exata de itens solicitada', () => {
    const itens10 = montarSimuladoOffline(
      { quantidadeItens: 10, modoFoco: 'fraquezas_criticas' },
      mockCheckpoints,
      mockHistoricoSimulado
    );
    expect(itens10.length).toBe(10);
    expect(itens10[0].numero).toBe(1);
    expect(itens10[9].numero).toBe(10);

    const itens15 = montarSimuladoOffline(
      { quantidadeItens: 15, modoFoco: 'fraquezas_criticas' },
      mockCheckpoints,
      mockHistoricoSimulado
    );
    expect(itens15.length).toBe(15);
  });

  it('deve calcular rigorosamente a fórmula Cebraspe: Nota Líquida = Certos - Errados', () => {
    const itensMock: ItemSimuladoAdaptativo[] = [
      {
        id: 'it-1',
        numero: 1,
        macroModuloId: 'm1',
        submoduloId: '1.1',
        topicoNome: 'Suzanne Briet',
        item: 'Item 1 teste',
        gabarito: 'C',
        justificativa: 'Just 1',
        armadilhaBanca: 'Arm 1',
        autorOuNormaReferencia: 'Briet',
      },
      {
        id: 'it-2',
        numero: 2,
        macroModuloId: 'm1',
        submoduloId: '1.1',
        topicoNome: 'Harold Borko',
        item: 'Item 2 teste',
        gabarito: 'E',
        justificativa: 'Just 2',
        armadilhaBanca: 'Arm 2',
        autorOuNormaReferencia: 'Borko',
      },
      {
        id: 'it-3',
        numero: 3,
        macroModuloId: 'm2',
        submoduloId: '2.1',
        topicoNome: 'IFLA LRM',
        item: 'Item 3 teste',
        gabarito: 'C',
        justificativa: 'Just 3',
        armadilhaBanca: 'Arm 3',
        autorOuNormaReferencia: 'LRM',
      },
      {
        id: 'it-4',
        numero: 4,
        macroModuloId: 'm5',
        submoduloId: '5.1',
        topicoNome: 'Waldomiro Vergueiro',
        item: 'Item 4 teste',
        gabarito: 'C',
        justificativa: 'Just 4',
        armadilhaBanca: 'Arm 4',
        autorOuNormaReferencia: 'Vergueiro',
      },
    ];

    // Candidato:
    // it-1: marcou C (acertou, +1)
    // it-2: marcou C (errou, -1)
    // it-3: marcou BRANCO (0)
    // it-4: marcou C (acertou, +1)
    // Total: 2 Certos, 1 Errado, 1 em Branco => Nota Líquida = 2 - 1 = 1 ponto
    const respostas = {
      'it-1': { itemId: 'it-1', resposta: 'C' as const, acertou: true },
      'it-2': { itemId: 'it-2', resposta: 'C' as const, acertou: false },
      'it-3': { itemId: 'it-3', resposta: 'BRANCO' as const, acertou: null },
      'it-4': { itemId: 'it-4', resposta: 'C' as const, acertou: true },
    };

    const resultado = calcularResultadoSimuladoAdaptativo(itensMock, respostas, 120);

    expect(resultado.totalItens).toBe(4);
    expect(resultado.certos).toBe(2);
    expect(resultado.errados).toBe(1);
    expect(resultado.emBranco).toBe(1);
    expect(resultado.notaLiquidaCebraspe).toBe(1);
    expect(resultado.aproveitamentoLiquidoPercentual).toBe(25); // 1 / 4 * 100 = 25%
    expect(resultado.lacunasSuperadas).toContain('Suzanne Briet');
    expect(resultado.lacunasSuperadas).toContain('Waldomiro Vergueiro');
    expect(resultado.lacunasPersistentes).toContain('Harold Borko');
  });

  it('deve tratar notas líquidas negativas atribuindo aproveitamento percentual mínimo de 0%', () => {
    const itensMock: ItemSimuladoAdaptativo[] = [
      {
        id: 'it-1',
        numero: 1,
        macroModuloId: 'm1',
        submoduloId: '1.1',
        topicoNome: 'Item A',
        item: 'Item A',
        gabarito: 'C',
        justificativa: '',
        armadilhaBanca: '',
        autorOuNormaReferencia: '',
      },
      {
        id: 'it-2',
        numero: 2,
        macroModuloId: 'm1',
        submoduloId: '1.1',
        topicoNome: 'Item B',
        item: 'Item B',
        gabarito: 'C',
        justificativa: '',
        armadilhaBanca: '',
        autorOuNormaReferencia: '',
      },
    ];

    // Marcou E e E em ambos (2 errados) => Nota = -2
    const respostas = {
      'it-1': { itemId: 'it-1', resposta: 'E' as const, acertou: false },
      'it-2': { itemId: 'it-2', resposta: 'E' as const, acertou: false },
    };

    const resultado = calcularResultadoSimuladoAdaptativo(itensMock, respostas, 60);

    expect(resultado.certos).toBe(0);
    expect(resultado.errados).toBe(2);
    expect(resultado.notaLiquidaCebraspe).toBe(-2);
    expect(resultado.aproveitamentoLiquidoPercentual).toBe(0);
  });
});

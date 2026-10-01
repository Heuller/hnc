import { describe, it, expect } from 'vitest';
import { getItensCadernoErros, agruparErrosPorModulo } from '../domain/cadernoErros';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

describe('Caderno de Erros (cadernoErros.ts - H1)', () => {
  it('deve retornar lista vazia quando não há erros registrados', () => {
    const erros = getItensCadernoErros({}, []);
    expect(erros).toEqual([]);
  });

  it('deve capturar corretamente checkpoint com resposta divergente do gabarito', () => {
    // cp-1-1-1 tem gabarito 'C'
    const checkpoints = {
      'cp-1-1-1': 'E' as const, // usuário errou
    };
    const erros = getItensCadernoErros(checkpoints, []);
    expect(erros.length).toBe(1);
    expect(erros[0].id).toBe('cp-cp-1-1-1');
    expect(erros[0].origem).toBe('checkpoint');
    expect(erros[0].gabarito).toBe('C');
    expect(erros[0].respostaUsuario).toBe('E');
    expect(erros[0].macroModuloId).toBe('m1');
  });

  it('não deve incluir checkpoints acertados pelo usuário', () => {
    const checkpoints = {
      'cp-1-1-1': 'C' as const, // correto
      'cp-1-1-2': 'E' as const, // correto (gabarito é E)
    };
    const erros = getItensCadernoErros(checkpoints, []);
    expect(erros.length).toBe(0);
  });

  it('deve capturar questões erradas em sessões de simulado finalizado', () => {
    const mockSimulado: SimuladoFinalizado = {
      id: 'sim-test-1',
      dataHora: '2026-10-01T12:00:00Z',
      tempoGastoSegundos: 3600,
      certos: 0,
      errados: 1,
      emBranco: 99,
      notaLiquida: -1,
      aproveitamentoPercent: 0,
      respostas: {
        'fund-q-1': {
          questionId: 'fund-q-1',
          resposta: 'C',
          acertou: false,
          timestamp: Date.now(),
        },
      },
      calibracao: {
        acertoCertezaPercent: 0,
        acertoProvavelPercent: 0,
        acertoChutePercent: 0,
        ganhoPotencialSeChuteBranco: 0,
      },
    };

    const erros = getItensCadernoErros({}, [mockSimulado]);
    expect(erros.length).toBe(1);
    expect(erros[0].origem).toBe('simulado');
    expect(erros[0].chaveOriginal).toBe('fund-q-1');
    expect(erros[0].gabarito).toBe('E');
    expect(erros[0].respostaUsuario).toBe('C');
  });

  it('deve agrupar erros por módulo corretamente', () => {
    const checkpoints = {
      'cp-1-1-1': 'E' as const, // erro no M1
      'cp-2-1-1': 'C' as const, // erro no M2 (cp-2-1-1 gabarito é E)
    };
    const erros = getItensCadernoErros(checkpoints, []);
    const agrupado = agruparErrosPorModulo(erros);
    expect(agrupado['M1']).toBeDefined();
    expect(agrupado['M1'].length).toBe(1);
    expect(agrupado['M2']).toBeDefined();
    expect(agrupado['M2'].length).toBe(1);
  });
});

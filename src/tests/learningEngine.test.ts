import { describe, it, expect } from 'vitest';
import {
  calculateSubmoduleStatus,
  checkSimuladoAccess,
  getRequiredSectionsForSubmodule,
} from '../domain/learningEngine';
import type { ModuloFilho } from '../domain/types';

describe('Motor de Aprendizagem e Máquina de Estados (learningEngine - Regra B3)', () => {
  const mockSubmodulo: ModuloFilho = {
    id: 'sub-test-1',
    numero: '1.1',
    titulo: 'Submódulo de Teste',
    descricaoCurta: 'Descrição',
    tempoEstimadoMinutos: 15,
    autoresChave: ['Autor A'],
    alertasCebraspe: ['Alerta 1'],
    quadroComparativo: {
      titulo: 'Quadro Teste',
      colunas: ['Col 1', 'Col 2'],
      linhas: [['A', 'B']],
    },
    teoriaDensaMarkdown: 'Texto',
    checkpoints: [
      {
        id: 'cp-1',
        pergunta: 'Pergunta 1',
        item: 'Item 1',
        gabarito: 'C',
        justificativa: 'Justificativa 1',
      },
      {
        id: 'cp-2',
        pergunta: 'Pergunta 2',
        item: 'Item 2',
        gabarito: 'E',
        justificativa: 'Justificativa 2',
      },
      {
        id: 'cp-3',
        pergunta: 'Pergunta 3',
        item: 'Item 3',
        gabarito: 'C',
        justificativa: 'Justificativa 3',
      },
    ],
    mnemonicos: {
      timeline: [],
      autores: [],
      pegadinhas: [],
    },
  };

  it('deve retornar as seções canônicas corretas incluindo quadro quando existente', () => {
    const sections = getRequiredSectionsForSubmodule(mockSubmodulo);
    expect(sections).toEqual([
      'sec-autores',
      'sec-alertas',
      'sec-quadro',
      'sec-teoria',
      'sec-checkpoints',
      'sec-mnemonicos',
    ]);
  });

  it('deve iniciar no status disponivel quando não há seções nem respostas (Regra B3)', () => {
    const state = calculateSubmoduleStatus(mockSubmodulo, [], {});
    expect(state.status).toBe('disponivel');
    expect(state.secoesLidasCount).toBe(0);
    expect(state.todasSecoesLidas).toBe(false);
    expect(state.badgeLabel).toBe('Disponível');
  });

  it('deve retornar bloqueada se isBloqueada for true (Regra B3)', () => {
    const state = calculateSubmoduleStatus(mockSubmodulo, [], {}, true);
    expect(state.status).toBe('bloqueada');
    expect(state.badgeLabel).toBe('Bloqueada');
  });

  it('deve transicionar para em_andamento quando ao menos 1 seção foi vista', () => {
    const state = calculateSubmoduleStatus(mockSubmodulo, ['sec-autores'], {});
    expect(state.status).toBe('em_andamento');
    expect(state.secoesLidasCount).toBe(1);
    expect(state.todasSecoesLidas).toBe(false);
  });

  it('NÃO deve mostrar em_revisao_dirigida se todas as seções foram lidas mas a verificação não foi feita (Regra B3)', () => {
    const required = getRequiredSectionsForSubmodule(mockSubmodulo);
    // Leu todas as seções, mas ainda não respondeu nenhum checkpoint
    const state = calculateSubmoduleStatus(mockSubmodulo, required, {});
    expect(state.status).toBe('em_andamento');
    expect(state.todasSecoesLidas).toBe(true);
    expect(state.checkpointsRespondidosCount).toBe(0);
  });

  it('deve transicionar para em_revisao_dirigida SOMENTE após a verificação ser realizada com aproveitamento < 85% (Regra B3)', () => {
    const required = getRequiredSectionsForSubmodule(mockSubmodulo);
    // 3 checkpoints respondidos: 1 certo de 3 = 33% (< 85%)
    const state = calculateSubmoduleStatus(mockSubmodulo, required, {
      'cp-1': 'C', // certo
      'cp-2': 'C', // errado (gabarito é E)
      'cp-3': 'E', // errado (gabarito é C)
    });
    expect(state.status).toBe('em_revisao_dirigida');
    expect(state.todasSecoesLidas).toBe(true);
    expect(state.taxaAcertoPercent).toBe(33);
    expect(state.atingiuCriterioAcerto).toBe(false);
    expect(state.badgeLabel).toBe('Em Revisão Dirigida');
  });

  it('deve transicionar para concluida quando todas as seções vistas E taxa de acerto >= 85%', () => {
    const required = getRequiredSectionsForSubmodule(mockSubmodulo);
    // 3 checkpoints: 3 certos de 3 = 100% (>= 85%)
    const state = calculateSubmoduleStatus(mockSubmodulo, required, {
      'cp-1': 'C',
      'cp-2': 'E',
      'cp-3': 'C',
    });
    expect(state.status).toBe('concluida');
    expect(state.todasSecoesLidas).toBe(true);
    expect(state.taxaAcertoPercent).toBe(100);
    expect(state.atingiuCriterioAcerto).toBe(true);
    expect(state.badgeLabel).toBe('Concluída');
  });

  describe('Bloqueio do Simulado de 100 Questões (checkSimuladoAccess)', () => {
    it('deve manter o simulado bloqueado se houver submódulos incompletos', () => {
      const access = checkSimuladoAccess([mockSubmodulo], {}, {}, false);
      expect(access.isUnlocked).toBe(false);
      expect(access.totalSubmodulosConcluidos).toBe(0);
      expect(access.submodulosPendentes).toHaveLength(1);
      expect(access.mensagemBloqueio).toContain('Simulado bloqueado');
    });

    it('deve desbloquear o simulado quando todos os submódulos atingirem status concluida', () => {
      const required = getRequiredSectionsForSubmodule(mockSubmodulo);
      const secoesMap = { [mockSubmodulo.id]: required };
      const respostas = { 'cp-1': 'C' as const, 'cp-2': 'E' as const, 'cp-3': 'C' as const };

      const access = checkSimuladoAccess([mockSubmodulo], secoesMap, respostas, false);
      expect(access.isUnlocked).toBe(true);
      expect(access.totalSubmodulosConcluidos).toBe(1);
      expect(access.percentualLiberacao).toBe(100);
      expect(access.submodulosPendentes).toHaveLength(0);
    });

    it('deve permitir bypass via modo desenvolvedor', () => {
      const access = checkSimuladoAccess([mockSubmodulo], {}, {}, true);
      expect(access.isUnlocked).toBe(true);
      expect(access.mensagemBloqueio).toContain('Modo Desenvolvedor');
    });
  });
});

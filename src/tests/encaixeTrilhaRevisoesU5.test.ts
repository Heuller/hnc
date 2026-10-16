import { describe, it, expect } from 'vitest';
import { deriveJornadaState } from '../domain/jornadaEngine';
import { ALL_COURSE_MODULES } from '../content/registry';

describe('U5.3 - Encaixe na Trilha sem Travas (Rn ao fim de cada módulo k)', () => {
  it('deve gerar submodulos de revisao cientifica para R1 a R10 e R14', () => {
    const state = deriveJornadaState({
      modulos: ALL_COURSE_MODULES,
      tentativas: [],
      secoesVisualizadas: {},
      modoLivre: false,
    });

    const modulosEsperados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14];

    for (const k of modulosEsperados) {
      const revisaoId = `revisao-m${k}`;
      const portalId = `portal-m${k}`;

      expect(state.etapas[revisaoId]).toBeDefined();
      expect(state.etapas[portalId]).toBeDefined();

      const etapa = state.etapas[revisaoId];
      expect(etapa.tipo).toBe('submodulo_revisao');
      expect(etapa.moduloNumero).toBe(k);
      expect(etapa.titulo).toBe(`Submódulo de Revisão Científica R${k}: Retenção Cumulativa`);
      expect(etapa.tituloCurto).toBe(`Revisão R${k}`);
      expect(etapa.isDesbloqueada).toBe(true);
      expect(etapa.status).toBe('disponivel');
      expect(etapa.descricaoRegra).toContain(`até o módulo ${k}`);
    }

    // Módulos M11, M12 e M13 não possuem submódulo de revisão científica dedicado
    expect(state.etapas['revisao-m11']).toBeUndefined();
    expect(state.etapas['revisao-m12']).toBeUndefined();
    expect(state.etapas['revisao-m13']).toBeUndefined();
  });

  it('deve posicionar Rn antes do Desafio do módulo nas etapas ordenadas da trilha', () => {
    const state = deriveJornadaState({
      modulos: ALL_COURSE_MODULES,
      tentativas: [],
      secoesVisualizadas: {},
      modoLivre: false,
    });

    const ordenadas = state.etapasOrdenadas;

    for (const k of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14]) {
      const idxRevisao = ordenadas.findIndex((e) => e.id === `revisao-m${k}`);
      const idxDesafio = ordenadas.findIndex((e) => e.id === `desafio-m${k}`);

      expect(idxRevisao).toBeGreaterThan(-1);
      expect(idxDesafio).toBeGreaterThan(-1);
      // Rn vem antes do Desafio na sequência da trilha recomendada
      expect(idxRevisao).toBeLessThan(idxDesafio);
    }
  });

  it('R1 deve existir e estar disponível para consolidação dos submódulos do M1', () => {
    const state = deriveJornadaState({
      modulos: ALL_COURSE_MODULES,
      tentativas: [],
      secoesVisualizadas: {},
      modoLivre: false,
    });

    const r1 = state.etapas['revisao-m1'];
    expect(r1).toBeDefined();
    expect(r1.titulo).toBe('Submódulo de Revisão Científica R1: Retenção Cumulativa');
    expect(r1.isDesbloqueada).toBe(true);
    expect(r1.status).toBe('disponivel');
  });
});

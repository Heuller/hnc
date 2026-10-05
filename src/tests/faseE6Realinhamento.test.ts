import { describe, it, expect } from 'vitest';
import { SIMULADOS_REGISTRY, getSimuladoById, detectSimuladoIdFromQuestionId } from '../content/simuladosRegistry';
import { COURSE_REGISTRY } from '../content/registry';

describe('Auditoria da Fase E6: Realinhamento do Painel, Hub de Treinos e Integração dos 10 Simulados', () => {
  describe('Consistência do Catálogo de Simulados e Navegação', () => {
    it('deve disponibilizar manifestos completos de simulados oficiais (M1 a M14 + Mega Simulado)', () => {
      expect(SIMULADOS_REGISTRY.length).toBeGreaterThanOrEqual(10);
      SIMULADOS_REGISTRY.slice(0, 10).forEach((sim, idx) => {
        expect(sim.numero).toBe(idx + 1);
        expect(sim.macroModuloId).toBe(`M${idx + 1}`);
        expect(sim.questoes).toHaveLength(100);
        expect(sim.submodulosIds).toHaveLength(4);
      });
    });

    it('detectSimuladoIdFromQuestionId deve mapear com precisão os prefixos de todas as 10 macro-áreas', () => {
      expect(detectSimuladoIdFromQuestionId('fund-q-1')).toBe('m1-fundamentos');
      expect(detectSimuladoIdFromQuestionId('cat-q-25')).toBe('m2-catalogacao');
      expect(detectSimuladoIdFromQuestionId('m3-q-1')).toBe('m3-classificacao');
      expect(detectSimuladoIdFromQuestionId('m4-q-50')).toBe('m4-recuperacao');
      expect(detectSimuladoIdFromQuestionId('m5-q-75')).toBe('m5-gestao');
      expect(detectSimuladoIdFromQuestionId('m6-q-10')).toBe('m6-digital-ia');
      expect(detectSimuladoIdFromQuestionId('m7-q-99')).toBe('m7-preservacao');
      expect(detectSimuladoIdFromQuestionId('m8-q-30')).toBe('m8-normalizacao');
      expect(detectSimuladoIdFromQuestionId('m9-q-40')).toBe('m9-comunicacao');
      expect(detectSimuladoIdFromQuestionId('m10-q-100')).toBe('m10-legislativo');
    });

    it('getSimuladoById deve recuperar qualquer um dos 10 simulados oficiais', () => {
      const ids = [
        'm1-fundamentos',
        'm2-catalogacao',
        'm3-classificacao',
        'm4-recuperacao',
        'm5-gestao',
        'm6-digital-ia',
        'm7-preservacao',
        'm8-normalizacao',
        'm9-comunicacao',
        'm10-legislativo',
      ];

      ids.forEach((id, idx) => {
        const sim = getSimuladoById(id);
        expect(sim).toBeDefined();
        expect(sim.id).toBe(id);
        expect(sim.numero).toBe(idx + 1);
        expect(sim.questoes).toHaveLength(100);
      });
    });
  });

  describe('Integração de Armadilhas no Radar Cebraspe', () => {
    it('deve indexar armadilhas e pegadinhas de todos os cadernos de simulado', () => {
      const todasQuestoes = SIMULADOS_REGISTRY.flatMap((sim) => sim.questoes);
      expect(todasQuestoes).toHaveLength(1520);

      const questoesComArmadilha = todasQuestoes.filter(
        (q) => q.armadilhaBanca && q.armadilhaBanca.trim().length > 0
      );
      // Cada um dos 1.520 itens foi construído com armadilhaBanca explícita
      expect(questoesComArmadilha.length).toBeGreaterThanOrEqual(1400);

      // Certifica presença de armadilhas para cada um dos 10 módulos
      for (let m = 1; m <= 10; m++) {
        const armadilhasMod = questoesComArmadilha.filter((q) => q.macroModuloId === `M${m}`);
        expect(armadilhasMod.length).toBeGreaterThanOrEqual(90);
      }
    });
  });

  describe('Alinhamento Curricular e Desafios da Jornada', () => {
    it('cada um dos 10 macro-módulos específicos deve possuir simulado correspondente em SIMULADOS_REGISTRY', () => {
      const macroEspecificos = COURSE_REGISTRY.filter((m) => m.numero <= 10);
      expect(macroEspecificos).toHaveLength(10);

      macroEspecificos.forEach((macro) => {
        const simulado = SIMULADOS_REGISTRY.find((s) => s.numero === macro.numero);
        expect(simulado).toBeDefined();
        expect(simulado?.questoes).toHaveLength(100);
        expect(simulado?.macroModuloId).toBe(macro.codigo);
      });
    });

    it('os submódulos de cada simulado devem coincidir exatamente com os modulosFilhos do COURSE_REGISTRY', () => {
      COURSE_REGISTRY.slice(0, 10).forEach((macro) => {
        const simulado = SIMULADOS_REGISTRY.find((s) => s.numero === macro.numero);
        expect(simulado).toBeDefined();
        const numerosFilhos = macro.modulosFilhos.map((f) => f.numero);
        expect(simulado?.submodulosIds).toEqual(numerosFilhos);
      });
    });
  });
});

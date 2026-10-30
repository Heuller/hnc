import { describe, it, expect } from 'vitest';
import {
  ALL_SIMULADOS_REGISTRY,
  selecionarQuestoesEstratificadas5050,
} from '../content/simuladosRegistry';
import { questoesSubmodulosAmpliados } from '../content/questions/questoes-submodulos-ampliados';

describe('F-12: Paridade e Simetria de Gabaritos Cebraspe nos Simulados', () => {
  it('confirma a assimetria do banco bruto questoesSubmodulosAmpliados (44 C / 25 E)', () => {
    const certas = questoesSubmodulosAmpliados.filter((q) => q.gabarito === 'C').length;
    const erradas = questoesSubmodulosAmpliados.filter((q) => q.gabarito === 'E').length;

    expect(certas).toBe(44);
    expect(erradas).toBe(25);
    expect(certas + erradas).toBe(69);
  });

  it('selecionarQuestoesEstratificadas5050 garante paridade exata 50/50 a partir do banco assimétrico', () => {
    // Sorteio de 20 questões
    const amostra20 = selecionarQuestoesEstratificadas5050(questoesSubmodulosAmpliados, 20, 123);
    expect(amostra20).toHaveLength(20);
    const c20 = amostra20.filter((q) => q.gabarito === 'C').length;
    const e20 = amostra20.filter((q) => q.gabarito === 'E').length;
    expect(c20).toBe(10);
    expect(e20).toBe(10);

    // Sorteio de 30 questões
    const amostra30 = selecionarQuestoesEstratificadas5050(questoesSubmodulosAmpliados, 30, 456);
    expect(amostra30).toHaveLength(30);
    const c30 = amostra30.filter((q) => q.gabarito === 'C').length;
    const e30 = amostra30.filter((q) => q.gabarito === 'E').length;
    expect(c30).toBe(15);
    expect(e30).toBe(15);

    // Sorteio de 40 questões
    const amostra40 = selecionarQuestoesEstratificadas5050(questoesSubmodulosAmpliados, 40, 789);
    expect(amostra40).toHaveLength(40);
    const c40 = amostra40.filter((q) => q.gabarito === 'C').length;
    const e40 = amostra40.filter((q) => q.gabarito === 'E').length;
    expect(c40).toBe(20);
    expect(e40).toBe(20);
  });

  it('cadernos mantêm julgamentos válidos e quarentena, sem quotas que impeçam correções', () => {
    expect(ALL_SIMULADOS_REGISTRY.length).toBeGreaterThan(15);


    for (const sim of ALL_SIMULADOS_REGISTRY) {
      const total = sim.questoes.length;
      expect(total, `Simulado ${sim.id} deve ter questões cadastradas`).toBeGreaterThan(0);

      const certas = sim.questoes.filter((q) => q.gabarito === 'C').length;
      const erradas = sim.questoes.filter((q) => q.gabarito === 'E').length;

      expect(certas + erradas).toBe(total);

      if (sim.itensForaConferencia) {
        expect(sim.questoes.length + sim.itensForaConferencia).toBe(sim.totalNominal);
        expect(sim.titulo).toContain('treino parcial');
        continue;
      }
      expect(certas).toBeGreaterThan(0);
      expect(erradas).toBeGreaterThan(0);
      // Não alterar gabaritos corretos para satisfazer uma porcentagem.

    }
  });
});

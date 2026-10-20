import { describe, it, expect } from 'vitest';
import {
  ALL_SIMULADOS_REGISTRY,
  selecionarQuestoesEstratificadas5050,
} from '../content/simuladosRegistry';
import { questoesSubmodulosAmpliados } from '../content/questions/questoes-submodulos-ampliados';
import { CONCURSO_CONFIG } from '../config/concurso.config';

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

  it('todos os simulados cadastrados no catálogo oficial respeitam a simetria de gabarito de CONCURSO_CONFIG', () => {
    expect(ALL_SIMULADOS_REGISTRY.length).toBeGreaterThan(15);

    const { certosMin, certosMax } = CONCURSO_CONFIG.banca.simetriaGabarito;

    for (const sim of ALL_SIMULADOS_REGISTRY) {
      const total = sim.questoes.length;
      expect(total, `Simulado ${sim.id} deve ter questões cadastradas`).toBeGreaterThan(0);

      const certas = sim.questoes.filter((q) => q.gabarito === 'C').length;
      const erradas = sim.questoes.filter((q) => q.gabarito === 'E').length;

      expect(certas + erradas).toBe(total);

      const percentCertas = (certas / total) * 100;
      // Para simulados de 100 ou 180 itens, a simetria é estrita (48% a 52%)
      // Para mini simulados (ex.: 30 itens), tolera-se proporção de no máximo 1 questão de desvio
      if (total >= 100) {
        expect(
          percentCertas,
          `Simulado ${sim.id} (${total}Q) possui percentual de Certas ${percentCertas.toFixed(1)}% fora do intervalo [${certosMin}%, ${certosMax}%]`
        ).toBeGreaterThanOrEqual(certosMin);
        expect(
          percentCertas,
          `Simulado ${sim.id} (${total}Q) possui percentual de Certas ${percentCertas.toFixed(1)}% fora do intervalo [${certosMin}%, ${certosMax}%]`
        ).toBeLessThanOrEqual(certosMax);
      } else {
        expect(percentCertas).toBeGreaterThanOrEqual(45);
        expect(percentCertas).toBeLessThanOrEqual(55);
      }
    }
  });
});

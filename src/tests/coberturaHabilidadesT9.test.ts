import { describe, it, expect } from 'vitest';
import { ALL_COURSE_MODULES } from '../content/registry';
import {
  analisarHabilidadesModulo,
  classificarHabilidade,
} from '../domain/exercicios/classificacaoHabilidades';

describe('T9.1: Cobertura por Habilidade Cognitiva e Tipo de Exercício (Edital 1/2026, Item 14.1.1)', () => {
  it('classifica corretamente os tipos de exercício nas 5 habilidades cognitivas do Cebraspe', () => {
    // Memorizar
    expect(classificarHabilidade('X1')).toBe('memorizar');
    expect(classificarHabilidade('X4')).toBe('memorizar');
    expect(classificarHabilidade('f7_flashcard_ativo')).toBe('memorizar');

    // Compreender
    expect(classificarHabilidade('X2')).toBe('compreender');
    expect(classificarHabilidade('f1_ce_simples')).toBe('compreender');
    expect(classificarHabilidade('f2_com_justificativa')).toBe('compreender');
    expect(classificarHabilidade('f4_preenchimento_lacunas')).toBe('compreender');

    // Aplicar
    expect(classificarHabilidade('X3')).toBe('aplicar');
    expect(classificarHabilidade('X6')).toBe('aplicar');
    expect(classificarHabilidade('f5_associacao')).toBe('aplicar');
    expect(classificarHabilidade('f6_caso_pratico')).toBe('aplicar');

    // Analisar
    expect(classificarHabilidade('X5')).toBe('analisar');
    expect(classificarHabilidade('X7')).toBe('analisar');
    expect(classificarHabilidade('X9')).toBe('analisar');
    expect(classificarHabilidade('f3_identificacao_erro')).toBe('analisar');
    expect(classificarHabilidade('f8_inversao_papeis')).toBe('analisar');

    // Avaliar
    expect(classificarHabilidade('X8')).toBe('avaliar');
    expect(classificarHabilidade('X10')).toBe('avaliar');
  });

  it('assegura que todos os módulos atingem >= 30% de aplicação ou análise cognitiva', () => {
    ALL_COURSE_MODULES.forEach((mod) => {
      const analise = analisarHabilidadesModulo(mod);
      expect(
        analise.pctAplicacaoAnalise,
        `Módulo ${mod.codigo} (${mod.titulo}) com % Aplicação+Análise abaixo da meta: ${analise.pctAplicacaoAnalise}%`
      ).toBeGreaterThanOrEqual(30);
      expect(analise.conformeMetaAplicacaoAnalise).toBe(true);
    });
  });

  it('assegura que nenhum tipo de exercício individual ultrapassa 40% em qualquer módulo', () => {
    ALL_COURSE_MODULES.forEach((mod) => {
      const analise = analisarHabilidadesModulo(mod);
      expect(
        analise.maxPctTipo,
        `Módulo ${mod.codigo} (${mod.titulo}) com tipo concentrado: ${analise.tipoMaisFrequente} (${analise.maxPctTipo}%)`
      ).toBeLessThanOrEqual(40);
      expect(analise.conformeMetaMaxTipo).toBe(true);
    });
  });

  it('garante que todos os 15 módulos do curso possuem exercícios mapeados', () => {
    expect(ALL_COURSE_MODULES.length).toBe(15);
    ALL_COURSE_MODULES.forEach((mod) => {
      const analise = analisarHabilidadesModulo(mod);
      expect(analise.totalExercicios).toBeGreaterThan(0);
    });
  });
});

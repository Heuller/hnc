import { describe, it, expect } from 'vitest';
import { CASOS_INTEGRADORES } from '../domain/casosIntegradores/casosIntegradores';
import { COURSE_REGISTRY } from '../content/registry';

describe('T6.2 — Casos Integradores Interdisciplinares (CI-1 a CI-5)', () => {
  it('deve conter exatamente 5 Casos Integradores cadastrados', () => {
    expect(CASOS_INTEGRADORES).toHaveLength(5);
    const ids = CASOS_INTEGRADORES.map((c) => c.id);
    expect(ids).toEqual(['ci-1', 'ci-2', 'ci-3', 'ci-4', 'ci-5']);
  });

  it('cada Caso Integrador deve ter título, subtítulo, enunciado contextualizado e módulos envolvidos', () => {
    CASOS_INTEGRADORES.forEach((caso) => {
      expect(caso.titulo).toBeTruthy();
      expect(caso.subtitulo).toBeTruthy();
      expect(caso.enunciadoContexto.length).toBeGreaterThan(150);
      expect(caso.modulosEnvolvidos.length).toBeGreaterThanOrEqual(2);
      expect(caso.modulosCodigos.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('cada caso deve conter estritamente 5 itens Certo/Errado (totalizando 25 itens)', () => {
    let totalItens = 0;
    CASOS_INTEGRADORES.forEach((caso) => {
      expect(caso.questoes).toHaveLength(5);
      totalItens += caso.questoes.length;

      caso.questoes.forEach((q) => {
        expect(['C', 'E']).toContain(q.gabarito);
        expect(q.item.length).toBeGreaterThan(40);
        expect(q.justificativa.length).toBeGreaterThan(50);
        expect(q.editalRef).toBeTruthy();
      });
    });
    expect(totalItens).toBe(25);
  });

  it('o balanceamento de gabaritos em todo o conjunto de casos deve respeitar a paridade Cebraspe', () => {
    const todosItens = CASOS_INTEGRADORES.flatMap((c) => c.questoes);
    const certos = todosItens.filter((q) => q.gabarito === 'C').length;
    const errados = todosItens.filter((q) => q.gabarito === 'E').length;

    // 25 itens: 14 C e 11 E (ou similar, muito próximo do 50/50)
    expect(Math.abs(certos - errados)).toBeLessThanOrEqual(5);
  });

  it('todas as referências a submódulos (submoduloRef) devem existir no COURSE_REGISTRY', () => {
    const todosSubmodulosNumeros = new Set(
      COURSE_REGISTRY.flatMap((m) => m.modulosFilhos.map((s) => s.numero))
    );

    CASOS_INTEGRADORES.forEach((caso) => {
      caso.questoes.forEach((q) => {
        expect(
          todosSubmodulosNumeros.has(q.submoduloRef),
          `Submódulo ${q.submoduloRef} citado no item ${q.id} do ${caso.id} deve existir no COURSE_REGISTRY`
        ).toBe(true);
      });
    });
  });
});

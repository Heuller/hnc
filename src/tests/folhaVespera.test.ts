import { describe, it, expect } from 'vitest';
import { MATRIZ_BLOCOS_EDITAL_VESPERA } from '../domain/folhaVespera/pegadinhasBlocos';

describe('Folha de Véspera - Matriz de 5 Blocos do Edital 2026 (Alvo E18)', () => {
  it('deve cobrir integralmente os 5 blocos temáticos do Edital nº 1/2026', () => {
    expect(MATRIZ_BLOCOS_EDITAL_VESPERA).toHaveLength(5);

    const ids = MATRIZ_BLOCOS_EDITAL_VESPERA.map((b) => b.id);
    expect(ids).toEqual(['bloco-a', 'bloco-b', 'bloco-c', 'bloco-d', 'bloco-e']);
  });

  it('cada bloco deve conter estritamente entre 10 e 15 pegadinhas capitais da banca Cebraspe', () => {
    for (const bloco of MATRIZ_BLOCOS_EDITAL_VESPERA) {
      expect(bloco.pegadinhas.length).toBeGreaterThanOrEqual(10);
      expect(bloco.pegadinhas.length).toBeLessThanOrEqual(15);
      expect(bloco.titulo.trim().length).toBeGreaterThan(10);
      expect(bloco.descricao.trim().length).toBeGreaterThan(15);
      expect(bloco.modulosRelacionados.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('cada pegadinha deve possuir asserção, armadilha, fundamentação canônica e citação de fonte primária', () => {
    const idsVistos = new Set<string>();

    for (const bloco of MATRIZ_BLOCOS_EDITAL_VESPERA) {
      for (const p of bloco.pegadinhas) {
        expect(idsVistos.has(p.id)).toBe(false);
        idsVistos.add(p.id);

        expect(p.topico.trim().length).toBeGreaterThan(5);
        expect(p.afirmacaoFalsa.trim().length).toBeGreaterThan(15);
        expect(p.armadilhaCebraspe.trim().length).toBeGreaterThan(20);
        expect(['C', 'E']).toContain(p.gabaritoOficial);
        expect(p.fundamentacaoCanonico.trim().length).toBeGreaterThan(20);
        expect(p.fontePrimaria.trim().length).toBeGreaterThan(10);
        expect(p.submoduloRef.trim().length).toBeGreaterThan(2);
      }
    }

    expect(idsVistos.size).toBe(60);
  });
});

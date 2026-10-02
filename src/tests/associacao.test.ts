import { describe, it, expect } from 'vitest';
import { shuffleConceptsColumn, PAIR_COLOR_PALETTES } from '../domain/associacao';

describe('Motor de Associação (Regra B4)', () => {
  it('garante que a ordem da coluna direita NUNCA coincide por inteiro com a da esquerda', () => {
    const original = ['Ranganathan', 'Mikhailov', 'Otlet', 'Lancaster'];

    for (let seed = 1; seed <= 100; seed++) {
      const shuffled = shuffleConceptsColumn(original, seed);
      expect(shuffled).toHaveLength(original.length);

      // Não pode coincidir por inteiro (todos os índices idênticos)
      const coincidePorInteiro = shuffled.every((item, idx) => item === original[idx]);
      expect(coincidePorInteiro).toBe(false);

      // Todos os elementos originais devem estar presentes
      expect(new Set(shuffled)).toEqual(new Set(original));
    }
  });

  it('preserva listas de 1 elemento sem erro', () => {
    const single = ['Autor Único'];
    const shuffled = shuffleConceptsColumn(single, 42);
    expect(shuffled).toEqual(single);
  });

  it('lida com listas de 2 elementos trocando obrigatoriamente a posição', () => {
    const pair = ['A', 'B'];
    const shuffled = shuffleConceptsColumn(pair, 99);
    expect(shuffled).toEqual(['B', 'A']);
  });

  it('fornece paletas com estilos de contraste acessíveis para pares numerados', () => {
    expect(PAIR_COLOR_PALETTES.length).toBeGreaterThanOrEqual(4);
    for (const palette of PAIR_COLOR_PALETTES) {
      expect(palette.badge).toBeDefined();
      expect(palette.border).toBeDefined();
      expect(palette.text).toBeDefined();
    }
  });
});

// @vitest-environment jsdom
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ALL_COURSE_MODULES } from '../content/registry';
import { TREINOS_DISCURSIVOS_MODULO } from '../content/treinosDiscursivosModulo';
import { TreinoDiscursivoModulo } from '../components/teoria/TreinoDiscursivoModulo';

afterEach(cleanup);

describe('treino discursivo no fim dos módulos', () => {
  it('oferece uma proposta identificada e critérios específicos em cada módulo', () => {
    for (const modulo of ALL_COURSE_MODULES) {
      const treino = TREINOS_DISCURSIVOS_MODULO[modulo.id];
      expect(treino, modulo.id).toBeDefined();
      expect(treino.enunciado.length, modulo.id).toBeGreaterThan(100);
      expect(treino.pontos.length, modulo.id).toBeGreaterThanOrEqual(3);
      expect(treino.respostaModelo.length, modulo.id).toBeGreaterThan(200);
      expect(treino.fundamentacao.length, modulo.id).toBeGreaterThan(30);
    }
    expect(new Set(ALL_COURSE_MODULES.map(m => TREINOS_DISCURSIVOS_MODULO[m.id].enunciado)).size).toBe(ALL_COURSE_MODULES.length);
  });
  it('distingue uma peça autoral e mantém os pontos em seção recolhida', () => {
    const { container } = render(<TreinoDiscursivoModulo moduloId="m2" />);
    expect(screen.getByText(/Peça técnica: até 50 linhas/)).toBeTruthy();
    expect(screen.getByText(/não é espelho ou pontuação oficial/)).toBeTruthy();
    expect(container.querySelector('details')?.open).toBe(false);
  });
  it('informa o limite de questão discursiva', () => {
    render(<TreinoDiscursivoModulo moduloId="m1" />);
    expect(screen.getByText(/Questão discursiva: até 20 linhas/)).toBeTruthy();
    const botao = screen.getByText('Como a banca espera que você responda?');
    const painel = botao.closest('details')!;
    expect(painel.open).toBe(false);
    fireEvent.click(botao);
    expect(painel.open).toBe(true);
    expect(screen.getByText(/A Biblioteconomia contribui ao organizar o acervo/)).toBeTruthy();
    expect(screen.getByText(/não é espelho oficial nem garantia de nota máxima/i)).toBeTruthy();
  });
});

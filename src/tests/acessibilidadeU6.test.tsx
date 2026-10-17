// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DESIGN_TOKENS } from '../config/designTokens';
import { Header } from '../components/layout/Header';

/**
 * Funções auxiliares para cálculo matemático de contraste WCAG 2.2
 */
function hexParaRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return { r, g, b };
}

function luminanciaRelativa(rgb: { r: number; g: number; b: number }): number {
  const [rs, gs, bs] = [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function calcularTaxaContraste(hex1: string, hex2: string): number {
  const lum1 = luminanciaRelativa(hexParaRgb(hex1));
  const lum2 = luminanciaRelativa(hexParaRgb(hex2));
  const maisClaro = Math.max(lum1, lum2);
  const maisEscuro = Math.min(lum1, lum2);
  return (maisClaro + 0.05) / (maisEscuro + 0.05);
}

describe('U6.7: Auditoria de Acessibilidade, Contraste WCAG 2.2 AA e Alvos Táteis', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  describe('Auditoria de Contraste WCAG 2.2 AA (mínimo 4.5:1 para texto normal)', () => {
    it('Tema Claro: deve garantir contraste >= 4.5:1 para ink e ink-2 sobre os 3 níveis de superfície', () => {
      const { nivel1, nivel2, nivel3 } = DESIGN_TOKENS.superficies.claro;
      const { ink, ink2 } = DESIGN_TOKENS.cores.claro;

      // Nível 1: Papel base
      const contrasteInkN1 = calcularTaxaContraste(ink, nivel1.hex);
      const contrasteInk2N1 = calcularTaxaContraste(ink2, nivel1.hex);
      expect(contrasteInkN1).toBeGreaterThanOrEqual(4.5);
      expect(contrasteInk2N1).toBeGreaterThanOrEqual(4.5);

      // Nível 2: Folha de leitura
      const contrasteInkN2 = calcularTaxaContraste(ink, nivel2.hex);
      const contrasteInk2N2 = calcularTaxaContraste(ink2, nivel2.hex);
      expect(contrasteInkN2).toBeGreaterThanOrEqual(4.5);
      expect(contrasteInk2N2).toBeGreaterThanOrEqual(4.5);

      // Nível 3: Superfície elevada
      const contrasteInkN3 = calcularTaxaContraste(ink, nivel3.hex);
      const contrasteInk2N3 = calcularTaxaContraste(ink2, nivel3.hex);
      expect(contrasteInkN3).toBeGreaterThanOrEqual(4.5);
      expect(contrasteInk2N3).toBeGreaterThanOrEqual(4.5);
    });

    it('Tema Escuro: deve garantir contraste >= 4.5:1 para ink e ink-2 sobre os 3 níveis de superfície', () => {
      const { nivel1, nivel2, nivel3 } = DESIGN_TOKENS.superficies.escuro;
      const { ink, ink2 } = DESIGN_TOKENS.cores.escuro;

      // Nível 1: Fundo escuro base
      const contrasteInkN1 = calcularTaxaContraste(ink, nivel1.hex);
      const contrasteInk2N1 = calcularTaxaContraste(ink2, nivel1.hex);
      expect(contrasteInkN1).toBeGreaterThanOrEqual(4.5);
      expect(contrasteInk2N1).toBeGreaterThanOrEqual(4.5);

      // Nível 2: Cartão escuro
      const contrasteInkN2 = calcularTaxaContraste(ink, nivel2.hex);
      const contrasteInk2N2 = calcularTaxaContraste(ink2, nivel2.hex);
      expect(contrasteInkN2).toBeGreaterThanOrEqual(4.5);
      expect(contrasteInk2N2).toBeGreaterThanOrEqual(4.5);

      // Nível 3: Gaveta elevada
      const contrasteInkN3 = calcularTaxaContraste(ink, nivel3.hex);
      const contrasteInk2N3 = calcularTaxaContraste(ink2, nivel3.hex);
      expect(contrasteInkN3).toBeGreaterThanOrEqual(4.5);
      expect(contrasteInk2N3).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe('Auditoria de Alvos Táteis e Geometria Mobile (mínimo 44x44 px)', () => {
    it('deve definir o alvo tátil mínimo em 44px nos tokens de design', () => {
      expect(DESIGN_TOKENS.geometria.alvoToqueMinimoPx).toBeGreaterThanOrEqual(44);
    });

    it('o cabeçalho e seus botões devem conter atributos aria e identificação acessível', () => {
      render(<Header />);

      // Região de cabeçalho
      const banner = screen.getByRole('banner');
      expect(banner).toBeDefined();

      // Navegação principal
      const nav = screen.getByRole('navigation', { name: /Navegação principal/i });
      expect(nav).toBeDefined();

      // Botão de busca com aria-label (presente no mobile e desktop)
      const botoesBusca = screen.getAllByLabelText(/Abrir busca global/i);
      expect(botoesBusca.length).toBeGreaterThanOrEqual(1);

      // Botão de menu do usuário com aria-label
      const botaoMenu = screen.getByLabelText(/Menu de usuário|Entrar na conta/i);
      expect(botaoMenu).toBeDefined();
    });
  });
});

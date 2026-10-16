// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PainelPage } from '../pages/PainelPage';
import { JornadaPage } from '../pages/JornadaPage';

describe('U6.5: Painel com Cartão Hoje e Jornada Livre sem Cadeado', () => {
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

  it('deve renderizar o Painel com cabeçalho Hoje e o cartão hero de Próxima Ação', () => {
    render(<PainelPage />);

    expect(screen.getByText(/Hoje · Sessão de Estudos/i)).toBeDefined();

    const cartaoHoje = screen.getByTestId('cartao-hoje');
    expect(cartaoHoje).toBeDefined();
    expect(screen.getByText(/Hoje · Próxima Ação Recomendada/i)).toBeDefined();

    // Resumo de revisões e constância
    expect(screen.getByText(/Revisão do Dia/i)).toBeDefined();
    expect(screen.getByText(/Constância/i)).toBeDefined();
    expect(screen.getByText(/Trilha da Jornada/i)).toBeDefined();
  });

  it('deve renderizar a Jornada Livre com selos informativos e sem ícones de cadeado de bloqueio', () => {
    const { container } = render(<JornadaPage />);

    // Verifica presença da jornada
    expect(screen.getByText(/Jornada de Domínio Cebraspe/i)).toBeDefined();

    // Verifica que não há nenhum ícone de cadeado fechado (lucide-lock)
    const cadeados = container.querySelectorAll('.lucide-lock, [data-icon="lock"]');
    expect(cadeados.length).toBe(0);

    // Verifica que os selos de status (Disponível, Concluída ou Revisão) estão presentes
    const badgesDisponivel = screen.getAllByText(/Disponível/i);
    expect(badgesDisponivel.length).toBeGreaterThan(0);
  });
});

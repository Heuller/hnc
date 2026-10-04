// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EditalPage } from '../pages/EditalPage';

describe('Página Oficial do Edital (Edital nº 1/2026 - Cebraspe)', () => {
  it('deve renderizar o cabeçalho oficial do concurso com remuneração e vagas', () => {
    render(<EditalPage />);

    expect(screen.getByText(/EDITAL Nº 1 — CÂMARA DOS DEPUTADOS/i)).toBeDefined();
    expect(screen.getByText(/Quadro Oficial de Objetos de Avaliação & Regras/i)).toBeDefined();
    expect(screen.getByText(/R\$ 32\.070,88/i)).toBeDefined();
    expect(screen.getByText(/7 vagas/i)).toBeDefined();
    expect(screen.getByText(/10 vagas/i)).toBeDefined();
  });

  it('deve exibir as réguas rígidas de eliminação do edital (P1, P2 e P3)', () => {
    render(<EditalPage />);

    expect(screen.getByText(/Nota Mínima: P1 ≥ 18,00/i)).toBeDefined();
    expect(screen.getByText(/Nota Mínima: P2 ≥ 27,00/i)).toBeDefined();
    expect(screen.getByText(/Nota Mínima: NFPD ≥ 30,00/i)).toBeDefined();
    expect(screen.getByText(/NFPO mínima = P1 \+ P2 ≥ 54,00/i)).toBeDefined();
  });

  it('deve listar os eixos programáticos estruturados da matriz de 2026', () => {
    render(<EditalPage />);

    expect(screen.getByText(/Matriz Estruturada do Item 14/i)).toBeDefined();
    expect(screen.getByText(/Acessar Página Oficial no Cebraspe/i)).toBeDefined();
  });
});

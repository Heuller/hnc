// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';
import { useAuthStore } from '../store/useAuthStore';

describe('U6.2: Cabeçalho Enxuto e Navegação Descomplicada', () => {
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
  it('deve conter exatamente as 4 abas principais no desktop (Painel, Jornada, Treinos, Progresso)', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation', { name: /navegação principal/i });
    expect(nav).toBeTruthy();

    const buttonsInsideNav = Array.from(nav.querySelectorAll('button'));
    expect(buttonsInsideNav.length).toBe(4);

    expect(nav.textContent).toContain('Painel');
    expect(nav.textContent).toContain('Jornada');
    expect(nav.textContent).toContain('Treinos');
    expect(nav.textContent).toContain('Progresso');
    expect(nav.textContent).not.toContain('Radar');
  });

  it('deve exibir o botão de busca rápida global', () => {
    render(<Header />);

    const searchButtons = screen.getAllByRole('button', { name: /abrir busca global/i });
    expect(searchButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('deve agrupar ferramentas adicionais no UserMenuDropdown quando o usuário abre o menu', async () => {
    // Simula usuário logado para inspecionar menu suspenso
    useAuthStore.setState({
      user: { id: 'test-user', email: 'heuller@camara.leg.br' } as any,
    });

    render(<Header />);

    const menuTrigger = screen.getByRole('button', { name: /menu de usuário/i });
    expect(menuTrigger).toBeTruthy();

    // Abre o menu
    fireEvent.click(menuTrigger);

    // Ferramentas especializadas agrupadas no dropdown
    expect(screen.getByText('Radar Cebraspe')).toBeTruthy();
    expect(screen.getByText('Caderno de Erros')).toBeTruthy();
    expect(screen.getByText('Oficina Discursiva')).toBeTruthy();
    expect(screen.getByText('Folha de Véspera')).toBeTruthy();
    expect(screen.getByText('Edital Oficial 2026')).toBeTruthy();
    expect(screen.getByText('Glossário do Concurso')).toBeTruthy();
    expect(screen.getByText('Preferências de Leitura')).toBeTruthy();
    expect(screen.getByText('Exportar Progresso (MD)')).toBeTruthy();
  });
});

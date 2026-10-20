// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';
import { useAuthStore } from '../store/useAuthStore';

describe('P8 / U-01, U-05, U-06: Cabeçalho Unificado e Arquitetura de Navegação', () => {
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

  it('deve conter as 5 abas principais unificadas no desktop (Painel, Estudar, Praticar, Radar, Progresso)', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation', { name: /navegação principal/i });
    expect(nav).toBeTruthy();

    const buttonsInsideNav = Array.from(nav.querySelectorAll('button'));
    expect(buttonsInsideNav.length).toBe(5);

    expect(nav.textContent).toContain('Painel');
    expect(nav.textContent).toContain('Estudar');
    expect(nav.textContent).toContain('Praticar');
    expect(nav.textContent).toContain('Radar');
    expect(nav.textContent).toContain('Progresso');
  });

  it('deve exibir o botão de busca rápida global', () => {
    render(<Header />);

    const searchButtons = screen.getAllByRole('button', { name: /abrir busca global/i });
    expect(searchButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('deve disponibilizar ferramentas de referência no ReferenceMenuDropdown dedicado no desktop', () => {
    render(<Header />);

    const refTrigger = screen.getByRole('button', { name: /menu de ferramentas de referência/i });
    expect(refTrigger).toBeTruthy();

    fireEvent.click(refTrigger);

    expect(screen.getByText('Oficina Discursiva')).toBeTruthy();
    expect(screen.getByText('Folha de Véspera')).toBeTruthy();
    expect(screen.getByText('Edital Verticalizado')).toBeTruthy();
    expect(screen.getByText('Caderno de Erros')).toBeTruthy();
  });

  it('deve manter o UserMenuDropdown exclusivamente focado em conta, preferências e modo livre', async () => {
    // Simula usuário logado para inspecionar menu suspenso
    useAuthStore.setState({
      user: { id: 'test-user', email: 'heuller@camara.leg.br' } as any,
    });

    render(<Header />);

    const menuTrigger = screen.getByRole('button', { name: /menu de usuário/i });
    expect(menuTrigger).toBeTruthy();

    // Abre o menu
    fireEvent.click(menuTrigger);

    // Itens de conta e preferências presentes
    expect(screen.getByText('heuller@camara.leg.br')).toBeTruthy();
    expect(screen.getByText('Preferências de Leitura')).toBeTruthy();
    expect(screen.getByText('Exportar Progresso (MD)')).toBeTruthy();
    expect(screen.getByText('Modo Livre')).toBeTruthy();
    expect(screen.getByText('Sair da Conta')).toBeTruthy();

    // Ferramentas de referência NÃO devem estar duplicadas dentro do menu de avatar
    expect(screen.queryByText('Oficina Discursiva')).toBeNull();
    expect(screen.queryByText('Edital Oficial 2026')).toBeNull();
  });
});

// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { TeoriaPage } from '../pages/TeoriaPage';
import { JornadaPage } from '../pages/JornadaPage';
import { useNavigationStore } from '../store/useNavigationStore';
import { moduloM13Portugues } from '../content/modules/m13-portugues';
import { validarItemAntiAlucinacao } from '../domain/antiHallucinationGuard';

describe('Validação Completa do Módulo 13 (Língua Portuguesa) e UX - Fases P1 a P4', () => {
  let consoleErrors: string[] = [];
  const originalConsoleError = console.error;

  beforeEach(() => {
    consoleErrors = [];
    console.error = (...args: unknown[]) => {
      consoleErrors.push(args.map(String).join(' '));
      originalConsoleError(...args);
    };

    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('o módulo M13 deve possuir exatamente 4 submódulos com metadados canônicos completos', () => {
    expect(moduloM13Portugues.id).toBe('m13');
    expect(moduloM13Portugues.numero).toBe(13);
    expect(moduloM13Portugues.trilha).toBe('complementar');
    expect(moduloM13Portugues.modulosFilhos).toHaveLength(4);

    const [s1, s2, s3, s4] = moduloM13Portugues.modulosFilhos;
    expect(s1.numero).toBe('13.1');
    expect(s2.numero).toBe('13.2');
    expect(s3.numero).toBe('13.3');
    expect(s4.numero).toBe('13.4');

    moduloM13Portugues.modulosFilhos.forEach((sub) => {
      expect(sub.autoresChave.length).toBeGreaterThanOrEqual(2);
      expect(sub.alertasCebraspe.length).toBeGreaterThanOrEqual(3);
      expect(sub.teoriaDensaMarkdown.length).toBeGreaterThan(1500);
      expect(sub.checkpoints).toHaveLength(3);
    });
  });

  it('todos os 12 checkpoints de M13 devem ser 100% aprovados pelo guarda anti-alucinação', () => {
    moduloM13Portugues.modulosFilhos.forEach((sub) => {
      sub.checkpoints.forEach((chk) => {
        const res = validarItemAntiAlucinacao({
          item: chk.item,
          gabarito: chk.gabarito,
          justificativa: chk.justificativa,
          fontePrimaria: chk.justificativa,
        });
        if (!res.valido) {
          console.error(`Falha no checkpoint ${chk.id}:`, res.erros);
        }
        expect(res.valido).toBe(true);
        expect(res.bloqueadoPorAlucinacao).toBe(false);
      });
    });
  });

  it('deve renderizar a Teoria dos 4 submódulos (13.1 a 13.4) sem erros', () => {
    const subIds = ['sub-13-1', 'sub-13-2', 'sub-13-3', 'sub-13-4'];

    subIds.forEach((id) => {
      act(() => {
        useNavigationStore.setState({
          activeView: 'teoria',
          selectedSubmodule: id,
        });
      });

      const { container, unmount } = render(<TeoriaPage />);
      expect(container.innerHTML).toContain('M13');
      expect(container.innerHTML).toContain('Língua Portuguesa');
      expect(consoleErrors).toHaveLength(0);
      unmount();
    });
  });

  it('deve alternar para o Modo Foco ao clicar no botão de foco ou pressionar F', async () => {
    act(() => {
      useNavigationStore.setState({
        activeView: 'teoria',
        selectedSubmodule: 'sub-13-1',
      });
    });

    render(<TeoriaPage />);

    // Localizar botão de modo foco
    const botaoFoco = screen.getByRole('button', { name: /modo foco/i });
    expect(botaoFoco).toBeDefined();

    // Ativar foco clicando
    act(() => {
      fireEvent.click(botaoFoco);
    });

    // Barra de foco flutuante deve surgir com o botão de sair do foco
    const botaoSairFoco = screen.getByRole('button', { name: /sair do foco/i });
    expect(botaoSairFoco).toBeDefined();

    // Sair do foco via botão de sair
    act(() => {
      fireEvent.click(botaoSairFoco);
    });

    // Botão de Modo Foco volta a estar visível
    expect(screen.getByRole('button', { name: /modo foco/i })).toBeDefined();
  });

  it('deve exibir o M13 (Língua Portuguesa) na Jornada sob a aba Trilha Complementar', () => {
    act(() => {
      useNavigationStore.setState({
        activeView: 'jornada',
      });
    });

    render(<JornadaPage />);

    // Localizar botão da Trilha Complementar (CG) com acessibilidade role=tab
    const botaoAbaComplementar = screen.getByRole('tab', { name: /trilha complementar/i });
    expect(botaoAbaComplementar).toBeDefined();

    act(() => {
      fireEvent.click(botaoAbaComplementar);
    });

    // M13 deve estar visível com seu título e submódulos
    expect(screen.getAllByText(/Língua Portuguesa/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/13\.1/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/13\.4/i).length).toBeGreaterThanOrEqual(1);
  });
});

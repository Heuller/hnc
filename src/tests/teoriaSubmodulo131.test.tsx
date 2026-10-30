// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TeoriaPage } from '../pages/TeoriaPage';
import { useNavigationStore } from '../store/useNavigationStore';
import { submodulo131 } from '../content/modules/m13-portugues/sub-13-1';
import { validarItemAntiAlucinacao } from '../domain/antiHallucinationGuard';

describe('Validação do Protótipo do Submódulo 13.1 (Língua Portuguesa) - Fase P1', () => {
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

    useNavigationStore.setState({
      activeView: 'teoria',
      selectedSubmodule: 'sub-13-1',
    });
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('deve possuir conteúdo e metadados canônicos completos do Submódulo 13.1', () => {
    expect(submodulo131.numero).toBe('13.1');
    expect(submodulo131.titulo).toContain('Mecânica da Interpretação, Coesão e Relações Semânticas');
    expect(submodulo131.autoresChave.length).toBeGreaterThanOrEqual(1);
    expect(submodulo131.alertasCebraspe.length).toBeGreaterThanOrEqual(3);
    expect(submodulo131.teoriaDensaMarkdown.length).toBeGreaterThan(1500);
  });

  it('deve verificar formato e referência declarada dos checkpoints, sem certificar verdade por regex', () => {
    submodulo131.checkpoints.forEach((chk) => {
      const res = validarItemAntiAlucinacao({
        item: chk.item,
        gabarito: chk.gabarito,
        justificativa: chk.justificativa,
        fontePrimaria: chk.fonte,
      });
      expect(res.valido).toBe(true);
      expect(res.bloqueadoPorAlucinacao).toBe(false);
    });
  });

  it('deve renderizar a tela de Teoria do Submódulo 13.1 sem quebras nem erros de console', () => {
    const { container } = render(<TeoriaPage />);

    expect(container.innerHTML).toContain('13.1');
    expect(container.innerHTML).toContain('Mecânica da Interpretação');
    expect(consoleErrors).toHaveLength(0);
  });

  it('exibe referências, alertas revisados e os blocos de leitura', () => {
    render(<TeoriaPage />);
    expect(screen.getAllByText(/Manual de Redação da Presidência da República/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('navigation', {name: 'Blocos desta aula'})).toBeDefined();
    for (const alerta of submodulo131.alertasCebraspe) {
      expect(screen.getAllByText(alerta).length).toBeGreaterThan(0);
    }
  });
});

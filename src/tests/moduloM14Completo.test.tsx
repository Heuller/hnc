// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { TeoriaPage } from '../pages/TeoriaPage';
import { JornadaPage } from '../pages/JornadaPage';
import { useNavigationStore } from '../store/useNavigationStore';
import { moduloM14TecnologiaDados } from '../content/modules/m14-tecnologia-dados';
import { validarItemAntiAlucinacao } from '../domain/antiHallucinationGuard';

describe('Validação Completa do Módulo 14 (Tecnologia da Informação e Dados) e UX', () => {
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

  it('o módulo M14 deve possuir exatamente 4 submódulos com metadados canônicos completos', () => {
    expect(moduloM14TecnologiaDados.id).toBe('m14');
    expect(moduloM14TecnologiaDados.numero).toBe(14);
    expect(moduloM14TecnologiaDados.trilha).toBe('complementar');
    expect(moduloM14TecnologiaDados.modulosFilhos).toHaveLength(4);

    const [s1, s2, s3, s4] = moduloM14TecnologiaDados.modulosFilhos;
    expect(s1.numero).toBe('14.1');
    expect(s2.numero).toBe('14.2');
    expect(s3.numero).toBe('14.3');
    expect(s4.numero).toBe('14.4');

    moduloM14TecnologiaDados.modulosFilhos.forEach((sub) => {
      expect(sub.autoresChave.length).toBeGreaterThanOrEqual(2);
      expect(sub.alertasCebraspe.length).toBeGreaterThanOrEqual(3);
      expect(sub.teoriaDensaMarkdown.length).toBeGreaterThan(1500);
      expect(sub.checkpoints).toHaveLength(3);
    });
  });

  it('todos os checkpoints de M14 devem ser 100% aprovados pelo guarda anti-alucinação', () => {
    moduloM14TecnologiaDados.modulosFilhos.forEach((sub) => {
      sub.checkpoints.forEach((chk) => {
        const res = validarItemAntiAlucinacao({
          item: chk.item,
          gabarito: chk.gabarito,
          justificativa: chk.justificativa,
          fontePrimaria: chk.justificativa,
        });
        expect(res.valido).toBe(true);
        expect(res.erros).toHaveLength(0);
      });
    });
  });

  it('a JornadaPage deve renderizar o Módulo M14 na Trilha Complementar de Conhecimentos Básicos', () => {
    act(() => {
      useNavigationStore.setState({
        activeView: 'jornada',
      });
    });

    render(<JornadaPage />);

    // Clicar na aba Trilha Complementar
    const botaoAbaComplementar = screen.getByRole('tab', { name: /trilha complementar/i });
    expect(botaoAbaComplementar).toBeDefined();

    act(() => {
      fireEvent.click(botaoAbaComplementar);
    });

    // Deve exibir o card do Módulo M14
    expect(screen.getAllByText(/Tecnologia da Informação e Dados/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Módulo 14/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/14\.1/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/14\.4/i).length).toBeGreaterThanOrEqual(1);
  });

  it('a TeoriaPage deve renderizar a teoria densa do submódulo 14.1 e permitir navegação sem erros de console', () => {
    act(() => {
      useNavigationStore.setState({
        activeView: 'teoria',
        selectedSubmodule: 'sub-14-1',
      });
    });

    const { container } = render(<TeoriaPage />);

    expect(container.innerHTML).toContain('M14');
    expect(container.innerHTML).toContain('MSOffice 365');
    expect(consoleErrors).toHaveLength(0);
  });
});

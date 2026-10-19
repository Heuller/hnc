/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ALL_COURSE_MODULES } from '../content/registry';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { TeoriaPage } from '../pages/TeoriaPage';
import { ModuloFilhoSchema } from '../domain/schemas/modulo.schema';
import { UserProgressSchema } from '../domain/schemas/progress.schema';

describe('Fase 4: Modelo Teórico Dual, Metadados e Vida Real (W5)', () => {
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

    class MockIntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  beforeEach(() => {
    useProgressStore.getState().limparTodoProgresso();
    useNavigationStore.setState({ selectedSubmodule: '1.1' });
  });

  it('deve validar no schema a aceitação de teoriaDidaticaMarkdown e preferenciaModoTeoria', () => {
    const progressoDefault = UserProgressSchema.parse({
      versao: 3,
      modulosLidosIds: [],
      constancia: {
        ultimoAcessoData: '2026-10-19',
        diasConsecutivos: 1,
        historicoUltimos7Dias: ['2026-10-19'],
      },
    });
    expect(progressoDefault.preferenciaModoTeoria).toBeDefined();
    expect(progressoDefault.preferenciaModoTeoria).toEqual({});

    const sub11 = ALL_COURSE_MODULES[0].modulosFilhos[0];
    const parsedSub = ModuloFilhoSchema.safeParse(sub11);
    expect(parsedSub.success).toBe(true);
  });

  it('deve gerenciar a alternância e persistência de modo teórico no useProgressStore', () => {
    const store = useProgressStore.getState();
    expect(store.obterModoTeoria('sub-1-1')).toBe('canonica');
    expect(store.obterModoTeoria('m1-fundamentos')).toBe('canonica');

    store.setModoTeoria('sub-1-1', 'didatica');
    expect(useProgressStore.getState().obterModoTeoria('sub-1-1')).toBe('didatica');
    expect(useProgressStore.getState().preferenciaModoTeoria?.['sub-1-1']).toBe('didatica');

    store.setModoTeoria('sub-1-1', 'canonica');
    expect(useProgressStore.getState().obterModoTeoria('sub-1-1')).toBe('canonica');
  });

  it('deve garantir que 100% dos 75 submódulos do curso possuem antesDeLer preenchido com termos válidos', () => {
    const allSubs = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);
    expect(allSubs.length).toBe(75);

    for (const sub of allSubs) {
      expect(sub.antesDeLer, `Submódulo ${sub.numero} (${sub.id}) deve ter antesDeLer`).toBeDefined();
      expect(
        sub.antesDeLer?.length,
        `Submódulo ${sub.numero} (${sub.id}) deve ter entre 3 e 5 termos no antesDeLer`
      ).toBeGreaterThanOrEqual(3);

      for (const t of sub.antesDeLer || []) {
        expect(t.termo.trim().length, `Termo em ${sub.numero} não pode ser vazio`).toBeGreaterThan(1);
        expect(t.definicao.trim().length, `Definição em ${sub.numero} deve ter conteúdo substancial`).toBeGreaterThan(5);
        expect(
          t.exemploBiblioteca.trim().length,
          `Exemplo prático de biblioteca em ${sub.numero} deve ter conteúdo substancial`
        ).toBeGreaterThan(5);
      }
    }
  });

  it('deve recalcular tempoEstimadoMinutos de forma dinâmica e coerente com a extensão da teoria', () => {
    const allSubs = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);

    for (const sub of allSubs) {
      expect(
        sub.tempoEstimadoMinutos,
        `tempoEstimadoMinutos em ${sub.numero} deve ser um número positivo >= 5 min`
      ).toBeGreaterThanOrEqual(5);
      expect(
        sub.tempoEstimadoMinutos,
        `tempoEstimadoMinutos em ${sub.numero} não deve ser excessivo`
      ).toBeLessThanOrEqual(45);
    }
  });

  it('deve conter o piloto da Teoria Didática (teoriaDidaticaMarkdown) nos submódulos estratégicos (M1, M2, M7, M10)', () => {
    const allSubs = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);
    const alvosPiloto = ['1.1', '1.2', '2.1', '7.1', '10.1'];

    for (const num of alvosPiloto) {
      const sub = allSubs.find((s) => s.numero === num);
      expect(sub, `Submódulo piloto ${num} deve existir`).toBeDefined();
      expect(
        sub?.teoriaDidaticaMarkdown,
        `Submódulo ${num} deve conter teoriaDidaticaMarkdown preenchido`
      ).toBeDefined();
      expect(
        sub?.teoriaDidaticaMarkdown?.length,
        `Submódulo ${num} deve conter conteúdo didático substancial`
      ).toBeGreaterThan(500);

      // Valida estrutura didática obrigatória
      const content = sub?.teoriaDidaticaMarkdown || '';
      expect(content).toContain('Visão Direta em 3 Minutos');
      expect(content).toContain('Vida Real na Câmara dos Deputados');
      expect(content).toContain('Como o Cebraspe Cobra na Prova');
      expect(content).toContain('Micro-Pausa Ativa');
    }
  });

  it('deve renderizar o seletor dual na TeoriaPage e permitir alternar entre Teoria Canônica e Modo Prático', () => {
    useNavigationStore.setState({ selectedSubmodule: '1.1' });
    render(<TeoriaPage />);

    // Verifica presença dos botões do seletor dual
    const btnCanonica = screen.getByTestId('btn-modo-canonica');
    const btnDidatica = screen.getByTestId('btn-modo-didatica');
    expect(btnCanonica).toBeDefined();
    expect(btnDidatica).toBeDefined();

    // Modo padrão é Canônica
    expect(btnCanonica.getAttribute('aria-pressed')).toBe('true');
    expect(btnDidatica.getAttribute('aria-pressed')).toBe('false');
    expect(screen.getByText('Fundamentação Teórica Canônica')).toBeDefined();

    // Alterna para Modo Prático & Vida Real
    fireEvent.click(btnDidatica);
    expect(btnDidatica.getAttribute('aria-pressed')).toBe('true');
    expect(btnCanonica.getAttribute('aria-pressed')).toBe('false');
    expect(screen.getByText('Teoria Didática & Aplicação Prática')).toBeDefined();
    expect(screen.getByText(/Visão Direta em 3 Minutos/i)).toBeDefined();

    // Retorna para Teoria Canônica
    fireEvent.click(btnCanonica);
    expect(btnCanonica.getAttribute('aria-pressed')).toBe('true');
    expect(btnDidatica.getAttribute('aria-pressed')).toBe('false');
    expect(screen.getByText('Fundamentação Teórica Canônica')).toBeDefined();
  });
});

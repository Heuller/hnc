// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { TeoriaPage } from '../pages/TeoriaPage';
import { CALLOUT_CONFIG, normalizarAlertasGithub } from '../utils/markdownProcessors';

describe('U6.3 & U6.4: Tela de Leitura, Índice Lateral e Mnemônicos Não-Flutuantes', () => {
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

    // Mock IntersectionObserver
    class MockIntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  it('deve padronizar os 5 callouts com títulos em português e sem comandos crus', () => {
    expect(CALLOUT_CONFIG.note.titulo).toBe('Nota');
    expect(CALLOUT_CONFIG.tip.titulo).toBe('Dica');
    expect(CALLOUT_CONFIG.important.titulo).toBe('Importante');
    expect(CALLOUT_CONFIG.warning.titulo).toBe('Atenção');
    expect(CALLOUT_CONFIG.caution.titulo).toBe('Casca de banana');

    const textoComAlerta = '> [!CAUTION]\n> Cuidado com esta pegadinha clássica da banca';
    const normalizado = normalizarAlertasGithub(textoComAlerta);
    expect(normalizado).toContain('[[CALLOUT:caution]]');
    expect(normalizado).not.toContain('[!CAUTION]');
  });

  it('deve renderizar a TeoriaPage contendo a coluna lateral com abas Índice e Mnemônicos', () => {
    render(<TeoriaPage />);

    // Verifica que a aside com aria-label correspondente está no DOM
    const aside = screen.getByLabelText('Índice da Leitura e Resumo');
    expect(aside).toBeDefined();

    // Verifica botões de alternância de aba no aside
    const botaoIndice = within(aside).getByRole('button', { name: /^Índice$/i });
    const botaoMnemonicos = within(aside).getByRole('button', { name: /^Mnemônicos$/i });
    expect(botaoIndice).toBeDefined();
    expect(botaoMnemonicos).toBeDefined();

    // Alterna para a aba de mnemônicos
    fireEvent.click(botaoMnemonicos);
    expect(within(aside).getByRole('button', { name: /Cronologia/i })).toBeDefined();
    expect(within(aside).getByRole('button', { name: /Autores/i })).toBeDefined();
    expect(within(aside).getByRole('button', { name: /Pegadinhas/i })).toBeDefined();
  });

  it('não deve possuir nenhum botão flutuante fixo (FAB) sobreposto ao texto', () => {
    const { container } = render(<TeoriaPage />);

    // Busca botões com posicionamento fixo
    const botoesFixos = container.querySelectorAll('button.fixed, .fab, button[class*="fixed bottom"]');
    expect(botoesFixos.length).toBe(0);
  });

  it('U6.4: deve fornecer acesso a Mnemônicos na barra móvel contextual e em seção sem FAB', () => {
    render(<TeoriaPage />);

    // Na barra móvel contextual, o botão de mnemônicos abre a gaveta inferior
    const triggerMobile = screen.getByRole('button', { name: /Abrir Resumo e Mnemônicos/i });
    expect(triggerMobile).toBeDefined();

    // Na página de teoria, a seção estruturada de mnemônicos existe no fluxo do documento
    const secaoMnemonicos = document.getElementById('sec-mnemonicos');
    expect(secaoMnemonicos).toBeDefined();
  });
});

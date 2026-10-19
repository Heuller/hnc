// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useNavigationStore } from '../store/useNavigationStore';
import { Sidebar } from '../components/layout/Sidebar';
import { UserMenuDropdown } from '../components/layout/UserMenuDropdown';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';

describe('W2: Remoção do Módulo de Glossário e Dicionário', () => {
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
    window.scrollTo = () => {};
  });

  it('Redireciona navegação da rota legada "glossario" para "painel"', () => {
    const store = useNavigationStore.getState();
    // Tenta navegar para a rota legada 'glossario'
    // @ts-expect-error teste de rota legada
    store.setActiveView('glossario');

    // Deve redirecionar automaticamente para 'painel'
    expect(useNavigationStore.getState().activeView).toBe('painel');
  });

  it('Sidebar não exibe nenhum botão ou link para o Glossário', () => {
    render(<Sidebar />);
    expect(screen.queryByText(/glossário/i)).toBeNull();
    expect(screen.queryByText(/dicionário/i)).toBeNull();
  });

  it('UserMenuDropdown não exibe opção de menu para o Glossário', () => {
    render(<UserMenuDropdown />);
    expect(screen.queryByText(/glossário/i)).toBeNull();
    expect(screen.queryByText(/dicionário/i)).toBeNull();
  });

  it('ConteudoMarkdown renderiza markdown limpo sem tags ou tooltips de glossário', () => {
    const markdown = 'Este é um texto sobre catalogação e RDF sem popups de glossário.';
    render(<ConteudoMarkdown content={markdown} />);
    expect(screen.getByText(/Este é um texto sobre catalogação e RDF/i)).toBeDefined();
    expect(document.querySelector('.glossario-destaque')).toBeNull();
  });
});

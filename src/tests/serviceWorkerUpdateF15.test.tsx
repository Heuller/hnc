/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { AvisoNovaVersaoSW } from '../components/common/AvisoNovaVersaoSW';
import { useProgressStore } from '../store/useProgressStore';

describe('F-15: Gerenciamento seguro de atualizações do Service Worker', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    useProgressStore.getState().limparTodoProgresso();
    // Mock window.location.reload
    delete (window as any).location;
    window.location = { ...originalLocation, reload: vi.fn() } as any;
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  it('não exibe o aviso quando não há evento de atualização do SW', () => {
    render(<AvisoNovaVersaoSW />);
    expect(screen.queryByTestId('aviso-nova-versao-sw')).toBeNull();
  });

  it('exibe o aviso e permite atualizar quando NÃO há simulado em andamento', () => {
    render(<AvisoNovaVersaoSW />);

    act(() => {
      window.dispatchEvent(new CustomEvent('hnc-sw-updated'));
    });

    const banner = screen.getByTestId('aviso-nova-versao-sw');
    expect(banner).toBeDefined();

    const btnAtualizar = screen.getByTestId('btn-atualizar-sw');
    expect(btnAtualizar.getAttribute('disabled')).toBeNull();

    fireEvent.click(btnAtualizar);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });

  it('BLOQUEIA a atualização e desabilita o botão quando há simulado em andamento', () => {
    // Simula sessão de simulado ativa
    useProgressStore.setState({
      sessaoAtivaSimulado: {
        currentIndex: 5,
        emAndamento: true,
        respostas: { 'fund-q-1': { questionId: 'fund-q-1', resposta: 'C', timestamp: Date.now() } },
      },
    });

    render(<AvisoNovaVersaoSW />);

    act(() => {
      window.dispatchEvent(new CustomEvent('hnc-sw-updated'));
    });

    const banner = screen.getByTestId('aviso-nova-versao-sw');
    expect(banner).toBeDefined();
    expect(screen.getByText(/Atualização pausada para não interromper seu simulado/i)).toBeDefined();

    const btnAtualizar = screen.getByTestId('btn-atualizar-sw');
    expect(btnAtualizar.hasAttribute('disabled')).toBe(true);

    fireEvent.click(btnAtualizar);
    // NÃO deve recarregar durante o simulado
    expect(window.location.reload).not.toHaveBeenCalled();
  });
});

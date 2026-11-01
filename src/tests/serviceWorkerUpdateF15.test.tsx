/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AvisoNovaVersaoSW } from '../components/common/AvisoNovaVersaoSW';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';

describe('F-15: Gerenciamento seguro de atualizações do Service Worker', () => {
  const reloadMock = vi.fn();

  beforeEach(() => {
    useProgressStore.getState().limparTodoProgresso();
    useNavigationStore.setState({ activeView: 'painel' });
    reloadMock.mockClear();
    Object.defineProperty(window, 'location', {
      writable: true,
      configurable: true,
      value: { reload: reloadMock },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
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

  it('BLOQUEIA a atualização e desabilita o botão quando há simulado em andamento na tela do simulado', () => {
    // Simula sessão de simulado ativa, com a pessoa dentro do simulado
    useNavigationStore.setState({ activeView: 'simulado' });
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

  it('PERMITE atualizar fora da tela do simulado, mesmo com sessão em andamento (respostas já salvas)', () => {
    useNavigationStore.setState({ activeView: 'radar' });
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

    expect(screen.queryByText(/Atualização pausada/i)).toBeNull();
    const btnAtualizar = screen.getByTestId('btn-atualizar-sw');
    expect(btnAtualizar.hasAttribute('disabled')).toBe(false);

    fireEvent.click(btnAtualizar);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});

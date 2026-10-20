/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { AuthGate } from '../components/auth/AuthGate';
import { useAuthStore } from '../store/useAuthStore';

describe('V-03, V-04, V-06: Neutralidade e Proteção de Entrada (AuthGate)', () => {
  beforeEach(() => {
    localStorage.clear();
    useAuthStore.setState({ user: null, session: null, loading: false });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('V-03: Não deve exibir menções a concurso ou banca na tela de entrada', () => {
    render(<AuthGate />);

    // Textos proibidos pelas regras de neutralidade (DIRETRIZES §9.3)
    expect(screen.queryByText(/Câmara dos Deputados/i)).toBeNull();
    expect(screen.queryByText(/Bibliotecário/i)).toBeNull();
    expect(screen.queryByText(/Domínio Cebraspe/i)).toBeNull();
    expect(screen.queryByText(/fator de correção Cebraspe/i)).toBeNull();

    // Deve exibir identificação neutra HNC e título Acesso
    expect(screen.getAllByText('HNC').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'Acesso' })).not.toBeNull();
  });

  it('V-04: Campo de usuário deve ter placeholder genérico sem citar contas', () => {
    render(<AuthGate />);
    const inputUsuario = screen.getByPlaceholderText('Usuário ou e-mail');
    expect(inputUsuario).not.toBeNull();
    expect(screen.queryByPlaceholderText(/teste ou seu-email/i)).toBeNull();
  });

  it('V-06: Em produção sem Supabase configurado, deve recusar login e exibir "Serviço indisponível"', async () => {
    // Simula ambiente de produção sem flag de modo local
    const originalProd = import.meta.env.PROD;
    const originalLocalMode = import.meta.env.VITE_ALLOW_LOCAL_MODE;

    (import.meta.env as any).PROD = true;
    (import.meta.env as any).DEV = false;
    (import.meta.env as any).VITE_ALLOW_LOCAL_MODE = 'false';

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<AuthGate />);

    const inputUser = screen.getByPlaceholderText('Usuário ou e-mail');
    const inputPass = screen.getByPlaceholderText('Sua senha');
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });

    fireEvent.change(inputUser, { target: { value: 'usuario' } });
    fireEvent.change(inputPass, { target: { value: 'senha123' } });
    fireEvent.click(btnEntrar);

    await waitFor(() => {
      expect(screen.getByText(/Serviço indisponível/i)).not.toBeNull();
    });

    // Usuário não deve ser autenticado
    expect(useAuthStore.getState().user).toBeNull();

    // Restaura ambiente
    (import.meta.env as any).PROD = originalProd;
    (import.meta.env as any).DEV = !originalProd;
    (import.meta.env as any).VITE_ALLOW_LOCAL_MODE = originalLocalMode;
    consoleSpy.mockRestore();
  });

  it('V-06: Em DEV ou com VITE_ALLOW_LOCAL_MODE=true, gera UUID randômico e não fixo no modo local', async () => {
    (import.meta.env as any).DEV = true;
    (import.meta.env as any).PROD = false;

    render(<AuthGate />);

    const inputUser = screen.getByPlaceholderText('Usuário ou e-mail');
    const inputPass = screen.getByPlaceholderText('Sua senha');
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });

    fireEvent.change(inputUser, { target: { value: 'richard' } });
    fireEvent.change(inputPass, { target: { value: 'qualquer' } });
    fireEvent.click(btnEntrar);

    await waitFor(() => {
      const user = useAuthStore.getState().user;
      expect(user).not.toBeNull();
      // Não pode ser o antigo ID estático
      expect(user?.id).not.toBe('00000000-0000-0000-0000-000000000001');
      expect(user?.id.length).toBeGreaterThan(10);
    });
  });
});

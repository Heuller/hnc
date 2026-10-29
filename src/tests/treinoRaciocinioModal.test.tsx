// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TreinoRaciocinioModal } from '../components/estudoReverso/TreinoRaciocinioModal';
import { useProgressStore } from '../store/useProgressStore';
import { useAuthStore } from '../store/useAuthStore';

describe('Estudo reverso: tentativa antes da correção', () => {
  beforeEach(() => {
    localStorage.clear();
    useAuthStore.setState({ user: null, session: null, loading: false });
    useProgressStore.setState({ itemAttempts: [], checkpointsRespondidos: {} });
  });
  afterEach(cleanup);

  it('não revela resposta nem raciocínio antes da tentativa; registra confiança prévia uma vez', async () => {
    render(<TreinoRaciocinioModal onClose={vi.fn()} />);
    expect(screen.queryByText('Como chegar ao julgamento')).toBeNull();
    expect(screen.queryByText(/Por que o item está/)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Certo' }));
    fireEvent.click(screen.getByRole('button', { name: 'Estou em dúvida' }));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'A decisão deve considerar o usuário.' } });
    const conferir = screen.getByRole('button', { name: 'Conferir raciocínio' });
    fireEvent.click(conferir); fireEvent.click(conferir);
    await waitFor(() => expect(screen.getByText('Como chegar ao julgamento')).toBeTruthy());
    expect(useProgressStore.getState().itemAttempts).toHaveLength(1);
    expect(useProgressStore.getState().itemAttempts[0].certeza).toBe('media');
    expect(screen.getByText('A decisão deve considerar o usuário.')).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Tenho certeza' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Aplicar a regra em outro cenário' }));
    fireEvent.click(screen.getByRole('button', { name: 'Errado' }));
    expect(screen.getByText(/Ela não demonstra retenção em outro dia/)).toBeTruthy();
    expect(useProgressStore.getState().itemAttempts).toHaveLength(1);
  });

  it('aceita não saber sem fabricar confiança e limpa a explicação no próximo item', async () => {
    render(<TreinoRaciocinioModal onClose={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Não sei' }));
    fireEvent.click(screen.getByRole('button', { name: 'Conferir raciocínio' }));
    await waitFor(() => expect(screen.getByText(/Você marcou “não sei”/)).toBeTruthy());
    const [attempt] = useProgressStore.getState().itemAttempts;
    expect(attempt.resposta).toBe('BRANCO'); expect(attempt.certeza).toBeUndefined(); expect(attempt.correto).toBe(false);
    fireEvent.click(screen.getByRole('button', { name: 'Próxima questão' }));
    expect(screen.queryByText('Como chegar ao julgamento')).toBeNull();
    expect((screen.getByRole('textbox') as HTMLTextAreaElement).value).toBe('');
  });

  it('exporta e restaura o histórico que sustenta as revisões e rejeita backup inválido', async () => {
    await useProgressStore.getState().adicionarItemAttempt({ itemId: 'cat-q-1', submoduloId: '2.1', moduloId: 'M2', contexto: 'treino', resposta: 'C', gabarito: 'C', certeza: 'media' });
    const backup = useProgressStore.getState().exportarProgressoJson();
    useProgressStore.setState({ itemAttempts: [] });
    expect(useProgressStore.getState().importarProgressoJson(backup).success).toBe(true);
    expect(useProgressStore.getState().itemAttempts[0].certeza).toBe('media');
    const invalido = JSON.stringify({ ...JSON.parse(backup), itemAttempts: [{ item_id: 'sem-dados' }] });
    expect(useProgressStore.getState().importarProgressoJson(invalido).success).toBe(false);
    expect(useProgressStore.getState().itemAttempts).toHaveLength(1);
  });
});

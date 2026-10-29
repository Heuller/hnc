import type { User } from '@supabase/supabase-js';
import { useAuthStore } from '../store/useAuthStore';
import { useSessionPreference } from '../hooks/useSessionPreference';
import { AnswerSheet } from '../components/simulado/AnswerSheet';
// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { GlobalSearchModal } from '../components/common/GlobalSearchModal';
import { AccessibleModal } from '../components/common/AccessibleModal';
import { useNavigationStore } from '../store/useNavigationStore';
import { getSimuladoById } from '../content/simuladosRegistry';
import { EDITAL_CAMARA_2026 } from '../domain/edital/matrizEdital2026';
import { useSyncStatusStore } from '../store/useSyncStatusStore';
import { useProgressStore } from '../store/useProgressStore';
import { ProjecaoTemporalCard } from '../components/review/ProjecaoTemporalCard';
import { useConceptStore } from '../store/useConceptStore';

beforeEach(() => { localStorage.clear(); sessionStorage.clear(); useNavigationStore.setState({ activeView: 'painel', targetSimuladoId: undefined, targetQuestionId: undefined, targetEditalEixoId: undefined }); });
afterEach(cleanup);

describe('Navegação contextual e diálogos da auditoria UX', () => {
  it('fecha com Escape, isola o fundo e devolve o foco ao botão que abriu', async () => {
    function Example() { const [open, setOpen] = useState(false); return <><button onClick={() => setOpen(true)}>Abrir</button>{open && <AccessibleModal title="Exemplo" open onClose={() => setOpen(false)}><input aria-label="Campo" /><button>Última ação</button></AccessibleModal>}</>; }
    render(<Example />);
    const opener = screen.getByRole('button', { name: 'Abrir' });
    opener.focus(); fireEvent.click(opener);
    expect(screen.getByRole('dialog', { name: 'Exemplo' })).toBeTruthy();
    expect(opener.closest('[aria-hidden="true"]')).toBeTruthy();
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(document.activeElement).toBe(opener));
  });

  it('resultado de Edital tem destino e a busca não vaza o gabarito', async () => {
    render(<GlobalSearchModal isOpen onClose={vi.fn()} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Edital nº 1/2026 — Câmara' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect(useNavigationStore.getState().activeView).toBe('edital');
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'catalogação' } });
    expect(screen.queryByText(/Gabarito:/)).toBeNull();
  });

  it('um resultado de questão preserva caderno e ID do item', () => {
    render(<GlobalSearchModal isOpen onClose={vi.fn()} />);
    // Busca pelo próprio título de uma questão que não pertence ao M1.
    const q = getSimuladoById('m2-catalogacao').questoes[0];
    fireEvent.change(screen.getByRole('textbox'), { target: { value: q.item } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    const nav = useNavigationStore.getState();
    expect(nav.activeView).toBe('simulado'); expect(nav.targetSimuladoId).toBe('m2-catalogacao'); expect(nav.targetQuestionId).toBe(q.id);
    expect(window.location.hash).toContain(`item=${q.id}`);
  });

  it('o treino de eixo usa sessão própria, somente itens do eixo e pontuação do acervo real', () => {
    const eixo = EDITAL_CAMARA_2026.eixos[0];
    const manifest = getSimuladoById(`treino-${eixo.id}`);
    const subIds = new Set(eixo.topicos.flatMap(t => t.submodulosRef));
    expect(manifest.questoes.length).toBeGreaterThan(0);
    expect(manifest.questoes.every(q => subIds.has(q.submoduloId))).toBe(true);
    expect(new Set(manifest.questoes.map(q => q.id)).size).toBe(manifest.questoes.length);
    useProgressStore.getState().limparTodoProgresso();
    useProgressStore.getState().iniciarOuRetomarSimulado(manifest.id);
    const q = manifest.questoes[0];
    useProgressStore.getState().salvarRespostaSimulado(manifest.id, q.id, q.gabarito, 'certeza', true);
    const result = useProgressStore.getState().finalizarSimulado(10, manifest.id);
    expect(result.certos).toBe(1); expect(result.emBranco).toBe(manifest.questoes.length - 1); expect(result.notaLiquida).toBe(1);
    expect(useProgressStore.getState().obterSessaoSimulado('m1-fundamentos').respostas).toEqual({});
  });
});

describe('Dados que a interface pode afirmar', () => {
  it('não apresenta retenção pessoal nem margem confortável sem revisões registradas', () => {
    useConceptStore.setState({ estados: {} }); render(<ProjecaoTemporalCard />);
    expect(screen.getByText('Sem dados')).toBeTruthy(); expect(screen.queryByText('83%')).toBeNull(); expect(screen.queryByText('Margem Confortável')).toBeNull();
  });
  it('não deixa resposta antiga de sincronização apagar pendências novas ou estado de outra conta', () => {
    const sync = useSyncStatusStore.getState();
    const old = sync.begin('aluno-a'); sync.queue('aluno-a'); sync.complete('aluno-a', old, true);
    expect(useSyncStatusStore.getState().status).toBe('pendente');
    const fresh = sync.begin('aluno-b'); sync.complete('aluno-a', old, true);
    expect(useSyncStatusStore.getState().userId).toBe('aluno-b'); expect(useSyncStatusStore.getState().status).toBe('enviando');
    sync.complete('aluno-b', fresh, false); expect(useSyncStatusStore.getState().status).toBe('erro');
    const retry = sync.begin('aluno-b'); sync.complete('aluno-b', retry, true);
    expect(useSyncStatusStore.getState().status).toBe('enviado'); expect(useSyncStatusStore.getState().lastSuccess).toBeTruthy();
  });
});

describe('Persistência e informação durante a prova', () => {
  it('preferências de navegação não são copiadas ao alternar de conta', () => {
    function Example() { const [value, setValue] = useSessionPreference<number>('teste', 0); return <button onClick={() => setValue(n => n + 1)}>Valor {value}</button>; }
    const user = (id: string) => ({ id, email: `${id}@example.invalid` } as User);
    useAuthStore.setState({ user: user('conta-a') }); render(<Example />);
    fireEvent.click(screen.getByRole('button', { name: 'Valor 0' })); expect(screen.getByRole('button', { name: 'Valor 1' })).toBeTruthy();
    act(() => useAuthStore.setState({ user: user('conta-b') })); expect(screen.getByRole('button', { name: 'Valor 0' })).toBeTruthy();
    act(() => useAuthStore.setState({ user: user('conta-a') })); expect(screen.getByRole('button', { name: 'Valor 1' })).toBeTruthy();
    act(() => useAuthStore.setState({ user: null }));
  });
  it('a folha em modo prova mostra marcação sem antecipar acerto, erro ou filtros de gabarito', () => {
    const q = getSimuladoById('m2-catalogacao').questoes[0];
    render(<AnswerSheet questions={[q]} respostas={{ [q.id]: { questionId: q.id, resposta: q.gabarito, acertou: true, timestamp: 1 } }} currentIndex={0} onSelectQuestion={vi.fn()} revelarResultados={false} />);
    expect(screen.getByRole('button', { name: 'Item 1 - Respondido' })).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Erros' })).toBeNull(); expect(screen.queryByRole('button', { name: 'Acertos' })).toBeNull();
    expect(screen.queryByText('Acerto (+1)')).toBeNull(); expect(screen.queryByText('Erro (-1)')).toBeNull();
  });
});

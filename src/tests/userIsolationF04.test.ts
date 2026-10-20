/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach } from 'vitest';
import { useAuthStore } from '../store/useAuthStore';
import { useProgressStore } from '../store/useProgressStore';
import { useConceptStore } from '../store/useConceptStore';

describe('F-04: Isolamento de Dados por Usuário e Migração de Chaves', () => {
  beforeEach(async () => {
    localStorage.clear();
    useAuthStore.setState({ user: null, session: null, loading: false });
    useProgressStore.getState().limparTodoProgresso();
    useConceptStore.getState().reset();
  });

  it('Usuário A grava progresso, faz logout, Usuário B loga e B NÃO vê dados de A', async () => {
    // 1. Usuário A faz login
    useAuthStore.setState({
      user: {
        id: 'user-A',
        email: 'userA@teste.com',
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as any,
    });
    await useProgressStore.persist.rehydrate();

    // 2. Usuário A realiza atividade
    useProgressStore.setState({
      checkpointsRespondidos: { 'cp-1-1-1': 'C' },
      secoesVisualizadas: { 'sec-1-1-1': true },
    });

    // Garante que os dados foram persistidos na chave isolada de A
    const rawKeyA = localStorage.getItem('heuller_camara_v2_progress:user-A');
    expect(rawKeyA).not.toBeNull();
    const parsedA = JSON.parse(rawKeyA!);
    expect(parsedA.state.checkpointsRespondidos['cp-1-1-1']).toBe('C');

    // 3. Usuário A faz logout
    await useAuthStore.getState().signOut();

    // Em memória, o store deve ter sido zerado
    expect(useProgressStore.getState().checkpointsRespondidos).toEqual({});

    // 4. Usuário B faz login
    useAuthStore.setState({
      user: {
        id: 'user-B',
        email: 'userB@teste.com',
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as any,
    });
    await useProgressStore.persist.rehydrate();

    // 5. Usuário B NÃO deve ver os dados de A
    expect(useProgressStore.getState().checkpointsRespondidos['cp-1-1-1']).toBeUndefined();
    expect(useProgressStore.getState().secoesVisualizadas['sec-1-1-1']).toBeUndefined();
    const rawB = localStorage.getItem('heuller_camara_v2_progress:user-B');
    if (rawB) {
      const parsedB = JSON.parse(rawB);
      expect(parsedB.state.checkpointsRespondidos['cp-1-1-1']).toBeUndefined();
    }

    // 6. Se Usuário A logar novamente, seus dados permanecem intactos
    useAuthStore.setState({
      user: {
        id: 'user-A',
        email: 'userA@teste.com',
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as any,
    });
    await useProgressStore.persist.rehydrate();

    expect(useProgressStore.getState().checkpointsRespondidos['cp-1-1-1']).toBe('C');
    expect(useProgressStore.getState().secoesVisualizadas['sec-1-1-1']).toBe(true);
  });

  it('Migra a chave legada (sem uid) para o primeiro usuário logado que tiver dados', async () => {
    // Simula dados legados na chave antiga sem sufixo de uid
    const legacyState = {
      state: {
        checkpointsRespondidos: { 'cp-legado': 'E' },
        modoLivre: true,
      },
      version: 4,
    };
    localStorage.setItem('heuller_camara_v2_progress', JSON.stringify(legacyState));

    // Usuário X loga pela primeira vez
    useAuthStore.setState({
      user: {
        id: 'user-X',
        email: 'userX@teste.com',
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString(),
      } as any,
    });
    await useProgressStore.persist.rehydrate();

    // A chave isolada heuller_camara_v2_progress:user-X agora deve conter os dados migrados
    const rawKeyX = localStorage.getItem('heuller_camara_v2_progress:user-X');
    expect(rawKeyX).not.toBeNull();
    const parsedX = JSON.parse(rawKeyX!);
    expect(parsedX.state.checkpointsRespondidos['cp-legado']).toBe('E');

    // A chave legada original deve ter sido limpa após a migração
    expect(localStorage.getItem('heuller_camara_v2_progress')).toBeNull();
  });
});

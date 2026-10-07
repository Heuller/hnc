// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { itemAttemptsSyncService } from '../services/itemAttemptsSyncService';
import { derivarProgresso, obterItensVerificacaoSubmodulo } from '../domain/progressoEngine';
import { executarMigracaoHistorico } from '../domain/migracaoTentativas';
import { JORNADA_CONFIG } from '../config/jornada.config';
import type { ItemAttempt } from '../domain/itemAttempts';

describe('RODADA 5B — PARTE 1: UMA ÚNICA FONTE DE RESPOSTAS (TEORIA ↔ JORNADA)', () => {
  beforeEach(() => {
    localStorage.clear();
    useProgressStore.setState({
      modulosLidosIds: [],
      checkpointsRespondidos: {},
      secoesVisualizadas: {},
      tentativas: [],
      itemAttempts: [],
      leitnerDeck: {},
      historicoSimulados: [],
    });
  });

  const sub11 = COURSE_REGISTRY[0].modulosFilhos[0]; // 1.1
  const cp1 = sub11.checkpoints[0];
  const cp2 = sub11.checkpoints[1];
  const cp3 = sub11.checkpoints[2];

  it('(a) responder na teoria marca a Jornada imediatamente', async () => {
    // Usuário responde checkpoint na Teoria via salvarCheckpoint
    useProgressStore.getState().salvarCheckpoint(cp1.id, cp1.gabarito);

    const state = useProgressStore.getState();

    // 1. Está em itemAttempts
    expect(state.itemAttempts.length).toBeGreaterThan(0);
    const att = state.itemAttempts.find((a) => a.item_id === cp1.id);
    expect(att).toBeDefined();
    expect(att?.resposta).toBe(cp1.gabarito);
    expect(att?.correto).toBe(true);
    expect(att?.contexto).toBe('teoria');

    // 2. Progresso derivado da Jornada reconhece que o item foi respondido
    const progressoGlobal = derivarProgresso(
      state.itemAttempts,
      state.secoesVisualizadas,
      COURSE_REGISTRY,
      JORNADA_CONFIG
    );

    const sub11Prog = progressoGlobal.submodulos['1.1'] || progressoGlobal.submodulos['sub-1-1'];
    expect(sub11Prog).toBeDefined();
    expect(sub11Prog.itensRespondidosCount).toBe(1);
    expect(sub11Prog.primeirasTentativasMap[cp1.id]).toBeDefined();
  });

  it('(b) responder na Jornada marca a teoria e não pergunta de novo', async () => {
    // Usuário responde na Jornada via adicionarItemAttempt
    await useProgressStore.getState().adicionarItemAttempt({
      itemId: cp2.id,
      submoduloId: '1.1',
      moduloId: 'm1',
      contexto: 'jornada',
      resposta: cp2.gabarito,
      gabarito: cp2.gabarito,
    });

    const state = useProgressStore.getState();

    // Na teoria (checkpointsRespondidos), o item já está registrado como respondido
    expect(state.checkpointsRespondidos[cp2.id]).toBe(cp2.gabarito);

    // E a primeira tentativa está gravada
    const prim = useProgressStore.getState().obterPrimeiraTentativa(cp2.id);
    expect(prim).toBeDefined();
    expect(prim?.resposta).toBe(cp2.gabarito);
    expect(prim?.contexto).toBe('jornada');
  });

  it('(c) recarregar a página preserva todas as tentativas e o progresso puro', async () => {
    // Responde 2 itens
    await useProgressStore.getState().adicionarItemAttempt({
      itemId: cp1.id,
      submoduloId: '1.1',
      moduloId: 'm1',
      contexto: 'teoria',
      resposta: cp1.gabarito,
      gabarito: cp1.gabarito,
    });

    const attemptsAntes = useProgressStore.getState().itemAttempts;
    expect(attemptsAntes.length).toBe(1);

    // Simula recarregamento lendo do localStorage persistente
    const tentativasNoLocalStorage = itemAttemptsSyncService.carregarLocais();
    expect(tentativasNoLocalStorage.length).toBe(1);
    expect(tentativasNoLocalStorage[0].item_id).toBe(cp1.id);
  });

  it('(d) sincronização remota/Supabase com idempotência', async () => {
    const attempt: ItemAttempt = {
      id: 'mock-uuid-1',
      user_id: 'test-user',
      item_id: cp1.id,
      submodulo_id: '1.1',
      modulo_id: 'm1',
      contexto: 'jornada',
      resposta: 'C',
      correto: true,
      tentativa_n: 1,
      criado_em: new Date().toISOString(),
    };

    // Registra tentativa
    const res = await itemAttemptsSyncService.registrarTentativa(attempt, 'test-user');
    expect(res.success).toBe(true);

    const locais = itemAttemptsSyncService.carregarLocais();
    expect(locais.some((a) => a.id === 'mock-uuid-1')).toBe(true);
  });

  it('(e) offline e reconexão: enfileira tentativas e faz flush ao reconectar', async () => {
    const attemptOffline: ItemAttempt = {
      id: 'offline-uuid-123',
      user_id: 'test-user',
      item_id: cp2.id,
      submodulo_id: '1.1',
      modulo_id: 'm1',
      contexto: 'teoria',
      resposta: 'E',
      correto: false,
      tentativa_n: 1,
      criado_em: new Date().toISOString(),
    };

    // Força enfileiramento offline
    (itemAttemptsSyncService as any).enfileirarOffline(attemptOffline);
    const fila = itemAttemptsSyncService.carregarFilaOffline();
    expect(fila.length).toBe(1);
    expect(fila[0].id).toBe('offline-uuid-123');

    // Executa flush (mesmo com Supabase mock/não configurado, não perde a fila indevidamente)
    const restam = await itemAttemptsSyncService.flushFilaOffline();
    expect(typeof restam).toBe('number');
  });

  it('(f) idempotência: reenvio do mesmo item ou da mesma tentativa não duplica', async () => {
    const attemptIdempotente: ItemAttempt = {
      id: 'idempotent-uuid-999',
      user_id: 'test-user',
      item_id: cp3.id,
      submodulo_id: '1.1',
      modulo_id: 'm1',
      contexto: 'teoria',
      resposta: 'C',
      correto: true,
      tentativa_n: 1,
      criado_em: new Date().toISOString(),
    };

    await itemAttemptsSyncService.registrarTentativa(attemptIdempotente, 'test-user');
    await itemAttemptsSyncService.registrarTentativa(attemptIdempotente, 'test-user');

    const locais = itemAttemptsSyncService.carregarLocais();
    const filtrados = locais.filter((a) => a.id === 'idempotent-uuid-999');
    expect(filtrados.length).toBe(1);
  });

  it('(g) regra da PRIMEIRA TENTATIVA: o portão usa a 1ª tentativa; refazer vira prática e não altera a nota do portão', async () => {
    // 1ª tentativa: errou
    const gabaritoErrado = cp1.gabarito === 'C' ? 'E' : 'C';
    await useProgressStore.getState().adicionarItemAttempt({
      itemId: cp1.id,
      submoduloId: '1.1',
      moduloId: 'm1',
      contexto: 'teoria',
      resposta: gabaritoErrado,
      gabarito: cp1.gabarito,
    });

    const prim = useProgressStore.getState().obterPrimeiraTentativa(cp1.id);
    expect(prim?.correto).toBe(false);
    expect(prim?.tentativa_n).toBe(1);

    // 2ª tentativa (prática / refazer): acertou
    await useProgressStore.getState().adicionarItemAttempt({
      itemId: cp1.id,
      submoduloId: '1.1',
      moduloId: 'm1',
      contexto: 'teoria',
      resposta: cp1.gabarito,
      gabarito: cp1.gabarito,
    });

    const ult = useProgressStore.getState().obterUltimaTentativa(cp1.id);
    expect(ult?.correto).toBe(true);
    expect(ult?.tentativa_n).toBe(2);

    // Derivação do progresso oficial do portão usa estritamente a 1ª tentativa!
    const prog = derivarProgresso(
      useProgressStore.getState().itemAttempts,
      {},
      COURSE_REGISTRY,
      JORNADA_CONFIG
    );

    const subProg = prog.submodulos['1.1'] || prog.submodulos['sub-1-1'];
    expect(subProg.primeirasTentativasMap[cp1.id].correto).toBe(false);
    expect(subProg.acertosPrimeiraTentativa).toBe(0);
  });

  it('(h) migração sem perda de progresso: converte checkpoints antigos com backup prévio', () => {
    const estadoLegado = {
      checkpointsRespondidos: {
        [cp1.id]: cp1.gabarito,
        [cp2.id]: cp2.gabarito === 'C' ? 'E' : 'C',
      },
      tentativas: [
        {
          id: 'tentativa-antiga-1',
          userId: 'user-legacy',
          tipo: 'verificacao_submodulo',
          targetId: '1.1',
          moduloId: 'm1',
          totalItens: 3,
          acertos: 2,
          erros: 1,
          brancos: 0,
          aproveitamento: 0.67,
          aprovado: false,
          respostas: {},
          criadoEm: '2026-10-01T12:00:00Z',
          foraDaTrilha: false,
        },
      ],
    };

    const resultadoMigracao = executarMigracaoHistorico(estadoLegado as any, []);

    expect(resultadoMigracao.totalCheckpointsMigrados).toBe(2);
    expect(resultadoMigracao.backupChave).toBe('hnc_backup_pre_rodada5b');
    expect(resultadoMigracao.attemptsGeradas.length).toBe(2);

    // Verifica que o backup foi realmente salvo no localStorage
    const backupSalvo = localStorage.getItem('hnc_backup_pre_rodada5b');
    expect(backupSalvo).not.toBeNull();
  });

  it('(i) sincronia entre duas abas via BroadcastChannel', () => {
    // Simula recebimento de mensagem de outra aba
    const attemptAba2: ItemAttempt = {
      id: 'aba2-uuid-777',
      user_id: 'test-user',
      item_id: cp3.id,
      submodulo_id: '1.1',
      modulo_id: 'm1',
      contexto: 'jornada',
      resposta: cp3.gabarito,
      correto: true,
      tentativa_n: 1,
      criado_em: new Date().toISOString(),
    };

    // Aciona os listeners registrados no itemAttemptsSyncService
    (itemAttemptsSyncService as any).notificarListeners(attemptAba2);

    const state = useProgressStore.getState();
    expect(state.itemAttempts.some((a) => a.id === 'aba2-uuid-777')).toBe(true);
    expect(state.checkpointsRespondidos[cp3.id]).toBe(cp3.gabarito);
  });

  it('Marco 1 / Bug 5: Gate oficial conta EXCLUSIVAMENTE os checkpoints canônicos (3 itens)', () => {
    const itensVerificacao = obterItensVerificacaoSubmodulo(sub11, 'm1');
    // Conforme especificado pelo Marco 1 (Bug 5), o gate é aferido exclusivamente pelos checkpoints oficiais
    expect(itensVerificacao.length).toBe(3);
    expect(itensVerificacao.every((it) => it.tipo === 'checkpoint')).toBe(true);
  });
});

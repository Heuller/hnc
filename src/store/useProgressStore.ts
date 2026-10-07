import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  UserProgress,
  SimuladoFinalizado,
  SessaoSimuladoState,
} from '../domain/schemas/progress.schema';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import { COURSE_REGISTRY } from '../content/registry';
import { calculateSubmoduleStatus, isSubmoduleConcluido } from '../domain/learningEngine';
import {
  processarRespostaLeitner,
  criarItemLeitner,
} from '../domain/leitner';
import { getItensCadernoErros } from '../domain/cadernoErros';
import { useAuthStore } from './useAuthStore';
import { progressSyncService } from '../services/progressSyncService';
import type { TentativaRegistro } from '../domain/tentativas';
import { criarTentativaRegistro } from '../domain/tentativas';
import { deriveJornadaState, type JornadaState } from '../domain/jornadaEngine';
import { tentativasSyncService } from '../services/tentativasSyncService';
import type { TermoSalvo } from '../domain/dicionario/types';
import { getSimuladoById, detectSimuladoIdFromQuestionId } from '../content/simuladosRegistry';
import type { ItemAttempt, CriarItemAttemptParams } from '../domain/itemAttempts';
import {
  criarItemAttempt,
  obterPrimeiraTentativaItem,
  obterUltimaTentativaItem,
} from '../domain/itemAttempts';
import { itemAttemptsSyncService } from '../services/itemAttemptsSyncService';
import {
  derivarProgresso,
  type ProgressoGlobalDerivado,
} from '../domain/progressoEngine';
import {
  executarMigracaoHistorico,
  criarPayloadBackupLogico,
} from '../domain/migracaoTentativas';
import { JORNADA_CONFIG } from '../config/jornada.config';

interface ProgressStoreState extends UserProgress {
  ultimoModuloAcessado: string;
  tentativas: TentativaRegistro[];
  itemAttempts: ItemAttempt[];
  termosSalvos: TermoSalvo[];
  rodadasAtivas: Record<string, number>;
  flagsLegado: string[];
  // Fonte Única de Respostas (Parte 1 e Marco 1)
  adicionarItemAttempt: (params: CriarItemAttemptParams) => Promise<ItemAttempt>;
  obterPrimeiraTentativa: (itemId: string) => ItemAttempt | undefined;
  obterUltimaTentativa: (itemId: string) => ItemAttempt | undefined;
  obterTentativaRodada: (itemId: string, rodada: number) => ItemAttempt | undefined;
  iniciarNovaRodadaVerificacao: (submoduloNumero: string) => void;
  gerarBackupLogicoJSON: () => string;
  getProgressoGlobal: () => ProgressoGlobalDerivado;
  // Dicionário / Glossário
  salvarTermoVocabulario: (termo: TermoSalvo) => void;
  removerTermoVocabulario: (termoId: string) => void;
  isTermoSalvo: (termoId: string) => boolean;
  // Ações
  registrarAcessoHoje: () => void;
  marcarModuloConcluido: (moduloId: string) => void;
  alternarModuloConcluido: (moduloId: string) => void;
  registrarSecaoVisualizada: (submoduloId: string, secaoId: string) => void;
  salvarCheckpoint: (checkpointId: string, resposta: 'C' | 'E') => void;
  resetarCheckpoint: (checkpointId: string) => void;
  responderItemLeitner: (itemId: string, submoduloId: string, acertou: boolean) => void;
  setDevBypassSimuladoLock: (bypass: boolean) => void;
  setUltimoModuloAcessado: (moduloId: string) => void;
  sincronizarConclusoesPorDominio: () => void;
  // Jornada e Tentativas
  adicionarTentativa: (tentativa: TentativaRegistro) => Promise<void>;
  reabrirSecaoAposFalha: (targetId: string, secaoId: string) => void;
  setModoLivre: (ativo: boolean) => void;
  getJornadaState: () => JornadaState;
  sincronizarTentativasNuvem: () => Promise<void>;
  // Simulado com persistência total multi-simulados
  obterSessaoSimulado: (simuladoId: string) => SessaoSimuladoState;
  iniciarOuRetomarSimulado: (simuladoId?: string) => void;
  salvarRespostaSimulado: (
    arg1: string,
    arg2: string | ('C' | 'E' | 'BRANCO'),
    arg3?: ('C' | 'E' | 'BRANCO') | ('certeza' | 'provavel' | 'chute'),
    arg4?: ('certeza' | 'provavel' | 'chute') | boolean,
    arg5?: boolean
  ) => void;
  mudarQuestaoSimulado: (index: number, simuladoId?: string) => void;
  salvarTempoSimulado: (simuladoId: string, segundos: number) => void;
  finalizarSimulado: (tempoGastoSegundos: number, simuladoId?: string) => SimuladoFinalizado;
  reiniciarSimulado: (simuladoId?: string) => void;
  setSimuladoAtivoId: (simuladoId: string) => void;
  // Backup e Restauração
  exportarProgressoJson: () => string;
  exportarResumoMarkdown: () => string;
  importarProgressoJson: (json: string) => { success: boolean; error?: string };
  limparTodoProgresso: () => void;
}

const getTodayString = (): string => {
  const now = new Date();
  return now.toISOString().split('T')[0];
};

const getRecent7Days = (): string[] => {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
};

const INITIAL_STATE: UserProgress & {
  ultimoModuloAcessado: string;
  rodadasAtivas: Record<string, number>;
  flagsLegado: string[];
} = {
  versao: 2,
  ultimoModuloAcessado: '1.1',
  modulosLidosIds: [],
  checkpointsRespondidos: {},
  secoesVisualizadas: {},
  leitnerDeck: {},
  devBypassSimuladoLock: false,
  sessaoAtivaSimulado: {
    respostas: {},
    currentIndex: 0,
    emAndamento: false,
  },
  sessoesSimulados: {},
  ultimoSimuladoAcessadoId: 'm1-fundamentos',
  historicoSimulados: [],
  modoLivre: false,
  secoesReabertasAposFalha: {},
  tentativas: [],
  itemAttempts: [],
  termosSalvos: [],
  rodadasAtivas: {},
  flagsLegado: ['2.1'],
  constancia: {
    ultimoAcessoData: getTodayString(),
    diasConsecutivos: 1,
    historicoUltimos7Dias: [getTodayString()],
  },
};

if (typeof window !== 'undefined') {
  tentativasSyncService.migrarProgressoExistenteV2();
  try {
    const rawProgress = localStorage.getItem('hnc_progress_storage');
    if (rawProgress) {
      const parsed = JSON.parse(rawProgress)?.state;
      if (parsed) {
        const mig = executarMigracaoHistorico(
          {
            checkpointsRespondidos: parsed.checkpointsRespondidos,
            tentativas: parsed.tentativas,
            secoesVisualizadas: parsed.secoesVisualizadas,
            historicoSimulados: parsed.historicoSimulados,
            itemAttempts: itemAttemptsSyncService.carregarLocais(),
          },
          itemAttemptsSyncService.carregarLocais()
        );
        if (mig.totalCheckpointsMigrados > 0 || mig.totalTentativasJornadaMigradas > 0) {
          itemAttemptsSyncService.salvarLocais(mig.attemptsGeradas);
        }
      }
    }
  } catch (e) {
    console.warn('[Migracao] Falha na auto-migração:', e);
  }

  // Listener para sincronização instantânea entre abas via BroadcastChannel (Regra 1.2 e 1.7 i)
  itemAttemptsSyncService.onTentativaRecebida((novaAttempt) => {
    try {
      const store = useProgressStore.getState();
      const atuais = store.itemAttempts || [];
      if (!atuais.some((a) => a.id === novaAttempt.id)) {
        const novasAttempts = [...atuais, novaAttempt];
        const novosCheckpoints = {
          ...(store.checkpointsRespondidos || {}),
          [novaAttempt.item_id]: novaAttempt.resposta as ('C' | 'E'),
        };
        useProgressStore.setState({
          itemAttempts: novasAttempts,
          checkpointsRespondidos: novosCheckpoints,
        });
      }
    } catch (err) {
      console.warn('[BroadcastSync] Erro ao sincronizar tentativa entre abas:', err);
    }
  });
}

export const useProgressStore = create<ProgressStoreState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      tentativas:
        typeof window !== 'undefined'
          ? tentativasSyncService.carregarTentativasLocais()
          : [],
      itemAttempts:
        typeof window !== 'undefined'
          ? itemAttemptsSyncService.carregarLocais()
          : [],
      termosSalvos: [],

      adicionarItemAttempt: async (params: CriarItemAttemptParams) => {
        const state = get();
        const authUser = useAuthStore.getState().user;
        const userId = authUser?.id || 'usuario-local';

        const rodadaSub = state.rodadasAtivas?.[params.submoduloId] || 1;
        const rodadaN = params.rodadaN ?? rodadaSub;
        const jaTemOficial = (state.itemAttempts || []).some(
          (a) =>
            a.item_id === params.itemId &&
            !a.is_pratica &&
            (a.rodada_n === rodadaN || (rodadaN === 1 && a.tentativa_n === 1 && !a.rodada_n))
        );
        const isPratica = params.isPratica !== undefined ? params.isPratica : jaTemOficial;

        const novaAttempt = criarItemAttempt(
          {
            ...params,
            userId,
            rodadaN,
            isPratica,
          },
          state.itemAttempts || []
        );

        const novasAttempts = [
          ...(state.itemAttempts || []).filter((a) => a.id !== novaAttempt.id),
          novaAttempt,
        ];

        const novosCheckpoints = {
          ...(state.checkpointsRespondidos || {}),
          [novaAttempt.item_id]: novaAttempt.resposta as ('C' | 'E'),
        };

        const today = getTodayString();
        const novoLeitnerDeck = { ...(state.leitnerDeck || {}) };
        const itemAtual =
          novoLeitnerDeck[novaAttempt.item_id] ||
          criarItemLeitner(novaAttempt.item_id, novaAttempt.submodulo_id, today);
        novoLeitnerDeck[novaAttempt.item_id] = processarRespostaLeitner(
          itemAtual,
          novaAttempt.correto,
          today
        );

        const progressoGlobal = derivarProgresso(
          novasAttempts,
          state.secoesVisualizadas || {},
          COURSE_REGISTRY,
          JORNADA_CONFIG,
          state.historicoSimulados || [],
          state.flagsLegado || ['2.1'],
          state.rodadasAtivas || {}
        );

        const subProgresso = progressoGlobal.submodulos[novaAttempt.submodulo_id];
        let novosLidos = state.modulosLidosIds || [];
        if (subProgresso && subProgresso.concluido) {
          const lidosSet = new Set(novosLidos);
          lidosSet.add(subProgresso.submoduloId);
          novosLidos = Array.from(lidosSet);
        }

        // Gera registro de lote para retrocompatibilidade
        let novasTentativas = state.tentativas || [];
        if (subProgresso && subProgresso.itensRespondidosCount === subProgresso.totalItensVerificacao) {
          const mapaRespostas: Record<string, any> = {};
          for (const [itId, att] of Object.entries(subProgresso.primeirasTentativasMap)) {
            mapaRespostas[itId] = {
              questionId: itId,
              resposta: att.resposta,
              gabarito: att.correto ? att.resposta : att.resposta === 'C' ? 'E' : 'C',
              acertou: att.correto,
              secaoId: 'sec-checkpoints',
            };
          }
          const loteTentativa = criarTentativaRegistro({
            userId,
            tipo: 'verificacao_submodulo',
            targetId: subProgresso.submoduloNumero,
            moduloId: subProgresso.moduloId,
            totalItens: subProgresso.totalItensVerificacao,
            respostas: mapaRespostas,
            foraDaTrilha: state.modoLivre || false,
          });
          novasTentativas = [
            ...novasTentativas.filter((t) => t.targetId !== subProgresso.submoduloNumero),
            loteTentativa,
          ];
        }

        set({
          itemAttempts: novasAttempts,
          checkpointsRespondidos: novosCheckpoints,
          leitnerDeck: novoLeitnerDeck,
          modulosLidosIds: novosLidos,
          tentativas: novasTentativas,
        });

        await itemAttemptsSyncService.registrarTentativa(novaAttempt, userId);

        return novaAttempt;
      },

      obterPrimeiraTentativa: (itemId: string) => {
        const state = get();
        const att = obterPrimeiraTentativaItem(state.itemAttempts || [], itemId);
        if (att) return att;
        // Fallback resiliente para reidratação do legado (Bug 8)
        const respLegado = state.checkpointsRespondidos?.[itemId];
        if (respLegado) {
          return {
            id: `legacy-${itemId}`,
            user_id: 'usuario-local',
            item_id: itemId,
            submodulo_id: '',
            modulo_id: '',
            contexto: 'teoria',
            resposta: respLegado,
            correto: true,
            tentativa_n: 1,
            rodada_n: 1,
            is_pratica: false,
            criado_em: new Date().toISOString(),
          } as ItemAttempt;
        }
        return undefined;
      },

      obterUltimaTentativa: (itemId: string) => {
        return obterUltimaTentativaItem(get().itemAttempts || [], itemId);
      },

      obterTentativaRodada: (itemId: string, rodada: number) => {
        const state = get();
        return (state.itemAttempts || []).find(
          (a) =>
            a.item_id === itemId &&
            !a.is_pratica &&
            (a.rodada_n === rodada || (rodada === 1 && a.tentativa_n === 1 && !a.rodada_n))
        );
      },

      iniciarNovaRodadaVerificacao: (submoduloNumero: string) => {
        const state = get();
        const subAttempts = (state.itemAttempts || []).filter(
          (a) => a.submodulo_id === submoduloNumero && !a.is_pratica
        );
        const rodadasRegistradas = subAttempts.map((a) => a.rodada_n || (a.tentativa_n === 1 ? 1 : 1));
        const rodadaMax =
          rodadasRegistradas.length > 0
            ? Math.max(...rodadasRegistradas)
            : state.rodadasAtivas?.[submoduloNumero] || 1;
        const proximaRodada = rodadaMax + 1;

        set({
          rodadasAtivas: {
            ...(state.rodadasAtivas || {}),
            [submoduloNumero]: proximaRodada,
          },
        });
      },

      gerarBackupLogicoJSON: () => {
        const state = get();
        return criarPayloadBackupLogico(
          {
            checkpointsRespondidos: state.checkpointsRespondidos,
            tentativas: state.tentativas,
            secoesVisualizadas: state.secoesVisualizadas,
            historicoSimulados: state.historicoSimulados,
            itemAttempts: state.itemAttempts,
          },
          state.itemAttempts || []
        );
      },

      getProgressoGlobal: () => {
        const state = get();
        return derivarProgresso(
          state.itemAttempts || [],
          state.secoesVisualizadas || {},
          COURSE_REGISTRY,
          JORNADA_CONFIG,
          state.historicoSimulados || [],
          state.flagsLegado || ['2.1'],
          state.rodadasAtivas || {}
        );
      },

      salvarTermoVocabulario: (termo: TermoSalvo) => {
        const atuais = get().termosSalvos || [];
        if (!atuais.some((t) => t.id === termo.id)) {
          set({ termosSalvos: [termo, ...atuais] });
        }
      },

      removerTermoVocabulario: (termoId: string) => {
        const atuais = get().termosSalvos || [];
        set({ termosSalvos: atuais.filter((t) => t.id !== termoId) });
      },

      isTermoSalvo: (termoId: string) => {
        const atuais = get().termosSalvos || [];
        return atuais.some((t) => t.id === termoId);
      },

      adicionarTentativa: async (tentativa: TentativaRegistro) => {
        const authUser = useAuthStore.getState().user;
        await tentativasSyncService.registrarTentativa(tentativa, authUser?.id);
        const atual = get().tentativas || [];
        const atualizadas = [...atual.filter((t) => t.id !== tentativa.id), tentativa];
        set({ tentativas: atualizadas });

        if (tentativa.aprovado && tentativa.tipo === 'verificacao_submodulo') {
          const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
          const sub = allSubs.find(
            (s) => s.numero === tentativa.targetId || s.id === tentativa.targetId
          );
          if (sub) {
            const lidos = new Set(get().modulosLidosIds);
            lidos.add(sub.id);
            set({ modulosLidosIds: Array.from(lidos) });
          }
        }

        const today = getTodayString();
        const novoLeitnerDeck = { ...(get().leitnerDeck || {}) };
        for (const [qId, resp] of Object.entries(tentativa.respostas)) {
          const itemAtual = novoLeitnerDeck[qId] || criarItemLeitner(qId, tentativa.moduloId, today);
          novoLeitnerDeck[qId] = processarRespostaLeitner(itemAtual, resp.acertou, today);
        }
        set({ leitnerDeck: novoLeitnerDeck });

        if (authUser) {
          progressSyncService.salvarProgressoNuvem(authUser.id, get(), get().ultimoModuloAcessado);
        }
      },

      reabrirSecaoAposFalha: (targetId: string, secaoId: string) => {
        const mapa = { ...(get().secoesReabertasAposFalha || {}) };
        const secoes = mapa[targetId] || [];
        if (!secoes.includes(secaoId)) {
          mapa[targetId] = [...secoes, secaoId];
          set({ secoesReabertasAposFalha: mapa });
        }
      },

      setModoLivre: (ativo: boolean) => {
        set({ modoLivre: ativo });
      },

      getJornadaState: () => {
        const s = get();
        return deriveJornadaState({
          modulos: COURSE_REGISTRY,
          tentativas: s.tentativas || [],
          secoesVisualizadas: s.secoesVisualizadas || {},
          secoesReabertasAposFalha: s.secoesReabertasAposFalha || {},
          modoLivre: s.modoLivre || false,
          checkpointsRespondidos: s.checkpointsRespondidos || {},
        });
      },

      sincronizarTentativasNuvem: async () => {
        const authUser = useAuthStore.getState().user;
        if (!authUser) return;
        const remotas = await tentativasSyncService.sincronizarTentativasNuvem(authUser.id);
        set({ tentativas: remotas });
      },

      registrarAcessoHoje: () => {
        const today = getTodayString();
        const current = get().constancia;

        if (current.ultimoAcessoData === today) {
          return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        let novosDias = 1;
        if (current.ultimoAcessoData === yesterdayStr) {
          novosDias = current.diasConsecutivos + 1;
        }

        const historicoSet = new Set(current.historicoUltimos7Dias);
        historicoSet.add(today);

        const validRecent = getRecent7Days();
        const historicoFiltrado = validRecent.filter((d) => historicoSet.has(d));

        set({
          constancia: {
            ultimoAcessoData: today,
            diasConsecutivos: novosDias,
            historicoUltimos7Dias: historicoFiltrado,
          },
        });
      },

      sincronizarConclusoesPorDominio: () => {
        const state = get();
        const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
        const novosLidos: string[] = [];

        for (const sub of allSubs) {
          const secoes = state.secoesVisualizadas?.[sub.id] || [];
          const res = calculateSubmoduleStatus(sub, secoes, state.checkpointsRespondidos || {});
          if (isSubmoduleConcluido(res.status)) {
            novosLidos.push(sub.id);
          }
        }

        set({ modulosLidosIds: novosLidos });
      },

      marcarModuloConcluido: (moduloId: string) => {
        const lidos = new Set(get().modulosLidosIds);
        lidos.add(moduloId);
        set({ modulosLidosIds: Array.from(lidos) });
      },

      alternarModuloConcluido: (moduloId: string) => {
        const lidos = new Set(get().modulosLidosIds);
        if (lidos.has(moduloId)) {
          lidos.delete(moduloId);
        } else {
          lidos.add(moduloId);
        }
        set({ modulosLidosIds: Array.from(lidos) });
      },

      registrarSecaoVisualizada: (submoduloId: string, secaoId: string) => {
        const state = get();
        const mapaSecoes = state.secoesVisualizadas || {};
        const secoesAtuais = mapaSecoes[submoduloId] || [];
        if (secoesAtuais.includes(secaoId)) return;

        const novasSecoes = [...secoesAtuais, secaoId];
        const novoMapaSecoes = {
          ...mapaSecoes,
          [submoduloId]: novasSecoes,
        };

        const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
        const sub = allSubs.find((s) => s.id === submoduloId || s.numero === submoduloId);

        let novosLidos = state.modulosLidosIds || [];
        if (sub) {
          const learning = calculateSubmoduleStatus(sub, novasSecoes, state.checkpointsRespondidos || {});
          const lidosSet = new Set(novosLidos);
          if (isSubmoduleConcluido(learning.status)) {
            lidosSet.add(sub.id);
          } else {
            lidosSet.delete(sub.id);
          }
          novosLidos = Array.from(lidosSet);
        }

        set({
          secoesVisualizadas: novoMapaSecoes,
          modulosLidosIds: novosLidos,
        });
      },

      salvarCheckpoint: (checkpointId: string, resposta: 'C' | 'E') => {
        const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
        let subEncontrado: (typeof allSubs)[0] | undefined;
        let cpEncontrado: { id: string; gabarito: 'C' | 'E' } | undefined;

        for (const s of allSubs) {
          const cp = s.checkpoints.find((c) => c.id === checkpointId);
          if (cp) {
            subEncontrado = s;
            cpEncontrado = cp;
            break;
          }
        }

        const submoduloId = subEncontrado ? subEncontrado.numero : '1.1';
        const moduloId = subEncontrado ? subEncontrado.id.split('.')[0] : 'm1';
        const gabarito = cpEncontrado ? cpEncontrado.gabarito : 'C';

        // Delega para a Fonte Única de Respostas (Regra 1.1 e 1.2)
        get().adicionarItemAttempt({
          itemId: checkpointId,
          submoduloId,
          moduloId,
          contexto: 'teoria',
          resposta,
          gabarito,
        });
      },

      resetarCheckpoint: (checkpointId: string) => {
        // Regra 1.4: Prática visual sem apagar histórico append-only da primeira tentativa
        set((state) => {
          const updated = { ...(state.checkpointsRespondidos || {}) };
          delete updated[checkpointId];
          return { checkpointsRespondidos: updated };
        });
      },

      responderItemLeitner: (itemId: string, submoduloId: string, acertou: boolean) => {
        const state = get();
        const today = getTodayString();
        const deck = { ...(state.leitnerDeck || {}) };
        const itemAtual = deck[itemId] || criarItemLeitner(itemId, submoduloId, today);
        deck[itemId] = processarRespostaLeitner(itemAtual, acertou, today);
        set({ leitnerDeck: deck });
      },

      setDevBypassSimuladoLock: (bypass: boolean) => {
        set({ devBypassSimuladoLock: bypass });
      },

      setUltimoModuloAcessado: (moduloId: string) => {
        set({ ultimoModuloAcessado: moduloId });
      },

      setSimuladoAtivoId: (simuladoId: string) => {
        set({ ultimoSimuladoAcessadoId: simuladoId });
      },

      obterSessaoSimulado: (simuladoId: string) => {
        const state = get();
        const sessoes = state.sessoesSimulados || {};
        if (sessoes[simuladoId]) {
          return sessoes[simuladoId];
        }
        // Fallback para sessaoAtivaSimulado se compatível
        if (state.sessaoAtivaSimulado && state.sessaoAtivaSimulado.emAndamento) {
          const firstKey = Object.keys(state.sessaoAtivaSimulado.respostas || {})[0];
          if (firstKey && detectSimuladoIdFromQuestionId(firstKey) === simuladoId) {
            return {
              simuladoId,
              respostas: state.sessaoAtivaSimulado.respostas || {},
              currentIndex: state.sessaoAtivaSimulado.currentIndex || 0,
              emAndamento: true,
              tempoGastoSegundos: 0,
              ultimoAcessoTimestamp: Date.now(),
            };
          }
        }
        return {
          simuladoId,
          respostas: {},
          currentIndex: 0,
          emAndamento: false,
          tempoGastoSegundos: 0,
          ultimoAcessoTimestamp: Date.now(),
        };
      },

      iniciarOuRetomarSimulado: (simuladoIdParam?: string) => {
        const state = get();
        const simuladoId = simuladoIdParam || state.ultimoSimuladoAcessadoId || 'm1-fundamentos';
        const sessoes = state.sessoesSimulados || {};
        const sessaoAtual = sessoes[simuladoId] || {
          simuladoId,
          respostas: {},
          currentIndex: 0,
          emAndamento: true,
          tempoGastoSegundos: 0,
          ultimoAcessoTimestamp: Date.now(),
        };

        const novaSessao: SessaoSimuladoState = {
          ...sessaoAtual,
          emAndamento: true,
          ultimoAcessoTimestamp: Date.now(),
        };

        set({
          ultimoSimuladoAcessadoId: simuladoId,
          sessoesSimulados: {
            ...sessoes,
            [simuladoId]: novaSessao,
          },
          sessaoAtivaSimulado: {
            respostas: novaSessao.respostas,
            currentIndex: novaSessao.currentIndex,
            emAndamento: true,
          },
        });
      },

      salvarRespostaSimulado: (
        arg1: string,
        arg2: string | ('C' | 'E' | 'BRANCO'),
        arg3?: ('C' | 'E' | 'BRANCO') | ('certeza' | 'provavel' | 'chute'),
        arg4?: ('certeza' | 'provavel' | 'chute') | boolean,
        arg5?: boolean
      ) => {
        let simuladoId: string;
        let questionId: string;
        let resposta: 'C' | 'E' | 'BRANCO';
        let certeza: 'certeza' | 'provavel' | 'chute' | undefined;
        let acertou: boolean | undefined;

        if (typeof arg2 === 'string' && (arg2 === 'C' || arg2 === 'E' || arg2 === 'BRANCO')) {
          questionId = arg1;
          resposta = arg2;
          certeza = arg3 as ('certeza' | 'provavel' | 'chute' | undefined);
          acertou = arg4 as (boolean | undefined);
          simuladoId = detectSimuladoIdFromQuestionId(questionId);
        } else {
          simuladoId = arg1;
          questionId = arg2 as string;
          resposta = arg3 as ('C' | 'E' | 'BRANCO');
          certeza = arg4 as ('certeza' | 'provavel' | 'chute' | undefined);
          acertou = arg5;
        }

        set((state) => {
          const sessoes = state.sessoesSimulados || {};
          const sessaoAtual = sessoes[simuladoId] || {
            simuladoId,
            respostas: {},
            currentIndex: 0,
            emAndamento: true,
            tempoGastoSegundos: 0,
            ultimoAcessoTimestamp: Date.now(),
          };

          const novasRespostas = {
            ...sessaoAtual.respostas,
            [questionId]: {
              questionId,
              resposta,
              certeza,
              acertou,
              timestamp: Date.now(),
            },
          };

          const novaSessao: SessaoSimuladoState = {
            ...sessaoAtual,
            respostas: novasRespostas,
            emAndamento: true,
            ultimoAcessoTimestamp: Date.now(),
          };

          return {
            ultimoSimuladoAcessadoId: simuladoId,
            sessoesSimulados: {
              ...sessoes,
              [simuladoId]: novaSessao,
            },
            sessaoAtivaSimulado: {
              currentIndex: novaSessao.currentIndex,
              emAndamento: true,
              respostas: novasRespostas,
            },
          };
        });
      },

      mudarQuestaoSimulado: (index: number, simuladoIdParam?: string) => {
        set((state) => {
          const simuladoId = simuladoIdParam || state.ultimoSimuladoAcessadoId || 'm1-fundamentos';
          const sessoes = state.sessoesSimulados || {};
          const sessaoAtual = sessoes[simuladoId] || {
            simuladoId,
            respostas: {},
            currentIndex: 0,
            emAndamento: true,
            tempoGastoSegundos: 0,
            ultimoAcessoTimestamp: Date.now(),
          };

          const novaSessao: SessaoSimuladoState = {
            ...sessaoAtual,
            currentIndex: Math.max(0, index),
            emAndamento: true,
            ultimoAcessoTimestamp: Date.now(),
          };

          return {
            ultimoSimuladoAcessadoId: simuladoId,
            sessoesSimulados: {
              ...sessoes,
              [simuladoId]: novaSessao,
            },
            sessaoAtivaSimulado: {
              respostas: novaSessao.respostas,
              currentIndex: Math.max(0, index),
              emAndamento: true,
            },
          };
        });
      },

      salvarTempoSimulado: (simuladoId: string, segundos: number) => {
        set((state) => {
          const sessoes = state.sessoesSimulados || {};
          const sessaoAtual = sessoes[simuladoId];
          if (!sessaoAtual) return {};
          return {
            sessoesSimulados: {
              ...sessoes,
              [simuladoId]: {
                ...sessaoAtual,
                tempoGastoSegundos: segundos,
                ultimoAcessoTimestamp: Date.now(),
              },
            },
          };
        });
      },

      finalizarSimulado: (tempoGastoSegundos: number, simuladoIdParam?: string) => {
        const state = get();
        const simuladoId = simuladoIdParam || state.ultimoSimuladoAcessadoId || 'm1-fundamentos';
        const sessoes = state.sessoesSimulados || {};
        const sessao = sessoes[simuladoId] || state.sessaoAtivaSimulado || { respostas: {} };
        const respostas = sessao.respostas || {};

        const manifest = getSimuladoById(simuladoId);
        const questoes = manifest?.questoes || simuladoFundamentos100Q;
        const tituloSimulado = manifest?.titulo || 'Simulado Oficial Cebraspe';

        let certos = 0;
        let errados = 0;
        let emBranco = 0;

        let certezaTotal = 0;
        let certezaAcertos = 0;
        let provavelTotal = 0;
        let provavelAcertos = 0;
        let chuteTotal = 0;
        let chuteAcertos = 0;

        questoes.forEach((q) => {
          const r = respostas[q.id];
          if (!r || r.resposta === 'BRANCO') {
            emBranco++;
          } else if (r.resposta === q.gabarito) {
            certos++;
            if (r.certeza === 'certeza') {
              certezaTotal++;
              certezaAcertos++;
            } else if (r.certeza === 'provavel') {
              provavelTotal++;
              provavelAcertos++;
            } else if (r.certeza === 'chute') {
              chuteTotal++;
              chuteAcertos++;
            }
          } else {
            errados++;
            if (r.certeza === 'certeza') {
              certezaTotal++;
            } else if (r.certeza === 'provavel') {
              provavelTotal++;
            } else if (r.certeza === 'chute') {
              chuteTotal++;
            }
          }
        });

        const notaLiquida = certos - errados;
        const totalQuestoes = Math.max(1, questoes.length);
        const aproveitamentoPercent = Math.max(0, Math.round((notaLiquida / totalQuestoes) * 100));

        const acertoCertezaPercent =
          certezaTotal > 0 ? Math.round((certezaAcertos / certezaTotal) * 100) : 0;
        const acertoProvavelPercent =
          provavelTotal > 0 ? Math.round((provavelAcertos / provavelTotal) * 100) : 0;
        const acertoChutePercent =
          chuteTotal > 0 ? Math.round((chuteAcertos / chuteTotal) * 100) : 0;

        const chuteErrados = chuteTotal - chuteAcertos;
        const saldoChutes = chuteAcertos - chuteErrados;
        const ganhoPotencialSeChuteBranco = saldoChutes < 0 ? Math.abs(saldoChutes) : 0;

        const resultado: SimuladoFinalizado = {
          id: `simulado-${Date.now()}`,
          simuladoId,
          tituloSimulado,
          dataHora: new Date().toISOString(),
          tempoGastoSegundos,
          certos,
          errados,
          emBranco,
          notaLiquida,
          aproveitamentoPercent,
          respostas,
          calibracao: {
            acertoCertezaPercent,
            acertoProvavelPercent,
            acertoChutePercent,
            ganhoPotencialSeChuteBranco,
          },
        };

        const novasSessoes = {
          ...sessoes,
          [simuladoId]: {
            simuladoId,
            respostas: {},
            currentIndex: 0,
            emAndamento: false,
            tempoGastoSegundos: 0,
            ultimoAcessoTimestamp: Date.now(),
          },
        };

        set({
          historicoSimulados: [resultado, ...state.historicoSimulados],
          sessoesSimulados: novasSessoes,
          sessaoAtivaSimulado: {
            respostas: {},
            currentIndex: 0,
            emAndamento: false,
          },
        });

        // Regra 1.2 e 2.4: Registra tentativas append-only e alimenta Leitner/Caderno de Erros
        try {
          questoes.forEach((q) => {
            const r = respostas[q.id];
            if (r) {
              const correto = r.resposta !== 'BRANCO' && r.resposta === q.gabarito;
              get().adicionarItemAttempt({
                itemId: q.id,
                submoduloId: q.submoduloId,
                moduloId: manifest?.macroModuloId || 'M1',
                contexto: 'simulado',
                resposta: r.resposta as 'C' | 'E' | 'BRANCO',
                certeza:
                  r.certeza === 'certeza'
                    ? 'alta'
                    : r.certeza === 'provavel'
                    ? 'media'
                    : r.certeza === 'chute'
                    ? 'baixa'
                    : undefined,
                gabarito: q.gabarito,
              });

              // Todo item errado entra automaticamente no Leitner / Caderno de Erros
              if (r.resposta !== 'BRANCO' && !correto) {
                get().responderItemLeitner(q.id, q.submoduloId, false);
              }
            }
          });
        } catch (e) {
          console.warn('[Simulado Tentativas] Falha ao registrar tentativas append-only:', e);
        }

        // Sincroniza tentativa com o Supabase se usuário estiver autenticado
        try {
          const authUser = useAuthStore.getState().user;
          if (authUser) {
            progressSyncService.registrarSimulado(authUser.id, resultado);
            progressSyncService.salvarProgressoNuvem(authUser.id, get(), get().ultimoModuloAcessado);
          }
        } catch (e) {
          console.warn('[Supabase Sync] Falha ao registrar simulado na nuvem:', e);
        }

        return resultado;
      },

      reiniciarSimulado: (simuladoIdParam?: string) => {
        const state = get();
        const simuladoId = simuladoIdParam || state.ultimoSimuladoAcessadoId || 'm1-fundamentos';
        const sessoes = state.sessoesSimulados || {};
        set({
          sessoesSimulados: {
            ...sessoes,
            [simuladoId]: {
              simuladoId,
              respostas: {},
              currentIndex: 0,
              emAndamento: false,
              tempoGastoSegundos: 0,
              ultimoAcessoTimestamp: Date.now(),
            },
          },
          sessaoAtivaSimulado: {
            respostas: {},
            currentIndex: 0,
            emAndamento: false,
          },
        });
      },

      exportarProgressoJson: () => {
        const state = get();
        const exportData = {
          versao: state.versao,
          exportadoEm: new Date().toISOString(),
          modulosLidosIds: state.modulosLidosIds,
          checkpointsRespondidos: state.checkpointsRespondidos,
          historicoSimulados: state.historicoSimulados,
          constancia: state.constancia,
          ultimoModuloAcessado: state.ultimoModuloAcessado,
        };
        return JSON.stringify(exportData, null, 2);
      },

      exportarResumoMarkdown: () => {
        const state = get();
        const allSubs = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
        const lidos = allSubs.filter((s) => state.modulosLidosIds.includes(s.id));
        const erros = getItensCadernoErros(
          state.checkpointsRespondidos || {},
          state.historicoSimulados || []
        );

        let md = `# Relatório de Estudos e Desempenho · Heuller na Câmara\n\n`;
        md += `*Gerado em: ${new Date().toLocaleString('pt-BR')}*\n\n`;
        md += `## 1. Progresso Geral (Câmara dos Deputados)\n\n`;
        md += `- **Submódulos Lidos:** ${lidos.length} de 40 (${Math.round((lidos.length / 40) * 100)}%)\n`;
        md += `- **Constância de Estudo:** ${state.constancia.diasConsecutivos} dias consecutivos ativos\n`;
        md += `- **Checkpoints Respondidos:** ${Object.keys(state.checkpointsRespondidos || {}).length} de 120\n\n`;

        if (state.historicoSimulados && state.historicoSimulados.length > 0) {
          md += `## 2. Histórico de Simulados (Fator Cebraspe)\n\n`;
          md += `| Simulado | Data | Acertos | Erros | Em Branco | Pontuação Líquida |\n`;
          md += `| :--- | :--- | :--- | :--- | :--- | :--- |\n`;
          state.historicoSimulados.forEach((sim, idx) => {
            md += `| #${idx + 1} | ${new Date(sim.dataHora).toLocaleDateString('pt-BR')} | ${sim.certos} | ${sim.errados} | ${sim.emBranco} | **${sim.notaLiquida} pts** |\n`;
          });
          md += `\n`;
        }

        if (erros.length > 0) {
          md += `## 3. Caderno de Erros Ativo (${erros.length} itens)\n\n`;
          erros.forEach((e, idx) => {
            md += `### Item ${idx + 1}: ${e.tituloContexto}\n\n`;
            md += `> ${e.assertiva}\n\n`;
            md += `- **Gabarito Oficial:** ${e.gabarito === 'C' ? 'CERTO' : 'ERRADO'}\n`;
            md += `- **Sua Resposta:** ${e.respostaUsuario === 'C' ? 'CERTO' : 'ERRADO'}\n`;
            md += `- **Justificativa Técnica:** ${e.justificativa}\n\n`;
            if (e.armadilhaBanca) {
              md += `- **Armadilha Cebraspe:** ${e.armadilhaBanca}\n\n`;
            }
          });
        }

        return md;
      },

      importarProgressoJson: (json: string) => {
        try {
          const parsed = JSON.parse(json);
          if (!parsed || typeof parsed !== 'object') {
            return { success: false, error: 'Arquivo JSON inválido' };
          }

          const modulosLidosIds = Array.isArray(parsed.modulosLidosIds)
            ? parsed.modulosLidosIds
            : [];
          const checkpointsRespondidos =
            typeof parsed.checkpointsRespondidos === 'object' && parsed.checkpointsRespondidos !== null
              ? parsed.checkpointsRespondidos
              : {};
          const historicoSimulados = Array.isArray(parsed.historicoSimulados)
            ? parsed.historicoSimulados
            : [];
          const constancia = parsed.constancia || INITIAL_STATE.constancia;
          const ultimoModuloAcessado = parsed.ultimoModuloAcessado || '1.1';

          set({
            versao: 2,
            modulosLidosIds,
            checkpointsRespondidos,
            historicoSimulados,
            constancia,
            ultimoModuloAcessado,
            sessaoAtivaSimulado: {
              respostas: {},
              currentIndex: 0,
              emAndamento: false,
            },
          });

          return { success: true };
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : 'Falha ao interpretar JSON';
          return { success: false, error: msg };
        }
      },

      limparTodoProgresso: () => {
        set(INITIAL_STATE);
      },
    }),
    {
      name: 'heuller_camara_v2_progress',
      version: 2,
      migrate: (persistedState: unknown, version: number) => {
        if (version === 1 || !version) {
          const old = (persistedState as Record<string, unknown>) || {};
          return {
            ...INITIAL_STATE,
            ...old,
            versao: 2,
          };
        }
        return persistedState as ProgressStoreState;
      },
    }
  )
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  UserProgress,
  SimuladoFinalizado,
} from '../domain/schemas/progress.schema';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';
import { simuladoCatalogacao100Q } from '../content/questions/m2-catalogacao-100q';
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

interface ProgressStoreState extends UserProgress {
  ultimoModuloAcessado: string;
  tentativas: TentativaRegistro[];
  termosSalvos: TermoSalvo[];
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
  // Simulado
  iniciarOuRetomarSimulado: () => void;
  salvarRespostaSimulado: (
    questionId: string,
    resposta: 'C' | 'E' | 'BRANCO',
    certeza?: 'certeza' | 'provavel' | 'chute',
    acertou?: boolean
  ) => void;
  mudarQuestaoSimulado: (index: number) => void;
  finalizarSimulado: (tempoGastoSegundos: number, simuladoId?: string) => SimuladoFinalizado;
  reiniciarSimulado: () => void;
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

const INITIAL_STATE: UserProgress & { ultimoModuloAcessado: string } = {
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
  historicoSimulados: [],
  modoLivre: false,
  secoesReabertasAposFalha: {},
  tentativas: [],
  termosSalvos: [],
  constancia: {
    ultimoAcessoData: getTodayString(),
    diasConsecutivos: 1,
    historicoUltimos7Dias: [getTodayString()],
  },
};

if (typeof window !== 'undefined') {
  tentativasSyncService.migrarProgressoExistenteV2();
}

export const useProgressStore = create<ProgressStoreState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      tentativas:
        typeof window !== 'undefined'
          ? tentativasSyncService.carregarTentativasLocais()
          : [],
      termosSalvos: [],

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
        const state = get();
        const novosCheckpoints = {
          ...(state.checkpointsRespondidos || {}),
          [checkpointId]: resposta,
        };

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

        const today = getTodayString();
        const novoLeitnerDeck = { ...(state.leitnerDeck || {}) };

        if (subEncontrado && cpEncontrado) {
          const acertou = resposta === cpEncontrado.gabarito;
          const itemAtual =
            novoLeitnerDeck[checkpointId] ||
            criarItemLeitner(checkpointId, subEncontrado.id, today);
          novoLeitnerDeck[checkpointId] = processarRespostaLeitner(itemAtual, acertou, today);
        }

        let novosLidos = state.modulosLidosIds || [];
        let novasTentativas = state.tentativas || [];

        if (subEncontrado) {
          const secoes = (state.secoesVisualizadas || {})[subEncontrado.id] || [];
          const learning = calculateSubmoduleStatus(subEncontrado, secoes, novosCheckpoints);
          const lidosSet = new Set(novosLidos);
          if (isSubmoduleConcluido(learning.status)) {
            lidosSet.add(subEncontrado.id);
          } else {
            lidosSet.delete(subEncontrado.id);
          }
          novosLidos = Array.from(lidosSet);

          // Sincronização automática com a Jornada: registra tentativa se todos os checkpoints foram feitos
          const totalCps = subEncontrado.checkpoints?.length || 0;
          let respondidosCount = 0;
          let acertosCount = 0;
          const mapaRespostas: Record<string, any> = {};

          for (const cp of subEncontrado.checkpoints || []) {
            const resp = novosCheckpoints[cp.id];
            if (resp) {
              respondidosCount++;
              const acertou = resp === cp.gabarito;
              if (acertou) acertosCount++;
              mapaRespostas[cp.id] = {
                questionId: cp.id,
                resposta: resp,
                gabarito: cp.gabarito,
                acertou,
                secaoId: 'sec-checkpoints',
                texto: cp.item,
              };
            }
          }

          if (totalCps > 0 && respondidosCount === totalCps) {
            const aproveitamento = acertosCount / totalCps;
            if (aproveitamento >= 0.85) {
              const novaTentativa = criarTentativaRegistro({
                userId: 'usuario-logado',
                tipo: 'verificacao_submodulo',
                targetId: subEncontrado.numero,
                moduloId: subEncontrado.id,
                totalItens: totalCps,
                respostas: mapaRespostas,
                foraDaTrilha: false,
              });
              novasTentativas = [
                ...novasTentativas.filter((t) => t.targetId !== subEncontrado.numero),
                novaTentativa,
              ];
            }
          }
        }

        set({
          checkpointsRespondidos: novosCheckpoints,
          leitnerDeck: novoLeitnerDeck,
          modulosLidosIds: novosLidos,
          tentativas: novasTentativas,
        });
      },

      resetarCheckpoint: (checkpointId: string) => {
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

      iniciarOuRetomarSimulado: () => {
        set((state) => ({
          sessaoAtivaSimulado: {
            respostas: state.sessaoAtivaSimulado?.respostas || {},
            currentIndex: state.sessaoAtivaSimulado?.currentIndex || 0,
            emAndamento: true,
          },
        }));
      },

      salvarRespostaSimulado: (
        questionId: string,
        resposta: 'C' | 'E' | 'BRANCO',
        certeza?: 'certeza' | 'provavel' | 'chute',
        acertou?: boolean
      ) => {
        set((state) => {
          const respostas = {
            ...(state.sessaoAtivaSimulado?.respostas || {}),
            [questionId]: {
              questionId,
              resposta,
              certeza,
              acertou,
              timestamp: Date.now(),
            },
          };

          return {
            sessaoAtivaSimulado: {
              currentIndex: state.sessaoAtivaSimulado?.currentIndex ?? 0,
              emAndamento: true,
              respostas,
            },
          };
        });
      },

      mudarQuestaoSimulado: (index: number) => {
        set((state) => ({
          sessaoAtivaSimulado: {
            respostas: state.sessaoAtivaSimulado?.respostas || {},
            currentIndex: Math.max(0, Math.min(99, index)),
            emAndamento: true,
          },
        }));
      },

      finalizarSimulado: (tempoGastoSegundos: number, simuladoIdParam?: string) => {
        const state = get();
        const respostas = state.sessaoAtivaSimulado?.respostas || {};

        const hasM2Questions = Object.keys(respostas).some((k) => k.startsWith('cat-q-'));
        const simuladoId = simuladoIdParam || (hasM2Questions ? 'm2-catalogacao' : 'm1-fundamentos');
        const questoes = simuladoId === 'm2-catalogacao' ? simuladoCatalogacao100Q : simuladoFundamentos100Q;
        const tituloSimulado = simuladoId === 'm2-catalogacao'
          ? 'Simulado M2: Catalogação, RDA, LRM & MARC 21'
          : 'Simulado M1: 100 Itens de Fundamentos';

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
        const aproveitamentoPercent = Math.max(0, Math.round((notaLiquida / 100) * 100));

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

        set((prevState) => ({
          historicoSimulados: [resultado, ...prevState.historicoSimulados],
          sessaoAtivaSimulado: {
            respostas: {},
            currentIndex: 0,
            emAndamento: false,
          },
        }));

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

      reiniciarSimulado: () => {
        set({
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

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  UserProgress,
  SimuladoFinalizado,
} from '../domain/schemas/progress.schema';
import { simuladoFundamentos100Q } from '../content/questions/m1-fundamentos-100q';

interface ProgressStoreState extends UserProgress {
  ultimoModuloAcessado: string;
  // Ações
  registrarAcessoHoje: () => void;
  marcarModuloConcluido: (moduloId: string) => void;
  alternarModuloConcluido: (moduloId: string) => void;
  salvarCheckpoint: (checkpointId: string, resposta: 'C' | 'E') => void;
  resetarCheckpoint: (checkpointId: string) => void;
  setUltimoModuloAcessado: (moduloId: string) => void;
  // Simulado
  iniciarOuRetomarSimulado: () => void;
  salvarRespostaSimulado: (
    questionId: string,
    resposta: 'C' | 'E' | 'BRANCO',
    certeza?: 'certeza' | 'provavel' | 'chute',
    acertou?: boolean
  ) => void;
  mudarQuestaoSimulado: (index: number) => void;
  finalizarSimulado: (tempoGastoSegundos: number) => SimuladoFinalizado;
  reiniciarSimulado: () => void;
  // Backup e Restauração
  exportarProgressoJson: () => string;
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
  sessaoAtivaSimulado: {
    respostas: {},
    currentIndex: 0,
    emAndamento: false,
  },
  historicoSimulados: [],
  constancia: {
    ultimoAcessoData: getTodayString(),
    diasConsecutivos: 1,
    historicoUltimos7Dias: [getTodayString()],
  },
};

export const useProgressStore = create<ProgressStoreState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

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

      salvarCheckpoint: (checkpointId: string, resposta: 'C' | 'E') => {
        set((state) => ({
          checkpointsRespondidos: {
            ...state.checkpointsRespondidos,
            [checkpointId]: resposta,
          },
        }));
      },

      resetarCheckpoint: (checkpointId: string) => {
        set((state) => {
          const updated = { ...state.checkpointsRespondidos };
          delete updated[checkpointId];
          return { checkpointsRespondidos: updated };
        });
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

      finalizarSimulado: (tempoGastoSegundos: number) => {
        const state = get();
        const respostas = state.sessaoAtivaSimulado?.respostas || {};

        let certos = 0;
        let errados = 0;
        let emBranco = 0;

        let certezaTotal = 0;
        let certezaAcertos = 0;
        let provavelTotal = 0;
        let provavelAcertos = 0;
        let chuteTotal = 0;
        let chuteAcertos = 0;

        simuladoFundamentos100Q.forEach((q) => {
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

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createUserScopedStorage } from '../lib/userScopedStorage';
import type { Concept, ConceptState, ConfidenceLevel, DominioEstado } from '../domain/concepts/types';
import { conceptRepository } from '../domain/concepts/conceptRepository';
import {
  processarRevisaoConceito,
  selecionarFilaRevisaoDiaria,
  criarEstadoInicialConceito,
  type FilaRevisaoDiaria,
  ajustarParaDiaUtil,
} from '../domain/scheduler/unifiedScheduler';
import type { ExerciseFormatId } from '../config/reviewConfig';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuthStore, registerSignOutListener } from './useAuthStore';

export interface EstatisticasDominio {
  totalConceitos: number;
  novos: number;
  emAprendizado: number;
  revisando: number;
  dominados: number;
  criticos: number;
  pendentesHoje: number;
  distribuicaoCaixas: Record<1 | 2 | 3 | 4 | 5, number>;
}

interface ConceptStoreState {
  estados: Record<string, ConceptState>;

  // Métodos de recuperação de conceitos
  getConceitos: () => Record<string, Concept>;
  getConceito: (id: string) => Concept | undefined;

  // Registro de respostas e transição de estados
  registrarRespostaConceito: (params: {
    conceptId: string;
    acertou: boolean;
    confianca?: ConfidenceLevel;
    formatoUsado: ExerciseFormatId;
    respostaDada: string;
    tempoSegundos: number;
    dataAtualIso?: string;
  }) => { avancouCaixa: boolean; diasAteProximaRevisao: number; mensagemPedagogica: string };

  // Fila diária de repetição espaçada
  getFilaRevisaoHoje: (
    submodulosLiberados?: string[],
    limiteDiario?: number,
    itensExcluidosIds?: Set<string>,
    dataHojeIso?: string
  ) => FilaRevisaoDiaria;

  // Itens agendados hoje na fila diária (para prevenção de dupla marcação)
  getItensAgendadosHoje: (dataHojeIso?: string) => Set<string>;

  // Estatísticas de domínio global
  getEstatisticasDominio: () => EstatisticasDominio;

  // Inicialização sob demanda
  inicializarSubmodulos: (submoduloIds: string[], dataAtualIso?: string) => void;

  // Reset para testes e migrações
  reset: () => void;

  // Sincronização Supabase
  sincronizarComSupabase: () => Promise<void>;
}

export const useConceptStore = create<ConceptStoreState>()(
  persist(
    (set, get) => ({
      estados: {},

      getConceitos: () => {
        return conceptRepository.getMapaCompleto();
      },

      getConceito: (id: string) => {
        return conceptRepository.getPorId(id);
      },

      registrarRespostaConceito: ({
        conceptId,
        acertou,
        confianca,
        formatoUsado,
        respostaDada,
        tempoSegundos,
        dataAtualIso,
      }) => {
        const hojeIso = dataAtualIso || new Date().toISOString().split('T')[0];
        const user = useAuthStore.getState().user;
        const userId = user?.id || 'offline_user';

        const estadoAtual =
          get().estados[conceptId] || criarEstadoInicialConceito(conceptId, userId, hojeIso);

        const resultado = processarRevisaoConceito(
          estadoAtual,
          acertou,
          confianca,
          formatoUsado,
          respostaDada,
          tempoSegundos,
          hojeIso
        );

        // Atualiza estado local imutável
        set((state) => ({
          estados: {
            ...state.estados,
            [conceptId]: resultado.novoEstado,
          },
        }));

        // Sincronização em background no Supabase (não-bloqueante)
        if (isSupabaseConfigured && user) {
          (async () => {
            try {
              await supabase.from('concept_state').upsert({
                user_id: user.id,
                concept_id: conceptId,
                caixa_leitner: resultado.novoEstado.caixaLeitner,
                proxima_revisao: resultado.novoEstado.proximaRevisao,
                total_aparicoes: resultado.novoEstado.totalAparicoes,
                total_acertos: resultado.novoEstado.totalAcertos,
                total_erros: resultado.novoEstado.totalErros,
                total_chutes: resultado.novoEstado.totalChutes,
                ultima_confianca: resultado.novoEstado.ultimaConfianca ?? null,
                ultimo_julgamento: resultado.novoEstado.ultimoJulgamento,
                data_ultima_revisao: resultado.novoEstado.dataUltimaRevisao,
                estado_dominio: resultado.novoEstado.estadoDominio,
                historico: resultado.novoEstado.historico,
                atualizado_em: new Date().toISOString(),
              });
            } catch (err) {
              console.warn('[useConceptStore] Falha silenciosa na sincronização com Supabase:', err);
            }
          })();
        }

        return {
          avancouCaixa: resultado.avancouCaixa,
          diasAteProximaRevisao: resultado.diasAteProximaRevisao,
          mensagemPedagogica: resultado.mensagemPedagogica,
        };
      },

      getFilaRevisaoHoje: (submodulosLiberados, limiteDiario, itensExcluidosIds, dataHojeIso) => {
        const conceitos = conceptRepository.getMapaCompleto();
        const hojeIso = dataHojeIso || new Date().toISOString().split('T')[0];
        return selecionarFilaRevisaoDiaria({
          estados: get().estados,
          conceitos,
          dataHojeIso: hojeIso,
          submodulosLiberados,
          limiteDiario,
          itensExcluidosIds,
        });
      },

      getItensAgendadosHoje: (dataHojeIso) => {
        const conceitos = conceptRepository.getMapaCompleto();
        const hojeIso = dataHojeIso || new Date().toISOString().split('T')[0];
        const fila = selecionarFilaRevisaoDiaria({
          estados: get().estados,
          conceitos,
          dataHojeIso: hojeIso,
        });
        return new Set(fila.itensNaFila.map((i) => i.conceito.id));
      },

      getEstatisticasDominio: () => {
        const conceitos = conceptRepository.getMapaCompleto();
        const estados = get().estados;
        const hojeIso = ajustarParaDiaUtil(new Date().toISOString().split('T')[0]);

        const totalConceitos = Object.keys(conceitos).length;
        let novos = 0;
        let emAprendizado = 0;
        let revisando = 0;
        let dominados = 0;
        let criticos = 0;
        let pendentesHoje = 0;

        const distribuicaoCaixas: Record<1 | 2 | 3 | 4 | 5, number> = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };

        for (const [id] of Object.entries(conceitos)) {
          const est = estados[id];
          if (!est || est.estadoDominio === 'novo') {
            novos++;
            distribuicaoCaixas[1]++;
          } else {
            distribuicaoCaixas[est.caixaLeitner]++;
            if (est.estadoDominio === 'em_aprendizado') emAprendizado++;
            else if (est.estadoDominio === 'revisando') revisando++;
            else if (est.estadoDominio === 'dominado') dominados++;
            else if (est.estadoDominio === 'critico') criticos++;

            if (est.proximaRevisao <= hojeIso) {
              pendentesHoje++;
            }
          }
        }

        return {
          totalConceitos,
          novos,
          emAprendizado,
          revisando,
          dominados,
          criticos,
          pendentesHoje,
          distribuicaoCaixas,
        };
      },

      inicializarSubmodulos: (submoduloIds: string[], dataAtualIso?: string) => {
        const userId = useAuthStore.getState().user?.id || 'offline_user';
        const hojeIso = dataAtualIso || new Date().toISOString().split('T')[0];
        const novosEstados: Record<string, ConceptState> = {};

        for (const subId of submoduloIds) {
          const conceitosSub = conceptRepository.getPorSubmodulo(subId);
          for (const c of conceitosSub) {
            if (!get().estados[c.id]) {
              novosEstados[c.id] = criarEstadoInicialConceito(c.id, userId, hojeIso);
            }
          }
        }

        if (Object.keys(novosEstados).length > 0) {
          set((state) => ({
            estados: {
              ...state.estados,
              ...novosEstados,
            },
          }));
        }
      },

      reset: () => {
        set({ estados: {} });
      },

      sincronizarComSupabase: async () => {
        if (!isSupabaseConfigured) return;
        const user = useAuthStore.getState().user;
        if (!user) return;

        try {
          const { data, error } = await supabase
            .from('concept_state')
            .select('*')
            .eq('user_id', user.id);

          if (error) {
            console.error('[useConceptStore] Erro ao sincronizar do Supabase:', error);
            return;
          }

          if (data && data.length > 0) {
            const estadosRemotos: Record<string, ConceptState> = {};
            for (const row of data) {
              estadosRemotos[row.concept_id] = {
                conceptId: row.concept_id,
                userId: row.user_id,
                caixaLeitner: row.caixa_leitner as 1 | 2 | 3 | 4 | 5,
                proximaRevisao: row.proxima_revisao,
                totalAparicoes: row.total_aparicoes,
                totalAcertos: row.total_acertos,
                totalErros: row.total_erros,
                totalChutes: row.total_chutes,
                ultimaConfianca: row.ultima_confianca as ConfidenceLevel | undefined,
                ultimoJulgamento: row.ultimo_julgamento as 'C' | 'E' | undefined,
                dataUltimaRevisao: row.data_ultima_revisao,
                estadoDominio: row.estado_dominio as DominioEstado,
                historico: row.historico || [],
              };
            }

            set((state) => ({
              estados: {
                ...estadosRemotos,
                ...state.estados, // Preserva atualizações locais mais recentes
              },
            }));
          }
        } catch (e) {
          console.warn('[useConceptStore] Erro de rede na sincronização:', e);
        }
      },
    }),
    {
      name: 'hnc_concept_state_v1',
      storage: createJSONStorage(() => createUserScopedStorage('hnc_concept_state_v1')),
    }
  )
);

// F-04: Ao fazer signOut, zera os estados de conceitos em memória e reidrata para o estado anônimo
registerSignOutListener(async () => {
  useConceptStore.getState().reset();
  await useConceptStore.persist?.rehydrate?.();
});

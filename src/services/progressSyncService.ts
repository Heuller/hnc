import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { UserProgress, SimuladoFinalizado, SessaoSimuladoState } from '../domain/schemas/progress.schema';

export const progressSyncService = {
  /**
   * Baixa o progresso salvo na nuvem para o usuário logado
   */
  async baixarProgressoNuvem(userId: string): Promise<Partial<UserProgress> | null> {
    if (!isSupabaseConfigured || !userId) return null;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('[Supabase] Erro ao buscar progresso na nuvem:', error);
        return null;
      }

      let sessoesSimulados: Record<string, SessaoSimuladoState> = data?.sessoes_simulados || {};
      let ultimoSimuladoAcessadoId: string | undefined = data?.ultimo_simulado_acessado_id || undefined;

      // Fallback para metadados de autenticação caso a tabela não tenha a coluna
      if (Object.keys(sessoesSimulados).length === 0) {
        try {
          const { data: authData } = await supabase.auth.getUser();
          const metaSession = authData?.user?.user_metadata?.active_simulado_session;
          if (metaSession?.simuladoId && metaSession?.sessao) {
            sessoesSimulados = {
              [metaSession.simuladoId]: metaSession.sessao,
            };
            ultimoSimuladoAcessadoId = metaSession.simuladoId;
          }
        } catch {
          // Ignora falha em metadados
        }
      }

      if (!data && Object.keys(sessoesSimulados).length === 0) return null;

      return {
        modulosLidosIds: data?.modulos_lidos || [],
        checkpointsRespondidos: data?.checkpoints_respondidos || {},
        secoesVisualizadas: data?.secoes_visualizadas || {},
        leitnerDeck: data?.leitner_deck || {},
        sessoesSimulados,
        ultimoSimuladoAcessadoId,
        constancia: data?.constancia || {
          ultimoAcessoData: new Date().toISOString().split('T')[0],
          diasConsecutivos: 1,
          historicoUltimos7Dias: [],
        },
      };
    } catch (err) {
      console.error('[Supabase] Falha inesperada ao baixar progresso:', err);
      return null;
    }
  },

  /**
   * Salva a sessão de um simulado em andamento no Supabase.
   * Utiliza estratégia em cascata:
   * 1. Colunas especializadas sessoes_simulados na tabela user_progress;
   * 2. Fallback resiliente via user_metadata do Supabase Auth.
   */
  async salvarSessaoSimuladoNuvem(
    userId: string,
    simuladoId: string,
    sessao: SessaoSimuladoState
  ): Promise<boolean> {
    if (!isSupabaseConfigured || !userId) return false;

    try {
      // 1. Tenta buscar sessões existentes para mesclagem na tabela user_progress
      const { data: existing } = await supabase
        .from('user_progress')
        .select('sessoes_simulados')
        .eq('user_id', userId)
        .maybeSingle();

      const existingSessions = (existing?.sessoes_simulados as Record<string, SessaoSimuladoState>) || {};
      const updatedSessions: Record<string, SessaoSimuladoState> = {
        ...existingSessions,
        [simuladoId]: sessao,
      };

      const { error } = await supabase
        .from('user_progress')
        .upsert(
          {
            user_id: userId,
            sessoes_simulados: updatedSessions,
            ultimo_simulado_acessado_id: simuladoId,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id' }
        );

      if (!error) {
        return true;
      }

      // Se o erro for de coluna inexistente no banco remoto (PGRST204 ou similar), aciona fallback
      console.warn('[Supabase] Tentando fallback para salvar sessão via user_metadata...');
      const { error: metaError } = await supabase.auth.updateUser({
        data: {
          active_simulado_session: {
            simuladoId,
            sessao,
            updatedAt: Date.now(),
          },
        },
      });

      return !metaError;
    } catch (err) {
      console.warn('[Supabase] Falha ao persistir sessão do simulado na nuvem:', err);
      return false;
    }
  },

  /**
   * Envia o progresso local atual para persistência na nuvem
   */
  async salvarProgressoNuvem(
    userId: string,
    progress: UserProgress,
    ultimoModuloAcessado?: string
  ): Promise<boolean> {
    if (!isSupabaseConfigured || !userId) return false;

    try {
      const fullPayload: Record<string, any> = {
        user_id: userId,
        versao: progress.versao,
        ultimo_modulo_acessado: ultimoModuloAcessado || '1.1',
        modulos_lidos: progress.modulosLidosIds,
        checkpoints_respondidos: progress.checkpointsRespondidos,
        secoes_visualizadas: progress.secoesVisualizadas,
        leitner_deck: progress.leitnerDeck,
        constancia: progress.constancia,
        sessoes_simulados: progress.sessoesSimulados || {},
        ultimo_simulado_acessado_id: progress.ultimoSimuladoAcessadoId || 'm1-fundamentos',
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('user_progress')
        .upsert(fullPayload, { onConflict: 'user_id' });

      if (error) {
        // Fallback caso as novas colunas ainda não tenham sido migradas no banco remoto
        const safePayload = {
          user_id: userId,
          versao: progress.versao,
          ultimo_modulo_acessado: ultimoModuloAcessado || '1.1',
          modulos_lidos: progress.modulosLidosIds,
          checkpoints_respondidos: progress.checkpointsRespondidos,
          secoes_visualizadas: progress.secoesVisualizadas,
          leitner_deck: progress.leitnerDeck,
          constancia: progress.constancia,
          updated_at: new Date().toISOString(),
        };

        const { error: safeError } = await supabase
          .from('user_progress')
          .upsert(safePayload, { onConflict: 'user_id' });

        if (safeError) {
          console.error('[Supabase] Erro ao salvar progresso seguro na nuvem:', safeError);
          return false;
        }
      }

      return true;
    } catch (err) {
      console.error('[Supabase] Falha ao sincronizar progresso:', err);
      return false;
    }
  },

  /**
   * Registra a tentativa de simulado finalizado no banco de dados
   */
  async registrarSimulado(
    userId: string,
    simulado: SimuladoFinalizado
  ): Promise<boolean> {
    if (!isSupabaseConfigured || !userId) return false;

    try {
      const { error } = await supabase.from('simulado_tentativas').insert({
        user_id: userId,
        simulado_id: simulado.id,
        tempo_gasto_segundos: simulado.tempoGastoSegundos,
        respostas: simulado.respostas,
        acertos: simulado.certos,
        erros: simulado.errados,
        em_branco: simulado.emBranco,
        nota_liquida: simulado.notaLiquida,
        aproveitamento_percentual: simulado.aproveitamentoPercent,
        data_finalizacao: simulado.dataHora,
      });

      if (error) {
        console.error('[Supabase] Erro ao registrar simulado na nuvem:', error);
        return false;
      }

      return true;
    } catch (err) {
      console.error('[Supabase] Falha ao registrar simulado:', err);
      return false;
    }
  },
};

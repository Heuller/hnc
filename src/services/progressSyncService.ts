import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { UserProgress, SimuladoFinalizado } from '../domain/schemas/progress.schema';

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

      if (!data) return null;

      return {
        modulosLidosIds: data.modulos_lidos || [],
        checkpointsRespondidos: data.checkpoints_respondidos || {},
        secoesVisualizadas: data.secoes_visualizadas || {},
        leitnerDeck: data.leitner_deck || {},
        constancia: data.constancia || {
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
   * Envia o progresso local atual para persistência na nuvem
   */
  async salvarProgressoNuvem(
    userId: string,
    progress: UserProgress,
    ultimoModuloAcessado?: string
  ): Promise<boolean> {
    if (!isSupabaseConfigured || !userId) return false;

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert(
          {
            user_id: userId,
            versao: progress.versao,
            ultimo_modulo_acessado: ultimoModuloAcessado || '1.1',
            modulos_lidos: progress.modulosLidosIds,
            checkpoints_respondidos: progress.checkpointsRespondidos,
            secoes_visualizadas: progress.secoesVisualizadas,
            leitner_deck: progress.leitnerDeck,
            constancia: progress.constancia,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id' }
        );

      if (error) {
        console.error('[Supabase] Erro ao salvar progresso na nuvem:', error);
        return false;
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

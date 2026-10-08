import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { ItemAttempt } from '../domain/itemAttempts';

const HNC_ITEM_ATTEMPTS_STORAGE_KEY = 'hnc_item_attempts_v1';
const HNC_ITEM_ATTEMPTS_QUEUE_KEY = 'hnc_item_attempts_offline_queue_v1';

class ItemAttemptsSyncService {
  private channel: BroadcastChannel | null = null;
  private listeners: ((attempt: ItemAttempt) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        this.channel = new BroadcastChannel('hnc_item_attempts_sync');
        this.channel.onmessage = (event) => {
          if (event.data && event.data.type === 'NEW_ITEM_ATTEMPT') {
            const attempt: ItemAttempt = event.data.attempt;
            this.notificarListeners(attempt);
          }
        };
      } catch (e) {
        console.warn('[ItemAttemptsSync] BroadcastChannel não suportado neste navegador:', e);
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.flushFilaOffline();
      });
    }
  }

  /**
   * Assina notificações de novas tentativas recebidas de outras abas ou do servidor
   */
  public onTentativaRecebida(callback: (attempt: ItemAttempt) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  private notificarListeners(attempt: ItemAttempt) {
    for (const listener of this.listeners) {
      try {
        listener(attempt);
      } catch (err) {
        console.error('[ItemAttemptsSync] Erro no listener:', err);
      }
    }
  }

  /**
   * Carrega todas as tentativas de itens salvas localmente
   */
  public carregarLocais(): ItemAttempt[] {
    try {
      const raw = localStorage.getItem(HNC_ITEM_ATTEMPTS_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('[ItemAttemptsSync] Erro ao carregar tentativas locais:', e);
      return [];
    }
  }

  /**
   * Salva as tentativas de itens localmente
   */
  public salvarLocais(attempts: ItemAttempt[]): void {
    try {
      localStorage.setItem(HNC_ITEM_ATTEMPTS_STORAGE_KEY, JSON.stringify(attempts));
    } catch (e) {
      console.error('[ItemAttemptsSync] Erro ao salvar tentativas locais:', e);
    }
  }

  /**
   * Carrega fila offline
   */
  public carregarFilaOffline(): ItemAttempt[] {
    try {
      const raw = localStorage.getItem(HNC_ITEM_ATTEMPTS_QUEUE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  /**
   * Salva fila offline
   */
  public salvarFilaOffline(fila: ItemAttempt[]): void {
    try {
      localStorage.setItem(HNC_ITEM_ATTEMPTS_QUEUE_KEY, JSON.stringify(fila));
    } catch (e) {
      console.error('[ItemAttemptsSync] Erro ao salvar fila offline:', e);
    }
  }

  /**
   * Registra uma tentativa de forma append-only, idempotente e sincronizada (Regra 1.2)
   */
  public async registrarTentativa(
    attempt: ItemAttempt,
    userId?: string
  ): Promise<{ success: boolean; syncedWithServer: boolean }> {
    // 1. Salva localmente de forma append-only com deduplicação por id
    const locais = this.carregarLocais();
    const jaExiste = locais.some((a) => a.id === attempt.id);
    if (!jaExiste) {
      locais.push(attempt);
      this.salvarLocais(locais);
    }

    // 2. Notifica outras abas via BroadcastChannel
    if (this.channel) {
      try {
        this.channel.postMessage({
          type: 'NEW_ITEM_ATTEMPT',
          attempt,
        });
      } catch (e) {
        console.warn('[ItemAttemptsSync] Falha ao enviar via BroadcastChannel:', e);
      }
    }

    // 3. Tenta sincronizar com o Supabase (se online e configurado)
    if (!isSupabaseConfigured || !navigator.onLine) {
      this.enfileirarOffline(attempt);
      return { success: true, syncedWithServer: false };
    }

    try {
      const { error } = await supabase.from('item_attempts').upsert(
        {
          id: attempt.id,
          user_id: userId || attempt.user_id,
          item_id: attempt.item_id,
          submodulo_id: attempt.submodulo_id,
          modulo_id: attempt.modulo_id,
          contexto: attempt.contexto,
          resposta: attempt.resposta,
          certeza: attempt.certeza || null,
          correto: attempt.correto,
          tentativa_n: attempt.tentativa_n,
          criado_em: attempt.criado_em,
        },
        { onConflict: 'id' }
      );

      if (error) {
        console.warn('[ItemAttemptsSync] Falha ao enviar ao Supabase, enfileirando:', error.message);
        this.enfileirarOffline(attempt);
        return { success: true, syncedWithServer: false };
      }

      return { success: true, syncedWithServer: true };
    } catch {
      this.enfileirarOffline(attempt);
      return { success: true, syncedWithServer: false };
    }
  }

  private enfileirarOffline(attempt: ItemAttempt) {
    const fila = this.carregarFilaOffline();
    if (!fila.some((a) => a.id === attempt.id)) {
      fila.push(attempt);
      this.salvarFilaOffline(fila);
    }
  }

  /**
   * Processa a fila offline ao reconectar à internet
   */
  public async flushFilaOffline(userId?: string): Promise<number> {
    if (!isSupabaseConfigured || !navigator.onLine) return 0;
    const fila = this.carregarFilaOffline();
    if (fila.length === 0) return 0;

    let enviados = 0;
    const restantes: ItemAttempt[] = [];

    for (const attempt of fila) {
      try {
        const { error } = await supabase.from('item_attempts').upsert(
          {
            id: attempt.id,
            user_id: userId || attempt.user_id,
            item_id: attempt.item_id,
            submodulo_id: attempt.submodulo_id,
            modulo_id: attempt.modulo_id,
            contexto: attempt.contexto,
            resposta: attempt.resposta,
            certeza: attempt.certeza || null,
            correto: attempt.correto,
            tentativa_n: attempt.tentativa_n,
            criado_em: attempt.criado_em,
          },
          { onConflict: 'id' }
        );

        if (!error) {
          enviados++;
        } else {
          restantes.push(attempt);
        }
      } catch {
        restantes.push(attempt);
      }
    }

    this.salvarFilaOffline(restantes);
    return enviados;
  }
}

export const itemAttemptsSyncService = new ItemAttemptsSyncService();

import { useSyncStatusStore } from '../../store/useSyncStatusStore';
import { useAuthStore } from '../../store/useAuthStore';
import { isSupabaseConfigured } from '../../lib/supabase';

export function SyncStatus() {
  const userId = useAuthStore(s => s.user?.id);
  const sync = useSyncStatusStore();
  const text = !isSupabaseConfigured || !userId ? 'Salvo neste navegador' : sync.userId !== userId ? 'Nuvem: envio não confirmado'
    : sync.status === 'pendente' ? 'Alterações aguardando envio'
    : sync.status === 'enviando' ? 'Enviando resumo à nuvem…'
    : sync.status === 'erro' ? 'Falha no envio; dados locais preservados'
    : sync.status === 'enviado' && sync.lastSuccess ? `Resumo enviado às ${new Date(sync.lastSuccess).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`
    : 'Nuvem: envio não confirmado';
  return <span role="status" className="text-xs text-ink-2">{text}</span>;
}

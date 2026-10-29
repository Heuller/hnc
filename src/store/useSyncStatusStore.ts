import { create } from 'zustand';

type SyncStatus = 'nao_confirmado' | 'pendente' | 'enviando' | 'enviado' | 'erro';
export const useSyncStatusStore = create<{
  userId?: string; status: SyncStatus; lastSuccess?: string; requestId: number;
  queue: (userId: string) => void;
  begin: (userId: string) => number;
  complete: (userId: string, requestId: number, success: boolean) => void;
}>( (set, get) => ({
  status: 'nao_confirmado', requestId: 0,
  queue: userId => set(s => ({ userId, status: 'pendente', requestId: s.requestId + 1, lastSuccess: s.userId === userId ? s.lastSuccess : undefined })),
  begin: userId => {
    const requestId = get().requestId + 1;
    set(s => ({ userId, status: 'enviando', requestId, lastSuccess: s.userId === userId ? s.lastSuccess : undefined }));
    return requestId;
  },
  complete: (userId, requestId, success) => {
    if (get().userId !== userId || get().requestId !== requestId) return;
    set({ status: success ? 'enviado' : 'erro', ...(success ? { lastSuccess: new Date().toISOString() } : {}) });
  },
}));

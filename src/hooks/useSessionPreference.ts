import { useCallback, useSyncExternalStore, type SetStateAction } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const memory = new Map<string, string | number | boolean>();
const eventName = 'hnc-ui-preference-changed';
const subscribe = (notify: () => void) => {
  window.addEventListener(eventName, notify);
  window.addEventListener('storage', notify);
  return () => { window.removeEventListener(eventName, notify); window.removeEventListener('storage', notify); };
};

/** Navegação da sessão, separada por conta e sem copiar estado ao trocar de usuário. */
export function useSessionPreference<T extends string | number | boolean>(name: string, initial: T) {
  const userId = useAuthStore(s => s.user?.id || 'local');
  const key = `hnc_ui:${userId}:${name}`;
  const read = useCallback((): T => {
    try {
      const raw = sessionStorage.getItem(key);
      const saved: unknown = raw === null ? memory.get(key) : JSON.parse(raw);
      if (typeof saved === typeof initial && (typeof saved !== 'number' || Number.isFinite(saved))) return saved as T;
    } catch { /* Sem armazenamento: mantém a preferência apenas nesta execução. */ }
    return (memory.get(key) as T | undefined) ?? initial;
  }, [key, initial]);
  const value = useSyncExternalStore(subscribe, read, () => initial);
  const setValue = useCallback((action: SetStateAction<T>) => {
    const previous = read();
    const next = typeof action === 'function' ? (action as (value: T) => T)(previous) : action;
    if (Object.is(previous, next)) return;
    try { sessionStorage.setItem(key, JSON.stringify(next)); memory.delete(key); } catch { memory.set(key, next); }
    window.dispatchEvent(new Event(eventName));
  }, [key, read]);
  return [value, setValue] as const;
}

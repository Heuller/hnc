import { useEffect } from 'react';
import { useNavigationStore } from '../store/useNavigationStore';
import { useAuthStore } from '../store/useAuthStore';

/** Retoma a posição da sessão depois que a página real substitui o carregamento. */
export function useReadingPosition() {
  const view = useNavigationStore(s => s.activeView);
  const sub = useNavigationStore(s => s.selectedSubmodule);
  const userId = useAuthStore(s => s.user?.id || 'local');
  const key = `hnc_pos:${userId}:${view}${view === 'teoria' ? `:${sub}` : ''}`;
  useEffect(() => {
    let restored = false;
    let lastPosition = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const direct = /[?&](?:item|eixo)=/.test(window.location.hash);
    const main = document.getElementById('main-content');
    const restore = () => {
      if (restored || timer || !main?.querySelector('h1')) return;
      timer = setTimeout(() => {
        if (!direct) {
          let saved = 0;
          try { saved = Number(sessionStorage.getItem(key)) || 0; } catch { /* Sem armazenamento. */ }
          window.scrollTo({ top: Math.max(0, saved), behavior: 'instant' });
        }
        lastPosition = window.scrollY;
        restored = true;
        observer.disconnect();
      }, 100);
    };
    const observer = new MutationObserver(restore);
    if (main) observer.observe(main, { childList: true, subtree: true });
    restore();
    const remember = () => { if (restored) lastPosition = window.scrollY; };
    window.addEventListener('scroll', remember, { passive: true });
    return () => {
      observer.disconnect(); if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', remember);
      if (restored) try { sessionStorage.setItem(key, String(lastPosition)); } catch { /* Sem armazenamento. */ }
    };
  }, [key]);
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Fontes autohospedadas (Sem requisições externas)
import '@fontsource/source-serif-4/400.css';
import '@fontsource/source-serif-4/600.css';
import '@fontsource/source-serif-4/700.css';
import '@fontsource/source-serif-4/400-italic.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';

// Estilos KaTeX para renderização de fórmulas matemáticas
import 'katex/dist/katex.min.css';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Gerenciamento seguro de atualizações do Service Worker (Regras V-02 e F-15)
// Remove o reload automático intempestivo em controllerchange para não interromper simulados nem a primeira visita.
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.dispatchEvent(new CustomEvent('hnc-sw-updated'));
  });

  // Força verificação ativa de atualizações ao abrir e ao retornar ao app no celular
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) reg.update();
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) reg.update();
      });
    }
  });
}

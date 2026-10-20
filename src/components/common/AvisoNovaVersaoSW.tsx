import React, { useState, useEffect } from 'react';
import { RefreshCw, X, ShieldAlert } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';

export const AvisoNovaVersaoSW: React.FC = () => {
  const [temNovaVersao, setTemNovaVersao] = useState(false);
  const [dispensado, setDispensado] = useState(false);

  const simuladoEmAndamento = useProgressStore(
    (s) => Boolean(s.sessaoAtivaSimulado?.emAndamento)
  );

  useEffect(() => {
    const handleUpdate = () => {
      setTemNovaVersao(true);
      setDispensado(false);
    };

    window.addEventListener('hnc-sw-updated', handleUpdate);
    return () => {
      window.removeEventListener('hnc-sw-updated', handleUpdate);
    };
  }, []);

  if (!temNovaVersao || dispensado) {
    return null;
  }

  const handleAtualizar = () => {
    if (simuladoEmAndamento) return;
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <aside
      aria-live="polite"
      role="status"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-sm w-full p-4 rounded-xl bg-surface border border-accent/40 shadow-editorial-lg animate-fadeIn text-ink"
      data-testid="aviso-nova-versao-sw"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-wider">
          <RefreshCw className={`w-4 h-4 ${simuladoEmAndamento ? '' : 'animate-spin'}`} />
          <span>Nova versão disponível</span>
        </div>
        <button
          type="button"
          onClick={() => setDispensado(true)}
          className="text-ink-2 hover:text-ink p-1 rounded-md transition-colors"
          aria-label="Dispensar aviso de atualização"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="mt-2 text-xs text-ink-2 leading-relaxed">
        {simuladoEmAndamento ? (
          <span className="flex items-center gap-1.5 text-alerta-cebraspe">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Atualização pausada para não interromper seu simulado em andamento.</span>
          </span>
        ) : (
          <span>Uma versão atualizada da plataforma está pronta para uso.</span>
        )}
      </p>

      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => setDispensado(true)}
          className="px-3 py-1.5 rounded-lg text-xs font-sans text-ink-2 hover:bg-surface-2 transition-colors"
        >
          Depois
        </button>
        <button
          type="button"
          disabled={simuladoEmAndamento}
          aria-disabled={simuladoEmAndamento}
          onClick={handleAtualizar}
          data-testid="btn-atualizar-sw"
          className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all ${
            simuladoEmAndamento
              ? 'bg-surface-2 text-ink-2/50 border border-border cursor-not-allowed'
              : 'bg-accent text-surface hover:bg-accent/90 active:scale-95 shadow-xs'
          }`}
          title={
            simuladoEmAndamento
              ? 'Conclua ou reinicie o simulado para atualizar'
              : 'Recarregar a plataforma com a nova versão'
          }
        >
          Atualizar agora
        </button>
      </div>
    </aside>
  );
};

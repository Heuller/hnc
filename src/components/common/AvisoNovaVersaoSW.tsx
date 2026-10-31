import React, { useState, useEffect } from 'react';
import { RefreshCw, X, ShieldAlert } from 'lucide-react';
import { useNavigationStore } from '../../store/useNavigationStore';
import { useProgressStore } from '../../store/useProgressStore';

export const AvisoNovaVersaoSW: React.FC = () => {
  const [temNovaVersao, setTemNovaVersao] = useState(false);
  const escritaAtiva = useNavigationStore(s => s.activeView === 'discursiva');
  const [dispensado, setDispensado] = useState(false);

  const simuladoEmAndamento = useProgressStore(
    (s) => Boolean(s.sessaoAtivaSimulado?.emAndamento)
  );

  useEffect(() => {
    const handleUpdate = () => {
      setTemNovaVersao(true);

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
    if (simuladoEmAndamento || escritaAtiva) return;
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <div
      aria-live="polite"
      role="status"
      className="mx-auto my-3 w-[calc(100%-2rem)] max-w-7xl py-2 pl-4 pr-2 sm:py-3 sm:pl-5 sm:pr-3 rounded-2xl bg-surface border border-border shadow-editorial-sm text-ink"
      data-testid="aviso-nova-versao-sw"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-wider">
          <RefreshCw className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Nova versão disponível</span>
        </div>
        <button
          type="button"
          onClick={() => setDispensado(true)}
          className="min-h-[44px] min-w-[44px] -my-1 inline-flex items-center justify-center text-ink-2 hover:text-ink hover:bg-surface-3 p-1 rounded-lg transition-colors"
          aria-label="Dispensar aviso de atualização"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      <p className="-mt-1.5 pr-2 text-xs text-ink-2 leading-relaxed">
        {simuladoEmAndamento || escritaAtiva ? (
          <span className="flex items-center gap-1.5 text-alerta-cebraspe">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{escritaAtiva ? 'Atualização pausada enquanto você escreve. Saia da oficina após salvar o rascunho para atualizar.' : 'Atualização pausada para não interromper seu simulado em andamento.'}</span>
          </span>
        ) : (
          <span>Uma versão atualizada da plataforma está pronta para uso.</span>
        )}
      </p>

      <div className="mt-1 pr-1 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => setDispensado(true)}
          className="min-h-[44px] px-3 py-1.5 rounded-lg text-xs font-sans text-ink-2 hover:bg-surface-2 transition-colors"
        >
          Depois
        </button>
        <button
          type="button"
          disabled={simuladoEmAndamento || escritaAtiva}
          aria-disabled={simuladoEmAndamento || escritaAtiva}
          onClick={handleAtualizar}
          data-testid="btn-atualizar-sw"
          className={`min-h-[44px] px-3.5 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all ${
            simuladoEmAndamento || escritaAtiva
              ? 'bg-surface-2 text-ink-2/50 border border-border cursor-not-allowed'
              : 'bg-accent text-surface hover:bg-accent/90 active:scale-95 shadow-xs'
          }`}
          title={
            simuladoEmAndamento || escritaAtiva
              ? 'Conclua ou reinicie o simulado para atualizar'
              : 'Recarregar a plataforma com a nova versão'
          }
        >
          Atualizar agora
        </button>
      </div>
    </div>
  );
};

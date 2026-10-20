import React, { useState } from 'react';
import { AlertTriangle, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

export interface ErrorStateProps {
  titulo?: string;
  descricao?: string;
  detalhes?: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

/**
 * Componente padronizado para exibição de erros e falhas temporárias
 * Atende à Diretriz U6.6 do Plano v3:
 * - Mensagens claras e amigáveis em português
 * - Botão de nova tentativa ("Tentar novamente") com alvo tátil >= 44px
 * - Detalhes técnicos recolhíveis para diagnóstico sem assustar o candidato
 */
export const ErrorState: React.FC<ErrorStateProps> = ({
  titulo = 'Não foi possível carregar este conteúdo',
  descricao = 'Ocorreu uma falha temporária ao processar esta informação. Seus dados e progresso permanecem seguros localmente.',
  detalhes,
  onRetry,
  retryLabel = 'Tentar novamente',
  className = '',
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      role="alert"
      className={`p-6 sm:p-8 rounded-2xl border border-err/30 bg-err-soft/30 text-center max-w-xl mx-auto space-y-4 shadow-xs ${className}`}
    >
      <div className="w-12 h-12 rounded-2xl bg-err/15 border border-err/25 flex items-center justify-center text-err mx-auto shadow-2xs">
        <AlertTriangle className="w-6 h-6" />
      </div>

      <div className="space-y-1.5">
        <h3 className="text-base sm:text-lg font-serif font-bold text-ink">
          {titulo}
        </h3>
        <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
          {descricao}
        </p>
      </div>

      {detalhes && (
        <div className="text-left pt-1">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className="text-xs font-mono text-ink-2 hover:text-ink flex items-center gap-1 mx-auto cursor-pointer"
          >
            <span>{showDetails ? 'Ocultar detalhes técnicos' : 'Ver detalhes técnicos'}</span>
            {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showDetails && (
            <pre className="mt-2 p-3 rounded-xl bg-surface border border-border text-xs font-mono text-ink-2 overflow-x-auto max-h-40 whitespace-pre-wrap break-all">
              {detalhes}
            </pre>
          )}
        </div>
      )}

      {onRetry && (
        <div className="pt-2">
          <button
            type="button"
            onClick={onRetry}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-accent text-accent-text font-sans font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 hover:opacity-95 active:scale-98 transition-all shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{retryLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
};

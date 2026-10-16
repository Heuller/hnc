import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, RotateCcw, BookOpen, Building2 } from 'lucide-react';
import type { VerbeteUnificado } from '../../domain/glossario/types';
import { useGlossarioStore } from '../../store/useGlossarioStore';
import { useNavigationStore } from '../../store/useNavigationStore';

interface GavetaCurtaDefinicaoProps {
  verbete: VerbeteUnificado | null;
  isOpen: boolean;
  onClose: () => void;
  onVerCompleto?: (verbete: VerbeteUnificado) => void;
}

export const GavetaCurtaDefinicao: React.FC<GavetaCurtaDefinicaoProps> = ({
  verbete,
  isOpen,
  onClose,
  onVerCompleto,
}) => {
  const { isTermoSilenciado, marcarJaSei, desmarcarJaSei } = useGlossarioStore();
  const { setActiveView } = useNavigationStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!verbete) return null;

  const jaSei = isTermoSilenciado(verbete.id);

  const handleIrParaGlossario = () => {
    if (onVerCompleto) {
      onVerCompleto(verbete);
    } else {
      setActiveView('glossario');
      onClose();
    }
  };

  const handleToggleJaSei = () => {
    if (jaSei) {
      desmarcarJaSei(verbete.id);
    } else {
      marcarJaSei(verbete.id);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-2xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Gaveta compacta inferior */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gaveta-curta-titulo"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 md:max-w-xl md:mx-auto md:bottom-4 md:rounded-2xl bg-surface border border-border shadow-2xl p-4 sm:p-5 text-ink flex flex-col gap-3"
          >
            {/* Header com título e botão fechar */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border ${
                      verbete.acervo === 'tecnico'
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                        : 'bg-accent/10 text-accent border-accent/30'
                    }`}
                  >
                    {verbete.acervo === 'tecnico' ? 'Edital Cargo 5' : 'Dicionário'}
                  </span>
                  {jaSei && (
                    <span className="text-[10px] font-mono text-ink-2 bg-surface-2 px-1.5 py-0.2 rounded border border-border">
                      Já sei
                    </span>
                  )}
                </div>

                <h3
                  id="gaveta-curta-titulo"
                  className="font-serif text-lg font-bold text-ink tracking-tight truncate"
                >
                  {verbete.termo}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer shrink-0"
                aria-label="Fechar prévia de definição"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Definição curta em 1 a 2 linhas */}
            <p className="font-serif text-sm text-ink leading-relaxed">
              {verbete.definicao}
            </p>

            {/* Exemplo de biblioteca se houver */}
            {verbete.exemploBiblioteca && (
              <div className="p-2.5 rounded-xl bg-surface-2 border border-border/80 text-xs text-ink flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="line-clamp-2">
                  <strong>Na biblioteca:</strong> {verbete.exemploBiblioteca}
                </span>
              </div>
            )}

            {/* Ações da gaveta curta */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/70 mt-1">
              <button
                type="button"
                onClick={handleToggleJaSei}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-border hover:bg-surface-2 transition-colors cursor-pointer flex items-center gap-1.5 min-h-[38px]"
              >
                {jaSei ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 text-ink-2" />
                    <span>Mostrar de novo</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Já sei (não destacar)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleIrParaGlossario}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-accent text-accent-contrast shadow-2xs hover:opacity-95 transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ver completo no Glossário</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

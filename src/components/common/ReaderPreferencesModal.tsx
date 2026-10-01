import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, X, RotateCcw } from 'lucide-react';
import {
  useReaderPreferencesStore,
  type ReaderFontSize,
  type ReaderColumnWidth,
} from '../../store/useReaderPreferencesStore';

interface ReaderPreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReaderPreferencesModal: React.FC<ReaderPreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    fontSize,
    columnWidth,
    fontFamily,
    setFontSize,
    setColumnWidth,
    setFontFamily,
    resetPreferences,
  } = useReaderPreferencesStore();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-surface rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-surface-2/40">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-bold text-ink m-0">Preferências de Leitura</h2>
            </div>
            <button
              onClick={onClose}
              className="text-ink-2 hover:text-ink p-1 rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Opções */}
          <div className="p-5 space-y-5 text-xs">
            {/* Família Tipográfica */}
            <div className="space-y-2">
              <span className="font-bold text-ink uppercase tracking-wider text-[11px] block">
                Tipografia do Texto Doutrinário
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFontFamily('serif')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    fontFamily === 'serif'
                      ? 'bg-accent/10 border-accent text-accent font-bold ring-2 ring-accent/30'
                      : 'bg-surface-2/60 border-border text-ink hover:border-accent/40'
                  }`}
                >
                  <span className="font-serif text-base block mb-0.5">Aa Serifada</span>
                  <span className="text-[10px] text-ink-2 font-mono">Source Serif 4 (Padrão)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFontFamily('sans')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    fontFamily === 'sans'
                      ? 'bg-accent/10 border-accent text-accent font-bold ring-2 ring-accent/30'
                      : 'bg-surface-2/60 border-border text-ink hover:border-accent/40'
                  }`}
                >
                  <span className="font-sans text-base block mb-0.5">Aa Sem Serifa</span>
                  <span className="text-[10px] text-ink-2 font-mono">Inter (Técnica)</span>
                </button>
              </div>
            </div>

            {/* Tamanho da Fonte */}
            <div className="space-y-2">
              <span className="font-bold text-ink uppercase tracking-wider text-[11px] block">
                Tamanho da Fonte
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'sm', label: 'Pequena', size: '15px' },
                    { id: 'base', label: 'Padrão', size: '17px' },
                    { id: 'lg', label: 'Grande', size: '19px' },
                  ] as { id: ReaderFontSize; label: string; size: string }[]
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFontSize(opt.id)}
                    className={`py-2 px-3 rounded-xl border text-center cursor-pointer transition-all ${
                      fontSize === opt.id
                        ? 'bg-accent/10 border-accent text-accent font-bold'
                        : 'bg-surface-2/60 border-border text-ink hover:border-accent/40'
                    }`}
                  >
                    <span className="block font-bold">{opt.label}</span>
                    <span className="text-[10px] text-ink-2 font-mono">{opt.size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Largura da Coluna */}
            <div className="space-y-2">
              <span className="font-bold text-ink uppercase tracking-wider text-[11px] block">
                Largura da Área de Leitura
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'focus', label: 'Focada', width: '65ch' },
                    { id: 'default', label: 'Padrão', width: '75ch' },
                    { id: 'wide', label: 'Ampla', width: '90ch' },
                  ] as { id: ReaderColumnWidth; label: string; width: string }[]
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setColumnWidth(opt.id)}
                    className={`py-2 px-3 rounded-xl border text-center cursor-pointer transition-all ${
                      columnWidth === opt.id
                        ? 'bg-accent/10 border-accent text-accent font-bold'
                        : 'bg-surface-2/60 border-border text-ink hover:border-accent/40'
                    }`}
                  >
                    <span className="block font-bold">{opt.label}</span>
                    <span className="text-[10px] text-ink-2 font-mono">{opt.width}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer com Reset */}
          <div className="px-5 py-3 bg-surface-2/40 border-t border-border flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={resetPreferences}
              className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrões</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="py-1.5 px-4 rounded-lg bg-primary text-primary-text font-bold cursor-pointer hover:opacity-95"
            >
              Concluído
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

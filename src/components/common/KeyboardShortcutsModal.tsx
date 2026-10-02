import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Keyboard, X } from 'lucide-react';
import { Kbd } from './Kbd';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    {
      categoria: 'Navegação Global',
      itens: [
        { keys: ['Ctrl', 'K'], desc: 'Abrir Busca Global Instantânea' },
        { keys: ['Alt', 'D'], desc: 'Abrir Dicionário e Glossário Cebraspe' },
        { keys: ['/'], desc: 'Atalho alternativo para Busca Global' },
        { keys: ['?'], desc: 'Abrir Guia de Atalhos de Teclado' },
        { keys: ['Esc'], desc: 'Fechar modais, gavetas e buscas' },
      ],
    },
    {
      categoria: 'Acesso Rápido às Áreas',
      itens: [
        { keys: ['Alt', '1'], desc: 'Ir para o Painel Geral' },
        { keys: ['Alt', '2'], desc: 'Ir para a Teoria Densa' },
        { keys: ['Alt', '3'], desc: 'Ir para o Simulado 100Q' },
        { keys: ['Alt', '4'], desc: 'Ir para o Radar Cebraspe' },
        { keys: ['Alt', '5'], desc: 'Ir para Progresso e Métricas' },
      ],
    },
    {
      categoria: 'Estudo da Teoria e Checkpoints',
      itens: [
        { keys: ['['], desc: 'Submódulo anterior na Teoria' },
        { keys: [']'], desc: 'Próximo submódulo na Teoria' },
        { keys: ['C'], desc: 'Julgar item como CERTO (em checkpoints e simulado)' },
        { keys: ['E'], desc: 'Julgar item como ERRADO (em checkpoints e simulado)' },
      ],
    },
  ];

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
          className="relative w-full max-w-lg bg-surface rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-surface-2/40">
            <div className="flex items-center gap-2">
              <Keyboard className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-bold text-ink m-0">Atalhos de Teclado</h2>
            </div>
            <button
              onClick={onClose}
              className="text-ink-2 hover:text-ink p-1 rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-5 space-y-5 overflow-y-auto max-h-[70vh]">
            {shortcuts.map((cat) => (
              <div key={cat.categoria} className="space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-accent block">
                  {cat.categoria}
                </span>
                <div className="space-y-2">
                  {cat.itens.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1 border-b border-border/40 last:border-none"
                    >
                      <span className="text-ink font-serif">{item.desc}</span>
                      <div className="flex items-center gap-1">
                        {item.keys.map((k) => (
                          <Kbd key={k}>{k}</Kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-surface-2/40 border-t border-border text-[11px] text-ink-2 font-serif text-center">
            Pressione <Kbd>ESC</Kbd> para fechar este guia
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

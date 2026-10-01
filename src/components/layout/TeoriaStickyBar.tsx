import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, CheckCircle2, List } from 'lucide-react';
import { getModuleTheme } from '../../domain/moduleThemes';
import type { ModuloFilho } from '../../domain/schemas/modulo.schema';

interface TeoriaStickyBarProps {
  macroId: string;
  submodulo: ModuloFilho;
  scrollProgress: number;
}

interface SectionItem {
  id: string;
  numero: string;
  titulo: string;
}

export const TeoriaStickyBar: React.FC<TeoriaStickyBarProps> = ({
  macroId,
  submodulo,
  scrollProgress,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-autores');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const theme = getModuleTheme(macroId);

  const sections: SectionItem[] = useMemo(
    () => [
      { id: 'sec-autores', numero: '1', titulo: 'Autores Canônicos' },
      { id: 'sec-alertas', numero: '2', titulo: 'Alertas Cebraspe' },
      ...(submodulo.quadroComparativo
        ? [{ id: 'sec-quadro', numero: '3', titulo: 'Matriz Comparativa' }]
        : []),
      { id: 'sec-teoria', numero: '4', titulo: 'Teoria Detalhada' },
      { id: 'sec-checkpoints', numero: '5', titulo: 'Checkpoints de Fixação' },
      { id: 'sec-mnemonicos', numero: '6', titulo: 'Resumo e Mnemônicos' },
    ],
    [submodulo.quadroComparativo]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [submodulo.id, sections]);

  const activeSection =
    sections.find((s) => s.id === activeSectionId) || sections[0];

  const handleJumpToSection = (sectionId: string) => {
    setIsTocOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Barra de contexto fixa no mobile (md:hidden) */}
      <div className="sticky top-14 z-30 md:hidden bg-surface/95 backdrop-blur-md border-b border-border px-3 py-2 flex items-center justify-between shadow-2xs">
        {/* Identificador Módulo · Submódulo na cor do módulo */}
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="px-2 py-0.5 rounded text-[11px] font-mono font-bold shrink-0 shadow-2xs"
            style={{
              backgroundColor: theme.solidVar,
              color: theme.textVar,
            }}
          >
            {theme.codigo} · {submodulo.numero}
          </span>

          {/* Botão de Sumário Rápido com Seção Ativa */}
          <button
            type="button"
            onClick={() => setIsTocOpen(true)}
            className="flex items-center gap-1 text-xs font-sans text-ink font-semibold truncate hover:text-accent cursor-pointer min-h-[36px] py-1 px-1.5 rounded hover:bg-surface-2 transition-colors"
            aria-label="Abrir sumário de seções"
          >
            <span className="truncate">{activeSection.titulo}</span>
            <ChevronDown className="w-3.5 h-3.5 text-ink-2 shrink-0" />
          </button>
        </div>

        {/* Indicador de Leitura */}
        <span className="font-mono text-[10px] text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border shrink-0 ml-2">
          {scrollProgress}%
        </span>
      </div>

      {/* Painel Deslizante de Sumário (Bottom Sheet Mobile) */}
      <AnimatePresence>
        {isTocOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center md:hidden" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTocOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Painel Inferior Opaco */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-h-[75dvh] bg-surface rounded-t-2xl border-t border-border shadow-2xl flex flex-col overflow-hidden z-10"
              style={{
                backgroundColor: 'var(--surface)',
                paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)',
              }}
            >
              {/* Alça tátil de arraste */}
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto my-2.5 shrink-0" />

              {/* Cabeçalho do Sumário */}
              <div className="px-4 py-2 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <List className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-bold text-ink">Sumário deste Submódulo</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTocOpen(false)}
                  className="p-1 rounded-lg text-ink-2 hover:text-ink hover:bg-surface-2 cursor-pointer"
                  aria-label="Fechar sumário"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Lista de Seções para Salto Direto */}
              <div className="p-3 space-y-1.5 overflow-y-auto max-h-[50dvh]">
                {sections.map((sec) => {
                  const isCurrent = sec.id === activeSectionId;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => handleJumpToSection(sec.id)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-sans flex items-center justify-between transition-colors min-h-[44px] cursor-pointer ${
                        isCurrent
                          ? 'font-bold shadow-2xs'
                          : 'text-ink-2 hover:text-ink hover:bg-surface-2'
                      }`}
                      style={{
                        backgroundColor: isCurrent ? theme.softVar : undefined,
                        borderLeft: isCurrent ? `3px solid ${theme.solidVar}` : '3px solid transparent',
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold"
                          style={{
                            backgroundColor: isCurrent ? theme.solidVar : 'var(--surface-2)',
                            color: isCurrent ? theme.textVar : 'var(--ink-2)',
                          }}
                        >
                          {sec.numero}
                        </span>
                        <span className="text-ink">{sec.titulo}</span>
                      </div>
                      {isCurrent && (
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: theme.solidVar }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

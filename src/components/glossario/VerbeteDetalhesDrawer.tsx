import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Book,
  Building2,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import type { VerbeteUnificado } from '../../domain/glossario/types';
import { useGlossarioStore } from '../../store/useGlossarioStore';
import { useNavigationStore } from '../../store/useNavigationStore';

interface VerbeteDetalhesDrawerProps {
  verbete: VerbeteUnificado | null;
  isOpen: boolean;
  onClose: () => void;
  onSelecionarTermoRemissivo?: (termo: string) => void;
}

export const VerbeteDetalhesDrawer: React.FC<VerbeteDetalhesDrawerProps> = ({
  verbete,
  isOpen,
  onClose,
  onSelecionarTermoRemissivo,
}) => {
  const { isTermoSilenciado, alternarJaSei, isTermoSuspeito, alternarSuspeito } =
    useGlossarioStore();
  const { setSelectedSubmodule, setActiveView } = useNavigationStore();

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
  const suspeito = isTermoSuspeito(verbete.id);

  const handleNavegarSubmodulo = (subId: string, subNumero: string) => {
    setSelectedSubmodule(subNumero || subId);
    setActiveView('teoria');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop escurecido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Gaveta lateral / inferior responsiva */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="verbete-drawer-title"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90dvh] sm:max-h-[85dvh] md:max-w-2xl md:mx-auto md:bottom-6 md:rounded-2xl bg-surface border border-border shadow-2xl flex flex-col text-ink overflow-hidden"
          >
            {/* Header com drag handle e botão fechar */}
            <div className="p-4 border-b border-border/80 flex items-start justify-between gap-3 bg-surface-2/40 shrink-0">
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                      verbete.acervo === 'tecnico'
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                        : 'bg-accent/10 text-accent border-accent/30'
                    }`}
                  >
                    {verbete.acervo === 'tecnico'
                      ? 'Edital Cargo 5 (TI/IA)'
                      : 'Dicionário Cunha & Cavalcanti (2008)'}
                  </span>

                  {jaSei && (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-surface-2 border border-border text-ink-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      Já Sei
                    </span>
                  )}

                  {suspeito && (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-rose-500" />
                      Marcado Suspeito
                    </span>
                  )}
                </div>

                <h2
                  id="verbete-drawer-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-ink tracking-tight break-words"
                >
                  {verbete.termo}
                </h2>

                {verbete.variantes && verbete.variantes.length > 0 && (
                  <p className="text-xs text-ink-2 font-sans italic">
                    Sinônimos / Expansão: {verbete.variantes.join(' • ')}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-ink-2 hover:text-ink hover:bg-surface-2 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer shrink-0"
                aria-label="Fechar detalhes do verbete"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Corpo rolável com o conteúdo editorial */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm font-sans leading-relaxed">
              {/* Definição */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-2">
                  Definição
                </h3>
                <div className="p-4 rounded-xl bg-surface-2/60 border border-border font-serif text-base text-ink leading-relaxed whitespace-pre-line">
                  {verbete.definicaoCompleta || verbete.definicao}
                </div>
              </div>

              {/* Exemplo Prático em Biblioteca / TI Legislativa */}
              {verbete.exemploBiblioteca && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    Aplicação Prática em Biblioteca e Legislação
                  </h3>
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-ink text-sm">
                    {verbete.exemploBiblioteca}
                  </div>
                </div>
              )}

              {/* Remissivas / Termos Relacionados */}
              {verbete.remissivas && verbete.remissivas.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    Termos Remissivos / Ver Também
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {verbete.remissivas.map((rem, idx) => (
                      <button
                        key={`${rem}-${idx}`}
                        type="button"
                        onClick={() => onSelecionarTermoRemissivo?.(rem)}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface-2 hover:bg-surface border border-border hover:border-accent text-ink transition-colors cursor-pointer min-h-[36px] flex items-center gap-1"
                      >
                        <span>{rem}</span>
                        <ExternalLink className="w-3 h-3 text-ink-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Submódulos onde aparece no curso */}
              {verbete.submodulosOndeAparece && verbete.submodulosOndeAparece.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1.5">
                    <Book className="w-4 h-4 text-accent" />
                    Onde Aparece no Curso
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {verbete.submodulosOndeAparece.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleNavegarSubmodulo(sub.id, sub.numero)}
                        className="p-3 rounded-xl border border-border hover:border-accent bg-surface-2/40 hover:bg-surface text-left transition-all cursor-pointer flex items-center justify-between group min-h-[44px]"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[11px] font-mono font-bold text-accent">
                            Submódulo {sub.numero}
                          </span>
                          <p className="text-xs font-medium text-ink group-hover:text-accent line-clamp-1">
                            {sub.titulo}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-ink-2 group-hover:text-accent shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Fonte Bibliográfica */}
              <div className="p-3.5 rounded-xl border border-border/80 bg-surface-2/30 space-y-1 text-xs text-ink-2">
                <span className="font-mono font-bold uppercase text-[10px] text-ink">
                  Fonte Bibliográfica
                </span>
                <p className="text-ink">
                  <strong className="font-medium">{verbete.fonte.obra}</strong>
                  {verbete.fonte.autores && ` — ${verbete.fonte.autores}`}
                  {verbete.fonte.editora && `, ${verbete.fonte.editora}`}
                  {verbete.fonte.ano && ` (${verbete.fonte.ano})`}
                  {verbete.fonte.pagina && `, p. ${verbete.fonte.pagina}`}.
                </p>
              </div>
            </div>

            {/* Barra de ações inferior */}
            <div className="p-4 border-t border-border bg-surface-2/60 shrink-0 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => alternarJaSei(verbete.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] flex items-center gap-1.5 cursor-pointer border ${
                    jaSei
                      ? 'bg-surface-2 text-ink-2 border-border hover:border-ink-2'
                      : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25'
                  }`}
                >
                  {jaSei ? (
                    <>
                      <RotateCcw className="w-4 h-4 text-ink-2" />
                      <span>Mostrar Definições de Novo</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Já Sei (Recolher Destaques)</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => alternarSuspeito(verbete.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] flex items-center gap-1.5 cursor-pointer border ${
                    suspeito
                      ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/40 hover:bg-rose-500/30'
                      : 'bg-surface-2 text-ink-2 border-border hover:border-rose-400 hover:text-rose-500'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>{suspeito ? 'Desmarcar Suspeito' : 'Marcar como Suspeito'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-primary hover:opacity-95 text-primary-text min-h-[44px] cursor-pointer ml-auto shadow-2xs"
              >
                Concluído
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';
import { useNavigationStore } from '../../store/useNavigationStore';
import type { ContextoTentativa, ItemAttempt } from '../../domain/itemAttempts';
import { Badge } from './Badge';

export interface ItemCEData {
  id: string;
  numero?: number;
  submoduloId?: string; // ex: '1.1'
  moduloId?: string; // ex: 'm1'
  enunciado: string;
  gabarito: 'C' | 'E';
  justificativa: string;
  versaoCorreta?: string;
  fonte?: string;
  armadilha?: string;
  secaoRef?: string;
}

export interface ItemCEProps {
  item: ItemCEData;
  contexto: ContextoTentativa;
  contadorTexto?: string; // Ex: "Item 2 de 3"
  onAnswered?: (attempt: ItemAttempt) => void;
  autoFocus?: boolean;
}

export const ItemCE: React.FC<ItemCEProps> = ({
  item,
  contexto,
  contadorTexto,
  onAnswered,
}) => {
  const {
    obterPrimeiraTentativa,
    obterUltimaTentativa,
    adicionarItemAttempt,
  } = useProgressStore();

  const { setSelectedSubmodule, setActiveView } = useNavigationStore();

  const primeiraTentativa = obterPrimeiraTentativa(item.id);
  const ultimaTentativa = obterUltimaTentativa(item.id);

  // Modo prática (quando o usuário clica em "Refazer")
  const [modoPraticaAtivo, setModoPraticaAtivo] = useState(false);
  const [respostaPratica, setRespostaPratica] = useState<'C' | 'E' | 'BRANCO' | null>(null);

  const attemptAtual = modoPraticaAtivo
    ? respostaPratica
      ? {
          resposta: respostaPratica,
          correto: respostaPratica === item.gabarito,
          tentativa_n: (ultimaTentativa?.tentativa_n || 1) + 1,
        }
      : null
    : ultimaTentativa || primeiraTentativa;

  const isRespondido = attemptAtual !== null && attemptAtual !== undefined;
  const respostaDada = attemptAtual?.resposta;
  const isCorreto = attemptAtual?.correto;

  const handleJulgamento = useCallback(
    async (resposta: 'C' | 'E' | 'BRANCO') => {
      if (isRespondido && !modoPraticaAtivo) return;

      const subId = item.submoduloId || '1.1';
      const modId = item.moduloId || 'm1';

      const novaAttempt = await adicionarItemAttempt({
        itemId: item.id,
        submoduloId: subId,
        moduloId: modId,
        contexto,
        resposta,
        gabarito: item.gabarito,
      });

      if (modoPraticaAtivo) {
        setRespostaPratica(resposta);
      }

      if (onAnswered) {
        onAnswered(novaAttempt);
      }
    },
    [
      isRespondido,
      modoPraticaAtivo,
      item.submoduloId,
      item.moduloId,
      item.id,
      item.gabarito,
      adicionarItemAttempt,
      contexto,
      onAnswered,
    ]
  );

  // Atalhos de teclado (C, E, B) desativados se focado em campos de texto (WCAG 2.1.4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        handleJulgamento('C');
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        handleJulgamento('E');
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        handleJulgamento('BRANCO');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleJulgamento]);

  const handleIniciarPratica = () => {
    setModoPraticaAtivo(true);
    setRespostaPratica(null);
  };

  const handleReverNaTeoria = () => {
    if (item.submoduloId) {
      setSelectedSubmodule(item.submoduloId);
      setActiveView('teoria');
      if (item.secaoRef) {
        setTimeout(() => {
          const el = document.getElementById(item.secaoRef!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <article
      className="p-4 sm:p-5 rounded-xl border border-border bg-surface shadow-editorial-xs space-y-4 transition-all"
      aria-labelledby={`item-titulo-${item.id}`}
    >
      {/* Barra Superior do Item: Contador e Badges de Estado */}
      <div className="flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          {contadorTexto ? (
            <span
              id={`item-titulo-${item.id}`}
              className="font-mono text-xs font-bold text-ink-2"
            >
              {contadorTexto}
            </span>
          ) : (
            <span
              id={`item-titulo-${item.id}`}
              className="font-mono text-xs font-bold text-accent"
            >
              Item {item.numero ? `· ${item.numero}` : ''}
            </span>
          )}
          {item.submoduloId && (
            <span className="text-[11px] font-mono text-ink-2 bg-surface-2 px-1.5 py-0.5 rounded border border-border">
              {item.submoduloId}
            </span>
          )}
        </div>

        {isRespondido && (
          <div className="flex items-center gap-2">
            {primeiraTentativa && (
              <Badge
                variant={primeiraTentativa.correto ? 'certo' : 'errado'}
                className="text-[10px] font-mono"
              >
                1ª tentativa: {primeiraTentativa.correto ? '✓ Acerto' : '✗ Erro'}
              </Badge>
            )}
            {modoPraticaAtivo && (
              <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                Prática (Tentativa {attemptAtual?.tentativa_n})
              </span>
            )}
            {!modoPraticaAtivo && (
              <button
                type="button"
                onClick={handleIniciarPratica}
                className="text-[11px] font-semibold text-ink-2 hover:text-ink flex items-center gap-1 cursor-pointer transition-colors"
                title="Refazer como prática (não altera a nota do portão)"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Praticar</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Enunciado do Item (Tipografia Ampla e Legível) */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {item.enunciado}
      </p>

      {/* Botões de Julgamento: CERTO / ERRADO / EM BRANCO com Dicas de Atalho */}
      <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 pt-1">
        <button
          type="button"
          onClick={() => handleJulgamento('C')}
          disabled={isRespondido && !modoPraticaAtivo}
          className={`min-h-[44px] px-4 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            respostaDada === 'C'
              ? isCorreto
                ? 'bg-ok text-white shadow-xs'
                : 'bg-err text-white shadow-xs'
              : isRespondido && item.gabarito === 'C'
              ? 'bg-ok-soft text-ok border border-ok'
              : 'bg-surface-2 text-ink border border-border hover:bg-surface hover:border-accent'
          } ${isRespondido && !modoPraticaAtivo ? 'cursor-default' : 'active:scale-98'}`}
          aria-label="Julgar assertiva como Certo (Atalho C)"
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>CERTO</span>
          <span className="hidden sm:inline-block px-1 py-0.2 rounded text-[10px] font-mono bg-black/10 dark:bg-white/10 ml-0.5">
            C
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleJulgamento('E')}
          disabled={isRespondido && !modoPraticaAtivo}
          className={`min-h-[44px] px-4 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            respostaDada === 'E'
              ? isCorreto
                ? 'bg-ok text-white shadow-xs'
                : 'bg-err text-white shadow-xs'
              : isRespondido && item.gabarito === 'E'
              ? 'bg-ok-soft text-ok border border-ok'
              : 'bg-surface-2 text-ink border border-border hover:bg-surface hover:border-accent'
          } ${isRespondido && !modoPraticaAtivo ? 'cursor-default' : 'active:scale-98'}`}
          aria-label="Julgar assertiva como Errado (Atalho E)"
        >
          <XCircle className="w-4 h-4 shrink-0" />
          <span>ERRADO</span>
          <span className="hidden sm:inline-block px-1 py-0.2 rounded text-[10px] font-mono bg-black/10 dark:bg-white/10 ml-0.5">
            E
          </span>
        </button>

        {contexto === 'simulado' && (
          <button
            type="button"
            onClick={() => handleJulgamento('BRANCO')}
            disabled={isRespondido && !modoPraticaAtivo}
            className={`min-h-[44px] px-3 py-2 rounded-lg font-sans text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
              respostaDada === 'BRANCO'
                ? 'bg-ink text-surface shadow-xs'
                : 'bg-surface-2 text-ink-2 border border-border hover:bg-surface'
            } ${isRespondido && !modoPraticaAtivo ? 'cursor-default' : 'active:scale-98'}`}
            title="Deixar item em branco (0 pt, não anula acerto)"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Em Branco</span>
            <span className="hidden sm:inline-block px-1 py-0.2 rounded text-[10px] font-mono bg-black/10 dark:bg-white/10 ml-0.5">
              B
            </span>
          </button>
        )}
      </div>

      {/* BLOCO DE EXPLICAÇÃO IMEDIATA (ESTUDO REVERSO - PARTE 3) */}
      <AnimatePresence>
        {isRespondido && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`p-4 rounded-xl border space-y-3 ${
              isCorreto
                ? 'bg-ok-soft/70 border-ok text-ink'
                : 'bg-err-soft/70 border-err text-ink'
            }`}
            aria-live="polite"
          >
            {/* Linha A: Seu Julgamento vs Gabarito */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-2.5">
              <div className="flex items-center gap-2">
                {isCorreto ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ok">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Seu julgamento: {respostaDada === 'C' ? 'CERTO' : respostaDada === 'E' ? 'ERRADO' : 'EM BRANCO'} ✓</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-err">
                    <XCircle className="w-4 h-4" />
                    <span>Seu julgamento: {respostaDada === 'C' ? 'CERTO' : respostaDada === 'E' ? 'ERRADO' : 'EM BRANCO'} ✗</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-ink">
                  Gabarito:{' '}
                  <strong className={item.gabarito === 'C' ? 'text-ok uppercase' : 'text-err uppercase'}>
                    {item.gabarito === 'C' ? 'CERTO' : 'ERRADO'}
                  </strong>
                </span>
              </div>
            </div>

            {/* Linha B: Fundamentação Dogmática (Por que é Certo/Errado) */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold font-sans text-ink uppercase tracking-wide">
                Por que é {item.gabarito === 'C' ? 'CERTO' : 'ERRADO'}:
              </h4>
              <p className="font-serif text-xs sm:text-sm leading-relaxed text-ink m-0">
                {item.justificativa}
              </p>
            </div>

            {/* Linha C: Como ficaria correto (Obrigatório para itens ERRADOS) */}
            {item.gabarito === 'E' && item.versaoCorreta && (
              <div className="p-3 rounded-lg bg-surface border border-border space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Como ficaria correto:</span>
                </div>
                <p className="font-serif text-xs leading-relaxed text-ink m-0 italic">
                  "{item.versaoCorreta}"
                </p>
              </div>
            )}

            {/* Linha D: Armadilha da Banca (se houver) */}
            {item.armadilha && (
              <div className="flex items-start gap-2 text-xs text-amber-800 dark:text-amber-200 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/25">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                <div className="space-y-0.5">
                  <span className="font-bold text-[11px] uppercase tracking-wide">
                    Técnica / Armadilha Identificada:
                  </span>
                  <p className="font-sans text-xs leading-relaxed m-0">
                    {item.armadilha}
                  </p>
                </div>
              </div>
            )}

            {/* Linha E: Fonte e Ação Rever na Teoria */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] font-sans text-ink-2">
              {item.fonte ? (
                <span className="truncate max-w-[280px]">
                  <strong>Fonte:</strong> {item.fonte}
                </span>
              ) : <span />}

              {item.submoduloId && (
                <button
                  type="button"
                  onClick={handleReverNaTeoria}
                  className="inline-flex items-center gap-1 text-accent hover:underline font-semibold cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Rever na Teoria ({item.submoduloId})</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

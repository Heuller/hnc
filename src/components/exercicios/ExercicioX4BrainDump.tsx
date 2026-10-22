import React, { useState, useEffect, useRef } from 'react';
import { obterTimestampAtual, calcularTempoDecorridoSegundos } from '../../utils/tempo';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Play, Pause, RotateCcw, CheckSquare, Square, Award } from 'lucide-react';
import type { ExercicioX4 } from '../../domain/schemas/modulo.schema';
import type { ExercicioProps } from './types';

export const ExercicioX4BrainDump: React.FC<ExercicioProps<ExercicioX4>> = ({
  exercicio,
  onResponder,
  disabled = false,
}) => {
  const duracaoTotal = exercicio.tempoSegundos || 60;
  const [tempoRestante, setTempoRestante] = useState<number>(duracaoTotal);
  const [timerAtivo, setTimerAtivo] = useState<boolean>(false);
  const [textoLivre, setTextoLivre] = useState<string>('');
  const [modoChecklist, setModoChecklist] = useState<boolean>(false);
  const [pontosMarcados, setPontosMarcados] = useState<Record<number, boolean>>({});
  const tempoInicioRef = useRef<number>(0);

  useEffect(() => {
    tempoInicioRef.current = obterTimestampAtual();
  }, []);

  // Cronômetro regressivo
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerAtivo && tempoRestante > 0) {
      interval = setInterval(() => {
        setTempoRestante((prev) => {
          if (prev <= 1) {
            setTimerAtivo(false);
            setModoChecklist(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerAtivo, tempoRestante]);

  const handleToggleTimer = () => {
    if (disabled) return;
    setTimerAtivo((prev) => !prev);
  };

  const handleFinalizarEscrita = () => {
    setTimerAtivo(false);
    setModoChecklist(true);
  };

  const handleTogglePonto = (idx: number) => {
    setPontosMarcados((prev) => {
      const updated = { ...prev, [idx]: !prev[idx] };
      const totalMarcados = Object.values(updated).filter(Boolean).length;
      const taxa = totalMarcados / (exercicio.pontosChave.length || 1);
      const acertou = taxa >= 0.5;
      const tempoDecorrido = calcularTempoDecorridoSegundos(tempoInicioRef.current);
      onResponder?.({
        exercicioId: exercicio.id,
        tipo: 'X4',
        acertou,
        respostaDada: { textoLivre, pontosMarcados: updated, totalMarcados },
        tempoSegundos: tempoDecorrido,
      });
      return updated;
    });
  };

  const handleReset = () => {
    setTempoRestante(duracaoTotal);
    setTimerAtivo(false);
    setTextoLivre('');
    setModoChecklist(false);
    setPontosMarcados({});
    tempoInicioRef.current = obterTimestampAtual();
  };

  const totalMarcados = Object.values(pontosMarcados).filter(Boolean).length;
  const totalPontos = exercicio.pontosChave.length;
  const porcentagem = Math.round((totalMarcados / (totalPontos || 1)) * 100);

  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-surface border border-border shadow-editorial-sm space-y-4"
      role="region"
      aria-label="Exercício de Brain Dump (Recuperação Livre)"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold font-sans uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Brain Dump · Recuperação Livre
            </span>
            <span className="block text-xs text-ink-2">
              Evocação ativa sem consulta · Escreva tudo o que lembrar
            </span>
          </div>
        </div>

        {/* Cronômetro e Botões de Controle */}
        <div className="flex items-center gap-2">
          <div
            className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
              tempoRestante <= 10
                ? 'bg-err-soft border-err text-err animate-pulse'
                : 'bg-surface-2 border-border text-ink'
            }`}
            aria-live="polite"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{tempoRestante}s</span>
          </div>

          {!modoChecklist && (
            <button
              type="button"
              disabled={disabled}
              onClick={handleToggleTimer}
              className="p-1.5 rounded-lg border border-border bg-surface text-ink hover:border-accent cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label={timerAtivo ? 'Pausar cronômetro' : 'Iniciar cronômetro'}
            >
              {timerAtivo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )}

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-border bg-surface text-ink-2 hover:text-ink cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            title="Reiniciar exercício"
            aria-label="Reiniciar exercício"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Enunciado do Brain Dump */}
      <p className="font-serif text-sm sm:text-base text-ink leading-relaxed font-normal">
        {exercicio.enunciado}
      </p>

      {/* Área de Texto Livre para Digitação */}
      {!modoChecklist ? (
        <div className="space-y-3">
          <div className="relative">
            <textarea
              value={textoLivre}
              disabled={disabled}
              onChange={(e) => {
                setTextoLivre(e.target.value);
                if (!timerAtivo && tempoRestante > 0) {
                  setTimerAtivo(true);
                }
              }}
              placeholder="Digite aqui livremente tudo o que você lembra sobre o tema: conceitos, autores, regras, marcos, diferenças..."
              rows={4}
              className="w-full p-3 rounded-xl border border-border bg-surface-2/40 text-ink text-xs sm:text-sm font-sans foco focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 placeholder:text-ink-3 transition-all resize-y"
              aria-label="Área de escrita livre do Brain Dump"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs text-ink-2 font-mono">
              {textoLivre.trim().split(/\s+/).filter(Boolean).length} palavras escritas
            </span>

            <button
              type="button"
              disabled={disabled || textoLivre.trim().length === 0}
              onClick={handleFinalizarEscrita}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-accent text-white font-sans text-xs font-bold hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
            >
              Concluir e Comparar com Checklist
            </button>
          </div>
        </div>
      ) : null}

      {/* Modo Checklist de Pontos-Chave */}
      <AnimatePresence>
        {modoChecklist && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="p-4 rounded-xl border border-border bg-surface-2/60 space-y-4"
          >
            {textoLivre && (
              <div className="p-3 rounded-lg bg-surface border border-border/80 space-y-1">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-2 block">
                  Sua recuperação livre digitada:
                </span>
                <p className="font-serif text-xs text-ink leading-relaxed whitespace-pre-wrap m-0">
                  {textoLivre}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-sans font-bold text-ink uppercase tracking-wider">
                  Checklist de Pontos-Chave Essenciais:
                </span>
                <span className="text-xs font-mono font-bold text-accent">
                  {totalMarcados} de {totalPontos} recuperados ({porcentagem}%)
                </span>
              </div>

              <p className="text-xs text-ink-2 font-sans">
                Marque abaixo os conceitos e detalhes que você conseguiu evocar na sua recuperação:
              </p>

              <div className="space-y-2 pt-1" role="group" aria-label="Pontos-chave a marcar">
                {exercicio.pontosChave.map((ponto, idx) => {
                  const isChecked = !!pontosMarcados[idx];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTogglePonto(idx)}
                      className={`w-full min-h-[44px] p-3 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all flex items-start gap-2.5 cursor-pointer ${
                        isChecked
                          ? 'bg-ok-soft border-ok text-ink font-medium shadow-2xs'
                          : 'bg-surface border-border text-ink-2 hover:border-accent hover:text-ink'
                      }`}
                      aria-pressed={isChecked}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-ok" />
                        ) : (
                          <Square className="w-4 h-4 text-ink-3" />
                        )}
                      </div>
                      <span className="leading-snug flex-1">{ponto}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Avaliação Metacognitiva */}
            <div className="p-3 rounded-lg bg-surface border border-border space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-accent">
                <Award className="w-4 h-4" />
                <span>Resultado da Evocação:</span>
              </div>
              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                {porcentagem >= 75
                  ? 'Excelente consolidação na memória de trabalho! Os pontos centrais foram recuperados com sucesso.'
                  : porcentagem >= 50
                  ? 'Boa retenção preliminar. Releia os pontos não marcados para reforçar a memória de longo prazo.'
                  : 'Evocação parcial. O ato de tentar recuperar e conferir o checklist é o momento em que a retenção mais cresce (Efeito Testagem).'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-wide text-ink-2 block">
                Fundamentação Canônica:
              </span>
              <p className="font-serif text-xs sm:text-sm text-ink leading-relaxed m-0">
                {exercicio.justificativa}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40 text-xs text-ink-2 font-mono">
              <span>Fonte: {exercicio.fonte}</span>
              <span>Edital: {exercicio.editalRef}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

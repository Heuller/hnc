import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Pause, RotateCcw, AlertTriangle } from 'lucide-react';
import { Button } from '../common/Button';

interface CronometroDiscursivaProps {
  tempoSugeridoMinutos: number;
  onTempoAtualizado?: (segundosGastos: number) => void;
}

export const CronometroDiscursiva: React.FC<CronometroDiscursivaProps> = ({
  tempoSugeridoMinutos,
  onTempoAtualizado,
}) => {
  const tempoTotalSegundos = tempoSugeridoMinutos * 60;
  const [segundosRestantes, setSegundosRestantes] = useState(tempoTotalSegundos);
  const [isAtivo, setIsAtivo] = useState(false);
  const intervalRef = useRef<any>(null);

  // Reinicia o cronômetro se o tempo sugerido mudar (ex.: alternando entre questão e peça)
  useEffect(() => {
    setIsAtivo(false);
    setSegundosRestantes(tempoSugeridoMinutos * 60);
  }, [tempoSugeridoMinutos]);

  useEffect(() => {
    if (isAtivo) {
      intervalRef.current = setInterval(() => {
        setSegundosRestantes((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsAtivo(false);
            onTempoAtualizado?.(tempoTotalSegundos);
            return 0;
          }
          const novo = prev - 1;
          const segundosGastos = tempoTotalSegundos - novo;
          if (segundosGastos % 5 === 0) {
            onTempoAtualizado?.(segundosGastos);
          }
          return novo;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAtivo, tempoTotalSegundos, onTempoAtualizado]);

  const toggleAtivo = () => {
    setIsAtivo((prev) => !prev);
  };

  const reiniciar = () => {
    setIsAtivo(false);
    setSegundosRestantes(tempoTotalSegundos);
    onTempoAtualizado?.(0);
  };

  const minutos = Math.floor(segundosRestantes / 60);
  const segundos = segundosRestantes % 60;
  const formatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  const percentualRestante = (segundosRestantes / tempoTotalSegundos) * 100;
  const segundosGastos = tempoTotalSegundos - segundosRestantes;
  const minutosGastos = Math.floor(segundosGastos / 60);

  // Cores dinâmicas de acordo com o tempo restante
  let statusColor = 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20';
  let barColor = 'bg-purple-600';
  if (segundosRestantes <= 300) {
    // Menos de 5 minutos
    statusColor = 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/30 animate-pulse';
    barColor = 'bg-rose-600';
  } else if (segundosRestantes <= 600) {
    // Menos de 10 minutos
    statusColor = 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30';
    barColor = 'bg-amber-500';
  }

  return (
    <div className="p-3.5 sm:p-4 rounded-xl bg-surface border border-border shadow-xs space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg border flex items-center justify-center shrink-0 ${statusColor}`}>
            <Timer className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-ink">
                Cronômetro de Treino Real
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-2 border border-border text-ink-2">
                Meta: {tempoSugeridoMinutos} min
              </span>
            </div>
            <p className="text-[11px] text-ink-2 font-mono">
              Tempo decorrido: {minutosGastos} min {segundosGastos % 60} s
            </p>
          </div>
        </div>

        {/* Display do Cronômetro e Controles */}
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-xl border font-mono font-black text-lg sm:text-xl tracking-wider ${statusColor}`}>
            {formatado}
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant={isAtivo ? 'outline' : 'primary'}
              size="sm"
              onClick={toggleAtivo}
              className={`flex items-center gap-1 text-xs cursor-pointer ${
                !isAtivo ? 'bg-purple-700 hover:bg-purple-800 text-white font-bold' : ''
              }`}
              title={isAtivo ? 'Pausar Cronômetro' : 'Iniciar Contagem'}
            >
              {isAtivo ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAtivo ? 'Pausar' : 'Iniciar'}</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={reiniciar}
              className="p-1.5 text-xs text-ink-2 hover:text-ink cursor-pointer"
              title="Reiniciar Cronômetro"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Barra de Progresso do Tempo */}
      <div className="w-full bg-surface-2 rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: `${percentualRestante}%` }}
        />
      </div>

      {/* Alerta de Tempo Crítico */}
      {segundosRestantes === 0 && (
        <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>Tempo regulamentar esgotado! No concurso real você precisaria entregar a folha definitiva agora.</span>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Lock, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from './Button';
import { useNavigationStore } from '../../store/useNavigationStore';
import { JORNADA_CONFIG } from '../../config/jornada.config';

interface TelaBloqueioModuloProps {
  moduloNumero: number;
  moduloAnteriorNumero: number;
  simuladoAnteriorId: string;
  notaConsolidadaAtual?: number;
  motivo?: string;
}

export const TelaBloqueioModulo: React.FC<TelaBloqueioModuloProps> = ({
  moduloNumero,
  moduloAnteriorNumero,
  simuladoAnteriorId,
  notaConsolidadaAtual = 0,
  motivo,
}) => {
  const { setActiveView, setTargetSimuladoId, setSelectedSubmodule } = useNavigationStore();

  const handleIrAoSimulado = () => {
    setTargetSimuladoId(simuladoAnteriorId);
    setActiveView('simulado');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVoltarAoModuloAnterior = () => {
    setSelectedSubmodule(`${moduloAnteriorNumero}.1`);
    setActiveView('teoria');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const minimoExigido = Math.round(JORNADA_CONFIG.minimoSimuladoModulo * 100);

  return (
    <div
      className="min-h-[70vh] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="region"
      aria-label="Conteúdo Bloqueado por Pré-requisito Pedagógico"
    >
      <div className="max-w-lg w-full bg-surface border-2 border-border/80 rounded-2xl p-6 sm:p-8 shadow-editorial-md space-y-6 text-center">
        {/* Ícone de Cadeado Pedagógico */}
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-xs">
          <Lock className="w-8 h-8" />
        </div>

        {/* Título e Explicação */}
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-surface-2 text-ink-2 border border-border uppercase tracking-wider">
            Portão do Simulado · Módulo {moduloNumero}
          </span>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
            Módulo {moduloNumero} Bloqueado
          </h1>
          <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
            {motivo ||
              `O acesso ao Módulo ${moduloNumero} requer aprovação consolidada de ao menos ${minimoExigido}% no Simulado do Módulo ${moduloAnteriorNumero} (100 itens).`}
          </p>
        </div>

        {/* Card de Status */}
        <div className="p-4 rounded-xl bg-surface-2/60 border border-border text-left space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-ink-2">Nota consolidada no M{moduloAnteriorNumero}:</span>
            <span
              className={`font-bold ${
                notaConsolidadaAtual >= minimoExigido ? 'text-ok' : 'text-amber-600 dark:text-amber-400'
              }`}
            >
              {notaConsolidadaAtual}% / {minimoExigido}%
            </span>
          </div>
          <div className="w-full h-2 bg-surface rounded-full overflow-hidden border border-border/50">
            <div
              className={`h-full transition-all duration-300 ${
                notaConsolidadaAtual >= minimoExigido ? 'bg-ok' : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(100, Math.max(5, (notaConsolidadaAtual / minimoExigido) * 100))}%` }}
            />
          </div>
          <p className="text-[11px] text-ink-2 font-serif leading-normal pt-1">
            Cada módulo do curso forma o alicerce conceitual do seguinte. Complete o desafio de 100 itens para garantir consolidação mnemônica e desbloquear a próxima etapa.
          </p>
        </div>

        {/* Ações Diretas */}
        <div className="space-y-3 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={handleIrAoSimulado}
            className="w-full flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ir ao Simulado do M{moduloAnteriorNumero} (100 itens)</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="md"
            onClick={handleVoltarAoModuloAnterior}
            className="w-full flex items-center justify-center gap-2 text-ink-2 hover:text-ink cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Rever Teoria do M{moduloAnteriorNumero}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

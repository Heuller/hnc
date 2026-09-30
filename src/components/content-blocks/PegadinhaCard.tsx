import React, { useState } from 'react';
import type { PegadinhaBancaItem } from '../../domain/schemas/mnemonico.schema';
import { Badge } from '../common/Badge';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface PegadinhaCardProps {
  pegadinhas: PegadinhaBancaItem[];
  className?: string;
}

export const PegadinhaCardList: React.FC<PegadinhaCardProps> = ({
  pegadinhas,
  className = '',
}) => {
  const [revelados, setRevelados] = useState<Record<number, boolean>>({});

  const toggleRevelar = (index: number) => {
    setRevelados((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {pegadinhas.map((item, idx) => {
        const revelado = !!revelados[idx];

        return (
          <div
            key={idx}
            className="bg-surface rounded-xl border border-border p-4.5 shadow-xs transition-colors hover:border-accent/40"
          >
            {/* Top row: Rótulo e Tópico */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-theme-alerta bg-theme-alerta-soft px-2.5 py-0.5 rounded-full border border-theme-alerta/20">
                <AlertCircle className="w-3.5 h-3.5" />
                Armadilha Típica da Banca
              </span>
            </div>

            {/* Afirmação da Banca */}
            <div className="my-3 pl-3 border-l-2 border-border font-serif text-ink text-sm sm:text-base leading-relaxed italic">
              "{item.afirmacao}"
            </div>

            {/* Controle de Revelação */}
            <div className="pt-2 border-t border-border flex items-center justify-between">
              <button
                type="button"
                onClick={() => toggleRevelar(idx)}
                className="text-xs font-sans font-medium text-accent hover:text-ink flex items-center gap-1 py-1 focus:outline-none focus:underline"
              >
                {revelado ? (
                  <>
                    <span>Ocultar gabarito e análise</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Ver como o Cebraspe julga este item</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {revelado && (
                <Badge
                  variant={item.gabarito === 'C' ? 'certo' : 'errado'}
                  size="sm"
                >
                  {item.gabarito === 'C' ? 'Gabarito: CERTO' : 'Gabarito: ERRADO'}
                </Badge>
              )}
            </div>

            {/* Explicação da Armadilha */}
            {revelado && (
              <div className="mt-3 p-3 bg-surface-2 rounded-lg text-xs sm:text-sm text-ink-2 font-sans leading-relaxed animate-fadeIn border border-border">
                <p>
                  <strong className="text-ink font-semibold">Por que a banca formula assim:</strong>{' '}
                  {item.porQue}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

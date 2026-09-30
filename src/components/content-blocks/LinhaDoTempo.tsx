import React from 'react';
import type { MnemonicoTimelineItem } from '../../domain/schemas/mnemonico.schema';
import { Clock, BookOpen, User } from 'lucide-react';

interface LinhaDoTempoProps {
  items: MnemonicoTimelineItem[];
  className?: string;
}

export const LinhaDoTempo: React.FC<LinhaDoTempoProps> = ({ items, className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="relative pl-6 sm:pl-8 border-l-2 border-accent/40 space-y-8 my-6">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            {/* Marcador na linha */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 transition-transform" />

            {/* Cabeçalho do evento */}
            <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.periodo}
              </span>
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-2 flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {item.disciplina}
              </span>
            </div>

            {/* Cartão de Conteúdo */}
            <div className="bg-surface p-4 rounded-xl border border-border shadow-xs hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 font-sans font-semibold text-ink text-sm sm:text-base mb-1">
                <User className="w-4 h-4 text-accent shrink-0" />
                <span>{item.figuraChave}</span>
              </div>
              <p className="text-ink-2 text-xs sm:text-sm font-sans leading-relaxed">
                {item.focoPrincipal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

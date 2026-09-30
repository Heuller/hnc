import React, { useState } from 'react';
import type { MnemonicoAutorCard } from '../../domain/schemas/mnemonico.schema';
import { User, Book, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

interface CartaoAutorProps {
  autores: MnemonicoAutorCard[];
  className?: string;
}

export const CartaoAutorGrid: React.FC<CartaoAutorProps> = ({ autores, className = '' }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (nome: string) => {
    setExpandedId((prev) => (prev === nome ? null : nome));
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {autores.map((autor) => {
        const isExpanded = expandedId === autor.nome;

        return (
          <div
            key={autor.nome}
            onClick={() => toggleExpand(autor.nome)}
            className="bg-surface rounded-xl border border-border p-4.5 shadow-xs hover:border-accent/40 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Top row: Nome + Ano */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center text-accent shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-ink text-sm sm:text-base leading-tight">
                      {autor.nome}
                    </h4>
                    {autor.ano && (
                      <span className="font-mono text-xs text-ink-2">{autor.ano}</span>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={isExpanded ? 'Recolher detalhes' : 'Expandir detalhes'}
                  className="p-1 text-ink-2 hover:text-ink rounded"
                >
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Obra Principal */}
              {autor.obraPrincipal && (
                <div className="flex items-center gap-1.5 text-xs text-ink-2 mb-2 italic font-serif">
                  <Book className="w-3.5 h-3.5 text-accent shrink-0 not-italic" />
                  <span className="truncate">{autor.obraPrincipal}</span>
                </div>
              )}

              {/* Ideia Chave em uma linha */}
              <p className="text-ink text-xs sm:text-sm font-sans font-medium mb-3 leading-snug">
                {autor.ideiaChave}
              </p>

              {/* Detalhes expansíveis */}
              {isExpanded && autor.detalhesOpcionais && (
                <div className="mt-3 pt-3 border-t border-border/60 text-xs sm:text-sm text-ink-2 font-serif leading-relaxed animate-fadeIn">
                  {autor.detalhesOpcionais}
                </div>
              )}
            </div>

            {/* Chip de Pegadinha da Banca */}
            {autor.chipPegadinha && (
              <div className="mt-3 pt-2.5 border-t border-border flex items-start gap-1.5 bg-alerta-soft/40 p-2 rounded-lg border-l-2 border-alerta-cebraspe">
                <AlertTriangle className="w-3.5 h-3.5 text-alerta-cebraspe shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs font-sans text-alerta-cebraspe font-medium leading-tight">
                  <strong className="font-semibold">Pegadinha:</strong> {autor.chipPegadinha}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

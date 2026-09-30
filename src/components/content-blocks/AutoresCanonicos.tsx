import { BookOpen, UserCheck } from 'lucide-react';

export interface AutorItem {
  nome: string;
  obraPrincipal?: string;
  contribuicaoChave?: string;
}

interface AutoresCanonicosProps {
  autores: (string | AutorItem)[];
  className?: string;
}

export const AutoresCanonicos: React.FC<AutoresCanonicosProps> = ({
  autores,
  className = '',
}) => {
  return (
    <section
      aria-labelledby="autores-canonicos-title"
      className={`bg-surface-2/60 border border-border rounded-xl p-4 sm:p-5 my-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <UserCheck className="w-4 h-4 text-accent shrink-0" />
        <h3
          id="autores-canonicos-title"
          className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-ink"
        >
          Autores Canônicos Exigidos pela Banca
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {autores.map((autor, idx) => {
          const nome = typeof autor === 'string' ? autor : autor.nome;
          const obra = typeof autor === 'string' ? undefined : autor.obraPrincipal;
          const contrib = typeof autor === 'string' ? undefined : autor.contribuicaoChave;

          return (
            <div
              key={idx}
              className="bg-surface rounded-lg p-3 border border-border shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="font-sans font-bold text-ink text-sm mb-0.5">
                  {nome}
                </div>
                {obra && (
                  <div className="text-xs text-ink-2 font-serif italic mb-1.5 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-accent shrink-0 not-italic" />
                    <span className="truncate">{obra}</span>
                  </div>
                )}
              </div>
              {contrib && (
                <p className="text-xs text-ink font-sans leading-snug line-clamp-2">
                  {contrib}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

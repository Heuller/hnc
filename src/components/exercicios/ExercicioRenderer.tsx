import React from 'react';
import type {
  Exercicio,
  ExercicioX1,
  ExercicioX2,
  ExercicioX3,
  ExercicioX4,
  ExercicioX5,
  ExercicioX6,
  ExercicioX7,
  ExercicioX8,
  ExercicioX9,
  ExercicioX10,
  Checkpoint,
} from '../../domain/schemas/modulo.schema';
import { converterCheckpointParaExercicio } from '../../domain/schemas/modulo.schema';
import type { ExercicioResultado } from './types';
import { METADADOS_PEDAGOGICOS } from './types';
import { ExercicioX1PreTeste } from './ExercicioX1PreTeste';
import { ExercicioX2CertoErrado } from './ExercicioX2CertoErrado';
import { ExercicioX3Correcao } from './ExercicioX3Correcao';
import { ExercicioX4BrainDump } from './ExercicioX4BrainDump';
import { ExercicioX5ParConfundivel } from './ExercicioX5ParConfundivel';
import { ExercicioX6CompletarExemplo } from './ExercicioX6CompletarExemplo';
import { ExercicioX7OrdenarProcedimento } from './ExercicioX7OrdenarProcedimento';
import { ExercicioX8ItensSuporte } from './ExercicioX8ItensSuporte';
import { ExercicioX9CacaErro } from './ExercicioX9CacaErro';
import { ExercicioX10Associacao } from './ExercicioX10Associacao';

export interface ExercicioRendererProps {
  exercicio: Exercicio | Checkpoint;
  onResponder?: (resultado: ExercicioResultado) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  contadorTexto?: string;
  className?: string;
}

export const ExercicioRenderer: React.FC<ExercicioRendererProps> = ({
  exercicio: rawExercicio,
  onResponder,
  disabled = false,
  contadorTexto,
  className = '',
}) => {
  // Normaliza checkpoint legado para ExercicioX2 se não tiver a propriedade "tipo"
  const exercicio: Exercicio = React.useMemo(() => {
    if (!('tipo' in rawExercicio) || !rawExercicio.tipo) {
      return converterCheckpointParaExercicio(rawExercicio as Checkpoint);
    }
    return rawExercicio as Exercicio;
  }, [rawExercicio]);

  const meta = METADADOS_PEDAGOGICOS[exercicio.tipo];

  return (
    <section
      className={`w-full my-4 space-y-2 ${className}`}
      aria-labelledby={`exercicio-meta-${exercicio.id}`}
    >
      {/* Badge Pedagógico Superior */}
      <div className="flex items-center justify-between text-xs font-sans text-ink-2 px-1">
        <div className="flex items-center gap-1.5">
          <span
            id={`exercicio-meta-${exercicio.id}`}
            className="font-mono font-bold text-accent uppercase tracking-wider px-2 py-0.5 rounded bg-accent-soft border border-accent/20"
          >
            {meta?.nome || exercicio.tipo}
          </span>
          <span className="hidden sm:inline text-ink-3">· {meta?.principio}</span>
        </div>
        {contadorTexto && (
          <span className="font-mono font-semibold text-ink-2">{contadorTexto}</span>
        )}
      </div>

      {/* Renderização do Formato Cognitivo Específico */}
      {(() => {
        switch (exercicio.tipo) {
          case 'X1':
            return (
              <ExercicioX1PreTeste
                exercicio={exercicio as ExercicioX1}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X2':
            return (
              <ExercicioX2CertoErrado
                exercicio={exercicio as ExercicioX2}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X3':
            return (
              <ExercicioX3Correcao
                exercicio={exercicio as ExercicioX3}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X4':
            return (
              <ExercicioX4BrainDump
                exercicio={exercicio as ExercicioX4}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X5':
            return (
              <ExercicioX5ParConfundivel
                exercicio={exercicio as ExercicioX5}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X6':
            return (
              <ExercicioX6CompletarExemplo
                exercicio={exercicio as ExercicioX6}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X7':
            return (
              <ExercicioX7OrdenarProcedimento
                exercicio={exercicio as ExercicioX7}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X8':
            return (
              <ExercicioX8ItensSuporte
                exercicio={exercicio as ExercicioX8}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X9':
            return (
              <ExercicioX9CacaErro
                exercicio={exercicio as ExercicioX9}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          case 'X10':
            return (
              <ExercicioX10Associacao
                exercicio={exercicio as ExercicioX10}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
          default:
            return (
              <ExercicioX2CertoErrado
                exercicio={exercicio as ExercicioX2}
                onResponder={onResponder}
                disabled={disabled}
                contadorTexto={contadorTexto}
              />
            );
        }
      })()}
    </section>
  );
};

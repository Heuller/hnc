import type { Concept, ConfidenceLevel } from '../../domain/concepts/types';

export interface ExerciseSubmission {
  respostaDada: string; // 'C' | 'E' | texto
  acertou: boolean;
  confianca: ConfidenceLevel;
  tempoSegundos: number;
}

export interface ExerciseFormatProps {
  conceito: Concept;
  respondido: boolean;
  respostaSelecionada?: string;
  onResponder: (resposta: string) => void;
  disabled?: boolean;
}

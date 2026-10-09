import type { ExerciseFormatId } from '../../config/reviewConfig';

export type ConfidenceLevel = 'certeza' | 'duvida' | 'chute';

export type DominioEstado = 'novo' | 'em_aprendizado' | 'revisando' | 'dominado' | 'critico';

export interface ConceptVariantExercise {
  formatId: ExerciseFormatId;
  prompt: string;
  contexto?: string;
  opcoes?: string[];
  respostaCorreta: string;
  termoChave?: string;
  lacunas?: {
    textoComLacuna: string; // Ex: "No formato MARC 21, o campo _____ abriga o título principal."
    respostaCorreta: string; // Ex: "245"
    distratores?: string[]; // Ex: ["100", "260", "300"]
  };
  associacao?: {
    pares: Array<{ ladoA: string; ladoB: string }>;
  };
  casoPraticoContexto?: string;
}

export interface Concept {
  id: string; // Ex: 'c_2.5_cp1', 'c_1.1_cp2'
  submoduloId: string; // Ex: '2.5', '1.1'
  moduloId: string; // Ex: 'm2', 'm1'
  topico: string;
  itemPaiId?: string; // ID original do Checkpoint ou CebraspeQuestion
  enunciadoCanonic: string;
  gabaritoCanonic: 'C' | 'E';
  justificativaCanonic: string;
  armadilhaCebraspe?: string;
  tipoArmadilha?: 'inversao_conceito' | 'generalizacao_indevida' | 'anacronismo' | 'falso_sinonimo' | 'outra';
  fonteCanonica?: string;
  nivelDificuldade: 'facil' | 'medio' | 'dificil';
  formatosDisponiveis: ExerciseFormatId[];
  variantesFormatos?: Partial<Record<ExerciseFormatId, ConceptVariantExercise>>;
}

export interface ConceptReviewLogEntry {
  id: string;
  timestamp: string; // ISO string
  dataIso: string; // YYYY-MM-DD
  formatoUsado: ExerciseFormatId;
  respostaDada: 'C' | 'E' | string;
  acertou: boolean;
  confianca: ConfidenceLevel;
  tempoRespostaSegundos: number;
  caixaAnterior: number;
  caixaNova: number;
}

export interface ConceptState {
  conceptId: string;
  userId: string;
  caixaLeitner: 1 | 2 | 3 | 4 | 5;
  proximaRevisao: string; // YYYY-MM-DD
  totalAparicoes: number;
  totalAcertos: number;
  totalErros: number;
  totalChutes: number;
  ultimaConfianca?: ConfidenceLevel;
  ultimoJulgamento?: 'C' | 'E';
  dataUltimaRevisao?: string; // YYYY-MM-DD
  estadoDominio: DominioEstado;
  historico: ConceptReviewLogEntry[];
}

export * from './schemas/concurso.schema';
export * from './schemas/question.schema';
export * from './schemas/modulo.schema';
export * from './schemas/mnemonico.schema';
export * from './schemas/progress.schema';

export interface TermoSalvo {
  id: string;
  termo: string;
  area: string;
  dataSalvamento: string;
  definicaoCurta: string;
  armadilhaResumo: string;
}


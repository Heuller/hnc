export type JulgamentoCebraspe = 'C' | 'E' | 'BRANCO';

export interface CebraspeQuestion {
  id: string;
  numero: number;
  contexto?: string; // Texto base ou enunciado geral
  item: string; // Assertiva para julgar
  gabarito: 'C' | 'E';
  justificativa: string; // Explicação canônica detalhada
  fonteOriginal?: string; // Ex: CEBRASPE / PC-DF / 2025 ou Inédita Cebraspe
  submoduloId: string; // Relacionado ao módulo-filho (ex: '1.1')
  armadilhaBanca?: string; // Análise pedagógica da casca de banana Cebraspe
  dificuldade: 'facil' | 'media' | 'dificil';
}

export interface ModuloFilho {
  id: string;
  numero: string; // Ex: '1.1'
  titulo: string;
  descricaoCurta: string;
  tempoEstimadoMinutos: number;
  autoresChave: string[];
  teoriaDensaMarkdown: string;
  resumoEsquematizadoMarkdown: string;
  alertasCebraspe: string[];
  quadroComparativo?: {
    titulo: string;
    colunas: string[];
    linhas: string[][];
  };
}

export interface MacroModulo {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
  corTema: string;
  modulosFilhos: ModuloFilho[];
}

export interface RespostaSimulado {
  questionId: string;
  resposta: JulgamentoCebraspe;
  acertou?: boolean;
}

export interface EstatisticasCebraspe {
  totalRespondidas: number;
  certos: number;
  errados: number;
  emBranco: number;
  notaLiquida: number; // Certos - Errados
  aproveitamentoLiquidoPercent: number; // Nota líquida / Total * 100
}

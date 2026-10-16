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
  TipoExercicio,
} from '../../domain/schemas/modulo.schema';
import type { ConfidenceLevel } from '../../domain/concepts/types';

export type {
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
  TipoExercicio,
};

export interface ExercicioResultado {
  exercicioId: string;
  tipo: TipoExercicio;
  acertou: boolean;
  respostaDada: any;
  confianca?: ConfidenceLevel;
  tempoSegundos?: number;
}

export interface ExercicioProps<T = Exercicio> {
  exercicio: T;
  onResponder?: (resultado: ExercicioResultado) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  contadorTexto?: string;
}

export const METADADOS_PEDAGOGICOS: Record<
  TipoExercicio,
  {
    nome: string;
    principio: string;
    icone: string;
    descricao: string;
  }
> = {
  X1: {
    nome: 'Pré-teste',
    principio: 'Ativação prévia e curiosidade (sem nota)',
    icone: 'Sparkles',
    descricao: 'Tente responder antes de ler. Erros no pré-teste aumentam a retenção ao ler o texto.',
  },
  X2: {
    nome: 'Certo / Errado',
    principio: 'Calibração de confiança (Cebraspe)',
    icone: 'Target',
    descricao: 'Julgue o item e informe seu grau de certeza para calibrar sua metacognição.',
  },
  X3: {
    nome: 'Corrija a Assertiva',
    principio: 'Interrogação elaborativa / autoexplicação',
    icone: 'PenTool',
    descricao: 'A assertiva contém um erro doutrinário da banca. Identifique e selecione a correção.',
  },
  X4: {
    nome: 'Brain Dump',
    principio: 'Recuperação livre cronometrada',
    icone: 'Clock',
    descricao: 'Recupere livremente os conceitos de memória em 60s e confira o checklist.',
  },
  X5: {
    nome: 'Par Confundível',
    principio: 'Contraste e intercalação',
    icone: 'Split',
    descricao: 'Diferencie conceitos que a banca confunde intencionalmente nas provas.',
  },
  X6: {
    nome: 'Completar Exemplo',
    principio: 'Exemplo resolvido com esmaecimento',
    icone: 'Code2',
    descricao: 'Complete a lacuna do comando ou expressão técnica para consolidar a sintaxe.',
  },
  X7: {
    nome: 'Ordenar Procedimento',
    principio: 'Recuperação de estrutura e processos',
    icone: 'ListOrdered',
    descricao: 'Reorganize as etapas no fluxo sequencial correto previsto na doutrina ou regimento.',
  },
  X8: {
    nome: 'Itens-Suporte',
    principio: 'Transferência para formato Cebraspe',
    icone: 'FileText',
    descricao: 'Analise o texto-base e julgue a bateria de itens vinculados.',
  },
  X9: {
    nome: 'Caça ao Erro',
    principio: 'Detecção de armadilha no parágrafo',
    icone: 'AlertTriangle',
    descricao: 'Toque na frase do parágrafo que contém a inversão ou restrição indevida.',
  },
  X10: {
    nome: 'Associação',
    principio: 'Recuperação ativa por associação',
    icone: 'Layers',
    descricao: 'Associe autores, marcos históricos ou conceitos aos seus respectivos pares.',
  },
};

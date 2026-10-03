// Tipagem canônica estrita para o Glossário Determinístico (Parte D - Rodada 5)

export type TipoTermoGlossario =
  | 'conceito'
  | 'norma'
  | 'padrao'
  | 'autor'
  | 'orgao'
  | 'software'
  | 'sigla'
  | 'legislacao';

export interface FonteGlossario {
  referencia: string;
  localizador?: string;
  versao?: string;
}

export interface SentidoPolissemico {
  escopo: string;
  modulo_ref: string;
  definicao_curta: string;
  definicao_completa?: string;
  fonte: FonteGlossario;
}

export interface TermoGlossarioCanonico {
  id: string; // Slug estável único em kebab-case
  termo: string; // Nome canônico oficial
  variantes?: string[]; // Plurais, formas sem acento, sinônimos aceitos
  sigla?: string;
  expansao?: string;
  tipo: TipoTermoGlossario;
  definicao_curta: string; // Até 2 frases objetivas
  definicao_completa?: string;
  escopo?: string;
  sentidos?: SentidoPolissemico[];
  fonte: FonteGlossario;
  modulo_ref: string[]; // ex: ['m1', 'm2']
  folha_edital_ref?: string[];
  relacionados?: string[]; // IDs de termos relacionados
  nao_confundir_com?: string[]; // Distinções cruciais da banca Cebraspe
  traducao?: {
    original: string;
    traducao: string;
  };

  // Compatibilidade com componentes de UI já existentes
  sinonimos?: string[];
  area?: string;
  moduloRelacionado?: string;
  conceitoCanonico?: string;
  armadilhaCebraspe?: string;
  aplicacaoCamara?: string;
  fonteReferencia?: string;
  exemplo?: string;
  geradoPorIA?: boolean;
  ausente?: boolean; // Sinaliza termo não encontrado sem disparar IA em runtime
}

// Alias de retrocompatibilidade
export type TermoDicionario = TermoGlossarioCanonico;

export interface TermoSalvo {
  id: string;
  termo: string;
  area: string;
  dataSalvamento: string;
  definicaoCurta: string;
  armadilhaResumo: string;
}

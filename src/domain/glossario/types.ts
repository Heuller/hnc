export type AcervoGlossario = 'dicionario' | 'tecnico';

export interface FonteVerbete {
  obra: string;
  autores?: string;
  editora?: string;
  ano: number;
  pagina?: number;
}

export interface SubmoduloReferencia {
  id: string;
  numero: string;
  titulo: string;
}

export interface VerbeteUnificado {
  id: string;
  termo: string;
  acervo: AcervoGlossario;
  variantes?: string[];
  definicao: string;
  definicaoCompleta?: string;
  exemploBiblioteca?: string;
  remissivas?: string[];
  fonte: FonteVerbete;
  submodulosOndeAparece?: SubmoduloReferencia[];
  marcadoSuspeito?: boolean;
}

export interface FiltrosGlossario {
  busca: string;
  letra?: string;
  acervo?: AcervoGlossario | 'todos';
  apenasComOcorrenciaNoCurso?: boolean;
  apenasMarcadosSuspeitos?: boolean;
}

export interface IndiceLetra {
  letra: string;
  quantidade: number;
}

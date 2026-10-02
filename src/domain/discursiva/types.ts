// Interfaces para o Laboratório de Discursiva Cebraspe com IA

export type TipoDiscursiva = 'questao_20' | 'peca_50';

export interface CriterioPontuacao {
  item: string;
  pontuacaoMaxima: number;
  descricaoEsperada: string;
}

export interface TemaDiscursiva {
  id: string;
  tipo: TipoDiscursiva;
  titulo: string;
  enunciado: string;
  limiteLinhas: number;
  padraoRespostaPreliminar: string;
  criteriosPontuacao: CriterioPontuacao[];
}

export interface ErroGramaticalCebraspe {
  linha: number;
  trecho: string;
  correcao: string;
  explicacao: string;
  tipo: 'concordancia' | 'regencia' | 'pontuacao' | 'ortografia' | 'morfossintaxe' | 'outro';
}

export interface CriterioAvaliado {
  item: string;
  notaObtida: number;
  notaMaxima: number;
  parecer: string;
}

export interface AvaliacaoCebraspe {
  id: string;
  dataAvaliacao: string;
  temaId: string;
  tipo: TipoDiscursiva;
  totalLinhas: number;
  notaConteudo: number;
  notaConteudoMaxima: number;
  numErrosGramaticais: number;
  descontoGramatical: number;
  notaFinal: number;
  formulaAplicada: string;
  situacao: 'HABILITADO' | 'ELIMINADO';
  criterios: CriterioAvaliado[];
  errosGramaticais: ErroGramaticalCebraspe[];
  pontosFortes: string[];
  lacunasIdentificadas: string[];
  sugestaoReescritaParagrafo?: {
    original: string;
    sugerido: string;
    justificativa: string;
  };
  parecerGeralExaminador: string;
}

export interface VersaoTextoComAvaliacao {
  id: string;
  dataHora: string;
  texto: string;
  linhasEstimadas: number;
  avaliacao?: AvaliacaoCebraspe;
  devolutiva?: string;
}

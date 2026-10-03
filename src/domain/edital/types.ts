// Tipagem oficial para Ingestão do Edital nº 1/2026 (Câmara dos Deputados / Cebraspe)

export type BlocoEdital = 'CONHECIMENTOS_BASICOS' | 'CONHECIMENTOS_ESPECIFICOS';

export type NivelPrioridadeEdital = 'CRITICA' | 'ALTA' | 'MEDIA' | 'COMPLEMENTAR';

export interface TopicoProgramatico {
  id: string; // ex: 'LP-01', 'CAT-02', 'CDD-01'
  codigoEdital: string; // Numeração oficial no edital
  titulo: string;
  detalhamento: string[];
  prioridade: NivelPrioridadeEdital;
  incidenciaHistoricaCebraspe: number; // Porcentagem estimada de cobrança histórica
  moduloRef: string; // 'M1' a 'M13'
  submodulosRef: string[]; // ex: ['2.1', '2.2']
  statusCobertura: 'COBERTO' | 'PARCIAL' | 'LACUNA';
  questoesDisponiveis: number;
}

export interface EixoTematicoEdital {
  id: string;
  nome: string;
  bloco: BlocoEdital;
  moduloHncId: string;
  moduloHncNumero: number;
  descricaoOficial: string;
  pesoRelativo: number; // Proporção no peso da prova
  topicos: TopicoProgramatico[];
}

export interface EditalOficial {
  concurso: string;
  orgao: string;
  cargo: string;
  banca: string;
  editalNumero: string;
  ano: number;
  formatoItem: 'CERTO_ERRADO';
  fatorCorrecao: string; // '1 Erro Anula 1 Certo (Líquida)'
  totalItensProvaObjetiva: number; // 140 itens
  distribuicaoItens: {
    conhecimentosBasicos: number; // 50 itens
    conhecimentosEspecificos: number; // 90 itens (ou 70/70 a depender do modelo)
  };
  discursiva: {
    formato: string;
    linhasMaximas: number;
    peso: number;
  };
  eixos: EixoTematicoEdital[];
}

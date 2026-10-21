// Tipagem oficial para Ingestão do Edital nº 1/2026 (Câmara dos Deputados / Cebraspe)

export type BlocoEdital = 'CONHECIMENTOS_BASICOS' | 'CONHECIMENTOS_ESPECIFICOS';

export type NivelPrioridadeEdital = 'CRITICA' | 'ALTA' | 'MEDIA' | 'COMPLEMENTAR';

export interface IncidenciaHistorica {
  total: number;
  recente2024a2026: number;
  percentual: number;
}

export interface TopicoProgramatico {
  id: string; // ex: 'LP-01', 'CAT-02', 'CDD-01'
  codigoEdital: string; // Numeração oficial no edital
  titulo: string;
  detalhamento: string[];
  prioridade: NivelPrioridadeEdital;
  incidencia?: IncidenciaHistorica; // Contagem real por assunto no acervo histórico Cebraspe (total e 2024-2026)
  moduloRef: string; // 'M1' a 'M14'
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

export interface PisosEliminatoriosEdital {
  p1Minimo: number; // P1 < 18,00 elimina (Item 8.11.5 alínea 'a')
  p2Minimo: number; // P2 < 27,00 elimina (Item 8.11.5 alínea 'b')
  totalMinimo: number; // Total P1 + P2 < 54,00 elimina (Item 8.11.5 alínea 'c')
  vagasAmplaConvocadasDiscursiva: number; // 22 primeiros convocados na ampla (Item 8.11.6)
  notaCorteDiscursivaMin: number; // NFPD < 30,00 elimina (Item 9.8.5.4)
}

export interface EstruturaDiscursivaEdital {
  formato: string;
  pontosTotal: number; // 60,00
  questoes: {
    quantidade: number; // 2
    linhasMaximas: number; // 20
    pontosCada: number; // 15,00
    pontosTotal: number; // 30,00
  };
  pecaTecnica: {
    quantidade: number; // 1
    linhasMaximas: number; // 50
    pontosTotal: number; // 30,00
  };
  pisoAprovacao: number; // 30,00
}

export interface EditalOficial {
  concurso: string;
  orgao: string;
  cargo: string;
  banca: string;
  editalNumero: string;
  ano: number;
  dataProvavelProva: string; // '2027-01-17' (Anexo I)
  formatoItem: 'CERTO_ERRADO';
  fatorCorrecao: string; // '1 Erro Anula 1 Certo (Líquida = C - E)'
  totalItensProvaObjetiva: number; // 180 itens (90 P1 + 90 P2)
  distribuicaoItens: {
    conhecimentosBasicos: number; // 90 itens (P1)
    conhecimentosEspecificos: number; // 90 itens (P2)
  };
  pisosEliminatorios: PisosEliminatoriosEdital;
  discursiva: EstruturaDiscursivaEdital;
  eixos: EixoTematicoEdital[];
}

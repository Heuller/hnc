export interface DiagnosticoFraqueza {
  macroModuloId: string;
  submoduloId?: string;
  titulo: string;
  totalErros: number;
  totalTentativas: number;
  taxaErro: number; // 0 a 100%
  nivelGravidade: 'CRITICA' | 'ALTA' | 'MODERADA';
  pontosCegosIdentificados: string[];
}

export interface ConfiguracaoSimuladoAdaptativo {
  quantidadeItens: number; // ex: 10, 20 ou 30
  modoFoco: 'fraquezas_criticas' | 'erros_caderno' | 'geral_adaptativo';
  modulosSelecionados?: string[];
}

export interface ItemSimuladoAdaptativo {
  id: string;
  numero: number;
  macroModuloId: string;
  submoduloId: string;
  topicoNome: string;
  item: string;
  gabarito: 'C' | 'E';
  justificativa: string;
  armadilhaBanca: string;
  autorOuNormaReferencia: string;
}

export interface RespostaItemAdaptativo {
  itemId: string;
  resposta: 'C' | 'E' | 'BRANCO';
  acertou: boolean | null;
}

export interface ResultadoSimuladoAdaptativo {
  id: string;
  dataHora: string;
  totalItens: number;
  certos: number;
  errados: number;
  emBranco: number;
  notaLiquidaCebraspe: number; // Certos - Errados
  aproveitamentoLiquidoPercentual: number;
  tempoGastoSegundos: number;
  lacunasSuperadas: string[];
  lacunasPersistentes: string[];
  respostas: Record<string, RespostaItemAdaptativo>;
  itens: ItemSimuladoAdaptativo[];
}

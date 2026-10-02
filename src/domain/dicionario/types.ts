export interface TermoDicionario {
  id: string;
  termo: string;
  sinonimos?: string[];
  area: string;
  moduloRelacionado?: string; // ex: 'M1', 'M2', 'M3', 'M10'
  conceitoCanonico: string;
  armadilhaCebraspe: string;
  aplicacaoCamara: string;
  fonteReferencia: string;
  exemplo?: string;
  geradoPorIA?: boolean;
}

export interface TermoSalvo {
  id: string;
  termo: string;
  area: string;
  dataSalvamento: string;
  definicaoCurta: string;
  armadilhaResumo: string;
}

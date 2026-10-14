export interface ItemCasoIntegrador {
  id: string;
  item: string;
  gabarito: 'C' | 'E';
  submoduloRef: string; // Ex: '2.4', '10.1'
  justificativa: string;
  editalRef?: string;
}

export interface CasoIntegrador {
  id: string; // ex: 'ci-1'
  numero: number; // 1 a 5
  titulo: string;
  subtitulo: string;
  modulosEnvolvidos: string[]; // ex: ['m1', 'm2', 'm3']
  modulosCodigos: string[]; // ex: ['M1', 'M2', 'M3']
  temaGeral: string;
  enunciadoContexto: string;
  questoes: ItemCasoIntegrador[];
}

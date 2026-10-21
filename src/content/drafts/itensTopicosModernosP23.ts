import itensDraftData from './itensTopicosModernosP23.json';

export interface DraftItemTopicoModerno {
  id: string;
  topico: string;
  submoduloId: string;
  pergunta: string;
  item: string;
  gabarito: 'C' | 'E';
  justificativa: string;
  doutrinaReferencia: string;
  status: 'rascunho';
  tipoFonteOriginal: 'inedita';
  verificado: boolean;
  palavrasContagem: number;
}

export const ITENS_TOPICOS_MODERNOS_P23: DraftItemTopicoModerno[] = itensDraftData as DraftItemTopicoModerno[];

export const TOPICOS_MODERNOS_LISTA = [
  'Governança de Dados e Metadados (DAMA-DMBOK)',
  'Proveniência e Linhagem de Dados (W3C PROV-O, OpenLineage)',
  'Dados Abertos Governamentais (Lei 12.527/LAI, Decreto 8.777/2016, INDA)',
  'Crosswalks de Metadados e Conversão (Dublin Core <-> MARC 21, MODS, METS)',
  'BIBFRAME 2.0 e Linked Data',
  'SKOS (Simple Knowledge Organization System)',
  'RAG e LLMs em Unidades de Informação',
  'SQL para Bibliotecas e Bases Bibliográficas',
  'Expressões Regulares (Regex) para Metadados',
  'APIs REST e Interoperabilidade em Acervos Digitais',
  'Ética Informacional e Viés Algorítmico',
  'Redes Especializadas (REJE, RBMPF, BIBLIODATA)',
] as const;

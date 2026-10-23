// Itens inéditos rigorosos cobrindo as 12 lacunas do edital Cargo 5 com estudo reverso completo.
import itensJson from './itensLacunasEditalCargo5.json';

export interface ItemLacunaCargo5 {
  id: string;
  tema: string;
  submoduloId: string;
  item: string;
  gabarito: 'C' | 'E';
  gatilho: string;
  justificativa: string;
  armadilhaBanca: string;
  versao_correta?: string;
  versao_errada?: string;
  doutrinaReferencia: string;
  tipoFonteOriginal: 'inedita';
  verificado: boolean;
}

export const ITENS_LACUNAS_CARGO5: ItemLacunaCargo5[] = itensJson as ItemLacunaCargo5[];

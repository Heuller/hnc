import type { CebraspeQuestion } from '../../domain/types';
import { prototipoM3Classificacao } from './prototipoM3Classificacao';
import { prototipoM8Normalizacao } from './prototipoM8Normalizacao';
import { prototipoM10Legislativo } from './prototipoM10Legislativo';

export interface PrototipoManifest {
  id: string;
  moduloId: string;
  moduloCodigo: string;
  ondaReferencia: 'Onda M' | 'Onda P' | 'Onda X' | 'Onda L';
  titulo: string;
  descricao: string;
  itens: CebraspeQuestion[];
}

export const PROTOTIPOS_VALIDACAO_E4: PrototipoManifest[] = [
  {
    id: 'prototipo-m3',
    moduloId: 'm3',
    moduloCodigo: 'M3',
    ondaReferencia: 'Onda M',
    titulo: 'Protótipo 1: Classificação, CDD, CDU & CDDir',
    descricao:
      'Bloco de validação com 10 itens inéditos cobrindo notação pura da CDD, sinais da CDU, CDDir de Doris de Queiroz Carvalho, indexação de Lancaster e relações em tesauros.',
    itens: prototipoM3Classificacao,
  },
  {
    id: 'prototipo-m8',
    moduloId: 'm8',
    moduloCodigo: 'M8',
    ondaReferencia: 'Onda P',
    titulo: 'Protótipo 2: Normalização Documental & ABNT',
    descricao:
      'Bloco de validação com 10 itens inéditos focando na ruptura da NBR 10520:2023 (autor em minúsculas / fim da caixa alta), NBR 6023:2018 (regras de autoria e título) e NBR 6028:2021 (resumos).',
    itens: prototipoM8Normalizacao,
  },
  {
    id: 'prototipo-m10',
    moduloId: 'm10',
    moduloCodigo: 'M10',
    ondaReferencia: 'Onda X',
    titulo: 'Protótipo 3: Legislação, Regimento Interno, CEDI & RVBI',
    descricao:
      'Bloco de validação com 10 itens inéditos cobrindo órgãos da Câmara dos Deputados (RICD), quórum de PEC, Biblioteca Pedro Aleixo, CEDI, cooperação na RVBI e prazos da LAI.',
    itens: prototipoM10Legislativo,
  },
];

export {
  prototipoM3Classificacao,
  prototipoM8Normalizacao,
  prototipoM10Legislativo,
};

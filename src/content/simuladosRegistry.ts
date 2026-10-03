import type { CebraspeQuestion } from '../domain/types';
import { simuladoFundamentos100Q } from './questions/m1-fundamentos-100q';
import { simuladoCatalogacao100Q } from './questions/m2-catalogacao-100q';

export interface SimuladoManifest {
  id: string;
  macroModuloId: string;
  numero: number;
  titulo: string;
  tituloCurto: string;
  subtitulo: string;
  descricao: string;
  questoes: CebraspeQuestion[];
  submodulosIds: string[];
}

export const SIMULADOS_REGISTRY: SimuladoManifest[] = [
  {
    id: 'm1-fundamentos',
    macroModuloId: 'M1',
    numero: 1,
    titulo: 'Simulado M1: Fundamentos da Biblioteconomia & CI',
    tituloCurto: 'M1 - Fundamentos',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 1.1 a 1.4)',
    descricao:
      'Avaliação diagnóstica completa cobrindo epistemologia, tipologia de unidades de informação, ética profissional, Leis 4.084/62 e 12.527/11 (LAI) e Marco Civil da Internet.',
    questoes: simuladoFundamentos100Q,
    submodulosIds: ['1.1', '1.2', '1.3', '1.4'],
  },
  {
    id: 'm2-catalogacao',
    macroModuloId: 'M2',
    numero: 2,
    titulo: 'Simulado M2: Catalogação, RDA, LRM & MARC 21',
    tituloCurto: 'M2 - Catalogação',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 2.1 a 2.4)',
    descricao:
      'Simulado aprofundado cobrindo Princípios da IFLA (ICP 2016), AACR2r, padrão RDA (Projeto 3R), modelos conceituais WEMI (FRBR, FRAD, FRSAD, IFLA LRM), campos e tags do MARC 21 Bibliográfico e Dublin Core.',
    questoes: simuladoCatalogacao100Q,
    submodulosIds: ['2.1', '2.2', '2.3', '2.4'],
  },
];

export function getSimuladoById(id: string): SimuladoManifest {
  return SIMULADOS_REGISTRY.find((s) => s.id === id) ?? SIMULADOS_REGISTRY[0];
}

export function detectSimuladoIdFromQuestionId(questionId: string): string {
  if (questionId.startsWith('cat-q-')) {
    return 'm2-catalogacao';
  }
  return 'm1-fundamentos';
}

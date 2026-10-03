import type { MacroModulo } from '../../../domain/types';
import { submodulo31 } from './sub-3-1';
import { submodulo32 } from './sub-3-2';
import { submodulo33 } from './sub-3-3';
import { submodulo34 } from './sub-3-4';

export const moduloM3Classificacao: MacroModulo = {
  id: 'm3',
  codigo: 'M3',
  numero: 3,
  titulo: 'Classificação Documentária e Indexação',
  titulo_curto: 'Classificação e Tesauros',
  subtitulo: 'Teoria da Classificação, CDD, CDU, CDDir, Análise Documentária, Tesauros e Ontologias',
  descricao: 'Estudo aprofundado da representação temática do conhecimento: a teoria da classificação (Piedade), os sistemas CDD (Dewey) e CDU (Otlet & La Fontaine) com tabelas principais, sinais de síntese e auxiliares, a Classificação Decimal de Direito (CDDir de Doris de Queiroz Carvalho) e tabelas de Cutter-Sanborn e PHA, o processo de indexação em duas etapas (Lancaster) com métricas de revocação e precisão, e a arquitetura das linguagens documentárias, tesauros, ontologias e SKOS.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo31,
    submodulo32,
    submodulo33,
    submodulo34,
  ],
};

import type { MacroModulo } from '../../../domain/types';
import { submodulo101 } from './sub-10-1';
import { submodulo102 } from './sub-10-2';
import { submodulo103 } from './sub-10-3';
import { submodulo104 } from './sub-10-4';
import { submodulo105 } from './sub-10-5';
import { submodulo106 } from './sub-10-6';

export const moduloM10Legislativo: MacroModulo = {
  id: 'm10',
  codigo: 'M10',
  numero: 10,
  titulo: 'Legislação Federal e Contexto Legislativo',
  titulo_curto: 'Processo Legislativo e CEDI',
  subtitulo: 'Regimento Interno da Câmara dos Deputados (RICD), Processo Legislativo Constitucional, RCCN e Direito Constitucional (CF/88)',
  descricao: 'Estudo aprofundado do arcabouço normativo institucional e constitucional da Câmara dos Deputados: a estrutura do Regimento Interno (RICD arts. 1º a 24, 65 a 94, 226 a 251 e 262 a 273), os órgãos da Mesa Diretora, comissões, blocos parlamentares e o Centro de Documentação e Informação (Cedi) com a Rede Virtual de Bibliotecas (RVBI polo Senado); o Regimento Comum do Congresso Nacional (RCCN - Resolução nº 1/1970-CN); o processo legislativo constitucional do Art. 59 da CF/88 e espécies normativas (PECs, Leis Complementares, Ordinárias e MPVs); o Poder Legislativo, estatuto dos congressistas e intervenção federal; e as Noções de Direito Constitucional aplicadas: princípios fundamentais (arts. 1º a 4º), direitos e garantias fundamentais e remédios constitucionais (art. 5º), nacionalidade, direitos e partidos políticos (arts. 12 a 17) e a Administração Pública na CF/88 (arts. 37 a 41).',
  status: 'disponivel',
  simuladoDisponivel: true,
    blocoEdital: 'Conhecimentos Básicos: Processo Legislativo e Regimento da Câmara',
  preRequisitos: ["m1"],
  modulosFilhos: [
    submodulo101,
    submodulo102,
    submodulo103,
    submodulo104,
    submodulo105,
    submodulo106,
  ],
};

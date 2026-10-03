import type { MacroModulo } from '../../../domain/types';
import { submodulo131 } from './sub-13-1';
import { submodulo132 } from './sub-13-2';
import { submodulo133 } from './sub-13-3';
import { submodulo134 } from './sub-13-4';

export const moduloM13Portugues: MacroModulo = {
  id: 'm13',
  codigo: 'M13',
  numero: 13,
  titulo: 'Língua Portuguesa',
  subtitulo: 'Linguística Textual, Coesão, Reescritura, Sintaxe Avançada e Redação Oficial para o Cebraspe',
  descricao:
    'Módulo estruturado sob rigor metodológico e fundamentado em referências canônicas (Celso Cunha & Lindley Cintra, Evanildo Bechara, Ingedore Koch, Celso Pedro Luft, Domingos Paschoal Cegalla e Manual de Redação da Presidência da República 2018), com foco cirúrgico nas peculiaridades das provas do Cebraspe para o Poder Legislativo: distinção científica entre compreensão e interpretação com desativação das armadilhas de extrapolação e inversão causal; o rastreamento anafórico de pronomes demonstrativos e do pronome cujo; a sintaxe dos operadores argumentativos; a metodologia dos três filtros de reescritura e transposição de vozes verbais; a concordância crítica com sujeitos partitivos e partícula "se"; a regência de verbos parlamentares e o algoritmo resolutivo da crase; e a semântica da vírgula nas orações adjetivas combinada com as normas oficiais de redação de expedientes para o Congresso Nacional.',
  status: 'disponivel',
  trilha: 'complementar',
  avisoVerificacao:
    'Trilha Complementar (Gerais provisórios até publicação do edital) · Conteúdo elaborado com assistência de IA e fontes primárias canônicas',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo131,
    submodulo132,
    submodulo133,
    submodulo134,
  ],
};

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
  titulo_curto: 'Língua Portuguesa',
  subtitulo: 'Linguística Textual, Coesão, Reescritura, Sintaxe Avançada, Pontuação, Ortografia e Tipologia para o Cebraspe',
  descricao:
    'Módulo estruturado sob rigor metodológico e fundamentado em referências canônicas (Celso Cunha & Lindley Cintra, Evanildo Bechara, Ingedore Koch, Luiz Antônio Marcuschi, Celso Pedro Luft, Domingos Paschoal Cegalla e Rocha Lima), com foco cirúrgico nas peculiaridades das provas do Cebraspe para o Poder Legislativo: distinção científica entre compreensão e interpretação com desativação das armadilhas de extrapolação e inversão causal; o rastreamento anafórico de pronomes demonstrativos e do pronome cujo; a sintaxe dos operadores argumentativos; a metodologia dos três filtros de reescritura e transposição de vozes verbais; a concordância crítica com sujeitos partitivos e partícula "se"; a regência de verbos parlamentares e o algoritmo resolutivo da crase; a sintaxe e semântica da pontuação (vírgula proibida, facultativa e oposição explicativa vs restritiva em orações adjetivas); e o domínio integral da ortografia oficial, acentuação pós-acordo, hífen, distinção marcuschiana entre tipos e gêneros textuais, valores aspectuais dos tempos verbais e sintaxe de colocação pronominal.',
  status: 'disponivel',
  trilha: 'complementar',
  avisoVerificacao:
    'Conhecimentos Básicos Oficiais (Edital nº 1/2026) — Língua Portuguesa Completo estruturado segundo a banca Cebraspe',
  simuladoDisponivel: true,
    blocoEdital: 'Conhecimentos Básicos: Língua Portuguesa',
  preRequisitos: [],
  modulosFilhos: [
    submodulo131,
    submodulo132,
    submodulo133,
    submodulo134,
  ],
};

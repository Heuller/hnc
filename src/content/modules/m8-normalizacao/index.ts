import type { MacroModulo } from '../../../domain/types';
import { submodulo81 } from './sub-8-1';
import { submodulo82 } from './sub-8-2';
import { submodulo83 } from './sub-8-3';
import { submodulo84 } from './sub-8-4';

export const moduloM8Normalizacao: MacroModulo = {
  id: 'm8',
  codigo: 'M8',
  numero: 8,
  titulo: 'Normalização Documental e Normas da ABNT',
  titulo_curto: 'Normalização ABNT',
  subtitulo: 'Série ABNT NBR 6023 (Referências), NBR 10520 (Citações - 2023), NBR 14724 (Trabalhos Acadêmicos) e NBR 6028 (Resumos - 2021)',
  descricao: 'Estudo minucioso e rigoroso da série de normas de informação e documentação da ABNT: NBR 6023 (elementos essenciais e complementares, destaques tipográficos e modelos por tipo de documento), a histórica revisão da NBR 10520:2023 com a extinção da caixa alta nos parênteses e formatação de citações curtas, longas e apud; a NBR 14724 (apresentação de trabalhos acadêmicos, elementos pré, textuais e pós-textuais, regras de margens e a distinção canônica entre apêndice e anexo); e a NBR 6028:2021 (resumos indicativo, informativo e crítico, contagem de palavras e redação em parágrafo único) conjugada com a NBR 6027 (sumário) e NBR 6022 (artigos).',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo81,
    submodulo82,
    submodulo83,
    submodulo84,
  ],
};

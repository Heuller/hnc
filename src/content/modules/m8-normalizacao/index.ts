import type { MacroModulo } from '../../../domain/types';
import { submodulo81 } from './sub-8-1';
import { submodulo82 } from './sub-8-2';
import { submodulo83 } from './sub-8-3';
import { submodulo84 } from './sub-8-4';
import { submodulo85 } from './sub-8-5';

export const moduloM8Normalizacao: MacroModulo = {
  id: 'm8',
  codigo: 'M8',
  numero: 8,
  titulo: 'Normalização Documental e Normas da ABNT',
  titulo_curto: 'Normalização ABNT',
  subtitulo: 'Série ABNT NBR 6023:2025 (Referências), NBR 10520:2023 (Citações), NBR 15287:2025 (Projetos de Pesquisa), NBR 14724 (Trabalhos Acadêmicos), NBR 6028:2021 (Resumos) e NBR 6034 (Índices)',
  descricao: 'Estudo minucioso e rigoroso da série de normas de informação e documentação da ABNT: NBR 6023:2025 (elementos essenciais e complementares, destaques tipográficos e modelos por tipo de documento), NBR 15287:2025 (apresentação de projetos de pesquisa), a histórica revisão da NBR 10520:2023 com a extinção da caixa alta nos parênteses e formatação de citações curtas, longas e apud; a NBR 14724 (apresentação de trabalhos acadêmicos, ficha catalográfica no verso da folha de rosto, elementos pré, textuais e pós-textuais, regras de margens e a distinção canônica entre apêndice e anexo); a NBR 6028:2021 (resumos) conjugada com a NBR 6027 (sumário), NBR 6022 (artigos) e NBR 6034:2004 (índices), além de editoração digital (EPUB, PDF/A), infografia funcional (Cairo, Tufte) e acessibilidade de produtos informacionais.',
  status: 'disponivel',
  simuladoDisponivel: true,
    blocoEdital: 'Bloco D: Normalização Documentária e Publicação',
  preRequisitos: ["m7"],
  modulosFilhos: [
    submodulo81,
    submodulo82,
    submodulo83,
    submodulo84,
    submodulo85,
  ],
};

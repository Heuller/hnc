import type { MacroModulo } from '../../../domain/types';
import { submodulo21 } from './sub-2-1';
import { submodulo22 } from './sub-2-2';
import { submodulo23 } from './sub-2-3';
import { submodulo24 } from './sub-2-4';
import { submodulo26 } from './sub-2-6';
import { submodulo27 } from './sub-2-7';

export const moduloM2Catalogacao: MacroModulo = {
  id: 'm2',
  codigo: 'M2',
  numero: 2,
  titulo: 'Catalogação, Metadados e Modelos Conceituais',
  titulo_curto: 'Catalogação, RDA e MARC21',
  subtitulo: 'AACR2r, RDA, MARC 21, LRM, Dublin Core, MODS, METS e BIBFRAME 2.0',
  descricao: 'Estudo aprofundado da representação descritiva de recursos informacionais: os Princípios Internacionais de Catalogação (ICP), o código AACR2r e suas regras de pontos de acesso, a revolução do padrão RDA, a modelagem conceitual (FRBR/WEMI e IFLA LRM), o Formato MARC 21, Dublin Core, tipologia NISO, perfis de aplicação, crosswalks, metadados de imagem e som, MODS, METS, BIBFRAME 2.0 e os quatro níveis de interoperabilidade.',
  status: 'disponivel',
  simuladoDisponivel: true,
    blocoEdital: 'Bloco D: Representação, Organização, Tratamento e Recuperação',
  preRequisitos: ["m1"],
  modulosFilhos: [
    submodulo21,
    submodulo22,
    submodulo23,
    submodulo24,
    submodulo26,
    submodulo27,
  ],
};


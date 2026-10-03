import type { MacroModulo } from '../../../domain/types';
import { submodulo21 } from './sub-2-1';
import { submodulo22 } from './sub-2-2';
import { submodulo23 } from './sub-2-3';
import { submodulo24 } from './sub-2-4';

export const moduloM2Catalogacao: MacroModulo = {
  id: 'm2',
  codigo: 'M2',
  numero: 2,
  titulo: 'Catalogação, Metadados e Modelos Conceituais',
  titulo_curto: 'Catalogação, RDA e MARC21',
  subtitulo: 'AACR2r, RDA, MARC 21, Família FRBR, IFLA LRM e Dublin Core',
  descricao: 'Estudo aprofundado da representação descritiva de recursos informacionais: os Princípios Internacionais de Catalogação (ICP), o código AACR2r e suas regras de pontos de acesso, a revolução do padrão RDA, a modelagem conceitual (FRBR/WEMI, FRAD, FRSAD e IFLA LRM), a arquitetura física e lógica do Formato MARC 21 e o padrão Dublin Core para o ambiente digital.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo21,
    submodulo22,
    submodulo23,
    submodulo24,
  ],
};

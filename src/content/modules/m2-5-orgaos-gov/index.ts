import type { MacroModulo } from '../../../domain/types';
import { submodulo25 } from './sub-2-5';

export const moduloM25OrgaosGov: MacroModulo = {
  id: 'm2-5',
  codigo: 'M2.5',
  numero: 2.5,
  titulo: 'Órgãos Públicos, Catalogação Governamental e Biblioteca da Câmara',
  titulo_curto: 'Órgãos & Bib. da Câmara',
  subtitulo:
    'Estrutura dos Poderes, AACR2r Cap. 24, RDA Cap. 11, MARC 21 (110/710) e a Biblioteca Pedro Aleixo',
  descricao:
    'Mini-módulo especial unindo Direito Constitucional aplicado, técnicas de representação descritiva de entidades coletivas governamentais no catálogo bibliográfico e o conhecimento institucional aprofundado da Biblioteca da Câmara dos Deputados.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [submodulo25],
};

export { submodulo25 };

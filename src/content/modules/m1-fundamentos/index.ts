import type { MacroModulo } from '../../../domain/types';
import { submodulo11 } from './sub-1-1';
import { submodulo12 } from './sub-1-2';
import { submodulo13 } from './sub-1-3';
import { submodulo14 } from './sub-1-4';
import { submodulo15 } from './sub-1-5';
import { submodulo16 } from './sub-1-6';

export const moduloM1Fundamentos: MacroModulo = {
  id: 'm1',
  codigo: 'M1',
  numero: 1,
  titulo: 'Fundamentos da Biblioteconomia, Documentação e Ciência da Informação',
  titulo_curto: 'Fundamentos e Legislação',
  subtitulo: 'A base epistemológica, histórica, normativa, ética e de governança indispensável para a Câmara dos Deputados',
  descricao: 'Estudo aprofundado dos objetos de estudo, fronteiras disciplinares, Leis de Ranganathan e releituras contemporâneas, ontologia documental (Buckland, Briet e Otlet), arcabouço normativo da profissão com Código de Ética do CFB, ciclo de vida e qualidade da informação (Wang & Strong), memória institucional e governança de dados segundo o DAMA-DMBOK 2ª ed.',
  status: 'disponivel',
  simuladoDisponivel: true,
    blocoEdital: 'Bloco A: Ciência da Informação, Gestão, Governança e Ética',
  preRequisitos: [],
  modulosFilhos: [
    submodulo11,
    submodulo12,
    submodulo13,
    submodulo14,
    submodulo15,
    submodulo16,
  ],
};


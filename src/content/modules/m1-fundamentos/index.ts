import type { MacroModulo } from '../../../domain/types';
import { submodulo11 } from './sub-1-1';
import { submodulo12 } from './sub-1-2';
import { submodulo13 } from './sub-1-3';
import { submodulo14 } from './sub-1-4';

export const moduloM1Fundamentos: MacroModulo = {
  id: 'm1',
  codigo: 'M1',
  numero: 1,
  titulo: 'Fundamentos da Biblioteconomia, Documentação e Ciência da Informação',
  titulo_curto: 'Fundamentos de Biblioteconomia e CI',
  subtitulo: 'A base epistemológica, histórica, normativa e ética indispensável para a Câmara dos Deputados',
  descricao: 'Estudo aprofundado dos objetos de estudo, fronteiras disciplinares, Leis de Ranganathan e releituras contemporâneas, ontologia documental (Buckland, Briet e Otlet) e arcabouço normativo da profissão com Código de Ética do CFB.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo11,
    submodulo12,
    submodulo13,
    submodulo14,
  ],
};

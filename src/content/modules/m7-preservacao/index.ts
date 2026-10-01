import type { MacroModulo } from '../../../domain/types';
import { submodulo71 } from './sub-7-1';
import { submodulo72 } from './sub-7-2';
import { submodulo73 } from './sub-7-3';
import { submodulo74 } from './sub-7-4';

export const moduloM7Preservacao: MacroModulo = {
  id: 'm7',
  codigo: 'M7',
  numero: 7,
  titulo: 'Preservação, Conservação e Memória Institucional',
  subtitulo: 'Agentes Ambientais, Controle Integrado de Pragas (Anóxia), Higienização a Seco e Teoria da Restauração',
  descricao: 'Estudo aprofundado da salvaguarda material e conservação preventiva de acervos gráficos e bibliográficos: agentes ambientais e físico-químicos (temperatura, umidade, luz/UV, acidez intrínseca e hidrólise ácida), agentes biológicos (traças, brocas, cupins e fungos) e controle integrado com técnicas ecológicas de anóxia e congelamento; protocolos de higienização mecânica a seco (filtros HEPA), materiais de acondicionamento (papel permanente ISO 9706 e poliéster vs. PVC) e regras de manuseio; e princípios éticos fundamentais da restauração (reversibilidade, mínima intervenção e distinguibilidade de Cesare Brandi) com técnicas laboratoriais de papel japonês, desacidificação e encadernação de conservação.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo71,
    submodulo72,
    submodulo73,
    submodulo74,
  ],
};

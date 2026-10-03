import type { MacroModulo } from '../../../domain/types';
import { submodulo51 } from './sub-5-1';
import { submodulo52 } from './sub-5-2';
import { submodulo53 } from './sub-5-3';
import { submodulo54 } from './sub-5-4';

export const moduloM5Gestao: MacroModulo = {
  id: 'm5',
  codigo: 'M5',
  numero: 5,
  titulo: 'Gestão de Unidades de Informação e Coleções',
  titulo_curto: 'Gestão de Bibliotecas',
  subtitulo: 'Planejamento estratégico, marketing, desenvolvimento de coleções e gestão do conhecimento aplicados à gestão bibliotecária',
  descricao: 'Estudo aprofundado dos processos administrativos e gerenciais de unidades de informação: planejamento nos três níveis (Almeida), avaliação e indicadores de desempenho (Lancaster), marketing de serviços de informação (Amaral), modelo cíclico de desenvolvimento de coleções (Vergueiro) e ecologia do conhecimento organizacional (Choo, Nonaka & Takeuchi).',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo51,
    submodulo52,
    submodulo53,
    submodulo54,
  ],
};

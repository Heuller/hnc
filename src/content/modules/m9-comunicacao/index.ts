import type { MacroModulo } from '../../../domain/types';
import { submodulo91 } from './sub-9-1';
import { submodulo92 } from './sub-9-2';
import { submodulo93 } from './sub-9-3';
import { submodulo94 } from './sub-9-4';

export const moduloM9Comunicacao: MacroModulo = {
  id: 'm9',
  codigo: 'M9',
  numero: 9,
  titulo: 'Comunicação Científica, Ciência Aberta e Métricas',
  subtitulo: 'Ciclo da Comunicação, Acesso Aberto, Princípios FAIR, Curadoria Digital, Direitos Autorais e Bibliometria',
  descricao: 'Estudo aprofundado dos ecossistemas de produção e circulação do saber científico: o ciclo da publicação formal e informal e os colégios invisíveis (Meadows e Price), as modalidades de avaliação por pares; as declarações do Acesso Aberto (Budapeste, Bethesda, Berlim) e as vias verde, dourada, diamante e híbrida; os princípios FAIR para dados de pesquisa e curadoria digital; a legislação autoral brasileira (Lei 9.610/98) e o sistema de licenças Creative Commons; e os estudos métricos da informação (Bibliometria, Cientometria, Informetria e Altmetria), as leis clássicas de Bradford, Lotka e Zipf, o Fator de Impacto e o Índice h de Hirsch.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo91,
    submodulo92,
    submodulo93,
    submodulo94,
  ],
};

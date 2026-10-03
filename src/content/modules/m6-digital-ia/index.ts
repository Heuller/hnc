import type { MacroModulo } from '../../../domain/types';
import { submodulo61 } from './sub-6-1';
import { submodulo62 } from './sub-6-2';
import { submodulo63 } from './sub-6-3';
import { submodulo64 } from './sub-6-4';

export const moduloM6DigitalIA: MacroModulo = {
  id: 'm6',
  codigo: 'M6',
  numero: 6,
  titulo: 'Bibliotecas Digitais, Repositórios e Inteligência Artificial',
  titulo_curto: 'Bibliotecas Digitais e IA',
  subtitulo: 'Arquitetura da Informação, Usabilidade, Software DSpace, OAI-PMH, Modelo OAIS e Governança de IA',
  descricao: 'Estudo aprofundado dos ecossistemas digitais de informação: tipologias de bibliotecas (eletrônica, digital e virtual), os 4 sistemas da Arquitetura da Informação (Rosenfeld & Morville) e heurísticas de usabilidade (Nielsen); repositórios institucionais e software DSpace, protocolos de interoperabilidade OAI-PMH (6 verbos) e Z39.50; o modelo de referência OAIS (ISO 14721), pacotes SIP/AIP/DIP, estratégias de preservação digital e Rede Cariniana/LOCKSS; e a aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), embeddings, busca semântica, diretrizes da IFLA e governança de IA na Câmara dos Deputados.',
  status: 'disponivel',
  simuladoDisponivel: true,
  modulosFilhos: [
    submodulo61,
    submodulo62,
    submodulo63,
    submodulo64,
  ],
};

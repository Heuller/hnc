import type { MacroModulo } from '../../../domain/types';
import { submodulo61 } from './sub-6-1';
import { submodulo62 } from './sub-6-2';
import { submodulo63 } from './sub-6-3';
import { submodulo64 } from './sub-6-4';
import { submodulo65 } from './sub-6-5';
import { submodulo66 } from './sub-6-6';
import { submodulo67 } from './sub-6-7';

export const moduloM6DigitalIA: MacroModulo = {
  id: 'm6',
  codigo: 'M6',
  numero: 6,
  titulo: 'Bibliotecas Digitais, Repositórios e Inteligência Artificial',
  titulo_curto: 'Bibliotecas Digitais e IA',
  subtitulo: 'Arquitetura da Informação, Usabilidade, Software DSpace, OAI-PMH, Modelo OAIS, Bancos de Dados, SQL, Regex e Governança de IA',
  descricao: 'Estudo aprofundado dos ecossistemas digitais de informação: tipologias de bibliotecas (eletrônica, digital e virtual), os 4 sistemas da Arquitetura da Informação (Rosenfeld & Morville) e heurísticas de usabilidade (Nielsen); repositórios institucionais e software DSpace, protocolos de interoperabilidade OAI-PMH (6 verbos) e Z39.50; o modelo de referência OAIS (ISO 14721), pacotes SIP/AIP/DIP, estratégias de preservação digital e Rede Cariniana/LOCKSS; sistemas informacionais e modelagem relacional/NoSQL; fundamentos computacionais (algoritmos, SQL, regex, APIs e web scraping); e a aplicação de Inteligência Artificial generativa, Large Language Models (LLMs), RAG, curadoria de corpora e governança ética de IA na Câmara dos Deputados.',
  status: 'disponivel',
  simuladoDisponivel: true,
    blocoEdital: 'Bloco B, C e E: Sistemas, Bancos de Dados, IA e Preservação Digital',
  preRequisitos: ["m5"],
  modulosFilhos: [
    submodulo61,
    submodulo62,
    submodulo63,
    submodulo64,
    submodulo65,
    submodulo66,
    submodulo67,
  ],
};

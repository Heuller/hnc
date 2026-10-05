import type { CebraspeQuestion } from '../domain/types';
import { simuladoFundamentos100Q } from './questions/m1-fundamentos-100q';
import { simuladoCatalogacao100Q } from './questions/m2-catalogacao-100q';
import { simuladoClassificacao100Q } from './questions/m3-classificacao-100q';
import { simuladoRecuperacao100Q } from './questions/m4-recuperacao-100q';
import { simuladoGestao100Q } from './questions/m5-gestao-100q';
import { simuladoDigitalIA100Q } from './questions/m6-digital-ia-100q';
import { simuladoPreservacao100Q } from './questions/m7-preservacao-100q';
import { simuladoNormalizacao100Q } from './questions/m8-normalizacao-100q';
import { simuladoComunicacao100Q } from './questions/m9-comunicacao-100q';
import { simuladoLegislativo100Q } from './questions/m10-legislativo-100q';
import { simuladoAdministrativo100Q } from './questions/m11-administrativo-100q';
import { simuladoIngles100Q } from './questions/m12-ingles-100q';
import { simuladoPortugues100Q } from './questions/m13-portugues-100q';
import { simuladoTecnologiaDados100Q } from './questions/m14-tecnologia-dados-100q';
import { megaSimuladoCamara120Q } from './questions/mega-simulado-camara-120q';

export interface SimuladoManifest {
  id: string;
  macroModuloId: string;
  numero: number;
  titulo: string;
  tituloCurto: string;
  subtitulo: string;
  descricao: string;
  questoes: CebraspeQuestion[];
  submodulosIds: string[];
}

export const SIMULADOS_REGISTRY: SimuladoManifest[] = [
  {
    id: 'm1-fundamentos',
    macroModuloId: 'M1',
    numero: 1,
    titulo: 'Simulado M1: Fundamentos da Biblioteconomia & CI',
    tituloCurto: 'M1 - Fundamentos',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 1.1 a 1.4)',
    descricao:
      'Avaliação diagnóstica completa cobrindo epistemologia, tipologia de unidades de informação, ética profissional, Leis 4.084/62 e 12.527/11 (LAI) e Marco Civil da Internet.',
    questoes: simuladoFundamentos100Q,
    submodulosIds: ['1.1', '1.2', '1.3', '1.4'],
  },
  {
    id: 'm2-catalogacao',
    macroModuloId: 'M2',
    numero: 2,
    titulo: 'Simulado M2: Catalogação, RDA, LRM & MARC 21',
    tituloCurto: 'M2 - Catalogação',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 2.1 a 2.4)',
    descricao:
      'Simulado aprofundado cobrindo Princípios da IFLA (ICP 2016), AACR2r, padrão RDA (Projeto 3R), modelos conceituais WEMI (FRBR, FRAD, FRSAD, IFLA LRM), campos e tags do MARC 21 Bibliográfico e Dublin Core.',
    questoes: simuladoCatalogacao100Q,
    submodulosIds: ['2.1', '2.2', '2.3', '2.4'],
  },
  {
    id: 'm3-classificacao',
    macroModuloId: 'M3',
    numero: 3,
    titulo: 'Simulado M3: Classificação Decimal, Indexação e Tesauros',
    tituloCurto: 'M3 - Classificação & Tesauros',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 3.1 a 3.4)',
    descricao:
      'Simulado especializado cobrindo CDD (23ª ed.), CDU, Classificação Decimal de Direito (Doris de Queiroz Carvalho), teoria da indexação (Lancaster), medidas de revocação/precisão e construção de tesauros (ISO 25964).',
    questoes: simuladoClassificacao100Q,
    submodulosIds: ['3.1', '3.2', '3.3', '3.4'],
  },
  {
    id: 'm4-recuperacao',
    macroModuloId: 'M4',
    numero: 4,
    titulo: 'Simulado M4: Recuperação da Informação, Fontes & Redes Legislativas',
    tituloCurto: 'M4 - Recuperação & Fontes',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 4.1 a 4.4)',
    descricao:
      'Simulado de alta densidade cobrindo serviço de referência (Grogan e Taylor), tipologia de fontes (Cunha), modelos de recuperação da informação (Baeza-Yates, TF-IDF), LexML Brasil e RVBI.',
    questoes: simuladoRecuperacao100Q,
    submodulosIds: ['4.1', '4.2', '4.3', '4.4'],
  },
  {
    id: 'm5-gestao',
    macroModuloId: 'M5',
    numero: 5,
    titulo: 'Simulado M5: Gestão de Unidades de Informação & Coleções',
    tituloCurto: 'M5 - Gestão de Unidades & Coleções',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 5.1 a 5.4)',
    descricao:
      'Avaliação completa abrangendo o ciclo de desenvolvimento de coleções de Vergueiro, avaliação de serviços e coleções de Lancaster, níveis de planejamento de Almeida, matriz SWOT e modelo SECI de Gestão do Conhecimento (Nonaka & Takeuchi).',
    questoes: simuladoGestao100Q,
    submodulosIds: ['5.1', '5.2', '5.3', '5.4'],
  },
  {
    id: 'm6-digital-ia',
    macroModuloId: 'M6',
    numero: 6,
    titulo: 'Simulado M6: Repositórios Digitais, Interoperabilidade, FAIR & Inteligência Artificial',
    tituloCurto: 'M6 - Repositórios & IA',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 6.1 a 6.4)',
    descricao:
      'Simulado avançado sobre plataformas livres (DSpace, Koha, OJS), protocolo OAI-PMH (6 verbos), Dublin Core, Princípios FAIR de dados de pesquisa e IA generativa/RAG aplicada a bibliotecas.',
    questoes: simuladoDigitalIA100Q,
    submodulosIds: ['6.1', '6.2', '6.3', '6.4'],
  },
  {
    id: 'm7-preservacao',
    macroModuloId: 'M7',
    numero: 7,
    titulo: 'Simulado M7: Preservação, Conservação, Restauração & Modelo OAIS',
    tituloCurto: 'M7 - Preservação & OAIS',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 7.1 a 7.4)',
    descricao:
      'Caderno especializado cobrindo conservação preventiva (Reilly/IPI), ética de restauração (reversibilidade), Modelo OAIS (ISO 14721 - SIP/AIP/DIP), dicionário PREMIS 3.0 e diretrizes do RDC-Arq (Resolução CONARQ nº 43/2015).',
    questoes: simuladoPreservacao100Q,
    submodulosIds: ['7.1', '7.2', '7.3', '7.4'],
  },
  {
    id: 'm8-normalizacao',
    macroModuloId: 'M8',
    numero: 8,
    titulo: 'Simulado M8: Normalização Documental, NBRs da ABNT & Produção Editorial',
    tituloCurto: 'M8 - Normalização & ABNT',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 8.1 a 8.4)',
    descricao:
      'Simulado com foco em pegadinhas normativas: NBR 10520:2023 (abolição da caixa alta em parênteses), NBR 6023:2018 (referências), NBR 6028:2021 (resumos), NBR 6027:2012 (sumários), NBR 6024:2012 (numeração progressiva) e NBR 14724:2011 (trabalhos acadêmicos).',
    questoes: simuladoNormalizacao100Q,
    submodulosIds: ['8.1', '8.2', '8.3', '8.4'],
  },
  {
    id: 'm9-comunicacao',
    macroModuloId: 'M9',
    numero: 9,
    titulo: 'Simulado M9: Comunicação Científica, Leis Bibliométricas & Métricas de Avaliação',
    tituloCurto: 'M9 - Comunicação & Bibliometria',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 9.1 a 9.4)',
    descricao:
      'Simulado quantitativo e teórico cobrindo as 3 Leis Bibliométricas clássicas (Bradford, Lotka, Zipf), crescimento de Price, Fator de Impacto JCR, CiteScore, Índice h, Altmetria e Ciência Aberta (Recomendação UNESCO 2021).',
    questoes: simuladoComunicacao100Q,
    submodulosIds: ['9.1', '9.2', '9.3', '9.4'],
  },
  {
    id: 'm10-legislativo',
    macroModuloId: 'M10',
    numero: 10,
    titulo: 'Simulado M10: Legislação Federal, Regimento Interno da Câmara (RICD) & CEDI',
    tituloCurto: 'M10 - Regimento Interno & CEDI',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 10.1 a 10.4)',
    descricao:
      'Caderno decisivo com foco no contexto institucional da Câmara dos Deputados: processo legislativo constitucional, RICD (tramitação terminativa conclusiva, Mesa, Comissões), estrutura do CEDI, Biblioteca Pedro Aleixo, LAI (Lei 12.527/11), LGPD e RVBI.',
    questoes: simuladoLegislativo100Q,
    submodulosIds: ['10.1', '10.2', '10.3', '10.4'],
  },
  {
    id: 'm11-administrativo',
    macroModuloId: 'M11',
    numero: 11,
    titulo: 'Simulado M11: Direito Administrativo & Legislação Federal',
    tituloCurto: 'M11 - Direito Administrativo',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 11.1 a 11.12)',
    descricao:
      'Simulado aprofundado cobrindo princípios expressos e implícitos, organização administrativa, atos, poderes, servidores (Lei 8.112/90), licitações e contratos (Lei 14.133/21), serviços públicos, responsabilidade civil, processo administrativo (Lei 9.784/99), improbidade (Lei 8.429/92 alterada pela 14.230/21) e LINDB.',
    questoes: simuladoAdministrativo100Q,
    submodulosIds: ['11.1', '11.2', '11.3', '11.4', '11.5', '11.6', '11.7', '11.8', '11.9', '11.10', '11.11', '11.12'],
  },
  {
    id: 'm12-ingles',
    macroModuloId: 'M12',
    numero: 12,
    titulo: 'Simulado M12: Língua Inglesa Aplicada à Biblioteconomia & Pesquisa Parlamentar',
    tituloCurto: 'M12 - Língua Inglesa',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 12.1 a 12.4)',
    descricao:
      'Simulado denso com textos autênticos em inglês cobrindo compreensão e inferência textual, vocabulário especializado, marcadores do discurso, falsos cognatos, tempos verbais, verbos modais e estruturas condicionais aplicadas à biblioteconomia e processo legislativo.',
    questoes: simuladoIngles100Q,
    submodulosIds: ['12.1', '12.2', '12.3', '12.4'],
  },
  {
    id: 'm13-portugues',
    macroModuloId: 'M13',
    numero: 13,
    titulo: 'Simulado M13: Língua Portuguesa & Redação Oficial',
    tituloCurto: 'M13 - Língua Portuguesa',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 13.1 a 13.4)',
    descricao:
      'Simulado rigoroso cobrindo interpretação e tipologia textual, reescrita de frases com filtro tripartite Cebraspe, sintaxe do período, funções do SE e do QUE, concordância, regência, crase, pontuação semântica e Manual de Redação da Presidência da República (3ª ed. 2018).',
    questoes: simuladoPortugues100Q,
    submodulosIds: ['13.1', '13.2', '13.3', '13.4'],
  },
  {
    id: 'm14-tecnologia-dados',
    macroModuloId: 'M14',
    numero: 14,
    titulo: 'Simulado M14: Tecnologia da Informação, Segurança Cibernética & Ciência de Dados',
    tituloCurto: 'M14 - TI & Dados',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 14.1 a 14.4)',
    descricao:
      'Simulado moderno cobrindo ferramentas de escritório e colaboração em nuvem (M365 e Google Workspace), redes e segurança cibernética (NGFW, MFA, ransomware, backup 3-2-1), Inteligência Artificial Generativa (Transformers, LLMs, RAG, Shadow AI) e Ciência de Dados/BI (Kimball Star Schema, Power BI, DAX, Storytelling com dados).',
    questoes: simuladoTecnologiaDados100Q,
    submodulosIds: ['14.1', '14.2', '14.3', '14.4'],
  },
  {
    id: 'mega-simulado-camara',
    macroModuloId: 'MEGA',
    numero: 15,
    titulo: 'Mega Simulado Oficial: Câmara dos Deputados (Estrutura Real do Edital)',
    tituloCurto: 'Mega Simulado 120Q',
    subtitulo: '120 Itens C/E - Prova Completa: Básicos (P1 - 40Q) + Específicos (P2 - 80Q)',
    descricao:
      'A experiência definitiva de prova com 120 questões cobrindo 100% dos assuntos do edital da Câmara dos Deputados: 40 Conhecimentos Básicos (Português, Inglês, Administrativo, TI e Dados) e 80 Conhecimentos Específicos (M1 a M10 de Biblioteconomia, Ciência da Informação e Processo Legislativo).',
    questoes: megaSimuladoCamara120Q,
    submodulosIds: [
      '13.1', '12.1', '11.1', '14.1',
      '1.1', '2.1', '3.1', '4.1', '5.1', '6.1', '7.1', '8.1', '9.1', '10.1'
    ],
  },
];

export function getSimuladoById(id: string): SimuladoManifest {
  return SIMULADOS_REGISTRY.find((s) => s.id === id) ?? SIMULADOS_REGISTRY[0];
}

export function detectSimuladoIdFromQuestionId(questionId: string): string {
  if (questionId.startsWith('mega-q-')) return 'mega-simulado-camara';
  if (questionId.startsWith('cat-q-')) return 'm2-catalogacao';
  if (questionId.startsWith('m3-q-')) return 'm3-classificacao';
  if (questionId.startsWith('m4-q-')) return 'm4-recuperacao';
  if (questionId.startsWith('m5-q-')) return 'm5-gestao';
  if (questionId.startsWith('m6-q-')) return 'm6-digital-ia';
  if (questionId.startsWith('m7-q-')) return 'm7-preservacao';
  if (questionId.startsWith('m8-q-')) return 'm8-normalizacao';
  if (questionId.startsWith('m9-q-')) return 'm9-comunicacao';
  if (questionId.startsWith('m10-q-')) return 'm10-legislativo';
  if (questionId.startsWith('m11-q-')) return 'm11-administrativo';
  if (questionId.startsWith('m12-q-')) return 'm12-ingles';
  if (questionId.startsWith('m13-q-')) return 'm13-portugues';
  if (questionId.startsWith('m14-q-')) return 'm14-tecnologia-dados';
  return 'm1-fundamentos';
}


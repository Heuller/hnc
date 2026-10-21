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
import { simuladoLegislativoConstituicao100Q } from './questions/m10a-legislativo-constituicao-100q';
import { simuladoRegimentosCamaraCongresso100Q } from './questions/m10b-regimentos-100q';
import { simuladoAdministrativo100Q } from './questions/m11-administrativo-100q';
import { simuladoIngles100Q } from './questions/m12-ingles-100q';
import { simuladoPortugues100Q } from './questions/m13-portugues-100q';
import { simuladoTecnologiaDados100Q } from './questions/m14-tecnologia-dados-100q';
import { megaSimuladoCamara120Q } from './questions/mega-simulado-camara-120q';
import { simuladoGeral180Q } from './questions/simulado-geral-180q';
import { simuladoOficialCamara180Q } from './questions/simulado-oficial-camara-180q';
import { simuladoOrgaosGov30Q } from './questions/mini-modulo-orgaos-30q';

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

export const MINI_SIMULADOS_REGISTRY: SimuladoManifest[] = [
  {
    id: 'mini-modulo-orgaos',
    macroModuloId: 'm2-5',
    numero: 2.5,
    titulo: 'Mini Simulado Especial: Órgãos Públicos, Catalogação e Biblioteca da Câmara',
    tituloCurto: 'Mini 2.5 - Órgãos & Bib. Câmara',
    subtitulo: '30 Itens C/E Inéditos Cebraspe (Poderes, AACR2/MARC21 e Biblioteca Pedro Aleixo)',
    descricao:
      'Avaliação direcionada cobrindo a estrutura dos Poderes e órgãos (STF, STJ, TJs, TCU, TCEs, MP, Câmara dos Deputados), regras de catalogação governamental sob jurisdição vs entrada direta, regras de subordinação (AACR2 24.18/24.19 e MARC 110/710) e a história e sistemas da Biblioteca Pedro Aleixo.',
    questoes: simuladoOrgaosGov30Q,
    submodulosIds: ['2.5'],
  },
];

export const SIMULADOS_REGISTRY: SimuladoManifest[] = [
  {
    id: 'm1-fundamentos',
    macroModuloId: 'M1',
    numero: 1,
    titulo: 'Simulado M1: Fundamentos da Biblioteconomia & CI',
    tituloCurto: 'M1 - Fundamentos',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 1.1 a 1.6)',
    descricao:
      'Avaliação diagnóstica completa cobrindo epistemologia, tipologia de unidades de informação, ética profissional, Leis 4.084/62 e 12.527/11 (LAI), ciclo de vida e governança de dados.',
    questoes: simuladoFundamentos100Q,
    submodulosIds: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6'],
  },
  {
    id: 'm2-catalogacao',
    macroModuloId: 'M2',
    numero: 2,
    titulo: 'Simulado M2: Catalogação, RDA, LRM & MARC 21',
    tituloCurto: 'M2 - Catalogação',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 2.1 a 2.7)',
    descricao:
      'Simulado aprofundado cobrindo Princípios da IFLA (ICP 2016), AACR2r, padrão RDA (Projeto 3R), modelos conceituais WEMI (FRBR, FRAD, FRSAD, IFLA LRM), campos e tags do MARC 21 Bibliográfico, Dublin Core, metadados especiais, MODS, METS e Linked Data.',
    questoes: simuladoCatalogacao100Q,
    submodulosIds: ['2.1', '2.2', '2.3', '2.4', '2.6', '2.7'],
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
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 6.1 a 6.7)',
    descricao:
      'Simulado avançado sobre plataformas livres (DSpace, Koha, OJS), protocolo OAI-PMH, Dublin Core, Princípios FAIR, bancos de dados relacionais e NoSQL, SQL, regex, APIs e IA generativa/RAG aplicada a bibliotecas.',
    questoes: simuladoDigitalIA100Q,
    submodulosIds: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
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
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 8.1 a 8.5)',
    descricao:
      'Simulado com foco em pegadinhas normativas: NBR 10520:2023 (abolição da caixa alta em parênteses), NBR 6023:2018 (referências), NBR 6028:2021 (resumos), NBR 6027:2012 (sumários), NBR 6024:2012 (numeração progressiva), NBR 14724:2011 (trabalhos acadêmicos e fichas catalográficas), NBR 6034:2004 (índices), infografia funcional e acessibilidade.',
    questoes: simuladoNormalizacao100Q,
    submodulosIds: ['8.1', '8.2', '8.3', '8.4', '8.5'],
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
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 10.1 a 10.6)',
    descricao:
      'Caderno decisivo com foco no contexto institucional da Câmara dos Deputados: processo legislativo constitucional, RICD (tramitação terminativa conclusiva, Mesa, Comissões), RCCN, estrutura do CEDI, Biblioteca Pedro Aleixo, LAI (Lei 12.527/11), LGPD e RVBI.',
    questoes: simuladoLegislativo100Q,
    submodulosIds: ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6'],
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
    titulo: 'Simulado M13: Língua Portuguesa & Sintaxe',
    tituloCurto: 'M13 - Língua Portuguesa',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (Submódulos 13.1 a 13.4)',
    descricao:
      'Simulado rigoroso cobrindo interpretação e tipologia textual, reescrita de frases com filtro tripartite Cebraspe, sintaxe do período, funções do SE e do QUE, concordância, regência, crase, pontuação semântica, ortografia pós-acordo e colocação pronominal.',
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

export const SIMULADOS_FASE8_REGISTRY: SimuladoManifest[] = [

  {
    id: 'm10a-legislativo-constituicao',
    macroModuloId: 'M10A',
    numero: 10.1,
    titulo: 'Simulado M10-A: Constituição Federal, Processo Legislativo & CEDI',
    tituloCurto: 'M10-A - Constituição & CEDI',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (CF/88, Espécies Normativas, Veto, LexML e RVBI)',
    descricao:
      'Avaliação diagnóstica completa sobre processo legislativo constitucional (arts. 59-69), espécies normativas, tramitação bicameral, veto, fiscalização contábil/financeira (TCU/CPIs), CEDI e LexML.',
    questoes: simuladoLegislativoConstituicao100Q,
    submodulosIds: ['10.1', '10.2', '10.3', '10.4'],
  },
  {
    id: 'm10b-regimentos-camara-congresso',
    macroModuloId: 'M10B',
    numero: 10.2,
    titulo: 'Simulado M10-B: Regimento Interno da Câmara (RICD) & Regimento Comum (RCCN)',
    tituloCurto: 'M10-B - RICD & Regimento Comum',
    subtitulo: '100 Itens C/E Inéditos e Cebraspe Reais (RICD Resolução 17/1989 e RCCN Resolução 1/1970-CN)',
    descricao:
      'Simulado especializado cobrindo a estrutura orgânica da Câmara (Mesa Diretora, Colégio de Líderes), Comissões (Poder Conclusivo art. 24, II), sessões e votação no RICD e sessões conjuntas bicamerais no RCCN (CMO, vetos e MPs).',
    questoes: simuladoRegimentosCamaraCongresso100Q,
    submodulosIds: ['10.5', '10.6', '10.7', '10.8'],
  },
  {
    id: 'simulado-geral-180q',
    macroModuloId: 'GERAL',
    numero: 16,
    titulo: 'Simulado Geral Oficial: Prova Integral da Câmara dos Deputados (180 Itens)',
    tituloCurto: 'Simulado Geral 180Q',
    subtitulo: '180 Itens C/E no Formato Real do Edital: P1 Básicos (70Q) + P2 Específicos (110Q) | 5h00 de Duração',
    descricao:
      'Simulação fidedigna da Prova Objetiva Oficial da Câmara dos Deputados (Edital nº 1/2026): 70 itens de Conhecimentos Básicos (P1) e 110 itens de Conhecimentos Específicos (P2), com tempo de prova de 5h00 no padrão Cebraspe (1 errada anula 1 certa). Inclui os Casos Integradores CI-1 a CI-5 e calibração contra a meta de corte recalibrada (118,00 pontos líquidos).',
    questoes: simuladoGeral180Q,
    submodulosIds: [
      '13.1', '13.2', '13.3', '13.4', '12.1', '12.2', '12.3', '12.4', '11.1', '11.2', '11.3', '11.4', '14.1', '14.2', '14.3', '14.4',
      '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '3.1', '3.2', '3.3', '3.4',
      '4.1', '4.2', '4.3', '4.4', '5.1', '5.2', '5.3', '5.4', '6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '7.1', '7.2', '7.3', '7.4',
      '8.1', '8.2', '8.3', '8.4', '8.5', '9.1', '9.2', '9.3', '9.4', '10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8'
    ],
  },
];

export const SIMULADOS_OFICIAIS_REGISTRY: SimuladoManifest[] = [
  {
    id: 'simulado-oficial-camara-2027',
    macroModuloId: 'OFICIAL2027',
    numero: 17,
    titulo: 'Simulado Oficial Câmara 2027: Prova Objetiva Integral (180 Itens)',
    tituloCurto: 'Simulado Oficial 90+90',
    subtitulo: '180 Itens C/E: P1 Básicos (90Q) + P2 Específicos (90Q) | Pisos 18/27/54 | 5h00 de Prova',
    descricao:
      'Simulação oficial integral da Prova Objetiva da Câmara dos Deputados (Edital nº 1/2026, Cargo 5): 90 itens de Conhecimentos Básicos (P1) e 90 itens de Conhecimentos Específicos (P2), com duração de 5h00 (manhã) e avaliação dos 3 pisos eliminatórios do Cebraspe (P1 < 18, P2 < 27 e Total < 54 eliminam).',
    questoes: simuladoOficialCamara180Q,
    submodulosIds: [
      '13.1', '13.2', '13.3', '13.4', '12.1', '12.2', '12.3', '12.4', '11.1', '11.2', '11.3', '11.4',
      '10.1', '10.2', '10.5', '10.6', '14.1', '14.2', '14.3', '14.4',
      '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7',
      '3.1', '3.2', '3.3', '3.4', '4.1', '4.2', '4.3', '4.4', '5.1', '5.2', '5.3', '5.4',
      '6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '7.1', '7.2', '7.3', '7.4',
      '8.1', '8.2', '8.3', '8.4', '8.5', '9.1', '9.2', '9.3', '9.4', '10.3', '10.4', '10.7', '10.8'
    ],
  },
];

export const ALL_SIMULADOS_REGISTRY: SimuladoManifest[] = [
  ...SIMULADOS_OFICIAIS_REGISTRY,
  ...SIMULADOS_REGISTRY,
  ...MINI_SIMULADOS_REGISTRY,
  ...SIMULADOS_FASE8_REGISTRY,
];

export function getSimuladoById(id: string): SimuladoManifest {
  return (
    ALL_SIMULADOS_REGISTRY.find((s) => s.id === id) ??
    SIMULADOS_REGISTRY[0]
  );
}

export function detectSimuladoIdFromQuestionId(questionId: string): string {
  if (questionId.startsWith('oficial-180q-') || questionId.startsWith('camara-2027-')) return 'simulado-oficial-camara-2027';
  if (questionId.startsWith('geral-180q-')) return 'simulado-geral-180q';
  if (questionId.startsWith('mega-q-')) return 'mega-simulado-camara';
  if (questionId.startsWith('orgaos-q-')) return 'mini-modulo-orgaos';
  if (questionId.startsWith('cat-q-')) return 'm2-catalogacao';
  if (questionId.startsWith('m3-q-')) return 'm3-classificacao';
  if (questionId.startsWith('m4-q-')) return 'm4-recuperacao';
  if (questionId.startsWith('m5-q-')) return 'm5-gestao';
  if (questionId.startsWith('m6-q-')) return 'm6-digital-ia';
  if (questionId.startsWith('m7-q-')) return 'm7-preservacao';
  if (questionId.startsWith('m8-q-')) return 'm8-normalizacao';
  if (questionId.startsWith('m9-q-')) return 'm9-comunicacao';
  if (questionId.startsWith('m10a-q-')) return 'm10a-legislativo-constituicao';
  if (questionId.startsWith('m10b-q-')) return 'm10b-regimentos-camara-congresso';
  if (questionId.startsWith('m10-q-')) return 'm10-legislativo';
  if (questionId.startsWith('m11-q-')) return 'm11-administrativo';
  if (questionId.startsWith('m12-q-')) return 'm12-ingles';
  if (questionId.startsWith('m13-q-')) return 'm13-portugues';
  if (questionId.startsWith('m14-q-')) return 'm14-tecnologia-dados';
  return 'm1-fundamentos';
}

/**
 * F-12: Seleção Estratificada 50/50 com semente determinística.
 * Garante paridade rigorosa de gabaritos (50% Certos e 50% Errados)
 * mesmo quando o banco de origem possui distribuição desbalanceada (ex.: 44 C / 25 E).
 */
export function selecionarQuestoesEstratificadas5050(
  questoes: CebraspeQuestion[],
  totalDesejado: number,
  semente: number = 42
): CebraspeQuestion[] {
  if (!questoes || questoes.length === 0 || totalDesejado <= 0) {
    return [];
  }

  const certas = questoes.filter((q) => q.gabarito === 'C');
  const erradas = questoes.filter((q) => q.gabarito === 'E');

  const metaCertas = Math.floor(totalDesejado / 2);
  const metaErradas = totalDesejado - metaCertas;

  // Embaralhador determinístico com LCG
  const pseudoSort = <T>(arr: T[], seedInit: number): T[] => {
    let seed = seedInit;
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const j = seed % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const certasEmbaralhadas = pseudoSort(certas, semente);
  const erradasEmbaralhadas = pseudoSort(erradas, semente + 1);

  const selecionadasCertas = certasEmbaralhadas.slice(0, Math.min(metaCertas, certas.length));
  const selecionadasErradas = erradasEmbaralhadas.slice(0, Math.min(metaErradas, erradas.length));

  // Intercala para distribuição uniforme
  const resultado: CebraspeQuestion[] = [];
  const maxLen = Math.max(selecionadasCertas.length, selecionadasErradas.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < selecionadasCertas.length) resultado.push(selecionadasCertas[i]);
    if (i < selecionadasErradas.length) resultado.push(selecionadasErradas[i]);
  }

  return resultado.slice(0, totalDesejado);
}



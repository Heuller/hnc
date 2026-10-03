// Serviço Canônico de Diagnóstico de Lacunas, Densidade e Poda Estratégica
// Referência: Edital nº 1/2026 - Analista Legislativo - Bibliotecário (Cebraspe)
// HNC - Heuller na Câmara

import { EDITAL_CAMARA_2026 } from './matrizEdital2026';
import { COURSE_REGISTRY } from '../../content/registry';
import { SIMULADOS_REGISTRY } from '../../content/simuladosRegistry';
import type { BlocoEdital, NivelPrioridadeEdital } from './types';
import type { ModuloFilho } from '../types';

export interface DiretrizPoda {
  moduloId: string;
  eixoNome: string;
  topicoAlvo: string;
  justificativaPoda: string;
  acaoRecomendada: string;
}

export interface DiretrizEnriquecimento {
  moduloId: string;
  eixoNome: string;
  topicoAlvo: string;
  prioridadeEdital: NivelPrioridadeEdital;
  lacunaIdentificada: string;
  acaoRecomendada: string;
}

export interface DiagnosticoSubmodulo {
  id: string;
  numero: string;
  titulo: string;
  moduloId: string;
  caracteresTeoria: number;
  totalAutores: number;
  totalAlertas: number;
  totalCheckpoints: number;
  temQuadro: boolean;
  temMnemonicos: boolean;
  densidadeNivel: 'ALTA' | 'SATISFATORIA' | 'MODERADA';
}

export interface DiagnosticoModulo {
  moduloId: string;
  moduloNumero: number;
  nome: string;
  bloco: BlocoEdital;
  totalCaracteres: number;
  totalAlertas: number;
  totalAutores: number;
  questoesCheckpoints: number;
  questoesSimulado100Q: number;
  questoesTotal: number;
  deficitSimulado100Q: number;
  statusSimulado100Q: 'CONCLUIDO' | 'PENDENTE';
  coberturaTeoricaPercentual: number;
  submodulos: DiagnosticoSubmodulo[];
}

export interface RelatorioLacunasEdital {
  editalRef: string;
  totalEixos: number;
  totalTopicos: number;
  totalSubmodulosAuditados: number;
  totalCaracteresTeoria: number;
  totalAutoresCitados: number;
  totalAlertasBanca: number;
  totalCheckpointsFormativos: number;
  totalQuestoesSimulados100Q: number;
  totalGeralQuestoesDisponiveis: number;
  deficitTotalSimuladosE5: number;
  modulosSimuladoConcluidos: string[];
  modulosSimuladoPendentes: string[];
  taxaProntidaoTeoricaGeral: number;
  eixos: DiagnosticoModulo[];
  diretrizesPoda: DiretrizPoda[];
  diretrizesEnriquecimento: DiretrizEnriquecimento[];
}

export const DIRETRIZES_PODA_ESTRATEGICA: DiretrizPoda[] = [
  {
    moduloId: 'm8',
    eixoNome: 'Normalização Documental e ABNT',
    topicoAlvo: 'Normas Superadas ABNT (NBR 10520:2002 e NBR 6023:2002)',
    justificativaPoda:
      'Estudo isolado de regras antigas (como autor em CAIXA ALTA em citações indiretas na NBR 10520) sem contexto de pegadinha gera confusão e perda de pontos.',
    acaoRecomendada:
      'Podar explicações extensas do padrão antigo. Manter apenas alertas comparativos da mudança para a NBR 10520:2023 (autor sempre em minúsculas) e NBR 6023:2018.',
  },
  {
    moduloId: 'm5',
    eixoNome: 'Gestão de Unidades de Informação e Coleções',
    topicoAlvo: 'Teorias Clássicas de Administração Geral',
    justificativaPoda:
      'Abordagens generalistas de Taylor, Fayol e Ford sem vínculo com unidades de informação têm incidência quase nula na banca Cebraspe para Bibliotecários.',
    acaoRecomendada:
      'Podar digressões genéricas de TGA. Focar estritamente em Gestão de Bibliotecas (Maciel & Mendonça, Almeida, Lancaster) e Etapas de Desenvolvimento de Coleções de Vergueiro.',
  },
  {
    moduloId: 'm6',
    eixoNome: 'Bibliotecas Digitais, Repositórios e Inteligência Artificial',
    topicoAlvo: 'Hardware, Topologia Física de Redes e Protocolos Antigos',
    justificativaPoda:
      'Especificações de cabos, topologia de rede local e periféricos não são cobrados em bibliotecas digitais modernas pela banca Cebraspe.',
    acaoRecomendada:
      'Podar qualquer menção a hardware periférico. Focar em interoperabilidade digital (OAI-PMH, Z39.50, SRU/SRW), DSpace, RAG e Governança de IA.',
  },
  {
    moduloId: 'm2',
    eixoNome: 'Catalogação, Metadados e Modelos Conceituais',
    topicoAlvo: 'Regras Isoladas de AACR2r para Mídias Obsoletas',
    justificativaPoda:
      'Capítulos do AACR2r dedicados a microfichas, fitas cassete e videodiscos não possuem aderência à realidade da Câmara dos Deputados nem às questões recentes.',
    acaoRecomendada:
      'Podar regras casuísticas de mídias analógicas do AACR2r. Focar em pontos de acesso, monografias, publicações seriadas, IFLA LRM (WEMI) e MARC 21.',
  },
  {
    moduloId: 'm7',
    eixoNome: 'Preservação, Conservação e Memória Institucional',
    topicoAlvo: 'Fórmulas Químicas Complexas de Desacidificação em Massa',
    justificativaPoda:
      'O concurso de Bibliotecário da Câmara cobra princípios de conservação preventiva, climatização e reversibilidade, não engenharia química de laboratório.',
    acaoRecomendada:
      'Manter os conceitos essenciais de acidez/lignina e pH neutro, podando processos químicos industriais que fogem ao escopo da atuação do analista.',
  },
];

export const DIRETRIZES_ENRIQUECIMENTO_ESTRATEGICO: DiretrizEnriquecimento[] = [
  {
    moduloId: 'm3',
    eixoNome: 'Classificação Documentária e Indexação',
    topicoAlvo: 'CDD (Tabelas Auxiliares T1-T6), CDU (Sinais) e CDDir',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'Módulo possui excelente base teórica (17.411 chars), mas necessita de simulado de 100 itens cobrindo minuciosamente a Classificação Decimal de Direito de Doris de Queiroz Carvalho e síntese de notações.',
    acaoRecomendada:
      'Desenvolver caderno dedicado de 100 questões C/E na Fase E5 com ênfase na CDDir e sinais da CDU (dois pontos, adição, subagrupamento).',
  },
  {
    moduloId: 'm4',
    eixoNome: 'Recuperação da Informação, Fontes e Usuários',
    topicoAlvo: 'Modelos de RI, Medidas de Eficácia e Entrevista de Grogan',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'Necessidade de fixação prática das 8 etapas da entrevista de referência de Denis Grogan e cálculo de revocação, precisão e fallout em questões da banca.',
    acaoRecomendada:
      'Produzir simulado de 100 itens inéditos Cebraspe na Fase E5 com casos concretos de busca no acervo legislativo.',
  },
  {
    moduloId: 'm5',
    eixoNome: 'Gestão de Unidades de Informação e Coleções',
    topicoAlvo: 'Política de Desenvolvimento de Coleções (Vergueiro) e Avaliação',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'As 6 etapas de Vergueiro (comunidade, seleção, aquisição, desbastamento, avaliação, preservação) e os métodos quantitativos/qualitativos de avaliação de coleções.',
    acaoRecomendada:
      'Criar caderno de 100 questões com cenários de restrições orçamentárias e descarte na administração pública.',
  },
  {
    moduloId: 'm6',
    eixoNome: 'Bibliotecas Digitais, Repositórios e IA',
    topicoAlvo: 'Protocolo OAI-PMH (6 Verbos), DSpace e Aplicações de RAG / LLM',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'O edital 1/2026 exige tanto a infraestrutura de repositórios DSpace/OAI-PMH quanto a fronteira tecnológica de IA Generativa e RAG aplicados a documentos legislativos.',
    acaoRecomendada:
      'Simulado de 100 itens na Fase E5 integrando OAI-PMH, metadados Dublin Core/METS e ética/governança de IA no setor público.',
  },
  {
    moduloId: 'm7',
    eixoNome: 'Preservação, Conservação e Memória Institucional',
    topicoAlvo: 'Modelo OAIS (ISO 14721), Pacotes SIP/AIP/DIP e PREMIS 3.0',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'A preservação digital em repositórios confiáveis (RDC-Arq) e metadados PREMIS/METS constituem armadilhas clássicas do Cebraspe.',
    acaoRecomendada:
      'Elaborar 100 itens C/E cobrindo as 6 entidades funcionais do OAIS e as 5 entidades semânticas do PREMIS.',
  },
  {
    moduloId: 'm8',
    eixoNome: 'Normalização Documental e ABNT',
    topicoAlvo: 'NBR 10520:2023, NBR 6023:2018 e NBR 6028:2021',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'Exige máxima acurácia nas regras de formatação e nas diferenças entre resumo indicativo, informativo e crítico.',
    acaoRecomendada:
      'Elaborar 100 itens C/E explorando minuciosamente as novas regras da NBR 10520:2023 (minúsculas na chamada) e autoria na NBR 6023.',
  },
  {
    moduloId: 'm9',
    eixoNome: 'Comunicação Científica, Ciência Aberta e Métricas',
    topicoAlvo: 'Leis Bibliométricas (Bradford, Lotka, Zipf) e Princípios FAIR',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'Cebraspe frequentemente inverte as fórmulas e objetivos das três leis bibliométricas e confunde vias verde, dourada e diamante de Acesso Aberto.',
    acaoRecomendada:
      'Criar caderno de 100 questões com cálculos, gráficos conceituais e questões de Ciência Aberta e FAIR Data.',
  },
  {
    moduloId: 'm10',
    eixoNome: 'Legislação Federal, Contexto Institucional e Regimento Interno',
    topicoAlvo: 'RICD, Processo Legislativo, CEDI e Rede Virtual de Bibliotecas (RVBI)',
    prioridadeEdital: 'CRITICA',
    lacunaIdentificada:
      'Conteúdo com maior peso estratégico institucional: órgãos da Casa, tramitação de matérias e o papel da Biblioteca Pedro Aleixo e do CEDI na RVBI.',
    acaoRecomendada:
      'Construir simulado de 100 itens com alta densidade no Regimento Interno e atos da Mesa Diretora da Câmara.',
  },
];

export function calcularDiagnosticoSubmodulo(
  sub: ModuloFilho,
  moduloId: string
): DiagnosticoSubmodulo {
  const chars = sub.teoriaDensaMarkdown ? sub.teoriaDensaMarkdown.length : 0;
  const autores = sub.autoresChave ? sub.autoresChave.length : 0;
  const alertas = sub.alertasCebraspe ? sub.alertasCebraspe.length : 0;
  const checkpoints = sub.checkpoints ? sub.checkpoints.length : 0;
  const temQuadro = Boolean(sub.quadroComparativo);
  const temMnemonicos = Boolean(
    sub.mnemonicos &&
    (
      (Array.isArray(sub.mnemonicos.timeline) && sub.mnemonicos.timeline.length > 0) ||
      (Array.isArray(sub.mnemonicos.autores) && sub.mnemonicos.autores.length > 0) ||
      (Array.isArray(sub.mnemonicos.pegadinhas) && sub.mnemonicos.pegadinhas.length > 0)
    )
  );

  let densidadeNivel: 'ALTA' | 'SATISFATORIA' | 'MODERADA' = 'SATISFATORIA';
  if (chars >= 4000 && alertas >= 5 && autores >= 4) {
    densidadeNivel = 'ALTA';
  } else if (chars < 3200 || alertas < 4) {
    densidadeNivel = 'MODERADA';
  }

  return {
    id: sub.id,
    numero: sub.numero,
    titulo: sub.titulo,
    moduloId,
    caracteresTeoria: chars,
    totalAutores: autores,
    totalAlertas: alertas,
    totalCheckpoints: checkpoints,
    temQuadro,
    temMnemonicos,
    densidadeNivel,
  };
}

export function gerarRelatorioLacunas(): RelatorioLacunasEdital {
  const modulosDiagnostico: DiagnosticoModulo[] = [];

  let totalCharsGeral = 0;
  let totalAutoresGeral = 0;
  let totalAlertasGeral = 0;
  let totalCheckpointsGeral = 0;
  let totalQuestoesSimuladoGeral = 0;
  let totalSubmodulosCount = 0;

  const modulosConcluidos100Q: string[] = [];
  const modulosPendentes100Q: string[] = [];

  for (const macroMod of COURSE_REGISTRY) {
    const modId = macroMod.id.toLowerCase();
    const modNumero = macroMod.numero;
    const nome = macroMod.titulo;
    const bloco: BlocoEdital =
      macroMod.numero <= 10 ? 'CONHECIMENTOS_ESPECIFICOS' : 'CONHECIMENTOS_BASICOS';

    // Submódulos (modulosFilhos no schema de MacroModulo)
    const listaFilhos: ModuloFilho[] = macroMod.modulosFilhos || [];

    const submodulosDiag: DiagnosticoSubmodulo[] = listaFilhos.map(sub => {
      const diag = calcularDiagnosticoSubmodulo(sub, modId);
      totalCharsGeral += diag.caracteresTeoria;
      totalAutoresGeral += diag.totalAutores;
      totalAlertasGeral += diag.totalAlertas;
      totalCheckpointsGeral += diag.totalCheckpoints;
      totalSubmodulosCount++;
      return diag;
    });

    const totalCharsMod = submodulosDiag.reduce((acc, s) => acc + s.caracteresTeoria, 0);
    const totalAlertasMod = submodulosDiag.reduce((acc, s) => acc + s.totalAlertas, 0);
    const totalAutoresMod = submodulosDiag.reduce((acc, s) => acc + s.totalAutores, 0);
    const totalCheckpointsMod = submodulosDiag.reduce((acc, s) => acc + s.totalCheckpoints, 0);

    // Verificar simulado no SIMULADOS_REGISTRY
    const simuladoManifest = SIMULADOS_REGISTRY.find(
      s => s.macroModuloId.toLowerCase() === modId || s.numero === modNumero
    );
    const questoesSimulado = simuladoManifest ? simuladoManifest.questoes.length : 0;
    totalQuestoesSimuladoGeral += questoesSimulado;

    const isConcluido = questoesSimulado >= 100;
    if (isConcluido) {
      modulosConcluidos100Q.push(macroMod.codigo);
    } else {
      modulosPendentes100Q.push(macroMod.codigo);
    }

    const deficit = bloco === 'CONHECIMENTOS_ESPECIFICOS'
      ? Math.max(0, 100 - questoesSimulado)
      : Math.max(0, 50 - questoesSimulado);

    // Cobertura teórica baseada em completude estrutural (chars, autores, alertas, quadros, mnemônicos)
    const submodulosCompletos = submodulosDiag.filter(
      s => s.caracteresTeoria >= 2500 && s.totalAutores >= 2 && s.totalAlertas >= 2 && s.temQuadro && s.temMnemonicos
    ).length;
    const coberturaPercentual = submodulosDiag.length > 0
      ? Math.round((submodulosCompletos / submodulosDiag.length) * 100)
      : 0;

    modulosDiagnostico.push({
      moduloId: modId,
      moduloNumero: modNumero,
      nome,
      bloco,
      totalCaracteres: totalCharsMod,
      totalAlertas: totalAlertasMod,
      totalAutores: totalAutoresMod,
      questoesCheckpoints: totalCheckpointsMod,
      questoesSimulado100Q: questoesSimulado,
      questoesTotal: totalCheckpointsMod + questoesSimulado,
      deficitSimulado100Q: deficit,
      statusSimulado100Q: isConcluido ? 'CONCLUIDO' : 'PENDENTE',
      coberturaTeoricaPercentual: coberturaPercentual,
      submodulos: submodulosDiag,
    });
  }

  // Déficit na Fase E5: Meta de 100Q para cada um dos 10 módulos de Conhecimentos Específicos
  const modulosEspecificos = modulosDiagnostico.filter(m => m.bloco === 'CONHECIMENTOS_ESPECIFICOS');
  const deficitE5Especificos = modulosEspecificos.reduce((acc, m) => acc + m.deficitSimulado100Q, 0);

  const taxaProntidaoTeoricaGeral = Math.round(
    modulosDiagnostico.reduce((acc, m) => acc + m.coberturaTeoricaPercentual, 0) /
      modulosDiagnostico.length
  );

  return {
    editalRef: `${EDITAL_CAMARA_2026.orgao} - ${EDITAL_CAMARA_2026.cargo} (${EDITAL_CAMARA_2026.editalNumero})`,
    totalEixos: EDITAL_CAMARA_2026.eixos.length,
    totalTopicos: EDITAL_CAMARA_2026.eixos.reduce((acc, e) => acc + e.topicos.length, 0),
    totalSubmodulosAuditados: totalSubmodulosCount,
    totalCaracteresTeoria: totalCharsGeral,
    totalAutoresCitados: totalAutoresGeral,
    totalAlertasBanca: totalAlertasGeral,
    totalCheckpointsFormativos: totalCheckpointsGeral,
    totalQuestoesSimulados100Q: totalQuestoesSimuladoGeral,
    totalGeralQuestoesDisponiveis: totalCheckpointsGeral + totalQuestoesSimuladoGeral,
    deficitTotalSimuladosE5: deficitE5Especificos,
    modulosSimuladoConcluidos: modulosConcluidos100Q,
    modulosSimuladoPendentes: modulosPendentes100Q,
    taxaProntidaoTeoricaGeral,
    eixos: modulosDiagnostico,
    diretrizesPoda: DIRETRIZES_PODA_ESTRATEGICA,
    diretrizesEnriquecimento: DIRETRIZES_ENRIQUECIMENTO_ESTRATEGICO,
  };
}

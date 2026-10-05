import React, { useState, useEffect, useCallback } from 'react';
import { SIMULADOS_REGISTRY, getSimuladoById, detectSimuladoIdFromQuestionId } from '../content/simuladosRegistry';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore } from '../store/useNavigationStore';
import { COURSE_REGISTRY } from '../content/registry';
import { checkSimuladoAccess, type SimuladoAccessControl } from '../domain/learningEngine';
import { AnswerSheet } from '../components/simulado/AnswerSheet';
import { Badge } from '../components/common/Badge';
import { Kbd } from '../components/common/Kbd';
import { Drawer } from 'vaul';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Award,
  Layers,
  FileCheck,
  AlertTriangle,
  ShieldAlert,
  Lock,
  Unlock,
  ArrowRight,
  Printer,
  BookOpen,
} from 'lucide-react';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

const SUBMODULO_TEMAS: Record<string, { titulo: string; cobrado: string[] }> = {
  '1.1': {
    titulo: 'Evolução Histórica e Epistemologia da CI',
    cobrado: [
      'Diferença epistemológica entre Biblioteconomia, Documentação e Ciência da Informação',
      'Definição canônica de Ciência da Informação por Harold Borko (1968)',
      'Recuperação da Informação de Calvin Mooers (1950) e Memex de Vannevar Bush (1945)',
      'Traité de Documentation de Paul Otlet (1934) e Princípio Monográfico',
      'As 5 Leis da Biblioteconomia de S. R. Ranganathan (1931) e aplicações práticas',
      'Paradigmas Físico, Cognitivo e Social da Ciência da Informação (Capurro e Ellis)',
    ],
  },
  '1.2': {
    titulo: 'Tipologia e Funções das Unidades de Informação',
    cobrado: [
      'Bibliotecas universitárias, especializadas, públicas, escolares, comunitárias e nacionais',
      'Centros de documentação versus centros de informação e bibliotecas digitais',
      'Estruturas organizacionais e administrativas de bibliotecas legislativas e parlamentares',
      'Serviço de referência, DSI (Disseminação Seletiva da Informação) e canais com usuários',
      'Políticas de gestão de acervos e redes cooperativas de catalogação',
    ],
  },
  '1.3': {
    titulo: 'Ética Profissional e Legislação do Bibliotecário',
    cobrado: [
      'Lei Federal nº 4.084/1962: Criação da profissão e atribuições privativas vs. gerais',
      'Decreto regulamentador nº 56.725/1965 e obrigatoriedade de registro profissional',
      'Sistema CFB/CRB: Natureza autárquica, competências normativas, fiscalizatórias e punitivas',
      'Código de Ética Profissional do Bibliotecário: Deveres fundamentais, sigilo e integridade',
      'Infrações disciplinares, gradação de penalidades e responsabilidade técnica perante o CRB',
    ],
  },
  '1.4': {
    titulo: 'Políticas Públicas de Informação e Sociedade do Conhecimento',
    cobrado: [
      'Conceitos basilares da Sociedade da Informação, Sociedade do Conhecimento e Inclusão Digital',
      'Lei de Acesso à Informação (LAI - Lei nº 12.527/2011): Transparência ativa, passiva e sigilo',
      'Marco Civil da Internet (Lei nº 12.965/2014): Neutralidade de rede, privacidade e dados',
      'Movimento de Acesso Aberto (Open Access, Budapest 2002): Vias Verde, Dourada e Diamante/Platina',
      'Políticas nacionais de patrimônio documental, depósito legal e preservação de acervos públicos',
    ],
  },
  '2.1': {
    titulo: 'Princípios de Catalogação (ICP 2016) e AACR2r',
    cobrado: [
      'Declaração de Princípios Internacionais de Catalogação (ICP 2016 da IFLA) e primazia do usuário',
      'Regras e objetivos clássicos de Cutter (1876) para catálogos dicionários integrados',
      'Estrutura geral do AACR2r: Parte I (Descrição por suportes/ISBD) e Parte II (Pontos de acesso)',
      'Fontes principais de informação para monografias e regras de responsabilidade compartilhada e mista',
      'Cabeçalhos de pessoas físicas, entidades coletivas, atos legislativos e títulos uniformes',
    ],
  },
  '2.2': {
    titulo: 'Padrão Resource Description and Access (RDA)',
    cobrado: [
      'Transição do AACR2r para o RDA e objetivos estruturais do Projeto 3R (Restructure and Redesign)',
      'Substituição da DGM pela tríade: Tipo de Conteúdo (Content), Tipo de Mídia (Media) e Tipo de Suporte (Carrier)',
      'Princípio da representação fidedigna: \'Take What You See\' e abolição das abreviaturas latinas',
      'Elementos Núcleo (RDA Core Elements) e Designadores de Relação entre entidades',
      'Adoção da Web Semântica, Linked Open Data e interoperabilidade no RDA Toolkit',
    ],
  },
  '2.3': {
    titulo: 'Modelos Conceituais IFLA (FRBR, FRAD, FRSAD e IFLA LRM)',
    cobrado: [
      'Metodologia Entidade-Relacionamento e as 4 Tarefas do Usuário dos FRBR: Encontrar, Identificar, Selecionar e Obter',
      'Entidades do Grupo 1 (WEMI): Obra, Expressão, Manifestação e Item e suas relações hierárquicas',
      'Agentes e nomes nos modelos FRAD (Pessoa, Família, Entidade Coletiva) e FRSAD (Thema e Nomen)',
      'Modelo IFLA LRM (2017): Superclasse LRM-E1 (Res), Agente restrito a humanos/coletivos e nova tarefa Explorar',
      'Modelagem de agregações, antologias, periódicos e relações de exemplificação de itens',
    ],
  },
  '2.4': {
    titulo: 'Formatos de Codificação e Metadados (MARC 21 e Dublin Core)',
    cobrado: [
      'Norma ISO 2709 e estrutura do registro MARC 21: Líder (24 car.), Diretório automático (12 car.) e Campos',
      'Campos de controle (001 a 008) versus campos de dados variáveis, indicadores e subcampos ($)',
      'Campos bibliográficos nucleares: 020 (ISBN), 080/082 (CDU/CDD), 1XX (Autor), 245/250/260/264, 300, 5XX, 6XX e 7XX',
      'Dublin Core Simples (DCMI): Os 15 elementos universais e o Princípio de Um-para-Um',
      'Dublin Core Qualificado: Refinamentos de elementos, esquemas de codificação e Princípio do \'Dumb-Down\'',
    ],
  },
};

export const SimuladoPage: React.FC = () => {
  const {
    sessaoAtivaSimulado,
    salvarRespostaSimulado,
    mudarQuestaoSimulado,
    iniciarOuRetomarSimulado,
    finalizarSimulado,
    reiniciarSimulado,
    secoesVisualizadas,
    checkpointsRespondidos,
    devBypassSimuladoLock,
    setDevBypassSimuladoLock,
  } = useProgressStore();

  const {
    setSelectedSubmodule,
    setActiveView,
    targetSimuladoId,
    setTargetSimuladoId,
  } = useNavigationStore();

  const [tempoInicio] = useState<number>(() => Date.now());
  const [relatorioFinal, setRelatorioFinal] = useState<SimuladoFinalizado | null>(null);
  const [isAnswerSheetMobileOpen, setIsAnswerSheetMobileOpen] = useState(false);

  // Seleção de simulado ativo
  const initialSimuladoId = () => {
    if (targetSimuladoId) return targetSimuladoId;
    const respostasAtuais = sessaoAtivaSimulado?.respostas || {};
    const firstKey = Object.keys(respostasAtuais)[0];
    if (firstKey) {
      return detectSimuladoIdFromQuestionId(firstKey);
    }
    return 'm1-fundamentos';
  };
  const [selectedSimuladoId, setSelectedSimuladoId] = useState<string>(initialSimuladoId);
  const simuladoAtivo = getSimuladoById(selectedSimuladoId);
  const isMegaSimulado = selectedSimuladoId === 'mega-simulado-camara';

  useEffect(() => {
    if (targetSimuladoId && targetSimuladoId !== selectedSimuladoId) {
      setSelectedSimuladoId(targetSimuladoId);
      setTargetSimuladoId(undefined);
    }
  }, [targetSimuladoId, selectedSimuladoId, setTargetSimuladoId]);

  useEffect(() => {
    iniciarOuRetomarSimulado();
  }, [iniciarOuRetomarSimulado]);

  const currentIndex = sessaoAtivaSimulado?.currentIndex ?? 0;
  const respostas = sessaoAtivaSimulado?.respostas ?? {};
  const currentQuestion = simuladoAtivo.questoes[currentIndex];
  const respostaAtual = respostas[currentQuestion?.id];

  // Controle de certeza por questão sem efeitos colaterais em cascata
  const [certezaManualMap, setCertezaManualMap] = useState<
    Record<string, 'certeza' | 'provavel' | 'chute' | undefined>
  >({});

  const certezaSelecionada = currentQuestion
    ? (certezaManualMap[currentQuestion.id] !== undefined
        ? certezaManualMap[currentQuestion.id]
        : respostaAtual?.certeza)
    : undefined;

  const setCertezaSelecionada = (nivel: 'certeza' | 'provavel' | 'chute' | undefined) => {
    if (currentQuestion) {
      setCertezaManualMap((prev) => ({ ...prev, [currentQuestion.id]: nivel }));
      if (respostaAtual?.resposta && nivel) {
        salvarRespostaSimulado(currentQuestion.id, respostaAtual.resposta, nivel, respostaAtual.acertou);
      }
    }
  };

  // Placar em tempo real
  let acertosCount = 0;
  let errosCount = 0;
  let brancoCount = 0;
  Object.values(respostas).forEach((r) => {
    if (r.resposta === 'BRANCO') {
      brancoCount++;
    } else if (r.acertou) {
      acertosCount++;
    } else {
      errosCount++;
    }
  });
  const notaLiquidaAtual = acertosCount - errosCount;
  const respondidasCount = Object.keys(respostas).length;

  const currentQId = currentQuestion?.id;
  const currentQGabarito = currentQuestion?.gabarito;

  const handleJulgar = useCallback(
    (resposta: 'C' | 'E' | 'BRANCO') => {
      if (!currentQId || !currentQGabarito) return;

      const acertou = resposta === 'BRANCO' ? undefined : resposta === currentQGabarito;
      salvarRespostaSimulado(currentQId, resposta, certezaSelecionada, acertou);
    },
    [currentQId, currentQGabarito, certezaSelecionada, salvarRespostaSimulado]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < simuladoAtivo.questoes.length - 1) {
      mudarQuestaoSimulado(currentIndex + 1);
    }
  }, [currentIndex, mudarQuestaoSimulado, simuladoAtivo.questoes.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      mudarQuestaoSimulado(currentIndex - 1);
    }
  }, [currentIndex, mudarQuestaoSimulado]);

  // Atalhos de teclado no desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignora se estiver digitando em input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'c') {
        e.preventDefault();
        handleJulgar('C');
      } else if (key === 'e') {
        e.preventDefault();
        handleJulgar('E');
      } else if (key === 'b') {
        e.preventDefault();
        handleJulgar('BRANCO');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleJulgar, handleNext, handlePrev]);

  const handleFinalizar = () => {
    const tempoGasto = Math.round((Date.now() - tempoInicio) / 1000);
    const resultado = finalizarSimulado(tempoGasto);
    setRelatorioFinal(resultado);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
function getSubmoduloTemaInfo(subId: string): { titulo: string; cobrado: string[] } {
  if (SUBMODULO_TEMAS[subId]) {
    return SUBMODULO_TEMAS[subId];
  }
  for (const macro of COURSE_REGISTRY) {
    const filho = macro.modulosFilhos?.find((f) => f.numero === subId || f.id === subId);
    if (filho) {
      const cobradoList = filho.alertasCebraspe && filho.alertasCebraspe.length > 0
        ? filho.alertasCebraspe.slice(0, 4)
        : filho.autoresChave && filho.autoresChave.length > 0
        ? filho.autoresChave.map((a) => `Doutrina e jurisprudência canônica: ${a}`)
        : [filho.descricaoCurta];
      return {
        titulo: filho.titulo,
        cobrado: cobradoList,
      };
    }
  }
  return {
    titulo: `Submódulo ${subId}`,
    cobrado: ['Conteúdo e doutrina programática correspondente ao edital nº 1/2026.'],
  };
}

  const handleNovoSimulado = () => {
    reiniciarSimulado();
    setRelatorioFinal(null);
    iniciarOuRetomarSimulado();
  };


  const renderSimuladoSelector = () => (
    <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface rounded-xl border border-border shadow-xs">
      <span className="font-mono text-xs font-bold text-ink-2 px-2 uppercase tracking-wider hidden sm:inline">
        Simulado:
      </span>
      {SIMULADOS_REGISTRY.map((sim) => {
        const isSelected = sim.id === selectedSimuladoId;
        return (
          <button
            key={sim.id}
            type="button"
            onClick={() => {
              if (sim.id !== selectedSimuladoId) {
                setSelectedSimuladoId(sim.id);
                mudarQuestaoSimulado(0);
              }
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all cursor-pointer ${
              isSelected
                ? 'bg-accent text-white shadow-xs'
                : 'text-ink-2 hover:text-ink hover:bg-surface-2'
            }`}
          >
            <span>{sim.tituloCurto}</span>
            <span
              className={`font-mono text-[10px] px-1.5 py-0.2 rounded ${
                isSelected ? 'bg-white/20 text-white' : 'bg-surface-2 text-ink-2 border border-border/40'
              }`}
            >
              {sim.questoes.length}Q
            </span>
          </button>
        );
      })}
    </div>
  );

    const moduloAtual = COURSE_REGISTRY.find(
      (m) => m.codigo.toUpperCase() === simuladoAtivo.macroModuloId.toUpperCase() || m.numero === simuladoAtivo.numero
    ) || COURSE_REGISTRY[0];
    const moduloAtualSubmodules = moduloAtual.modulosFilhos || [];
    const accessControl: SimuladoAccessControl = isMegaSimulado
      ? {
          isUnlocked: true,
          totalSubmodulosConcluidos: 14,
          totalSubmodulosExigidos: 14,
          percentualLiberacao: 100,
          submodulosPendentes: [],
          mensagemBloqueio: '',
        }
      : checkSimuladoAccess(
          moduloAtualSubmodules,
          secoesVisualizadas || {},
          checkpointsRespondidos || {},
          devBypassSimuladoLock
        );

    // SE O SIMULADO ESTIVER BLOQUEADO (Parte G - Requisito Pedagógico)
    if (!accessControl.isUnlocked) {
      return (
        <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 space-y-6 animate-fadeIn">
          {renderSimuladoSelector()}
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-editorial-sm space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-6 border-b border-border">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <Lock className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                    REQUISITO PEDAGÓGICO
                  </span>
                  <span className="text-xs font-mono text-ink-2">Metodologia Cebraspe</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-tight">
                  Simulado de {simuladoAtivo.questoes.length} Questões Bloqueado
                </h1>
                <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed max-w-xl">
                  O Simulado Integral com fator de correção Cebraspe (1 Erro Anula 1 Certo) é a etapa final de consolidação. Para preservar a validade diagnóstica do teste, ele é liberado após o domínio prévio dos submódulos teóricos.
                </p>
              </div>
            </div>

            {/* Barra de Progresso de Liberação */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="font-semibold text-ink">Requisitos de Desbloqueio</span>
                <span className="font-mono font-bold text-accent">
                  {accessControl.totalSubmodulosConcluidos} de {accessControl.totalSubmodulosExigidos} submódulos concluídos ({accessControl.percentualLiberacao}%)
                </span>
              </div>
              <div className="w-full h-2.5 bg-surface-2 rounded-full overflow-hidden border border-border">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${accessControl.percentualLiberacao}%` }}
                />
              </div>
              <p className="text-[11px] text-ink-2 font-serif">
                Critério: 100% das seções lidas E taxa de acerto &ge; 70% nos checkpoints de cada submódulo.
              </p>
            </div>

            {/* Lista de Submódulos Pendentes com Ações */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-2 font-semibold block text-left">
                Submódulos da Disciplina {simuladoAtivo.macroModuloId} ({simuladoAtivo.tituloCurto})
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {moduloAtualSubmodules.map((sub) => {
                  const pendente = accessControl.submodulosPendentes.find((p) => p.id === sub.id);
                  const isConcluidoSub = !pendente;

                  return (
                    <div
                      key={sub.id}
                      className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left transition-colors ${
                        isConcluidoSub
                          ? 'bg-ok-soft/30 border-ok/40'
                          : 'bg-surface-2/60 border-border'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center font-mono text-xs font-bold text-ink shrink-0">
                          {sub.numero}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-sans font-bold text-ink truncate">
                            {sub.titulo}
                          </div>
                          <div className="text-[11px] text-ink-2 flex items-center gap-1.5 mt-0.5">
                            {isConcluidoSub ? (
                              <span className="text-ok font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Domínio Aferido
                              </span>
                            ) : pendente?.status === 'em_revisao_dirigida' || (pendente?.status as string) === 'em_revisao' ? (
                              <span className="text-amber-500 font-medium">
                                Em Revisão Dirigida (Refaça os checkpoints para &ge; 85%)
                              </span>
                            ) : (
                              <span>Em Leitura (Conclua as seções teóricas)</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSubmodule(sub.numero);
                          setActiveView('teoria');
                        }}
                        className="py-1.5 px-3 rounded-lg bg-surface border border-border hover:border-accent text-ink text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0 cursor-pointer min-h-[36px]"
                      >
                        <span>Estudar Submódulo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bypass Modo Desenvolvedor / Avaliação Local */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-ink-2 font-mono text-[11px]">
                Ambiente de Avaliação & Testes Locais
              </span>
              <button
                type="button"
                onClick={() => setDevBypassSimuladoLock(true)}
                className="py-2 px-3.5 rounded-lg bg-surface-2 hover:bg-surface border border-border hover:border-accent text-ink-2 hover:text-ink font-mono text-xs flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Unlock className="w-3.5 h-3.5 text-accent" />
                <span>Desbloquear Simulado para Testes (Bypass DEV)</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

  // Se o simulado foi finalizado nesta sessão, exibe o relatório final
  if (relatorioFinal) {
    // Quebra por submódulo
    const quebraSubmodulos: Record<
      string,
      { certos: number; errados: number; brancos: number; total: number }
    > = {};
    simuladoAtivo.submodulosIds.forEach((id) => {
      quebraSubmodulos[id] = { certos: 0, errados: 0, brancos: 0, total: 25 };
    });

    simuladoAtivo.questoes.forEach((q) => {
      const r = relatorioFinal.respostas[q.id];
      const sub = quebraSubmodulos[q.submoduloId];
      if (sub) {
        if (!r || r.resposta === 'BRANCO') {
          sub.brancos++;
        } else if (r.resposta === q.gabarito) {
          sub.certos++;
        } else {
          sub.errados++;
        }
      }
    });

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn print:max-w-none print:p-0">
        {/* Cabeçalho do Relatório */}
        <section className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs print:border-none print:shadow-none print:p-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border print:border-black">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-accent print:text-black" />
                <span className="font-mono text-xs font-bold text-accent print:text-black uppercase tracking-wider">
                  Relatório de Desempenho Oficial Cebraspe
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink print:text-black tracking-tight">
                {simuladoAtivo.titulo}
              </h1>
            </div>
            <div className="flex items-center gap-2 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="py-2.5 px-4 rounded-lg bg-surface-2 border border-border hover:border-accent text-ink font-sans font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
                title="Imprimir ou Salvar em PDF"
              >
                <Printer className="w-4 h-4 text-accent" />
                <span>Imprimir / Salvar PDF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-surface-2 print:bg-gray-100 rounded-xl border border-border print:border-gray-300 my-6">
            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Nota Líquida</span>
              <div className="text-3xl font-mono font-bold text-ink print:text-black">
                {relatorioFinal.notaLiquida > 0
                  ? `+${relatorioFinal.notaLiquida}`
                  : relatorioFinal.notaLiquida}
              </div>
              <span className="text-[11px] font-mono text-ink-2 print:text-gray-600">máx: 100 pts</span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Aproveitamento</span>
              <div className="text-3xl font-mono font-bold text-accent print:text-black">
                {relatorioFinal.aproveitamentoPercent}%
              </div>
              <span className="text-[11px] font-mono text-ink-2 print:text-gray-600">fator C - E</span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Acertos / Erros</span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-ink print:text-black flex items-center gap-2">
                <span className="text-ok">✓ {relatorioFinal.certos}</span>
                <span className="text-err">✗ {relatorioFinal.errados}</span>
              </div>
              <span className="text-[11px] font-mono text-ink-2 print:text-gray-600">
                ⚪ {relatorioFinal.emBranco} em branco
              </span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Tempo Gasto</span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-ink print:text-black">
                {Math.floor(relatorioFinal.tempoGastoSegundos / 60)}m{' '}
                {relatorioFinal.tempoGastoSegundos % 60}s
              </div>
              <span className="text-[11px] font-mono text-ink-2 print:text-gray-600">
                média: ~
                {Math.round(relatorioFinal.tempoGastoSegundos / 100)}s/item
              </span>
            </div>
          </div>

          {/* Relatório de Calibração Metacognitiva */}
          <div className="p-5 rounded-xl border border-accent/40 bg-accent-soft/20 my-6 space-y-4 print:border-gray-400 print:bg-gray-50 print:break-inside-avoid">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent print:text-black" />
              <h2 className="font-sans font-bold text-ink print:text-black text-base">
                Calibração Metacognitiva e Gestão de Risco
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-2 print:text-gray-800 font-serif leading-relaxed">
              No Cebraspe, cada item chutado e errado anula um acerto suado. Veja como a sua
              certeza subjetiva se traduziu em assertividade real:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-surface print:bg-white p-3 rounded-lg border border-border print:border-gray-300">
                <span className="text-xs font-sans font-semibold text-ink print:text-black">
                  Tenho Certeza
                </span>
                <div className="text-2xl font-mono font-bold text-ok mt-1">
                  {relatorioFinal.calibracao.acertoCertezaPercent}%
                </div>
                <span className="text-[11px] text-ink-2 print:text-gray-600 font-sans">taxa de acerto real</span>
              </div>

              <div className="bg-surface print:bg-white p-3 rounded-lg border border-border print:border-gray-300">
                <span className="text-xs font-sans font-semibold text-ink print:text-black">
                  Provável
                </span>
                <div className="text-2xl font-mono font-bold text-accent print:text-black mt-1">
                  {relatorioFinal.calibracao.acertoProvavelPercent}%
                </div>
                <span className="text-[11px] text-ink-2 print:text-gray-600 font-sans">taxa de acerto real</span>
              </div>

              <div className="bg-surface print:bg-white p-3 rounded-lg border border-border print:border-gray-300">
                <span className="text-xs font-sans font-semibold text-ink print:text-black">
                  Chute Consciente
                </span>
                <div className="text-2xl font-mono font-bold text-err mt-1">
                  {relatorioFinal.calibracao.acertoChutePercent}%
                </div>
                <span className="text-[11px] text-ink-2 print:text-gray-600 font-sans">taxa de acerto real</span>
              </div>
            </div>

            {/* Impacto da Abstenção Estratégica */}
            {relatorioFinal.calibracao.ganhoPotencialSeChuteBranco > 0 ? (
              <div className="p-3.5 bg-alerta-soft rounded-lg border border-alerta-cebraspe/30 flex items-start gap-2.5 print:bg-gray-100 print:border-black">
                <ShieldAlert className="w-5 h-5 text-alerta-cebraspe print:text-black shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-alerta-cebraspe print:text-black font-sans leading-relaxed">
                  <strong>Diagnóstico de Chutes Prejudiciais:</strong> Se todos os itens marcados
                  como "Chute" tivessem sido deixados em branco, sua Nota Líquida teria sido{' '}
                  <strong className="underline">
                    {relatorioFinal.notaLiquida +
                      relatorioFinal.calibracao.ganhoPotencialSeChuteBranco}{' '}
                    pontos
                  </strong>{' '}
                  (+{relatorioFinal.calibracao.ganhoPotencialSeChuteBranco} pontos ganhos por
                  abstenção). No Cebraspe, não saber e deixar em branco é uma habilidade de
                  pontuação.
                </div>
              </div>
            ) : (
              <div className="p-3.5 bg-ok-soft rounded-lg border border-ok/30 flex items-start gap-2.5 print:bg-gray-100 print:border-black">
                <CheckCircle2 className="w-5 h-5 text-ok print:text-black shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-ok print:text-black font-sans leading-relaxed">
                  <strong>Gestão de Risco Eficiente:</strong> Seus palpites tiveram saldo positivo ou
                  neutro em relação à pontuação líquida. Mantenha essa calibração apurada.
                </div>
              </div>
            )}
          </div>

          {/* Desempenho por Módulo-Filho */}
          <div className="space-y-3 my-6 print:break-inside-avoid">
            <h3 className="font-sans font-bold text-ink print:text-black text-sm sm:text-base">
              Desempenho por Submódulo (25 itens cada)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(quebraSubmodulos).map(([subId, dados]) => {
                const subNota = dados.certos - dados.errados;
                const subPercent = Math.max(0, Math.round((subNota / dados.total) * 100));
                const temaInfo = getSubmoduloTemaInfo(subId);

                return (
                  <div
                    key={subId}
                    className="p-3.5 bg-surface-2 print:bg-white rounded-lg border border-border print:border-gray-300 flex flex-col justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-accent print:text-black">
                          Submódulo {subId}
                        </span>
                        <div className="text-right">
                          <span className="font-mono text-sm font-bold text-ink print:text-black">
                            {subNota > 0 ? `+${subNota}` : subNota} pts
                          </span>
                          <span className="text-[11px] font-mono text-ink-2 print:text-gray-600 ml-1">
                            ({subPercent}%)
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-ink print:text-black mt-0.5">
                        {temaInfo?.titulo || `Módulo ${subId}`}
                      </div>
                      <div className="text-[11px] font-mono text-ink-2 print:text-gray-600 mt-1">
                        <span className="text-ok font-semibold">{dados.certos} C</span> •{' '}
                        <span className="text-err font-semibold">{dados.errados} E</span> •{' '}
                        <span className="text-ink-2">{dados.brancos} Branco</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bloco: O que foi cobrado por tema (E.6) */}
          <div className="my-8 pt-6 border-t border-border print:border-gray-300 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-accent print:text-black" />
              <h3 className="font-sans font-bold text-ink print:text-black text-base sm:text-lg">
                O Que Foi Cobrado por Tema no Simulado
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-2 print:text-gray-700 font-serif mb-4 leading-relaxed">
              Mapeamento sistemático dos núcleos conceituais e normativos avaliados pela banca Cebraspe ao longo dos 100 itens de {simuladoAtivo.tituloCurto}:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {simuladoAtivo.submodulosIds.map((subId) => {
                const tema = getSubmoduloTemaInfo(subId);
                return (
                <div
                  key={subId}
                  className="p-4 rounded-xl bg-surface-2/70 print:bg-white border border-border print:border-gray-300 space-y-2 print:break-inside-avoid"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-accent/10 text-accent print:bg-gray-200 print:text-black border border-accent/20">
                      {subId}
                    </span>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-ink print:text-black">
                      {tema.titulo}
                    </h4>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {tema.cobrado.map((topico, idx) => (
                      <li
                        key={idx}
                        className="text-[11px] sm:text-xs text-ink-2 print:text-gray-800 font-serif leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-accent print:text-black font-bold shrink-0">•</span>
                        <span>{topico}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </div>

          {/* Gabarito Detalhado e Análise de Itens: Agrupado por Submódulo — Erros Primeiro (E.6) */}
          <div className="my-8 pt-6 border-t border-border print:border-gray-300 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-accent print:text-black" />
                  <h3 className="font-sans font-bold text-ink print:text-black text-base sm:text-lg">
                    Gabarito Detalhado e Análise de Itens
                  </h3>
                </div>
                <p className="text-xs text-ink-2 print:text-gray-700 font-serif mt-1">
                  Agrupado por submódulo com priorização pedagógica: <strong>erros primeiro</strong>, seguidos por itens em branco e acertos.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-ink-2 print:hidden">
                <span className="px-2 py-0.5 rounded bg-err-soft text-err font-bold">1º Erros</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-alerta-soft text-alerta-cebraspe font-bold">2º Branco</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded bg-ok-soft text-ok font-bold">3º Acertos</span>
              </div>
            </div>

            {/* Loop por Submódulo */}
            {simuladoAtivo.submodulosIds.map((subId) => {
              const dadosSub = quebraSubmodulos[subId];
              const subNota = dadosSub ? dadosSub.certos - dadosSub.errados : 0;
              const subPercent = dadosSub ? Math.max(0, Math.round((subNota / dadosSub.total) * 100)) : 0;
              const temaInfo = getSubmoduloTemaInfo(subId);

              // Filtra questões do submódulo e ordena: Erros primeiro, depois Branco, depois Acertos
              const questoesSub = simuladoAtivo.questoes.filter((q) => q.submoduloId === subId);
              const questoesOrdenadas = [...questoesSub].sort((a, b) => {
                const respA = relatorioFinal.respostas[a.id]?.resposta || 'BRANCO';
                const respB = relatorioFinal.respostas[b.id]?.resposta || 'BRANCO';

                const pesoA = respA === 'BRANCO' ? 2 : respA === a.gabarito ? 3 : 1;
                const pesoB = respB === 'BRANCO' ? 2 : respB === b.gabarito ? 3 : 1;

                if (pesoA !== pesoB) return pesoA - pesoB; // 1 (ERRO) < 2 (BRANCO) < 3 (ACERTO)
                return a.numero - b.numero;
              });

              return (
                <div
                  key={subId}
                  className="space-y-4 pt-4 border-t border-border/60 print:border-gray-400 print:break-before-page"
                >
                  {/* Cabeçalho do Submódulo */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-surface-2 print:bg-gray-100 rounded-xl border border-border print:border-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-accent text-accent-contrast">
                        Submódulo {subId}
                      </span>
                      <h4 className="font-sans font-bold text-sm text-ink print:text-black">
                        {temaInfo?.titulo || `Submódulo ${subId}`}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-ok font-bold">{dadosSub?.certos ?? 0} certos</span>
                      <span className="text-err font-bold">{dadosSub?.errados ?? 0} errados</span>
                      <span className="text-ink-2">{dadosSub?.brancos ?? 0} brancos</span>
                      <span className="font-bold text-ink print:text-black ml-1">
                        Saldo: {subNota > 0 ? `+${subNota}` : subNota} pts ({subPercent}%)
                      </span>
                    </div>
                  </div>

                  {/* Lista de Itens do Submódulo */}
                  <div className="space-y-4">
                    {questoesOrdenadas.map((q) => {
                      const respObj = relatorioFinal.respostas[q.id];
                      const respostaCandidato = respObj?.resposta || 'BRANCO';
                      const isBranco = !respObj || respostaCandidato === 'BRANCO';
                      const isAcerto = !isBranco && respostaCandidato === q.gabarito;
                      const isErro = !isBranco && !isAcerto;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 sm:p-5 rounded-xl border transition-all print:break-inside-avoid print:bg-white print:border-gray-300 ${
                            isErro
                              ? 'bg-err-soft/15 border-err/40'
                              : isBranco
                              ? 'bg-alerta-soft/15 border-alerta-cebraspe/40'
                              : 'bg-surface border-border'
                          }`}
                        >
                          {/* Topo do Item: Número + Status + Fonte */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60 print:border-gray-200">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-ink print:text-black">
                                Item #{q.numero}
                              </span>

                              {/* Status Badge */}
                              {isErro && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-err text-white">
                                  <XCircle className="w-3 h-3" />
                                  <span>ERRO (-1 pt líquido)</span>
                                </span>
                              )}
                              {isBranco && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-alerta-soft text-alerta-cebraspe border border-alerta-cebraspe/30">
                                  <HelpCircle className="w-3 h-3" />
                                  <span>EM BRANCO (0 pts)</span>
                                </span>
                              )}
                              {isAcerto && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-ok text-white">
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>ACERTO (+1 pt líquido)</span>
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-3 text-xs font-mono">
                              <span className="text-ink-2 print:text-gray-700">
                                Sua Resposta:{' '}
                                <strong
                                  className={
                                    isErro
                                      ? 'text-err'
                                      : isAcerto
                                      ? 'text-ok'
                                      : 'text-alerta-cebraspe'
                                  }
                                >
                                  {isBranco ? 'EM BRANCO' : respostaCandidato}
                                </strong>
                              </span>
                              <span className="text-ink-2 print:text-gray-700">
                                Gabarito Oficial:{' '}
                                <strong className="text-ink print:text-black">
                                  {q.gabarito}
                                </strong>
                              </span>
                              {q.fonteOriginal?.descricao && (
                                <span className="text-[10px] text-ink-2 print:text-gray-500 hidden sm:inline">
                                  ({q.fonteOriginal.descricao})
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Enunciado da Questão */}
                          {q.contexto && (
                            <p className="text-xs text-ink-2 print:text-gray-700 font-serif italic mb-2 leading-relaxed">
                              {q.contexto}
                            </p>
                          )}
                          <p className="text-sm text-ink print:text-black font-serif leading-relaxed font-medium">
                            {q.item}
                          </p>

                          {/* Pegadinha Cebraspe (se houver) */}
                          {q.armadilhaBanca && (
                            <div className="mt-3.5 p-3 rounded-lg bg-amber-500/10 border-l-4 border-l-amber-500 border border-border/50 text-xs font-serif leading-relaxed text-ink print:text-black space-y-1 print:border-gray-400">
                              <div className="flex items-center gap-1.5 font-sans font-bold text-amber-700 dark:text-amber-400 print:text-black text-[11px] uppercase tracking-wide">
                                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                                <span>Armadilha Cebraspe Mapeada</span>
                              </div>
                              <p className="text-ink print:text-black m-0 leading-relaxed font-sans text-xs">
                                {q.armadilhaBanca}
                              </p>
                            </div>
                          )}

                          {/* Justificativa e Fundamentação Técnica */}
                          <div className="mt-2.5 p-3 rounded-lg bg-surface-2 print:bg-gray-50 border border-border/80 print:border-gray-300 text-xs font-serif leading-relaxed text-ink print:text-black space-y-1">
                            <div className="flex items-center gap-1.5 font-sans font-bold text-ink-2 print:text-gray-700 text-[11px] uppercase tracking-wide">
                              <BookOpen className="w-3.5 h-3.5 text-accent print:text-black shrink-0" />
                              <span>Justificativa e Fundamentação Técnica</span>
                            </div>
                            <p className="text-ink print:text-black m-0 leading-relaxed font-serif text-xs">
                              {q.justificativa}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ações pós-simulado */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleNovoSimulado}
                className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-primary text-primary-text font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Realizar Novo Simulado</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setRelatorioFinal(null);
                }}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Revisar Respostas (Modo Interativo)</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-surface-2 border border-border hover:border-accent text-ink font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-accent" />
              <span>Imprimir / Salvar PDF</span>
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Visualização Normal da Questão
  return (
    <div className="max-w-6xl mx-auto space-y-4 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {renderSimuladoSelector()}
        <span className="text-xs font-mono text-ink-2 hidden md:inline">
          {simuladoAtivo.subtitulo}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Coluna Principal da Questão */}
        <main className="flex-1 min-w-0 space-y-6">
        {/* Barra Superior do Simulado: Placar em Tempo Real */}
        <section
          aria-label="Placar em Tempo Real"
          className="bg-surface rounded-xl border border-border p-4 shadow-xs flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
              ITEM {currentIndex + 1} / 100
            </span>
            <span className="text-xs font-mono text-ink-2">
              Submódulo {currentQuestion.submoduloId}
            </span>
            <span className="text-xs font-mono text-ink-2 capitalize">
              • Nível {currentQuestion.dificuldade}
            </span>
          </div>

          {/* Placar Cebraspe: C - E */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-ink-2">Líquida:</span>
              <strong className="text-sm font-bold text-ink">
                {notaLiquidaAtual > 0 ? `+${notaLiquidaAtual}` : notaLiquidaAtual}
              </strong>
            </div>
            <div className="flex items-center gap-2 text-ink-2">
              <span className="text-ok">✓ {acertosCount}</span>
              <span className="text-err">✗ {errosCount}</span>
              <span>⚪ {brancoCount}</span>
            </div>
            <span className="text-ink-2">({respondidasCount}/100)</span>
          </div>
        </section>

        {/* Card do Enunciado Cebraspe */}
        <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs space-y-6">
          {/* Texto Canônico do Item */}
          <div className="font-serif text-ink text-base sm:text-lg leading-relaxed pt-2">
            {currentQuestion.item}
          </div>

          {/* Seletor Metacognitivo de Certeza (Pré-julgamento) */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-sans font-semibold text-ink-2 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Nível de Confiança Metacognitiva
              </span>
              <span className="text-[11px] font-sans text-ink-2">
                (opcional, para calibrar risco)
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setCertezaSelecionada('certeza')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  certezaSelecionada === 'certeza'
                    ? 'bg-ok-soft border-ok text-ok font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Tenho certeza
              </button>
              <button
                type="button"
                onClick={() => setCertezaSelecionada('provavel')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  certezaSelecionada === 'provavel'
                    ? 'bg-accent-soft border-accent text-accent font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Provável
              </button>
              <button
                type="button"
                onClick={() => setCertezaSelecionada('chute')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  certezaSelecionada === 'chute'
                    ? 'bg-alerta-soft border-alerta-cebraspe text-alerta-cebraspe font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Chute consciente
              </button>
            </div>
          </div>

          {/* 3 Botões de Ação Canônica: CERTO / ERRADO / DEIXAR EM BRANCO */}
          <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => handleJulgar('C')}
              className={`py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all active:scale-98 ${
                respostaAtual?.resposta === 'C'
                  ? 'bg-ok-soft border-ok text-ok shadow-xs'
                  : 'bg-surface border-border text-ink hover:border-ok/60'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-ok" />
              <span>CERTO</span>
              <Kbd>C</Kbd>
            </button>

            <button
              type="button"
              onClick={() => handleJulgar('E')}
              className={`py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all active:scale-98 ${
                respostaAtual?.resposta === 'E'
                  ? 'bg-err-soft border-err text-err shadow-xs'
                  : 'bg-surface border-border text-ink hover:border-err/60'
              }`}
            >
              <XCircle className="w-5 h-5 text-err" />
              <span>ERRADO</span>
              <Kbd>E</Kbd>
            </button>

            <button
              type="button"
              onClick={() => handleJulgar('BRANCO')}
              className={`py-3.5 px-4 rounded-xl font-sans font-medium text-sm flex items-center justify-center gap-2 border-2 transition-all active:scale-98 ${
                respostaAtual?.resposta === 'BRANCO'
                  ? 'bg-surface-2 border-accent text-ink shadow-xs font-bold'
                  : 'bg-surface border-border text-ink-2 hover:border-border/80'
              }`}
            >
              <HelpCircle className="w-5 h-5 text-ink-2" />
              <span>EM BRANCO</span>
              <Kbd>B</Kbd>
            </button>
          </div>

          {/* Se for Mega Simulado da Câmara (120Q): Modo Prova Real (justificativas somente no relatório pós-prova) */}
          {isMegaSimulado && respostaAtual && (
            <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-ink-2 animate-fadeIn">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>Resposta gravada para o espelho de prova.</span>
              </span>
              <span className="font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                Simulado de Prova (Gabarito no Final)
              </span>
            </div>
          )}

          {/* Nos Simulados de 100Q (M1 a M14): Estudo Reverso Imediato Obrigatório */}
          {!isMegaSimulado && respostaAtual && (
            <div className="pt-6 border-t border-border space-y-4 animate-fadeIn" aria-live="polite">
              {/* Badge de cabeçalho do Estudo Reverso */}
              <div className="flex items-center justify-between gap-2 pb-1 border-b border-border/60 flex-wrap">
                <span className="font-mono text-[11px] font-bold text-accent px-2.5 py-0.5 rounded bg-accent-soft border border-accent/25 uppercase tracking-wider">
                  ESTUDO REVERSO IMEDIATO
                </span>
                <span className="text-[11px] font-mono text-ink-2">
                  Regra Cebraspe: Uma errada anula uma certa
                </span>
              </div>

              {/* Resultado e Impacto na Pontuação */}
              <div
                className={`p-4 rounded-xl border flex items-center justify-between gap-3 flex-wrap ${
                  respostaAtual.resposta === 'BRANCO'
                    ? 'bg-surface-2 border-border'
                    : respostaAtual.acertou
                    ? 'bg-ok-soft border-ok text-ok shadow-2xs'
                    : 'bg-err-soft border-err text-err shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {respostaAtual.resposta === 'BRANCO' ? (
                    <HelpCircle className="w-5 h-5 text-ink-2" />
                  ) : respostaAtual.acertou ? (
                    <CheckCircle2 className="w-5 h-5 text-ok" />
                  ) : (
                    <XCircle className="w-5 h-5 text-err" />
                  )}

                  <span className="font-sans font-bold text-sm">
                    {respostaAtual.resposta === 'BRANCO'
                      ? 'Item deixado em branco (0 pontos líquidos)'
                      : respostaAtual.acertou
                      ? 'Você acertou! (+1 ponto líquido Cebraspe)'
                      : 'Você errou! (-1 ponto líquido: anula uma questão certa)'}
                  </span>
                </div>

                <Badge
                  variant={currentQuestion.gabarito === 'C' ? 'certo' : 'errado'}
                  size="md"
                >
                  {`Gabarito Oficial: ${currentQuestion.gabarito === 'C' ? 'CERTO' : 'ERRADO'}`}
                </Badge>
              </div>

              {/* Destaque: Por que está certa / Por que está errada (Armadilha) */}
              {currentQuestion.armadilhaBanca && (
                <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-l-amber-500 border border-amber-500/25 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>
                      {currentQuestion.gabarito === 'E'
                        ? 'Por que está errada? (Armadilha da Banca)'
                        : 'Ponto Chave da Assertiva Certa'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-ink leading-relaxed">
                    {currentQuestion.armadilhaBanca}
                  </p>
                </div>
              )}

              {/* Justificativa Canônica e Fundamentação Técnica */}
              <div className="p-5 bg-surface-2 rounded-xl border border-border space-y-2">
                <div className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-ink-2">
                  <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Justificativa e Fundamentação Técnica</span>
                </div>
                <p className="text-xs sm:text-sm font-serif text-ink leading-relaxed">
                  {currentQuestion.justificativa}
                </p>
              </div>

              {/* Fonte Original Auditada */}
              <div className="flex items-center justify-between text-xs text-ink-2 font-mono pt-1">
                <span>
                  Fonte:{' '}
                  {currentQuestion.fonteOriginal.tipo === 'cebraspe-real'
                    ? currentQuestion.fonteOriginal.descricao
                    : 'Questão Inédita no Padrão Cebraspe'}
                </span>
                {!currentQuestion.fonteOriginal.verificado && (
                  <span className="text-alerta-cebraspe font-sans text-[11px]">
                    (fonte não verificada)
                  </span>
                )}
              </div>
            </div>
          )}
        </article>

        {/* Rodapé de Navegação da Questão */}
        <nav
          aria-label="Navegação do Simulado"
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
        >
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-1.5 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
              <Kbd>←</Kbd>
            </button>

            <button
              type="button"
              disabled={currentIndex === 99}
              onClick={handleNext}
              className="flex-1 sm:flex-none py-2.5 px-4 rounded-lg bg-surface border border-border text-ink hover:border-accent text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-1.5 disabled:opacity-40 transition-colors"
            >
              <span>Próxima</span>
              <Kbd>→</Kbd>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Botão Mobile da Folha de Respostas */}
            <button
              type="button"
              onClick={() => setIsAnswerSheetMobileOpen(true)}
              className="lg:hidden flex-1 sm:flex-none py-2.5 px-4 rounded-lg bg-surface-2 border border-border text-ink font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-accent" />
              <span>Folha (100)</span>
            </button>

            <button
              type="button"
              onClick={handleFinalizar}
              className="flex-1 sm:flex-none py-2.5 px-5 rounded-lg bg-primary text-primary-text font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-xs"
            >
              <FileCheck className="w-4 h-4" />
              <span>Finalizar Simulado</span>
            </button>
          </div>
        </nav>
      </main>

      {/* Coluna Lateral da Folha de Respostas no Desktop */}
      <aside
        aria-label="Folha de respostas das 100 questões"
        className="hidden lg:block w-80 shrink-0 bg-surface rounded-2xl border border-border p-4.5 shadow-xs sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <h3 className="font-sans font-bold text-ink text-sm">Folha de Respostas</h3>
          </div>
          <span className="font-mono text-xs text-ink-2">100 itens</span>
        </div>

        <AnswerSheet
          questions={simuladoAtivo.questoes}
          respostas={respostas}
          currentIndex={currentIndex}
          onSelectQuestion={(idx) => mudarQuestaoSimulado(idx)}
        />
      </aside>

      {/* Gaveta Mobile da Folha de Respostas (Vaul Drawer) */}
      <Drawer.Root
        open={isAnswerSheetMobileOpen}
        onOpenChange={setIsAnswerSheetMobileOpen}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs" />
          <Drawer.Content className="bg-surface border-t border-border flex flex-col rounded-t-2xl max-h-[88vh] fixed bottom-0 left-0 right-0 z-50 focus:outline-none">
            <div className="p-4 bg-surface rounded-t-2xl flex flex-col max-h-[88vh]">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-border mb-3" />
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <Drawer.Title className="font-sans font-bold text-ink text-base">
                  Folha de Respostas (100 Itens)
                </Drawer.Title>
                <Drawer.Description className="sr-only">
                  Grade de resposta das questões
                </Drawer.Description>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <AnswerSheet
                  questions={simuladoAtivo.questoes}
                  respostas={respostas}
                  currentIndex={currentIndex}
                  onSelectQuestion={(idx) => {
                    mudarQuestaoSimulado(idx);
                    setIsAnswerSheetMobileOpen(false);
                  }}
                />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      </div>
    </div>
  );
};

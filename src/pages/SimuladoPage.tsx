import { sessaoPrecisaAtualizacao } from '../domain/versaoConteudoSimulado';
import React, { useState, useEffect, useEffectEvent } from 'react';
import { ALL_SIMULADOS_REGISTRY, getSimuladoById } from '../content/simuladosRegistry';
import { useProgressStore } from '../store/useProgressStore';
import { useNavigationStore, getSimuladoIdFromHash, getQuestionIndexFromHash } from '../store/useNavigationStore';
import { simuladoSessionService } from '../services/simuladoSessionService';
import { ALL_COURSE_MODULES } from '../content/registry';
import { checkSimuladoAccess, type SimuladoAccessControl } from '../domain/learningEngine';
import { AnswerSheet } from '../components/simulado/AnswerSheet';
import { PainelDecisaoPortaoSimulado } from '../components/simulado/PainelDecisaoPortaoSimulado';
import { Badge } from '../components/common/Badge';
import { PILOTO_RACIOCINIO } from '../content/estudoReverso/pilotoRaciocinio';
import { PainelEstudoReverso } from '../components/common/PainelEstudoReverso';
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
  Keyboard,
  Info,
} from 'lucide-react';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';
import { calcularMediaTempoPorItem } from '../domain/progressoEngine';
import { obterInfoProveniencia } from '../domain/proveniencia';
import { avaliarDesempenhoSimuladoOficial180, contarItensJaVistosNosModulos } from '../domain/simuladoOficialEngine';

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
    ultimoSimuladoAcessadoId,
    obterSessaoSimulado,
    salvarRespostaSimulado,
    mudarQuestaoSimulado,
    iniciarOuRetomarSimulado,
    salvarTempoSimulado,
    finalizarSimulado,
    reiniciarSimulado,
    setSimuladoAtivoId,
    secoesVisualizadas,
    checkpointsRespondidos,
    devBypassSimuladoLock,
    setDevBypassSimuladoLock,
    itemAttempts,
  } = useProgressStore();

  const {
    setSelectedSubmodule,
    setActiveView,
    targetSimuladoId,
    targetQuestionId,
    setTargetQuestionId,
    setTargetSimuladoId,
    navigateToSimulado,
  } = useNavigationStore();

  const [catalogoAberto, setCatalogoAberto] = useState(false);
  const [relatorioFinal, setRelatorioFinal] = useState<SimuladoFinalizado | null>(null);
  const [isAnswerSheetMobileOpen, setIsAnswerSheetMobileOpen] = useState(false);
  const [categoriaSimuladoFiltro, setCategoriaSimuladoFiltro] = useState<
    'todos' | 'especificos' | 'basicos' | 'especiais'
  >('todos');

  // Seleção de simulado ativo com restauração resiliente de sessão (URL, Atômica Local, Store)
  const initialSimuladoId = () => {
    const isKnownSimulado = (id: string) => ALL_SIMULADOS_REGISTRY.some(s => s.id === id) || id.startsWith('treino-eixo-');
    if (targetSimuladoId && isKnownSimulado(targetSimuladoId)) return targetSimuladoId;
    const fromHash = getSimuladoIdFromHash();
    if (fromHash && isKnownSimulado(fromHash)) return fromHash;
    const lastActiveLocal = simuladoSessionService.obterUltimoSimuladoIdAtivo();
    if (lastActiveLocal && isKnownSimulado(lastActiveLocal)) return lastActiveLocal;
    if (ultimoSimuladoAcessadoId && isKnownSimulado(ultimoSimuladoAcessadoId)) {
      return ultimoSimuladoAcessadoId;
    }
    return 'm1-fundamentos';
  };
  const [selectedSimuladoId, setSelectedSimuladoId] = useState<string>(initialSimuladoId);

  // Consome o destino externo uma vez, inclusive quando já é o caderno inicial.
  useEffect(() => {
    if (!targetSimuladoId) return;
    const frame = requestAnimationFrame(() => {
      if (targetSimuladoId !== selectedSimuladoId) setSelectedSimuladoId(targetSimuladoId);
      setTargetSimuladoId(undefined);
    });
    return () => cancelAnimationFrame(frame);
  }, [targetSimuladoId, selectedSimuladoId, setTargetSimuladoId]);

  const simuladoAtivo = getSimuladoById(selectedSimuladoId);
  const isMegaSimulado = selectedSimuladoId === 'mega-simulado-camara';

  // Registra e retoma a sessão do simulado atual
  useEffect(() => {
    setSimuladoAtivoId(selectedSimuladoId);
    iniciarOuRetomarSimulado(selectedSimuladoId);
  }, [selectedSimuladoId, setSimuladoAtivoId, iniciarOuRetomarSimulado]);

  // Modo de reteste apenas com erros (Regra 2.4 B)
  const sessaoAtual = obterSessaoSimulado(selectedSimuladoId);
  const itensFiltradosReteste = sessaoAtual.itensSelecionados;

  const questoesPorId = new Map(simuladoAtivo.questoes.map(q => [q.id, q]));
  const questoesExibidas = itensFiltradosReteste?.length
    ? itensFiltradosReteste.flatMap(id => { const q = questoesPorId.get(id); return q ? [q] : []; })
    : simuladoAtivo.questoes;

  useEffect(() => {
    if (!targetQuestionId || (targetSimuladoId && targetSimuladoId !== selectedSimuladoId)) return;
    const index = questoesExibidas.findIndex(q => q.id === targetQuestionId);
    if (index >= 0) mudarQuestaoSimulado(index, selectedSimuladoId);
    setTargetQuestionId(undefined);
  }, [targetQuestionId, targetSimuladoId, selectedSimuladoId, questoesExibidas, mudarQuestaoSimulado, setTargetQuestionId]);

  const sessaoDesatualizada = sessaoPrecisaAtualizacao(sessaoAtual, simuladoAtivo.questoes);
  const currentIndex = Math.max(
    0,
    Math.min((questoesExibidas.length || 1) - 1, sessaoAtual.currentIndex ?? 0)
  );

  // Restaura questão inicial da URL hash apenas no carregamento da página / F5
  const hasRestoredUrlQuestion = React.useRef(false);
  useEffect(() => {
    if (hasRestoredUrlQuestion.current) return;
    hasRestoredUrlQuestion.current = true;
    const hashSimuladoId = getSimuladoIdFromHash();
    const urlQIndex = getQuestionIndexFromHash();
    if (
      urlQIndex !== undefined &&
      urlQIndex >= 0 &&
      (!hashSimuladoId || hashSimuladoId === selectedSimuladoId)
    ) {
      if (urlQIndex !== (sessaoAtual.currentIndex ?? 0)) {
        mudarQuestaoSimulado(urlQIndex, selectedSimuladoId);
      }
    }
  }, [selectedSimuladoId, mudarQuestaoSimulado, sessaoAtual.currentIndex]);

  // Suporte a navegação por histórico do navegador (Back / Forward)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleHashChange = () => {
      const hashSimuladoId = getSimuladoIdFromHash();
      const urlQIndex = getQuestionIndexFromHash();
      const activeId = hashSimuladoId || selectedSimuladoId;
      if (urlQIndex !== undefined && urlQIndex >= 0) {
        mudarQuestaoSimulado(urlQIndex, activeId);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [selectedSimuladoId, mudarQuestaoSimulado]);

  // Sincroniza URL hash com simulado ativo e índice da questão (resiliência contra reload/F5)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const targetHash = `#simulado?id=${selectedSimuladoId}&q=${currentIndex + 1}`;
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, [selectedSimuladoId, currentIndex]);
  const respostas = sessaoAtual.respostas ?? {};
  const modoProva = sessaoAtual.modoProva ?? false;
  const setModoProva = (value: boolean) => useProgressStore.getState().definirModoProvaSimulado(selectedSimuladoId, value);
  const currentQuestion = questoesExibidas[currentIndex];
  const respostaAtual = respostas[currentQuestion?.id];

  // Controle de tempo persistente por simulado (F-13: sincronizado sem efeito em cascata)
  const [prevSimuladoId, setPrevSimuladoId] = useState(selectedSimuladoId);
  const [tempoGasto, setTempoGasto] = useState<number>(() => sessaoAtual.tempoGastoSegundos || 0);

  if (selectedSimuladoId !== prevSimuladoId) {
    setPrevSimuladoId(selectedSimuladoId);
    setTempoGasto(sessaoAtual.tempoGastoSegundos || 0);
  }

  useEffect(() => {
    if (sessaoDesatualizada || relatorioFinal) return;
    const timer = setInterval(() => setTempoGasto(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [selectedSimuladoId, sessaoDesatualizada, relatorioFinal]);

  useEffect(() => {
    if (!sessaoDesatualizada && !relatorioFinal && tempoGasto > 0 && tempoGasto % 5 === 0) salvarTempoSimulado(selectedSimuladoId, tempoGasto);
  }, [tempoGasto, selectedSimuladoId, sessaoDesatualizada, relatorioFinal, salvarTempoSimulado]);

  // Controle de certeza por questão sem efeitos colaterais em cascata
  const [certezaManualMap, setCertezaManualMap] = useState<
    Record<string, 'certeza' | 'provavel' | 'chute' | undefined>
  >({});

  const certezaSelecionada = currentQuestion
    ? (certezaManualMap[currentQuestion.id] !== undefined
        ? certezaManualMap[currentQuestion.id]
        : respostaAtual?.certeza)
    : undefined;

  const isItemRespondido = respostaAtual?.resposta !== undefined;

  const setCertezaSelecionada = (nivel: 'certeza' | 'provavel' | 'chute' | undefined) => {
    if (currentQuestion && !isItemRespondido) {
      setCertezaManualMap((prev) => ({ ...prev, [currentQuestion.id]: nivel }));
    }
  };

  // Placar em tempo real da sessão do simulado atual
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

  const handleJulgar = (resposta: 'C' | 'E' | 'BRANCO') => {
    if (!currentQId || !currentQGabarito || sessaoDesatualizada || isItemRespondido) return;
    const acertou = resposta === 'BRANCO' ? undefined : resposta === currentQGabarito;
    salvarRespostaSimulado(selectedSimuladoId, currentQId, resposta, certezaSelecionada, acertou);
  };
  const handleNext = () => {
    if (currentIndex < questoesExibidas.length - 1) mudarQuestaoSimulado(currentIndex + 1, selectedSimuladoId);
  };
  const handlePrev = () => {
    if (currentIndex > 0) mudarQuestaoSimulado(currentIndex - 1, selectedSimuladoId);
  };

  // Atalhos de teclado no desktop
  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
      if (sessaoDesatualizada || relatorioFinal) return;
      const alvo = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(alvo.tagName) || alvo.isContentEditable) {
        return;
      }
      // Preserva atalhos do sistema (Ctrl/Cmd+C para copiar não pode julgar o item)
      if (e.ctrlKey || e.metaKey || e.altKey) {
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
  });
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFinalizar = () => {
    if (sessaoDesatualizada) return;
    salvarTempoSimulado(selectedSimuladoId, tempoGasto);
    const resultado = finalizarSimulado(tempoGasto, selectedSimuladoId);
    setRelatorioFinal(resultado);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function getSubmoduloTemaInfo(subId: string): { titulo: string; cobrado: string[] } {
    if (SUBMODULO_TEMAS[subId]) {
      return SUBMODULO_TEMAS[subId];
    }
    for (const macro of ALL_COURSE_MODULES) {
      const filho = macro.modulosFilhos?.find((f) => f.numero === subId || f.id === subId);
      if (filho) {
        const cobradoList = filho.alertasCebraspe && filho.alertasCebraspe.length > 0
          ? filho.alertasCebraspe.slice(0, 4)
          : filho.autoresChave && filho.autoresChave.length > 0
          ? filho.autoresChave.map((a: string) => `Doutrina e jurisprudência canônica: ${a}`)
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
    reiniciarSimulado(selectedSimuladoId);
    setTempoGasto(0);
    setRelatorioFinal(null);
    iniciarOuRetomarSimulado(selectedSimuladoId);
  };

  const handleRefazerErros = (itensErradosIds: string[]) => {
    if (itensErradosIds.length === 0) return;
    const embaralhados = [...itensErradosIds].sort(() => Math.random() - 0.5);
    reiniciarSimulado(selectedSimuladoId);
    iniciarOuRetomarSimulado(selectedSimuladoId, embaralhados);
    setTempoGasto(0);
    setRelatorioFinal(null);
    mudarQuestaoSimulado(0, selectedSimuladoId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNovoSimuladoCompleto = () => {
    handleNovoSimulado();
  };

  const simuladosFiltrados = ALL_SIMULADOS_REGISTRY.filter((sim) => {
    if (categoriaSimuladoFiltro === 'especificos') {
      return sim.numero >= 1 && sim.numero <= 10 && sim.id !== 'mini-modulo-orgaos';
    }
    if (categoriaSimuladoFiltro === 'basicos') {
      return sim.numero >= 11 && sim.numero <= 14;
    }
    if (categoriaSimuladoFiltro === 'especiais') {
      return (
        sim.id === 'submodulos-ampliados' ||
        sim.id === 'mega-simulado-camara' ||
        sim.id === 'mini-modulo-orgaos' ||
        sim.id === 'simulado-geral-180q'
      );
    }
    return true;
  });

  const renderSimuladoSelector = () => (
    <details open={catalogoAberto} onToggle={event => setCatalogoAberto(event.currentTarget.open)} className="w-full rounded-xl border border-border bg-surface p-3">
      <summary className="min-h-[44px] cursor-pointer font-semibold text-sm text-ink foco">Trocar caderno · {simuladoAtivo.questoes.length} itens neste treino</summary>
      <div className="space-y-3 pt-3">
      {/* Abas de Categorias */}
      <div className="flex items-center gap-1.5 p-1 bg-surface-2 rounded-xl border border-border w-fit text-xs font-sans overflow-x-auto max-w-full">
        <button
          type="button"
          onClick={() => setCategoriaSimuladoFiltro('todos')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
            categoriaSimuladoFiltro === 'todos'
              ? 'bg-surface text-ink shadow-xs border border-border'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Todos ({ALL_SIMULADOS_REGISTRY.length})
        </button>
        <button
          type="button"
          onClick={() => setCategoriaSimuladoFiltro('especificos')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
            categoriaSimuladoFiltro === 'especificos'
              ? 'bg-surface text-ink shadow-xs border border-border'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Específicos · M1 a M10 (10)
        </button>
        <button
          type="button"
          onClick={() => setCategoriaSimuladoFiltro('basicos')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
            categoriaSimuladoFiltro === 'basicos'
              ? 'bg-surface text-ink shadow-xs border border-border'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Básicos · M11 a M14 (4)
        </button>
        <button
          type="button"
          onClick={() => setCategoriaSimuladoFiltro('especiais')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
            categoriaSimuladoFiltro === 'especiais'
              ? 'bg-surface text-ink shadow-xs border border-border'
              : 'text-ink-2 hover:text-ink'
          }`}
        >
          Mega, Geral & Especiais (4)
        </button>
      </div>

      {/* Grade de Pílulas de Seleção */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface rounded-xl border border-border shadow-xs">
        <span className="font-mono text-xs font-bold text-ink-2 px-2 uppercase tracking-wider hidden sm:inline">
          Simulado:
        </span>
        {simuladosFiltrados.map((sim) => {
          const isSelected = sim.id === selectedSimuladoId;
          const isMini = sim.id === 'mini-modulo-orgaos';
          return (
            <button
              key={sim.id}
              type="button"
              onClick={() => {
                if (sim.id !== selectedSimuladoId) {
                  salvarTempoSimulado(selectedSimuladoId, tempoGasto);
                  navigateToSimulado(sim.id);
                  setCatalogoAberto(false);
                  setSimuladoAtivoId(sim.id);
                  iniciarOuRetomarSimulado(sim.id);
                  if (typeof window !== 'undefined') {
                    window.history.replaceState(null, '', `#simulado?id=${sim.id}&q=1`);
                  }
                }
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-accent text-white shadow-xs'
                  : 'text-ink-2 hover:text-ink hover:bg-surface-2'
              } ${isMini ? 'border border-emerald-500/30' : ''}`}
            >
              <span>{isMini ? '⭐ ' : ''}{sim.tituloCurto}</span>
              <span
                className={`font-mono text-xs px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-surface-2 text-ink-2 border border-border/40'
                }`}
              >
                {sim.questoes.length}Q
              </span>
              {Boolean(sim.itensForaConferencia) && (
                <span
                  title={`${sim.itensForaConferencia} itens em conferência fora desta prova`}
                  className="font-mono text-[10px] px-1 py-0.2 rounded bg-amber-500/20 text-accent dark:text-amber-400 border border-amber-500/30"
                >
                  -{sim.itensForaConferencia} conf.
                </span>
              )}
            </button>
          );
        })}
      </div>
      </div>
    </details>
  );

    const moduloAtual =
      ALL_COURSE_MODULES.find(
        (m) =>
          m.codigo.toUpperCase() === simuladoAtivo.macroModuloId.toUpperCase() ||
          m.id.toLowerCase() === simuladoAtivo.macroModuloId.toLowerCase() ||
          m.numero === simuladoAtivo.numero
      ) || ALL_COURSE_MODULES[0];
    const moduloAtualSubmodules = moduloAtual.modulosFilhos || [];
    const isMiniSimulado = simuladoAtivo.id === 'mini-modulo-orgaos';
    const accessControl: SimuladoAccessControl =
      isMegaSimulado || isMiniSimulado || selectedSimuladoId === 'submodulos-ampliados' || selectedSimuladoId.startsWith('treino-eixo-')
        ? {
            isUnlocked: true,
            totalSubmodulosConcluidos: 1,
            totalSubmodulosExigidos: 1,
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
    if (simuladoAtivo.questoes.length === 0) {
    return <section className="space-y-5 max-w-3xl mx-auto"><h1 className="text-2xl font-serif">{simuladoAtivo.titulo}</h1>
      <p>Este eixo ainda não possui questões elegíveis. Estude a teoria correspondente ou escolha outro caderno.</p>
      <button type="button" className="min-h-[44px] px-4 rounded-xl border border-border" onClick={() => { setSelectedSubmodule(simuladoAtivo.submodulosIds[0] || '1.1'); setActiveView('teoria'); }}>Estudar este eixo na teoria</button>
      {renderSimuladoSelector()}</section>;
  }
  if (!accessControl.isUnlocked) {
      return (
        <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 space-y-6 animate-fadeIn">
      <p className="text-sm font-semibold text-ink-2" role="note">{modoProva ? 'Modo prova · Gabarito e pontuação somente ao finalizar' : 'Modo estudo · Correção e raciocínio após cada resposta'}</p>
      {renderSimuladoSelector()}


      {/* Aviso de Itens em Conferência Fora do Simulado (C8 / C14) */}
      {Boolean(simuladoAtivo.itensForaConferencia) && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2.5 text-xs text-accent dark:text-amber-400">
          <AlertTriangle className="w-4 h-4 shrink-0 text-accent" />
          <span className="font-sans">
            <strong>Itens em conferência isolados:</strong> Este caderno possui{" "}
            <strong>{simuladoAtivo.itensForaConferencia} {simuladoAtivo.itensForaConferencia === 1 ? "item" : "itens"} em conferência fora desta prova</strong>{" "}
            ({simuladoAtivo.questoes.length} itens ativos de {simuladoAtivo.totalNominal || 100} nominais). Itens identificados como pendentes foram retirados deste treino; isso não homologa os demais.
          </span>
        </div>
      )}
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-editorial-sm space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-6 border-b border-border">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-accent shrink-0">
                <Lock className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
                    REQUISITO PEDAGÓGICO
                  </span>
                  <span className="text-xs font-mono text-ink-2">Metodologia Cebraspe</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink tracking-normal">
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
              <p className="text-xs text-ink-2 font-serif">
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
                          <div className="text-xs text-ink-2 flex items-center gap-1.5 mt-0.5">
                            {isConcluidoSub ? (
                              <span className="text-ok font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Etapa concluída
                              </span>
                            ) : pendente?.status === 'em_revisao_dirigida' || (pendente?.status as string) === 'em_revisao' ? (
                              <span className="text-accent font-medium">
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
              <span className="text-ink-2 font-mono text-xs">
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
    const questoesRelatorio = relatorioFinal.itensSelecionados?.length
      ? simuladoAtivo.questoes.filter(q => relatorioFinal.itensSelecionados!.includes(q.id))
      : simuladoAtivo.questoes;
    // Quebra por submódulo
    const quebraSubmodulos: Record<
      string,
      { certos: number; errados: number; brancos: number; total: number }
    > = {};
    simuladoAtivo.submodulosIds.forEach((id) => {
      quebraSubmodulos[id] = { certos: 0, errados: 0, brancos: 0, total: 25 };
    });

    questoesRelatorio.forEach((q) => {
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

    const itensVistosInfo = contarItensJaVistosNosModulos(
      questoesRelatorio,
      itemAttempts,
      checkpointsRespondidos
    );

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn print:max-w-none print:p-0">
        {/* Cabeçalho do Relatório */}
        <section className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs print:border-none print:shadow-none print:p-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border print:border-black">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-accent print:text-black" />
                <span className="font-mono text-xs font-bold text-accent print:text-black uppercase tracking-wider">
                  Relatório de Desempenho no Modelo Cebraspe (Fator 1:1)
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-bold text-ink print:text-black tracking-normal">
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
              <span className="text-xs font-mono text-ink-2 print:text-gray-600">máx: {relatorioFinal.certos + relatorioFinal.errados + relatorioFinal.emBranco} pts</span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Aproveitamento</span>
              <div className="text-3xl font-mono font-bold text-accent print:text-black">
                {relatorioFinal.aproveitamentoPercent}%
              </div>
              <span className="text-xs font-mono text-ink-2 print:text-gray-600">fator C - E</span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Acertos / Erros</span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-ink print:text-black flex items-center gap-2">
                <span className="text-ok">✓ {relatorioFinal.certos}</span>
                <span className="text-err">✗ {relatorioFinal.errados}</span>
              </div>
              <span className="text-xs font-mono text-ink-2 print:text-gray-600">
                ⚪ {relatorioFinal.emBranco} em branco
              </span>
            </div>

            <div>
              <span className="text-xs font-sans text-ink-2 print:text-gray-700">Tempo Gasto</span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-ink print:text-black">
                {Math.floor(relatorioFinal.tempoGastoSegundos / 60)}m{' '}
                {relatorioFinal.tempoGastoSegundos % 60}s
              </div>
              <span className="text-xs font-mono text-ink-2 print:text-gray-600">
                média: ~
                {calcularMediaTempoPorItem(
                  relatorioFinal.tempoGastoSegundos,
                  relatorioFinal.certos + relatorioFinal.errados + relatorioFinal.emBranco
                )}
                s/item ({relatorioFinal.certos + relatorioFinal.errados + relatorioFinal.emBranco} itens)
              </span>
            </div>
          </div>

                    {/* Alerta Informativo C4: Itens Já Vistos nos Módulos e Não Impacto no Domínio */}
          {(questoesRelatorio.length === 180 || selectedSimuladoId.includes('180') || itensVistosInfo.totalVistos > 0) && (
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-ink space-y-1.5 my-6 print:border-gray-300 print:bg-gray-50 print:break-inside-avoid">
              <div className="flex items-center gap-2 font-sans font-bold text-sm text-accent dark:text-amber-400 print:text-black">
                <Info className="w-4 h-4 shrink-0" />
                <span>{itensVistosInfo.totalVistos} de {questoesRelatorio.length} itens já vistos nos módulos ({itensVistosInfo.porcentagemVistos}%)</span>
              </div>
              <p className="text-xs text-ink-2 print:text-gray-700">
                Este simulado consolida itens do acervo para treinamento de ritmo de prova, gestão de tempo e aferição de pisos eliminatórios (18/27/54). Seu resultado não afeta os indicadores nem os portões de domínio da trilha de estudos.
              </p>
            </div>
          )}

          {/* Painel Oficial de Pisos Eliminatórios Cebraspe (P22 / Edital 8.11.5) */}
          {(() => {
            const is180Q = questoesRelatorio.length === 180 || selectedSimuladoId.includes('180') || selectedSimuladoId.includes('oficial');
            if (!is180Q) return null;

            const avaliacao = avaliarDesempenhoSimuladoOficial180(questoesRelatorio, relatorioFinal.respostas);

            return (
              <div
                className={`p-5 rounded-xl border my-6 space-y-4 print:break-inside-avoid ${
                  avaliacao.eliminado
                    ? 'bg-err-soft/30 border-err/40'
                    : 'bg-emerald-500/10 border-emerald-500/30'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {avaliacao.eliminado ? (
                      <ShieldAlert className="w-6 h-6 text-err shrink-0" />
                    ) : (
                      <Award className="w-6 h-6 text-ok dark:text-emerald-400 shrink-0" />
                    )}
                    <div>
                      <h3 className="font-sans font-bold text-base text-ink">
                        {avaliacao.statusTexto}
                      </h3>
                      <span className="text-xs text-ink-2 font-mono block">
                        Critérios Oficiais do Edital nº 1/2026 (Itens 8.11.5 e 8.11.6)
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shrink-0 ${
                      avaliacao.eliminado
                        ? 'bg-err-soft text-err border-err/30'
                        : 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40'
                    }`}
                  >
                    {!avaliacao.isSimuladoOficial180 ? 'Treino parcial' : avaliacao.eliminado ? 'Pisos não atingidos' : 'Pisos atingidos neste treino'}
                  </span>
                </div>

                {/* Grid dos 3 Pisos Eliminatórios */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {/* P1 Básicos */}
                  <div className="bg-surface p-3.5 rounded-lg border border-border space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-sans text-ink">P1: Conhecimentos Básicos</span>
                      <span className={`text-xs font-mono font-bold ${avaliacao.p1.aprovadoPiso ? 'text-ok' : 'text-err'}`}>
                        {avaliacao.p1.aprovadoPiso ? '✓ Piso atingido no treino' : 'Piso não atingido'}
                      </span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-ink">
                      {avaliacao.p1.notaLiquida > 0 ? `+${avaliacao.p1.notaLiquida}` : avaliacao.p1.notaLiquida}
                      <span className="text-xs font-normal text-ink-2 font-sans ml-1">pts</span>
                    </div>
                    <div className="text-xs text-ink-2 flex justify-between font-mono">
                      <span>Piso: &ge; {avaliacao.p1.pisoMinimo} pts</span>
                      <span>({avaliacao.p1.certos}C / {avaliacao.p1.errados}E / {avaliacao.p1.emBranco}B)</span>
                    </div>
                  </div>

                  {/* P2 Específicos */}
                  <div className="bg-surface p-3.5 rounded-lg border border-border space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-sans text-ink">P2: Conhecimentos Específicos</span>
                      <span className={`text-xs font-mono font-bold ${avaliacao.p2.aprovadoPiso ? 'text-ok' : 'text-err'}`}>
                        {avaliacao.p2.aprovadoPiso ? '✓ Piso atingido no treino' : 'Piso não atingido'}
                      </span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-ink">
                      {avaliacao.p2.notaLiquida > 0 ? `+${avaliacao.p2.notaLiquida}` : avaliacao.p2.notaLiquida}
                      <span className="text-xs font-normal text-ink-2 font-sans ml-1">pts</span>
                    </div>
                    <div className="text-xs text-ink-2 flex justify-between font-mono">
                      <span>Piso: &ge; {avaliacao.p2.pisoMinimo} pts</span>
                      <span>({avaliacao.p2.certos}C / {avaliacao.p2.errados}E / {avaliacao.p2.emBranco}B)</span>
                    </div>
                  </div>

                  {/* Total Prova Objetiva */}
                  <div className="bg-surface p-3.5 rounded-lg border border-border space-y-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-sans text-ink">Total Objetiva (P1 + P2)</span>
                      <span className={`text-xs font-mono font-bold ${avaliacao.total.aprovadoPiso ? 'text-ok' : 'text-err'}`}>
                        {avaliacao.total.aprovadoPiso ? '✓ Piso atingido no treino' : 'Piso não atingido'}
                      </span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-ink">
                      {avaliacao.total.notaLiquida > 0 ? `+${avaliacao.total.notaLiquida}` : avaliacao.total.notaLiquida}
                      <span className="text-xs font-normal text-ink-2 font-sans ml-1">pts</span>
                    </div>
                    <div className="text-xs text-ink-2 flex justify-between font-mono">
                      <span>Piso: &ge; {avaliacao.total.pisoMinimo} pts</span>
                      <span>({avaliacao.total.certos}C / {avaliacao.total.errados}E / {avaliacao.total.emBranco}B)</span>
                    </div>
                  </div>
                </div>

                {/* Motivos ou Parabéns */}
                {avaliacao.eliminado ? (
                  <div className="bg-surface/80 p-3 rounded-lg border border-err/30 space-y-1 text-xs text-left">
                    <strong className="text-err font-sans block">Motivos da eliminação segundo o edital:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-ink-2 font-sans">
                      {avaliacao.motivosEliminacao.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-xs text-ink-2 font-sans text-left">
                    Parabéns! Sua nota cumpriu simultaneamente os 3 pisos eliminatórios. No concurso real da Câmara dos Deputados,
                    serão convocados para a correção da Prova Discursiva os <strong>{avaliacao.vagasDiscursivaAmpla} primeiros candidatos</strong> da ampla concorrência.
                  </p>
                )}
              </div>
            );
          })()}

          {/* Portão do Simulado: Decisão de Aprovação/Reprovação (Regra 2.4) */}
          <PainelDecisaoPortaoSimulado
            simuladoId={selectedSimuladoId}
            relatorioFinal={relatorioFinal}
            onRefazerErros={handleRefazerErros}
            onNovoSimuladoCompleto={handleNovoSimuladoCompleto}
          />

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
                <span className="text-xs text-ink-2 print:text-gray-600 font-sans">taxa de acerto real</span>
              </div>

              <div className="bg-surface print:bg-white p-3 rounded-lg border border-border print:border-gray-300">
                <span className="text-xs font-sans font-semibold text-ink print:text-black">
                  Provável
                </span>
                <div className="text-2xl font-mono font-bold text-accent print:text-black mt-1">
                  {relatorioFinal.calibracao.acertoProvavelPercent}%
                </div>
                <span className="text-xs text-ink-2 print:text-gray-600 font-sans">taxa de acerto real</span>
              </div>

              <div className="bg-surface print:bg-white p-3 rounded-lg border border-border print:border-gray-300">
                <span className="text-xs font-sans font-semibold text-ink print:text-black">
                  Chute Consciente
                </span>
                <div className="text-2xl font-mono font-bold text-err mt-1">
                  {relatorioFinal.calibracao.acertoChutePercent}%
                </div>
                <span className="text-xs text-ink-2 print:text-gray-600 font-sans">taxa de acerto real</span>
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
              Desempenho por Submódulo
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
                          <span className="text-xs font-mono text-ink-2 print:text-gray-600 ml-1">
                            ({subPercent}%)
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-ink print:text-black mt-0.5">
                        {temaInfo?.titulo || `Módulo ${subId}`}
                      </div>
                      <div className="text-xs font-mono text-ink-2 print:text-gray-600 mt-1">
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
              Mapeamento sistemático dos núcleos conceituais e normativos avaliados pela banca Cebraspe ao longo dos {questoesRelatorio.length} itens de {simuladoAtivo.tituloCurto}:
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
                        className="text-xs text-ink-2 print:text-gray-800 font-serif leading-relaxed flex items-start gap-1.5"
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

              <div className="flex items-center gap-2 font-mono text-xs text-ink-2 print:hidden">
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
              const questoesSub = questoesRelatorio.filter((q) => q.submoduloId === subId);
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
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-bold bg-err text-white">
                                  <XCircle className="w-3 h-3" />
                                  <span>ERRO (-1 pt líquido)</span>
                                </span>
                              )}
                              {isBranco && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-bold bg-alerta-soft text-alerta-cebraspe border border-alerta-cebraspe/30">
                                  <HelpCircle className="w-3 h-3" />
                                  <span>EM BRANCO (0 pts)</span>
                                </span>
                              )}
                              {isAcerto && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-bold bg-ok text-white">
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
                                Gabarito:{' '}
                                <strong className="text-ink print:text-black">
                                  {q.gabarito}
                                </strong>
                              </span>
                              {q.fonteOriginal && (() => {
                                const info = obterInfoProveniencia(q.fonteOriginal);
                                return (
                                  <span className={`text-xs px-1.5 py-0.5 rounded border hidden sm:inline ${info.badgeClass}`}>
                                    {info.rotulo}
                                  </span>
                                );
                              })()}
                            </div>
                          </div>

                          {/* Enunciado da Questão */}
                          {q.contexto && (
                            <p className="text-xs text-ink-2 print:text-gray-700 font-serif italic mb-2 leading-relaxed">
                              {q.contexto}
                            </p>
                          )}
                          <p lang={q.macroModuloId?.toUpperCase() === 'M12' ? 'en' : undefined} className="text-sm text-ink print:text-black font-serif leading-relaxed font-medium whitespace-pre-line">
                            {q.item}
                          </p>

                          <div className="mt-3.5">
                            <PainelEstudoReverso
                              questao={q}
                              resposta={respObj?.resposta ?? 'BRANCO'}
                              certeza={respObj?.certeza}
                              autoexplicacao={false}
                              analise={PILOTO_RACIOCINIO.find(a => a.itemId === q.id)}
                              onReverTeoria={subId => { setSelectedSubmodule(subId); setActiveView('teoria'); }}
                            />
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

  function baixarHistoricoPreservado() {
    const blob = new Blob([useProgressStore.getState().exportarProgressoJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'hnc-historico-preservado.json'; link.click();
    URL.revokeObjectURL(url);
  };
  if (sessaoDesatualizada) return (
    <section className="max-w-3xl mx-auto space-y-5 p-5 rounded-2xl border border-border bg-surface" aria-label="Tentativa de uma versão anterior">
      <h1 className="text-2xl font-serif">Atualizamos as questões deste caderno</h1>
      <p>Esta tentativa contém respostas de uma versão anterior ou sem versão registrada. Para preservar seu histórico, ela não será corrigida com os novos enunciados e gabaritos.</p>
      <p>Você pode guardar as {Object.keys(respostas).length} respostas anteriores e iniciar uma nova tentativa. Os resultados já concluídos permanecem no histórico.</p>
      <button type="button" className="min-h-[44px] rounded-xl px-4 bg-accent text-white foco" onClick={() => { reiniciarSimulado(selectedSimuladoId); iniciarOuRetomarSimulado(selectedSimuladoId); setTempoGasto(0); }}>Arquivar tentativa e iniciar versão atual</button>
      <button type="button" className="min-h-[44px] rounded-xl px-4 border border-border foco" onClick={baixarHistoricoPreservado}>Baixar cópia do histórico</button>
      {renderSimuladoSelector()}
    </section>
  );

  // Visualização Normal da Questão
  return (
    <div className="max-w-6xl mx-auto space-y-4 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h1 className="text-xl sm:text-2xl font-serif font-bold text-ink">
          {simuladoAtivo.titulo}
        </h1>
        <span className="text-xs font-mono text-ink-2">
          {simuladoAtivo.subtitulo}
        </span>
      </div>

      <p className="text-sm font-semibold text-ink-2" role="note">{modoProva ? 'Modo prova · Gabarito e pontuação somente ao finalizar' : 'Modo estudo · Correção e raciocínio após cada resposta'}</p>
      <fieldset className="flex flex-wrap gap-3 items-center text-sm text-ink">
        <legend className="text-xs text-ink-2 mb-2">Como você quer praticar neste caderno?</legend>
        <button type="button" aria-pressed={!modoProva} disabled={Object.keys(respostas).length > 0} className="min-h-[44px] px-4 rounded-xl border border-border bg-surface foco" onClick={() => setModoProva(false)}>Estudo · feedback a cada resposta</button>
        <button type="button" aria-pressed={modoProva} disabled={Object.keys(respostas).length > 0} className="min-h-[44px] px-4 rounded-xl border border-border bg-surface foco" onClick={() => setModoProva(true)}>Prova · correção ao final</button>
        {Object.keys(respostas).length > 0 && <span className="text-xs text-ink-2">O modo é definido antes da primeira resposta. Reinicie o caderno para escolher outro modo.</span>}
      </fieldset>
      {renderSimuladoSelector()}
      {Boolean(sessaoAtual.tentativasArquivadas?.length) && <details className="rounded-xl border border-border p-3 text-sm">
        <summary className="cursor-pointer">Tentativas preservadas ({sessaoAtual.tentativasArquivadas?.length})</summary>
        <p className="py-2">Suas respostas anteriores estão guardadas sem recorreção com o banco atual.</p>
        <button type="button" className="min-h-[44px] underline foco" onClick={baixarHistoricoPreservado}>Baixar histórico preservado</button>
      </details>}

      {/* Aviso de Itens em Conferência Fora do Simulado (C8 / C14) */}
      {Boolean(simuladoAtivo.itensForaConferencia) && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center gap-2.5 text-xs text-accent dark:text-amber-400">
          <AlertTriangle className="w-4 h-4 shrink-0 text-accent" />
          <span className="font-sans">
            <strong>Itens em conferência isolados:</strong> Este caderno possui{" "}
            <strong>{simuladoAtivo.itensForaConferencia} {simuladoAtivo.itensForaConferencia === 1 ? "item" : "itens"} em conferência fora desta prova</strong>{" "}
            ({simuladoAtivo.questoes.length} itens ativos de {simuladoAtivo.totalNominal || 100} nominais). Itens identificados como pendentes foram retirados deste treino; isso não homologa os demais.
          </span>
        </div>
      )}

      {/* Banner de Modo Reteste de Erros */}
      {itensFiltradosReteste && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-accent" />
            <span className="font-sans text-ink">
              <strong>Modo Prática / Reteste de Erros:</strong> {questoesExibidas.length} itens errados em ordem embaralhada.
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
                        mudarQuestaoSimulado(0, selectedSimuladoId);
            }}
            className="font-mono text-xs underline text-ink-2 hover:text-ink cursor-pointer"
          >
            Voltar ao simulado completo
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Coluna Principal da Questão */}
        <article className="flex-1 min-w-0 space-y-6">
        {/* Barra Superior do Simulado: Placar em Tempo Real */}
        <section
          aria-label="Placar em Tempo Real"
          className="bg-surface rounded-xl border border-border p-4 shadow-xs flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-soft border border-accent/20">
              ITEM {currentIndex + 1} / {questoesExibidas.length}
            </span>
            <span className="text-xs font-mono text-ink-2">
              Submódulo {currentQuestion.submoduloId}
            </span>
            <span className="text-xs font-mono text-ink-2 capitalize">
              • Nível {currentQuestion.dificuldade}
            </span>
          </div>

          {/* Placar Cebraspe: C - E e Indicador de Salvamento Ativo */}
          <div className="flex items-center gap-4 text-xs font-mono">
            {!modoProva && <><div className="flex items-center gap-1.5">
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
            </>}
            <span className="text-ink-2">({respondidasCount}/{questoesExibidas.length} respondidas)</span>
          </div>
        </section>

        {/* Card do Enunciado Cebraspe */}
        <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-xs space-y-6">
          {currentQuestion.contexto && (
            <div className="font-serif text-ink-2 text-base leading-relaxed whitespace-pre-line border-b border-border pb-5">
              {currentQuestion.contexto}
            </div>
          )}
          {/* Texto Canônico do Item */}
          <div lang={currentQuestion.macroModuloId?.toUpperCase() === 'M12' ? 'en' : undefined} className="font-serif text-ink text-base sm:text-lg leading-relaxed pt-2 whitespace-pre-line">
            {currentQuestion.item}
          </div>

          {/* Seletor Metacognitivo de Certeza (Pré-julgamento) */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-sans font-semibold text-ink-2 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Nível de Confiança Metacognitiva
              </span>
              <span className="text-xs font-sans text-ink-2">
                (opcional, para calibrar risco)
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                disabled={isItemRespondido}
                aria-disabled={isItemRespondido}
                onClick={() => setCertezaSelecionada('certeza')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  isItemRespondido ? 'cursor-not-allowed opacity-80' : ''
                } ${
                  certezaSelecionada === 'certeza'
                    ? 'bg-ok-soft border-ok text-ok font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Tenho certeza
              </button>
              <button
                type="button"
                disabled={isItemRespondido}
                aria-disabled={isItemRespondido}
                onClick={() => setCertezaSelecionada('provavel')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  isItemRespondido ? 'cursor-not-allowed opacity-80' : ''
                } ${
                  certezaSelecionada === 'provavel'
                    ? 'bg-accent-soft border-accent text-accent font-semibold shadow-2xs'
                    : 'bg-surface-2 border-border text-ink-2 hover:text-ink'
                }`}
              >
                Provável
              </button>
              <button
                type="button"
                disabled={isItemRespondido}
                aria-disabled={isItemRespondido}
                onClick={() => setCertezaSelecionada('chute')}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-medium border transition-all ${
                  isItemRespondido ? 'cursor-not-allowed opacity-80' : ''
                } ${
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
              disabled={isItemRespondido}
              aria-disabled={isItemRespondido}
              onClick={() => handleJulgar('C')}
              className={`py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all ${
                isItemRespondido ? 'cursor-not-allowed opacity-90' : 'active:scale-98'
              } ${
                respostaAtual?.resposta === 'C'
                  ? 'bg-ok-soft border-ok text-ok shadow-xs ring-2 ring-ok/30'
                  : isItemRespondido
                    ? 'bg-surface/50 border-border/50 text-ink-2/50'
                    : 'bg-surface border-border text-ink hover:border-ok/60'
              }`}
            >
              <CheckCircle2 className={`w-5 h-5 ${respostaAtual?.resposta === 'C' ? 'text-ok' : isItemRespondido ? 'text-ink-2/40' : 'text-ok'}`} />
              <span>CERTO</span>
              <Kbd>C</Kbd>
            </button>

            <button
              type="button"
              disabled={isItemRespondido}
              aria-disabled={isItemRespondido}
              onClick={() => handleJulgar('E')}
              className={`py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 border-2 transition-all ${
                isItemRespondido ? 'cursor-not-allowed opacity-90' : 'active:scale-98'
              } ${
                respostaAtual?.resposta === 'E'
                  ? 'bg-err-soft border-err text-err shadow-xs ring-2 ring-err/30'
                  : isItemRespondido
                    ? 'bg-surface/50 border-border/50 text-ink-2/50'
                    : 'bg-surface border-border text-ink hover:border-err/60'
              }`}
            >
              <XCircle className={`w-5 h-5 ${respostaAtual?.resposta === 'E' ? 'text-err' : isItemRespondido ? 'text-ink-2/40' : 'text-err'}`} />
              <span>ERRADO</span>
              <Kbd>E</Kbd>
            </button>

            <button
              type="button"
              disabled={isItemRespondido}
              aria-disabled={isItemRespondido}
              onClick={() => handleJulgar('BRANCO')}
              className={`py-3.5 px-4 rounded-xl font-sans font-medium text-sm flex items-center justify-center gap-2 border-2 transition-all ${
                isItemRespondido ? 'cursor-not-allowed opacity-90' : 'active:scale-98'
              } ${
                respostaAtual?.resposta === 'BRANCO'
                  ? 'bg-surface-2 border-accent text-ink shadow-xs font-bold ring-2 ring-accent/30'
                  : isItemRespondido
                    ? 'bg-surface/50 border-border/50 text-ink-2/50'
                    : 'bg-surface border-border text-ink-2 hover:border-border/80'
              }`}
            >
              <HelpCircle className={`w-5 h-5 ${respostaAtual?.resposta === 'BRANCO' ? 'text-ink' : 'text-ink-2'}`} />
              <span>EM BRANCO</span>
              <Kbd>B</Kbd>
            </button>

            {isItemRespondido && (
              <div className="col-span-1 sm:col-span-3 py-2 px-3.5 rounded-lg bg-surface-2 border border-border flex items-center justify-between text-xs text-ink-2">
                <span className="font-sans">Resposta registrada; use as setas ou o rodapé para avançar.</span>
                <span className="font-mono text-xs text-accent font-semibold flex items-center gap-1">
                  Item travado 🔒
                </span>
              </div>
            )}
          </div>

          {/* Se for Mega Simulado da Câmara (120Q): Modo Prova Real (justificativas somente no relatório pós-prova) */}
          {modoProva && respostaAtual && (
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
          {!modoProva && respostaAtual && (
            <div className="pt-6 border-t border-border space-y-4 animate-fadeIn" aria-live="polite">
              {/* Badge de cabeçalho do Estudo Reverso */}
              <div className="flex items-center justify-between gap-2 pb-1 border-b border-border/60 flex-wrap">
                <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded bg-accent-soft border border-accent/25 uppercase tracking-wider">
                  ESTUDO REVERSO IMEDIATO
                </span>
                <span className="text-xs font-mono text-ink-2">
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
                  {`Gabarito: ${currentQuestion.gabarito === 'C' ? 'CERTO' : 'ERRADO'}`}
                </Badge>
              </div>

                            {/* Painel Pedagógico de Estudo Reverso */}
              <PainelEstudoReverso
                questao={currentQuestion}
                resposta={respostaAtual.resposta}
                certeza={respostaAtual.certeza}
                autoexplicacao={false}
                analise={PILOTO_RACIOCINIO.find(a => a.itemId === currentQuestion.id)}
                onReverTeoria={subId => { setSelectedSubmodule(subId); setActiveView('teoria'); }}
              />

              {/* Fonte Original Auditada (P18 - Proveniência Honesta) */}
              {(() => {
                const info = obterInfoProveniencia(currentQuestion.fonteOriginal);
                return (
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-ink-2">Proveniência:</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${info.badgeClass}`}>
                        {info.rotulo}
                      </span>
                      {info.detalhe && (
                        <span className="text-ink-2 text-xs font-normal">({info.detalhe})</span>
                      )}
                    </div>
                    {info.verificado ? (
                      <span className="text-ok font-sans text-xs flex items-center gap-1">
                        ✓ conferida no acervo oficial
                      </span>
                    ) : (
                      <span className="text-accent dark:text-amber-400 font-sans text-xs">
                        (inédita / não confirmada em prova real)
                      </span>
                    )}
                  </div>
                );
              })()}
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
              disabled={currentIndex === questoesExibidas.length - 1}
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
              <span>Folha ({questoesExibidas.length})</span>
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

        {/* Barra de Auxílio Visual: Atalhos de Teclado no Desktop */}
        <div className="hidden md:flex items-center justify-between px-3.5 py-2 rounded-xl bg-surface-2/60 border border-border text-xs font-sans text-ink-2">
          <span className="font-semibold text-ink flex items-center gap-1.5">
            <Keyboard className="w-3.5 h-3.5 text-accent" />
            <span>Atalhos Rápidos de Teclado:</span>
          </span>
          <div className="flex items-center gap-3 font-mono">
            <span className="flex items-center gap-1">
              <Kbd>C</Kbd> <span className="text-ok font-semibold">Certo</span>
            </span>
            <span className="flex items-center gap-1">
              <Kbd>E</Kbd> <span className="text-err font-semibold">Errado</span>
            </span>
            <span className="flex items-center gap-1">
              <Kbd>B</Kbd> <span>Em Branco</span>
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              <Kbd>←</Kbd> <Kbd>→</Kbd> <span>Navegar</span>
            </span>
          </div>
        </div>
      </article>

      {/* Coluna Lateral da Folha de Respostas no Desktop */}
      <aside
        aria-label={`Folha de respostas das ${questoesExibidas.length} questões`}
        className="hidden lg:block w-80 shrink-0 bg-surface rounded-2xl border border-border p-4.5 shadow-xs sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <h2 className="font-sans font-bold text-ink text-sm">Folha de Respostas</h2>
          </div>
          <span className="font-mono text-xs text-ink-2">{questoesExibidas.length} itens</span>
        </div>

        <AnswerSheet
          questions={questoesExibidas}
          revelarResultados={!modoProva}
          respostas={respostas}
          currentIndex={currentIndex}
          onSelectQuestion={(idx) => mudarQuestaoSimulado(idx, selectedSimuladoId)}
        />
      </aside>

      {/* Gaveta Mobile da Folha de Respostas (Vaul Drawer) */}
      <Drawer.Root
        open={isAnswerSheetMobileOpen}
        onOpenChange={setIsAnswerSheetMobileOpen}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs" />
          <Drawer.Content className="bg-surface border-t border-border flex flex-col rounded-t-2xl max-h-[88dvh] fixed bottom-0 left-0 right-0 z-50 foco focus-visible:ring-2 focus-visible:ring-accent">
            <div className="p-4 bg-surface rounded-t-2xl flex flex-col max-h-[88dvh]">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-border mb-3" />
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <Drawer.Title className="font-sans font-bold text-ink text-base">
                  Folha de Respostas ({questoesExibidas.length} Itens)
                </Drawer.Title>
                <Drawer.Description className="sr-only">
                  Grade de resposta das questões
                </Drawer.Description>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <AnswerSheet
                  questions={questoesExibidas}
          revelarResultados={!modoProva}
                  respostas={respostas}
                  currentIndex={currentIndex}
                  onSelectQuestion={(idx) => {
                    mudarQuestaoSimulado(idx, selectedSimuladoId);
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

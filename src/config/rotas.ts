import {
  LayoutDashboard,
  BookOpen,
  Compass,
  Dumbbell,
  BarChart3,
  TrendingUp,
  BookMarked,
  FileCheck2,
  FileText,
  PenTool,
  Flame,
  Palette,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import type { AppView, ContextoTeoria } from '../store/useNavigationStore';

export type GrupoRota = 'estudo' | 'pratica' | 'referencia' | 'conta' | 'dev';

export type DestinoPrincipal = 'painel' | 'estudar' | 'praticar' | 'radar' | 'progresso';

export interface RotaConfig {
  id: AppView;
  rotulo: string;
  rotuloCurto: string;
  tituloPagina: string;
  icone: LucideIcon;
  grupo: GrupoRota;
  mostrarNoDesktop: boolean;
  mostrarNoMobile: boolean;
  atalho?: string;
  tagDireita?: string;
  descricao?: string;
}

export interface AbaPrincipalConfig {
  id: DestinoPrincipal;
  rotulo: string;
  rotuloCurto: string;
  icone: LucideIcon;
  rotasAssociadas: AppView[];
  rotaPadrao: AppView;
  atalho?: string;
}

/**
 * 5 Destinos Primários Unificados (idênticos no Desktop e no Mobile)
 * Conforme Requisitos de Arquitetura de Navegação (P8 / U-01, U-05, U-06)
 */
export const ABAS_PRINCIPAIS: AbaPrincipalConfig[] = [
  {
    id: 'painel',
    rotulo: 'Painel',
    rotuloCurto: 'Painel',
    icone: LayoutDashboard,
    rotasAssociadas: ['painel'],
    rotaPadrao: 'painel',
    atalho: '1',
  },
  {
    id: 'estudar',
    rotulo: 'Estudar',
    rotuloCurto: 'Estudo',
    icone: BookOpen,
    rotasAssociadas: ['teoria', 'jornada'],
    rotaPadrao: 'teoria',
    atalho: '2',
  },
  {
    id: 'praticar',
    rotulo: 'Praticar',
    rotuloCurto: 'Prática',
    icone: Dumbbell,
    rotasAssociadas: ['treinos', 'simulado', 'caderno-erros'],
    rotaPadrao: 'treinos',
    atalho: '3',
  },
  {
    id: 'radar',
    rotulo: 'Radar',
    rotuloCurto: 'Radar',
    icone: BarChart3,
    rotasAssociadas: ['radar'],
    rotaPadrao: 'radar',
    atalho: '4',
  },
  {
    id: 'progresso',
    rotulo: 'Progresso',
    rotuloCurto: 'Progresso',
    icone: TrendingUp,
    rotasAssociadas: ['progresso'],
    rotaPadrao: 'progresso',
    atalho: '5',
  },
];

/**
 * Catálogo Canônico de Todas as Rotas (Fonte Única da Verdade)
 */
export const ROTAS_CONFIG: Record<AppView, RotaConfig> = {
  painel: {
    id: 'painel',
    rotulo: 'Painel de Estudos',
    rotuloCurto: 'Painel',
    tituloPagina: 'Painel de Estudos',
    icone: LayoutDashboard,
    grupo: 'estudo',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    atalho: '1',
    descricao: 'Visão geral do progresso, próximas metas e simulados',
  },
  teoria: {
    id: 'teoria',
    rotulo: 'Teoria Canônica',
    rotuloCurto: 'Teoria',
    tituloPagina: 'Leitura Teórica e Exercícios Integrados',
    icone: BookOpen,
    grupo: 'estudo',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    atalho: '2',
    descricao: 'Conteúdo editorial completo com checkpoints de fixação',
  },
  jornada: {
    id: 'jornada',
    rotulo: 'Jornada R3',
    rotuloCurto: 'Jornada',
    tituloPagina: 'Trilha de Aprendizagem R3',
    icone: Compass,
    grupo: 'estudo',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    descricao: 'Trilha sequencial gamificada com portões de desbloqueio',
  },
  treinos: {
    id: 'treinos',
    rotulo: 'Cadernos de Treino',
    rotuloCurto: 'Treinos',
    tituloPagina: 'Cadernos de Treino e Simulação',
    icone: Dumbbell,
    grupo: 'pratica',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    atalho: '3',
    descricao: 'Bateria de questões temáticas e simulados por módulo',
  },
  simulado: {
    id: 'simulado',
    rotulo: 'Simulado 100Q',
    rotuloCurto: 'Simulado',
    tituloPagina: 'Simulado Cebraspe Oficial (100 Itens)',
    icone: FileCheck2,
    grupo: 'pratica',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    tagDireita: 'Padrão Cebraspe',
    descricao: 'Simulação de prova com fórmula líquida oficial C - E',
  },
  'caderno-erros': {
    id: 'caderno-erros',
    rotulo: 'Caderno de Erros',
    rotuloCurto: 'Erros',
    tituloPagina: 'Caderno de Erros e Hipercorreção',
    icone: BookMarked,
    grupo: 'pratica',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    tagDireita: 'Erros e hipercorreção',
    descricao: 'Revisão ativa de assertivas com erro em alta confiança',
  },
  radar: {
    id: 'radar',
    rotulo: 'Radar Cebraspe',
    rotuloCurto: 'Radar',
    tituloPagina: 'Radar de Incidência Cebraspe',
    icone: BarChart3,
    grupo: 'referencia',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    atalho: '4',
    tagDireita: 'Padrões da banca',
    descricao: 'Mapeamento temático e armadilhas recorrentes da banca',
  },
  progresso: {
    id: 'progresso',
    rotulo: 'Métricas & Progresso',
    rotuloCurto: 'Progresso',
    tituloPagina: 'Métricas e Desempenho do Aluno',
    icone: TrendingUp,
    grupo: 'conta',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    atalho: '5',
    descricao: 'Curva de retenção, precisão líquida e exportação de dados',
  },
  discursiva: {
    id: 'discursiva',
    rotulo: 'Oficina Discursiva',
    rotuloCurto: 'Discursiva',
    tituloPagina: 'Oficina Discursiva (Item 9 do Edital)',
    icone: PenTool,
    grupo: 'referencia',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    tagDireita: 'Discursivas',
    descricao: 'Estudo de casos e redação técnica de Biblioteconomia',
  },
  'folha-vespera': {
    id: 'folha-vespera',
    rotulo: 'Folha de Véspera',
    rotuloCurto: 'Véspera',
    tituloPagina: 'Folha de Véspera (Revisão de 48 h)',
    icone: Flame,
    grupo: 'referencia',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    tagDireita: 'Revisão de 48 h',
    descricao: 'Resumo ultracondensado para as últimas 48 horas pré-prova',
  },
  edital: {
    id: 'edital',
    rotulo: 'Edital Verticalizado',
    rotuloCurto: 'Edital',
    tituloPagina: 'Edital Oficial nº 1/2026 — Cargo 5',
    icone: FileText,
    grupo: 'referencia',
    mostrarNoDesktop: true,
    mostrarNoMobile: true,
    tagDireita: 'Edital 1/2026',
    descricao: 'Matriz de correspondência dos 15 módulos programáticos',
  },
  'dev-rascunhos': {
    id: 'dev-rascunhos',
    rotulo: 'Laboratório DEV',
    rotuloCurto: 'Dev Lab',
    tituloPagina: 'Homologação de Rascunhos Cebraspe',
    icone: Layers,
    grupo: 'dev',
    mostrarNoDesktop: false,
    mostrarNoMobile: false,
    descricao: 'Ambiente de testes para novos itens do banco',
  },
  'design-system': {
    id: 'design-system',
    rotulo: 'Design System DEV',
    rotuloCurto: 'Design',
    tituloPagina: 'Manual do Design System Editorial',
    icone: Palette,
    grupo: 'dev',
    mostrarNoDesktop: false,
    mostrarNoMobile: false,
    descricao: 'Paleta, tipografia e componentes do ecossistema',
  },
};

/**
 * Rotas do Grupo de Referência (Acessíveis pelo menu desktop e gaveta Mais mobile)
 */
export const ROTAS_REFERENCIA: RotaConfig[] = [
  ROTAS_CONFIG['discursiva'],
  ROTAS_CONFIG['folha-vespera'],
  ROTAS_CONFIG['edital'],
  ROTAS_CONFIG['caderno-erros'],
];

/**
 * Retorna se o destino principal está ativo com base na rota corrente
 */
export function isDestinoAtivo(destino: DestinoPrincipal, activeView: AppView): boolean {
  const aba = ABAS_PRINCIPAIS.find((a) => a.id === destino);
  return aba ? aba.rotasAssociadas.includes(activeView) : false;
}

/**
 * Retorna o título formatado para exibição no cabeçalho desktop
 */
export function getDesktopHeaderTitle(view: AppView, selectedSubmodule?: string): string {
  if (view === 'teoria') {
    return selectedSubmodule ? `Teoria (${selectedSubmodule})` : 'Teoria Canônica';
  }
  return ROTAS_CONFIG[view]?.rotulo || 'Painel de Estudos';
}

/**
 * Retorna o título compacto formatado para o cabeçalho móvel
 */
export function getMobileHeaderTitle(view: AppView, selectedSubmodule?: string): string {
  if (view === 'teoria') {
    return selectedSubmodule ? `Submódulo ${selectedSubmodule}` : 'Teoria';
  }
  return ROTAS_CONFIG[view]?.rotuloCurto || 'Painel';
}

export interface BreadcrumbItem {
  rotulo: string;
  view?: AppView;
  isAtual?: boolean;
}

/**
 * Gera a trilha de navegação (Breadcrumb) da tela ativa
 */
export function getBreadcrumb(
  view: AppView,
  selectedSubmodule?: string,
  contextoTeoria?: ContextoTeoria
): BreadcrumbItem[] {
  const base: BreadcrumbItem[] = [{ rotulo: 'Início', view: 'painel' }];

  if (view === 'painel') {
    return [{ rotulo: 'Início', isAtual: true }];
  }

  if (view === 'teoria') {
    if (contextoTeoria) {
      return [
        ...base,
        { rotulo: 'Teoria', view: 'teoria' },
        { rotulo: contextoTeoria.modulo },
        { rotulo: contextoTeoria.submodulo, isAtual: true },
      ];
    }
    return [
      ...base,
      { rotulo: 'Estudar', view: 'teoria' },
      {
        rotulo: selectedSubmodule ? `Submódulo ${selectedSubmodule}` : 'Teoria Canônica',
        isAtual: true,
      },
    ];
  }

  if (view === 'jornada') {
    return [
      ...base,
      { rotulo: 'Estudar', view: 'teoria' },
      { rotulo: 'Jornada R3', isAtual: true },
    ];
  }

  if (view === 'treinos') {
    return [
      ...base,
      { rotulo: 'Praticar', view: 'treinos' },
      { rotulo: 'Cadernos de Treino', isAtual: true },
    ];
  }

  if (view === 'simulado') {
    return [
      ...base,
      { rotulo: 'Praticar', view: 'treinos' },
      { rotulo: 'Simulado 100Q', isAtual: true },
    ];
  }

  if (view === 'caderno-erros') {
    return [
      ...base,
      { rotulo: 'Praticar', view: 'treinos' },
      { rotulo: 'Caderno de Erros', isAtual: true },
    ];
  }

  if (view === 'radar') {
    return [
      ...base,
      { rotulo: 'Radar Cebraspe', isAtual: true },
    ];
  }

  if (view === 'progresso') {
    return [
      ...base,
      { rotulo: 'Métricas & Progresso', isAtual: true },
    ];
  }

  if (view === 'discursiva') {
    return [
      ...base,
      { rotulo: 'Referência' },
      { rotulo: 'Oficina Discursiva', isAtual: true },
    ];
  }

  if (view === 'folha-vespera') {
    return [
      ...base,
      { rotulo: 'Referência' },
      { rotulo: 'Folha de Véspera', isAtual: true },
    ];
  }

  if (view === 'edital') {
    return [
      ...base,
      { rotulo: 'Referência' },
      { rotulo: 'Edital 1/2026', isAtual: true },
    ];
  }

  return [
    ...base,
    { rotulo: ROTAS_CONFIG[view]?.rotulo || 'Página', isAtual: true },
  ];
}

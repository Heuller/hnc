/**
 * Sistema de Design "Papel e Tinta" — Heuller na Câmara (HNC)
 * Analista Legislativo - Biblioteconomia (Cargo 5) | Cebraspe
 *
 * Tokens unificados e centralizados (U6.1 do Plano v3):
 * - Cores semânticas (Claro / Escuro com contraste WCAG 2.2 AA)
 * - 3 Níveis de Superfície (redução de ruído cognitivo de Mayer)
 * - Escala tipográfica fixa (corpo de leitura >= 16px)
 * - Espaçamentos, raios e sombras editoriais
 * - Alvos de toque acessíveis (mínimo 44x44px)
 */

export interface ColorToken {
  hex: string;
  descricao: string;
  wcagContrastRatio?: number;
}

export const DESIGN_TOKENS = {
  // Identidade Editorial Papel e Tinta
  identidade: {
    nome: 'Papel e Tinta',
    versao: '3.0',
    descricao: 'Design sóbrio, editorial, serifado, de alto contraste para estudo aprofundado.',
  },

  // 3 Níveis de Superfície (U6.1: sem "cartão dentro de cartão dentro de cartão")
  superficies: {
    claro: {
      nivel1: { nome: 'Base / Fundo', token: '--bg', hex: '#FAF7F0', classe: 'bg-bg', descricao: 'Papel creme natural de fundo da página' },
      nivel2: { nome: 'Superfície de Leitura', token: '--surface', hex: '#FFFFFF', classe: 'bg-surface', descricao: 'Cartão de leitura editorial e blocos de conteúdo' },
      nivel3: { nome: 'Superfície Elevada', token: '--surface-2', hex: '#F2EEE4', classe: 'bg-surface-2', descricao: 'Gavetas inferiores, abas ativas e caixas de ferramentas' },
    },
    escuro: {
      nivel1: { nome: 'Base Noturna', token: '--bg', hex: '#0D1220', classe: 'dark:bg-bg', descricao: 'Fundo azul-ardósia escuro de baixa emissão' },
      nivel2: { nome: 'Superfície Noturna', token: '--surface', hex: '#141B2E', classe: 'dark:bg-surface', descricao: 'Cartão de leitura noturno com contraste suavizado' },
      nivel3: { nome: 'Superfície Elevada Noturna', token: '--surface-2', hex: '#1B2440', classe: 'dark:bg-surface-2', descricao: 'Gavetas inferiores e popovers no tema escuro' },
    },
  },

  // Cores Semânticas e Contraste Aferido WCAG 2.2 AA (mínimo 4.5:1 para texto normal)
  cores: {
    claro: {
      bg: '#FAF7F0',
      surface: '#FFFFFF',
      surface2: '#F2EEE4',
      border: '#E4DED0',
      borderSubtle: '#ECE6D8',
      ink: '#1A2238', // Contraste 11.8:1 sobre #FAF7F0 (AAA ✅)
      ink2: '#4A5468', // Contraste 5.4:1 sobre #FAF7F0 (AA ✅)
      primary: '#16244A', // Azul Legislativo Nobre
      primaryText: '#FFFFFF',
      accent: '#B45309', // Âmbar Tipográfico
      accentText: '#FFFFFF',
      accentSoft: '#FEF3C7',
      ok: '#166534', // Verde Acerto (+1 pt Cebraspe) - Contraste 6.66:1 (AA ✅)
      okSoft: '#DCFCE7',
      err: '#B91C1C', // Vermelho Penalidade (-1 pt Cebraspe) - Contraste 6.05:1 (AA ✅)
      errSoft: '#FEE2E2',
      alerta: '#9F1239', // Rose Alerta de Distrator
      alertaSoft: '#FFF1F2',
      info: '#1D4ED8',
      infoSoft: '#DBEAFE',
    },
    escuro: {
      bg: '#0D1220',
      surface: '#141B2E',
      surface2: '#1B2440',
      border: '#2A3555',
      borderSubtle: '#202942',
      ink: '#E9ECF5', // Contraste 13.5:1 sobre #0D1220 (AAA ✅)
      ink2: '#A9B2C7', // Contraste 7.2:1 sobre #0D1220 (AAA ✅)
      primary: '#FBBF24', // Ouro Legislativo Noturno
      primaryText: '#0D1220',
      accent: '#FBBF24',
      accentText: '#0D1220',
      accentSoft: '#2E2305',
      ok: '#4ADE80', // Verde Esmeralda Noturno
      okSoft: '#052E16',
      err: '#F87171', // Vermelho Coral Noturno
      errSoft: '#380D0D',
      alerta: '#FB7185',
      alertaSoft: '#380815',
      info: '#60A5FA',
      infoSoft: '#1E3A5F',
    },
  },

  // Escala Tipográfica Fixa (Papel e Tinta)
  tipografia: {
    fontes: {
      serif: "'Source Serif 4', Georgia, Cambria, 'Times New Roman', serif",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
    },
    escala: {
      xs: { rem: '0.75rem', px: 12, lineHeight: 1.4, uso: 'Metadados, badges de edital, atalhos Kbd' },
      sm: { rem: '0.875rem', px: 14, lineHeight: 1.5, uso: 'Legendas, rótulos de UI secundários' },
      base: { rem: '1rem', px: 16, lineHeight: 1.65, uso: 'Corpo de texto da teoria (mínimo 16px no mobile)' },
      lg: { rem: '1.125rem', px: 18, lineHeight: 1.6, uso: 'Subtítulos de seção, introduções em destaque' },
      xl: { rem: '1.25rem', px: 20, lineHeight: 1.4, uso: 'Títulos de seções teóricas e simulados' },
      '2xl': { rem: '1.5rem', px: 24, lineHeight: 1.3, uso: 'Títulos de módulos e cadernos' },
      '3xl': { rem: '1.875rem', px: 30, lineHeight: 1.25, uso: 'Títulos principais de tela (Painel/Jornada)' },
      '4xl': { rem: '2.25rem', px: 36, lineHeight: 1.2, uso: 'Capa da plataforma e estatísticas de topo' },
    },
    ritmoLeitura: {
      larguraColunaIdealChar: '60 a 72 caracteres',
      larguraColunaPx: '680px a 740px',
      entrelinha: 1.65,
    },
  },

  // Espaçamentos e Geometria Tátil (Mobile-First)
  geometria: {
    alvoToqueMinimoPx: 44, // WCAG 2.2 Target Size (2.5.8)
    raios: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      full: '9999px',
    },
    sombras: {
      suave: '0 1px 3px rgba(26, 34, 56, 0.05)',
      card: '0 4px 12px rgba(26, 34, 56, 0.06)',
      elevada: '0 8px 24px rgba(26, 34, 56, 0.08)',
    },
  },

  // Callouts Editoriais Padronizados (U6.3: 5 tipos fixos com ícone e rótulo em português)
  callouts: {
    nota: { rotulo: 'Nota', cor: 'blue', icone: 'Info', descricao: 'Contexto histórico e doutrinário adicional' },
    dica: { rotulo: 'Dica', cor: 'emerald', icone: 'Lightbulb', descricao: 'Estratégia prática de memorização ou estudo' },
    importante: { rotulo: 'Importante', cor: 'amber', icone: 'AlertTriangle', descricao: 'Conceito canônico de alta relevância' },
    atencao: { rotulo: 'Atenção', cor: 'rose', icone: 'AlertOctagon', descricao: 'Ponto crítico com alto índice de erro' },
    cascaDeBanana: { rotulo: 'Casca de banana', cor: 'purple', icone: 'Flame', descricao: 'Armadilha clássica e distratores da banca Cebraspe' },
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;

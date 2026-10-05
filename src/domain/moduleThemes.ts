export interface ModuleTheme {
  id: string; // 'm1'
  codigo: string; // 'M1'
  numero: number;
  hue: number;
  solidVar: string;
  softVar: string;
  textVar: string;
  borderVar: string;
  primaryColor?: string;
  // CSS helper classes generated via Tailwind v4 @theme
  bgSolidClass: string;
  bgSoftClass: string;
  textSolidClass: string;
  borderClass: string;
}

export const MODULE_THEMES: Record<string, ModuleTheme> = {
  m1: {
    id: 'm1',
    codigo: 'M1',
    numero: 1,
    hue: 70,
    solidVar: 'var(--m1-solid)',
    softVar: 'var(--m1-soft)',
    textVar: 'var(--m1-text)',
    borderVar: 'var(--m1-border)',
    bgSolidClass: 'bg-m1',
    bgSoftClass: 'bg-m1-soft',
    textSolidClass: 'text-m1-text',
    borderClass: 'border-m1-border',
  },
  m2: {
    id: 'm2',
    codigo: 'M2',
    numero: 2,
    hue: 205,
    solidVar: 'var(--m2-solid)',
    softVar: 'var(--m2-soft)',
    textVar: 'var(--m2-text)',
    borderVar: 'var(--m2-border)',
    bgSolidClass: 'bg-m2',
    bgSoftClass: 'bg-m2-soft',
    textSolidClass: 'text-m2-text',
    borderClass: 'border-m2-border',
  },
  m3: {
    id: 'm3',
    codigo: 'M3',
    numero: 3,
    hue: 300,
    solidVar: 'var(--m3-solid)',
    softVar: 'var(--m3-soft)',
    textVar: 'var(--m3-text)',
    borderVar: 'var(--m3-border)',
    bgSolidClass: 'bg-m3',
    bgSoftClass: 'bg-m3-soft',
    textSolidClass: 'text-m3-text',
    borderClass: 'border-m3-border',
  },
  m4: {
    id: 'm4',
    codigo: 'M4',
    numero: 4,
    hue: 105,
    solidVar: 'var(--m4-solid)',
    softVar: 'var(--m4-soft)',
    textVar: 'var(--m4-text)',
    borderVar: 'var(--m4-border)',
    bgSolidClass: 'bg-m4',
    bgSoftClass: 'bg-m4-soft',
    textSolidClass: 'text-m4-text',
    borderClass: 'border-m4-border',
  },
  m5: {
    id: 'm5',
    codigo: 'M5',
    numero: 5,
    hue: 255,
    solidVar: 'var(--m5-solid)',
    softVar: 'var(--m5-soft)',
    textVar: 'var(--m5-text)',
    borderVar: 'var(--m5-border)',
    bgSolidClass: 'bg-m5',
    bgSoftClass: 'bg-m5-soft',
    textSolidClass: 'text-m5-text',
    borderClass: 'border-m5-border',
  },
  m6: {
    id: 'm6',
    codigo: 'M6',
    numero: 6,
    hue: 340,
    solidVar: 'var(--m6-solid)',
    softVar: 'var(--m6-soft)',
    textVar: 'var(--m6-text)',
    borderVar: 'var(--m6-border)',
    bgSolidClass: 'bg-m6',
    bgSoftClass: 'bg-m6-soft',
    textSolidClass: 'text-m6-text',
    borderClass: 'border-m6-border',
  },
  m7: {
    id: 'm7',
    codigo: 'M7',
    numero: 7,
    hue: 180,
    solidVar: 'var(--m7-solid)',
    softVar: 'var(--m7-soft)',
    textVar: 'var(--m7-text)',
    borderVar: 'var(--m7-border)',
    bgSolidClass: 'bg-m7',
    bgSoftClass: 'bg-m7-soft',
    textSolidClass: 'text-m7-text',
    borderClass: 'border-m7-border',
  },
  m8: {
    id: 'm8',
    codigo: 'M8',
    numero: 8,
    hue: 45,
    solidVar: 'var(--m8-solid)',
    softVar: 'var(--m8-soft)',
    textVar: 'var(--m8-text)',
    borderVar: 'var(--m8-border)',
    bgSolidClass: 'bg-m8',
    bgSoftClass: 'bg-m8-soft',
    textSolidClass: 'text-m8-text',
    borderClass: 'border-m8-border',
  },
  m9: {
    id: 'm9',
    codigo: 'M9',
    numero: 9,
    hue: 280,
    solidVar: 'var(--m9-solid)',
    softVar: 'var(--m9-soft)',
    textVar: 'var(--m9-text)',
    borderVar: 'var(--m9-border)',
    bgSolidClass: 'bg-m9',
    bgSoftClass: 'bg-m9-soft',
    textSolidClass: 'text-m9-text',
    borderClass: 'border-m9-border',
  },
  m10: {
    id: 'm10',
    codigo: 'M10',
    numero: 10,
    hue: 230,
    solidVar: 'var(--m10-solid)',
    softVar: 'var(--m10-soft)',
    textVar: 'var(--m10-text)',
    borderVar: 'var(--m10-border)',
    bgSolidClass: 'bg-m10',
    bgSoftClass: 'bg-m10-soft',
    textSolidClass: 'text-m10-text',
    borderClass: 'border-m10-border',
  },
  m11: {
    id: 'm11',
    codigo: 'M11',
    numero: 11,
    hue: 160,
    solidVar: 'var(--m11-solid)',
    softVar: 'var(--m11-soft)',
    textVar: 'var(--m11-text)',
    borderVar: 'var(--m11-border)',
    bgSolidClass: 'bg-m11',
    bgSoftClass: 'bg-m11-soft',
    textSolidClass: 'text-m11-text',
    borderClass: 'border-m11-border',
  },
  m12: {
    id: 'm12',
    codigo: 'M12',
    numero: 12,
    hue: 215,
    solidVar: 'var(--m12-solid)',
    softVar: 'var(--m12-soft)',
    textVar: 'var(--m12-text)',
    borderVar: 'var(--m12-border)',
    bgSolidClass: 'bg-m12',
    bgSoftClass: 'bg-m12-soft',
    textSolidClass: 'text-m12-text',
    borderClass: 'border-m12-border',
  },
  m13: {
    id: 'm13',
    codigo: 'M13',
    numero: 13,
    hue: 20,
    solidVar: 'var(--m13-solid)',
    softVar: 'var(--m13-soft)',
    textVar: 'var(--m13-text)',
    borderVar: 'var(--m13-border)',
    bgSolidClass: 'bg-m13',
    bgSoftClass: 'bg-m13-soft',
    textSolidClass: 'text-m13-text',
    borderClass: 'border-m13-border',
  },
  m14: {
    id: 'm14',
    codigo: 'M14',
    numero: 14,
    hue: 195,
    solidVar: 'var(--m14-solid)',
    softVar: 'var(--m14-soft)',
    textVar: 'var(--m14-text)',
    borderVar: 'var(--m14-border)',
    bgSolidClass: 'bg-m14',
    bgSoftClass: 'bg-m14-soft',
    textSolidClass: 'text-m14-text',
    borderClass: 'border-m14-border',
  },
};

/**
 * Normaliza qualquer identificador ('m1', 'M1', 1, '1.1') para o tema correspondente do macro-módulo.
 */
export function getModuleTheme(key: string | number | undefined): ModuleTheme & { primaryColor: string } {
  const resolve = (): ModuleTheme => {
    if (key === undefined || key === null) return MODULE_THEMES.m1;

    const str = String(key).trim().toLowerCase();
    
    // Caso '1.1' -> extrai '1'
    if (str.includes('.')) {
      const numPart = str.split('.')[0];
      const keyCandidate = `m${numPart}`;
      if (MODULE_THEMES[keyCandidate]) return MODULE_THEMES[keyCandidate];
    }

    // Caso 'm1', 'm10'
    if (MODULE_THEMES[str]) return MODULE_THEMES[str];

    // Caso número direto '1' ou 1
    const asNum = `m${str.replace(/^m/, '')}`;
    if (MODULE_THEMES[asNum]) return MODULE_THEMES[asNum];

    return MODULE_THEMES.m1;
  };

  const theme = resolve();
  return { ...theme, primaryColor: theme.solidVar };
}

export type SubmoduleState =
  | 'nao_iniciado'
  | 'disponivel'
  | 'em_andamento'
  | 'em_revisao'
  | 'em_revisao_dirigida'
  | 'concluido'
  | 'concluida'
  | 'bloqueado'
  | 'bloqueada'
  | 'planejado';

export interface SubmoduleStatusInfo {
  state: SubmoduleState;
  label: string;
}

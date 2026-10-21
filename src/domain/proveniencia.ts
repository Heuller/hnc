import type { FonteOriginal } from './schemas/question.schema';

export interface InfoProveniencia {
  rotulo: string;
  detalhe?: string;
  badgeClass: string;
  isReal: boolean;
  isAdaptada: boolean;
  isInedita: boolean;
  verificado: boolean;
}

/**
 * Retorna as informações padronizadas e honestas de proveniência de um item (P18).
 * Nunca exibe banca e ano para itens não confirmados.
 */
export function obterInfoProveniencia(fonteOriginal?: FonteOriginal): InfoProveniencia {
  if (!fonteOriginal) {
    return {
      rotulo: 'Inédita, sem prova de origem',
      badgeClass: 'bg-surface-2 text-ink-2 border-border',
      isReal: false,
      isAdaptada: false,
      isInedita: true,
      verificado: false,
    };
  }

  if (fonteOriginal.tipo === 'real-confirmada') {
    const orgaoAno = [fonteOriginal.orgao || 'Cebraspe', fonteOriginal.ano].filter(Boolean).join(' ');
    return {
      rotulo: `Prova real: ${orgaoAno}`,
      detalhe: fonteOriginal.provaId ? `#${fonteOriginal.provaId.replace('TecConcursos-', '')}` : undefined,
      badgeClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
      isReal: true,
      isAdaptada: false,
      isInedita: false,
      verificado: Boolean(fonteOriginal.verificado),
    };
  }

  if (fonteOriginal.tipo === 'adaptada') {
    const orgaoAno = [fonteOriginal.orgao, fonteOriginal.ano].filter(Boolean).join(' ');
    return {
      rotulo: orgaoAno ? `Adaptada (${orgaoAno})` : 'Adaptada',
      detalhe: fonteOriginal.questaoOriginalId || fonteOriginal.provaId,
      badgeClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
      isReal: false,
      isAdaptada: true,
      isInedita: false,
      verificado: Boolean(fonteOriginal.verificado),
    };
  }

  // Inédita
  return {
    rotulo: 'Inédita, sem prova de origem',
    badgeClass: 'bg-surface-2 text-ink-2 border-border',
    isReal: false,
    isAdaptada: false,
    isInedita: true,
    verificado: Boolean(fonteOriginal.verificado),
  };
}

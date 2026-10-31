import type { FonteOriginal } from './schemas/question.schema';

export interface InfoProveniencia {
  rotulo: string;
  detalhe?: string;
  badgeClass: string;
  isReal: boolean;
  isAdaptada: boolean;
  isInedita: boolean;
  isEmConferencia?: boolean;
  verificado: boolean;
  textoRodape: string;
}

/**
 * Triagem de alegações de origem em prova. Não confundir o tema jurídico
 * "concurso público" ou "concurso doloso" com atribuição a uma banca.
 * A confirmação da origem exige também os metadados e documentos do acervo.
 */
export const REGEX_TERMOS_PROIBIDOS_INEDITA = /gabarito oficial|cobrado no concurso|pela banca|(?:questão|item)\s+(?:do|da)\s+(?:concurso|prova)\b|(?:concurso|prova)\s+(?:CESPE|CEBRASPE|FCC|FGV|VUNESP|IBFC|CESGRANRIO)\b/i;

/**
 * Gera o texto de rodapé padrão para a proveniência do item.
 * O campo declaracaoLegada é preservado internamente e NUNCA exibido aqui.
 */
export function obterTextoRodapeProveniencia(fonteOriginal?: FonteOriginal): string {
  if (fonteOriginal?.tipo === 'em-conferencia') {
    return 'Item em conferência: o gabarito desta plataforma diverge do acervo consultado. Consulte o espelho oficial do Cebraspe antes de estudar por este item.';
  }

  if (!fonteOriginal || fonteOriginal.tipo === 'inedita') {
    return 'Item inédito autoral para fixação doutrinária (sem concurso prévio associado).';
  }

  if (fonteOriginal.tipo === 'real-confirmada') {
    const orgaoAno = [fonteOriginal.banca || 'Cebraspe', fonteOriginal.orgao, fonteOriginal.ano].filter(Boolean).join(' / ');
    return `Questão oficial de concurso público: ${orgaoAno}.`;
  }

  if (fonteOriginal.tipo === 'adaptada') {
    if (!fonteOriginal.verificado) {
      return 'Adaptação editorial; atribuição à prova de origem ainda não confirmada em documento oficial.';
    }
    const orgaoAno = [fonteOriginal.banca || 'Cebraspe', fonteOriginal.orgao, fonteOriginal.ano].filter(Boolean).join(' / ');
    return `Questão adaptada a partir de prova oficial: ${orgaoAno}.`;
  }

  return 'Item inédito autoral.';
}

/**
 * Retorna as informações padronizadas e honestas de proveniência de um item (P18 / C1).
 * Nunca exibe banca e ano para itens não confirmados.
 */
export function obterInfoProveniencia(fonteOriginal?: FonteOriginal): InfoProveniencia {
  const textoRodape = obterTextoRodapeProveniencia(fonteOriginal);

  if (!fonteOriginal) {
    return {
      rotulo: 'Inédita, sem prova de origem',
      badgeClass: 'bg-surface-2 text-ink-2 border-border',
      isReal: false,
      isAdaptada: false,
      isInedita: true,
      verificado: false,
      textoRodape,
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
      textoRodape,
    };
  }

  if (fonteOriginal.tipo === 'adaptada') {
    if (!fonteOriginal.verificado) {
      return {
        rotulo: 'Adaptada — origem não confirmada',
        badgeClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
        isReal: false,
        isAdaptada: true,
        isInedita: false,
        verificado: false,
        textoRodape,
      };
    }
    const orgaoAno = [fonteOriginal.orgao, fonteOriginal.ano].filter(Boolean).join(' ');
    return {
      rotulo: orgaoAno ? `Adaptada (${orgaoAno})` : 'Adaptada',
      detalhe: fonteOriginal.questaoOriginalId || fonteOriginal.provaId,
      badgeClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
      isReal: false,
      isAdaptada: true,
      isInedita: false,
      verificado: Boolean(fonteOriginal.verificado),
      textoRodape,
    };
  }

  if (fonteOriginal.tipo === 'em-conferencia') {
    return {
      rotulo: 'Em conferência',
      detalhe: 'Divergência sob análise',
      badgeClass: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30',
      isReal: false,
      isAdaptada: false,
      isInedita: false,
      isEmConferencia: true,
      verificado: false,
      textoRodape,
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
    textoRodape,
  };
}

import { calcularIntervaloAlvo } from '../../config/jornada.config';
import { EXAM_DATE_CAMARA } from '../leitner';
import { diaDaSemanaIso, somarDiasIso } from '../../utils/dataLocal';

/** Dias corridos entre duas datas YYYY-MM-DD (b - a). */
export function diasCorridosEntre(aIso: string, bIso: string): number {
  const [a1, a2, a3] = aIso.split('-').map(Number);
  const [b1, b2, b3] = bIso.split('-').map(Number);
  const ms = Date.UTC(b1, b2 - 1, b3) - Date.UTC(a1, a2 - 1, a3);
  return Math.round(ms / 86_400_000);
}

/**
 * Limita o intervalo (em dias úteis) a uma fração do tempo que resta até a prova.
 *
 * Cepeda et al. (2008) mostram que o intervalo ideal entre sessões cresce com o atraso até o
 * teste, mas diminui como proporção dele. `calcularIntervaloAlvo` (30% nos últimos 14 dias,
 * 15% até 90, 7,5% até 365) é a heurística do projeto; a conversão para dias úteis usa 5/7.
 * É uma aproximação de estudo, não um ótimo comprovado.
 */
export function limitarIntervaloUteisPeloHorizonte(
  diasUteis: number,
  dataRefIso: string,
  dataProvaIso: string = EXAM_DATE_CAMARA
): number {
  const restantes = diasCorridosEntre(dataRefIso, dataProvaIso);
  if (restantes <= 0) return 1;
  const maxCorridos = calcularIntervaloAlvo(restantes);
  const maxUteis = Math.max(1, Math.round((maxCorridos * 5) / 7));
  return Math.max(1, Math.min(diasUteis, maxUteis));
}

function hashTexto(t: string): number {
  let h = 0;
  for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Quando a próxima revisão passaria do teto (véspera da prova), em vez de empilhar tudo no
 * dia do teto, espalha os itens pelos últimos `janelaUteis` dias úteis antes dele.
 * Determinístico por conceito: o mesmo item sempre cai no mesmo dia.
 */
export function distribuirNoTeto(conceptId: string, tetoIso: string, janelaUteis = 10): string {
  const deslocamento = hashTexto(conceptId) % janelaUteis;
  let data = tetoIso;
  while (diaDaSemanaIso(data) === 0 || diaDaSemanaIso(data) === 6) data = somarDiasIso(data, -1);
  let restante = deslocamento;
  while (restante > 0) {
    data = somarDiasIso(data, -1);
    const d = diaDaSemanaIso(data);
    if (d !== 0 && d !== 6) restante--;
  }
  return data;
}

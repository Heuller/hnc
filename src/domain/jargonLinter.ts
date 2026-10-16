import { GLOSSARIO_TECNICO } from '../content/glossario-tecnico';
import type { ModuloFilho } from './schemas/modulo.schema';

export interface JargonBaseline {
  versao?: string;
  dataCriacao?: string;
  descricao?: string;
  submodulosTratados: string[];
  dividaConhecida: Record<string, string[]>;
}

export interface ViolacaoJargao {
  termo: string;
  submoduloId: string;
  submoduloNumero: string;
  motivo: string;
}

export interface RelatorioSubmoduloJargao {
  submoduloId: string;
  submoduloNumero: string;
  titulo: string;
  termosPresentes: string[];
  termosDefinidosLocalmente: string[];
  termosHeradosDePreRequisitos: string[];
  violacoes: ViolacaoJargao[];
  dividaRestante: string[];
  valido: boolean;
}

export interface JargonAuditReport {
  totalSubmodulosAuditados: number;
  totalViolacoes: number;
  totalDividaRestante: number;
  submodulosComViolacao: string[];
  submodulosComDivida: string[];
  detalhesPorSubmodulo: Record<string, RelatorioSubmoduloJargao>;
  sucesso: boolean;
}

/**
 * Cria regex segura para identificar o termo com limites de palavra estritos
 * evitando falsos positivos (ex: "URI" em "CURRÍCULO" ou "JÚRI")
 */
function criarRegexTermo(termo: string): RegExp {
  // Escapa caracteres especiais se houver (como hífen em OAI-PMH)
  const termoEscapado = termo.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  return new RegExp(`(?<![a-zA-Z0-9_])${termoEscapado}(?![a-zA-Z0-9_])`, 'i');
}

/**
 * Obtém recursivamente todos os termos definidos nos pré-requisitos de um submódulo
 */
export function obterTermosDefinidosEmPreRequisitos(
  submodulo: ModuloFilho,
  submodulosMap: Map<string, ModuloFilho>,
  visitados = new Set<string>()
): Set<string> {
  const termosDefinidos = new Set<string>();
  if (!submodulo.preRequisitos || submodulo.preRequisitos.length === 0) {
    return termosDefinidos;
  }

  for (const preReqId of submodulo.preRequisitos) {
    if (visitados.has(preReqId)) continue;
    visitados.add(preReqId);

    const preReq = submodulosMap.get(preReqId);
    if (!preReq) continue;

    // Termos no cartão antesDeLer do pré-requisito
    if (preReq.antesDeLer) {
      for (const t of preReq.antesDeLer) {
        termosDefinidos.add(t.termo.trim().toLowerCase());
      }
    }

    // Termos cujo submódulo canônico é o próprio pré-requisito
    for (const t of GLOSSARIO_TECNICO) {
      if (t.moduloOrigemId === preReq.id) {
        termosDefinidos.add(t.termo.toLowerCase());
      }
    }

    // Herança recursiva
    const ancestrais = obterTermosDefinidosEmPreRequisitos(preReq, submodulosMap, visitados);
    ancestrais.forEach((t) => termosDefinidos.add(t));
  }

  return termosDefinidos;
}

/**
 * Audita um submódulo individualmente
 */
export function auditarSubmoduloJargoes(
  submodulo: ModuloFilho,
  submodulosMap: Map<string, ModuloFilho>,
  baseline?: JargonBaseline
): RelatorioSubmoduloJargao {
  const textoCompleto = [
    submodulo.titulo,
    submodulo.descricaoCurta,
    submodulo.teoriaDensaMarkdown,
    ...(submodulo.secoes?.map((s) => `${s.titulo} ${s.conteudo}`) || []),
  ].join(' \n');

  // Termos definidos no próprio submódulo (antesDeLer ou origem canônica)
  const definidosLocal = new Set<string>();
  if (submodulo.antesDeLer) {
    for (const t of submodulo.antesDeLer) {
      definidosLocal.add(t.termo.trim().toLowerCase());
    }
  }

  for (const t of GLOSSARIO_TECNICO) {
    if (t.moduloOrigemId === submodulo.id) {
      definidosLocal.add(t.termo.toLowerCase());
    }
  }

  // Termos herdados dos pré-requisitos
  const definidosPreReq = obterTermosDefinidosEmPreRequisitos(submodulo, submodulosMap);

  const termosPresentes: string[] = [];
  const termosDefinidosLocalmente: string[] = [];
  const termosHeradosDePreRequisitos: string[] = [];
  const violacoes: ViolacaoJargao[] = [];
  const dividaRestante: string[] = [];

  const eTratado = baseline?.submodulosTratados.includes(submodulo.id) ?? false;
  const dividaPermitida = new Set(
    (baseline?.dividaConhecida[submodulo.id] || []).map((t) => t.toLowerCase())
  );

  for (const itemGlossario of GLOSSARIO_TECNICO) {
    const rx = criarRegexTermo(itemGlossario.termo);
    const presente = rx.test(textoCompleto);

    if (presente) {
      termosPresentes.push(itemGlossario.termo);
      const chaveTermo = itemGlossario.termo.toLowerCase();

      const definidoAqui = definidosLocal.has(chaveTermo);
      const definidoPre = definidosPreReq.has(chaveTermo);

      if (definidoAqui) {
        termosDefinidosLocalmente.push(itemGlossario.termo);
      } else if (definidoPre) {
        termosHeradosDePreRequisitos.push(itemGlossario.termo);
      } else {
        // Não está definido nem herdado
        if (!eTratado && dividaPermitida.has(chaveTermo)) {
          // Dívida conhecida na linha de base: tolerada temporariamente
          dividaRestante.push(itemGlossario.termo);
        } else {
          // Nova violação ou submódulo já marcado como tratado!
          violacoes.push({
            termo: itemGlossario.termo,
            submoduloId: submodulo.id,
            submoduloNumero: submodulo.numero,
            motivo: eTratado
              ? `Submódulo já tratado possui o termo técnico '${itemGlossario.termo}' sem definição prévia.`
              : `O termo técnico '${itemGlossario.termo}' aparece no conteúdo sem ter sido conceituado e sem constar na linha de base autorizada.`,
          });
        }
      }
    }
  }

  return {
    submoduloId: submodulo.id,
    submoduloNumero: submodulo.numero,
    titulo: submodulo.titulo,
    termosPresentes,
    termosDefinidosLocalmente,
    termosHeradosDePreRequisitos,
    violacoes,
    dividaRestante,
    valido: violacoes.length === 0,
  };
}

/**
 * Executa auditoria em lote sobre todos os submódulos da plataforma
 */
export function auditarTodosSubmodulosJargoes(
  submodulos: ModuloFilho[],
  baseline?: JargonBaseline
): JargonAuditReport {
  const map = new Map<string, ModuloFilho>();
  for (const sub of submodulos) {
    map.set(sub.id, sub);
  }

  const detalhes: Record<string, RelatorioSubmoduloJargao> = {};
  const submodulosComViolacao: string[] = [];
  const submodulosComDivida: string[] = [];
  let totalViolacoes = 0;
  let totalDividaRestante = 0;

  for (const sub of submodulos) {
    const rel = auditarSubmoduloJargoes(sub, map, baseline);
    detalhes[sub.id] = rel;
    if (!rel.valido) {
      submodulosComViolacao.push(sub.id);
      totalViolacoes += rel.violacoes.length;
    }
    if (rel.dividaRestante.length > 0) {
      submodulosComDivida.push(sub.id);
      totalDividaRestante += rel.dividaRestante.length;
    }
  }

  return {
    totalSubmodulosAuditados: submodulos.length,
    totalViolacoes,
    totalDividaRestante,
    submodulosComViolacao,
    submodulosComDivida,
    detalhesPorSubmodulo: detalhes,
    sucesso: totalViolacoes === 0,
  };
}

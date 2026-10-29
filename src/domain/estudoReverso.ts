/**
 * Regras puras do Estudo Reverso (correção comentada de itens Cebraspe C/E).
 * Fundamentação científica e decisões de desenho: docs/ESTUDO_REVERSO.md.
 */
import type { GrauCertezaCebraspe, JulgamentoCebraspe } from './schemas/question.schema';

export interface TrechoItem {
  texto: string;
  decisivo: boolean;
}

const escaparRegex = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Divide o item em trechos, marcando o gatilho (trecho que decide o julgamento).
 * Tolera diferenças de espaçamento; se o gatilho não for encontrado, devolve o item inteiro.
 */
export function destacarGatilho(item: string, gatilho?: string): TrechoItem[] {
  const palavras = gatilho?.trim().split(/\s+/).filter(Boolean) ?? [];
  if (palavras.length === 0) return [{ texto: item, decisivo: false }];
  const padrao = new RegExp(palavras.map(escaparRegex).join('\\s+'));
  const achado = padrao.exec(item);
  if (!achado) return [{ texto: item, decisivo: false }];
  const inicio = achado.index;
  const fim = inicio + achado[0].length;
  return [
    { texto: item.slice(0, inicio), decisivo: false },
    { texto: item.slice(inicio, fim), decisivo: true },
    { texto: item.slice(fim), decisivo: false },
  ].filter((t) => t.texto.length > 0);
}

/** Remove o prefixo "Gabarito CERTO." já exibido no selo do resultado. */
export function limparPrefixoGabarito(justificativa: string): string {
  return justificativa.replace(/^\s*Gabarito( oficial)?\s+(CERTO|ERRADO)\s*[.:!-]?\s*/i, '').trim();
}

/** Separa "Técnica: Nome. Explicação" em técnica e explicação. */
export function separarTecnica(armadilha?: string): { tecnica?: string; explicacao: string } {
  const texto = armadilha?.trim() ?? '';
  const m = /^Técnica:\s*([^.]{3,60})\.\s*([\s\S]*)$/.exec(texto);
  if (!m) return { explicacao: texto };
  return { tecnica: m[1].trim(), explicacao: m[2].trim() };
}

export type SituacaoResposta = 'acerto' | 'erro' | 'branco';

export function situacaoResposta(resposta: JulgamentoCebraspe | undefined, gabarito: 'C' | 'E'): SituacaoResposta {
  if (!resposta || resposta === 'BRANCO') return 'branco';
  return resposta === gabarito ? 'acerto' : 'erro';
}

/**
 * Pausa de autoexplicação antes da correção comentada: quando o aluno errou,
 * deixou em branco ou acertou no chute. Acerto com segurança dispensa a pausa.
 */
export function exigeAutoexplicacao(situacao: SituacaoResposta, certeza?: GrauCertezaCebraspe): boolean {
  if (situacao === 'erro' || situacao === 'branco') return true;
  return certeza === 'chute';
}

export interface MensagemCalibracao {
  tom: 'alerta' | 'atencao' | 'neutro';
  titulo: string;
  texto: string;
}

/** Mensagem metacognitiva conforme o par (resultado, confiança declarada). */
export function mensagemCalibracao(
  situacao: SituacaoResposta,
  certeza?: GrauCertezaCebraspe
): MensagemCalibracao | null {
  if (situacao === 'erro' && certeza === 'certeza') {
    return {
      tom: 'alerta',
      titulo: 'Erro com certeza: o mais valioso para revisar',
      texto:
        'Você tinha convicção e errou. Esse é o erro que mais se corrige quando a explicação é lida com atenção agora. Na prova, ele custaria um ponto líquido. Ele foi para o Caderno de Erros e vai voltar na revisão espaçada.',
    };
  }
  if (situacao === 'acerto' && certeza === 'chute') {
    return {
      tom: 'atencao',
      titulo: 'Acerto no chute não é domínio',
      texto:
        'Você acertou sem saber por quê. Leia a fundamentação como se tivesse errado: um acerto inseguro é esquecido rápido quando não é consolidado.',
    };
  }
  if (situacao === 'erro' && certeza === 'chute') {
    return {
      tom: 'neutro',
      titulo: 'Chute errado: lacuna de conteúdo, não de atenção',
      texto:
        'Na prova, deixar em branco valeria 0 em vez de −1. Use a fundamentação abaixo para fechar a lacuna e reconhecer este padrão da próxima vez.',
    };
  }
  if (situacao === 'branco') {
    return {
      tom: 'neutro',
      titulo: 'Em branco: oportunidade de aprender sem custo',
      texto: 'Antes de ler a resposta, tente decidir agora: tentar e depois conferir fixa mais do que só ler o gabarito.',
    };
  }
  return null;
}

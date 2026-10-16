import type {
  Exercicio,
  Checkpoint,
  TipoExercicio,
  SecaoTeoria,
} from '../schemas/modulo.schema';
import { converterCheckpointParaExercicio } from '../schemas/modulo.schema';

export interface ViolacaoDistribuicao {
  regra: 'MAX_DOIS_CONSECUTIVOS' | 'PRE_TESTE_POSICAO' | 'PRE_TESTE_TEMA_NOVO' | 'BRAIN_DUMP_POSICAO' | 'UM_ITEM_POR_SECAO';
  mensagem: string;
  indice?: number;
  tipo?: TipoExercicio;
  detalhe?: string;
}

export interface ResultadoValidacaoDistribuicao {
  valido: boolean;
  totalItens: number;
  violacoes: ViolacaoDistribuicao[];
}

/**
 * Normaliza qualquer item (Checkpoint legado ou Exercicio X1..X10) para Exercicio
 */
export function normalizarParaExercicio(item: Exercicio | Checkpoint): Exercicio {
  if (!('tipo' in item) || !item.tipo) {
    return converterCheckpointParaExercicio(item as Checkpoint);
  }
  return item as Exercicio;
}

/**
 * Valida a conformidade de uma lista de exercícios com as regras pedagógicas da Fase U4:
 * 1. No máximo 2 itens consecutivos do mesmo tipo
 * 2. Pré-teste (X1) apenas no início (posição 0) e em tema novo
 * 3. Brain dump (X4) apenas no final do submódulo (última posição)
 */
export function validarRegrasDistribuicao(
  itens: Array<Exercicio | Checkpoint>,
  opcoes?: { isTemaNovo?: boolean }
): ResultadoValidacaoDistribuicao {
  const violacoes: ViolacaoDistribuicao[] = [];
  const exercicios = itens.map(normalizarParaExercicio);
  const total = exercicios.length;

  if (total === 0) {
    return { valido: true, totalItens: 0, violacoes: [] };
  }

  // Regra 1: No máximo 2 itens consecutivos do mesmo tipo
  let consecutivos = 1;
  let tipoAnterior: TipoExercicio = exercicios[0].tipo;

  for (let i = 1; i < total; i++) {
    const tipoAtual = exercicios[i].tipo;
    if (tipoAtual === tipoAnterior) {
      consecutivos++;
      if (consecutivos > 2) {
        violacoes.push({
          regra: 'MAX_DOIS_CONSECUTIVOS',
          mensagem: `Detectados ${consecutivos} exercícios consecutivos do mesmo tipo (${tipoAtual}) no índice ${i}. O teto pedagógico é 2.`,
          indice: i,
          tipo: tipoAtual,
        });
      }
    } else {
      consecutivos = 1;
      tipoAnterior = tipoAtual;
    }
  }

  // Regra 2: Pré-teste (X1) apenas no início (índice 0) e em tema novo
  exercicios.forEach((ex, idx) => {
    if (ex.tipo === 'X1') {
      if (idx !== 0) {
        violacoes.push({
          regra: 'PRE_TESTE_POSICAO',
          mensagem: `Pré-teste (X1) posicionado no índice ${idx}. Pré-testes devem ocorrer exclusivamente no início (posição 0) antes da leitura.`,
          indice: idx,
          tipo: 'X1',
        });
      }
      if (opcoes?.isTemaNovo === false) {
        violacoes.push({
          regra: 'PRE_TESTE_TEMA_NOVO',
          mensagem: `Pré-teste (X1) incluído em submódulo de continuidade/revisão. O pré-teste pedagógico destina-se apenas a temas novos.`,
          indice: idx,
          tipo: 'X1',
        });
      }
    }
  });

  // Regra 3: Brain dump (X4) apenas no fim do submódulo (último índice)
  exercicios.forEach((ex, idx) => {
    if (ex.tipo === 'X4') {
      if (idx !== total - 1) {
        violacoes.push({
          regra: 'BRAIN_DUMP_POSICAO',
          mensagem: `Brain dump (X4) posicionado no índice ${idx} de ${total}. Brain dumps devem ocorrer exclusivamente ao final do submódulo.`,
          indice: idx,
          tipo: 'X4',
        });
      }
    }
  });

  return {
    valido: violacoes.length === 0,
    totalItens: total,
    violacoes,
  };
}

/**
 * Valida se a distribuição por seções respeita a regra: 1 item por seção.
 */
export function validarDistribuicaoSecoes(
  secoes: SecaoTeoria[]
): ResultadoValidacaoDistribuicao {
  const violacoes: ViolacaoDistribuicao[] = [];
  let totalItens = 0;

  secoes.forEach((secao, idx) => {
    const qtd = secao.itens?.length || 0;
    totalItens += qtd;
    if (qtd > 1) {
      violacoes.push({
        regra: 'UM_ITEM_POR_SECAO',
        mensagem: `Seção "${secao.titulo}" (índice ${idx}) possui ${qtd} itens. A regra pedagógica estabelece no máximo 1 item por seção.`,
        indice: idx,
        detalhe: secao.id,
      });
    }
  });

  return {
    valido: violacoes.length === 0,
    totalItens,
    violacoes,
  };
}

/**
 * Intercala tipos de exercícios para assegurar que nunca haja mais de 2 do mesmo tipo seguidos,
 * respeitando X1 na primeira posição e X4 na última.
 */
export function intercalarTiposExercicios(itens: Array<Exercicio | Checkpoint>): Exercicio[] {
  const exercicios = itens.map(normalizarParaExercicio);
  if (exercicios.length <= 2) return exercicios;

  const resultado: Exercicio[] = [];
  const fila = [...exercicios];

  // Se houver X1, obrigatoriamente coloca na frente
  const idxX1 = fila.findIndex((item) => item.tipo === 'X1');
  if (idxX1 >= 0) {
    resultado.push(fila.splice(idxX1, 1)[0]);
  }

  // Se houver X4, reserva para o final
  let reservadoX4: Exercicio | null = null;
  const idxX4 = fila.findIndex((item) => item.tipo === 'X4');
  if (idxX4 >= 0) {
    reservadoX4 = fila.splice(idxX4, 1)[0];
  }

  // Preenche a lista evitando 3 consecutivos do mesmo tipo
  while (fila.length > 0) {
    const ultimosDoisMesmoTipo =
      resultado.length >= 2 &&
      resultado[resultado.length - 1].tipo === resultado[resultado.length - 2].tipo;

    if (ultimosDoisMesmoTipo) {
      const tipoEvitar = resultado[resultado.length - 1].tipo;
      const idxDiferente = fila.findIndex((item) => item.tipo !== tipoEvitar);

      if (idxDiferente >= 0) {
        resultado.push(fila.splice(idxDiferente, 1)[0]);
      } else {
        // Não há outro tipo disponível na fila
        resultado.push(fila.shift()!);
      }
    } else {
      resultado.push(fila.shift()!);
    }
  }

  // Insere X4 no final se houver
  if (reservadoX4) {
    resultado.push(reservadoX4);
  }

  return resultado;
}

/**
 * Distribui uma lista de exercícios pelas seções de teoria, associando 1 item por seção
 */
export function distribuirItensPorSecoes(
  secoes: SecaoTeoria[],
  exercicios: Array<Exercicio | Checkpoint>
): SecaoTeoria[] {
  const itensIntercalados = intercalarTiposExercicios(exercicios);
  return secoes.map((secao, idx) => {
    const itemSecao = itensIntercalados[idx];
    return {
      ...secao,
      itens: itemSecao ? [itemSecao] : undefined,
    };
  });
}

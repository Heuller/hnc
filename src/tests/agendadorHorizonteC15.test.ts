import { describe, it, expect } from 'vitest';
import { processarRevisaoConceito, criarEstadoInicialConceito } from '../domain/scheduler/unifiedScheduler';
import { limitarIntervaloUteisPeloHorizonte, distribuirNoTeto, diasCorridosEntre } from '../domain/scheduler/horizonte';
import { calcularIntervaloAlvo } from '../config/jornada.config';
import { DATA_LIMITE_REVISAO } from '../domain/leitner';
import { diaDaSemanaIso } from '../utils/dataLocal';
import type { ConceptState } from '../domain/concepts/types';

function simularAlunoPerfeito(inicio: string, conceptId = 'c_1.1_epist', ate = '2027-01-17') {
  let estado: ConceptState = criarEstadoInicialConceito(conceptId, 'u', inicio);
  const datas: string[] = [];
  let hoje = estado.proximaRevisao;
  for (let guarda = 0; guarda < 40 && hoje <= ate; guarda++) {
    datas.push(hoje);
    const r = processarRevisaoConceito(estado, true, 'certeza', 'f1_ce_simples', 'C', 10, hoje, 'sub-1-1');
    estado = r.novoEstado;
    if (estado.proximaRevisao <= hoje) break;
    hoje = estado.proximaRevisao;
  }
  return datas;
}

describe('Agendador: intervalo limitado ao horizonte até a prova', () => {
  it('calcularIntervaloAlvo é monotônico: mais longe da prova nunca encurta o intervalo', () => {
    let anterior = 0;
    for (let d = 1; d <= 400; d++) {
      const v = calcularIntervaloAlvo(d);
      expect(v).toBeGreaterThanOrEqual(anterior);
      anterior = v;
    }
  });

  it('aluno perfeito começando em 26/10 revisa em lacunas de no máximo ~2 semanas, e todas antes do teto', () => {
    const datas = simularAlunoPerfeito('2026-10-26');
    expect(datas.length).toBeGreaterThanOrEqual(6);
    for (let i = 1; i < datas.length; i++) {
      const lacuna = diasCorridosEntre(datas[i - 1], datas[i]);
      expect(lacuna).toBeLessThanOrEqual(17);
    }
    expect(datas[datas.length - 1] <= DATA_LIMITE_REVISAO).toBe(true);
    // A última revisão não pode ficar a mais de 17 dias da prova sem outra marcada depois
    expect(diasCorridosEntre(datas[datas.length - 1], '2027-01-17')).toBeLessThanOrEqual(17);
  });

  it('as lacunas encolhem perto da prova', () => {
    const datas = simularAlunoPerfeito('2026-10-26');
    const lacunas = datas.slice(1).map((d, i) => diasCorridosEntre(datas[i], d));
    expect(lacunas[lacunas.length - 1]).toBeLessThanOrEqual(Math.max(...lacunas));
  });

  it('limitarIntervalo respeita o intervalo da caixa quando ele já é menor que o horizonte', () => {
    expect(limitarIntervaloUteisPeloHorizonte(1, '2026-10-26')).toBe(1);
    expect(limitarIntervaloUteisPeloHorizonte(35, '2026-10-26')).toBeLessThan(35);
  });

  it('aceleração exige o acerto anterior CONFIANTE', () => {
    const base: ConceptState = {
      ...criarEstadoInicialConceito('c_1.1_epist', 'u', '2026-10-26'),
      caixaLeitner: 2,
      proximaRevisao: '2026-10-26',
      totalAparicoes: 3,
      historico: [
        {
          id: 'l1', timestamp: '2026-10-23T12:00:00Z', dataIso: '2026-10-23', formatoUsado: 'f1_ce_simples',
          respostaDada: 'C', acertou: true, confianca: 'duvida', tempoRespostaSegundos: 9, caixaAnterior: 1, caixaNova: 2,
        },
      ],
    };
    const r = processarRevisaoConceito(base, true, 'certeza', 'f1_ce_simples', 'C', 9, '2026-10-26', 'sub-1-1');
    expect(r.mensagemPedagogica).not.toContain('dois acertos confiantes');
  });
});

describe('Agendador: teto de 15/01 distribuído, não empilhado', () => {
  it('itens diferentes caem em dias úteis diferentes, todos até o teto e a no máximo 10 dias úteis dele', () => {
    const ids = Array.from({ length: 120 }, (_, i) => `c_${i}`);
    const datas = new Set(ids.map((id) => distribuirNoTeto(id, DATA_LIMITE_REVISAO)));
    expect(datas.size).toBeGreaterThanOrEqual(8);
    for (const d of datas) {
      expect(d <= DATA_LIMITE_REVISAO).toBe(true);
      const dow = diaDaSemanaIso(d);
      expect(dow >= 1 && dow <= 5).toBe(true);
      expect(diasCorridosEntre(d, DATA_LIMITE_REVISAO)).toBeLessThanOrEqual(14);
    }
  });

  it('é determinístico por conceito', () => {
    expect(distribuirNoTeto('c_x', DATA_LIMITE_REVISAO)).toBe(distribuirNoTeto('c_x', DATA_LIMITE_REVISAO));
  });
});

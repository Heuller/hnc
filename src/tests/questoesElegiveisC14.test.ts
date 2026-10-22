import { describe, it, expect } from 'vitest';
import { ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { elegivelParaEstudo } from '../domain/questoesElegiveis';
import { simuladoIngles100Q } from '../content/questions/m12-ingles-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoPreservacao100Q } from '../content/questions/m7-preservacao-100q';
import { getItensCadernoErros } from '../domain/cadernoErros';
import type { SimuladoFinalizado } from '../domain/schemas/progress.schema';

describe('Passo 2 (Prompt C14) — Fechar o alcance do campo revisar com elegivelParaEstudo', () => {
  const idsOriginaisC2 = [
    // 15 de m12
    'm12-q-4', 'm12-q-9', 'm12-q-23', 'm12-q-44', 'm12-q-50',
    'm12-q-54', 'm12-q-59', 'm12-q-70', 'm12-q-79', 'm12-q-93',
    'm12-q-8', 'm12-q-14', 'm12-q-15', 'm12-q-16', 'm12-q-60',
    // 4 de mega
    'mega-q-13', 'mega-q-14', 'mega-q-15', 'mega-q-16',
    // 1 de m7
    'm7-q-90'
  ];

  it('1. elegivelParaEstudo bloqueia estritamente qualquer item com revisar: true ou tipo: em-conferencia', () => {
    expect(elegivelParaEstudo({ fonteOriginal: { revisar: true } })).toBe(false);
    expect(elegivelParaEstudo({ fonteOriginal: { tipo: 'em-conferencia' } })).toBe(false);
    expect(elegivelParaEstudo({ fonteOriginal: { revisar: true, tipo: 'em-conferencia' } })).toBe(false);
    expect(elegivelParaEstudo({ fonteOriginal: { revisar: false, tipo: 'inedita' } })).toBe(true);
    expect(elegivelParaEstudo({ fonteOriginal: { tipo: 'real-confirmada' } })).toBe(true);
  });

  it('2. Todos os 20 IDs com flag revisar: true são rejeitados por elegivelParaEstudo', () => {
    const mapaGeral = new Map();
    [...simuladoIngles100Q, ...megaSimuladoCamara120Q, ...simuladoPreservacao100Q].forEach((q) => {
      mapaGeral.set(q.id, q);
    });

    for (const id of idsOriginaisC2) {
      const q = mapaGeral.get(id);
      if (q && q.fonteOriginal?.revisar) {
        expect(elegivelParaEstudo(q), `Item ${id} deve ser inelegível`).toBe(false);
      }
    }
  });

  it('3. Nenhum simulado registrado em ALL_SIMULADOS_REGISTRY contém itens com revisar: true ou tipo em-conferencia', () => {
    for (const sim of ALL_SIMULADOS_REGISTRY) {
      for (const q of sim.questoes) {
        expect(q.fonteOriginal?.revisar, `Item ${q.id} em ${sim.id} tem revisar: true`).not.toBe(true);
        expect(q.fonteOriginal?.tipo, `Item ${q.id} em ${sim.id} tem tipo em-conferencia`).not.toBe('em-conferencia');
      }
    }
  });

  it('4. Caderno de erros não serve itens com revisar: true ou em-conferencia a partir de histórico', () => {
    const historicoFalso: SimuladoFinalizado[] = [
      {
        id: 'hist-test-1',
        simuladoId: 'm12-ingles',
        dataHora: new Date().toISOString(),
        tempoGastoSegundos: 300,
        certos: 0,
        errados: 1,
        emBranco: 0,
        notaLiquida: -1,
        aproveitamentoPercent: 0,
        respostas: {
          'm12-q-4': { questionId: 'm12-q-4', resposta: 'E', acertou: false, timestamp: Date.now() },
        },
        calibracao: {
          acertoCertezaPercent: 0,
          acertoProvavelPercent: 0,
          acertoChutePercent: 0,
          ganhoPotencialSeChuteBranco: 0,
        },
      },
    ];

    const erros = getItensCadernoErros({}, historicoFalso);
    const temM12Q4 = erros.some((e) => e.chaveOriginal === 'm12-q-4');
    expect(temM12Q4, 'Item com revisar: true não deve aparecer no Caderno de Erros').toBe(false);
  });
});

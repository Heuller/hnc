/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';

describe('V-01: Integridade do Simulado e Blindagem da Nota Líquida Cebraspe', () => {
  beforeEach(() => {
    localStorage.clear();
    useProgressStore.getState().limparTodoProgresso();
  });

  it('(1) Responder C e depois E no mesmo item mantém exclusivamente a primeira resposta', () => {
    const store = useProgressStore.getState();
    const simId = 'm1-fundamentos';
    const qId = 'fund-q-1';

    // 1. Julga 'C' (supondo que o gabarito é C -> acertou: true)
    store.salvarRespostaSimulado(simId, qId, 'C', 'certeza', true);

    let sessao = useProgressStore.getState().obterSessaoSimulado(simId);
    expect(sessao.respostas[qId]).toBeDefined();
    expect(sessao.respostas[qId]?.resposta).toBe('C');
    expect(sessao.respostas[qId]?.acertou).toBe(true);

    // 2. Tenta julgar 'E' no mesmo item
    store.salvarRespostaSimulado(simId, qId, 'E', 'certeza', false);

    sessao = useProgressStore.getState().obterSessaoSimulado(simId);
    // Deve continuar 'C'
    expect(sessao.respostas[qId]?.resposta).toBe('C');
    expect(sessao.respostas[qId]?.acertou).toBe(true);
  });

  it('(2) Nota líquida = acertos − erros com 3 itens', () => {
    const store = useProgressStore.getState();
    const simId = 'm1-fundamentos';

    // Item 1: Acerto (+1)
    store.salvarRespostaSimulado(simId, 'q1', 'C', 'certeza', true);
    // Item 2: Erro (-1)
    store.salvarRespostaSimulado(simId, 'q2', 'E', 'certeza', false);
    // Item 3: Acerto (+1)
    store.salvarRespostaSimulado(simId, 'q3', 'C', 'certeza', true);

    const sessao = useProgressStore.getState().obterSessaoSimulado(simId);
    let certos = 0;
    let errados = 0;
    let brancos = 0;

    Object.values(sessao.respostas).forEach((r) => {
      if (r.resposta === 'BRANCO') brancos++;
      else if (r.acertou) certos++;
      else errados++;
    });

    const notaLiquida = certos - errados;
    expect(certos).toBe(2);
    expect(errados).toBe(1);
    expect(brancos).toBe(0);
    expect(notaLiquida).toBe(1); // 2 - 1 = 1
  });

  it('(3) Deixar em BRANCO vale 0 e não desconta da nota líquida', () => {
    const store = useProgressStore.getState();
    const simId = 'm1-fundamentos';

    // Item 1: Acerto (+1)
    store.salvarRespostaSimulado(simId, 'q1', 'C', 'certeza', true);
    // Item 2: Branco (0)
    store.salvarRespostaSimulado(simId, 'q2', 'BRANCO', undefined, undefined);

    const sessao = useProgressStore.getState().obterSessaoSimulado(simId);
    let certos = 0;
    let errados = 0;
    let brancos = 0;

    Object.values(sessao.respostas).forEach((r) => {
      if (r.resposta === 'BRANCO') brancos++;
      else if (r.acertou) certos++;
      else errados++;
    });

    const notaLiquida = certos - errados;
    expect(certos).toBe(1);
    expect(errados).toBe(0);
    expect(brancos).toBe(1);
    expect(notaLiquida).toBe(1);
  });

  it('(4) Recarregar a página / reidratar store preserva a resposta e estado travado', async () => {
    const store = useProgressStore.getState();
    const simId = 'm1-fundamentos';

    store.salvarRespostaSimulado(simId, 'q1', 'C', 'certeza', true);

    // Simula reidratação
    await useProgressStore.persist.rehydrate();

    const sessao = useProgressStore.getState().obterSessaoSimulado(simId);
    expect(sessao.respostas['q1']).toBeDefined();
    expect(sessao.respostas['q1']?.resposta).toBe('C');

    // Tentar sobrescrever após reidratar continua bloqueado
    useProgressStore.getState().salvarRespostaSimulado(simId, 'q1', 'E', 'certeza', false);
    const sessaoApos = useProgressStore.getState().obterSessaoSimulado(simId);
    expect(sessaoApos.respostas['q1']?.resposta).toBe('C');
  });

  it('(5) Sequência C, B, E no item 1 resulta na pontuação da primeira resposta (nunca manipulada para +1)', () => {
    const store = useProgressStore.getState();
    const simId = 'm1-fundamentos';
    const q1Gabarito = 'E'; // Gabarito real é E

    // 1. Usuário responde C (erra: -1)
    store.salvarRespostaSimulado(simId, 'q1', 'C', 'certeza', 'C' === q1Gabarito); // acertou: false

    // 2. Usuário tenta mudar para B (0)
    store.salvarRespostaSimulado(simId, 'q1', 'BRANCO', undefined, undefined);

    // 3. Usuário tenta mudar para E (+1) após ver o gabarito
    store.salvarRespostaSimulado(simId, 'q1', 'E', 'certeza', 'E' === q1Gabarito);

    const sessao = useProgressStore.getState().obterSessaoSimulado(simId);
    expect(sessao.respostas['q1']?.resposta).toBe('C');
    expect(sessao.respostas['q1']?.acertou).toBe(false);

    let certos = 0;
    let errados = 0;
    Object.values(sessao.respostas).forEach((r) => {
      if (r.acertou) certos++;
      else if (r.resposta !== 'BRANCO') errados++;
    });

    const notaLiquida = certos - errados;
    expect(notaLiquida).toBe(-1); // Permanece fiel à resposta original -1
  });
});

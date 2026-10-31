/** @vitest-environment jsdom */
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useProgressStore } from '../store/useProgressStore';
import { useAuthStore } from '../store/useAuthStore';
import { getSimuladoById } from '../content/simuladosRegistry';
import { versaoQuestao, versaoSimulado, sessaoPrecisaAtualizacao } from '../domain/versaoConteudoSimulado';
import { SessaoSimuladoStateSchema } from '../domain/schemas/progress.schema';
import { simuladoSessionService } from '../services/simuladoSessionService';
import { getItensCadernoErros } from '../domain/cadernoErros';
import { progressSyncService } from '../services/progressSyncService';
import { EnunciadoQuestao } from '../components/common/EnunciadoQuestao';

const simId = 'm13-portugues';
const questoes = getSimuladoById(simId).questoes;
const q = questoes.find(q => q.id === 'm13-q-13')!;
beforeEach(() => {
  localStorage.clear();
  useAuthStore.setState({ user: null, session: null, loading: false });
  useProgressStore.getState().limparTodoProgresso();
});
describe('Versão editorial e preservação de tentativas', () => {
  it('registra versão e gabarito reais sem confiar no sinal de acerto fornecido pelo chamador', () => {
    const store = useProgressStore.getState();
    store.iniciarOuRetomarSimulado(simId);
    store.salvarRespostaSimulado(simId, q.id, q.gabarito, 'certeza', false);
    const s = store.obterSessaoSimulado(simId);
    expect(s.respostas[q.id]).toMatchObject({ gabaritoNaResposta: q.gabarito, versaoQuestao: versaoQuestao(q), acertou: true });
    expect(sessaoPrecisaAtualizacao(s, questoes)).toBe(false);
    expect(SessaoSimuladoStateSchema.parse(JSON.parse(JSON.stringify(s)))).toEqual(s);
  });
  it('detecta alteração de contexto, item, julgamento e comentário', () => {
    for (const patch of [{ contexto: 'outro texto' }, { item: 'outra afirmação' }, { gabarito: 'C' as const }, { justificativa: 'outro fundamento' }]) {
      expect(versaoQuestao({ ...q, ...patch })).not.toBe(versaoQuestao(q));
    }
  });
  it('não responde nem finaliza silenciosamente sessão legada; arquiva respostas e tempo sem criar nota nova', () => {
    const respostas = { [q.id]: { questionId: q.id, resposta: 'C' as const, acertou: true, timestamp: 100 } };
    useProgressStore.setState({ sessoesSimulados: { [simId]: { simuladoId: simId, respostas, currentIndex: 12, emAndamento: true, tempoGastoSegundos: 91, ultimoAcessoTimestamp: 100 } } });
    const store = useProgressStore.getState();
    store.iniciarOuRetomarSimulado(simId);
    const antes = store.obterSessaoSimulado(simId);
    expect(antes.versaoConteudo).toBeUndefined();
    store.salvarRespostaSimulado(simId, questoes[0].id, 'C');
    expect(store.obterSessaoSimulado(simId).respostas).toEqual(respostas);
    expect(() => store.finalizarSimulado(91, simId)).toThrow('conteúdo');
    expect(useProgressStore.getState().historicoSimulados).toEqual([]);
    store.reiniciarSimulado(simId);
    const nova = store.obterSessaoSimulado(simId);
    expect(nova.respostas).toEqual({});
    expect(nova.tentativasArquivadas?.[0]).toMatchObject({ respostas, tempoGastoSegundos: 91 });
    const backup = useProgressStore.getState().exportarProgressoJson();
    store.limparTodoProgresso();
    expect(store.importarProgressoJson(backup).success).toBe(true);
    expect(store.obterSessaoSimulado(simId).tentativasArquivadas?.[0].respostas).toEqual(respostas);
  });
  it('não mistura respostas de tentativas distintas ao recuperar uma sessão mais recente', () => {
    const base = { simuladoId: simId, currentIndex: 0, emAndamento: true, tempoGastoSegundos: 0, versaoConteudo: versaoSimulado(questoes) };
    const anterior = { ...base, tentativaId: 'anterior', respostas: { [q.id]: { questionId: q.id, resposta: 'E' as const, timestamp: 1 } }, ultimoAcessoTimestamp: 1 };
    const atual = { ...base, tentativaId: 'nova', respostas: {}, ultimoAcessoTimestamp: 2 };
    const mesclada = simuladoSessionService.mesclarSessoes(atual, anterior)!;
    expect(mesclada.respostas).toEqual({});
    expect(mesclada.tentativasArquivadas?.[0].respostas).toEqual(anterior.respostas);
    expect(simuladoSessionService.mesclarSessoes(mesclada, anterior)?.tentativasArquivadas).toHaveLength(1);
  });
  it('mantém gabarito da versão na conclusão e inclui no caderno apenas erros da versão identificada', () => {
    const store = useProgressStore.getState();
    store.iniciarOuRetomarSimulado(simId);
    const errada: 'C' | 'E' = q.gabarito === 'C' ? 'E' : 'C';
    store.salvarRespostaSimulado(simId, q.id, errada);
    const resultado = store.finalizarSimulado(10, simId);
    expect(resultado.errados).toBe(1);
    const erros = getItensCadernoErros({}, [resultado]);
    expect(erros.find(e => e.chaveOriginal === q.id)).toMatchObject({ contexto: q.contexto, gatilho: q.gatilho });
    const legada = { ...resultado, respostas: { [q.id]: { questionId: q.id, resposta: errada, acertou: false, timestamp: 1 } } };
    expect(getItensCadernoErros({}, [legada])).toEqual([]);
    expect(resultado.notaLiquida).toBe(-1);
  });
  it('retoma e pontua apenas os itens selecionados do reteste', () => {
    const store = useProgressStore.getState();
    store.iniciarOuRetomarSimulado(simId, questoes.slice(0, 3).map(q => q.id));
    store.salvarRespostaSimulado(simId, questoes[0].id, questoes[0].gabarito);
    store.salvarRespostaSimulado(simId, questoes[4].id, questoes[4].gabarito);
    expect(store.obterSessaoSimulado(simId).respostas[questoes[4].id]).toBeUndefined();
    useProgressStore.setState({ sessoesSimulados: {} });
    store.iniciarOuRetomarSimulado(simId);
    expect(store.obterSessaoSimulado(simId).itensSelecionados).toHaveLength(3);
    const resultado = store.finalizarSimulado(5, simId);
    expect(resultado.certos).toBe(1);
    expect(resultado.emBranco).toBe(2);
    expect(resultado.itensSelecionados).toHaveLength(3);
    expect(resultado.tituloSimulado).toContain('Reteste');
  });
  it('mantém a primeira resposta ao mesclar conflitos da mesma tentativa', () => {
    const base = { simuladoId: simId, tentativaId: 'mesma', versaoConteudo: 'v1', currentIndex: 0, emAndamento: true, tempoGastoSegundos: 0 };
    const a = { ...base, respostas: { [q.id]: { questionId: q.id, resposta: 'C' as const, timestamp: 1 } }, ultimoAcessoTimestamp: 1 };
    const b = { ...base, respostas: { [q.id]: { questionId: q.id, resposta: 'E' as const, timestamp: 2 } }, ultimoAcessoTimestamp: 2 };
    expect(simuladoSessionService.mesclarSessoes(b, a)?.respostas[q.id].resposta).toBe('C');
  });
  it('não cancela a sincronização de um caderno ao responder outro', async () => {
    vi.useFakeTimers();
    const spy = vi.spyOn(progressSyncService, 'salvarSessaoSimuladoNuvem').mockResolvedValue(true);
    try {
      const sessao = { simuladoId: simId, respostas: {}, currentIndex: 0, emAndamento: true, tempoGastoSegundos: 0, ultimoAcessoTimestamp: 1 };
      simuladoSessionService.salvarSessaoNuvemDebounced('usuario-local', 'caderno-a', sessao, 100);
      simuladoSessionService.salvarSessaoNuvemDebounced('usuario-local', 'caderno-b', sessao, 100);
      await vi.advanceTimersByTimeAsync(100);
      expect(spy).toHaveBeenCalledTimes(2);
    } finally { spy.mockRestore(); vi.useRealTimers(); }
  });
  it('apresenta o texto de apoio antes da afirmação sem expor julgamento', () => {
    render(<EnunciadoQuestao item="Afirmação a julgar" contexto="Texto indispensável\nSegundo parágrafo" macroModuloId="M12" />);
    expect(screen.getByLabelText('Texto de apoio').textContent).toContain('Texto indispensável');
    expect(screen.queryByText(/gabarito/i)).toBeNull();
    expect(screen.getByText('Afirmação a julgar').parentElement?.lang).toBe('en');
  });
});

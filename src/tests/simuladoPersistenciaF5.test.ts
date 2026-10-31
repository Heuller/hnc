/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { useAuthStore } from '../store/useAuthStore';
import { simuladoSessionService } from '../services/simuladoSessionService';
import { getEffectiveUserId, setStoredActiveUserId, HNC_LAST_ACTIVE_UID_KEY } from '../lib/userScopedStorage';
import { getSimuladoIdFromHash, getQuestionIndexFromHash } from '../store/useNavigationStore';

describe('Resiliência de Simulado contra Atualização de Navegador (F5 / Reload)', () => {
  beforeEach(() => {
    localStorage.clear();
    useAuthStore.setState({ user: null, session: null, loading: false });
    useProgressStore.getState().limparTodoProgresso();
  });

  it('(1) Salva atômica e imediatamente as respostas, índice e tempo no simuladoSessionService a cada clique', () => {
    const simId = 'm1-fundamentos';
    const store = useProgressStore.getState();

    store.iniciarOuRetomarSimulado(simId);
    store.salvarRespostaSimulado(simId, 'fund-q-1', 'C', 'certeza', true);
    store.salvarRespostaSimulado(simId, 'fund-q-2', 'E', 'provavel', false);
    store.mudarQuestaoSimulado(3, simId);
    store.salvarTempoSimulado(simId, 95);

    // Verifica se o storage atômico local foi populado síncronamente
    const snapshot = simuladoSessionService.obterSessaoLocal(simId);
    expect(snapshot).not.toBeNull();
    expect(snapshot?.currentIndex).toBe(3);
    expect(snapshot?.tempoGastoSegundos).toBe(95);
    expect(snapshot?.respostas['fund-q-1']?.resposta).toBe('C');
    expect(snapshot?.respostas['fund-q-2']?.resposta).toBe('E');
    expect(simuladoSessionService.obterUltimoSimuladoIdAtivo()).toBe(simId);
  });

  it('(2) Simulação de F5: store em memória é resetado, mas obterSessaoSimulado recupera respostas e progresso sem perda', () => {
    const simId = 'm2-catalogacao';
    const store = useProgressStore.getState();

    // 1. Usuário responde itens e avança
    store.iniciarOuRetomarSimulado(simId);
    store.salvarRespostaSimulado(simId, 'cat-q-10', 'C', 'certeza', true);
    store.salvarRespostaSimulado(simId, 'cat-q-11', 'BRANCO', undefined, undefined);
    store.mudarQuestaoSimulado(12, simId);

    // 2. Simula reload do navegador (F5): zera memória em tempo de execução
    useProgressStore.setState({
      sessoesSimulados: {},
      sessaoAtivaSimulado: { respostas: {}, currentIndex: 0, emAndamento: false },
      ultimoSimuladoAcessadoId: 'm1-fundamentos',
    });

    // 3. Ao reabrir o simulado (obterSessaoSimulado), deve restaurar imediatamente do storage atômico
    const sessaoRecuperada = useProgressStore.getState().obterSessaoSimulado(simId);
    expect(sessaoRecuperada.respostas['cat-q-10']?.resposta).toBe('C');
    expect(sessaoRecuperada.respostas['cat-q-11']?.resposta).toBe('BRANCO');
    expect(sessaoRecuperada.currentIndex).toBe(12);

    // 4. iniciarOuRetomarSimulado NÃO deve zerar as respostas existentes
    useProgressStore.getState().iniciarOuRetomarSimulado(simId);
    const sessaoAposRetomar = useProgressStore.getState().obterSessaoSimulado(simId);
    expect(sessaoAposRetomar.respostas['cat-q-10']?.resposta).toBe('C');
    expect(sessaoAposRetomar.currentIndex).toBe(12);
  });

  it('(3) getEffectiveUserId recupera o ID do usuário de forma síncrona antes do carregamento assíncrono do Supabase', () => {
    const testUserId = 'usuario-camara-123';

    // Simula logout: sem uid
    setStoredActiveUserId(null);
    expect(getEffectiveUserId()).toBeUndefined();

    // Simula persistência síncrona do usuário
    setStoredActiveUserId(testUserId);
    expect(getEffectiveUserId()).toBe(testUserId);

    // Mesmo com useAuthStore.user sendo null (como ocorre durante os primeiros ms do reload)
    useAuthStore.setState({ user: null });
    expect(getEffectiveUserId()).toBe(testUserId);

    // Fallback para token Supabase no localStorage caso hnc_last_active_uid não exista
    localStorage.removeItem(HNC_LAST_ACTIVE_UID_KEY);
    localStorage.setItem(
      'sb-testproject-auth-token',
      JSON.stringify({ user: { id: 'usuario-token-supabase-456' } })
    );
    expect(getEffectiveUserId()).toBe('usuario-token-supabase-456');
  });

  it('(4) Extração de URL hash: recupera ID do simulado e índice da questão no reload', () => {
    // Simula URL hash #simulado?id=m7-preservacao&q=15
    window.location.hash = '#simulado?id=m7-preservacao&q=15';

    expect(getSimuladoIdFromHash()).toBe('m7-preservacao');
    expect(getQuestionIndexFromHash()).toBe(14); // 0-based: q=15 -> index 14

    // Teste com formato legado #simulado/m5-gestao
    window.location.hash = '#simulado/m5-gestao';
    expect(getSimuladoIdFromHash()).toBe('m5-gestao');
  });

  it('(5) Finalizar e Reiniciar simulado limpam a sessão temporária ativa com segurança', () => {
    const simId = 'm1-fundamentos';
    const store = useProgressStore.getState();

    store.iniciarOuRetomarSimulado(simId);
    store.salvarRespostaSimulado(simId, 'fund-q-1', 'C', 'certeza', true);
    expect(simuladoSessionService.obterSessaoLocal(simId)).not.toBeNull();

    // Reinicia simulado
    store.reiniciarSimulado(simId);
    const reiniciada = simuladoSessionService.obterSessaoLocal(simId);
    expect(reiniciada?.respostas).toEqual({});
    expect(reiniciada?.tentativasArquivadas).toHaveLength(1);
    expect(reiniciada?.tentativasArquivadas?.[0].respostas['fund-q-1'].resposta).toBe('C');
  });

  it('(6) Navegação sequencial pós-restauração de hash: permite avançar e retroceder sem travar o índice', () => {
    const simId = 'm3-classificacao';
    const store = useProgressStore.getState();

    // Simula restauração de questão a partir do hash #simulado?id=m3-classificacao&q=35
    window.location.hash = '#simulado?id=m3-classificacao&q=35';
    const initialIndex = getQuestionIndexFromHash();
    expect(initialIndex).toBe(34); // Item 35

    store.iniciarOuRetomarSimulado(simId);
    if (initialIndex !== undefined) {
      store.mudarQuestaoSimulado(initialIndex, simId);
    }
    expect(store.obterSessaoSimulado(simId).currentIndex).toBe(34);

    // Avança para o próximo item (36 -> índice 35)
    store.mudarQuestaoSimulado(35, simId);
    expect(store.obterSessaoSimulado(simId).currentIndex).toBe(35);

    // Retrocede para o item anterior (35 -> índice 34)
    store.mudarQuestaoSimulado(34, simId);
    expect(store.obterSessaoSimulado(simId).currentIndex).toBe(34);

    // Retrocede mais um (34 -> índice 33)
    store.mudarQuestaoSimulado(33, simId);
    expect(store.obterSessaoSimulado(simId).currentIndex).toBe(33);
  });
});

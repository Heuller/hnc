// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { useConceptStore } from '../store/useConceptStore';
import { comporSubmoduloRevisao } from '../domain/reviewSubmoduleEngine';
import { conceptRepository } from '../domain/concepts/conceptRepository';

describe('U5.2 - Fonte Única da Verdade e Prevenção de Agendamento Duplicado', () => {
  beforeEach(() => {
    // Resetar o estado da concept store antes de cada teste
    useConceptStore.getState().reset();
  });

  it('deve usar useConceptStore como fonte única para a Fila Diária', () => {
    const store = useConceptStore.getState();
    const conceitosM1 = conceptRepository.getPorModulo('m1');
    expect(conceitosM1.length).toBeGreaterThanOrEqual(2);
    const c1 = conceitosM1[0];
    const c2 = conceitosM1[1];
    const hoje = '2026-10-19'; // Segunda-feira
    const dataInicializacao = '2026-10-16'; // Sexta-feira anterior (intervalo de 1 dia útil = 2026-10-19)

    // Inicializa estados dos submódulos de forma determinística
    store.inicializarSubmodulos([c1.submoduloId, c2.submoduloId], dataInicializacao);

    // Ambos vencem na data da apresentação (ou seja, estão pendentes para hoje)
    const fila = store.getFilaRevisaoHoje(undefined, undefined, undefined, hoje);
    expect(fila.totalPendentes).toBeGreaterThanOrEqual(2);
    expect(fila.itensNaFila.some((item) => item.conceito.id === c1.id)).toBe(true);
    expect(fila.itensNaFila.some((item) => item.conceito.id === c2.id)).toBe(true);
  });

  it('impede agendamento simultâneo: itens da fila diária são excluídos do submódulo de revisão Rn', () => {
    const store = useConceptStore.getState();
    const conceitosM1 = conceptRepository.getPorModulo('m1');
    const conceitosM2 = conceptRepository.getPorModulo('m2');
    const c1 = conceitosM1[0];
    const c2 = conceitosM1[1];
    const c3 = conceitosM2[0];
    const hoje = '2026-10-19';
    const dataInicializacao = '2026-10-16';

    store.inicializarSubmodulos([c1.submoduloId, c2.submoduloId, c3.submoduloId], dataInicializacao);

    const itensAgendadosHoje = store.getItensAgendadosHoje(hoje);
    expect(itensAgendadosHoje.has(c1.id)).toBe(true);

    // Quando compomos o submódulo de revisão Rn excluindo itens agendados para a revisão do dia:
    const submodulo = comporSubmoduloRevisao({
      moduloNumero: 2,
      moduloId: 'm2',
      estadosConceitos: useConceptStore.getState().estados,
      dataAtualIso: hoje,
      itensExcluidosIds: itensAgendadosHoje,
    });

    // Nenhum item selecionado para o submódulo pode estar na fila diária de hoje
    for (const item of submodulo.itens) {
      expect(itensAgendadosHoje.has(item.conceito.id)).toBe(false);
    }
  });

  it('após acerto na revisão, o conceito avança a próxima revisão e sai da pendência de hoje', () => {
    const store = useConceptStore.getState();
    const conceitosM1 = conceptRepository.getPorModulo('m1');
    const c1 = conceitosM1[0];
    const hoje = '2026-10-19';
    const dataInicializacao = '2026-10-16';

    store.inicializarSubmodulos([c1.submoduloId], dataInicializacao);
    let fila = store.getFilaRevisaoHoje(undefined, undefined, undefined, hoje);
    expect(fila.itensNaFila.some((item) => item.conceito.id === c1.id)).toBe(true);

    // Usuário responde e acerta na revisão com certeza
    store.registrarRespostaConceito({
      conceptId: c1.id,
      acertou: true,
      confianca: 'certeza',
      formatoUsado: 'f1_ce_simples',
      respostaDada: 'C',
      tempoSegundos: 10,
      dataAtualIso: hoje,
    });

    // Próxima revisão foi avançada para um dia útil futuro
    const estadoAtualizado = useConceptStore.getState().estados[c1.id];
    expect(estadoAtualizado.dataUltimaRevisao).toBe(hoje);
    expect(estadoAtualizado.proximaRevisao > hoje).toBe(true);

    // Fila diária para hoje não contém mais o item
    fila = useConceptStore.getState().getFilaRevisaoHoje(undefined, undefined, undefined, hoje);
    expect(fila.itensNaFila.some((item) => item.conceito.id === c1.id)).toBe(false);

    // E comporSubmoduloRevisao no mesmo dia também não agenda o mesmo conceito que acabou de ser consolidado
    const submodulo = comporSubmoduloRevisao({
      moduloNumero: 1,
      moduloId: 'm1',
      estadosConceitos: useConceptStore.getState().estados,
      dataAtualIso: hoje,
    });

    expect(submodulo.itens.some((item) => item.conceito.id === c1.id)).toBe(false);
  });
});

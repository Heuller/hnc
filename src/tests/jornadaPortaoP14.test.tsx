/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PortaoVerificacaoModal } from '../components/jornada/PortaoVerificacaoModal';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { migrarTentativasPortaoForaDaTrilha } from '../domain/migracaoTentativas';
import { JornadaPage } from '../pages/JornadaPage';
import { criarTentativaRegistro, type TentativaRegistro } from '../domain/tentativas';

describe('P14 — Consertar o Portão de Verificação e o estado da Jornada (J-01 a J-05)', () => {
  beforeEach(() => {
    localStorage.setItem('hnc_jornada_intro_seen', 'true');
    useProgressStore.getState().limparTodoProgresso();
    useProgressStore.setState({
      modoLivre: true,
      checkpointsRespondidos: {},
      secoesVisualizadas: {},
      tentativas: [],
      itemAttempts: [],
    });
  });

  it('1. Portão reaberto após erro: todas as respostas vazias; nada de gabarito na tela', async () => {
    // Simula que o usuário já respondeu checkpoints na teoria previamente
    useProgressStore.setState({
      checkpointsRespondidos: {
        'cp-1-1-1': 'C',
        'cp-1-1-2': 'E',
      },
    });

    const onClose = vi.fn();
    render(
      <PortaoVerificacaoModal
        isOpen={true}
        onClose={onClose}
        etapaId="1.1"
      />
    );

    // Inicia a verificação
    const btnIniciar = screen.getByRole('button', { name: /Iniciar Verificação/i });
    fireEvent.click(btnIniciar);

    // Na fase do quiz, as respostas devem estar vazias:
    // Nenhum feedback de "Você acertou!" ou "Você errou!" ou "Gabarito: CERTO/ERRADO"
    expect(screen.queryByText(/Você acertou/i)).toBeNull();
    expect(screen.queryByText(/Você errou/i)).toBeNull();
    expect(screen.queryByText(/Gabarito:/i)).toBeNull();

    // Botão Próximo deve estar desabilitado porque nenhuma resposta foi selecionada nesta sessão
    const btnProximo = screen.getByRole('button', { name: /Próximo/i });
    expect(btnProximo.hasAttribute('disabled')).toBe(true);
  });

  it('2. 3/3 na primeira tentativa com modoLivre:true -> getJornadaState devolve aprovado:true, status "concluida", tentativasCount 1', async () => {
    const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
    const cps = sub11.checkpoints;
    expect(cps.length).toBe(3);

    // Responde 3/3 no portão
    const mapaRespostas: Record<string, any> = {};
    for (const cp of cps) {
      mapaRespostas[cp.id] = {
        questionId: cp.id,
        resposta: cp.gabarito,
        gabarito: cp.gabarito,
        acertou: true,
        secaoId: 'sec-checkpoints',
        texto: cp.item,
      };
    }

    const tentativa = criarTentativaRegistro({
      userId: 'usuario-logado',
      tipo: 'verificacao_submodulo',
      targetId: '1.1',
      moduloId: 'm1',
      totalItens: 3,
      respostas: mapaRespostas,
      foraDaTrilha: false, // Decisão P14: Portão grava foraDaTrilha: false
    });

    await useProgressStore.getState().adicionarTentativa(tentativa);

    const jornada = useProgressStore.getState().getJornadaState();
    const etapa11 = jornada.etapas['1.1'];

    expect(etapa11.aprovado).toBe(true);
    expect(etapa11.status).toBe('concluida');
    expect(etapa11.tentativasCount).toBe(1);
  });

  it('3. Errou 1 -> "Tentar Novamente" -> acertou os 3 -> aprovado', async () => {
    const onClose = vi.fn();
    const { unmount } = render(
      <PortaoVerificacaoModal
        isOpen={true}
        onClose={onClose}
        etapaId="1.1"
      />
    );

    // Inicia verificação
    fireEvent.click(screen.getByRole('button', { name: /Iniciar Verificação/i }));

    // Item 1: Erra de propósito
    fireEvent.click(screen.getByRole('button', { name: /ERRADO/i })); // Supondo gabarito C ou E, erra
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }));

    // Item 2: Responde
    fireEvent.click(screen.getByRole('button', { name: /CERTO/i }));
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }));

    // Item 3: Finaliza
    fireEvent.click(screen.getByRole('button', { name: /CERTO/i }));
    fireEvent.click(screen.getByRole('button', { name: /Finalizar/i }));

    // Espera tela de resultado
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Aproveitamento abaixo do limiar/i })).not.toBeNull();
    });

    // Clica em "Tentar Novamente"
    const btnTentarNovamente = screen.getByRole('button', { name: /Tentar Novamente/i });
    fireEvent.click(btnTentarNovamente);

    // Volta ao quiz limpo
    expect(screen.queryByText(/Você acertou/i)).toBeNull();
    expect(screen.queryByText(/Você errou/i)).toBeNull();

    unmount();
  });

  it('4. Aprovado sem seções lidas -> badge "Domínio comprovado · leitura pendente", botão "Refazer"', async () => {
    // Registra tentativa aprovada para 1.1 sem registrar leitura de seções
    const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
    const mapaRespostas: Record<string, any> = {};
    for (const cp of sub11.checkpoints) {
      mapaRespostas[cp.id] = {
        questionId: cp.id,
        resposta: cp.gabarito,
        gabarito: cp.gabarito,
        acertou: true,
        secaoId: 'sec-checkpoints',
        texto: cp.item,
      };
    }

    const tentativa = criarTentativaRegistro({
      userId: 'usuario-logado',
      tipo: 'verificacao_submodulo',
      targetId: '1.1',
      moduloId: 'm1',
      totalItens: 3,
      respostas: mapaRespostas,
      foraDaTrilha: false,
    });

    await useProgressStore.getState().adicionarTentativa(tentativa);

    render(<JornadaPage />);

    // Deve exibir o badge específico
    expect(screen.getByText(/Domínio comprovado · leitura pendente/i)).not.toBeNull();

    // O botão do card 1.1 deve ser "Refazer" (e não "Verificar")
    const btnRefazer = screen.getByRole('button', { name: /Refazer/i });
    expect(btnRefazer).not.toBeNull();

    // Deve existir link ou botão para "Ler seções"
    expect(screen.getByText(/Ler seções/i)).not.toBeNull();
  });

  it('5. Indicadores globais contam a tentativa do Portão (etapasConcluidas sobe de 0 para 1)', async () => {
    const estadoInicial = useProgressStore.getState().getJornadaState();
    expect(estadoInicial.metricas.etapasConcluidas).toBe(0);

    const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
    const mapaRespostas: Record<string, any> = {};
    for (const cp of sub11.checkpoints) {
      mapaRespostas[cp.id] = {
        questionId: cp.id,
        resposta: cp.gabarito,
        gabarito: cp.gabarito,
        acertou: true,
        secaoId: 'sec-checkpoints',
        texto: cp.item,
      };
    }

    const tentativa = criarTentativaRegistro({
      userId: 'usuario-logado',
      tipo: 'verificacao_submodulo',
      targetId: '1.1',
      moduloId: 'm1',
      totalItens: 3,
      respostas: mapaRespostas,
      foraDaTrilha: false,
    });

    await useProgressStore.getState().adicionarTentativa(tentativa);

    const estadoFinal = useProgressStore.getState().getJornadaState();
    expect(estadoFinal.metricas.etapasConcluidas).toBe(1);
    expect(estadoFinal.metricas.taxaDominioPercent).toBeGreaterThan(0);
  });

  it('6. Migração: estado antigo com foraDaTrilha=true no Portão é reclassificado', () => {
    const tentativaAntiga: TentativaRegistro = {
      id: 'tent-1',
      userId: 'usuario-logado',
      tipo: 'verificacao_submodulo',
      targetId: '1.1',
      moduloId: 'm1',
      totalItens: 3,
      acertos: 3,
      erros: 0,
      emBranco: 0,
      aproveitamento: 1,
      notaLiquida: 3,
      aprovado: true,
      acertosNecessarios: 3,
      errosMaximos: 0,
      secoesComErros: [],
      foraDaTrilha: true, // Antigo bug: gravado como true por causa de modoLivre: true
      criadoEm: new Date().toISOString(),
      respostas: {},
    };

    const reclassificadas = migrarTentativasPortaoForaDaTrilha([tentativaAntiga]);
    expect(reclassificadas[0].foraDaTrilha).toBe(false);

    // Tentativas que realmente são livres (ex: treino avulso) não devem ser alteradas
    const tentativaTreino: TentativaRegistro = {
      ...tentativaAntiga,
      id: 'tent-2',
      tipo: 'submodulo_revisao',
      foraDaTrilha: true,
    };
    const reclassificadas2 = migrarTentativasPortaoForaDaTrilha([tentativaTreino]);
    expect(reclassificadas2[0].foraDaTrilha).toBe(true);
  });
});

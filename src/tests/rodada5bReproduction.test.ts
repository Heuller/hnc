// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { getRequiredSectionsForSubmodule } from '../domain/learningEngine';
import { deriveJornadaState } from '../domain/jornadaEngine';

describe('FASE A0 — Testes de Reprodução de Falhas (Rodada 5B)', () => {
  beforeEach(() => {
    useProgressStore.setState({
      checkpointsRespondidos: {},
      secoesVisualizadas: {},
      modulosLidosIds: [],
      tentativas: [],
      itemAttempts: [],
      modoLivre: false,
    });
  });

  describe('Falha 1: Respostas na Teoria não liberam a Jornada / Etapas Filhas', () => {
    it('responder a rodada completa de 1.1 preserva respostas e registros atômicos', () => {
      const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
      expect(sub11.numero).toBe('1.1');
      expect(sub11.checkpoints.length).toBeGreaterThanOrEqual(3);

      // Usuário lê todas as seções de 1.1
      const secoes11 = getRequiredSectionsForSubmodule(sub11);
      secoes11.forEach((sec) => {
        useProgressStore.getState().registrarSecaoVisualizada(sub11.id, sec);
      });

      // Usuário responde todos os 3 micro-checkpoints com 100% acertos
      sub11.checkpoints.forEach((cp) => {
        useProgressStore.getState().salvarCheckpoint(cp.id, cp.gabarito);
      });

      const storeState = useProgressStore.getState();
      expect(Object.keys(storeState.checkpointsRespondidos).length).toBe(sub11.checkpoints.length);

      // Calcula o estado da Jornada com os dados reais do curso
      const jornada = deriveJornadaState({
        modulos: COURSE_REGISTRY,
        tentativas: storeState.tentativas,
        secoesVisualizadas: storeState.secoesVisualizadas,
        checkpointsRespondidos: storeState.checkpointsRespondidos,
        secoesReabertasAposFalha: storeState.secoesReabertasAposFalha,
        modoLivre: storeState.modoLivre,
      });
      expect(jornada).toBeDefined();

      // DEMONSTRAÇÃO DA DESCONEXÃO:
      // O estado de checkpointsRespondidos armazena apenas chaves isoladas { [cpId]: 'C' | 'E' }
      // enquanto o PortaoVerificacaoModal inicia seu estado de respostas vazio {},
      // forçando o usuário a responder tudo novamente ao abrir a verificação pela Jornada.
      expect(storeState.checkpointsRespondidos['cp-1-1-1']).toBe('C');
      expect(storeState.checkpointsRespondidos['cp-1-1-2']).toBe('E');
      expect(storeState.checkpointsRespondidos['cp-1-1-3']).toBe('C');

      // Agora existe registro atômico por item na Fonte Única (item_attempts)
      expect(storeState.itemAttempts.length).toBe(sub11.checkpoints.length);
      expect(storeState.itemAttempts.map((a) => a.item_id)).toContain('cp-1-1-1');
    });

    it('salvarCheckpoint grava tentativa após a rodada completa, inclusive abaixo de 85%', () => {
      const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
      
      // Rodada completa com somente duas respostas corretas, abaixo de 85%.
      sub11.checkpoints.forEach((cp, i) => {
        const resposta = i < 2 ? cp.gabarito : cp.gabarito === 'C' ? 'E' : 'C';
        useProgressStore.getState().salvarCheckpoint(cp.id, resposta);
      });

      const storeState = useProgressStore.getState();
      // Fase U2 (U2.3): Agora que não há pendências fantasma de mnemônicos, a tentativa é registrada
      expect(storeState.tentativas.length).toBe(1);
      expect(storeState.tentativas[0].totalItens).toBe(sub11.checkpoints.length);
      expect(storeState.tentativas[0].aprovado).toBe(false);
    });
  });

  describe('Falha 2: Transição indevida de 1.6 diretamente para 2.1 sem Simulado M1', () => {
    it('REPRODUÇÃO: allSubmodules coloca 2.1 como sucessor imediato do último submódulo de M1 (1.6)', () => {
      const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
      const sub16Index = allSubmodules.findIndex((s) => s.numero === '1.6');
      const nextSubFrom16 = allSubmodules[sub16Index + 1];

      // FALHA IDENTIFICADA: O sucessor direto do último submódulo de M1 (1.6) na navegação plana é 2.1!
      // Em TeoriaPage, o botão no rodapé de 1.6 renderizaria "Submódulo 2.1",
      // permitindo que o usuário avance para o Módulo 2 sem realizar o Simulado de 100 itens do M1.
      expect(sub16Index).toBeGreaterThanOrEqual(0);
      expect(nextSubFrom16).toBeDefined();
      expect(nextSubFrom16.numero).toBe('2.1');
    });
  });
});

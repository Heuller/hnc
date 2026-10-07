// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';
import { COURSE_REGISTRY } from '../content/registry';
import { deriveJornadaState } from '../domain/jornadaEngine';

describe('FASE A0 — Testes de Reprodução de Falhas (Rodada 5B)', () => {
  beforeEach(() => {
    useProgressStore.setState({
      checkpointsRespondidos: {},
      secoesVisualizadas: {},
      modulosLidosIds: [],
      tentativas: [],
      modoLivre: false,
    });
  });

  describe('Falha 1: Respostas na Teoria não liberam a Jornada / Etapas Filhas', () => {
    it('REPRODUÇÃO: responder todos os micro-checkpoints de 1.1 na teoria com 100% acerto NÃO conclui o submódulo na Jornada devido ao bloqueio de N mínimo (3 < 8)', () => {
      const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
      expect(sub11.numero).toBe('1.1');
      expect(sub11.checkpoints.length).toBe(3);

      // Usuário lê todas as seções de 1.1
      const secoes11 = ['sec-autores', 'sec-alertas', 'sec-quadro', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'];
      secoes11.forEach((sec) => {
        useProgressStore.getState().registrarSecaoVisualizada(sub11.id, sec);
      });

      // Usuário responde todos os 3 micro-checkpoints com 100% acertos
      sub11.checkpoints.forEach((cp) => {
        useProgressStore.getState().salvarCheckpoint(cp.id, cp.gabarito);
      });

      const storeState = useProgressStore.getState();
      expect(Object.keys(storeState.checkpointsRespondidos).length).toBe(3);

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
      expect(storeState.itemAttempts.length).toBe(3);
      expect(storeState.itemAttempts.map((a) => a.item_id)).toContain('cp-1-1-1');
    });

    it('REPRODUÇÃO: useProgressStore.salvarCheckpoint não grava tentativa se aproveitamento < 85%', () => {
      const sub11 = COURSE_REGISTRY[0].modulosFilhos[0];
      
      // Responde 2 corretos e 1 errado (66% de aproveitamento)
      useProgressStore.getState().salvarCheckpoint(sub11.checkpoints[0].id, sub11.checkpoints[0].gabarito);
      useProgressStore.getState().salvarCheckpoint(sub11.checkpoints[1].id, sub11.checkpoints[1].gabarito);
      const gabaritoInvertido = sub11.checkpoints[2].gabarito === 'C' ? 'E' : 'C';
      useProgressStore.getState().salvarCheckpoint(sub11.checkpoints[2].id, gabaritoInvertido);

      const storeState = useProgressStore.getState();
      // Com a correção da Fonte Única, a tentativa de verificação concluída é gravada mesmo com nota < 85%
      expect(storeState.tentativas.length).toBe(1);
    });
  });

  describe('Falha 2: Transição indevida de 1.4 diretamente para 2.1 sem Simulado M1', () => {
    it('REPRODUÇÃO: allSubmodules coloca 2.1 como sucessor imediato de 1.4', () => {
      const allSubmodules = COURSE_REGISTRY.flatMap((m) => m.modulosFilhos);
      const sub14Index = allSubmodules.findIndex((s) => s.numero === '1.4');
      const nextSubFrom14 = allSubmodules[sub14Index + 1];

      // FALHA IDENTIFICADA: O sucessor direto de 1.4 na navegação plana é 2.1!
      // Em TeoriaPage, o botão no rodapé de 1.4 renderiza "Submódulo 2.1",
      // permitindo que o usuário avance para o Módulo 2 sem realizar o Simulado de 100 itens do M1.
      expect(sub14Index).toBeGreaterThanOrEqual(0);
      expect(nextSubFrom14).toBeDefined();
      expect(nextSubFrom14.numero).toBe('2.1');
    });
  });
});

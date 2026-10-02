// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import {
  JORNADA_CONFIG,
  calcularAcertosNecessarios,
  getDescricaoLimiar,
  calcularIntervaloAlvo,
} from '../config/jornada.config';
import {
  criarTentativaRegistro,
  calcularMetricasTentativa,
  type RespostaTentativa,
  type TentativaRegistro,
} from '../domain/tentativas';
import {
  deriveJornadaState,
} from '../domain/jornadaEngine';
import {
  selecionarItensPortal,
  type ItemCandidatoPortal,
} from '../domain/portalRevisao';
import {
  criarItemLeitner,
  processarRespostaLeitner,
  calcularIntervaloRevisao,
} from '../domain/leitner';
import { tentativasSyncService } from '../services/tentativasSyncService';
import type { MacroModulo } from '../domain/types';

// Fixtures mock para não alterar conteúdo real (Regra D.7)
function criarMockMacroModulo(numero: number, numSubmodulos = 4, checkpointsPorSub = 8): MacroModulo {
  const macroId = `m${numero}`;
  return {
    id: macroId,
    codigo: `M${numero}`,
    numero: numero,
    titulo: `Módulo de Teste ${numero}`,
    titulo_curto: `M${numero}`,
    subtitulo: `Subtítulo do Módulo ${numero}`,
    descricao: `Descrição do Módulo ${numero}`,
    status: 'disponivel',
    simuladoDisponivel: true,
    modulosFilhos: Array.from({ length: numSubmodulos }, (_, idx) => {
      const subNum = `${numero}.${idx + 1}`;
      return {
        id: `sub-${numero}-${idx + 1}`,
        numero: subNum,
        titulo: `Submódulo de Teste ${subNum}`,
        titulo_curto: `Sub ${subNum}`,
        descricaoCurta: `Descrição de teste ${subNum}`,
        tempoEstimadoMinutos: 20,
        autoresChave: ['Autor Teste'],
        alertasCebraspe: ['Alerta Teste'],
        teoriaDensaMarkdown: 'Texto de teoria para testes',
        checkpoints: Array.from({ length: checkpointsPorSub }, (_, cIdx) => ({
          id: `cp-${numero}-${idx + 1}-${cIdx + 1}`,
          pergunta: `Questão ${cIdx + 1}`,
          item: `Assertiva de teste ${cIdx + 1} do submódulo ${subNum}`,
          gabarito: (cIdx % 2 === 0 ? 'C' : 'E') as 'C' | 'E',
          justificativa: 'Justificativa de teste',
        })),
        mnemonicos: {
          timeline: [],
          autores: [],
          pegadinhas: [],
        },
      };
    }),
  };
}

describe('Motor da Jornada Cebraspe - Parte D (jornada.test.ts)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('D.2 - Limiar de 85% em Itens Inteiros', () => {
    it('deve calcular acertos necessários para N = 6, 7, 8, 20 e 100', () => {
      // N = 6: ceil(0.85 * 6) = ceil(5.1) = 6 (erros max: 0)
      expect(calcularAcertosNecessarios(6)).toBe(6);

      // N = 7: ceil(0.85 * 7) = ceil(5.95) = 6 (erros max: 1)
      expect(calcularAcertosNecessarios(7)).toBe(6);

      // N = 8: ceil(0.85 * 8) = ceil(6.8) = 7 (erros max: 1)
      expect(calcularAcertosNecessarios(8)).toBe(7);

      // N = 20: ceil(0.85 * 20) = ceil(17.0) = 17 (erros max: 3)
      expect(calcularAcertosNecessarios(20)).toBe(17);

      // N = 100: ceil(0.85 * 100) = ceil(85.0) = 85 (erros max: 15)
      expect(calcularAcertosNecessarios(100)).toBe(85);
    });

    it('deve formatar corretamente a descrição do limiar em itens inteiros', () => {
      expect(getDescricaoLimiar(20)).toBe('17 acertos em 20 itens (no máximo 3 erros)');
      expect(getDescricaoLimiar(100)).toBe('85 acertos em 100 itens (no máximo 15 erros)');
      expect(getDescricaoLimiar(8)).toBe('7 acertos em 8 itens (no máximo 1 erros)');
    });

    it('deve calcular métricas de tentativa com fator Cebraspe (C - E) à parte', () => {
      const respostas: Record<string, RespostaTentativa> = {
        q1: { questionId: 'q1', resposta: 'C', gabarito: 'C', acertou: true },
        q2: { questionId: 'q2', resposta: 'C', gabarito: 'C', acertou: true },
        q3: { questionId: 'q3', resposta: 'C', gabarito: 'C', acertou: true },
        q4: { questionId: 'q4', resposta: 'C', gabarito: 'C', acertou: true },
        q5: { questionId: 'q5', resposta: 'C', gabarito: 'C', acertou: true },
        q6: { questionId: 'q6', resposta: 'C', gabarito: 'C', acertou: true },
        q7: { questionId: 'q7', resposta: 'C', gabarito: 'C', acertou: true },
        q8: { questionId: 'q8', resposta: 'E', gabarito: 'C', acertou: false, secaoId: 'sec-teoria' },
      };

      const m = calcularMetricasTentativa(respostas, 8);
      expect(m.totalItens).toBe(8);
      expect(m.acertos).toBe(7);
      expect(m.erros).toBe(1);
      expect(m.aproveitamento).toBe(7 / 8); // 87.5%
      expect(m.notaLiquida).toBe(6); // 7 - 1 = 6 pts (Cebraspe C - E)
      expect(m.aprovado).toBe(true); // 7 >= 7
      expect(m.secoesComErros).toEqual(['sec-teoria']);
    });
  });

  describe('D.4 - Repetição Espaçada Leitner e Regra de Não-Avanço', () => {
    it('NÃO deve avançar a caixa se o item acertado não estiver vencido (evita falsa consolidação)', () => {
      // Item criado em 2026-10-01, próxima revisão programada para 2026-10-02 (caixa 1)
      let item = criarItemLeitner('cp-1', '1.1', '2026-10-01');

      // Usuário acerta no próprio dia 2026-10-01 (NÃO está vencido, pois 2026-10-01 < 2026-10-02)
      item = processarRespostaLeitner(item, true, '2026-10-01');
      expect(item.caixa).toBe(1); // PERMANECE NA CAIXA 1
      expect(item.proximaRevisao).toBe('2026-10-02'); // DATA PRESERVADA
      expect(item.historicoAcertos).toBe(1);

      // No dia 2026-10-02 (data de vencimento atingida): acerto avança para caixa 2
      item = processarRespostaLeitner(item, true, '2026-10-02');
      expect(item.caixa).toBe(2); // AVANÇOU PARA CAIXA 2
      expect(item.proximaRevisao).toBe('2026-10-05'); // +3 dias

      // Se responder novamente em 2026-10-03 (não vencido): não avança
      item = processarRespostaLeitner(item, true, '2026-10-03');
      expect(item.caixa).toBe(2); // PERMANECE NA CAIXA 2
      expect(item.proximaRevisao).toBe('2026-10-05');
    });

    it('deve rebaixar imediatamente para a Caixa 1 em caso de erro', () => {
      let item = criarItemLeitner('cp-1', '1.1', '2026-10-01');
      item = { ...item, caixa: 4, proximaRevisao: '2026-10-25' };

      const aposErro = processarRespostaLeitner(item, false, '2026-10-10');
      expect(aposErro.caixa).toBe(1);
      expect(aposErro.proximaRevisao).toBe('2026-10-11'); // +1 dia
      expect(aposErro.historicoErros).toBe(1);
    });

    it('deve calcular intervalos adaptativos com base nos dias restantes até a prova (heurística Cepeda et al., 2008)', () => {
      // 10 dias restantes: faixa <= 14 dias (fração 0.30) -> lacuna base 3 dias
      const lacuna10 = calcularIntervaloAlvo(10);
      expect(lacuna10).toBe(3);

      // 60 dias restantes: faixa <= 90 dias (fração 0.15) -> lacuna base 9 dias
      const lacuna60 = calcularIntervaloAlvo(60);
      expect(lacuna60).toBe(9);

      // 200 dias restantes: faixa <= 365 dias (fração 0.075) -> lacuna base 15 dias
      const lacuna200 = calcularIntervaloAlvo(200);
      expect(lacuna200).toBe(15);

      // Teste com data de prova em calcularIntervaloRevisao
      const intCaixa1 = calcularIntervaloRevisao(1, '2026-10-01', '2026-10-11'); // 10 dias restantes -> base 3
      expect(intCaixa1).toBe(3);

      // Caixa 2 dobra (x2): 3 * 2 = 6
      const intCaixa2 = calcularIntervaloRevisao(2, '2026-10-01', '2026-10-11');
      expect(intCaixa2).toBe(6);

      // Respeita o teto de 30 dias
      const intTeto = calcularIntervaloRevisao(5, '2026-10-01', '2026-12-01');
      expect(intTeto).toBeLessThanOrEqual(JORNADA_CONFIG.limiteMaximoIntervaloDias);
    });
  });

  describe('D.1 e D.3 - Máquina de Estados e Revisão Dirigida', () => {
    it('deve iniciar com M1.1 disponível e M1.2 bloqueada', () => {
      const modulos = [criarMockMacroModulo(1)];
      const estado = deriveJornadaState({
        modulos,
        tentativas: [],
        secoesVisualizadas: {},
      });

      expect(estado.etapas['1.1'].status).toBe('disponivel');
      expect(estado.etapas['1.1'].isDesbloqueada).toBe(true);
      expect(estado.etapas['1.2'].status).toBe('bloqueada');
      expect(estado.etapas['1.2'].isDesbloqueada).toBe(false);
      expect(estado.proximoPasso.etapaId).toBe('1.1');
    });

    it('deve transicionar para "em_revisao_dirigida" após falha (< 85%) e exigir rever as seções dos erros', () => {
      const modulos = [criarMockMacroModulo(1)];
      const tentativaFalha = criarTentativaRegistro({
        userId: 'user-1',
        tipo: 'verificacao_submodulo',
        targetId: '1.1',
        moduloId: 'm1',
        totalItens: 8,
        respostas: {
          q1: { questionId: 'q1', resposta: 'C', gabarito: 'C', acertou: true },
          q2: { questionId: 'q2', resposta: 'E', gabarito: 'C', acertou: false, secaoId: 'sec-autores' },
          q3: { questionId: 'q3', resposta: 'E', gabarito: 'C', acertou: false, secaoId: 'sec-teoria' },
        },
      });

      const estado = deriveJornadaState({
        modulos,
        tentativas: [tentativaFalha],
        secoesVisualizadas: { '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'] },
        secoesReabertasAposFalha: {},
      });

      const etapa11 = estado.etapas['1.1'];
      expect(etapa11.status).toBe('em_revisao_dirigida');
      expect(etapa11.revisaoDirigida?.secoesComErros).toEqual(['sec-autores', 'sec-teoria']);
      expect(etapa11.revisaoDirigida?.podeRefazer).toBe(false);
      expect(estado.etapas['1.2'].status).toBe('bloqueada'); // M1.2 continua bloqueada!

      // Se o usuário revisita as duas seções com erros:
      const estadoRevisitado = deriveJornadaState({
        modulos,
        tentativas: [tentativaFalha],
        secoesVisualizadas: { '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'] },
        secoesReabertasAposFalha: { '1.1': ['sec-autores', 'sec-teoria'] },
      });
      expect(estadoRevisitado.etapas['1.1'].revisaoDirigida?.podeRefazer).toBe(true);
    });

    it('deve sugerir reler a etapa após 3 reprovações seguidas com mensagem neutra', () => {
      const modulos = [criarMockMacroModulo(1)];
      const criarTentativaComErros = () =>
        criarTentativaRegistro({
          userId: 'user-1',
          tipo: 'verificacao_submodulo',
          targetId: '1.1',
          moduloId: 'm1',
          totalItens: 8,
          respostas: {
            q1: { questionId: 'q1', resposta: 'E', gabarito: 'C', acertou: false, secaoId: 'sec-teoria' },
          },
        });

      const tentativas = [
        criarTentativaComErros(),
        criarTentativaComErros(),
        criarTentativaComErros(),
      ];

      const estado = deriveJornadaState({
        modulos,
        tentativas,
        secoesVisualizadas: { '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'] },
      });

      const etapa11 = estado.etapas['1.1'];
      expect(etapa11.revisaoDirigida?.consecutivasReprovacoes).toBe(3);
      expect(etapa11.revisaoDirigida?.sugerirReleitura).toBe(true);
      expect(etapa11.revisaoDirigida?.mensagemSugerirReleitura).toContain(
        'Você realizou 3 tentativas sem atingir o limiar de 85%. Sugerimos reler atentamente o texto teórico'
      );
    });

    it('deve impedir a conclusão da etapa se o submódulo possuir menos de 8 itens aprovados (Regra D.2)', () => {
      // Submódulo com apenas 3 checkpoints
      const modulos = [criarMockMacroModulo(1, 4, 3)];
      const sub = modulos[0].modulosFilhos[0];
      expect(sub.checkpoints.length).toBe(3);

      // Mesmo com 100% de acertos nos 3 itens:
      const tentativa100 = criarTentativaRegistro({
        userId: 'user-1',
        tipo: 'verificacao_submodulo',
        targetId: '1.1',
        moduloId: 'm1',
        totalItens: 3,
        respostas: {
          q1: { questionId: 'q1', resposta: 'C', gabarito: 'C', acertou: true },
          q2: { questionId: 'q2', resposta: 'C', gabarito: 'C', acertou: true },
          q3: { questionId: 'q3', resposta: 'C', gabarito: 'C', acertou: true },
        },
      });

      const estado = deriveJornadaState({
        modulos,
        tentativas: [tentativa100],
        secoesVisualizadas: { '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'] },
      });

      const etapa11 = estado.etapas['1.1'];
      expect(etapa11.bloqueioPorFaltaDeItens?.bloqueado).toBe(true);
      expect(etapa11.bloqueioPorFaltaDeItens?.itensFaltantes).toBe(5); // 8 - 3 = 5
      expect(etapa11.bloqueioPorFaltaDeItens?.mensagem).toContain('Faltam 5 itens aprovados');
      expect(etapa11.status).not.toBe('concluida'); // NÃO pode ser concluída!
    });
  });

  describe('D.2 - Portal de Revisão (Composição e Prioridade)', () => {
    it('deve gerar portal P(2) revisando 100% de M1 com exatamente 10 C e 10 E', () => {
      const bancoItens: ItemCandidatoPortal[] = [];
      // 15 itens C de M1 e 15 itens E de M1
      for (let i = 1; i <= 15; i++) {
        bancoItens.push({
          id: `item-m1-c-${i}`,
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: `Item Certo ${i}`,
          gabarito: 'C',
          justificativa: 'Justificativa',
        });
        bancoItens.push({
          id: `item-m1-e-${i}`,
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: `Item Errado ${i}`,
          gabarito: 'E',
          justificativa: 'Justificativa',
        });
      }

      const res = selecionarItensPortal({
        moduloAlvoNumero: 2, // Ao terminar M2, revisa M1
        bancoItens,
        dataAtualIso: '2026-10-01',
      });

      expect(res.totalItens).toBe(20);
      expect(res.totalC).toBe(10);
      expect(res.totalE).toBe(10);
      expect(res.moduloRevisadoPrincipal).toBe(1);
      expect(res.itensModuloAnteriorCount).toBe(20);
    });

    it('deve gerar portal P(3) distribuindo 70% de M2 e 30% de M1', () => {
      const bancoItens: ItemCandidatoPortal[] = [];
      // Adiciona itens de M1 e M2
      for (let mod of [1, 2]) {
        for (let i = 1; i <= 20; i++) {
          bancoItens.push({
            id: `item-m${mod}-c-${i}`,
            moduloNumero: mod,
            moduloId: `m${mod}`,
            submoduloId: `${mod}.1`,
            assertiva: `Item M${mod} C ${i}`,
            gabarito: 'C',
            justificativa: 'Justificativa',
          });
          bancoItens.push({
            id: `item-m${mod}-e-${i}`,
            moduloNumero: mod,
            moduloId: `m${mod}`,
            submoduloId: `${mod}.1`,
            assertiva: `Item M${mod} E ${i}`,
            gabarito: 'E',
            justificativa: 'Justificativa',
          });
        }
      }

      const res = selecionarItensPortal({
        moduloAlvoNumero: 3, // P(3) revisa M2 (70%) e M1 (30%)
        bancoItens,
        dataAtualIso: '2026-10-01',
      });

      expect(res.totalItens).toBe(20);
      expect(res.totalC).toBe(10);
      expect(res.totalE).toBe(10);
      expect(res.itensModuloAnteriorCount).toBe(14); // 70% de 20 = 14
      expect(res.itensModulosPrecedentesCount).toBe(6); // 30% de 20 = 6
    });

    it('deve priorizar itens vencidos no Leitner e itens do Caderno de Erros', () => {
      const bancoItens: ItemCandidatoPortal[] = [
        {
          id: 'item-normal',
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: 'Item Normal',
          gabarito: 'C',
          justificativa: 'J',
        },
        {
          id: 'item-vencido',
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: 'Item Vencido',
          gabarito: 'C',
          justificativa: 'J',
        },
        {
          id: 'item-errado',
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: 'Item Errado',
          gabarito: 'C',
          justificativa: 'J',
        },
      ];

      // Adiciona itens extras para completar
      for (let i = 1; i <= 15; i++) {
        bancoItens.push({
          id: `extra-c-${i}`,
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: `Extra C ${i}`,
          gabarito: 'C',
          justificativa: 'J',
        });
        bancoItens.push({
          id: `extra-e-${i}`,
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: `Extra E ${i}`,
          gabarito: 'E',
          justificativa: 'J',
        });
      }

      const leitnerDeck = {
        'item-vencido': {
          ...criarItemLeitner('item-vencido', '1.1', '2026-09-01'),
          proximaRevisao: '2026-09-02', // Vencido em relação a 2026-10-01
        },
      };

      const cadernoErros = new Set(['item-errado']);

      const res = selecionarItensPortal({
        moduloAlvoNumero: 2,
        bancoItens,
        leitnerDeck,
        cadernoErrosIds: cadernoErros,
        dataAtualIso: '2026-10-01',
      });

      const selecionadosIds = res.itens.map((i) => i.id);
      expect(selecionadosIds).toContain('item-vencido');
      expect(selecionadosIds).toContain('item-errado');
    });

    it('não deve repetir itens da tentativa anterior se houver alternativas suficientes', () => {
      const bancoItens: ItemCandidatoPortal[] = [];
      for (let i = 1; i <= 25; i++) {
        bancoItens.push({
          id: `cand-c-${i}`,
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: `C ${i}`,
          gabarito: 'C',
          justificativa: 'J',
        });
        bancoItens.push({
          id: `cand-e-${i}`,
          moduloNumero: 1,
          moduloId: 'm1',
          submoduloId: '1.1',
          assertiva: `E ${i}`,
          gabarito: 'E',
          justificativa: 'J',
        });
      }

      // Tentativa anterior usou cand-c-1 até cand-c-10
      const itensAnteriores = ['cand-c-1', 'cand-c-2', 'cand-c-3', 'cand-c-4', 'cand-c-5'];

      const res = selecionarItensPortal({
        moduloAlvoNumero: 2,
        bancoItens,
        dataAtualIso: '2026-10-01',
        tentativaAnteriorItemIds: itensAnteriores,
      });

      const selecionadosIds = new Set(res.itens.map((i) => i.id));
      for (const ant of itensAnteriores) {
        expect(selecionadosIds.has(ant)).toBe(false);
      }
    });
  });

  describe('D.5 - Modo Livre (Isolamento de Indicadores)', () => {
    it('deve liberar todas as etapas na interface mas desconsiderar tentativas fora da trilha dos indicadores oficiais', () => {
      const modulos = [criarMockMacroModulo(1)];

      // Sem modo livre: M1.2 está bloqueada
      const estadoNormal = deriveJornadaState({
        modulos,
        tentativas: [],
        secoesVisualizadas: {},
        modoLivre: false,
      });
      expect(estadoNormal.etapas['1.2'].isDesbloqueada).toBe(false);

      // Com modo livre: M1.2 fica desbloqueada para navegação
      const estadoLivre = deriveJornadaState({
        modulos,
        tentativas: [],
        secoesVisualizadas: {},
        modoLivre: true,
      });
      expect(estadoLivre.etapas['1.2'].isDesbloqueada).toBe(true);

      // Se uma tentativa for respondida no modo livre (foraDaTrilha = true):
      const tentativaFora = criarTentativaRegistro({
        userId: 'user-1',
        tipo: 'verificacao_submodulo',
        targetId: '1.1',
        moduloId: 'm1',
        totalItens: 8,
        foraDaTrilha: true,
        respostas: {
          q1: { questionId: 'q1', resposta: 'C', gabarito: 'C', acertou: true },
          q2: { questionId: 'q2', resposta: 'C', gabarito: 'C', acertou: true },
          q3: { questionId: 'q3', resposta: 'C', gabarito: 'C', acertou: true },
          q4: { questionId: 'q4', resposta: 'C', gabarito: 'C', acertou: true },
          q5: { questionId: 'q5', resposta: 'C', gabarito: 'C', acertou: true },
          q6: { questionId: 'q6', resposta: 'C', gabarito: 'C', acertou: true },
          q7: { questionId: 'q7', resposta: 'C', gabarito: 'C', acertou: true },
          q8: { questionId: 'q8', resposta: 'C', gabarito: 'C', acertou: true },
        },
      });

      // No modo normal posterior, M1.2 permanece bloqueada porque a tentativa foi fora da trilha!
      const estadoAposLivre = deriveJornadaState({
        modulos,
        tentativas: [tentativaFora],
        secoesVisualizadas: { '1.1': ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'] },
        modoLivre: false,
      });

      expect(estadoAposLivre.etapas['1.1'].status).not.toBe('concluida');
      expect(estadoAposLivre.etapas['1.2'].isDesbloqueada).toBe(false);
      expect(estadoAposLivre.metricas.etapasConcluidas).toBe(0);
    });
  });

  describe('D.6 - Persistência, Sincronização e Migração sem Perda', () => {
    it('deve migrar com sucesso o localStorage v2 existente para tentativas v3 imutáveis', () => {
      // Simula progresso v2 prévio do usuário
      const legacyV2 = {
        state: {
          checkpointsRespondidos: {
            'cp-1-1-1': 'C',
            'cp-1-1-2': 'E',
          },
          modulosLidosIds: ['sub-1-1'],
          historicoSimulados: [
            {
              id: 'sim-1',
              dataHora: '2026-09-15T10:00:00Z',
              certos: 88,
              errados: 12,
              emBranco: 0,
              notaLiquida: 76,
              respostas: {},
            },
          ],
        },
      };

      localStorage.setItem('heuller_camara_v2_progress', JSON.stringify(legacyV2));

      const migracao = tentativasSyncService.migrarProgressoExistenteV2('user-teste');
      expect(migracao.migrado).toBe(true);
      expect(migracao.tentativasCriadas).toBeGreaterThan(0);

      const tentativas = tentativasSyncService.carregarTentativasLocais();
      expect(tentativas.length).toBeGreaterThan(0);

      // O arquivo legado continua intacto no localStorage
      expect(localStorage.getItem('heuller_camara_v2_progress')).toBeTruthy();
    });

    it('deve respeitar estritamente o isolamento de dados entre usuários (Regra 6)', async () => {
      const tentativaUsuarioA = criarTentativaRegistro({
        userId: 'user-A',
        tipo: 'verificacao_submodulo',
        targetId: '1.1',
        moduloId: 'm1',
        totalItens: 8,
        respostas: {},
      });

      const tentativaUsuarioB = criarTentativaRegistro({
        userId: 'user-B',
        tipo: 'verificacao_submodulo',
        targetId: '1.1',
        moduloId: 'm1',
        totalItens: 8,
        respostas: {},
      });

      tentativasSyncService.salvarTentativasLocais([tentativaUsuarioA, tentativaUsuarioB]);

      const todas = tentativasSyncService.carregarTentativasLocais();
      const apenasA = todas.filter((t) => t.userId === 'user-A');
      const apenasB = todas.filter((t) => t.userId === 'user-B');

      expect(apenasA).toHaveLength(1);
      expect(apenasA[0].id).toBe(tentativaUsuarioA.id);
      expect(apenasB).toHaveLength(1);
      expect(apenasB[0].id).toBe(tentativaUsuarioB.id);
    });
  });

  describe('D.7 - E2E do Caminho Completo M1 -> M2 -> Portal -> M3', () => {
    it('deve validar o ciclo sequencial completo: M1 -> Desafio M1 -> M2 (sem portal) -> Desafio M2 -> Portal P(2) -> M3', () => {
      const m1 = criarMockMacroModulo(1, 2, 8); // 2 submódulos para teste ágil
      const m2 = criarMockMacroModulo(2, 2, 8);
      const m3 = criarMockMacroModulo(3, 2, 8);
      const modulos = [m1, m2, m3];

      const todasSecoes = ['sec-autores', 'sec-alertas', 'sec-teoria', 'sec-checkpoints', 'sec-mnemonicos'];
      const secoesLidas: Record<string, string[]> = {};
      const tentativas: TentativaRegistro[] = [];

      const criarTentativaSucesso = (targetId: string, moduloId: string, tipo: any, total: number) => {
        const respostas: Record<string, RespostaTentativa> = {};
        for (let i = 1; i <= total; i++) {
          respostas[`q${i}`] = { questionId: `q${i}`, resposta: 'C', gabarito: 'C', acertou: true };
        }
        return criarTentativaRegistro({
          userId: 'user-teste',
          tipo,
          targetId,
          moduloId,
          totalItens: total,
          respostas,
        });
      };

      // 1. Início: M1.1 disponível, M1.2 e M2 bloqueados
      let st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['1.1'].status).toBe('disponivel');
      expect(st.etapas['1.2'].status).toBe('bloqueada');
      expect(st.etapas['desafio-m1'].status).toBe('bloqueada');
      expect(st.etapas['2.1'].status).toBe('bloqueada');

      // 2. Conclui M1.1
      secoesLidas['1.1'] = todasSecoes;
      tentativas.push(criarTentativaSucesso('1.1', 'm1', 'verificacao_submodulo', 8));
      st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['1.1'].status).toBe('concluida');
      expect(st.etapas['1.2'].status).toBe('disponivel');

      // 3. Conclui M1.2
      secoesLidas['1.2'] = todasSecoes;
      tentativas.push(criarTentativaSucesso('1.2', 'm1', 'verificacao_submodulo', 8));
      st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['1.2'].status).toBe('concluida');
      expect(st.etapas['desafio-m1'].status).toBe('disponivel'); // Desafio M1 liberado!

      // 4. Conclui Desafio M1 (100 itens)
      tentativas.push(criarTentativaSucesso('desafio-m1', 'm1', 'desafio_modulo', 100));
      st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['desafio-m1'].status).toBe('concluida');

      // REGRA D.1: DE M1 PARA M2 NÃO HÁ PORTAL! M2.1 desbloqueia imediatamente!
      expect(st.etapas['portal-m1']).toBeUndefined(); // Não existe portal para k = 1
      expect(st.etapas['2.1'].status).toBe('disponivel'); // M2.1 aberto!

      // 5. Conclui M2.1 e M2.2
      secoesLidas['2.1'] = todasSecoes;
      tentativas.push(criarTentativaSucesso('2.1', 'm2', 'verificacao_submodulo', 8));
      secoesLidas['2.2'] = todasSecoes;
      tentativas.push(criarTentativaSucesso('2.2', 'm2', 'verificacao_submodulo', 8));
      st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['desafio-m2'].status).toBe('disponivel');

      // 6. Conclui Desafio M2
      tentativas.push(criarTentativaSucesso('desafio-m2', 'm2', 'desafio_modulo', 100));
      st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['desafio-m2'].status).toBe('concluida');

      // REGRA D.1: Ao concluir M2 (k = 2 >= 2), surge o Portal de Revisão P(2)!
      // M3.1 ainda deve estar bloqueado até o Portal P(2) ser vencido!
      expect(st.etapas['portal-m2'].status).toBe('disponivel');
      expect(st.etapas['3.1'].status).toBe('bloqueada');

      // 7. Conclui o Portal de Revisão P(2) (20 itens, 100% de acertos >= 85%)
      tentativas.push(criarTentativaSucesso('portal-m2', 'm2', 'portal_revisao', 20));
      st = deriveJornadaState({ modulos, tentativas, secoesVisualizadas: secoesLidas });
      expect(st.etapas['portal-m2'].status).toBe('concluida');

      // AGORA SIM: M3.1 fica disponível!
      expect(st.etapas['3.1'].status).toBe('disponivel');
      expect(st.proximoPasso.etapaId).toBe('3.1');
    });
  });
});

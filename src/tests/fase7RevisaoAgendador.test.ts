import { describe, it, expect } from 'vitest';
import { PARES_CONCEITUAIS_CONFUNDIVEIS } from '../config/reviewConfig';
import {
  isDiaUtil,
  somarDiasUteis,
  criarEstadoInicialConceito,
  processarRevisaoConceito,
  selecionarFilaRevisaoDiaria,
} from '../domain/scheduler/unifiedScheduler';
import {
  comporSubmoduloRevisao,
  EVIDENCIA_CIENTIFICA_FORMATOS,
} from '../domain/reviewSubmoduleEngine';
import { calcularProjecaoTemporal } from '../domain/projectionsEngine';
import type { Concept, ConceptState } from '../domain/concepts/types';

describe('FASE 7 — Revisões Espaçadas Adaptadas aos Conteúdos Novos', () => {
  describe('T7.1 — Regras de Agendamento Espaçado e Priorização por Risco', () => {
    it('deve garantir que nenhuma revisão caia em finais de semana ao longo de 68 dias úteis', () => {
      let dataCursor = '2026-10-14';
      const totalDiasSimulados = 68;

      for (let i = 1; i <= totalDiasSimulados; i++) {
        const proximaData = somarDiasUteis(dataCursor, 1);
        expect(isDiaUtil(proximaData)).toBe(true);

        const dataObj = new Date(`${proximaData}T12:00:00Z`);
        const diaSemana = dataObj.getUTCDay();
        expect(diaSemana).toBeGreaterThanOrEqual(1);
        expect(diaSemana).toBeLessThanOrEqual(5);

        dataCursor = proximaData;
      }
    });

    it('deve aplicar revisão extra de ativação (2 dias úteis) para conteúdos novos de alta densidade técnica', () => {
      const conceptId = 'c_6.6_sql_select';
      const estadoInicial = criarEstadoInicialConceito(conceptId, 'user-test', '2026-10-14');

      // 1ª revisão com acerto com certeza
      const resultado = processarRevisaoConceito(
        estadoInicial,
        true,
        'certeza',
        'f1_ce_simples',
        'C',
        15,
        '2026-10-14',
        'sub-6-6'
      );

      // Intervalo deve ser exatamente 2 dias úteis (ativação rápida)
      expect(resultado.diasAteProximaRevisao).toBe(2);
      expect(resultado.mensagemPedagogica).toContain('ativação');
      expect(resultado.mensagemPedagogica).toContain('alta densidade');

      // Proxima revisão calculada a partir de 2026-10-14 (quarta-feira) + 2 dias úteis = 2026-10-16 (sexta-feira)
      expect(resultado.novoEstado.proximaRevisao).toBe('2026-10-16');
    });

    it('deve aplicar aceleração Pashler (dobrar intervalo) quando acerto for sustentado com certeza', () => {
      const conceptId = 'c_1.1_epist';
      const estadoBase: ConceptState = {
        conceptId,
        userId: 'user-test',
        caixaLeitner: 2,
        proximaRevisao: '2026-10-14',
        totalAparicoes: 2,
        totalAcertos: 2,
        totalErros: 0,
        totalChutes: 0,
        estadoDominio: 'revisando',
        historico: [
          {
            id: 'log-1',
            timestamp: '2026-10-11T12:00:00Z',
            dataIso: '2026-10-11',
            formatoUsado: 'f1_ce_simples',
            respostaDada: 'C',
            acertou: true,
            confianca: 'certeza',
            tempoRespostaSegundos: 12,
            caixaAnterior: 1,
            caixaNova: 2,
          },
        ],
      };

      // 2ª revisão consecutiva com acerto pleno (certeza)
      const resultado = processarRevisaoConceito(
        estadoBase,
        true,
        'certeza',
        'f2_com_justificativa',
        'C',
        18,
        '2026-10-14',
        'sub-1-1'
      );

      // Caixa 3 padrão tem 7 dias úteis. Com a aceleração (dobro), vai para 14 dias úteis
      expect(resultado.diasAteProximaRevisao).toBe(14);
      expect(resultado.mensagemPedagogica).toContain('Aceleração Pashler');
    });

    it('deve rebaixar para Caixa 1 e agendar para o próximo dia útil em caso de erro ou chute', () => {
      const conceptId = 'c_2.1_aacr2';
      const estadoBase: ConceptState = {
        conceptId,
        userId: 'user-test',
        caixaLeitner: 4,
        proximaRevisao: '2026-10-14',
        totalAparicoes: 5,
        totalAcertos: 4,
        totalErros: 1,
        totalChutes: 0,
        estadoDominio: 'dominado',
        historico: [],
      };

      const resultadoErro = processarRevisaoConceito(
        estadoBase,
        false,
        'certeza',
        'f1_ce_simples',
        'E',
        25,
        '2026-10-14',
        'sub-2-1'
      );

      expect(resultadoErro.novoEstado.caixaLeitner).toBe(1);
      expect(resultadoErro.diasAteProximaRevisao).toBe(1);
      expect(resultadoErro.novoEstado.proximaRevisao).toBe('2026-10-15');
      expect(resultadoErro.mensagemPedagogica).toContain('Cebraspe anula 1 acerto por erro');
    });

    it('deve atenuar prioridade de M7 (P0.5) pela metade e bonificar módulos de alto risco editalício', () => {
      const conceitoM7: Concept = {
        id: 'c_m7_agentes_bio',
        submoduloId: '7.2',
        moduloId: 'm7',
        topico: 'Agentes Biológicos e CIP',
        enunciadoCanonic: 'A higienização química periódica...',
        gabaritoCanonic: 'E',
        justificativaCanonic: 'Intervenções curativas não devem...',
        nivelDificuldade: 'medio',
        formatosDisponiveis: ['f1_ce_simples', 'f2_com_justificativa'],
      };

      const conceitoM6: Concept = {
        id: 'c_m6_sql_ddl',
        submoduloId: '6.6',
        moduloId: 'm6',
        topico: 'Consultas SQL e Metadados',
        enunciadoCanonic: 'O comando CREATE TABLE em bancos...',
        gabaritoCanonic: 'C',
        justificativaCanonic: 'DDL define a estrutura...',
        nivelDificuldade: 'medio',
        formatosDisponiveis: ['f1_ce_simples', 'f6_caso_pratico'],
      };

      const conceitos = { [conceitoM7.id]: conceitoM7, [conceitoM6.id]: conceitoM6 };
      const estados = {
        [conceitoM7.id]: criarEstadoInicialConceito(conceitoM7.id, 'user', '2026-10-14'),
        [conceitoM6.id]: criarEstadoInicialConceito(conceitoM6.id, 'user', '2026-10-14'),
      };

      // Ambos na Caixa 1, vencidos em 2026-10-14
      estados[conceitoM7.id].proximaRevisao = '2026-10-14';
      estados[conceitoM6.id].proximaRevisao = '2026-10-14';

      const fila = selecionarFilaRevisaoDiaria({
        estados,
        conceitos,
        dataHojeIso: '2026-10-14',
      });

      const itemM6 = fila.itensNaFila.find((i) => i.conceito.id === conceitoM6.id);
      const itemM7 = fila.itensNaFila.find((i) => i.conceito.id === conceitoM7.id);

      expect(itemM6).toBeDefined();
      expect(itemM7).toBeDefined();
      // M6 recebe peso 1.5 e bônus de alta densidade; M7 recebe peso 0.5 (P0.5)
      expect(itemM6!.prioridadeScore).toBeGreaterThan(itemM7!.prioridadeScore * 2);
    });

    it('deve realizar intercalação (Kornell & Bjork) misturando ao menos 3 submódulos distintos', () => {
      const conceitosMock: Record<string, Concept> = {};
      const estadosMock: Record<string, ConceptState> = {};

      const submodulos = ['1.1', '2.1', '6.6', '8.5', '10.5'];
      submodulos.forEach((sub) => {
        for (let i = 1; i <= 5; i++) {
          const id = `c_${sub}_item_${i}`;
          conceitosMock[id] = {
            id,
            submoduloId: sub,
            moduloId: `m${sub.split('.')[0]}`,
            topico: `Tópico ${sub} - ${i}`,
            enunciadoCanonic: `Assertiva do submódulo ${sub}`,
            gabaritoCanonic: i % 2 === 0 ? 'C' : 'E',
            justificativaCanonic: 'Justificativa canônica Cebraspe',
            nivelDificuldade: 'medio',
            formatosDisponiveis: ['f1_ce_simples', 'f2_com_justificativa'],
          };
          estadosMock[id] = {
            conceptId: id,
            userId: 'user',
            caixaLeitner: 1,
            proximaRevisao: '2026-10-14',
            totalAparicoes: 1,
            totalAcertos: 1,
            totalErros: 0,
            totalChutes: 0,
            estadoDominio: 'revisando',
            historico: [],
          };
        }
      });

      const fila = selecionarFilaRevisaoDiaria({
        estados: estadosMock,
        conceitos: conceitosMock,
        dataHojeIso: '2026-10-14',
        limiteDiario: 15,
      });

      expect(fila.submodulosNaSessao.length).toBeGreaterThanOrEqual(3);
    });

    it('deve emitir alerta explícito de sobrecarga cognitiva quando pendências ultrapassarem 2 dias úteis', () => {
      const conceitosMock: Record<string, Concept> = {};
      const estadosMock: Record<string, ConceptState> = {};

      // Criar 70 itens pendentes (mais que 2 * 30 = 60 itens)
      for (let i = 1; i <= 70; i++) {
        const id = `c_overload_${i}`;
        conceitosMock[id] = {
          id,
          submoduloId: '1.1',
          moduloId: 'm1',
          topico: `Tópico ${i}`,
          enunciadoCanonic: `Assertiva ${i}`,
          gabaritoCanonic: 'C',
          justificativaCanonic: 'Justificativa',
          nivelDificuldade: 'facil',
          formatosDisponiveis: ['f1_ce_simples'],
        };
        estadosMock[id] = {
          conceptId: id,
          userId: 'user',
          caixaLeitner: 1,
          proximaRevisao: '2026-10-14',
          totalAparicoes: 0,
          totalAcertos: 0,
          totalErros: 0,
          totalChutes: 0,
          estadoDominio: 'novo',
          historico: [],
        };
      }

      const fila = selecionarFilaRevisaoDiaria({
        estados: estadosMock,
        conceitos: conceitosMock,
        dataHojeIso: '2026-10-14',
        limiteDiario: 30,
      });

      expect(fila.totalPendentes).toBe(70);
      expect(fila.diasUteisAcumulados).toBeGreaterThan(2);
      expect(fila.alertaSobrecarga).toBe(true);
      expect(fila.mensagemSobrecarga).toContain('Aviso de Sobrecarga Cognitiva');
      expect(fila.itensNaFila.length).toBe(30); // Mantém o teto estrito de 30
      expect(fila.tempoEstimadoMinutos).toBeLessThanOrEqual(45); // Respeita ~45 min
    });

    it('deve bonificar pares conceituais confundíveis (Kornell & Bjork) para contraste simultâneo', () => {
      const par = PARES_CONCEITUAIS_CONFUNDIVEIS[0]; // crosswalk vs conversao
      expect(par.id).toBe('par-crosswalk-conversao');

      const conceitoA: Concept = {
        id: 'c_crosswalk_1',
        submoduloId: '2.6',
        moduloId: 'm2',
        topico: 'Crosswalk de Metadados e Mapeamentos',
        enunciadoCanonic: 'O crosswalk estabelece equivalência semântica...',
        gabaritoCanonic: 'C',
        justificativaCanonic: 'Crosswalk mapeia sem alterar a base nativa.',
        nivelDificuldade: 'dificil',
        formatosDisponiveis: ['f1_ce_simples', 'f3_identificacao_erro'],
      };

      const conceitoB: Concept = {
        id: 'c_conversao_1',
        submoduloId: '6.5',
        moduloId: 'm6',
        topico: 'Conversão de Registros e Padrões',
        enunciadoCanonic: 'A conversão de metadados processa fisicamente...',
        gabaritoCanonic: 'C',
        justificativaCanonic: 'Conversão transforma para novos esquemas físicos.',
        nivelDificuldade: 'dificil',
        formatosDisponiveis: ['f1_ce_simples', 'f5_associacao'],
      };

      const estA = criarEstadoInicialConceito(conceitoA.id, 'u', '2026-10-14');
      const estB = criarEstadoInicialConceito(conceitoB.id, 'u', '2026-10-14');
      estA.proximaRevisao = '2026-10-14';
      estB.proximaRevisao = '2026-10-14';

      const fila = selecionarFilaRevisaoDiaria({
        estados: {
          [conceitoA.id]: estA,
          [conceitoB.id]: estB,
        },
        conceitos: { [conceitoA.id]: conceitoA, [conceitoB.id]: conceitoB },
        dataHojeIso: '2026-10-14',
      });

      expect(fila.paresConfundiveisDetectados).toContain('par-crosswalk-conversao');
      expect(fila.itensNaFila.length).toBe(2);
    });
  });

  describe('T7.2 — Reconstrução dos Submódulos de Revisão (Rn)', () => {
    it('deve compor o submódulo de revisão R3 exibindo submódulos cobertos, próxima data e caso integrador CI-1', () => {
      const revisaoR3 = comporSubmoduloRevisao({
        moduloNumero: 3,
        moduloId: 'm3',
        dataAtualIso: '2026-10-14',
      });

      expect(revisaoR3.totalItens).toBe(20);
      expect(revisaoR3.totalC).toBe(10);
      expect(revisaoR3.totalE).toBe(10);
      expect(revisaoR3.aproveitamentoMinimo).toBe(0.85);
      expect(revisaoR3.acertosNecessarios).toBe(17);

      // Metadados da Fase 7 (T7.2)
      expect(revisaoR3.submodulosCobertos.length).toBeGreaterThan(0);
      expect(revisaoR3.dataProximaRevisaoSugerida).toBe('2026-10-15'); // 1 dia útil após
      expect(revisaoR3.casoIntegradorDestaque).toBeDefined();
      expect(revisaoR3.casoIntegradorDestaque?.id).toBe('ci-1');
      expect(revisaoR3.fundamentacaoCientificaFormatos).toBeDefined();
      expect(revisaoR3.fundamentacaoCientificaFormatos.f1_ce_simples.referencia).toContain('Roediger & Karpicke');
    });

    it('deve associar corretamente os 5 Casos Integradores aos seus respectivos módulos interdisciplinares', () => {
      const r3 = comporSubmoduloRevisao({ moduloNumero: 3, moduloId: 'm3' });
      const r6 = comporSubmoduloRevisao({ moduloNumero: 6, moduloId: 'm6' });
      const r8 = comporSubmoduloRevisao({ moduloNumero: 8, moduloId: 'm8' });
      const r10 = comporSubmoduloRevisao({ moduloNumero: 10, moduloId: 'm10' });
      const r14 = comporSubmoduloRevisao({ moduloNumero: 14, moduloId: 'm14' });

      expect(r3.casoIntegradorDestaque?.id).toBe('ci-1');
      expect(r6.casoIntegradorDestaque?.id).toBe('ci-2');
      expect(r8.casoIntegradorDestaque?.id).toBe('ci-3');
      expect(r10.casoIntegradorDestaque?.id).toBe('ci-4');
      expect(r14.casoIntegradorDestaque?.id).toBe('ci-5');
    });

    it('deve declarar a fundamentação neurocognitiva para todos os 8 formatos F1 a F8', () => {
      const formatos = [
        'f1_ce_simples',
        'f2_com_justificativa',
        'f3_identificacao_erro',
        'f4_preenchimento_lacunas',
        'f5_associacao',
        'f6_caso_pratico',
        'f7_flashcard_ativo',
        'f8_inversao_papeis',
      ] as const;

      formatos.forEach((fmt) => {
        const info = EVIDENCIA_CIENTIFICA_FORMATOS[fmt];
        expect(info).toBeDefined();
        expect(info.evidencia.length).toBeGreaterThan(15);
        expect(info.referencia.length).toBeGreaterThan(10);
        expect(info.utilidade).toBe('alta');
      });
    });
  });

  describe('T7.3 — Trilha Reta Final (3 semanas finais até 17/01/2027)', () => {
    it('deve projetar o marco de corte normativo de 17/12/2026 e a Reta Final em 28/12/2026', () => {
      const projecao = calcularProjecaoTemporal({
        dataAtualIso: '2026-10-14',
      });

      expect(projecao.marcoCorteNormativo.dataCorteIso).toBe('2026-12-17');
      expect(projecao.marcoCorteNormativo.isCorteAtingido).toBe(false);
      expect(projecao.marcoCorteNormativo.diasAteCorte).toBeGreaterThan(40);

      expect(projecao.trilhaRetaFinalInfo.dataInicioIso).toBe('2026-12-28');
      expect(projecao.trilhaRetaFinalInfo.totalItensSimuladoGeral).toBe(180);
      expect(projecao.trilhaRetaFinalInfo.blocosOficiais.length).toBe(6); // Blocos A a E + Conhecimentos Básicos
      expect(projecao.diasUteisRetaFinal).toBe(15); // 3 semanas úteis de 5 dias
      expect(projecao.isRetaFinalAtiva).toBe(false);
    });

    it('deve ativar automaticamente a Trilha Reta Final quando a data atual estiver dentro das 3 semanas finais', () => {
      const projecaoRetaFinal = calcularProjecaoTemporal({
        dataAtualIso: '2026-12-29',
      });

      expect(projecaoRetaFinal.isRetaFinalAtiva).toBe(true);
      expect(projecaoRetaFinal.marcoCorteNormativo.isCorteAtingido).toBe(true);
    });
  });
});

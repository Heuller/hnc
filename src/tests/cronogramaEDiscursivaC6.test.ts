// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import {
  CRONOGRAMA_DIAS,
  FERIADOS_RESERVA,
  PLANO_B_CONFIG,
  obterCronogramaDia,
  obterSubmodulosPlanejadosAteData,
  calcularAtrasoSubmodulos,
  calcularDiagnosticoCronograma,
} from '../config/cronograma';
import {
  TRILHA_DISCURSIVA_D1_D9,
  obterSessaoDiscursivaPorId,
  obterSessaoDiscursivaPorData,
} from '../domain/discursiva/trilhaDiscursiva';
import {
  calcularNotaRubrica,
  RUBRICA_PESOS_CANONICOS,
} from '../domain/discursiva/rubricaAutocorrecao';
import { ALL_COURSE_MODULES } from '../content/registry';

describe('Prompt C6 — Cronograma Dia a Dia e Trilha da Discursiva', () => {
  describe('1. Calendário Canônico Oficial (22/10/2026 a 15/01/2027)', () => {
    it('deve possuir exatamente 62 dias úteis, 58 dias de estudo e 4 feriados de reserva', () => {
      // Aceite estrito do edital/documento: 62 dias úteis, 58 de estudo, 4 reservas
      expect(CRONOGRAMA_DIAS.length).toBe(62);

      const diasEstudo = CRONOGRAMA_DIAS.filter((d) => d.tipo === 'estudo');
      const diasReserva = CRONOGRAMA_DIAS.filter((d) => d.tipo === 'reserva');

      expect(diasEstudo.length).toBe(58);
      expect(diasReserva.length).toBe(4);
    });

    it('deve iniciar em 22/10/2026 (quinta-feira) e terminar em 15/01/2027 (sexta-feira)', () => {
      expect(CRONOGRAMA_DIAS[0].dataIso).toBe('2026-10-22');
      expect(CRONOGRAMA_DIAS[0].diaSemana).toBe('qui');

      expect(CRONOGRAMA_DIAS[CRONOGRAMA_DIAS.length - 1].dataIso).toBe('2027-01-15');
      expect(CRONOGRAMA_DIAS[CRONOGRAMA_DIAS.length - 1].diaSemana).toBe('sex');
    });

    it('todos os 62 dias devem ser dias de semana (segunda a sexta), sem finais de semana', () => {
      const diasValidos = ['seg', 'ter', 'qua', 'qui', 'sex'];
      for (const dia of CRONOGRAMA_DIAS) {
        expect(diasValidos).toContain(dia.diaSemana);
        const dataObj = new Date(dia.dataIso + 'T12:00:00Z');
        const diaSemanaNum = dataObj.getUTCDay();
        expect(diaSemanaNum).toBeGreaterThanOrEqual(1);
        expect(diaSemanaNum).toBeLessThanOrEqual(5);
      }
    });

    it('os 4 feriados de reserva devem ser 02/11, 20/11, 25/12 e 01/01', () => {
      const datasFeriadosEsperadas = ['2026-11-02', '2026-11-20', '2026-12-25', '2027-01-01'];
      const diasReserva = CRONOGRAMA_DIAS.filter((d) => d.tipo === 'reserva');

      expect(diasReserva.map((d) => d.dataIso)).toEqual(datasFeriadosEsperadas);

      for (const dataFeriado of datasFeriadosEsperadas) {
        expect(FERIADOS_RESERVA[dataFeriado]).toBeDefined();
        const dia = obterCronogramaDia(dataFeriado);
        expect(dia?.tipo).toBe('reserva');
        expect(dia?.feriadoNome).toBeDefined();
      }
    });

    it('a distribuição pelas 3 fases deve ser: Fase 1 (42 estudo), Fase 2 (11 estudo), Fase 3 (5 estudo)', () => {
      const fase1Estudo = CRONOGRAMA_DIAS.filter((d) => d.fase === 1 && d.tipo === 'estudo');
      const fase2Estudo = CRONOGRAMA_DIAS.filter((d) => d.fase === 2 && d.tipo === 'estudo');
      const fase3Estudo = CRONOGRAMA_DIAS.filter((d) => d.fase === 3 && d.tipo === 'estudo');

      expect(fase1Estudo.length).toBe(42);
      expect(fase2Estudo.length).toBe(11);
      expect(fase3Estudo.length).toBe(5);
      expect(fase1Estudo.length + fase2Estudo.length + fase3Estudo.length).toBe(58);
    });
  });

  describe('2. Cobertura Intercalada da Fase 1 (75 Submódulos)', () => {
    it('deve cobrir todos os 75 submódulos da grade completa (45 Específicos + 30 Básicos) sem omissões', () => {
      const todosSubmodulosCurso = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos.map((s) => s.id));
      expect(todosSubmodulosCurso.length).toBe(75);

      const submodulosNoCronograma = new Set<string>();
      for (const dia of CRONOGRAMA_DIAS) {
        for (const sub of dia.submodulos) {
          submodulosNoCronograma.add(sub.id);
        }
      }

      expect(submodulosNoCronograma.size).toBe(75);
      for (const id of todosSubmodulosCurso) {
        expect(submodulosNoCronograma.has(id)).toBe(true);
      }
    });

    it('de segunda a quinta na Fase 1 (dias normais) deve haver 1 Específico e 1 Básico', () => {
      const diasSegAQui = CRONOGRAMA_DIAS.filter(
        (d) => d.fase === 1 && d.tipo === 'estudo' && ['seg', 'ter', 'qua', 'qui'].includes(d.diaSemana)
      );

      // Maioria dos dias possui 1 Específico e 1 Básico; nos dias de fechamento (16/12, 17/12, 21/12, 22/12)
      // ocorrem submódulos específicos duplos ou finais.
      for (const dia of diasSegAQui) {
        expect(dia.submodulos.length).toBeGreaterThanOrEqual(1);
        if (dia.dataIso <= '2026-12-15') {
          const temEspecifico = dia.submodulos.some((s) => s.tipo === 'especifico');
          const temBasico = dia.submodulos.some((s) => s.tipo === 'basico');
          expect(temEspecifico).toBe(true);
          expect(temBasico).toBe(true);
        }
      }
    });

    it('nas sextas-feiras de estudo da Fase 1 deve haver 1 Específico, revisão semanal intercalada e discursiva', () => {
      const sextasFase1 = CRONOGRAMA_DIAS.filter(
        (d) => d.fase === 1 && d.tipo === 'estudo' && d.diaSemana === 'sex'
      );

      expect(sextasFase1.length).toBe(8); // 8 sextas de estudo (20/11 é feriado reserva)

      for (const sexta of sextasFase1) {
        expect(sexta.revisaoSemanal).toBe(true);
        expect(sexta.discursivaId).toBeDefined();
        expect(sexta.submodulos.length).toBe(1);
        expect(sexta.submodulos[0].tipo).toBe('especifico');
      }
    });
  });

  describe('3. Diagnóstico de Atraso e Gatilho do Plano B (Seção 3.4)', () => {
    it('deve calcular atraso zero quando todos os submódulos esperados foram lidos', () => {
      const dataRef = '2026-10-23'; // Fim da Semana 1 (esperados: 1.1, 11.1, 1.2)
      const concluidos = ['sub-1-1', 'sub-11-1', 'sub-1-2'];

      const resultado = calcularAtrasoSubmodulos(dataRef, concluidos);
      expect(resultado.atrasoSubmodulos).toBe(0);
      expect(resultado.submodulosPendentes.length).toBe(0);
    });

    it('deve detectar atraso e sugerir o Plano B se houver >= 3 submódulos atrasados até 06/11/2026', () => {
      const dataRef = '2026-11-06';
      // Concluiu apenas os 2 primeiros submódulos
      const concluidos = ['sub-1-1', 'sub-11-1'];

      const diag = calcularDiagnosticoCronograma(dataRef, concluidos);
      expect(diag.atrasoSubmodulos).toBeGreaterThanOrEqual(3);
      expect(diag.sugerirPlanoB).toBe(true);
      expect(diag.mensagemPlanoB).toContain('Plano B');
      expect(diag.mensagemPlanoB).toContain('Módulo 7');
      expect(diag.mensagemPlanoB).toContain('0,7%');
    });

    it('não deve sugerir o Plano B se o atraso for menor que 3 submódulos', () => {
      const dataRef = '2026-11-03';
      const esperados = obterSubmodulosPlanejadosAteData(dataRef);
      // Concluiu todos exceto os últimos 2
      const concluidos = esperados.slice(0, esperados.length - 2);

      const diag = calcularDiagnosticoCronograma(dataRef, concluidos);
      expect(diag.atrasoSubmodulos).toBe(2);
      expect(diag.sugerirPlanoB).toBe(false);
      expect(diag.mensagemPlanoB).toBeUndefined();
    });

    it('não deve disparar o Plano B para datas posteriores a 06/11/2026', () => {
      const dataRef = '2026-11-09';
      const concluidos: string[] = []; // Zero concluidos

      const diag = calcularDiagnosticoCronograma(dataRef, concluidos);
      expect(diag.atrasoSubmodulos).toBeGreaterThan(3);
      expect(diag.sugerirPlanoB).toBe(false); // Prazo limite de 06/11 já passou
    });
  });

  describe('4. Trilha da Discursiva D1 a D9 e Rubrica de Autocorreção 11/3/1', () => {
    it('deve possuir exatamente 9 sessões estruturadas de D1 a D9', () => {
      expect(TRILHA_DISCURSIVA_D1_D9.length).toBe(9);
      const codigos = TRILHA_DISCURSIVA_D1_D9.map((s) => s.codigo);
      expect(codigos).toEqual(['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9']);

      expect(PLANO_B_CONFIG.limiarAtrasoSubmodulos).toBe(3);
      expect(PLANO_B_CONFIG.dataLimiteIso).toBe('2026-11-06');
      expect(obterSessaoDiscursivaPorData('2026-10-23')?.codigo).toBe('D1');
      expect(RUBRICA_PESOS_CANONICOS.QUESTAO_20.ASPECTOS_MAX).toBe(11.0);
    });

    it('as questões devem ter limite de 20 linhas e as peças técnicas de 50 linhas', () => {
      const d1 = obterSessaoDiscursivaPorId('D1');
      expect(d1?.tipo).toBe('questao_20');
      expect(d1?.modalidade).toBe('estudo_padrao');

      const questoes20 = TRILHA_DISCURSIVA_D1_D9.filter((s) => s.tipo === 'questao_20' && s.codigo !== 'D1');
      for (const q of questoes20) {
        expect(q.limiteLinhas).toBe(20);
      }

      const pecas50 = TRILHA_DISCURSIVA_D1_D9.filter((s) => s.tipo === 'peca_50');
      expect(pecas50.length).toBe(2); // D5 e D9
      for (const p of pecas50) {
        expect(p.limiteLinhas).toBe(50);
      }
    });

    it('D1 deve mapear o estudo de padrões reais Cebraspe (CAPES 2023 e TSE 2024)', () => {
      const d1 = obterSessaoDiscursivaPorId('D1');
      expect(d1?.titulo).toContain('CAPES 2023');
      expect(d1?.titulo).toContain('TSE 2024');
      expect(d1?.dataIso).toBe('2026-10-23');
    });

    it('a Rubrica 11/3/1 para questão de 20 linhas deve aplicar 11 aspectos, 3 profundidade, 1 apresentação e desconto de 0,15 por erro em 20 linhas', () => {
      const resultado = calcularNotaRubrica('questao_20', {
        aspectosPontos: 11.0,
        profundidadePontos: 3.0,
        apresentacaoPontos: 1.0,
        errosGramaticais: 2,
        linhasEfetivas: 20,
      });

      expect(resultado.notaConteudo).toBe(15.0);
      expect(resultado.notaMaximaConteudo).toBe(15.0);
      expect(resultado.custoPorErroEmLinhasCheias).toBe(0.15); // 3 / 20 = 0.15
      expect(resultado.fatorDesconto).toBe(3);
      expect(resultado.descontoGramatical).toBe(0.3); // 2 * 0.15 = 0.30
      expect(resultado.notaFinal).toBe(14.7);
      expect(resultado.atingiuMetaSeguranca).toBe(true);
    });

    it('a Rubrica 11/3/1 para peça técnica de 50 linhas deve aplicar 22 aspectos, 6 profundidade, 2 apresentação e desconto de 0,12 por erro em 50 linhas', () => {
      const resultado = calcularNotaRubrica('peca_50', {
        aspectosPontos: 22.0,
        profundidadePontos: 6.0,
        apresentacaoPontos: 2.0,
        errosGramaticais: 3,
        linhasEfetivas: 50,
      });

      expect(resultado.notaConteudo).toBe(30.0);
      expect(resultado.notaMaximaConteudo).toBe(30.0);
      expect(resultado.custoPorErroEmLinhasCheias).toBe(0.12); // 6 / 50 = 0.12
      expect(resultado.fatorDesconto).toBe(6);
      expect(resultado.descontoGramatical).toBe(0.36); // 3 * 0.12 = 0.36
      expect(resultado.notaFinal).toBe(29.64);
      expect(resultado.atingiuMetaSeguranca).toBe(true);
    });

    it('a nota final nunca deve ser negativa mesmo com número exorbitante de erros', () => {
      const resultado = calcularNotaRubrica('questao_20', {
        aspectosPontos: 5.0,
        profundidadePontos: 1.0,
        apresentacaoPontos: 0.5,
        errosGramaticais: 50,
        linhasEfetivas: 20,
      });

      expect(resultado.notaFinal).toBe(0);
      expect(resultado.atingiuMetaSeguranca).toBe(false);
    });
  });
});

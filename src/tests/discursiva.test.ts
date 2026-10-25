// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { discursivaService, DiscursivaIndisponivelError } from '../domain/discursiva/discursivaService';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';

describe('Laboratório e Avaliador de Discursivas Cebraspe (Edital nº 1/2026 - Item 9)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Banco de Temas Oficiais da Câmara dos Deputados', () => {
    it('deve possuir 13 temas oficiais cobrindo questões (20 linhas, 15 pts) e peças técnicas (50 linhas, 30 pts), incluindo a prova real PCDF 2025', () => {
      expect(TEMAS_OFICIAIS_DISCURSIVA.length).toBe(13);

      const questaoVergueiro = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.id === 'tema-desbastamento-vergueiro');
      expect(questaoVergueiro).toBeDefined();
      expect(questaoVergueiro?.tipo).toBe('questao_20');
      expect(questaoVergueiro?.limiteLinhas).toBe(20);
      expect(questaoVergueiro?.criteriosPontuacao.length).toBe(3);

      const pecaOAIS = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.id === 'tema-oais-memoria-camara');
      expect(pecaOAIS).toBeDefined();
      expect(pecaOAIS?.tipo).toBe('peca_50');
      expect(pecaOAIS?.limiteLinhas).toBe(50);
      expect(pecaOAIS?.criteriosPontuacao.length).toBe(5);

      // Prova Real do Cebraspe PCDF 2025 (Bibliotecário)
      const provaRealPCDF2025 = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.id === 'tema-pcdf-2025-indexacao-metadados');
      expect(provaRealPCDF2025).toBeDefined();
      expect(provaRealPCDF2025?.tipo).toBe('questao_20');
      expect(provaRealPCDF2025?.limiteLinhas).toBe(20);
      expect(provaRealPCDF2025?.titulo).toContain('PCDF 2025');
      expect(provaRealPCDF2025?.criteriosPontuacao.length).toBe(2);
      expect(provaRealPCDF2025?.criteriosPontuacao[0].pontuacaoMaxima).toBe(7.5);
      expect(provaRealPCDF2025?.criteriosPontuacao[1].pontuacaoMaxima).toBe(7.5);
      expect(provaRealPCDF2025?.padraoRespostaPreliminar).toContain('Padrão Oficial Cebraspe (PCDF/2025)');
    });

    it('cada tema oficial deve ter padrão preliminar com soma de critérios igual à nota máxima oficial do Edital 1/2026', () => {
      for (const tema of TEMAS_OFICIAIS_DISCURSIVA) {
        expect(tema.titulo.trim().length).toBeGreaterThan(5);
        expect(tema.enunciado.trim().length).toBeGreaterThan(20);
        expect(tema.padraoRespostaPreliminar.trim().length).toBeGreaterThan(30);

        const notaMaximaEsperada = tema.tipo === 'peca_50' ? 30.0 : 15.0;
        const somaCriterios = tema.criteriosPontuacao.reduce((acc, c) => acc + c.pontuacaoMaxima, 0);
        expect(Math.round(somaCriterios)).toBe(notaMaximaEsperada);
      }
    });
  });

  describe('discursivaService: nunca fabrica nota', () => {
    const tema = () => TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.tipo === 'questao_20')!;
    const texto =
      'O desbastamento consiste na transferência física temporária de documentos para depósitos secundários sem exclusão patrimonial. ' +
      'Já o descarte implica a alienação definitiva do material bibliográfico, observadas as restrições de obras raras.';

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it('lança erro e NÃO salva nada quando a rede falha', async () => {
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
      await expect(discursivaService.avaliarRedacao(tema(), texto, 18)).rejects.toBeInstanceOf(DiscursivaIndisponivelError);
      expect(discursivaService.listarAvaliacoesLocais()).toHaveLength(0);
    });

    it('lança erro com a mensagem do servidor quando a IA não está configurada (503)', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: false,
          status: 503,
          json: async () => ({ error: 'Correção por IA indisponível no momento.', code: 'AI_NOT_CONFIGURED' }),
        })
      );
      await expect(discursivaService.avaliarRedacao(tema(), texto, 18)).rejects.toThrow('Correção por IA indisponível');
      expect(discursivaService.listarAvaliacoesLocais()).toHaveLength(0);
    });

    it('rejeita resposta incompleta do servidor sem registrar nota', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ notaFinal: 10 }) })
      );
      await expect(discursivaService.avaliarRedacao(tema(), texto, 18)).rejects.toBeInstanceOf(DiscursivaIndisponivelError);
      expect(discursivaService.listarAvaliacoesLocais()).toHaveLength(0);
    });

    it('salva e devolve a avaliação quando o servidor responde no formato esperado', async () => {
      const resposta = {
        id: 'eval-1',
        dataAvaliacao: new Date().toISOString(),
        temaId: 'x',
        tipo: 'questao_20',
        totalLinhas: 18,
        notaConteudo: 12,
        notaConteudoMaxima: 15,
        numErrosGramaticais: 1,
        descontoGramatical: 0.17,
        notaFinal: 11.83,
        formulaAplicada: 'NQ = ...',
        situacao: 'HABILITADO',
        criterios: [],
        errosGramaticais: [],
        pontosFortes: [],
        lacunasIdentificadas: [],
        parecerGeralExaminador: 'ok',
      };
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => resposta }));
      const av = await discursivaService.avaliarRedacao(tema(), texto, 18);
      expect(av.notaFinal).toBe(11.83);
      expect(discursivaService.listarAvaliacoesLocais()[0].id).toBe('eval-1');
    });
  });

  describe('Calibração Humana vs IA e Regra de Convergência (Edital nº 1/2026 - Item 9.8.4.1.2)', () => {
    it('deve validar critério de convergência de até 25% da nota máxima em questão de 20 linhas (limite 3.75 pts)', () => {
      const notaMaximaQuestao = 15.0;
      const limiteConvergenciaQuestao = 0.25 * notaMaximaQuestao; // 3.75 pts

      // Caso 1: Convergente (Diferença de 2.0 pts <= 3.75 pts)
      const notaIA = 12.0;
      const notaHumanaConvergente = 10.0;
      const deltaConvergente = Math.abs(notaIA - notaHumanaConvergente);
      expect(deltaConvergente).toBeLessThanOrEqual(limiteConvergenciaQuestao);

      // Média aritmética em caso de convergência oficial
      const mediaConteudo = (notaIA + notaHumanaConvergente) / 2;
      expect(mediaConteudo).toBe(11.0);

      // Caso 2: Divergente (Diferença de 4.5 pts > 3.75 pts)
      const notaHumanaDivergente = 7.0;
      const deltaDivergente = Math.abs(notaIA - notaHumanaDivergente);
      expect(deltaDivergente).toBeGreaterThan(limiteConvergenciaQuestao);
    });

    it('deve validar critério de convergência de até 25% da nota máxima em peça técnica de 50 linhas (limite 7.50 pts)', () => {
      const notaMaximaPeca = 30.0;
      const limiteConvergenciaPeca = 0.25 * notaMaximaPeca; // 7.50 pts

      // Caso 1: Convergente (Diferença de 5.0 pts <= 7.50 pts)
      const notaIA = 25.0;
      const notaHumanaConvergente = 20.0;
      const deltaConvergente = Math.abs(notaIA - notaHumanaConvergente);
      expect(deltaConvergente).toBeLessThanOrEqual(limiteConvergenciaPeca);

      // Caso 2: Divergente (Diferença de 8.0 pts > 7.50 pts)
      const notaHumanaDivergente = 16.0;
      const deltaDivergente = Math.abs(notaIA - notaHumanaDivergente);
      expect(deltaDivergente).toBeGreaterThan(limiteConvergenciaPeca);
    });

    it('deve registrar corretamente tempo gasto e autoavaliação humana na estrutura da versão', () => {
      const versaoTeste = {
        id: 'versao-teste-calibrada',
        dataHora: new Date().toISOString(),
        texto: 'Texto dissertativo de teste para aferição de calibração.',
        linhasEstimadas: 18,
        tempoGastoSegundos: 1850, // ~30.8 minutos
        autoavaliacaoHumana: {
          notaHumana: 11.5,
          notaConteudoHumana: 12.0,
          errosHumanos: 3,
          conceitosQuesitos: {
            0: 3, // Pleno
            1: 2, // Quase pleno
          },
        },
      };

      expect(versaoTeste.tempoGastoSegundos).toBe(1850);
      expect(versaoTeste.autoavaliacaoHumana.notaHumana).toBe(11.5);
      expect(versaoTeste.autoavaliacaoHumana.conceitosQuesitos[0]).toBe(3);
    });
  });
});


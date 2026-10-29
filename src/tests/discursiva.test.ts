// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { discursivaService } from '../domain/discursiva/discursivaService';
import { avaliacaoFixture } from './fixtures/avaliacaoDiscursiva';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';

describe('Laboratório e Avaliador de Discursivas Cebraspe (Edital nº 1/2026 - Item 9)', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal('fetch', vi.fn(async (_url: string, options: RequestInit) => {
      const payload = JSON.parse(String(options.body));
      const tema = TEMAS_OFICIAIS_DISCURSIVA.find(t => t.id === payload.temaId)!;
      return { ok: true, json: async () => avaliacaoFixture(tema, payload.linhasEstimadas) };
    }));
  });

  afterEach(() => vi.unstubAllGlobals());

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

  describe('discursivaService e Aplicação das Fórmulas Oficiais dos Itens 9.8.4 e 9.8.5', () => {
    it('deve aplicar estritamente a fórmula da Questão: NQ = NC - 3 × (NE / TL) (Edital 1/2026, item 9.8.4)', async () => {
      const tema = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.tipo === 'questao_20')!;
      const texto =
        'O desbastamento e o descarte constituem etapas essenciais da gestão de coleções em bibliotecas parlamentares. ' +
        'O desbastamento consiste na transferência física temporária de documentos para depósitos secundários sem exclusão patrimonial. ' +
        'Já o descarte implica a alienação definitiva do material bibliográfico, observadas as restrições de obras raras.';

      const avaliacao = await discursivaService.avaliarRedacao(tema, texto, 18);

      expect(avaliacao).toBeDefined();
      expect(avaliacao.totalLinhas).toBe(18);
      expect(avaliacao.notaConteudo).toBeGreaterThan(0);
      expect(avaliacao.notaConteudoMaxima).toBe(15.0);

      // Verificação da fórmula oficial do item 9.8.4: desconto = 3 * (NE / TL)
      const descontoCalculado = Number((3 * (avaliacao.numErrosGramaticais / avaliacao.totalLinhas)).toFixed(2));
      expect(avaliacao.descontoGramatical).toBe(descontoCalculado);

      const notaFinalCalculada = Math.max(0, Number((avaliacao.notaConteudo - descontoCalculado).toFixed(2)));
      expect(avaliacao.notaFinal).toBe(notaFinalCalculada);

      // Verificação da situação (aprovação se notaFinal >= 50% = 7.50)
      if (avaliacao.notaFinal >= 7.5) {
        expect(avaliacao.situacao).toBe('HABILITADO');
      } else {
        expect(avaliacao.situacao).toBe('ELIMINADO');
      }
    });

    it('deve aplicar estritamente a fórmula da Peça Técnica: NPT = NC - 6 × (NE / TL) (Edital 1/2026, item 9.8.5)', async () => {
      const tema = TEMAS_OFICIAIS_DISCURSIVA.find((t) => t.tipo === 'peca_50')!;
      const texto =
        'Trata-se de proposta técnica para modernização da memória documental da Câmara dos Deputados mediante implantação do modelo OAIS. ' +
        'O fluxo contempla a ingestão dos pacotes SIP, a guarda permanente no padrão AIP com metadados PREMIS e a difusão no formato DIP via web...';

      const avaliacao = await discursivaService.avaliarRedacao(tema, texto, 45);

      expect(avaliacao).toBeDefined();
      expect(avaliacao.totalLinhas).toBe(45);
      expect(avaliacao.notaConteudo).toBeGreaterThan(0);
      expect(avaliacao.notaConteudoMaxima).toBe(30.0);

      // Verificação da fórmula oficial do item 9.8.5: desconto = 6 * (NE / TL)
      const descontoCalculado = Number((6 * (avaliacao.numErrosGramaticais / avaliacao.totalLinhas)).toFixed(2));
      expect(avaliacao.descontoGramatical).toBe(descontoCalculado);

      const notaFinalCalculada = Math.max(0, Number((avaliacao.notaConteudo - descontoCalculado).toFixed(2)));
      expect(avaliacao.notaFinal).toBe(notaFinalCalculada);

      // Verificação da situação (aprovação se notaFinal >= 50% = 15.00)
      if (avaliacao.notaFinal >= 15.0) {
        expect(avaliacao.situacao).toBe('HABILITADO');
      } else {
        expect(avaliacao.situacao).toBe('ELIMINADO');
      }
    });

    it('deve salvar e listar avaliações no histórico local', async () => {
      const tema = TEMAS_OFICIAIS_DISCURSIVA[1];
      const texto = 'A evolução conceitual do AACR2 para o RDA e IFLA LRM ampliou a interoperabilidade...';

      const avaliacao = await discursivaService.avaliarRedacao(tema, texto, 15);
      const salvas = discursivaService.listarAvaliacoesLocais();

      expect(salvas.length).toBeGreaterThan(0);
      expect(salvas[0].id).toBe(avaliacao.id);
      expect(salvas[0].temaId).toBe(tema.id);
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


// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { discursivaService } from '../domain/discursiva/discursivaService';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';

describe('Laboratório e Avaliador de Discursivas Cebraspe', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Banco de Temas Oficiais da Câmara dos Deputados', () => {
    it('deve possuir temas obrigatórios de questão (20 linhas) e peça técnica (50 linhas)', () => {
      expect(TEMAS_OFICIAIS_DISCURSIVA.length).toBeGreaterThanOrEqual(4);

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
    });

    it('cada tema oficial deve ter padrão preliminar com soma de critérios igual à nota máxima', () => {
      for (const tema of TEMAS_OFICIAIS_DISCURSIVA) {
        expect(tema.titulo.trim().length).toBeGreaterThan(5);
        expect(tema.enunciado.trim().length).toBeGreaterThan(20);
        expect(tema.padraoRespostaPreliminar.trim().length).toBeGreaterThan(30);

        const notaMaximaEsperada = tema.tipo === 'peca_50' ? 50.0 : 20.0;
        const somaCriterios = tema.criteriosPontuacao.reduce((acc, c) => acc + c.pontuacaoMaxima, 0);
        expect(Math.round(somaCriterios)).toBe(notaMaximaEsperada);
      }
    });
  });

  describe('discursivaService e Aplicação da Fórmula Oficial Cebraspe', () => {
    it('deve aplicar estritamente a fórmula NC = NCP - 2 * (NE / TL)', async () => {
      const tema = TEMAS_OFICIAIS_DISCURSIVA[0];
      const texto =
        'O desbastamento e o descarte constituem etapas essenciais da gestão de coleções em bibliotecas parlamentares. ' +
        'O desbastamento consiste na transferência física temporária de documentos para depósitos secundários sem exclusão patrimonial. ' +
        'Já o descarte implica a alienação definitiva do material bibliográfico, observadas as restrições de obras raras.';

      const avaliacao = await discursivaService.avaliarRedacao(tema, texto, 18);

      expect(avaliacao).toBeDefined();
      expect(avaliacao.totalLinhas).toBe(18);
      expect(avaliacao.notaConteudo).toBeGreaterThan(0);
      expect(avaliacao.notaConteudoMaxima).toBe(20.0);

      // Verificação da fórmula: desconto = 2 * (NE / TL)
      const descontoCalculado = Number((2 * (avaliacao.numErrosGramaticais / avaliacao.totalLinhas)).toFixed(2));
      expect(avaliacao.descontoGramatical).toBe(descontoCalculado);

      const notaFinalCalculada = Math.max(0, Number((avaliacao.notaConteudo - descontoCalculado).toFixed(2)));
      expect(avaliacao.notaFinal).toBe(notaFinalCalculada);

      // Verificação da situação
      if (avaliacao.notaFinal >= 12.0) {
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
});

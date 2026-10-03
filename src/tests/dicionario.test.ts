// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { dicionarioService } from '../domain/dicionario/dicionarioService';
import { BASE_TERMOS_DICIONARIO } from '../domain/dicionario/baseTermos';
import { useDicionarioStore } from '../store/useDicionarioStore';
import { useProgressStore } from '../store/useProgressStore';

describe('Dicionário Cebraspe & Glossário Vivo', () => {
  beforeEach(() => {
    localStorage.clear();
    useDicionarioStore.setState({
      isModalOpen: false,
      termoAtivo: null,
      isLoading: false,
      termoQuery: '',
      contextoFrase: '',
      erro: null,
      historicoConsultas: [],
    });
  });

  describe('Base Curada de Termos (Cunha & Lemos + Cebraspe)', () => {
    it('deve possuir termos essenciais da biblioteconomia devidamente categorizados', () => {
      expect(BASE_TERMOS_DICIONARIO.length).toBeGreaterThan(50);
      
      const rda = BASE_TERMOS_DICIONARIO.find(t => t.id === 'rda');
      expect(rda).toBeDefined();
      expect(rda?.termo).toBe('RDA (Resource Description and Access)');
      expect(rda?.moduloRelacionado).toBe('M2');
      expect(rda?.armadilhaCebraspe).toBeDefined();
      expect(rda?.aplicacaoCamara).toBeDefined();
    });

    it('cada termo da base curada deve ter conceito canônico, armadilha Cebraspe e aplicação na Câmara', () => {
      for (const t of BASE_TERMOS_DICIONARIO) {
        expect(t.termo.trim().length).toBeGreaterThan(0);
        expect((t.conceitoCanonico || '').trim().length).toBeGreaterThan(15);
        expect((t.armadilhaCebraspe || '').trim().length).toBeGreaterThan(10);
        expect((t.aplicacaoCamara || '').trim().length).toBeGreaterThan(10);
        expect((t.fonteReferencia || '').trim().length).toBeGreaterThan(5);
      }
    });
  });

  describe('dicionarioService', () => {
    it('deve localizar termo exato ou parcial na base curada local (offline)', () => {
      const resultado = dicionarioService.buscarTermoLocal('RDA');
      expect(resultado).not.toBeNull();
      expect(resultado?.id).toBe('rda');
      expect(resultado?.geradoPorIA).toBeFalsy();
    });

    it('deve localizar termo ignorando acentuação e caixa alta/baixa', () => {
      const res1 = dicionarioService.buscarTermoLocal('informacao como coisa');
      expect(res1).not.toBeNull();
      expect(res1?.id).toBe('informacao-como-coisa');

      const res2 = dicionarioService.buscarTermoLocal('DESBASTAMENTO');
      expect(res2).not.toBeNull();
      expect(res2?.id).toBe('desbastamento-vs-descarte');
    });

    it('deve localizar com precisão o termo Documentação sem retornar relações em tesauros', () => {
      const resDoc = dicionarioService.buscarTermoLocal('Documentação');
      expect(resDoc).not.toBeNull();
      expect(resDoc?.id).toBe('documentacao');
      expect(resDoc?.termo).toContain('Documentação');
      expect(resDoc?.termo).not.toContain('Tesauros');

      const resTesauro = dicionarioService.buscarTermoLocal('tesauro');
      expect(resTesauro).not.toBeNull();
      expect(resTesauro?.id).toBe('tesauros-relacoes');

      // Palavra contendo "ta" não deve dar falso positivo em tesauro
      const resFake = dicionarioService.buscarTermoLocal('sustentabilidade');
      expect(resFake).toBeNull();
    });

    it('deve localizar Paul Otlet e termos de Documentação na base curada', () => {
      const resOtlet = dicionarioService.buscarTermoLocal('Paul Otlet');
      expect(resOtlet).not.toBeNull();
      expect(resOtlet?.id).toBe('paul-otlet');
    });

    it('deve retornar sugestões pertinentes de termos curados', () => {
      const sugestoes = dicionarioService.buscarSugestoes('c', 5);
      expect(sugestoes.length).toBeGreaterThan(0);
      expect(sugestoes.length).toBeLessThanOrEqual(5);
    });

    it('deve localizar com precisao termos canonicos recem-expandidos como CDD, CDU, MARC 21 e AACR2r', () => {
      const resCDD = dicionarioService.buscarTermoLocal('CDD');
      expect(resCDD?.id).toBe('cdd-dewey');

      const resCDU = dicionarioService.buscarTermoLocal('CDU');
      expect(resCDU?.id).toBe('cdu-universal');

      const resMARC = dicionarioService.buscarTermoLocal('MARC 21');
      expect(resMARC?.id).toBe('marc21');

      const resAACR = dicionarioService.buscarTermoLocal('AACR2');
      expect(resAACR?.id).toBe('aacr2r');

      const resVergueiro = dicionarioService.buscarTermoLocal('Vergueiro');
      expect(resVergueiro?.id).toBe('waldomiro-vergueiro-colecoes');
    });

    it('deve localizar o novo termo canônico Indexação Coordenada com precisão', () => {
      const res = dicionarioService.buscarTermoLocal('Indexação de Coordenada');
      expect(res).not.toBeNull();
      expect(res?.id).toBe('indexacao-coordenada');
      expect(res?.geradoPorIA).toBeFalsy();
    });

    it('deve retornar estado sóbrio e determinístico sem IA quando o termo não existe na base (Regra D.3)', async () => {
      const resultado = await dicionarioService.buscarOuGerarDefinicao('TermoInexistenteXYZ123');
      expect(resultado).toBeDefined();
      expect(resultado.termo).toBe('TermoInexistenteXYZ123');
      expect(resultado.ausente).toBe(true);
      expect(resultado.geradoPorIA).toBe(false);
      expect(resultado.conceitoCanonico).toContain('Este termo ainda não consta no Glossário canônico');
      expect(resultado.fonte.referencia).toContain('Regra D.3');
    });

    it('deve suportar singularização automática em português (plurais -> singular)', () => {
      const resPlural = dicionarioService.buscarTermoLocal('ontologias');
      expect(resPlural).not.toBeNull();
      expect(resPlural?.id).toBe('ontologias-web-semantica');

      const resMetadados = dicionarioService.buscarTermoLocal('metadado');
      expect(resMetadados).not.toBeNull();
      expect(resMetadados?.id).toBe('metadados-tipos');
    });

    it('deve resolver siglas canônicas essenciais em 0ms (PREMIS, METS, RDC-Arq, PHA, Lotka, Zipf)', () => {
      expect(dicionarioService.buscarTermoLocal('PREMIS')?.id).toBe('premis');
      expect(dicionarioService.buscarTermoLocal('METS')?.id).toBe('mets');
      expect(dicionarioService.buscarTermoLocal('RDC-Arq')?.id).toBe('rdc-arq');
      expect(dicionarioService.buscarTermoLocal('PHA')?.id).toBe('tabela-pha');
      expect(dicionarioService.buscarTermoLocal('Lotka')?.id).toBe('lei-de-lotka');
      expect(dicionarioService.buscarTermoLocal('Zipf')?.id).toBe('lei-de-zipf');
    });
  });

  describe('useDicionarioStore', () => {
    it('deve abrir modal com busca vazia ao acionar abrirBuscaVazia', () => {
      useDicionarioStore.getState().abrirBuscaVazia();
      const state = useDicionarioStore.getState();
      expect(state.isModalOpen).toBe(true);
      expect(state.termoAtivo).toBeNull();
      expect(state.termoQuery).toBe('');
    });

    it('deve carregar e armazenar termo no histórico ao acionar abrirDicionario', async () => {
      await useDicionarioStore.getState().abrirDicionario('IFLA LRM');
      const state = useDicionarioStore.getState();
      expect(state.isModalOpen).toBe(true);
      expect(state.termoAtivo).not.toBeNull();
      expect(state.termoAtivo?.id).toBe('ifla-lrm');
      expect(state.historicoConsultas).toContain(state.termoAtivo?.termo);
    });

    it('deve fechar modal corretamente', () => {
      useDicionarioStore.getState().abrirBuscaVazia();
      expect(useDicionarioStore.getState().isModalOpen).toBe(true);

      useDicionarioStore.getState().fecharDicionario();
      expect(useDicionarioStore.getState().isModalOpen).toBe(false);
    });
  });

  describe('useProgressStore - Vocabulário Salvo', () => {
    it('deve permitir salvar e remover termos do baralho de vocabulário do candidato', () => {
      const termo = BASE_TERMOS_DICIONARIO[0];
      const { salvarTermoVocabulario, removerTermoVocabulario, isTermoSalvo } = useProgressStore.getState();

      expect(isTermoSalvo(termo.id)).toBe(false);

      salvarTermoVocabulario({
        id: termo.id,
        termo: termo.termo,
        area: termo.area || 'Geral',
        dataSalvamento: new Date().toISOString(),
        definicaoCurta: (termo.conceitoCanonico || '').slice(0, 100),
        armadilhaResumo: (termo.armadilhaCebraspe || '').slice(0, 100),
      });
      expect(isTermoSalvo(termo.id)).toBe(true);
      expect(useProgressStore.getState().termosSalvos.length).toBe(1);

      removerTermoVocabulario(termo.id);
      expect(isTermoSalvo(termo.id)).toBe(false);
      expect(useProgressStore.getState().termosSalvos.length).toBe(0);
    });
  });
});

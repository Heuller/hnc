import { describe, it, expect } from 'vitest';
import {
  destacarGatilho,
  limparPrefixoGabarito,
  separarTecnica,
  situacaoResposta,
  exigeAutoexplicacao,
  mensagemCalibracao,
} from '../domain/estudoReverso';

describe('Estudo Reverso - Funções Puras', () => {
  describe('destacarGatilho', () => {
    it('retorna o item inteiro como não decisivo se não houver gatilho', () => {
      const item = 'O princípio da conveniência do usuário orienta a catalogação.';
      const trechos = destacarGatilho(item);
      expect(trechos).toHaveLength(1);
      expect(trechos[0]).toEqual({ texto: item, decisivo: false });
    });

    it('isola o gatilho corretamente', () => {
      const item = 'A criação de tesauros visa à preservação do documento.';
      const gatilho = 'preservação do documento';
      const trechos = destacarGatilho(item, gatilho);
      expect(trechos).toEqual([
        { texto: 'A criação de tesauros visa à ', decisivo: false },
        { texto: 'preservação do documento', decisivo: true },
        { texto: '.', decisivo: false },
      ]);
    });

    it('tolera variações de múltiplos espaços no gatilho', () => {
      const item = 'O item afirma que   x   é igual a y.';
      const gatilho = 'que x é';
      const trechos = destacarGatilho(item, gatilho);
      const decisivo = trechos.find((t) => t.decisivo);
      expect(decisivo).toBeDefined();
      expect(decisivo?.texto).toBe('que   x   é');
    });
  });

  describe('limparPrefixoGabarito', () => {
    it('remove prefixo Gabarito CERTO.', () => {
      expect(limparPrefixoGabarito('Gabarito CERTO. Conforme art. 5º...')).toBe('Conforme art. 5º...');
      expect(limparPrefixoGabarito('Gabarito oficial ERRADO: A lei veda...')).toBe('A lei veda...');
      expect(limparPrefixoGabarito('Correto sem prefixo formal')).toBe('Correto sem prefixo formal');
    });
  });

  describe('separarTecnica', () => {
    it('extrai técnica e explicação quando formatado com Técnica: Nome.', () => {
      const armadilha = 'Técnica: Inversão Conceitual. A banca inverteu o sujeito com o predicado.';
      const res = separarTecnica(armadilha);
      expect(res.tecnica).toBe('Inversão Conceitual');
      expect(res.explicacao).toBe('A banca inverteu o sujeito com o predicado.');
    });

    it('retorna apenas explicação quando não tem prefixo Técnica:', () => {
      const armadilha = 'Pegadinha comum da banca.';
      const res = separarTecnica(armadilha);
      expect(res.tecnica).toBeUndefined();
      expect(res.explicacao).toBe('Pegadinha comum da banca.');
    });
  });

  describe('situacaoResposta', () => {
    it('determina acerto, erro e branco', () => {
      expect(situacaoResposta('C', 'C')).toBe('acerto');
      expect(situacaoResposta('E', 'E')).toBe('acerto');
      expect(situacaoResposta('C', 'E')).toBe('erro');
      expect(situacaoResposta('E', 'C')).toBe('erro');
      expect(situacaoResposta('BRANCO', 'C')).toBe('branco');
      expect(situacaoResposta(undefined, 'E')).toBe('branco');
    });
  });

  describe('exigeAutoexplicacao', () => {
    it('exige para erro e branco', () => {
      expect(exigeAutoexplicacao('erro', 'certeza')).toBe(true);
      expect(exigeAutoexplicacao('erro', 'provavel')).toBe(true);
      expect(exigeAutoexplicacao('erro', 'chute')).toBe(true);
      expect(exigeAutoexplicacao('branco', undefined)).toBe(true);
    });

    it('exige para acerto no chute', () => {
      expect(exigeAutoexplicacao('acerto', 'chute')).toBe(true);
    });

    it('não exige para acerto com convicção ou probabilidade', () => {
      expect(exigeAutoexplicacao('acerto', 'certeza')).toBe(false);
      expect(exigeAutoexplicacao('acerto', 'provavel')).toBe(false);
    });
  });

  describe('mensagemCalibracao', () => {
    it('gera mensagem de erro com certeza', () => {
      const msg = mensagemCalibracao('erro', 'certeza');
      expect(msg?.tom).toBe('alerta');
      expect(msg?.titulo).toContain('Erro com certeza');
    });

    it('gera mensagem de acerto no chute', () => {
      const msg = mensagemCalibracao('acerto', 'chute');
      expect(msg?.tom).toBe('atencao');
      expect(msg?.titulo).toContain('Acerto no chute');
    });

    it('retorna null para acerto com certeza', () => {
      expect(mensagemCalibracao('acerto', 'certeza')).toBeNull();
    });
  });
});

import { describe, it, expect, afterEach, vi } from 'vitest';
import handler, { montarAvaliacao } from '../../api/evaluate-discursiva';

const criterios = [
  { item: 'Conceito', pontuacaoMaxima: 7.5 },
  { item: 'Aplicação', pontuacaoMaxima: 7.5 },
];

describe('api/evaluate-discursiva: montarAvaliacao', () => {
  const texto = 'O catálogo permite a recuperação. No entanto o bibliotecário deve padronizar os pontos de acesso.';

  it('limita a nota de cada quesito ao máximo e soma NC dentro do teto', () => {
    const av = montarAvaliacao(
      {
        itensConteudoAvaliados: [
          { notaAtribuida: 99, justificativa: 'a' },
          { notaAtribuida: -3, justificativa: 'b' },
        ],
        errosGramaticaisIdentificados: [],
      },
      { tipo: 'questao_20', textoCandidato: texto, totalLinhas: 10, criterios }
    );
    expect(av.criterios.map((c) => c.notaObtida)).toEqual([7.5, 0]);
    expect(av.notaConteudo).toBe(7.5);
    expect(av.notaFinal).toBe(7.5);
  });

  it('descarta erro cujo trecho não existe no texto do candidato e erros repetidos', () => {
    const av = montarAvaliacao(
      {
        itensConteudoAvaliados: [{ notaAtribuida: 7 }, { notaAtribuida: 7 }],
        errosGramaticaisIdentificados: [
          { tipo: 'pontuacao', trecho: 'no entanto o bibliotecário', sugestao: 'no entanto, o bibliotecário', explicacao: 'vírgula' },
          { tipo: 'pontuacao', trecho: 'No entanto o bibliotecário', sugestao: 'x', explicacao: 'duplicado' },
          { tipo: 'grafia', trecho: 'trecho inventado pelo modelo', sugestao: 'y', explicacao: 'alucinação' },
        ],
      },
      { tipo: 'questao_20', textoCandidato: texto, totalLinhas: 10, criterios }
    );
    expect(av.numErrosGramaticais).toBe(1);
    expect(av.descontoGramatical).toBe(0.3);
    expect(av.notaFinal).toBe(13.7);
    expect(av.errosGramaticais[0].tipo).toBe('pontuacao');
  });

  it('usa a fórmula da peça técnica (fator 6) e a referência de 50% (NFPD >= 30 de 60)', () => {
    const av = montarAvaliacao(
      {
        itensConteudoAvaliados: [{ notaAtribuida: 14 }],
        errosGramaticaisIdentificados: [],
      },
      { tipo: 'peca_50', textoCandidato: texto, totalLinhas: 40, criterios: [{ item: 'Tudo', pontuacaoMaxima: 30 }] }
    );
    expect(av.notaFinal).toBe(14);
    expect(av.situacao).toBe('ELIMINADO');
    const ok = montarAvaliacao(
      { itensConteudoAvaliados: [{ notaAtribuida: 15 }], errosGramaticaisIdentificados: [] },
      { tipo: 'peca_50', textoCandidato: texto, totalLinhas: 40, criterios: [{ item: 'Tudo', pontuacaoMaxima: 30 }] }
    );
    expect(ok.situacao).toBe('HABILITADO');
  });

  it('nunca inventa conteúdo quando o modelo devolve lixo', () => {
    const av = montarAvaliacao({}, { tipo: 'questao_20', textoCandidato: texto, totalLinhas: 10, criterios });
    expect(av.notaConteudo).toBe(0);
    expect(av.numErrosGramaticais).toBe(0);
    expect(av.parecerGeralExaminador).toBe('');
  });
});

describe('api/evaluate-discursiva: handler sem chave de IA', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('responde 503 AI_NOT_CONFIGURED e não devolve nota', async () => {
    vi.stubEnv('NODE_ENV', 'test');
    vi.stubEnv('GEMINI_API_KEY', '');
    vi.stubEnv('GOOGLE_API_KEY', '');
    const res: any = {
      statusCode: 0,
      body: undefined as any,
      setHeader: vi.fn(),
      status(c: number) {
        this.statusCode = c;
        return this;
      },
      json(b: any) {
        this.body = b;
        return this;
      },
    };
    await handler(
      {
        method: 'POST',
        headers: { authorization: 'Bearer mock-valid-token' },
        body: { tipo: 'questao_20', textoCandidato: 'x'.repeat(80) },
      },
      res
    );
    expect(res.statusCode).toBe(503);
    expect(res.body.code).toBe('AI_NOT_CONFIGURED');
    expect(res.body.notaFinal).toBeUndefined();
  });
});

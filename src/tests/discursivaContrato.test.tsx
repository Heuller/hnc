// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import handler from '../../api/evaluate-discursiva';
import { validarAvaliacaoDiscursiva } from '../domain/discursiva/validarAvaliacao';
import { discursivaService } from '../domain/discursiva/discursivaService';
import { TEMAS_OFICIAIS_DISCURSIVA } from '../domain/discursiva/temasOficiais';
import { EspelhoCorrecaoCebraspe } from '../components/discursiva/EspelhoCorrecaoCebraspe';
import { avaliacaoFixture } from './fixtures/avaliacaoDiscursiva';

const tema = TEMAS_OFICIAIS_DISCURSIVA[0];
const texto = 'O desbastamento exige análise técnica da coleção e uma política explícita de desenvolvimento de acervo.';
const resposta = (body: unknown, status = 200) => ({ ok: status === 200, status, json: async () => body });

beforeEach(() => localStorage.clear());
afterEach(() => { cleanup(); vi.unstubAllGlobals(); vi.unstubAllEnvs(); });

describe('Contrato e honestidade do feedback de discursiva', () => {
  it.each([401, 429, 500, 503])('HTTP %s não fabrica nota nem salva avaliação', async status => {
    vi.stubGlobal('fetch', vi.fn(async () => resposta({ error: 'indisponível' }, status)));
    await expect(discursivaService.avaliarRedacao(tema, texto, 20)).rejects.toThrow('Seu texto foi mantido');
    expect(discursivaService.listarAvaliacoesLocais()).toEqual([]);
  });

  it('recusa o antigo fallback HTTP 200 e uma resposta sem contrato', async () => {
    for (const body of [{ ...avaliacaoFixture(tema), modoDeterministico: true }, { notaFinal: 11.1 }]) {
      vi.stubGlobal('fetch', vi.fn(async () => resposta(body)));
      await expect(discursivaService.avaliarRedacao(tema, texto, 20)).rejects.toThrow('Seu texto foi mantido');
    }
    expect(discursivaService.listarAvaliacoesLocais()).toEqual([]);
  });

  it('recusa notas incoerentes, trechos inexistentes e avaliações de outro tema', () => {
    const valid = avaliacaoFixture(tema);
    for (const body of [
      { ...valid, temaId: 'outro' }, { ...valid, notaFinal: 14 },
      { ...valid, notaConteudo: 14 },
      { ...valid, errosGramaticais: [{ linha: 2, trecho: 'no entanto o bibliotecário', correcao: 'no entanto, o bibliotecário', explicacao: 'teste', tipo: 'pontuacao' }] },
      { ...valid, id: 'eval-offline-legado' },
    ]) expect(() => validarAvaliacaoDiscursiva(body, tema, texto)).toThrow();
    const fracionada = { ...valid, totalLinhas: 16, numErrosGramaticais: 2, descontoGramatical: 0.38, notaFinal: 11.63,
      errosGramaticais: ['desbastamento', 'política'].map(trecho => ({ linha: 1, trecho, correcao: trecho, explicacao: 'Apontamento de teste.', tipo: 'outro' })) };
    expect(validarAvaliacaoDiscursiva(fracionada, tema, texto).notaFinal).toBe(11.63);
  });

  it('uma avaliação validada atravessa o serviço e renderiza quesitos no espelho', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => resposta(avaliacaoFixture(tema))));
    const a = await discursivaService.avaliarRedacao(tema, texto, 20);
    render(<EspelhoCorrecaoCebraspe avaliacao={a} />);
    expect(screen.getByText('Avaliação formativa de teste.')).toBeTruthy();
    expect(screen.getAllByText(tema.criteriosPontuacao[0].item).length).toBeGreaterThan(0);
    expect(discursivaService.listarAvaliacoesLocais()[0].temaId).toBe(tema.id);
  });

  it('o handler sem serviço configurado retorna 503 em vez de uma nota sintética', async () => {
    vi.stubEnv('NODE_ENV', 'test'); vi.stubEnv('GEMINI_API_KEY', ''); vi.stubEnv('GOOGLE_API_KEY', '');
    let status = 0; let body: any;
    const res = { setHeader() {}, status(code: number) { status = code; return this; }, json(value: unknown) { body = value; return this; } };
    await handler({ method: 'POST', headers: { authorization: 'Bearer mock-valid-token' }, body: { temaId: tema.id, titulo: tema.titulo, tipo: tema.tipo, textoCandidato: texto, linhasEstimadas: 20, criteriosPontuacao: tema.criteriosPontuacao } }, res);
    expect(status).toBe(503); expect(body.code).toBe('EVALUATION_UNAVAILABLE'); expect(body.notaFinal).toBeUndefined();
  });

  it('adapta o fornecedor no handler e entrega o mesmo contrato consumido pelo espelho', async () => {
    vi.stubEnv('NODE_ENV', 'test'); vi.stubEnv('GEMINI_API_KEY', 'chave-ficticia-de-teste');
    const fornecedor = {
      parecerMacroestrutural: 'Feedback formativo do fornecedor simulado.',
      itensConteudoAvaliados: tema.criteriosPontuacao.map(c => ({ notaAtribuida: c.pontuacaoMaxima, justificativa: 'Critério atendido no exemplo de teste.' })),
      errosGramaticaisIdentificados: [], pontosFortes: [], pontosMelhoria: [],
    };
    vi.stubGlobal('fetch', vi.fn(async () => resposta({ candidates: [{ content: { parts: [{ text: JSON.stringify(fornecedor) }] } }] })));
    let status = 0; let body: unknown;
    const res = { setHeader() {}, status(code: number) { status = code; return this; }, json(value: unknown) { body = value; return this; } };
    await handler({ method: 'POST', headers: { authorization: 'Bearer mock-valid-token' }, body: { temaId: tema.id, tipo: tema.tipo, textoCandidato: texto, linhasEstimadas: 20, criteriosPontuacao: tema.criteriosPontuacao } }, res);
    expect(status).toBe(200);
    const avaliada = validarAvaliacaoDiscursiva(body, tema, texto);
    expect(avaliada.notaFinal).toBe(15);
    render(<EspelhoCorrecaoCebraspe avaliacao={avaliada} />);
    expect(screen.getByText('Feedback formativo do fornecedor simulado.')).toBeTruthy();
  });
});

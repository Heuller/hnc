import { describe, it, expect } from 'vitest';
import { ALL_SIMULADOS_REGISTRY } from '../content/simuladosRegistry';
import { obterInfoProveniencia } from '../domain/proveniencia';
import { CebraspeQuestionSchema } from '../domain/schemas/question.schema';

describe('P18 — Auditoria e Trava de Regressão da Proveniência Honesta das Questões', () => {
  const todasQuestoes = ALL_SIMULADOS_REGISTRY.flatMap((s) => s.questoes);

  it('garante que ZERO questão no acervo inteiro possui o tipo legado "cebraspe-real"', () => {
    const legados = todasQuestoes.filter(
      // @ts-expect-error verificação defensiva contra tipo legado
      (q) => q.fonteOriginal?.tipo === 'cebraspe-real'
    );
    expect(legados).toHaveLength(0);
  });

  it('assegura que todas as questões possuem tipo válido no padrão P18 ("real-confirmada" | "adaptada" | "inedita")', () => {
    todasQuestoes.forEach((q) => {
      expect(q.fonteOriginal).toBeDefined();
      expect(['real-confirmada', 'adaptada', 'inedita']).toContain(q.fonteOriginal.tipo);
    });
  });

  it('exige que 100% dos itens "real-confirmada" possuam provaId e ano válidos', () => {
    const reais = todasQuestoes.filter((q) => q.fonteOriginal.tipo === 'real-confirmada');
    expect(reais.length).toBeGreaterThan(0);

    reais.forEach((q) => {
      expect(q.fonteOriginal.provaId).toBeDefined();
      expect(q.fonteOriginal.provaId!.trim().length).toBeGreaterThan(2);
      expect(q.fonteOriginal.ano).toBeDefined();
      expect(typeof q.fonteOriginal.ano).toBe('number');
      expect(q.fonteOriginal.ano).toBeGreaterThanOrEqual(2000);
      expect(q.fonteOriginal.verificado).toBe(true);

      // Validação estrita via Zod Schema
      const parseResult = CebraspeQuestionSchema.safeParse(q);
      expect(parseResult.success).toBe(true);
    });
  });

  it('exige que 100% dos itens "adaptada" possuam identificador da prova ou questão original', () => {
    const adaptadas = todasQuestoes.filter((q) => q.fonteOriginal.tipo === 'adaptada');
    expect(adaptadas.length).toBeGreaterThan(0);

    adaptadas.forEach((q) => {
      const temIdOriginal = Boolean(q.fonteOriginal.provaId || q.fonteOriginal.questaoOriginalId);
      expect(temIdOriginal).toBe(true);
      expect(q.fonteOriginal.verificado).toBe(true);
    });
  });

  it('garante que itens "inedita" possuem verificado: false (padrão de honestidade)', () => {
    const ineditas = todasQuestoes.filter((q) => q.fonteOriginal.tipo === 'inedita');
    expect(ineditas.length).toBeGreaterThan(0);

    ineditas.forEach((q) => {
      expect(q.fonteOriginal.verificado).toBe(false);
    });
  });

  it('assegura que o formatador UI de proveniência nunca exibe banca e ano para itens inéditos', () => {
    const infoIneditaSemOrigem = obterInfoProveniencia({
      tipo: 'inedita',
      descricao: 'Inédita, sem prova de origem',
      verificado: false,
      declaracaoLegada: 'CEBRASPE / PC-DF / 2025',
    });
    expect(infoIneditaSemOrigem.rotulo).toBe('Inédita, sem prova de origem');
    expect(infoIneditaSemOrigem.rotulo).not.toContain('PC-DF');
    expect(infoIneditaSemOrigem.rotulo).not.toContain('2025');

    const infoReal = obterInfoProveniencia({
      tipo: 'real-confirmada',
      descricao: 'Cebraspe / TSE / 2024',
      verificado: true,
      provaId: 'TecConcursos-3202811',
      ano: 2024,
      orgao: 'TSE',
    });
    expect(infoReal.rotulo).toBe('Prova real: TSE 2024');
    expect(infoReal.detalhe).toBe('#3202811');

    const infoAdaptada = obterInfoProveniencia({
      tipo: 'adaptada',
      descricao: 'Cebraspe / SUFRAMA / 2014 (Adaptada)',
      verificado: true,
      provaId: 'Biblio (SUFRAMA)/SUFRAMA/2014',
      ano: 2014,
      orgao: 'SUFRAMA',
    });
    expect(infoAdaptada.rotulo).toBe('Adaptada (SUFRAMA 2014)');
  });
});

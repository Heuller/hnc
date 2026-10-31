import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { revisoesIndividuais, disposicoesHistoricas } from './helpers/revisoesIndividuais';
import { simuladoIngles100Q } from '../content/questions/m12-ingles-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';
import { ALL_SIMULADOS_REGISTRY, getSimuladoById } from '../content/simuladosRegistry';
import { obterInfoProveniencia, obterTextoRodapeProveniencia } from '../domain/proveniencia';
import { elegivelParaEstudo } from '../domain/questoesElegiveis';
import type { CebraspeQuestion } from '../domain/types';

describe('Passo 1 (Prompt C8) — Itens de Inglês em Conferência: Rótulo e Texto Honestos', () => {
  const csvPath = 'real_confirmada_divergentes.csv';
  const csvLines = fs.readFileSync(csvPath, 'utf8').trim().split('\n').slice(1);
  const ids33 = csvLines.map((line) => line.split(',')[0].trim());

  const todasQuestoesMap = new Map<string, CebraspeQuestion>();
  [...simuladoIngles100Q, ...megaSimuladoCamara120Q, ...simuladoOficialCamara180Q].forEach((q) => {
    todasQuestoesMap.set(q.id, q);
  });

  it('1. Os 33 IDs preservam origem não confirmada e têm disposição editorial rastreável', () => {
    expect(ids33.length).toBe(33);

    for (const id of ids33) {
      const q = todasQuestoesMap.get(id);
      expect(q, `Questão ${id} deve existir no acervo`).toBeDefined();
      expect(q?.fonteOriginal?.tipo, `Origem do item ${id}`).toBe(revisoesIndividuais.has(id) ? 'adaptada' : 'em-conferencia');
      expect(q?.fonteOriginal?.verificado, `Item ${id} não pode estar verificado`).toBe(false);
      expect(q?.fonteOriginal?.revisar).toBe(!disposicoesHistoricas.has(id));
      expect(q?.fonteOriginal?.statusConferencia).toBe(disposicoesHistoricas.has(id) ? undefined : 'em-conferencia');
      if (disposicoesHistoricas.has(id)) {
        expect(disposicoesHistoricas.get(id)?.origemOficialConfirmada).toBe(false);
        expect(disposicoesHistoricas.get(id)?.motivo).toContain('Fundamento');
        expect(revisoesIndividuais.get(id)?.nota).toContain('DISPOSIÇÃO EDITORIAL');
      }
    }
  });

  it('2. Itens pendentes mantêm advertência; adaptações revisadas têm conteúdo individual registrado', () => {
    const textoNeutro = 'Item em conferência: o gabarito desta plataforma diverge do acervo consultado. Consulte o espelho oficial do Cebraspe antes de estudar por este item.';

    for (const id of ids33) {
      const q = todasQuestoesMap.get(id);
      const revisao = revisoesIndividuais.get(id);
      expect(q?.justificativa, id).toBe(revisao ? revisao.patch.justificativa : textoNeutro);
      expect(q?.armadilhaBanca, id).toBe(revisao ? revisao.patch.armadilhaBanca : textoNeutro);
      if (revisao) expect(q?.item, id).toBe(revisao.patch.item);
    }
  });

  it('3. obterInfoProveniencia gera rótulo "Em conferência" e isEmConferencia = true', () => {
    const info = obterInfoProveniencia({
      tipo: 'em-conferencia',
      descricao: 'Item em conferência',
      verificado: false,
      revisar: true,
      statusConferencia: 'em-conferencia',
    });

    expect(info.rotulo).toBe('Em conferência');
    expect(info.isEmConferencia).toBe(true);
    expect(info.isReal).toBe(false);
    expect(info.isInedita).toBe(false);
    expect(info.verificado).toBe(false);
    expect(info.badgeClass).toContain('rose');

    const rodape = obterTextoRodapeProveniencia({
      tipo: 'em-conferencia',
      descricao: 'Item em conferência',
      verificado: false,
      revisar: true,
    });
    expect(rodape).toContain('Item em conferência');
    expect(rodape).toContain('espelho oficial do Cebraspe');
  });

  it('4. elegivelParaEstudo rejeita estritamente itens com tipo em-conferencia e revisar true', () => {
    for (const id of ids33) {
      const q = todasQuestoesMap.get(id)!;
      expect(elegivelParaEstudo(q)).toBe(disposicoesHistoricas.has(id));
      expect(elegivelParaEstudo({ ...q, revisar: true })).toBe(false);
      expect(elegivelParaEstudo({ ...q, fonteOriginal: { ...q.fonteOriginal, tipo: 'em-conferencia' } })).toBe(false);
    }

    const itemNormal: CebraspeQuestion = {
      id: 'item-teste-valido',
      numero: 1,
      item: 'Assertiva de teste válida',
      gabarito: 'C',
      justificativa: 'Justificativa válida de teste',
      dificuldade: 'media',
      submoduloId: '1.1',
      fonteOriginal: {
        tipo: 'real-confirmada',
        descricao: 'Prova Teste',
        provaId: 'TEST-2026',
        ano: 2026,
        verificado: true,
      },
    } as any;

    expect(elegivelParaEstudo(itemNormal)).toBe(true);
  });

  it('liberação dos 59 itens exige registro específico, revisão e origem não certificada', () => {
    expect(disposicoesHistoricas.size).toBe(59);
    const mapa = new Map(ALL_SIMULADOS_REGISTRY.flatMap(s => s.questoes).map(q => [q.id, q]));
    for (const [id, disposicao] of disposicoesHistoricas) {
      expect(disposicao.situacao).toBe('adaptacao-revisada-liberada');
      expect(disposicao.origemOficialConfirmada).toBe(false);
      expect(revisoesIndividuais.get(id)?.nota).toContain('DISPOSIÇÃO EDITORIAL');
      expect(mapa.get(id)?.fonteOriginal.tipo).toBe('adaptada');
      expect(mapa.get(id)?.fonteOriginal.verificado).toBe(false);
      expect(mapa.get(id)?.fonteOriginal.declaracaoLegada).toContain('Bloqueio histórico');
    }
  });

  it('5. Nenhum item com tipo em-conferencia aparece nas questões ativas de simulados no registro', () => {
    for (const simulado of ALL_SIMULADOS_REGISTRY) {
      const emConf = simulado.questoes.filter((q) => q.fonteOriginal?.tipo === 'em-conferencia');
      expect(emConf, `Simulado ${simulado.id} não pode conter itens em-conferencia`).toHaveLength(0);
    }
  });

  it('6. O Simulado Oficial Câmara 2027 ativo não contém nenhum item em conferência', () => {
    const simOficial = getSimuladoById('simulado-oficial-camara-2027');
    expect(simOficial).toBeDefined();

    const emConf = simOficial.questoes.filter((q) => q.fonteOriginal?.tipo === 'em-conferencia');
    expect(emConf).toHaveLength(0);

    const revisar = simOficial.questoes.filter((q) => q.fonteOriginal?.revisar);
    expect(revisar).toHaveLength(0);
  });
});

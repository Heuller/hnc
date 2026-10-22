import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
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

  it('1. Todos os 33 IDs existem e possuem tipo em-conferencia, verificado false e revisar true', () => {
    expect(ids33.length).toBe(33);

    for (const id of ids33) {
      const q = todasQuestoesMap.get(id);
      expect(q, `Questão ${id} deve existir no acervo`).toBeDefined();
      expect(q?.fonteOriginal?.tipo, `Item ${id} deve ter tipo em-conferencia`).toBe('em-conferencia');
      expect(q?.fonteOriginal?.verificado, `Item ${id} não pode estar verificado`).toBe(false);
      expect(q?.fonteOriginal?.revisar, `Item ${id} deve estar com flag revisar`).toBe(true);
      expect(q?.fonteOriginal?.statusConferencia, `Item ${id} deve ter statusConferencia em-conferencia`).toBe('em-conferencia');
    }
  });

  it('2. Todos os 33 itens possuem justificativa e armadilha com texto neutro de advertência', () => {
    const textoNeutro = 'Item em conferência: o gabarito desta plataforma diverge do acervo consultado. Consulte o espelho oficial do Cebraspe antes de estudar por este item.';

    for (const id of ids33) {
      const q = todasQuestoesMap.get(id);
      expect(q?.justificativa, `Justificativa do item ${id} deve ser o texto neutro`).toBe(textoNeutro);
      expect(q?.armadilhaBanca, `Armadilha do item ${id} deve ser o texto neutro`).toBe(textoNeutro);
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
      expect(elegivelParaEstudo(q), `Item ${id} não deve ser elegível para estudo`).toBe(false);
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

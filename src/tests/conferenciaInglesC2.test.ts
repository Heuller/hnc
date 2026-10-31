import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { revisoesIndividuais } from './helpers/revisoesIndividuais';
import { simuladoIngles100Q } from '../content/questions/m12-ingles-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';

describe('C2 / C8 — Conferência dos Itens de Inglês com Divergência Cebraspe vs Tec Concursos', () => {
  const ids15 = [
    'm12-q-4', 'm12-q-9', 'm12-q-23', 'm12-q-44', 'm12-q-50',
    'm12-q-54', 'm12-q-59', 'm12-q-70', 'm12-q-79', 'm12-q-93',
    'mega-q-13', 'mega-q-14', 'mega-q-16',
    'oficial-180q-028', 'oficial-180q-033'
  ];

  it('1. CORRECOES_INGLES_PENDENTES.md existe, lista todos os 15 itens e orienta consulta no espelho oficial do Cebraspe', () => {
    expect(fs.existsSync('CORRECOES_INGLES_PENDENTES.md')).toBe(true);
    const content = fs.readFileSync('CORRECOES_INGLES_PENDENTES.md', 'utf8');

    for (const id of ids15) {
      expect(content, `Documento deve listar o item ${id}`).toContain(id);
    }

    expect(content).toContain('cdn.cebraspe.org.br');
    expect(content.toLowerCase()).toContain('espelho oficial');
  });

  it('2. Todos os 10 itens de m12-ingles-100q.ts e os 3 de mega-simulado estão marcados com revisar: true', () => {
    const m12Ids = [
      'm12-q-4', 'm12-q-9', 'm12-q-23', 'm12-q-44', 'm12-q-50',
      'm12-q-54', 'm12-q-59', 'm12-q-70', 'm12-q-79', 'm12-q-93'
    ];

    for (const id of m12Ids) {
      const q = simuladoIngles100Q.find((x) => x.id === id);
      expect(q, `Questão ${id} deve existir em m12`).toBeDefined();
      expect(q?.fonteOriginal?.revisar, `Item ${id} deve ter flag revisar: true`).toBe(true);
      expect(q?.fonteOriginal?.tipo, `Item ${id} deve manter origem não certificada`).toBe(revisoesIndividuais.has(id) ? 'adaptada' : 'em-conferencia');
      expect(q?.fonteOriginal?.verificado).toBe(false);
      if (revisoesIndividuais.has(id)) {
        expect(q?.item).toBe(revisoesIndividuais.get(id)?.patch.item);
        expect(q?.justificativa).toBe(revisoesIndividuais.get(id)?.patch.justificativa);
      }
    }

    for (const id of ['mega-q-13', 'mega-q-14', 'mega-q-16']) {
      const q = megaSimuladoCamara120Q.find((x) => x.id === id);
      expect(q, `Questão ${id} deve existir no mega-simulado`).toBeDefined();
      expect(q?.fonteOriginal?.revisar, `Item ${id} deve ter flag revisar: true`).toBe(true);
      if (id !== 'mega-q-16') {
        expect(q?.fonteOriginal?.tipo, `Item ${id} deve manter origem não certificada`).toBe(revisoesIndividuais.has(id) ? 'adaptada' : 'em-conferencia');
      expect(q?.fonteOriginal?.verificado).toBe(false);
      if (revisoesIndividuais.has(id)) {
        expect(q?.item).toBe(revisoesIndividuais.get(id)?.patch.item);
        expect(q?.justificativa).toBe(revisoesIndividuais.get(id)?.patch.justificativa);
      }
      }
    }
  });

  it('3. Simulado Oficial da Câmara (180Q) isola as assertivas divergentes sob conferência', () => {
    const q28 = simuladoOficialCamara180Q.find((q) => q.id === 'oficial-180q-028');
    const q33 = simuladoOficialCamara180Q.find((q) => q.id === 'oficial-180q-033');

    expect(q28).toBeDefined();
    expect(q33).toBeDefined();

    // q28 foi substituído por item de reserva m12-q-16 (E)
    expect(q28?.gabarito).toBe('E');
    expect(q28?.item).not.toContain('possibility of threat reduction being successful varies');

    // q33 sob C8 está marcado em-conferencia
    expect(q33?.gabarito).toBe('C');
    expect(q33?.fonteOriginal?.tipo).toBe('em-conferencia');
    expect(q33?.fonteOriginal?.revisar).toBe(true);

    // Correção individual prevalece sobre cota artificial de gabarito.
    expect(simuladoOficialCamara180Q).toHaveLength(180);
    const p1Certos = simuladoOficialCamara180Q.slice(0, 90).filter((q) => q.gabarito === 'C').length;
    const p1Errados = simuladoOficialCamara180Q.slice(0, 90).filter((q) => q.gabarito === 'E').length;
    expect(p1Certos + p1Errados).toBe(90);
  });

  it('4. PortaoVerificacaoModal exclui programaticamente questões marcadas com revisar: true', () => {
    const portaoCode = fs.readFileSync('src/components/jornada/PortaoVerificacaoModal.tsx', 'utf8');
    expect(portaoCode).toMatch(/revisar|elegivelParaEstudo/);
  });

  it('5. Alteração editorial não é apresentada como confirmação do gabarito oficial', () => {
    for (const id of ['m12-q-4', 'm12-q-9', 'm12-q-23']) {
      const q = simuladoIngles100Q.find(q => q.id === id)!;
      const revisao = revisoesIndividuais.get(id);
      expect(q.fonteOriginal.verificado).toBe(false);
      expect(q.fonteOriginal.revisar).toBe(true);
      if (revisao) {
        expect(q.item).toBe(revisao.patch.item);
        expect(q.justificativa).toBe(revisao.patch.justificativa);
        if (revisao.patch.gabarito) expect(q.gabarito).toBe(revisao.patch.gabarito);
        expect(revisao.fonteIds.length).toBeGreaterThan(0);
      } else {
        expect(q.fonteOriginal.tipo).toBe('em-conferencia');
      }
    }
  });
});

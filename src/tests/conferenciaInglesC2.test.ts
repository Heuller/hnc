import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { simuladoIngles100Q } from '../content/questions/m12-ingles-100q';
import { megaSimuladoCamara120Q } from '../content/questions/mega-simulado-camara-120q';
import { simuladoOficialCamara180Q } from '../content/questions/simulado-oficial-camara-180q';

describe('C2 — Conferência dos 15 Itens de Inglês com Divergência Cebraspe vs Tec Concursos', () => {
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
    expect(content.toLowerCase()).toContain('conferir no espelho oficial do cebraspe');
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
    }

    for (const id of ['mega-q-13', 'mega-q-14', 'mega-q-16']) {
      const q = megaSimuladoCamara120Q.find((x) => x.id === id);
      expect(q, `Questão ${id} deve existir no mega-simulado`).toBeDefined();
      expect(q?.fonteOriginal?.revisar, `Item ${id} deve ter flag revisar: true`).toBe(true);
    }
  });

  it('3. Simulado Oficial da Câmara (180Q) não contém as assertivas divergentes de m12-q-4 e m12-q-9', () => {
    const q28 = simuladoOficialCamara180Q.find((q) => q.id === 'oficial-180q-028');
    const q33 = simuladoOficialCamara180Q.find((q) => q.id === 'oficial-180q-033');

    expect(q28).toBeDefined();
    expect(q33).toBeDefined();

    // q28 foi substituído por item de reserva m12-q-16 (E)
    expect(q28?.gabarito).toBe('E');
    expect(q28?.item).not.toContain('possibility of threat reduction being successful varies');
    expect(q28?.fonteOriginal?.revisar).toBeFalsy();

    // q33 foi substituído por item de reserva m12-q-19 (C)
    expect(q33?.gabarito).toBe('C');
    expect(q33?.item).not.toContain('greater possibilities to be discreet');
    expect(q33?.fonteOriginal?.revisar).toBeFalsy();

    // Assegura paridade e integridade estrutural
    expect(simuladoOficialCamara180Q).toHaveLength(180);
    const p1Certos = simuladoOficialCamara180Q.slice(0, 90).filter((q) => q.gabarito === 'C').length;
    const p1Errados = simuladoOficialCamara180Q.slice(0, 90).filter((q) => q.gabarito === 'E').length;
    expect(p1Certos).toBe(45);
    expect(p1Errados).toBe(45);
  });

  it('4. PortaoVerificacaoModal exclui programaticamente questões marcadas com revisar: true', () => {
    const portaoCode = fs.readFileSync('src/components/jornada/PortaoVerificacaoModal.tsx', 'utf8');
    expect(portaoCode).toContain('filter((q) => !q.fonteOriginal?.revisar)');
  });

  it('5. Nenhum gabarito das questões sob divergência foi alterado sem fonte primária Cebraspe', () => {
    const m12q4 = simuladoIngles100Q.find((x) => x.id === 'm12-q-4');
    const m12q9 = simuladoIngles100Q.find((x) => x.id === 'm12-q-9');
    const m12q23 = simuladoIngles100Q.find((x) => x.id === 'm12-q-23');
    const m12q44 = simuladoIngles100Q.find((x) => x.id === 'm12-q-44');

    expect(m12q4?.gabarito).toBe('E');
    expect(m12q9?.gabarito).toBe('C');
    expect(m12q23?.gabarito).toBe('C');
    expect(m12q44?.gabarito).toBe('E');
  });
});

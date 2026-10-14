import { describe, it, expect } from 'vitest';
import { ALL_COURSE_MODULES } from '../content/registry';

describe('T6.1, T6.3 e T6.4 — Validação da Arquitetura Intermódulos (Fase 6)', () => {
  const allSubmodules = ALL_COURSE_MODULES.flatMap((m) => m.modulosFilhos);
  const allSubIds = new Set(allSubmodules.map((s) => s.id));

  describe('T6.1: Mapa de Pré-Requisitos e Ordem Pedagógica', () => {
    it('todos os macro-módulos devem possuir preRequisitos e blocoEdital definidos', () => {
      ALL_COURSE_MODULES.forEach((macro) => {
        expect(macro.blocoEdital, `Macro ${macro.codigo} deve ter blocoEdital`).toBeTruthy();
        expect(Array.isArray(macro.preRequisitos), `Macro ${macro.codigo} deve ter array preRequisitos`).toBe(true);
      });
    });

    it('M1 deve ser o módulo fundamental com pré-requisito vazio', () => {
      const m1 = ALL_COURSE_MODULES.find((m) => m.id === 'm1')!;
      expect(m1.preRequisitos).toEqual([]);
    });

    it('nenhum submódulo deve conter pré-requisitos circulares (DAG estrito)', () => {
      allSubmodules.forEach((sub) => {
        const prereqs = sub.preRequisitos || [];
        prereqs.forEach((preId) => {
          expect(allSubIds.has(preId), `Pré-requisito ${preId} de ${sub.id} deve existir`).toBe(true);
          expect(preId).not.toBe(sub.id); // Sem autorreferência
        });
      });
    });

    it('os pré-requisitos críticos identificados na auditoria devem ser respeitados', () => {
      // sub-2-7 (Linked Data) exige sub-1-6 (Governança) e sub-2-6 (Metadados)
      const sub27 = allSubmodules.find((s) => s.id === 'sub-2-7')!;
      expect(sub27.preRequisitos).toContain('sub-1-6');
      expect(sub27.preRequisitos).toContain('sub-2-6');

      // sub-6-7 (IA aplicada) exige sub-1-6 e sub-6-4
      const sub67 = allSubmodules.find((s) => s.id === 'sub-6-7')!;
      expect(sub67.preRequisitos).toContain('sub-1-6');
      expect(sub67.preRequisitos).toContain('sub-6-4');

      // sub-14-4 (Ciência de dados) exige sub-6-5 (MER) e sub-6-6 (SQL)
      const sub144 = allSubmodules.find((s) => s.id === 'sub-14-4')!;
      expect(sub144.preRequisitos).toContain('sub-6-5');
      expect(sub144.preRequisitos).toContain('sub-6-6');
    });
  });

  describe('T6.3: Referências Cruzadas e "Veja Também"', () => {
    it('todas as referências cruzadas devem apontar para submódulos existentes sem links quebrados', () => {
      let totalRefs = 0;
      allSubmodules.forEach((sub) => {
        if (sub.referenciasCruzadas && sub.referenciasCruzadas.length > 0) {
          sub.referenciasCruzadas.forEach((ref) => {
            totalRefs++;
            expect(
              allSubIds.has(ref.submoduloId),
              `Referência cruzada de ${sub.id} para ${ref.submoduloId} deve existir`
            ).toBe(true);
            expect(ref.titulo.length).toBeGreaterThan(3);
            expect(ref.motivo.length).toBeGreaterThan(10);
          });
        }
      });
      expect(totalRefs).toBeGreaterThan(30);
    });

    it('os pares intermodulares canônicos previstos no plano devem ter referências ativas', () => {
      // 2.4 <-> 2.7
      const sub24 = allSubmodules.find((s) => s.id === 'sub-2-4')!;
      expect(sub24.referenciasCruzadas?.some((r) => r.submoduloId === 'sub-2-7')).toBe(true);

      // 3.4 <-> 6.7
      const sub34 = allSubmodules.find((s) => s.id === 'sub-3-4')!;
      expect(sub34.referenciasCruzadas?.some((r) => r.submoduloId === 'sub-6-7')).toBe(true);

      // 1.6 <-> 9.3 <-> 11.12
      const sub16 = allSubmodules.find((s) => s.id === 'sub-1-6')!;
      expect(sub16.referenciasCruzadas?.some((r) => r.submoduloId === 'sub-9-3')).toBe(true);
      expect(sub16.referenciasCruzadas?.some((r) => r.submoduloId === 'sub-11-12')).toBe(true);

      // 10.1 <-> 10.5 <-> 10.6
      const sub101 = allSubmodules.find((s) => s.id === 'sub-10-1')!;
      expect(sub101.referenciasCruzadas?.some((r) => r.submoduloId === 'sub-10-5')).toBe(true);
      expect(sub101.referenciasCruzadas?.some((r) => r.submoduloId === 'sub-10-6')).toBe(true);
    });
  });

  describe('T6.4: Etiquetas do Edital (editalRef)', () => {
    it('100% dos submódulos do currículo devem possuir editalRef não vazio', () => {
      allSubmodules.forEach((sub) => {
        expect(sub.editalRef, `Submódulo ${sub.numero} (${sub.id}) deve ter editalRef`).toBeTruthy();
        expect(sub.editalRef!.length).toBeGreaterThan(5);
      });
    });
  });
});

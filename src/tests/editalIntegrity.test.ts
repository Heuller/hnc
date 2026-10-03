import { describe, it, expect } from 'vitest';
import { EDITAL_CAMARA_2026 } from '../domain/edital/matrizEdital2026';
import { COURSE_REGISTRY } from '../content/registry';

describe('Auditoria de Integridade do Edital nº 1/2026 (Fase E0)', () => {
  it('deve possuir dados cadastrais oficiais e válidos do concurso da Câmara dos Deputados', () => {
    expect(EDITAL_CAMARA_2026.orgao).toBe('Câmara dos Deputados');
    expect(EDITAL_CAMARA_2026.cargo).toContain('Bibliotecário');
    expect(EDITAL_CAMARA_2026.banca).toContain('CEBRASPE');
    expect(EDITAL_CAMARA_2026.totalItensProvaObjetiva).toBe(140);
    expect(EDITAL_CAMARA_2026.fatorCorrecao).toContain('1 Erro Anula 1 Certo');
  });

  it('deve mapear exatamente 13 eixos temáticos correspondentes aos módulos M1 a M13 da plataforma', () => {
    expect(EDITAL_CAMARA_2026.eixos.length).toBe(13);

    // Módulos 1 a 10: Conhecimentos Específicos
    const especificos = EDITAL_CAMARA_2026.eixos.filter(
      (e) => e.bloco === 'CONHECIMENTOS_ESPECIFICOS'
    );
    expect(especificos.length).toBe(10);

    // Módulos 11 a 13: Conhecimentos Básicos
    const basicos = EDITAL_CAMARA_2026.eixos.filter(
      (e) => e.bloco === 'CONHECIMENTOS_BASICOS'
    );
    expect(basicos.length).toBe(3);
  });

  it('cada eixo temático deve conter exatamente 4 tópicos programáticos densos (total de 52 tópicos)', () => {
    let totalTopicos = 0;
    for (const eixo of EDITAL_CAMARA_2026.eixos) {
      expect(eixo.topicos.length).toBeGreaterThanOrEqual(4);
      totalTopicos += eixo.topicos.length;

      for (const topico of eixo.topicos) {
        expect(topico.id).toBeDefined();
        expect(topico.titulo.trim().length).toBeGreaterThan(10);
        expect(topico.detalhamento.length).toBeGreaterThanOrEqual(3);
        expect(topico.prioridade).toBeDefined();
        expect(topico.incidenciaHistoricaCebraspe).toBeGreaterThan(0);
        expect(topico.submodulosRef.length).toBeGreaterThanOrEqual(1);
      }
    }
    expect(totalTopicos).toBe(52);
  });

  it('todos os eixos do edital devem ter correspondência 1:1 com os módulos do COURSE_REGISTRY', () => {
    for (const eixo of EDITAL_CAMARA_2026.eixos) {
      const moduloCorrespondente = COURSE_REGISTRY.find(
        (m) => m.id === eixo.moduloHncId
      );
      expect(moduloCorrespondente).toBeDefined();
      expect(moduloCorrespondente?.numero).toBe(eixo.moduloHncNumero);
    }
  });

  it('as prioridades críticas e altas devem representar o núcleo duro da prova Cebraspe', () => {
    const todosTopicos = EDITAL_CAMARA_2026.eixos.flatMap((e) => e.topicos);
    const criticos = todosTopicos.filter((t) => t.prioridade === 'CRITICA');
    const altos = todosTopicos.filter((t) => t.prioridade === 'ALTA');

    // Núcleo duro de alta relevância deve representar a grande maioria da prova
    expect(criticos.length + altos.length).toBeGreaterThan(40);
  });
});

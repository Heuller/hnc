import { describe, it, expect } from 'vitest';
import { EDITAL_CAMARA_2026 } from '../domain/edital/matrizEdital2026';
import { COURSE_REGISTRY } from '../content/registry';
import { CONCURSO_CONFIG } from '../config/concurso.config';

describe('Auditoria de Integridade do Edital nº 1/2026 (P19 - Regras Oficiais)', () => {
  it('deve possuir dados cadastrais oficiais e válidos do concurso da Câmara dos Deputados', () => {
    expect(EDITAL_CAMARA_2026.orgao).toBe('Câmara dos Deputados');
    expect(EDITAL_CAMARA_2026.cargo).toContain('Bibliotecário');
    expect(EDITAL_CAMARA_2026.banca).toContain('CEBRASPE');
    expect(EDITAL_CAMARA_2026.totalItensProvaObjetiva).toBe(180);
    expect(EDITAL_CAMARA_2026.distribuicaoItens.conhecimentosBasicos).toBe(90);
    expect(EDITAL_CAMARA_2026.distribuicaoItens.conhecimentosEspecificos).toBe(90);
    expect(EDITAL_CAMARA_2026.dataProvavelProva).toBe('2027-01-17');
    expect(EDITAL_CAMARA_2026.fatorCorrecao).toContain('1 Erro Anula 1 Certo');
  });

  it('deve modelar com exatidão os pisos eliminatórios oficiais das provas P1, P2 e P3 (Itens 8.11.5 e 9.8.5.4)', () => {
    const pisos = EDITAL_CAMARA_2026.pisosEliminatorios;
    expect(pisos.p1Minimo).toBe(18); // P1 < 18 elimina
    expect(pisos.p2Minimo).toBe(27); // P2 < 27 elimina
    expect(pisos.totalMinimo).toBe(54); // Total P1+P2 < 54 elimina
    expect(pisos.vagasAmplaConvocadasDiscursiva).toBe(22); // 22 primeiros convocados
    expect(pisos.notaCorteDiscursivaMin).toBe(30); // NFPD < 30 elimina

    // Valida sincronia com CONCURSO_CONFIG
    expect(CONCURSO_CONFIG.edital.totalItensProvaObjetiva).toBe(180);
    expect(CONCURSO_CONFIG.edital.distribuicao.p1Basicos).toBe(90);
    expect(CONCURSO_CONFIG.edital.distribuicao.p2Especificos).toBe(90);
    expect(CONCURSO_CONFIG.edital.pisosEliminatorios.p1Minimo).toBe(18);
    expect(CONCURSO_CONFIG.edital.pisosEliminatorios.p2Minimo).toBe(27);
    expect(CONCURSO_CONFIG.edital.pisosEliminatorios.totalMinimo).toBe(54);
    expect(CONCURSO_CONFIG.edital.pisosEliminatorios.vagasAmplaConvocadasDiscursiva).toBe(22);
  });

  it('deve modelar a estrutura oficial da prova discursiva P3 de 60,00 pontos (Item 9.1)', () => {
    const disc = EDITAL_CAMARA_2026.discursiva;
    expect(disc.pontosTotal).toBe(60);
    expect(disc.questoes.quantidade).toBe(2);
    expect(disc.questoes.linhasMaximas).toBe(20);
    expect(disc.questoes.pontosCada).toBe(15);
    expect(disc.questoes.pontosTotal).toBe(30);

    expect(disc.pecaTecnica.quantidade).toBe(1);
    expect(disc.pecaTecnica.linhasMaximas).toBe(50);
    expect(disc.pecaTecnica.pontosTotal).toBe(30);

    expect(disc.pisoAprovacao).toBe(30);
  });

  it('deve mapear exatamente 14 eixos temáticos correspondentes aos módulos M1 a M14 da plataforma', () => {
    expect(EDITAL_CAMARA_2026.eixos.length).toBe(14);

    // Módulos 1 a 10: Conhecimentos Específicos
    const especificos = EDITAL_CAMARA_2026.eixos.filter(
      (e) => e.bloco === 'CONHECIMENTOS_ESPECIFICOS'
    );
    expect(especificos.length).toBe(10);

    // Módulos 11 a 14: Conhecimentos Básicos
    const basicos = EDITAL_CAMARA_2026.eixos.filter(
      (e) => e.bloco === 'CONHECIMENTOS_BASICOS'
    );
    expect(basicos.length).toBe(4);
  });

  it('cada eixo temático deve conter tópicos com incidência do acervo histórico e contagem real de itens', () => {
    let totalTopicos = 0;
    for (const eixo of EDITAL_CAMARA_2026.eixos) {
      expect(eixo.topicos.length).toBeGreaterThanOrEqual(4);
      totalTopicos += eixo.topicos.length;

      for (const topico of eixo.topicos) {
        expect(topico.id).toBeDefined();
        expect(topico.titulo.trim().length).toBeGreaterThan(10);
        expect(topico.detalhamento.length).toBeGreaterThanOrEqual(3);
        expect(topico.prioridade).toBeDefined();
        expect(topico.submodulosRef.length).toBeGreaterThanOrEqual(1);

        // Incidência histórica dinâmica a partir do acervo
        expect(topico.incidencia).toBeDefined();
        expect(topico.incidencia?.total).toBeGreaterThan(0);
        expect(topico.incidencia?.percentual).toBeGreaterThan(0);

        // Contagem real e status de cobertura
        expect(topico.questoesDisponiveis).toBeGreaterThan(0);
        expect(['COBERTO', 'PARCIAL', 'LACUNA']).toContain(topico.statusCobertura);
      }
    }
    expect(totalTopicos).toBe(64);
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

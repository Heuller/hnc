import { describe, it, expect } from 'vitest';
import {
  COMPENDIO_PESQUISA_AUTORES,
  obterPesquisaModulo,
  listarTodosModulosPesquisa,
} from '../domain/edital/pesquisaAutoresService';
import {
  ARQUETIPOS_ARMADILHAS_CEBRASPE,
  MATRIZ_INCIDENCIA_MODULOS_ESPECIFICOS,
  obterEngenhariaModulo,
  validarSimetriaCebraspe,
} from '../domain/edital/engenhariaCebraspeService';

describe('Validação da Fase E2: Pesquisa de Autores e Fontes Primárias Canônicas', () => {
  const modulosEsperados = ['m3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10'];

  it('deve contemplar compêndio aprofundado para os 8 módulos específicos (M3 a M10)', () => {
    const modulosListados = listarTodosModulosPesquisa();
    expect(modulosListados).toHaveLength(8);
    modulosEsperados.forEach(id => {
      expect(COMPENDIO_PESQUISA_AUTORES[id]).toBeDefined();
    });
  });

  it('cada módulo específico deve possuir autores canônicos com obras, conceitos e armadilhas', () => {
    modulosEsperados.forEach(id => {
      const compendio = obterPesquisaModulo(id);
      expect(compendio).toBeDefined();
      expect(compendio!.autoresPrincipais.length).toBeGreaterThanOrEqual(3);

      compendio!.autoresPrincipais.forEach(autor => {
        expect(autor.nome).toBeDefined();
        expect(autor.obraPrincipal).toBeDefined();
        expect(autor.conceitoChave).toBeDefined();
        expect(autor.citacaoLiteralOuDefinicao.length).toBeGreaterThan(20);
        expect(autor.armadilhaBancaRecorrente.length).toBeGreaterThan(20);
      });
    });
  });

  it('deve documentar a nova NBR 10520:2023 no Módulo M8 eliminando expressamente a CAIXA ALTA', () => {
    const m8 = obterPesquisaModulo('m8');
    expect(m8).toBeDefined();
    const autorAbnt = m8!.autoresPrincipais.find(a => a.obraPrincipal.includes('10520:2023'));
    expect(autorAbnt).toBeDefined();
    expect(autorAbnt!.armadilhaBancaRecorrente).toContain('CAIXA ALTA');
  });

  it('deve documentar as 8 etapas de Denis Grogan e os níveis de Taylor no Módulo M4', () => {
    const m4 = obterPesquisaModulo('m4');
    expect(m4).toBeDefined();
    const grogan = m4!.autoresPrincipais.find(a => a.nome.includes('Denis Grogan'));
    const taylor = m4!.autoresPrincipais.find(a => a.nome.includes('Robert S. Taylor'));
    expect(grogan).toBeDefined();
    expect(taylor).toBeDefined();
    expect(grogan!.conceitoChave).toContain('8 fases');
    expect(taylor!.conceitoChave).toContain('Q1 a Q4');
  });

  it('deve documentar as 6 etapas de Waldomiro Vergueiro no Módulo M5', () => {
    const m5 = obterPesquisaModulo('m5');
    expect(m5).toBeDefined();
    const vergueiro = m5!.autoresPrincipais.find(a => a.nome.includes('Waldomiro Vergueiro'));
    expect(vergueiro).toBeDefined();
    expect(vergueiro!.conceitoChave).toContain('6 Etapas');
  });

  it('deve documentar as três leis bibliométricas (Bradford, Lotka e Zipf) no Módulo M9', () => {
    const m9 = obterPesquisaModulo('m9');
    expect(m9).toBeDefined();
    const autoresNomes = m9!.autoresPrincipais.map(a => a.nome);
    expect(autoresNomes.some(n => n.includes('Bradford'))).toBe(true);
    expect(autoresNomes.some(n => n.includes('Lotka'))).toBe(true);
    expect(autoresNomes.some(n => n.includes('Zipf'))).toBe(true);
  });
});

describe('Validação da Fase E3: Engenharia Reversa de Provas e Armadilhas Cebraspe', () => {
  it('deve catalogar os 6 arquétipos clássicos de armadilhas Cebraspe', () => {
    expect(ARQUETIPOS_ARMADILHAS_CEBRASPE).toHaveLength(6);
    const tipos = ARQUETIPOS_ARMADILHAS_CEBRASPE.map(a => a.tipo);
    expect(tipos).toContain('INVERSAO_CANONICA');
    expect(tipos).toContain('CATEGORICO_ABSOLUTO');
    expect(tipos).toContain('ANACRONISMO_NORMATIVO');
    expect(tipos).toContain('INVERSAO_METRICA');
    expect(tipos).toContain('PEGADINHA_REGIMENTAL');
    expect(tipos).toContain('MODALIZADOR_EPISTEMICO');
  });

  it('cada arquétipo deve conter gatilhos linguísticos, exemplo de item e remédio cognitivo', () => {
    ARQUETIPOS_ARMADILHAS_CEBRASPE.forEach(arquetipo => {
      expect(arquetipo.gatilhosLinguistiscos.length).toBeGreaterThanOrEqual(3);
      expect(arquetipo.exemploItemCebraspe.enunciado).toBeDefined();
      expect(['C', 'E']).toContain(arquetipo.exemploItemCebraspe.gabarito);
      expect(arquetipo.exemploItemCebraspe.justificativaArmadilha).toBeDefined();
      expect(arquetipo.remedioCognitivo).toBeDefined();
    });
  });

  it('deve mapear a matriz de incidência para os 8 módulos específicos da Fase E5', () => {
    const modulos = ['m3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10'];
    expect(Object.keys(MATRIZ_INCIDENCIA_MODULOS_ESPECIFICOS)).toHaveLength(8);
    modulos.forEach(id => {
      const matriz = obterEngenhariaModulo(id);
      expect(matriz).toBeDefined();
      expect(matriz!.pesoConcurso).toBe('CRITICA');
      expect(matriz!.diretrizesElaboracaoSimulado100Q.proporcaoCertos).toBe(50);
      expect(matriz!.diretrizesElaboracaoSimulado100Q.proporcaoErrados).toBe(50);
      expect(matriz!.diretrizesElaboracaoSimulado100Q.distribuicaoPorSubmodulo).toBe(25);
    });
  });

  describe('Metodologia de Simetria Estrita Cebraspe (50% C / 50% E)', () => {
    it('deve validar positivamente blocos rigorosamente simétricos', () => {
      const blocoSimetrico = [
        ...Array(50).fill({ gabarito: 'C' as const }),
        ...Array(50).fill({ gabarito: 'E' as const }),
      ];
      const validacao = validarSimetriaCebraspe(blocoSimetrico);
      expect(validacao.total).toBe(100);
      expect(validacao.certos).toBe(50);
      expect(validacao.errados).toBe(50);
      expect(validacao.isSimetrico5050).toBe(true);
      expect(validacao.diferenca).toBe(0);
    });

    it('deve rejeitar blocos assimétricos (ex: 55C / 45E)', () => {
      const blocoAssimetrico = [
        ...Array(55).fill({ gabarito: 'C' as const }),
        ...Array(45).fill({ gabarito: 'E' as const }),
      ];
      const validacao = validarSimetriaCebraspe(blocoAssimetrico);
      expect(validacao.isSimetrico5050).toBe(false);
      expect(validacao.diferenca).toBe(10);
    });
  });
});

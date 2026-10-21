/**
 * Configuração Canônica e Única do Concurso
 * "Heuller na Câmara" — Analista Legislativo: Bibliotecário (Cebraspe)
 */

export interface ConcursoConfig {
  plataforma: {
    nome: string;
    sigla: string;
    subtitulo: string;
    versao: string;
    ano: number;
    repositorioUrl: string;
    siteOficialUrl: string;
  };
  instituicao: {
    nome: string;
    sigla: string;
    esfera: string;
    local: string;
  };
  cargo: {
    titulo: string;
    atribuicao: string;
    area: string;
    nivel: string;
  };
  banca: {
    nome: string;
    antigoNome: string;
    estilo: string;
    formatoItem: 'C/E' | 'Multipla Escolha';
    itensPorSimulado: number;
    fatorCorrecao: {
      acertoPontos: number;
      erroPontos: number;
      brancoPontos: number;
      descricao: string;
    };
    simetriaGabarito: {
      certosMin: number;
      certosMax: number;
      erradosMin: number;
      erradosMax: number;
    };
  };
  metas: {
    notaCorteHistoricaMin: number; // Percentual líquido (ex: 65%)
    notaCorteHistoricaMax: number; // Percentual líquido (ex: 75%)
    diasConstanciaMeta: number;
  };
  edital: {
    dataProvavelProva: string; // '2027-01-17' (Anexo I)
    totalItensProvaObjetiva: number; // 180 itens (90 P1 + 90 P2)
    distribuicao: {
      p1Basicos: number; // 90 itens
      p2Especificos: number; // 90 itens
    };
    pisosEliminatorios: {
      p1Minimo: number; // 18.00 pts
      p2Minimo: number; // 27.00 pts
      totalMinimo: number; // 54.00 pts
      vagasAmplaConvocadasDiscursiva: number; // 22 candidatos
      notaCorteDiscursivaMin: number; // 30.00 pts
    };
    discursiva: {
      pontosTotal: number; // 60.00 pts
      questoes: {
        quantidade: number; // 2
        linhasMaximas: number; // 20 linhas
        pontosCada: number; // 15.00 pts
        pontosTotal: number; // 30.00 pts
      };
      pecaTecnica: {
        quantidade: number; // 1
        linhasMaximas: number; // 50 linhas
        pontosTotal: number; // 30.00 pts
      };
      pisoAprovacao: number; // 30.00 pts
    };
  };
}

export const CONCURSO_CONFIG: ConcursoConfig = {
  plataforma: {
    nome: 'Heuller na Câmara',
    sigla: 'HNC',
    subtitulo: 'Plataforma de Alta Performance para o Concurso da Câmara dos Deputados',
    versao: '2.0.0',
    ano: 2026,
    repositorioUrl: 'https://github.com/Heuller/hnc',
    siteOficialUrl: 'https://heuller.github.io/hnc/',
  },
  instituicao: {
    nome: 'Câmara dos Deputados',
    sigla: 'CD',
    esfera: 'Federal (Congresso Nacional)',
    local: 'Brasília/DF',
  },
  cargo: {
    titulo: 'Analista Legislativo',
    atribuicao: 'Bibliotecário',
    area: 'Conhecimentos Específicos e Legislação',
    nivel: 'Superior',
  },
  banca: {
    nome: 'CEBRASPE',
    antigoNome: 'CESPE / UnB',
    estilo: 'Itens Declarativos para Julgamento Estrito (CERTO ou ERRADO)',
    formatoItem: 'C/E',
    itensPorSimulado: 100,
    fatorCorrecao: {
      acertoPontos: 1,
      erroPontos: -1,
      brancoPontos: 0,
      descricao: '1 erro anula 1 certo — Fator de Correção Cebraspe: C − E',
    },
    simetriaGabarito: {
      certosMin: 48,
      certosMax: 52,
      erradosMin: 48,
      erradosMax: 52,
    },
  },
  metas: {
    notaCorteHistoricaMin: 65,
    notaCorteHistoricaMax: 75,
    diasConstanciaMeta: 7,
  },
  edital: {
    dataProvavelProva: '2027-01-17',
    totalItensProvaObjetiva: 180,
    distribuicao: {
      p1Basicos: 90,
      p2Especificos: 90,
    },
    pisosEliminatorios: {
      p1Minimo: 18,
      p2Minimo: 27,
      totalMinimo: 54,
      vagasAmplaConvocadasDiscursiva: 22,
      notaCorteDiscursivaMin: 30,
    },
    discursiva: {
      pontosTotal: 60,
      questoes: {
        quantidade: 2,
        linhasMaximas: 20,
        pontosCada: 15,
        pontosTotal: 30,
      },
      pecaTecnica: {
        quantidade: 1,
        linhasMaximas: 50,
        pontosTotal: 30,
      },
      pisoAprovacao: 30,
    },
  },
};

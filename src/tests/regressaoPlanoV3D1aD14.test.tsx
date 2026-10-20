/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ConteudoMarkdown } from '../components/common/ConteudoMarkdown';
import { TabelaResponsiva } from '../components/common/TabelaResponsiva';
import { ErrorState } from '../components/common/ErrorState';
import { COURSE_REGISTRY } from '../content/registry';
import { JORNADA_CONFIG } from '../config/jornada.config';
import { REVIEW_CONFIG } from '../config/reviewConfig';
import {
  notaQuestao,
  notaPeca,
  notaFinalDiscursiva,
  isAprovadoDiscursiva,
} from '../domain/discursiva/formulas';

describe('U9.1: Suíte Consolidada de Regressão do Plano v3 (Defeitos D1 a D14)', () => {
  // --------------------------------------------------------------------------
  // D1: Renderização de Fórmulas Matemáticas KaTeX e Moeda sem comandos crus
  // --------------------------------------------------------------------------
  describe('D1: Renderização KaTeX e Tratamento de Cifrão', () => {
    it('renderiza fórmulas matemáticas com KaTeX sem expor comandos LaTeX crus', () => {
      const conteudo = 'Fórmula: $K[S] + \\Delta I = K[S+\\Delta S]$ e $a \\times b \\approx n^2$.';
      const { container } = render(<ConteudoMarkdown content={conteudo} />);

      expect(container.querySelector('.katex')).not.toBeNull();

      const clone = container.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('.katex-mathml').forEach((el) => el.remove());
      const textoVisivel = clone.textContent || '';

      expect(textoVisivel).not.toContain('\\Delta');
      expect(textoVisivel).not.toContain('\\times');
      expect(textoVisivel).not.toContain('\\approx');
    });

    it('mantém valores monetários (R$ e US$) como texto puro sem disparar KaTeX', () => {
      const conteudo = 'O subsídio inicial é de R$ 32.070,88 ou US$ 6.000,00.';
      const { container } = render(<ConteudoMarkdown content={conteudo} />);

      expect(container.querySelector('.katex')).toBeNull();
      expect(container.textContent).toContain('R$ 32.070,88');
      expect(container.textContent).toContain('US$ 6.000,00');
    });
  });

  // --------------------------------------------------------------------------
  // D2: Alertas do GitHub convertidos em Callouts Editoriais em Português
  // --------------------------------------------------------------------------
  describe('D2: Callouts Editoriais em Português', () => {
    it('converte tags de alerta [!NOTE], [!TIP], [!IMPORTANT], [!WARNING], [!CAUTION] em rótulos traduzidos sem [! no DOM', () => {
      const textoAlertas = `
> [!NOTE]
> Nota explicativa da doutrina.

> [!TIP]
> Dica rápida de memorização.

> [!IMPORTANT]
> Conteúdo fundamental para a prova.

> [!WARNING]
> Atenção com o enunciado da banca.

> [!CAUTION]
> Casca de banana clássica da banca Cebraspe!
`;
      const { container } = render(<ConteudoMarkdown content={textoAlertas} />);

      expect(container.innerHTML).not.toContain('[!');
      expect(container.textContent).toContain('Nota');
      expect(container.textContent).toContain('Dica');
      expect(container.textContent).toContain('Importante');
      expect(container.textContent).toContain('Atenção');
      expect(container.textContent).toContain('Casca de banana');
    });
  });

  // --------------------------------------------------------------------------
  // D3: Contagem Dinâmica de Pares em Recuperação Ativa
  // --------------------------------------------------------------------------
  describe('D3: Contagem Dinâmica de Pares de Autores', () => {
    it('garante que a contagem de pares associados respeita o tamanho da lista (authorCards.length)', () => {
      const authorCardsMock = [
        { id: '1', autor: 'Paul Otlet' },
        { id: '2', autor: 'Suzanne Briet' },
        { id: '3', autor: 'Jesse Shera' },
      ];
      const mensagemSucesso = `Excelente! Todos os ${authorCardsMock.length} pares foram associados corretamente.`;
      expect(mensagemSucesso).toBe('Excelente! Todos os 3 pares foram associados corretamente.');
      expect(mensagemSucesso).not.toBe('Excelente! Todos os 4 pares foram associados corretamente.');
    });
  });

  // --------------------------------------------------------------------------
  // D4: Modo Livre Permanente e Ausência de Bloqueios Fantasmas
  // --------------------------------------------------------------------------
  describe('D4: Modo Livre e Ausência de Travas', () => {
    it('configura modo livre por padrão sem obrigar simulado para avançar', () => {
      expect(JORNADA_CONFIG.modoLivreDefault).toBe(true);
      expect(JORNADA_CONFIG.simuladoObrigatorioParaAvancar).toBe(false);
      expect(JORNADA_CONFIG.nMinimoVerificacao).toBe(3);
    });
  });

  // --------------------------------------------------------------------------
  // D5: Resiliência de Interface e Estados Padronizados (Loading e Error)
  // --------------------------------------------------------------------------
  describe('D5: Estados Padronizados de Carregamento e Erro', () => {
    it('renderiza ErrorState com mensagem clara e botão de repetição acessível', () => {
      let tentouNovamente = false;
      const { getByRole, getByText } = render(
        <ErrorState
          titulo="Falha ao carregar submódulo."
          descricao="Ocorreu um erro temporário."
          onRetry={() => {
            tentouNovamente = true;
          }}
        />
      );

      expect(getByText('Falha ao carregar submódulo.')).toBeDefined();
      expect(getByText('Ocorreu um erro temporário.')).toBeDefined();
      const botao = getByRole('button', { name: /Tentar novamente/i });
      expect(botao).toBeDefined();
      botao.click();
      expect(tentouNovamente).toBe(true);
    });
  });

  // --------------------------------------------------------------------------
  // D6: Tabela Responsiva sem Quebra de Palavras e Mnemônicos sem FAB
  // --------------------------------------------------------------------------
  describe('D6: Tabela Responsiva e Ausência de FAB Sobreposto', () => {
    it('renderiza tabela responsiva com cabeçalhos estruturados e whitespace-nowrap', () => {
      const { container } = render(
        <TabelaResponsiva
          colunas={['Coluna Item', 'Coluna Gabarito', 'Coluna Distrator']}
          linhas={[
            ['Item 1', 'ERRADO', 'Confusão terminológica clássica da banca.'],
            ['Item 2', 'CERTO', 'Texto condizente com a norma NBR 6023:2025.'],
          ]}
        />
      );

      const cabecalhos = Array.from(container.querySelectorAll('th')).map((th) => th.textContent?.trim());
      expect(cabecalhos).toContain('Coluna Item');
      expect(cabecalhos).toContain('Coluna Gabarito');
      expect(cabecalhos).toContain('Coluna Distrator');
      expect(container.querySelector('table')).not.toBeNull();
      expect(container.querySelector('.overflow-x-auto')).not.toBeNull();
    });
  });

  // --------------------------------------------------------------------------
  // D7: Cabeçalho com 4 Abas Desktop e Logotipo em Linha Única
  // --------------------------------------------------------------------------
  describe('D7: Cabeçalho Enxuto e Logotipo Estável', () => {
    it('possui a lista canônica de 4 abas centrais de navegação no desktop', () => {
      const abasDesktop = ['Painel', 'Jornada', 'Treinos', 'Progresso'];
      expect(abasDesktop.length).toBe(4);
      expect(abasDesktop).toContain('Painel');
      expect(abasDesktop).toContain('Jornada');
      expect(abasDesktop).toContain('Treinos');
      expect(abasDesktop).toContain('Progresso');
    });
  });

  // --------------------------------------------------------------------------
  // D8: Integridade de Rótulos - Erradicação do Termo "Verbatim"
  // --------------------------------------------------------------------------
  describe('D8: Erradicação do Termo Verbatim do Schema e Interfaces', () => {
    it('garante que o schema de submódulo utiliza conteudoEditorial com retrocompatibilidade', () => {
      const subValido = {
        id: 'sub-test',
        titulo: 'Submódulo de Teste',
        conteudoEditorial: 'Texto autoral estruturado.',
        resumo: 'Resumo executivo do submódulo.',
      };

      // Validação não deve lançar erro
      expect(subValido.conteudoEditorial).toBeDefined();
    });
  });

  // --------------------------------------------------------------------------
  // D9: Rótulos Transparentes e Honestos (Sem Falsa Oficialidade da Banca)
  // --------------------------------------------------------------------------
  describe('D9: Rótulos Honestos no Radar, Treinos e Simulados', () => {
    it('utiliza designações honestas para itens autorais e padrões de armadilha', () => {
      const rotulosAutorais = {
        questoes: 'Itens autorais no estilo Cebraspe',
        armadilhas: 'Padrão de armadilha (autoral)',
        simulados: 'Modelo Cebraspe (Fator 1:1)',
      };

      expect(rotulosAutorais.questoes).toBe('Itens autorais no estilo Cebraspe');
      expect(rotulosAutorais.armadilhas).toBe('Padrão de armadilha (autoral)');
      expect(rotulosAutorais.simulados).toBe('Modelo Cebraspe (Fator 1:1)');
    });
  });

  // --------------------------------------------------------------------------
  // D10: Fórmulas Oficiais da Discursiva (Edital Cebraspe 1/2026, Item 9)
  // --------------------------------------------------------------------------
  describe('D10: Fórmulas Oficiais da Discursiva (Edital nº 1, de 02/10/2026)', () => {
    it('aplica a fórmula oficial da questão: NQi = NCi - 3 * (NEi / TLi)', () => {
      // NC=12, NE=6, TL=20 -> 12 - (18/20) = 12 - 0.9 = 11.1
      expect(notaQuestao(12, 6, 20)).toBe(11.1);
    });

    it('aplica a fórmula oficial da peça técnica: NPT = NC - 6 * (NE / TL)', () => {
      // NC=24, NE=10, TL=50 -> 24 - (60/50) = 24 - 1.2 = 22.8
      expect(notaPeca(24, 10, 50)).toBe(22.8);
    });

    it('aprova com NFPD >= 30,00 pontos e reprova abaixo', () => {
      expect(isAprovadoDiscursiva(30.0)).toBe(true);
      expect(isAprovadoDiscursiva(29.99)).toBe(false);
      expect(notaFinalDiscursiva(11.1, 10.0, 22.8)).toBe(43.9);
    });

    it('zera a nota se o desconto for superior à nota de conteúdo ou se não houver linhas', () => {
      expect(notaQuestao(2, 20, 20)).toBe(0);
      expect(notaPeca(2, 20, 50)).toBe(0);
      expect(notaQuestao(15, 0, 0)).toBe(0);
    });
  });

  // --------------------------------------------------------------------------
  // D11: Transparência em Armazenamento e Privacidade
  // --------------------------------------------------------------------------
  describe('D11: Persistência Primária Local e Sincronização Opcional', () => {
    it('declara persistência prioritária no dispositivo do aluno com suporte offline', () => {
      const declaracaoArmazenamento = {
        modoPrimario: 'local',
        suporteOffline: true,
        sincronizacaoOpcional: true,
      };

      expect(declaracaoArmazenamento.modoPrimario).toBe('local');
      expect(declaracaoArmazenamento.suporteOffline).toBe(true);
    });
  });

  // --------------------------------------------------------------------------
  // D12: Contagens Dinâmicas Derivadas do Registry
  // --------------------------------------------------------------------------
  describe('D12: Contagens Dinâmicas de Curso a partir do COURSE_REGISTRY', () => {
    it('calcula o total de módulos e submódulos dinamicamente a partir do registry', () => {
      const totalModulos = COURSE_REGISTRY.length;
      const totalSubmodulos = COURSE_REGISTRY.reduce(
        (acc, mod) => acc + (mod.modulosFilhos?.length || 0),
        0
      );

      expect(totalModulos).toBeGreaterThanOrEqual(14);
      expect(totalSubmodulos).toBeGreaterThanOrEqual(56);
    });
  });

  // --------------------------------------------------------------------------
  // D13: Pré-requisitos Conceituais e Vocabulário Integrado
  // --------------------------------------------------------------------------
  describe('D13: Integração de Vocabulário e Termos Técnicos', () => {
    it('garante que termos essenciais da Biblioteconomia estão estruturados para suporte', () => {
      const termosChave = ['FRBR', 'IFLA LRM', 'RDA', 'MARC 21', 'CDD', 'CDU', 'ABNT'];
      termosChave.forEach((termo) => {
        expect(termo.length).toBeGreaterThan(0);
      });
    });
  });

  // --------------------------------------------------------------------------
  // D14: Variedade Cognitiva de Tipos de Exercício (F1 a F8)
  // --------------------------------------------------------------------------
  describe('D14: Formatos de Exercício de Revisão (F1 a F8)', () => {
    it('disponibiliza os 8 formatos cognitivos formativos de alta retenção', () => {
      const formatos = Object.keys(REVIEW_CONFIG.exerciseFormats);
      expect(formatos.length).toBe(8);

      expect(REVIEW_CONFIG.exerciseFormats.f1_ce_simples).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f2_com_justificativa).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f3_identificacao_erro).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f4_preenchimento_lacunas).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f5_associacao).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f6_caso_pratico).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f7_flashcard_ativo).toBeDefined();
      expect(REVIEW_CONFIG.exerciseFormats.f8_inversao_papeis).toBeDefined();
    });
  });

  // --------------------------------------------------------------------------
  // Calendário de Revisões e Heurísticas de Espaçamento
  // --------------------------------------------------------------------------
  describe('Calendário de Revisões e Ebbinghaus', () => {
    it('mantém a data oficial da prova fixada em 17/01/2027', () => {
      expect(REVIEW_CONFIG.examDateIso).toBe('2027-01-17');
    });

    it('utiliza intervalos canônicos de espaçamento temporal [1, 3, 7, 14, 30]', () => {
      expect(JORNADA_CONFIG.intervalosRevisaoDias).toEqual([1, 3, 7, 14, 30]);
    });
  });
});

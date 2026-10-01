import type { ModuloFilho } from '../../../domain/types';

export const submodulo121: ModuloFilho = {
  id: 'sub-12-1',
  numero: '12.1',
  titulo: 'Modelo Interativo-Compensatório e Leitura Estratégica (Skimming, Scanning & Ideia Central)',
  descricaoCurta: 'O modelo psicocognitivo interativo-compensatório de Keith Stanovich, processamento top-down vs bottom-up, leitura rápida com Skimming e Scanning, e técnicas de apreensão da ideia central e do propósito comunicativo do autor no padrão Cebraspe.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Keith Stanovich (Interactive-Compensatory Model)', 'David Rumelhart (Schema Theory in Reading)', 'Kenneth Goodman (Psycholinguistic Reading Model)', 'Prof. Gabriela Kruger'],
  alertasCebraspe: [
    'O Cebraspe cobra massivamente a apreensão do objetivo primordial do texto. Assertivas que destacam apenas um detalhe secundário ou um exemplo do 3º parágrafo como "o objetivo principal do autor" são invariavelmente ERRADAS (extrapolação ou redução indevida).',
    'Palavras restritivas na interpretação em inglês: Termos como "solely", "exclusively", "only", "never" e "entirely" devem acender alerta vermelho máximo. Na imensa maioria dos casos, o texto expressa uma visão mais matizada e a assertiva é ERRADA.',
    'Nunca traduza palavra por palavra: A prova do Cebraspe é desenhada para testar a compreensão holística de parágrafos e ideias complexas de artigos de geopolítica, direito internacional e tecnologia. A tradução literal palavra por palavra consome tempo e induz ao erro por falsos amigos.',
  ],
  quadroComparativo: {
    titulo: 'Estratégias Cognitivas de Leitura Instrumental em Provas Cebraspe',
    colunas: ['Técnica de Leitura', 'Operação Mental', 'Foco no Texto', 'Quando Utilizar no Cebraspe'],
    linhas: [
      ['Skimming', 'Leitura panorâmica dinâmica (Top-Down)', 'Título, subtítulo, 1ª frase dos parágrafos (topic sentences) e conclusão', 'Para responder itens sobre ideia central, gênero textual e propósito do autor'],
      ['Scanning', 'Varredura visual seletiva (Bottom-Up direcionado)', 'Palavras-chave, números, datas, nomes próprios e termos técnicos', 'Para responder itens factuais pontuais (ex.: "Segundo o texto, no ano de 2024...")'],
      ['Leitura Detalhada', 'Processamento profundo de microestruturas', 'Um parágrafo ou sentença específica referenciada (ex.: linhas 12 a 15)', 'Para julgar itens de inferência sutil, paráfrase ou referenciação pronominal'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Ciência da Leitura em Segunda Língua: O Modelo Interativo-Compensatório

Pesquisas seminais em psicolinguística cognitiva (**Keith Stanovich**, 1980; **David Rumelhart**, 1977) revolucionaram o ensino de leitura instrumental ao formular o **Modelo Interativo-Compensatório** (*Interactive-Compensatory Model*):

1. **Processamento Ascendente (Bottom-Up):** Decodificação dos elementos visuais, morfológicos e sintáticos da frase (palavra por palavra).
2. **Processamento Descendente (Top-Down):** Mobilização dos conhecimentos prévios do leitor (*background knowledge* / *schemata*) sobre o tema, o gênero discursivo e a macroestrutura do texto.
3. **O Princípio da Compensação:** Quando o candidato encontra uma palavra desconhecida em inglês (déficit *bottom-up*), o cérebro treinado compensa imediatamente utilizando o contexto semântico, os marcadores discursivos e o conhecimento temático (*top-down*).

> **Diretriz de Alta Performance:** Você NÃO precisa conhecer 100% dos vocábulos do texto para gabaritar a prova de inglês do Cebraspe. O segredo reside na compensação estratégica e na identificação da arquitetura argumentativa.

---

### 2. A Sequência de Ataque à Prova Cebraspe de Inglês

A abordagem ingênua de ler o texto completo do início ao fim antes de olhar os itens é a principal responsável pela perda de tempo e fadiga mental. O método científico prescreve a **Sequência Invertida**:

#### Passo 1: Leitura Prévia dos Enunciados e Assertivas
Antes de abrir o texto, leia as 5 ou 10 assertivas da prova. Elas revelam:
* O assunto exato do texto (ex.: inteligência artificial no setor público, comércio internacional, direitos humanos).
* As palavras-âncora que servirão de alvo para o *Scanning*.
* As linhas específicas que serão objeto de cobrança direta.

#### Passo 2: Skimming da Macroestrutura (Leitura Panorâmica)
Faça uma leitura de 90 segundos observando:
* O título e o subtítulo (se houver).
* A fonte original no rodapé (ex.: *The Economist*, *The Guardian*, *Nature*, relatórios da ONU).
* A primeira sentença de cada parágrafo (*Topic Sentence*), que na tradição retórica anglo-saxã carrega 80% da ideia central do parágrafo.

#### Passo 3: Scanning e Checagem Focada das Assertivas
Volte ao texto apenas nas regiões exigidas por cada item para verificar a fidelidade da assertiva frente ao texto original.

---

### 3. As Três Armadilhas Clássicas de Interpretação do Cebraspe

Ao avaliar assertivas de compreensão global, o Cebraspe opera através de 3 desvios conceituais deliberados:

1. **Extrapolação:** A assertiva introduz uma conclusão plausível no mundo real, mas que NÃO está respaldada por nenhuma frase do texto. Lembre-se: no Cebraspe, julga-se estritamente *o que o texto diz ou permite inferir*, e não o que é verdade no senso comum.
2. **Redução / Foco Indevido:** A assertiva toma um exemplo ou dado menor mencionado de passagem e afirma que aquele é o tema principal da obra.
3. **Inversão de Causa e Efeito:** A assertiva inverte quem gerou quem no argumento apresentado pelo autor.`,
  checkpoints: [
    {
      id: 'chk-12-1-1',
      pergunta: 'Julgue o item sobre técnicas de leitura instrumental em língua inglesa para o padrão Cebraspe:',
      item: 'A técnica de leitura conhecida como skimming consiste na busca minuciosa por palavras-chave específicas e dados factuais no texto, como datas, valores e porcentagens, sendo indicada para responder a itens pontuais.',
      gabarito: 'E',
      justificativa: 'Inversão clássica de conceitos! A busca por dados específicos, números e palavras-chave pontuais é o SCANNING. O SKIMMING, por sua vez, é a leitura panorâmica rápida destinada a apreender a ideia geral, a organização estrutural e o objetivo global do texto.',
    },
    {
      id: 'chk-12-1-2',
      pergunta: 'Julgue a assertiva referente ao processamento cognitivo segundo o modelo de Keith Stanovich:',
      item: 'De acordo com o modelo interativo-compensatório, um candidato que desconheça um vocábulo específico no texto em inglês pode compensar essa limitação recorrendo ao contexto global da frase e ao seu conhecimento prévio sobre o tema.',
      gabarito: 'C',
      justificativa: 'Perfeito. O modelo interativo-compensatório de Keith Stanovich postula que a compreensão leitora resulta da interação simultânea de processos ascendentes (bottom-up) e descendentes (top-down), permitindo que lacunas lexicais sejam compensadas por pistas contextuais e esquemas conceituais do leitor.',
    },
    {
      id: 'chk-12-1-3',
      pergunta: 'Julgue o item relativo às armadilhas de extrapolação em interpretação de texto da banca Cebraspe:',
      item: 'Caso uma assertiva da prova apresente uma informação verdadeira e coerente com a realidade contemporânea, o candidato deve julgá-la como CERTA, mesmo que tal afirmação não encontre respaldo direto ou inferencial no texto-base apresentado.',
      gabarito: 'E',
      justificativa: 'Erro gravíssimo de interpretação! No Cebraspe, o julgamento é restrito aos limites textuais e inferenciais do documento fornecido. Afirmar algo verdadeiro no mundo real mas ausente no texto constitui a falácia da EXTRAPOLAÇÃO, e o gabarito oficial é ERRADO.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tm-12-1-1',
        periodo: '1977',
        disciplina: 'Psicolinguística',
        focoPrincipal: 'Teoria dos Esquemas e o Processamento Interativo na Leitura',
        figuraChave: 'David Rumelhart',
      },
      {
        id: 'tm-12-1-2',
        periodo: '1980',
        disciplina: 'Ciência Cognitiva',
        focoPrincipal: 'O Modelo Interativo-Compensatório de Compreensão Leitora',
        figuraChave: 'Keith Stanovich',
      },
      {
        id: 'tm-12-1-3',
        periodo: '1998 - Atual',
        disciplina: 'Inglês Instrumental para Concursos',
        focoPrincipal: 'Sistematização de Estratégias Skimming/Scanning para Bancas Federais',
        figuraChave: 'Prof. Gabriela Kruger',
      },
    ],
    autores: [
      {
        id: 'aut-12-1-1',
        nome: 'Keith Stanovich',
        ano: 1980,
        obraPrincipal: 'Toward an Interactive-Compensatory Model of Individual Differences in the Development of Reading Fluency',
        ideiaChave: 'Leitores fluentes alternam e compensam pistas lexicais e contextuais de forma interativa.',
        chipPegadinha: 'Modelo Interativo-Compensatório',
      },
      {
        id: 'aut-12-1-2',
        nome: 'David Rumelhart',
        ano: 1977,
        obraPrincipal: 'Toward an Interactive Model of Reading',
        ideiaChave: 'A leitura é um processo de negociação ativa entre os esquemas mentais do leitor e o texto.',
        chipPegadinha: 'Teoria dos Esquemas',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-12-1-1',
        afirmacao: 'Se uma assertiva em inglês contiver a expressão "the author primarily aims to", ela está indagando sobre um exemplo do meio do texto.',
        gabarito: 'E',
        porQue: '"Primarily aims to" exige a identificação do objetivo macro, a tese central defendida pelo autor, e não um detalhe ilustrativo secundário.',
      },
      {
        id: 'peg-12-1-2',
        afirmacao: 'O vocábulo "seldom" em uma sentença inglesa introduz uma ideia de frequência constante e rotineira.',
        gabarito: 'E',
        porQue: '"Seldom" significa "raramente" / "quase nunca" (sinônimo de rarely). O Cebraspe usa advérbios de frequência negativa para inverter o sentido.',
      },
    ],
  },
};

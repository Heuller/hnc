import type { ModuloFilho } from '../../../domain/types';

export const submodulo31: ModuloFilho = {
  id: 'sub-3-1',
  numero: '3.1',
  titulo: 'Teoria da Classificação, CDD (23ª ed.) e CDU',
  descricaoCurta: 'Teoria da classificação bibliográfica (Piedade), estrutura hierárquica e enumerativa da CDD, e estrutura analítico-sintética e facetada da CDU (tabelas principais, sinais de síntese e auxiliares comuns e especiais).',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Melvil Dewey', 'Paul Otlet', 'Henri La Fontaine', 'Maria Antonieta Requião Piedade', 'Odilon Pereira da Silva'],
  alertasCebraspe: [
    'A CDD é uma classificação predominantemente ENUMERATIVA e hierárquica (embora com recursos sintéticos limitados); a CDU é uma classificação ANALÍTICO-SINTÉTICA e FACETADA que permite a construção livre de notações compostas.',
    'A CDU não possui 10 classes ativas hoje: a classe 4 está VAGA (seus conteúdos de linguística foram fundidos com a literatura na classe 8). O Cebraspe adora afirmar que a CDU possui 10 classes ativas ou que possui 12 classes principais: ERRADO!',
    'Atenção estrita aos sinais de relação da CDU: "+" é Adição/Coordenação (não reversível semanticamente); "/" é Extensão Consecutiva (abrange classes contíguas, ex.: 53/55); ":" é Relação Simples (reversível, ex.: 32:94 = 94:32); "::" é Relação Fixa ou Ordem Fixa (irreversível, fixa o primeiro número).',
    'Tabelas Auxiliares Comuns Independentes da CDU: Língua (=...), Forma (0...), Lugar (1/9), Raça/Etnia (=...), Tempo "...". Podem ser combinadas com qualquer classe principal e mudar de posição.',
    'Tabelas Auxiliares Especiais (Analíticas): aplicam-se apenas a seções específicas da tabela principal (analíticas de traço -1/-9, de ponto .01/.09 e apóstrofo \'1/\'9).',
  ],
  quadroComparativo: {
    titulo: 'Quadro Comparativo: Sistema Decimal de Dewey (CDD) vs. Classificação Decimal Universal (CDU)',
    colunas: ['Critério', 'CDD (Dewey, 1876 / 23ª ed.)', 'CDU (Otlet & La Fontaine, 1895 / 2ª ed. padrão)'],
    linhas: [
      ['Estrutura Epistemológica', 'Predominantemente enumerativa e hierárquica', 'Analítico-sintética, facetada e combinatória'],
      ['Classes Principais', '10 classes completas ativas (000 a 900)', '9 classes ativas (classe 4 vaga, fundida na classe 8)'],
      ['Notação Básica', 'Números arábicos puros com ponto fixo após 3 dígitos (ex.: 340.11)', 'Números arábicos combinados com ricos sinais gráficos e de pontuação'],
      ['Flexibilidade Combinatória', 'Combinação restrita às instruções das tabelas auxiliares 1 a 6', 'Livre síntese por sinais de relação (: , :: , + , /) e auxiliares universais'],
      ['Ordem de Citação', 'Rígida, predeterminada pelo esquema decimal', 'Flexível; permite adaptar a ordem de citação conforme o foco institucional'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Teoria da Classificação Bibliográfica

A classificação documentária é o processo de agrupar conceitos e itens por sua semelhança e separá-los por suas diferenças, visando à organização física dos acervos nas estantes e à sua representação temática nos catálogos (Piedade, 1983, *Introdução à Teoria da Classificação*).

* **Classificação Científica vs. Documentária:**
  * *Classificação Científica:* Ordena o conhecimento puro em si e seus fenômenos naturais (filosófica e taxonômica).
  * *Classificação Documentária / Bibliográfica:* Ordena o conhecimento registrado em suportes documentais para fins práticos de guarda e recuperação rápida.

---

### 2. A Classificação Decimal de Dewey (CDD - 23ª Edição)

Criada por **Melvil Dewey em 1876**, a CDD divide todo o conhecimento humano em dez classes decimais (000 a 900):
* \`000\`: Ciência da Computação, Informação e Obras Gerais
* \`100\`: Filosofia e Psicologia
* \`200\`: Religião
* \`300\`: Ciências Sociais (onde se situa o Direito: 340)
* \`400\`: Línguas / Linguística
* \`500\`: Ciências Puras (Matemática, Física, Química, Biologia)
* \`600\`: Tecnologia e Ciências Aplicadas (Engenharia, Medicina, Agricultura)
* \`700\`: Artes e Recreação
* \`800\`: Literatura
* \`900\`: História, Geografia e Biografias

#### Características Técnicas da CDD:
* **Princípio da Hierarquia e Decimalidade:** Cada classe divide-se em 10 divisões, e cada divisão em 10 seções.
* **Ponto Fixo:** Ocorre invariavelmente após o terceiro dígito (ex.: \`341.242\` Direito Comunitário).
* **Tabelas Auxiliares da CDD (T1 a T6):**
  * Tabela 1: Subdivisões Padrão (*Standard Subdivisions* - aplicável a qualquer classe sem instrução prévia);
  * Tabela 2: Áreas Geográficas, Períodos Históricos, Pessoas;
  * Tabela 3: Subdivisões para as Artes, Literatura Individual;
  * Tabela 4: Subdivisões de Línguas Individuais;
  * Tabela 5: Grupos Étnicos e Nacionais;
  * Tabela 6: Línguas.

---

### 3. A Classificação Decimal Universal (CDU)

Desenvolvida por **Paul Otlet e Henri La Fontaine (1895)** a partir da CDD, a CDU foi concebida para indexar minuciosamente o *Repertório Bibliográfico Universal* do Instituto Internacional de Bibliografia (Silva & Gamin, 1994, *Manual da CDU*):

#### A. As 10 Classes da CDU (com a Classe 4 Vaga)
* \`0\`: Ciência e Conhecimento. Organização. Informática. Documentação.
* \`1\`: Filosofia. Psicologia.
* \`2\`: Religião. Teologia.
* \`3\`: Ciências Sociais. Direito (34). Política (32). Economia (33).
* \`4\`: **VAGA** (reservada para futuras expansões do conhecimento; linguística migrou para a classe 8).
* \`5\`: Matemática. Ciências Naturais.
* \`6\`: Ciências Aplicadas. Medicina. Tecnologia.
* \`7\`: Arte. Recreação. Entretenimento. Desporto.
* \`8\`: Linguagem. Linguística. Literatura.
* \`9\`: Geografia. Biografia. História.

#### B. Sinais de Coordenação e Relação (Sintaxe da CDU)
* \`+\` **Adição / Coordenação:** Une dois assuntos não consecutivos (ex.: \`622 + 669\` Mineração e Metalurgia).
* \`/\` **Extensão Consecutiva:** Une o primeiro e o último número de uma sequência contígua (ex.: \`53/55\` Física, Química e Geociências).
* \`:\` **Relação Simples:** Liga dois assuntos independentes, com relação reversível (ex.: \`34:681.3\` Informática Jurídica / Direito e Informática).
* \`::\` **Relação Fixa / Irreversível:** Trava a ordem do primeiro assunto na notação para fins de arquivamento (ex.: \`537::621.3\`).
* \`[ ]\` **Subagrupamento:** Chaves/colchetes algébricos para agrupar relações complexas (ex.: \`31:[622+669]\`).

#### C. Tabelas Auxiliares Comuns (Aplicáveis Universalmente)
1. **Independentes (podem começar a notação):**
   * *Lugar:* \`(1/9)\` (ex.: \`(81)\` Brasil).
   * *Forma:* \`(0...)\` (ex.: \`(035)\` Manual, \`(05)\` Periódicos, \`(094.9)\` Jurisprudência).
   * *Tempo:* \`"..."\` (ex.: \`"2026"\` Ano 2026).
   * *Língua:* \`=...\` (ex.: \`=134.3\` Português, \`=111\` Inglês).
   * *Raça e Nacionalidade:* \`(=...)\` (ex.: \`(=1-81)\` Povos indígenas).
2. **Dependentes (acopladas a um número principal):**
   * *Propriedades:* \`-02...\`
   * *Materiais:* \`-03...\`
   * *Pessoas:* \`-05...\` (ex.: \`-055.2\` Mulheres).

#### D. Subdivisões Auxiliares Especiais (Analíticas)
Diferenciam-se das comuns porque possuem significado restrito a classes determinadas:
* **Analítica de Traço (\`-1/-9\`):** Denotam processos, operações e equipamentos.
* **Analítica de Ponto Zero (\`.01/.09\`):** Indicam pontos de vista, teorias e metodologias daquela classe específica.
* **Analítica de Apóstrofo (\`'1/'9\`):** Síntese integrativa ou componentes químicos/materiais.`,
  checkpoints: [
    {
      id: 'cp-3-1-1',
      pergunta: 'Micro-Checkpoint 1: Estrutura Atual das Classes da CDU',
      item: 'Na Classificação Decimal Universal (CDU), a classe 4 encontra-se atualmente vaga, tendo seus conteúdos de linguística sido transferidos e agrupados com a literatura na classe 8.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é uma clássica pegadinha do Cebraspe. A classe 4 foi esvaziada para expansão futura, restando 9 classes ativas.',
    },
    {
      id: 'cp-3-1-2',
      pergunta: 'Micro-Checkpoint 2: Sinais de Relação na CDU',
      item: 'O sinal de dois pontos duplos (::) na CDU é utilizado como indicador de relação simples e perfeitamente reversível, permitindo a livre inversão dos números na composição notacional.',
      gabarito: 'E',
      justificativa: 'Errado! Os dois pontos duplos (::) indicam relação fixa ou irreversível. Quem indica relação reversível são os dois pontos simples (:).',
    },
      {
      id: 'cp-3-1-3',
      pergunta: "Micro-Checkpoint 3: Tabela 1 Auxiliar da CDD",
      item: "Na Classificação Decimal de Dewey (CDD), a Tabela 1 (Subdivisões Padrão) só pode ser utilizada quando houver instrução expressa na tabela principal de classificação autorizando a sua adição.",
      gabarito: 'E',
      justificativa: "Errado! As subdivisões padrão da Tabela 1 da CDD possuem caráter mnemônico universal e podem ser aplicadas a qualquer número da tabela principal, exceto quando houver instrução em contrário.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-3-1-1',
        periodo: '1876',
        disciplina: 'Classificação Decimal de Dewey (CDD)',
        focoPrincipal: 'Criação da primeira classificação decimal moderna estruturada em 10 classes',
        figuraChave: 'Melvil Dewey',
      },
      {
        id: 'tl-3-1-2',
        periodo: '1895 / 1905',
        disciplina: 'Classificação Decimal Universal (CDU)',
        focoPrincipal: 'Adaptação analítico-sintética e facetada da CDD com sinais de síntese e auxiliares comuns',
        figuraChave: 'Paul Otlet e Henri La Fontaine',
      },
      {
        id: 'tl-3-1-3',
        periodo: '1958',
        disciplina: 'Comissão Brasileira da CDU (IBBD/IBICT)',
        focoPrincipal: 'Implantação oficial e difusão sistemática da CDU no Brasil',
        figuraChave: 'IBBD / IBICT',
      },
    ],
    autores: [
      {
        id: 'aut-3-1-1',
        nome: 'Melvil Dewey',
        ano: 1876,
        obraPrincipal: 'A Classification and Subject Index for Cataloguing and Arranging the Books and Pamphlets of a Library',
        ideiaChave: 'Divisão decimal do saber, notação pura com ponto fixo após o terceiro dígito e ordenação relativa.',
        chipPegadinha: 'A CDD é predominantemente enumerativa, não analítico-sintética como a CDU.',
      },
      {
        id: 'aut-3-1-2',
        nome: 'Maria Antonieta Requião Piedade',
        ano: 1983,
        obraPrincipal: 'Introdução à teoria da classificação',
        ideiaChave: 'Fundamentos lógicos da classificação: gênero, espécie, mútua exclusividade e ordem útil.',
        chipPegadinha: 'Classificação documental serve à guarda e recuperação física e temática do acervo.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-3-1-1',
        afirmacao: 'Diferentemente da CDD, a notação da CDU utiliza estritamente números decimais puros sem qualquer presença de sinais gráficos de pontuação.',
        gabarito: 'E',
        porQue: 'A CDU utiliza uma profusão de sinais auxiliares (+ , / , : , :: , = , ( ) , " " , - , .0 , \'), enquanto a CDD usa notação numérica com apenas um ponto fixo.',
      },
      {
        id: 'peg-3-1-2',
        afirmacao: 'Na CDU, os sinais auxiliares especiais analíticos podem ser aplicados livremente a qualquer classe principal do sistema.',
        gabarito: 'E',
        porQue: 'Os auxiliares especiais têm aplicação restrita e localizada apenas nas seções da tabela principal para as quais foram expressamente criados.',
      },
    ],
  },
};

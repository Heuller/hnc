import type { ModuloFilho } from '../../../domain/types';

export const submodulo41: ModuloFilho = {
  id: 'sub-4-1',
  numero: '4.1',
  titulo: 'Recuperação da Informação, Álgebra Booleana e Mecanismos de Busca',
  descricaoCurta: 'Fundamentos de Information Retrieval (Mooers, Salton), álgebra booleana (AND, OR, NOT), operadores de proximidade e truncagem, modelos de recuperação (booleano, vetorial e probabilístico), arquivo invertido, motores de busca e metabuscadores.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Calvin Mooers', 'Gerard Salton', 'George Boole', 'Ricardo Baeza-Yates', 'Cyril Cleverdon'],
  alertasCebraspe: [
    'Operadores Booleanos e seus impactos em Revocação e Precisão: o operador AND (interseção) restringe a busca e AUMENTA A PRECISÃO; o operador OR (união) amplia a busca e AUMENTA A REVOCAÇÃO; o operador NOT (exclusão) restringe a busca e aumenta a precisão (mas com risco de eliminar documentos relevantes que abordem o termo secundariamente).',
    'Arquivo Invertido (Inverted Index): é a estrutura interna de dados padrão utilizada por praticamente todos os motores de busca e sistemas de RI para viabilizar buscas rápidas em grandes massas textuais, mapeando cada palavra/termo único a uma lista dos documentos onde ele ocorre.',
    'Metabuscador (Metamecanismo de busca / Busca Federada): NÃO possui base de dados própria! Ele envia a consulta simultaneamente a múltiplos motores ou bases de dados externas, coleta os resultados, elimina duplicatas e apresenta uma lista unificada.',
    'O Google NÃO é um metabuscador; o Google é um motor de busca direto que possui seus próprios robôs rastreadores (spiders/crawlers) e constrói seu próprio índice.',
    'Modelo Vetorial (Salton): representa documentos e consultas como vetores em um espaço multidimensional, calculando a relevância através do cosseno do ângulo entre os vetores (TF-IDF), permitindo recuperação parcial e ranqueamento por similaridade.',
  ],
  quadroComparativo: {
    titulo: 'Comparação dos Modelos Clássicos de Recuperação da Informação (RI)',
    colunas: ['Critério', 'Modelo Booleano Clássico', 'Modelo Vetorial (Salton - TF-IDF)', 'Modelo Probabilístico (Robertson)'],
    linhas: [
      ['Base Matemática', 'Teoria dos Conjuntos e Lógica Booleana', 'Álgebra Linear e Geometria Espacial (Espaço Vetorial)', 'Teoria da Probabilidade e Teorema de Bayes'],
      ['Tipo de Casamento', 'Binário e exato (Tudo ou Nada: pertence ou não pertence)', 'Gradual / Parcial baseado em pesos numéricos (Similaridade de Cosseno)', 'Probabilidade estatística de um documento ser relevante para a consulta'],
      ['Ranqueamento de Resultados', 'Não ranqueia (resultados não ordenados por grau de relevância)', 'Excelente ranqueamento contínuo por escore decrescente de similaridade', 'Ranqueamento decrescente por probabilidade de relevância estimada'],
      ['Ponderação de Termos', 'Não pondera (termos têm peso 1 ou 0)', 'Ponderação apurada: Frequência do Termo (TF) × Inverso da Frequência no Documento (IDF)', 'Pesos atribuídos a partir de parâmetros estatísticos da coleção'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Gênese e os Fundamentos da Recuperação da Informação (*Information Retrieval - IR*)
O termo **Recuperação da Informação** foi cunhado em 1950 pelo pioneiro da computação **Calvin Mooers**. Conforme a definição clássica de Gerard Salton e dos autores de referência contemporânea Ricardo Baeza-Yates e Berthier Ribeiro-Neto (*Modern Information Retrieval*):
> *"A Recuperação da Informação é o processo de representação, armazenamento, organização e acesso a itens de informação, com o propósito de disponibilizar ao usuário os documentos que atendem à sua necessidade de informação expressa em uma consulta."*

Ao contrário dos Bancos de Dados Relacionais clássicos (SGBDs baseados em SQL), que operam sobre dados estruturados com correspondência determinística e exata, os **Sistemas de Recuperação da Informação (SRI)** operam predominantemente sobre **textos em linguagem natural não estruturados ou semiestruturados**, onde a pertinência e a relevância possuem natureza conceitual, gradual e subjetiva.

\`\`\`decision
START: Coleção de Documentos | Textos não estruturados na base informacional
STEP: Pré-processamento Textual | Tokenização, remoção de stopwords e radicalização (stemming)
STEP: Indexação & Arquivo Invertido | Mapeamento estruturado de termos para os respectivos documentos
STEP: Formulação da Consulta (Query) | Usuário traduz necessidade de informação com termos e operadores
STEP: Casamento & Similaridade | Algoritmo (vetorial/probabilístico) compara query e índice invertido
STEP: Ranqueamento por Relevância | Atribuição de pesos (TF-IDF/BM25) e ordenação por pertinência
END: Entrega ao Usuário | Apresentação dos resultados para validação da necessidade
\`\`\`

---

### 2. Os Modelos Clássicos de Recuperação da Informação
O **CEBRASPE** cobra a comparação aprofundada dos três modelos matemáticos clássicos de RI:

| Critério Analítico | Modelo Booleano Clássico | Modelo do Espaço Vetorial (Gerard Salton) | Modelo Probabilístico (Robertson & Spärck Jones) |
| :--- | :--- | :--- | :--- |
| **Base Teórica Formal** | Teoria dos Conjuntos e Álgebra de George Boole (1854). | Álgebra Linear e Geometria Euclidiana multidimensional. | Teoria da Probabilidade e Teorema da Probabilidade Total de Bayes. |
| **Ponderação de Termos** | **Binária** (pesos $0$ ou $1$ — o termo está presente ou ausente). | **Numérica Contínua** baseada em frequências estatísticas (**TF-IDF**). | Probabilística baseada na distribuição de termos em classes de relevância. |
| **Tipo de Casamento (*Matching*)** | Exato e determinístico (Tudo ou Nada). Não aceita correspondência parcial. | **Casamento Parcial** baseado no ângulo de proximidade entre vetores. | Estimação da probabilidade de um documento ser relevante dada uma consulta. |
| **Ranqueamento dos Resultados** | **INEXISTENTE**. Os documentos recuperados não são ordenados por relevância. | **Excelente e contínuo**. Ordenação decrescente pelo Cosseno da Similaridade. | Ordenação decrescente pelo princípio da probabilidade de relevância (PRP). |
| **Vantagens Principais** | Simplicidade lógica, precisão em consultas de especialistas (Direito/Medicina). | Alta revocação, casamento gradual e ordenação intuitiva para usuários comuns. | Fundamentação teórica rigorosa em inferência estatística bayesiana. |
| **Limitações Críticas** | Rigidez extrema: não tolera sinônimos sem o operador OR; gera silêncio ou excesso. | Assume independência mútua entre os termos (o que não ocorre na linguagem real). | Exige dados amostrais prévios ou relevância inicial para calibrar as probabilidades. |

#### A. Detalhamento do Modelo do Espaço Vetorial e o Esquema TF-IDF (Gerard Salton, 1975)
No Modelo Vetorial desenvolvido no projeto SMART da Universidade de Cornell, cada documento $d_j$ e a consulta $q$ são representados como vetores multidimensionais em um espaço de $t$ dimensões, onde cada dimensão corresponde a um termo único do vocabulário:
* **Frequência do Termo no Documento (*Term Frequency - TF*):**
  $$TF_{i, j} = \\frac{f_{i, j}}{\\max_k f_{k, j}}$$
  *Mede quantas vezes o termo $t_i$ aparece no documento $d_j$. Quanto mais frequente o termo no documento, maior a evidência de que a obra trata daquele assunto.*
* **Inverso da Frequência no Documento (*Inverse Document Frequency - IDF*):**
  $$IDF_i = \\log \\left( \\frac{N}{n_i} \\right)$$
  *Onde $N$ é o número total de documentos da coleção e $n_i$ é o número de documentos que contêm o termo $t_i$. O IDF penaliza termos triviais que aparecem em quase todos os livros (baixo poder de discriminação) e valoriza termos raros e específicos.*
* **Peso TF-IDF Combinado:**
  $$w_{i, j} = TF_{i, j} \\times IDF_i$$
* **Medida de Similaridade do Cosseno (*Cosine Similarity*):**
  A proximidade entre o vetor da consulta $\\vec{q}$ e o vetor do documento $\\vec{d_j}$ é calculada pelo cosseno do ângulo $\\theta$ formado entre eles no espaço vetorial:
  $$\\text{Sim}(\\vec{q}, \\vec{d_j}) = \\cos(\\theta) = \\frac{\\vec{q} \\cdot \\vec{d_j}}{\\|\\vec{q}\\| \\times \\|\\vec{d_j}\\|}$$
  *Se os vetores coincidirem perfeitamente, $\\cos(0) = 1$ (similaridade máxima). Se forem perpendiculares (ortogonais), $\\cos(90^\\circ) = 0$ (sem termos em comum).*

---

### 3. Estratégias de Busca, Álgebra Booleana e Operadores Sintáticos
A elaboração de uma estratégia de busca exige o domínio cirúrgico dos operadores e de seus impactos nas taxas de Revocação (*Recall*) e Precisão (*Precision*):

#### A. Operadores Lógicos Booleanos
1. **Operador AND (E) — Interseção de Conjuntos:**
   * Exige a presença simultânea de todos os termos vinculados no documento.
   * *Efeito Matemático:* Restringe e afunila o universo de recuperação.
   * *Impacto no Desempenho:* **AUMENTA A PRECISÃO** e **DIMINUI A REVOCAÇÃO** (risco de silêncio documental se a busca for muito restritiva).
2. **Operador OR (OU) — União de Conjuntos:**
   * Recupera documentos que contenham qualquer um dos termos informados (ou todos eles).
   * *Finalidade Primordial:* Agrupar sinônimos, variantes linguísticas, plurais e termos correlatos (ex.: \`"Câmara dos Deputados" OR "Parlamento Brasileiro" OR "Poder Legislativo"\`).
   * *Impacto no Desempenho:* **AUMENTA A REVOCAÇÃO** e **DIMINUI A PRECISÃO** (aumenta o volume de itens recuperados, podendo gerar ruído).
3. **Operador NOT / AND NOT (NÃO) — Diferença / Exclusão:**
   * Elimina da recuperação os documentos que apresentem determinado termo indesejado (ex.: \`Licitação NOT "Pregão Eletrônico"\`).
   * *Impacto no Desempenho:* Aumenta a precisão, mas é considerado de **alto risco**, pois pode descartar documentos altamente pertinentes que apenas citem o termo excluído de passagem em uma nota de rodapé.

#### B. Ordem de Precedência e Parênteses
Em expressões booleanas complexas, os sistemas de recuperação seguem uma ordem padrão de avaliação (normalmente \`NOT\` $\\rightarrow$ \`AND\` $\\rightarrow$ \`OR\`). O uso de parênteses é mandatório para alterar a precedência:
$$\\text{(Processo Legislativo OR Regimento Interno) AND Votação NOT Urgência}$$

#### C. Operadores Sintáticos de Proximidade e Truncagem
* **Truncagem (*Wildcards*):**
  * *À Direita:* Recupera todas as palavras que compartilham o mesmo radical morfossintático (ex.: \`legisla*\` recupera legislação, legislativo, legislador, legislatura).
  * *Interna / Coringa Unicactere:* Substitui um único caractere para absorver variantes ortográficas (ex.: \`wom?n\` para *woman* e *women*; \`organi?ação\` para organização e organisação).
* **Operadores de Proximidade e Adjacência:**
  * \`ADJ\` ou aspas duplas \`"..."\`: Exigem que os termos apareçam imediatamente contíguos na mesma ordem (frase exata);
  * \`NEAR/n\`: Exige que os termos estejam a uma distância máxima de $n$ palavras um do outro, em qualquer ordem;
  * \`WITH\`: Exige que os termos estejam na mesma frase (*sentence*);
  * \`SAME\`: Exige que os termos estejam no mesmo campo ou parágrafo.

---

### 4. A Estrutura Interna de Dados: O Arquivo Invertido (*Inverted Index*)
Como os sistemas de busca conseguem responder consultas booleanas em bilhões de páginas em frações de segundo? Através da arquitetura do **Arquivo Invertido**:

\`\`\`timeline
T | Textos Originais na Base | Coleção de Documentos Brutos | Doc 1: "processo legislativo" | Doc 2: "regimento legislativo"
---> Tokenização e Inversão dos Ponteiros
INV | Arquivo Invertido (Inverted Index) | Dicionário em Memória & Postings | 'legislativo' → Doc 1 (pos 2), Doc 2 (pos 2) • 'processo' → Doc 1 (pos 1) • 'regimento' → Doc 2 (pos 1)
\`\`\`

* **Vocabulário / Dicionário de Termos:** Lista alfabética de todas as palavras distintas da coleção, mantida em memória primária rápida (estruturada em árvores B+ ou tabelas *Hash*).
* **Listas de Ocorrências (*Postings Lists*):** Para cada termo do vocabulário, há uma lista encadeada contendo os IDs dos documentos onde o termo aparece, a frequência local e a posição exata de cada palavra no texto (viabilizando operadores de frase e proximidade).
* **Processamento Booleano:** A operação \`termoA AND termoB\` resume-se a fazer a interseção das duas listas de ponteiros na memória RAM, sem jamais precisar reabrir os arquivos de texto originais no disco.

---

### 5. Mecanismos de Busca Diretos vs. Metabuscadores (Busca Federada)
O CEBRASPE cobra com insistência a distinção arquitetural entre os motores de busca e os metabuscadores:

| Característica | Mecanismo de Busca Direto (Ex.: Google, Bing) | Metabuscador / Busca Federada (Ex.: MetaGer, Dogpile, Portal CAPES) |
| :--- | :--- | :--- |
| **Base de Dados Própria** | **SIM**. Armazena terabytes de páginas e índices em datacenters próprios. | **NÃO POSSUI BASE DE DADOS PRÓPRIA DE DOCUMENTOS**. |
| **Coleta da Web (*Crawling*)** | Emprega robôs rastreadores (*spiders/crawlers*) que navegam continuamente. | **Não realiza rastreamento**. Consulta APIs ou formulários de motores externos. |
| **Funcionamento Operacional** | Pesquisa diretamente no seu próprio arquivo invertido local. | Envia a consulta simultaneamente em paralelo para múltiplos motores externos. |
| **Tratamento dos Resultados** | Aplica algoritmo proprietário de relevância (ex.: PageRank). | Recebe as listas externas, **elimina duplicatas**, funde e reordena os resultados. |
| **Vantagem Principal** | Velocidade extrema e controle total do índice. | Amplitude e cobertura: permite consultar acervos heterogêneos com uma única busca. |

---

### 6. Quadro Sinóptico de Cascas de Banana do Cebraspe em RI

| Afirmação Típica da Banca | Gabarito | Erro Crítico / Armadilha Oculta |
| :--- | :--- | :--- |
| *"No modelo booleano clássico de recuperação, os documentos recuperados são automaticamente ordenados pelo grau decrescente de pertinência temática."* | **ERRADO** | O modelo booleano **não ranqueia** resultados; o casamento é binário (pertence ou não pertence ao conjunto). |
| *"A aplicação do operador booleano OR tem por objetivo primordial elevar a precisão da pesquisa documental."* | **ERRADO** | O operador OR serve para elevar a **REVOCAÇÃO**, pois amplia o escopo unindo sinônimos e termos correlatos. |
| *"Os metabuscadores destacam-se por manter o maior repositório indexado próprio de documentos científicos da Internet."* | **ERRADO** | Metabuscadores **não mantêm base própria de documentos**; realizam busca federada intermediando fontes externas. |
| *"No cálculo do TF-IDF de Gerard Salton, palavras presentes em praticamente todos os documentos da base recebem os maiores valores de IDF."* | **ERRADO** | Quanto mais frequente o termo na coleção ($n_i \\approx N$), menor o seu IDF (tende a zero); o IDF valoriza termos **raros**. |`,
  checkpoints: [
    {
      id: 'cp-4-1-1',
      pergunta: 'Micro-Checkpoint 1: Operadores Booleanos e Desempenho de RI',
      item: 'Na formulação de uma estratégia de busca em base de dados documental, o emprego do operador booleano OR visa restringir a quantidade de resultados para aumentar a precisão da pesquisa.',
      gabarito: 'E',
      justificativa: 'Errado! O operador OR é de união; ele amplia a pesquisa agrupando termos e sinônimos, com a finalidade precípua de elevar a REVOCAÇÃO (e não a precisão).',
    },
    {
      id: 'cp-4-1-2',
      pergunta: 'Micro-Checkpoint 2: Funcionamento dos Metabuscadores',
      item: 'Os metabuscadores caracterizam-se por realizar buscas federadas em múltiplos sistemas e bases de dados heterogêneas a partir de uma interface única, sem a necessidade de manterem um repositório próprio de documentos.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a definição conceitual de metabuscador: um provedor de serviço que pesquisa em fontes distribuídas sem ter base de dados própria.',
    },
      {
      id: 'cp-4-1-3',
      pergunta: "Micro-Checkpoint 3: Modelo Vetorial de Gerard Salton",
      item: "O modelo vetorial de recuperação da informação desenvolvido por Salton atribui pesos aos termos nos documentos e nas consultas, permitindo a ordenação dos resultados por grau de similaridade (ranking).",
      gabarito: 'C',
      justificativa: "Certo! Diferente do modelo booleano rígido (binário: 0 ou 1), o modelo vetorial usa esquemas de ponderação como TF-IDF e calcula o cosseno do ângulo entre os vetores para ranquear a relevância.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-1-1',
        periodo: '1854',
        disciplina: 'Lógica Matemática',
        focoPrincipal: 'Formulação da Álgebra Booleana por George Boole (Leis do Pensamento)',
        figuraChave: 'George Boole',
      },
      {
        id: 'tl-4-1-2',
        periodo: '1950',
        disciplina: 'Information Retrieval',
        focoPrincipal: 'Criação do termo "Recuperação da Informação" (Information Retrieval)',
        figuraChave: 'Calvin Mooers',
      },
      {
        id: 'tl-4-1-3',
        periodo: '1968 / 1975',
        disciplina: 'Modelo Vetorial e SMART',
        focoPrincipal: 'Desenvolvimento do Modelo do Espaço Vetorial e da métrica TF-IDF na Universidade de Cornell',
        figuraChave: 'Gerard Salton',
      },
    ],
    autores: [
      {
        id: 'aut-4-1-1',
        nome: 'Calvin Mooers',
        ano: 1950,
        obraPrincipal: 'Information retrieval viewed as a temporal signalling process',
        ideiaChave: 'Cunhador da expressão Information Retrieval; pioneiro dos sistemas de cartões perfurados (Zatocoding).',
        chipPegadinha: 'Mooers é o pai do termo "Recuperação da Informação".',
      },
      {
        id: 'aut-4-1-2',
        nome: 'Gerard Salton',
        ano: 1975,
        obraPrincipal: 'A Vector Space Model for Automatic Indexing',
        ideiaChave: 'Pai da moderna recuperação da informação, criador do modelo vetorial, similaridade por cosseno e do sistema SMART.',
        chipPegadinha: 'O modelo vetorial permite correspondência parcial e ranqueamento por relevância, superando o booleano exato.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-1-1',
        afirmacao: 'O mecanismo de busca Google é um exemplo clássico de metabuscador disponível na Web.',
        gabarito: 'E',
        porQue: 'O Google é um motor de busca direto com crawlers e base de dados própria de índices, não um metabuscador.',
      },
      {
        id: 'peg-4-1-2',
        afirmacao: 'O arquivo invertido é uma técnica ultrapassada que foi totalmente abolida dos sistemas informatizados de recuperação de informação.',
        gabarito: 'E',
        porQue: 'O arquivo invertido continua sendo a estrutura de dados mais rápida, eficiente e amplamente empregada na engenharia de motores de busca.',
      },
    ],
  },
};

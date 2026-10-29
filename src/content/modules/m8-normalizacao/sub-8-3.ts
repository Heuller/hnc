import type { ModuloFilho } from '../../../domain/types';

export const submodulo83: ModuloFilho = {
  id: 'sub-8-3',
  numero: '8.3',
  editalRef: 'Bloco D - Item 5.4',
  preRequisitos: ["sub-8-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-8-4",
          "titulo": "NBR 6028 (Resumos)",
          "motivo": "Estruturação de trabalhos acadêmicos e elementos pré-textuais."
      }
  ],
  titulo: 'ABNT NBR 14724:2024: Apresentação de Trabalhos Acadêmicos',
  antesDeLer: [
    {
      termo: 'ABNT NBR 14724:2024',
      definicao: 'Norma técnica brasileira (4ª edição, publicada em 16/12/2024, que cancela e substitui a NBR 14724:2011) que especifica os princípios gerais para a apresentação formal de trabalhos acadêmicos (teses, dissertações e TCCs).',
      exemploBiblioteca: 'Revisão formal das monografias produzidas pelos alunos dos cursos de pós-graduação do Centro de Formação (Cefor) da Câmara.',
    },
    {
      termo: 'Estrutura do Trabalho Acadêmico',
      definicao: 'Divisão formal tripartite: elementos pré-textuais, elementos textuais (introdução, desenvolvimento, conclusão) e elementos pós-textuais.',
      exemploBiblioteca: 'Verificação da correta paginação, onde a contagem inicia na folha de rosto, mas a numeração só aparece na primeira folha textual.',
    },
    {
      termo: 'Elementos Pré-Textuais Obrigatórios',
      definicao: 'Folha de rosto, folha de aprovação, resumo na língua vernácula, resumo em língua estrangeira e sumário.',
      exemploBiblioteca: 'Checklist de conferência de teses depositadas na Biblioteca Pedro Aleixo para publicação institucional.',
    },
    {
      termo: 'Anexo vs. Apêndice',
      definicao: 'Apêndice é documento elaborado pelo próprio autor do trabalho para complementar sua argumentação; Anexo é texto de terceiros não elaborado pelo autor.',
      exemploBiblioteca: 'Questionário aplicado aos parlamentares entra como Apêndice; cópia do texto do Regimento Interno entra como Anexo.',
    },
  ],
  descricaoCurta: 'A estrutura formal de teses, dissertações e monografias segundo a ABNT NBR 14724:2024 (4ª edição, que substitui a edição de 2011), cobrindo elementos pré-textuais, textuais e pós-textuais, a distinção canônica entre Apêndice (autoria própria) e Anexo (autoria de terceiros), numeração progressiva de seções (NBR 6024:2012), lombada (NBR 12225:2023), regras de margens, paginação e apresentação tabular (IBGE vs. ABNT).',
  tempoEstimadoMinutos: 12,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro CB-014', 'Instituto Brasileiro de Geografia e Estatística (IBGE)', 'Júnia Lessa França'],
  alertasCebraspe: [
    'Técnica Recorrente de Distrator na NBR 14724:2024: Apêndice vs. Anexo. Apêndice é o texto ou documento elaborado PELO PRÓPRIO AUTOR do trabalho (ex.: questionário aplicado, formulário de pesquisa, roteiro de entrevista); Anexo é o documento pré-existente elaborado POR TERCEIROS (ex.: texto de lei, laudo pericial, regimento interno). A técnica de distrator mais recorrente consiste na inversão conceitual entre apêndice e anexo.',
    'Elementos Obrigatórios vs. Opcionais na parte Pré-Textual: Obrigatórios = Folha de Rosto (com ficha catalográfica no verso), Folha de Aprovação (obrigatória para teses e dissertações), Resumo na língua vernácula, Resumo em língua estrangeira e Sumário (NBR 6027:2012). Opcionais = Errata, Dedicatória, Agradecimentos, Epígrafe, Listas de Ilustrações, Listas de Tabelas, Siglas e Símbolos.',
    'Regra Estrita de Paginação da NBR 14724:2024: todas as folhas a partir da FOLHA DE ROSTO são CONTADAS na sequência numérica, mas o número da página só é IMPRESSO a partir da primeira folha da parte textual (INTRODUÇÃO), posicionado no canto superior direito a 2 cm da borda superior.',
    'Margens regulamentares da folha (para impressão no anverso): Margem Superior e Margem Esquerda = 3 cm; Margem Inferior e Margem Direita = 2 cm. Para anverso e verso, as margens externas e internas alternam-se.',
    'Espaçamento interlinear: 1,5 para o texto corrido; espaçamento SIMPLES para citações diretas longas (recuadas a 4 cm), notas de rodapé, referências bibliográficas, legendas de ilustrações e tabelas.',
    'Diferença entre Tabela (IBGE) e Quadro (ABNT): Tabelas apresentam prioritariamente dados numéricos/quantitativos, têm topo e base delimitados por traços horizontais e NÃO possuem traços verticais de fechamento lateral (são abertas dos lados); Quadros apresentam dados textuais/qualitativos e são totalmente fechados por linhas em todos os quatro lados.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura Completa de Trabalhos Acadêmicos segundo a ABNT NBR 14724:2024',
    colunas: ['Parte Estrutural', 'Elementos Constitutivos Obrigatórios', 'Elementos Constitutivos Opcionais', 'Regra Específica de Formatação e Paginação', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Parte Externa', 'Capa (com instituição, autor, título, subtítulo, local e ano)', 'Lombada (conforme NBR 12225:2023)', 'Não é contada nem numerada na paginação do miolo', 'Considerar a capa como a primeira folha contada na paginação (FALSO: conta da folha de rosto).'],
      ['Elementos Pré-Textuais', 'Folha de rosto, Folha de aprovação, Resumo em português, Resumo em língua estrangeira, Sumário (NBR 6027:2012)', 'Errata, Dedicatória, Agradecimentos, Epígrafe, Lista de ilustrações, tabelas, siglas e símbolos', 'Contados a partir da folha de rosto, mas NÃO exibem número de página impresso', 'Afirmar que o sumário é pós-textual ou opcional (FALSO: é pré-textual obrigatório).'],
      ['Elementos Textuais', 'Introdução, Desenvolvimento (seções e subseções numeradas - NBR 6024:2012) e Conclusão', 'Nenhum (todos os elementos textuais são de redação compulsória)', 'Inicia a impressão física do número da página no canto superior direito (algarismos arábicos)', 'Dizer que a introdução não é numerada (FALSO: é a primeira página impressa).'],
      ['Elementos Pós-Textuais', 'Referências (conforme NBR 6023:2018)', 'Vocabulário de termos (NBR 14724), Apêndice (próprio autor), Anexo (terceiros) e Índice (NBR 6034:2004)', 'Continuam a numeração arábica sequencial do texto principal', 'Inverter apêndice (próprio autor) e anexo (terceiros), ou achar que anexo é obrigatório.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Estrutura Formal da ABNT NBR 14724:2024 (4ª Edição)

A norma **ABNT NBR 14724:2024** (*Informação e Documentação — Trabalhos Acadêmicos — Apresentação*, 4ª edição, publicada em 16/12/2024, que cancela e substitui a NBR 14724:2011) padroniza a produção formal de teses de doutorado, dissertações de mestrado, trabalhos de conclusão de curso (TCC), monografias de especialização e relatórios de pesquisa:

\`\`\`tree
TITLE: Estrutura do Trabalho Acadêmico (ABNT NBR 14724:2024)
- Trabalho Acadêmico (NBR 14724:2024) | Teses, dissertações, TCCs e monografias
  - Parte Externa | Proteção física e identificação inicial
    - Capa | Elemento OBRIGATÓRIO de proteção física externa
    - Lombada | Elemento OPCIONAL conforme ABNT NBR 12225:2023
  - Elementos Pré-Textuais | Antecedem o corpo da pesquisa e contextualizam o leitor
    - Pré-Textuais Obrigatórios | Folha de rosto, folha de aprovação, resumo na língua vernácula, resumo em língua estrangeira e sumário (NBR 6027:2012)
    - Pré-Textuais Opcionais | Errata, folha de dedicatória, folha de agradecimentos, epígrafe, lista de ilustrações, lista de tabelas e lista de abreviaturas/siglas
  - Elementos Textuais | O núcleo substantivo e investigativo do trabalho
    - Introdução | Apresentação do tema, problema, hipóteses, justificativa e objetivos
    - Desenvolvimento | Revisão de literatura, fundamentação teórica, metodologia e análise de dados
    - Conclusão | Considerações finais, resposta aos objetivos e recomendações
  - Elementos Pós-Textuais | Complementam e enriquecem o texto após a conclusão
    - Pós-Textual Obrigatório | Referências elaboradas estritamente segundo a ABNT NBR 6023
    - Pós-Textuais Opcionais | Vocabulário de termos, apêndice(s) (autoria própria), anexo(s) (autoria de terceiros) e índice(s) remissivo(s) (NBR 6034)
\`\`\`

#### A Divisão Tripartite Padronizada:
1. **Elementos Pré-Textuais:** Antecedem o corpo da pesquisa, preparando e contextualizando o leitor.
2. **Elementos Textuais:** O núcleo substantivo do trabalho (a introdução teórica e problemática, o desenvolvimento com revisão e metodologia, e a conclusão/considerações finais).
3. **Elementos Pós-Textuais:** Complementam e enriquecem o texto após a conclusão.

---

### 2. Elementos Obrigatórios vs. Facultativos

A formulação de assertivas comumente explora assertivas exigindo distinguir quais elementos são de inclusão compulsória:

* **Pré-Textuais Obrigatórios:**
  * **Folha de Rosto:** No verso, deve conter a **Ficha Catalográfica (CIP)** elaborada por bibliotecário registrado no CRB.
  * **Folha de Aprovação:** Obrigatória em trabalhos submetidos a banca examinadora (teses e dissertações), contendo data de aprovação, assinaturas e titulações dos membros.
  * **Resumo na língua vernácula:** Em português, acompanhado das palavras-chave (NBR 6028).
  * **Resumo em língua estrangeira:** Usualmente em inglês (*abstract/keywords*).
  * **Sumário:** O último elemento pré-textual antes da Introdução (NBR 6027).
* **Pré-Textuais Opcionais:**
  * **Errata:** Folha avulsa inserida logo após a folha de rosto quando erros tipográficos substantivos são corrigidos após a impressão final.
  * **Dedicatória, Agradecimentos e Epígrafe:** Manifestações pessoais do autor. A epígrafe contém pensamento alheio e deve ser seguida da indicação de autoria.
  * **Listas Técnicas:** Lista de ilustrações (gráficos, fluxogramas, fotografias), Lista de tabelas, Lista de abreviaturas e siglas, e Lista de símbolos. Quando elaboradas, devem figurar em folhas próprias.
* **Pós-Textuais Obrigatórios:**
  * **Referências:** O único elemento pós-textual obrigatório da norma (elaborado segundo a NBR 6023).
* **Pós-Textuais Opcionais:**
  * **Vocabulário de Termos Técnicos:** Lista em ordem alfabética de termos técnicos pouco conhecidos com suas respectivas definições (NBR 14724).
  * **Apêndices:** Documentos elaborados pelo próprio autor.
  * **Anexos:** Documentos de autoria de terceiros.
  * **Índices:** Relações sistemáticas ou alfabéticas de assuntos e autores (NBR 6034).

---

### 3. A Distinção Canônica: Apêndice vs. Anexo

Esta é uma das distinções conceituais centrais cobradas em provas de Biblioteconomia:

| Critério | Apêndice (NBR 14724) | Anexo (NBR 14724) |
| :--- | :--- | :--- |
| **Autoria Intelectual** | **Elaborado pelo PRÓPRIO AUTOR do trabalho.** | **Elaborado por TERCEIROS (entidades ou autores alheios).** |
| **Finalidade** | Complementar a argumentação com dados primários sem sobrecarregar o corpo do texto. | Servir de fundamentação, ilustração ou comprovação fática/documental pré-existente. |
| **Exemplos Típicos** | Questionário aplicado, roteiro de entrevista, transcrição bruta de dados coletados. | Cópia de Lei, parecer de agência reguladora, laudo pericial, estatuto partidário. |
| **Identificação Formal** | Letras maiúsculas consecutivas, travessão e título em caixa alta/baixa. | Letras maiúsculas consecutivas, travessão e título original da peça. |
| **Exemplo Formatado** | \`APÊNDICE A – Roteiro da entrevista com bibliotecários da Câmara\` | \`ANEXO A – Regimento Interno da Câmara dos Deputados\` |

* *Nota de Esgotamento das Letras:* Quando se esgotam as 26 letras do alfabeto, utilizam-se letras maiúsculas dobradas: \`APÊNDICE AA\`, \`APÊNDICE AB\`.

---

### 4. Regras Gráficas de Formatação, Margens e Paginação

* **Formato e Margens (Impressão no Anverso / Frente da Folha):**
  * Papel branco formato A4 ($210 \\times 297$ mm).
  * **Margem Superior = 3,0 cm**
  * **Margem Esquerda = 3,0 cm** (espaço ampliado para permitir encadernação e furação)
  * **Margem Inferior = 2,0 cm**
  * **Margem Direita = 2,0 cm**
* **Tipografia e Espaçamento:**
  * Fonte uniforme recomendada (Arial ou Times New Roman), tamanho 12 para todo o texto.
  * Tamanho menor (corpo 10 ou 11) reservado exclusivamente para: citações diretas longas recuadas, notas de rodapé explicativas, paginação e legendas/fontes de ilustrações e tabelas.
  * Espaçamento entre linhas de **1,5** para o texto corrido.
  * Espaçamento **simples** para: citações longas recuadas, notas, referências bibliográficas ao final, legendas de figuras e natureza do trabalho na folha de rosto.
* **A Regra de Ouro da Paginação (Contagem vs. Impressão):**
  1. A contagem sequencial das páginas inicia-se formalmente na **Folha de Rosto** (a capa NÃO é contada nem numerada).
  2. Todas as folhas pré-textuais são contadas na sequência matemática, mas **nenhum número é impresso nelas**.
  3. O número da página só deve figurar fisicamente **impresso a partir da primeira folha da parte textual (a INTRODUÇÃO)**.
  4. A numeração é impressa no **canto superior direito da folha**, em algarismos arábicos, a exatamente 2 cm da borda superior.

---


### 4.1 O que Mudou de 2011 para 2024 na ABNT NBR 14724

A 4ª edição da ABNT NBR 14724 (publicada em 16 de dezembro de 2024) atualizou formalmente a apresentação de trabalhos acadêmicos no Brasil:

| Tópico Analisado | Edição Anterior (NBR 14724:2011) | Edição Vigente (ABNT NBR 14724:2024) |
| :--- | :--- | :--- |
| **Edição e Vigência** | 3ª edição (2011, confirmada em 2021) | **4ª edição**, publicada e em vigor desde **16/12/2024** (cancelou e substituiu a de 2011). |
| **Folha de Aprovação** | Exigia assinaturas físicas em folha própria do exemplar impresso | Contempla expressamente os formatos de **defesa remota e ata eletrônica/assinatura digital** no âmbito dos sistemas institucionais (SEI e afins). |
| **Harmonização Normativa** | Redigida à época da NBR 6023:2002 e NBR 10520:2002 | Totalmente harmonizada com a **NBR 10520:2023** (citações) e com a **NBR 6023:2025** (referências). |
| **Estrutura Tripartite** | Elementos pré-textuais, textuais e pós-textuais | **Rigorosamente mantida** a divisão tripartite clássica. |
| **Apêndice vs. Anexo** | Apêndice = próprio autor; Anexo = terceiros | **Rigorosamente mantida** a distinção canônica de autoria intelectual. |
| **Regra de Paginação** | Conta da folha de rosto; imprime da introdução | **Rigorosamente mantida** no anverso (canto superior direito a 2 cm da borda). |
| **Apresentação Tabular** | Quadros com laterais fechadas; tabelas IBGE abertas | **Rigorosamente mantida**. |

---

### 5. Numeração Progressiva (NBR 6024) e Apresentação Tabular (IBGE vs. ABNT)

#### A. Numeração Progressiva das Seções (ABNT NBR 6024)
* As seções do documento são numeradas em algarismos arábicos até o limite recomendado de 5 níveis (seções quinárias):
  * Primária: \`1 INTRODUÇÃO\`
  * Secundária: \`1.1 OBJETIVOS\`
  * Terciária: \`1.1.1 Objetivos específicos\`
  * Quaternária: \`1.1.1.1 Detalhamento\`
* *Regra de Pontuação da NBR 6024:* **NÃO se utiliza ponto, hífen ou travessão** entre o número da seção e o seu respectivo título (ex.: grafa-se \`1 INTRODUÇÃO\`, e NUNCA \`1. INTRODUÇÃO\` ou \`1 - INTRODUÇÃO\`).
* Títulos sem numeração (agrupados no centro): errata, agradecimentos, resumos, sumário, referências e anexos.

#### B. Apresentação de Tabelas (IBGE) vs. Quadros (ABNT)
* **Tabelas (Normas de Apresentação Tabular do IBGE):**
  * Destinam-se a apresentar informações **quantitativas e dados numéricos**.
  * São delimitadas no topo e na base por **linhas horizontais**; linhas horizontais internas separam o cabeçalho do conteúdo.
  * **Traços Verticais de Fechamento Lateral são PROIBIDOS:** As laterais esquerda e direita de uma tabela permanecem **sempre abertas**.
* **Quadros (ABNT NBR 14724):**
  * Destinam-se a apresentar informações **qualitativas, descritivas e textuais**.
  * São **fechados lateralmente por linhas verticais em todos os quatro lados**, formando uma grade completa.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **NBR 6028 (Resumos) (sub-8-4):** Estruturação de trabalhos acadêmicos e elementos pré-textuais.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **ABNT NBR 14724:2024** padroniza a estrutura, formatação e apresentação formal de **Trabalhos Acadêmicos** (teses, dissertações, TCCs e estudos monográficos):
1. **Estrutura Tripartite Canônica:**
   - **Elementos Pré-Textuais:** Precedem o texto; auxiliam na identificação e localização das partes.
     - *Obrigatórios:* Folha de rosto, Ficha catalográfica (no verso da folha de rosto), Folha de aprovação, Resumo na língua vernácula (com palavras-chave), Resumo em língua estrangeira (Abstract) e Sumário.
     - *Opcionais:* Capa (externa), Lombada, Errata, Dedicatória, Agradecimentos, Epígrafe, Lista de ilustrações, Lista de tabelas, Lista de abreviaturas e siglas, e Lista de símbolos.
   - **Elementos Textuais (Obrigatórios):** Introdução, Desenvolvimento e Conclusão.
   - **Elementos Pós-Textuais:** Complementam e documentam o trabalho.
     - *Obrigatório:* Referências.
     - *Opcionais:* Glossário, Apêndice (texto/documento elaborado pelo próprio autor), Anexo (documento elaborado por terceiros/não elaborado pelo autor) e Índice.
2. **Regras Gráficas de Formatação:**
   - **Margens:** Esquerda e Superior de **3 cm**; Direita e Inferior de **2 cm** (para impressão em anverso/frente).
   - **Espaçamento:** Texto em espaçamento **1,5** entre linhas. Citações longas, notas de rodapé, referências, legendas e ficha catalográfica em espaçamento simples.
   - **Numeração de Páginas:** Todas as folhas contam a partir da folha de rosto, mas a numeração só é **impressa visualmente a partir da primeira folha da parte textual (Introdução)**, no canto superior direito!

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Ficha Catalográfica na Biblioteca Pedro Aleixo):** Um consultor da Câmara defende dissertação de mestrado pelo Centro de Formação, Treinamento e Aperfeiçoamento (CEFOR). A biblioteca confecciona a **ficha catalográfica CIP** que deve constar obrigatoriamente no verso da folha de rosto do trabalho impresso ou imediatamente após a folha de rosto no PDF da BDCam.
- **Cenário 2 (Distinção entre Apêndice e Anexo em Estudo Legislativo):** Ao organizar um estudo monográfico sobre segurança pública, o consultor anexa a cópia do texto integral do Acórdão do STF (como não foi produzido por ele, é um **Anexo**) e acrescenta a tabela com cálculos estatísticos que ele próprio modelou no Excel (como foi elaborado pelo autor, é um **Apêndice**).
- **Cenário 3 (Auditoria de Margens e Numeração pela Editora da Câmara):** Antes de enviar o livro técnico para a gráfica, o bibliotecário-editor confere: margem superior e esquerda de 3 cm, inferior e direita de 2 cm, e numeração visível iniciando na primeira página da Introdução.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Elemento Pré/Pós-Textual | Obrigatoriedade na NBR 14724 | Função Canônica | Distinção Crítica |
| :--- | :--- | :--- | :--- |
| **Folha de Rosto** | **Obrigatório** | Identifica título, autor e natureza | Conta página, mas não imprime número |
| **Capa** | Opcional | Proteção externa | Não conta na paginação interna |
| **Sumário** | **Obrigatório** | Enumera as divisões do trabalho | Pré-textual (o último antes do texto) |
| **Apêndice** | Opcional | Texto/documento complementar | **Elaborado pelo próprio autor** |
| **Anexo** | Opcional | Documento comprobatório externo | **Não elaborado pelo autor** (de terceiros) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Apêndice vs. Anexo:** A técnica de distrator mais recorrente em normalização: a banca inverte as autorias, afirmando que o anexo é produzido pelo autor e o apêndice por terceiros. **Gabarito: ERRADO.** Lembre-se: **Apêndice = Autor**; **Anexo = Alheio**.
- **Onde Inicia a Impressão da Numeração de Páginas:** Dizer que a numeração começa a ser impressa no canto superior direito já na Folha de Rosto. **Gabarito: ERRADO.** A folha de rosto é contada, mas o número só aparece impresso na **Introdução** (primeira folha textual).
- **Capa como Elemento Obrigatório:** Afirmar que a capa dura é elemento pré-textual obrigatório pela NBR 14724. **Gabarito: ERRADO.** A capa é elemento opcional; a folha de rosto é que é obrigatória.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 14724:2024: Informação e documentação — Trabalhos acadêmicos — Apresentação*. 4. ed. Rio de Janeiro: ABNT, 16 dez. 2024. (Norma vigente que cancela e substitui formalmente a edição de 2011). (A norma oficial de estrutura monográfica).
- **FRANÇA, Júnia Lessa et al.** *Manual de normalização de publicações técnico-científicas*. 10. ed. Belo Horizonte: Ed. UFMG, 2019.
- **REY, Luís.** *Planejar e redigir trabalhos científicos*. 2. ed. São Paulo: Edgard Blücher, 2003.
- **CENTRO DE FORMAÇÃO, TREINAMENTO E APERFEIÇOAMENTO (CEFOR).** *Manual de TCC e Dissertações do CEFOR*. Brasília: Câmara dos Deputados, 2022.
- **MEDEIROS, João Bosco.** *Redação científica*. 13. ed. São Paulo: Atlas, 2019.`,
  checkpoints: [
    {
      id: 'cp-8-3-1',
      pergunta: 'Micro-Checkpoint 1: Diferença entre Apêndice e Anexo na NBR 14724',
      item: 'Nos termos da ABNT NBR 14724, denomina-se anexo o documento complementar elaborado pelo próprio autor da monografia, enquanto apêndice designa o documento de autoria de terceiros incluído para comprovação.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe inverteu os conceitos: APÊNDICE é o documento elaborado pelo PRÓPRIO AUTOR; ANEXO é o documento de autoria de TERCEIROS.',
    },
    {
      id: 'cp-8-3-2',
      pergunta: 'Micro-Checkpoint 2: Regra de Paginação de Trabalhos Acadêmicos',
      item: 'Conforme a NBR 14724, todas as folhas do trabalho acadêmico a partir da folha de rosto são contadas, porém a numeração só deve figurar impressa a partir da primeira folha da parte textual.',
      gabarito: 'C',
      justificativa: 'Correto! A contagem começa na folha de rosto, mas a impressão dos números em algarismos arábicos ocorre apenas na introdução.',
    },
    {
      id: 'cp-8-3-3',
      pergunta: 'Micro-Checkpoint 3: Estrutura do Sumário conforme ABNT NBR 6027',
      item: 'Segundo a ABNT NBR 6027, os elementos pré-textuais, como a dedicatória, o agradecimento e a lista de abreviaturas, devem constar obrigatoriamente no sumário do trabalho acadêmico.',
      gabarito: 'E',
      justificativa: 'Errado! Os elementos pré-textuais NÃO devem constar no sumário. O sumário subordina exclusivamente a enumeração das divisões textuais e pós-textuais (NBR 6027:2012 item 4.2).',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-3-1',
        periodo: '2002',
        disciplina: 'Primeira Edição da NBR 14724',
        focoPrincipal: 'Unificação dos padrões de apresentação de teses, dissertações e monografias no país',
        figuraChave: 'ABNT / Comitê CB-014',
      },
      {
        id: 'tl-8-3-2',
        periodo: '2024 (Vigente)',
        disciplina: '4ª Edição da NBR 14724 (Substitui 2011)',
        focoPrincipal: 'Consolidação da estrutura pré-textual, textual e pós-textual, regras estritas de paginação e distinção cabal entre apêndice e anexo',
        figuraChave: 'ABNT CB-014',
      },
      {
        id: 'tl-8-3-3',
        periodo: '2012',
        disciplina: 'NBR 6024 (Numeração Progressiva)',
        focoPrincipal: 'Padronização da numeração de seções sem pontuação entre o número e o título',
        figuraChave: 'ABNT CB-014',
      },
    ],
    autores: [
      {
        id: 'aut-8-3-1',
        nome: 'ABNT CB-014',
        ano: 2024,
        obraPrincipal: 'ABNT NBR 14724:2024: Informação e documentação — Trabalhos acadêmicos — Apresentação (4ª ed.)',
        ideiaChave: 'Divisão tripartite pré-textual, textual e pós-textual; diferenciação de apêndice e anexo.',
        chipPegadinha: 'Memorize: Apêndice = Autor do trabalho; Anexo = Alheio (terceiros).',
      },
      {
        id: 'aut-8-3-2',
        nome: 'IBGE / Diretoria de Geociências',
        ano: 1993,
        obraPrincipal: 'Normas de Apresentação Tabular',
        ideiaChave: 'Padronização visual e semântica de tabelas (topo e base com traços horizontais; sem fechamento lateral vertical).',
        chipPegadinha: 'Tabelas seguem normas do IBGE (lados abertos); quadros seguem a ABNT (lados fechados).',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-3-1',
        afirmacao: 'O sumário e o resumo na língua vernácula são classificados como elementos pré-textuais opcionais na elaboração de teses e dissertações acadêmicas.',
        gabarito: 'E',
        porQue: 'Tanto o sumário quanto o resumo em língua portuguesa são elementos pré-textuais OBRIGATÓRIOS pela NBR 14724.',
      },
      {
        id: 'peg-8-3-2',
        afirmacao: 'Na formatação gráfica da folha de um trabalho acadêmico, as margens esquerda e superior devem ser configuradas com 2 cm, e as margens direita e inferior com 3 cm.',
        gabarito: 'E',
        porQue: 'As medidas são inversas: Esquerda e Superior = 3 cm (para permitir encadernação); Direita e Inferior = 2 cm.',
      },
      {
        id: 'peg-8-3-3',
        afirmacao: 'De acordo com a ABNT NBR 6024, deve-se obrigatoriamente inserir um ponto final após o número indicativo de uma seção primária e antes do título correspondente (exemplo: 1. INTRODUÇÃO).',
        gabarito: 'E',
        porQue: 'A NBR 6024 veda expressamente o uso de ponto, hífen ou qualquer sinal entre o número da seção e o seu título. O correto é "1 INTRODUÇÃO".',
      },
    ],
  },
};

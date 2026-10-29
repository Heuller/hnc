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
    "termo": "Anverso e verso",
    "definicao": "Faces da folha têm margens e posições próprias na apresentação impressa.",
    "exemploBiblioteca": "Numeração à direita no anverso e à esquerda no verso não são a mesma regra visual."
  },
  {
    "termo": "Apêndice e anexo",
    "definicao": "A elaboração pelo autor ou por terceiro distingue os documentos complementares.",
    "exemploBiblioteca": "Redigitar um documento alheio não transforma o texto em apêndice autoral."
  }
],
  descricaoCurta: "Reconhecer partes externa e interna do trabalho. Distinguir obrigatoriedade, ordem e suporte. Classificar apêndice e anexo pela elaboração. Aplicar margens, contagem e numeração em frente/verso. Conferir versão corrigida e decisões institucionais. Separar indicativos de seção, quadros e apresentação tabular.",
  tempoEstimadoMinutos: 22,
  autoresChave: [
  "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
  "ABNT NBR 6024:2012 — Numeração progressiva",
  "ABNT NBR 6027:2012 — Sumário",
  "IBGE — Normas de apresentação tabular"
],
  alertasCebraspe: [
  "A recomendação de tamanho e as regras de apresentação não equivalem a impor essas duas famílias.",
  "O item 5.3 exclui esse verso de contagem e numeração.",
  "A autoria do documento não muda por transcrição material."
],
  teoriaDensaMarkdown: "### A Estrutura Formal da ABNT NBR 14724:2024 (4ª Edição)\n\nA norma **ABNT NBR 14724:2024** (*Informação e Documentação — Trabalhos Acadêmicos — Apresentação*, 4ª edição, publicada em 16/12/2024, com versão corrigida de 01/04/2025, que cancela e substitui a NBR 14724:2011) padroniza a produção formal de teses de doutorado, dissertações de mestrado, trabalhos de conclusão de curso (TCC), monografias de especialização e relatórios de pesquisa:\n\n```tree\nTITLE: Estrutura do Trabalho Acadêmico (ABNT NBR 14724:2024)\n- Trabalho Acadêmico (NBR 14724:2024) | Teses, dissertações, TCCs e monografias\n  - Parte Externa | Proteção física e identificação inicial\n    - Capa | Elemento OBRIGATÓRIO de proteção física externa\n    - Lombada | Elemento OPCIONAL conforme ABNT NBR 12225:2023\n  - Elementos Pré-Textuais | Antecedem o corpo da pesquisa e contextualizam o leitor\n    - Pré-Textuais Obrigatórios | Folha de rosto, folha de aprovação, resumo na língua vernácula, resumo em língua estrangeira e sumário (NBR 6027:2012)\n    - Pré-Textuais Opcionais | Errata, folha de dedicatória, folha de agradecimentos, epígrafe, lista de ilustrações, lista de tabelas e lista de abreviaturas/siglas\n  - Elementos Textuais | O núcleo substantivo e investigativo do trabalho\n    - Introdução | Apresentação do tema, problema, hipóteses, justificativa e objetivos\n    - Desenvolvimento | Revisão de literatura, fundamentação teórica, metodologia e análise de dados\n    - Conclusão | Considerações finais, resposta aos objetivos e recomendações\n  - Elementos Pós-Textuais | Complementam e enriquecem o texto após a conclusão\n    - Pós-Textual Obrigatório | Referências elaboradas estritamente segundo a ABNT NBR 6023\n    - Pós-Textuais Opcionais | Vocabulário de termos, apêndice(s) (autoria própria), anexo(s) (autoria de terceiros) e índice(s) remissivo(s) (NBR 6034)\n```\n\n#### A Divisão Tripartite Padronizada:\n1. **Elementos Pré-Textuais:** Antecedem o corpo da pesquisa, preparando e contextualizando o leitor.\n2. **Elementos Textuais:** O núcleo substantivo do trabalho (a introdução teórica e problemática, o desenvolvimento com revisão e metodologia, e a conclusão/considerações finais).\n3. **Elementos Pós-Textuais:** Complementam e enriquecem o texto após a conclusão.\n\n**Aplicação e recuperação:** Capa não é folha de rosto; parte externa não se confunde com pré-textual. O sumário ajuda a ver as partes internas, mas não lista os próprios pré-textuais. Uma publicação em outro gênero, como artigo de periódico, tem norma de estrutura própria e não recebe automaticamente todos os elementos de tese.\n\n### Elementos Obrigatórios vs. Facultativos\n\nA formulação de assertivas comumente explora assertivas exigindo distinguir quais elementos são de inclusão compulsória:\n\n* **Pré-Textuais Obrigatórios:**\n  * **Folha de Rosto:** No verso, deve conter os **dados internacionais de catalogação na publicação**, conforme código vigente. Em formato eletrônico, ficam imediatamente após a página de rosto (4.2.1.1.2). Atribuições profissionais têm fontes legais próprias; não se atribui toda regra profissional a esse item da norma.\n  * **Folha de Aprovação:** Elemento obrigatório na estrutura apresentada pela norma, contendo data de aprovação, assinaturas e titulações dos membros.\n  * **Resumo na língua vernácula:** Em português, acompanhado das palavras-chave (NBR 6028).\n  * **Resumo em língua estrangeira:** Usualmente em inglês (*abstract/keywords*).\n  * **Sumário:** O último elemento pré-textual antes da Introdução (NBR 6027).\n* **Pré-Textuais Opcionais:**\n  * **Errata:** Folha avulsa inserida logo após a folha de rosto quando erros tipográficos substantivos são corrigidos após a impressão final.\n  * **Dedicatória, Agradecimentos e Epígrafe:** Manifestações pessoais do autor. A epígrafe contém pensamento alheio e deve ser seguida da indicação de autoria.\n  * **Listas Técnicas:** Lista de ilustrações (gráficos, fluxogramas, fotografias), Lista de tabelas, Lista de abreviaturas e siglas, e Lista de símbolos. Quando elaboradas, devem figurar em folhas próprias.\n* **Pós-Textuais Obrigatórios:**\n  * **Referências:** O único elemento pós-textual obrigatório da norma (elaborado segundo a NBR 6023).\n* **Pós-Textuais Opcionais:**\n  * **Vocabulário de Termos Técnicos:** Lista em ordem alfabética de termos técnicos pouco conhecidos com suas respectivas definições (NBR 14724).\n  * **Apêndices:** Documentos elaborados pelo próprio autor.\n  * **Anexos:** Documentos de autoria de terceiros.\n  * **Índices:** Relações sistemáticas ou alfabéticas de assuntos e autores (NBR 6034).\n\n**Aplicação e recuperação:** Um trabalho eletrônico não tem verso físico de papel, mas a norma define a posição dos dados após a página de rosto. Folha de aprovação e sumário têm funções próprias. O fato de um elemento ser opcional não significa que, quando incluído, possa ser colocado em qualquer posição.\n\n### A Distinção Canônica: Apêndice vs. Anexo\n\nEsta é uma das distinções conceituais centrais cobradas em provas de Biblioteconomia:\n\n| Critério | Apêndice (NBR 14724) | Anexo (NBR 14724) |\n| :--- | :--- | :--- |\n| **Autoria Intelectual** | **Elaborado pelo PRÓPRIO AUTOR do trabalho.** | **Elaborado por TERCEIROS (entidades ou autores alheios).** |\n| **Finalidade** | Complementar a argumentação com dados primários sem sobrecarregar o corpo do texto. | Servir de fundamentação, ilustração ou comprovação fática/documental pré-existente. |\n| **Exemplos Típicos** | Questionário aplicado, roteiro de entrevista, transcrição bruta de dados coletados. | Cópia de Lei, parecer de agência reguladora, laudo pericial, estatuto partidário. |\n| **Identificação Formal** | Letras maiúsculas consecutivas, travessão e título em caixa alta/baixa. | Letras maiúsculas consecutivas, travessão e título original da peça. |\n| **Exemplo Formatado** | `APÊNDICE A – Roteiro da entrevista com bibliotecários da Câmara` | `ANEXO A – Regimento Interno da Câmara dos Deputados` |\n\n* *Nota de Esgotamento das Letras:* Quando se esgotam as 26 letras do alfabeto, utilizam-se letras maiúsculas dobradas: `APÊNDICE AA`, `APÊNDICE AB`.\n\n**Aplicação e recuperação:** Questionário elaborado pelo pesquisador é candidato a apêndice; cópia de documento preexistente de terceiro, a anexo. Digitar novamente um documento alheio não muda sua autoria. A identificação e o título organizam a consulta; não provam que o conteúdo foi produzido pelo autor do trabalho.\n\n### Regras Gráficas de Formatação, Margens e Paginação\n\n* **Formato e Margens (Impressão no Anverso / Frente da Folha):**\n  * Se impresso, papel branco ou reciclado formato A4 ($210 \\times 297$ mm).\n  * **Margem Superior = 3,0 cm**\n  * **Margem Esquerda = 3,0 cm** (espaço ampliado para permitir encadernação e furação)\n  * **Margem Inferior = 2,0 cm**\n  * **Margem Direita = 2,0 cm**\n* **Tipografia e Espaçamento:**\n  * Recomenda-se tamanho 12, inclusive capa, com exceções. A norma não impõe universalmente Arial ou Times New Roman; uma instituição pode estabelecer opção no seu manual.\n  * Tamanho menor e uniforme nas exceções: citações com mais de três linhas, notas, paginação, dados de catalogação e fontes/legendas de ilustrações e tabelas. Não se fixa 10 ou 11 como único tamanho obrigatório.\n  * Espaçamento entre linhas de **1,5** para o texto corrido.\n  * Espaçamento **simples** para: citações longas recuadas, notas, referências bibliográficas ao final, legendas de figuras e natureza do trabalho na folha de rosto.\n* **A Regra de Ouro da Paginação (Contagem vs. Impressão):**\n  1. A contagem sequencial das páginas inicia-se formalmente na **Folha de Rosto** (a capa NÃO é contada nem numerada).\n  2. As folhas/páginas pré-textuais são contadas, mas não numeradas. **O verso da folha de rosto com os dados de catalogação não é contado nem numerado** na versão verificada.\n  3. O número da página só deve figurar fisicamente **impresso a partir da primeira folha da parte textual (a INTRODUÇÃO)**.\n  4. No trabalho apenas em anverso, a numeração fica no canto superior direito nas posições indicadas. Em anverso e verso, fica à direita no anverso e à esquerda no verso. As margens do verso também diferem: superior/direita de 3 cm e inferior/esquerda de 2 cm.\n\n**Aplicação e recuperação:** Conte as folhas/páginas segundo o suporte, observando a exclusão do verso de catalogação. Numeração visível começa na parte textual. Em impressão frente/verso, copiar a mesma margem esquerda de todas as páginas contraria a orientação espelhada. Não confunda página do PDF com número impresso no texto.\n\n### 1 Aplicar edição e suporte sem inventar uma mudança\n\nAo julgar uma assertiva, identifique a versão e o suporte. A NBR 14724:2024 possui versão corrigida em abril de 2025; a data da correção não muda sua designação para NBR 14724:2025. Um manual de uma instituição pode acrescentar decisões operacionais, mas não é redação literal da norma.\n\nNão se atribui ao texto de dezembro de 2024 uma harmonização explícita com uma norma que só foi publicada em 2025 sem comprovar o documento pertinente. Também não se inventa que a edição anterior exigia exclusivamente assinaturas físicas ou que a nova nomeia universalmente sistemas como SEI. A versão consultada exige os elementos da folha de aprovação; processos institucionais de assinatura devem ter sua base própria.\n\n**Caso resolvido:** uma questão sobre exemplar eletrônico afirma que os dados de catalogação devem ficar imediatamente após a página de rosto. Essa é disposição verificável no item 4.2.1.1.2. Outra transforma a escolha de uma família tipográfica de um manual universitário em obrigação nacional da ABNT: falta a base para a generalização.\n\n**Aplicação e recuperação:** A etiqueta da edição é 2024 mesmo após correção de 2025. Registre qual exemplar foi consultado. Uma tabela comparativa sem fonte pode inventar mudanças normativas; confirme o item antes de usá-la como material de memorização.\n\n### Numeração Progressiva (NBR 6024) e Apresentação Tabular (IBGE vs. ABNT)\n\n#### A. Numeração Progressiva das Seções (ABNT NBR 6024)\n* As seções do documento são numeradas em algarismos arábicos até a seção quinária, observadas as regras da NBR 6024 (seções quinárias):\n  * Primária: `1 INTRODUÇÃO`\n  * Secundária: `1.1 OBJETIVOS`\n  * Terciária: `1.1.1 Objetivos específicos`\n  * Quaternária: `1.1.1.1 Detalhamento`\n* *Regra de Pontuação da NBR 6024:* **NÃO se utiliza ponto, hífen ou travessão** entre o número da seção e o seu respectivo título (ex.: grafa-se `1 INTRODUÇÃO`, e NUNCA `1. INTRODUÇÃO` ou `1 - INTRODUÇÃO`).\n* Títulos sem numeração (agrupados no centro): errata, agradecimentos, resumos, sumário, referências e anexos.\n\n#### B. Apresentação de Tabelas (IBGE) vs. Quadros (ABNT)\n* **Tabelas (Normas de Apresentação Tabular do IBGE):**\n  * Destinam-se a apresentar informações **quantitativas e dados numéricos**.\n  * São delimitadas no topo e na base por **linhas horizontais**; linhas horizontais internas separam o cabeçalho do conteúdo.\n  * **Traços Verticais de Fechamento Lateral são PROIBIDOS:** As laterais esquerda e direita de uma tabela permanecem **sempre abertas**.\n* **Quadros (ABNT NBR 14724):**\n  * Destinam-se a apresentar informações **qualitativas, descritivas e textuais**.\n  * O uso de grade fechada em quadros é convenção frequente de manuais. Não se deve atribuir à NBR 14724, sem item que o determine, uma regra universal de fechar obrigatoriamente todos os lados. Identifique a norma/manual solicitado.\n\n**Aplicação e recuperação:** O indicativo 1.1 não recebe ponto adicional antes do título. Um gráfico e uma tabela precisam de identificação e fonte; o padrão de traços das tabelas é tratado pelo IBGE. Quadro com texto pode seguir decisão editorial específica, mas a decisão não se torna obrigação ABNT por costume.",
  teoriaDidaticaMarkdown: "### Revisão: estrutura e suporte\n\nNBR 14724:2024, versão corrigida em 2025: distinguir parte externa, pré-textuais, textuais e pós-textuais. Referências são pós-textual obrigatório; apêndice/anexo dependem de elaboração. No eletrônico, dados de catalogação vêm após a página de rosto. Pré-textuais são contados sem numeração visível, com a exclusão do verso de catalogação; impressão de números inicia na parte textual e considera frente/verso. Tamanho 12 é recomendação com exceções; Arial/Times não são imposição universal da norma. Consulte regras específicas de seções e tabelas e não invente mudanças entre edições.\n",
  checkpoints: [
  {
    "id": "cp-8-3-1",
    "pergunta": "Micro-Checkpoint 1: Diferença entre Apêndice e Anexo na NBR 14724",
    "item": "Nos termos da ABNT NBR 14724, denomina-se anexo o documento complementar elaborado pelo próprio autor da monografia, enquanto apêndice designa o documento de autoria de terceiros incluído para comprovação.",
    "gabarito": "E",
    "justificativa": "O item inverte elaboração: apêndice é do próprio autor; anexo, documento de terceiros usado para fundamentar/ilustrar. Redigitar não altera autoria.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "versao_correta": "Apêndice é elaborado pelo autor; anexo é documento de terceiros."
  },
  {
    "id": "cp-8-3-2",
    "pergunta": "Micro-Checkpoint 2: Regra de Paginação de Trabalhos Acadêmicos",
    "item": "Em trabalho apresentado somente no anverso, as folhas são contadas a partir da folha de rosto, mas a numeração visível se inicia na parte textual; o verso com os dados de catalogação não é contado nem numerado.",
    "gabarito": "C",
    "justificativa": "A redação explicita suporte e exceção da versão corrigida de 2025, evitando generalizar contagem de todo verso.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular."
  },
  {
    "id": "cp-8-3-3",
    "pergunta": "Micro-Checkpoint 3: Estrutura do Sumário conforme ABNT NBR 6027",
    "item": "Segundo a ABNT NBR 6027, os elementos pré-textuais, como a dedicatória, o agradecimento e a lista de abreviaturas, devem constar obrigatoriamente no sumário do trabalho acadêmico.",
    "gabarito": "E",
    "justificativa": "Os pré-textuais não integram o sumário. O sumário enumera as partes na sequência documental, sem listar dedicatória e agradecimentos.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "versao_correta": "Os elementos pré-textuais não constam no sumário."
  },
  {
    "id": "rt-8-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um trabalho em formato eletrônico deve apresentar os dados de catalogação imediatamente após a página de rosto, conforme a versão verificada da NBR 14724.",
    "gabarito": "C",
    "justificativa": "O item 4.2.1.1.2 distingue o caso eletrônico da apresentação no verso em papel.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "editalRef": "Bloco D - Item 5.4",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A norma impõe Arial ou Times New Roman como as únicas famílias tipográficas possíveis em todo trabalho acadêmico.",
    "gabarito": "E",
    "justificativa": "A recomendação de tamanho e as regras de apresentação não equivalem a impor essas duas famílias.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "editalRef": "Bloco D - Item 5.4",
    "habilidade": "aplicar",
    "versao_correta": "Uma instituição pode definir família tipográfica em manual próprio; não se atribui essa exclusividade à norma."
  },
  {
    "id": "rt-8-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No trabalho impresso frente e verso, margens e posição da numeração devem considerar a face da folha.",
    "gabarito": "C",
    "justificativa": "A norma distingue anverso e verso, com margens espelhadas e número à direita/esquerda conforme a face.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "editalRef": "Bloco D - Item 5.4",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na versão corrigida consultada, o verso da folha de rosto com os dados de catalogação deve ser contado e numerado como toda página textual.",
    "gabarito": "E",
    "justificativa": "O item 5.3 exclui esse verso de contagem e numeração.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "editalRef": "Bloco D - Item 5.4",
    "habilidade": "aplicar",
    "versao_correta": "O verso com os dados de catalogação não é contado nem numerado."
  },
  {
    "id": "rt-8-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um anexo de terceiros se torna apêndice do pesquisador apenas por ter sido redigitado por ele.",
    "gabarito": "E",
    "justificativa": "A autoria do documento não muda por transcrição material.",
    "fonte": "ABNT NBR 14724:2024, versão corrigida de 01/04/2025, seções 4 e 5 (PDF do acervo, conteúdo conferido por OCR); NBR 6024 e NBR 6027; IBGE, Normas de apresentação tabular.",
    "editalRef": "Bloco D - Item 5.4",
    "habilidade": "aplicar",
    "versao_correta": "Apêndice e anexo dependem da elaboração/autoria, não de quem digitou a cópia."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-8-3-fonte-14724",
      "nome": "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
      "ideiaChave": "Versão corrigida de 01/04/2025; seções 4–5. PDF NBR14724.pdf do acervo, com texto incompleto na extração inicial e trechos de conteúdo conferidos por OCR.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-3-fonte-6024",
      "nome": "ABNT NBR 6024:2012 — Numeração progressiva",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 6024:2012 — Numeração progressiva",
      "ideiaChave": "Seções e indicativos; PDF ABNT-NBR-6024.pdf do acervo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-3-fonte-6027",
      "nome": "ABNT NBR 6027:2012 — Sumário",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 6027:2012 — Sumário",
      "ideiaChave": "Posição e inclusão de partes; PDF ABNT-NBR-6027.pdf do acervo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-3-fonte-ibge",
      "nome": "IBGE — Normas de apresentação tabular",
      "ano": "Referência de consulta",
      "obraPrincipal": "IBGE — Normas de apresentação tabular",
      "ideiaChave": "Organização de dados e traços de tabelas.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-8-3-3",
      "afirmacao": "No trabalho impresso frente e verso, margens e posição da numeração devem considerar a face da folha.",
      "gabarito": "C",
      "porQue": "A norma distingue anverso e verso, com margens espelhadas e número à direita/esquerda conforme a face."
    },
    {
      "id": "memoria-rt-8-3-4",
      "afirmacao": "Na versão corrigida consultada, o verso da folha de rosto com os dados de catalogação deve ser contado e numerado como toda página textual.",
      "gabarito": "E",
      "porQue": "O item 5.3 exclui esse verso de contagem e numeração."
    },
    {
      "id": "memoria-rt-8-3-5",
      "afirmacao": "Um anexo de terceiros se torna apêndice do pesquisador apenas por ter sido redigitado por ele.",
      "gabarito": "E",
      "porQue": "A autoria do documento não muda por transcrição material."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-8-3-bloco-1",
    "titulo": "A Estrutura Formal da ABNT NBR 14724:2024 (4ª Edição)",
    "objetivos": [
      "Reconhecer partes externa e interna do trabalho."
    ],
    "conteudo": "A norma **ABNT NBR 14724:2024** (*Informação e Documentação — Trabalhos Acadêmicos — Apresentação*, 4ª edição, publicada em 16/12/2024, com versão corrigida de 01/04/2025, que cancela e substitui a NBR 14724:2011) padroniza a produção formal de teses de doutorado, dissertações de mestrado, trabalhos de conclusão de curso (TCC), monografias de especialização e relatórios de pesquisa:\n\n```tree\nTITLE: Estrutura do Trabalho Acadêmico (ABNT NBR 14724:2024)\n- Trabalho Acadêmico (NBR 14724:2024) | Teses, dissertações, TCCs e monografias\n  - Parte Externa | Proteção física e identificação inicial\n    - Capa | Elemento OBRIGATÓRIO de proteção física externa\n    - Lombada | Elemento OPCIONAL conforme ABNT NBR 12225:2023\n  - Elementos Pré-Textuais | Antecedem o corpo da pesquisa e contextualizam o leitor\n    - Pré-Textuais Obrigatórios | Folha de rosto, folha de aprovação, resumo na língua vernácula, resumo em língua estrangeira e sumário (NBR 6027:2012)\n    - Pré-Textuais Opcionais | Errata, folha de dedicatória, folha de agradecimentos, epígrafe, lista de ilustrações, lista de tabelas e lista de abreviaturas/siglas\n  - Elementos Textuais | O núcleo substantivo e investigativo do trabalho\n    - Introdução | Apresentação do tema, problema, hipóteses, justificativa e objetivos\n    - Desenvolvimento | Revisão de literatura, fundamentação teórica, metodologia e análise de dados\n    - Conclusão | Considerações finais, resposta aos objetivos e recomendações\n  - Elementos Pós-Textuais | Complementam e enriquecem o texto após a conclusão\n    - Pós-Textual Obrigatório | Referências elaboradas estritamente segundo a ABNT NBR 6023\n    - Pós-Textuais Opcionais | Vocabulário de termos, apêndice(s) (autoria própria), anexo(s) (autoria de terceiros) e índice(s) remissivo(s) (NBR 6034)\n```\n\n#### A Divisão Tripartite Padronizada:\n1. **Elementos Pré-Textuais:** Antecedem o corpo da pesquisa, preparando e contextualizando o leitor.\n2. **Elementos Textuais:** O núcleo substantivo do trabalho (a introdução teórica e problemática, o desenvolvimento com revisão e metodologia, e a conclusão/considerações finais).\n3. **Elementos Pós-Textuais:** Complementam e enriquecem o texto após a conclusão.\n\n**Aplicação e recuperação:** Capa não é folha de rosto; parte externa não se confunde com pré-textual. O sumário ajuda a ver as partes internas, mas não lista os próprios pré-textuais. Uma publicação em outro gênero, como artigo de periódico, tem norma de estrutura própria e não recebe automaticamente todos os elementos de tese.",
    "checkpointIds": []
  },
  {
    "id": "sub-8-3-bloco-2",
    "titulo": "Elementos Obrigatórios vs. Facultativos",
    "objetivos": [
      "Distinguir obrigatoriedade, ordem e suporte."
    ],
    "conteudo": "A formulação de assertivas comumente explora assertivas exigindo distinguir quais elementos são de inclusão compulsória:\n\n* **Pré-Textuais Obrigatórios:**\n  * **Folha de Rosto:** No verso, deve conter os **dados internacionais de catalogação na publicação**, conforme código vigente. Em formato eletrônico, ficam imediatamente após a página de rosto (4.2.1.1.2). Atribuições profissionais têm fontes legais próprias; não se atribui toda regra profissional a esse item da norma.\n  * **Folha de Aprovação:** Elemento obrigatório na estrutura apresentada pela norma, contendo data de aprovação, assinaturas e titulações dos membros.\n  * **Resumo na língua vernácula:** Em português, acompanhado das palavras-chave (NBR 6028).\n  * **Resumo em língua estrangeira:** Usualmente em inglês (*abstract/keywords*).\n  * **Sumário:** O último elemento pré-textual antes da Introdução (NBR 6027).\n* **Pré-Textuais Opcionais:**\n  * **Errata:** Folha avulsa inserida logo após a folha de rosto quando erros tipográficos substantivos são corrigidos após a impressão final.\n  * **Dedicatória, Agradecimentos e Epígrafe:** Manifestações pessoais do autor. A epígrafe contém pensamento alheio e deve ser seguida da indicação de autoria.\n  * **Listas Técnicas:** Lista de ilustrações (gráficos, fluxogramas, fotografias), Lista de tabelas, Lista de abreviaturas e siglas, e Lista de símbolos. Quando elaboradas, devem figurar em folhas próprias.\n* **Pós-Textuais Obrigatórios:**\n  * **Referências:** O único elemento pós-textual obrigatório da norma (elaborado segundo a NBR 6023).\n* **Pós-Textuais Opcionais:**\n  * **Vocabulário de Termos Técnicos:** Lista em ordem alfabética de termos técnicos pouco conhecidos com suas respectivas definições (NBR 14724).\n  * **Apêndices:** Documentos elaborados pelo próprio autor.\n  * **Anexos:** Documentos de autoria de terceiros.\n  * **Índices:** Relações sistemáticas ou alfabéticas de assuntos e autores (NBR 6034).\n\n**Aplicação e recuperação:** Um trabalho eletrônico não tem verso físico de papel, mas a norma define a posição dos dados após a página de rosto. Folha de aprovação e sumário têm funções próprias. O fato de um elemento ser opcional não significa que, quando incluído, possa ser colocado em qualquer posição.",
    "checkpointIds": [
      "cp-8-3-3",
      "rt-8-3-1"
    ]
  },
  {
    "id": "sub-8-3-bloco-3",
    "titulo": "A Distinção Canônica: Apêndice vs. Anexo",
    "objetivos": [
      "Classificar apêndice e anexo pela elaboração."
    ],
    "conteudo": "Esta é uma das distinções conceituais centrais cobradas em provas de Biblioteconomia:\n\n| Critério | Apêndice (NBR 14724) | Anexo (NBR 14724) |\n| :--- | :--- | :--- |\n| **Autoria Intelectual** | **Elaborado pelo PRÓPRIO AUTOR do trabalho.** | **Elaborado por TERCEIROS (entidades ou autores alheios).** |\n| **Finalidade** | Complementar a argumentação com dados primários sem sobrecarregar o corpo do texto. | Servir de fundamentação, ilustração ou comprovação fática/documental pré-existente. |\n| **Exemplos Típicos** | Questionário aplicado, roteiro de entrevista, transcrição bruta de dados coletados. | Cópia de Lei, parecer de agência reguladora, laudo pericial, estatuto partidário. |\n| **Identificação Formal** | Letras maiúsculas consecutivas, travessão e título em caixa alta/baixa. | Letras maiúsculas consecutivas, travessão e título original da peça. |\n| **Exemplo Formatado** | `APÊNDICE A – Roteiro da entrevista com bibliotecários da Câmara` | `ANEXO A – Regimento Interno da Câmara dos Deputados` |\n\n* *Nota de Esgotamento das Letras:* Quando se esgotam as 26 letras do alfabeto, utilizam-se letras maiúsculas dobradas: `APÊNDICE AA`, `APÊNDICE AB`.\n\n**Aplicação e recuperação:** Questionário elaborado pelo pesquisador é candidato a apêndice; cópia de documento preexistente de terceiro, a anexo. Digitar novamente um documento alheio não muda sua autoria. A identificação e o título organizam a consulta; não provam que o conteúdo foi produzido pelo autor do trabalho.",
    "checkpointIds": [
      "cp-8-3-1",
      "rt-8-3-5"
    ]
  },
  {
    "id": "sub-8-3-bloco-4",
    "titulo": "Regras Gráficas de Formatação, Margens e Paginação",
    "objetivos": [
      "Aplicar margens, contagem e numeração em frente/verso."
    ],
    "conteudo": "* **Formato e Margens (Impressão no Anverso / Frente da Folha):**\n  * Se impresso, papel branco ou reciclado formato A4 ($210 \\times 297$ mm).\n  * **Margem Superior = 3,0 cm**\n  * **Margem Esquerda = 3,0 cm** (espaço ampliado para permitir encadernação e furação)\n  * **Margem Inferior = 2,0 cm**\n  * **Margem Direita = 2,0 cm**\n* **Tipografia e Espaçamento:**\n  * Recomenda-se tamanho 12, inclusive capa, com exceções. A norma não impõe universalmente Arial ou Times New Roman; uma instituição pode estabelecer opção no seu manual.\n  * Tamanho menor e uniforme nas exceções: citações com mais de três linhas, notas, paginação, dados de catalogação e fontes/legendas de ilustrações e tabelas. Não se fixa 10 ou 11 como único tamanho obrigatório.\n  * Espaçamento entre linhas de **1,5** para o texto corrido.\n  * Espaçamento **simples** para: citações longas recuadas, notas, referências bibliográficas ao final, legendas de figuras e natureza do trabalho na folha de rosto.\n* **A Regra de Ouro da Paginação (Contagem vs. Impressão):**\n  1. A contagem sequencial das páginas inicia-se formalmente na **Folha de Rosto** (a capa NÃO é contada nem numerada).\n  2. As folhas/páginas pré-textuais são contadas, mas não numeradas. **O verso da folha de rosto com os dados de catalogação não é contado nem numerado** na versão verificada.\n  3. O número da página só deve figurar fisicamente **impresso a partir da primeira folha da parte textual (a INTRODUÇÃO)**.\n  4. No trabalho apenas em anverso, a numeração fica no canto superior direito nas posições indicadas. Em anverso e verso, fica à direita no anverso e à esquerda no verso. As margens do verso também diferem: superior/direita de 3 cm e inferior/esquerda de 2 cm.\n\n**Aplicação e recuperação:** Conte as folhas/páginas segundo o suporte, observando a exclusão do verso de catalogação. Numeração visível começa na parte textual. Em impressão frente/verso, copiar a mesma margem esquerda de todas as páginas contraria a orientação espelhada. Não confunda página do PDF com número impresso no texto.",
    "checkpointIds": [
      "cp-8-3-2",
      "rt-8-3-2",
      "rt-8-3-3",
      "rt-8-3-4"
    ]
  },
  {
    "id": "sub-8-3-bloco-5",
    "titulo": "1 Aplicar edição e suporte sem inventar uma mudança",
    "objetivos": [
      "Conferir versão corrigida e decisões institucionais."
    ],
    "conteudo": "Ao julgar uma assertiva, identifique a versão e o suporte. A NBR 14724:2024 possui versão corrigida em abril de 2025; a data da correção não muda sua designação para NBR 14724:2025. Um manual de uma instituição pode acrescentar decisões operacionais, mas não é redação literal da norma.\n\nNão se atribui ao texto de dezembro de 2024 uma harmonização explícita com uma norma que só foi publicada em 2025 sem comprovar o documento pertinente. Também não se inventa que a edição anterior exigia exclusivamente assinaturas físicas ou que a nova nomeia universalmente sistemas como SEI. A versão consultada exige os elementos da folha de aprovação; processos institucionais de assinatura devem ter sua base própria.\n\n**Caso resolvido:** uma questão sobre exemplar eletrônico afirma que os dados de catalogação devem ficar imediatamente após a página de rosto. Essa é disposição verificável no item 4.2.1.1.2. Outra transforma a escolha de uma família tipográfica de um manual universitário em obrigação nacional da ABNT: falta a base para a generalização.\n\n**Aplicação e recuperação:** A etiqueta da edição é 2024 mesmo após correção de 2025. Registre qual exemplar foi consultado. Uma tabela comparativa sem fonte pode inventar mudanças normativas; confirme o item antes de usá-la como material de memorização.",
    "checkpointIds": []
  },
  {
    "id": "sub-8-3-bloco-6",
    "titulo": "Numeração Progressiva (NBR 6024) e Apresentação Tabular (IBGE vs. ABNT)",
    "objetivos": [
      "Separar indicativos de seção, quadros e apresentação tabular."
    ],
    "conteudo": "#### A. Numeração Progressiva das Seções (ABNT NBR 6024)\n* As seções do documento são numeradas em algarismos arábicos até a seção quinária, observadas as regras da NBR 6024 (seções quinárias):\n  * Primária: `1 INTRODUÇÃO`\n  * Secundária: `1.1 OBJETIVOS`\n  * Terciária: `1.1.1 Objetivos específicos`\n  * Quaternária: `1.1.1.1 Detalhamento`\n* *Regra de Pontuação da NBR 6024:* **NÃO se utiliza ponto, hífen ou travessão** entre o número da seção e o seu respectivo título (ex.: grafa-se `1 INTRODUÇÃO`, e NUNCA `1. INTRODUÇÃO` ou `1 - INTRODUÇÃO`).\n* Títulos sem numeração (agrupados no centro): errata, agradecimentos, resumos, sumário, referências e anexos.\n\n#### B. Apresentação de Tabelas (IBGE) vs. Quadros (ABNT)\n* **Tabelas (Normas de Apresentação Tabular do IBGE):**\n  * Destinam-se a apresentar informações **quantitativas e dados numéricos**.\n  * São delimitadas no topo e na base por **linhas horizontais**; linhas horizontais internas separam o cabeçalho do conteúdo.\n  * **Traços Verticais de Fechamento Lateral são PROIBIDOS:** As laterais esquerda e direita de uma tabela permanecem **sempre abertas**.\n* **Quadros (ABNT NBR 14724):**\n  * Destinam-se a apresentar informações **qualitativas, descritivas e textuais**.\n  * O uso de grade fechada em quadros é convenção frequente de manuais. Não se deve atribuir à NBR 14724, sem item que o determine, uma regra universal de fechar obrigatoriamente todos os lados. Identifique a norma/manual solicitado.\n\n**Aplicação e recuperação:** O indicativo 1.1 não recebe ponto adicional antes do título. Um gráfico e uma tabela precisam de identificação e fonte; o padrão de traços das tabelas é tratado pelo IBGE. Quadro com texto pode seguir decisão editorial específica, mas a decisão não se torna obrigação ABNT por costume.",
    "checkpointIds": []
  }
],
fontesTeoria: [
  {
    "id": "14724",
    "titulo": "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
    "localizador": "Versão corrigida de 01/04/2025; seções 4–5. PDF NBR14724.pdf do acervo, com texto incompleto na extração inicial e trechos de conteúdo conferidos por OCR."
  },
  {
    "id": "6024",
    "titulo": "ABNT NBR 6024:2012 — Numeração progressiva",
    "localizador": "Seções e indicativos; PDF ABNT-NBR-6024.pdf do acervo."
  },
  {
    "id": "6027",
    "titulo": "ABNT NBR 6027:2012 — Sumário",
    "localizador": "Posição e inclusão de partes; PDF ABNT-NBR-6027.pdf do acervo."
  },
  {
    "id": "ibge",
    "titulo": "IBGE — Normas de apresentação tabular",
    "localizador": "Organização de dados e traços de tabelas.",
    "url": "https://biblioteca.ibge.gov.br/visualizacao/livros/liv23907.pdf"
  }
],
};

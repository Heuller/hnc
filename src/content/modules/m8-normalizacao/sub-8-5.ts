import type { ModuloFilho } from '../../../domain/types';

export const submodulo85: ModuloFilho = {
  id: 'sub-8-5',
  numero: '8.5',
  editalRef: 'Bloco D - Item 5.6 e 5.7',
  preRequisitos: ["sub-8-3"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-1",
          "titulo": "AACR2r e Fichas Catalográficas",
          "motivo": "Elaboração técnica de fichas no verso da folha de rosto."
      },
      {
          "submoduloId": "sub-6-1",
          "titulo": "Acessibilidade Digital",
          "motivo": "Diretrizes WCAG 2.2 e formatos acessíveis (EPUB, PDF/A)."
      }
  ],
  titulo: 'Editoração, Fichas Catalográficas, Índices, Infografia e Acessibilidade',
  antesDeLer: [
  {
    "termo": "Preservação e acessibilidade",
    "definicao": "Conformidade para apresentação duradoura não certifica experiência acessível.",
    "exemploBiblioteca": "PDF/A pode continuar com ordem de leitura inadequada ao leitor de tela."
  },
  {
    "termo": "Layout refluível e fixo",
    "definicao": "EPUB admite estratégias de apresentação diferentes conforme projeto e especificação.",
    "exemploBiblioteca": "Não se deduz adaptação perfeita a toda tela apenas pela extensão epub."
  }
],
  descricaoCurta: "Relacionar catalogação, posição e responsabilidade profissional. Escolher índice ou sumário pela função. Distinguir layout, preservação e acessibilidade de formatos. Avaliar fidelidade de uma visualização e uso de contexto. Aplicar equivalentes, estrutura e contraste com avaliação real.",
  tempoEstimadoMinutos: 23,
  autoresChave: [
  "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
  "CFB — Perguntas frequentes",
  "W3C — EPUB 3.3",
  "PDF Association — PDF/A e referências externas",
  "W3C — WCAG 2.2"
],
  alertasCebraspe: [
  "A especificação admite estratégias diferentes. Refluxo não define sozinho toda a família.",
  "Preservação e acessibilidade têm objetivos/requisitos distintos.",
  "Hiperlink não é a mesma dependência externa indispensável à renderização. O perfil precisa ser examinado."
],
  teoriaDensaMarkdown: "### Catalogação na publicação: conteúdo, posição e responsabilidade\n\nA catalogação na publicação **CIP** fornece dados catalográficos incorporados à publicação. Deve representar o recurso e seus acessos conforme o código e a política adotados; não é apenas um desenho de retângulo que se copia de outra obra. Uma ficha visualmente completa com autor, título ou classificação errados continua defeituosa.\n\nDiferencie três fontes de obrigação. A **Lei 10.753/2003**, art. 6º, trata de ISBN e ficha na editoração de livros. O exercício profissional tem legislação própria. O **CFB**, ao explicar a Resolução 184/2017, trata de assinatura e registro do bibliotecário em documentos produzidos no exercício profissional, incluindo fichas e sistemas automatizados. Essas bases não se reduzem a uma regra de margem da ABNT.\n\nNa **NBR 14724:2024, versão corrigida de 2025**, os dados internacionais de catalogação constam no verso da folha de rosto conforme código vigente; no formato eletrônico, imediatamente após a página de rosto. Não se atribui à norma uma obrigação universal de metade inferior ou um retângulo fixo de 12,5 × 7,5 cm sem item que o determine. Instituições podem ter modelos próprios que devem ser identificados como tais.\n\n**Fluxo de produção:** confirme versão e gênero do documento; confira fonte de informação e responsabilidade; selecione pontos de acesso e classificação; revise identificadores e dados editoriais; confira posição e apresentação; registre responsabilidade técnica e mantenha correções. Alterar título/edição após gerar ficha pode exigir atualizá-la.\n\n**Caso:** um formulário automático gera dados de um TCC com a grafia de sobrenome errada. A existência do gerador não elimina necessidade de verificação e responsabilidade. Uma ficha de livro comercial também não deve ser usada sem adaptação como se todas as características de tese fossem idênticas.\n\n**Aplicação e recuperação:** A ficha pode ser produzida com apoio automatizado, mas seus dados continuam sujeitos a validação. Não use um ISBN fictício ou código de classificação adivinhado para preencher lacunas. Quando o documento eletrônico muda de versão, confira se os dados e as referências continuam correspondendo à publicação.\n\n### Índices e Instrumentos Auxiliares (ABNT NBR 6034:2004)\n\nPara escolher instrumento de acesso, compare sua função e o gênero documental:\n\n#### A. A Definição de Índice segundo a ABNT NBR 6034:2004\n* **Conceito Normativo:** \"Relação de palavras ou frases, ordenadas segundo determinado critério, que localiza e remete para informações contidas em um texto ou em documentos\".\n* **Posicionamento Estrutural:** É um **elemento PÓS-TEXTUAL OPCIONAL**. Localiza-se no final da publicação (após os elementos textuais e após referências, vocabulário de termos, apêndices e anexos).\n* **Tipologia de Índices:**\n  1. *Índice Geral / Remissivo:* Reúne autores, assuntos e títulos em sequência alfabética única;\n  2. *Índice Especial:* Dedicado a uma única categoria de informação (ex.: índice onomástico/de autores, índice cronológico de leis, índice geográfico, índice sistemático de assuntos);\n  3. *Índice Cumulativo:* Reúne em ordem única as entradas de múltiplos volumes de uma coleção ou vários anos de um periódico parlamentar.\n\n#### B. Distinção Obrigatória: Índice (NBR 6034:2004) vs. Sumário (NBR 6027:2012)\n\n```tree\nTITLE: Confronto Estrutural: Sumário (NBR 6027) vs. Índice (NBR 6034)\n- Instrumentos de Acesso ao Conteúdo | Normas distintas com papéis complementares\n  - Sumário (ABNT NBR 6027:2012) | Visão macro e estrutural do documento\n    - Posição Estrutural | Elemento PRÉ-TEXTUAL OBRIGATÓRIO (último pré-textual)\n    - Princípio de Ordenação | A mesma ordem sequencial em que as partes aparecem no texto\n    - Fidelidade de Grafia | Reproduz rigorosamente a redação, numeração e tipografia dos capítulos\n    - Granularidade | Seções primárias, secundárias, terciárias e quaternárias (não detalha termos isolados)\n  - Índice (ABNT NBR 6034:2004) | Acesso micro e pontual a conceitos específicos\n    - Posição Estrutural | Elemento PÓS-TEXTUAL OPCIONAL (último elemento do trabalho)\n    - Princípio de Ordenação | Alfabético, cronológico ou sistemático (independe da ordem física do texto)\n    - Remissões Pontuais | Remete diretamente ao número da página ou parágrafo onde o vocábulo ocorre\n    - Elaboração | Exige análise conceitual aprofundada e indexação terminológica de substantivos\n```\n\n**Aplicação e recuperação:** Um leitor procura uma pessoa citada em vários capítulos: índice onomástico pode ajudá-lo. Para ver a estrutura geral e ir ao capítulo, sumário é mais apropriado. A mesma publicação pode ter ambos. A obrigatoriedade e a posição devem seguir gênero/norma aplicável, sem declarar que todo arquivo web precisa dos dois.\n\n### Editoração digital: apresentação, preservação e acesso\n\n**EPUB 3** organiza um pacote com documentos de conteúdo, recursos, metadados e informação de navegação conforme a especificação. Pode oferecer **layout refluível** ou **layout fixo**. Não é verdade que todo EPUB se reajusta da mesma maneira a qualquer tela. A escolha depende do conteúdo e dos recursos de leitura; tabelas complexas e elementos fixos exigem cuidado adicional.\n\nNo layout refluível, o usuário pode adaptar características de leitura nos limites do leitor e do projeto. Estrutura semântica, navegação, ordem de leitura, idioma e alternativas textuais precisam ser construídos; simplesmente mudar a extensão do arquivo para epub não produz acessibilidade. O documento de pacote usa metadados e propriedades definidos; Dublin Core integra esse ambiente sem esgotar todos os metadados possíveis.\n\n**PDF/A**, família ISO 19005, impõe requisitos voltados à preservação da apresentação e uso de componentes definidos, com partes/perfis diferentes. É necessário dizer qual parte e conformidade são adotadas. Não é obrigatório para toda publicação legislativa apenas por ser governamental, salvo determinação específica aplicável.\n\nRegras como não cifrar o documento conforme o perfil e incorporar fontes/componentes necessários não garantem legibilidade por séculos nem eliminam política de preservação, controle de fixidez e migrações futuras. Dependências externas indispensáveis à renderização são problema diferente de um **hiperlink** para informação complementar: não se conclui que toda URL é proibida em PDF/A.\n\nPartes mais recentes admitem condições diferentes de anexos/arquivos embutidos e outros recursos. Portanto, frases como “nenhuma versão pode conter qualquer arquivo multimídia associado” são excessivas. Também não se confunde armazenar representação de lógica em arquivo embutido sob condição específica com permitir execução livre de JavaScript na apresentação. Consulte o perfil, valide e teste o resultado.\n\n**PDF/UA** trata de acessibilidade do PDF e também tem versões/escopos. Conformidade PDF/A não implica conformidade PDF/UA; um arquivo pode atender requisitos de preservação e ainda ter ordem de leitura errada ou imagens sem equivalente. As duas finalidades podem ser articuladas, com validação técnica e avaliação de uso.\n\n**Caso resolvido:** a publicação mantém fontes necessárias e passa num validador PDF/A, mas o leitor de tela percorre duas colunas em ordem incoerente. O problema de acessibilidade permanece. Não se resolve declarando que a aprovação de preservação certificou todas as dimensões do documento.\n\n**Aplicação e recuperação:** Conservar aparência não é o mesmo que permitir ampliação e navegação. Um arquivo de layout fixo pode atender finalidade editorial, mas requer alternativas e testes pertinentes. Escolha perfil PDF/A e conformidade acessível de forma explícita; extensão de arquivo ou carimbo de exportação não substitui validação e leitura com tecnologia assistiva.\n\n### Infografia e Visualização de Dados (Alberto Cairo e Edward Tufte)\n\nA comunicação da informação em bibliotecas legislativas e portais institucionais faz uso massivo de **infográficos e visualizações de dados** para traduzir proposições complexas, orçamentos públicos e estatísticas sociais em interfaces compreensíveis para o cidadão:\n\n#### A. A Arte Funcional de Alberto Cairo (*The Functional Art*, 2012)\nO jornalista e designer espanhol Alberto Cairo, referência mundial em visualização da informação, formulou a teoria da **infografia funcional**:\n* **A Falácia da Cosmética:** Um infográfico **não é ilustração estética**, arte ornamental ou desenho decorativo destinado a \"embelezar\" o documento.\n* **Natureza Cognitiva e Ferramental:** A infografia é uma **ferramenta funcional de cognição visual**. Assim como um martelo ou um microscópio, sua qualidade mede-se pela eficiência com que permite ao cérebro humano extrair padrões, entender relacionamentos e tomar decisões a partir de dados complexos.\n* **Princípio da Forma que Segue a Função:** Em visualização de dados, a estética é consequência do rigor estrutural. Gráficos 3D desnecessários, cores berrantes sem propósito semântico e efeitos gráficos que mascaram proporções reais distorcem a verdade factual dos dados.\n\n#### B. Edward Tufte e o *Data-Ink Ratio*\nEdward Tufte (*The Visual Display of Quantitative Information*, 1983) estabeleceu postulados canônicos de excelência gráfica:\n* **Maximização da Taxa Tinta-Dado (*Data-Ink Ratio*):**\n  $\\text{Data-Ink Ratio} = \\frac{\\text{Tinta usada para exibir dados informativos}}{\\text{Tinta total utilizada para imprimir o gráfico}}$\n  O designer deve maximizar essa fração, reduzindo elementos que não contribuem para leitura, sem eliminar títulos, escalas, rótulos, fontes e contexto necessários.\n* **Eliminação de *Chartjunk* (Lixo Gráfico):** Elementos decorativos inúteis, tais como grades densas de fundo, texturas ópticas vibrantes, sombras artificiais e ilustrações redundantes devem ser eliminados sem hesitação.\n* **Fator de Distorção (*Lie Factor*):** Mede a fidelidade matemática do gráfico:\n  $\\text{Lie Factor} = \\frac{\\text{Tamanho do efeito exibido no gráfico}}{\\text{Tamanho do efeito real nos dados}}$\n  Se o fator for significativamente diferente de 1, o gráfico está enganando o leitor.\n\n**Aplicação e recuperação:** Um valor sobe de 100 para 120: crescimento de 20%. Se uma representação produz efeito visual proporcional de 60% sob o método comparado, o fator ilustrativo é 60/20 = 3. Defina a grandeza visual e a base; não use fórmula sem saber o que está sendo medido. Reduzir ornamento não autoriza remover eixo, unidade ou fonte necessários à interpretação.\n\n### Acessibilidade de Produtos Informacionais Digitais (WCAG e PDF/UA)\n\nPublicações governamentais e materiais editoriais no Poder Público submetem-se imperativamente à **Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63)** e às diretrizes internacionais do W3C:\n\n#### A. Diretrizes WCAG Aplicadas à Editoração\n1. **Texto Alternativo Descritivo (*Alt Text*):** Conteúdo visual informativo precisa de equivalente adequado à função; gráficos complexos podem exigir descrição longa ou dados acessíveis. Imagem decorativa pode usar alternativa vazia e tratamento que evite ruído. Não se escreve uma legenda descritiva obrigatória para todo artefato sem função informativa para usuários que utilizam sintetizadores de voz / leitores de tela (NVDA, JAWS, VoiceOver).\n2. **Estrutura Semântica de Cabeçalhos:** Utilização rigorosa das tags de hierarquia (`h1` para título do documento, `h2` para capítulos, `h3` para subseções), permitindo que o leitor cego navegue rapidamente pelos blocos lógicos do texto com atalhos de teclado.\n3. **Contraste Cromático:** Razão mínima de contraste entre o texto e o fundo de **4,5:1** para texto normal e **3:1** para texto grande (18pt ou 14pt em negrito) no Nível AA da WCAG. A cor jamais deve ser o único meio visual de transmitir informação ou indicar ação.\n\n#### B. O Padrão PDF/UA (Universal Accessibility - ISO 14289)\nO padrão internacional **PDF/UA (ISO 14289-1)** define os requisitos técnicos para requisitos de acessibilidade de arquivos PDF no escopo da parte adotada; conformidade não deve ser apresentada como solução automática de toda necessidade de qualquer usuário:\n* Exige **estrutura de tags semânticas completas** (*Tagged PDF*), que espelham a árvore lógica de leitura (parágrafos, listas numeradas, tabelas e títulos);\n* Proíbe elementos gráficos desprovidos de texto equivalente ou marcados indevidamente como conteúdo quando se tratam de meros artefatos de decoração (*artifacts*);\n* Tabelas de dados precisam de estrutura e associações de cabeçalhos adequadas. Tags PDF e HTML têm mecanismos próprios; um desenho de grade não cria sozinho essas relações semânticas.\n\n**Aplicação e recuperação:** Duas categorias diferem só por verde/vermelho. Adicione rótulo, símbolo ou padrão que preserve significado sem cor. Uma descrição longa deve transmitir a relação relevante do gráfico, não listar pixels. Testes de teclado e leitor de tela avaliam ordem, foco e navegação; um resultado automático isolado não certifica toda experiência.",
  teoriaDidaticaMarkdown: "### Revisão: um formato não resolve todas as finalidades\n\nCIP exige dados corretos e responsabilidade pertinente; posição no eletrônico segue a versão atual da NBR 14724. Índice e sumário têm funções distintas. EPUB admite layouts diferentes. PDF/A requer parte/perfil e preservação continuada; não proíbe todo hiperlink nem garante séculos de leitura. PDF/UA e avaliação acessível são dimensões próprias. Visualização precisa de escala, unidade, contexto e fonte; tinta-dado não significa apagar informação necessária. Equivalentes visuais dependem da função e devem ser avaliados com a navegação e a ordem de leitura.\n",
  checkpoints: [
  {
    "id": "cp-8-5-1",
    "pergunta": "Microcheckpoint: posição dos dados de catalogação na versão atual",
    "item": "Na NBR 14724:2024, versão corrigida de 2025, os dados de catalogação devem constar no verso da folha de rosto; em formato eletrônico, imediatamente após a página de rosto.",
    "gabarito": "C",
    "justificativa": "O item 4.2.1.1.2 distingue o suporte. Não se acrescenta obrigação de metade inferior ou retângulo fixo sem base normativa.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização."
  },
  {
    "id": "cp-8-5-2",
    "pergunta": "Micro-Checkpoint 2: Diferença Estrutural entre Índice e Sumário",
    "item": "Segundo as normas da ABNT, o sumário (NBR 6027:2012) e o índice (NBR 6034:2004) constituem elementos pré-textuais obrigatórios que ordenam alfabeticamente os termos e assuntos abordados no corpo do documento.",
    "gabarito": "E",
    "justificativa": "O item iguala funções e posição indevidamente. No trabalho acadêmico pertinente, sumário é pré-textual e segue a estrutura; índice é pós-textual opcional e organiza entradas por critério.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização.",
    "versao_correta": "Sumário e índice têm funções e ordenações distintas, sem serem ambos pré-textuais obrigatórios."
  },
  {
    "id": "cp-8-5-3",
    "pergunta": "Micro-Checkpoint 3: Teoria da Infografia Funcional e Preservação em PDF/A (Caso)",
    "item": "Ao preparar relatório digital com gráficos, a equipe deve preservar clareza e fidelidade dos dados e avaliar separadamente a conformidade de preservação escolhida e os requisitos de acessibilidade; PDF/A, por si, não certifica experiência acessível.",
    "gabarito": "C",
    "justificativa": "As dimensões são complementares. Selecionar perfil de formato não dispensa alternativas textuais, estrutura, ordem de leitura e testes com usuários/tecnologia assistiva.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização."
  },
  {
    "id": "rt-8-5-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo EPUB 3 exige layout refluível e não admite publicações de layout fixo.",
    "gabarito": "E",
    "justificativa": "A especificação admite estratégias diferentes. Refluxo não define sozinho toda a família.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização.",
    "editalRef": "Bloco D - Item 5.6 e 5.7",
    "habilidade": "aplicar",
    "versao_correta": "EPUB 3 pode usar layout refluível ou fixo nas condições da especificação."
  },
  {
    "id": "rt-8-5-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um PDF/A válido é necessariamente acessível a leitor de tela, independentemente de tags e ordem de leitura.",
    "gabarito": "E",
    "justificativa": "Preservação e acessibilidade têm objetivos/requisitos distintos.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização.",
    "editalRef": "Bloco D - Item 5.6 e 5.7",
    "habilidade": "aplicar",
    "versao_correta": "PDF/A não certifica sozinho estrutura e experiência acessíveis."
  },
  {
    "id": "rt-8-5-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma URL complementar torna automaticamente impossível qualquer conformidade PDF/A.",
    "gabarito": "E",
    "justificativa": "Hiperlink não é a mesma dependência externa indispensável à renderização. O perfil precisa ser examinado.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização.",
    "editalRef": "Bloco D - Item 5.6 e 5.7",
    "habilidade": "aplicar",
    "versao_correta": "A presença de hiperlink não prova, por si, violação de PDF/A."
  },
  {
    "id": "rt-8-5-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Maximizar tinta-dado justifica eliminar unidades, legendas e fontes necessárias à compreensão.",
    "gabarito": "E",
    "justificativa": "Economia visual deve preservar o que apoia interpretação e rastreabilidade.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização.",
    "editalRef": "Bloco D - Item 5.6 e 5.7",
    "habilidade": "aplicar",
    "versao_correta": "Reduzir ruído visual não autoriza retirar contexto necessário."
  },
  {
    "id": "rt-8-5-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma imagem puramente decorativa pode precisar de alternativa vazia, em vez de descrição que interrompa desnecessariamente a leitura.",
    "gabarito": "C",
    "justificativa": "O tratamento depende da função. Conteúdo informativo exige equivalente; artefato decorativo não deve produzir ruído indevido.",
    "fonte": "NBR 14724:2024, versão corrigida 2025; NBR 6034 e NBR 6027; CFB, Resolução 184/2017 e FAQ; W3C, EPUB 3.3 e WCAG; ISO 19005/PDF Association; exemplos autorais de visualização.",
    "editalRef": "Bloco D - Item 5.6 e 5.7",
    "habilidade": "aplicar"
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-8-5-fonte-14724",
      "nome": "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
      "ideiaChave": "Dados de catalogação, formato eletrônico e estrutura; versão corrigida 2025, PDF do acervo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-5-fonte-cfb",
      "nome": "CFB — Perguntas frequentes",
      "ano": "Referência de consulta",
      "obraPrincipal": "CFB — Perguntas frequentes",
      "ideiaChave": "Assinatura profissional e Resolução 184/2017; não atribuir a regra inteira à norma de apresentação.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-5-fonte-epub",
      "nome": "W3C — EPUB 3.3",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C — EPUB 3.3",
      "ideiaChave": "Estrutura do pacote, conteúdo e opções de layout.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-5-fonte-pdf",
      "nome": "PDF Association — PDF/A e referências externas",
      "ano": "Referência de consulta",
      "obraPrincipal": "PDF Association — PDF/A e referências externas",
      "ideiaChave": "Distinguir autossuficiência para apresentação, links e arquivos embutidos.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-5-fonte-wcag",
      "nome": "W3C — WCAG 2.2",
      "ano": "Referência de consulta",
      "obraPrincipal": "W3C — WCAG 2.2",
      "ideiaChave": "Alternativas, contraste, estrutura e interação.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-8-5-3",
      "afirmacao": "Uma URL complementar torna automaticamente impossível qualquer conformidade PDF/A.",
      "gabarito": "E",
      "porQue": "Hiperlink não é a mesma dependência externa indispensável à renderização. O perfil precisa ser examinado."
    },
    {
      "id": "memoria-rt-8-5-4",
      "afirmacao": "Maximizar tinta-dado justifica eliminar unidades, legendas e fontes necessárias à compreensão.",
      "gabarito": "E",
      "porQue": "Economia visual deve preservar o que apoia interpretação e rastreabilidade."
    },
    {
      "id": "memoria-rt-8-5-5",
      "afirmacao": "Uma imagem puramente decorativa pode precisar de alternativa vazia, em vez de descrição que interrompa desnecessariamente a leitura.",
      "gabarito": "C",
      "porQue": "O tratamento depende da função. Conteúdo informativo exige equivalente; artefato decorativo não deve produzir ruído indevido."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-8-5-bloco-1",
    "titulo": "Catalogação na publicação: conteúdo, posição e responsabilidade",
    "objetivos": [
      "Relacionar catalogação, posição e responsabilidade profissional."
    ],
    "conteudo": "A catalogação na publicação **CIP** fornece dados catalográficos incorporados à publicação. Deve representar o recurso e seus acessos conforme o código e a política adotados; não é apenas um desenho de retângulo que se copia de outra obra. Uma ficha visualmente completa com autor, título ou classificação errados continua defeituosa.\n\nDiferencie três fontes de obrigação. A **Lei 10.753/2003**, art. 6º, trata de ISBN e ficha na editoração de livros. O exercício profissional tem legislação própria. O **CFB**, ao explicar a Resolução 184/2017, trata de assinatura e registro do bibliotecário em documentos produzidos no exercício profissional, incluindo fichas e sistemas automatizados. Essas bases não se reduzem a uma regra de margem da ABNT.\n\nNa **NBR 14724:2024, versão corrigida de 2025**, os dados internacionais de catalogação constam no verso da folha de rosto conforme código vigente; no formato eletrônico, imediatamente após a página de rosto. Não se atribui à norma uma obrigação universal de metade inferior ou um retângulo fixo de 12,5 × 7,5 cm sem item que o determine. Instituições podem ter modelos próprios que devem ser identificados como tais.\n\n**Fluxo de produção:** confirme versão e gênero do documento; confira fonte de informação e responsabilidade; selecione pontos de acesso e classificação; revise identificadores e dados editoriais; confira posição e apresentação; registre responsabilidade técnica e mantenha correções. Alterar título/edição após gerar ficha pode exigir atualizá-la.\n\n**Caso:** um formulário automático gera dados de um TCC com a grafia de sobrenome errada. A existência do gerador não elimina necessidade de verificação e responsabilidade. Uma ficha de livro comercial também não deve ser usada sem adaptação como se todas as características de tese fossem idênticas.\n\n**Aplicação e recuperação:** A ficha pode ser produzida com apoio automatizado, mas seus dados continuam sujeitos a validação. Não use um ISBN fictício ou código de classificação adivinhado para preencher lacunas. Quando o documento eletrônico muda de versão, confira se os dados e as referências continuam correspondendo à publicação.",
    "checkpointIds": [
      "cp-8-5-1"
    ]
  },
  {
    "id": "sub-8-5-bloco-2",
    "titulo": "Índices e Instrumentos Auxiliares (ABNT NBR 6034:2004)",
    "objetivos": [
      "Escolher índice ou sumário pela função."
    ],
    "conteudo": "Para escolher instrumento de acesso, compare sua função e o gênero documental:\n\n#### A. A Definição de Índice segundo a ABNT NBR 6034:2004\n* **Conceito Normativo:** \"Relação de palavras ou frases, ordenadas segundo determinado critério, que localiza e remete para informações contidas em um texto ou em documentos\".\n* **Posicionamento Estrutural:** É um **elemento PÓS-TEXTUAL OPCIONAL**. Localiza-se no final da publicação (após os elementos textuais e após referências, vocabulário de termos, apêndices e anexos).\n* **Tipologia de Índices:**\n  1. *Índice Geral / Remissivo:* Reúne autores, assuntos e títulos em sequência alfabética única;\n  2. *Índice Especial:* Dedicado a uma única categoria de informação (ex.: índice onomástico/de autores, índice cronológico de leis, índice geográfico, índice sistemático de assuntos);\n  3. *Índice Cumulativo:* Reúne em ordem única as entradas de múltiplos volumes de uma coleção ou vários anos de um periódico parlamentar.\n\n#### B. Distinção Obrigatória: Índice (NBR 6034:2004) vs. Sumário (NBR 6027:2012)\n\n```tree\nTITLE: Confronto Estrutural: Sumário (NBR 6027) vs. Índice (NBR 6034)\n- Instrumentos de Acesso ao Conteúdo | Normas distintas com papéis complementares\n  - Sumário (ABNT NBR 6027:2012) | Visão macro e estrutural do documento\n    - Posição Estrutural | Elemento PRÉ-TEXTUAL OBRIGATÓRIO (último pré-textual)\n    - Princípio de Ordenação | A mesma ordem sequencial em que as partes aparecem no texto\n    - Fidelidade de Grafia | Reproduz rigorosamente a redação, numeração e tipografia dos capítulos\n    - Granularidade | Seções primárias, secundárias, terciárias e quaternárias (não detalha termos isolados)\n  - Índice (ABNT NBR 6034:2004) | Acesso micro e pontual a conceitos específicos\n    - Posição Estrutural | Elemento PÓS-TEXTUAL OPCIONAL (último elemento do trabalho)\n    - Princípio de Ordenação | Alfabético, cronológico ou sistemático (independe da ordem física do texto)\n    - Remissões Pontuais | Remete diretamente ao número da página ou parágrafo onde o vocábulo ocorre\n    - Elaboração | Exige análise conceitual aprofundada e indexação terminológica de substantivos\n```\n\n**Aplicação e recuperação:** Um leitor procura uma pessoa citada em vários capítulos: índice onomástico pode ajudá-lo. Para ver a estrutura geral e ir ao capítulo, sumário é mais apropriado. A mesma publicação pode ter ambos. A obrigatoriedade e a posição devem seguir gênero/norma aplicável, sem declarar que todo arquivo web precisa dos dois.",
    "checkpointIds": [
      "cp-8-5-2"
    ]
  },
  {
    "id": "sub-8-5-bloco-3",
    "titulo": "Editoração digital: apresentação, preservação e acesso",
    "objetivos": [
      "Distinguir layout, preservação e acessibilidade de formatos."
    ],
    "conteudo": "**EPUB 3** organiza um pacote com documentos de conteúdo, recursos, metadados e informação de navegação conforme a especificação. Pode oferecer **layout refluível** ou **layout fixo**. Não é verdade que todo EPUB se reajusta da mesma maneira a qualquer tela. A escolha depende do conteúdo e dos recursos de leitura; tabelas complexas e elementos fixos exigem cuidado adicional.\n\nNo layout refluível, o usuário pode adaptar características de leitura nos limites do leitor e do projeto. Estrutura semântica, navegação, ordem de leitura, idioma e alternativas textuais precisam ser construídos; simplesmente mudar a extensão do arquivo para epub não produz acessibilidade. O documento de pacote usa metadados e propriedades definidos; Dublin Core integra esse ambiente sem esgotar todos os metadados possíveis.\n\n**PDF/A**, família ISO 19005, impõe requisitos voltados à preservação da apresentação e uso de componentes definidos, com partes/perfis diferentes. É necessário dizer qual parte e conformidade são adotadas. Não é obrigatório para toda publicação legislativa apenas por ser governamental, salvo determinação específica aplicável.\n\nRegras como não cifrar o documento conforme o perfil e incorporar fontes/componentes necessários não garantem legibilidade por séculos nem eliminam política de preservação, controle de fixidez e migrações futuras. Dependências externas indispensáveis à renderização são problema diferente de um **hiperlink** para informação complementar: não se conclui que toda URL é proibida em PDF/A.\n\nPartes mais recentes admitem condições diferentes de anexos/arquivos embutidos e outros recursos. Portanto, frases como “nenhuma versão pode conter qualquer arquivo multimídia associado” são excessivas. Também não se confunde armazenar representação de lógica em arquivo embutido sob condição específica com permitir execução livre de JavaScript na apresentação. Consulte o perfil, valide e teste o resultado.\n\n**PDF/UA** trata de acessibilidade do PDF e também tem versões/escopos. Conformidade PDF/A não implica conformidade PDF/UA; um arquivo pode atender requisitos de preservação e ainda ter ordem de leitura errada ou imagens sem equivalente. As duas finalidades podem ser articuladas, com validação técnica e avaliação de uso.\n\n**Caso resolvido:** a publicação mantém fontes necessárias e passa num validador PDF/A, mas o leitor de tela percorre duas colunas em ordem incoerente. O problema de acessibilidade permanece. Não se resolve declarando que a aprovação de preservação certificou todas as dimensões do documento.\n\n**Aplicação e recuperação:** Conservar aparência não é o mesmo que permitir ampliação e navegação. Um arquivo de layout fixo pode atender finalidade editorial, mas requer alternativas e testes pertinentes. Escolha perfil PDF/A e conformidade acessível de forma explícita; extensão de arquivo ou carimbo de exportação não substitui validação e leitura com tecnologia assistiva.",
    "checkpointIds": [
      "rt-8-5-1",
      "rt-8-5-2",
      "rt-8-5-3"
    ]
  },
  {
    "id": "sub-8-5-bloco-4",
    "titulo": "Infografia e Visualização de Dados (Alberto Cairo e Edward Tufte)",
    "objetivos": [
      "Avaliar fidelidade de uma visualização e uso de contexto."
    ],
    "conteudo": "A comunicação da informação em bibliotecas legislativas e portais institucionais faz uso massivo de **infográficos e visualizações de dados** para traduzir proposições complexas, orçamentos públicos e estatísticas sociais em interfaces compreensíveis para o cidadão:\n\n#### A. A Arte Funcional de Alberto Cairo (*The Functional Art*, 2012)\nO jornalista e designer espanhol Alberto Cairo, referência mundial em visualização da informação, formulou a teoria da **infografia funcional**:\n* **A Falácia da Cosmética:** Um infográfico **não é ilustração estética**, arte ornamental ou desenho decorativo destinado a \"embelezar\" o documento.\n* **Natureza Cognitiva e Ferramental:** A infografia é uma **ferramenta funcional de cognição visual**. Assim como um martelo ou um microscópio, sua qualidade mede-se pela eficiência com que permite ao cérebro humano extrair padrões, entender relacionamentos e tomar decisões a partir de dados complexos.\n* **Princípio da Forma que Segue a Função:** Em visualização de dados, a estética é consequência do rigor estrutural. Gráficos 3D desnecessários, cores berrantes sem propósito semântico e efeitos gráficos que mascaram proporções reais distorcem a verdade factual dos dados.\n\n#### B. Edward Tufte e o *Data-Ink Ratio*\nEdward Tufte (*The Visual Display of Quantitative Information*, 1983) estabeleceu postulados canônicos de excelência gráfica:\n* **Maximização da Taxa Tinta-Dado (*Data-Ink Ratio*):**\n  $\\text{Data-Ink Ratio} = \\frac{\\text{Tinta usada para exibir dados informativos}}{\\text{Tinta total utilizada para imprimir o gráfico}}$\n  O designer deve maximizar essa fração, reduzindo elementos que não contribuem para leitura, sem eliminar títulos, escalas, rótulos, fontes e contexto necessários.\n* **Eliminação de *Chartjunk* (Lixo Gráfico):** Elementos decorativos inúteis, tais como grades densas de fundo, texturas ópticas vibrantes, sombras artificiais e ilustrações redundantes devem ser eliminados sem hesitação.\n* **Fator de Distorção (*Lie Factor*):** Mede a fidelidade matemática do gráfico:\n  $\\text{Lie Factor} = \\frac{\\text{Tamanho do efeito exibido no gráfico}}{\\text{Tamanho do efeito real nos dados}}$\n  Se o fator for significativamente diferente de 1, o gráfico está enganando o leitor.\n\n**Aplicação e recuperação:** Um valor sobe de 100 para 120: crescimento de 20%. Se uma representação produz efeito visual proporcional de 60% sob o método comparado, o fator ilustrativo é 60/20 = 3. Defina a grandeza visual e a base; não use fórmula sem saber o que está sendo medido. Reduzir ornamento não autoriza remover eixo, unidade ou fonte necessários à interpretação.",
    "checkpointIds": [
      "rt-8-5-4"
    ]
  },
  {
    "id": "sub-8-5-bloco-5",
    "titulo": "Acessibilidade de Produtos Informacionais Digitais (WCAG e PDF/UA)",
    "objetivos": [
      "Aplicar equivalentes, estrutura e contraste com avaliação real."
    ],
    "conteudo": "Publicações governamentais e materiais editoriais no Poder Público submetem-se imperativamente à **Lei Brasileira de Inclusão (Lei nº 13.146/2015, art. 63)** e às diretrizes internacionais do W3C:\n\n#### A. Diretrizes WCAG Aplicadas à Editoração\n1. **Texto Alternativo Descritivo (*Alt Text*):** Conteúdo visual informativo precisa de equivalente adequado à função; gráficos complexos podem exigir descrição longa ou dados acessíveis. Imagem decorativa pode usar alternativa vazia e tratamento que evite ruído. Não se escreve uma legenda descritiva obrigatória para todo artefato sem função informativa para usuários que utilizam sintetizadores de voz / leitores de tela (NVDA, JAWS, VoiceOver).\n2. **Estrutura Semântica de Cabeçalhos:** Utilização rigorosa das tags de hierarquia (`h1` para título do documento, `h2` para capítulos, `h3` para subseções), permitindo que o leitor cego navegue rapidamente pelos blocos lógicos do texto com atalhos de teclado.\n3. **Contraste Cromático:** Razão mínima de contraste entre o texto e o fundo de **4,5:1** para texto normal e **3:1** para texto grande (18pt ou 14pt em negrito) no Nível AA da WCAG. A cor jamais deve ser o único meio visual de transmitir informação ou indicar ação.\n\n#### B. O Padrão PDF/UA (Universal Accessibility - ISO 14289)\nO padrão internacional **PDF/UA (ISO 14289-1)** define os requisitos técnicos para requisitos de acessibilidade de arquivos PDF no escopo da parte adotada; conformidade não deve ser apresentada como solução automática de toda necessidade de qualquer usuário:\n* Exige **estrutura de tags semânticas completas** (*Tagged PDF*), que espelham a árvore lógica de leitura (parágrafos, listas numeradas, tabelas e títulos);\n* Proíbe elementos gráficos desprovidos de texto equivalente ou marcados indevidamente como conteúdo quando se tratam de meros artefatos de decoração (*artifacts*);\n* Tabelas de dados precisam de estrutura e associações de cabeçalhos adequadas. Tags PDF e HTML têm mecanismos próprios; um desenho de grade não cria sozinho essas relações semânticas.\n\n**Aplicação e recuperação:** Duas categorias diferem só por verde/vermelho. Adicione rótulo, símbolo ou padrão que preserve significado sem cor. Uma descrição longa deve transmitir a relação relevante do gráfico, não listar pixels. Testes de teclado e leitor de tela avaliam ordem, foco e navegação; um resultado automático isolado não certifica toda experiência.",
    "checkpointIds": [
      "cp-8-5-3",
      "rt-8-5-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "14724",
    "titulo": "ABNT NBR 14724:2024 — Trabalhos acadêmicos",
    "localizador": "Dados de catalogação, formato eletrônico e estrutura; versão corrigida 2025, PDF do acervo."
  },
  {
    "id": "cfb",
    "titulo": "CFB — Perguntas frequentes",
    "localizador": "Assinatura profissional e Resolução 184/2017; não atribuir a regra inteira à norma de apresentação.",
    "url": "https://cfb.org.br/perguntas-frequentes/"
  },
  {
    "id": "epub",
    "titulo": "W3C — EPUB 3.3",
    "localizador": "Estrutura do pacote, conteúdo e opções de layout.",
    "url": "https://www.w3.org/TR/epub-33/"
  },
  {
    "id": "pdf",
    "titulo": "PDF Association — PDF/A e referências externas",
    "localizador": "Distinguir autossuficiência para apresentação, links e arquivos embutidos.",
    "url": "https://pdfa.org/pdf-a-and-external-references/"
  },
  {
    "id": "wcag",
    "titulo": "W3C — WCAG 2.2",
    "localizador": "Alternativas, contraste, estrutura e interação.",
    "url": "https://www.w3.org/TR/WCAG22/"
  }
],
};

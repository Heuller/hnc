import type { ModuloFilho } from '../../../domain/types';

export const submodulo82: ModuloFilho = {
  id: 'sub-8-2',
  numero: '8.2',
  editalRef: 'Bloco D - Item 5.3',
  preRequisitos: ["sub-8-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-8-1",
          "titulo": "NBR 6023 (Referências)",
          "motivo": "Chamadas no texto pelo sistema autor-data e numérico."
      }
  ],
  titulo: 'ABNT NBR 10520: Citações em Documentos (Versão 2023)',
  antesDeLer: [
  {
    "termo": "Citação e referência",
    "definicao": "A chamada identifica a fonte no texto; a referência permite reconhecer o documento.",
    "exemploBiblioteca": "Maiúsculas/minúsculas na chamada não obrigam idêntica forma visual na referência."
  },
  {
    "termo": "Requisito e recomendação",
    "definicao": "Expressões normativas têm forças diferentes.",
    "exemploBiblioteca": "Recuo padronizado é exigido; quatro centímetros são recomendados na edição de 2023."
  }
],
  descricaoCurta: "Distinguir edição e grafia de sobrenomes e siglas. Aplicar direta, indireta e apud com fonte verificável. Separar intervenção editorial, grifo e tradução. Relacionar sistema de chamada, referência e notas.",
  tempoEstimadoMinutos: 21,
  autoresChave: [
  "ABNT NBR 10520:2023 — Citações em documentos"
],
  alertasCebraspe: [
  "A norma exige recuo padronizado e recomenda 4 cm. A assertiva troca a força da orientação.",
  "Apud explicita a mediação; a lista deve elencar a fonte consultada.",
  "Redação própria não elimina a origem intelectual da informação."
],
  teoriaDensaMarkdown: "### ABNT NBR 10520:2023: versão e grafia das chamadas\n\nEm julho de 2023, a ABNT publicou a aguardada revisão histórica da norma **ABNT NBR 10520** (*Informação e Documentação — Citações em Documentos — Apresentação*), revogando a clássica versão de 2002 que vigorava há mais de duas décadas:\n\n#### A Grande Ruptura Normativa da Edição 2023:\n* **Padronização em Letras Maiúsculas e Minúsculas:**\n  * No padrão antigo (2002), havia uma exigência bifásica: fora dos parênteses usava-se maiúsculas e minúsculas (`Conforme Silva (2002)`), mas dentro dos parênteses era obrigatório o uso de caixa alta total (`(SILVA, 2002, p. 10)`).\n  * **Na NBR 10520:2023, essa exigência de caixa alta entre parênteses foi formalmente extinta!**\n  * O sobrenome do autor agora é grafado em **letras maiúsculas e minúsculas em qualquer posição**, tanto fora quanto dentro dos parênteses:\n    * *Dentro dos parênteses:* `(Silva, 2023, p. 15)` ou `(Almeida; Maciel, 2023)`.\n    * *No corpo do parágrafo:* `Segundo Silva (2023, p. 15)...`\n    * *Entidades e órgãos institucionais:* `(Brasil, 2021)` ou `(Câmara dos Deputados, 2023)`.\n* A mudança deve ser aplicada segundo a edição cobrada, sem estimar incidência de prova ou declarar equivalência com outros estilos. Nas chamadas de instituições, a norma recomenda siglas em maiúsculas; não se deve interpretar a regra de sobrenomes como proibição geral de qualquer caixa alta.\n\n**Aplicação e recuperação:** Uma chamada (Silva, 2024) é distinta da entrada SILVA na lista de referências da NBR 6023. Normas e funções diferentes não precisam repetir o mesmo uso de caixa. Prova antiga deve ser lida segundo a edição indicada; não se julga a regra de 2002 como se tivesse nascido em 2023.\n\n### Modalidades de Citação e Regras Tipográficas\n\n```tree\nTITLE: Modalidades de Citação e Regras Tipográficas (ABNT NBR 10520:2023)\n- Citações em Documentos (NBR 10520:2023) | Menção no texto de informação colhida de outra fonte\n  - Citação Direta Curta (Até 3 Linhas) | Transcrição textual exata mantida no corpo do parágrafo\n    - Pontuação Tipográfica | Inserida obrigatoriamente entre aspas duplas (\"...\")\n    - Dados Obrigatórios | Indicação de fonte e página/localização quando houver (exemplo fictício: Silva, 2023, p. 15)\n    - Aspas Internas | Aspas originais do texto citado convertem-se em aspas simples ('...')\n  - Citação Direta Longa (Mais de 3 Linhas) | Transcrição textual destacada do parágrafo\n    - Recuo Gráfico | Recuo padronizado em relação à margem esquerda; recomenda-se 4 cm\n    - Tipografia e Espaçamento | Tamanho de fonte menor (ex: 10 ou 11 pt) e entrelinhas simples\n    - Supressão de Aspas | SEM aspas duplas; Indicação da fonte e de página/localização quando houver, conforme sistema\n  - Citação Indireta (Paráfrase / Livre) | Texto redigido com as próprias palavras do pesquisador\n    - Ausência de Aspas | Redação autoral livre baseada na ideia do autor consultado\n    - Dados Obrigatórios | Indicação de autor e ano obrigatória; número de página é facultativo\n  - Citação de Citação (apud) | Citação direta ou indireta de documento ao qual não se teve acesso\n    - Expressão latina apud | 'Citado por': Autor Original (ano) apud Autor Consultado (ano, p.)\n    - Lista de Referências | Na lista final, referencia-se OBRIGATORIAMENTE a obra consultada (efetivamente lida)\n```\n\n#### A. Citação Direta Curta\n* Transcrição textual exata das palavras do autor consultado com **extensão de até três linhas inteiras**.\n* Permanece inserida normalmente no fluxo contínuo do parágrafo textual.\n* Deve vir **obrigatoriamente entre aspas duplas (`\"`)**.\n* Caso o fragmento original citado já possua palavras entre aspas, estas são convertidas em **aspas simples (`'`)** na transcrição.\n* A fonte deve ser indicada no sistema adotado; na direta, informe página/localização **se houver**. Para documento não paginado, convém indicar o localizador disponível, sem inventar páginas:\n  * Ex.: Exemplo fictício de chamada, sem atribuição a obra real: Silva (2024, p. 15) afirma: “O catálogo precisa distinguir recursos semelhantes”.\n\n#### B. Citação Direta Longa\n* Transcrição literal de trecho com **mais de três linhas inteiras de extensão**.\n* **Requisitos Tipográficos Exigíveis e Cumulativos:**\n  1. Deve ser destacada em parágrafo próprio independente;\n  2. Aplicar **recuo padronizado em relação à margem esquerda**; o recuo de **4 cm é recomendado**, não medida obrigatória universal;\n  3. Utilizar **tamanho de fonte menor** do que a fonte do texto principal (usualmente corpo 10 ou 11);\n  4. O espaçamento entre linhas deve ser **simples** (enquanto o corpo do texto usa espaçamento 1,5);\n  5. O bloco deve ser apresentado **sem aspas delimitadoras da citação longa**, conforme 7.1.1. Isso não é proibição de preservar qualquer sinal de aspas que faça parte do conteúdo transcrito;\n  6. A indicação segue o sistema de chamada; a página/localização é informada quando houver:\n     * Ex.: Ao final do bloco recuado: Exemplo fictício: `...fim do trecho (Silva, 2024, p. 15).` O ponto encerra a frase; não se acrescenta outro ponto obrigatório dentro da chamada.\n\n#### C. Citação Indireta (Livre / Paráfrase)\n* Texto baseado na obra consultada, no qual o pesquisador reproduz fielmente as ideias e argumentos do autor com suas próprias palavras e estilo redacional.\n* Não leva aspas nem recuo de margem.\n* A indicação do autor e do ano é obrigatória; a **indicação da página consultada é facultativa** pela norma (embora recomendada).\n  * Ex.: A gestão do conhecimento articula fluxos informais e capital humano nas organizações (Choo, 2003).\n\n#### D. Citação de Citação (*apud*)\n* Utilizada quando o pesquisador não teve acesso físico ou digital ao documento original, citando-o por intermédio de outro autor que o transcreveu em sua obra:\n* A expressão latina **apud** significa \"junto a\", \"em\", \"citado por\" (grafa-se em fonte redonda ou itálica).\n* Formato Canônico:\n  $\\text{Autor da Ideia Original (Ano original } \\textbf{apud} \\text{ Autor Consultado, Ano consultado, página)}$\n  * Ex.: Exemplo fictício de estrutura: Pereira (1990 apud Silva, 2024, p. 15). Pereira não foi consultado diretamente; Silva foi a fonte efetivamente consultada.\n* **Regra Crítica das Referências Finais:** Na lista de referências ao término do trabalho acadêmico ou relatório técnico, **deve constar obrigatoriamente a referência completa da obra efetivamente consultada** (no exemplo fictício, Silva, 2024). Faculta-se mencionar a obra original em nota de rodapé informativa.\n\n**Aplicação e recuperação:** Um trecho de quatro linhas é destacado sem aspas delimitadoras e com recuo padronizado. O enunciado que torna exatamente quatro centímetros obrigatório transforma recomendação em exigência. Já a paráfrase não elimina a obrigação de atribuir a fonte. Se o recurso não tem páginas, não se inventa p. 1 para preencher o modelo. No apud, a referência final corresponde à fonte consultada, não a uma leitura inexistente.\n\n### Supressões, Destaques, Interpolações e Erros\n\n* **Supressões (*omissões de trechos da citação*):** Indicadas por reticências entre colchetes: `[...]`.\n* **Interpolações, Acréscimos ou Comentários:** Inseridos entre colchetes no interior da citação: `[esclarecimento inserido]`; não confundir com indicação de grifo/tradução ao final da chamada.\n* **Incorreções no Texto Original Citado:** Quando o texto original contém um erro ortográfico, factual ou gramatical e o pesquisador deseja manter a fidelidade da transcrição, insere-se a expressão latina `[sic]` (assim mesmo) imediatamente após o erro entre colchetes.\n* **Indicação de Destaques Tipográficos:**\n  * Quando o pesquisador decide destacar (negrito ou itálico) uma palavra ou frase na citação direta que não estava destacada no original, acrescenta-se na chamada: `(grifo nosso)` ou `(grifo próprio)`.\n  * Se o destaque já pertencia ao original, a edição de 2023 **não exige informar o grifo** (7.1.5). A indicação de tradução própria tem disciplina específica (7.1.6).\n\n**Aplicação e recuperação:** O autor da pesquisa acrescenta explicação entre colchetes e destaca uma palavra. São intervenções diferentes, com marcações diferentes. Reticências entre colchetes informam supressão. Nenhuma marca autoriza alterar o sentido do fragmento. Não atribua a uma obra real uma frase inventada só para ilustrar citação.\n\n### Sistemas de chamada e notas: não misturar funções\n\nA fonte é indicada por sistema **autor-data** ou **numérico**, usado consistentemente ao longo do documento. Em autor-data, a chamada identifica autoria e data conforme as regras e fornece página/localização quando pertinente. No numérico, a fonte recebe numeração consecutiva que remete à lista de referências; citações posteriores da mesma fonte mantêm o número. Não se reinicia a sequência a cada página.\n\nO item 6.2.2 estabelece que o sistema numérico não pode ser utilizado quando houver notas. Não confunda numeração de referência no texto, notas de referência e notas explicativas como se fossem uma única função. A disciplina das notas está na seção 8, com numeração e formas próprias. Dizer que expressões de notas só podem existir no sistema numérico não decorre da norma.\n\nA primeira citação de obra em nota de referência deve ser completa. Recursos para notas subsequentes incluem formas abreviadas nas condições específicas: **Idem/Id.** remete ao mesmo autor e **Ibidem/Ibid.**, à mesma obra imediatamente anterior; **op. cit.** e **loc. cit.** têm limites de uso que não devem ser convertidos em atalhos indiscriminados. É necessário identificar inequivocamente a fonte. **Apud** também pode ocorrer no corpo da citação, com indicação honesta da fonte consultada.\n\n**Autoria múltipla:** em citações de quatro ou mais autores, pode-se usar o primeiro seguido de et al., mesmo que todos apareçam na referência. A opção deve ser uniforme. Não importe esse tratamento para um cabeçalho catalográfico nem declare que é a mesma regra de referência da NBR 6023.\n\n**Exemplo resolvido:** uma obra recebeu número 3 na lista e é citada novamente. Não se cria número 9 para fingir que é outra fonte nem se muda para autor-data apenas porque o parágrafo foi reescrito. Se forem usadas notas, reavalie o sistema diante de 6.2.2. A formatação precisa permitir rastrear a fonte, e não apenas reproduzir um modelo visual.\n\n**Aplicação e recuperação:** No texto há fonte consultada e uma nota explicativa. Não escolha um sistema ignorando a restrição de 6.2.2. A sequência de referência não é a sequência de páginas. Na correção de um exemplo, confira primeiro se a fonte é rastreável, depois tipografia e pontuação; um exemplo visualmente elegante pode continuar atribuindo uma fala inexistente.",
  teoriaDidaticaMarkdown: "### Revisão: fonte, forma e força normativa\n\nEdição 2023: sobrenomes nas chamadas em maiúsculas/minúsculas; siglas têm orientação própria. Direta curta usa aspas; longa usa destaque, fonte menor, espaço simples e recuo padronizado, com 4 cm recomendados. Página/localização é indicada quando houver; não se inventa dado. Paráfrase também atribui fonte. Apud explicita consulta indireta e a referência é da fonte consultada. Grifo próprio e tradução têm indicações próprias; grifo já original não exige aviso. Use sistema consistente; numeração de fonte não é numeração de notas nem de páginas.\n",
  checkpoints: [
  {
    "id": "cp-8-2-1",
    "pergunta": "Micro-Checkpoint 1: A Nova NBR 10520:2023 e Grafia de Autores",
    "item": "Na versão atualizada da ABNT NBR 10520:2023, o sobrenome do autor indicado dentro de parênteses no sistema autor-data deve ser grafado em letras maiúsculas e minúsculas, não sendo mais exigida a antiga caixa alta integral.",
    "gabarito": "C",
    "justificativa": "Para sobrenome pessoal, a edição de 2023 usa maiúsculas/minúsculas nas chamadas, sem impor antiga caixa alta integral entre parênteses. Siglas institucionais têm tratamento próprio.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios."
  },
  {
    "id": "cp-8-2-2",
    "pergunta": "Micro-Checkpoint 2: Formatação da Citação Direta Longa",
    "item": "Em trabalhos acadêmicos estruturados pelas normas da ABNT, as citações diretas com mais de três linhas devem ser apresentadas com recuo de 4 cm da margem esquerda, espaçamento simples, tamanho de fonte menor e delimitadas por aspas duplas.",
    "gabarito": "E",
    "justificativa": "O bloco longo é sem aspas delimitadoras; fonte menor, espaço simples e recuo padronizado são exigidos. Quatro centímetros são recomendação, não medida obrigatória universal.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios.",
    "versao_correta": "A longa deve ser destacada com recuo padronizado, fonte menor, espaço simples e sem aspas delimitadoras; recomendam-se 4 cm."
  },
  {
    "id": "cp-8-2-3",
    "pergunta": "Micro-Checkpoint 3: Citações Diretas Longas conforme a ABNT NBR 10520",
    "item": "Na NBR 10520:2023, a citação direta com mais de três linhas deve ter recuo padronizado, letra menor, espaço simples e ausência de aspas delimitadoras; recomenda-se o recuo de 4 cm.",
    "gabarito": "C",
    "justificativa": "A redação preserva a diferença entre dever de padronizar o recuo e recomendação de medida, conforme 7.1.1.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios."
  },
  {
    "id": "rt-8-2-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A NBR 10520:2023 torna obrigatória, em qualquer citação direta longa, a medida exata de quatro centímetros de recuo.",
    "gabarito": "E",
    "justificativa": "A norma exige recuo padronizado e recomenda 4 cm. A assertiva troca a força da orientação.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios.",
    "editalRef": "Bloco D - Item 5.3",
    "habilidade": "aplicar",
    "versao_correta": "O recuo deve ser padronizado; 4 cm é recomendação."
  },
  {
    "id": "rt-8-2-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O destaque já existente no trecho original dispensa informar grifo do autor, conforme 7.1.5 da edição de 2023.",
    "gabarito": "C",
    "justificativa": "A norma exige informar grifo próprio quando acrescentado, mas não essa indicação quando já existia no texto transcrito.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios.",
    "editalRef": "Bloco D - Item 5.3",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-2-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na citação de citação, é correto apresentar como diretamente consultada uma obra que só se conhece por outra fonte.",
    "gabarito": "E",
    "justificativa": "Apud explicita a mediação; a lista deve elencar a fonte consultada.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios.",
    "editalRef": "Bloco D - Item 5.3",
    "habilidade": "aplicar",
    "versao_correta": "A citação de citação deve identificar a mediação e a fonte efetivamente consultada."
  },
  {
    "id": "rt-8-2-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Citações posteriores da mesma fonte no sistema numérico mantêm seu número, em vez de reiniciar a numeração a cada página.",
    "gabarito": "C",
    "justificativa": "A sequência identifica fontes na ordem de ocorrência, preservando o número para repetições.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios.",
    "editalRef": "Bloco D - Item 5.3",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-2-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Uma paráfrase em palavras próprias dispensa indicar a fonte da ideia.",
    "gabarito": "E",
    "justificativa": "Redação própria não elimina a origem intelectual da informação.",
    "fonte": "ABNT NBR 10520:2023, seções 6, 7 e 8; edição do PDF do acervo HNC, trechos conferidos; exemplos autorais fictícios.",
    "editalRef": "Bloco D - Item 5.3",
    "habilidade": "aplicar",
    "versao_correta": "A citação indireta também exige indicação da fonte no sistema adotado."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-8-2-fonte-10520",
      "nome": "ABNT NBR 10520:2023 — Citações em documentos",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 10520:2023 — Citações em documentos",
      "ideiaChave": "Seções 6 (sistemas), 7 (citações) e 8 (notas); PDF Abnt_nbr_10520_2023.pdf do acervo. Não confundir recomendação e requisito.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-8-2-3",
      "afirmacao": "Na citação de citação, é correto apresentar como diretamente consultada uma obra que só se conhece por outra fonte.",
      "gabarito": "E",
      "porQue": "Apud explicita a mediação; a lista deve elencar a fonte consultada."
    },
    {
      "id": "memoria-rt-8-2-4",
      "afirmacao": "Citações posteriores da mesma fonte no sistema numérico mantêm seu número, em vez de reiniciar a numeração a cada página.",
      "gabarito": "C",
      "porQue": "A sequência identifica fontes na ordem de ocorrência, preservando o número para repetições."
    },
    {
      "id": "memoria-rt-8-2-5",
      "afirmacao": "Uma paráfrase em palavras próprias dispensa indicar a fonte da ideia.",
      "gabarito": "E",
      "porQue": "Redação própria não elimina a origem intelectual da informação."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-8-2-bloco-1",
    "titulo": "ABNT NBR 10520:2023: versão e grafia das chamadas",
    "objetivos": [
      "Distinguir edição e grafia de sobrenomes e siglas."
    ],
    "conteudo": "Em julho de 2023, a ABNT publicou a aguardada revisão histórica da norma **ABNT NBR 10520** (*Informação e Documentação — Citações em Documentos — Apresentação*), revogando a clássica versão de 2002 que vigorava há mais de duas décadas:\n\n#### A Grande Ruptura Normativa da Edição 2023:\n* **Padronização em Letras Maiúsculas e Minúsculas:**\n  * No padrão antigo (2002), havia uma exigência bifásica: fora dos parênteses usava-se maiúsculas e minúsculas (`Conforme Silva (2002)`), mas dentro dos parênteses era obrigatório o uso de caixa alta total (`(SILVA, 2002, p. 10)`).\n  * **Na NBR 10520:2023, essa exigência de caixa alta entre parênteses foi formalmente extinta!**\n  * O sobrenome do autor agora é grafado em **letras maiúsculas e minúsculas em qualquer posição**, tanto fora quanto dentro dos parênteses:\n    * *Dentro dos parênteses:* `(Silva, 2023, p. 15)` ou `(Almeida; Maciel, 2023)`.\n    * *No corpo do parágrafo:* `Segundo Silva (2023, p. 15)...`\n    * *Entidades e órgãos institucionais:* `(Brasil, 2021)` ou `(Câmara dos Deputados, 2023)`.\n* A mudança deve ser aplicada segundo a edição cobrada, sem estimar incidência de prova ou declarar equivalência com outros estilos. Nas chamadas de instituições, a norma recomenda siglas em maiúsculas; não se deve interpretar a regra de sobrenomes como proibição geral de qualquer caixa alta.\n\n**Aplicação e recuperação:** Uma chamada (Silva, 2024) é distinta da entrada SILVA na lista de referências da NBR 6023. Normas e funções diferentes não precisam repetir o mesmo uso de caixa. Prova antiga deve ser lida segundo a edição indicada; não se julga a regra de 2002 como se tivesse nascido em 2023.",
    "checkpointIds": [
      "cp-8-2-1"
    ]
  },
  {
    "id": "sub-8-2-bloco-2",
    "titulo": "Modalidades de Citação e Regras Tipográficas",
    "objetivos": [
      "Aplicar direta, indireta e apud com fonte verificável."
    ],
    "conteudo": "```tree\nTITLE: Modalidades de Citação e Regras Tipográficas (ABNT NBR 10520:2023)\n- Citações em Documentos (NBR 10520:2023) | Menção no texto de informação colhida de outra fonte\n  - Citação Direta Curta (Até 3 Linhas) | Transcrição textual exata mantida no corpo do parágrafo\n    - Pontuação Tipográfica | Inserida obrigatoriamente entre aspas duplas (\"...\")\n    - Dados Obrigatórios | Indicação de fonte e página/localização quando houver (exemplo fictício: Silva, 2023, p. 15)\n    - Aspas Internas | Aspas originais do texto citado convertem-se em aspas simples ('...')\n  - Citação Direta Longa (Mais de 3 Linhas) | Transcrição textual destacada do parágrafo\n    - Recuo Gráfico | Recuo padronizado em relação à margem esquerda; recomenda-se 4 cm\n    - Tipografia e Espaçamento | Tamanho de fonte menor (ex: 10 ou 11 pt) e entrelinhas simples\n    - Supressão de Aspas | SEM aspas duplas; Indicação da fonte e de página/localização quando houver, conforme sistema\n  - Citação Indireta (Paráfrase / Livre) | Texto redigido com as próprias palavras do pesquisador\n    - Ausência de Aspas | Redação autoral livre baseada na ideia do autor consultado\n    - Dados Obrigatórios | Indicação de autor e ano obrigatória; número de página é facultativo\n  - Citação de Citação (apud) | Citação direta ou indireta de documento ao qual não se teve acesso\n    - Expressão latina apud | 'Citado por': Autor Original (ano) apud Autor Consultado (ano, p.)\n    - Lista de Referências | Na lista final, referencia-se OBRIGATORIAMENTE a obra consultada (efetivamente lida)\n```\n\n#### A. Citação Direta Curta\n* Transcrição textual exata das palavras do autor consultado com **extensão de até três linhas inteiras**.\n* Permanece inserida normalmente no fluxo contínuo do parágrafo textual.\n* Deve vir **obrigatoriamente entre aspas duplas (`\"`)**.\n* Caso o fragmento original citado já possua palavras entre aspas, estas são convertidas em **aspas simples (`'`)** na transcrição.\n* A fonte deve ser indicada no sistema adotado; na direta, informe página/localização **se houver**. Para documento não paginado, convém indicar o localizador disponível, sem inventar páginas:\n  * Ex.: Exemplo fictício de chamada, sem atribuição a obra real: Silva (2024, p. 15) afirma: “O catálogo precisa distinguir recursos semelhantes”.\n\n#### B. Citação Direta Longa\n* Transcrição literal de trecho com **mais de três linhas inteiras de extensão**.\n* **Requisitos Tipográficos Exigíveis e Cumulativos:**\n  1. Deve ser destacada em parágrafo próprio independente;\n  2. Aplicar **recuo padronizado em relação à margem esquerda**; o recuo de **4 cm é recomendado**, não medida obrigatória universal;\n  3. Utilizar **tamanho de fonte menor** do que a fonte do texto principal (usualmente corpo 10 ou 11);\n  4. O espaçamento entre linhas deve ser **simples** (enquanto o corpo do texto usa espaçamento 1,5);\n  5. O bloco deve ser apresentado **sem aspas delimitadoras da citação longa**, conforme 7.1.1. Isso não é proibição de preservar qualquer sinal de aspas que faça parte do conteúdo transcrito;\n  6. A indicação segue o sistema de chamada; a página/localização é informada quando houver:\n     * Ex.: Ao final do bloco recuado: Exemplo fictício: `...fim do trecho (Silva, 2024, p. 15).` O ponto encerra a frase; não se acrescenta outro ponto obrigatório dentro da chamada.\n\n#### C. Citação Indireta (Livre / Paráfrase)\n* Texto baseado na obra consultada, no qual o pesquisador reproduz fielmente as ideias e argumentos do autor com suas próprias palavras e estilo redacional.\n* Não leva aspas nem recuo de margem.\n* A indicação do autor e do ano é obrigatória; a **indicação da página consultada é facultativa** pela norma (embora recomendada).\n  * Ex.: A gestão do conhecimento articula fluxos informais e capital humano nas organizações (Choo, 2003).\n\n#### D. Citação de Citação (*apud*)\n* Utilizada quando o pesquisador não teve acesso físico ou digital ao documento original, citando-o por intermédio de outro autor que o transcreveu em sua obra:\n* A expressão latina **apud** significa \"junto a\", \"em\", \"citado por\" (grafa-se em fonte redonda ou itálica).\n* Formato Canônico:\n  $\\text{Autor da Ideia Original (Ano original } \\textbf{apud} \\text{ Autor Consultado, Ano consultado, página)}$\n  * Ex.: Exemplo fictício de estrutura: Pereira (1990 apud Silva, 2024, p. 15). Pereira não foi consultado diretamente; Silva foi a fonte efetivamente consultada.\n* **Regra Crítica das Referências Finais:** Na lista de referências ao término do trabalho acadêmico ou relatório técnico, **deve constar obrigatoriamente a referência completa da obra efetivamente consultada** (no exemplo fictício, Silva, 2024). Faculta-se mencionar a obra original em nota de rodapé informativa.\n\n**Aplicação e recuperação:** Um trecho de quatro linhas é destacado sem aspas delimitadoras e com recuo padronizado. O enunciado que torna exatamente quatro centímetros obrigatório transforma recomendação em exigência. Já a paráfrase não elimina a obrigação de atribuir a fonte. Se o recurso não tem páginas, não se inventa p. 1 para preencher o modelo. No apud, a referência final corresponde à fonte consultada, não a uma leitura inexistente.",
    "checkpointIds": [
      "cp-8-2-2",
      "cp-8-2-3",
      "rt-8-2-1",
      "rt-8-2-3",
      "rt-8-2-5"
    ]
  },
  {
    "id": "sub-8-2-bloco-3",
    "titulo": "Supressões, Destaques, Interpolações e Erros",
    "objetivos": [
      "Separar intervenção editorial, grifo e tradução."
    ],
    "conteudo": "* **Supressões (*omissões de trechos da citação*):** Indicadas por reticências entre colchetes: `[...]`.\n* **Interpolações, Acréscimos ou Comentários:** Inseridos entre colchetes no interior da citação: `[esclarecimento inserido]`; não confundir com indicação de grifo/tradução ao final da chamada.\n* **Incorreções no Texto Original Citado:** Quando o texto original contém um erro ortográfico, factual ou gramatical e o pesquisador deseja manter a fidelidade da transcrição, insere-se a expressão latina `[sic]` (assim mesmo) imediatamente após o erro entre colchetes.\n* **Indicação de Destaques Tipográficos:**\n  * Quando o pesquisador decide destacar (negrito ou itálico) uma palavra ou frase na citação direta que não estava destacada no original, acrescenta-se na chamada: `(grifo nosso)` ou `(grifo próprio)`.\n  * Se o destaque já pertencia ao original, a edição de 2023 **não exige informar o grifo** (7.1.5). A indicação de tradução própria tem disciplina específica (7.1.6).\n\n**Aplicação e recuperação:** O autor da pesquisa acrescenta explicação entre colchetes e destaca uma palavra. São intervenções diferentes, com marcações diferentes. Reticências entre colchetes informam supressão. Nenhuma marca autoriza alterar o sentido do fragmento. Não atribua a uma obra real uma frase inventada só para ilustrar citação.",
    "checkpointIds": [
      "rt-8-2-2"
    ]
  },
  {
    "id": "sub-8-2-bloco-4",
    "titulo": "Sistemas de chamada e notas: não misturar funções",
    "objetivos": [
      "Relacionar sistema de chamada, referência e notas."
    ],
    "conteudo": "A fonte é indicada por sistema **autor-data** ou **numérico**, usado consistentemente ao longo do documento. Em autor-data, a chamada identifica autoria e data conforme as regras e fornece página/localização quando pertinente. No numérico, a fonte recebe numeração consecutiva que remete à lista de referências; citações posteriores da mesma fonte mantêm o número. Não se reinicia a sequência a cada página.\n\nO item 6.2.2 estabelece que o sistema numérico não pode ser utilizado quando houver notas. Não confunda numeração de referência no texto, notas de referência e notas explicativas como se fossem uma única função. A disciplina das notas está na seção 8, com numeração e formas próprias. Dizer que expressões de notas só podem existir no sistema numérico não decorre da norma.\n\nA primeira citação de obra em nota de referência deve ser completa. Recursos para notas subsequentes incluem formas abreviadas nas condições específicas: **Idem/Id.** remete ao mesmo autor e **Ibidem/Ibid.**, à mesma obra imediatamente anterior; **op. cit.** e **loc. cit.** têm limites de uso que não devem ser convertidos em atalhos indiscriminados. É necessário identificar inequivocamente a fonte. **Apud** também pode ocorrer no corpo da citação, com indicação honesta da fonte consultada.\n\n**Autoria múltipla:** em citações de quatro ou mais autores, pode-se usar o primeiro seguido de et al., mesmo que todos apareçam na referência. A opção deve ser uniforme. Não importe esse tratamento para um cabeçalho catalográfico nem declare que é a mesma regra de referência da NBR 6023.\n\n**Exemplo resolvido:** uma obra recebeu número 3 na lista e é citada novamente. Não se cria número 9 para fingir que é outra fonte nem se muda para autor-data apenas porque o parágrafo foi reescrito. Se forem usadas notas, reavalie o sistema diante de 6.2.2. A formatação precisa permitir rastrear a fonte, e não apenas reproduzir um modelo visual.\n\n**Aplicação e recuperação:** No texto há fonte consultada e uma nota explicativa. Não escolha um sistema ignorando a restrição de 6.2.2. A sequência de referência não é a sequência de páginas. Na correção de um exemplo, confira primeiro se a fonte é rastreável, depois tipografia e pontuação; um exemplo visualmente elegante pode continuar atribuindo uma fala inexistente.",
    "checkpointIds": [
      "rt-8-2-4"
    ]
  }
],
fontesTeoria: [
  {
    "id": "10520",
    "titulo": "ABNT NBR 10520:2023 — Citações em documentos",
    "localizador": "Seções 6 (sistemas), 7 (citações) e 8 (notas); PDF Abnt_nbr_10520_2023.pdf do acervo. Não confundir recomendação e requisito."
  }
],
};

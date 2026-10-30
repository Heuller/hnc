import type { AnaliseItemReverso } from '../../domain/treinoReverso';

/** Lote autoral: 12 itens revisados em 29/10/2026 e orgaos-q-021 em 30/10/2026. Não são itens oficiais nem dificuldade psicometricamente calibrada. */
export const PILOTO_RACIOCINIO = [
  {
    "itemId": "cat-q-1",
    "gabarito": "C",
    "habilidade": "Aplicar um princípio à decisão de catalogação",
    "dificuldadeEstimada": "aplicacao",
    "regra": "A conveniência do usuário orienta a escolha entre soluções de catalogação.",
    "passos": [
      "Identifique a decisão: apresentar dados do catálogo.",
      "Recupere o princípio geral dos ICP: conveniência do usuário.",
      "Verifique se a prioridade atribuída à equipe coincide com esse princípio."
    ],
    "fonte": {
      "titulo": "IFLA — Princípios Internacionais de Catalogação (2016, revisão 2017)",
      "url": "https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/icp/icp_2016-en.pdf",
      "localizador": "seção 2, princípios 2.1 e 2.3"
    },
    "transferencia": {
      "item": "Uma decisão de catalogação mais cômoda para a equipe deve prevalecer sobre a conveniência do usuário, segundo os ICP de 2016.",
      "gabarito": "E",
      "justificativa": "Os ICP priorizam a conveniência do usuário; comodidade interna não inverte essa prioridade."
    }
  },
  {
    "itemId": "cat-q-3",
    "gabarito": "E",
    "habilidade": "Distinguir representação e normalização",
    "dificuldadeEstimada": "analise",
    "regra": "Representar o recurso não equivale a reescrever livremente sua informação transcrita.",
    "passos": [
      "Separe transcrição de acesso normalizado.",
      "Compare a mudança silenciosa com a representação do recurso.",
      "Não transfira para a transcrição uma liberdade própria de outros elementos do registro."
    ],
    "fonte": {
      "titulo": "IFLA — Princípios Internacionais de Catalogação (2016, revisão 2017)",
      "url": "https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/icp/icp_2016-en.pdf",
      "localizador": "seção 2, princípios 2.1 e 2.3"
    },
    "transferencia": {
      "item": "Manter a forma transcrita do título e oferecer um ponto de acesso adicional pode atender à representação e à recuperação sem reescrever silenciosamente o recurso.",
      "gabarito": "C",
      "justificativa": "Transcrição e acesso são funções distintas; uma forma adicional de acesso não exige adulterar o título transcrito."
    }
  },
  {
    "itemId": "cat-q-57",
    "gabarito": "C",
    "habilidade": "Identificar o nível da entidade bibliográfica",
    "dificuldadeEstimada": "aplicacao",
    "regra": "O item é o exemplar individual; uma particularidade de sua história não se estende à manifestação.",
    "passos": [
      "Localize o dado que varia entre os exemplares.",
      "Associe a particularidade ao exemplar individual.",
      "Evite generalizar a proveniência para toda a edição."
    ],
    "fonte": {
      "titulo": "IFLA Library Reference Model (2017, revisão dezembro)",
      "url": "https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/frbr-lrm/ifla-lrm-august-2017_rev201712.pdf",
      "localizador": "seção 4.2, entidades LRM-E3, LRM-E4 e LRM-E5"
    },
    "transferencia": {
      "item": "Uma marca de posse presente em um único exemplar caracteriza a manifestação inteira da qual ele faz parte.",
      "gabarito": "E",
      "justificativa": "A marca individual é uma particularidade do item, não um atributo comum a todos os exemplares."
    }
  },
  {
    "itemId": "cat-q-58",
    "gabarito": "E",
    "habilidade": "Distinguir tradução, expressão e exemplar",
    "dificuldadeEstimada": "analise",
    "regra": "A tradução do conteúdo distingue uma expressão; o exemplar individual pertence ao nível de item.",
    "passos": [
      "Identifique o que mudou: a realização linguística.",
      "Diferencie conteúdo expresso de exemplar individual.",
      "Julgue a atribuição da tradução ao nível de item."
    ],
    "fonte": {
      "titulo": "IFLA Library Reference Model (2017, revisão dezembro)",
      "url": "https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/frbr-lrm/ifla-lrm-august-2017_rev201712.pdf",
      "localizador": "seção 4.2, entidades LRM-E3, LRM-E4 e LRM-E5"
    },
    "transferencia": {
      "item": "A tradução integral de um romance para outra língua é exemplo de distinção de expressão, e não apenas de mudança de exemplar.",
      "gabarito": "C",
      "justificativa": "A língua é uma característica da expressão; o exemplar é um item."
    }
  },
  {
    "itemId": "m4-q-56",
    "gabarito": "C",
    "habilidade": "Avaliar um limite de generalização",
    "dificuldadeEstimada": "analise",
    "regra": "Precisão e revocação têm denominadores diferentes; o efeito de uma mudança depende da relevância dos documentos acrescentados.",
    "passos": [
      "Recupere os denominadores das duas medidas.",
      "Verifique quais documentos foram acrescentados pela mudança.",
      "Diferencie um possível trade-off de uma identidade matemática universal."
    ],
    "fonte": {
      "titulo": "Manning, Raghavan e Schütze — Introduction to Information Retrieval (2008)",
      "url": "https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-unranked-retrieval-sets-1.html",
      "localizador": "seção 8.3, precisão e revocação"
    },
    "transferencia": {
      "item": "Se documentos relevantes antes ausentes forem acrescentados ao resultado, precisão e revocação podem aumentar simultaneamente.",
      "gabarito": "C",
      "justificativa": "Isso ocorre, por exemplo, ao passar de 2 relevantes em 4 recuperados para 4 relevantes em 6 recuperados, mantendo o mesmo acervo relevante."
    }
  },
  {
    "itemId": "m4-q-57",
    "gabarito": "E",
    "habilidade": "Escolher o denominador correto de uma métrica",
    "dificuldadeEstimada": "aplicacao",
    "regra": "Precisão considera a relevância dentro do resultado recuperado.",
    "passos": [
      "Separe os 20 recuperados dos 30 relevantes existentes.",
      "Para precisão, use 12 relevantes recuperados sobre 20 recuperados.",
      "Reconheça que 12 sobre 30 calcula revocação, não precisão."
    ],
    "fonte": {
      "titulo": "Manning, Raghavan e Schütze — Introduction to Information Retrieval (2008)",
      "url": "https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-unranked-retrieval-sets-1.html",
      "localizador": "seção 8.3, precisão e revocação"
    },
    "transferencia": {
      "item": "Uma busca recupera 10 documentos, sendo 8 relevantes; há 40 relevantes no acervo. Sua precisão é de 80%.",
      "gabarito": "C",
      "justificativa": "Precisão: 8/10 = 80%. O total de 40 documentos relevantes serve ao cálculo da revocação."
    }
  },
  {
    "itemId": "m4-q-58",
    "gabarito": "E",
    "habilidade": "Traduzir operador booleano em conjunto",
    "dificuldadeEstimada": "aplicacao",
    "regra": "OR reúne os conjuntos; AND seleciona sua interseção.",
    "passos": [
      "Traduza AND como interseção e OR como união.",
      "Compare os conjuntos, sem pressupor que todos os documentos sejam relevantes.",
      "Não confunda ampliação do resultado com ganho garantido de precisão."
    ],
    "fonte": {
      "titulo": "Manning, Raghavan e Schütze — Boolean retrieval (2008)",
      "url": "https://nlp.stanford.edu/IR-book/html/htmledition/boolean-retrieval-1.html",
      "localizador": "capítulo 1, união e interseção de conjuntos"
    },
    "transferencia": {
      "item": "Mantidas a base e a interpretação booleana, A AND B não pode recuperar mais documentos que A OR B.",
      "gabarito": "C",
      "justificativa": "A interseção está contida na união. A relevância dos documentos não altera essa relação entre conjuntos."
    }
  },
  {
    "itemId": "m4-q-71",
    "gabarito": "C",
    "habilidade": "Aplicar a definição de revocação",
    "dificuldadeEstimada": "aplicacao",
    "regra": "Revocação compara relevantes recuperados com relevantes existentes.",
    "passos": [
      "Identifique o total relevante: 50.",
      "Calcule 15/50 = 0,30.",
      "Reserve os não relevantes recuperados para analisar precisão."
    ],
    "fonte": {
      "titulo": "Manning, Raghavan e Schütze — Introduction to Information Retrieval (2008)",
      "url": "https://nlp.stanford.edu/IR-book/html/htmledition/evaluation-of-unranked-retrieval-sets-1.html",
      "localizador": "seção 8.3, precisão e revocação"
    },
    "transferencia": {
      "item": "Encontrar todos os documentos relevantes garante precisão de 100%, mesmo quando muitos não relevantes também são recuperados.",
      "gabarito": "E",
      "justificativa": "Encontrar todos os relevantes garante revocação total. A presença de não relevantes reduz a precisão."
    }
  },
  {
    "itemId": "m9-q-5",
    "gabarito": "E",
    "habilidade": "Distinguir acesso gratuito e modelo de financiamento",
    "dificuldadeEstimada": "analise",
    "regra": "No acesso aberto diamante não são cobradas taxas dos leitores nem dos autores.",
    "passos": [
      "Separe a cobrança ao leitor da cobrança ao autor.",
      "Verifique as duas condições do modelo diamante.",
      "Não use gratuidade de leitura como condição suficiente."
    ],
    "fonte": {
      "titulo": "UNESCO — Diamond Open Access",
      "url": "https://www.unesco.org/en/diamond-open-access",
      "localizador": "Key characteristics; Open Access pathways"
    },
    "transferencia": {
      "item": "A ausência de taxas para leitores e autores significa que a publicação não possui custos de operação.",
      "gabarito": "E",
      "justificativa": "Ausência de cobrança a leitores e autores não elimina custos; estes podem ser financiados por instituições ou outras fontes."
    }
  },
  {
    "itemId": "m9-q-8",
    "gabarito": "C",
    "habilidade": "Distinguir acesso aberto e ausência de autoria",
    "dificuldadeEstimada": "analise",
    "regra": "O acesso aberto não apaga a autoria nem a atribuição de crédito.",
    "passos": [
      "Separe permissão de acesso e atribuição.",
      "Verifique o papel da autoria na declaração.",
      "Não transforme abertura em ausência de reconhecimento do autor."
    ],
    "fonte": {
      "titulo": "Budapest Open Access Initiative (2002)",
      "url": "https://www.budapestopenaccessinitiative.org/read/",
      "localizador": "definição de open access e papel do copyright"
    },
    "transferencia": {
      "item": "Disponibilizar um artigo gratuitamente para leitura demonstra, por si só, que ele está em domínio público.",
      "gabarito": "E",
      "justificativa": "Gratuidade de acesso e domínio público são situações diferentes; é necessário verificar os direitos e a licença."
    }
  },
  {
    "itemId": "m10a-q-2",
    "gabarito": "C",
    "habilidade": "Distinguir quórum de presença e aprovação",
    "dificuldadeEstimada": "aplicacao",
    "regra": "A Constituição distingue o quórum de presença da regra de decisão, ressalvadas as exigências específicas.",
    "passos": [
      "Separe presença e votos favoráveis.",
      "Recupere a regra do art. 47 para deliberações sem exigência especial.",
      "Compare-a com a exigência do art. 69 para lei complementar."
    ],
    "fonte": {
      "titulo": "Constituição Federal de 1988 — Câmara dos Deputados",
      "url": "https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-publicacaooriginal-1-pl.html",
      "localizador": "arts. 47, 61 § 2º e 69 (dispositivos aplicáveis ao item)"
    },
    "transferencia": {
      "item": "A aprovação de lei complementar exige maioria absoluta, conforme o art. 69 da Constituição Federal.",
      "gabarito": "C",
      "justificativa": "A regra específica da lei complementar não é substituída pela regra geral do art. 47."
    }
  },
  {
    "itemId": "m10a-q-5",
    "gabarito": "E",
    "habilidade": "Identificar a Casa de apresentação de iniciativa popular",
    "dificuldadeEstimada": "aplicacao",
    "regra": "O art. 61, § 2º, prevê a apresentação do projeto de iniciativa popular à Câmara dos Deputados.",
    "passos": [
      "Verifique se o item trata de iniciativa popular federal.",
      "Separe os requisitos de subscrição do local de apresentação.",
      "Identifique a Casa indicada expressamente no art. 61, § 2º."
    ],
    "fonte": {
      "titulo": "Constituição Federal de 1988 — Câmara dos Deputados",
      "url": "https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-publicacaooriginal-1-pl.html",
      "localizador": "arts. 47, 61 § 2º e 69 (dispositivos aplicáveis ao item)"
    },
    "transferencia": {
      "item": "Cumprir os requisitos de subscrição não permite escolher livremente a Casa de apresentação do projeto de iniciativa popular federal.",
      "gabarito": "C",
      "justificativa": "A Constituição fixa a Câmara dos Deputados como a Casa de apresentação, além dos requisitos de assinaturas."
    }
  },
  {
    "itemId": "orgaos-q-021",
    "gabarito": "C",
    "habilidade": "Distinguir antecedentes, criação institucional e denominação",
    "dificuldadeEstimada": "fundamento",
    "regra": "Os antecedentes de 1823, a criação efetiva em 1866 e a denominação pela Resolução 104/1984 são marcos distintos da Biblioteca da Câmara.",
    "passos": [
      "Identifique a instituição mencionada: a Biblioteca, não a primeira legislatura da Câmara.",
      "Diferencie os pedidos de livros da Assembleia Constituinte de 1823 da criação efetiva de 1866.",
      "Confira separadamente o ato de denominação: Resolução da Câmara dos Deputados nº 104/1984."
    ],
    "fonte": {
      "titulo": "Câmara dos Deputados — Histórico da Biblioteca",
      "url": "https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/biblioteca/bibhist.html",
      "localizador": "parágrafos sobre a Assembleia Constituinte de 1823, a criação em 1866 e a Resolução nº 104/1984"
    },
    "transferencia": {
      "item": "A existência de pedidos de livros para a Assembleia Constituinte em 1823 permite concluir que a Biblioteca da Câmara já havia sido efetivamente criada naquele ano.",
      "gabarito": "E",
      "justificativa": "O histórico institucional trata os pedidos de livros de 1823 como antecedentes e situa a criação efetiva em 1866. Antecedência de uma atividade não equivale à criação formal da unidade."
    }
  }
] satisfies AnaliseItemReverso[];

import type { CebraspeQuestion } from '../../domain/types';

export const simuladoNormalizacao100Q: CebraspeQuestion[] = [
  {
    "id": "m8-q-1",
    "numero": 1,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "A citação indireta consiste na reprodução livre de ideias ou conceitos de um autor mediante paráfrase elaborada pelo redator do trabalho, sendo obrigatória a indicação da autoria e do ano, ao passo que a indicação da página é facultativa.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme as prescrições da ABNT NBR 10520:2023 (Citações em documentos), a citação indireta consiste na reprodução livre das ideias do autor por meio da paráfrase do redator. São elementos compulsórios a indicação do sobrenome do autor e do ano de publicação do documento fonte. A indicação de página, volume ou localização específica é facultativa pela norma, embora seja recomendada pelos cânones acadêmicos quando viabilizar a rastreabilidade imediata do conceito pelo leitor.",
    "armadilhaBanca": "Requisitos da citação indireta.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "elaborada pelo redator do trabalho, sendo obrigatória",
    "versao_errada": "A citação indireta consiste na reprodução livre de ideias ou conceitos de um autor mediante paráfrase elaborada pelo redator do trabalho, sendo opcional a indicação da autoria e do ano, ao passo que a indicação da página é facultativa."
  },
  {
    "id": "m8-q-2",
    "numero": 2,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Várias normas editadas pela ABNT especificam os princípios gerais para a elaboração",
    "item": "Para elaborar a referência bibliográfica de obras consultadas online, é essencial a apresentação do endereço eletrônico, que deve ser apresentado entre os sinais < >, precedido da expressão “Disponível em:” e a data de acesso ao documento, precedida da expressão “Acesso em:”.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO sob a vigência histórica da ABNT NBR 6023:2002. A redação da NBR 6023:2002 determinava o uso obrigatório dos sinais angulares < > delimitando a URL (\"Disponível em: <http://...>. Acesso em: 10 out. 2012.\"). Nota de atualização para o estudo reverso: na revisão vigente ABNT NBR 6023:2018 (item 7.6.1), os sinais < > foram suprimidos, grafando-se: \"Disponível em: http://... Acesso em: 10 out. 2024.\".",
    "armadilhaBanca": "EVOLUÇÃO NORMATIVA DA NBR 6023: Saber que os sinais < > eram obrigatórios na edição de 2002 e foram eliminados na edição de 2018.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "ABNT NBR 6023:2002 vs. ABNT NBR 6023:2018, item 7.6.1",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1876",
      "declaracaoLegada": "Cebraspe / 2013 / 2013"
    }
  },
  {
    "id": "m8-q-3",
    "numero": 3,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "A respeito das normas brasileiras (NBR) estabelecidas pela Associação Brasileira de",
    "item": "A ABNT NBR 6023 refere-se a procedimentos de resumos.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A ABNT NBR 6023 estabelece os elementos a serem incluídos em referências e padroniza a sua elaboração. A norma responsável pela apresentação de resumos é a ABNT NBR 6028.",
    "armadilhaBanca": "TROCA_DE_NORMA: Atribuir à NBR 6023 (referências) o objeto temático da NBR 6028 (resumos).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2017 / 2017 (Adaptada)",
      "verificado": true,
      "provaId": "ABIN/2017",
      "ano": 2017,
      "orgao": "2017",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1813"
    },
    "versao_correta": "A ABNT NBR 6023 estabelece os elementos e os procedimentos para a elaboração de referências documentais, cabendo à ABNT NBR 6028 o regramento para a apresentação de resumos."
  },
  {
    "id": "m8-q-4",
    "numero": 4,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas normas técnicas para a área de documentação, ju lgue os itens su b-",
    "item": "Monografia, segundo a NBR -6023:2002, é qualquer tipo de suporte, editado em unidades fís i- cas sucessivas, com designações numéricas ou cronológicas, destinado a ser continuado ind e- finidamente.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A assertiva descreveu o conceito de PUBLICAÇÃO SERIADA/PERIÓDICO (\"editado em unidades físicas sucessivas, com designações numéricas ou cronológicas, destinado a ser continuado indefinidamente\"). Monografia é o item não seriado completo em um só volume ou em número finito de volumes.",
    "armadilhaBanca": "INVERSAO_CONCEITUAL: Atribuir a definição canônica de publicação seriada ao conceito de monografia.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / CAPES / 2012 (Adaptada)",
      "verificado": true,
      "provaId": "Ana CT (CAPES)/CAPES/Biblioteconomia/2012",
      "ano": 2012,
      "orgao": "CAPES",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-2711393"
    },
    "versao_correta": "Monografia é um item não seriado constituído por um só volume ou por um número prefixado de volumes, correspondendo a definição de itens sucessivos com designação numérica continuados indefinidamente ao conceito de publicação seriada."
  },
  {
    "id": "m8-q-5",
    "numero": 5,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Quando a chamada de citação contiver vários documentos de autores diferentes entre parênteses para embasar uma mesma afirmação, os autores devem ser separados por ponto e vírgula, preferencialmente em ordem alfabética de seus sobrenomes, a exemplo de '(Almeida, 2020; Castro, 2022; Silva, 2024)'.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. De acordo com o item 5.2.2 da ABNT NBR 10520:2023, quando múltiplos documentos de autores distintos forem citados simultaneamente para fundamentar a mesma assertiva no interior dos mesmos parênteses, os autores devem ser separados entre si por ponto e vírgula, adotando-se preferencialmente a ordenação alfabética dos sobrenomes (ou ordenação cronológica estrita, desde que aplicada com uniformidade em todo o trabalho).",
    "armadilhaBanca": "Citações múltiplas de diferentes autores entre parênteses.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "ordem alfabética",
    "versao_errada": "Quando a chamada de citação contiver vários documentos de autores diferentes entre parênteses para embasar uma mesma afirmação, os autores devem ser separados por ponto e vírgula, preferencialmente em indevidamente ordem alfabética de seus sobrenomes, a exemplo de '(Almeida, 2020; Castro, 2022; Silva, 2024)'."
  },
  {
    "id": "m8-q-6",
    "numero": 6,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Julgue os itens que se seguem, relativos aos objetivos e às aplicações das normas",
    "item": "A NBR 6023:2002, para elaboração de referências, fixa a ordem dos elementos nas referências e estabelece as convenções para transcrição e apresentação da informação originada no d o- cumento.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"elementos nas referências e estabelece as convenções\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2010 / 2010 (Adaptada)",
      "verificado": true,
      "provaId": "TRT21/2010",
      "ano": 2010,
      "orgao": "2010",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1819"
    }
  },
  {
    "id": "m8-q-7",
    "numero": 7,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Acerca da padronização de publicações seriadas elaboradas segundo as normas té c-",
    "item": "Na referência bibliográfica de artigos, o nome da editora do periódico deve ser indicado como figura no documento, abreviando-se os prenomes e suprimindo-se as palavras que designem a sua natureza jurídica ou comercial.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. Na referência de artigo ou matéria de periódico (conforme a NBR 6023), o nome da editora da revista NÃO é informado. Os elementos essenciais da publicação são: autor(es) do artigo, título do artigo, título do periódico, local, volume, fascículo, páginas inicial-final e data.",
    "armadilhaBanca": "ELEMENTO_INEXISTENTE: Inserir a editora do periódico como elemento a ser registrado na referência de artigos da NBR 6023.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2010 / 2010 (Adaptada)",
      "verificado": true,
      "provaId": "MPU/2010",
      "ano": 2010,
      "orgao": "2010",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1911"
    },
    "versao_correta": "Na referência bibliográfica de artigo de periódico elaborada conforme a ABNT NBR 6023, o nome da editora do periódico não constitui elemento da referência, figurando o título do periódico, local de publicação, volume, fascículo, paginação e período de publicação."
  },
  {
    "id": "m8-q-8",
    "numero": 8,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "De acordo com a ABNT NBR 10520:2023, quando a chamada de citação de autoria pessoal estiver entre parênteses ao final da frase, o sobrenome do autor deve figurar em letras maiúsculas integrais (caixa alta), a exemplo de \"(SILVA, 2024)\".",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Uma das alterações mais profundas introduzidas pela ABNT NBR 10520:2023 foi a abolição definitiva do uso de letras maiúsculas integrais (caixa alta) nas chamadas de citação em sistema autor-data entre parênteses. Sob a norma vigente de 2023, todas as chamadas de citação — dentro ou fora de parênteses — devem ser grafadas em letras maiúsculas e minúsculas (ex.: '(Silva, 2024)' e não mais '(SILVA, 2024)').",
    "armadilhaBanca": "ANACRONISMO_NORMATIVO: Exigir caixa alta da norma de 2002 já revogada.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "De acordo com a ABNT NBR 10520:2023, as chamadas de citação no sistema autor-data devem figurar em letras maiúsculas e minúsculas, inclusive entre parênteses, a exemplo de '(Silva, 2024)'."
  },
  {
    "id": "m8-q-9",
    "numero": 9,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "A citação de citação, expressa pela locução latina 'apud' (citado por), deve ser utilizada como regra geral preferencial em trabalhos acadêmicos e pareceres, dispensando o pesquisador de buscar o documento original.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O 'apud' é recurso excepcional, que só deve ser empregado quando o documento original for comprovadamente inacessível (obra esgotada, manuscrito raro ou idioma inacessível). Seu uso indiscriminado denota desleixo metodológico.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A citação de citação (apud) é um recurso metodológico de exceção, que só deve ser empregado quando o documento primário original for comprovadamente inacessível."
  },
  {
    "id": "m8-q-10",
    "numero": 10,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas normas técnicas para a área de documentação, ju lgue os itens su b-",
    "item": "Para a indicação da forma correta de entra da de nomes, pessoais e(ou) de entidades, a NBR - 6023:2002 recomenda a utilização do Código de Catalogação Anglo-Americano vigente.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"pessoais e(ou) de entidades, a NBR -\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / CAPES / 2012 (Adaptada)",
      "verificado": true,
      "provaId": "Ana CT (CAPES)/CAPES/Biblioteconomia/2012",
      "ano": 2012,
      "orgao": "CAPES",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-2711394"
    },
    "gatilho": "pessoais e(ou) de entidades, a NBR -",
    "versao_errada": "Para a indicação da forma correta de entra da de nomes, indevidamente pessoais e(ou) de entidades, a nbr - 6023:2002 recomenda a utilização do Código de Catalogação Anglo-Americano vigente."
  },
  {
    "id": "m8-q-11",
    "numero": 11,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "O sistema de chamada numérico para citações pode ser utilizado concomitantemente e misturado no mesmo capítulo com o sistema autor-data, cabendo ao autor alternar entre números e sobrenomes ao longo da mesma página.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A NBR 10520 proíbe a alternância de sistemas: o autor deve escolher OU o sistema autor-data OU o sistema numérico, mantendo coerência e uniformidade ao longo de todo o documento. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "O autor deve adotar um único sistema de chamada de citações em todo o trabalho (ou o sistema autor-data ou o sistema numérico), sendo vedada a alternância ou mistura de sistemas em um mesmo documento."
  },
  {
    "id": "m8-q-12",
    "numero": 12,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "No sistema autor-data, quando houver coincidência de autores com o mesmo sobrenome e mesmo ano de publicação, a norma veda qualquer diferenciação, devendo o leitor adivinhar qual é o autor correto.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Para autores com mesmo sobrenome e mesmo ano, acrescentam-se as iniciais de seus prenomes (ex: Barbosa, C., 2024 e Barbosa, M., 2024). Se as iniciais coincidirem, colocam-se os prenomes por extenso. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "No sistema autor-data, havendo coincidência de sobrenomes e anos de publicação entre diferentes autores, diferenciam-se as chamadas pelo acréscimo das iniciais de seus prenomes ou pelos prenomes completos."
  },
  {
    "id": "m8-q-13",
    "numero": 13,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Quando se adota o sistema numérico de chamada, a numeração das citações deve ser consecutiva para todo o trabalho (ou por capítulo), e a ordem na lista de referências ao final deve seguir a mesma ordem numérica em que as citações aparecem no texto.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme a ABNT NBR 10520:2023 e a NBR 6023:2018, no sistema numérico de chamada as citações recebem uma numeração arábica consecutiva e única em todo o trabalho (ou por capítulo). Consequentemente, a lista final de referências deve ser estruturada compulsoriamente na exata ordem numérica sequencial em que as citações surgem no texto corrido, sendo rigorosamente vedada a ordenação alfabética dos autores nessa modalidade.",
    "armadilhaBanca": "Regra do sistema numérico.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "(ou por capítulo), e a ordem na",
    "versao_errada": "Quando se adota o sistema numérico de chamada, a numeração das citações deve ser consecutiva para todo o trabalho indevidamente (ou por capítulo), e a ordem na lista de referências ao final deve seguir a mesma ordem numérica em que as citações aparecem no texto."
  },
  {
    "id": "m8-q-14",
    "numero": 14,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Julgue os itens seguintes, acerca das referências bibliográficas.",
    "item": "Ao utilizar o sistema de busca Google Acadêmico, é possível utilizar o serviço de geração a u- tomática de referência bibliográfica nos formatos ABNT 6023 e Vancouver.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. O Google Acadêmico (Google Scholar) oferece atalhos de citação automática em padrões internacionais consolidados (MLA, APA, Chicago, Harvard, Vancouver), mas não inclui o padrão brasileiro ABNT NBR 6023 em seu menu padrão de formatação.",
    "armadilhaBanca": "PREMISSA_FALSA: Afirmar que o Google Acadêmico gera nativamente referências formatadas nos padrões da ABNT NBR 6023.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / FUB / 2013 (Adaptada)",
      "verificado": true,
      "provaId": "Biblio Doc (FUB)/FUB/2013",
      "ano": 2013,
      "orgao": "FUB",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-346481"
    },
    "versao_correta": "O serviço nativo de citação do Google Acadêmico disponibiliza formatos bibliográficos internacionais como MLA, APA, Harvard, Chicago e Vancouver, não contemplando nativamente a norma brasileira ABNT NBR 6023."
  },
  {
    "id": "m8-q-15",
    "numero": 15,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "A expressão latina '[sic]', empregada imediatamente após uma palavra com grafia incorreta ou incoerência factual no texto original citado, significa que o redator do trabalho concorda plenamente e adota o erro como correto.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. '[sic]' significa 'assim mesmo' ou 'exatamente assim': indica ao leitor que o erro gramatical, ortográfico ou fático já constava no documento original citado e que foi reproduzido fielmente, sem intervenção do redator atual.",
    "armadilhaBanca": "Técnica: Extrapolação de Escopo de Metadados. A banca confunde campos, formatos ou níveis de descrição bibliográfica entre padrões concorrentes de catalogação e metadados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A expressão latina \"[sic]\" (que significa \"assim mesmo\") é inserida imediatamente após um erro gráfico ou incongruência do texto citado para sinalizar que o equívoco consta exatamente assim no original."
  },
  {
    "id": "m8-q-16",
    "numero": 16,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Em relação ao objeto de avaliação do submódulo 8.1, julgue o item a seguir.",
    "item": "Na bibliografia do tipo analítica, cada referência bibliográfica é acompanhada de um resumo.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na terminologia bibliográfica e documental (Cunha & Cavalcanti, Castro), as bibliografias classificam-se quanto ao tratamento do conteúdo em: enumerativas ou indicativas (apenas arrolam os dados bibliográficos descritivos das obras) e analíticas ou anotadas (quando cada referência bibliográfica vem acompanhada de um resumo, nota crítica de conteúdo ou análise valorativa elaborada pelo compilador).",
    "armadilhaBanca": "Assertiva tecnicamente correta e semântica estrita conforme cobrado no concurso PC-DF/2025 (Bibliotecário).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / PC DF / 2025 (Adaptada)",
      "verificado": true,
      "provaId": "GAAPC (PC DF)/PC DF/Bibliotecário/2025",
      "ano": 2025,
      "orgao": "PC DF",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-3240831"
    },
    "gatilho": "tipo analítica, cada referência bibliográfica é acompanhada",
    "versao_errada": "Na bibliografia do indevidamente tipo analítica, cada referência bibliográfica é acompanhada de um resumo."
  },
  {
    "id": "m8-q-17",
    "numero": 17,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Para citar documentos de um mesmo autor publicados no mesmo ano, a NBR 10520 estabelece que se devem acrescentar letras minúsculas após o ano, sem espaçamento, tanto na chamada quanto na lista de referências (ex: Brasil, 2024a, 2024b).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Pela ABNT NBR 10520:2023, quando forem citados documentos distintos publicados pelo mesmo autor no mesmo ano civil, a desambiguação realiza-se pelo acréscimo de letras minúsculas do alfabeto ('a', 'b', 'c') justapostas imediatamente após o ano de publicação, sem espaçamento (ex.: 'Brasil, 2024a, 2024b'). A ordem alfabética das letras minúsculas é determinada pela ordenação alfabética dos títulos das obras correspondentes.",
    "armadilhaBanca": "Desambiguação de obras do mesmo autor no mesmo ano.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "se devem acrescentar letras minúsculas após o",
    "versao_errada": "Para citar documentos de um mesmo autor publicados no mesmo ano, a NBR 10520 estabelece que indevidamente se devem acrescentar letras minúsculas após o ano, sem espaçamento, tanto na chamada quanto na lista de referências (ex: Brasil, 2024a, 2024b)."
  },
  {
    "id": "m8-q-18",
    "numero": 18,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Conforme a NBR 10520:2023, a indicação de autoria corporativa de órgãos públicos inserida entre parênteses é redigida em caixa alta integral, a exemplo de \"(MINISTÉRIO DA FAZENDA, 2024)\".",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A regra da NBR 10520:2023 aboliu a caixa alta em parênteses tanto para autores pessoais quanto para entidades coletivas governamentais: \"(Ministério da Fazenda, 2024)\". A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Conforme a ABNT NBR 10520:2023, a indicação de autoria institucional de pessoas jurídicas ou órgãos públicos é redigida em letras maiúsculas e minúsculas dentro dos parênteses, como em \"(Ministério da Fazenda, 2024)\"."
  },
  {
    "id": "m8-q-19",
    "numero": 19,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Em citações diretas, o destaque tipográfico de palavras inserido pelo autor do trabalho acadêmico prescinde de menção específica, presumindo-se a ênfase conferida pelo texto fonte original.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme prescreve a ABNT NBR 10520:2023, quando o redator do trabalho acadêmico ou técnico acrescentar destaque gráfico (negrito, itálico ou sublinhado) em palavras de uma citação direta para ressaltar seu argumento, é compulsório indicar a autoria do realce tipográfico mediante a aposição da expressão 'grifo nosso' ou 'grifo próprio' logo após a indicação da página citada.",
    "armadilhaBanca": "Omitir indicação de 'grifo nosso' em citação.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Em citações diretas, quando o destaque tipográfico (negrito ou itálico) for acrescentado pelo autor do trabalho e não constar no original citado, deve-se registrar obrigatoriamente a indicação 'grifo nosso' ou 'grifo próprio'."
  },
  {
    "id": "m8-q-20",
    "numero": 20,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "A citação direta longa (com mais de três linhas) deve ser destacada com recuo de 4 cm da margem esquerda, com tamanho de fonte menor e espaçamento entrelinhas simples, devendo permanecer contida entre aspas duplas no início e no final do bloco.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A citação direta longa destacada com recuo de 4 cm NÃO leva aspas duplas. O recuo e a fonte menor já exercem a função tipográfica de identificação do excerto literal. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Extrapolação de Escopo de Metadados. A banca confunde campos, formatos ou níveis de descrição bibliográfica entre padrões concorrentes de catalogação e metadados.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A citação direta com mais de três linhas deve ser apresentada em parágrafo próprio com recuo de 4 cm da margem esquerda, tamanho de fonte menor e entrelinhas simples, sem a utilização de aspas duplas."
  },
  {
    "id": "m8-q-21",
    "numero": 21,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Interpolações, acréscimos ou comentários do redator introduzidos no interior de uma citação direta devem ser indicados entre colchetes, a exemplo de '[grifo nosso]' ou '[nota do autor]'.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. De acordo com a ABNT NBR 10520:2023, qualquer intervenção, nota explicativa, correção tipográfica ou comentário introduzido pelo redator do trabalho no interior de uma citação direta textual deve ser obrigatoriamente delimitado por colchetes `[ ]` (ex.: '[grifo nosso]', '[nota do autor]', '[sic]'), assinalando graficamente ao leitor que aquele trecho não pertence ao documento original.",
    "armadilhaBanca": "Uso de colchetes para interpolações em citações diretas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "uma citação direta devem ser indicados entre",
    "versao_errada": "Interpolações, acréscimos ou comentários do redator introduzidos no interior de indevidamente uma citação direta devem ser indicados entre colchetes, a exemplo de '[grifo nosso]' ou '[nota do autor]'."
  },
  {
    "id": "m8-q-22",
    "numero": 22,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Na aplicação da locução 'apud', a chamada no texto deve indicar primeiro o autor da obra original não consultada, seguido da expressão 'apud', do autor da obra efetivamente consultada, da data e da página, a exemplo de 'Segundo Darcy Ribeiro (1975 apud Silva, 2024, p. 50)'.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Estrutura correta: Autor original + (ano original apud Autor consultado, ano consultado, página). Nas referências ao final, inclui-se obrigatoriamente a obra consultada (Silva, 2024). Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "da expressão 'apud', do autor da obra",
    "versao_errada": "Na aplicação da locução 'apud', a chamada no texto deve indicar primeiro o autor da obra original não consultada, seguido indevidamente da expressão 'apud', do autor da obra efetivamente consultada, da data e da página, a exemplo de 'Segundo Darcy Ribeiro (1975 apud Silva, 2024, p. 50)'."
  },
  {
    "id": "m8-q-23",
    "numero": 23,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Acerca da padronização de publicações seriadas elaboradas segundo as normas té c-",
    "item": "Na referência bibliográfica de artigos, a indicação da periodicidade é feita tanto em meses quanto em estações ou divisões do ano, no idioma original da publicação e de forma abreviada.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a ABNT NBR 6023:2018 (item 7.4.2), a exigência de abreviação no idioma da publicação recai exclusivamente sobre os meses (abreviados com as três primeiras letras e ponto, exceto \"maio\" em língua portuguesa). As estações do ano (verão, outono, inverno, primavera) e demais divisões sazonais devem ser registradas obrigatoriamente POR EXTENSO no idioma original.",
    "armadilhaBanca": "GENERALIZAÇÃO INDEVIDA DE ABREVIAÇÃO: Estender a regra de abreviação de meses às estações do ano, que exigem grafia por extenso na NBR 6023.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "ABNT NBR 6023:2018, item 7.4.2",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1915",
      "declaracaoLegada": "Cebraspe / 2010 / 2010"
    },
    "versao_correta": "Na referência de artigos e fascículos de periódicos, os meses são grafados de forma abreviada no idioma original (conforme o anexo da NBR 6023), mas as estações do ano e divisões cronológicas anuais devem constar por extenso."
  },
  {
    "id": "m8-q-24",
    "numero": 24,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com referência às normas técnicas estabelecidas para a área de documen -",
    "item": "De acordo com a norma que trata de referência bibliográfica, deve -se identificar o autor da obra pelo último sobrenome, em maiúsculas, seguido do(s) prenome(s) e outros sobrenomes, abreviados ou não. Havendo mais de um autor, o s respectivos nomes devem ser separados por ponto e vírgula seguido de espaço.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"De acordo com\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2011 / 2011 (Adaptada)",
      "verificado": true,
      "provaId": "SEDUC-AM/2011",
      "ano": 2011,
      "orgao": "2011",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1905"
    }
  },
  {
    "id": "m8-q-25",
    "numero": 25,
    "macroModuloId": "M8",
    "submoduloId": "8.1",
    "contexto": "Com base nas disposições vigentes da ABNT NBR 10520:2023 (Informação e documentação — Citações em documentos — Apresentação), julgue o item a seguir.",
    "item": "Em citações diretas, as supressões de trechos do texto original devem ser indicadas tipograficamente pelo uso de três pontos de exclamação consecutivos (!!!).",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Pela ABNT NBR 10520:2023, as supressões parciais de texto no interior ou nas extremidades de uma citação direta devem ser formalmente indicadas pela aposição de reticências delimitadas por colchetes: `[...]`. O uso de exclamações, travessões ou reticências soltas sem colchetes não encontra qualquer amparo no regramento técnico da ABNT.",
    "armadilhaBanca": "INVERSAO_CANONICA: Substituir reticências entre colchetes por pontos de exclamação.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Em citações diretas, a supressão de partes do texto original deve ser indicada formalmente pelo emprego de reticências entre colchetes '[...]'."
  },
  {
    "id": "m8-q-26",
    "numero": 26,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de uma publicação dotada de subtítulo elaborada conforme a NBR 6023:2018, o destaque tipográfico adotado estende-se simultaneamente ao título e ao subtítulo da obra.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a regra geral da ABNT NBR 6023:2018 (item 7.1.1), o recurso tipográfico utilizado para dar destaque ao título da publicação (negrito, itálico ou sublinhado) deve ser aplicado única e exclusivamente ao título principal da obra. O subtítulo, mesmo quando indissociável semanticamente, deve permanecer rigorosamente em fonte redonda comum, sem qualquer destaque gráfico.",
    "armadilhaBanca": "INVERSAO_CANONICA: Destacar indevidamente o subtítulo junto com o título.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na referência bibliográfica elaborada nos termos da ABNT NBR 6023:2018, o destaque tipográfico (negrito ou itálico) é aplicado exclusivamente ao título da obra, mantendo-se o subtítulo em fonte redonda simples."
  },
  {
    "id": "m8-q-27",
    "numero": 27,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Para documentos jurídicos legislativos (leis e decretos), a entrada da referência deve ser feita pelo nome da jurisdição em letras maiúsculas (ex: BRASIL; SÃO PAULO (Estado); BELO HORIZONTE), seguido da denominação do ato, número, data e dados da publicação oficial.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 7.11.1 da ABNT NBR 6023:2018 (Documento jurídico - Legislação), a entrada de atos legislativos (leis ordinárias, complementares, medidas provisórias e decretos) é realizada compulsoriamente pelo nome da jurisdição em letras maiúsculas (ex.: 'BRASIL.', 'MINAS GERAIS.', 'CURITIBA.'), seguido da epígrafe do ato normativo, ementa descritiva, local, dados do órgão emissor e dados da publicação oficial.",
    "armadilhaBanca": "Entrada de atos legislativos na NBR 6023.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "jurisdição em letras maiúsculas (ex: BRASIL; SÃO",
    "versao_errada": "Para documentos jurídicos legislativos (leis e decretos), a entrada da referência deve ser feita pelo nome da indevidamente jurisdição em letras maiúsculas (ex: brasil; são PAULO (Estado); BELO HORIZONTE), seguido da denominação do ato, número, data e dados da publicação oficial."
  },
  {
    "id": "m8-q-28",
    "numero": 28,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência bibliográfica de monografia impressa, quando o local de publicação não puder ser identificado na obra ou em fontes externas de pesquisa, registra-se a expressão \"[s.n.]\" entre colchetes.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Pela ABNT NBR 6023:2018, quando o local de publicação não puder ser identificado na fonte nem em fontes complementares, deve-se registrar a locução latina 'sine loco' abreviada entre colchetes como '[S.l.]'. Já a expressão 'sine nomine', abreviada como '[s.n.]', destina-se com exclusividade aos casos em que o nome da editora ou casa publicadora é desconhecido.",
    "armadilhaBanca": "INVERSAO_CANONICA: Confundir sine loco [S.l.] (sem local) com sine nomine [s.n.] (sem editora).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na referência de monografia segundo a NBR 6023, quando a cidade de publicação for desconhecida e não puder ser identificada, utiliza-se a expressão latina '[S.l.]' (sine loco), reservando-se '[s.n.]' (sine nomine) para editora não identificada."
  },
  {
    "id": "m8-q-29",
    "numero": 29,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de capítulo de livro com autoria individual reunido em coletânea (in:), a ênfase tipográfica escolhida recai sobre o título do capítulo específico, mantendo-se o título da obra coletiva em tipo comum.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme prescreve a ABNT NBR 6023:2018 para referências analíticas de parte ou capítulo de monografia reunido em coletânea ('In:'), o destaque tipográfico (negrito ou itálico) recai unicamente sobre o título da obra monográfica considerada no todo que sucede a expressão 'In:'. O título do capítulo analítico específico permanece grafado em tipo comum redondo.",
    "armadilhaBanca": "INVERSAO_CANONICA: Inverter o destaque tipográfico entre capítulo e livro no todo.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na referência de capítulo ou parte de monografia (In:), o destaque tipográfico escolhido recai sobre o título da obra no todo que segue a expressão 'In:', devendo o título do capítulo permanecer em tipo redondo comum."
  },
  {
    "id": "m8-q-30",
    "numero": 30,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "A ordenação dos elementos na lista de referências elaborada pelo sistema autor-data orienta-se pela data cronológica de lançamento das obras, agrupando as publicações pelo ano de edição.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Quando se adota o sistema de chamada autor-data no corpo do texto, a ABNT NBR 6023:2018 e a NBR 14724:2011 prescrevem expressamente que a lista final de referências bibliográficas deve ser estruturada em ordem rigorosamente ALFABÉTICA única de autores e títulos, e não em ordem cronológica de publicação dos documentos.",
    "armadilhaBanca": "Ordenar referências pela cor da capa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "No sistema autor-data, as referências ao final do trabalho devem ser dispostas em uma única lista ordenada alfabeticamente pelos sobrenomes dos autores ou pelos títulos."
  },
  {
    "id": "m8-q-31",
    "numero": 31,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de acórdãos dos tribunais judiciais, a entrada é feita pelo sobrenome do advogado que assinou a petição inicial da ação.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A entrada de jurisprudência é feita pela jurisdição e nome da corte judiciária em letras maiúsculas (ex: BRASIL. Supremo Tribunal Federal; BRASIL. Superior Tribunal de Justiça), e não pelo advogado da causa. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na referência de decisões judiciais e acórdãos dos tribunais, a entrada de autoria é feita pelo nome da jurisdição territorial e pelo nome do tribunal competente em letras maiúsculas, e não pelo advogado das partes."
  },
  {
    "id": "m8-q-32",
    "numero": 32,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "Em relação ao objeto de avaliação do submódulo 8.2, julgue o item a seguir.",
    "item": "O autor justifica a citação do ferro ao pescoço, do ferro ao pé e da máscara por se associarem a determinado ofício.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Item extraído de prova Cebraspe que utilizou como texto-base o conto \"Pai contra Mãe\", de Machado de Assis. No enredo, o narrador machadiano enumera os aparelhos de suplício da escravidão (ferro ao pescoço, ferro ao pé e máscara de folha de flandres) para fundamentar a atividade exercida pelo protagonista Cândido Neves, que sobrevivia como capturador de escravizados fugidos em troca das recompensas anunciadas nos jornais.",
    "armadilhaBanca": "INTERPRETAÇÃO TEXTUAL DE MACHADO DE ASSIS: Apreensão da correlação explícita entre a menção aos instrumentos de coação e a justificativa socioeconômica do ofício do protagonista.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "Machado de Assis, \"Pai contra Mãe\" (1906); Prova Cebraspe (Compreensão de Texto)",
      "verificado": false,
      "origemAcervoLocal": "real-prova_recente-2287",
      "declaracaoLegada": "Cebraspe / Biblioteconomia / 2024"
    }
  },
  {
    "id": "m8-q-33",
    "numero": 33,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de publicação impressa contendo três autores conforme a NBR 6023:2018, convenciona-se registrar o primeiro autor nominado seguido da expressão latina \"et al.\".",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Havendo até três autores, indicam-se os três autores nominados, separados por ponto e vírgula na referência; a supressão facultativa com \"et al.\" aplica-se a quatro ou mais autores. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na referência de obras com até três autores conforme a ABNT NBR 6023:2018, indicam-se todos os autores nominados separados por ponto e vírgula, aplicando-se a supressão facultativa com a expressão \"et al.\" para obras com quatro ou mais autores."
  },
  {
    "id": "m8-q-34",
    "numero": 34,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na indicação de autoria de obras com quatro oumais autores, a NBR 6023:2018 prescreve que se deve indicar o primeiro autor seguido da expressão latina 'et al.', sendo, contudo, expressamente facultado indicar todos os autores caso o responsável pelo trabalho opte por dar visibilidade integral à equipe.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A ABNT NBR 6023:2018 inovou no item 8.1.1.2 ao flexibilizar a regra para obras com mais de três autores: a regra geral padronizada permanece sendo a indicação do primeiro autor seguido da expressão 'et al.', mas a norma passou a permitir expressamente a menção facultativa de todos os autores caso o responsável pelo trabalho opte por dar visibilidade integral à autoria coletiva de equipes científicas.",
    "armadilhaBanca": "Flexibilidade de autoria com mais de 3 autores na NBR 6023.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "autor seguido da expressão latina 'et al.'",
    "versao_errada": "Na indicação de autoria de obras com quatro oumais autores, a NBR 6023:2018 prescreve que se deve indicar o primeiro indevidamente autor seguido da expressão latina 'et al.', sendo, contudo, expressamente facultado indicar todos os autores caso o responsável pelo trabalho opte por dar visibilidade integral à equipe."
  },
  {
    "id": "m8-q-35",
    "numero": 35,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "Em relação ao objeto de avaliação do submódulo 8.2, julgue o item a seguir.",
    "item": "Na citação direta de extens ão superior a três linhas, o texto deve estar entre aspas duplas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a ABNT NBR 10520:2023, as citações diretas longas (com mais de três linhas) devem ser compostas em bloco separado com recuo de 4 cm da margem esquerda, entrelinhas simples e tamanho de fonte menor, NÃO sendo colocadas entre aspas duplas.",
    "armadilhaBanca": "REGRA_INVERTIDA: Exigir aspas duplas na citação direta em bloco destacado com recuo de 4 cm.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "Inédita, sem prova de origem",
      "verificado": false,
      "declaracaoLegada": "Cebraspe / Bibliotecário / 2025"
    },
    "versao_correta": "Na citação direta com mais de três linhas, o texto deve ser destacado com recuo de 4 cm da margem esquerda, fonte de tamanho menor e sem aspas duplas."
  },
  {
    "id": "m8-q-36",
    "numero": 36,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Para referenciar mensagens privadas de correio eletrônico (e-mail) ou conversas de WhatsApp, é desnecessário indicar o remetente, a data e o assunto da mensagem.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Mensagens eletrônicas exigem a indicação do remetente, título/assunto da mensagem entre aspas ou redondo, destinatário, data com hora e nota explicativa de mensagem pessoal. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A referência de comunicações pessoais e mensagens eletrônicas (e-mails) deve conter o nome do emissor, destinatário, assunto, data de envio e nota indicando tratar-se de mensagem pessoal."
  },
  {
    "id": "m8-q-37",
    "numero": 37,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Conforme a ABNT NBR 6023:2018, na referência de monografias no todo (livros), o destaque tipográfico (negrito, itálico ou sublinhado) deve ser aplicado exclusivamente ao título da obra, nunca se estendendo ao subtítulo, mesmo que este venha precedido por dois pontos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Regra pétrea e recorrente da NBR 6023: o subtítulo nunca recebe destaque tipográfico, devendo figurar em texto redondo/normal após o título destacado (ex: *Metodologia científica*: guia prático). Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "ou sublinhado) deve ser aplicado exclusivamente ao",
    "versao_errada": "Conforme a ABNT NBR 6023:2018, na referência de monografias no todo (livros), o destaque tipográfico (negrito, itálico indevidamente ou sublinhado) deve ser aplicado exclusivamente ao título da obra, nunca se estendendo ao subtítulo, mesmo que este venha precedido por dois pontos."
  },
  {
    "id": "m8-q-38",
    "numero": 38,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na padronização de meses em referências de periódicos segundo a ABNT NBR 6023, o mês de maio é abreviado grafando-se \"m.\" com ponto abreviativo.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a ABNT, os meses abreviam-se com três letras e ponto (jan., fev., mar.), exceto maio, que se escreve por extenso (\"maio\") por possuir apenas quatro letras. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na ABNT NBR 6023, os meses do ano em idioma português são abreviados com as três primeiras letras seguidas de ponto (jan., fev., mar.), com exceção do mês de maio, que deve ser grafado por extenso."
  },
  {
    "id": "m8-q-39",
    "numero": 39,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de patentes, a entrada é feita pelo nome do inventor ou da instituição depositante, seguido do título da invenção, código do país emissor, número da patente e datas de depósito e concessão.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 7.10 da ABNT NBR 6023:2018 (Patentes), constituem elementos essenciais na referência de patentes perante órgãos de propriedade industrial: o nome do inventor ou entidade depositante, o título da invenção, a indicação do código do país emissor (ex.: 'BR'), a modalidade de registro (ex.: 'Patente de Invenção' ou 'PI'), o número de registro oficial, as datas do depósito e da concessão e dados de publicação.",
    "armadilhaBanca": "Referência de patentes.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "instituição depositante, seguido do título da invenção",
    "versao_errada": "Na referência de patentes, a entrada é feita pelo nome do inventor ou da indevidamente instituição depositante, seguido do título da invenção, código do país emissor, número da patente e datas de depósito e concessão."
  },
  {
    "id": "m8-q-40",
    "numero": 40,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "A lista de referências ao final de um trabalho acadêmico ou técnico deve ser alinhada à margem esquerda do texto, digitada em espaçamento simples e separada entre si por um espaço em branco simples (uma linha em branco).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Regra formal de diagramação da lista de referências: alinhamento à esquerda (não justificado), espaçamento entrelinhas simples e separação de uma linha entre cada referência. Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "margem esquerda do texto, digitada em espaçamento",
    "versao_errada": "A lista de referências ao final de um trabalho acadêmico ou técnico deve ser alinhada à indevidamente margem esquerda do texto, digitada em espaçamento simples e separada entre si por um espaço em branco simples (uma linha em branco)."
  },
  {
    "id": "m8-q-41",
    "numero": 41,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Em obras anônimas ou cuja autoria não seja indicada na publicação, a entrada na referência deve ser feita pela palavra 'ANÔNIMO' grafada em letras garrafais.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A NBR 6023 veda o uso da palavra 'Anônimo'. A entrada de obra sem autoria deve ser feita pelo PRÓPRIO TÍTULO da obra, com a primeira palavra em letras maiúsculas (ex: DIAGNÓSTICO da educação brasileira...). A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Em publicações sem autoria indicada ou anônimas, a entrada na referência deve ser feita diretamente pelo próprio título da obra, grafando-se a primeira palavra do título em letras maiúsculas, sendo vedado o uso da palavra \"Anônimo\"."
  },
  {
    "id": "m8-q-42",
    "numero": 42,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "A indicação de edição de uma obra é elemento essencial da referência a partir da segunda edição, sendo grafada com número arábico seguido de ponto e da abreviatura da palavra edição no idioma da obra (ex: '2. ed.', '3. ed. rev. e ampl.').",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Pela ABNT NBR 6023:2018, a primeira edição de uma obra monográfica não é indicada na referência bibliográfica por constituir a manifestação original primária. A indicação de edição torna-se elemento essencial compulsório a partir da segunda edição, sendo grafada com algarismo arábico acompanhado de ponto e da abreviatura correspondente no idioma da publicação (ex.: '2. ed.', '4th ed.').",
    "armadilhaBanca": "Regra de indicação de edição na NBR 6023.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "grafada com número arábico seguido de ponto",
    "versao_errada": "A indicação de edição de uma obra é elemento essencial da referência a partir da segunda edição, sendo indevidamente grafada com número arábico seguido de ponto e da abreviatura da palavra edição no idioma da obra (ex: '2. ed.', '3. ed. rev. e ampl.')."
  },
  {
    "id": "m8-q-43",
    "numero": 43,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de artigos publicados em periódicos científicos, o elemento que deve receber o destaque tipográfico (negrito ou itálico) é o TÍTULO DO PERIÓDICO (revista), e não o título do artigo individual.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Regra canônica: o título do periódico recebe o destaque (ex: SILVA, J. A inteligência artificial no Direito. *Revista de Informação Legislativa*, Brasília, v. 61, n. 241, p. 10-25, 2024). Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "o destaque tipográfico (negrito ou itálico) é",
    "versao_errada": "Na referência de artigos publicados em periódicos científicos, o elemento que deve receber indevidamente o destaque tipográfico (negrito ou itálico) é o TÍTULO DO PERIÓDICO (revista), e não o título do artigo individual."
  },
  {
    "id": "m8-q-44",
    "numero": 44,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "A ordenação de títulos de um mesmo autor na lista de referências alfabética deve desconsiderar completamente a ordem cronológica, priorizando livros que tenham figuras coloridas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Obras de mesmo autor na lista de referências são ordenadas em ordem cronológica de publicação (do mais antigo para o mais recente) ou em ordem alfabética de títulos quando do mesmo ano. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Quando um mesmo autor possuir várias obras na lista alfabética de referências, estas devem ser ordenadas cronologicamente pelo ano de publicação, do mais antigo para o mais recente."
  },
  {
    "id": "m8-q-45",
    "numero": 45,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "O Digital Object Identifier (DOI) pode ser inserido na referência de artigos e e-books como elemento complementar de localização persistente na web.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 7.7 da ABNT NBR 6023:2018, o DOI (Digital Object Identifier) é expressamente recomendado como elemento complementar padronizado de localização persistente na web para artigos de periódicos científicos e capítulos de livros eletrônicos, garantindo rastreabilidade perene independentemente de futuras alterações de URL nos servidores editoriais.",
    "armadilhaBanca": "Inclusão de DOI nas referências.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "na referência de artigos e e-books como",
    "versao_errada": "O Digital Object Identifier (DOI) pode ser inserido indevidamente na referência de artigos e e-books como elemento complementar de localização persistente na web."
  },
  {
    "id": "m8-q-46",
    "numero": 46,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Quando a autoria de uma obra for atribuída a um organizador, compilador ou coordenador, a entrada é feita pelo seu sobrenome em maiúsculas acompanhado da respectiva abreviatura da função entre parênteses, a exemplo de 'SILVA, Paulo (org.).' ou 'SANTOS, Ana (coord.).'.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme as regras de autoria da ABNT NBR 6023:2018 (item 8.1.1.4), quando a responsabilidade intelectual principal de uma obra coletiva for exercida por compilador, organizador ou coordenador, a entrada é formulada pelo sobrenome da pessoa física em letras maiúsculas, sucedido imediatamente pela designação abreviada da função exercida entre parênteses em minúsculas (ex.: 'SILVA, Paulo (org.).', 'SANTOS, Ana (coord.).').",
    "armadilhaBanca": "Responsabilidade intelectual secundária (org./coord.).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "feita pelo seu sobrenome em maiúsculas acompanhado",
    "versao_errada": "Quando a autoria de uma obra for atribuída a um organizador, compilador ou coordenador, a entrada é indevidamente feita pelo seu sobrenome em maiúsculas acompanhado da respectiva abreviatura da função entre parênteses, a exemplo de 'SILVA, Paulo (org.).' ou 'SANTOS, Ana (coord.).'."
  },
  {
    "id": "m8-q-47",
    "numero": 47,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Para documentos consultados exclusivamente em meio eletrônico (online), são elementos essenciais obrigatórios a indicação do endereço eletrônico completo precedido de 'Disponível em: <URL>' (ou sem colchetes angulares conforme estilo adotado) e da data de acesso precedida de 'Acesso em: dia mês por extenso abreviado e ano'.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme as prescrições de documentos em meio eletrônico da ABNT NBR 6023:2018, ao referenciar materiais acessados online são elementos essenciais indeclináveis: a indicação do endereço eletrônico completo precedido da expressão 'Disponível em: <URL>' e a indicação do dia, mês abreviado e ano da consulta precedida da expressão 'Acesso em: dia mês. ano' para assegurar tempestividade e rastreabilidade.",
    "armadilhaBanca": "Elementos obrigatórios de documentos online.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "'Disponível em: <URL>' (ou sem colchetes angulares",
    "versao_errada": "Para documentos consultados exclusivamente em meio eletrônico (online), são elementos essenciais obrigatórios a indicação do endereço eletrônico completo precedido de indevidamente 'disponível em: <url>' (ou sem colchetes angulares conforme estilo adotado) e da data de acesso precedida de 'Acesso em: dia mês por extenso abreviado e ano'."
  },
  {
    "id": "m8-q-48",
    "numero": 48,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Na referência de artigos de jornal diário assinado, os elementos essenciais são: autor, título do artigo, título do jornal (destacado), local de publicação, data completa (dia, mês e ano), caderno ou seção e paginação.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. De acordo com o item 7.7.3 da ABNT NBR 6023:2018 (Artigo de jornal diário), os elementos essenciais obrigatórios compõem-se de: autor do artigo, título do artigo sem destaque, título do jornal diário com destaque tipográfico (negrito ou itálico), local de publicação, data completa com dia, mês abreviado e ano, número da edição ou caderno/seção e paginação correspondente.",
    "armadilhaBanca": "Referência de artigo de jornal.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "do artigo, título do jornal (destacado), local",
    "versao_errada": "Na referência de artigos de jornal diário assinado, os elementos essenciais são: autor, título indevidamente do artigo, título do jornal (destacado), local de publicação, data completa (dia, mês e ano), caderno ou seção e paginação."
  },
  {
    "id": "m8-q-49",
    "numero": 49,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "A NBR 6023 proíbe categoricamente a utilização de prenomes por extenso dos autores na lista de referências, obrigando a abreviatura de todos os prenomes em uma única letra.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A NBR 6023 faculta o uso de prenomes abreviados ou por extenso, exigindo apenas que se mantenha a padronização consistente em toda a lista (se optar por abreviar, abrevia todos; se optar por extenso, grafa todos por extenso).",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A ABNT NBR 6023 faculta o uso de prenomes abreviados ou por extenso nas referências, desde que haja padronização e consistência no formato adotado ao longo de todo o trabalho."
  },
  {
    "id": "m8-q-50",
    "numero": 50,
    "macroModuloId": "M8",
    "submoduloId": "8.2",
    "contexto": "A respeito das regras para elaboração de referências documentárias estabelecidas na ABNT NBR 6023:2018 (com emendas vigentes), julgue o item a seguir.",
    "item": "Em trabalhos acadêmicos como teses e dissertações, a referência deve indicar o tipo de documento, o grau acadêmico pretendido, o vínculo institucional com universidade/faculdade, o local e o ano da defesa.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 7.8 da ABNT NBR 6023:2018 (Teses, dissertações e outros trabalhos acadêmicos), a referência de literatura cinzenta acadêmica exige como elementos essenciais: autor, título com destaque, ano de entrega/depósito, número de folhas, tipo de trabalho acadêmico (Tese, Dissertação ou TCC), grau acadêmico pretendido, vinculação institucional universitária, local e ano de defesa.",
    "armadilhaBanca": "Referência de teses e dissertações.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "tipo de documento, o grau acadêmico pretendido",
    "versao_errada": "Em trabalhos acadêmicos como teses e dissertações, a referência deve indicar o indevidamente tipo de documento, o grau acadêmico pretendido, o vínculo institucional com universidade/faculdade, o local e o ano da defesa."
  },
  {
    "id": "m8-q-51",
    "numero": 51,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Com base nas normas técnicas para a área de documentação, ju lgue os itens su b-",
    "item": "De acordo com a norma NBR -6028:2003, não há limitação de quantidade de palavras para resumos críticos.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"De acordo com\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2012 / 2012 (Adaptada)",
      "verificado": true,
      "provaId": "CAPES/2012",
      "ano": 2012,
      "orgao": "2012",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1885"
    }
  },
  {
    "id": "m8-q-52",
    "numero": 52,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Acerca de resumos e índices, e suas normas técnicas, julgue os itens a seguir.",
    "item": "O resumo indicativo condensa as conclusões, metodologias e resultados substantivos de uma pesquisa, tornando dispensável a leitura do texto original completo.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a tipologia estabelecida pela ABNT NBR 6028:2021 (Resumos), o resumo indicativo limita-se a sinalizar os temas e os pontos principais abordados no documento, sem expor dados quantitativos, metodologias detalhadas ou conclusões substantivas. Justamente por seu caráter estritamente panorâmico e sumarizado, o resumo indicativo não dispensa de modo algum a leitura do texto integral da obra.",
    "armadilhaBanca": "Distorção conceitual deliberada da regra ou inversão de papéis.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "Inédita, sem prova de origem",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1864",
      "declaracaoLegada": "Cebraspe / 2013 / 2013"
    },
    "versao_correta": "O resumo indicativo apenas aponta os pontos principais e o escopo geral do documento sem aprofundar dados e resultados, não dispensando a consulta ao texto integral da publicação."
  },
  {
    "id": "m8-q-53",
    "numero": 53,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "A respeito da preparação de guias e de índices, julgue os itens seguintes.",
    "item": "Cabeçalho composto é a unidade do índice que consiste em cabeçalho e indicativo de sua localização no texto.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A assertiva promoveu uma inversão de conceitos da ABNT NBR 6034:2004: Entrada (item 3.3) é a \"unidade do índice que consiste em cabeçalho e indicativo de sua localização no texto (ou remissiva)\", enquanto cabeçalho composto (item 3.5) é o \"cabeçalho formado por dois ou mais termos ou palavras\". A questão atribuiu a definição de entrada ao cabeçalho composto.",
    "armadilhaBanca": "TROCA CONCEITUAL NA NBR 6034: Substituição do conceito macro do índice (entrada) pelo conceito morfológico de termos (cabeçalho composto).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "ABNT NBR 6034:2004, itens 3.3 e 3.5",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1845",
      "declaracaoLegada": "Cebraspe / 2013 / 2013"
    },
    "versao_correta": "Entrada é a unidade do índice que consiste em cabeçalho e indicativo de sua localização no texto (ou remissiva), enquanto cabeçalho composto é o cabeçalho formado por dois ou mais termos (ABNT NBR 6034:2004, itens 3.3 e 3.5)."
  },
  {
    "id": "m8-q-54",
    "numero": 54,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "No sumário, a tipografia utilizada para cada seção (caixa alta, negrito, itálico) deve ser totalmente diferente e contraditória com a tipografia adotada nos títulos das seções no corpo do texto.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A NBR 6027 exige estrita conformidade tipográfica: a grafia dos títulos e subtítulos no sumário deve reproduzir EXATAMENTE a mesma tipografia e destaque empregados no corpo do texto (ex: se a seção primária está em negrito caixa alta no texto, deve figurar em negrito caixa alta no sumário).",
    "armadilhaBanca": "Técnica: Inversão de Regras de Estrutura e Paginação. O distrator explora a diferença entre contagem de folhas (iniciada na folha de rosto) e impressão da numeração (iniciada na parte textual).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Conforme a ABNT NBR 6027, a formatação e a tipografia das seções e subtítulos no sumário devem reproduzir fielmente a tipografia e o destaque gráfico adotados no corpo do documento."
  },
  {
    "id": "m8-q-55",
    "numero": 55,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Várias normas editadas pela ABNT especificam os princípios gerais para a elaboração",
    "item": "Na numeração progressiva em um documento, o indicativo de uma seção secundária é constituído pelo indicativo da seção primária a que pertence, seguido do número que lhe for atribuído na sequência do assunto e separado por ponto.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme a ABNT NBR 6024:2012 (Numeração progressiva das seções de um documento, itens 3.3 e 4.1), o indicativo de uma seção secundária é estruturado pelo número da seção primária precedente seguido do algarismo arábico que lhe couber na ordenação do tema, separados exclusivamente por um ponto (ex.: 1.1, 1.2). Não se deve utilizar ponto após o último algarismo da seção.",
    "armadilhaBanca": "REGRA ESTRUTURAL DA NBR 6024: Reprodução exata da regra de derivação e formatação por pontos entre níveis de seções progressivas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "ABNT NBR 6024:2012, itens 3.3 e 4.1",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1875",
      "declaracaoLegada": "Cebraspe / 2013 / 2013"
    }
  },
  {
    "id": "m8-q-56",
    "numero": 56,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "Conforme a ABNT NBR 6027:2012, o 'sumário' é a enumeração das divisões, seções e outras partes de um documento na mesma ordem e grafia em que a matéria se sucede no corpo da obra, sendo classificado como elemento pré-textual.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. A teor da ABNT NBR 6027:2012 (Sumário - Apresentação), o sumário é formalmente definido como a enumeração das divisões, seções e demais partes que compõem um documento, dispostas rigorosamente na mesma ordem cronológica, hierárquica e grafia tipográfica em que se sucedem no corpo da obra. Na arquitetura da NBR 14724, o sumário é o último elemento pré-textual obrigatório.",
    "armadilhaBanca": "Definição de sumário na NBR 6027.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "de um documento na mesma ordem e",
    "versao_errada": "Conforme a ABNT NBR 6027:2012, o 'sumário' é a enumeração das divisões, seções e outras partes indevidamente de um documento na mesma ordem e grafia em que a matéria se sucede no corpo da obra, sendo classificado como elemento pré-textual."
  },
  {
    "id": "m8-q-57",
    "numero": 57,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere à realização de serviços de normalização de obras e relatórios inst i-",
    "item": "Para viabilizar o processo de recuperação da informação, é necessário que as obras cont e- nham resumos sobre os temas tratados. Esses resumos, por sua vez, devem ser or ganizados em tópicos e devem apresentar a indicação do tipo de documento que representa.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A ABNT NBR 6028 estabelece que o resumo deve ser composto por uma sequência de frases concisas e afirmativas reunidas em um único parágrafo contínuo, não devendo ser organizado em tópicos ou tópicos frasais pontuados.",
    "armadilhaBanca": "FORMATO_INADEQUADO: Afirmar que o resumo normativo da ABNT deve ser organizado em tópicos.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / TC DF / 2014 (Adaptada)",
      "verificado": true,
      "provaId": "ACE (TC DF)/TC DF/Especializada/Biblioteconomia/2014",
      "ano": 2014,
      "orgao": "TC DF",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-369852"
    },
    "versao_correta": "Conforme a ABNT NBR 6028, os resumos devem ser redigidos em parágrafo único contínuo, em texto corrido e conciso, sem estruturação em tópicos ou marcadores pontuais."
  },
  {
    "id": "m8-q-58",
    "numero": 58,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "As palavras-chave (palavras representativas do conteúdo do documento) devem figurar no topo da folha, antes do título do trabalho, impressas em letras góticas coloridas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. As palavras-chave devem figurar LOGO ABAIXO do resumo, precedidas da expressão 'Palavras-chave:' (ou 'Palavras-chave:'), separadas entre si por ponto e finalizadas também por ponto, grafadas em minúsculas (salvo nomes próprios).",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "As palavras-chave representativas do conteúdo do documento devem figurar logo abaixo do resumo, precedidas da expressão \"Palavras-chave:\" e separadas entre si por ponto e finalizadas por ponto."
  },
  {
    "id": "m8-q-59",
    "numero": 59,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "Na numeração progressiva de seções disciplinada pela NBR 6024:2012, o indicativo numérico de cada seção é sucedido por ponto gráfico antes do título, a exemplo de \"1.\", \"1.1.\" e \"1.1.1.\".",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A ABNT NBR 6024:2012 (Numeração progressiva das seções de um documento) prescreve taxativamente em seu item 4.2 que o indicativo numérico da seção é separado do respectivo título unicamente por um espaço em branco, sendo expressamente proibido o uso de ponto, hífen, travessão ou qualquer outro sinal diacrítico após o último algarismo da seção (ex.: '1 Introdução', '1.1 Histórico' e nunca '1. Introdução').",
    "armadilhaBanca": "Pegadinha clássica da ABNT: ausência de ponto após o último algarismo.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na numeração progressiva de seções da ABNT NBR 6024, não se utiliza ponto, hífen ou travessão após o último algarismo do indicativo de seção, separando-se o número do título por um espaço simples."
  },
  {
    "id": "m8-q-60",
    "numero": 60,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "Títulos de seções que não possuem indicativo numérico (como Agradecimentos, Resumo, Sumário, Referências, Apêndices e Anexos) devem ser centralizados na página e manter o mesmo destaque tipográfico das seções primárias.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme prescreve a ABNT NBR 6024:2012 e a NBR 14724:2011, os títulos dos elementos que não recebem indicativo numérico progressivo (Agradecimentos, Resumo, Abstract, Sumário, Lista de Ilustrações, Referências, Glossário, Apêndices e Anexos) devem figurar centralizados no topo da folha, mantendo o mesmo padrão tipográfico das seções primárias (caixa alta e negrito).",
    "armadilhaBanca": "Títulos de seções sem indicativo numérico.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "Referências, Apêndices e Anexos) devem ser centralizados",
    "versao_errada": "Títulos de seções que não possuem indicativo numérico (como Agradecimentos, Resumo, Sumário, Referências, anexos e Anexos) devem ser centralizados na página e manter o mesmo destaque tipográfico das seções primárias."
  },
  {
    "id": "m8-q-61",
    "numero": 61,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Com base nas referidas normas, julgue os itens a seguir.",
    "item": "O tema principal do documento deve ser desenvolvido no corpo do resumo, o qual deve ser seguido de informação sobre a categ oria do tratamento, a qual pode ser memória, estudo de caso, análise da situação etc.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A NBR 6028 prescreve que o resumo deve ressaltar o objetivo, o método, os resultados e as conclusões, devendo a primeira frase ser significativa e indicar preferencialmente no início o tema principal e a categoria de tratamento do trabalho (estudo de caso, memória, revisão analítica), e não ser jogada ao final após todo o corpo do texto.",
    "armadilhaBanca": "POSICIONAMENTO_EQUIVOCADO: Colocar a indicação da categoria do tratamento como adendo tardio após o desenvolvimento do resumo.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2013 / 2013 (Adaptada)",
      "verificado": true,
      "provaId": "ANTT/2013",
      "ano": 2013,
      "orgao": "2013",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1847"
    },
    "versao_correta": "Conforme a ABNT NBR 6028, a categoria de tratamento do documento (estudo de caso, pesquisa empírica, revisão teórica) deve ser indicada logo no início do resumo, acompanhando a frase introdutória sobre o tema principal."
  },
  {
    "id": "m8-q-62",
    "numero": 62,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "No sumário elaborado conforme a NBR 6027:2012, os elementos pré-textuais (como errata, folha de aprovação, dedicatória, agradecimentos, resumos e listas de ilustrações) NÃO devem constar do sumário.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Regra formal: o sumário enumera as seções a partir da Introdução (parte textual) e inclui os elementos pós-textuais (referências, apêndices, anexos), mas não lista os elementos pré-textuais que o antecedem. Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "(como errata, folha de aprovação, dedicatória, agradecimentos",
    "versao_errada": "No sumário elaborado conforme a NBR 6027:2012, os elementos pré-textuais indevidamente (como errata, folha de aprovação, dedicatória, agradecimentos, resumos e listas de ilustrações) NÃO devem constar do sumário."
  },
  {
    "id": "m8-q-63",
    "numero": 63,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Acerca de resumos e índices, e suas normas técnicas, julgue os itens a seguir.",
    "item": "O resumo informativo tem como objetivo informar ao leitor finalidades, metodologia, resultados e conclusões do documento.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Segundo a ABNT NBR 6028:2021 (item 3.3), o resumo informativo é caracterizado por \"informar finalidades, metodologia, resultados e conclusões do documento, de tal forma que possa, inclusive, dispensar a consulta ao original\". A presença explícita desses quatro elementos informacionais diferencia o resumo informativo da modalidade meramente indicativa.",
    "armadilhaBanca": "QUATRO ELEMENTOS DO RESUMO INFORMATIVO: Cobrança dos pilares da NBR 6028 (finalidade, metodologia, resultados e conclusões).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "ABNT NBR 6028:2021, item 3.3",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1865",
      "declaracaoLegada": "Cebraspe / 2013 / 2013"
    }
  },
  {
    "id": "m8-q-64",
    "numero": 64,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "Quanto à extensão do resumo, a NBR 6028:2021 recomenda de 150 a 500 palavras para trabalhos acadêmicos (teses, dissertações) e relatórios técnico-científicos; de 100 a 250 palavras para artigos de periódicos; e de 50 a 100 palavras para notas e comunicações breves.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item 5.1 da ABNT NBR 6028:2021 estabelece as extensões canônicas recomendadas para o resumo informativo: 1) de 150 a 500 palavras para trabalhos acadêmicos em geral (teses, dissertações e TCCs) e relatórios técnico-científicos; 2) de 100 a 250 palavras para artigos de periódicos especializados; e 3) de 50 a 100 palavras para notas prévias e comunicações breves.",
    "armadilhaBanca": "Extensão de palavras recomendada pela NBR 6028.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "dissertações) e relatórios técnico-científicos; de 100 a",
    "versao_errada": "Quanto à extensão do resumo, a NBR 6028:2021 recomenda de 150 a 500 palavras para trabalhos acadêmicos (teses, indevidamente dissertações) e relatórios técnico-científicos; de 100 a 250 palavras para artigos de periódicos; e de 50 a 100 palavras para notas e comunicações breves."
  },
  {
    "id": "m8-q-65",
    "numero": 65,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "Conforme a ABNT NBR 6024:2012 (Numeração progressiva das seções de um documento), utilizam-se algarismos arábicos para indicar a hierarquia das seções, limitando-se a subdivisão preferencialmente até a seção quinária (cinco dígitos).",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. De acordo com a ABNT NBR 6024:2012, utilizam-se algarismos arábicos na numeração hierárquica das seções, recomendando a norma que a subdivisão não ultrapasse a seção quinária (composta por cinco dígitos, como '1.1.1.1.1'). Caso haja necessidade de maiores detalhamentos temáticos subsequentes, deve-se recorrer ao emprego de alíneas (letras minúsculas com parêntese) e subalíneas (hífen).",
    "armadilhaBanca": "Regra de numeração progressiva da NBR 6024.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "utilizam-se algarismos arábicos para indicar a hierarquia",
    "versao_errada": "Conforme a ABNT NBR 6024:2012 (Numeração progressiva das seções de um documento), indevidamente utilizam-se algarismos arábicos para indicar a hierarquia das seções, limitando-se a subdivisão preferencialmente até a seção quinária (cinco dígitos)."
  },
  {
    "id": "m8-q-66",
    "numero": 66,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "Segundo a ABNT NBR 6028:2021, o 'resumo informativo' é aquele que informa a finalidade, a metodologia, os resultados e as conclusões do documento, de tal forma que pode dispensar a consulta ao texto original completo.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Definição canônica do resumo informativo: auto-suficiente, traz dados quantitativos e qualitativos suficientes para o leitor apreender as conclusões da pesquisa sem ler a obra integral. Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "a metodologia, os resultados e as conclusões",
    "versao_errada": "Segundo a ABNT NBR 6028:2021, o 'resumo informativo' é aquele que informa a finalidade, indevidamente a metodologia, os resultados e as conclusões do documento, de tal forma que pode dispensar a consulta ao texto original completo."
  },
  {
    "id": "m8-q-67",
    "numero": 67,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "À luz do disposto nas normas técnicas brasileiras para documentação da Associação",
    "item": "Resumos com 100 a 250 palavras são destinados a trabalhos acadêmicos, como teses e dissertações, e a relatórios técnico-científicos.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A NBR 6028 define que resumos de teses, dissertações e relatórios técnico-científicos devem conter de 150 a 500 palavras. A extensão de 100 a 250 palavras é reservada para artigos de periódicos e publicações correlatas.",
    "armadilhaBanca": "TROCA_DE_FAIXA_EXTENSAO: Inverter a quantidade de palavras exigida entre artigos de periódicos (100 a 250) e trabalhos acadêmicos/teses (150 a 500).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2011 / 2011 (Adaptada)",
      "verificado": true,
      "provaId": "ECT/2011",
      "ano": 2011,
      "orgao": "2011",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1822"
    },
    "versao_correta": "Segundo a ABNT NBR 6028, a extensão de 150 a 500 palavras destina-se a trabalhos acadêmicos (teses e dissertações) e relatórios técnico-científicos, reservando-se a faixa de 100 a 250 palavras para artigos de periódicos."
  },
  {
    "id": "m8-q-68",
    "numero": 68,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "O 'resumo indicativo' é aquele que apresenta detalhadamente todos os dados quantitativos, tabelas numéricas e as conclusões completas da pesquisa, dispensando integralmente a leitura do texto original.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O resumo indicativo apenas 'indica os pontos principais do documento, NÃO apresentando dados qualitativos, quantitativos etc., de modo que NÃO DISPENSA a consulta ao original'. Quem dispensa é o resumo informativo. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "O resumo indicativo apenas sinaliza os aspectos gerais e o escopo do documento sem expor dados quantitativos ou resultados aprofundados, de modo que não substitui a leitura da publicação completa."
  },
  {
    "id": "m8-q-69",
    "numero": 69,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "O 'resumo crítico' (também denominado recensão ou resenha) é a redação condensada elaborada por especialista que analisa e emite julgamento de valor ou crítica sobre o conteúdo de um documento.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na taxonomia da ABNT NBR 6028:2021, o 'resumo crítico' (também denominado resenha ou recensão) é a síntese analítica elaborada por especialista que expressa uma análise crítica valorativa sobre o documento, emitindo julgamento sobre sua relevância metodológica e teórica. Diferencia-se ontologicamente dos resumos indicativo e informativo, que devem ser neutros, objetivos e impessoais.",
    "armadilhaBanca": "Conceito de resumo crítico / resenha.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "elaborada por especialista que analisa e emite",
    "versao_errada": "O 'resumo crítico' (também denominado recensão ou resenha) é a redação condensada indevidamente elaborada por especialista que analisa e emite julgamento de valor ou crítica sobre o conteúdo de um documento."
  },
  {
    "id": "m8-q-70",
    "numero": 70,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Com base nas normas da ABNT referentes à documentação, julgue os itens segui n-",
    "item": "A extensão dos resumos de artigos de periódicos deve ser de 100 a 250 palavras.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"de artigos de periódicos deve ser de\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2013 / 2013 (Adaptada)",
      "verificado": true,
      "provaId": "CPRM/2013",
      "ano": 2013,
      "orgao": "2013",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1858"
    }
  },
  {
    "id": "m8-q-71",
    "numero": 71,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "No projeto gráfico editorial segundo a ABNT, sumário e índice constituem elementos funcionais equivalentes, situando-se o sumário ao término da publicação estruturado em ordem alfabética de assuntos.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. O sumário é elemento pré-textual que reflete a ordem cronológica e linear dos capítulos; o índice (NBR 6034) é pós-textual e organiza termos remissivos em ordem alfabética ou sistemática. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão de Regras de Estrutura e Paginação. O distrator explora a diferença entre contagem de folhas (iniciada na folha de rosto) e impressão da numeração (iniciada na parte textual).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "O sumário (NBR 6027) é elemento pré-textual que enumera as seções e divisões na mesma ordem linear em que se sucedem no documento, enquanto o índice (NBR 6034) é elemento pós-textual ordenado alfabeticamente ou sistematicamente."
  },
  {
    "id": "m8-q-72",
    "numero": 72,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "No que se refere às normas ABNT NBR 6028:2021 (Resumos), ABNT NBR 6027:2012 (Sumários) e ABNT NBR 6024:2012 (Numeração progressiva), julgue o item a seguir.",
    "item": "A ABNT NBR 6028:2021 estabelece que o resumo de monografias e dissertações acadêmicas seja organizado em itens tópicos com marcadores (bullet points), segmentando cada conclusão metodológica.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a NBR 6028, o resumo acadêmico deve ser redigido em parágrafo único contínuo, em texto corrido e conciso, na terceira pessoa do singular e com verbo na voz ativa. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Conforme a ABNT NBR 6028:2021, o resumo acadêmico deve ser composto em parágrafo único e texto corrido, na terceira pessoa do singular e com verbo na voz ativa, sem divisão por marcadores."
  },
  {
    "id": "m8-q-73",
    "numero": 73,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Com base nas regras estabelecidas pela Associação Brasileira de Normas Técnicas",
    "item": "De acordo com o previsto na Norma Brasileira 6024 (Informação e Documentação — Numeração progressiva das seções de um documento escrito — Apresentação), utiliza-se hífen após o indicativo de seção ou de seu título, como exemplificado a seguir: 11 – Tutorial no uso do l á- tex.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A ABNT NBR 6024 expressamente veda o uso de hífen, travessão, ponto ou parênteses após o número da seção ou entre o número e o título. O padrão correto é separar o número do título por um simples espaço (ex.: \"11 Tutorial no uso do LaTeX\").",
    "armadilhaBanca": "PONTUACAO_ILICITA: Inserir hífen ou pontuação gráfica após o indicativo da seção na NBR 6024.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / FUB / 2015 (Adaptada)",
      "verificado": true,
      "provaId": "Biblio Doc (FUB)/FUB/2015",
      "ano": 2015,
      "orgao": "FUB",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-289191"
    },
    "versao_correta": "De acordo com a ABNT NBR 6024, não se utiliza hífen, ponto ou travessão após o indicativo numérico da seção, separando-se o número do título unicamente por um espaço em branco."
  },
  {
    "id": "m8-q-74",
    "numero": 74,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "Julgue os itens que se seguem, relativos às normas técnicas da área de documen -",
    "item": "Caso um sumário contenha indicativos de seções, estes devem ser alinhados à esquerda e precederem o título, sendo dele separado por espaço.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 5.3 da ABNT NBR 6027:2012 (Sumário - Apresentação), os indicativos das seções (numeração progressiva) devem ser alinhados à margem esquerda e preceder os respectivos títulos. Entre o último algarismo do indicativo e o título correspondente não se utiliza ponto, hífen ou travessão, deixando-se rigorosamente apenas um espaço em branco, mantendo-se a mesma tipografia adotada no corpo do trabalho.",
    "armadilhaBanca": "Assertiva tecnicamente correta e semântica estrita conforme cobrado no concurso STM/2011.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2011 / 2011 (Adaptada)",
      "verificado": true,
      "provaId": "STM/2011",
      "ano": 2011,
      "orgao": "2011",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1852"
    }
  },
  {
    "id": "m8-q-75",
    "numero": 75,
    "macroModuloId": "M8",
    "submoduloId": "8.3",
    "contexto": "A respeito de normas de documentação, julgue os itens que se seguem.",
    "item": "Os resumos para indicações breves devem ter de cinquenta a cem palavras.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"indicações breves devem ter de cinquenta a\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / SUFRAMA / 2014 (Adaptada)",
      "verificado": true,
      "provaId": "Biblio (SUFRAMA)/SUFRAMA/2014",
      "ano": 2014,
      "orgao": "SUFRAMA",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-165433"
    },
    "gatilho": "indicações breves devem ter de cinquenta a",
    "versao_errada": "Os resumos para indevidamente indicações breves devem ter de cinquenta a cem palavras."
  },
  {
    "id": "m8-q-76",
    "numero": 76,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "A respeito das normas brasileiras (NBR) estabelecidas pela Associação Brasileira de",
    "item": "Na ABNT NBR 14724, o uso do AACR (Anglo -American Cataloguing Rules) é informado na pr o- dução da ficha catalográfica do documento.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"(Anglo -American Cataloguing Rules) é informado na\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2017 / 2017 (Adaptada)",
      "verificado": true,
      "provaId": "ABIN/2017",
      "ano": 2017,
      "orgao": "2017",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1816"
    }
  },
  {
    "id": "m8-q-77",
    "numero": 77,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Tendo como referência as normas técnicas da área de documentação, jul gue os",
    "item": "De acordo com a NBR 6032, abreviam -se preferencialmente de maneira idêntica os vocábulos de línguas diferentes que possuam a mesma raiz e o mesmo sentido, sempre que a ortografia o permitir, a exemplo do que ocorre com as palavras Informação (em português) e Information (em inglês), cuja abreviação é Inf.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"De acordo com\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / HU Brasil / 2018 (Adaptada)",
      "verificado": true,
      "provaId": "Ana Adm (EBSERH)/HU Brasil/Biblioteconomia/2018",
      "ano": 2018,
      "orgao": "HU Brasil",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-646345"
    },
    "gatilho": "De acordo com",
    "versao_errada": "indevidamente de acordo com a NBR 6032, abreviam -se preferencialmente de maneira idêntica os vocábulos de línguas diferentes que possuam a mesma raiz e o mesmo sentido, sempre que a ortografia o permitir, a exemplo do que ocorre com as palavras Informação (em português) e Information (em inglês), cuja abreviação é Inf."
  },
  {
    "id": "m8-q-78",
    "numero": 78,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "A elaboração da ficha catalográfica de um livro publicado no Brasil pode ser feita livremente por qualquer pessoa sem registro profissional no Conselho Regional de Biblioteconomia, dispensando o número de CRB.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a Lei Federal nº 4.084/1962 e a Lei nº 9.674/1998, a elaboração de fichas catalográficas é atividade técnica privativa de Bacharéis em Biblioteconomia devidamente registrados no CRB de sua jurisdição. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A elaboração de fichas catalográficas é atividade técnica privativa de Bacharéis em Biblioteconomia com registro ativo no Conselho Regional de Biblioteconomia (CRB), consoante a Lei nº 4.084/1962 e a Lei nº 9.674/1998."
  },
  {
    "id": "m8-q-79",
    "numero": 79,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "A respeito das normas brasileiras (NBR) estabelecidas pela Associação Brasileira de",
    "item": "A ABNT NBR 6027 trata de procedimentos de numeração progressiva das seções de um doc documento.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A ABNT NBR 6027 trata exclusivamente da apresentação de SUMÁRIOS em qualquer tipo de documento. Quem trata de numeração progressiva das seções é a ABNT NBR 6024.",
    "armadilhaBanca": "TROCA_DE_NORMA: Atribuir à norma de sumários (NBR 6027) o escopo da norma de numeração progressiva (NBR 6024).",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2017 / 2017 (Adaptada)",
      "verificado": true,
      "provaId": "ABIN/2017",
      "ano": 2017,
      "orgao": "2017",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1815"
    },
    "versao_correta": "A ABNT NBR 6027 estabelece os requisitos para a apresentação de sumários, cabendo à ABNT NBR 6024 a disciplina da numeração progressiva das seções de um documento."
  },
  {
    "id": "m8-q-80",
    "numero": 80,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Julgue os itens que se seguem, relativos aos objetivos e às aplicações das normas",
    "item": "A NBR 10518:2005 estabelece requisitos para a elaboração e organização de guias de unidades informacionais e determina a ordem de apresentação das sessões principais e subdivisões desses guias.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A norma ABNT NBR 10518 fixa as condições exigíveis para a elaboração e apresentação de guias de bibliotecas e unidades de informação, mas não estabelece uma ordem inflexível ou impositiva de seções principais que suprima a autonomia organizacional da biblioteca.",
    "armadilhaBanca": "IMPOSICAO_INEXISTENTE: Afirmar que a NBR 10518 impõe taxativamente a ordem de apresentação de todas as seções e subdivisões.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2010 / 2010 (Adaptada)",
      "verificado": true,
      "provaId": "TRT21/2010",
      "ano": 2010,
      "orgao": "2010",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1821"
    },
    "versao_correta": "A ABNT NBR 10518 fornece diretrizes e recomendações de elementos para a elaboração de guias de unidades de informação, não determinando uma ordem impositiva rígida para a apresentação de suas divisões e subdivisões."
  },
  {
    "id": "m8-q-81",
    "numero": 81,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Com base nas regras estabelecidas pela Associação Brasileira de Normas Técnicas",
    "item": "A Norma Brasileira 6027 (Informação e documentação — Sumário — Apresentação) determina que, no caso de mais de um volume de uma obra, deve ser incluído o sumário de toda a obra em todos os volumes, de forma que se tenha conhecimento do conteúdo, independentemente do volume consultado.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. De acordo com o item 4.2 da ABNT NBR 6027:2012, quando uma publicação monográfica ou trabalho técnico for editado em mais de um volume físico, deve constar compulsoriamente em cada um dos volumes o sumário completo de toda a obra, permitindo ao leitor ter a visão de conjunto do plano global da obra independentemente do tomo específico que esteja manuseando.",
    "armadilhaBanca": "Assertiva tecnicamente correta e semântica estrita conforme cobrado no concurso FUB/2015.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / ABNT / 2024 (Adaptada)",
      "verificado": true,
      "provaId": "ABNT",
      "ano": 2024,
      "orgao": "ABNT",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1827"
    }
  },
  {
    "id": "m8-q-82",
    "numero": 82,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Tendo como referência as normas técnicas da área de documentação, jul gue os",
    "item": "Conforme a NBR 6032, o título do periódico hipotético “Realidade Econômico -Social” deve ser abreviado da seguinte forma: Real. econ. soc.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. Na ABNT NBR 6032 (Abreviação de títulos de periódicos e publicações seriadas), as palavras abreviadas que integram o título do periódico devem manter suas iniciais em letras maiúsculas (Real. Econ.-Soc.), e não todas em letras minúsculas.",
    "armadilhaBanca": "GRAFIA_INCORRETA: Apresentar a abreviatura do título com todas as iniciais em letras minúsculas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / HU Brasil / 2018 (Adaptada)",
      "verificado": true,
      "provaId": "Ana Adm (EBSERH)/HU Brasil/Biblioteconomia/2018",
      "ano": 2018,
      "orgao": "HU Brasil",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-646346"
    },
    "versao_correta": "Conforme a ABNT NBR 6032, as palavras principais que compõem a abreviatura do título de um periódico conservam as iniciais maiúsculas (Real. Econ.-Soc.)."
  },
  {
    "id": "m8-q-83",
    "numero": 83,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "O formato de margens recomendado pela NBR 14724 para trabalhos acadêmicos impressos em anverso (apenas frente) é: margem superior e esquerda de 3 cm; margem inferior e direita de 2 cm.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme a ABNT NBR 14724:2011 (Trabalhos acadêmicos - Apresentação), quando o trabalho for impresso em anverso (apenas frente da folha), as margens padronizadas são: margem superior de 3 cm, margem esquerda de 3 cm (para viabilizar a encadernação sem encobrir texto), margem inferior de 2 cm e margem direita de 2 cm. Quando impresso em anverso e verso, as margens alternam-se.",
    "armadilhaBanca": "Padrão de margens da NBR 14724 para impressão em anverso.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "em anverso (apenas frente) é: margem superior",
    "versao_errada": "O formato de margens recomendado pela NBR 14724 para trabalhos acadêmicos impressos indevidamente em anverso (apenas frente) é: margem superior e esquerda de 3 cm; margem inferior e direita de 2 cm."
  },
  {
    "id": "m8-q-84",
    "numero": 84,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "No Brasil, o ISSN é atribuído e gerenciado pelo Centro Brasileiro do ISSN, sediado no Instituto Brasileiro de Informação em Ciência e Tecnologia (Ibict), sob coordenação da Rede Internacional do ISSN em Paris.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. No Brasil, a gestão do ISSN (International Standard Serial Number) é privativa do Centro Brasileiro do ISSN (CBISSN), órgão integrante do Instituto Brasileiro de Informação em Ciência e Tecnologia (Ibict), vinculado ao MCTI. O CBISSN atua como nó nacional credenciado perante o Centro Internacional do ISSN com sede em Paris para atribuir números e cadastrar publicações periódicas brasileiras.",
    "armadilhaBanca": "Papel do Ibict na gestão nacional do ISSN.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "sediado no Instituto Brasileiro de Informação em",
    "versao_errada": "No Brasil, o ISSN é atribuído e gerenciado pelo Centro Brasileiro do ISSN, indevidamente sediado no instituto brasileiro de informação em Ciência e Tecnologia (Ibict), sob coordenação da Rede Internacional do ISSN em Paris."
  },
  {
    "id": "m8-q-85",
    "numero": 85,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "A ficha catalográfica (ou Catalogação na Publicação — CIP) deve ser impressa no verso da folha de rosto de livros e trabalhos acadêmicos, contendo a descrição bibliográfica elaborada por profissional bibliotecário registrado conforme o Código de Catalogação Anglo-Americano (AACR2) ou RDA.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Prescrição legal e normativa: a ficha catalográfica localiza-se no verso da folha de rosto no terço inferior da página, com elaboração privativa de bibliotecário habilitado. Trata-se de diretriz técnica consolidada indispensável para a prática profissional do bibliotecário e analista da Câmara dos Deputados.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "rosto de livros e trabalhos acadêmicos, contendo",
    "versao_errada": "A ficha catalográfica (ou Catalogação na Publicação — CIP) deve ser impressa no verso da folha de indevidamente rosto de livros e trabalhos acadêmicos, contendo a descrição bibliográfica elaborada por profissional bibliotecário registrado conforme o Código de Catalogação Anglo-Americano (AACR2) ou RDA."
  },
  {
    "id": "m8-q-86",
    "numero": 86,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "Segundo a ABNT NBR 14724:2024, a estrutura de um trabalho acadêmico (tese, dissertação ou TCC) divide-se em três partes fundamentais: elementos pré-textuais, elementos textuais e elementos pós-textuais.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. De acordo com o item 4 da ABNT NBR 14724:2011, a arquitetura formal dos trabalhos acadêmicos estrutura-se na clássica tríade: 1) Elementos pré-textuais (antecedem o corpo do trabalho e auxiliam em sua identificação e localização, culminando no sumário); 2) Elementos textuais (compreendem a Introdução, o Desenvolvimento e a Conclusão da pesquisa); e 3) Elementos pós-textuais (sucedem o texto, iniciando-se pelas referências obrigatórias).",
    "armadilhaBanca": "Estrutura tripartite da NBR 14724.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "acadêmico (tese, dissertação ou TCC) divide-se em",
    "versao_errada": "Segundo a ABNT NBR 14724:2024, a estrutura de um trabalho indevidamente acadêmico (tese, dissertação ou tcc) divide-se em três partes fundamentais: elementos pré-textuais, elementos textuais e elementos pós-textuais."
  },
  {
    "id": "m8-q-87",
    "numero": 87,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Julgue os itens que se seguem, relativos aos objetivos e às aplicações das normas",
    "item": "A NBR 6032:1989, para abreviação de títulos de periódicos e publicações seriadas, visa simplificar as referências desses documentos. Recomenda, no entanto, que, no caso de bibliografias, essas devem ser precedidas de lista com os respectivos títulos completos dos periódicos e p u- blicações seriadas, local de publicação e, opcionalmente, editores e endereços.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. O item está correto ao enunciar com exatidão que \"caso de bibliografias, essas devem ser precedidas\" expressa o preceito técnico aplicável à matéria. O conteúdo encontra-se plenamente alinhado às diretrizes regulamentares e aos manuais de referência adotados no concurso da Câmara dos Deputados para a área de Biblioteconomia.",
    "armadilhaBanca": "Técnica: Reconhecimento de Preceito Canônico. A assertiva mantém a fidelidade conceitual à teoria de referência, sem inserir modificadores abusivos ou restrições indevidas.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2010 / 2010 (Adaptada)",
      "verificado": true,
      "provaId": "TRT21/2010",
      "ano": 2010,
      "orgao": "2010",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1817"
    }
  },
  {
    "id": "m8-q-88",
    "numero": 88,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Tendo como referência as normas técnicas da área de documentação, jul gue os",
    "item": "A palavra “dado” pode ser abreviada, segundo a norma da NBR 6032, da seguinte forma: dd.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. Conforme os preceitos da NBR 6032, palavras curtas (monossílabas e dissílabas simples) não são passíveis de abreviação, a fim de resguardar a clareza e evitar confusões conceituais. A forma \"dd.\" não constitui abreviatura da palavra \"dado\".",
    "armadilhaBanca": "ABREVIATURA_INVENTADA: Inventar abreviação indevida para palavra de quatro letras que não se abrevia na NBR 6032.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / HU Brasil / 2018 (Adaptada)",
      "verificado": true,
      "provaId": "Ana Adm (EBSERH)/HU Brasil/Biblioteconomia/2018",
      "ano": 2018,
      "orgao": "HU Brasil",
      "banca": "Cebraspe",
      "questaoOriginalId": "TecConcursos-646347"
    },
    "versao_correta": "Nos termos da ABNT NBR 6032, palavras curtas como \"dado\" não devem ser abreviadas para evitar ambiguidade e prejuízo à clareza da identificação bibliográfica."
  },
  {
    "id": "m8-q-89",
    "numero": 89,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "A respeito das normas brasileiras (NBR) estabelecidas pela Associação Brasileira de",
    "item": "A ABNT NBR 6024 regulamenta procedimentos de sumários.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. A ABNT NBR 6024 especifica o sistema de numeração progressiva das seções de um documento. A norma responsável pela apresentação de sumários é a ABNT NBR 6027.",
    "armadilhaBanca": "TROCA_DE_NORMA: Inverter as atribuições das normas ABNT NBR 6024 e ABNT NBR 6027.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2017 / 2017 (Adaptada)",
      "verificado": true,
      "provaId": "ABIN/2017",
      "ano": 2017,
      "orgao": "2017",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1814"
    },
    "versao_correta": "A ABNT NBR 6024 regulamenta a numeração progressiva das seções de um documento escrito, cabendo à ABNT NBR 6027 a padronização de sumários."
  },
  {
    "id": "m8-q-90",
    "numero": 90,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "A folha de rosto de um trabalho acadêmico não deve ser contada na paginação, devendo a numeração iniciar do número 1 impresso diretamente sobre a capa dura externa.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Conforme a regra de paginação da ABNT NBR 14724:2011, a capa externa NÃO é contada na paginação do trabalho. A contagem sequencial de folhas inicia-se obrigatoriamente a partir da folha de rosto (folha 1), prosseguindo sequencialmente por todos os elementos pré-textuais, mas o número arábico da página só passa a ser visualmente impresso a partir da primeira folha da parte textual (Introdução).",
    "armadilhaBanca": "INVERSAO_CANONICA: Contar a capa e desconsiderar a folha de rosto na contagem.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A folha de rosto é o primeiro elemento pré-textual contado na paginação do trabalho acadêmico (folha 1), embora o número da página só deva ser impresso visivelmente a partir da primeira folha da parte textual (Introdução)."
  },
  {
    "id": "m8-q-91",
    "numero": 91,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "Na NBR 14724:2024, a capa e a folha de aprovação são classificadas formalmente como elementos pós-textuais de inserção facultativa após a bibliografia.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Capa e folha de aprovação são elementos PRÉ-TEXTUAIS. A capa é elemento pré-textual obrigatório externo, e a folha de aprovação é elemento pré-textual obrigatório interno em trabalhos acadêmicos defendidos perante banca. A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão de Regras de Estrutura e Paginação. O distrator explora a diferença entre contagem de folhas (iniciada na folha de rosto) e impressão da numeração (iniciada na parte textual).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Conforme a ABNT NBR 14724, a capa é um elemento pré-textual externo e a folha de aprovação é um elemento pré-textual interno obrigatório, não constituindo elementos pós-textuais."
  },
  {
    "id": "m8-q-92",
    "numero": 92,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "O padrão internacional ISBN (International Standard Book Number) é um identificador numérico de 13 dígitos subdividido em cinco partes (prefixo EAN, grupo registrante/país, elemento do editor, elemento do título e dígito verificador), destinado à identificação unívoca de monografias e livros.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme a norma ISO 2108 e as diretrizes da Câmara Brasileira do Livro (CBL, que assumiu a gestão da Agência Brasileira do ISBN), o ISBN-13 compõe-se de 13 algarismos distribuídos em cinco blocos hifenizados: 1) Prefixo EAN ('978' ou '979'); 2) Identificador de grupo/país ('65' ou '85' para o Brasil); 3) Elemento do editor; 4) Elemento do título/item; e 5) Dígito verificador matemático único.",
    "armadilhaBanca": "Estrutura de 13 dígitos do ISBN.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "cinco partes (prefixo EAN, grupo registrante/país, elemento",
    "versao_errada": "O padrão internacional ISBN (International Standard Book Number) é um identificador numérico de 13 dígitos subdividido em indevidamente cinco partes (prefixo ean, grupo registrante/país, elemento do editor, elemento do título e dígito verificador), destinado à identificação unívoca de monografias e livros."
  },
  {
    "id": "m8-q-93",
    "numero": 93,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "O ISBN e o ISSN são códigos idênticos destinados ao mesmo tipo de publicação, sendo o ISBN atribuído a revistas diárias e o ISSN a enciclopédias em volume único.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. ISBN destina-se a MONOGRAFIAS (livros, teses, relatórios em volume único ou conjunto finito de volumes); ISSN (International Standard Serial Number, 8 dígitos) destina-se a PUBLICAÇÕES SERIADAS (revistas, periódicos científicos, jornais, anais de congressos recorrentes).",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "O código ISBN é destinado à identificação exclusiva de publicações monográficas (livros, coletâneas), ao passo que o ISSN destina-se à identificação internacional padronizada de publicações seriadas contínuas (revistas e periódicos)."
  },
  {
    "id": "m8-q-94",
    "numero": 94,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Julgue os itens que se seguem, relativos aos objetivos e às aplicações das normas",
    "item": "A NBR 6027:2003, que trata da elaboração de sumários, quando aplicada a documentos escr i- tos em mais de um idioma, deve apresentar, em um único sumário, as traduções dos títulos após os títulos originais, separados por barra ou travessão.",
    "gabarito": "E",
    "justificativa": "Gabarito oficial ERRADO. Em publicações plurilíngues, a ABNT NBR 6027 preconiza a criação de um sumário específico para cada idioma, figurando em páginas separadas consecutivas, e não a aglutinação das traduções em uma única folha separadas por barras ou travessões.",
    "armadilhaBanca": "FORMATO_INADEQUADO: Condensar traduções multilíngues em uma única página de sumário.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2010 / 2010 (Adaptada)",
      "verificado": true,
      "provaId": "TRT21/2010",
      "ano": 2010,
      "orgao": "2010",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1818"
    },
    "versao_correta": "Segundo a ABNT NBR 6027, quando o documento for publicado em mais de um idioma, recomenda-se a elaboração de sumários separados para cada idioma, apresentados em páginas distintas e sucessivas."
  },
  {
    "id": "m8-q-95",
    "numero": 95,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "Na NBR 14724, os anexos devem ser identificados por algarismos arábicos com cinco casas decimais (ex: Anexo 1.00000), sendo proibido o uso de letras maiúsculas.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. Apêndices e Anexos são identificados por LETRAS MAIÚSCULAS consecutivas, travessão e pelos respectivos títulos (ex: 'ANEXO A – Parecer da Comissão de Constituição e Justiça', 'ANEXO B – Mapa territorial'). A constatação desse desvio conceitual é fundamental para a correta resolução do item pela jurisprudência técnica da banca.",
    "armadilhaBanca": "Técnica: Inversão Conceitual Canônica. A banca troca deliberadamente a autoria do apêndice (elaborado pelo próprio autor) pela do anexo (documento pré-existente de terceiros).",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "Na ABNT NBR 14724, apêndices e anexos são identificados por letras maiúsculas consecutivas seguidas de travessão e do respectivo título (ex.: ANEXO A – Documento comprobatório)."
  },
  {
    "id": "m8-q-96",
    "numero": 96,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "A distinção formal entre 'Apêndice' e 'Anexo' reside no fato de que o Apêndice é um documento ou texto elaborado pelo próprio autor da pesquisa para complementar sua argumentação, enquanto o Anexo é um documento não elaborado pelo autor (texto legal, mapa oficial, laudo de terceiro) incorporado para fundamentação.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Na arquitetura pós-textual da ABNT NBR 14724:2011, a distinção ontológica entre apêndice e anexo é rigorosa e cobrada com frequência pelo Cebraspe: 'Apêndice' é o texto ou documento complementar elaborado pelo PRÓPRIO autor da pesquisa para enriquecer sua fundamentação; ao passo que 'Anexo' é o documento ou texto NÃO elaborado pelo autor (ex.: leis, mapas de terceiros, laudos de órgãos oficiais) incorporado como suporte probatório.",
    "armadilhaBanca": "Diferença canônica entre Apêndice e Anexo na ABNT.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "elaborado pelo próprio autor",
    "versao_errada": "A distinção formal entre 'Apêndice' e 'Anexo' reside no fato de que o Apêndice é um documento ou texto elaborado por terceiros da pesquisa para complementar sua argumentação, enquanto o Anexo é um documento não elaborado pelo autor (texto legal, mapa oficial, laudo de terceiro) incorporado para fundamentação."
  },
  {
    "id": "m8-q-97",
    "numero": 97,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "A Lei do Depósito Legal (Lei nº 10.994/2004) veda que editoras e órgãos públicos enviem exemplares de suas publicações à Biblioteca Nacional, sob pena de multa por excesso de doação.",
    "gabarito": "E",
    "justificativa": "Gabarito ERRADO. A Lei nº 10.994/2004 OBRIGA o envio de ao menos um exemplar de toda publicação produzida no território nacional à Biblioteca Nacional, com a finalidade de assegurar a preservação da memória bibliográfica e a elaboração da Bibliografia Brasileira.",
    "armadilhaBanca": "Técnica: Inversão Conceitual de Conceito Vizinho. O examinador altera o núcleo da assertiva no trecho decisivo demarcado pelo gatilho, atribuindo predicados incorretos à sistemática normativa.",
    "dificuldade": "facil",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "versao_correta": "A Lei do Depósito Legal (Lei nº 10.994/2004) torna obrigatório o envio de exemplares de toda publicação impressa ou gravada no Brasil à Biblioteca Nacional para assegurar a preservação da memória bibliográfica nacional."
  },
  {
    "id": "m8-q-98",
    "numero": 98,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "À luz do disposto nas normas técnicas brasileiras para documentação da Associação",
    "item": "Para a referenciação de jurisprudência, os elementos essenciais a serem considerados são jurisdição e órgão judiciário competente, título (natureza da decisão ou ementa) e número, partes envolvidas (se houver), relator, local, data e dados da publicação.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 7.11.2 da ABNT NBR 6023:2018 (Documento jurídico - Jurisprudência), constituem elementos essenciais na referência de decisões judiciais: a jurisdição e o órgão judiciário competente (em letras maiúsculas no cabeçalho), o título da decisão (tipo de recurso, acórdão ou ementa) e respectivo número, a indicação das partes litigantes (se houver), a menção do relator com a abreviatura 'Relator:', a localidade, a data do julgamento e os dados da publicação oficial no Diário da Justiça.",
    "armadilhaBanca": "Assertiva tecnicamente correta e semântica estrita conforme cobrado no concurso ECT/2011.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "adaptada",
      "descricao": "Cebraspe / 2011 / 2011 (Adaptada)",
      "verificado": true,
      "provaId": "ECT/2011",
      "ano": 2011,
      "orgao": "2011",
      "banca": "Cebraspe",
      "origemAcervoLocal": "cespe-cad-1825"
    }
  },
  {
    "id": "m8-q-99",
    "numero": 99,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "No tocante à apresentação de trabalhos acadêmicos (ABNT NBR 14724:2024), à estrutura de monografias, à ficha catalográfica e aos identificadores do ecossistema editorial (ISBN, ISSN, DOI), julgue o item a seguir.",
    "item": "Quanto à paginação na NBR 14724:2024, todas as folhas do trabalho acadêmico, a partir da folha de rosto, devem ser contadas sequencialmente, mas a numeração só é visualmente impressa a partir da primeira folha da parte textual (Introdução), em algarismos arábicos, no canto superior direito da folha a 2 cm da borda.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Aplicação estrita da regra de paginação da ABNT NBR 14724:2011 (item 5.3): todas as folhas do trabalho acadêmico são contadas sequencialmente a partir da folha de rosto (a capa não é contada nem numerada), porém a numeração só é visualmente impressa a partir da primeira folha da parte textual (Introdução), devendo figurar no canto superior direito da página, a 2 cm da borda superior e direita.",
    "armadilhaBanca": "Regra de contagem e impressão da paginação na NBR 14724.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "HNC — Inédita Cebraspe (Fase E5 / Simulado M8)",
      "verificado": false
    },
    "gatilho": "a partir da primeira folha da parte textual",
    "versao_errada": "Quanto à paginação na NBR 14724:2024, todas as folhas do trabalho acadêmico, a partir da folha de rosto, devem ser contadas sequencialmente, mas a numeração só é visualmente impressa indevidamente a partir da primeira folha da parte textual (Introdução), em algarismos arábicos, no canto superior direito da folha a 2 cm da borda."
  },
  {
    "id": "m8-q-100",
    "numero": 100,
    "macroModuloId": "M8",
    "submoduloId": "8.4",
    "contexto": "Julgue os itens que se seguem, relativos aos objetivos e às aplicações das normas",
    "item": "A NBR 6034:2004, para apresentação de índice, aplica-se aos índices impressos e automatizados.",
    "gabarito": "C",
    "justificativa": "Gabarito CERTO. Conforme o item 1.2 da ABNT NBR 6034:2004 (Objetivo), a norma padroniza a apresentação de índices em publicações de qualquer natureza, aplicando-se tanto a índices elaborados para suporte impresso tradicional quanto àqueles estruturados em ambientes automatizados e formatos digitais.",
    "armadilhaBanca": "ALCANCE DA NBR 6034: Supor incorretamente que as normas de apresentação da ABNT seriam aplicáveis exclusivamente ao suporte papel.",
    "dificuldade": "media",
    "fonteOriginal": {
      "tipo": "inedita",
      "descricao": "ABNT NBR 6034:2004, item 1.2",
      "verificado": false,
      "origemAcervoLocal": "cespe-cad-1820",
      "declaracaoLegada": "Cebraspe / 2010 / 2010"
    }
  }
];

export const questoesM8 = simuladoNormalizacao100Q;

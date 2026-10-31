import type { ModuloFilho } from '../../../domain/types';

export const submodulo84: ModuloFilho = {
  id: 'sub-8-4',
  numero: '8.4',
  editalRef: 'Bloco D - Item 5.5',
  preRequisitos: ["sub-8-3"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-5-2",
          "titulo": "Produtos e Serviços Informacionais",
          "motivo": "Elaboração de resumos indicativos, informativos e estados da arte."
      }
  ],
  titulo: 'ABNT NBR 6028:2021 (Resumos), NBR 6027:2012 (Sumários) e NBR 6022:2018 (Artigos)',
  antesDeLer: [
  {
    "termo": "Resumo informativo",
    "definicao": "Apresenta informação substancial do documento conforme conteúdo e finalidade.",
    "exemploBiblioteca": "Informar resultado não certifica sua validade nem elimina toda leitura crítica."
  },
  {
    "termo": "Sumário e índice",
    "definicao": "Sumário segue divisões do documento; índice remete a informações por critério escolhido.",
    "exemploBiblioteca": "Consultar um nome em vários capítulos é tarefa diferente de ver a estrutura geral."
  }
],
  descricaoCurta: "Distinguir resumo indicativo/informativo e análise crítica. Comparar sumário e índice por função e ordem. Aplicar a estrutura do artigo da edição de 2018. Relacionar DOI, resolução e manutenção.",
  tempoEstimadoMinutos: 19,
  autoresChave: [
  "ABNT NBR 6028:2021 — Resumo, resenha e recensão",
  "ABNT NBR 6027:2012 — Sumário",
  "ABNT NBR 6022:2018 — Artigo em publicação periódica",
  "DOI Foundation — What is a DOI?"
],
  alertasCebraspe: [
  "A regra usa iniciais minúsculas, ressalvados nomes próprios e científicos.",
  "O texto recomenda/aconselha terceira pessoa; não contém essa obrigação absoluta conjunta na forma afirmada.",
  "Suficiência informativa para certas necessidades não certifica o estudo nem dispensa toda leitura crítica."
],
  teoriaDensaMarkdown: "### Resumo, resenha e recensão na NBR 6028:2021\n\n**Resumo** apresenta concisamente pontos relevantes de documento. A edição de 2021 distingue resumos **indicativo** e **informativo**, e trata **resenha e recensão** separadamente. Não se deve transportar como classificação literal atual a antiga lista de três resumos que chamava resenha de “resumo crítico”.\n\nNo **indicativo**, destacam-se pontos principais sem necessariamente detalhar resultados; a consulta ao original continua necessária para compreensão do conteúdo. No **informativo**, a apresentação inclui finalidade, metodologia, resultados e conclusões com informação suficiente para certas necessidades. A definição não promete dispensar leitura crítica, checagem de dados ou consulta ao original para qualquer finalidade. Resumo não é substituto universal da obra.\n\nA redação do resumo deve usar frases concisas num único parágrafo, sem enumeração de tópicos. Para documento técnico/científico, recomenda-se o informativo. **Convém usar terceira pessoa**: não converta essa recomendação em obrigação absoluta de voz ativa e terceira pessoa do singular, nem reproduza regra de outra edição sem delimitação. O tipo e a extensão dependem do tratamento no documento original.\n\nO resumo apresentado separadamente deve ser precedido da referência; no próprio documento, a referência é opcional nas condições da norma. **Palavras-chave** vêm abaixo, após “Palavras-chave:”, separadas por ponto e vírgula e encerradas por ponto. A inicial é **minúscula**, com exceções para substantivos próprios e nomes científicos. Exemplo autoral: `Palavras-chave: biblioteca parlamentar; recuperação da informação; Brasil.`\n\nAs faixas de extensão são recomendações: convém 150–500 palavras para trabalhos acadêmicos e relatórios técnicos/científicos; 100–250 para artigos de periódicos; 50–100 para os demais documentos não contemplados. “Convém” não equivale a uma sanção automática por qualquer palavra fora do intervalo; periódicos e instituições podem ter exigências adicionais próprias.\n\n**Resenha e recensão** analisam/descrevem aspectos relevantes do documento ou objeto, em frases concisas sem tópicos. Não estão sujeitas ao limite de palavras da norma; são elaboradas por outra pessoa que não o autor do objeto. Quando publicadas separadamente, são precedidas da referência.\n\n**Exemplo de distinção:** “O relatório aborda a política de preservação e suas etapas” é indicativo. Um texto que informa objetivo, procedimento, resultado e conclusão oferece caráter informativo. Acrescentar avaliação fundamentada da adequação do método corresponde a outra operação, que não pode ser ocultada como simples transcrição neutra do resumo.\n\n**Aplicação e recuperação:** Um resumo de tese apresenta método, amostra, resultado e conclusão. Isso não certifica validade do estudo. Para julgar uma hipótese, é necessário consultar evidências. Outro texto só enumera temas: não deve ser chamado informativo só por ser comprido. Um resumo de duzentas palavras pode omitir resultado decisivo; extensão não mede suficiência sozinha.\n\n### A ABNT NBR 6027:2012 (Sumário) vs. NBR 6034:2004 (Índice)\n\nA distinção deve considerar função, ordenação e posição no gênero documental:\n\n| Critério Comparativo | Sumário (ABNT NBR 6027:2012) | Índice (ABNT NBR 6034:2004) |\n| :--- | :--- | :--- |\n| **Definição Canônica** | Enumeração das divisões, seções e capítulos **na mesma ordem física de ocorrência no texto**. | Relação detalhada de termos, nomes ou assuntos **ordenada alfabeticamente ou sistematicamente**. |\n| **Localização no Trabalho** | Elemento **pré-textual obrigatório** (o último dos pré-textuais). | Elemento **pós-textual opcional** (localizado no final da obra). |\n| **Finalidade Primária** | Fornecer uma visão panorâmica linear da estrutura lógica da obra. | Permitir a rápida localização pontual de termos e assuntos específicos no texto. |\n| **O que NÃO deve conter** | **Os elementos pré-textuais que o antecedem** (resumos, dedicatória, listas) NÃO constam no sumário. | não precisa seguir a sequência física de capítulos; ordena entradas pelo critério adotado. |\n\n**Aplicação e recuperação:** O sumário acompanha divisões na ordem do documento; o índice remete a conteúdos por critério escolhido. Trocar o título de um pelo outro não muda a função. Se a publicação tiver pretextuais, não os inclua automaticamente no sumário. A posição e a obrigatoriedade devem ser aplicadas ao gênero e à norma pertinente, não a todo arquivo digital existente.\n\n### A ABNT NBR 6022:2018: Artigo em Publicação Periódica\n\nA norma disciplina a estrutura formal de artigos científicos e técnicos publicados em revistas:\n**Pré-textuais:** título/subtítulo na língua do texto; título em outro idioma é opcional e fica logo abaixo. Nome do autor é apresentado de forma direta, com currículo sucinto, vínculo e contato nos termos da norma; a apresentação desses dados em nota é recomendada. Resumo segue NBR 6028, e o de outro idioma, se houver, sucede o resumo no idioma do documento. Datas de submissão e aprovação integram os elementos próprios. Identificação/disponibilidade pode incluir endereço, DOI, suporte e outras informações.\n\n**Textuais:** introdução, desenvolvimento e considerações finais, com títulos cuja nomenclatura pode ser escolhida segundo o trabalho. O conteúdo deve corresponder aos objetivos e ao método; não é obrigatório chamar toda última seção exatamente “Conclusão”.\n\n**Pós-textuais:** referências, glossário, apêndice, anexo e agradecimentos, respeitando sua aplicabilidade e a ordem da norma. Não se coloca automaticamente título/resumo estrangeiro no pós-textual copiando a estrutura de edição anterior.\n\n**Caso:** um editor localiza o resumo em inglês apenas depois das referências porque seu modelo antigo fazia assim. Para aplicar a edição de 2018, é necessário conferir a estrutura atual, em vez de presumir que toda orientação antiga permanece igual. Diretrizes específicas do periódico também devem ser verificadas e identificadas como tal.\n\n**Aplicação e recuperação:** Um artigo traz título estrangeiro logo abaixo do título original e resumo estrangeiro após o resumo da língua do texto. Isso não viola a estrutura de 2018 por esses elementos estarem no início. Não julgue edição atual com tabela retirada da norma antiga. Confira ainda datas e identificação, que não se tornam pós-textuais por parecerem metadados administrativos.\n\n### O Identificador de Objeto Digital (DOI - ISO 26324)\n\nO **Digital Object Identifier (DOI)**, administrado pela *International DOI Foundation* (IDF) e regido pela norma internacional **ISO 26324**, é o padrão global para citação permanente de objetos intelectuais na Web:\n\n* **Mecanismo Operacional e Resolução:**\n  * Foi concebido para identificação persistente e resolução. A ligação `https://doi.org/` encaminha conforme o registro mantido; persistência exige atualização e governança, não impede toda falha de link por si. DOI não deve ser chamado automaticamente de URN apenas por ser persistente.\n* **A Sintaxe Padronizada do DOI:**\n  O identificador é alfanumérico e divide-se em duas partes estritas separadas por uma **barra oblíqua (`/`)**:\n\n$\\underbrace{10.1000}_{\\text{Prefixo}} \\; / \\; \\underbrace{182}_{\\text{Sufixo}}$\n\n1. **Prefixo:** Inicia obrigatoriamente pelos caracteres numéricos `10.`, seguidos pelo código do registrante no sistema pertinente; agência de registro e registrante não são necessariamente a mesma organização.\n2. **Sufixo:** Sequência atribuída segundo as regras do sistema/registrante; não é necessariamente uma descrição inteligível ou prova da qualidade do objeto. O exemplo 10.1000/182 é apresentado pela DOI Foundation. Objetos identificados podem ser digitais, físicos ou abstratos, não apenas arquivos PDF.\n\n**Aplicação e recuperação:** O endereço da revista muda. Manter o DOI e atualizar seu destino ajuda a preservar resolução; deixar o destino desatualizado pode produzir falha. Ter DOI não significa acesso aberto, revisão por pares ou verdade científica. Um objeto pode exigir autorização de acesso mesmo que seu identificador seja publicamente resolúvel.",
  teoriaDidaticaMarkdown: "### Revisão: gênero e versão determinam a estrutura\n\n6028:2021 distingue resumo indicativo/informativo e trata resenha/recensão separadamente. Resumo: parágrafo único; terceira pessoa e faixas de palavras são orientações com força própria. Palavras-chave: minúsculas, exceto nomes próprios/científicos, separação por ponto e vírgula. Sumário segue divisões; índice dá acesso pontual. No artigo da 6022:2018, resumo estrangeiro, se houver, sucede o do idioma do documento no pré-textual. DOI tem prefixo/sufixo e resolução mantida; não prova acesso aberto, revisão por pares ou verdade.\n",
  checkpoints: [
  {
    "id": "cp-8-4-1",
    "pergunta": "Micro-Checkpoint 1: Resumo Informativo vs. Indicativo",
    "item": "De acordo com a ABNT NBR 6028:2021, o resumo informativo tem por finalidade apenas apontar os tópicos gerais de um trabalho sem discorrer sobre metodologia e resultados, não podendo em hipótese alguma dispensar a leitura do documento original.",
    "gabarito": "E",
    "justificativa": "O informativo apresenta finalidade, método, resultados e conclusões conforme o conteúdo. Não se limita a listar tópicos; tampouco dispensa consulta ao original para toda finalidade crítica.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais.",
    "versao_correta": "O informativo reúne informação substancial do documento; o indicativo aponta seus principais pontos."
  },
  {
    "id": "cp-8-4-2",
    "pergunta": "Micro-Checkpoint 2: Diferença entre Sumário e Índice",
    "item": "O sumário enumera as divisões na ordem em que aparecem no documento; o índice organiza entradas segundo um critério, como alfabético ou sistemático, para remeter a informações.",
    "gabarito": "C",
    "justificativa": "Ordem sequencial do documento não é necessariamente ordem cronológica dos acontecimentos relatados. Índice e sumário têm funções distintas.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais."
  },
  {
    "id": "cp-8-4-3",
    "pergunta": "Micro-Checkpoint 3: Estrutura do Identificador de Objeto Digital (DOI)",
    "item": "Um DOI (Digital Object Identifier) possui prefixo e sufixo separados por barra: o prefixo é atribuído a um registrante no sistema, e o sufixo, definido sob sua responsabilidade, identifica o objeto no âmbito desse prefixo.",
    "gabarito": "C",
    "justificativa": "O nome DOI completo combina prefixo e sufixo. O prefixo identifica o registrante, que pode ter mais de um prefixo; o sufixo não precisa carregar informação legível sobre o conteúdo. Identificação e resolução não certificam qualidade, verdade ou acesso aberto.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais."
  },
  {
    "id": "rt-8-4-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na NBR 6028:2021, todas as palavras-chave devem começar por maiúscula, inclusive termos comuns.",
    "gabarito": "E",
    "justificativa": "A regra usa iniciais minúsculas, ressalvados nomes próprios e científicos.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais.",
    "editalRef": "Bloco D - Item 5.5",
    "habilidade": "aplicar",
    "versao_correta": "Palavras-chave usam iniciais minúsculas, com as exceções normativas."
  },
  {
    "id": "rt-8-4-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A edição de 2021 impõe terceira pessoa do singular e voz ativa como obrigação absoluta em todo resumo.",
    "gabarito": "E",
    "justificativa": "O texto recomenda/aconselha terceira pessoa; não contém essa obrigação absoluta conjunta na forma afirmada.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais.",
    "editalRef": "Bloco D - Item 5.5",
    "habilidade": "aplicar",
    "versao_correta": "Convém usar terceira pessoa, sem converter a orientação em obrigação absoluta inventada."
  },
  {
    "id": "rt-8-4-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um resumo informativo torna desnecessária a consulta ao original para qualquer avaliação metodológica ou checagem factual.",
    "gabarito": "E",
    "justificativa": "Suficiência informativa para certas necessidades não certifica o estudo nem dispensa toda leitura crítica.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais.",
    "editalRef": "Bloco D - Item 5.5",
    "habilidade": "aplicar",
    "versao_correta": "A necessidade de consultar o original depende da finalidade; resumo não substitui toda avaliação."
  },
  {
    "id": "rt-8-4-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Na NBR 6022:2018, o resumo em outro idioma, se houver, sucede o resumo no idioma do documento.",
    "gabarito": "C",
    "justificativa": "A regra está nos elementos pré-textuais; não se copia automaticamente a antiga posição pós-textual.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais.",
    "editalRef": "Bloco D - Item 5.5",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-8-4-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Um DOI resolúvel garante que o objeto está em acesso aberto e que seus resultados são corretos.",
    "gabarito": "E",
    "justificativa": "Resolução, autorização de acesso e qualidade científica são propriedades distintas.",
    "fonte": "ABNT NBR 6028:2021, seções 2–4; NBR 6027:2012; NBR 6022:2018, seções 4–5; DOI Foundation, What is a DOI?; exemplos autorais.",
    "editalRef": "Bloco D - Item 5.5",
    "habilidade": "aplicar",
    "versao_correta": "DOI identifica e apoia resolução; não certifica acesso aberto ou verdade."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-8-4-fonte-6028",
      "nome": "ABNT NBR 6028:2021 — Resumo, resenha e recensão",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 6028:2021 — Resumo, resenha e recensão",
      "ideiaChave": "Tipos, redação, palavras-chave e extensão; PDF do acervo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-4-fonte-6027",
      "nome": "ABNT NBR 6027:2012 — Sumário",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 6027:2012 — Sumário",
      "ideiaChave": "Ordenação e posição do sumário; PDF do acervo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-4-fonte-6022",
      "nome": "ABNT NBR 6022:2018 — Artigo em publicação periódica",
      "ano": "Referência de consulta",
      "obraPrincipal": "ABNT NBR 6022:2018 — Artigo em publicação periódica",
      "ideiaChave": "Seções 4–5: estrutura e elementos; PDF do acervo.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-8-4-fonte-doi",
      "nome": "DOI Foundation — What is a DOI?",
      "ano": "Referência de consulta",
      "obraPrincipal": "DOI Foundation — What is a DOI?",
      "ideiaChave": "Objeto identificado, resolução e persistência.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-8-4-3",
      "afirmacao": "Um resumo informativo torna desnecessária a consulta ao original para qualquer avaliação metodológica ou checagem factual.",
      "gabarito": "E",
      "porQue": "Suficiência informativa para certas necessidades não certifica o estudo nem dispensa toda leitura crítica."
    },
    {
      "id": "memoria-rt-8-4-4",
      "afirmacao": "Na NBR 6022:2018, o resumo em outro idioma, se houver, sucede o resumo no idioma do documento.",
      "gabarito": "C",
      "porQue": "A regra está nos elementos pré-textuais; não se copia automaticamente a antiga posição pós-textual."
    },
    {
      "id": "memoria-rt-8-4-5",
      "afirmacao": "Um DOI resolúvel garante que o objeto está em acesso aberto e que seus resultados são corretos.",
      "gabarito": "E",
      "porQue": "Resolução, autorização de acesso e qualidade científica são propriedades distintas."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-8-4-bloco-1",
    "titulo": "Resumo, resenha e recensão na NBR 6028:2021",
    "objetivos": [
      "Distinguir resumo indicativo/informativo e análise crítica."
    ],
    "conteudo": "**Resumo** apresenta concisamente pontos relevantes de documento. A edição de 2021 distingue resumos **indicativo** e **informativo**, e trata **resenha e recensão** separadamente. Não se deve transportar como classificação literal atual a antiga lista de três resumos que chamava resenha de “resumo crítico”.\n\nNo **indicativo**, destacam-se pontos principais sem necessariamente detalhar resultados; a consulta ao original continua necessária para compreensão do conteúdo. No **informativo**, a apresentação inclui finalidade, metodologia, resultados e conclusões com informação suficiente para certas necessidades. A definição não promete dispensar leitura crítica, checagem de dados ou consulta ao original para qualquer finalidade. Resumo não é substituto universal da obra.\n\nA redação do resumo deve usar frases concisas num único parágrafo, sem enumeração de tópicos. Para documento técnico/científico, recomenda-se o informativo. **Convém usar terceira pessoa**: não converta essa recomendação em obrigação absoluta de voz ativa e terceira pessoa do singular, nem reproduza regra de outra edição sem delimitação. O tipo e a extensão dependem do tratamento no documento original.\n\nO resumo apresentado separadamente deve ser precedido da referência; no próprio documento, a referência é opcional nas condições da norma. **Palavras-chave** vêm abaixo, após “Palavras-chave:”, separadas por ponto e vírgula e encerradas por ponto. A inicial é **minúscula**, com exceções para substantivos próprios e nomes científicos. Exemplo autoral: `Palavras-chave: biblioteca parlamentar; recuperação da informação; Brasil.`\n\nAs faixas de extensão são recomendações: convém 150–500 palavras para trabalhos acadêmicos e relatórios técnicos/científicos; 100–250 para artigos de periódicos; 50–100 para os demais documentos não contemplados. “Convém” não equivale a uma sanção automática por qualquer palavra fora do intervalo; periódicos e instituições podem ter exigências adicionais próprias.\n\n**Resenha e recensão** analisam/descrevem aspectos relevantes do documento ou objeto, em frases concisas sem tópicos. Não estão sujeitas ao limite de palavras da norma; são elaboradas por outra pessoa que não o autor do objeto. Quando publicadas separadamente, são precedidas da referência.\n\n**Exemplo de distinção:** “O relatório aborda a política de preservação e suas etapas” é indicativo. Um texto que informa objetivo, procedimento, resultado e conclusão oferece caráter informativo. Acrescentar avaliação fundamentada da adequação do método corresponde a outra operação, que não pode ser ocultada como simples transcrição neutra do resumo.\n\n**Aplicação e recuperação:** Um resumo de tese apresenta método, amostra, resultado e conclusão. Isso não certifica validade do estudo. Para julgar uma hipótese, é necessário consultar evidências. Outro texto só enumera temas: não deve ser chamado informativo só por ser comprido. Um resumo de duzentas palavras pode omitir resultado decisivo; extensão não mede suficiência sozinha.",
    "checkpointIds": [
      "cp-8-4-1",
      "rt-8-4-1",
      "rt-8-4-2",
      "rt-8-4-3"
    ]
  },
  {
    "id": "sub-8-4-bloco-2",
    "titulo": "A ABNT NBR 6027:2012 (Sumário) vs. NBR 6034:2004 (Índice)",
    "objetivos": [
      "Comparar sumário e índice por função e ordem."
    ],
    "conteudo": "A distinção deve considerar função, ordenação e posição no gênero documental:\n\n| Critério Comparativo | Sumário (ABNT NBR 6027:2012) | Índice (ABNT NBR 6034:2004) |\n| :--- | :--- | :--- |\n| **Definição Canônica** | Enumeração das divisões, seções e capítulos **na mesma ordem física de ocorrência no texto**. | Relação detalhada de termos, nomes ou assuntos **ordenada alfabeticamente ou sistematicamente**. |\n| **Localização no Trabalho** | Elemento **pré-textual obrigatório** (o último dos pré-textuais). | Elemento **pós-textual opcional** (localizado no final da obra). |\n| **Finalidade Primária** | Fornecer uma visão panorâmica linear da estrutura lógica da obra. | Permitir a rápida localização pontual de termos e assuntos específicos no texto. |\n| **O que NÃO deve conter** | **Os elementos pré-textuais que o antecedem** (resumos, dedicatória, listas) NÃO constam no sumário. | não precisa seguir a sequência física de capítulos; ordena entradas pelo critério adotado. |\n\n**Aplicação e recuperação:** O sumário acompanha divisões na ordem do documento; o índice remete a conteúdos por critério escolhido. Trocar o título de um pelo outro não muda a função. Se a publicação tiver pretextuais, não os inclua automaticamente no sumário. A posição e a obrigatoriedade devem ser aplicadas ao gênero e à norma pertinente, não a todo arquivo digital existente.",
    "checkpointIds": [
      "cp-8-4-2"
    ]
  },
  {
    "id": "sub-8-4-bloco-3",
    "titulo": "A ABNT NBR 6022:2018: Artigo em Publicação Periódica",
    "objetivos": [
      "Aplicar a estrutura do artigo da edição de 2018."
    ],
    "conteudo": "A norma disciplina a estrutura formal de artigos científicos e técnicos publicados em revistas:\n**Pré-textuais:** título/subtítulo na língua do texto; título em outro idioma é opcional e fica logo abaixo. Nome do autor é apresentado de forma direta, com currículo sucinto, vínculo e contato nos termos da norma; a apresentação desses dados em nota é recomendada. Resumo segue NBR 6028, e o de outro idioma, se houver, sucede o resumo no idioma do documento. Datas de submissão e aprovação integram os elementos próprios. Identificação/disponibilidade pode incluir endereço, DOI, suporte e outras informações.\n\n**Textuais:** introdução, desenvolvimento e considerações finais, com títulos cuja nomenclatura pode ser escolhida segundo o trabalho. O conteúdo deve corresponder aos objetivos e ao método; não é obrigatório chamar toda última seção exatamente “Conclusão”.\n\n**Pós-textuais:** referências, glossário, apêndice, anexo e agradecimentos, respeitando sua aplicabilidade e a ordem da norma. Não se coloca automaticamente título/resumo estrangeiro no pós-textual copiando a estrutura de edição anterior.\n\n**Caso:** um editor localiza o resumo em inglês apenas depois das referências porque seu modelo antigo fazia assim. Para aplicar a edição de 2018, é necessário conferir a estrutura atual, em vez de presumir que toda orientação antiga permanece igual. Diretrizes específicas do periódico também devem ser verificadas e identificadas como tal.\n\n**Aplicação e recuperação:** Um artigo traz título estrangeiro logo abaixo do título original e resumo estrangeiro após o resumo da língua do texto. Isso não viola a estrutura de 2018 por esses elementos estarem no início. Não julgue edição atual com tabela retirada da norma antiga. Confira ainda datas e identificação, que não se tornam pós-textuais por parecerem metadados administrativos.",
    "checkpointIds": [
      "rt-8-4-4"
    ]
  },
  {
    "id": "sub-8-4-bloco-4",
    "titulo": "O Identificador de Objeto Digital (DOI - ISO 26324)",
    "objetivos": [
      "Relacionar DOI, resolução e manutenção."
    ],
    "conteudo": "O **Digital Object Identifier (DOI)**, administrado pela *International DOI Foundation* (IDF) e regido pela norma internacional **ISO 26324**, é o padrão global para citação permanente de objetos intelectuais na Web:\n\n* **Mecanismo Operacional e Resolução:**\n  * Foi concebido para identificação persistente e resolução. A ligação `https://doi.org/` encaminha conforme o registro mantido; persistência exige atualização e governança, não impede toda falha de link por si. DOI não deve ser chamado automaticamente de URN apenas por ser persistente.\n* **A Sintaxe Padronizada do DOI:**\n  O identificador é alfanumérico e divide-se em duas partes estritas separadas por uma **barra oblíqua (`/`)**:\n\n$\\underbrace{10.1000}_{\\text{Prefixo}} \\; / \\; \\underbrace{182}_{\\text{Sufixo}}$\n\n1. **Prefixo:** Inicia obrigatoriamente pelos caracteres numéricos `10.`, seguidos pelo código do registrante no sistema pertinente; agência de registro e registrante não são necessariamente a mesma organização.\n2. **Sufixo:** Sequência atribuída segundo as regras do sistema/registrante; não é necessariamente uma descrição inteligível ou prova da qualidade do objeto. O exemplo 10.1000/182 é apresentado pela DOI Foundation. Objetos identificados podem ser digitais, físicos ou abstratos, não apenas arquivos PDF.\n\n**Aplicação e recuperação:** O endereço da revista muda. Manter o DOI e atualizar seu destino ajuda a preservar resolução; deixar o destino desatualizado pode produzir falha. Ter DOI não significa acesso aberto, revisão por pares ou verdade científica. Um objeto pode exigir autorização de acesso mesmo que seu identificador seja publicamente resolúvel.",
    "checkpointIds": [
      "cp-8-4-3",
      "rt-8-4-5"
    ]
  }
],
fontesTeoria: [
  {
    "id": "6028",
    "titulo": "ABNT NBR 6028:2021 — Resumo, resenha e recensão",
    "localizador": "Tipos, redação, palavras-chave e extensão; PDF do acervo."
  },
  {
    "id": "6027",
    "titulo": "ABNT NBR 6027:2012 — Sumário",
    "localizador": "Ordenação e posição do sumário; PDF do acervo."
  },
  {
    "id": "6022",
    "titulo": "ABNT NBR 6022:2018 — Artigo em publicação periódica",
    "localizador": "Seções 4–5: estrutura e elementos; PDF do acervo."
  },
  {
    "id": "doi",
    "titulo": "DOI Foundation — What is a DOI?",
    "localizador": "Objeto identificado, resolução e persistência.",
    "url": "https://www.doi.org/the-identifier/what-is-a-doi/"
  }
],
};

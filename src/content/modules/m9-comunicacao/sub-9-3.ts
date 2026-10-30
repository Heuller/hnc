import type { ModuloFilho } from '../../../domain/types';

export const submodulo93: ModuloFilho = {
  id: 'sub-9-3',
  numero: '9.3',
  editalRef: 'Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9',
  preRequisitos: ["sub-9-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-1-6",
          "titulo": "Governança da Informação e de Dados",
          "motivo": "Direito autoral, limitações dos arts. 46 a 48 e dados abertos governamentais."
      },
      {
          "submoduloId": "sub-11-12",
          "titulo": "Transparência, LAI e LGPD",
          "motivo": "Equilíbrio entre publicidade estatal e tutela da propriedade intelectual."
      }
  ],
  titulo: 'Curadoria Digital, Gestão de Dados de Pesquisa, Direitos Autorais e Creative Commons',
  antesDeLer: [
  {
    "termo": "PGD",
    "definicao": "Plano que documenta responsabilidades, dados, formatos, documentação, acesso, custos e preservação de um projeto.",
    "exemploBiblioteca": "O projeto define quem documenta variáveis, onde deposita arquivos e como controla acesso."
  },
  {
    "termo": "Fixidez",
    "definicao": "Manutenção da sequência de bits em relação a uma referência, sem equivaler a verdade ou autenticidade por si só.",
    "exemploBiblioteca": "Um hash confere os bits em relação à referência, sem comprovar se os valores originais estavam corretos."
  }
],
  descricaoCurta: "Planejar gestão e formatos sem obrigações ou prazos universais. Relacionar ações do DCC com preservação, contexto e acesso. Aplicar objeto, direitos e prazos com condições legais. Distinguir hipóteses legais e referências pertinentes. Interpretar licenças segundo versão e alcance dos direitos. Calcular e limitar a interpretação do JIF.",
  tempoEstimadoMinutos: 32,
  autoresChave: [
  "Digital Curation Centre — Curation Lifecycle Model",
  "Wilkinson et al. — FAIR Guiding Principles",
  "Lei 9.610/1998 — texto atualizado da Câmara",
  "Decreto 10.882/2021",
  "STJ — interpretação das limitações autorais",
  "Creative Commons — FAQ",
  "Clarivate — JCR, Open Access"
],
  alertasCebraspe: [
  "Exigências dependem das normas e chamadas específicas.",
  "O art. 18 dispensa registro como condição de proteção.",
  "O cálculo limita os anos dos itens citados conforme sua janela."
],
  teoriaDensaMarkdown: "### Da e-Science à Gestão de Dados de Pesquisa (*RDM*)\n\nCom a emergência do chamado **Quarto Paradigma da Ciência** (associado a Jim Gray, sem implicar substituição dos demais modos de pesquisar), ganhou destaque a investigação **intensiva em dados (*Data-Intensive Science* ou *e-Science*)**.\n\nNesse novo ecossistema, os **dados de pesquisa (*Research Data*)** ganharam o estatuto de produtos informacionais primários autônomos, exigindo tratamento documental tão rigoroso quanto as publicações bibliográficas tradicionais (Sayão & Sales, 2014; IBICT):\n\n```timeline\nP1 | 1º Paradigma: Empírico / Experimental | Antiguidade e Idade Média | Observação direta e descrição de fenômenos naturais sem formalização matemática abstrata\n---> Formalização Teórica\nP2 | 2º Paradigma: Teórico / Analítico | Revolução Científica (Galileu, Newton) | Leis universais da física, equações analíticas, modelos teóricos e generalizações generalizáveis\n---> Computação Eletrônica\nP3 | 3º Paradigma: Computacional / Simulacional | Pós-Guerra / Século XX | Simulações complexas de equações diferenciais em computadores para fenômenos não observáveis diretamente\n---> Dilúvio de Dados\nP4 | 4º Paradigma: e-Science / Big Data | Século XXI (Jim Gray) | Investigação intensiva em dados brutos (*Data-Intensive Science*), mineração distribuída e curadoria digital permanente\n```\n\n#### A. Tipologia de Dados de Pesquisa\nA literatura e o Cebraspe classificam os dados de pesquisa quanto à sua origem e natureza:\n* **Dados Observacionais:** Capturados em tempo real por sensores, satélites, questionários de campo ou observação astronômica. Muitas observações não podem ser repetidas nas mesmas condições temporais e ambientais, elevando a importância de sua preservação.\n* **Dados Experimentais:** Gerados em ensaios controlados em laboratório (ex.: reações químicas, culturas biológicas). Em tese são reproduzíveis, embora a um custo financeiro e temporal elevadíssimo.\n* **Dados Computacionais / Simulados:** Fruto de modelos matemáticos e simulações em supercomputadores (ex.: modelos climáticos ou de aerodinâmica). Dependem criticamente da preservação do código-fonte e dos parâmetros de entrada.\n* **Dados Derivados ou Compilados:** Resultados de análises, agregações, data mining e transformações efetuadas sobre dados primários pré-existentes.\n* **Dados Canônicos ou de Referência:** Conjuntos utilizados como referência por comunidades específicas; isso não garante ausência de erros em todos os registros (ex.: sequências de DNA no GenBank, tabelas de constantes físicas do NIST).\n\n#### B. Planos de Gestão de Dados (*PGD / Data Management Plan - DMP*)\nO **Plano de Gestão de Dados (PGD)** é o documento formal, dinâmico e prospectivo elaborado pelos pesquisadores antes ou no início de um projeto científico, detalhando as ações de governança sobre os dados:\n* **Obrigatoriedade Institucional:** A exigência depende da agência, modalidade e edital. Não se presume obrigatoriedade universal para toda chamada da CAPES ou do CNPq.\n* **Componentes Canônicos de um PGD:**\n  1. *Identificação e Tipos de Dados:* Descrição precisa dos formatos gerados, escolhendo formatos documentados e adequados aos requisitos; CSV pode perder fórmulas e tipos de uma planilha. XLSX/DOCX pertencem à família padronizada Office Open XML, embora interoperabilidade e implementação exijam avaliação.\n  2. *Metadados e Padronização:* Vocabulários controlados e esquemas de metadados adotados (ex.: Dublin Core, DataCite, proveniência W3C PROV).\n  3. *Segurança e Privacidade Ético-Jurídica:* Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), protocolos de anonimização ou pseudonimização de participantes de pesquisas humanas.\n  4. *Repositório de Depósito e Licenciamento:* Onde os dados serão depositados e sob quais compromissos de custódia (Zenodo, Figshare, Dataverse, LattesData do CNPq) e qual licença de reúso será atribuída (idealmente CC0 ou CC BY).\n  5. *Preservação de Longo Prazo e Custos:* Recursos financeiros e servidores alocados para garantir a sobrevivência dos dados pelo prazo justificado conforme finalidade, regras de fomento, normas aplicáveis, custos e capacidade de preservação.\n\n---\n\n\n\nPseudonimizar não torna automaticamente o dado anônimo. O plano deve prever responsabilidades, versões, descarte, custos, acesso e atualização. Um repositório citado no PGD não garante sozinho custódia perpétua ou adequação a todo dado sensível.\n\n**Aplicação e recuperação:** Converter uma planilha para CSV pode perder fórmulas e tipos. Documente a decisão e preserve o necessário à interpretação e reprodução.\n\n### Curadoria Digital e o Modelo do *Digital Curation Centre (DCC)*\n\nA **Curadoria Digital** transcende a preservação digital técnica e o arquivamento passivo. Na linha do *Digital Curation Centre* (Reino Unido) e dos estudos de Luís Fernando Sayão e Luana Farias Sales (2014):\n\n> **Conceituação Doutrinária (DCC; Sayão & Sales, 2014):** Segundo as formulações do Digital Curation Centre e de Sayão & Sales (2014), a Curadoria Digital consiste na gestão ativa, seleção, preservação continuada, enriquecimento com metadados e agregação de valor aos ativos digitais durante todo o seu ciclo vital, prevenindo a degradação e a obsolescência para apoiar autenticidade, acesso e reúso legítimo no longo prazo.\n\n```timeline\nC1 | 1. Conceber (Conceptualise) | Planejamento Inicial | Definir métodos de captura, requisitos de dados e formatos de preservação no Plano de Gestão de Dados (PGD)\n---> Coleta e Documentação\nC2 | 2. Criar ou Receber (Create/Receive) | Produção dos Ativos | Gerar os dados conforme protocolos técnicos e registrar metadados de proveniência inicial\n---> Aplicação da Política Institucional\nC3 | 3. Avaliar e Selecionar (Appraise & Select) | Filtragem Técnica | Determinar quais conjuntos de dados possuem valor de longo prazo para custódia permanente\n---> Validação de Fixidez e Formato\nC4 | 4. Ingerir (Ingest) | Entrada no Repositório | Transferência para o repositório confiável com verificação de integridade (*checksum*) e empacotamento\n---> Conversão e Tratamento Perene\nC5 | 5. Ação de Preservação (Preservation Action) | Salvaguarda Técnica | Limpeza, conversão para formatos abertos padrão (ex.: CSV, PNG, TIFF) e monitoramento de integridade\n---> Custódia Segura e Redundante\nC6 | 6. Armazenar (Store) | Infraestrutura Físico-Digital | Armazenamento em servidores seguros com redundância geográfica e política de cópias múltiplas (LOCKSS)\n---> Disseminação e Localização\nC7 | 7. Acesso, Uso e Reúso (Access & Reuse) | Entrega à Sociedade | Disponibilização via identificadores persistentes (DOI), interfaces de busca abertas e licenças Creative Commons\n---> Criação de Novos Conhecimentos\nC8 | 8. Transformar (Transform) | Retroalimentação Científica | Criação de novos subconjuntos de dados derivados, migrações para padrões futuros e reprocessamento\n```\n\n#### A. Ações Sequenciais do Modelo DCC:\n1. **Concepção (*Conceptualise*):** Planejar a criação do ativo digital, definindo formatos de captura e requisitos de metadados.\n2. **Criação ou Recepção (*Create or Receive*):** Gerar os dados conforme os padrões de qualidade e documentar os metadados de proveniência técnica.\n3. **Avaliação e Seleção (*Appraise and Select*):** Aplicar políticas institucionais para decidir quais dados devem ser preservados a longo prazo e quais podem ser descartados com segurança.\n4. **Ingestão (*Ingest*):** Transferir os dados e seus metadados para um repositório confiável, cumprindo critérios de validação de checksum e segurança (semelhante ao SIP do OAIS).\n5. **Ação de Preservação (*Preservation Action*):** Limpeza, conversão para formatos de preservação, validação estrutural e verificação de integridade periódica.\n6. **Armazenamento (*Store*):** Manter os dados em servidores seguros com estratégias de contingência e redundância geográfica (princípio LOCKSS).\n7. **Acesso, Uso e Reúso (*Access, Use and Reuse*):** Disponibilizar os dados para a comunidade acadêmica e a sociedade, fornecendo interfaces de busca, APIs abertas e identificadores persistentes (DOIs).\n8. **Transformação (*Transform*):** Criar novos conjuntos de dados através de agregação, reprocessamento, migração para novos formatos ou derivação de produtos informacionais.\n\n#### B. Princípios FAIR aplicados aos Dados de Pesquisa\nFormulados por Wilkinson et al. (2016), orientam a curadoria para que os dados sejam legíveis tanto por seres humanos quanto por máquinas:\n* **F - Findable (Localizável):** Metadados ricos e identificadores persistentes globais e únicos (DOI, Handle).\n* **A - Accessible (Acessível):** Recuperáveis por meio de protocolos de comunicação padronizados, abertos e gratuitos (ex.: HTTP/HTTPS, OAI-PMH). O acesso pode exigir autenticação e autorização por sigilo legítimo (*\"tão aberto quanto possível, tão fechado quanto necessário\"*).\n* **I - Interoperable (Interoperável):** Uso de linguagens de representação, vocabulários compartilhados e referências qualificadas. A extensão XML ou JSON-LD não garante interoperabilidade semântica.\n* **R - Reusable (Reutilizável):** Documentação detalhada da proveniência, atendimento aos padrões da comunidade científica e atribuição de licenças de uso explícitas (Creative Commons).\n\n---\n\n\n\nAlém das oito ações sequenciais do esquema, o DCC inclui **ações de todo o ciclo**: descrição e informação de representação, planejamento da preservação, acompanhamento e participação da comunidade, e curadoria/preservação. Há também **ações ocasionais**: descarte, reavaliação e migração. Omiti-las pode transformar indevidamente o modelo em uma fila rígida de oito tarefas.\n\nIngestão não se confunde com SIP: o primeiro é processo/função, e o segundo é pacote de submissão no OAIS. Checksum verifica fixidez em relação a valor de referência confiável; não prova verdade factual ou autoria. Preservar não é sempre converter tudo para CSV, PNG ou TIFF: formato e estratégia dependem das propriedades significativas e dos riscos. OAI-PMH coleta metadados, sem implicar acesso irrestrito ao conteúdo dos dados.\n\n**Aplicação e recuperação:** Um checksum está correto, mas faltou descrição da variável. A fixidez não recompõe o significado; curadoria também precisa de documentação.\n\n### A Lei de Direitos Autorais no Brasil (Lei nº 9.610/1998)\n\nA Lei **9.610/1998** regula direitos autorais e conexos. A proteção da obra independe de registro (art. 18). O registro facultativo pode apoiar prova, mas não cria a autoria. Programas de computador têm regime autoral especial pela Lei 9.609/1998; não devem ser simplesmente classificados como propriedade industrial ou confundidos com cultivares.\n\n### Objeto protegido e exclusões\n\nO art. 7º protege criações expressas em diferentes meios, incluindo textos, músicas, imagens e outras categorias. O art. 8º exclui, entre outros, ideias e métodos como tais, regras para atos mentais/jogos/negócios, formulários em branco, textos de atos oficiais, informações de uso comum e nomes/títulos isolados. Ideia livre e forma expressiva protegida são dimensões distintas. Uma compilação original pode ter proteção na seleção ou organização, sem criar monopólio sobre fatos ou atos oficiais nela incluídos.\n\n### Direitos morais e patrimoniais\n\nOs direitos morais são **inalienáveis e irrenunciáveis** (art. 27). O art. 24 abrange reivindicar autoria, indicar nome, conservar ineditismo, assegurar integridade, modificar a obra, retirá-la de circulação nas condições legais e acessar exemplar único e raro nas condições do inciso VII. Retirada de circulação não é simples arrependimento: o inciso VI e o § 3º impõem condições e indenização de terceiros quando cabível.\n\nApós a morte, os direitos dos incisos I a IV do art. 24 transmitem-se aos sucessores; cabe ao Estado defender integridade e autoria da obra em domínio público. Não se deve resumir isso como transmissão ou perpetuidade indistinta de todos os direitos morais.\n\nOs direitos patrimoniais envolvem utilização, fruição e disposição da obra (arts. 28–29), com modalidades independentes. Ter comprado o livro ou recebido um arquivo não confere automaticamente direito de digitalizar, traduzir ou distribuir. A cessão e a licença exigem verificar escopo e condições; o art. 37 afirma que adquirir original ou exemplar não confere direitos patrimoniais salvo convenção ou previsão legal.\n\n### Prazos e domínio público\n\nEm regra, os direitos patrimoniais duram **70 anos**, contados de 1º de janeiro do ano seguinte ao falecimento (art. 41). Na coautoria indivisível, considera-se a morte do último coautor sobrevivente (art. 42). Há regras próprias para obras anônimas/pseudônimas (art. 43) e audiovisuais/fotográficas (art. 44).\n\nO art. 45 também contempla autores falecidos sem sucessores e autores desconhecidos, com ressalva à proteção legal dos conhecimentos étnicos e tradicionais. Obra anônima, autor desconhecido e autor sem sucessores não são categorias intercambiáveis. Mesmo quando o original está em domínio público, tradução, notas ou edição criativa posterior podem ter proteção própria.\n\n**Aplicação e recuperação:** Comprar um exemplar não autoriza traduzir e distribuir a obra. Verifique modalidade de uso e direitos envolvidos.\n\n### Limitações legais, interpretação e bibliotecas\n\nO direito autoral convive com educação, cultura, informação e outros direitos fundamentais. A LDA contém limitações nos arts. 46–48; o Brasil não deve ser descrito como se aplicasse automaticamente a cláusula norte-americana de *fair use*. Também é incorreto ensinar como consenso absoluto que toda hipótese fora da lista literal é necessariamente ilícita: a jurisprudência do STJ admite interpretação das limitações à luz dos direitos fundamentais e da regra dos três passos. Isso exige análise do caso, sem criar autorização genérica para copiar tudo.\n\n| Hipótese | Dispositivo e condições principais |\n|---|---|\n| Reprodução privada | Art. 46, II: pequenos trechos, em um só exemplar, para uso privado do copista, feita por ele e sem intuito de lucro. A lei não fixa percentual universal de 10% ou 20%. |\n| Citação | Art. 46, III: passagens para estudo, crítica ou polêmica, na medida justificada, com indicação de autor e origem. Não confundir com o inciso VIII. |\n| Reprodução em obra nova | Art. 46, VIII: pequenos trechos ou obra integral de artes plásticas, atendidas as condições de finalidade e de não prejudicar a exploração normal nem interesses legítimos injustificadamente. |\n| Prova | Art. 46, VII: uso para produzir prova judiciária ou administrativa. Não corresponde à alínea c do inciso I. |\n| Execução e representação | Art. 46, VI: hipóteses familiares ou didáticas em estabelecimento de ensino, sem intuito de lucro, nos termos legais. Não autoriza toda cópia didática. |\n| Retrato encomendado | Art. 46, I, c, com condições; não é o inciso V. |\n| Acessibilidade no texto da LDA | Art. 46, I, d, refere-se a uso exclusivo de deficientes visuais, sem fins comerciais, em Braille ou suporte destinado a eles. O Tratado de Marraqueche tem âmbito e requisitos próprios. |\n\nO **Tratado de Marraqueche**, promulgado pelo Decreto 9.522/2018 e regulamentado pelo Decreto 10.882/2021, abrange beneficiários e entidades autorizadas definidos no regime, com condições de produção, fornecimento e intercâmbio de formatos acessíveis. Não basta uma instituição chamar-se biblioteca para ignorar os requisitos; nem toda autorização se limita ao texto literal da alínea d da LDA.\n\nParódias e paráfrases são tratadas no art. 47, com condições. O art. 48 trata da representação de obras permanentemente situadas em logradouro público por meios indicados na norma. “Está na internet” não equivale a “está em logradouro público” para esse fim.\n\n### Decisão documentada\n\nUma biblioteca gratuita não recebe autorização irrestrita para reproduzir e distribuir integralmente obras protegidas. Por outro lado, uma cópia integral pode ser permitida por licença, domínio público, autorização ou hipótese específica aplicável. Evite tanto a autorização universal quanto a proibição absoluta.\n\nA **Súmula 522/STJ trata de falsa identidade**, não de livros. O art. 37 da LDA não enuncia uma regra geral de exaurimento digital. Empréstimo físico, transmissão de arquivo e reprodução são operações diferentes; não se transfere uma conclusão automaticamente de uma para outra.\n\n**Roteiro:** identifique obra e versão; confira titularidade e prazo; leia licença e autorizações; analise hipótese legal e seus requisitos; verifique direitos conexos, personalidade, dados pessoais e condições institucionais; registre a conclusão e as incertezas. Havendo controvérsia jurídica concreta, encaminhe ao órgão competente sem inventar jurisprudência.\n\n**Aplicação e recuperação:** Copiar para estudar, citar em artigo e produzir formato acessível são hipóteses diferentes, com requisitos próprios. Não basta alegar finalidade educativa.\n\n### O Sistema Creative Commons (Lawrence Lessig) e as Licenças Abertas\n\nCriado em 2001 por um grupo de colaboradores que incluiu **Lawrence Lessig**, com as primeiras licenças lançadas em 2002, o projeto **Creative Commons (CC)** nasceu para sanar o descompasso entre a legislação autoral analógica e a cultura digital da internet:\n\n* Em vez do rígido modelo binário *\"Todos os direitos reservados\"* (*All Rights Reserved*), o Creative Commons consagrou a flexibilidade de **\"Alguns direitos reservados\" (*Some Rights Reserved*)**.\n* As licenças CC **não anulam nem substituem o Direito Autoral**; ao contrário, são contratos-padrão outorgados pelo próprio autor com base na legislação autoral vigente, autorizando previamente à coletividade certos usos de sua obra.\n\n#### A. A Estrutura em Três Camadas das Licenças CC\n1. **Código Legal (*Legal Code*):** O texto jurídico integral e formal, redigido por juristas especializados, para garantir validade jurídica perante os tribunais em múltiplas jurisdições ao redor do mundo.\n2. **Resumo Visual / Legível por Humanos (*Commons Deed*):** Resumo simplificado da licença, com linguagem acessível e acompanhado dos ícones visuais padronizados.\n3. **Código Legível por Máquinas (*Machine-Readable Code*):** Metadados estruturados em formato RDF/XML, XMP e Schema.org que permitem a mecanismos de busca (Google, Bing) e indexadores identificar automaticamente os direitos concedidos sobre o arquivo.\n\n#### B. As Quatro Condições Modulares do Creative Commons\n\n| Módulo | Nome Oficial | Ícone / Sigla | Significado Jurídico e Regra de Ouro |\n| :--- | :--- | :---: | :--- |\n| **Atribuição** | *Attribution* | **BY** | **Presente nas seis licenças atuais; CC0 é ferramenta distinta.** Exige que o usuário cite o autor original, forneça o link da fonte e indique se modificações foram feitas. |\n| **Não Comercial** | *NonCommercial* | **NC** | Restringe usos predominantemente dirigidos a vantagem comercial ou compensação monetária; não depende apenas da natureza jurídica de quem usa. |\n| **Sem Derivações** | *NoDerivatives* | **ND** | Permite a redistribuição da obra original integral, mas não permite compartilhar adaptação sob a licença; a versão 4.0 distingue produzir de compartilhar adaptação. |\n| **Compartilha Igual** | *ShareAlike* | **SA** | Cláusula *copyleft*: se o usuário alterar ou transformar a obra, a obra derivada quando compartilhada, deve observar a mesma licença ou licença compatível admitida nos termos aplicáveis. |\n\n#### C. As Ferramentas de Domínio Público do CC\n* **CC0 (*Public Domain Dedication*):** Instrumento jurídico em que o criador abdica, voluntariamente e em escala global, de os direitos de copyright e conexos que possa afastar sobre a obra, até o limite máximo permitido pelas leis locais. É o padrão internacional mais recomendado para **conjuntos de dados abertos (*Open Datasets*)**, pois desonera o usuário de obrigações contratuais complexas.\n* **Marca de Domínio Público (*Public Domain Mark - PDM*):** Um rótulo de identificação utilizado para catalogar obras cujo prazo de proteção já expirou ou que já pertencem legitimamente ao domínio público, verificado o contexto jurídico pertinente.\n\n**Aplicação e recuperação:** CC BY-ND 4.0 e CC BY-NC 4.0 têm restrições distintas. Identifique se a operação é compartilhar adaptação e se o uso é comercial.\n\n### Métricas de Periódicos no Ecossistema Editorial e de Dados\n\nPara avaliar o prestígio e o impacto de periódicos científicos que publicam dados e artigos, a Ciência da Informação utiliza métricas bibliométricas consolidadas:\n\n#### A. Fator de Impacto (*Impact Factor - IF*) de Eugene Garfield\nDesenvolvido na década de 1960 pelo fundador do *Institute for Scientific Information (ISI)*, **Eugene Garfield**, e publicado no relatório anual **Journal Citation Reports (JCR)** (atualmente mantido pela Clarivate Analytics integrado à plataforma Web of Science):\n\n$\\text{FI}_{\\text{Ano } A} = \\frac{\\text{Citações recebidas no Ano } A \\text{ a artigos publicados nos Anos } (A-1) \\text{ e } (A-2)}{\\text{Número de itens citáveis publicados nos Anos } (A-1) \\text{ e } (A-2)}$\n\n* **A Distorção dos \"Itens Citáveis\" (*Citable Items* — Pegadinha de Ouro Cebraspe):**\n  * O denominador computa estritamente **itens indexados como Article e Review na base, segundo as regras do JCR**;\n  * O denominador **NÃO inclui** cartas ao editor (*letters*), editoriais, resenhas de livros, obituários ou erratas;\n  * Contudo, se um editorial ou carta receber citações no ano de referência, essas citações entram normalmente no **numerador**! Periódicos que publicam cartas e comentários muito citados conseguem inflar artificialmente seu Fator de Impacto.\n* **Autocitação de Periódicos (*Journal Self-Citation*):** Citações que os artigos de uma revista fazem a artigos da própria revista. Quando essa taxa ultrapassa limites razoáveis ou quando há \"cartéis de citação\" entre periódicos parceiros, a Clarivate Analytics aplica a pena de **supressão (*title suppression*)**, excluindo o periódico do JCR por um ou mais anos.\n\n---\n\n\n**Exemplo:** em 2026, 360 citações elegíveis a itens de 2024–2025, divididas por 120 itens citáveis desses anos, produzem JIF 3. Não entram todas as citações da história do periódico. A classificação documental é feita pela base, não apenas pelo nome da seção na revista. Supressão depende das regras e da análise do provedor, não de um percentual universal de autocitação. JIF de periódico não certifica qualidade de artigo ou pesquisador.\n\n**Aplicação e recuperação:** JIF 3 não significa que cada artigo recebeu três citações. A distribuição pode ser muito desigual.",
  teoriaDidaticaMarkdown: "PGD é plano vivo com exigências específicas. DCC inclui ações sequenciais, de todo o ciclo e ocasionais. Proteção autoral independe de registro; aquisição de exemplar não transfere direitos patrimoniais. Citação: art. 46, III; prova: VII; retrato encomendado: I, c. Gratuidade não autoriza toda cópia, e licença ou domínio público podem permitir usos. CC exige versão e condições. JIF tem janela e unidade próprias.",
  checkpoints: [
  {
    "id": "cp-9-3-1",
    "pergunta": "Micro-Checkpoint 1: Conceito de Curadoria Digital",
    "item": "A curadoria digital pode ser corretamente definida como o processo dinâmico que compreende a seleção, a preservação, a manutenção, a agregação de valor e o arquivamento de ativos digitais ao longo de seu ciclo de vida para viabilizar seu reúso futuro.",
    "gabarito": "C",
    "justificativa": "Correto! Essa definição canônica do Digital Curation Centre (DCC) foi cobrada literalmente pelo Cebraspe em provas recentes (STJ 2024 e EMBRAPA 2025).",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões."
  },
  {
    "id": "cp-9-3-2",
    "pergunta": "Micro-Checkpoint 2: Limitações aos Direitos Autorais em Bibliotecas (Lei nº 9.610/1998)",
    "item": "Nos termos da Lei nº 9.610/1998, é lícito a uma biblioteca pública realizar a reprodução fotocopiada ou digital integral de livros protegidos por direitos autorais para empréstimo aos seus usuários, desde que a instituição não persiga intuito de lucro.",
    "gabarito": "E",
    "justificativa": "Errado. A finalidade não lucrativa isolada não basta para reprodução integral e distribuição. Deve-se verificar direitos, licença e hipóteses legais específicas. A Súmula 522/STJ não trata de reprodução de livros.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "versao_correta": "Reprodução e distribuição exigem autorização ou fundamento legal aplicável; a gratuidade, sozinha, não basta."
  },
  {
    "id": "cp-9-3-3",
    "pergunta": "Micro-Checkpoint 3: Fator de Impacto e Autocitações de Periódicos",
    "item": "No JIF anual de dois anos, dividem-se as citações recebidas no ano de referência a itens publicados nos dois anos precedentes pelo número de itens citáveis desses dois anos, conforme as regras do JCR.",
    "gabarito": "C",
    "justificativa": "Certo. O numerador também exige delimitação temporal dos itens citados. Não é a soma de todas as citações históricas do periódico; a classificação dos itens segue as regras da base.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões."
  },
  {
    "id": "rt-9-3-1",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todo edital de pesquisa do CNPq ou da CAPES exige necessariamente PGD com preservação por vinte anos.",
    "gabarito": "E",
    "justificativa": "Exigências dependem das normas e chamadas específicas.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "editalRef": "Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9",
    "habilidade": "aplicar",
    "versao_correta": "O PGD deve observar condições e prazos efetivamente aplicáveis."
  },
  {
    "id": "rt-9-3-2",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O DCC prevê ações ocasionais, além das sequenciais e das que acompanham todo o ciclo.",
    "gabarito": "C",
    "justificativa": "Descarte, reavaliação e migração integram o modelo.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "editalRef": "Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-9-3-3",
    "pergunta": "Julgue a situação apresentada.",
    "item": "O registro é requisito constitutivo geral da proteção autoral de uma obra literária.",
    "gabarito": "E",
    "justificativa": "O art. 18 dispensa registro como condição de proteção.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "editalRef": "Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9",
    "habilidade": "aplicar",
    "versao_correta": "A proteção independe de registro, que pode ser facultativo."
  },
  {
    "id": "rt-9-3-4",
    "pergunta": "Julgue a situação apresentada.",
    "item": "A citação para estudo, crítica ou polêmica é tratada no art. 46, III, e deve observar extensão justificada e indicação de autor e origem.",
    "gabarito": "C",
    "justificativa": "Não se confunde com o inciso VIII nem com autorização para reproduzir qualquer quantidade.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "editalRef": "Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-9-3-5",
    "pergunta": "Julgue a situação apresentada.",
    "item": "No CC 4.0, compartilhar adaptação e simplesmente produzi-la para uso não compartilhado podem receber tratamento diferente quando há ND.",
    "gabarito": "C",
    "justificativa": "A versão 4.0 permite produzir, mas não compartilhar material adaptado sob a licença ND.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "editalRef": "Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9",
    "habilidade": "aplicar"
  },
  {
    "id": "rt-9-3-6",
    "pergunta": "Julgue a situação apresentada.",
    "item": "Todas as citações recebidas durante toda a existência de uma revista entram no numerador de seu JIF anual de dois anos.",
    "gabarito": "E",
    "justificativa": "O cálculo limita os anos dos itens citados conforme sua janela.",
    "fonte": "Digital Curation Centre — Curation Lifecycle Model — Ações sequenciais, de todo o ciclo e ocasionais.; Wilkinson et al. — FAIR Guiding Principles — Box 2: acesso controlado, metadados e reúso.; Lei 9.610/1998 — texto atualizado da Câmara — Arts. 7º–8º, 18, 24–29, 37, 41–48.; Decreto 10.882/2021 — Regulamentação do Tratado de Marraqueche.; STJ — interpretação das limitações autorais — Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.; Creative Commons — FAQ — ND 4.0, NC, SA e direitos que a licença não cobre.; Clarivate — JCR, Open Access — Itens citáveis indexados como artigos e revisões.",
    "editalRef": "Bloco A - Item 2.9, 4.1 e Bloco D - Item 4.9",
    "habilidade": "aplicar",
    "versao_correta": "Consideram-se citações no ano de referência a itens publicados nos dois anos precedentes, conforme as regras do JCR."
  }
],
  mnemonicos: {
  "timeline": [],
  "autores": [
    {
      "id": "sub-9-3-fonte-dcc",
      "nome": "Digital Curation Centre — Curation Lifecycle Model",
      "ano": "Referência de consulta",
      "obraPrincipal": "Digital Curation Centre — Curation Lifecycle Model",
      "ideiaChave": "Ações sequenciais, de todo o ciclo e ocasionais.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-3-fonte-c6f6ed654557",
      "nome": "Wilkinson et al. — FAIR Guiding Principles",
      "ano": "Referência de consulta",
      "obraPrincipal": "Wilkinson et al. — FAIR Guiding Principles",
      "ideiaChave": "Box 2: acesso controlado, metadados e reúso.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-3-fonte-lda",
      "nome": "Lei 9.610/1998 — texto atualizado da Câmara",
      "ano": "Referência de consulta",
      "obraPrincipal": "Lei 9.610/1998 — texto atualizado da Câmara",
      "ideiaChave": "Arts. 7º–8º, 18, 24–29, 37, 41–48.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-3-fonte-marraqueche",
      "nome": "Decreto 10.882/2021",
      "ano": "Referência de consulta",
      "obraPrincipal": "Decreto 10.882/2021",
      "ideiaChave": "Regulamentação do Tratado de Marraqueche.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-3-fonte-juris",
      "nome": "STJ — interpretação das limitações autorais",
      "ano": "Referência de consulta",
      "obraPrincipal": "STJ — interpretação das limitações autorais",
      "ideiaChave": "Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-3-fonte-cc",
      "nome": "Creative Commons — FAQ",
      "ano": "Referência de consulta",
      "obraPrincipal": "Creative Commons — FAQ",
      "ideiaChave": "ND 4.0, NC, SA e direitos que a licença não cobre.",
      "chipPegadinha": "Fonte da aula"
    },
    {
      "id": "sub-9-3-fonte-jcr",
      "nome": "Clarivate — JCR, Open Access",
      "ano": "Referência de consulta",
      "obraPrincipal": "Clarivate — JCR, Open Access",
      "ideiaChave": "Itens citáveis indexados como artigos e revisões.",
      "chipPegadinha": "Fonte da aula"
    }
  ],
  "pegadinhas": [
    {
      "id": "memoria-rt-9-3-4",
      "afirmacao": "A citação para estudo, crítica ou polêmica é tratada no art. 46, III, e deve observar extensão justificada e indicação de autor e origem.",
      "gabarito": "C",
      "porQue": "Não se confunde com o inciso VIII nem com autorização para reproduzir qualquer quantidade."
    },
    {
      "id": "memoria-rt-9-3-5",
      "afirmacao": "No CC 4.0, compartilhar adaptação e simplesmente produzi-la para uso não compartilhado podem receber tratamento diferente quando há ND.",
      "gabarito": "C",
      "porQue": "A versão 4.0 permite produzir, mas não compartilhar material adaptado sob a licença ND."
    },
    {
      "id": "memoria-rt-9-3-6",
      "afirmacao": "Todas as citações recebidas durante toda a existência de uma revista entram no numerador de seu JIF anual de dois anos.",
      "gabarito": "E",
      "porQue": "O cálculo limita os anos dos itens citados conforme sua janela."
    }
  ]
},

versaoTeoria: "2026-10-29.1",
unidadesAprendizagem: [
  {
    "id": "sub-9-3-bloco-1",
    "titulo": "Da e-Science à Gestão de Dados de Pesquisa (*RDM*)",
    "objetivos": [
      "Planejar gestão e formatos sem obrigações ou prazos universais."
    ],
    "conteudo": "Com a emergência do chamado **Quarto Paradigma da Ciência** (associado a Jim Gray, sem implicar substituição dos demais modos de pesquisar), ganhou destaque a investigação **intensiva em dados (*Data-Intensive Science* ou *e-Science*)**.\n\nNesse novo ecossistema, os **dados de pesquisa (*Research Data*)** ganharam o estatuto de produtos informacionais primários autônomos, exigindo tratamento documental tão rigoroso quanto as publicações bibliográficas tradicionais (Sayão & Sales, 2014; IBICT):\n\n```timeline\nP1 | 1º Paradigma: Empírico / Experimental | Antiguidade e Idade Média | Observação direta e descrição de fenômenos naturais sem formalização matemática abstrata\n---> Formalização Teórica\nP2 | 2º Paradigma: Teórico / Analítico | Revolução Científica (Galileu, Newton) | Leis universais da física, equações analíticas, modelos teóricos e generalizações generalizáveis\n---> Computação Eletrônica\nP3 | 3º Paradigma: Computacional / Simulacional | Pós-Guerra / Século XX | Simulações complexas de equações diferenciais em computadores para fenômenos não observáveis diretamente\n---> Dilúvio de Dados\nP4 | 4º Paradigma: e-Science / Big Data | Século XXI (Jim Gray) | Investigação intensiva em dados brutos (*Data-Intensive Science*), mineração distribuída e curadoria digital permanente\n```\n\n#### A. Tipologia de Dados de Pesquisa\nA literatura e o Cebraspe classificam os dados de pesquisa quanto à sua origem e natureza:\n* **Dados Observacionais:** Capturados em tempo real por sensores, satélites, questionários de campo ou observação astronômica. Muitas observações não podem ser repetidas nas mesmas condições temporais e ambientais, elevando a importância de sua preservação.\n* **Dados Experimentais:** Gerados em ensaios controlados em laboratório (ex.: reações químicas, culturas biológicas). Em tese são reproduzíveis, embora a um custo financeiro e temporal elevadíssimo.\n* **Dados Computacionais / Simulados:** Fruto de modelos matemáticos e simulações em supercomputadores (ex.: modelos climáticos ou de aerodinâmica). Dependem criticamente da preservação do código-fonte e dos parâmetros de entrada.\n* **Dados Derivados ou Compilados:** Resultados de análises, agregações, data mining e transformações efetuadas sobre dados primários pré-existentes.\n* **Dados Canônicos ou de Referência:** Conjuntos utilizados como referência por comunidades específicas; isso não garante ausência de erros em todos os registros (ex.: sequências de DNA no GenBank, tabelas de constantes físicas do NIST).\n\n#### B. Planos de Gestão de Dados (*PGD / Data Management Plan - DMP*)\nO **Plano de Gestão de Dados (PGD)** é o documento formal, dinâmico e prospectivo elaborado pelos pesquisadores antes ou no início de um projeto científico, detalhando as ações de governança sobre os dados:\n* **Obrigatoriedade Institucional:** A exigência depende da agência, modalidade e edital. Não se presume obrigatoriedade universal para toda chamada da CAPES ou do CNPq.\n* **Componentes Canônicos de um PGD:**\n  1. *Identificação e Tipos de Dados:* Descrição precisa dos formatos gerados, escolhendo formatos documentados e adequados aos requisitos; CSV pode perder fórmulas e tipos de uma planilha. XLSX/DOCX pertencem à família padronizada Office Open XML, embora interoperabilidade e implementação exijam avaliação.\n  2. *Metadados e Padronização:* Vocabulários controlados e esquemas de metadados adotados (ex.: Dublin Core, DataCite, proveniência W3C PROV).\n  3. *Segurança e Privacidade Ético-Jurídica:* Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), protocolos de anonimização ou pseudonimização de participantes de pesquisas humanas.\n  4. *Repositório de Depósito e Licenciamento:* Onde os dados serão depositados e sob quais compromissos de custódia (Zenodo, Figshare, Dataverse, LattesData do CNPq) e qual licença de reúso será atribuída (idealmente CC0 ou CC BY).\n  5. *Preservação de Longo Prazo e Custos:* Recursos financeiros e servidores alocados para garantir a sobrevivência dos dados pelo prazo justificado conforme finalidade, regras de fomento, normas aplicáveis, custos e capacidade de preservação.\n\n---\n\n\n\nPseudonimizar não torna automaticamente o dado anônimo. O plano deve prever responsabilidades, versões, descarte, custos, acesso e atualização. Um repositório citado no PGD não garante sozinho custódia perpétua ou adequação a todo dado sensível.\n\n**Aplicação e recuperação:** Converter uma planilha para CSV pode perder fórmulas e tipos. Documente a decisão e preserve o necessário à interpretação e reprodução.",
    "checkpointIds": [
      "rt-9-3-1"
    ]
  },
  {
    "id": "sub-9-3-bloco-2",
    "titulo": "Curadoria Digital e o Modelo do *Digital Curation Centre (DCC)*",
    "objetivos": [
      "Relacionar ações do DCC com preservação, contexto e acesso."
    ],
    "conteudo": "A **Curadoria Digital** transcende a preservação digital técnica e o arquivamento passivo. Na linha do *Digital Curation Centre* (Reino Unido) e dos estudos de Luís Fernando Sayão e Luana Farias Sales (2014):\n\n> **Conceituação Doutrinária (DCC; Sayão & Sales, 2014):** Segundo as formulações do Digital Curation Centre e de Sayão & Sales (2014), a Curadoria Digital consiste na gestão ativa, seleção, preservação continuada, enriquecimento com metadados e agregação de valor aos ativos digitais durante todo o seu ciclo vital, prevenindo a degradação e a obsolescência para apoiar autenticidade, acesso e reúso legítimo no longo prazo.\n\n```timeline\nC1 | 1. Conceber (Conceptualise) | Planejamento Inicial | Definir métodos de captura, requisitos de dados e formatos de preservação no Plano de Gestão de Dados (PGD)\n---> Coleta e Documentação\nC2 | 2. Criar ou Receber (Create/Receive) | Produção dos Ativos | Gerar os dados conforme protocolos técnicos e registrar metadados de proveniência inicial\n---> Aplicação da Política Institucional\nC3 | 3. Avaliar e Selecionar (Appraise & Select) | Filtragem Técnica | Determinar quais conjuntos de dados possuem valor de longo prazo para custódia permanente\n---> Validação de Fixidez e Formato\nC4 | 4. Ingerir (Ingest) | Entrada no Repositório | Transferência para o repositório confiável com verificação de integridade (*checksum*) e empacotamento\n---> Conversão e Tratamento Perene\nC5 | 5. Ação de Preservação (Preservation Action) | Salvaguarda Técnica | Limpeza, conversão para formatos abertos padrão (ex.: CSV, PNG, TIFF) e monitoramento de integridade\n---> Custódia Segura e Redundante\nC6 | 6. Armazenar (Store) | Infraestrutura Físico-Digital | Armazenamento em servidores seguros com redundância geográfica e política de cópias múltiplas (LOCKSS)\n---> Disseminação e Localização\nC7 | 7. Acesso, Uso e Reúso (Access & Reuse) | Entrega à Sociedade | Disponibilização via identificadores persistentes (DOI), interfaces de busca abertas e licenças Creative Commons\n---> Criação de Novos Conhecimentos\nC8 | 8. Transformar (Transform) | Retroalimentação Científica | Criação de novos subconjuntos de dados derivados, migrações para padrões futuros e reprocessamento\n```\n\n#### A. Ações Sequenciais do Modelo DCC:\n1. **Concepção (*Conceptualise*):** Planejar a criação do ativo digital, definindo formatos de captura e requisitos de metadados.\n2. **Criação ou Recepção (*Create or Receive*):** Gerar os dados conforme os padrões de qualidade e documentar os metadados de proveniência técnica.\n3. **Avaliação e Seleção (*Appraise and Select*):** Aplicar políticas institucionais para decidir quais dados devem ser preservados a longo prazo e quais podem ser descartados com segurança.\n4. **Ingestão (*Ingest*):** Transferir os dados e seus metadados para um repositório confiável, cumprindo critérios de validação de checksum e segurança (semelhante ao SIP do OAIS).\n5. **Ação de Preservação (*Preservation Action*):** Limpeza, conversão para formatos de preservação, validação estrutural e verificação de integridade periódica.\n6. **Armazenamento (*Store*):** Manter os dados em servidores seguros com estratégias de contingência e redundância geográfica (princípio LOCKSS).\n7. **Acesso, Uso e Reúso (*Access, Use and Reuse*):** Disponibilizar os dados para a comunidade acadêmica e a sociedade, fornecendo interfaces de busca, APIs abertas e identificadores persistentes (DOIs).\n8. **Transformação (*Transform*):** Criar novos conjuntos de dados através de agregação, reprocessamento, migração para novos formatos ou derivação de produtos informacionais.\n\n#### B. Princípios FAIR aplicados aos Dados de Pesquisa\nFormulados por Wilkinson et al. (2016), orientam a curadoria para que os dados sejam legíveis tanto por seres humanos quanto por máquinas:\n* **F - Findable (Localizável):** Metadados ricos e identificadores persistentes globais e únicos (DOI, Handle).\n* **A - Accessible (Acessível):** Recuperáveis por meio de protocolos de comunicação padronizados, abertos e gratuitos (ex.: HTTP/HTTPS, OAI-PMH). O acesso pode exigir autenticação e autorização por sigilo legítimo (*\"tão aberto quanto possível, tão fechado quanto necessário\"*).\n* **I - Interoperable (Interoperável):** Uso de linguagens de representação, vocabulários compartilhados e referências qualificadas. A extensão XML ou JSON-LD não garante interoperabilidade semântica.\n* **R - Reusable (Reutilizável):** Documentação detalhada da proveniência, atendimento aos padrões da comunidade científica e atribuição de licenças de uso explícitas (Creative Commons).\n\n---\n\n\n\nAlém das oito ações sequenciais do esquema, o DCC inclui **ações de todo o ciclo**: descrição e informação de representação, planejamento da preservação, acompanhamento e participação da comunidade, e curadoria/preservação. Há também **ações ocasionais**: descarte, reavaliação e migração. Omiti-las pode transformar indevidamente o modelo em uma fila rígida de oito tarefas.\n\nIngestão não se confunde com SIP: o primeiro é processo/função, e o segundo é pacote de submissão no OAIS. Checksum verifica fixidez em relação a valor de referência confiável; não prova verdade factual ou autoria. Preservar não é sempre converter tudo para CSV, PNG ou TIFF: formato e estratégia dependem das propriedades significativas e dos riscos. OAI-PMH coleta metadados, sem implicar acesso irrestrito ao conteúdo dos dados.\n\n**Aplicação e recuperação:** Um checksum está correto, mas faltou descrição da variável. A fixidez não recompõe o significado; curadoria também precisa de documentação.",
    "checkpointIds": [
      "cp-9-3-1",
      "rt-9-3-2"
    ]
  },
  {
    "id": "sub-9-3-bloco-3",
    "titulo": "A Lei de Direitos Autorais no Brasil (Lei nº 9.610/1998)",
    "objetivos": [
      "Aplicar objeto, direitos e prazos com condições legais."
    ],
    "conteudo": "A Lei **9.610/1998** regula direitos autorais e conexos. A proteção da obra independe de registro (art. 18). O registro facultativo pode apoiar prova, mas não cria a autoria. Programas de computador têm regime autoral especial pela Lei 9.609/1998; não devem ser simplesmente classificados como propriedade industrial ou confundidos com cultivares.\n\n### Objeto protegido e exclusões\n\nO art. 7º protege criações expressas em diferentes meios, incluindo textos, músicas, imagens e outras categorias. O art. 8º exclui, entre outros, ideias e métodos como tais, regras para atos mentais/jogos/negócios, formulários em branco, textos de atos oficiais, informações de uso comum e nomes/títulos isolados. Ideia livre e forma expressiva protegida são dimensões distintas. Uma compilação original pode ter proteção na seleção ou organização, sem criar monopólio sobre fatos ou atos oficiais nela incluídos.\n\n### Direitos morais e patrimoniais\n\nOs direitos morais são **inalienáveis e irrenunciáveis** (art. 27). O art. 24 abrange reivindicar autoria, indicar nome, conservar ineditismo, assegurar integridade, modificar a obra, retirá-la de circulação nas condições legais e acessar exemplar único e raro nas condições do inciso VII. Retirada de circulação não é simples arrependimento: o inciso VI e o § 3º impõem condições e indenização de terceiros quando cabível.\n\nApós a morte, os direitos dos incisos I a IV do art. 24 transmitem-se aos sucessores; cabe ao Estado defender integridade e autoria da obra em domínio público. Não se deve resumir isso como transmissão ou perpetuidade indistinta de todos os direitos morais.\n\nOs direitos patrimoniais envolvem utilização, fruição e disposição da obra (arts. 28–29), com modalidades independentes. Ter comprado o livro ou recebido um arquivo não confere automaticamente direito de digitalizar, traduzir ou distribuir. A cessão e a licença exigem verificar escopo e condições; o art. 37 afirma que adquirir original ou exemplar não confere direitos patrimoniais salvo convenção ou previsão legal.\n\n### Prazos e domínio público\n\nEm regra, os direitos patrimoniais duram **70 anos**, contados de 1º de janeiro do ano seguinte ao falecimento (art. 41). Na coautoria indivisível, considera-se a morte do último coautor sobrevivente (art. 42). Há regras próprias para obras anônimas/pseudônimas (art. 43) e audiovisuais/fotográficas (art. 44).\n\nO art. 45 também contempla autores falecidos sem sucessores e autores desconhecidos, com ressalva à proteção legal dos conhecimentos étnicos e tradicionais. Obra anônima, autor desconhecido e autor sem sucessores não são categorias intercambiáveis. Mesmo quando o original está em domínio público, tradução, notas ou edição criativa posterior podem ter proteção própria.\n\n**Aplicação e recuperação:** Comprar um exemplar não autoriza traduzir e distribuir a obra. Verifique modalidade de uso e direitos envolvidos.",
    "checkpointIds": [
      "rt-9-3-3"
    ]
  },
  {
    "id": "sub-9-3-bloco-4",
    "titulo": "Limitações legais, interpretação e bibliotecas",
    "objetivos": [
      "Distinguir hipóteses legais e referências pertinentes."
    ],
    "conteudo": "O direito autoral convive com educação, cultura, informação e outros direitos fundamentais. A LDA contém limitações nos arts. 46–48; o Brasil não deve ser descrito como se aplicasse automaticamente a cláusula norte-americana de *fair use*. Também é incorreto ensinar como consenso absoluto que toda hipótese fora da lista literal é necessariamente ilícita: a jurisprudência do STJ admite interpretação das limitações à luz dos direitos fundamentais e da regra dos três passos. Isso exige análise do caso, sem criar autorização genérica para copiar tudo.\n\n| Hipótese | Dispositivo e condições principais |\n|---|---|\n| Reprodução privada | Art. 46, II: pequenos trechos, em um só exemplar, para uso privado do copista, feita por ele e sem intuito de lucro. A lei não fixa percentual universal de 10% ou 20%. |\n| Citação | Art. 46, III: passagens para estudo, crítica ou polêmica, na medida justificada, com indicação de autor e origem. Não confundir com o inciso VIII. |\n| Reprodução em obra nova | Art. 46, VIII: pequenos trechos ou obra integral de artes plásticas, atendidas as condições de finalidade e de não prejudicar a exploração normal nem interesses legítimos injustificadamente. |\n| Prova | Art. 46, VII: uso para produzir prova judiciária ou administrativa. Não corresponde à alínea c do inciso I. |\n| Execução e representação | Art. 46, VI: hipóteses familiares ou didáticas em estabelecimento de ensino, sem intuito de lucro, nos termos legais. Não autoriza toda cópia didática. |\n| Retrato encomendado | Art. 46, I, c, com condições; não é o inciso V. |\n| Acessibilidade no texto da LDA | Art. 46, I, d, refere-se a uso exclusivo de deficientes visuais, sem fins comerciais, em Braille ou suporte destinado a eles. O Tratado de Marraqueche tem âmbito e requisitos próprios. |\n\nO **Tratado de Marraqueche**, promulgado pelo Decreto 9.522/2018 e regulamentado pelo Decreto 10.882/2021, abrange beneficiários e entidades autorizadas definidos no regime, com condições de produção, fornecimento e intercâmbio de formatos acessíveis. Não basta uma instituição chamar-se biblioteca para ignorar os requisitos; nem toda autorização se limita ao texto literal da alínea d da LDA.\n\nParódias e paráfrases são tratadas no art. 47, com condições. O art. 48 trata da representação de obras permanentemente situadas em logradouro público por meios indicados na norma. “Está na internet” não equivale a “está em logradouro público” para esse fim.\n\n### Decisão documentada\n\nUma biblioteca gratuita não recebe autorização irrestrita para reproduzir e distribuir integralmente obras protegidas. Por outro lado, uma cópia integral pode ser permitida por licença, domínio público, autorização ou hipótese específica aplicável. Evite tanto a autorização universal quanto a proibição absoluta.\n\nA **Súmula 522/STJ trata de falsa identidade**, não de livros. O art. 37 da LDA não enuncia uma regra geral de exaurimento digital. Empréstimo físico, transmissão de arquivo e reprodução são operações diferentes; não se transfere uma conclusão automaticamente de uma para outra.\n\n**Roteiro:** identifique obra e versão; confira titularidade e prazo; leia licença e autorizações; analise hipótese legal e seus requisitos; verifique direitos conexos, personalidade, dados pessoais e condições institucionais; registre a conclusão e as incertezas. Havendo controvérsia jurídica concreta, encaminhe ao órgão competente sem inventar jurisprudência.\n\n**Aplicação e recuperação:** Copiar para estudar, citar em artigo e produzir formato acessível são hipóteses diferentes, com requisitos próprios. Não basta alegar finalidade educativa.",
    "checkpointIds": [
      "cp-9-3-2",
      "rt-9-3-4"
    ]
  },
  {
    "id": "sub-9-3-bloco-5",
    "titulo": "O Sistema Creative Commons (Lawrence Lessig) e as Licenças Abertas",
    "objetivos": [
      "Interpretar licenças segundo versão e alcance dos direitos."
    ],
    "conteudo": "Criado em 2001 por um grupo de colaboradores que incluiu **Lawrence Lessig**, com as primeiras licenças lançadas em 2002, o projeto **Creative Commons (CC)** nasceu para sanar o descompasso entre a legislação autoral analógica e a cultura digital da internet:\n\n* Em vez do rígido modelo binário *\"Todos os direitos reservados\"* (*All Rights Reserved*), o Creative Commons consagrou a flexibilidade de **\"Alguns direitos reservados\" (*Some Rights Reserved*)**.\n* As licenças CC **não anulam nem substituem o Direito Autoral**; ao contrário, são contratos-padrão outorgados pelo próprio autor com base na legislação autoral vigente, autorizando previamente à coletividade certos usos de sua obra.\n\n#### A. A Estrutura em Três Camadas das Licenças CC\n1. **Código Legal (*Legal Code*):** O texto jurídico integral e formal, redigido por juristas especializados, para garantir validade jurídica perante os tribunais em múltiplas jurisdições ao redor do mundo.\n2. **Resumo Visual / Legível por Humanos (*Commons Deed*):** Resumo simplificado da licença, com linguagem acessível e acompanhado dos ícones visuais padronizados.\n3. **Código Legível por Máquinas (*Machine-Readable Code*):** Metadados estruturados em formato RDF/XML, XMP e Schema.org que permitem a mecanismos de busca (Google, Bing) e indexadores identificar automaticamente os direitos concedidos sobre o arquivo.\n\n#### B. As Quatro Condições Modulares do Creative Commons\n\n| Módulo | Nome Oficial | Ícone / Sigla | Significado Jurídico e Regra de Ouro |\n| :--- | :--- | :---: | :--- |\n| **Atribuição** | *Attribution* | **BY** | **Presente nas seis licenças atuais; CC0 é ferramenta distinta.** Exige que o usuário cite o autor original, forneça o link da fonte e indique se modificações foram feitas. |\n| **Não Comercial** | *NonCommercial* | **NC** | Restringe usos predominantemente dirigidos a vantagem comercial ou compensação monetária; não depende apenas da natureza jurídica de quem usa. |\n| **Sem Derivações** | *NoDerivatives* | **ND** | Permite a redistribuição da obra original integral, mas não permite compartilhar adaptação sob a licença; a versão 4.0 distingue produzir de compartilhar adaptação. |\n| **Compartilha Igual** | *ShareAlike* | **SA** | Cláusula *copyleft*: se o usuário alterar ou transformar a obra, a obra derivada quando compartilhada, deve observar a mesma licença ou licença compatível admitida nos termos aplicáveis. |\n\n#### C. As Ferramentas de Domínio Público do CC\n* **CC0 (*Public Domain Dedication*):** Instrumento jurídico em que o criador abdica, voluntariamente e em escala global, de os direitos de copyright e conexos que possa afastar sobre a obra, até o limite máximo permitido pelas leis locais. É o padrão internacional mais recomendado para **conjuntos de dados abertos (*Open Datasets*)**, pois desonera o usuário de obrigações contratuais complexas.\n* **Marca de Domínio Público (*Public Domain Mark - PDM*):** Um rótulo de identificação utilizado para catalogar obras cujo prazo de proteção já expirou ou que já pertencem legitimamente ao domínio público, verificado o contexto jurídico pertinente.\n\n**Aplicação e recuperação:** CC BY-ND 4.0 e CC BY-NC 4.0 têm restrições distintas. Identifique se a operação é compartilhar adaptação e se o uso é comercial.",
    "checkpointIds": [
      "rt-9-3-5"
    ]
  },
  {
    "id": "sub-9-3-bloco-6",
    "titulo": "Métricas de Periódicos no Ecossistema Editorial e de Dados",
    "objetivos": [
      "Calcular e limitar a interpretação do JIF."
    ],
    "conteudo": "Para avaliar o prestígio e o impacto de periódicos científicos que publicam dados e artigos, a Ciência da Informação utiliza métricas bibliométricas consolidadas:\n\n#### A. Fator de Impacto (*Impact Factor - IF*) de Eugene Garfield\nDesenvolvido na década de 1960 pelo fundador do *Institute for Scientific Information (ISI)*, **Eugene Garfield**, e publicado no relatório anual **Journal Citation Reports (JCR)** (atualmente mantido pela Clarivate Analytics integrado à plataforma Web of Science):\n\n$\\text{FI}_{\\text{Ano } A} = \\frac{\\text{Citações recebidas no Ano } A \\text{ a artigos publicados nos Anos } (A-1) \\text{ e } (A-2)}{\\text{Número de itens citáveis publicados nos Anos } (A-1) \\text{ e } (A-2)}$\n\n* **A Distorção dos \"Itens Citáveis\" (*Citable Items* — Pegadinha de Ouro Cebraspe):**\n  * O denominador computa estritamente **itens indexados como Article e Review na base, segundo as regras do JCR**;\n  * O denominador **NÃO inclui** cartas ao editor (*letters*), editoriais, resenhas de livros, obituários ou erratas;\n  * Contudo, se um editorial ou carta receber citações no ano de referência, essas citações entram normalmente no **numerador**! Periódicos que publicam cartas e comentários muito citados conseguem inflar artificialmente seu Fator de Impacto.\n* **Autocitação de Periódicos (*Journal Self-Citation*):** Citações que os artigos de uma revista fazem a artigos da própria revista. Quando essa taxa ultrapassa limites razoáveis ou quando há \"cartéis de citação\" entre periódicos parceiros, a Clarivate Analytics aplica a pena de **supressão (*title suppression*)**, excluindo o periódico do JCR por um ou mais anos.\n\n---\n\n\n**Exemplo:** em 2026, 360 citações elegíveis a itens de 2024–2025, divididas por 120 itens citáveis desses anos, produzem JIF 3. Não entram todas as citações da história do periódico. A classificação documental é feita pela base, não apenas pelo nome da seção na revista. Supressão depende das regras e da análise do provedor, não de um percentual universal de autocitação. JIF de periódico não certifica qualidade de artigo ou pesquisador.\n\n**Aplicação e recuperação:** JIF 3 não significa que cada artigo recebeu três citações. A distribuição pode ser muito desigual.",
    "checkpointIds": [
      "cp-9-3-3",
      "rt-9-3-6"
    ]
  }
],
fontesTeoria: [
  {
    "id": "dcc",
    "titulo": "Digital Curation Centre — Curation Lifecycle Model",
    "localizador": "Ações sequenciais, de todo o ciclo e ocasionais.",
    "url": "https://www.dcc.ac.uk/guidance/curation-lifecycle-model"
  },
  {
    "id": "c6f6ed654557",
    "titulo": "Wilkinson et al. — FAIR Guiding Principles",
    "localizador": "Box 2: acesso controlado, metadados e reúso.",
    "url": "https://github.com/Heuller/hnc/blob/auditoria-2026-10/acervo-estudos/Comunica%C3%A7%C3%A3o%20cient%C3%ADfica%2C%20Ci%C3%AAncia%20Aberta%20e%20m%C3%A9tricas/sdata201618.pdf"
  },
  {
    "id": "lda",
    "titulo": "Lei 9.610/1998 — texto atualizado da Câmara",
    "localizador": "Arts. 7º–8º, 18, 24–29, 37, 41–48.",
    "url": "https://www2.camara.leg.br/legin/fed/lei/1998/lei-9610-19-fevereiro-1998-365399-normaatualizada-pl.html"
  },
  {
    "id": "marraqueche",
    "titulo": "Decreto 10.882/2021",
    "localizador": "Regulamentação do Tratado de Marraqueche.",
    "url": "https://legis.senado.leg.br/norma/35219772"
  },
  {
    "id": "juris",
    "titulo": "STJ — interpretação das limitações autorais",
    "localizador": "Decisão com referência à interpretação do rol dos arts. 46–48 e direitos fundamentais; não é autorização universal.",
    "url": "https://scon.stj.jus.br/SCON/pesquisar.jsp?b=DTXT&i=1&livre=%28ARESP+e+556767%29.nome."
  },
  {
    "id": "cc",
    "titulo": "Creative Commons — FAQ",
    "localizador": "ND 4.0, NC, SA e direitos que a licença não cobre.",
    "url": "https://creativecommons.org/faq/"
  },
  {
    "id": "jcr",
    "titulo": "Clarivate — JCR, Open Access",
    "localizador": "Itens citáveis indexados como artigos e revisões.",
    "url": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351462652433-Open-Access"
  }
],
};

export interface PegadinhaBloco {
  id: string;
  topico: string;
  afirmacaoFalsa: string;
  armadilhaCebraspe: string;
  gabaritoOficial: 'C' | 'E';
  fundamentacaoCanonico: string;
  fontePrimaria: string;
  submoduloRef: string;
  versao_correta?: string;
  gatilho?: string;
  dataConferencia?: string;
}

export interface BlocoEditalVespera {
  id: string;
  titulo: string;
  sigla: string;
  descricao: string;
  modulosRelacionados: string[];
  pegadinhas: PegadinhaBloco[];
}

export const MATRIZ_BLOCOS_EDITAL_VESPERA: BlocoEditalVespera[] = [
  {
    "id": "bloco-a",
    "titulo": "Bloco A: Ciência da Informação, Gestão, Governança e Ética",
    "sigla": "BLOCO A",
    "descricao": "Epistemologia, teoria do documento, governança de dados DAMA-DMBOK2, papéis corporativos, qualidade, ética profissional e legislação informacional.",
    "modulosRelacionados": [
      "M1",
      "M1.6",
      "M1.7"
    ],
    "pegadinhas": [
      {
        "id": "bloco-a-1",
        "topico": "Governança de Dados vs Gerenciamento de Dados (DAMA-DMBOK2)",
        "afirmacaoFalsa": "A governança de dados restringe-se à administração operacional de bancos de dados relacionais, rotinas de indexação e execução técnica de backups.",
        "armadilhaCebraspe": "Reduzir governança a execução técnica.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Governança avalia, direciona e monitora; operações de banco e backup integram execução e gestão. As funções se articulam, mas administrar infraestrutura não esgota decisões de responsabilidade, objetivos e riscos.",
        "fontePrimaria": "TCU — Referencial Básico de Governança Organizacional, 3ª edição, 2020 — governança, gestão, cadeia de valor, liderança, estratégia e controle — https://portal.tcu.gov.br/data/files/FB/B6/FB/85/1CD4671023455957E18818A8/Referencial_basico_governanca_organizacional_3_edicao.pdf",
        "submoduloRef": "sub-1-6",
        "versao_correta": "Governança orienta responsabilidades e monitoramento, articulando-se à gestão operacional.",
        "gatilho": "restringe-se",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-2",
        "topico": "Data Owner vs Data Custodian",
        "afirmacaoFalsa": "Ser responsável pela infraestrutura dos servidores torna o técnico de TI automaticamente Data Owner de todos os dados neles armazenados.",
        "armadilhaCebraspe": "Confundir atividade técnica e responsabilidade formal.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O papel de owner depende de atribuição formal e responsabilidade pelo domínio. Manter infraestrutura não torna alguém automaticamente seu dono de negócio. Custódia técnica, administração de sistemas e responsabilidade decisória podem ser distribuídas conforme o modelo institucional.",
        "fontePrimaria": "GOV.UK — Data ownership model — responsabilidades de data owner e data steward; modelo de referência para caso hipotético — https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model",
        "submoduloRef": "sub-1-6",
        "versao_correta": "Papéis de owner e custódia técnica dependem da definição institucional de responsabilidades.",
        "gatilho": "automaticamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-3",
        "topico": "Papel do Data Steward (Curador de Dados)",
        "afirmacaoFalsa": "O Data Steward atua primordialmente na aprovação do orçamento de TI e na manutenção do hardware dos data centers.",
        "armadilhaCebraspe": "Trocar atribuições de qualidade e infraestrutura.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Steward acompanha qualidade, definições e questões do uso diário dos dados no modelo adotado. Aprovar orçamento e manter hardware não definem esse papel. Uma pessoa pode acumular funções, mas isso não torna suas finalidades idênticas.",
        "fontePrimaria": "GOV.UK — Data ownership model — responsabilidades de data owner e data steward; modelo de referência para caso hipotético — https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model",
        "submoduloRef": "sub-1-6",
        "versao_correta": "Steward atua na gestão cotidiana e qualidade dos dados conforme responsabilidades atribuídas.",
        "gatilho": "primordialmente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-4",
        "topico": "Linhagem de Dados (Data Lineage) vs Logs de Acesso",
        "afirmacaoFalsa": "A auditoria de linhagem de dados limita-se a armazenar o endereço IP e o horário em que usuários autenticados fizeram consultas no sistema.",
        "armadilhaCebraspe": "Confundir histórico de transformação e log de acesso.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Proveniência e linhagem tratam de origem, atividades, agentes e transformações. Logs de consulta podem contribuir, mas não bastam para explicar como um dado foi produzido e modificado. Rastreabilidade exige registros adequados, não resulta de adotar uma sigla.",
        "fontePrimaria": "W3C — PROV-O: The PROV Ontology. 2013 — entidades, atividades, agentes e relações de proveniência — https://www.w3.org/TR/prov-o/",
        "submoduloRef": "sub-1-6",
        "versao_correta": "Linhagem pode documentar origem e transformações, além de acessos realizados.",
        "gatilho": "limita-se",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-5",
        "topico": "Dimensões de Qualidade de Dados (Wang & Strong)",
        "afirmacaoFalsa": "A qualidade de dados avalia-se exclusivamente pela exatidão sintática e ausência matemática de campos nulos em tabelas estruturadas.",
        "armadilhaCebraspe": "Reduzir qualidade a um único teste sintático.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Qualidade depende da finalidade: dados corretos podem estar desatualizados, incompletos para uma tarefa ou incompreensíveis ao público. Campos nulos podem inclusive ser legítimos. Ausência de erro sintático não esgota adequação ao uso.",
        "fontePrimaria": "GOV.UK — Data ownership model — responsabilidades de data owner e data steward; modelo de referência para caso hipotético — https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model",
        "submoduloRef": "sub-1-6",
        "versao_correta": "Qualidade pode exigir avaliar exatidão, atualidade, completude e compreensão conforme o uso.",
        "gatilho": "exclusivamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-6",
        "topico": "Dados Mestres vs Dados de Referência",
        "afirmacaoFalsa": "Dados de referência, como listas de códigos de moedas, nunca se alteram e dispensam controle de versão e atualização.",
        "armadilhaCebraspe": "Confundir padronização e imutabilidade.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Dados de referência padronizam valores como códigos; dados mestres descrevem entidades centrais. Listas de códigos podem ser atualizadas. Não se deve ensinar imutabilidade como característica necessária nem definir todas as entidades pelo mesmo papel em qualquer instituição.",
        "fontePrimaria": "GOV.UK — Data ownership model — responsabilidades de data owner e data steward; modelo de referência para caso hipotético — https://www.gov.uk/government/publications/data-ownership-in-government/data-ownership-model",
        "submoduloRef": "sub-1-6",
        "versao_correta": "Listas de referência padronizam valores e podem sofrer atualizações controladas.",
        "gatilho": "nunca se alteram",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-7",
        "topico": "Documentação de Paul Otlet vs Biblioteconomia Tradicional",
        "afirmacaoFalsa": "A Documentação concebida por Paul Otlet no Traité de Documentation limitava-se à custódia passiva e conservação de livros impressos encadernados.",
        "armadilhaCebraspe": "Reduzir documentação à custódia do livro.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O projeto documental contempla materiais e unidades de informação que excedem o livro encadernado. Organizar para consulta e circulação não se resume a guardar fisicamente. Isso não implica desprezar conservação, que integra condições de uso.",
        "fontePrimaria": "OTLET, Paul. Tratado de documentação; original de 1934 — seção 124: O livro e a medida. Bibliometria. Obra do acervo HNC.",
        "submoduloRef": "sub-1-1",
        "versao_correta": "A documentação de Otlet amplia materiais e formas de organização para acesso e uso.",
        "gatilho": "limitava-se",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-8",
        "topico": "Suzanne Briet e a Noção Relacional de Documento",
        "afirmacaoFalsa": "Para Suzanne Briet, qualquer elemento da natureza em seu habitat original, como um animal selvagem na floresta, já constitui formalmente um documento.",
        "armadilhaCebraspe": "Separar objeto existente e função documental contextual.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A condição documental envolve seleção, organização e uso como evidência em um contexto. O exemplo do antílope em Briet distingue o animal na natureza daquele incorporado a uma instituição de estudo. Natureza física isolada não basta.",
        "fontePrimaria": "BUCKLAND, Michael. Information as thing. 1991 — processo, conhecimento e coisa; discussão do documento e exemplo de Briet — https://doi.org/10.1002/(SICI)1097-4571(199106)42:5<351::AID-ASI5>3.0.CO;2-3",
        "submoduloRef": "sub-1-1",
        "versao_correta": "Um objeto pode adquirir função documental ao ser selecionado e organizado como evidência.",
        "gatilho": "qualquer elemento",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-9",
        "topico": "Paradigmas Epistemológicos de Rafael Capurro",
        "afirmacaoFalsa": "O paradigma cognitivo de Capurro postula que a informação é uma entidade física independente do sujeito e transmitida como mero telégrafo de bits.",
        "armadilhaCebraspe": "Trocar o foco físico e o cognitivo.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O enfoque cognitivo considera estados e transformações do conhecimento do sujeito. Tratá-lo como mera transmissão física troca os paradigmas da tipologia. A perspectiva social acrescenta contexto compartilhado, sem apagar a existência dos demais recortes.",
        "fontePrimaria": "CAPURRO, Rafael. Epistemologia e ciência da informação. 2003 — paradigmas físico, cognitivo e social — https://www.capurro.de/enancib_p.htm",
        "submoduloRef": "sub-1-3",
        "versao_correta": "O paradigma cognitivo considera o sujeito e suas estruturas de conhecimento.",
        "gatilho": "independente do sujeito",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-10",
        "topico": "Tipologia Tripartite de Michael Buckland",
        "afirmacaoFalsa": "Segundo Michael Buckland, sistemas informatizados de recuperação operam diretamente sobre a Informação-como-Conhecimento e a Informação-como-Processo.",
        "armadilhaCebraspe": "Confundir representação manipulável e estado de conhecimento.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Sistemas operam sobre representações e registros, não sobre conhecimento mental ou processo vivido diretamente. Informação-como-coisa não se limita a papel: pode incluir dados e evidências representados. A representação possibilita processamento, sem equivaler integralmente ao conhecer.",
        "fontePrimaria": "BUCKLAND, Michael. Information as thing. 1991 — processo, conhecimento e coisa; discussão do documento e exemplo de Briet — https://doi.org/10.1002/(SICI)1097-4571(199106)42:5<351::AID-ASI5>3.0.CO;2-3",
        "submoduloRef": "sub-1-3",
        "versao_correta": "Sistemas processam representações da informação, distinguindo-as do conhecimento mental e do processo.",
        "gatilho": "diretamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-11",
        "topico": "Sigilo Profissional e Código de Ética (Resolução CFB nº 207/2018)",
        "afirmacaoFalsa": "O bibliotecário deve fornecer imediatamente dados nominais de leituras e histórico de pesquisas parlamentares sigilosas mediante solicitação verbal de cidadão sob a LAI.",
        "armadilhaCebraspe": "Transformar pedido de informação em liberação automática.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O Código, nos arts. 5º e 9º, I, protege sigilo e prevê ressalvas legais; não há divulgação automática de consultas por simples pedido. LAI, proteção de dados e deveres profissionais precisam ser aplicados ao caso, sem sigilo absoluto nem transparência irrestrita.",
        "fontePrimaria": "CFB — Resolução 207/2018, Código de Ética e Deontologia — deveres profissionais e sigilo, arts. 5º e 9º — https://www.crb15.org.br/codigo-de-etica/",
        "submoduloRef": "sub-1-5",
        "versao_correta": "Comunicação de informações protegidas exige fundamento e condições legais, respeitado o dever profissional de sigilo.",
        "gatilho": "imediatamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-a-12",
        "topico": "LGPD no Legislativo (Lei 13.709/2018) e Dados Parlamentares",
        "afirmacaoFalsa": "Por poder revelar opinião política, todo registro de votação nominal de parlamentar é necessariamente secreto pela LGPD, mesmo quando a votação é pública.",
        "armadilhaCebraspe": "Confundir categoria de dado e restrição automática de publicidade.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Publicidade de votação nominal e tratamento de dados pessoais precisam ser harmonizados. Opinião política pode ser dado sensível; isso não torna todo registro de atuação parlamentar automaticamente secreto. O fundamento e a finalidade pública devem ser examinados no regime aplicável.",
        "fontePrimaria": "Lei 13.709/2018 — Lei Geral de Proteção de Dados Pessoais — finalidade, princípios, bases e condições de tratamento — https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html",
        "submoduloRef": "sub-9-4",
        "versao_correta": "A LGPD não torna automaticamente secreto todo registro de votação nominal de parlamentar.",
        "gatilho": "necessariamente",
        "dataConferencia": "2026-10-31"
      }
    ]
  },
  {
    "id": "bloco-b",
    "titulo": "Bloco B: Sistemas Informacionais, Tecnologia e Ciência de Dados",
    "sigla": "BLOCO B",
    "descricao": "CRISP-DM, mineração de textos, TF-IDF, leis bibliométricas de Luhn e Zipf, PLN, RAG, regex, OCR/HTR, bancos relacionais vs NoSQL, SQL e inglês contemporâneo.",
    "modulosRelacionados": [
      "M12",
      "M14"
    ],
    "pegadinhas": [
      {
        "id": "bloco-b-1",
        "topico": "Metodologia CRISP-DM e Distribuição de Esforço",
        "afirmacaoFalsa": "CRISP-DM fixa obrigatoriamente mais de 70% do tempo de qualquer projeto na fase de modelagem.",
        "armadilhaCebraspe": "Transformar estimativa contextual em regra do método.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "CRISP-DM descreve fases e retornos entre elas, não uma quota universal de tempo para modelagem. Esforço varia conforme dados, objetivo e restrições. Substituir 70% por outro percentual fixo na explicação repetiria a mesma falha.",
        "fontePrimaria": "IBM — CRISP-DM: metodologia e fases — seis fases iterativas; não estabelece uma porcentagem obrigatória universal por fase — https://www.ibm.com/docs/en/spss-modeler/18.5.0?topic=dm-crisp-help-overview",
        "submoduloRef": "sub-14-4",
        "versao_correta": "O esforço por fase em CRISP-DM depende do projeto e não de uma porcentagem universal obrigatória.",
        "gatilho": "fixa obrigatoriamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-2",
        "topico": "Ponderação Estatística TF-IDF (Salton & Spärck Jones)",
        "afirmacaoFalsa": "Quanto maior for a frequência com que uma palavra ocorre em todos os documentos de um acervo, maior será seu peso no cômputo de IDF.",
        "armadilhaCebraspe": "Inverter a relação entre frequência documental e discriminação.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Na forma clássica, IDF usa a relação entre total de documentos e documentos que contêm o termo. Se o termo aparece em todos, o fator clássico é zero; variantes suavizadas diferem. Frequência no documento e frequência documental não são a mesma medida.",
        "fontePrimaria": "MANNING, RAGHAVAN e SCHÜTZE. Introduction to Information Retrieval. 2008 — capítulos 1–2, 6, 8 e 11: operadores, processamento, ponderação, avaliação e BM25 — https://nlp.stanford.edu/IR-book/",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Em IDF clássico, maior frequência documental reduz o poder discriminativo do termo.",
        "gatilho": "maior será",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-3",
        "topico": "Lei de Luhn (Ponto de Corte e Indexação Automática)",
        "afirmacaoFalsa": "Na proposta de resumo automático de Luhn, basta escolher as palavras de maior frequência absoluta para garantir o melhor resumo de qualquer documento.",
        "armadilhaCebraspe": "Transformar frequência máxima em prova suficiente de relevância.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A proposta usa frequência e distribuição para estimar significância e seleciona sentenças, com procedimentos e limites. Palavra muito frequente não é automaticamente o melhor descritor ou resumo. A heurística histórica não é lei universal de compreensão do sentido.",
        "fontePrimaria": "Luhn — The Automatic Creation of Literature Abstracts, 1958 — frequência e distribuição de palavras e medida de significância — https://courses.ischool.berkeley.edu/i256/f06/papers/luhn58.pdf",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Frequência é uma evidência possível e exige tratamento e contexto para apoiar seleção de conteúdo.",
        "gatilho": "basta",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-4",
        "topico": "Lematização vs Stemização em Processamento de Linguagem Natural",
        "afirmacaoFalsa": "Stemização e lematização são termos equivalentes que reduzem a palavra à forma canônica de dicionário por meio da análise contextual de sua classe gramatical.",
        "armadilhaCebraspe": "Confundir radical heurístico e lema lexical.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Stemming aplica regras de redução e pode gerar formas que não são palavras de dicionário. Lematização busca lema com recursos lexicais ou morfológicos; algumas implementações usam contexto. Não se exige que toda lematização faça análise sintática completa.",
        "fontePrimaria": "MANNING, RAGHAVAN e SCHÜTZE. Introduction to Information Retrieval. 2008 — capítulos 1–2, 6, 8 e 11: operadores, processamento, ponderação, avaliação e BM25 — https://nlp.stanford.edu/IR-book/",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Stemming e lematização têm objetivos relacionados, mas métodos e resultados distintos.",
        "gatilho": "equivalentes",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-5",
        "topico": "Modelagem de Tópicos LDA (Latent Dirichlet Allocation)",
        "afirmacaoFalsa": "O modelo de tópicos LDA depende obrigatoriamente de milhares de exemplos de treino previamente anotados com rótulos atribuídos por especialistas humanos.",
        "armadilhaCebraspe": "Transferir requisito de supervisão a modelo não supervisionado.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "LDA clássico é um modelo não supervisionado que infere distribuições latentes de tópicos e palavras a partir do corpus. Não exige rótulos humanos como condição de aplicação. Modelos supervisionados de tópicos são outras variantes, não regra de todo LDA.",
        "fontePrimaria": "Blei, Ng e Jordan — Latent Dirichlet Allocation, 2003 — modelo generativo probabilístico com tópicos latentes — https://jmlr.org/papers/v3/blei03a.html",
        "submoduloRef": "sub-14-4",
        "versao_correta": "O LDA clássico infere estrutura latente sem exigir anotações de tópicos por documento.",
        "gatilho": "obrigatoriamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-6",
        "topico": "Classificação Zero-Shot com Modelos de Linguagem",
        "afirmacaoFalsa": "A classificação de textos em modo zero-shot exige retreinamento parcial com ajuste de pesos (fine-tuning) em amostras da nova classe.",
        "armadilhaCebraspe": "Confundir treinamento anterior do modelo e ajuste da tarefa nova.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Na classificação zero-shot delimitada, não são fornecidos exemplos rotulados da nova tarefa para ajuste específico. Pode-se orientar por descrições e contexto. Isso não significa que o modelo jamais tenha sido treinado, nem exige exclusivamente uma arquitetura NLI.",
        "fontePrimaria": "Brown et al. — Language Models are Few-Shot Learners, 2020 — seção específica identificada em cada revisão; documentação e versões indicadas no comentário — https://arxiv.org/abs/2005.14165",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Classificação zero-shot pode aplicar um modelo à nova tarefa sem ajuste específico por exemplos rotulados dela.",
        "gatilho": "exige",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-7",
        "topico": "Arquiteturas RAG (Retrieval-Augmented Generation) e Groundedness",
        "afirmacaoFalsa": "Em pipelines RAG, o LLM ignora os trechos recuperados da base de conhecimento vetorial e responde exclusivamente com base no conhecimento paramétrico de pré-treino.",
        "armadilhaCebraspe": "Confundir condicionamento documental e geração apenas paramétrica.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "RAG usa material recuperado para condicionar geração; ignorá-lo por definição contradiz a arquitetura. Mesmo com recuperação, a resposta pode usar mal o contexto ou errar. A técnica não elimina alucinações nem garante fidelidade automática.",
        "fontePrimaria": "LEWIS et al. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. 2020 — arquitetura e avaliação; não é garantia de correção de toda resposta — https://arxiv.org/abs/2005.11401",
        "submoduloRef": "sub-14-4",
        "versao_correta": "RAG pode condicionar a geração aos documentos recuperados, exigindo avaliação de recuperação e fidelidade.",
        "gatilho": "exclusivamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-8",
        "topico": "Métricas de Avaliação de OCR/HTR (CER vs WER)",
        "afirmacaoFalsa": "A taxa de erro de caracteres (CER) é computada dividindo o total de erros de palavras pelo número de sentenças processadas.",
        "armadilhaCebraspe": "Trocar unidade e denominador de uma métrica.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "CER compara caracteres e normaliza erros de edição pelo número de caracteres de referência; WER faz a comparação em palavras. Sentenças não são o denominador definidor do CER. Inserções podem produzir taxa superior a um, conforme a implementação e o caso.",
        "fontePrimaria": "Hugging Face Evaluate — implementação da métrica CER — fórmula (substituições + deleções + inserções) / caracteres de referência — https://github.com/huggingface/evaluate/blob/main/metrics/cer/cer.py",
        "submoduloRef": "sub-14-4",
        "versao_correta": "CER e WER usam unidades de referência diferentes: caracteres e palavras.",
        "gatilho": "sentenças",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-9",
        "topico": "Cláusula WHERE vs HAVING em Consultas SQL",
        "afirmacaoFalsa": "Em consultas SQL ANSI, funções agregadas como SUM(valor) > 1000 podem ser avaliadas e filtradas diretamente na cláusula WHERE.",
        "armadilhaCebraspe": "Confundir estágio lógico e função do filtro.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "WHERE filtra linhas antes do agrupamento; o filtro sobre o resultado agregado do mesmo nível pode usar HAVING. Agregação também pode ocorrer em subconsulta e ser filtrada externamente. Logo, não se transforma HAVING em única possibilidade de toda consulta SQL.",
        "fontePrimaria": "PostgreSQL — Table Expressions — WHERE, GROUP BY e HAVING — https://www.postgresql.org/docs/current/queries-table-expressions.html",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Filtros sobre agregação do mesmo nível podem ser expressos por HAVING; subconsultas são outra possibilidade.",
        "gatilho": "diretamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-10",
        "topico": "Bancos Relacionais (SQL) vs Bancos NoSQL (Teorema CAP)",
        "afirmacaoFalsa": "Sistemas NoSQL distribuídos baseados em grafos ou documentos garantem conformidade ACID estrita sem nenhuma perda de disponibilidade ou consistência perante partições de rede.",
        "armadilhaCebraspe": "Confundir modelo de dados, transações e garantias distribuídas.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Durante uma partição, as garantias de consistência e disponibilidade do teorema CAP não podem ambas ser asseguradas no sentido formal. Isso não proíbe transações ACID em qualquer NoSQL: tipo de modelo e garantias distribuídas são questões distintas.",
        "fontePrimaria": "Gilbert e Lynch — Brewer’s conjecture and the feasibility of consistent, available, partition-tolerant web services, 2002 — consistência e disponibilidade na presença de partições; não equivale a proibição de ACID em NoSQL — https://doi.org/10.1145/564585.564601",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Bancos NoSQL podem oferecer transações, mas o comportamento em partições exige examinar as garantias da arquitetura.",
        "gatilho": "sem nenhuma perda",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-11",
        "topico": "Expressões Regulares (Regex) e Quantificadores",
        "afirmacaoFalsa": "O quantificador asterisco (*) em sintaxe regex exige a presença obrigatória de ao menos uma ocorrência do padrão imediatamente anterior.",
        "armadilhaCebraspe": "Trocar limite mínimo de repetição.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O asterisco permite zero ou mais ocorrências, inclusive trecho vazio. Mais exige uma ou mais. A diferença do limite mínimo afeta diretamente a validação de cadeias e não é mera preferência de notação.",
        "fontePrimaria": "MDN — JavaScript Regular Expressions — classes de caracteres, quantificadores, âncoras e grupos — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions",
        "submoduloRef": "sub-14-4",
        "versao_correta": "Asterisco admite zero ou mais ocorrências; mais exige uma ou mais.",
        "gatilho": "ao menos uma",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-b-12",
        "topico": "Assinatura Digital e ICP-Brasil (MP nº 2.200-2/2001)",
        "afirmacaoFalsa": "A assinatura digital fundamentada em criptografia assimétrica garante o não repúdio, sendo incapaz de atestar a integridade do arquivo assinado.",
        "armadilhaCebraspe": "Negar uma propriedade de verificação e exagerar outra.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Assinatura digital permite verificar a integridade do que foi assinado com o mecanismo e chaves apropriados. Não repúdio depende também de validade das chaves, identificação e evidências; não é impossibilidade absoluta de contestar. Nem toda assinatura consiste literalmente em cifrar um hash.",
        "fontePrimaria": "NIST — FIPS 186-5: Digital Signature Standard — assinatura e verificação, integridade e autenticação de origem — https://csrc.nist.gov/pubs/fips/186-5/final",
        "submoduloRef": "sub-14-2",
        "versao_correta": "Uma assinatura digital pode apoiar verificação de integridade e autoria nas condições do mecanismo e da infraestrutura.",
        "gatilho": "incapaz",
        "dataConferencia": "2026-10-31"
      }
    ]
  },
  {
    "id": "bloco-c",
    "titulo": "Bloco C: Legislação Institucional e Normas Aplicadas",
    "sigla": "BLOCO C",
    "descricao": "Constituição Federal de 1988 (Poder Legislativo e direitos), Regimento Interno da Câmara (RICD), Regimento Comum (RCCN), Lei 8.112/1990 e LAI.",
    "modulosRelacionados": [
      "M10",
      "M11"
    ],
    "pegadinhas": [
      {
        "id": "bloco-c-1",
        "topico": "Sistemas Eleitorais e Mandatos Parlamentares (CF/88 arts. 45 e 46)",
        "afirmacaoFalsa": "Deputados Federais e Senadores da República são eleitos pelo sistema proporcional para mandatos de quatro anos.",
        "armadilhaCebraspe": "Generalizar sistema e mandato de uma Casa para a outra.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Deputados são eleitos pelo sistema proporcional para quatro anos; senadores, pelo majoritário para oito anos, com renovação alternada. A expressão membros do Congresso não uniformiza sistema e duração do mandato de ambas as Casas.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-4",
        "versao_correta": "A Câmara usa sistema proporcional e o Senado majoritário, com mandatos distintos.",
        "gatilho": "proporcional",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-2",
        "topico": "Imunidade Prisional dos Deputados e Senadores (CF/88 art. 53, § 2º)",
        "afirmacaoFalsa": "Membros do Congresso Nacional podem ser presos preventivamente por decisão monocrática de juiz de primeira instância durante a instrução penal.",
        "armadilhaCebraspe": "Ignorar regime específico de imunidade formal.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O art. 53, §2º protege membros desde a diplomação, ressalvando flagrante de crime inafiançável, com remessa à Casa em 24 horas. A formulação não autoriza prisão preventiva ordinária por qualquer juiz. Casos jurisprudenciais excepcionais exigem análise própria.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-4",
        "versao_correta": "A regra constitucional de prisão parlamentar deve observar imunidade, hipótese de flagrante e deliberação da Casa.",
        "gatilho": "juiz de primeira instância",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-3",
        "topico": "Hipóteses de Perda de Mandato Parlamentar (CF/88 art. 55)",
        "afirmacaoFalsa": "A perda de mandato de Deputado que deixar de comparecer à terça parte das sessões ordinárias exige votação secreta da maioria absoluta do Plenário.",
        "armadilhaCebraspe": "Trocar declaração pela Mesa e decisão pelo Plenário.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A hipótese do art. 55, III considera faltas em cada sessão legislativa, ressalvadas licença ou missão autorizada, e a perda é declarada pela Mesa com ampla defesa. Não é decisão secreta obrigatória do Plenário. Casos do §2º têm outro procedimento.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-4",
        "versao_correta": "Na hipótese constitucional de faltas, a perda é declarada pela Mesa, assegurada ampla defesa e consideradas as ressalvas.",
        "gatilho": "votação secreta",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-4",
        "topico": "Apreciação Conclusiva nas Comissões (RICD art. 24, II)",
        "afirmacaoFalsa": "Projetos de lei sujeitos à apreciação conclusiva nas comissões devem ser obrigatoriamente submetidos a uma votação final confirmatória no Plenário.",
        "armadilhaCebraspe": "Confundir competência conclusiva e etapa preparatória obrigatória.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A apreciação conclusiva pode dispensar deliberação plenária conforme a hipótese constitucional e regimental. Recurso cabível pode levar a matéria ao Plenário. Não há votação confirmatória obrigatória apenas por existir conclusão nas comissões.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-1",
        "versao_correta": "A competência conclusiva dispensa deliberação plenária nas hipóteses cabíveis, ressalvado recurso e demais requisitos.",
        "gatilho": "obrigatoriamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-5",
        "topico": "Sessão Legislativa Ordinária e LDO (CF art. 57 e RICD art. 2º)",
        "afirmacaoFalsa": "O Congresso Nacional entra obrigatoriamente em recesso no dia 17 de julho mesmo que a Lei de Diretrizes Orçamentárias (LDO) não tenha sido votada.",
        "armadilhaCebraspe": "Excluir condição constitucional de uma data do calendário.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O art. 57, §2º impede interromper a sessão legislativa sem aprovação do projeto de LDO. O calendário geral não afasta essa condição. As datas podem exigir considerar dias não úteis e regras específicas, sem mudar a exigência de aprovação.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-1",
        "versao_correta": "A interrupção do meio do ano depende da aprovação da LDO nos termos constitucionais.",
        "gatilho": "mesmo que",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-6",
        "topico": "Duração e Recondução na Mesa Diretora (RICD art. 5º e CF art. 57, § 4º)",
        "afirmacaoFalsa": "Os membros da Mesa Diretora da Câmara dos Deputados são eleitos para mandato de quatro anos, permitida a reeleição para os mesmos cargos.",
        "armadilhaCebraspe": "Confundir legislatura e mandato da Mesa.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Mandato da Mesa é de dois anos. Recondução ao mesmo cargo na eleição imediatamente subsequente tem disciplina constitucional e regimental, com distinção entre legislaturas. O erro de duração já impede validar a assertiva.",
        "fontePrimaria": "Regimento Interno da Câmara dos Deputados — atualizado até a Resolução 34/2026 — artigos indicados individualmente. Obra do acervo HNC.",
        "submoduloRef": "sub-10-1",
        "versao_correta": "Os membros da Mesa são eleitos para dois anos, observada a disciplina de recondução.",
        "gatilho": "quatro anos",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-7",
        "topico": "Presidência da Mesa do Congresso Nacional (RCCN art. 3º e CF art. 57, § 5º)",
        "afirmacaoFalsa": "A Mesa do Congresso Nacional é presidida pelo 1º Vice-Presidente da Câmara dos Deputados que atua em substituição permanente ao Presidente do Senado.",
        "armadilhaCebraspe": "Trocar titularidade e eventual substituição.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A presidência da Mesa do Congresso cabe ao Presidente do Senado. Os demais cargos são distribuídos alternadamente segundo equivalência constitucional. Substituição eventual não converte outro cargo em titular permanente da presidência do Congresso.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-6",
        "versao_correta": "A Mesa do Congresso é presidida pelo Presidente do Senado, nos termos do art. 57, §5º.",
        "gatilho": "1º Vice-Presidente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-8",
        "topico": "Apreciação de Veto Presidencial pelo Congresso (CF art. 66 e RCCN art. 104)",
        "afirmacaoFalsa": "O veto do Presidente da República é apreciado em sessões separadas da Câmara e do Senado, e sua rejeição exige maioria simples de votos.",
        "armadilhaCebraspe": "Confundir forma de sessão e forma de apuração.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Veto é apreciado em sessão conjunta, com votos contabilizados separadamente por Casa e maioria absoluta para rejeição. Conjunta não significa somar deputados e senadores em um único quórum. Também não se deve chamar maioria absoluta de maioria qualificada por simples equivalência.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-10-6",
        "versao_correta": "Veto é apreciado em sessão conjunta e sua rejeição exige maioria absoluta em cada Casa.",
        "gatilho": "sessões separadas",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-9",
        "topico": "Requisição vs Cessão de Servidores Públicos (Lei 8.112/1990 e Lei 9.007/1995)",
        "afirmacaoFalsa": "Uma requisição de servidor expressamente tornada compulsória pela lei aplicável pode ser recusada por mera conveniência do cedente, mesmo atendidos seus requisitos legais.",
        "armadilhaCebraspe": "Generalizar norma de outro órgão e confundir requisição com cessão.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Quando uma lei aplicável estabelece requisição compulsória e seus requisitos são atendidos, não cabe converter o dever em cessão discricionária. Isso não atribui prerrogativa irrestrita à Câmara por leis específicas de outros órgãos. Competência e condições precisam ser identificadas.",
        "fontePrimaria": "Constituição da República Federativa do Brasil — texto atualizado — dispositivos indicados em cada questão; observar o corte do edital — https://www2.camara.leg.br/legin/fed/consti/1988/constituicao-1988-5-outubro-1988-322142-normaatualizada-pl.html",
        "submoduloRef": "sub-11-3",
        "versao_correta": "Uma requisição expressamente compulsória em lei deve observar essa lei, sem se confundir com cessão ordinária.",
        "gatilho": "mera conveniência",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-10",
        "topico": "Provimento Derivado e Súmula Vinculante 43 do STF",
        "afirmacaoFalsa": "A ascensão funcional permite investir servidor em cargo de outra carreira sem concurso próprio, apenas por ter obtido escolaridade superior.",
        "armadilhaCebraspe": "Confundir desenvolvimento na carreira e investidura em outra.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A SV 43 veda provimento que permita ingresso, sem concurso próprio, em cargo fora da carreira de investidura. Movimentação e desenvolvimento dentro dos limites constitucionais não equivalem a ascender livremente para qualquer carreira superior.",
        "fontePrimaria": "STF — Constituição e Supremo, art. 37 — princípios administrativos; SV 13 e controle de atos — https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=37&abrirBase=CF",
        "submoduloRef": "sub-11-1",
        "versao_correta": "Ingresso em cargo de outra carreira exige o concurso constitucionalmente pertinente, ressalvadas hipóteses constitucionais próprias.",
        "gatilho": "outra carreira",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-11",
        "topico": "Prazos Prescricionais do Regime Disciplinar (Lei 8.112/1990 art. 142)",
        "afirmacaoFalsa": "A ação disciplinar administrativa que comina penalidade de demissão a servidor prescreve no prazo improrrogável de dois anos do fato.",
        "armadilhaCebraspe": "Trocar prazo, termo inicial e possibilidade de interrupção.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O art. 142 prevê cinco anos para infrações puníveis com demissão, cassação e destituição indicadas; dois para suspensão e 180 dias para advertência. Conhecimento, interrupção e eventual prazo penal devem ser considerados. Não há dois anos improrrogáveis contados sempre do fato.",
        "fontePrimaria": "Lei 8.112/1990 — regime jurídico dos servidores federais — provimento, movimentação, responsabilidade e processo disciplinar — https://www2.camara.leg.br/legin/fed/lei/1990/lei-8112-11-dezembro-1990-322161-normaatualizada-pl.html",
        "submoduloRef": "sub-11-8",
        "versao_correta": "A prescrição disciplinar depende da penalidade e das regras de início, interrupção e prazo penal aplicável.",
        "gatilho": "dois anos",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-c-12",
        "topico": "Informações sobre Violação de Direitos Humanos na LAI (Lei 12.527/2011)",
        "afirmacaoFalsa": "É lícito classificar como ultrassecreto um documento para ocultar informação sobre violação de direitos humanos praticada por agentes públicos.",
        "armadilhaCebraspe": "Usar classificação para encobrir violação de direitos humanos.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "O art. 21, parágrafo único, impede usar restrição para esconder informações sobre violações de direitos humanos praticadas por agentes públicos ou a mando de autoridades. Isso não dispensa analisar proteção de vítimas e outros dados pessoais sem ocultar a violação.",
        "fontePrimaria": "Lei 12.527/2011 — Lei de Acesso à Informação — publicidade, transparência, pedidos, restrições e classificação — https://www2.camara.leg.br/legin/fed/lei/2011/lei-12527-18-novembro-2011-611802-normaatualizada-pl.html",
        "submoduloRef": "sub-9-4",
        "versao_correta": "Classificação de sigilo não pode ser usada para ocultar a informação protegida pelo art. 21, parágrafo único, da LAI.",
        "gatilho": "ultrassecreto",
        "dataConferencia": "2026-10-31"
      }
    ]
  },
  {
    "id": "bloco-d",
    "titulo": "Bloco D: Organização, Tratamento e Representação da Informação",
    "sigla": "BLOCO D",
    "descricao": "Catalogação AACR2r, RDA/3R, FRBR/LRM, MARC 21, Dublin Core, BIBFRAME, CDD, CDU, tesauros ISO 25964, indexação e direito autoral (Lei 9.610/98).",
    "modulosRelacionados": [
      "M2",
      "M3",
      "M7",
      "M9"
    ],
    "pegadinhas": [
      {
        "id": "bloco-d-1",
        "topico": "IFLA LRM e Atributos Físicos de Entidades",
        "afirmacaoFalsa": "No modelo conceitual IFLA LRM adotado pelo RDA, a entidade Expressão agrega atributos materiais tangíveis como suporte e dimensões em centímetros.",
        "armadilhaCebraspe": "Trocar níveis de abstração do modelo.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Expressão corresponde à realização intelectual/artística, como um texto em determinada língua. Suporte e características de incorporação pertencem a outros níveis do modelo, e o exemplar individual corresponde a Item. Não se deve equiparar realização intelectual a objeto físico.",
        "fontePrimaria": "IFLA Library Reference Model, 2017, revisão de dezembro — 3: tarefas; 4: entidades e relações; 5.7: agregados — https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/frbr-lrm/ifla-lrm-august-2017_rev201712.pdf",
        "submoduloRef": "sub-2-1",
        "versao_correta": "No LRM, Expressão se distingue da incorporação em Manifestação e do exemplar Item.",
        "gatilho": "Expressão",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-2",
        "topico": "RDA e a Superação da Regra dos Três Autores",
        "afirmacaoFalsa": "O código RDA estabelece a obrigatoriedade estrita de truncar a listagem de autores secundários por meio do termo et al. sempre que houver mais de três criadores.",
        "armadilhaCebraspe": "Transferir regra entre códigos e confundir transcrição e acesso.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Não há transposição universal da regra dos três do AACR2r como obrigação de truncamento no RDA. Registro de responsabilidades e pontos de acesso têm instruções e políticas próprias, conforme edição. Transcrever uma indicação e criar todos os acessos são decisões relacionadas, mas distintas.",
        "fontePrimaria": "RDA: Descrição e Acesso de Recursos — brochura histórica em português — fundamentos do desenvolvimento do RDA original; contexto histórico, não descrição completa do RDA atual. Obra do acervo HNC.",
        "submoduloRef": "sub-2-3",
        "versao_correta": "RDA não exige truncamento universal de responsabilidades por haver mais de três criadores.",
        "gatilho": "sempre",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-3",
        "topico": "Estrutura dos Campos de Controle no MARC 21 (Bloco 00X)",
        "afirmacaoFalsa": "Campos do bloco 00X no formato MARC 21 Bibliográfico caracterizam-se por exibir dois indicadores numéricos e códigos alfanuméricos de subcampo.",
        "armadilhaCebraspe": "Transferir estrutura dos campos de dados para campos de controle.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "00X não usam indicadores e subcampos delimitados como os campos de dados. Nem todo 00X tem a mesma extensão ou estrutura: 008 tem posições fixas, enquanto outros campos de controle diferem. A ausência de subcampos não autoriza chamá-los todos de bytes posicionais idênticos.",
        "fontePrimaria": "Library of Congress — MARC 21 formats — Bibliographic e Authority: formatos; OCLC é organização cooperativa, não formato — https://www.loc.gov/marc/",
        "submoduloRef": "sub-2-4",
        "versao_correta": "Campos de controle 00X não têm indicadores nem subcampos com delimitador.",
        "gatilho": "dois indicadores",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-4",
        "topico": "MARC 21 Autoridades - Remissivas 4XX vs 5XX",
        "afirmacaoFalsa": "No formato MARC 21 de Autoridades, o bloco de campos 4XX cria remissivas recíprocas do tipo \"Ver Também\" entre cabeçalhos autorizados.",
        "armadilhaCebraspe": "Inverter blocos de controle de autoridades.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Em registros de autoridade, 4XX apresentam formas variantes para remissivas de ver; 5XX ligam formas autorizadas relacionadas por ver também. Uma relação entre registros não é necessariamente recíproca em toda implementação; o tipo e o perfil devem ser observados.",
        "fontePrimaria": "Library of Congress — MARC 21 formats — Bibliographic e Authority: formatos; OCLC é organização cooperativa, não formato — https://www.loc.gov/marc/",
        "submoduloRef": "sub-2-4",
        "versao_correta": "Em autoridades MARC, 4XX e 5XX têm funções diferentes de remissiva e relacionamento.",
        "gatilho": "4XX",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-5",
        "topico": "BIBFRAME 2.0 e Abstração em Grafos RDF",
        "afirmacaoFalsa": "O modelo BIBFRAME substitui o formato MARC 21 armazenando metadados bibliográficos em tabelas relacionais SQL estruturadas em campos alfanuméricos de 3 dígitos.",
        "armadilhaCebraspe": "Confundir modelo semântico e armazenamento interno.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "BIBFRAME 2.0 descreve informação bibliográfica em um modelo de dados conectados com Work, Instance e Item. Um produto pode usar infraestrutura relacional internamente, mas tabelas SQL e tags de três dígitos não definem o modelo. A transição não extinguiu todo MARC.",
        "fontePrimaria": "Library of Congress — Overview of the BIBFRAME 2.0 Model — Work, Instance e Item; distinção de níveis — https://www.loc.gov/bibframe/docs/bibframe2-model.html",
        "submoduloRef": "sub-2-5",
        "versao_correta": "BIBFRAME 2.0 se baseia em representação de dados conectados, distinguindo Work, Instance e Item.",
        "gatilho": "tabelas relacionais",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-6",
        "topico": "Dublin Core Qualificado e Princípio Dumb-Down",
        "afirmacaoFalsa": "A utilização de qualificadores no padrão Dublin Core invalida a interoperabilidade em sistemas básicos ao alterar o sentido semântico dos 15 elementos centrais.",
        "armadilhaCebraspe": "Confundir redução de detalhe e alteração contraditória de sentido.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Um refinamento adequado restringe o significado do elemento sem contrariar sua definição. Ignorá-lo pode perder especificidade, mas preservar a interpretação mais ampla. Isso não garante conversão sem perda entre quaisquer perfis e vocabulários.",
        "fontePrimaria": "DCMI — Dublin Core Metadata Element Set, version 1.1 — 15 elementos e respectivas definições — https://www.dublincore.org/specifications/dublin-core/dces/",
        "submoduloRef": "sub-2-2",
        "versao_correta": "Refinamentos compatíveis podem ser ignorados com perda de detalhe sem inverter o significado mais amplo.",
        "gatilho": "invalida",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-7",
        "topico": "Sinais Auxiliares da CDU (Barra Oblíqua vs Sinal de Adição)",
        "afirmacaoFalsa": "Na Classificação Decimal Universal (CDU), a barra oblíqua (/) conecta dois tópicos não consecutivos para estabelecer coordenação entre assuntos distintos.",
        "armadilhaCebraspe": "Trocar sinais e alcance da composição.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Barra expressa extensão consecutiva, incluindo intermediários. Adição de classes separadas usa + e relação pode usar :. A escolha do sinal altera o alcance do que foi representado, sem equivalência automática entre essas operações.",
        "fontePrimaria": "Biblioteca Nacional de Brasília — Manual de Classificação em CDU, 3ª ed., 2020 — seções 2–4: classes, auxiliares e sinais; distinguir regras gerais e política local — https://bnbdigital.cultura.df.gov.br/wp-content/uploads/tainacan-items/7/1942/GGI-Manual-de-Classificacao-Normalizado-26.08.2020.pdf",
        "submoduloRef": "sub-3-2",
        "versao_correta": "A barra indica intervalo consecutivo de classes, não simples adição de tópicos separados.",
        "gatilho": "não consecutivos",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-8",
        "topico": "Tabelas Auxiliares da CDD (Tabela 2 - Áreas Geográficas)",
        "afirmacaoFalsa": "Empregando a CDD (23ª ed.), o classificador pode utilizar isoladamente a notação da Tabela 2 para formar o número de chamada de um atlas geográfico.",
        "armadilhaCebraspe": "Confundir auxiliar geográfico e número principal.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Notações de tabelas auxiliares da CDD precisam de número principal e instruções de construção. Um número de lugar da Tabela 2 não se torna classificação completa apenas por representar uma região. Também se distingue número de classe e número de chamada.",
        "fontePrimaria": "OCLC — Introduction to the Dewey Decimal Classification, DDC 23 — seções 4 (estrutura), 5 (classificação), 7 (notas e tabelas), 8 (construção de números) — https://www.oclc.org/content/dam/oclc/dewey/versions/print/intro.pdf",
        "submoduloRef": "sub-3-1",
        "versao_correta": "Na CDD, a Tabela 2 apoia construção de números conforme as instruções, sem classificação autônoma.",
        "gatilho": "isoladamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-9",
        "topico": "Tesauros Documentários (ISO 25964) e Relações Semânticas",
        "afirmacaoFalsa": "A relação de equivalência entre termos preferenciais e sinônimos rejeitados em um tesauro é representada formalmente pela sigla TG (Termo Geral).",
        "armadilhaCebraspe": "Inverter equivalência e relação hierárquica.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "TG indica termo mais amplo em relação hierárquica; equivalência entre formas preferidas e variantes utiliza convenções como USE e UP no vocabulário. Hierarquia pode ter diferentes tipos, não apenas gênero/espécie. As siglas precisam seguir o padrão adotado.",
        "fontePrimaria": "LANCASTER, F. W. Indexação e resumos: teoria e prática. 2ª ed. brasileira, 2004 — capítulos 1–9: análise conceitual, tradução, coerência, qualidade e resumos. Obra do acervo HNC.",
        "submoduloRef": "sub-7-2",
        "versao_correta": "Na convenção indicada, USE/UP tratam equivalência e TG/TE tratam hierarquia.",
        "gatilho": "TG",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-10",
        "topico": "Revocação (Recall) vs Precisão (Precision) de Cleverdon e Lancaster",
        "afirmacaoFalsa": "Aumentar a exaustividade da indexação (atribuir um número maior de descritores) acarreta necessariamente o aumento da precisão da busca bibliográfica.",
        "armadilhaCebraspe": "Transformar tendência contextual em garantia universal.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Exaustividade amplia aspectos representados; seu efeito depende das consultas e da relevância dos documentos. Não garante precisão maior, nem existe lei que toda ampliação sempre a reduza. Precisão e revocação devem ser medidas no contexto avaliado.",
        "fontePrimaria": "LANCASTER, F. W. Indexação e resumos: teoria e prática. 2ª ed. brasileira, 2004 — capítulos 1–9: análise conceitual, tradução, coerência, qualidade e resumos. Obra do acervo HNC.",
        "submoduloRef": "sub-7-3",
        "versao_correta": "Aumentar a exaustividade não garante aumentar a precisão; o efeito depende do sistema e das consultas.",
        "gatilho": "necessariamente",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-11",
        "topico": "Limitações aos Direitos Autorais em Bibliotecas (Lei 9.610/98 art. 46)",
        "afirmacaoFalsa": "Bibliotecas públicas possuem permissão legal irrestrita para fotocopiar e digitalizar integralmente livros esgotados com a finalidade de empréstimo aos leitores.",
        "armadilhaCebraspe": "Confundir indisponibilidade no comércio e domínio público.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Esgotamento comercial não extingue automaticamente direitos autorais nem cria autorização geral de cópia integral para empréstimo. É preciso verificar autorização, licença ou hipótese legal pertinente. A Súmula 522 do STJ trata de outro tema e não deve fundamentar essa questão.",
        "fontePrimaria": "Lei 9.610/1998 — direitos autorais — reprodução, utilização e limitações aos direitos autorais. Obra do acervo HNC.",
        "submoduloRef": "sub-9-3",
        "versao_correta": "A cópia de obra esgotada exige verificar direitos e hipóteses legais, sem permissão geral irrestrita.",
        "gatilho": "irrestrita",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-d-12",
        "topico": "Tratado de Marraqueche e Formatos Acessíveis (Decreto nº 9.522/2018)",
        "afirmacaoFalsa": "A reprodução em formato acessível a beneficiário do regime de Marraqueche exige pagamento prévio de direitos patrimoniais em qualquer hipótese, mesmo quando atende às condições da exceção aplicável.",
        "armadilhaCebraspe": "Confundir exceção condicionada e autorização comercial irrestrita.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Há exceções legais e regime de Marraqueche para beneficiários e usos nas condições previstas. Não se exige pagamento prévio em qualquer situação. Tampouco isso libera universalmente toda reprodução e venda: beneficiários, acesso legítimo e demais requisitos importam.",
        "fontePrimaria": "Decreto 9.522/2018 — Tratado de Marraqueche — arts. 2º–4º do tratado: beneficiários, entidades autorizadas e formatos acessíveis — https://planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9522.htm",
        "submoduloRef": "sub-9-3",
        "versao_correta": "Reproduções acessíveis podem ter fundamento em exceções legais e no regime aplicável de Marraqueche.",
        "gatilho": "em qualquer hipótese",
        "dataConferencia": "2026-10-31"
      }
    ]
  },
  {
    "id": "bloco-e",
    "titulo": "Bloco E: Serviços, Preservação, Produtos e Redes de Cooperação",
    "sigla": "BLOCO E",
    "descricao": "Estudos de usuários, serviço de referência, produtos legislativos (dossiês, notas), desenvolvimento de coleções, COUNTER R5, preservação OAIS/PREMIS e redes RVBI/LexML.",
    "modulosRelacionados": [
      "M4",
      "M5",
      "M6"
    ],
    "pegadinhas": [
      {
        "id": "bloco-e-1",
        "topico": "Tríade de Maurice Line (Necessidade, Demanda e Uso)",
        "afirmacaoFalsa": "As estatísticas quantitativas de circulação e empréstimo de livros no balcão da biblioteca expressam com fidelidade absoluta a real necessidade informacional do usuário.",
        "armadilhaCebraspe": "Confundir uso observado, demanda expressa e necessidade.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Uso registrado é evidência de comportamento sob uma oferta e condições de acesso. Pode não revelar necessidades não expressas ou barreiras. Combinar registros, entrevistas e outros métodos ajuda a interpretar a demanda, sem fazer de qualquer um deles prova completa.",
        "fontePrimaria": "CUNHA, AMARAL e DANTAS. Manual de estudo de usuários da informação. 2015 — necessidades, modelos e métodos de estudo de usuários. Obra do acervo HNC.",
        "submoduloRef": "sub-4-4",
        "versao_correta": "Estatísticas de circulação podem apoiar diagnóstico, mas não representam integralmente toda necessidade informacional.",
        "gatilho": "fidelidade absoluta",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-2",
        "topico": "Processo de Busca de Kuhlthau (ISP) e a Zona de Intervenção",
        "afirmacaoFalsa": "No modelo de busca de Carol Kuhlthau, o estágio de Exploração caracteriza-se pelo pico de segurança, satisfação e alívio do usuário no processo investigativo.",
        "armadilhaCebraspe": "Trocar os sentimentos associados às etapas do modelo.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Exploração pode envolver incerteza, confusão e dificuldade de integrar informações; formulação do foco pode trazer mais clareza. Não há promessa de um mesmo pico emocional para todas as pessoas. O modelo descreve padrões e possibilidades de intervenção, não etapas psicológicas infalíveis.",
        "fontePrimaria": "Carol Kuhlthau — Information Search Process — estágios, pensamentos, sentimentos e ações — https://wp.comminfo.rutgers.edu/ckuhlthau/information-search-process/",
        "submoduloRef": "sub-4-4",
        "versao_correta": "Exploração pode envolver incerteza e confusão antes da formulação do foco.",
        "gatilho": "segurança",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-3",
        "topico": "Entrevista de Referência de Denis Grogan (5 Fases)",
        "afirmacaoFalsa": "Segundo Grogan, a primeira formulação do usuário deve ser aceita sem esclarecimento e permite dispensar a negociação da questão em qualquer atendimento.",
        "armadilhaCebraspe": "Confundir rapidez de atendimento e dispensa de compreensão.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Esclarecer e negociar a questão ajuda a compreender necessidade, escopo e limites. Grogan descreve oito etapas do processo, não as cinco que apareciam na explicação antiga. Não é preciso transformar a negociação em ritual rígido, mas tampouco ignorar ambiguidades relevantes.",
        "fontePrimaria": "GROGAN, Denis. A prática do serviço de referência. 1995; reimpressão 2001 — processo de referência, pp. 50–56: oito passos, retornos e avaliação conjunta. Obra do acervo HNC.",
        "submoduloRef": "sub-4-4",
        "versao_correta": "O processo de referência pode esclarecer a questão antes de definir a estratégia, conforme a necessidade.",
        "gatilho": "dispensar",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-4",
        "topico": "Produtos Informacionais - Nota Informacional vs Dossiê Legislativo",
        "afirmacaoFalsa": "Um produto chamado nota informacional deve sempre ter dezenas de páginas e cobrir exaustivamente toda a história do tema, independentemente do pedido e do prazo.",
        "armadilhaCebraspe": "Transformar nome de produto em tamanho universal obrigatório.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Nomear um produto não determina universalmente extensão ou exaustividade. O formato depende de finalidade, prazo, usuário e regras da instituição. A adaptação retira a atribuição de limite fixo de páginas à Câmara sem referência normativa demonstrada.",
        "fontePrimaria": "GROGAN, Denis. A prática do serviço de referência. 1995; reimpressão 2001 — processo de referência, pp. 50–56: oito passos, retornos e avaliação conjunta. Obra do acervo HNC.",
        "submoduloRef": "sub-5-2",
        "versao_correta": "Um produto informacional deve ajustar escopo e profundidade à necessidade e às regras institucionais aplicáveis.",
        "gatilho": "sempre",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-5",
        "topico": "Ciclo de Desenvolvimento de Coleções de Waldomiro Vergueiro",
        "afirmacaoFalsa": "O ciclo de desenvolvimento de coleções de Vergueiro atinge sua conclusão definitiva com o faturamento e a catalogação dos materiais adquiridos.",
        "armadilhaCebraspe": "Confundir uma etapa de aquisição e encerramento do processo.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Avaliação, uso e mudanças da comunidade retroalimentam decisões de coleção. Faturamento e catalogação não encerram definitivamente o desenvolvimento. Também não se deve ensinar uma sequência universal que omita seleção e transforme descarte em fase obrigatória de toda aquisição.",
        "fontePrimaria": "VERGUEIRO, Waldomiro. Desenvolvimento de coleções — modelo de Evans, política, seleção, aquisição, avaliação e desbastamento. Obra do acervo HNC.",
        "submoduloRef": "sub-5-1",
        "versao_correta": "Desenvolvimento de coleções é acompanhado e revisto com base em avaliação e mudanças de necessidades.",
        "gatilho": "definitiva",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-6",
        "topico": "Desbastamento vs Descarte de Acervos (Stanley Slote)",
        "afirmacaoFalsa": "Desbastar e descartar materiais são conceitos biblioteconômicos idênticos que implicam a baixa definitiva do tombamento patrimonial do item.",
        "armadilhaCebraspe": "Confundir processo amplo e uma de suas medidas.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Desbastamento é processo mais amplo que pode envolver remanejamento e descarte conforme avaliação. Descarte corresponde à retirada definitiva, sujeita à política e normas patrimoniais. Reduzir desbastamento apenas a transferência temporária também seria incompleto.",
        "fontePrimaria": "VERGUEIRO, Waldomiro. Desenvolvimento de coleções — modelo de Evans, política, seleção, aquisição, avaliação e desbastamento. Obra do acervo HNC.",
        "submoduloRef": "sub-5-3",
        "versao_correta": "Desbastamento pode abranger remanejamento e descarte; descarte é retirada definitiva nas condições aplicáveis.",
        "gatilho": "idênticos",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-7",
        "topico": "Métricas COUNTER Release 5 e Protocolo SUSHI (NISO Z39.93)",
        "afirmacaoFalsa": "O protocolo SUSHI é uma interface web de leitura de livros digitais voltada para parlamentares e assessores em dispositivos móveis.",
        "armadilhaCebraspe": "Confundir colheita de métricas e acesso ao conteúdo.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "SUSHI automatiza obtenção de relatórios de uso, não a leitura do conteúdo. COUNTER define métricas e relatórios; versão e implementação do serviço precisam ser indicadas. Não se deve chamar indistintamente todo histórico SUSHI de REST/JSON, ignorando padrões anteriores.",
        "fontePrimaria": "COUNTER — Code of Practice for Research Content Usage Metrics, Release 5.1 — métricas, contagem, processamento e escolha da unidade de uso — https://cop5.countermetrics.org/en/5.1.1/",
        "submoduloRef": "sub-5-3",
        "versao_correta": "SUSHI serve à obtenção automatizada de estatísticas, distinguindo-se de uma interface de leitura.",
        "gatilho": "leitura de livros",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-8",
        "topico": "Modelo OAIS (ISO 14721) e Pacotes de Informação (SIP, AIP, DIP)",
        "afirmacaoFalsa": "No modelo OAIS, o pacote entregue pelo produtor (SIP) é armazenado intacto e disponibilizado sem nenhuma modificação para os pesquisadores como DIP.",
        "armadilhaCebraspe": "Confundir funções dos pacotes e identidade obrigatória de implementação.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "SIP, AIP e DIP descrevem papéis de submissão, arquivamento e disseminação. Não se presume identidade obrigatória de todo conteúdo e estrutura. PREMIS pode ser adotado, mas OAIS não o impõe como único esquema, e acesso continua sujeito a condições.",
        "fontePrimaria": "CCSDS — Reference Model for an Open Archival Information System — responsabilidades de preservação e funções; edição de 2024 — https://ccsds.org/Pubs/650x0m3.pdf",
        "submoduloRef": "sub-6-3",
        "versao_correta": "OAIS distingue pacotes de submissão, arquivamento e disseminação segundo suas funções.",
        "gatilho": "sem nenhuma modificação",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-9",
        "topico": "Estratégias de Preservação Digital - Normalização vs Emulação",
        "afirmacaoFalsa": "A estratégia de emulação consiste em converter arquivos de texto arcaicos para formatos padronizados abertos como PDF/A e imagens para TIFF.",
        "armadilhaCebraspe": "Trocar emulação e conversão de formatos.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "Conversão de formato é associada a migração ou normalização. Emulação busca reproduzir comportamento de um ambiente, permitindo executar ou interpretar recursos conforme estratégia. Ambas exigem avaliação de propriedades e resultados; nenhuma garante preservação apenas pelo nome.",
        "fontePrimaria": "CCSDS — Reference Model for an Open Archival Information System — responsabilidades de preservação e funções; edição de 2024 — https://ccsds.org/Pubs/650x0m3.pdf",
        "submoduloRef": "sub-6-3",
        "versao_correta": "Emulação reproduz comportamento de ambiente; conversão de formato é outra estratégia.",
        "gatilho": "converter arquivos",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-10",
        "topico": "Dicionário de Metadados de Preservação PREMIS 3.0",
        "afirmacaoFalsa": "O padrão PREMIS foi desenvolvido para atribuir cabeçalhos de assunto, índices temáticos e palavras-chave de indexação semântica a documentos.",
        "armadilhaCebraspe": "Confundir preservação e representação temática e misturar versões.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "PREMIS trata de metadados de preservação. Na versão 3.0, as entidades são Objetos, Eventos, Agentes e Direitos; Entidade Intelectual integra categorias de Objeto. A descrição antiga de cinco entidades com Ambientes misturava modelos e versões.",
        "fontePrimaria": "Library of Congress — PREMIS Data Dictionary, version 3.0 — modelo de dados; Object, Event, Agent e Rights; categorias de objetos — https://www.loc.gov/standards/premis/premis-3-0-final.pdf",
        "submoduloRef": "sub-6-3",
        "versao_correta": "PREMIS 3.0 organiza metadados de preservação em Objetos, Eventos, Agentes e Direitos.",
        "gatilho": "cabeçalhos de assunto",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-11",
        "topico": "Protocolos de Interoperabilidade - OAI-PMH vs Z39.50/SRU",
        "afirmacaoFalsa": "O protocolo OAI-PMH foi projetado para executar buscas federadas distribuídas síncronas que interrogam centenas de bases em tempo real ao vivo.",
        "armadilhaCebraspe": "Trocar colheita e busca distribuída síncrona.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "OAI-PMH oferece operações de colheita de registros e metadados para agregação. Não é protocolo de busca federada síncrona. Dublin Core não qualificado é exigência mínima, mas outros formatos podem ser anunciados; não se reduz todo registro a um único perfil.",
        "fontePrimaria": "Open Archives Initiative — Protocol for Metadata Harvesting, v2.0 — 3.4: metadataPrefix e suporte ao Dublin Core não qualificado — https://www.openarchives.org/OAI/openarchivesprotocol.html",
        "submoduloRef": "sub-6-2",
        "versao_correta": "OAI-PMH realiza colheita de metadados, distinguindo-se de consulta federada em tempo real.",
        "gatilho": "tempo real",
        "dataConferencia": "2026-10-31"
      },
      {
        "id": "bloco-e-12",
        "topico": "Rede Virtual de Bibliotecas (RVBI) e Coordenação no Congresso",
        "afirmacaoFalsa": "A RVBI é coordenada administrativamente pela Câmara dos Deputados e adota bancos de dados isolados sem compartilhamento de autoridades.",
        "armadilhaCebraspe": "Trocar coordenação e participação na rede.",
        "gabaritoOficial": "E",
        "fundamentacaoCanonico": "A Biblioteca do Senado coordena a rede cooperativa, que compartilha recursos e padrões. Participar da rede não transfere sua coordenação à Câmara. Compartilhamento de autoridades e registros não significa que toda biblioteca abandone sua responsabilidade local.",
        "fontePrimaria": "Senado Federal — A RVBI — coordenação, cooperação e catálogo coletivo — https://www12.senado.leg.br/institucional/biblioteca/rvbi/a-rvbi",
        "submoduloRef": "sub-2-4",
        "versao_correta": "A RVBI é coordenada pela Biblioteca do Senado Federal e organiza cooperação entre suas participantes.",
        "gatilho": "Câmara dos Deputados",
        "dataConferencia": "2026-10-31"
      }
    ]
  }
];

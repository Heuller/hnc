import type { ModuloFilho } from '../../../domain/types';

export const submodulo52: ModuloFilho = {
  id: 'sub-5-2',
  numero: '5.2',
  editalRef: 'Bloco E - Item 3.6 a 3.14',
  preRequisitos: ["sub-4-4"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-4-4",
          "titulo": "Estudos de Usuários e Entrevista de Referência",
          "motivo": "Identificação de necessidades para elaboração de produtos especializados."
      },
      {
          "submoduloId": "sub-8-5",
          "titulo": "Editoração e Publicação Digital",
          "motivo": "Estruturação formal de infográficos, linhas do tempo e relatórios."
      }
  ],
  titulo: 'CRM em Serviços de Informação, Curadoria e Produtos de Inteligência Informacional',
  antesDeLer: [
    {
      termo: 'CRM (Customer Relationship Management)',
      definicao: 'Estratégia e conjunto de ferramentas tecnológicas voltadas ao gerenciamento e estreitamento das relações com os usuários/clientes.',
      exemploBiblioteca: 'Registro no sistema de referência das preferências temáticas e histórico de consultas de cada comissão parlamentar.',
    },
    {
      termo: 'Curadoria de Conteúdo',
      definicao: 'Processo contínuo de selecionar, organizar, enriquecer e contextualizar as informações mais relevantes sobre determinado domínio temático.',
      exemploBiblioteca: 'Elaboração de dossiê temático curado sobre inteligência artificial no setor público para apoiar debate em comissão mista.',
    },
    {
      termo: 'Produtos de Inteligência Informacional',
      definicao: 'Relatórios sintetizados, informativos analíticos e resumos executivos que agregam valor e orientam a tomada de decisão estratégica.',
      exemploBiblioteca: 'Boletim legislativo semanal distribuído pela biblioteca aos líderes partidários com panorama de matérias internacionais.',
    },
    {
      termo: 'Segmentação de Usuários',
      definicao: 'Divisão da comunidade de usuários em grupos homogêneos segundo suas necessidades de informação para oferta de serviços customizados.',
      exemploBiblioteca: 'Criação de trilhas de serviços distintas para parlamentares, pesquisadores acadêmicos e cidadãos comuns.',
    },
  ],
  descricaoCurta: 'Gestão de Relacionamento (CRM de Paul Greenberg: operacional, analítico e colaborativo), Personalização e DSI (Eirão & Cunha), Curadoria de Informação (Bezerra) e elaboração de Dossiês, Estados da Arte e Panoramas (Candido).',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Paul Greenberg', 'Thiago Gomes Eirão', 'Murilo Bastos da Cunha', 'Arthur Bezerra', 'Renato Alexandre Candido', 'Sueli Angélica do Amaral', 'Alba Costa Maciel'],
  alertasCebraspe: [
    'CRM em Serviços de Informação (Paul Greenberg): divide-se na tríade canônica: 1. CRM Operacional (pontos de contato direto, automação de balcão, circulação e referência - front-office); 2. CRM Analítico (mineração de dados, identificação de padrões de busca, perfil de consumo e antecipação de demandas - back-office); e 3. CRM Colaborativo (interação multicanal e integração intersetorial para cocriação de serviços). O Cebraspe inverte sistematicamente CRM Analítico e Operacional!',
    'Disseminação Seletiva da Informação (DSI) e Personalização (Eirão & Cunha / Luhn): a DSI NÃO envia tudo para todos; ela confronta o perfil de interesse previamente cadastrado com as novas entradas do acervo, reduzindo a sobrecarga informacional (infoxicação). A etapa de FEEDBACK (retroalimentação) é obrigatória para calibrar a precisão do perfil.',
    'Curadoria de Informação (Arthur Bezerra): transcende a mera coleta e guarda mecânica de documentos; envolve seleção crítica, validação de autoridade, checagem contra desinformação, contextualização e enriquecimento semântico de metadados para entregar valor analítico à tomada de decisão.',
    'Produtos de Inteligência Informacional (Candido): a elaboração de Dossiês, Estados da Arte e Panoramas baseia-se na triangulação metodológica entre indicadores bibliométricos (núcleo de autores e periódicos mais citados via Bradford e Lotka) e análise qualitativa contextual, organizando linhas do tempo e matrizes comparativas isentas de viés partidário.',
    'Marketing em Serviços de Informação (Sueli Angélica do Amaral): a transposição dos 4 Ps de Kotler (Produto, Preço, Praça, Promoção) redefine Preço como custo não monetário (tempo despendido, esforço cognitivo e deslocamento físico/digital do usuário) e Praça como os canais e a facilidade de acesso ao acervo.',
  ],
  quadroComparativo: {
    titulo: 'As Três Dimensões do CRM (Customer Relationship Management) de Paul Greenberg',
    colunas: ['Dimensão do CRM', 'Foco de Atuação', 'Aplicação Prática em Bibliotecas e CEDI', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['CRM Operacional', 'Processos e pontos de contato direto com o usuário (*front-office*)', 'Balcão de referência, empréstimo automatizado, canais de atendimento por chat e agendamentos', 'Afirmar que o CRM operacional faz mineração preditiva de dados (FALSO: é função exclusiva do Analítico).'],
      ['CRM Analítico', 'Análise de dados de uso e perfis de comportamento (*back-office*)', 'Data mining de empréstimos, termos mais buscados nos logs do catálogo e antecipação de pautas legislativas', 'Dizer que o CRM analítico é apenas o envio de formulários de pesquisa de satisfação (FALSO: é análise massiva de dados).'],
      ['CRM Colaborativo', 'Comunicação e integração multicanal com os usuários e setores internos', 'Portais participativos, integração com redes sociais institucionais, chats, comissões e ouvidoria', 'Afirmar que o CRM colaborativo substitui o atendimento técnico presencial ou dispensa a governança de dados.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. O CRM (Customer Relationship Management) Aplicado a Serviços de Informação

Com a transição do paradigma custodial (focado no acervo físico) para o paradigma pós-custodial e orientado ao usuário, as bibliotecas universitárias, especializadas e parlamentares adotam a metodologia de **CRM** (*Customer Relationship Management* ou Gestão de Relacionamento com o Cliente/Usuário), sistematizada por **Paul Greenberg** (*CRM na Velocidade da Luz*):

* **Conceito Canônico:** CRM é uma filosofia e estratégia de gestão, apoiada por tecnologias da informação, projetada para otimizar o relacionamento duradouro, a fidelização e a **satisfação integral dos usuários**, organizando todos os processos da instituição em torno de segmentos claramente identificados de público.
* **A Tríade Estrutural do CRM de Paul Greenberg:**
  1. **CRM Operacional (*Front-Office*):**
     * Abrange a automação e integração de todos os pontos de contato direto com o usuário.
     * Em bibliotecas: sistemas integrados de gestão de bibliotecas (SIGB), balcão de referência presencial e virtual, autoempréstimo por RFID, devolução automatizada, agendamento de cabines e atendimento multicanal (WhatsApp institucional, e-mail e balcão).
     * *Função central:* Reduzir atritos no atendimento e garantir agilidade e cortesia no contato direto.
  2. **CRM Analítico (*Back-Office*):**
     * Utiliza ferramentas de inteligência de negócios (*Business Intelligence* - BI), bancos de dados analíticos (*data warehouse*) e mineração de dados (*data mining*).
     * Analisa o comportamento histórico dos usuários: histórico de circulação, logs de busca no catálogo online (OPAC), termos de pesquisa sem recuperação (silêncio informacional nos logs), horários de pico e correlações temáticas.
     * *Aplicação na Câmara dos Deputados:* Analisa quais proposições e áreas temáticas (ex.: Direito Financeiro, Reforma Administrativa) apresentam pico de consulta pelas Consultorias Legislativas, permitindo a aquisição e o processamento técnico antecipado de obras pertinentes antes do início das votações em plenário.
  3. **CRM Colaborativo:**
     * Promove a integração e o compartilhamento de dados entre diferentes setores da instituição (Biblioteca Pedro Aleixo, Arquivo da Câmara, Consultoria Legislativa, CEDI e Gabinetes Parlamentares).
     * Garante que o parlamentar receba atendimento unificado e coerente independentemente do canal escolhido (presencial, e-mail, intranet ou aplicativo móvel), permitindo a cocriação de serviços e produtos sob medida.

\`\`\`tree
TITLE: Dimensões do CRM em Unidades de Informação (Paul Greenberg)
- CRM em Bibliotecas | Gestão do Relacionamento com Usuários e Cidadãos
  - CRM Operacional (Front-Office) | Pontos de contato direto e atendimento ao usuário
    - Balcão de Empréstimo e Atendimento Presencial | Agilidade, empatia e desburocratização
    - Serviço de Referência Especializada | Apoio imediato a parlamentares e pesquisadores
    - Canais Virtuais de Atendimento | Chat, WhatsApp institucional, e-mail e autoatendimento
  - CRM Analítico (Back-Office) | Inteligência de dados e antecipação de demandas
    - Data Mining e Mineração de Logs | Análise de padrões de busca no OPAC e termos sem recuperação
    - Estatísticas de Circulação e Uso | Mapeamento de picos temáticos para aquisições oportunas
    - Antecipação de Demandas Legislativas | Aquisição prévia de temas pautados para votação
  - CRM Colaborativo (Multicanal) | Integração sistêmica entre unidades da Casa
    - Integração Biblioteca Pedro Aleixo & Consultoria | Compartilhamento ágil de subsídios técnicos
    - Interlocução com Gabinetes Parlamentares | Produtos sob medida para comissões e frentes
    - Articulação com CEDI e Arquivo Histórico | Visão 360° do usuário parlamentar
\`\`\`

---

### 2. Disseminação Seletiva da Informação (DSI) e Personalização

A Disseminação Seletiva da Informação, concebida originalmente por **Hans Peter Luhn** (1958) na IBM e aprofundada por **Thiago Gomes Eirão** e **Murilo Bastos da Cunha** (2011), é o serviço proativo por excelência das unidades de informação especializadas:

#### A. O Mecanismo Operacional Canônico da DSI
O serviço de DSI fundamenta-se no cruzamento automatizado entre dois fluxos dinâmicos de dados:

$\\text{Perfil de Interesses do Usuário (PIU)} \\; \\bigcap \\; \\text{Perfil dos Novos Documentos (PND)} \\implies \\text{Notificação Direcionada}$

1. **Elaboração e Cadastramento do Perfil do Usuário:** Mapeamento formal dos temas, termos de indexação, autores de interesse e operadores booleanos pertinentes a cada usuário ou grupo funcional.
2. **Entrada e Indexação das Novas Obras:** Processamento técnico contínuo de livros recém-adquiridos, fascículos de periódicos, notas técnicas e normas legais.
3. **Mecanismo de Confronto (*Matching*):** Algoritmo que compara os descritores do documento recém-cadastrado com a equação de busca do perfil do usuário.
4. **Envio da Notificação Seletiva:** Encaminhamento do sumário, resumo e link de acesso via e-mail, feed RSS, mensageria instantânea ou aplicativo institucional.
5. **Etapa de Feedback (Retroalimentação Obrigatória):** O usuário informa se o documento recebido foi de fato útil ("Relevante" ou "Não Relevante"). Com base nessa resposta, o bibliotecário refina e calibra os termos do perfil, garantindo precisão crescente e eliminando o ruído.

#### B. As Gerações Tecnológicas da DSI
* **DSI de 1ª Geração (Luhn, anos 1960-1980):** Processamento em lotes (*batch*), com cartões perfurados e formulários impressos enviados periodicamente por malote postal aos pesquisadores.
* **DSI de 2ª Geração (Web e Portais, anos 1990-2010):** Autocadastramento de perfis via web, alertas por e-mail e sindicação de conteúdo via canais RSS (*Really Simple Syndication*), permitindo atualizações diárias.
* **DSI de 3ª Geração / Personalização Inteligente (Atual):** Baseada em agentes inteligentes, inteligência artificial, processamento de linguagem natural (PLN) e mineração de comportamento informacional, calibrando o perfil não apenas por termos declarados, mas pelo padrão real de leitura e download de documentos.

> [!IMPORTANT]
> **Armadilha Frequente do Cebraspe:** A banca afirma que, para garantir a isonomia no atendimento, o serviço de DSI deve enviar a relação completa de todas as novas aquisições a todos os servidores cadastrados. **ERRADO!** O envio indiscriminado gera sobrecarga cognitiva e infoxicação (*information overload*). A essência inegociável da DSI é a **SELETIVIDADE**.

---

### 3. Curadoria de Informação e Curadoria Digital

Com a explosão informacional da internet e a disseminação de fake news e alucinações de modelos generativos, **Arthur Bezerra** (2017) e **Luís Fernando Sayão e Luana Farias Sales** (2012) conceituam a curadoria de informação como uma prática estratégica essencial:

* **Conceito:** A curadoria de informação supera a custódia passiva e a indexação puramente descritiva. Trata-se de um conjunto deliberado de ações intelectuais de **seleção crítica, validação de autoridade, enriquecimento de metadados, contextualização e preservação** de conteúdos informacionais para garantir que o tomador de decisão receba dados fidedignos, íntegros e acionáveis.
* **O Ciclo da Curadoria Informacional em Bibliotecas:**
  1. **Filtragem e Triagem Crítica:** Identificação das fontes de maior solidez em meio ao dilúvio de informações não verificadas (*big data*).
  2. **Validação e Combate à Desinformação (*Fact-Checking*):** Verificação rigorosa da proveniência documental, integridade das fontes originais e autoria institucional.
  3. **Contextualização e Enriquecimento Semântico:** Adição de notas técnicas explicativas, vinculação a normas correlatas (ex.: links para o LexML e RVBI) e criação de esquemas de metadados enriquecidos.
  4. **Preservação Ativa:** Aplicação de políticas que garantam a longevidade dos objetos digitais contra a obsolescência tecnológica de formatos e mídias.
  5. **Disseminação Acessível:** Apresentação clara em painéis de bordo (*dashboards*), boletins de curadoria temática ou ambientes virtuais de aprendizagem.

---

### 4. Produtos de Inteligência Informacional Imediata: Notas, Relatórios e Panoramas Subsidiam Decisões Rápidas

No ecossistema do Congresso Nacional e dos órgãos de assessoramento de cúpula, a demanda de parlamentares, lideranças e consultorias legislativas não é por listagens bibliográficas brutas, mas por **produtos informacionais analíticos de alto valor agregado**, consolidados com base em metodologia rigorosa e isenção ético-política (**Renato Alexandre Candido, 2023; Alba Costa Maciel & Marília Alvarenga Mendonça, 2006**).

A literatura de inteligência parlamentar e o edital Cebraspe categorizam sete produtos fundamentais:

#### A. Nota Informacional
* **Finalidade:** Esclarecimento técnico imediato, sintético e conclusivo (geralmente entre 1 e 3 páginas) sobre dúvida factual, conceito controverso ou aspecto pontual de proposição em debate urgente.
* **Estrutura-Padrão Canônica:**
  1. *Identificação do Pedido e Contexto:* Tema, solicitante (comissão ou parlamentar), urgência e escopo exato da indagação;
  2. *Sumário Executivo / Ementa:* Resposta direta em um parágrafo objetivo para leitura rápida;
  3. *Fundamentação Técnico-Normativa:* Citação pontual de dispositivos constitucionais, legais, regimentais e jurisprudência vinculante aplicável;
  4. *Conclusão / Encaminhamentos:* Síntese dos achados sem extrapolar para juízos de conveniência política;
  5. *Fontes Consultadas:* Relação concisa das fontes primárias pesquisadas.
* **Fontes Típicas:** Portal LexML, Sistema de Informações do Congresso Nacional (Sicon), jurisprudência consolidada do STF/STJ/TCU e notas técnicas prévias das consultorias.
* **Critérios de Qualidade:** Tempestividade (entrega em prazos curtíssimos, por vezes durante a sessão de plenário), concisão, clareza meridiana e precisão terminológica.
* **Erros Comuns / Distratores Cebraspe:** Prolixidade, inclusão de histórico doutrinário enciclopédico desnecessário e emissão de opinião pessoal ou partidária pelo bibliotecário.

#### B. Relatório Temático
* **Finalidade:** Estudo técnico verticalizado e abrangente sobre temática complexa ou setor de política pública, fornecendo subsídios aprofundados para a elaboração de anteprojetos de lei, relatorias de matérias estruturantes ou reformas constitucionais.
* **Estrutura-Padrão Canônica:**
  1. *Introdução e Justificativa:* Relevância social, econômica e jurídica do tema na conjuntura legislativa;
  2. *Diagnóstico da Situação Atual:* Análise empírica amparada em dados estatísticos oficiais e relatórios governamentais;
  3. *Histórico e Marco Regulatório Vigente:* Evolução das leis e gargalos regulatórios no direito pátrio;
  4. *Direito Comparado e Práticas Internacionais:* Como outros parlamentos democráticos (ex.: EUA, União Europeia, América Latina) enfrentam a mesma matéria;
  5. *Análise de Cenários e Impactos Previsíveis:* Avaliação de impactos orçamentários, sociais e jurídicos de eventuais alterações legais;
  6. *Considerações Finais e Referências Exaustivas:* Conclusões técnicas e aparato bibliográfico completo.
* **Fontes Típicas:** Estatísticas do IBGE, IPEA, Banco Central, bases internacionais (OCDE, ONU, Banco Mundial), artigos científicos peer-reviewed e relatórios de auditoria do TCU.
* **Critérios de Qualidade:** Profundidade analítica, neutralidade axiológica, fidedignidade dos dados empíricos e rigor na metodologia de triangulação de fontes.

#### C. Panorama de Informação
* **Finalidade:** Síntese diagnóstica transversal que oferece visão panorâmica ("vista aérea") e integrada sobre determinado setor ou política pública, permitindo apreensão ágil do estado geral da arte da matéria por tomadores de decisão.
* **Estrutura-Padrão Canônica:**
  1. *Visão Geral (Overview):* Delimitação do setor e contextualização macroeconômica e institucional;
  2. *Painel de Indicadores Estratégicos:* Representação gráfica de dados estruturados (gastos públicos, metas atingidas, séries temporais);
  3. *Mapeamento Normativo das Políticas Ativas:* Lista das principais leis, programas e órgãos executores;
  4. *Gargalos e Questões Críticas em Pauta no Congresso:* Pontos de tensão que motivam proposições legislativas concorrentes.
* **Critérios de Qualidade:** Alta capacidade de síntese visual (*storytelling com dados*), uso de infográficos claros e facilidade de navegação entre seções temáticas.

### 5. Produtos Estruturados de Inteligência: Linhas do Tempo, Mapas de Atores e Dossiês Mapeiam Redes Complexas

#### A. Linha do Tempo Normativa e Histórica
* **Finalidade:** Representação cronológica e relacional da evolução de determinado instituto jurídico, marco legal ou tramitação de matérias no Parlamento, evidenciando causas, revogações e sucessão temporal de normas.
* **Estrutura-Padrão Canônica:**
  1. *Eixo Temporal Estruturado:* Ordenação estritamente cronológica por data de promulgação ou publicação;
  2. *Diploma Normativo Identificado:* Espécie normativa, número, ano e data do Diário Oficial;
  3. *Fato Gerador / Contexto Político:* Acontecimentos históricos que precipitaram a edição da norma;
  4. *Alteração Substancial Operada:* O que o diploma criou, modificou ou revogou no ordenamento;
  5. *Situação de Eficácia Atual:* Indicação explícita se a norma continua vigente, se foi revogada por lei posterior ou se teve eficácia suspensa pelo STF (ex.: liminar em ADI).
* **Critérios de Qualidade:** Exatidão cronológica milimétrica, indicação precisa dos vínculos relacionais (norma alteradora <-> norma alterada) e concisão nos sumários de impacto.

#### B. Mapa de Atores (*Stakeholder Mapping*)
* **Finalidade:** Identificação, caracterização sistemática e mapeamento do posicionamento de grupos de interesse, entidades da sociedade civil, setores econômicos e órgãos de Estado envolvidos na tramitação de matéria legislativa controvertida.
* **Estrutura-Padrão Canônica:**
  1. *Matriz de Identificação de Atores:* Relação das instituições (órgãos públicos, confederações empresariais, centrais sindicais, ONGs e academia);
  2. *Matriz Poder × Interesse (Modelo de Mendelow):* Classificação dos atores nos quatro quadrantes canônicos: Alto Poder / Alto Interesse (gerenciar de perto); Alto Poder / Baixo Interesse (manter satisfeito); Baixo Poder / Alto Interesse (manter informado); Baixo Poder / Baixo Interesse (monitorar);
  3. *Posicionamento Político-Técnico Declarado:* Favorável à aprovação integral, favorável com emendas restritivas ou contrário à matéria;
  4. *Síntese dos Argumentos e Notas Técnicas Apresentadas:* Resumo dos memoriais entregues em audiências públicas e comissões da Câmara;
  5. *Vínculo com Proposições Concorrentes:* Identificação de emendas de plenário ou projetos apensados patrocinados pelo respectivo ator.
* **Critérios de Qualidade:** Pluralidade democrática na amostragem (equilíbrio rigoroso entre correntes antagônicas), comprovação documental de todo posicionamento atribuído e ausência de valoração subjetiva.

#### C. Dossiê Legislativo e Documental
* **Finalidade:** Compilação enciclopédica, categorizada e exaustiva de toda a matéria fática, processual e bibliográfica concernente a uma investigação parlamentar (CPI), grande reforma constitucional (PEC) ou consolidação de códigos.
* **Estrutura-Padrão Canônica:**
  1. *Sumário Analítico Estruturado:* Organização por módulos temáticos;
  2. *Ficha Técnica da Proposição Principal:* Autoria, ementa, regime de tramitação e órgãos colegiados designados;
  3. *Histórico e Tramitação Processual Completa:* Despachos da Mesa, atas de comissões, relatórios e pareceres de mérito aprovados ou rejeitados;
  4. *Aparato Doutrinário e Pareceres Jurídicos:* Artigos doutrinários de referência, pareceres de juristas e subsídios da Consultoria Legislativa;
  5. *Jurisprudência Vinculante e Precedentes Judiciais:* Julgados do STF e STJ diretamente correlacionados;
  6. *Legislação Estrangeira Comparada:* Levantamento de diplomas internacionais sobre o objeto;
  7. *Apêndice Documental:* Cópia integral ou links persistentes (URN LEX / LexML) para a íntegra dos documentos citados.

#### D. Revisão de Estado da Arte (*State-of-the-Art Review*)
* **Finalidade:** Mapeamento sistemático da fronteira científica internacional sobre um tema emergente em recorte temporal explícito, identificando consensos consolidados, controvérsias abertas e lacunas na literatura.
* **Metodologia de Triangulação Obrigatória (Candido, 2023):**
  1. *Etapa Quantitativa (Bibliometria):* Aplicação das leis de Bradford (núcleo de periódicos de maior produtividade) e Lotka (produtividade dos autores), métricas de citação e coocorrência de termos de indexação;
  2. *Etapa Qualitativa (Análise de Conteúdo Sistemática):* Leitura crítica dos artigos do núcleo, extração padronizada de evidências e sintetização de conclusões teóricas.

\`\`\`tree
TITLE: Tipologia e Arquitetura dos Produtos de Inteligência Informacional Legislativa
- Produtos de Inteligência Informacional (Edital 3.12 e 3.13) | Apoio à Decisão e Subsídio Parlamentar
  - Produtos de Resposta Rápida e Decisão Imediata
    - Nota Informacional | Síntese executiva (1 a 3 páginas) sobre ponto controverso pontual em plenário
    - Linha do Tempo Normativa | Sucessão cronológica e relacional de leis, MPs e vigência de normas
  - Produtos de Diagnóstico Setorial e Visualização
    - Panorama de Informação | Diagnóstico visual transversal com indicadores de BI e dados abertos
    - Mapa de Atores (Stakeholder Mapping) | Matriz Poder x Interesse (Mendelow) e argumentos em audiências
  - Produtos de Pesquisa Aprofundada e Memória Exaustiva
    - Relatório Temático | Análise verticalizada com direito comparado, impacto orçamentário e cenários
    - Dossiê Legislativo e Documental | Reunião exaustiva de proposições, pareceres, jurisprudência e doutrina
    - Revisão de Estado da Arte | Mapeamento da fronteira científica via triangulação (Bibliometria + Análise Qualitativa)
\`\`\`

#### H. Exemplo Anotado de Esqueleto de Produto Informacional (Nota Informacional)

\`\`\`markdown
[CABEÇALHO INSTITUCIONAL]
PRODUTO: NOTA INFORMACIONAL Nº XX/2026
SOLICITANTE: Comissão de Constituição e Justiça e de Cidadania (CCJC)
TEMA: Limitações Constitucionais à Cópia Reprográfica em Bibliotecas Públicas (PL nº XXXX/2026)
CLASSIFICAÇÃO: Apoio Técnico Legislativo / Referência Especializada

1. SUMÁRIO EXECUTIVO (EMENTA TÉCNICA)
A reprodução integral de livros por cópia reprográfica ou scanner em bibliotecas públicas sem autorização prévia
do autor ofende os arts. 29, I, e 46, II, da Lei nº 9.610/1998, não sendo amparada pela gratuidade de serviços.
A legislação pátria autoriza estritamente a cópia de pequenos trechos para uso privado do copista, sem intuito de lucro.

2. MARCO CONSTITUCIONAL E LEGAL APLICÁVEL
- Constituição Federal de 1988: Art. 5º, XXVII (direito exclusivo dos autores de utilização, publicação ou reprodução);
- Lei Federal nº 9.610/1998: Art. 29 (atos que dependem de autorização prévia) e Art. 46 (limitações expressas);
- Decreto nº 9.522/2018: Promulgação do Tratado de Marraqueche (exceção para pessoas com deficiência visual).

3. ANÁLISE TÉCNICA COMPARATIVA
A jurisprudência pacificada do Superior Tribunal de Justiça (Súmula 522/STJ) e a doutrina especializada
asseveram que o conceito de "pequenos trechos" não abrange a cópia de obras integrais, ainda que fracionada
capítulo a capítulo por múltiplos usuários.

4. CONCLUSÃO E SUBSÍDIOS AO RELATOR
Recomenda-se a rejeição de emendas que prevejam fotocópia integral indiscriminada, preservando-se a redação
que assegura a acessibilidade digital em formatos acessíveis para pessoas com deficiência visual.

5. FONTES CONSULTADAS
LexML Brasil; Sicon (Câmara dos Deputados); Base de Jurisprudência do STJ; Repositório BDCam.
\`\`\`

#### I. Matriz Comparativa Estruturada dos Sete Produtos de Inteligência Informacional

| Produto Informacional | Finalidade Principal | Extensão Típica | Tempo de Elaboração | Fontes Típicas | Aplicação no Processo Legislativo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Nota Informacional** | Esclarecimento técnico imediato sobre dúvida factual pontual. | 1 a 3 páginas | Horas a 1 dia | LexML, Sicon, súmulas de tribunais, notas técnicas | Sessão de votação em Plenário e debates em Comissões. |
| **Relatório Temático** | Análise vertical profunda sobre política pública ou grande tema. | 15 a 50 páginas | 2 a 4 semanas | Estatísticas oficiais, IPEA, OCDE, direito comparado | Elaboração de Projetos de Lei e relatorias setoriais. |
| **Panorama de Informação** | Diagnóstico visual sintético do estado geral de um setor. | 5 a 15 páginas | 3 a 5 dias | Painéis de BI, dados abertos governamentais, anuários | Apresentação em colégio de líderes e frentes parlamentares. |
| **Linha do Tempo** | Representação cronológica da evolução de normas e tramitações. | 2 a 8 páginas | 1 a 3 dias | Diário Oficial da União, LexML, anais da Câmara | Elucidação da sucessão de leis e reformas constitucionais. |
| **Mapa de Atores** | Mapeamento de stakeholders e posicionamento de grupos de pressão. | 5 a 20 páginas | 1 a 2 semanas | Audiências públicas, notas de entidades, lobbies, imprensa | Subsidiar negociações políticas em comissões temáticas. |
| **Dossiê Legislativo** | Compilação enciclopédica exaustiva de documentos sobre matéria. | 50 a centenas de pág. | Semanas a meses | Proposições, pareceres, acórdãos STF, doutrina jurídica | Comissões Parlamentares de Inquérito (CPIs) e PECs. |
| **Estado da Arte** | Mapeamento da fronteira científica com triangulação metodológica. | 20 a 40 páginas | 3 a 6 semanas | Bases de dados (Scopus, Web of Science, SciELO), tesauros | Formulação de políticas científicas, tecnológicas e de IA. |

---

### 5. Marketing em Serviços de Informação (Sueli Angélica do Amaral)

O marketing em unidades de informação, sistematizado no Brasil por **Sueli Angélica do Amaral** (*Marketing da Informação*, 1998/2004), baseia-se na aplicação adaptada do composto de marketing (*Mix de Marketing* ou 4 Ps de Philip Kotler) às especificidades dos bens e serviços intangíveis de informação:

* **Os Quatro Ps Adaptados à Biblioteconomia:**
  1. **Produto (Product):**
     * O conjunto de bens e serviços informacionais tangíveis e intangíveis oferecidos pela biblioteca: empréstimo, comutação bibliográfica (COMUT), DSI, dossiês, normalização, acesso a bases de dados e espaços de estudo/coworking.
  2. **Preço (Price):**
     * Como a maioria das bibliotecas públicas e parlamentares não cobra valores financeiros diretamente do usuário, o **Preço** é compreendido como o **custo de oportunidade, tempo e esforço**:
       * *Custo de acesso:* Deslocamento físico até a biblioteca ou tempo despendido navegando em interfaces digitais complexas.
       * *Custo cognitivo:* Esforço mental exigido para formular buscas complexas ou decifrar catálogos mal projetados.
       * *Custo emocional:* Ansiedade de informação (*information anxiety*) diante da incerteza no atendimento.
       * *Objetivo do marketing:* Minimizar esses custos não monetários.
  3. **Praça (Place / Distribuição):**
     * Canais e pontos de entrega dos serviços informacionais: localização física da biblioteca no edifício, acessibilidade arquitetônica, portais web, responsividade móvel de aplicativos e repositórios digitais abertos.
  4. **Promoção (Promotion / Comunicação):**
     * Conjunto de ações comunicacionais para divulgar os serviços, orientar sobre o uso e valorizar a imagem da instituição: guias do usuário, campanhas em redes sociais, exposições culturais, treinamentos em bases de dados e eventos institucionais.

---

### 6. Estudos de Usuários e Necessidades de Informação

O estudo de usuários é a investigação sistemática das características, comportamentos, barreiras e necessidades de informação da comunidade servida pela biblioteca (Figueiredo, 1994; Cunha, Amaral & Dantas, 2015):

* **Usuários Reais vs. Usuários Potenciais:**
  * *Usuários Reais (Atuais):* Aqueles que efetivamente frequentam o espaço ou acessam os sistemas da biblioteca com regularidade.
  * *Usuários Potenciais:* Indivíduos pertencentes à comunidade atendida que poderiam se beneficiar dos serviços, mas não o fazem por desconhecimento, barreiras de acesso ou desinteresse. O planejamento da biblioteca deve desenvolver estratégias para atrair os usuários potenciais.
* **Metodologias de Coleta:**
  * *Métodos Diretos:* Questionários estruturados, entrevistas individuais em profundidade, técnica do incidente crítico (Flanagan) e grupos focais (*focus groups*).
  * *Métodos Indiretos:* Análise de dados estatísticos de empréstimo, contagem de downloads, análise de citações em teses ou relatórios de consultoria e análise de logs de busca.
* **Acessibilidade e Ergonomia (NBR 9050 da ABNT):**
  * A biblioteca pública e parlamentar deve garantir acessibilidade universal: rotas acessíveis livres de barreiras, sinalização visual, tátil e em Braille, balcões de atendimento rebaixados, acervos com espaçamento adequado entre estantes (mínimo de 0,90 m a 1,20 m para circulação de cadeiras de rodas) e terminais equipados com tecnologias assistivas (leitores de tela NVDA/JAWS e teclados adaptados).

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Estudos de Usuários e Entrevista de Referência (sub-4-4):** Identificação de necessidades para elaboração de produtos especializados.
* **Editoração e Publicação Digital (sub-8-5):** Estruturação formal de infográficos, linhas do tempo e relatórios.
`,
  checkpoints: [
    {
      id: 'cp-5-2-1',
      pergunta: 'Micro-Checkpoint 1: Dimensões do CRM em Unidades de Informação',
      item: 'No âmbito do modelo de CRM proposto por Paul Greenberg, a dimensão analítica é responsável pelo atendimento presencial no balcão e pelo empréstimo de livros físicos, enquanto a dimensão operacional cuida da mineração de dados estatísticos.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe inverte sistematicamente os papéis: o atendimento no balcão e os pontos de contato direto constituem o CRM OPERACIONAL; a mineração de dados e identificação de padrões de comportamento integram o CRM ANALÍTICO.',
    },
    {
      id: 'cp-5-2-2',
      pergunta: 'Micro-Checkpoint 2: Produtos de Inteligência Informacional Legislativa',
      item: 'No âmbito dos produtos de inteligência informacional para o processo legislativo, a nota informacional caracteriza-se como uma compilação exaustiva de centenas de páginas para Comissões Parlamentares de Inquérito, ao passo que o relatório temático restringe-se a uma resposta executiva de uma página para uso durante debates de plenário.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme Renato Alexandre Candido (2023) e Alba Costa Maciel & Marília Mendonça (2006), os conceitos estão invertidos: a nota informacional é uma síntese executiva concisa (1 a 3 páginas) para atendimento pontual e tempestivo em plenário ou comissão, enquanto o relatório temático e o dossiê legislativo constituem estudos aprofundados e compilações exaustivas sobre matérias estruturantes.',
    },
    {
      id: 'cp-5-2-3',
      pergunta: 'Micro-Checkpoint 3: DSI e Sobrecarga Informacional',
      item: 'Os serviços de Disseminação Seletiva da Informação (DSI) atuam no combate à sobrecarga informacional ao confrontarem os perfis individuais de interesse com as novas entradas do acervo, encaminhando notificações direcionadas aos usuários.',
      gabarito: 'C',
      justificativa: 'Certo! A DSI (Eirão & Cunha) filtra o fluxo informacional, evitando a dispersão cognitiva e entregando apenas o que é pertinente ao usuário.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-2-1',
        periodo: '1958',
        disciplina: 'Origem da DSI',
        focoPrincipal: 'Hans Peter Luhn publica o conceito pioneiro de Disseminação Seletiva da Informação na IBM',
        figuraChave: 'Hans Peter Luhn',
      },
      {
        id: 'tl-5-2-2',
        periodo: '1998 / 2004',
        disciplina: 'Marketing da Informação',
        focoPrincipal: 'Sueli Angélica do Amaral consolida o Mix de Marketing adaptado para serviços bibliotecários',
        figuraChave: 'Sueli Angélica do Amaral',
      },
      {
        id: 'tl-5-2-3',
        periodo: '2001 / 2004',
        disciplina: 'Fundamentos de CRM',
        focoPrincipal: 'Publicação de "CRM na Velocidade da Luz": CRM operacional, analítico e colaborativo',
        figuraChave: 'Paul Greenberg',
      },
      {
        id: 'tl-5-2-4',
        periodo: '2011 / 2017',
        disciplina: 'DSI Moderna e Curadoria',
        focoPrincipal: 'Estudo de DSI com RSS no Judiciário (Eirão/Cunha) e consolidação da Curadoria Informacional (Bezerra)',
        figuraChave: 'Thiago Gomes Eirão e Arthur Bezerra',
      },
    ],
    autores: [
      {
        id: 'aut-5-2-1',
        nome: 'Paul Greenberg',
        ano: 2004,
        obraPrincipal: 'CRM at the Speed of Light (CRM na Velocidade da Luz)',
        ideiaChave: 'Tríade do CRM: operacional (contato), analítico (dados e mineração) e colaborativo (integração multicanal).',
        chipPegadinha: 'CRM analítico foca em padrões estatísticos de dados de uso, não no atendimento físico.',
      },
      {
        id: 'aut-5-2-2',
        nome: 'Arthur Bezerra',
        ano: 2017,
        obraPrincipal: 'Curadoria de Informação e Curadoria Digital',
        ideiaChave: 'Seleção crítica, agregação de valor semântico, validação de autoridade e combate à desinformação.',
        chipPegadinha: 'Curadoria não é mero arquivamento passivo; exige intervenção intelectual crítica.',
      },
      {
        id: 'aut-5-2-3',
        nome: 'Sueli Angélica do Amaral',
        ano: 1998,
        obraPrincipal: 'Marketing em Serviços de Informação',
        ideiaChave: 'Adaptação dos 4 Ps ao setor bibliotecário: Preço como tempo/esforço do usuário e Praça como canais de acesso.',
        chipPegadinha: 'Preço em bibliotecas públicas/parlamentares inclui custos não-monetários de oportunidade e cognição.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-2-1',
        afirmacao: 'O CRM colaborativo limita-se ao envio de mensagens promocionais de marketing sem recolher feedbacks ou dados interativos dos usuários da biblioteca.',
        gabarito: 'E',
        porQue: 'O CRM colaborativo baseia-se na interação bidirecional multicanal, permitindo a cocriação e o diálogo constante entre o usuário e a instituição informacional.',
      },
      {
        id: 'peg-5-2-2',
        afirmacao: 'Para garantir a universalidade de atendimento, os serviços de Disseminação Seletiva da Informação (DSI) devem encaminhar a totalidade das novas publicações adquiridas a todos os servidores cadastrados.',
        gabarito: 'E',
        porQue: 'A premissa da DSI é a SELETIVIDADE: cruzar o perfil específico do usuário com o perfil do documento, evitando a infoxicação e o envio indiscriminado de dados.',
      },
      {
        id: 'peg-5-2-3',
        afirmacao: 'No composto de marketing aplicado a bibliotecas públicas governamentais, o elemento Preço deixa de existir pelo fato de os serviços serem gratuitos para a comunidade.',
        gabarito: 'E',
        porQue: 'Conforme Sueli Amaral, o elemento Preço permanece sob a forma de custos não-monetários, como o tempo despendido, o custo cognitivo e o esforço de deslocamento do usuário.',
      },
    ],
  },
};

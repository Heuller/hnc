import type { ModuloFilho } from '../../../domain/types';

export const submodulo16: ModuloFilho = {
  id: 'sub-1-6',
  numero: '1.6',
  editalRef: 'Bloco A - Item 2.1 a 2.9',
  preRequisitos: ["sub-1-5"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-2-7",
          "titulo": "BIBFRAME 2.0 e Linked Data",
          "motivo": "Interoperabilidade semântica e publicação de dados abertos interconectados."
      },
      {
          "submoduloId": "sub-6-7",
          "titulo": "IA Aplicada à Informação",
          "motivo": "Governança ética, linhagem (W3C PROV) e curadoria de corpora (Datasheets)."
      },
      {
          "submoduloId": "sub-9-3",
          "titulo": "Direito Autoral e Dados Abertos de Pesquisa",
          "motivo": "Licenças e princípios de abertura de dados públicos."
      },
      {
          "submoduloId": "sub-11-12",
          "titulo": "Transparência, LAI e LGPD",
          "motivo": "Conformidade legal sobre proteção de dados e transparência pública."
      }
  ],
  titulo: 'Governança da Informação e Governança de Dados',
  titulo_curto: 'Governança de Dados',
  antesDeLer: [
    {
      termo: 'Governança de Dados (DAMA-DMBOK2)',
      definicao: 'Exercício de autoridade, controle e planejamento sobre a gestão de ativos de dados dentro de uma organização.',
      exemploBiblioteca: 'Definição de papéis de custódia e padrões de metadados para os documentos digitais no ecossistema da Câmara.',
    },
    {
      termo: 'Dados Mestres (Master Data)',
      definicao: 'Dados fundamentais e consistentes que fornecem o contexto central para transações de negócio através de toda a instituição.',
      exemploBiblioteca: 'Tabela padronizada de autores corporativos governamentais e parlamentares utilizada conjuntamente pelo CEDI e pelo Plenário.',
    },
    {
      termo: 'Data Stewardship',
      definicao: 'Atividade operacional e tática de zelar pela qualidade, conformidade, segurança e integridade de conjuntos de dados sob sua responsabilidade.',
      exemploBiblioteca: 'O bibliotecário atuando como curador responsável por validar metadados e metadados de preservação no repositório institucional.',
    },
    {
      termo: 'Dicionário de Dados',
      definicao: 'Repositório centralizado de metadados que descreve o significado, a estrutura, as relações e os formatos dos elementos de dados.',
      exemploBiblioteca: 'Documento técnico que padroniza os campos de busca e filtros do Sistema de Informações Legislativas (Sileg).',
    },
  ],
  descricaoCurta: 'Princípios do DAMA-DMBOK 2ª ed., papéis de governança (Data Owner, Data Steward, Data Custodian), dimensões de qualidade, proveniência e linhagem (W3C PROV-O), catálogo vs inventário, dados mestres e dados abertos (8 princípios, 5 estrelas e LAI).',
  tempoEstimadoMinutos: 19,
  autoresChave: [
    'DAMA International',
    'Tim Berners-Lee',
    'Open Government Working Group',
    'World Wide Web Consortium (W3C)',
  ],
  alertasCebraspe: [
    'Governança decide e responsabiliza; gestão executa. Questões da banca Cebraspe frequentemente invertem essa relação funcional, afirmando que a governança de dados é a responsável operacional pelo processamento e armazenamento diário de arquivos no banco de dados.',
    'Dado aberto não é sinônimo de dado público. O dado pode ser de acesso público irrestrito e estar disponibilizado exclusivamente em formato proprietário ou em imagem escaneada em PDF, o que viola frontalmente os requisitos de processamento por máquina e formato aberto não proprietário.',
    'No modelo DAMA-DMBOK, o Data Owner (Proprietário do Dado) possui autoridade decisória e final sobre classificação, acesso, regras de negócio e compartilhamento de um domínio de dados. O Data Steward (Curador/Zelador) atua como ponte tática entre as áreas de negócio e TI, zelando pela qualidade, consistência terminológica e metadados. O Data Custodian (Custodiante Técnico) cuida da infraestrutura de TI, backup e segurança física/lógica.',
    'Proveniência e linhagem (data lineage) não são termos intercambiáveis: a proveniência atesta a origem, a autoria originária e o histórico formal de custódia de um ativo de dados, enquanto a linhagem rastreia o ciclo de transformações, fluxos de ETL/ELT e dependências de dados através dos diversos sistemas ao longo do tempo (modelada pelo padrão W3C PROV-O).',
  ],
  quadroComparativo: {
    titulo: 'Matriz Comparativa dos Papéis de Governança de Dados (DAMA-DMBOK 2ª ed.)',
    colunas: ['Critério Estrutural', 'Data Owner (Proprietário do Dado)', 'Data Steward (Curador / Zelador do Dado)', 'Data Custodian (Custodiante Técnico do Dado)'],
    linhas: [
      [
        'Natureza da Responsabilidade',
        'Estratégica e deliberativa. Responsável final pelo ciclo de vida, valor institucional e riscos de um domínio de dados.',
        'Tática e operacional de negócio. Guardião das regras de negócio, da integridade semântica e da qualidade dos dados.',
        'Técnica e operacional de infraestrutura. Responsável pelo armazenamento, transporte, integridade física e segurança computacional.',
      ],
      [
        'Decisões Típicas',
        'Autoriza concessão de acessos críticos, define classificação de sigilo/privacidade e aprova políticas do domínio.',
        'Define termos de vocabulários e dicionários de dados, resolve divergências de significado, audita qualidade e especifica requisitos de metadados.',
        'Executa rotinas de backup, otimiza consultas no SGBD, aplica patches de segurança e implementa arquitetura de armazenamento.',
      ],
      [
        'Origem Organizacional',
        'Gestor ou diretor da área de negócio responsável pela criação ou uso primordial do dado (ex.: Diretor Legislativo).',
        'Especialista temático ou bibliotecário/analista com profundo domínio conceitual do fluxo documental e metadados.',
        'Equipe técnica de Tecnologia da Informação (administradores de banco de dados — DBAs, engenheiros de dados e segurança de redes).',
      ],
      [
        'Foco de Atuação',
        'Autoridade, conformidade legal, risco e prestação de contas (*accountability*).',
        'Consistência semântica, completude, eliminação de duplicidades e uso ético/padronizado dos dados.',
        'Disponibilidade de infraestrutura, desempenho, segurança física e redundância de servidores.',
      ],
      [
        'Exemplo Ilustrativo na Câmara',
        'Mesa Diretora ou Secretário-Geral deliberando sobre a política de divulgação das votações eletrônicas.',
        'Bibliotecário legislativo padronizando os metadados e termos de controle de autoridade dos parlamentares no vocabulário oficial.',
        'Analista de TI da Coordenação de Infraestrutura garantindo replicação e integridade do cluster de banco de dados do SILEG.',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Governança da Informação versus Governança de Dados: Conceitos e Fronteiras

A crescente complexidade dos ambientes digitais impôs uma distinção conceitual rigorosa entre a **governança de dados** e a **gestão de dados**, bem como entre dados e informação no setor público.

\`\`\`timeline
1. GOVERNANÇA | Direitos Decisórios e Políticas | "O que deve ser feito, por quem e sob quais regras?" (Autoridade e Estratégia)
---> Diretrizes e Limites Operacionais
2. GESTÃO | Execução Operacional e Prática | "Como fazer da melhor forma dentro das regras?" (Planejamento, Execução e Controle)
---> Monitoramento e Métricas
3. AUDITORIA | Avaliação e Conformidade | "As regras e padrões de qualidade estão sendo rigorosamente cumpridos?"
\`\`\`

#### A. O Princípio Canônico do DAMA-DMBOK (2ª ed., 2017)
Conforme estabelecido pela *Data Management Association International* (DAMA International) em seu guia oficial de referência (*DAMA-DMBOK: Data Management Body of Knowledge*):
* **Governança de Dados (*Data Governance*):** É o exercício de autoridade e controle (planejamento, monitoramento e fiscalização) sobre o gerenciamento de ativos de dados. A governança **estabelece os direitos de decisão e uma estrutura de responsabilização** (*accountability*) para assegurar que os dados sejam gerenciados adequadamente. A governança decide as políticas, define as prioridades, arbitra conflitos e fiscaliza a conformidade.
* **Gestão de Dados (*Data Management*):** É a **execução operacional** das atividades necessárias para obter, integrar, armazenar, proteger e disponibilizar dados segundo as regras e diretrizes estabelecidas pela governança. Enquanto a governança determina *quem tem o direito de decidir* e *quais são as regras*, a gestão *opera e executa* sob essas balizas.

#### B. Articulação com a Governança Pública (Decreto nº 9.203/2017)
No âmbito da Administração Pública federal brasileira, a governança pública é orientada pelos princípios de capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas e responsabilidade (*accountability*), e transparência (art. 3º do Decreto nº 9.203/2017, estudado no submódulo 11.9).
* A **Governança da Informação** conecta a governança corporativa/pública com a gestão técnica, assegurando que os ativos informacionais institucionais apoiem as políticas públicas, a soberania legislativa, a proteção da privacidade (LGPD) e a transparência ativa (LAI).

---

### 2. Papéis e Responsabilidades em Governança de Dados

O edital nº 1/2026 exige explicitamente os papéis e políticas de governança de dados (*data ownership* e *data stewardship*, itens 2.2 e 2.3 do Bloco A). A literatura clássica e o DAMA-DMBOK consagram a seguinte tríade funcional:

#### A. Data Owner (Proprietário do Dado)
* **Definição:** É o gestor executivo ou autoridade institucional que detém a responsabilidade final e a autoridade deliberativa sobre determinado conjunto ou domínio de dados organizacionais.
* **Responsabilidades Primordiais:** Classificar a informação quanto à confidencialidade e sigilo; autorizar formalmente acessos sensíveis e compartilhamentos com outros órgãos; definir o apetite a risco do domínio de dados; prestar contas (*accountability*) perante auditorias e órgãos de controle externo.
* **Nota Doutrinária:** O termo "proprietário" é metafórico no setor público: os dados públicos pertencem ao Estado e à sociedade civil; o *data owner* atua como responsável institucional pela tomada de decisões daquele domínio.

#### B. Data Steward (Curador / Zelador do Dado)
* **Definição:** É o profissional (ou comitê) que atua na interface direta entre as necessidades de negócio e as capacidades técnicas de TI, zelando diariamente pela integridade semântica, qualidade e conformidade dos dados.
* **Responsabilidades Primordiais:** Elaborar e manter o vocabulário corporativo de termos (*business vocabulary / data dictionary*); garantir que os metadados estejam completos e atualizados; mapear regras de negócio e de integridade; identificar e sanear inconsistências e duplicidades; promover a alfabetização em dados (*data literacy*) entre os usuários.
* **O Papel do Bibliotecário:** O bibliotecário contemporâneo exerce com naturalidade as atribuições de *data steward*, dada sua expertise secular em organização do conhecimento, controle de vocabulário, ontologias, catalogação e padrões de metadados.

#### C. Data Custodian (Custodiante Técnico)
* **Definição:** É a unidade técnica (tipicamente vinculada à área de Tecnologia da Informação) incumbida da guarda, armazenamento, administração dos servidores e proteção física e cibernética dos ativos computacionais.
* **Responsabilidades Primordiais:** Gerenciar a infraestrutura física e em nuvem dos bancos de dados; assegurar rotinas de backup e planos de recuperação de desastres (*disaster recovery*); implementar controles criptográficos e permissões de acesso aprovadas pelo *data owner*; monitorar desempenho de rede e integridade de arquivos.

---

### 3. Dimensões de Qualidade de Dados (Data Quality no DAMA-DMBOK)

A qualidade de dados (item 2.5 do Bloco A) mensura o grau em que um conjunto de dados atende às necessidades dos seus consumidores e processos de negócio. O DAMA-DMBOK estrutura as seguintes dimensões operacionais centrais:

1. **Exatidão (*Accuracy*):** Grau em que os dados representam com fidedignidade e precisão a realidade do objeto ou evento que descrevem. Ex.: o nome de um deputado e sua data de posse coincidem estritamente com os dados oficiais do Tribunal Superior Eleitoral e da ata da Mesa.
2. **Completude (*Completeness*):** Proporção de dados armazenados em relação ao total de dados esperados para que o registro seja funcionalmente útil. Ex.: um registro de proposição que contenha ementa, autor, data, comissão e texto integral possui completude plena; a omissão do autor viola essa dimensão.
3. **Consistência (*Consistency*):** Ausência de contradições internas entre dados que descrevem o mesmo fato em diferentes tabelas ou bases de dados corporativas. Ex.: um parlamentar constar como "em exercício" no portal da transparência e como "afastado por licença médica" no sistema de votação representa quebra grave de consistência.
4. **Atualidade / Tempestividade (*Timeliness*):** Intervalo de tempo entre a ocorrência de um fato no mundo real e a sua disponibilização nos sistemas de informação para consumo. Ex.: a publicação do resultado de uma votação em plenário logo após a sua proclamação garante altíssima tempestividade.
5. **Validade (*Validity*):** Conformidade dos dados em relação às regras de sintaxe, tipos de dados, formatação e domínios de valores autorizados. Ex.: o preenchimento de um CPF com 11 dígitos numéricos ou o uso de uma sigla de UF válida (ex.: "DF", "SP").
6. **Unicidade (*Uniqueness*):** Garantia de que cada entidade do mundo real está representada uma única vez na base de dados, sem registros duplicados redundantes (*deduplication*).

---

### 4. Proveniência, Linhagem de Dados e o Padrão W3C PROV

O edital cobra **proveniência, linhagem e rastreabilidade dos dados** (item 2.6 do Bloco A):

#### A. Proveniência versus Linhagem de Dados (*Data Lineage*)
* **Proveniência:** Refere-se à origem histórica, cadeia de custódia formal, direitos de criação e contexto original de geração de um documento ou dado. No âmbito arquivístico e da preservação digital (OAIS/PREMIS), proveniência é o testemunho que certifica a autenticidade e a autoridade legítima do emissor.
* **Linhagem de Dados (*Data Lineage*):** É a representação cronológica e arquitetural de todo o percurso de transformação percorrido pelo dado desde a sua fonte de captura primária até a sua apresentação final em relatórios, dashboards ou APIs. A linhagem documenta quais rotinas de ETL/ELT processaram o dado, quais fórmulas de agregação foram aplicadas, quais tabelas foram combinadas (*joins*) e como a estrutura mudou ao longo do pipeline informacional.

#### B. A Recomendação W3C PROV (PROV-O, 2013)
O World Wide Web Consortium (W3C) publicou em 2013 a família de padrões **W3C PROV**, cuja ontologia fundamental em OWL/RDF é a **PROV-O** (*PROV Ontology*). O modelo PROV estrutura qualquer grafo de proveniência a partir de três classes ontológicas basilares:
* **Entidade (*Entity* - \`prov:Entity\`):** Qualquer coisa física, digital ou conceitual com a qual se interage (ex.: um dataset CSV, um documento XML, um registro de votação).
* **Atividade (*Activity* - \`prov:Activity\`):** Uma ação ou processo que ocorre ao longo do tempo e age sobre ou com entidades, podendo consumi-las, transformá-las ou gerar novas entidades (ex.: a execução de um script de limpeza em Python, a sessão de votação parlamentar).
* **Agente (*Agent* - \`prov:Agent\`):** Uma pessoa física, organização ou software automatizado que tem responsabilidade por uma atividade ou entidade (ex.: o Deputado Relator, a Mesa Diretora, um algoritmo de ETL).

As relações canônicas do W3C PROV conectam essas classes:
* \`prov:wasGeneratedBy\`: Liga uma Entidade à Atividade que a produziu.
* \`prov:used\`: Liga uma Atividade a uma Entidade que serviu de insumo.
* \`prov:wasDerivedFrom\`: Liga uma Entidade resultante a outra Entidade originária.
* \`prov:wasAssociatedWith\`: Liga uma Atividade ao Agente responsável.
* \`prov:wasAttributedTo\`: Liga uma Entidade ao Agente criador/custodiante.

---

### 5. Catálogos de Dados, Inventários de Ativos, Dados Mestres e de Referência

#### A. Catálogo de Dados versus Inventário de Ativos Informacionais
* **Catálogo de Dados (*Data Catalog*):** É uma plataforma tecnológica e semântica centralizada que indexa, organiza e descreve os conjuntos de dados de uma organização por meio de metadados ricos (dicionários de dados, esquemas de tabelas, perfil de qualidade, dados sobre o *data steward*, histórico de linhagem e documentação de APIs). Seu objetivo primordial é a **descoberta (*findability*), governança semântica e reuso de dados** por analistas e pesquisadores.
* **Inventário de Ativos Informacionais (*Information Asset Inventory*):** É uma lista formal e abrangente de todos os recursos, bases de dados, sistemas, repositórios e equipamentos informacionais detidos pela organização, mantida primordialmente para fins de **gestão de riscos de segurança da informação, conformidade legal, continuidade de negócios e auditoria de TI**.

#### B. Dados Mestres versus Dados de Referência
* **Dados Mestres (*Master Data*):** São os dados centrais, consistentes e não voláteis que identificam as entidades essenciais sobre as quais a organização opera e toma decisões. Esses dados são compartilhados transversalmente por múltiplos sistemas de informação corporativos.
  * *Exemplo na Câmara:* O cadastro único de autoridades parlamentares (deputados federais), o registro de órgãos legislativos e o catálogo mestre de autoridades de assunto.
* **Dados de Referência (*Reference Data*):** São conjuntos de valores autorizados, tabelas de códigos e domínios discretos de classificação utilizados para categorizar outros dados ou integrá-los a padrões externos. Em geral, são listas estáticas ou com baixa taxa de alteração.
  * *Exemplo na Câmara:* A tabela oficial de siglas dos partidos políticos, a lista de códigos ISO de idiomas (ISO 639-2), códigos de Unidades da Federação (UF) e a tabela de tipos de proposição legislativa (PL, PEC, MPV, PDC).

---

### 6. Dados Abertos Governamentais: Princípios, 5 Estrelas e Marco Legal

O item 2.9 do Bloco A requer o domínio das políticas e princípios de **dados abertos governamentais**.

#### A. Os Oito Princípios dos Dados Abertos Governamentais (Sebastopol, 2007)
Reunidos em 2007 em Sebastopol (Califórnia), trinta defensores do governo aberto definiram os oito critérios que tornam um dado público verdadeiramente "aberto":
1. **Completos (*Complete*):** Todos os dados públicos são disponibilizados, ressalvadas as restrições constitucionais de sigilo pessoal e de segurança do Estado.
2. **Primários (*Primary*):** Os dados são publicados na sua fonte de origem, com o mais alto nível de granularidade possível, sem agregações, resumos ou transformações artificiais.
3. **Atuais / Tempestivos (*Timely*):** Os dados são divulgados tão rapidamente quanto necessário para preservar o seu valor público de fiscalização e utilidade prática.
4. **Acessíveis (*Accessible*):** Disponíveis para a mais ampla gama de usuários e para os mais diversos propósitos, sem barreiras de acesso.
5. **Processáveis por Máquina (*Machine-Processable*):** Os dados são estruturados em formatos que permitem o processamento automático por sistemas computacionais (ex.: CSV, XML, JSON), e não apenas exibição visual para leitura humana (como imagens rasterizadas ou PDFs planos).
6. **Acesso Não Discriminatório (*Non-Discriminatory*):** Qualquer pessoa pode acessar os dados a qualquer momento sem necessidade de cadastro prévio, identificação obrigatória ou justificativa de interesse.
7. **Formatos Não Proprietários (*Non-Proprietary*):** Os dados estão disponíveis em formatos cujas especificações são públicas e não dependem do pagamento de licenças a empresas detentoras de software (ex.: uso de CSV ou ODS em vez de XLS/XLSX restrito).
8. **Livres de Licenças (*License-Free*):** Os dados não estão sujeitos a direitos autorais restritivos, patentes, marcas ou segredos comerciais, permitindo o livre reuso, redistribuição e cruzamento por qualquer cidadão.

#### B. O Esquema de 5 Estrelas de Dados Abertos de Tim Berners-Lee (2010)
O criador da World Wide Web propôs uma escala progressiva de maturidade para a publicação de dados abertos interligados (*Linked Open Data*):
* ⭐ **1 Estrela:** Dados disponíveis na web em **qualquer formato** sob uma licença aberta (ex.: uma imagem digitalizada de tabela orçamentária ou um PDF plano). Permite que o dado seja visualizado, mas sua extração e reuso computacional são árduos.
* ⭐⭐ **2 Estrelas:** Dados disponibilizados como **dados estruturados**, porém em **formato proprietário** (ex.: planilha no formato Microsoft Excel .XLSX). Permite cálculos em ferramentas específicas, mas exige software proprietário.
* ⭐⭐⭐ **3 Estrelas:** Dados estruturados em **formato aberto e não proprietário** (ex.: arquivo CSV ou XML aberto). Qualquer linguagem de programação ou software livre pode ler e manipular os dados sem custo de licença.
* ⭐⭐⭐⭐ **4 Estrelas:** Uso de **padrões abertos do W3C (RDF e SPARQL)** e identificação dos recursos por meio de **URIs (Uniform Resource Identifiers)** universais. Permite que outros sítios na web apontem diretamente para aquele recurso específico.
* ⭐⭐⭐⭐⭐ **5 Estrelas:** **Linked Open Data (LOD)**: Dados no formato RDF/URI interligados (*linked*) a outros conjuntos de dados externos na web semântica (ex.: linkando o registro de um deputado da Câmara ao seu verbete no Wikidata, ao LexML e a bases da OCDE), gerando um grafo global de conhecimento.

#### C. O Marco Normativo Brasileiro: LAI e Política de Dados Abertos
1. **Lei nº 12.527/2011 (LAI), Art. 8º, § 3º:** Estabelece que os sítios oficiais da administração pública devem, obrigatoriamente:
   * Conter ferramenta de pesquisa de conteúdo que permita o acesso à informação de forma objetiva, transparente, clara e em linguagem de fácil compreensão;
   * Possibilitar a gravação de relatórios em diversos formatos eletrônicos, inclusive abertos e não proprietários, tais como planilhas e texto, **de modo a facilitar a análise das informações**;
   * **Possibilitar o acesso automatizado por sistemas externos em formatos abertos, estruturados e legíveis por máquina**;
   * Divulgar em detalhes os formatos utilizados para estruturação da informação.
2. **Decreto nº 8.777/2016:** Instituiu a Política de Dados Abertos do Poder Executivo Federal, estabelecendo a obrigatoriedade da elaboração de Planos de Dados Abertos (PDA) pelos órgãos públicos, fomentando a transparência ativa, a governança pública e a inovação tecnológica da sociedade civil.

---

### 4. Direito Autoral e Limitações Legais em Bibliotecas (Lei nº 9.610/1998)

No contexto do serviço público, bibliotecas parlamentares e centros de documentação, o tratamento de obras intelectuais submete-se ao regime estrito da **Lei nº 9.610/1998 (Lei de Direitos Autorais - LDA)**:

#### A. A Inaplicabilidade de Direito Autoral a Atos Oficiais (Art. 8º da LDA)
Conforme o art. 8º, inciso IV, da Lei nº 9.610/1998, **não são objeto de proteção como direitos autorais** os textos de tratados ou convenções, leis, decretos, regulamentos, decisões judiciais e demais atos oficiais dos poderes públicos. Tais conteúdos encontram-se em permanente regime de livre reprodução e circulação, constituindo a matéria-prima dos portais legislativos, diários oficiais e do consórcio LexML Brasil.

#### B. As Limitações e Exceções aos Direitos Autorais (Arts. 46 a 48 da LDA)
O ordenamento jurídico brasileiro adota o sistema de **rol taxativo (*numerus clausus*)**, não admitindo a doutrina flexível do *fair use* norte-americano. As principais hipóteses autorizadas sem necessidade de prévia licença do titular nem pagamento de retribuição compreendem:
1. **Cópia Privada de Pequenos Trechos (Art. 46, II):** A reprodução, em um só exemplar de pequenos trechos, para uso privado do copista, desde que feita por este e sem intuito de lucro. A reprodução da obra em sua integralidade é ilícita, mesmo sem intuito lucrativo (Súmula 522/STJ).
2. **Acessibilidade para Pessoas com Deficiência (Art. 46, I, "d"):** A reprodução de obras em formatos acessíveis (como Braille, áudio ou suportes táteis) para uso exclusivo de deficientes visuais ou com outras limitações de leitura, desde que sem finalidade lucrativa.
3. **Citação em Trabalhos Técnicos (Art. 46, III):** A citação em livros, jornais ou relatórios para fins de estudo ou crítica, indicando-se o nome do autor e a fonte.
4. **Preservação de Acervos:** A preservação e segurança de acervos públicos não autorizam a distribuição irrestrita ou digitalização integral de obras protegidas para empréstimo digital desprovido de base contratual ou cessão patrimonial formal.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **BIBFRAME 2.0 e Linked Data (sub-2-7):** Interoperabilidade semântica e publicação de dados abertos interconectados.
* **IA Aplicada à Informação (sub-6-7):** Governança ética, linhagem (W3C PROV) e curadoria de corpora (Datasheets).
* **Direito Autoral e Dados Abertos de Pesquisa (sub-9-3):** Licenças e princípios de abertura de dados públicos.
* **Transparência, LAI e LGPD (sub-11-12):** Conformidade legal sobre proteção de dados e transparência pública.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A atuação do Bibliotecário na Câmara dos Deputados está submetida a um regime legal estrito, ao Código de Ética Profissional e às normas de Governança de Dados do setor público federal:
1. **Regulamentação Profissional (Leis Federais nº 4.084/1962 e nº 9.674/1998):**
   - O exercício da profissão de bibliotecário em todo o território nacional é privativo dos bacharéis em Biblioteconomia diplomados por escolas oficiais ou reconhecidas e **registrados no respectivo Conselho Regional de Biblioteconomia (CRB)**.
   - Atividades privativas: organização, direção e execução dos serviços técnicos de bibliotecas; classificação e catalogação de manuscritos e livros; planejamento e coordenação de redes de bibliotecas.
2. **Sistema CFB/CRB:**
   - **Conselho Federal de Biblioteconomia (CFB):** Órgão normativo e de grau de recurso superior.
   - **Conselhos Regionais (CRB):** Órgãos de fiscalização direta do exercício profissional em suas respectivas jurisdições (o Distrito Federal pertence à jurisdição do **CRB-1**).
3. **Código de Ética e Deontologia (Resolução CFB nº 207/2018):**
   - Deveres fundamentais: sigilo profissional sobre informações confiadas em razão do ofício; combate à censura e defesa do livre acesso à informação; atualização profissional contínua; não assinar trabalhos executados por terceiros sem sua participação técnica.
   - Infrações éticas puníveis com: advertência, censura confidencial, censura pública, multa, suspensão temporária do registro e cassação do exercício profissional.
4. **Governança de Dados e da Informação no Setor Público (DMBOK e Decreto nº 9.203/2017):**
   - A governança estabelece as diretrizes estratégicas, a prestação de contas (*accountability*), a liderança e o controle para assegurar que a informação seja tratada como ativo corporativo confiável, seguro e interoperável.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Sigilo Profissional no Atendimento à Consultoria Legislativa):** Um consultor legislativo solicita estudos comparados sigilosos sobre um tema de grande impacto econômico que embasará uma CPI ainda não divulgada. O bibliotecário da Biblioteca Pedro Aleixo tem o **dever ético e legal de sigilo absoluto**, não podendo divulgar a temática da busca nem a parlamentares de outras legendas.
- **Cenário 2 (Fiscalização do Exercício Privativo no Quadro da Câmara):** Ao realizar concurso público para provimento de vagas de Analista Legislativo - Atribuição Bibliotecário, a Câmara exige obrigatoriamente a comprovação de diploma de Bacharel em Biblioteconomia e o registro ativo no **CRB-1**, em estrito cumprimento às Leis 4.084/62 e 9.674/98.
- **Cenário 3 (Governança de Dados e Gestão de Metadados):** Ao participar do Comitê de Governança Digital da Câmara dos Deputados, o bibliotecário atua na definição do vocabulário controlado institucional e na gestão de metadados para garantir que os dados abertos das votações sejam interoperáveis entre a Câmara e o Senado Federal segundo o DAMA-DMBOK2.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Órgão / Norma | Papel Principal | Competência Típica | Recurso Final |
| :--- | :--- | :--- | :--- |
| **CFB (Federal)** | Normativo e Recursal | Editar o Código de Ética e resoluções gerais | Instância superior administrativa |
| **CRB-1 (Regional - DF)** | Fiscalização e Registro | Conceder registro profissional e fiscalizar acervos | Recursos sobem ao CFB |
| **Lei nº 4.084/1962** | Marco Regulatório Inicial | Define a profissão e atos privativos do bibliotecário | Lei Federal ordinária |
| **Lei nº 9.674/1998** | Reestruturação dos Conselhos | Detalha funcionamento dos Conselhos e infrações | Lei Federal ordinária |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Assinatura de Responsabilidade Técnica por Outrem:** A técnica de distrator recorrente consiste em colocar como assertiva que *"é lícito ao bibliotecário assumir a responsabilidade técnica e assinar catálogos e bases de dados organizados inteiramente por estagiários ou técnicos administrativos sem sua supervisão direta"*. **Gabarito: ERRADO.** Constitui infração ética grave capitulada no Código de Ética do CFB.
- **Inversão das Competências CFB vs. CRB:** A banca diz que compete aos CRBs editar o Código de Ética e julgar em grau final as infrações. **Gabarito: ERRADO.** Quem edita o Código e julga recursos finais é o CFB.
- **Dispensa de Registro para Servidores Públicos:** Afirmar que a aprovação em concurso público de órgão federal dispensa o registro no Conselho Regional. **Gabarito: ERRADO.** O exercício profissional, mesmo no setor público estatutário, exige inscrição regular no CRB da jurisdição.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 4.084, de 30 de junho de 1962*. Dispõe sobre a profissão de Bibliotecário e regula o seu exercício.
- **BRASIL.** *Lei Federal nº 9.674, de 25 de junho de 1998*. Dispõe sobre o exercício da profissão de Bibliotecário e determina outras providências.
- **CONSELHO FEDERAL DE BIBLIOTECONOMIA (CFB).** *Resolução CFB nº 207, de 9 de novembro de 2018*. Aprova o Código de Ética e Deontologia do Profissional Bibliotecário brasileiro.
- **IFLA.** *IFLA Code of Ethics for Librarians and other Information Workers*. Haia: IFLA, 2012.
- **DAMA INTERNATIONAL.** *DAMA-DMBOK: Data Management Body of Knowledge*. 2. ed. Technics Publications, 2017. (Capítulo de Governança da Informação e Dados).

### Pausa de Recuperação Ativa: Limitações aos Direitos Autorais

> [!TIP]
> **Pausa de Recuperação Ativa (Active Recall):** Sem consultar o texto, quais são as principais hipóteses do art. 46 da Lei 9.610/1998 aplicáveis às bibliotecas e à pesquisa acadêmica? Lembre-se da regra dos pequenos trechos, da cópia para uso privado do copista e da acessibilidade para pessoas com deficiência visual.
`,
  checkpoints: [
    {
      id: 'cp-1-6-1',
      pergunta: 'Micro-Checkpoint 1: Governança de Dados versus Gestão de Dados (DAMA-DMBOK)',
      item: 'A governança de dados define direitos de decisão e responsabilidades sobre os dados, ao passo que a gestão de dados executa as atividades operacionais segundo essas definições.',
      gabarito: 'C',
      justificativa:
        'Certo! Essa é a distinção estrutural canônica do DAMA-DMBOK: a governança atua na dimensão estratégica de autoridade, diretrizes, políticas e responsabilização (accountability), enquanto a gestão encarrega-se da operação diária, implementação técnica e processos operacionais sob essas regras.',
    },
    {
      id: 'cp-1-6-2',
      pergunta: 'Micro-Checkpoint 2: Papéis Organizacionais: Data Owner versus Data Steward',
      item: 'O data steward é, em regra, o responsável final pelas decisões estratégicas de acesso e uso de um domínio de dados, cabendo ao data owner a verificação diária da qualidade.',
      gabarito: 'E',
      justificativa:
        'Errado! A proposição inverte integralmente as atribuições do modelo DAMA-DMBOK: o Data Owner (Proprietário) é quem detém a responsabilidade executiva final e a autoridade para decidir sobre acesso, sigilo e políticas do domínio; o Data Steward (Curador/Zelador) é o guardião tático e operacional responsável pelo controle de qualidade diário, metadados e vocabulários de negócio.',
      versao_correta:
        'O data owner é o responsável executivo final pelas decisões estratégicas de acesso e uso de um domínio de dados, cabendo ao data steward zelar taticamente pela qualidade diária e pela consistência dos metadados.',
    },
    {
      id: 'cp-1-6-3',
      pergunta: 'Micro-Checkpoint 3: Requisitos de Dados Abertos Governamentais (LAI e Princípios de 2007)',
      item: 'Dados orçamentários publicados exclusivamente como imagens em PDF, ainda que acessíveis a qualquer pessoa sem cadastro, atendem plenamente ao princípio de processamento por máquina dos dados abertos.',
      gabarito: 'E',
      justificativa:
        'Errado! Imagens rasterizadas em PDF não são processáveis por máquina de forma nativa e automática por algoritmos, exigindo OCR sujeito a erros. O livre acesso público não equivale a dado aberto: os princípios de dados abertos e o art. 8º, § 3º, da LAI exigem formato estruturado e legível por máquina (como CSV, XML ou JSON).',
      versao_correta:
        'Dados orçamentários publicados exclusivamente como imagens em PDF violam o princípio do processamento por máquina e a legislação brasileira de dados abertos, que exigem formatos eletrônicos estruturados e abertos.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-1-6-1',
        periodo: '2007',
        disciplina: 'Transparência e Governo Aberto',
        focoPrincipal: 'Os 8 Princípios dos Dados Abertos Governamentais (Reunião de Sebastopol)',
        figuraChave: 'Open Government Working Group',
      },
      {
        id: 'tl-1-6-2',
        periodo: '2010',
        disciplina: 'Web Semântica e Dados Conectados',
        focoPrincipal: 'O esquema evolutivo de 5 estrelas para Linked Open Data (LOD)',
        figuraChave: 'Tim Berners-Lee',
      },
      {
        id: 'tl-1-6-3',
        periodo: '2011 / 2016',
        disciplina: 'Marco Legal Brasileiro de Dados',
        focoPrincipal: 'Lei de Acesso à Informação (LAI - Lei 12.527, art. 8º § 3º) e Decreto 8.777/2016 (Política de Dados Abertos)',
        figuraChave: 'Congresso Nacional e Poder Executivo Federal',
      },
      {
        id: 'tl-1-6-4',
        periodo: '2013',
        disciplina: 'Rastreabilidade e Proveniência Digital',
        focoPrincipal: 'Recomendação W3C PROV-O (Entity, Activity, Agent)',
        figuraChave: 'World Wide Web Consortium (W3C)',
      },
      {
        id: 'tl-1-6-5',
        periodo: '2017',
        disciplina: 'Governança Corporativa de Dados',
        focoPrincipal: 'Publicação do DAMA-DMBOK 2ª edição (Roda de DAMA e Papéis de Governança)',
        figuraChave: 'DAMA International',
      },
    ],
    autores: [
      {
        id: 'aut-1-6-1',
        nome: 'DAMA International',
        ano: 2017,
        obraPrincipal: 'DAMA-DMBOK: Data Management Body of Knowledge (2ª ed.)',
        ideiaChave: 'Governança de dados estabelece a autoridade e as regras de controle; gestão de dados executa as operações.',
        chipPegadinha: 'Diferenciação mandante entre Data Owner (autoridade executiva) e Data Steward (zeladoria e qualidade).',
      },
      {
        id: 'aut-1-6-2',
        nome: 'Tim Berners-Lee',
        ano: 2010,
        obraPrincipal: '5-Star Open Data Deployment Scheme',
        ideiaChave: 'Evolução dos dados na web do formato plano (1 estrela) aos dados semânticos interligados em RDF (5 estrelas).',
        chipPegadinha: 'PDF ou imagem aberta na web alcança apenas 1 estrela; o processamento por máquina exige 3 estrelas ou mais.',
      },
      {
        id: 'aut-1-6-3',
        nome: 'Open Government Working Group',
        ano: 2007,
        obraPrincipal: '8 Principles of Open Government Data',
        ideiaChave: 'Dados devem ser completos, primários, atuais, acessíveis, processáveis por máquina, não discriminatórios, não proprietários e sem licença.',
        chipPegadinha: 'Acesso sem necessidade de cadastro é um princípio explícito (não discriminatório).',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-1-6-1',
        afirmacao: 'A governança de dados tem como competência central a execução de comandos SQL e a gestão técnica do espaço em disco dos bancos de dados relacionais.',
        gabarito: 'E',
        porQue: 'Isso é atribuição operacional de GESTÃO de dados e administração técnica (Data Custodian). A governança de dados foca em políticas, direitos de decisão, conformidade regulatória e responsabilização.',
      },
      {
        id: 'peg-1-6-2',
        afirmacao: 'O padrão W3C PROV-O modela a proveniência e a linhagem de dados estruturando as relações exclusivamente entre entidades e agentes, desconsiderando as atividades e transformações temporais intermediárias.',
        gabarito: 'E',
        porQue: 'O W3C PROV é uma tríade ontológica indispensável: Entity, Activity e Agent. A classe Activity (atividade/processo) é essencial para mapear as ações temporais que consumiram ou geraram as entidades.',
      },
    ],
  },
};

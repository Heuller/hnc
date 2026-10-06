import type { ModuloFilho } from '../../../domain/types';

export const submodulo21: ModuloFilho = {
  id: 'sub-2-1',
  numero: '2.1',
  titulo: 'Princípios Internacionais de Catalogação (ICP), Catálogos e o Código AACR2r',
  descricaoCurta: 'Teoria e objetivos dos catálogos (Cutter), Catálogo Dicionário vs Sistemático, Declaração de Princípios da IFLA (ICP 2016), estrutura do AACR2r, as 8 áreas da ISBD, os 3 níveis de descrição bibliográfica (Regra 1.0D) e regras aprofundadas de escolha e forma de pontos de acesso (autoria pessoal, pseudônimos, entidades coletivas, eventos e atos legislativos).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Eliane Serrão Alves Mey', 'Naira Christofoletti Silveira', 'Charles Ammi Cutter', 'Anthony Panizzi', 'Michael Gorman', 'Paul Winkler'],
  alertasCebraspe: [
    'O Catálogo Dicionário concebido por Cutter (1876) caracteriza-se pela interfilação em ordem alfabética ÚNICA e integrada de autores, títulos e assuntos. O Cebraspe frequentemente afirma falsamente que o catálogo dicionário exige a separação física estrita entre autores e assuntos para tornar o item errado.',
    'O Catálogo Sistemático (ou Classificado) divide-se em duas partes estruturais obrigatórias: a seção principal classificada (ordenada numericamente por notações da CDD ou CDU) e o índice alfabético auxiliar de autores, títulos e assuntos.',
    'Níveis de Descrição Bibliográfica do AACR2r (Regra 1.0D): o Nível 1 é o mais enxuto/mínimo (título próprio, primeira indicação de responsabilidade se diferir do cabeçalho, menção de edição, primeiro publicador, data, extensão e ISBN). Notas exaustivas, ilustrações secundárias e dimensões exatas pertencem aos Níveis 2 e 3.',
    'Princípio Supremo do ICP 2016 (IFLA): a CONVENIÊNCIA DO USUÁRIO é o princípio basilar inegociável que precede todas as decisões de descrição e escolha de pontos de acesso. O Cebraspe costuma tentar substituir por "conveniência da instituição" ou "economia do acervo".',
    'Regra dos Três Autores no AACR2r: para obras com até 3 autores sem destaque, a entrada principal é pelo primeiro autor citado, gerando-se entradas secundárias para os outros dois. Se houver 4 ou mais autores sem destaque, a entrada principal é OBRIGATORIAMENTE PELO TÍTULO, gerando-se secundária apenas para o primeiro autor citado seguido de et al.',
    'Coletâneas sob coordenação, organização ou compilação: no AACR2r (Regra 21.7), organizadores e coordenadores NUNCA recebem entrada principal! A entrada principal é feita pelo TÍTULO, e eles recebem entrada secundária.',
    'Leis, Decretos e Jurisprudência: a entrada principal de atos normativos é realizada sob o cabeçalho da JURISDIÇÃO territorial (ex.: "Brasil", "Distrito Federal (Brasil)"), seguido do título uniforme da lei ou de [Leis, etc.]. Tribunais entram pela jurisdição seguida do nome do tribunal (ex.: "Brasil. Supremo Tribunal Federal").',
    'Eventos e Conferências: a entrada é sob o nome oficial da reunião, seguido entre parênteses de (número em ordinal : ano : local de realização). Ex.: Congresso Brasileiro de Biblioteconomia e Documentação (28. : 2019 : Vitória, ES).',
    'A Área 3 da ISBD/AACR2r (Detalhes Específicos do Material) NÃO é utilizada para monografias e livros impressos comuns. É exclusiva de: materiais cartográficos (escala/projeção), música impressa, publicações seriadas e recursos eletrônicos.',
  ],
  quadroComparativo: {
    titulo: 'Comparativo Canônico: Os Três Níveis de Descrição Bibliográfica do AACR2r (Regra 1.0D)',
    colunas: ['Elemento da Descrição', 'Nível 1 (Regra 1.0D1 - Mínimo)', 'Nível 2 (Regra 1.0D2 - Padrão Médio)', 'Nível 3 (Regra 1.0D3 - Exaustivo)'],
    linhas: [
      ['Título e Subtítulo', 'Apenas o Título Próprio', 'Título Próprio [DGM] = Título Equivalente : Subtítulo', 'Todos os títulos, equivalentes e subtítulos com exaustão'],
      ['Indicações de Responsabilidade', 'Primeira indicação apenas se diferir do cabeçalho principal', 'Primeira indicação de responsabilidade + responsabilidades subsequentes', 'Todas as indicações de responsabilidade que figuram no recurso'],
      ['Menção de Edição', 'Menção de edição transcrita', 'Menção de edição + indicação de responsabilidade da edição', 'Menção de edição, aditamentos e responsabilidades completas'],
      ['Detalhes Específicos (Área 3)', 'Dados da Área 3 (se aplicável ao suporte)', 'Dados da Área 3 completos (se aplicável)', 'Dados da Área 3 exaustivos'],
      ['Publicação / Imprenta (Área 4)', 'Apenas o primeiro publicador e a data', 'Lugar de publicação : Nome do publicador, Data', 'Todos os lugares, publicadores, distribuidores, fabricantes e datas'],
      ['Descrição Física / Colação (Área 5)', 'Apenas a Extensão (número de páginas ou volumes)', 'Extensão : Outros detalhes físicos (il.) ; Dimensões (cm) + Material adicional', 'Extensão completa, detalhes físicos pormenorizados, dimensões e encarte'],
      ['Série (Área 6)', 'Não consta no Nível 1', 'Menção de Série completa : (Título da série ; número)', 'Menção de Série, subséries e responsabilidades da série'],
      ['Notas (Área 7)', 'Apenas notas indispensáveis', 'Notas padrão e relevantes para identificação', 'Todas as notas prescritas aplicáveis pelo código'],
      ['ISBN / Disponibilidade (Área 8)', 'Número normalizado (ISBN/ISSN)', 'ISBN/ISSN : Termos de disponibilidade/preço', 'ISBN/ISSN com todas as qualificações e encadernações'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Teoria Geral da Catalogação e Tipologia de Catálogos

A catalogação descritiva é o ramo instrumental da Biblioteconomia voltado à identificação, representação padronizada e individualização dos recursos informacionais existentes em um acervo, construindo substitutos bibliográficos que viabilizam a comunicação e a recuperação documental (Mey & Silveira, 2009, *Catalogação no Plural*).

#### A. A Herança de Panizzi (1841) e Charles Ammi Cutter (1876)
A moderna catalogação descritiva consolidou-se a partir de dois marcos históricos fundamentais:
* **Anthony Panizzi (1841):** Elaborou as célebres *91 Regras do Museu Britânico*, estabelecendo a primazia do autor como ponto de acesso principal, a adoção de títulos uniformes para obras sagradas e a necessidade de remissivas padronizadas.
* **Charles Ammi Cutter (1876):** Publicou as seminais *Rules for a Dictionary Catalog*, nas quais postulou os **três objetivos primordiais do catálogo bibliográfico**:
  1. **Permitir a localização** de um livro quando se conhece o autor, o título ou o assunto (*função de localização/busca direta*);
  2. **Mostrar o que a biblioteca possui** de determinado autor, sobre determinado assunto ou em determinado gênero literário (*função de congregação/agrupamento de acervo*);
  3. **Auxiliar na escolha** de um livro quanto à sua edição (critério bibliográfico) ou quanto ao seu caráter literário ou técnico (*função de seleção/avaliação crítica*).

---

#### B. Tipologia Estrutural de Catálogos Bibliográficos
Uma das distinções conceituais clássicas mais recorrentes na banca Cebraspe reside na arquitetura física e lógica dos catálogos:

| Tipo de Catálogo | Princípio de Organização e Interfilação | Vantagens no Uso | Limitações Técnicas |
| :--- | :--- | :--- | :--- |
| **Catálogo Dicionário** | **Interfilação alfabética única e integrada** de pontos de acesso de autor, título e assunto na mesma sequência corrida, exatamente como em um dicionário geral. | Máxima simplicidade para o leitor leigo: busca autor, título ou tema em um único índice alfabético contínuo. | Crescimento desordenado e complexidade de regras de alfabetação com homônimos e subdivisões de assunto extensas. |
| **Catálogo Sistemático (Classificado)** | **Bipartição estrutural obrigatória:**<br>1. *Catálogo Principal:* ordenado logicamente pela notação de classificação (CDD ou CDU).<br>2. *Índice Alfabético Auxiliar:* fichas remissivas alfabéticas de autores, títulos e cabeçalhos de assunto que apontam para o número de classificação. | Reúne obras por afinidade temática em conformidade com o arranjo físico das estantes; independe do idioma do cabeçalho. | Exige do usuário consulta em duas etapas: pesquisa o termo no índice alfabético para depois localizar a notação no catálogo classificado. |
| **Catálogo Alfabético de Autores e Títulos** | Reúne em sequência alfabética estrita apenas pontos de acesso de pessoas, entidades e títulos, **excluindo totalmente cabeçalhos de assunto**. | Agiliza a busca de usuários que já possuem referências bibliográficas prontas (conhecem o autor ou o título). | Não permite pesquisa temática por disciplina ou matéria. |
| **Catálogo Alfabético de Assuntos** | Ordena exclusivamente cabeçalhos de assunto em ordem alfabética direta ou pré-coordenada. | Concentra pesquisas de pesquisa temática específica. | Requer manutenção rigorosa de vocabulários controlados e listas de remissivas (*ver* e *ver também*). |
| **OPAC (Online Public Access Catalog)** | Catálogo eletrônico em base de dados relacional. | Pesquisa por múltiplos pontos de acesso simultâneos, operadores booleanos e hiperlinks. | Requer interfaces acessíveis e formatos de intercâmbio padronizados (MARC 21, Dublin Core). |

---

### 2. A Declaração de Princípios Internacionais de Catalogação (ICP - IFLA 2016)

Aprovada originalmente na Conferência de Paris de 1961 e atualizada pela IFLA em 2009 e 2016 (*Statement of International Cataloguing Principles*), a Declaração de Princípios da IFLA constitui a base filosófica e conceitual que orienta todos os códigos modernos (AACR2r, RDA e normas da ISBD):

1. **Conveniência do Usuário (*Princípio Supremo e Inegociável*):**
   * Todas as decisões relativas à escolha de pontos de acesso, descrições bibliográficas e terminologia devem ser tomadas tendo em vista o esforço mínimo e a máxima facilidade de recuperação pelo usuário da unidade de informação.
   * *Alerta Cebraspe:* A banca costuma tentar induzir o candidato ao erro afirmando que a regra prioriza a "conveniência dos bibliotecários" ou a "economia da instituição".
2. **Uso Comum (*Common Usage*):** O vocabulário empregado nas descrições e nos pontos de acesso autorizados deve refletir a linguagem natural e predominante utilizada pela maioria dos usuários do acervo.
3. **Representação Fidedigna (*Representation*):**
   * O recurso informacional deve ser descrito **exatamente como se apresenta** em sua fonte principal de informação.
   * Não cabe ao catalogador corrigir tacitamente erros tipográficos, anacronismos ou variações na folha de rosto; estes devem ser transcritos fidedignamente, cabendo notas explicativas ou pontos de acesso secundários padronizados para eventuais correções.
4. **Precisão (*Accuracy*):** A representação deve espelhar fielmente as características e atributos da entidade bibliográfica descrita.
5. **Suficiência e Necessidade (*Sufficiency and Necessity*):** Devem ser incluídos apenas os elementos essenciais para identificar, selecionar e acessar o recurso, evitando prolixidades inúteis.
6. **Significância (*Significance*):** Os dados catalográficos devem ser bibliograficamente relevantes para o universo de busca.
7. **Economia (*Economy*):** Quando houver caminhos alternativos para atingir o mesmo objetivo de recuperação, deve-se selecionar a solução mais simples e econômica em termos de esforço e armazenamento.
8. **Consistência e Padronização (*Consistency and Standardization*):** A descrição e a criação de cabeçalhos devem ser uniformizadas por regras padronizadas compartilhadas entre redes cooperativas.
9. **Interoperabilidade (*Interoperability*):** Os registros devem ser modelados em formatos estruturados abertos para permitir a troca global de dados (*Linked Open Data* e Web Semântica).

---

### 3. A Estrutura do Código AACR2r (*Anglo-American Cataloguing Rules*, 2ª Edição Revisada)

O AACR2r divide-se estruturalmente em duas grandes partes complementares:

#### A. Parte I (Capítulos 1 a 13) — Descrição Bibliográfica
Baseada na estrutura internacional da **ISBD (M)**, a Parte I estabelece as regras de transcrição dos dados em **oito áreas padronizadas**:
* *Capítulo 1:* Regras Gerais de Descrição (aplicáveis a todo e qualquer suporte).
* *Capítulo 2:* Livros, folhetos e folhas impressas (monografias).
* *Capítulo 3:* Materiais cartográficos (mapas, globos, plantas).
* *Capítulo 4:* Manuscritos.
* *Capítulo 5:* Música impressa (partituras).
* *Capítulo 6:* Gravações de som.
* *Capítulo 7:* Filmes e gravações de vídeo.
* *Capítulo 8:* Materiais gráficos (fotografias, gravuras, transparências).
* *Capítulo 9:* Recursos eletrônicos (arquivos de dados e programas).
* *Capítulo 10:* Artefatos tridimensionais e realia (objetos naturais e manufaturados).
* *Capítulo 11:* Microformas.
* *Capítulo 12:* Recursos contínuos (publicações seriadas e recursos integradores).
* *Capítulo 13:* Análise (registros de partes componentes, analíticas de artigos e capítulos).

#### B. As Oito Áreas de Descrição da ISBD / AACR2r e Pontuação Prescrita
1. **Área 1 — Título e Indicação de Responsabilidade:**
   * Título próprio [DGM] = Título equivalente : Subtítulo / Primeira indicação de responsabilidade ; Responsabilidade subsequente.
2. **Área 2 — Edição:**
   * . – Menção de edição / Primeira indicação de responsabilidade da edição.
3. **Área 3 — Detalhes Específicos do Material (Restrita):**
   * . – Utilizada *exclusivamente* para materiais cartográficos (escala e projeção), música (formato de apresentação musical), recursos contínuos (numeração/datas) e recursos eletrônicos (tipo de arquivo). **Livros comuns NÃO utilizam a Área 3!**
4. **Área 4 — Publicação, Distribuição etc. (Imprenta):**
   * . – Lugar de publicação : Nome do publicador, Data de publicação (Lugar de fabricação : Nome do fabricante, Data de fabricação).
5. **Área 5 — Descrição Física (Colação):**
   * . – Extensão do item (número de páginas ou volumes) : Outros detalhes físicos (il., retr.) ; Dimensões (cm) + Material adicional.
6. **Área 6 — Série:**
   * . – (Título da série = Título equivalente da série / Indicação de responsabilidade da série, ISSN ; Número na série).
7. **Área 7 — Notas:**
   * . – Parágrafos livres ou estruturados para informar teses, bibliografias, conteúdo sumário e restrições de acesso.
8. **Área 8 — Número Normalizado e Termos de Disponibilidade:**
   * . – ISBN ou ISSN : Preço ou termos de obtenção.

---

### 4. Os Três Níveis de Descrição Bibliográfica do AACR2r (Regra 1.0D)

Para garantir flexibilidade às bibliotecas de diferentes portes e vocações, o AACR2r prevê três níveis de detalhamento da descrição:

#### Nível 1 (Regra 1.0D1 — Descrição Sumária / Mínima)
Recomendado para bibliotecas pequenas, escolares ou acervos de alta rotatividade:
* **Elementos Obrigatórios:**
  1. Título próprio;
  2. Primeira indicação de responsabilidade (apenas se diferir do cabeçalho principal de entrada ou se não houver cabeçalho de autor);
  3. Menção de edição;
  4. Dados específicos do material (se aplicável);
  5. Primeiro publicador;
  6. Data de publicação;
  7. Extensão do item (paginação ou volumes);
  8. Número normalizado (ISBN ou ISSN).
* *Exemplo Nível 1:*  
  \`\`\`text
  Manual de direito constitucional / Alexandre de Moraes. – 38. ed. – Atlas, 2022. – 950 p. – ISBN 978-65-5977-123-4.
  \`\`\`

#### Nível 2 (Regra 1.0D2 — Descrição Padrão Médio / Recomendada)
É o nível padrão adotado pela maioria das bibliotecas universitárias, especializadas e parlamentares (como a Câmara dos Deputados):
* **Elementos Obrigatórios:**
  1. Título próprio [designação geral do material] = título equivalente : subtítulo / primeira indicação de responsabilidade ; indicações de responsabilidade subsequentes;
  2. Menção de edição / primeira indicação de responsabilidade da edição ; indicações de responsabilidade subsequentes da edição;
  3. Detalhes específicos do material (Área 3, quando cabível);
  4. Primeiro lugar de publicação : primeiro publicador, data de publicação;
  5. Extensão : outros detalhes físicos (ilustrações) ; dimensões (altura em centímetros);
  6. Menção de série completa;
  7. Notas necessárias para identificação da obra;
  8. Número normalizado e termos de disponibilidade.

#### Nível 3 (Regra 1.0D3 — Descrição Completa / Exaustiva)
Aplicado em bibliotecas nacionais, acervos de obras raras, coleções especiais e bibliografias analíticas:
* Inclui **absolutamente todos os elementos** previstos nas regras do AACR2r aplicáveis àquele tipo de suporte físico (todos os lugares de publicação, distribuidores, impressor, encadernações, notas detalhadas de proveniência e filigrana).

---

### 5. Regras Avançadas de Escolha e Forma dos Pontos de Acesso (Parte II: Capítulos 21 a 26)

#### A. Autoria Pessoal e a Regra dos Autores (Capítulo 21)
* **Até três autores sem destaque:**
  * Entrada principal: sob o **primeiro autor citado na fonte principal**.
  * Entradas secundárias: geradas obrigatoriamente para o **segundo e o terceiro autores**.
* **Quatro ou mais autores sem destaque:**
  * Entrada principal: **OBRIGATORIAMENTE PELO TÍTULO**.
  * Entrada secundária: gerada **apenas para o primeiro autor citado** na fonte principal seguido de *[et al.]*.
* **Obras com destaque tipográfico ou redacional:**
  * Se a folha de rosto der destaque claro a um autor específico (ex.: "Por Fulano de Tal, com a colaboração de Sicrano, Beltrano e Outros"), a entrada principal é atribuída ao **autor em destaque**, gerando-se secundárias para os colaboradores conforme as regras gerais.

#### B. Obras Sob Coordenação, Organização e Compilação (Regra 21.7)
* Coletâneas de trabalhos produzidas sob a direção de um coordenador ou organizador têm **ENTRADA PRINCIPAL PELO TÍTULO**.
* Coordenadores, organizadores e compiladores recebem **ENTRADAS SECUNDÁRIAS** de responsabilidade, nunca a entrada principal.

#### C. Autoria sob Pseudônimo (Regras 22.2B)
* Se um autor pessoal for conhecido predominantemente por um **único pseudônimo**, a entrada deve ser feita sob o pseudônimo (ex.: \`Twain, Mark\`, e não \`Clemens, Samuel Langhorne\`; \`Tristão de Athayde\`, e não \`Alceu Amoroso Lima\`).
* Se o autor utilizar pseudônimos múltiplos para gêneros literários distintos e for amplamente identificado por eles, criam-se cabeçalhos independentes interligados por remissivas *ver também*.

#### D. Nomes com Prefixos, Partículas e Sobrenomes Compostos (Regra 22.5)
A entrada de nomes compostos ou com partículas obedece ao idioma do autor:
* **Língua Portuguesa:** Entra pela parte posterior ao prefixo (ex.: \`Silva, Maria da\`; \`Santos, João dos\`; \`Moraes, Alexandre de\`).
* **Língua Francesa:** Entra pelo prefixo se for artigo ou contração de artigo com preposição (ex.: \`La Fontaine, Jean de\`; \`Du Bellay, Joachim\`), mas após a preposição simples (ex.: \`Balzac, Honoré de\`).
* **Língua Alemã e Holandesa:** Entra após a preposição (ex.: \`Goethe, Johann Wolfgang von\`; \`Beethoven, Ludwig van\`), salvo em nomes naturalizados de língua inglesa (ex.: \`Van Buren, Martin\`).
* **Sobrenomes Compostos Hifenizados ou Consagrados:** Entram pela primeira parte do composto (ex.: \`Castelo Branco, Humberto de Alencar\`; \`Espirito Santo, Carlos do\`).
* **Papas, Soberanos e Bispos (Regras 22.16 e 22.17):** Entram pelo **primeiro nome oficial**, seguido do numeral ordinal em algarismos romanos e do título de identificação (ex.: \`Francisco, Papa\`; \`João Paulo II, Papa\`; \`Elizabeth II, Rainha do Reino Unido\`; \`Pedro II, Imperador do Brasil\`).

#### E. Entidades Coletivas e Órgãos Governamentais (Capítulo 24)
* **Entrada Direta:** Entidades com nomes distintivos e autônomos entram diretamente sob sua própria denominação oficial (ex.: \`Universidade de Brasília\`; \`Petróleo Brasileiro S.A.\`).
* **Entrada Subordinada à Jurisdição Territorial:** Órgãos de governo que expressam funções legislativas, executivas, judiciárias ou militares entram sob o nome da jurisdição territorial responsável:
  * *Poder Legislativo:* \`Brasil. Congresso Nacional\`; \`Brasil. Congresso Nacional. Câmara dos Deputados\`; \`Brasil. Congresso Nacional. Senado Federal\`.
  * *Poder Judiciário:* \`Brasil. Supremo Tribunal Federal\`; \`Brasil. Superior Tribunal de Justiça\`; \`Distrito Federal (Brasil). Tribunal de Justiça\`.
  * *Poder Executivo:* \`Brasil. Presidência da República\`; \`Brasil. Ministério da Educação\`.

#### F. Atos Legislativos e Normativos (Regra 21.31)
* **Leis, Decretos e Constituições:** Entrada principal sob o cabeçalho da jurisdição que promulgou o ato, seguido do título uniforme:
  * Ex.: \`Brasil. [Constituição (1988)]\`.
  * Ex.: \`Brasil. [Lei n. 8.112, de 11 de dezembro de 1990]\`.
  * Ex.: \`Distrito Federal (Brasil). [Lei orgânica (1993)]\`.
* Se a publicação contiver compilação de leis diversas sobre uma matéria sem uma lei única em destaque: **Entrada pelo título da compilação**, com secundária para a jurisdição governamental.

#### G. Eventos, Conferências, Congressos e Seminários (Regras 21.1B2d e 24.7)
* Uma conferência é considerada entidade coletiva se possuir denominação oficial formal.
* A entrada é feita sob o **nome oficial do evento**, seguido, entre parênteses, de três elementos padronizados: **(número em algarismo ordinal : ano de realização : localidade do evento)**.
* Exemplo canônico Cebraspe:  
  \`\`\`text
  Congresso Brasileiro de Biblioteconomia e Documentação (28. : 2019 : Vitória, ES)
  \`\`\`

---

### 6. Padrões Decisórios e Cascas de Banana do Cebraspe em Catalogação

| Padrão da Banca / Armadilha | Como o Cebraspe Formula para Induzir ao Erro | Padrão Doutrinário Correto (Gabarito Oficial) |
| :--- | :--- | :--- |
| **Catálogo Dicionário vs Sistemático** | *"O catálogo dicionário caracteriza-se pela separação física em fichários distintos para autores, títulos e assuntos."* | **ERRADO.** O catálogo dicionário une autores, títulos e assuntos em uma **única ordem alfabética contínua**. Quem separa em fichário numérico e índice alfabético é o catálogo sistemático. |
| **Níveis de Descrição (Regra 1.0D)** | *"No primeiro nível de catalogação do AACR2r, exige-se a transcrição de subtítulos completos, notas gerais e dimensões físicas da obra."* | **ERRADO.** O Nível 1 exige apenas título próprio, 1ª responsabilidade (se diferir do cabeçalho), menção de edição, 1º publicador, data, extensão e ISBN. Notas e dimensões pertencem aos Níveis 2 e 3. |
| **Coordenação / Organização de Coletâneas** | *"Em livro composto por artigos de dez especialistas organizado por um professor eminente, a entrada principal é feita sob o nome do organizador."* | **ERRADO.** Obras organizadas ou coordenadas têm **entrada principal pelo TÍTULO** (Regra 21.7). Organizadores recebem apenas entrada secundária. |
| **Regra de Quatro ou Mais Autores** | *"Na catalogação de monografia de quatro autores sem destaque, a entrada principal é pelo primeiro autor citado, usando-se et al. para os demais."* | **ERRADO.** Com 4 ou mais autores sem destaque, a entrada principal é **OBRIGATORIAMENTE PELO TÍTULO**. O primeiro autor recebe entrada secundária acompanhado de *et al.* |
| **Área 3 em Livros Comuns** | *"A Área 3 da ISBD destina-se a registrar a paginação e o tamanho físico de livros impressos comuns."* | **ERRADO.** Paginação e tamanho pertencem à **Área 5 (Descrição Física)**. A Área 3 é de preenchimento restrito a cartográficos, música, seriados e recursos eletrônicos. |
| **Entrada de Leis Federais** | *"Uma lei federal tem entrada principal sob o cabeçalho Brasil. Congresso Nacional. Câmara dos Deputados, por ter sido originada nessa Casa."* | **ERRADO.** Leis federais entram diretamente sob o cabeçalho da jurisdição territorial soberana: **Brasil.**, seguido do título uniforme, e não sob órgãos fracionários. |
`,
  checkpoints: [
    {
      id: 'cp-2-1-1',
      pergunta: 'Micro-Checkpoint 1: Tipologia de Catálogos e Regras de Cutter (1876)',
      item: 'No modelo de catálogo dicionário formulado por Charles Ammi Cutter, os pontos de acesso de autor, título e assunto devem ser fisicamente separados em seções estanques, vedando-se a sua interfilação em ordem alfabética contínua.',
      gabarito: 'E',
      justificativa: 'Errado! A própria essência e definição do Catálogo Dicionário é a interfilação contínua de autores, títulos e assuntos em uma ÚNICA sequência alfabética integrada, tal como em um dicionário comum.',
    },
    {
      id: 'cp-2-1-2',
      pergunta: 'Micro-Checkpoint 2: Princípios Internacionais de Catalogação (ICP 2016)',
      item: 'De acordo com a Declaração de Princípios Internacionais de Catalogação (ICP 2016) da IFLA, a conveniência do usuário constitui o princípio primordial e orientador supremo de todas as decisões relativas à descrição e escolha de pontos de acesso.',
      gabarito: 'C',
      justificativa: 'Correto! O princípio orientador basilar da ICP 2016 é inegociavelmente a conveniência do usuário (item 2.1), superando interesses burocráticos ou administrativos da instituição.',
    },
    {
      id: 'cp-2-1-3',
      pergunta: 'Micro-Checkpoint 3: Níveis de Descrição do AACR2r (Regra 1.0D)',
      item: 'O primeiro nível de descrição bibliográfica previsto no AACR2r é o mais sumário, prescrevendo obrigatoriamente apenas o título próprio, a primeira indicação de responsabilidade se diferir do cabeçalho principal, a menção de edição, os detalhes específicos (se aplicável), o primeiro publicador, a data, a extensão e o número normalizado.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme a regra 1.0D1 do AACR2r, esses são exatamente os elementos mínimos integrantes do primeiro nível de catalogação.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-1-1',
        periodo: '1841',
        disciplina: 'Origens da Catalogação Moderna',
        focoPrincipal: 'As 91 Regras de Panizzi no Museu Britânico: consolidação do autor como ponto de acesso principal',
        figuraChave: 'Anthony Panizzi',
      },
      {
        id: 'tl-2-1-2',
        periodo: '1876',
        disciplina: 'Teoria dos Catálogos',
        focoPrincipal: 'Rules for a Dictionary Catalog: os 3 objetivos clássicos do catálogo (localizar, mostrar e escolher) e interfilação única',
        figuraChave: 'Charles Ammi Cutter',
      },
      {
        id: 'tl-2-1-3',
        periodo: '1961',
        disciplina: 'Princípios Internacionais',
        focoPrincipal: 'Conferência de Paris: Princípios Internacionais de Catalogação e consagração da autoria corporativa',
        figuraChave: 'IFLA / Comitê de Paris',
      },
      {
        id: 'tl-2-1-4',
        periodo: '1978 / 1988 / 2002',
        disciplina: 'Códigos Anglo-Americanos',
        focoPrincipal: 'Publicação do AACR2 e AACR2r, estruturação em 8 áreas da ISBD, 3 níveis de descrição e regras dos capítulos 21-26',
        figuraChave: 'Michael Gorman e Paul Winkler',
      },
      {
        id: 'tl-2-1-5',
        periodo: '2009 / 2016',
        disciplina: 'Princípios Internacionais IFLA',
        focoPrincipal: 'Declaração dos Princípios Internacionais de Catalogação (ICP): primazia da Conveniência do Usuário e Interoperabilidade',
        figuraChave: 'IFLA Cataloguing Section',
      },
    ],
    autores: [
      {
        id: 'aut-2-1-1',
        nome: 'Eliane Serrão Alves Mey',
        ano: 2009,
        obraPrincipal: 'Catalogação no plural: para além do formato',
        ideiaChave: 'A catalogação como sistema semiótico de mensagens codificadas que viabiliza a interseção entre o documento e o usuário.',
        chipPegadinha: 'A catalogação descritiva abrange três etapas indissociáveis: descrição bibliográfica, pontos de acesso e localização.',
      },
      {
        id: 'aut-2-1-2',
        nome: 'Charles Ammi Cutter',
        ano: 1876,
        obraPrincipal: 'Rules for a Dictionary Catalog',
        ideiaChave: 'Objetivos supremos do catálogo: encontrar um livro conhecido, mostrar o que a biblioteca possui e auxiliar na escolha.',
        chipPegadinha: 'Catálogo Dicionário reúne autor, título e assunto na MESMA sequência alfabética integrada.',
      },
      {
        id: 'aut-2-1-3',
        nome: 'Anthony Panizzi',
        ano: 1841,
        obraPrincipal: 'Rules for the Compilation of the Catalogue',
        ideiaChave: '91 regras para o British Museum que fundaram o rigor dos cabeçalhos de autor e remissivas padronizadas.',
        chipPegadinha: 'Estabeleceu que obras anônimas entram pelo título e obras sagradas por título uniforme.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-1-1',
        afirmacao: 'No AACR2r, em um livro com quatro organizadores na folha de rosto, deve-se fazer a entrada principal pelo nome do primeiro organizador e entradas secundárias para os outros três.',
        gabarito: 'E',
        porQue: 'No AACR2r, obras sob coordenação ou organização têm entrada principal OBRIGATORIAMENTE PELO TÍTULO, recebendo os organizadores apenas entradas secundárias.',
      },
      {
        id: 'peg-2-1-2',
        afirmacao: 'O primeiro nível de catalogação do AACR2r exige o preenchimento de todas as notas gerais, dimensões em centímetros e detalhes físicos da obra.',
        gabarito: 'E',
        porQue: 'O Nível 1 é o mais conciso e sumário: requer apenas título próprio, 1ª responsabilidade (se diferir do cabeçalho), edição, 1º publicador, data, extensão e ISBN. Notas e dimensões pertencem aos Níveis 2 e 3.',
      },
      {
        id: 'peg-2-1-3',
        afirmacao: 'O catálogo dicionário exige que as fichas de assunto sejam armazenadas em móvel separado do catálogo alfabético de autores e títulos.',
        gabarito: 'E',
        porQue: 'O Catálogo Dicionário reúne e interfila autores, títulos e assuntos em uma ÚNICA sequência alfabética contínua. Quem separa por assunto e notação é o Catálogo Sistemático.',
      },
    ],
  },
};

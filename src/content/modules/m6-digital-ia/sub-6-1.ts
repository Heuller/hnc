import type { ModuloFilho } from '../../../domain/types';

export const submodulo61: ModuloFilho = {
  id: 'sub-6-1',
  numero: '6.1',
  titulo: 'Bibliotecas Digitais vs. Eletrônicas, Arquitetura da Informação e Usabilidade',
  descricaoCurta: 'Diferenciação conceitual entre biblioteca tradicional, eletrônica, digital e virtual, os 4 sistemas da Arquitetura da Informação (Rosenfeld & Morville: organização, navegação, rotulagem e busca), heurísticas de usabilidade de Jakob Nielsen e acessibilidade digital (WCAG e e-MAG).',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Louis Rosenfeld', 'Peter Morville', 'Jakob Nielsen', 'F. W. Lancaster', 'W3C / e-MAG', 'Clifford Lynch'],
  alertasCebraspe: [
    'Diferenciação das tipologias de biblioteca: Biblioteca Eletrônica (automatiza processos internos de circulação e catálogos com computadores, mas seu acervo primário continua impresso); Biblioteca Digital (armazena e disponibiliza documentos integrais em texto completo em formato digital nativo ou digitalizado, com preservação de longo prazo e metadados estruturados); Biblioteca Virtual (acesso distribuído em rede transparente sem sede física única, uma "biblioteca sem paredes"). O Cebraspe adora afirmar que não há distinção conceitual entre digital e virtual: ERRADO!',
    'Os quatro sistemas da Arquitetura da Informação (Rosenfeld e Morville): 1. Sistema de Organização (como a informação é categorizada em esquemas exatos ou ambíguos); 2. Sistema de Navegação (global, local, associativa e suplementar com breadcrumbs); 3. Sistema de Rotulagem (como os botões, links e categorias são nomeados em linguagem coerente); e 4. Sistema de Busca (mecanismos que processam a consulta e ranqueiam resultados).',
    'Usabilidade e as 10 Heurísticas de Jakob Nielsen: visibilidade do status do sistema, correspondência com o mundo real, controle do usuário e liberdade (botão desfazer), consistência e padrões, prevenção de erros, reconhecimento em vez de memorização, flexibilidade e eficiência de uso (atalhos), design minimalista (data-ink), diagnóstico de erros em linguagem humana e ajuda/documentação.',
    'Testes de Usabilidade em bibliotecas digitais: o Cebraspe exige saber que os testes empíricos com usuários reais (método comportamental) são insubstituíveis pela mera inspeção heurística de especialistas para diagnosticar falhas cognitivas reais na interface.',
    'Acessibilidade Digital no Setor Público: aplicação das diretrizes WCAG (Web Content Accessibility Guidelines) do W3C sob os 4 princípios fundamentais (POUR: Perceptível, Operável, Compreensível e Robusto) e as diretrizes do Modelo de Acessibilidade em Governo Eletrônico (e-MAG).',
  ],
  quadroComparativo: {
    titulo: 'Evolução e Contraste das Tipologias de Bibliotecas',
    colunas: ['Tipo de Biblioteca', 'Forma Predominante do Acervo', 'Acesso e Infraestrutura', 'Mediação e Serviços', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Biblioteca Tradicional', 'Suportes físicos em papel, códices e impressos', 'Presencial, restrito ao prédio físico e horário de funcionamento', 'Mediação direta presencial no balcão e fichas catalográficas em gaveteiros', 'Afirmar que a biblioteca tradicional não pode ter computadores para administração interna.'],
      ['Biblioteca Eletrônica', 'Acervo físico com apoio de mídias magnéticas e CD-ROMs', 'Catálogos automatizados locais (OPAC) e rotinas internas computadorizadas', 'Automação de rotinas (empréstimo por código de barras e catalogação MARC)', 'Confundir biblioteca eletrônica com biblioteca digital (a eletrônica apenas informatiza a gestão de livros físicos).'],
      ['Biblioteca Digital', 'Objetos digitais em texto completo (natos digitais ou digitalizados)', 'Acesso remoto via Internet 24/7 com metadados estruturados (Dublin Core/OAI-PMH)', 'Serviços digitais, preservação de longo prazo e interoperabilidade com repositórios', 'Dizer que uma biblioteca digital requer obrigatoriamente uma cópia impressa de segurança em papel (FALSO).'],
      ['Biblioteca Virtual', 'Disperso e imaterial em rede global de hiperlinks', 'Totalmente transparente na nuvem; não possui paredes nem prédio físico único', 'Acesso distribuído em múltiplos nós, federações e portais colaborativos da Web', 'Afirmar que biblioteca virtual e biblioteca digital são sinônimos perfeitos na doutrina (FALSO).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Tipologia Evolutiva das Bibliotecas na Era da Informação

A Ciência da Informação e a Biblioteconomia contemporâneas (Lancaster, 1993; Cunha, 2000; Marchiori, 1997) delimitam com rigor epistemológico as categorias evolutivas das bibliotecas:

\`\`\`mermaid
graph LR
    A[1. Biblioteca Tradicional] --> B[2. Biblioteca Eletrônica / Automatizada]
    B --> C[3. Biblioteca Digital]
    C --> D[4. Biblioteca Virtual / Sem Paredes]
\`\`\`

* **1. Biblioteca Tradicional:**
  * Fundamentada exclusivamente no acervo físico em suporte papel e fichas catalográficas manuais.
  * O acesso é circunscrito aos limites arquitetônicos do edifício e aos horários formais de expediente.
* **2. Biblioteca Eletrônica / Automatizada:**
  * Utiliza tecnologias de computação para **informatizar as rotinas administrativas e técnicas internas**: controle de circulação, inventário por código de barras e catálogo público em linha (OPAC).
  * **Ponto Crítico de Prova:** O acervo bibliográfico primário (livros, periódicos, teses) **permanece predominantemente analógico e físico** nas estantes. O computador atua como instrumento de gestão e indexação, não como repositório dos textos completos.
* **3. Biblioteca Digital:**
  * Armazena, processa, preserva e provê acesso a **documentos em texto completo em formato digital** (sejam eles documentos digitalizados ou "natos digitais" / *born-digital*).
  * Possui estrutura formal de repositório (ex.: DSpace), esquemas padronizados de metadados descritivos e de preservação (Dublin Core, METS, PREMIS), atribuição de identificadores persistentes e acervo próprio sob custódia institucional.
* **4. Biblioteca Virtual / "Biblioteca sem Paredes":**
  * Conceito pós-custodial que transcende a posse física e as fronteiras institucionais.
  * Consiste em um portal integrado ou rede em malha que disponibiliza acesso unificado e transparente a coleções heterogêneas e distribuídas geograficamente em servidores globais via protocolos de rede (ex.: Oasisbr, BDTD, Europeana).

---

### 2. A Arquitetura da Informação de Louis Rosenfeld e Peter Morville

Em *Information Architecture for the World Wide Web* (conhecido mundialmente como o "livro do urso polar"), **Louis Rosenfeld e Peter Morville** (1998/2006) estruturam a Arquitetura da Informação (AI) digital em **quatro sistemas fundamentais e interdependentes**:

\`\`\`mermaid
graph TD
    AI[Arquitetura da Informação - Rosenfeld & Morville] --> S1[1. Sistemas de Organização]
    AI --> S2[2. Sistemas de Navegação]
    AI --> S3[3. Sistemas de Rotulagem]
    AI --> S4[4. Sistemas de Busca]
    S1 --> S1A[Esquemas Exatos vs. Ambíguos]
    S2 --> S2A[Global, Local, Contextual, Breadcrumbs]
    S3 --> S3A[Rótulos Verbais e Icônicos Consistentes]
    S4 --> S4A[Motores, Facetas, Relevância, Filtros]
\`\`\`

#### A. Sistemas de Organização (*Organization Systems*)
Definem como o conteúdo informacional é categorizado e agrupado:
* **Esquemas de Organização Exatos:** Não comportam ambiguidade cognitiva. A informação possui uma única chave de localização:
  * *Alfabético:* Índices de autores, dicionários e glossários legislativos.
  * *Cronológico:* Diários Oficiais, datas de promulgação e históricos de votação.
  * *Geográfico:* Estados da federação, municípios ou regiões geopolíticas.
* **Esquemas de Organização Ambíguos / Subjetivos:** Exigem interpretação intelectual, pois o usuário pode não saber exatamente o termo técnico procurado:
  * *Por Assunto / Tópico:* Classes temáticas (ex.: Direito Tributário, Seguridade Social).
  * *Por Tarefa:* Guias direcionados a ações específicas (ex.: "Solicitar Ficha Catalográfica", "Consultar Tramitação de PEC").
  * *Por Audiência / Público-Alvo:* Segmentação de conteúdos para públicos distintos (ex.: "Para o Cidadão", "Para o Parlamentar", "Para a Imprensa").

#### B. Sistemas de Navegação (*Navigation Systems*)
Garantem que o usuário saiba **onde está**, **de onde veio** e **quais opções de deslocamento possui**:
* *Navegação Global:* Barras e menus persistentes presentes em todas as páginas do portal (ex.: cabeçalho da Câmara dos Deputados).
* *Navegação Local:* Menus contextuais específicos de uma subseção ou subsistema do portal.
* *Navegação Contextual / Associativa:* Hiperlinks embutidos no corpo do texto para remeter a conceitos correlatos.
* *Navegação Suplementar:* Instrumentos de apoio externo à navegação direta: **breadcrumbs** (trilhas de migalhas de pão: *Início > Biblioteca > Catálogo > Obra*), mapas do site (*sitemaps*) e índices remissivos de A a Z.

#### C. Sistemas de Rotulagem (*Labeling Systems*)
Representam conceitualmente as opções de navegação e as categorias por meio de termos textuais ou ícones gráficos:
* Devem primar pela **consistência, clareza e previsibilidade**.
* O vocabulário deve refletir o modelo mental e a linguagem natural da comunidade de usuários, evitando jargões técnicos fechados da equipe de desenvolvimento ou da Biblioteconomia hermética.

#### D. Sistemas de Busca (*Search Systems*)
Conjunto de ferramentas algorítmicas e visuais que processam consultas de usuários:
* Definição da sintaxe aceita (operadores booleanos, truncagem, busca por frases exatas com aspas).
* Zonas de busca (*search zones*) e exibição de resultados ranqueados por relevância ou data, com navegação por **facetas dinâmicas** (filtragem por ano, formato, autor e comissão temática).

---

### 3. Usabilidade e as 10 Heurísticas de Jakob Nielsen

A usabilidade avalia a facilidade, eficácia, eficiência e satisfação com que usuários realizam tarefas em um sistema digital (Nielsen, 1994, *Usability Engineering*):

| Heurística de Nielsen | Diretriz Prática | Aplicação em Bibliotecas Digitais e Portais |
| :--- | :--- | :--- |
| **1. Visibilidade do status** | O sistema deve informar continuamente o que está ocorrendo em tempo hábil. | Barras de progresso ao descarregar teses em PDF volumosas ou avisos de "Processando busca...". |
| **2. Correspondência com o mundo real** | Falar a linguagem do usuário com conceitos e metáforas cotidianos. | Usar termos como "Minha Estante" ou "Histórico de Empréstimos" em vez de "Tabela Relacional 03". |
| **3. Controle e liberdade** | Oferecer saídas de emergência claras e reversibilidade de ações. | Botões evidentes de "Cancelar", "Limpar Filtros" e "Desfazer Operação". |
| **4. Consistência e padrões** | Seguir convenções consolidadas da web para não desorientar o usuário. | Ícone de lupa para busca, links sublinhados ou destacados e botões com comportamentos uniformes. |
| **5. Prevenção de erros** | Projetar a interface para impedir falhas antes que elas aconteçam. | Confirmações para ações destrutivas (ex.: "Excluir reserva?") e máscaras em campos de datas. |
| **6. Reconhecimento em vez de lembrança** | Minimizar a carga de memória de trabalho do usuário tornando opções visíveis. | Histórico de buscas recentes, sugestões de preenchimento automático (*autocomplete*) e facetas abertas. |
| **7. Flexibilidade e eficiência** | Fornecer aceleradores para usuários avançados sem atrapalhar novatos. | Atalhos de teclado, busca avançada booleana para consultores e busca simples para o público geral. |
| **8. Design estético e minimalista** | Eliminar informações desnecessárias ou redundantes (*data-ink ratio*). | Telas de busca despoluídas, sem banners supérfluos que concorram com a atenção do pesquisador. |
| **9. Auxílio no reconhecimento de erros** | Mensagens de erro claras, em linguagem humana, sugerindo solução imediata. | Em vez de "Erro 404/NullPointer", exibir "Documento não encontrado. Deseja buscar em todo o catálogo?". |
| **10. Ajuda e documentação** | Prover ajuda contextual, concisa e orientada à resolução de problemas práticos. | Dicas de ajuda contextual flutuantes (*tooltips*) explicando como refinar a pesquisa booleana. |

---

### 4. Avaliação de Usabilidade e Acessibilidade Digital (WCAG e e-MAG)

#### A. Métodos de Avaliação de Usabilidade
* **Inspeção Heurística:** Avaliação analítica conduzida por especialistas em usabilidade que confrontam a interface contra as 10 heurísticas de Nielsen. Rápida e de baixo custo, mas sujeita a vieses dos avaliadores.
* **Testes de Usabilidade com Usuários Reais:** Método empírico observacional onde usuários representativos executam tarefas típicas monitoradas em laboratório ou remotamente. É o padrão-ouro para detectar atritos cognitivos reais.

#### B. Acessibilidade Digital (WCAG 2.1/2.2 e e-MAG)
A legislação brasileira (Lei Brasileira de Inclusão - Lei nº 13.146/2015) determina a acessibilidade obrigatória em todos os sítios de órgãos públicos:
* **Os Quatro Princípios da WCAG (W3C - Modelo POUR):**
  1. *Perceptível (Perceivable):* Informações e interfaces devem ser apresentadas de modo que os usuários possam percebê-las (ex.: textos alternativos \`alt\` em imagens, contraste de cores e legendas).
  2. *Operável (Operable):* A interface deve permitir operação integral via teclado sem depender de mouse, concedendo tempo suficiente para leitura.
  3. *Compreensível (Understandable):* Textos claros, previsibilidade no comportamento de páginas e mecanismos de assistência à entrada de dados.
  4. *Robusto (Robust):* Compatibilidade com tecnologias assistivas atuais e futuras (leitores de tela NVDA, JAWS e ampliadores de tela).
* **e-MAG (Modelo de Acessibilidade em Governo Eletrônico):** Normativa brasileira que adapta as recomendações internacionais da WCAG ao ecossistema dos sítios e portais da administração pública federal.`,
  checkpoints: [
    {
      id: 'cp-6-1-1',
      pergunta: 'Micro-Checkpoint 1: Os Quatro Sistemas da Arquitetura da Informação',
      item: 'Segundo Rosenfeld e Morville, a arquitetura da informação em ambientes digitais organiza-se a partir de quatro sistemas estruturantes: sistemas de organização, sistemas de navegação, sistemas de rotulagem e sistemas de busca.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a tetralogia fundacional da Arquitetura da Informação cobrada com frequência em concursos do Cebraspe.',
    },
    {
      id: 'cp-6-1-2',
      pergunta: 'Micro-Checkpoint 2: Diferença Conceitual entre Biblioteca Eletrônica e Digital',
      item: 'A distinção entre biblioteca eletrônica e biblioteca digital reside no fato de que a biblioteca digital tem como foco a provisão de acesso a documentos em texto completo em formato digital, enquanto a biblioteca eletrônica utiliza a computação para automatizar rotinas internas de acervos primordialmente físicos.',
      gabarito: 'C',
      justificativa: 'Correto! Essa é a exata distinção conceitual cobrada em provas recentes da banca Cebraspe (FUB, SEE-PE).',
    },
    {
      id: 'cp-6-1-3',
      pergunta: 'Micro-Checkpoint 3: Protocolo OAI-PMH e Coleta de Metadados',
      item: 'O protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) realiza a transferência integral dos arquivos binários dos documentos (arquivos PDF) entre os repositórios digitais provedores.',
      gabarito: 'E',
      justificativa: 'Errado! O protocolo OAI-PMH opera estritamente na camada de METADADOS (preferencialmente em Dublin Core simples). Ele não é concebido para coleta massiva de arquivos de conteúdo digital.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-6-1-1',
        periodo: '1994',
        disciplina: 'Usabilidade na Web',
        focoPrincipal: 'Formulação das 10 Heurísticas de Usabilidade para interfaces digitais',
        figuraChave: 'Jakob Nielsen',
      },
      {
        id: 'tl-6-1-2',
        periodo: '1998 / 2006',
        disciplina: 'Arquitetura da Informação',
        focoPrincipal: 'Publicação de "Information Architecture for the World Wide Web" (sistemas de organização, navegação, rotulagem e busca)',
        figuraChave: 'Louis Rosenfeld e Peter Morville',
      },
      {
        id: 'tl-6-1-3',
        periodo: '1999 / 2018',
        disciplina: 'Acessibilidade na Web',
        focoPrincipal: 'Consolidação das diretrizes internacionais WCAG pelo W3C e criação do e-MAG no Brasil',
        figuraChave: 'W3C / Governo Federal do Brasil',
      },
    ],
    autores: [
      {
        id: 'aut-6-1-1',
        nome: 'Louis Rosenfeld e Peter Morville',
        ano: 1998,
        obraPrincipal: 'Information Architecture for the World Wide Web (o livro do urso polar)',
        ideiaChave: 'Os 4 sistemas da AI: Organização, Navegação, Rotulagem e Busca.',
        chipPegadinha: 'Rotulagem não é mero estilo visual, é a representação linguística coerente das opções.',
      },
      {
        id: 'aut-6-1-2',
        nome: 'Jakob Nielsen',
        ano: 1994,
        obraPrincipal: 'Usability Engineering',
        ideiaChave: 'As 10 heurísticas de usabilidade e o teste empírico com usuários reais.',
        chipPegadinha: 'A interface deve favorecer o reconhecimento visual em detrimento da memorização esforçada.',
      },
      {
        id: 'aut-6-1-3',
        nome: 'Murilo Bastos da Cunha',
        ano: 2000,
        obraPrincipal: 'Construindo o futuro: a biblioteca digital no Brasil',
        ideiaChave: 'Conceituação das bibliotecas eletrônicas, digitais e virtuais e seus impactos na sociedade da informação.',
        chipPegadinha: 'Biblioteca digital não é sinônimo de biblioteca sem paredes (que é a virtual).',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-6-1-1',
        afirmacao: 'O sistema de rotulagem na arquitetura da informação de uma biblioteca digital restringe-se exclusivamente à definição de cores, fontes e estilo estético do website.',
        gabarito: 'E',
        porQue: 'Rotulagem é a definição verbal e semiótica dos termos e rótulos que representam categorias, links e botões na interface.',
      },
      {
        id: 'peg-6-1-2',
        afirmacao: 'Para que uma unidade de informação seja legitimamente considerada uma biblioteca digital, é indispensável que haja um equivalente físico impresso de salvaguarda de todo o seu acervo.',
        gabarito: 'E',
        porQue: 'Bibliotecas digitais podem ser constituídas integralmente por documentos natos digitais (born-digital) sem qualquer cópia física em papel.',
      },
      {
        id: 'peg-6-1-3',
        afirmacao: 'As heurísticas de usabilidade de Jakob Nielsen prescrevem que interfaces eficientes devem obrigar o usuário a memorizar códigos de comandos para navegar rapidamente.',
        gabarito: 'E',
        porQue: 'A 6ª heurística determina o "Reconhecimento em vez de memorização": a interface deve manter opções visíveis e acessíveis para poupar a memória de trabalho do usuário.',
      },
    ],
  },
};

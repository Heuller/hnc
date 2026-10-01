import type { ModuloFilho } from '../../../domain/types';

export const submodulo61: ModuloFilho = {
  id: 'sub-6-1',
  numero: '6.1',
  titulo: 'Bibliotecas Digitais vs. Eletrônicas, Arquitetura da Informação e Usabilidade',
  descricaoCurta: 'Diferenciação conceitual entre biblioteca tradicional, eletrônica, digital e virtual, os 4 sistemas da Arquitetura da Informação (Rosenfeld & Morville: organização, navegação, rotulagem e busca), e heurísticas de usabilidade de Jakob Nielsen aplicadas a ambientes digitais.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Louis Rosenfeld', 'Peter Morville', 'Jakob Nielsen', 'Marcum', 'Lancaster'],
  alertasCebraspe: [
    'Diferenciação das tipologias de biblioteca: Biblioteca Eletrônica (automatiza processos internos e catálogos com computadores, mas o acervo primário é impresso); Biblioteca Digital (armazena e disponibiliza documentos integrais em formato digital nativo ou digitalizado, com preservação estruturada); Biblioteca Virtual (acesso distribuído em rede transparente sem sede física única). O Cebraspe adora dizer que não há distinção conceitual entre digital e virtual: ERRADO!',
    'Os quatro sistemas da Arquitetura da Informação (Rosenfeld e Morville): 1. Sistema de Organização (como a informação é categorizada e estruturada); 2. Sistema de Navegação (como o usuário se movimenta pelas páginas e links); 3. Sistema de Rotulagem (como os botões, links e categorias são nomeados); e 4. Sistema de Busca (mecanismos que permitem encontrar termos específicos).',
    'Usabilidade e Heurísticas de Jakob Nielsen: visibilidade do status do sistema, correspondência com o mundo real, controle do usuário e liberdade, consistência e padrões, prevenção de erros, reconhecimento em vez de memorização, flexibilidade e eficiência de uso, design estético e minimalista, diagnóstico de erros e ajuda/documentação.',
    'Testes de Usabilidade em bibliotecas digitais: o Cebraspe exige o conhecimento de que os testes com usuários reais são fundamentais para diagnosticar falhas na interface e adequar a arquitetura da informação aos modelos mentais da comunidade.',
  ],
  quadroComparativo: {
    titulo: 'Evolução e Contraste das Tipologias de Bibliotecas',
    colunas: ['Tipo de Biblioteca', 'Forma Predominante do Acervo', 'Acesso e Infraestrutura', 'Mediação e Serviços'],
    linhas: [
      ['Biblioteca Tradicional', 'Suportes físicos em papel, códices e impressos', 'Presencial, restrito ao prédio físico e horário de funcionamento', 'Mediação direta presencial no balcão e fichas catalográficas'],
      ['Biblioteca Eletrônica', 'Acervo físico com apoio de mídias magnéticas e CD-ROMs', 'Catálogos automatizados locais (OPAC) e rotinas internas computadorizadas', 'Automação de rotinas (empréstimo por código de barras e catalogação MARC)'],
      ['Biblioteca Digital', 'Objetos digitais em texto completo (natos digitais ou digitalizados)', 'Acesso remoto via Internet 24/7 com metadados estruturados (Dublin Core/OAI-PMH)', 'Serviços digitais, preservação de longo prazo e interoperabilidade com repositórios'],
      ['Biblioteca Virtual', 'Disperso e imaterial em rede global de hiperlinks', 'Totalmente transparente na nuvem; não possui paredes nem prédio físico', 'Acesso distribuído em múltiplos nós e portais colaborativos da Web'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Tipologia Evolutiva das Bibliotecas na Era Tecnológica

A literatura científica da Ciência da Informação delimita rigorosamente os estágios evolutivos da biblioteca moderna:

* **Biblioteca Automatizada / Eletrônica:**
  * Introduziu computadores e softwares para automatizar as **rotinas internas e administrativas** (empréstimos, aquisição, controle de circulação) e substituir os catálogos de fichas pelo catálogo em linha (OPAC).
  * O acervo de obras primárias, no entanto, continua residindo majoritariamente no formato analógico em papel.
* **Biblioteca Digital:**
  * Unidade de informação que armazena, organiza, preserva e dissemina **documentos e coleções em texto completo em formato digital** (sejam eles digitalizados a partir do físico ou "natos digitais").
  * Exige infraestrutura de servidores, software de gestão de repositório (ex.: DSpace), controle de metadados padronizados, esquemas de preservação digital de longo prazo e políticas de direitos autorais e licenças de acesso.
* **Biblioteca Virtual:**
  * Conceito que transcende a posse física. Opera como uma "biblioteca sem paredes", funcionando como um portal em rede que interliga acervos distribuídos em múltiplos servidores em qualquer parte do mundo de forma transparente para o usuário.

---

### 2. A Arquitetura da Informação de Rosenfeld e Morville (1998)

No livro seminal *Information Architecture for the World Wide Web*, **Louis Rosenfeld e Peter Morville** estruturam a Arquitetura da Informação (AI) em **quatro sistemas fundamentais** que todo portal ou biblioteca digital deve integrar harmoniosamente:

1. **Sistemas de Organização (*Organization Systems*):**
   * Definem como a informação é categorizada e agrupada.
   * *Esquemas Exatos:* Alfabético, cronológico e geográfico (não admitem ambiguidade).
   * *Esquemas Ambíguos / Subjetivos:* Por assunto/tópico, por tarefa do usuário ou por audiência/público-alvo.
2. **Sistemas de Navegação (*Navigation Systems*):**
   * Permitem ao usuário saber **onde está**, **de onde veio** e **para onde pode ir** dentro do ambiente digital.
   * *Tipologias:* Navegação global (menus superiores permanentes), local (submenus contextuais), estrutural, associativa (hiperlinks no texto) e suplementar (mapas do site, índices e *breadcrumbs* / trilhas de navegação).
3. **Sistemas de Rotulagem (*Labeling Systems*):**
   * Definem como os termos, ícones e opções são nomeados e apresentados visualmente.
   * Devem ser consistentes, concisos e refletir a linguagem natural da comunidade de usuários, evitando jargões técnicos herméticos do bibliotecário ou dos programadores.
4. **Sistemas de Busca (*Search Systems*):**
   * O motor de busca da interface, definindo como o usuário formula a consulta, como o sistema processa a sintaxe e de que forma os resultados são ranqueados e exibidos (filtros facetados, ordenação por relevância ou data).

---

### 3. Usabilidade e as Heurísticas de Jakob Nielsen

A usabilidade mede a facilidade, eficiência e satisfação com que um usuário consegue realizar suas tarefas em uma interface digital. O especialista **Jakob Nielsen** consagrou as **10 Heurísticas de Usabilidade**:
1. *Visibilidade do status do sistema:* O sistema deve sempre manter o usuário informado sobre o que está ocorrendo (ex.: barras de progresso ao carregar documentos).
2. *Correspondência entre o sistema e o mundo real:* Utilizar palavras, frases e conceitos familiares ao usuário, e não linguagem orientada a sistemas internos.
3. *Controle do usuário e liberdade:* Oferecer saídas de emergência claras (botões desfazer, refazer, cancelar).
4. *Consistência e padrões:* Seguir convenções da Web para que o usuário não precise adivinhar se palavras diferentes significam a mesma coisa.
5. *Prevenção de erros:* Projetar interfaces que impeçam a ocorrência do erro antes que ele aconteça.
6. *Reconhecimento em vez de memorização:* Tornar objetos, ações e opções visíveis, reduzindo a sobrecarga cognitiva da memória de trabalho.
7. *Flexibilidade e eficiência de uso:* Permitir aceleradores e atalhos de teclado para usuários experientes.
8. *Design estético e minimalista:* Diálogos não devem conter informações irrelevantes ou raramente necessárias.
9. *Ajudar os usuários a reconhecer, diagnosticar e recuperar-se de erros:* Mensagens de erro claras em linguagem humana, sem códigos numéricos impenetráveis.
10. *Ajuda e documentação:* Informações de socorro facilmente localizáveis e orientadas a tarefas práticas.`,
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
      pergunta: "Micro-Checkpoint 3: Protocolo OAI-PMH e Coleta de Metadados",
      item: "O protocolo OAI-PMH (Open Archives Initiative Protocol for Metadata Harvesting) realiza a transferência integral dos arquivos binários dos documentos (arquivos PDF) entre os repositórios digitais provedores.",
      gabarito: 'E',
      justificativa: "Errado! O protocolo OAI-PMH opera estritamente na camada de METADADOS (preferencialmente em Dublin Core simples). Ele não é concebido para coleta massiva de arquivos de conteúdo digital.",
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
        periodo: '1998',
        disciplina: 'Arquitetura da Informação',
        focoPrincipal: 'Publicação de "Information Architecture for the World Wide Web" (o livro do urso polar)',
        figuraChave: 'Louis Rosenfeld e Peter Morville',
      },
    ],
    autores: [
      {
        id: 'aut-6-1-1',
        nome: 'Louis Rosenfeld e Peter Morville',
        ano: 1998,
        obraPrincipal: 'Information Architecture for the World Wide Web',
        ideiaChave: 'Os 4 sistemas da AI: Organização, Navegação, Rotulagem e Busca.',
        chipPegadinha: 'Rotulagem não é mera estética de CSS, é a representação linguística coerente dos conteúdos.',
      },
      {
        id: 'aut-6-1-2',
        nome: 'Jakob Nielsen',
        ano: 1994,
        obraPrincipal: 'Usability Engineering',
        ideiaChave: 'As 10 heurísticas de usabilidade e o teste com usuários reais.',
        chipPegadinha: 'A interface deve favorecer o reconhecimento visual em detrimento da memorização esforçada.',
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
    ],
  },
};

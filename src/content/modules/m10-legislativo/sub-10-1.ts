import type { ModuloFilho } from '../../../domain/types';

export const submodulo101: ModuloFilho = {
  id: 'sub-10-1',
  numero: '10.1',
  editalRef: 'Conhecimentos Básicos - RICD arts. 1 a 24, 65 a 94, 226 a 251, 262 a 273',
  preRequisitos: ["sub-1-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-5",
          "titulo": "Poder Legislativo na CF/88",
          "motivo": "Fundamento constitucional do regimento e competências privativas."
      },
      {
          "submoduloId": "sub-10-6",
          "titulo": "Regimento Comum do Congresso Nacional",
          "motivo": "Articulação entre a Câmara e as sessões conjuntas do Congresso."
      },
      {
          "submoduloId": "sub-4-3",
          "titulo": "Fontes Jurídicas e LexML",
          "motivo": "Tramitação regimental de proposições na Câmara."
      }
  ],
  titulo: 'Regimento Interno da Câmara dos Deputados (RICD: Arts. 1-24, 65-94, 226-251 e 262-273)',
  antesDeLer: [
    {
      termo: 'Mesa Diretora',
      definicao: 'Órgão colegiado diretivo da Câmara dos Deputados, composto por 7 titulares e 4 suplentes eleitos para 2 anos.',
      exemploBiblioteca: 'A Mesa Diretora regulamenta as diretrizes do Cedi e da Biblioteca Pedro Aleixo.',
    },
    {
      termo: 'Cedi',
      definicao: 'Centro de Documentação e Informação da Câmara; órgão técnico que coordena a Biblioteca, Arquivo e Publicações.',
      exemploBiblioteca: 'Órgão de lotação direta do Analista Legislativo - Biblioteconomia (Cargo 5).',
    },
    {
      termo: 'Proposição',
      definicao: 'Toda matéria legislativa submetida à deliberação da Câmara (projetos de lei, emendas, requerimentos).',
      exemploBiblioteca: 'Catalogar a tramitação regimental e as ementas no Sistema de Informações Legislativas.',
    },
    {
      termo: 'Sessão Deliberativa',
      definicao: 'Reunião do Plenário destinada à votação de matérias legislativas com pauta definida na Ordem do Dia.',
      exemploBiblioteca: 'Registrar notas taquigráficas e diários de sessões para preservação permanente.',
    },
    {
      termo: 'Ordem do Dia',
      definicao: 'Fase da sessão plenária reservada à discussão e votação das proposições constantes da pauta aprovada.',
      exemploBiblioteca: 'Monitorar a pauta do Plenário para disponibilizar aos parlamentares bibliografias de apoio.',
    },
  ],
  descricaoCurta: 'Organização regimental da Câmara dos Deputados: Mesa Diretora e Lideranças (arts. 1-24), Sessões Plenárias e suas quatro fases (arts. 65-94), Estatuto dos Deputados, prerrogativas e deveres (arts. 226-251), e Administração, Polícia e Centro de Documentação Cedi (arts. 262-273).',
  tempoEstimadoMinutos: 17,
  autoresChave: [
    'Câmara dos Deputados (Resolução nº 17/1989)',
    'Mesa Diretora da Câmara dos Deputados',
    'Conselho de Ética e Decoro Parlamentar',
    'Centro de Documentação e Informação (Cedi)',
    'Biblioteca Pedro Aleixo',
  ],
  alertasCebraspe: [
    'Os Quatro Intervalos Mandatórios do RICD no Edital: 1) Arts. 1º a 24 (Mesa Diretora, Eleição, Lideranças e Blocos); 2) Arts. 65 a 94 (Sessões Plenárias, fases, quóruns e tempos regimentais); 3) Arts. 226 a 251 (Estatuto dos Deputados, posse, deveres, apartes e faltas); 4) Arts. 262 a 273 (Administração, Polícia da Casa, Diário da Câmara e Cedi/Biblioteca). O candidato deve dominar os limites exatos de cada intervalo.',
    'Vedação aos membros da Mesa Diretora (Art. 24, § 1º do RICD - Tema de Alta Probabilidade Cebraspe): os membros titulares e os suplentes da Mesa Diretora NÃO podem integrar nenhuma Comissão Permanente, Comissão Especial ou Comissão Parlamentar de Inquérito (CPI), resguardando-se a estrita separação entre a gestão diretiva da Casa e a instrução técnica de matérias.',
    'Blocos Parlamentares (Art. 13 do RICD): Partidos reunidos em bloco perdem as prerrogativas de suas lideranças individuais em favor da liderança unificada do bloco; se a desfiliação de deputados reduzir a bancada do bloco abaixo do número mínimo exigido, o bloco é EXTINTO DE IMEDIATO, sendo vedada sua manutenção artificial até o fim da legislatura.',
    'Fases cronológicas da Sessão Ordinária (Arts. 65 a 94 do RICD): A sequência canônica e imutável é: 1) Pequeno Expediente (60 min improrrogáveis, oradores de até 5 min, quórum de 1/10); 2) Grande Expediente (50 min improrrogáveis, oradores de até 25 min sorteados); 3) Ordem do Dia (fase deliberativa/votação, exige quórum de maioria absoluta de 257 deputados); e 4) Comunicações Parlamentares.',
    'Regras Regimentais de Apartes (Art. 230 do RICD): Aparte é a interrupção breve e consentida do orador. É EXPRESSAMENTE VEDADO aparte: a discurso de posse do Presidente da República; a comunicação inadiável de Líder; em questão de ordem; no encaminhamento de votação; e em pronunciamentos de sessões solenes.',
    'Administração e Preservação Documental (Arts. 262 a 273 do RICD): A polícia da Câmara é subordinada ao Presidente e exercida pelo Departamento de Polícia Legislativa; o Centro de Documentação e Informação (Cedi) integra a estrutura administrativa direta da Casa, abrigando a Biblioteca Pedro Aleixo e a Coordenação de Arquivo com acervos da Assembleia Constituinte de 1823 aos dias atuais.',
  ],
  quadroComparativo: {
    titulo: 'Estrutura dos Quatro Intervalos do Regimento Interno da Câmara dos Deputados (Edital nº 1/2026)',
    colunas: ['Intervalo Regimental', 'Objeto Principal', 'Dispositivos e Regras Críticas', 'Aplicação Prática no Processo e na Biblioteca'],
    linhas: [
      [
        'Arts. 1º a 24 (Bloco 1)',
        'Sede, Sessões Preparatórias, Mesa Diretora e Lideranças',
        'Mesa: Presidente + 2 Vices + 4 Secretários e 4 Suplentes (mandato de 2 anos, sem recondução na mesma legislatura); Art. 24, § 1º: membros da Mesa não integram Comissões nem CPIs; Blocos extintos de imediato se caírem abaixo do quórum',
        'Atos da Mesa que aprovam regulamentos do Cedi, estrutura de consultorias e políticas de acesso à informação',
      ],
      [
        'Arts. 65 a 94 (Bloco 2)',
        'Das Sessões da Câmara (Preparatórias, Ordinárias, Extraordinárias, Secretas, Solenes)',
        'Sessão Ordinária: Pequeno Expediente (60m, quórum 1/10), Grande Expediente (50m, até 25m/orador), Ordem do Dia (maioria absoluta de 257 presentes para deliberar), Comunicações Parlamentares; Sessão Secreta (maioria absoluta para convocar)',
        'Geração dos registros taquigráficos integrais, notas taquigráficas em tempo real e publicação no Diário da Câmara dos Deputados (DCD)',
      ],
      [
        'Arts. 226 a 251 (Bloco 3)',
        'Dos Deputados: Exercício do Mandato, Prerrogativas, Deveres e Perda',
        'Posse e renúncia; prerrogativas de imunidade (art. 227); regras de uso da palavra (tribuna vs. bancada); vedações estritas de aparte (art. 230); censura verbal e escrita; perda do mandato por falta à terça parte das sessões ou quebra de decoro',
        'Atendimento prioritário de referência parlamentar, dossiês sob demanda, levantamentos doutrinários e reserva sigilosa de consultas',
      ],
      [
        'Arts. 262 a 273 (Bloco 4)',
        'Da Administração, Economia Interna, Polícia e Gestão de Documentos',
        'Superintendência da Mesa e direção do Diretor-Geral; Polícia Legislativa subordinada privativamente ao Presidente; Diário da Câmara dos Deputados (DCD); estrutura do Cedi (Arquivo, Museu, Biblioteca Pedro Aleixo e Edições Câmara)',
        'Salvo-conduto de documentos históricos, catalogação na RVBI, preservação digital e fornecimento de certidões legislativas à sociedade',
      ],
    ],
  },
  teoriaDensaMarkdown: `### 1. Bloco 1: Da Sede, Instalação, Mesa Diretora e Lideranças (RICD, Arts. 1º a 24)

O Regimento Interno da Câmara dos Deputados (Resolução nº 17/1989 e suas emendas regimentais) é a norma interna fundamental que rege os trabalhos legislativos, a ordem plenária e a administração da Casa.

#### A. Disposições Preliminares e Sessões Preparatórias (Arts. 1º a 11)
* **Sede:** A Câmara dos Deputados tem sua sede em Brasília, no Palácio do Congresso Nacional, podendo reunir-se extraordinariamente em outro local por motivo de força maior, por deliberação da Mesa *ad referendum* da maioria absoluta dos deputados.
* **Sessões Preparatórias:** Realizam-se no primeiro ano de cada legislatura, em **1º de fevereiro**, precedendo a instalação da Sessão Legislativa Ordinária:
  * *Primeira fase preparatória:* Posse dos Deputados diplomados, prestação do compromisso solene regimental e assinatura do termo de posse;
  * *Segunda fase preparatória:* Eleição dos membros da Mesa Diretora para o primeiro biênio.

#### B. A Composição e Eleição da Mesa Diretora (Arts. 12 a 24)
* **Estrutura da Mesa Diretora (Art. 14):**
  * 1 Presidente;
  * 1º e 2º Vice-Presidentes;
  * 4 Secretários (1º, 2º, 3º e 4º Secretários);
  * 4 Suplentes de Secretário.
* **Mandato e Vedação de Recondução:** O mandato da Mesa é de **2 anos**, sendo expressamente vedada a recondução para o mesmo cargo na eleição imediatamente subsequente dentro da mesma legislatura (CF, art. 57, § 4º; RICD, art. 14).
* **Atribuições dos Membros da Mesa:**
  * *Presidente (Art. 17):* Representa a Câmara, preside as sessões do Plenário, convoca as sessões extraordinárias, define a pauta da Ordem do Dia (ouvido o Colégio de Líderes), substitui o Presidente da República (segundo na ordem sucessória, art. 80 da CF) e supervisiona a segurança e a administração da Casa;
  * *1º Vice-Presidente:* Substitui o Presidente nas ausências e impedimentos;
  * *2º Vice-Presidente:* Examina os requerimentos de ressarcimento de despesas médicas de parlamentares e atua nos programas de interação institucional;
  * *1º Secretário (o "Prefeito da Câmara"):* Responsável pela superintendência dos serviços administrativos e de pessoal da Casa, pela redação e assinatura das atas e pela chancela de folhas de frequência;
  * *2º Secretário:* Responsável pelas relações internacionais, passaportes diplomáticos e programas de estágio;
  * *3º e 4º Secretários:* Encarregados do sistema habitacional, concessão de auxílio-moradia e distribuição dos gabinetes parlamentares.
* **Vedação Absoluta aos Membros da Mesa (*⚠️ Dispositivo Canônico Cebraspe — Art. 24, § 1º*):**
  > Os membros da Mesa Diretora, **tanto os titulares quanto os suplentes**, **NÃO podem fazer parte de nenhuma Comissão Permanente, Comissão Especial ou Comissão Parlamentar de Inquérito (CPI)**. Essa proibição preserva a imparcialidade administrativa e impede a acumulação de funções diretivas e instrutórias.

#### C. Lideranças e Blocos Parlamentares (Arts. 12 a 14)
* **Líderes:** São os porta-vozes oficiais das bancadas partidárias, com direito à fala a qualquer momento da sessão para comunicação inadiável (comunicação de liderança de até 5 minutos) e prerrogativa de indicar os membros do partido nas comissões.
* **Blocos Parlamentares:**
  * Formados pela associação formal de duas ou mais representações partidárias sob direção comum;
  * A constituição do bloco acarreta a **perda das prerrogativas regimentais das lideranças individuais** de cada partido que o integra, unificando a liderança no Líder do Bloco;
  * Se a desfiliação ou afastamento de parlamentares reduzir a bancada do bloco a número inferior ao quórum mínimo regimental, **o bloco é extinto de imediato**, sendo vedada sua manutenção artificial até o encerramento da legislatura.

---

### 2. Bloco 2: Das Sessões da Câmara dos Deputados (RICD, Arts. 65 a 94)

As sessões plenárias realizam-se nos dias úteis e são classificadas em: Preparatórias, Ordinárias, Extraordinárias, Secretas e Solenes.

\`\`\`timeline
P1 | 1. Pequeno Expediente | Duração: 60 minutos | Início pontual às 14h com presença de pelo menos 1/10 dos deputados (52 membros). Discursos breves de até 5 min por orador previamente inscrito.
---> Transição Imediata
P2 | 2. Grande Expediente | Duração: 50 minutos | Discursos temáticos aprofundados de até 25 minutos para oradores sorteados pela Mesa, vedada prorrogação de tempo.
---> Abertura da Fase Deliberativa
P3 | 3. Ordem do Dia | Fase Deliberativa Central | Exige presença da maioria absoluta dos membros da Casa (257 deputados registrados). Discussão e votação das proposições pautadas.
---> Encerramento dos Trabalhos
P4 | 4. Comunicações Parlamentares | Fase Residual | Duração variável até o término regimental da sessão; pronunciamentos de líderes e parlamentares inscritos para fechamento do dia.
\`\`\`

#### A. A Sequência Canônica da Sessão Ordinária (Arts. 65 a 81)
A Sessão Ordinária da Câmara dos Deputados realiza-se habitualmente a partir das 14 horas e possui duração máxima de 5 horas, dividindo-se compulsoriamente em 4 fases sequenciais:
1. **Pequeno Expediente (Art. 71):**
   * Duração improrrogável de **60 minutos**;
   * Quórum de abertura: presença de pelo menos **um décimo (1/10)** dos membros da Câmara (52 deputados registrados);
   * Oradores inscritos dispõem de até **5 minutos** cada, não sendo permitidos apartes;
   * Leitura de correspondências e comunicações da Mesa.
2. **Grande Expediente (Art. 72):**
   * Duração improrrogável de **50 minutos**;
   * Oradores previamente sorteados dispõem de até **25 minutos** para pronunciamentos aprofundados sobre temas de relevância política nacional;
   * São permitidos apartes concedidos pelo orador, computados no seu tempo de fala.
3. **Ordem do Dia (Arts. 73 a 81):**
   * É a fase **deliberativa central** das votações;
   * **Quórum Constitucional de Abertura:** A votação de qualquer proposição em Plenário só pode ter início com a presença da **maioria absoluta dos membros da Casa** (mínimo de **257 deputados** registrados no painel eletrônico, art. 73 do RICD e art. 47 da CF/88);
   * A pauta da Ordem do Dia é previamente anunciada pelo Presidente, ouvidos os Líderes;
   * Não havendo quórum de maioria absoluta, a sessão é suspensa ou passa-se ao encerramento dos trabalhos sem deliberação legislativa.
4. **Comunicações Parlamentares:**
   * Fase final destinada à manifestação de deputados e líderes sobre acontecimentos do dia.

#### B. Sessões Secretas e Solenes (Arts. 92 a 94)
* **Sessões Secretas (Art. 92):** Convocadas por deliberação da maioria absoluta da Câmara, mediante requerimento fundamentado da Mesa ou de um décimo dos parlamentares, para tratar de matéria de segurança nacional ou decoro parlamentar. Todos os presentes (inclusive taquígrafos e servidores) prestam compromisso de sigilo;
* **Sessões Solenes (Art. 94):** Destinadas a comemorações cívicas ou homenagens especiais; não possuem Ordem do Dia deliberativa e dispensam quórum mínimo de abertura.

---

### 3. Bloco 3: Dos Deputados: Prerrogativas, Deveres, Uso da Palavra e Perda de Mandato (RICD, Arts. 226 a 251)

O Título VII do RICD regulamenta a condição jurídica do parlamentar no exercício de suas prerrogativas democráticas.

#### A. Prerrogativas e Deveres Regimentais (Arts. 226 a 229)
* **Prerrogativas do Deputado (Art. 227):**
  * Tomar posse e votar e ser votado para os cargos da Mesa e Comissões;
  * Apresentar proposições, emendas e requerimentos regimentais;
  * Falar no Plenário e nas comissões na forma do regimento;
  * Requisitar informações e documentos oficiais de autoridades públicas;
  * Desfrutar de inviolabilidade e imunidades constitucionais.
* **Deveres Fundamentais (Art. 228):**
  * Respeitar as leis e o Regimento Interno;
  * Comparecer pontualmente às sessões plenárias e reuniões das comissões de que faça parte;
  * Desempenhar os encargos e relatorias para os quais for designado;
  * Portar-se com respeito e decoro parlamentar em todas as dependências da Casa.

#### B. Regras de Uso da Palavra e Vedação de Apartes (Arts. 230 a 235)
* **Uso da Palavra:** O parlamentar pode falar da **Tribuna** (discursos aprofundados) ou da **bancada / microfone de aparte** (manifestações breves, questões de ordem e encaminhamento).
* **O Instituto do Aparte (Art. 230):**
  * É a interrupção breve do discurso, solicitada pelo parlamentar e concedida expressamente pelo orador que está na tribuna;
  * O tempo do aparte é debitado do tempo total do orador principal;
  * **Hipóteses em que o Aparte é EXPRESSAMENTE PROIBIDO pelo Regimento (*⚠️ Pegadinha Clássica Cebraspe*):**
    1. A discurso proferido na posse do Presidente da República ou Mesa;
    2. A comunicação inadiável feita por Líder de bancada;
    3. Em manifestação suscitada por **questão de ordem**;
    4. No pronunciamento de encaminhamento de votação;
    5. Em pronunciamentos em **sessões solenes** da Casa;
    6. Quando o orador expressamente declarar que não permite a interrupção.

#### C. Disciplina, Censura e Perda do Mandato Regimental (Arts. 236 a 251)
* **Censura Parlamentar (Arts. 240 a 244):**
  * *Censura Verbal:* Aplicada pelo Presidente ao deputado que perturbar a ordem ou usar linguagem injuriosa;
  * *Censura Escrita:* Aplicada pela Mesa, ouvida a Corregedoria Parlamentar, em caso de reincidência ou desobediência reiterada às ordens da presidência.
* **Perda do Mandato Regimental (Art. 240):**
  * *Faltas Injustificadas:* O deputado que **deixar de comparecer à terça parte (1/3)** das sessões ordinárias da Câmara em cada sessão legislativa perde o mandato, que é **declarado extinto de ofício pela Mesa Diretora** (CF, art. 55, III e § 3º), assegurada ampla defesa prévia perante a Mesa;
  * *Quebra de Decoro:* Processada perante o **Conselho de Ética e Decoro Parlamentar**, com instrução contraditória e votação final pelo Plenário por **maioria absoluta em escrutínio aberto** (CF, art. 55, § 2º).

---

### 4. Bloco 4: Da Administração, Economia Interna, Polícia e o Cedi/Biblioteca (RICD, Arts. 262 a 273)

A organização interna da Câmara dos Deputados equilibra a autonomia política com a gestão burocrática, patrimonial e informacional:

#### A. Superintendência e Direção dos Serviços (Arts. 262 a 265)
* Os serviços administrativos da Câmara dos Deputados subordinam-se à **superintendência superior do 1º Secretário da Mesa** e à **direção-executiva do Diretor-Geral da Câmara**;
* O orçamento interno, a tabela de lotação de pessoal e o plano de cargos, carreiras e salários são fixados por Resolução da Câmara dos Deputados sob iniciativa privativa da Mesa Diretora (CF, art. 51, IV).

#### B. Polícia da Câmara dos Deputados (Art. 266)
* O policiamento no edifício da Câmara dos Deputados e suas dependências externas imediatas compete privativamente à Casa, sendo exercido pelo **Departamento de Polícia Legislativa (DPL)**, sob a direção e autoridade suprema do **Presidente da Câmara**;
* É vedada a entrada de força militar ou policial estrangeira à Casa sem autorização expressa do Presidente da Câmara;
* Crimes cometidos no recinto da Casa sujeitam-se a inquérito policial instaurado pelo próprio Diretor da Polícia Legislativa, com remessa dos autos ao Poder Judiciário competente.

#### C. Publicações Oficiais e o Diário da Câmara dos Deputados (Arts. 267 a 270)
* O **Diário da Câmara dos Deputados (DCD)** é o veículo oficial de publicidade legal dos atos parlamentares e administrativos;
* Publica integralmente os discursos, relatórios, atas das sessões plenárias, pareceres de comissões e matérias legislativas em tramitação;
* O DCD circula em versão eletrônica certificada digitalmente, cabendo sua gestão ao órgão técnico competente.

#### D. O Centro de Documentação e Informação (Cedi) e a Biblioteca Pedro Aleixo (Arts. 271 a 273)
* **Inserção Estrutural do Cedi:** Órgão central de preservação, tratamento técnico e difusão da informação legislativa, vinculado à Diretoria-Geral;
* **Coordenações Especializadas do Cedi:**
  1. *Coordenação de Arquivo:* Guarda, organiza e restaura o patrimônio documental da Câmara, incluindo os manuscritos originais de todas as Constituições brasileiras, anais do Império de 1823 e proposições legislativas;
  2. *Coordenação de Museu:* Conservação de acervos históricos e obras de arte;
  3. *Coordenação de Publicações (Edições Câmara):* Produção editorial de livros e obras doutrinárias de interesse público;
  4. *Coordenação de Biblioteca (Biblioteca Pedro Aleixo):*
     * Provê pesquisa legislativa, assessoria bibliográfica e disseminação seletiva de informações para subsidiar os deputados, as lideranças, as comissões e as Consultorias Legislativa (Conle) e de Orçamento (Conof);
     * Integra cooperativamente a **Rede Virtual de Bibliotecas (RVBI)**, compartilhando bases de dados catalográficas no formato MARC 21 sob vocabulário temático controlado unificado.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Poder Legislativo na CF/88 (sub-10-5):** Fundamento constitucional do regimento e competências privativas.
* **Regimento Comum do Congresso Nacional (sub-10-6):** Articulação entre a Câmara e as sessões conjuntas do Congresso.
* **Fontes Jurídicas e LexML (sub-4-3):** Tramitação regimental de proposições na Câmara.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Regimento Interno da Câmara dos Deputados (RICD)** disciplina a estrutura, o funcionamento e a tomada de decisões no Parlamento:
1. **Mesa Diretora (Arts. 1 a 24):**
   - Composta por **7 titulares** (Presidente, dois Vice-Presidentes e quatro Secretários) e **4 suplentes de Secretários**.
   - Mandato de **2 anos**, vedada a recondução para o mesmo cargo na eleição imediatamente subsequente dentro da mesma legislatura.
2. **Sessões Plenárias (Arts. 65 a 94):**
   - Estrutura formal em **4 fases**:
     1. *Pequeno Expediente:* Comunicações breves e correspondências.
     2. *Grande Expediente:* Discursos aprofundados dos parlamentares inscritos.
     3. *Ordem do Dia:* Discussão e **votação** das proposições da pauta aprovada (fase deliberativa central).
     4. *Comunicações Parlamentares:* Pronunciamentos finais dos deputados e lideranças.
3. **CEDI e Biblioteca (Arts. 268 a 273):**
   - O **Centro de Documentação e Informação (CEDI)** é órgão técnico da Diretoria-Geral responsável pela coordenação da Biblioteca Pedro Aleixo, do Arquivo Histórico e da Coordenação de Edições e Publicações.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Lotação Direta do Analista Bibliotecário:** O Cargo 5 (Biblioteconomia) tem sua lotação precípua na estrutura do **CEDI**. Suas atribuições envolvem alimentar a base de dados do Sistema de Informações Legislativas (Sileg), zelar pelo acervo da Biblioteca Pedro Aleixo e fornecer subsídios técnicos às Comissões Permanentes.
- **O Plantão na Ordem do Dia:** Durante a realização da *Ordem do Dia*, o Plenário delibera sobre matérias cruciais. A equipe da biblioteca e do arquivo mantém canal prioritário de atendimento à Mesa Diretora e às Lideranças Partidárias para esclarecimento instantâneo sobre precedentes regimentais e histórico de votações anteriores.

---

### ⚖️ 3. Quadro de Contraste Rápido: Fases da Sessão Deliberativa Ordinária
| Fase da Sessão | Duração / Objetivo Principal | Papel do CEDI / Biblioteca |
| :--- | :--- | :--- |
| **1. Pequeno Expediente** | Leitura de atas, expedientes e discursos curtos | Conferência da ata e registro de despachos |
| **2. Grande Expediente** | Pronunciamentos de deputados inscritos | Pesquisa de dados temáticos citados nos discursos |
| **3. Ordem do Dia** | **Discussão e deliberação (votação)** de matérias | Plantão de apoio regimental e fornecimento de textos |
| **4. Comunicações Parlamentares** | Encerramento com falas de lideranças | Arquivamento das notas taquigráficas da sessão |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Recondução da Mesa:** O Cebraspe adora afirmar que é permitida a recondução ilimitada dos membros da Mesa Diretora para os mesmos cargos dentro da mesma legislatura. **Gabarito: ERRADO** (vedada expressamente na mesma legislatura, permitida apenas de uma legislatura para outra).
- **Composição da Mesa:** Dizer que a Mesa possui 5 secretários ou que os suplentes participam com direito a voto em todas as sessões. **Gabarito: ERRADO** (são 7 titulares e 4 suplentes).
- **Lotação do CEDI:** Afirmar que a Biblioteca Pedro Aleixo é um órgão autônomo diretamente subordinado à Presidência da República ou ao Senado Federal. **Gabarito: ERRADO** (integra o CEDI na estrutura da Câmara dos Deputados).

---

### 🧠 5. Micro-Pausa Ativa (Checklist Mental)
- *Quantos membros titulares compõem a Mesa Diretora da Câmara?* (7 titulares: Presidente, 2 Vice-Presidentes e 4 Secretários).
- *Qual a fase da sessão plenária destinada à votação das proposições?* (Ordem do Dia!).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
* **BRASIL. Congresso Nacional. Câmara dos Deputados.** *Regimento Interno da Câmara dos Deputados (RICD)*: Resolução nº 17, de 1989 e atualizações. Brasília: Edições Câmara, 2024.
* **BRASIL.** *Constituição da República Federativa do Brasil de 1988*: arts. 51 a 58 (Do Poder Legislativo, competências da Câmara e comissões parlamentares).
* **CÂMARA DOS DEPUTADOS.** *Estrutura e Competências do Centro de Documentação e Informação (CEDI)*. Ato da Mesa nº 53/2012 e regulamentos internos. Brasília: Coordenação Edições Câmara, 2023.`,
  checkpoints: [
    {
      id: 'cp-10-1-1',
      pergunta: 'Micro-Checkpoint 1: Vedação a Membros da Mesa Diretora nas Comissões (Art. 24, § 1º do RICD)',
      item: 'Conforme expressa disposição do Regimento Interno da Câmara dos Deputados, os membros titulares e os suplentes da Mesa Diretora são impedidos de integrar comissões permanentes, especiais ou comissões parlamentares de inquérito.',
      gabarito: 'C',
      justificativa: 'Correto! O art. 24, § 1º do RICD estabelece categoricamente que os membros da Mesa Diretora (titulares e suplentes) não podem fazer parte de nenhuma comissão permanente, comissão especial ou CPI.',
    },
    {
      id: 'cp-10-1-2',
      pergunta: 'Micro-Checkpoint 2: Quórum de Deliberação na Ordem do Dia (Art. 73 do RICD)',
      item: 'Para a abertura da fase deliberativa da Ordem do Dia em sessão ordinária da Câmara dos Deputados, basta o comparecimento registrado de um décimo dos parlamentares da Casa.',
      gabarito: 'E',
      justificativa: 'Errado! O quórum de 1/10 (52 deputados) é exigido apenas para a abertura do Pequeno Expediente (art. 71). Para iniciar a deliberação na Ordem do Dia, é obrigatória a presença da maioria absoluta dos membros da Câmara (pelo menos 257 deputados registrados no painel, art. 73 do RICD e art. 47 da CF/88).',
    },
    {
      id: 'cp-10-1-3',
      pergunta: 'Micro-Checkpoint 3: Hipóteses Regimentais de Vedação de Apartes (Art. 230 do RICD)',
      item: 'O regimento interno autoriza a formulação de apartes durante a manifestação parlamentar em sede de questão de ordem, desde que o orador conceda previamente a interrupção.',
      gabarito: 'E',
      justificativa: 'Errado! O art. 230, II, "c" do RICD veda terminantemente a formulação de apartes quando o parlamentar estiver suscitando questão de ordem, bem como em pronunciamento de Líder ou sessões solenes.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-10-1-1',
        periodo: '1826 / 1960',
        disciplina: 'História da Biblioteca Parlamentar',
        focoPrincipal: 'Criação da Biblioteca da Câmara no Império e sua transferência solene para o Palácio do Congresso Nacional em Brasília',
        figuraChave: 'Câmara dos Deputados / Pedro Aleixo',
      },
      {
        id: 'tl-10-1-2',
        periodo: '1989',
        disciplina: 'Regimento Interno da Câmara',
        focoPrincipal: 'Promulgação da Resolução nº 17/1989 (Regimento Interno da Câmara dos Deputados - RICD)',
        figuraChave: 'Mesa Diretora da Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-3',
        periodo: '1970 / 2000',
        disciplina: 'Rede Cooperativa do Congresso',
        focoPrincipal: 'Criação do Sistema SABI e consolidação da Rede Virtual de Bibliotecas (RVBI polo Senado)',
        figuraChave: 'Senado Federal e Câmara dos Deputados',
      },
      {
        id: 'tl-10-1-4',
        periodo: 'Atualidade',
        disciplina: 'Jurisprudência Regimental Cebraspe',
        focoPrincipal: 'Aplicação das regras regimentais sobre extinção imediata de blocos partidários e vedação a membros da Mesa em CPI',
        figuraChave: 'Plenário da Câmara dos Deputados',
      },
    ],
    autores: [
      {
        id: 'aut-10-1-1',
        nome: 'Câmara dos Deputados',
        ano: 1989,
        obraPrincipal: 'Regimento Interno da Câmara dos Deputados (Resolução nº 17/1989)',
        ideiaChave: 'Arcabouço normativo das sessões plenárias, comissões, prerrogativas e administração interna.',
        chipPegadinha: 'Membros da Mesa Diretora não podem participar de comissões permanentes, especiais ou CPI.',
      },
      {
        id: 'aut-10-1-2',
        nome: 'Centro de Documentação e Informação (Cedi)',
        ano: 2024,
        obraPrincipal: 'Estrutura Regimental de Gestão Documental da Câmara',
        ideiaChave: 'Superintendência da Biblioteca Pedro Aleixo, Coordenação de Arquivo e Museu Histórico.',
        chipPegadinha: 'O Cedi integra a administração da Câmara, mas a RVBI tem polo coordenador no Senado Federal.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-10-1-1',
        afirmacao: 'Os integrantes da Mesa Diretora da Câmara dos Deputados podem participar normalmente de Comissões Parlamentares de Inquérito (CPI) na condição de membros titulares.',
        gabarito: 'E',
        porQue: 'Tema recorrente no Cebraspe! Conforme o art. 24, § 1º do RICD, os membros da Mesa (titulares e suplentes) não podem fazer parte de nenhuma comissão permanente, especial ou de CPI.',
      },
      {
        id: 'peg-10-1-2',
        afirmacao: 'Caso a desfiliação de deputados reduza a representação de um bloco parlamentar para aquém do quórum mínimo, o bloco subsistirá até o final da legislatura em respeito à vontade popular.',
        gabarito: 'E',
        porQue: 'Tema de alta probabilidade no Cebraspe! A redução de deputados abaixo do limite mínimo exigido extingue imediatamente o bloco parlamentar no âmbito da Câmara dos Deputados.',
      },
      {
        id: 'peg-10-1-3',
        afirmacao: 'Na sessão ordinária da Câmara dos Deputados, a Ordem do Dia precede o Pequeno Expediente para garantir a prioridade na deliberação das matérias de urgência.',
        gabarito: 'E',
        porQue: 'A sequência cronológica rígida do RICD é: 1) Pequeno Expediente (60m); 2) Grande Expediente (50m); 3) Ordem do Dia (votação); e 4) Comunicações Parlamentares.',
      },
      {
        id: 'peg-10-1-4',
        afirmacao: 'Durante pronunciamento suscitado em sede de questão de ordem, é lícito a qualquer deputado formular aparte consentido ao orador.',
        gabarito: 'E',
        porQue: 'O art. 230, II, "c" do RICD veda terminantemente o aparte em questão de ordem, comunicação inadiável de liderança e sessões solenes.',
      },
    ],
  },
};


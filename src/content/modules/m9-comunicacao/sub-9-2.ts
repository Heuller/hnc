import type { ModuloFilho } from '../../../domain/types';

export const submodulo92: ModuloFilho = {
  id: 'sub-9-2',
  numero: '9.2',
  titulo: 'Acesso Aberto (Vias Verde, Dourada e Diamante) e Princípios FAIR',
  descricaoCurta: 'A crise dos periódicos, as 3 declarações fundacionais (Budapest, Bethesda, Berlin), as vias do Acesso Aberto (Dourada, Verde, Diamante, Híbrida e Bronze), e os Princípios FAIR (Findable, Accessible, Interoperable, Reusable).',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Peter Suber', 'Stevan Harnad', 'Barend Mons', 'Mark D. Wilkinson', 'John Willinsky'],
  alertasCebraspe: [
    'A tríade dos "Três B\'s" do Acesso Aberto: 1. Declaração de Budapeste (BOAI, 2002); 2. Declaração de Bethesda (2003); e 3. Declaração de Berlim (2003). Budapeste inaugurou o movimento global.',
    'As Vias do Acesso Aberto: Via Dourada (publicação direta em periódicos de acesso aberto, podendo haver taxa APC paga pelos autores); Via Verde (autoarquivamento de preprints/pós-prints em Repositórios Institucionais); Via Diamante/Platina (acesso aberto livre de taxas tanto para autores quanto para leitores, financiado pelo Estado/universidade - modelo hegemônico do SciELO no Brasil).',
    'Pegadinha recente e de altíssima incidência da banca (UNEAL 2026): afirmar que os princípios FAIR exigem que todo dado de pesquisa seja obrigatoriamente público, gratuito e sem qualquer restrição de acesso. ERRADO! O princípio orientador do GO FAIR é "tão aberto quanto possível, tão fechado quanto necessário" (dados confidenciais de saúde ou segredos industriais podem ser FAIR e ter acesso controlado e autenticado).',
    'Revistas Híbridas: periódicos comerciais fechados por assinatura que cobram APC para abrir artigos individuais (prática do "double dipping", onde a editora recebe duplamente: pela assinatura e pela taxa do autor).',
  ],
  quadroComparativo: {
    titulo: 'As Principais Vias de Publicação do Movimento de Acesso Aberto',
    colunas: ['Via de Acesso Aberto', 'Canal Principal de Disponibilização', 'Custo para o Leitor', 'Custo para o Autor (Taxa APC)'],
    linhas: [
      ['Via Verde (*Green Road*)', 'Autoarquivamento em Repositórios Institucionais ou Temáticos', 'Gratuito', 'Zero (gratuito)'],
      ['Via Dourada (*Gold Road*)', 'Revistas científicas de acesso aberto pleno', 'Gratuito', 'Varia: frequentemente cobra taxa APC (*Article Processing Charge*)'],
      ['Via Diamante / Platina', 'Revistas de acesso aberto mantidas por universidades/governos', 'Gratuito', 'Zero (financiado integralmente por fundos públicos/institucionais)'],
      ['Via Híbrida (*Hybrid Road*)', 'Revistas comerciais por assinatura com artigos individuais liberados', 'Gratuito apenas para o artigo pago', 'Cobra APC elevado do autor, mantendo a revista sob assinatura comercial'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Crise dos Periódicos e o Nascimento do Acesso Aberto

A partir da década de 1980, as bibliotecas universitárias e de pesquisa de todo o mundo foram sufocadas pela **"Crise dos Periódicos"** (*Serials Crisis*):
* Editoras comerciais internacionais oligopolistas (como Elsevier, Springer e Wiley) passaram a reajustar as assinaturas de revistas científicas em índices muito superiores à inflação.
* Gerou-se uma contradição ética e econômica: a pesquisa científica era financiada com verbas públicas estatais, os cientistas escreviam e revisavam os artigos gratuitamente para os periódicos, mas o Estado era obrigado a pagar cifras milionárias para ter acesso à sua própria produção.
* Em resposta, a comunidade científica mundial mobilizou o **Movimento pelo Acesso Aberto** (*Open Access Movement*), teorizado por pensadores como **Peter Suber** e **Stevan Harnad**.

---

### 2. As Três Declarações Fundacionais (Os Três "B"s)

O movimento foi formalizado e estruturado por três marcos históricos internacionais (presentes em nosso acervo em \`Comunicação científica, Ciência Aberta e métricas\`):

1. **Iniciativa de Acesso Aberto de Budapeste (BOAI, 2002):**
   * Definição canônica: Acesso aberto significa a **disponibilização gratuita na Internet**, permitindo que qualquer usuário leia, baixe, copie, distribua, imprima, pesquise ou crie links para os textos integrais, desde que respeitada a integridade do trabalho e a correta **atribuição de autoria**.
   * Estabeleceu as duas vias complementares: o autoarquivamento (Via Verde) e a publicação em novos periódicos abertos (Via Dourada).
2. **Declaração de Bethesda sobre Publicação em Acesso Aberto (2003):**
   * Formulada com foco prioritário nas ciências biomédicas e agências de fomento, exigindo o depósito compulsório das pesquisas financiadas em repositórios digitais abertos (como PubMed Central).
3. **Declaração de Berlim sobre Acesso Aberto ao Conhecimento em Ciências e Humanidades (2003):**
   * Ampliou o pacto para englobar todas as áreas do saber, incluindo artes e humanidades, obtendo a assinatura formal de centenas de academias de ciências e governos de todo o mundo.

---

### 3. As Vias de Efetivação do Acesso Aberto

* **Via Verde (*Green Open Access*):**
  * O autor publica seu trabalho em um periódico tradicional, mas mantém o direito de depositar uma cópia (geralmente a versão aceita pós-avaliação por pares ou preprint) no **Repositório Institucional** de sua universidade ou em repositórios temáticos.
* **Via Dourada (*Gold Open Access*):**
  * Publicação em periódicos eletrônicos em que **todos os artigos são imediatamente livres** para leitura no site da revista.  
  * O modelo de sustentação financeira muitas vezes transfere o custo para o autor através da taxa **APC (*Article Processing Charge*)**.
* **Via Diamante / Platina (*Diamond Open Access*):**
  * Modelo sem fins lucrativos em que nem o leitor paga para ler, nem o autor paga APC para publicar.
  * É o modelo hegemônico na América Latina, sustentado com fundos de universidades públicas e agências como CAPES, CNPq e FAPESP, capitaneado pela rede **SciELO** (*Scientific Electronic Library Online*).
* **Via Híbrida:**
  * O periódico continua sendo fechado e vendido por assinaturas caras, mas oferece ao autor a opção de pagar uma taxa APC avulsa para liberar o seu artigo específico para download público (prática do *double dipping*).

---

### 4. Os Princípios FAIR para Gestão de Dados de Pesquisa

Publicados em 2016 no periódico *Nature Scientific Data* por **Mark D. Wilkinson e Barend Mons** (presente em nosso acervo em \`Comunicação científica, Ciência Aberta e métricas/sdata201618.pdf\`), os princípios **FAIR** norteiam a curadoria digital de dados de pesquisa na Ciência Aberta:

* **Findable (Localizável):**
  * Os dados e metadados devem possuir um identificador persistente global (PID/DOI), metadados ricos e descritivos, e estarem indexados em ferramentas de busca.
* **Accessible (Acessível):**
  * Os dados e metadados devem ser recuperáveis por meio de identificadores usando um protocolo de comunicação aberto, gratuito e universal (como o HTTP/HTTPS), permitindo procedimentos formais de autenticação e autorização quando necessário.
* **Interoperable (Interoperável):**
  * Devem utilizar linguagens formais, acessíveis e amplamente compartilhadas de representação do conhecimento (como ontologias, esquemas XML ou JSON-LD), adotando vocabulários que sigam os princípios FAIR.
* **Reusable (Reutilizável):**
  * Devem apresentar documentação clara sobre sua proveniência, seguir padrões da comunidade científica e possuir licenças de uso explícitas e transparentes (como Creative Commons).

> **⚠️ Alerta Supremo Cebraspe:**  
> O princípio FAIR **NÃO significa necessariamente "Open Access" irrestrito**. Dados sensíveis de saúde, segredos industriais ou investigações criminais podem ser plenamente compatíveis com os princípios FAIR tendo metadados públicos localizáveis, embora o acesso ao arquivo bruto de dados seja protegido por autenticação e restrições legais.`,
  checkpoints: [
    {
      id: 'cp-9-2-1',
      pergunta: 'Micro-Checkpoint 1: Os Princípios FAIR e a Abertura de Dados',
      item: 'Os princípios FAIR determinam que, para um dado de pesquisa ser considerado científico, ele deve ser compulsoriamente aberto, gratuito e disponibilizado sem qualquer tipo de restrição de acesso ou necessidade de autenticação.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe cobrou esse item na UNEAL 2026. Os princípios FAIR orientam que os dados sejam "tão abertos quanto possível, tão fechados quanto necessário", permitindo controle de acesso e autenticação para dados sigilosos ou sensíveis.',
    },
    {
      id: 'cp-9-2-2',
      pergunta: 'Micro-Checkpoint 2: As Vias Verde e Dourada do Acesso Aberto',
      item: 'A Via Verde do acesso aberto caracteriza-se pela publicação direta em revistas científicas de acesso irrestrito mediante pagamento de APC, enquanto a Via Dourada baseia-se no autoarquivamento de artigos em repositórios institucionais.',
      gabarito: 'E',
      justificativa: 'Errado! O item inverteu as definições: a Via Dourada é a publicação direta em periódicos abertos; a Via Verde é o autoarquivamento em repositórios institucionais.',
    },
      {
      id: 'cp-9-2-3',
      pergunta: "Micro-Checkpoint 3: Lei de Lotka sobre Produtividade de Autores",
      item: "A Lei do Quadrado Inverso de Lotka demonstra que a proporção de autores que publicam apenas um único trabalho em um determinado campo científico é de aproximadamente 60% do total de autores.",
      gabarito: 'C',
      justificativa: "Certo! Alfred J. Lotka (1926) calculou que o número de pesquisadores que escrevem 'n' artigos é aproximadamente 1/n² daqueles que escrevem um único artigo, resultando em cerca de 60% de autores com apenas uma publicação.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-2-1',
        periodo: '2002',
        disciplina: 'Marco do Acesso Aberto',
        focoPrincipal: 'Declaração da Iniciativa de Acesso Aberto de Budapeste (BOAI)',
        figuraChave: 'Open Society Institute / Peter Suber',
      },
      {
        id: 'tl-9-2-2',
        periodo: '2003',
        disciplina: 'Bethesda e Berlim',
        focoPrincipal: 'Expansão do pacto de Acesso Aberto para a pesquisa biomédica e para as humanidades',
        figuraChave: 'Max Planck Society e Howard Hughes Medical Institute',
      },
      {
        id: 'tl-9-2-3',
        periodo: '2016',
        disciplina: 'Princípios FAIR',
        focoPrincipal: 'Publicação dos Princípios FAIR para dados de pesquisa científica (Wilkinson et al.)',
        figuraChave: 'Barend Mons e Mark Wilkinson',
      },
    ],
    autores: [
      {
        id: 'aut-9-2-1',
        nome: 'Peter Suber',
        ano: 2002,
        obraPrincipal: 'Open Access',
        ideiaChave: 'Líder intelectual da BOAI; o acesso aberto remove barreiras de preço e barreiras de permissão.',
        chipPegadinha: 'Acesso Aberto não viola direitos autorais; apoia-se no consentimento formal do autor.',
      },
      {
        id: 'aut-9-2-2',
        nome: 'Barend Mons',
        ano: 2016,
        obraPrincipal: 'The FAIR Guiding Principles for scientific data management',
        ideiaChave: 'Criador do acrônimo FAIR: Localizável, Acessível, Interoperável e Reutilizável por humanos e máquinas.',
        chipPegadinha: 'FAIR é sobre máquina e interoperabilidade, não significa necessariamente dado 100% público.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-9-2-1',
        afirmacao: 'Na publicação por via diamante de acesso aberto, os custos de processamento de artigos (APC) são repassados integralmente aos autores ou às suas instituições de pesquisa.',
        gabarito: 'E',
        porQue: 'A Via Diamante/Platina NÃO cobra taxas de ninguém: nem de leitores, nem de autores. É subsidiada por instituições públicas (como a rede SciELO).',
      },
      {
        id: 'peg-9-2-2',
        afirmacao: 'O movimento do Acesso Aberto defende a extinção dos direitos autorais morais do pesquisador sobre suas descobertas.',
        gabarito: 'E',
        porQue: 'O direito moral de autoria (ser reconhecido e citado como autor) é inalienável e permanentemente protegido no Acesso Aberto.',
      },
    ],
  },
};

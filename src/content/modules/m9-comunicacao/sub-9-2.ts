import type { ModuloFilho } from '../../../domain/types';

export const submodulo92: ModuloFilho = {
  id: 'sub-9-2',
  numero: '9.2',
  titulo: 'Acesso Aberto (Vias Verde, Dourada e Diamante) e Princípios FAIR',
  descricaoCurta: 'A crise dos periódicos, as 3 declarações fundacionais (Budapest, Bethesda, Berlin), as vias do Acesso Aberto (Dourada, Verde, Diamante, Híbrida e Bronze), licenças Creative Commons e os Princípios FAIR (Findable, Accessible, Interoperable, Reusable).',
  tempoEstimadoMinutos: 45,
  autoresChave: ['Peter Suber', 'Stevan Harnad', 'Barend Mons', 'Mark D. Wilkinson', 'John Willinsky', 'Abel Packer (SciELO)'],
  alertasCebraspe: [
    'A tríade dos "Três B\'s" do Acesso Aberto: 1. Declaração de Budapeste (BOAI, 2002); 2. Declaração de Bethesda (2003); e 3. Declaração de Berlim (2003). A Declaração de Budapeste inaugurou o movimento formal e estabeleceu as duas vias complementares da abertura: autoarquivamento em repositórios (Via Verde) e periódicos de acesso aberto (Via Dourada).',
    'As Vias do Acesso Aberto: Via Dourada (publicação direta em periódicos de acesso aberto, podendo haver cobrança de taxa APC paga pelos autores); Via Verde (autoarquivamento de preprints ou pós-prints em Repositórios Institucionais pelo próprio autor); Via Diamante/Platina (acesso aberto pleno e gratuito tanto para autores quanto para leitores, sem taxa APC, financiado por universidades públicas e agências estatais - modelo hegemônico do SciELO no Brasil).',
    'Pegadinha recente de altíssima incidência da banca (UNEAL 2026): afirmar que os princípios FAIR exigem que todo dado de pesquisa seja obrigatoriamente público, gratuito e sem qualquer restrição de acesso. ERRADO! O lema orientador do GO FAIR é "tão aberto quanto possível, tão fechado quanto necessário" (dados confidenciais de saúde, patentes ou sigilos governamentais podem ser FAIR e ter acesso controlado sob autenticação estrita).',
    'Revistas Híbridas: periódicos comerciais fechados por assinatura que cobram APC avulsa para abrir artigos individuais na web (prática abusiva do "double dipping", onde a editora recebe duplamente: pela assinatura institucional paga pelas bibliotecas e pela taxa de processamento paga pelos autores).',
    'Licenças Creative Commons (CC): a licença mais aberta e amplamente recomendada pela Ciência Aberta é a CC BY (permite reutilização, adaptação e compartilhamento para qualquer finalidade, desde que atribuída a autoria original).',
  ],
  quadroComparativo: {
    titulo: 'As Principais Vias de Publicação do Movimento de Acesso Aberto',
    colunas: ['Via de Acesso Aberto', 'Canal Principal de Disponibilização', 'Custo para o Leitor', 'Custo para o Autor (Taxa APC)', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Via Verde (*Green Road*)', 'Autoarquivamento em Repositórios Institucionais ou Temáticos', 'Gratuito', 'Zero (gratuito para o autor)', 'Afirmar que a Via Verde é a publicação direta em revistas abertas com taxa paga.'],
      ['Via Dourada (*Gold Road*)', 'Revistas científicas de acesso aberto pleno na Web', 'Gratuito', 'Variável: frequentemente cobra taxa APC (*Article Processing Charge*)', 'Dizer que na Via Dourada o leitor precisa pagar taxa de download por artigo.'],
      ['Via Diamante / Platina', 'Revistas de acesso aberto mantidas por universidades públicas e sociedades', 'Gratuito', 'Zero (financiado integralmente por fundos públicos institucionais)', 'Afirmar que a Via Diamante cobra taxas de processamento para acelerar pareceres.'],
      ['Via Híbrida (*Hybrid Road*)', 'Revistas comerciais por assinatura com artigos individuais liberados', 'Gratuito apenas para o artigo com APC pago', 'Cobra taxa APC elevada do autor, mantendo o restante da revista sob assinatura', 'Ignorar o fenômeno do double dipping (duplo pagamento cobrado pelas editoras comerciais).'],
      ['Via Bronze (*Bronze Road*)', 'Artigos com acesso livre no site da editora comercial sem licença aberta', 'Gratuito temporariamente', 'Zero', 'Confundir Via Bronze com Acesso Aberto formal (a editora pode fechar o acesso a qualquer instante).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Crise dos Periódicos e o Nascimento do Acesso Aberto

A partir do final da década de 1970 e ao longo dos anos 1980 e 1990, as bibliotecas universitárias e de pesquisa de todo o planeta foram asfixiadas pelo fenômeno denominado **"Crise dos Periódicos"** (*Serials Crisis*):

* **O Oligopólio Editorial Comercial:** Grandes conglomerados editoriais multinacionais com fins lucrativos (Elsevier, Springer, Wiley, Taylor & Francis) passaram a aplicar reajustes anuais de preços de assinaturas de revistas científicas em índices astronômicos, muito acima das taxas de inflação mundiais.
* **A Paralisia Orçamentária das Bibliotecas:** Universidades foram forçadas a cancelar milhares de assinaturas de revistas essenciais por falta de verbas.
* **A Contradição Ética e Financeira:** Gerou-se uma aberração econômica estrutural no ecossistema da ciência:
  1. A pesquisa científica era financiada com verbas públicas estatais e impostos dos cidadãos;
  2. Os cientistas realizavam as pesquisas, redigiam os artigos e atuavam como pareceristas (*peer review*) de forma totalmente gratuita para as editoras;
  3. No entanto, as editoras comerciais apropriavam-se com exclusividade dos direitos patrimoniais de autor (*copyright*) e revendiam o acesso a esses mesmos artigos para as universidades públicas a preços milionários.
* **A Reação Comunitária:** Pesquisadores, bibliotecários e reitores uniram-se para conceber o **Movimento de Acesso Aberto** (*Open Access Movement*), capitaneado por teóricos como **Peter Suber** (*Open Access*, 2012) e **Stevan Harnad**.

---

### 2. As Três Declarações Fundacionais (Os Três "B"s do Acesso Aberto)

O movimento foi consagrado e sistematizado internacionalmente por três declarações seminais sucessivas:

\`\`\`timeline
BUD | 1. Declaração de Budapeste (BOAI 2002) | Marco Inaugural do Movimento | Fixa a definição universal de Acesso Aberto e consagra as duas vias canônicas: Verde (autoarquivamento) e Dourada (periódicos abertos)
---> Foco nas Ciências Biomédicas e Agências de Fomento
BETH | 2. Declaração de Bethesda (2003) | Mandato de Depósito em Repositórios | Enfatiza o depósito obrigatório de artigos em repositórios abertos (ex: PubMed Central) como condição de financiamento público
---> Expansão Universal para Todas as Áreas do Conhecimento
BER | 3. Declaração de Berlim (2003) | Pacto Global Interdisciplinar | Ratificada por governos e academias mundiais (Sociedade Max Planck), estendendo o Acesso Aberto às Artes, Humanidades e Patrimônio
\`\`\`

1. **Iniciativa de Acesso Aberto de Budapeste (BOAI — *Budapest Open Access Initiative*, 2002):**
   * Convocada pelo *Open Society Institute*, estabeleceu a definição canônica e universal do termo:
   * *Definição:* Acesso aberto à literatura científica significa a sua **disponibilização livre e gratuita na Internet pública**, permitindo a qualquer usuário ler, descarregar, copiar, distribuir, imprimir, pesquisar, vincular aos textos completos, indexá-los ou usá-los para qualquer outro fim legítimo, **sem barreiras financeiras, legais ou técnicas**, exigindo apenas a manutenção da integridade do trabalho e o direito dos autores de serem devidamente reconhecidos e citados.
   * Estabeleceu as **duas estratégias complementares** de efetivação: o autoarquivamento em repositórios (Via Verde) e a publicação em novos periódicos abertos (Via Dourada).
2. **Declaração de Bethesda sobre Publicação em Acesso Aberto (2003):**
   * Formulada por pesquisadores, editores e agências de fomento com ênfase no setor biomédico, estipulando que o depósito do texto integral em repositórios digitais abertos (como o PubMed Central) é condição mandatória para concessão de financiamentos de pesquisa.
3. **Declaração de Berlim sobre o Acesso Aberto ao Conhecimento em Ciências e Humanidades (2003):**
   * Ratificada pela Sociedade Max Planck e subscrita por centenas de governos, academias de ciências e universidades globais, ampliando expressamente o escopo do acesso aberto para abranger as ciências humanas, sociais, patrimônio cultural e humanidades.

---

### 3. A Taxonomia das Vias de Acesso Aberto

* **Via Verde (*Green Open Access* — Autoarquivamento):**
  * O autor submete e publica seu artigo em uma revista tradicional (mesmo em revistas por assinatura fechada), mas mantém o direito de depositar uma cópia digital da versão aceita pós-revisão (*post-print* ou *accepted manuscript*) ou preprint no **Repositório Institucional** de sua universidade ou em repositórios temáticos.
  * O acesso é totalmente gratuito para o leitor e tem **custo zero para o autor**. Em alguns casos, as editoras comerciais impõem um período de embargo temporário (de 6 a 12 meses) antes da liberação pública do arquivo.
* **Via Dourada (*Gold Open Access*):**
  * Publicação em periódicos científicos eletrônicos em que **a totalidade dos artigos é disponibilizada de forma livre e imediata** no sítio web da revista.
  * O modelo de sustentação de muitas revistas comerciais baseia-se na cobrança da taxa **APC (*Article Processing Charge*)**, transferindo o custo da assinatura para o bolso do autor ou de sua agência financiadora.
* **Via Diamante / Platina (*Diamond / Platinum Open Access*):**
  * **O Modelo Público Ideal:** Periódicos científicos geridos e sustentados por universidades públicas, institutos governamentais ou associações científicas sem fins lucrativos.
  * **Nem o leitor paga para ler, nem o autor paga taxa APC para publicar.** É o modelo público hegemônico no Brasil e na América Latina, capitaneado pela infraestrutura da rede **SciELO** (*Scientific Electronic Library Online*).
* **Via Híbrida (*Hybrid Open Access*):**
  * O periódico comercial permanece sob o modelo fechado de assinaturas pagas, mas oferece aos autores a alternativa de pagarem uma taxa APC avulsa para liberar o seu artigo específico em acesso aberto no portal da revista.
  * *O Problema do Double Dipping:* A editora comercial recebe duas vezes pela mesma mercadoria: cobra assinaturas milionárias das bibliotecas universitárias e, simultaneamente, cobra taxas APC dos pesquisadores dessas mesmas universidades.
* **Via Bronze (*Bronze Open Access*):**
  * O artigo encontra-se disponível gratuitamente para leitura na página da editora comercial, mas **não possui uma licença formal aberta (como Creative Commons)**. A editora pode reinserir o conteúdo sob barreira de pagamento (*paywall*) a qualquer momento.

---

### 4. Licenças de Acesso Aberto: O Padrão Creative Commons (CC)

O movimento de Acesso Aberto rejeita o modelo restritivo de *"todos os direitos reservados"*, adotando o princípio de *"alguns direitos reservados"* viabilizado pelas licenças públicas **Creative Commons**:
* **CC BY (Atribuição):** É a licença mais aberta e a recomendada oficialmente pela Ciência Aberta. Permite que outros distribuam, remixem, adaptem e usem a obra para qualquer finalidade (inclusive comercial), desde que atribuam o devido crédito de autoria ao criador original.
* **CC BY-SA (Atribuição + CompartilhaIgual):** Permite derivações, desde que licenciadas sob os mesmos termos da licença original.
* **CC BY-NC (Atribuição + NãoComercial):** Veda a exploração econômica e comercial da obra por terceiros.
* **CC BY-ND (Atribuição + SemDerivações):** Permite a redistribuição da obra exclusivamente em sua forma original e inalterada.

---

### 5. Os Princípios FAIR para Gestão de Dados de Pesquisa

Formulados em 2016 por **Mark D. Wilkinson e Barend Mons** no periódico *Nature Scientific Data*, os princípios **FAIR** constituem as diretrizes globais para a gestão de dados de pesquisa científica na era do *Big Data* e da Ciência Aberta:

* **Findable (Localizável / Encontrável):**
  * Os dados e metadados devem possuir identificadores persistentes e globais únicos (PIDs, como DOI ou Handle).
  * Devem ser descritos por metadados ricos e arquivados em repositórios indexados em mecanismos de busca.
* **Accessible (Acessível):**
  * Os metadados e os dados devem ser recuperáveis por meio de identificadores através de **protocolos de comunicação padronizados, abertos, gratuitos e universais** (como HTTP/HTTPS).
  * O protocolo deve permitir autenticação e controle de autorização quando o tipo de dado assim exigir.
  * Os metadados devem continuar acessíveis mesmo quando o arquivo bruto de dados for arquivado ou retirado.
* **Interoperable (Interoperável):**
  * Os dados devem utilizar formatos abertos e **linguagens formais, acessíveis e estruturadas** de representação do conhecimento (ontologias, RDF, esquemas XML ou JSON-LD).
  * Os vocabulários utilizados devem seguir, eles próprios, os princípios FAIR.
* **Reusable (Reutilizável):**
  * Os dados devem conter documentação detalhada sobre sua proveniência e cadeia de custódia (como foram gerados e calibrados).
  * Devem possuir **licenças de uso claras e transparentes** (ex.: Creative Commons) e atender aos padrões e normas estabelecidos pela comunidade científica da disciplina.

> [!IMPORTANT]
> **A Pegadinha Mais Cobrada pelo Cebraspe (UNEAL 2026):**
> Os Princípios FAIR **NÃO são sinônimos de dados 100% públicos e abertos sem controle**. Dados confidenciais de pacientes médicos, segredos militares, patentes de inovação ou investigações judiciais podem ser plenamente compatíveis com os princípios FAIR: seus metadados são localizáveis e interoperáveis, mas o acesso ao dado bruto é estritamente restrito e condicionado à autenticação de usuários credenciados. O princípio orientador é: **"Tão aberto quanto possível, tão fechado quanto necessário"** (*as open as possible, as closed as necessary*).`,
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
      pergunta: 'Micro-Checkpoint 3: Lei de Lotka sobre Produtividade de Autores',
      item: 'A Lei do Quadrado Inverso de Lotka demonstra que a proporção de autores que publicam apenas um único trabalho em um determinado campo científico é de aproximadamente 60% do total de autores.',
      gabarito: 'C',
      justificativa: 'Certo! Alfred J. Lotka (1926) calculou que o número de pesquisadores que escrevem "n" artigos é aproximadamente 1/n² daqueles que escrevem um único artigo, resultando em cerca de 60% de autores com apenas uma publicação.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-9-2-1',
        periodo: '2002',
        disciplina: 'Marco do Acesso Aberto',
        focoPrincipal: 'Declaração da Iniciativa de Acesso Aberto de Budapeste (BOAI) e definição das Vias Verde e Dourada',
        figuraChave: 'Open Society Institute / Peter Suber',
      },
      {
        id: 'tl-9-2-2',
        periodo: '2003',
        disciplina: 'Bethesda e Berlim',
        focoPrincipal: 'Expansão do pacto de Acesso Aberto para a pesquisa biomédica e para todas as áreas do conhecimento',
        figuraChave: 'Max Planck Society e Howard Hughes Medical Institute',
      },
      {
        id: 'tl-9-2-3',
        periodo: '2016',
        disciplina: 'Princípios FAIR',
        focoPrincipal: 'Publicação dos Princípios FAIR para gestão de dados de pesquisa científica na Nature (Wilkinson et al.)',
        figuraChave: 'Barend Mons e Mark Wilkinson',
      },
    ],
    autores: [
      {
        id: 'aut-9-2-1',
        nome: 'Peter Suber',
        ano: 2002,
        obraPrincipal: 'Open Access',
        ideiaChave: 'Líder intelectual da BOAI; o acesso aberto remove barreiras de preço (assinaturas) e barreiras de permissão (direitos).',
        chipPegadinha: 'Acesso Aberto não viola direitos autorais; apoia-se no consentimento formal do autor com licenças CC.',
      },
      {
        id: 'aut-9-2-2',
        nome: 'Barend Mons',
        ano: 2016,
        obraPrincipal: 'The FAIR Guiding Principles for scientific data management and stewardship',
        ideiaChave: 'Criador do acrônimo FAIR: Localizável, Acessível, Interoperável e Reutilizável por humanos e máquinas.',
        chipPegadinha: 'FAIR é sobre governança de dados e metadados legíveis por máquina, não significa necessariamente dado 100% público.',
      },
      {
        id: 'aut-9-2-3',
        nome: 'Abel Packer',
        ano: 1998,
        obraPrincipal: 'SciELO: Uma Metodologia para Publicação Eletrônica Cooperativa',
        ideiaChave: 'Pioneirismo mundial na criação da rede SciELO como infraestrutura de Acesso Aberto Diamante público na América Latina.',
        chipPegadinha: 'SciELO é modelo de Via Diamante sem cobrança de taxas de autores e sustentado por fundos de pesquisa públicos.',
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
      {
        id: 'peg-9-2-3',
        afirmacao: 'Para que um repositório de dados de pesquisa atenda aos Princípios FAIR, é mandatório que todos os arquivos brutos sejam disponibilizados na Internet sem qualquer procedimento de controle de acesso ou autenticação.',
        gabarito: 'E',
        porQue: 'Cobrada na UNEAL 2026! O princípio FAIR prevê protocolos abertos que suportem autenticação e autorização para dados sensíveis ou protegidos por sigilo.',
      },
    ],
  },
};

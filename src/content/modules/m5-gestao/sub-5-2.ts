import type { ModuloFilho } from '../../../domain/types';

export const submodulo52: ModuloFilho = {
  id: 'sub-5-2',
  numero: '5.2',
  titulo: 'Marketing em Unidades de Informação e Serviços',
  descricaoCurta: 'Fundamentos mercadológicos aplicados à Biblioteconomia (Amaral, Kotler), segmentação de mercado, composto de marketing (4 Ps), endomarketing, marketing de relacionamento e de permissão.',
  tempoEstimadoMinutos: 25,
  autoresChave: ['Sueli Angélica do Amaral', 'Philip Kotler', 'Amélia Silveira', 'Seth Godin'],
  alertasCebraspe: [
    'Pegadinha clássica da banca: afirmar que endomarketing é voltado ao atendimento direto de usuários externos. ERRADO! Endomarketing é exclusivamente interno, voltado aos colaboradores da unidade de informação para alinhar visão, cultura e engajamento.',
    'O Cebraspe insiste em afirmar que bibliotecas públicas ou governamentais não podem usar marketing por não terem fins lucrativos. FALSO! O marketing social e de serviços em bibliotecas foca na agregação de valor, satisfação de necessidades e promoção do uso social da informação.',
    'Cuidado com a confusão entre marketing de massa (indiferenciado) e segmentação de mercado: embora bibliotecas tradicionalmente tenham praticado marketing indiferenciado, a gestão moderna exige segmentar a comunidade em nichos com necessidades específicas.',
    'Marketing de permissão em bibliotecas tem aplicação clássica nos serviços de Disseminação Seletiva da Informação (DSI) e newsletters, onde o usuário autoriza previamente o recebimento de alertas.',
  ],
  quadroComparativo: {
    titulo: 'O Composto de Marketing (4 Ps) Adaptado a Unidades de Informação',
    colunas: ['Elemento', 'No Contexto Tradicional de Bens', 'Na Biblioteca / Unidade de Informação', 'Aplicações no Ambiente Legislativo'],
    linhas: [
      ['Produto / Serviço (Product)', 'Mercadoria física tangível', 'Informação tratada, dossiês temáticos, bases de dados, serviços de referência', 'Dossiês de projetos de lei, compilações normativas, clipping parlamentar'],
      ['Preço / Custo (Price)', 'Valor monetário pago em moeda', 'Custo temporal, esforço cognitivo, barreiras de acesso e deslocamento do usuário', 'Economia do tempo do deputado e assessores para tomada de decisão ágil'],
      ['Praça / Distribuição (Place)', 'Canais físicos de distribuição e logística', 'Acesso físico às instalações e acesso remoto via portais web, repositórios e intranet', 'Portal da Câmara, LexML, RVBI, aplicativo móvel e terminais de consulta'],
      ['Promoção / Comunicação (Promotion)', 'Publicidade de vendas e propaganda persuasiva', 'Disseminação, eventos culturais, guias do usuário, redes sociais institucionais', 'Treinamento de assessores, boletins informativos e campanhas de transparência pública'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Fundamentos e Evolução do Marketing em Bibliotecas

A aplicação do marketing na Biblioteconomia brasileira tem como autoridade máxima a Profa. **Sueli Angélica do Amaral** (*Marketing: abordagem em unidades de informação*, presente no repositório \`Gestão e Coleções\`). O marketing não se restringe à propaganda cosmética de cartazes, mas constitui uma **filosofia de gestão orientada para o usuário/cliente**.

#### A. A Mudança de Foco: Da Oferta para a Demanda
Historicamente, as bibliotecas adotaram a postura de "orientação para o produto/acervo": organizava-se o acervo físico e aguardava-se passivamente a chegada do usuário.  
A gestão orientada pelo marketing inverte esse vetor:
* **Foco no Usuário:** A biblioteca identifica previamente as necessidades, hábitos, modelos mentais e carências informacionais da comunidade para só então conceber, desenhar e disponibilizar produtos e serviços relevantes.
* **Agregação de Valor:** A informação só adquire valor no momento do seu uso. Os processos técnicos de catalogação e indexação são meios para assegurar que a informação tenha valor agregado para a tomada de decisão do usuário.

---

#### B. As Fases do Processo de Marketing em Unidades de Informação
Conforme Amaral (2011) e Silveira (2001), o ciclo de marketing desenvolve-se em quatro grandes etapas integradas:
1. **Auditoria e Análise do Mercado:** Coleta de dados sobre a comunidade, análise dos fatores ambientais e identificação do perfil de usuários reais e potenciais.
2. **Segmentação de Mercado:** Divisão da comunidade heterogênea em subgrupos homogêneos que compartilhem características, interesses e comportamentos similares (ex.: parlamentares, assessores jurídicos, pesquisadores acadêmicos e cidadãos em geral).
3. **Desenvolvimento do Composto de Marketing (Mix de Marketing):**
   * Ajuste dos **4 Ps**: *Produto/Serviço*, *Preço/Custo de acesso*, *Praça/Disponibilidade* e *Promoção/Comunicação*.
4. **Implementação e Controle:** Acompanhamento contínuo dos indicadores de qualidade, satisfação e percepção de valor pelos usuários.

---

### 2. Tipologias Específicas de Marketing Cobradas pelo Cebraspe

#### A. Endomarketing (Marketing Interno)
* **Conceito:** Ações de marketing dirigidas ao **público interno da organização** (equipe de bibliotecários, técnicos, estagiários e funcionários de apoio).
* **Finalidade:** Vender as metas, a visão estratégica e a cultura da biblioteca para seus próprios colaboradores, gerando motivação, comprometimento e sintonia com a missão institucional.
* *Atenção Cebraspe:* Não confundir endomarketing com comunicação para usuários internos ou atendimento ao público!

#### B. Marketing de Relacionamento e de Permissão
* **Marketing de Relacionamento:** Estratégia de longo prazo focada em estabelecer vínculos contínuos de confiança e fidelização com os usuários, em vez de focar apenas em transações isoladas de empréstimo.
* **Marketing de Permissão (Seth Godin):** O usuário concede autorização prévia e explícita para que a unidade de informação lhe envie comunicações direcionadas.  
  * *Exemplo Canônico em Bibliotecas:* O cadastramento de perfil na **Disseminação Seletiva da Informação (DSI)**, em que o pesquisador escolhe os descritores e aceita receber alertas periódicos.

#### C. Marketing de Guerrilha e Marketing Digital
* **Marketing de Guerrilha:** Ações criativas, de alto impacto visual e baixo custo financeiro, com o propósito de causar forte impressão memorável e surpreender os usuários no espaço físico ou institucional.
* **Marketing Digital e Redes Sociais:** Utilização planejada de canais digitais (Instagram, Twitter/X, podcasts, portais). Exige definição prévia de objetivos e linha editorial; abrir perfis de forma indiscriminada sem gestão editorial compromete a reputação institucional.`,
  checkpoints: [
    {
      id: 'cp-5-2-1',
      pergunta: 'Micro-Checkpoint 1: Conceito de Endomarketing',
      item: 'Nas unidades de informação, as estratégias de endomarketing têm como finalidade primária o treinamento de usuários externos e a divulgação do catálogo de livros aos leitores da comunidade.',
      gabarito: 'E',
      justificativa: 'Errado! O endomarketing é voltado estritamente ao público interno (colaboradores da biblioteca), visando à sua integração, alinhamento institucional e motivação.',
    },
    {
      id: 'cp-5-2-2',
      pergunta: 'Micro-Checkpoint 2: Marketing de Permissão e DSI',
      item: 'Em bibliotecas e centros de documentação, o serviço de disseminação seletiva da informação (DSI), baseado no cadastramento voluntário de perfis temáticos pelos usuários, constitui uma aplicação prática do conceito de marketing de permissão.',
      gabarito: 'C',
      justificativa: 'Correto! No marketing de permissão o usuário manifesta consentimento prévio para receber informações pertinentes ao seu interesse específico.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-5-2-1',
        periodo: 'Anos 1980',
        disciplina: 'Marketing de Serviços',
        focoPrincipal: 'Adaptação dos conceitos de Kotler para organizações sem fins lucrativos e bibliotecas públicas',
        figuraChave: 'Philip Kotler',
      },
      {
        id: 'tl-5-2-2',
        periodo: '1998 / 2011',
        disciplina: 'Marketing da Informação',
        focoPrincipal: 'Sistematização do marketing em bibliotecas no Brasil: 4 Ps, auditoria e valor da informação',
        figuraChave: 'Sueli Angélica do Amaral',
      },
    ],
    autores: [
      {
        id: 'aut-5-2-1',
        nome: 'Sueli Angélica do Amaral',
        ano: 2011,
        obraPrincipal: 'Marketing: abordagem em unidades de informação',
        ideiaChave: 'Filosofia gerencial centrada no usuário, composto de marketing (4 Ps), segmentação e agregação de valor.',
        chipPegadinha: 'Marketing em bibliotecas não é sinônimo de relações públicas nem de venda com lucro monetário.',
      },
      {
        id: 'aut-5-2-2',
        nome: 'Seth Godin',
        ano: 1999,
        obraPrincipal: 'Permission Marketing',
        ideiaChave: 'O usuário autoriza previamente o envio de informações selecionadas; base da DSI moderna.',
        chipPegadinha: 'A DSI é o caso arquetípico de marketing de permissão em biblioteconomia.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-5-2-1',
        afirmacao: 'O aspecto negocial e mercadológico do marketing não pode ser aplicado às bibliotecas governamentais, pois o acesso público é conflitante com técnicas de mercado.',
        gabarito: 'E',
        porQue: 'O marketing em bibliotecas atua no âmbito do valor de uso, satisfação do usuário e eficácia social, sendo perfeitamente aplicável a entidades públicas.',
      },
      {
        id: 'peg-5-2-2',
        afirmacao: 'A prática tradicional das bibliotecas sempre foi a da segmentação apurada de mercado, atendendo a nichos personalizados em detrimento do atendimento massificado.',
        gabarito: 'E',
        porQue: 'Tradicionalmente as bibliotecas praticavam marketing de massa ou indiferenciado; a personalização e a segmentação são conquistas da abordagem moderna.',
      },
    ],
  },
};

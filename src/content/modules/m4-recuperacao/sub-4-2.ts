import type { ModuloFilho } from '../../../domain/types';

export const submodulo42: ModuloFilho = {
  id: 'sub-4-2',
  numero: '4.2',
  titulo: 'Fontes de Informação: Tipologia, Literatura Cinzenta e Avaliação',
  descricaoCurta: 'Tipologia das fontes de informação (Cunha, Grogan): fontes primárias, secundárias e terciárias, literatura cinzenta, bases de dados especializadas e critérios de avaliação de fontes analógicas e digitais.',
  tempoEstimadoMinutos: 30,
  autoresChave: ['Murilo Bastos da Cunha', 'Denis Grogan', 'Bernadete Campello', 'Nice Menezes de Figueiredo'],
  alertasCebraspe: [
    'A classificação tripartite das fontes de informação segundo Murilo Bastos da Cunha: Primárias (conhecimento original e novo), Secundárias (informação organizada que remete às primárias) e Terciárias (guias que apontam para as primárias e secundárias).',
    'Exemplos canônicos de Fontes Terciárias muito cobrados: bibliografia de bibliografias, guias de fontes de informação, diretórios de bibliotecas e centros de documentação, e revisões de literatura.',
    'Literatura Cinzenta (Grey Literature): literatura não convencional produzida por órgãos governamentais, acadêmicos ou corporativos que não passa pelos canais comerciais habituais de distribuição editorial (relatórios técnicos, notas taquigráficas, preprints, apostilas). É fonte PRIMÁRIA de altíssimo valor informativo.',
    'Critérios de avaliação de fontes de informação na Internet: Autoridade (credibilidade do autor/instituição), Atualidade (frequência de revisão), Cobertura (amplitude temática), Exatidão (isenção de erros factuais) e Usabilidade (interface amigável e acessibilidade).',
    'As bibliografias são consideradas documentos SECUNDÁRIOS no controle bibliográfico, pois referenciam e organizam documentos primários preexistentes.',
  ],
  quadroComparativo: {
    titulo: 'Tipologia Tripartite das Fontes de Informação (Cunha & Grogan)',
    colunas: ['Categoria', 'Definição e Propósito', 'Exemplos Canônicos Tradicionais', 'Exemplos no Ambiente Legislativo / Jurídico'],
    linhas: [
      ['Fontes Primárias', 'Registram o conhecimento original pela primeira vez; informações novas sem condensação ou interpretação prévia', 'Artigos de periódicos, teses e dissertações, patentes, anais de congressos, relatórios de pesquisa', 'Projetos de Lei, Diário Oficial da União (DOU), acórdãos, transcrições de discursos e pronunciamentos'],
      ['Fontes Secundárias', 'Contêm informações reorganizadas e selecionadas a partir das fontes primárias para facilitar sua localização', 'Bibliografias especializadas, catálogos de bibliotecas, bases de dados de resumos/índices, enciclopédias, dicionários', 'Portal da Câmara (pesquisa de proposições), LexML, RVBI, ementários de jurisprudência e códigos comentados'],
      ['Fontes Terciárias', 'Funcionam como sinalizadores de rota, direcionando o pesquisador para fontes primárias e secundárias', 'Bibliografias de bibliografias, guias de bibliotecas, diretórios de instituições e pesquisadores, revisões de literatura', 'Guia da Biblioteca da Câmara, diretórios de comissões parlamentares, catálogos de bases jurídicas disponíveis'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Conceito e Importância das Fontes de Informação

Conforme **Murilo Bastos da Cunha** (*Para Saber Mais: Fontes de Informação em Ciência e Tecnologia*, presente em nosso acervo \`Recuperação, fontes, referência e usuários/LIVRO_ParaSaberMais.pdf\`), as fontes de informação compreendem qualquer recurso, documento, pessoa, instituição ou sistema eletrônico capaz de responder a uma necessidade de informação do usuário.

A evolução tecnológica diversificou extraordinariamente o universo das fontes, exigindo do bibliotecário domínio refinado sobre sua tipologia e critérios objetivos de avaliação crítica.

---

### 2. A Tipologia Clássica das Fontes de Informação

A literatura canônica internacional (Grogan, 1995; Cunha, 2001) divide as fontes de informação em três grandes níveis hierárquicos:

#### A. Fontes Primárias
* São os veículos em que os autores e pesquisadores registram seus pensamentos, descobertas e criações intelectuais em primeira mão.
* **Características:** Contêm informações novas e não filtradas; frequentemente dispersas e de difícil localização.
* **Exemplos Canônicos:** Artigos de periódicos científicos, comunicações em anais de congressos (*proceedings*), relatórios técnicos governamentais, teses e dissertações acadêmicas, relatórios de patentes, normas técnicas originais e textos de leis/diários oficiais.

#### B. Fontes Secundárias
* Documentos elaborados a partir do tratamento, indexação e sumarização das fontes primárias.
* **Características:** Não trazem conhecimento científico inédito, mas organizam as fontes primárias para permitir que o usuário as localize e selecione com agilidade.
* **Exemplos Canônicos:**
  1. *Serviços de Indexação e Resumos (Abstracts):* Bases de dados referenciais (ex.: LISA, Web of Science, Scopus, BRAPCI).
  2. *Bibliografias:* Listas sistemáticas de referências (gerais, nacionais ou especializadas).
  3. *Catálogos de Bibliotecas (OPAC):* Registros dos acervos disponíveis.
  4. *Obras de Referência de Leitura Rápida:* Dicionários, enciclopédias, manuais, tabelas e tratados.

#### C. Fontes Terciárias
* Documentos cuja função precípua é guiar o usuário na identificação e no uso de fontes primárias e secundárias.
* **Características:** São guias e compilações de alto nível sobre a literatura disponível.
* **Exemplos Canônicos:** Bibliografias de bibliografias, guias de bibliotecas e centros de documentação, diretórios de pesquisadores e instituições científicas, e revisões do estado da arte (*literature reviews*).

---

### 3. A Literatura Cinzenta (*Grey Literature*)

* **Conceito:** Material de caráter técnico, acadêmico, administrativo ou científico produzido por governos, universidades, corporações e institutos de pesquisa que **não é disponibilizado comercialmente** pelos canais tradicionais de livrarias e editoras comerciais.
* **Exemplos:** Relatórios de comissões parlamentares de inquérito (CPIs), notas técnicas de consultorias legislativas, preprints, apostilas internas, relatórios de prestação de contas governamentais e atas de reuniões.
* **Importância:** É fonte primária de elevadíssimo valor contemporâneo por conter dados empíricos recentes muito antes de sua publicação formal em livros comerciais.

---

### 4. Critérios Científicos de Avaliação de Fontes de Informação

No ambiente digital contemporâneo, marcado pelo excesso de dados e fenômenos como desinformação e *fake news*, a avaliação crítica de fontes é atribuição indelegável do bibliotecário (Campello & Cendón, 2000):

1. **Autoridade (*Authority*):** Credibilidade e qualificação formal do autor, do comitê editorial ou da instituição responsável pela publicação.
2. **Exatidão e Precisão (*Accuracy*):** Rigor metodológico, ausência de erros factuais e integridade dos dados apresentados.
3. **Atualidade (*Currency*):** Frequência de atualização da fonte, clareza nas datas de publicação e de revisão dos conteúdos.
4. **Cobertura (*Coverage*):** Profundidade e amplitude temática abordada pela fonte em relação ao seu propósito declarado.
5. **Objetividade e Imparcialidade (*Objectivity*):** Isenção ideológica, transparência nas fontes de financiamento e ausência de viés tendencioso.
6. **Acessibilidade e Usabilidade (*Accessibility & Usability*):** Facilidade de navegação, conformidade com padrões de acessibilidade (W3C/WCAG) e estabilidade de acesso.`,
  checkpoints: [
    {
      id: 'cp-4-2-1',
      pergunta: 'Micro-Checkpoint 1: Classificação de Fontes de Informação',
      item: 'Bibliografia de bibliografias, guias de centros de documentação e diretórios de pesquisadores são classificados, quanto à tipologia documental, como fontes de informação secundárias.',
      gabarito: 'E',
      justificativa: 'Errado! Bibliografia de bibliografias, guias de bibliotecas e diretórios são fontes TERCIÁRIAS, pois servem para guiar o usuário na localização das fontes primárias e secundárias.',
    },
    {
      id: 'cp-4-2-2',
      pergunta: 'Micro-Checkpoint 2: Natureza da Literatura Cinzenta',
      item: 'A literatura cinzenta refere-se a documentos de circulação não comercial produzidos no âmbito acadêmico, empresarial ou governamental, sendo considerada fonte primária de informação relevante para a pesquisa científica e legislativa.',
      gabarito: 'C',
      justificativa: 'Correto! A literatura cinzenta compreende relatórios técnicos, notas técnicas parlamentares e teses não publicadas comercialmente, constituindo fonte primária essencial.',
    },
      {
      id: 'cp-4-2-3',
      pergunta: "Micro-Checkpoint 3: Tipologia das Fontes de Informação de Grogan",
      item: "Segundo a clássica classificação de Denis Grogan, as bibliografias de bibliografias e os guias de literatura especializada enquadram-se na categoria de fontes de informação secundárias.",
      gabarito: 'E',
      justificativa: "Errado! Conforme a tipologia tripartite de Grogan, bibliografias de bibliografias e guias de literatura são fontes TERCIÁRIAS, pois servem primordialmente para localizar fontes secundárias e primárias.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-4-2-1',
        periodo: '1979',
        disciplina: 'Estudo de Fontes',
        focoPrincipal: 'Publicação de "Practical Reference Work" e sistematização das fontes de informação',
        figuraChave: 'Denis Grogan',
      },
      {
        id: 'tl-4-2-2',
        periodo: '2001 / 2010',
        disciplina: 'Fontes de Informação no Brasil',
        focoPrincipal: 'Sistematização de fontes gerais, especializadas e digitais no Brasil',
        figuraChave: 'Murilo Bastos da Cunha e Bernadete Campello',
      },
    ],
    autores: [
      {
        id: 'aut-4-2-1',
        nome: 'Murilo Bastos da Cunha',
        ano: 2001,
        obraPrincipal: 'Para saber mais: fontes de informação em ciência e tecnologia',
        ideiaChave: 'Classificação estruturada de fontes primárias, secundárias e terciárias; critérios de avaliação de bases digitais.',
        chipPegadinha: 'Cunha é a autoridade canônica nacional em tipologia e avaliação de fontes de informação.',
      },
      {
        id: 'aut-4-2-2',
        nome: 'Denis Grogan',
        ano: 1979,
        obraPrincipal: 'Practical Reference Work',
        ideiaChave: 'Distinção funcional das fontes como ferramentas de trabalho no serviço de referência.',
        chipPegadinha: 'Grogan associa as fontes às categorias de perguntas do usuário.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-4-2-1',
        afirmacao: 'As fontes primárias de informação caracterizam-se por apresentarem o conhecimento já selecionado, sintetizado e de localização imediata e simples.',
        gabarito: 'E',
        porQue: 'Essa definição refere-se às fontes secundárias. As fontes primárias contêm o conhecimento inédito, porém frequentemente disperso e difícil de localizar.',
      },
      {
        id: 'peg-4-2-2',
        afirmacao: 'O Diário Oficial da União (DOU) é considerado uma fonte terciária de informação jurídica e administrativa.',
        gabarito: 'E',
        porQue: 'O DOU publica os atos normativos, contratos e despachos originais em sua primeira manifestação formal, constituindo fonte PRIMÁRIA autêntica.',
      },
    ],
  },
};

import type { ModuloFilho } from '../../../domain/types';

export const submodulo24: ModuloFilho = {
  id: 'sub-2-4',
  numero: '2.4',
  titulo: 'Formato MARC 21, Padrão Dublin Core e Ecossistema de Metadados',
  descricaoCurta: 'Arquitetura do formato MARC 21 (Líder, Diretório, Campos 00X e blocos de dados 1XX a 8XX), a família dos cinco formatos MARC, padrão Dublin Core (15 elementos básicos e qualificados), BIBFRAME e protocolos de interoperabilidade (ISO 2709 e Z39.50).',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Henriette Avram', 'Library of Congress', 'Dublin Core Metadata Initiative (DCMI)', 'Stuart Weibel'],
  alertasCebraspe: [
    'Arquitetura física do MARC 21 segundo a ISO 2709: o Líder tem 24 posições fixas de caracteres; o Diretório tem entradas de 12 posições cada (3 dígitos de tag + 4 de tamanho + 5 de ponto de partida). Campos 00X NÃO possuem indicadores nem códigos de subcampo.',
    'No campo 245 (Título e Indicação de Responsabilidade), o 1º indicador define se haverá entrada secundária de título (0 = não gera; 1 = gera secundária); o 2º indicador define o número de caracteres a desprezar na ordenação por causa de artigos iniciais (ex.: "A hora da estrela" -> 2º indicador = 2 para pular "A ").',
    'A família MARC 21 é composta por exatamente CINCO formatos: Bibliográfico, Autoridade, Dados de Coleção (Holdings), Classificação e Informação Comunitária. Não caia em invenções da banca como "MARC de Indexação" ou "MARC de Usuário".',
    'Padrão Dublin Core (DC): composto por 15 elementos básicos universais. O Cebraspe adora afirmar que o DC é incompatível com XML ou com a arquitetura RDF da Web Semântica: ERRADO! O DC é nativamente expresso em XML e RDF.',
    'Comparação entre DC e MARC 21: o elemento "Description" do Dublin Core NÃO equivale ao campo 650 (assunto tópico) do MARC; o 650 equivale ao elemento "Subject". O elemento "Description" equivale ao campo 520 (resumo) ou notas do MARC.',
  ],
  quadroComparativo: {
    titulo: 'Mapeamento Estrutural dos Blocos de Tags do Formato MARC 21',
    colunas: ['Bloco de Tags', 'Função Catalográfica', 'Exemplos Canônicos de Campos', 'Subcampos Comuns'],
    linhas: [
      ['00X', 'Campos de Controle (sem indicadores/subcampos)', '001 (ID), 005 (Data/Hora de transação), 008 (Elementos fixos)', 'Posições fixas de caracteres'],
      ['01X - 09X', 'Números de Controle e Códigos de Classificação', '020 (ISBN), 022 (ISSN), 040 (Agência), 080 (CDU), 082 (CDD)', '$a (número/código), $z (ISBN cancelado)'],
      ['1XX', 'Ponto de Acesso Principal (Entrada Principal)', '100 (Autor pessoal), 110 (Entidade coletiva), 111 (Evento)', '$a (nome), $d (datas de vida), $e (função/relator)'],
      ['2XX', 'Títulos, Edição e Imprenta', '240 (Título uniforme), 245 (Título/Responsabilidade), 250 (Edição), 260/264 (Publicação)', '245: $a (título), $b (subtítulo), $c (responsabilidade); 264: $a (lugar), $b (editor), $c (data)'],
      ['3XX', 'Descrição Física e Atributos de Mídia (RDA)', '300 (Descrição física), 336 (Conteúdo), 337 (Mídia), 338 (Suporte)', '300: $a (extensão), $b (detalhes), $c (dimensões)'],
      ['4XX / 8XX', 'Menção de Série e Séries Secundárias', '490 (Série no item), 830 (Série secundária uniforme)', '$a (título da série), $v (volume/número)'],
      ['5XX', 'Notas Explicativas', '500 (Geral), 502 (Dissertação/Tese), 504 (Bibliografia), 505 (Conteúdo), 520 (Resumo)', '$a (texto da nota)'],
      ['6XX', 'Pontos de Acesso de Assunto', '600 (Pessoa tema), 610 (Entidade tema), 650 (Tópico geral), 651 (Geográfico)', '$a (termo tópico), $x (subdivisão geral), $y (cronológica), $z (geográfica)'],
      ['7XX', 'Pontos de Acesso Secundários (Colaboradores)', '700 (Coautor/Tradutor/Ilustrador), 710 (Entidade colaboradora)', '$a (nome), $e (termo de relação)'],
      ['856', 'Localização e Acesso Eletrônico', '856 (Recurso online / URI permanente)', '$u (URI/URL), $z (nota pública)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Arquitetura do Formato MARC 21 (ISO 2709)

Criado por **Henriette Avram** na Library of Congress na década de 1960, o formato MARC (*Machine-Readable Cataloging*) padronizou o registro bibliográfico legível por máquina para permitir o intercâmbio de registros entre instituições em nível global (Library of Congress, 2000).

#### A. A Estrutura Física do Registro (Padrão ISO 2709)
Todo registro bibliográfico MARC 21 é composto de três seções lógicas:
1. **Líder (*Leader*):**
   * Exatamente **24 posições fixas** de caracteres no início do registro (posições 00 a 23).
   * Fornece parâmetros estruturais essenciais ao computador para decodificar o arquivo: tamanho total do registro (posições 00-04), status do registro (pos. 05), tipo de material (pos. 06: 'a' para material textual), nível bibliográfico (pos. 07: 'm' para monografia) e esquema de codificação (ex.: UTF-8).
2. **Diretório (*Directory*):**
   * Índice gerado automaticamente pelo computador imediatamente após o Líder.
   * É formado por uma série de entradas de tamanho fixo de **12 caracteres** para cada campo variável presente no registro:
     * 3 dígitos: a TAG do campo (ex.: 245);
     * 4 dígitos: o comprimento/tamanho total do campo em caracteres;
     * 5 dígitos: a posição inicial do campo a partir do início da área de dados.
3. **Campos Variáveis (*Variable Fields*):**
   * **Campos Variáveis de Controle (Tags 001 a 008):** Armazenam dados de controle. Não possuem indicadores nem códigos de subcampo. O campo \`008\` possui 40 posições fixas com dados cruciais (data de publicação, país, código de língua).
   * **Campos Variáveis de Dados (Tags 010 a 899):** Possuem dois caracteres iniciais denominados **indicadores** (que fornecem instruções de processamento ao sistema) seguidos de delimitadores de **subcampo** (sinal de dólar \`$\` seguido de letra ou número, ex.: \`$a\`, \`$b\`).
4. **Terminadores de Registro e Campo:**
   * Cada campo termina com o caractere ASCII terminador de campo (1E hex); o registro completo termina com o terminador de registro (1D hex).

---

### 2. A Família dos Cinco Formatos MARC 21

O padrão MARC 21 não se resume ao formato de livros; ele é composto por **cinco formatos coordenados**:
1. *MARC 21 Bibliográfico:* Para descrição e pontos de acesso de itens do acervo.
2. *MARC 21 de Autoridades:* Para controle e padronização de cabeçalhos de pessoas, entidades e assuntos.
3. *MARC 21 para Dados de Coleção / Holdings:* Para registrar dados de inventário físico, localização na estante e fascículos de periódicos.
4. *MARC 21 de Classificação:* Para registrar dados de esquemas de classificação (CDD, CDU, LC).
5. *MARC 21 de Informação Comunitária:* Para registrar dados sobre serviços, programas e recursos de interesse da comunidade local.

---

### 3. O Padrão Dublin Core (DCMI)

Desenvolvido em 1995 na conferência de Dublin (Ohio) sob a liderança de Stuart Weibel (OCLC/NCSA), o **Dublin Core Metadata Element Set (ISO 15836)** foi concebido como um padrão de metadados simples, flexível e de semântica universal para descrever recursos digitais na Web:

* **Os 15 Elementos Básicos do Dublin Core (*Simple Dublin Core*):**
  1. \`Title\` (Título)
  2. \`Creator\` (Criador / Autor)
  3. \`Subject\` (Assunto / Palavras-chave)
  4. \`Description\` (Descrição / Resumo)
  5. \`Publisher\` (Editor / Publicador)
  6. \`Contributor\` (Outro colaborador)
  7. \`Date\` (Data)
  8. \`Type\` (Tipo de recurso, ex.: texto, imagem, software)
  9. \`Format\` (Formato físico ou digital, ex.: \`application/pdf\`)
  10. \`Identifier\` (Identificador unívoco, ex.: URL, DOI, ISBN)
  11. \`Source\` (Fonte original da qual o recurso deriva)
  12. \`Language\` (Língua do conteúdo)
  13. \`Relation\` (Relação com outro recurso correlato)
  14. \`Coverage\` (Cobertura espacial ou temporal)
  15. \`Rights\` (Direitos autorais e termos de licença de uso)

* **Dublin Core Qualificado (*Qualified Dublin Core*):**
  Acrescenta qualificadores aos elementos para aumentar a precisão da recuperação:
  * *Refinamentos de elemento:* tornam o elemento mais específico (ex.: \`Date.created\`, \`Date.modified\`, \`Title.alternative\`).
  * *Esquemas de codificação:* indicam padrões formais de controle (ex.: \`Date\` codificada no perfil **W3CDTF da ISO 8601** \`AAAA-MM-DD\`; \`Subject\` codificado sob o vocabulário da LC ou MeSH).

---

### 4. BIBFRAME e a Transição para a Web Semântica

O **BIBFRAME (Bibliographic Framework Initiative)** foi lançado pela Library of Congress para suceder o formato MARC 21:
* Enquanto o MARC 21 cria um registro monolítico fechado concebido para fitas magnéticas da década de 1960, o BIBFRAME baseia-se em **grafos de conhecimento RDF**.
* As informações são separadas em blocos conectados (Instância, Obra, Item) com identificadores persistentes (URIs), tornando a catalogação diretamente rastreável e legível pelos robôs de busca da Web (Google, Bing).`,
  checkpoints: [
    {
      id: 'cp-2-4-1',
      pergunta: 'Micro-Checkpoint 1: Estrutura Física do MARC 21',
      item: 'No formato MARC 21, o Líder é um campo de tamanho fixo com 24 posições de caracteres, e os campos variáveis de controle 00X não admitem o emprego de indicadores nem de códigos de subcampos.',
      gabarito: 'C',
      justificativa: 'Correto! Os campos 00X são estritamente de controle e caracteres fixos, sem os 2 indicadores e sem subcampos ($a, $b) característicos dos campos 010 a 8XX.',
    },
    {
      id: 'cp-2-4-2',
      pergunta: 'Micro-Checkpoint 2: Correspondência entre Dublin Core e MARC 21',
      item: 'Em termos de equivalência de metadados, o elemento Description do Dublin Core corresponde funcionalmente ao campo 650 (assunto tópico) do formato MARC 21.',
      gabarito: 'E',
      justificativa: 'Errado! O campo 650 do MARC 21 equivale ao elemento "Subject" do Dublin Core. O elemento "Description" equivale ao campo 520 (resumo) ou notas gerais.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-2-4-1',
        periodo: '1965 / 1968',
        disciplina: 'Automação Bibliográfica',
        focoPrincipal: 'Criação do formato MARC I e II e padronização pela Library of Congress',
        figuraChave: 'Henriette Avram',
      },
      {
        id: 'tl-2-4-2',
        periodo: '1995 / 1999',
        disciplina: 'Metadados na Web',
        focoPrincipal: 'Desenvolvimento do Dublin Core (15 elementos) e fusão do USMARC com CAN/MARC dando origem ao MARC 21',
        figuraChave: 'Stuart Weibel e Library of Congress',
      },
      {
        id: 'tl-2-4-3',
        periodo: '2012 / Presente',
        disciplina: 'Web Semântica / Linked Data',
        focoPrincipal: 'Lançamento do projeto BIBFRAME para transição dos registros MARC para grafos RDF',
        figuraChave: 'Library of Congress Network Development',
      },
    ],
    autores: [
      {
        id: 'aut-2-4-1',
        nome: 'Henriette Avram',
        ano: 1968,
        obraPrincipal: 'The MARC Pilot Project',
        ideiaChave: 'Pioneira da automação de bibliotecas, arquiteta da estrutura física do MARC e da norma ISO 2709.',
        chipPegadinha: 'O formato MARC foi desenhado pela Library of Congress, não pela British Library nem pela IFLA.',
      },
      {
        id: 'aut-2-4-2',
        nome: 'Stuart Weibel',
        ano: 1995,
        obraPrincipal: 'The Dublin Core: A simple content description format for electronic resources',
        ideiaChave: 'Padrão de 15 elementos de metadados universais e extensíveis para descoberta na Web.',
        chipPegadinha: 'Dublin Core é nativo da Web e opera com XML e RDF.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-2-4-1',
        afirmacao: 'No campo 245 do formato MARC 21, o segundo indicador é utilizado para registrar o número da edição da obra descrita.',
        gabarito: 'E',
        porQue: 'O segundo indicador do campo 245 informa a quantidade de caracteres a desprezar na alfabetação em virtude de artigos iniciais (ex.: 2 para "A ", 4 para "The "). A edição fica no campo 250.',
      },
      {
        id: 'peg-2-4-2',
        afirmacao: 'O formato MARC 21 foi criado com o objetivo de padronizar a apresentação visual e estética de fichas catalográficas impressas em papel.',
        gabarito: 'E',
        porQue: 'O MARC 21 é um formato de intercâmbio de dados legíveis por máquina (computador), voltado à automação e transferência de registros entre sistemas informatizados.',
      },
    ],
  },
};

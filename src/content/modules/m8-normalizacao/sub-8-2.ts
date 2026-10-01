import type { ModuloFilho } from '../../../domain/types';

export const submodulo82: ModuloFilho = {
  id: 'sub-8-2',
  numero: '8.2',
  titulo: 'ABNT NBR 10520: Citações em Documentos (Versão 2023)',
  descricaoCurta: 'A histórica atualização da ABNT NBR 10520:2023, o fim da caixa alta obrigatória entre parênteses, citação direta curta (até 3 linhas entre aspas) vs. longa (recuo de 4 cm, sem aspas e entrelinha simples), citação indireta, citação de citação (apud) e expressões latinas.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro CB-014', 'Antônio Agenor Briquet de Lemos'],
  alertasCebraspe: [
    'A MAIOR MUDANÇA DA NBR 10520:2023: o nome do autor em chamadas autor-data agora é grafado em letras maiúsculas e minúsculas TANTO fora QUANTO DENTRO dos parênteses (ex.: "(Silva, 2023, p. 10)" e NÃO mais "(SILVA, 2023, p. 10)"). A caixa alta obrigatória entre parênteses foi extinta!',
    'Citação Direta Curta (até 3 linhas): inserida na continuidade do parágrafo, OBRIGATORIAMENTE entre aspas duplas. Aspas simples são usadas apenas para citações que já existiam no interior do texto citado.',
    'Citação Direta Longa (mais de 3 linhas): deve ser destacada em parágrafo próprio, com recuo de EXATAMENTE 4 cm da margem esquerda, com tamanho de fonte menor (ex.: corpo 10), espaçamento interlinear simples e SEM QUALQUER USO DE ASPAS.',
    'Indicação de página: na citação direta (curta ou longa), a indicação da página consultada é OBRIGATÓRIA (ex.: "Silva, 2023, p. 45"). Na citação indireta (paráfrase), a indicação de página é FACULTATIVA pela norma.',
    'Expressões latinas de notas de rodapé (ibid., op. cit., passim, loc. cit.): só podem ser empregadas em notas de rodapé quando se adota o sistema numérico de citação; elas NÃO podem ser utilizadas no corpo do texto sob o sistema autor-data (com exceção exclusiva do "apud").',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Modalidades de Citação conforme a ABNT NBR 10520:2023',
    colunas: ['Modalidade de Citação', 'Critério de Extensão', 'Regras de Formatação Tipográfica', 'Exemplo Oficial Formatado'],
    linhas: [
      ['Citação Direta Curta', 'Até três linhas inteiras', 'Inserida no próprio parágrafo textual, entre aspas duplas, fonte e espaçamento normais', 'Segundo Vergueiro (2020, p. 15), "o acervo deve refletir a comunidade".'],
      ['Citação Direta Longa', 'Mais de três linhas', 'Bloco isolado, recuo de 4 cm da margem esquerda, entrelinha simples, fonte menor (10pt), SEM aspas', 'A biblioteca parlamentar atua como órgão de consultoria técnica (...). (Almeida, 2024, p. 88).'],
      ['Citação Indireta (Paráfrase)', 'Qualquer extensão', 'Redigida com as palavras do próprio autor do trabalho, sem aspas e sem recuo especial', 'O planejamento bibliotecário deve integrar-se aos objetivos institucionais da Casa (Maciel, 2022).'],
      ['Citação de Citação (*apud*)', 'Citação de segunda mão', 'Utiliza a expressão latina *apud* (citado por), indicando autor original e obra consultada', 'Otlet (1934 apud Briet, 1951, p. 7) afirmava a universalidade do documento.'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Nova ABNT NBR 10520:2023 e o Fim da Caixa Alta

Em julho de 2023, a ABNT publicou a aguardada revisão histórica da **NBR 10520** (*Informação e Documentação — Citações em Documentos — Apresentação*, documento presente em nosso repositório \`ABNT/Abnt_nbr_10520_2023.pdf\`), revogando a versão de 2002:

#### A Grande Ruptura da Versão 2023:
* **Padronização em Letras Maiúsculas e Minúsculas:**
  * Na norma antiga (2002), se o autor estivesse fora dos parênteses, usava-se maiúsculas/minúsculas (\`Conforme Silva (2002)\`), mas se estivesse dentro dos parênteses, era obrigatório o uso de caixa alta total (\`(SILVA, 2002)\`).
  * **Na NBR 10520:2023, essa distinção artificial foi abolida!** A indicação de autoria agora é grafada em **letras maiúsculas e minúsculas em qualquer situação**, seja dentro, seja fora dos parênteses:
    * *Dentro dos parênteses:* \`(Silva, 2023, p. 15)\` ou \`(Almeida; Maciel, 2023)\`.
    * *No corpo do texto:* \`Segundo Silva (2023, p. 15)...\`
* Essa mudança harmoniza a norma brasileira com o padrão internacional ISO e com os manuais de estilo modernos (APA, Chicago), sendo a pegadinha predileta das bancas em 2024-2026.

---

### 2. Modalidades de Citação e Formatação Estrita

#### A. Citação Direta Curta
* Transcrição textual literal e exata do documento original com **extensão de até três linhas**.
* Permanece inserida normalmente no fluxo contínuo do parágrafo, devendo vir **obrigatoriamente entre aspas duplas**.
* A indicação da autoria, do ano e da página consultada (ou localização) é **compulsória**.
* Caso o trecho original citado já contenha palavras entre aspas, estas são convertidas em **aspas simples** na transcrição.

#### B. Citação Direta Longa
* Transcrição literal com **mais de três linhas de extensão**.
* **Regras Estritas de Apresentação:**
  1. Deve ser destacada em parágrafo próprio independente;
  2. Aplicar **recuo uniforme de exatamente 4 cm** a partir da margem esquerda;
  3. Utilizar **tamanho de fonte menor** do que a do texto principal (geralmente corpo 10 ou 11);
  4. O espaçamento entre linhas deve ser **simples** (enquanto o texto principal usa espaçamento 1,5);
  5. **NÃO USAR ASPAS DUPLAS NEM SIMPLES** em nenhuma hipótese no bloco recuado.

#### C. Citação Indireta (Livre / Paráfrase)
* Texto baseado na obra consultada, reproduzindo suas ideias com as palavras do próprio pesquisador.
* Não leva aspas nem recuo. A menção do ano de publicação é obrigatória; a indicação da página é facultativa.

#### D. Citação de Citação (*apud*)
* Utilizada quando o pesquisador não teve acesso direto ao documento original, citando-o por intermédio de outro autor que o transcreveu.
* Formato: \`Autor Original (Ano original apud Autor Consultado, Ano da obra consultada, página)\`.
* Exemplo: \`Cutter (1876 apud Mey, 2009, p. 45)\`.
* Nas referências finais ao término do trabalho, referencia-se obrigatoriamente a **obra efetivamente consultada** (no caso, Mey).

---

### 3. Sistemas de Chamada e Expressões Latinas de Notas

* **Sistemas de Chamada no Texto:** O trabalho acadêmico deve optar por um único sistema:
  1. *Sistema Autor-Data:* As fontes são indicadas pelo sobrenome do autor seguido da data no próprio texto.
  2. *Sistema Numérico:* As fontes são indicadas por algarismos arábicos em expoente (\`¹\`) ou entre parênteses (\`(1)\`), remetendo a uma lista numérica ordenada de referências ou às notas de rodapé.
* **Expressões Latinas em Notas de Rodapé:**
  São permitidas **exclusivamente no rodapé** para evitar repetições quando se utiliza o sistema numérico:
  * \`Idem\` ou \`Id.\`: do mesmo autor.
  * \`Ibidem\` ou \`Ibid.\`: na mesma obra e mesmo autor.
  * \`Opus citatum\` ou \`Op. cit.\`: na obra citada anteriormente.
  * \`Passim\`: aqui e ali (a informação encontra-se dispersa em várias páginas do documento).
  * \`Loco citato\` ou \`Loc. cit.\`: no mesmo lugar/página citado anteriormente.
  * \`Sequentia\` ou \`et seq.\`: e seguintes (ex.: p. 15 et seq.).`,
  checkpoints: [
    {
      id: 'cp-8-2-1',
      pergunta: 'Micro-Checkpoint 1: A Nova NBR 10520:2023 e Grafia de Autores',
      item: 'Na versão atualizada da ABNT NBR 10520:2023, o sobrenome do autor indicado dentro de parênteses no sistema autor-data deve ser grafado em letras maiúsculas e minúsculas, não sendo mais exigida a antiga caixa alta integral.',
      gabarito: 'C',
      justificativa: 'Correto! A norma de 2023 eliminou expressamente a obrigatoriedade da caixa alta entre parênteses, adotando maiúsculas e minúsculas uniformes.',
    },
    {
      id: 'cp-8-2-2',
      pergunta: 'Micro-Checkpoint 2: Formatação da Citação Direta Longa',
      item: 'Em trabalhos acadêmicos estruturados pelas normas da ABNT, as citações diretas com mais de três linhas devem ser apresentadas com recuo de 4 cm da margem esquerda, espaçamento simples, tamanho de fonte menor e delimitadas por aspas duplas.',
      gabarito: 'E',
      justificativa: 'Errado! Citações diretas longas com mais de três linhas NÃO LEVAM ASPAS em nenhuma hipótese. O próprio recuo de 4 cm e a fonte menor já indicam a citação.',
    },
      {
      id: 'cp-8-2-3',
      pergunta: "Micro-Checkpoint 3: Citações Diretas Longas conforme a ABNT NBR 10520",
      item: "Conforme a ABNT NBR 10520, citações diretas com mais de três linhas devem ser destacadas com recuo de 4 cm da margem esquerda, com fonte em tamanho menor que o do texto principal e sem aspas.",
      gabarito: 'C',
      justificativa: "Certo! Esta é a regra canônica expressa na norma: bloco recuado a 4 cm, espaçamento simples, tamanho de fonte menor (usualmente 10 ou 11) e sem o uso de aspas tipográficas.",
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-8-2-1',
        periodo: '2002',
        disciplina: 'NBR 10520:2002',
        focoPrincipal: 'Vigência do padrão com caixa alta obrigatória para autores entre parênteses: (SILVA, 2002)',
        figuraChave: 'ABNT',
      },
      {
        id: 'tl-8-2-2',
        periodo: 'Julho de 2023',
        disciplina: 'NBR 10520:2023',
        focoPrincipal: 'Revolução normativa: fim da caixa alta e padronização em maiúsculas e minúsculas: (Silva, 2023)',
        figuraChave: 'Comitê Brasileiro CB-014',
      },
    ],
    autores: [
      {
        id: 'aut-8-2-1',
        nome: 'ABNT CB-014',
        ano: 2023,
        obraPrincipal: 'ABNT NBR 10520: Citações em documentos — Apresentação',
        ideiaChave: 'Regras de citações diretas (curtas e longas), indiretas, apud e fim da caixa alta nos parênteses.',
        chipPegadinha: 'A indicação de página é obrigatória na citação direta, mas facultativa na citação indireta.',
      },
      {
        id: 'aut-8-2-2',
        nome: 'Júnia Lessa França e Ana Cristina de Vasconcellos',
        ano: 2023,
        obraPrincipal: 'Manual de Normalização de Publicações Técnico-Científicas',
        ideiaChave: 'Referência bibliográfica canônica nos cursos de Biblioteconomia brasileira para aplicação de citações e referências acadêmicas.',
        chipPegadinha: 'Nas citações com sistema autor-data, o nome do autor fora dos parênteses ou dentro agora segue exatamente a mesma grafia mista (Silva, 2023).',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-8-2-1',
        afirmacao: 'Na citação de citação com a utilização da expressão latina apud, a lista de referências ao final do artigo deve conter obrigatoriamente a referência completa apenas da obra original que não foi consultada.',
        gabarito: 'E',
        porQue: 'A lista de referências deve conter obrigatoriamente a obra EFETIVAMENTE CONSULTADA pelo pesquisador (a que contém o apud).',
      },
      {
        id: 'peg-8-2-2',
        afirmacao: 'No sistema autor-data de citação no corpo do texto, é permitido o emprego de expressões latinas como "ibid." e "op. cit." no interior dos parágrafos.',
        gabarito: 'E',
        porQue: 'As expressões como ibid., op. cit. e loc. cit. são de uso restrito a NOTAS DE RODAPÉ (sistema numérico); no texto autor-data só se admite o "apud".',
      },
    ],
  },
};

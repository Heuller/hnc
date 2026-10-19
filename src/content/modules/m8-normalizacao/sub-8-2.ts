import type { ModuloFilho } from '../../../domain/types';

export const submodulo82: ModuloFilho = {
  id: 'sub-8-2',
  numero: '8.2',
  editalRef: 'Bloco D - Item 5.3',
  preRequisitos: ["sub-8-1"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-8-1",
          "titulo": "NBR 6023 (Referências)",
          "motivo": "Chamadas no texto pelo sistema autor-data e numérico."
      }
  ],
  titulo: 'ABNT NBR 10520: Citações em Documentos (Versão 2023)',
  antesDeLer: [
    {
      termo: 'ABNT NBR 10520:2023',
      definicao: 'Versão atualizada da norma de citações que aboliu a caixa alta nos sobrenomes dos autores no sistema autor-data no texto.',
      exemploBiblioteca: 'Mudança crucial: a citação no texto agora é grafada \'(Silva, 2023, p. 10)\' e não mais \'(SILVA, 2023, p. 10)\'.',
    },
    {
      termo: 'Citação Direta vs. Indireta',
      definicao: 'Direta é a transcrição textual exata; indireta é a paráfrase livre das ideias do autor consultado sem transcrição literal.',
      exemploBiblioteca: 'Uso de citação indireta em pareceres legislativos para resumir a posição de consagrados juristas constitucionais.',
    },
    {
      termo: 'Citação Direta Longa',
      definicao: 'Trecho com mais de três linhas que deve ser destacado em parágrafo próprio com recuo de 4 cm da margem esquerda e fonte menor.',
      exemploBiblioteca: 'Formatação do voto do relator com recuo de 4 cm para transcrever dispositivo de tratado internacional.',
    },
    {
      termo: 'Expressões Latinas em Notas',
      definicao: 'Termos convencionais como \'Ibidem\' (na mesma obra), \'Op. cit.\' (na obra citada) e \'Apud\' (citado por) no sistema numérico.',
      exemploBiblioteca: 'Uso correto de \'apud\' na citação de uma emenda histórica acessada apenas por meio de obra de terceiros.',
    },
  ],
  descricaoCurta: 'A histórica atualização da ABNT NBR 10520:2023, o fim da caixa alta obrigatória entre parênteses, citação direta curta (até 3 linhas entre aspas) vs. longa (recuo de 4 cm, sem aspas e entrelinha simples), citação indireta, citação de citação (apud) e expressões latinas.',
  tempoEstimadoMinutos: 13,
  autoresChave: ['Associação Brasileira de Normas Técnicas (ABNT)', 'Comitê Brasileiro CB-014', 'Antônio Agenor Briquet de Lemos', 'Júnia Lessa França'],
  alertasCebraspe: [
    'A MAIOR MUDANÇA DA NBR 10520:2023: o nome do autor em chamadas autor-data agora é grafado em letras maiúsculas e minúsculas (caixa alta e baixa) TANTO FORA QUANTO DENTRO dos parênteses (ex.: "(Silva, 2023, p. 10)" e NÃO mais "(SILVA, 2023, p. 10)"). A antiga caixa alta obrigatória entre parênteses foi formalmente extinta pela norma!',
    'Citação Direta Curta (até 3 linhas): inserida na continuidade do parágrafo, OBRIGATORIAMENTE entre aspas duplas. Aspas simples são usadas apenas para citações secundárias que já constavam originalmente dentro do trecho citado.',
    'Citação Direta Longa (mais de 3 linhas): deve ser destacada em parágrafo próprio independente, com recuo de EXATAMENTE 4 cm da margem esquerda, com tamanho de fonte menor (ex.: corpo 10 ou 11), espaçamento interlinear simples e SEM QUALQUER USO DE ASPAS.',
    'Indicação de página: na citação direta (seja curta ou longa), a indicação da página consultada (ou localização precisa) é OBRIGATÓRIA (ex.: "Silva, 2023, p. 45"). Na citação indireta (paráfrase livre), a indicação de página é FACULTATIVA pela norma.',
    'Destaques e Supressões: supressões de trechos são indicadas por reticências entre colchetes "[...]"; quando o pesquisador destaca uma palavra na citação direta, deve indicar no final da chamada "(grifo nosso)"; se o destaque já era original do autor consultado, indica-se "(grifo do autor)".',
    'Expressões latinas de notas de rodapé (ibid., op. cit., passim, loc. cit., id.): só podem ser empregadas em notas de rodapé no sistema numérico de citação; elas NÃO podem ser utilizadas no corpo do texto sob o sistema autor-data (com exceção exclusiva da expressão "apud").',
  ],
  quadroComparativo: {
    titulo: 'Comparação das Modalidades de Citação conforme a ABNT NBR 10520:2023',
    colunas: ['Modalidade de Citação', 'Critério de Extensão', 'Regras de Formatação Tipográfica', 'Exemplo Oficial Formatado', 'Pegadinha Cebraspe Mapeada'],
    linhas: [
      ['Citação Direta Curta', 'Até três linhas inteiras de texto', 'Inserida no próprio parágrafo textual, entre aspas duplas, fonte e entrelinha normais', 'Segundo Vergueiro (2020, p. 15), "o acervo deve refletir a comunidade".', 'Colocar citação curta em bloco recuado com fonte reduzida (ERRADO: só até 3 linhas fica no parágrafo).'],
      ['Citação Direta Longa', 'Mais de três linhas inteiras', 'Bloco isolado, recuo de 4 cm da margem esquerda, entrelinha simples, fonte menor (10pt), SEM aspas', 'A biblioteca parlamentar atua como órgão de consultoria técnica (...). (Almeida, 2024, p. 88).', 'Colocar aspas no bloco recuado a 4 cm (ERRADO: citação longa NUNCA leva aspas).'],
      ['Citação Indireta (Paráfrase)', 'Qualquer extensão de texto', 'Redigida com as palavras do autor do trabalho, sem aspas e sem recuo especial', 'O planejamento bibliotecário deve integrar-se aos objetivos institucionais da Casa (Maciel, 2022).', 'Afirmar que a citação indireta exige compulsoriamente a indicação da página (FALSO: é facultativa).'],
      ['Citação de Citação (*apud*)', 'Citação de segunda mão', 'Utiliza a expressão latina *apud* (citado por), indicando autor original e obra consultada', 'Otlet (1934 apud Briet, 1951, p. 7) afirmava a universalidade do documento.', 'Referenciar no final do trabalho apenas a obra que não foi lida (FALSO: referencia-se a consultada).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Nova ABNT NBR 10520:2023 e o Fim da Caixa Alta

Em julho de 2023, a ABNT publicou a aguardada revisão histórica da norma **ABNT NBR 10520** (*Informação e Documentação — Citações em Documentos — Apresentação*), revogando a clássica versão de 2002 que vigorava há mais de duas décadas:

#### A Grande Ruptura Normativa da Edição 2023:
* **Padronização em Letras Maiúsculas e Minúsculas:**
  * No padrão antigo (2002), havia uma exigência bifásica: fora dos parênteses usava-se maiúsculas e minúsculas (\`Conforme Silva (2002)\`), mas dentro dos parênteses era obrigatório o uso de caixa alta total (\`(SILVA, 2002, p. 10)\`).
  * **Na NBR 10520:2023, essa exigência de caixa alta entre parênteses foi formalmente extinta!**
  * O sobrenome do autor agora é grafado em **letras maiúsculas e minúsculas em qualquer posição**, tanto fora quanto dentro dos parênteses:
    * *Dentro dos parênteses:* \`(Silva, 2023, p. 15)\` ou \`(Almeida; Maciel, 2023)\`.
    * *No corpo do parágrafo:* \`Segundo Silva (2023, p. 15)...\`
    * *Entidades e órgãos institucionais:* \`(Brasil, 2021)\` ou \`(Câmara dos Deputados, 2023)\`.
* Essa atualização alinhou a normalização brasileira aos padrões internacionais da ISO e aos manuais internacionais de estilo (APA, Chicago, Vancouver), constituindo o ponto de maior incidência em bancas examinadoras contemporâneas.

---

### 2. Modalidades de Citação e Regras Tipográficas

\`\`\`tree
TITLE: Modalidades de Citação e Regras Tipográficas (ABNT NBR 10520:2023)
- Citações em Documentos (NBR 10520:2023) | Menção no texto de informação colhida de outra fonte
  - Citação Direta Curta (Até 3 Linhas) | Transcrição textual exata mantida no corpo do parágrafo
    - Pontuação Tipográfica | Inserida obrigatoriamente entre aspas duplas ("...")
    - Dados Obrigatórios | Indicação de autor, ano e página consultada (ex: Silva, 2023, p. 15)
    - Aspas Internas | Aspas originais do texto citado convertem-se em aspas simples ('...')
  - Citação Direta Longa (Mais de 3 Linhas) | Transcrição textual destacada do parágrafo
    - Recuo Gráfico | Bloco recuado a 4 cm da margem esquerda da página
    - Tipografia e Espaçamento | Tamanho de fonte menor (ex: 10 ou 11 pt) e entrelinhas simples
    - Supressão de Aspas | SEM aspas duplas; indicação de autor, ano e página obrigatória
  - Citação Indireta (Paráfrase / Livre) | Texto redigido com as próprias palavras do pesquisador
    - Ausência de Aspas | Redação autoral livre baseada na ideia do autor consultado
    - Dados Obrigatórios | Indicação de autor e ano obrigatória; número de página é facultativo
  - Citação de Citação (apud) | Citação direta ou indireta de documento ao qual não se teve acesso
    - Expressão latina apud | 'Citado por': Autor Original (ano) apud Autor Consultado (ano, p.)
    - Lista de Referências | Na lista final, referencia-se OBRIGATORIAMENTE a obra consultada (efetivamente lida)
\`\`\`

#### A. Citação Direta Curta
* Transcrição textual exata das palavras do autor consultado com **extensão de até três linhas inteiras**.
* Permanece inserida normalmente no fluxo contínuo do parágrafo textual.
* Deve vir **obrigatoriamente entre aspas duplas (\`"\`)**.
* Caso o fragmento original citado já possua palavras entre aspas, estas são convertidas em **aspas simples (\`'\`)** na transcrição.
* A indicação da autoria, do ano de publicação e da **página consultada** (ou localização precisa no suporte) é **compulsória**:
  * Ex.: De acordo com Vergueiro (2010, p. 25), "a seleção deve ser entendida como um processo de decisão contínuo".

#### B. Citação Direta Longa
* Transcrição literal de trecho com **mais de três linhas inteiras de extensão**.
* **Requisitos Tipográficos Exigíveis e Cumulativos:**
  1. Deve ser destacada em parágrafo próprio independente;
  2. Aplicar **recuo uniforme de exatamente 4 cm da margem esquerda** do texto;
  3. Utilizar **tamanho de fonte menor** do que a fonte do texto principal (usualmente corpo 10 ou 11);
  4. O espaçamento entre linhas deve ser **simples** (enquanto o corpo do texto usa espaçamento 1,5);
  5. **NÃO USAR ASPAS EM NENHUMA HIPÓTESE** (nem simples nem duplas). O próprio recuo de 4 cm e a redução do corpo tipográfico já funcionam como sinalizador gráfico da transcrição;
  6. A menção de autor, ano e **página é obrigatória**:
     * Ex.: Ao final do bloco recuado: \`...fim da citação direta longa. (Lancaster, 1993, p. 88).\`

#### C. Citação Indireta (Livre / Paráfrase)
* Texto baseado na obra consultada, no qual o pesquisador reproduz fielmente as ideias e argumentos do autor com suas próprias palavras e estilo redacional.
* Não leva aspas nem recuo de margem.
* A indicação do autor e do ano é obrigatória; a **indicação da página consultada é facultativa** pela norma (embora recomendada).
  * Ex.: A gestão do conhecimento articula fluxos informais e capital humano nas organizações (Choo, 2003).

#### D. Citação de Citação (*apud*)
* Utilizada quando o pesquisador não teve acesso físico ou digital ao documento original, citando-o por intermédio de outro autor que o transcreveu em sua obra:
* A expressão latina **apud** significa "junto a", "em", "citado por" (grafa-se em fonte redonda ou itálica).
* Formato Canônico:
  $\\text{Autor da Ideia Original (Ano original } \\textbf{apud} \\text{ Autor Consultado, Ano consultado, página)}$
  * Ex.: Segundo Otlet (1934 *apud* Briet, 1951, p. 7), o documento abrange múltiplos suportes informacionais.
* **Regra Crítica das Referências Finais:** Na lista de referências ao término do trabalho acadêmico ou relatório técnico, **deve constar obrigatoriamente a referência completa da obra efetivamente consultada** (no exemplo, Briet, 1951). Faculta-se mencionar a obra original em nota de rodapé informativa.

---

### 3. Supressões, Destaques, Interpolações e Erros

* **Supressões (*omissões de trechos da citação*):** Indicadas por reticências entre colchetes: \`[...]\`.
* **Interpolações, Acréscimos ou Comentários:** Inseridos entre colchetes no interior da citação: \`[grifo nosso]\`, \`[tradução nossa]\`, \`[nota do autor]\`.
* **Incorreções no Texto Original Citado:** Quando o texto original contém um erro ortográfico, factual ou gramatical e o pesquisador deseja manter a fidelidade da transcrição, insere-se a expressão latina \`[sic]\` (assim mesmo) imediatamente após o erro entre colchetes.
* **Indicação de Destaques Tipográficos:**
  * Quando o pesquisador decide destacar (negrito ou itálico) uma palavra ou frase na citação direta que não estava destacada no original, acrescenta-se na chamada: \`(grifo nosso)\` ou \`(grifo próprio)\`.
  * Se o destaque gráfico já pertencia ao texto original do autor consultado, registra-se: \`(grifo do autor)\`.

---

### 4. Sistemas de Chamada e as Expressões Latinas de Rodapé

A norma disciplina que todo documento acadêmico ou técnico deve escolher **um único sistema de chamada** consistente para todo o trabalho:

#### A. O Sistema Autor-Data vs. Sistema Numérico
1. **Sistema Autor-Data:** As fontes são identificadas no corpo do texto pelo sobrenome do autor seguido da data de publicação e página: \`(Mey, 2009, p. 45)\`.
2. **Sistema Numérico:** A citação é indicada por numeração única sequencial em algarismos arábicos em expoente (\`¹\`) ou entre parênteses (\`(1)\`), que remete a uma lista ordenada de referências ao final ou a notas de rodapé de referência.
* *Incompatibilidade Absoluta:* A NBR 10520 **proíbe o uso simultâneo do sistema autor-data e do sistema numérico** para a citação de fontes no corpo do mesmo trabalho.

#### B. Expressões Latinas de Notas de Rodapé
São admitidas **exclusivamente em notas de rodapé de referência** no sistema numérico, para evitar repetições exaustivas:
* \`Idem\` ou \`Id.\`: do mesmo autor (utilizado quando se cita outra obra do mesmo autor imediatamente anterior).
* \`Ibidem\` ou \`Ibid.\`: na mesma obra e mesmo autor (quando se cita a mesma obra em página igual ou diferente imediatamente após).
* \`Opus citatum\` ou \`Op. cit.\`: na obra citada anteriormente (usado para o mesmo autor quando há outras notas intercaladas).
* \`Passim\`: aqui e ali (indica que a matéria encontra-se dispersa em várias passagens da obra citada).
* \`Loco citato\` ou \`Loc. cit.\`: no mesmo lugar / na mesma página citada anteriormente.
* \`Sequentia\` ou \`et seq.\`: e páginas seguintes (ex.: p. 15 et seq.).
* *Atenção Cebraspe:* No corpo do texto sob o sistema autor-data, **nenhuma dessas expressões latinas é permitida**, com exceção única do **apud**.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **NBR 6023 (Referências) (sub-8-1):** Chamadas no texto pelo sistema autor-data e numérico.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **ABNT NBR 10520 (Versão Atualizada em 2023)** regula a apresentação de citações em documentos acadêmicos e técnicos:
1. **Tipologia das Citações:**
   - **Citação Direta (Literal):** Transcrição textual exata das palavras do autor consultado.
     - *Curta (até 3 linhas):* Inserida no fluxo normal do parágrafo, incorporada entre aspas duplas (\`"..."\`).
     - *Longa (mais de 3 linhas):* Destacada em parágrafo isolado, com **recuo de 4 cm da margem esquerda**, tamanho de fonte menor (geralmente corpo 10), espaçamento entrelinhas simples e **sem aspas**!
   - **Citação Indireta (Paráfrase):** Texto redigido com as próprias palavras do pesquisador, baseado na ideia do autor original. Dispensa aspas e recuo; exige indicação da autoria e ano.
   - **Citação de Citação (*Apud*):** Citação de um texto ao qual o pesquisador não teve acesso direto à fonte original, utilizando a expressão latina *apud* (citado por). Ex.: \`(KUNH, 1962 apud POPPER, 1974)\`.
2. **A Grande Mudança da NBR 10520:2023 (Atenção Máxima no Cebraspe!):**
   - Na versão anterior (2002), chamadas entre parênteses exigiam caixa alta completa: \`(SILVA, 2020)\`.
   - Na versão **NBR 10520:2023**, a ABNT aboliu a caixa alta obrigatória nos parênteses! Agora, tanto no fluxo do texto quanto entre parênteses, os nomes devem ser grafados em **letras maiúsculas e minúsculas**:
     - *No texto:* Segundo Silva (2023, p. 15)...
     - *Entre parênteses:* ...(Silva, 2023, p. 15).
   - O uso de caixa alta total \`(SILVA, 2023)\` deixou de ser o padrão obrigatório!
3. **Sistemas de Chamada:**
   - Sistema Autor-Data vs. Sistema Numérico (deve-se adotar um único sistema em todo o documento).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Citação Direta Longa em Relatório de CPI):** O relator de uma CPI transcreve um parecer jurídico de 8 linhas de um jurista renomado. O bibliotecário formata o texto conforme a NBR 10520: recuo de 4 cm da margem esquerda, fonte tamanho 10, espaçamento entrelinhas simples, sem aspas, e ao final a chamada: \`(Bandeira de Mello, 2023, p. 142)\`.
- **Cenário 2 (Uso Racional do Apud em Pesquisa Histórica):** Um consultor parlamentar cita uma frase célebre do Visconde de Uruguai de 1855 citada na biografia escrita por Afonso Arinos de 1970. O bibliotecário registra: \`(Uruguai, 1855 apud Arinos, 1970, p. 88)\` e assegura que nas referências finais constará a obra de Arinos (a obra efetivamente consultada).
- **Cenário 3 (Atualização para a NBR 10520:2023 nas Edições Câmara):** A equipe editorial da Câmara dos Deputados revisa os modelos de teses e estudos legislativos para abolir a antiga caixa alta \`(SILVA, 2018)\`, aplicando o novo padrão uniforme \`(Silva, 2018)\` conforme a revisão 2023 da ABNT.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Citação | Extensão / Formato | Recuo e Aspas | Exemplo Atualizado NBR 10520:2023 |
| :--- | :--- | :--- | :--- |
| **Direta Curta** | Até 3 linhas | No fluxo do texto / **Com aspas duplas** | Conforme Silva (2023, p. 12), "o parlamento debate..." |
| **Direta Longa** | Mais de 3 linhas | **Recuo de 4 cm** / Fonte menor / **Sem aspas** | Parágrafo isolado com recuo de 4 cm (Silva, 2023, p. 45) |
| **Indireta** | Qualquer extensão | No fluxo do texto / Sem aspas / Sem recuo | Para Silva (2023), o controle de legalidade é essencial. |
| **Apud** | Citação de citação | Autor original *apud* autor consultado | (Weber, 1922 apud Bendix, 1986, p. 30) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Aspas em Citação Longa:** A banca coloca recuo de 4 cm com aspas duplas ao mesmo tempo. **Gabarito: ERRADO.** Citação longa com recuo de 4 cm não leva aspas em nenhuma hipótese!
- **Obra que vai para as Referências no Apud:** A banca afirma que, ao usar \`(Kuhn, 1962 apud Popper, 1974)\`, a única obra obrigatória na lista de referências final é a de Kuhn. **Gabarito: ERRADO.** A obra que deve obrigatoriamente constar nas referências finais é a que foi **efetivamente lida e consultada** pelo autor (isto é, a obra de Popper). A citação de Kuhn entra apenas em nota de rodapé opcional.
- **Indicação de Página em Citação Indireta:** Dizer que a indicação do número da página é estritamente obrigatória na citação indireta (paráfrase). **Gabarito: ERRADO.** Na citação indireta a página é opcional; ela é obrigatória apenas na citação direta!

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT).** *ABNT NBR 10520:2023: Informação e documentação — Citações em documentos — Apresentação*. Rio de Janeiro: ABNT, 2023. (A nova versão da norma de citações).
- **MEDEIROS, João Bosco.** *Redação científica*. 13. ed. São Paulo: Atlas, 2019.
- **FRANÇA, Júnia Lessa et al.** *Manual de normalização de publicações técnico-científicas*. 10. ed. Belo Horizonte: Ed. UFMG, 2019.
- **CÂMARA DOS DEPUTADOS.** *Manual de Redação e Padronização Bibliográfica da Consultoria Legislativa*. Brasília: Edições Câmara, 2023.
- **ECO, Umberto.** *Como se faz uma tese*. 25. ed. São Paulo: Perspectiva, 2014.`,
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
      pergunta: 'Micro-Checkpoint 3: Citações Diretas Longas conforme a ABNT NBR 10520',
      item: 'Conforme a ABNT NBR 10520, citações diretas com mais de três linhas devem ser destacadas com recuo de 4 cm da margem esquerda, com fonte em tamanho menor que o do texto principal e sem aspas.',
      gabarito: 'C',
      justificativa: 'Certo! Esta é a regra canônica expressa na norma: bloco recuado a 4 cm, espaçamento simples, tamanho de fonte menor (usualmente 10 ou 11) e sem o uso de aspas tipográficas.',
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
        focoPrincipal: 'Revolução normativa: extinção da caixa alta entre parênteses e padronização em maiúsculas e minúsculas: (Silva, 2023)',
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
      {
        id: 'peg-8-2-3',
        afirmacao: 'Conforme a ABNT NBR 10520:2023, nas citações diretas com mais de três linhas, além do recuo de 4 cm e fonte menor, é obrigatório o uso de aspas duplas no início e ao término do bloco transcrito.',
        gabarito: 'E',
        porQue: 'Citações longas recuadas a 4 cm NÃO LEVAM ASPAS. O próprio recuo e o corpo tipográfico reduzido já exercem a função de isolamento gráfico da transcrição.',
      },
    ],
  },
};

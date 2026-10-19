import type { ModuloFilho } from '../../../domain/types';

export const submodulo113: ModuloFilho = {
  id: 'sub-11-3',
  numero: '11.3',
  editalRef: 'Conhecimentos Básicos - Direito Administrativo (Item 3: Regime Jurídico Único - Lei 8.112/90)',
  preRequisitos: ["sub-11-2"],
  referenciasCruzadas: [
      {
          "submoduloId": "sub-10-1",
          "titulo": "Administração da Câmara dos Deputados",
          "motivo": "Regime funcional dos servidores legislativos e requisição de pessoal."
      }
  ],
  titulo: 'Agentes Públicos e Regime Jurídico Único (Lei nº 8.112/1990)',
  titulo_curto: 'Agentes Públicos e Lei 8.112/90',
  antesDeLer: [
    {
      termo: 'Regime Jurídico Único (Lei nº 8.112/1990)',
      definicao: 'Estatuto federal que disciplina os direitos, deveres, proibições e regime disciplinar dos servidores públicos civis da União.',
      exemploBiblioteca: 'Regulação da posse, exercício, estágio probatório e estabilidade do Analista Legislativo - Biblioteconomia.',
    },
    {
      termo: 'Estágio Probatório e Estabilidade',
      definicao: 'Período de 3 anos de efetivo exercício com avaliação especial de desempenho exigido para aquisição da estabilidade no cargo público.',
      exemploBiblioteca: 'Avaliação de desempenho do novo servidor bibliotecário por comissão instituída pela Diretoria-Geral da Câmara.',
    },
    {
      termo: 'Formas de Provimento (Lei nº 8.112/90)',
      definicao: 'Modalidades de investidura: nomeação (única originária), promoção, readaptação, reversão, aproveitamento, reintegração e recondução.',
      exemploBiblioteca: 'Nomeação de candidatos aprovados no concurso público para posse em vaga desocupada por aposentadoria.',
    },
    {
      termo: 'Deveres e Proibições do Servidor',
      definicao: 'Obrigações funcionais (zelo, lealdade, sigilo) e vedações (valer-se do cargo para proveito próprio, exercer comércio em serviço).',
      exemploBiblioteca: 'Manutenção rigorosa de conduta ética e apartidária no atendimento a todos os gabinetes parlamentares.',
    },
  ],
  descricaoCurta: 'Classificação de agentes públicos. Cargo, emprego e função pública. Provimento (4R + PAN) e vacância (PADRE PF). Estabilidade constitucional. Remoção vs. Redistribuição. Acumulação remunerada de cargos. Direitos, vantagens e independência das instâncias de responsabilização.',
  tempoEstimadoMinutos: 18,
  autoresChave: [
    'Regime Jurídico Único (Lei nº 8.112/1990)',
    'Constituição Federal de 1988 (arts. 37 a 41)',
    'José dos Santos Carvalho Filho',
    'Maria Sylvia Zanella Di Pietro',
  ],
  alertasCebraspe: [
    'PROVIMENTO E VACÂNCIA SIMULTÂNEOS: A Readaptação e a Promoção são as duas ÚNICAS figuras da Lei nº 8.112/1990 que configuram simultaneamente forma de PROVIMENTO de um cargo e forma de VACÂNCIA de outro cargo.',
    'REMOÇÃO VS. REDISTRIBUIÇÃO: Na Remoção desloca-se o SERVIDOR (com ou sem mudança de sede, no âmbito do mesmo quadro de pessoal). Na Redistribuição desloca-se o CARGO (ocupado ou vago) para outro órgão do mesmo Poder, sendo ato sempre exclusivo de ofício no interesse da Administração (art. 37 da Lei 8.112/90).',
    'INDEPENDÊNCIA DAS INSTÂNCIAS E ABSOLVIÇÃO PENAL: A responsabilidade administrativa do servidor é independente da civil e da penal. A sentença penal absolutória só vincula e afasta compulsoriamente a punição administrativa disciplinar em duas hipóteses taxativas: 1) Quando reconhecer categoricamente a inexistência material do fato; 2) Quando declarar que o servidor comprovadamente não foi o autor do fato. Absolvição por falta de provas (in dubio pro reo) ou atipicidade penal NÃO afasta a sanção administrativa!',
    'ACUMULAÇÃO REMUNERADA DE CARGOS (ART. 37, XVI DA CF): A regra é a proibição. Exceções taxativas com compatibilidade de horários e teto: a) dois cargos de professor; b) um cargo de professor com outro técnico ou científico; c) dois cargos ou empregos privativos de profissionais de saúde com profissões regulamentadas. O cargo de Bibliotecário é classificado pela jurisprudência como técnico/científico de nível superior.',
  ],
  quadroComparativo: {
    titulo: 'Formas Derivadas de Provimento da Lei nº 8.112/1990 (Mnemônico 4R)',
    colunas: ['Forma de Provimento', 'Conceito Legal', 'Situação Fática Geradora', 'Requisito Fundamental'],
    linhas: [
      ['Readaptação', 'Investidura em cargo de atribuições e responsabilidades compatíveis', 'Limitação física ou mental superveniente verificada em inspeção médica', 'Compatibilidade de escolaridade e equivalência de vencimentos'],
      ['Reversão', 'Retorno à atividade de servidor aposentado', 'Insubsistência dos motivos da invalidez (de ofício) ou interesse da administração (a pedido)', 'Aposentadoria voluntária com estabilidade prévia e vaga disponível'],
      ['Reintegração', 'Retorno do servidor estável ao cargo anteriormente ocupado', 'Invalidação de sua demissão por decisão judicial ou administrativa', 'Ressarcimento integral de todas as vantagens e remunerações retroativas'],
      ['Recondução', 'Retorno do servidor estável ao cargo de origem', 'Inabilitação em estágio probatório relativo a outro cargo ou reintegração do anterior ocupante', 'Necessidade imperativa de ser servidor previamente ESTÁVEL'],
      ['Aproveitamento', 'Retorno à atividade de servidor que se encontrava em disponibilidade', 'Extinção do cargo ou declaração de sua desnecessidade pelo poder público', 'Cargo de atribuições e vencimentos estritamente compatíveis'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Classificação e Espécies de Agentes Públicos

Agente público é toda pessoa física que exerce, ainda que transitoriamente ou sem remuneração, por eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, mandato, cargo, emprego ou função pública:

1. **Agentes Políticos:** Integram os primeiros escalões governamentais e formulam as políticas fundamentais do Estado. Compreendem os Chefes do Poder Executivo, seus Ministros e Secretários, membros do Poder Legislativo (Deputados Federais e Senadores) e magistrados.
2. **Agentes Administrativos:** Pessoas físicas vinculadas à Administração Pública Direta e Indireta por laço de dependência funcional e remuneração:
   * **Servidores Estatutários (em sentido estrito):** Ocupantes de **cargos públicos** submetidos ao regime jurídico estatutário (Lei nº 8.112/1990 no âmbito federal). Possuem regime próprio de previdência social e adquirem estabilidade constitucional após 3 anos.
   * **Empregados Públicos:** Ocupantes de **empregos públicos** sob o regime celetista (Consolidação das Leis do Trabalho - CLT), típicos das Empresas Públicas e Sociedades de Economia Mista (ex.: Caixa, Banco do Brasil). Submetem-se ao regime geral de previdência (INSS) e não têm a estabilidade do art. 41 da CF, exigindo-se motivação para sua demissão (Tema 1022 do STF).
   * **Servidores Temporários:** Contratados por tempo determinado para atender a necessidade temporária de excepcional interesse público (art. 37, IX, CF/88 e Lei nº 8.745/1993). Exercem função sem cargo ou emprego.
3. **Agentes Honoríficos:** Cidadãos convocados pelo Estado para prestar serviços transitórios e gratuitos de relevância cívica. Ex.: Jurados do Tribunal do Júri e mesários eleitorais.
4. **Agentes Delegados:** Particulares que recebem a incumbência de executar um serviço público ou atividade estatal em nome próprio, por sua conta e risco, sob fiscalização do poder concedente. Ex.: Concessionários e permissionários de serviços públicos, leiloeiros e titulares de cartórios de notas e registro (notários e registradores).
5. **Agentes Credenciados:** Recebem a incumbência de representar o Estado em ato ou evento internacional específico.

---

### 2. Cargo, Emprego e Função Pública

* **Cargo Público:** Conjunto de atribuições e responsabilidades cometidas a um servidor, criado por lei, com denominação própria, número certo e vencimentos pagos pelos cofres públicos. Podem ser de **provimento efetivo** (exigem concurso público) ou **em comissão** (de livre nomeação e exoneração, destinados exclusivamente às atribuições de direção, chefia e assessoramento).
* **Função Pública:** Conjunto de atribuições de relevo estatal desvinculadas de um cargo específico ou atribuídas a quem já ocupa cargo. Na CF/88 (art. 37, V), as **funções de confiança** são exercidas **exclusivamente por servidores ocupantes de cargo efetivo**, destinando-se tão somente às atribuições de direção, chefia e assessoramento.
* **Requisição de Servidores:** Instrumento legal mediante o qual um órgão de cúpula estatal (como a Presidência da República, o Congresso Nacional ou a Justiça Eleitoral) requisita compulsoriamente servidor de outro órgão ou entidade para atuar sob sua autoridade funcional, mantendo-se a remuneração de origem assegurada por lei.

---

### 3. Dinâmica do Provimento e da Vacância (Lei nº 8.112/1990)

#### 3.1 Formas de Provimento (Art. 8º da Lei nº 8.112/1990)
* **Provimento Originário:** Apenas a **Nomeação** (que ocorre em caráter efetivo mediante aprovação prévia em concurso público ou em comissão).
* **Provimento Derivado:** Decorre de vínculo jurídico prévio do servidor com a Administração:
  * **Readaptação:** Investidura em cargo de atribuições compatíveis com limitação física ou mental superveniente.
  * **Reversão:** Retorno da aposentadoria por invalidez (quando junta médica declara insubsistentes os motivos) ou no interesse da administração (a pedido, servidor estável aposentado há menos de 5 anos com cargo vago).
  * **Reintegração:** Retorno do servidor estável demitido ilegalmente, com anulação da demissão por decisão judicial ou administrativa, com direito ao ressarcimento de todos os vencimentos atrasados.
  * **Recondução:** Retorno do servidor estável ao cargo que ocupava anteriormente em decorrência de: a) inabilitação em estágio probatório de outro cargo; b) reintegração do anterior ocupante.
  * **Aproveitamento:** Retorno à atividade do servidor que se encontrava em disponibilidade remunerada por extinção do seu cargo.
  * **Promoção:** Elevação para classe imediatamente superior na carreira.

#### 3.2 Formas de Vacância (Art. 33 da Lei nº 8.112/1990 - Mnemônico PADRE PF)
A vacância é a desocupação do cargo público, ocorrendo por: **P**romoção, **A**posentadoria, **D**emissão, **R**eadaptação, **E**xoneração, **P**osse em outro cargo inacumulável e **F**alecimento.

---

### 4. Formas de Movimentação de Pessoal: Remoção, Redistribuição, Cessão e Requisição

O Regime Jurídico Único (Lei nº 8.112/1990) e a legislação correlata preveem quatro figuras fundamentais de movimentação de pessoal no serviço público, com distinções sistematicamente exploradas pelo Cebraspe:

\`\`\`tree
TITLE: Formas de Movimentação de Servidores Públicos (Lei nº 8.112/1990 e Leis Especiais)
- Movimentação Interna no Mesmo Quadro
  - Remoção (Art. 36) | Deslocamento do SERVIDOR no âmbito do mesmo quadro, com ou sem mudança de sede
    - De Ofício | No exclusivo interesse da Administração
    - A Pedido a Critério da Administração | Ato discricionário
    - A Pedido Independente do Interesse da Administração | Cônjuge deslocado, saúde ou concurso de remoção
- Movimentação de Cargos no Mesmo Poder
  - Redistribuição (Art. 37) | Deslocamento do CARGO (ocupado ou vago) para outro órgão do mesmo Poder (sempre de ofício)
- Movimentação Externa Entre Órgãos/Poderes
  - Cessão (Art. 93) | Deslocamento temporário e discricionário para cargo em comissão/função ou lei específica
  - Requisição (Art. 93 c/c Leis 9.007/95 e 6.999/82) | Deslocamento COMPULSÓRIO e IRRECUSÁVEL imposto por lei especial
\`\`\`

#### 4.1 Remoção (Art. 36 da Lei nº 8.112/1990)
* Deslocamento do **servidor**, a pedido ou de ofício, no âmbito do **mesmo quadro de pessoal**, com ou sem mudança de sede. O cargo em si não se desloca; quem se move é o titular.
* **Hipóteses a Pedido que são Vinculadas (Independentes do Interesse da Administração):**
  1. *Acompanhamento de Cônjuge ou Companheiro:* Quando o cônjuge (também servidor público civil ou militar de qualquer dos Poderes da União, Estados, DF ou Municípios) foi deslocado no estrito interesse da administração.
  2. *Motivo de Saúde:* Do próprio servidor, de seu cônjuge, companheiro ou dependente que viva a expensas e conste do assentamento funcional, condicionada à comprovação por junta médica oficial.
  3. *Processo Seletivo Interno de Remoção:* Promovido pela administração quando o número de interessados supera o número de vagas abertas.

#### 4.2 Redistribuição (Art. 37 da Lei nº 8.112/1990)
* Deslocamento do **cargo de provimento efetivo** (esteja ele ocupado por servidor ou vago), no âmbito do quadro geral de pessoal, para outro órgão ou entidade do **mesmo Poder**.
* **Características Rígidas:** É ato **exclusivamente de ofício** (não existe redistribuição a pedido do servidor!); decorre estritamente do interesse da administração para ajustar lotação e força de trabalho; exige prévia apreciação do órgão central do SIPEC no Executivo ou órgão correlato no Legislativo; mantém os vencimentos do cargo inalterados.

#### 4.3 Cessão de Servidores (Art. 93 da Lei nº 8.112/1990)
* Ato **discricionário e temporário** pelo qual o servidor efetivo é cedido para ter exercício em outro órgão ou entidade dos Poderes da União, dos Estados, do DF ou dos Municípios.
* **Hipóteses Taxativas:**
  * Para exercício de **cargo em comissão ou função de confiança** (art. 93, I);
  * Em casos previstos em **leis específicas** (art. 93, II).
* **Natureza Jurídica:** É ato **bilateral e facultativo**: depende de concordância do órgão cedente (que pode negar a cessão por conveniência e oportunidade do serviço) e da aceitação do cessionário.
* **Ônus da Remuneração (Art. 93, § 1º c/c Lei nº 9.007/1995 e Dec. nº 10.835/2021):**
  * Em regra, na cessão para órgãos da União (Executivo, Legislativo ou Judiciário), o ônus da remuneração recai sobre o órgão cessionário (que recebe o servidor), mediante reembolso ao cedente, SALVO quando se tratar de cargos em comissão de Natureza Especial ou níveis superiores (DAS 4, 5 e 6 ou equivalentes CCE/FKE), em que o ônus pode permanecer no órgão cedente de origem.

#### 4.4 Requisição de Servidores: Natureza Compulsória e Marcos Legais
A **Requisição** distingue-se ontologicamente da Cessão:
* **Conceito:** Ato unilateral dotado de **imperatividade e coercibilidade**, mediante o qual uma autoridade estatal legalmente qualificada exige a liberação compulsória de servidor público de outro órgão ou Poder para prestar serviços junto à sua estrutura.
* **Inexistência de Discricionariedade:** O órgão de origem (cedente) **não possui margem de discricionariedade para recusar** o atendimento à requisição nem para subordiná-la à sua conveniência interna, salvo ilegalidade formal expressa.
* **Principais Regimes Jurídicos de Requisição:**
  1. **Requisição para a Presidência e Vice-Presidência da República:**
     * *Base Legal:* Art. 93, I, da Lei nº 8.112/1990 c/c arts. 1º a 3º da **Lei nº 9.007/1995** e Decreto nº 10.835/2021.
     * As requisições de servidores públicos federais para órgãos da Presidência da República (ex.: Casa Civil, Gabinete Pessoal, Secretaria-Geral) têm caráter **irrecusável e compulsório**, sendo de cumprimento imediato pelas Casas do Congresso Nacional e órgãos do Poder Judiciário.
     * Assegura-se ao servidor requisitado todos os direitos, vantagens e remuneração como se em efetivo exercício no cargo de origem estivesse.
  2. **Requisição para a Justiça Eleitoral:**
     * *Base Legal:* Art. 30, XIII da **Lei nº 4.737/1965 (Código Eleitoral)** e **Lei nº 6.999/1982**.
     * Os juízes eleitorais e os Tribunais Regionais Eleitorais podem requisitar servidores de quaisquer órgãos públicos da União, Estados e Municípios para auxiliar nas eleições e cartórios eleitorais.
     * *Prazos:* Requisições para cartórios eleitorais ocorrem pelo prazo de **1 ano, prorrogável uma única vez por igual período**, ressalvadas requisições especiais em anos eleitorais por até 6 meses.
     * *Ônus Remuneratório:* O servidor continua recebendo seus vencimentos e vantagens pelo **órgão de origem cedente** (ex.: a Câmara dos Deputados continua pagando o salário do servidor requisitado pelo TRE).
  3. **Requisição pelo Poder Legislativo (Câmara e Senado):**
     * O Congresso Nacional e suas Casas possuem competência regimental e legal para requisitar servidores para assessoramento parlamentar ou funcionamento de Comissões Parlamentares de Inquérito (CPIs - art. 58, § 3º da CF/88 c/c Lei nº 1.579/1952).

---

### 5. Quadro Sinótico: Matriz Comparativa das Movimentações de Pessoal

| Figura de Movimentação | Objeto Deslocado | Âmbito de Aplicação | Iniciativa / Vontade | Margem de Recusa do Órgão Cedente | Ônus Financeiro da Remuneração | Base Normativa Primária |
|---|---|---|---|---|---|---|
| **Remoção** | O **Servidor** | No âmbito do **mesmo quadro de pessoal** | De ofício ou a pedido do servidor | Inexiste recusa nas hipóteses vinculadas (saúde, cônjuge) | Órgão de origem (mesmo órgão) | Lei nº 8.112/1990, art. 36 |
| **Redistribuição** | O **Cargo Efetivo** (ocupado ou vago) | Entre órgãos do **mesmo Poder** | **Exclusivamente de ofício** pela Administração | Não se aplica (ato privativo da Administração central) | Novo órgão para o qual o cargo foi remanejado | Lei nº 8.112/1990, art. 37 |
| **Cessão** | O **Servidor** | Entre quaisquer órgãos ou Poderes da Federação | Bilateral (acordo entre órgãos) | **Discricionária:** órgão cedente pode recusar livremente | Em regra cessionário (ressarcimento) ou cedente em DAS altos | Lei nº 8.112/1990, art. 93 |
| **Requisição** | O **Servidor** | De qualquer órgão para órgãos com poder de requisição | Unilateral compulsória do requisitante | **Vinculada / Irrecusável:** cumprimento obrigatório por lei | Em regra do órgão cedente de origem (ex.: Justiça Eleitoral) | Lei 8.112/90, art. 93; Lei 9.007/95; Lei 6.999/82 |

---

### 6. Acumulação Remunerada de Cargos e Teto Constitucional

A Constituição de 1988 (art. 37, XVI) veda terminantemente a acumulação remunerada de cargos públicos, exceto quando houver **compatibilidade de horários**, observada a vedação ao extrapolamento do teto remuneratório constitucional (art. 37, XI - subsídio dos Ministros do STF):
1. Dois cargos de professor;
2. Um cargo de professor com outro técnico ou científico (o cargo de Analista Legislativo - Bibliotecário possui natureza estritamente técnica/científica);
3. Dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.

---

### 7. Responsabilidade Civil, Penal e Administrativa

O servidor público federal responde em três esferas distintas e independentes:
* **Civil:** Decorre de conduta omissiva ou comissiva, dolosa ou culposa, que resulte em prejuízo ao erário ou a terceiros. A indenização ao terceiro é paga pelo Estado, que move **ação regressiva** contra o servidor (CF/88, art. 37, § 6º).
* **Penal:** Decorre da prática de crimes funcionais tipificados no Código Penal ou leis extravagantes.
* **Administrativa:** Decorre de infração disciplinar apurada em processo administrativo disciplinar (PAD) ou sindicância.
* **Comunicabilidade entre as Instâncias:** As instâncias não se comunicam, SALVO quando a sentença penal transitada em julgado absolver o servidor por:
  1. **Negativa da existência material do fato** (o crime não existiu);
  2. **Negativa categórica de autoria** (o servidor não foi o autor).
  * A absolvição penal por insuficiência de provas ou ausência de tipicidade criminal **não impede** a demissão do servidor na via administrativa.

---

### 🔗 Veja Também (Articulação Intermódulos)
* **Administração da Câmara dos Deputados (sub-10-1):** Regime funcional dos servidores legislativos e requisição de pessoal.
`,
  teoriaDidaticaMarkdown: `### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Regime Jurídico Único dos Servidores Públicos Civis da União (Lei Federal nº 8.112/1990)** estabelece o estatuto aplicável ao Analista Legislativo da Câmara dos Deputados:
1. **Formas de Provimento de Cargo Público (Art. 8º):**
   - **Nomeação:** A **única forma originária** de provimento (em caráter efetivo mediante concurso público ou em comissão para cargos de confiança).
   - **Formas Derivadas Canônicas (Mnemônico 4R + PAA):**
     - **Promoção:** Elevação funcional na mesma carreira.
     - **Readaptação:** Investidura em cargo de atribuições compatíveis com limitação física ou mental sofrida pelo servidor.
     - **Reversão:** Retorno do aposentado ao serviço ativo (de ofício no interesse da administração ou a pedido se cessada a invalidez).
     - **Reintegração:** Retorno do servidor estável demitido ilegalmente, com **ressarcimento integral** de todas as vantagens salariais, após anulação da demissão em decisão judicial ou administrativa.
     - **Recondução:** Retorno do servidor estável ao cargo anteriormente ocupado em decorrência de: a) inabilitação em estágio probatório em outro cargo; ou b) reintegração do ocupante anterior.
     - **Aproveitamento:** Retorno do servidor em disponibilidade em cargo compatível.
2. **Posse e Exercício (Prazos Críticos):**
   - **Nomeação $\to$ Posse:** Prazo de **30 dias** contados da publicação oficial. A posse pode se dar por procuração específica. Se não tomar posse: a nomeação é tornada sem efeito!
   - **Posse $\to$ Exercício:** Prazo de **15 dias** contados da posse. O exercício exige presença física. Se não entrar em exercício no prazo: o servidor é **exonerado**!
3. **Estágio Probatório e Estabilidade:**
   - Duração de **3 anos (36 meses)** de efetivo exercício (Súmula Vinculante nº 21 do STF e CF art. 41). Fatores de avaliação: Assiduidade, Disciplina, Capacidade de iniciativa, Produtividade e Responsabilidade.
4. **Vencimento vs. Remuneração:**
   - *Vencimento:* Retribuição pecuniária básica fixada em lei.
   - *Remuneração:* Vencimento do cargo efetivo acrescido das vantagens pecuniárias permanentes. Irredutibilidade de vencimentos ressalvado o teto constitucional (subsídio dos Ministros do STF).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Posse e Entrada em Exercício do Concursado na Câmara):** Richard é nomeado Analista Legislativo - Biblioteconomia no Diário Oficial. Ele tem até **30 dias** para apresentar seus documentos e tomar posse perante o Diretor do Departamento de Recursos Humanos. Após assinar o termo de posse, tem o prazo de **15 dias** para se apresentar fisicamente na Biblioteca Pedro Aleixo e iniciar o exercício de suas atividades técnicas.
- **Cenário 2 (Recondução após Estágio Probatório em Outro Cargo):** Um bibliotecário estável da Câmara é aprovado no concurso de Auditor Fiscal e pede vacância por posse em cargo inacumulável. Durante o estágio probatório no novo órgão, desiste ou é inabilitado na avaliação: ele tem o direito constitucional garantido de ser **reconduzido** ao seu antigo cargo de Analista na Câmara dos Deputados, reassumindo sua estabilidade.
- **Cenário 3 (Readaptação de Servidor com LER/DORT):** Um bibliotecário com 15 anos de catalogação manual intensa desenvolve lesão por esforço repetitivo grave comprovada por junta médica pericial oficial. A Câmara opera a **readaptação**, transferindo o servidor para o serviço de planejamento bibliográfico ou curadoria cultural, em cargo com atribuições e vencimentos compatíveis.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Instituto da Lei 8.112 | O que Acontece Exatamente | Requisito Principal | Consequência Pecuniária |
| :--- | :--- | :--- | :--- |
| **Reintegração** | Retorno de demitido ilegalmente | Decisão judicial ou administrativa | **Ressarcimento de todos os salários** |
| **Recondução** | Retorno de servidor estável ao cargo anterior | Inabilitação em estágio ou reintegração | Volta ao cargo sem indenização retroativa |
| **Reversão** | Retorno de aposentado à ativa | Junta médica (invalidez) ou interesse público | Volta a receber remuneração da ativa |
| **Readaptação** | Investidura em cargo compatível | Limitação física ou mental | Mantém vencimentos do cargo |
| **Não Tomar Posse (30 d)** | Não compareceu para assinar | Prazo de 30 dias expirou | Nomeação tornada **sem efeito** |
| **Não Entrar em Exercício (15 d)** | Tomou posse, mas não foi trabalhar | Prazo de 15 dias expirou | Servidor é **exonerado** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Consequência do Não Comparecimento:** A banca afirma que quem toma posse e não entra em exercício tem a nomeação tornada sem efeito. **Gabarito: ERRADO.** Se tomou posse e não foi trabalhar em 15 dias, ele já é servidor público formal e, portanto, é **exonerado**! A nomeação só é tornada sem efeito se o candidato sequer tomar posse no prazo de 30 dias.
- **Duração do Estágio Probatório:** O texto original da Lei 8.112 dizia 24 meses, mas a Emenda Constitucional nº 19/98 elevou a estabilidade para 3 anos. O STF pacificou na Súmula Vinculante 21 que o estágio probatório dura obrigatoriamente **3 anos (36 meses)**.
- **Ascensão e Transferência como Formas de Provimento:** O Cebraspe coloca "ascensão" ou "transferência" como formas legítimas de provimento derivado. **Gabarito: ERRADO.** Ambas foram declaradas **inconstitucionais pelo STF (Súmula Vinculante nº 43)** por violarem a exigência de concurso público!

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 8.112, de 11 de dezembro de 1990*. Dispõe sobre o regime jurídico dos servidores públicos civis da União, das autarquias e das fundações públicas federais.
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Capítulo de Servidores Públicos).
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Súmula Vinculante nº 21: É constitucional a exigência de 3 anos de efetivo exercício para a aquisição da estabilidade*.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Súmula Vinculante nº 43: É inconstitucional toda modalidade de provimento que propicie ao servidor investir-se, sem prévia aprovação em concurso público...*`,
  checkpoints: [
    {
      id: 'cp-11-3-1',
      pergunta: 'Micro-Checkpoint 1: Recondução e Reintegração de Servidor Estável',
      item: 'Servidor estável da Câmara dos Deputados que tomar posse em outro cargo público inacumulável e for inabilitado no respectivo estágio probatório tem direito à recondução ao cargo de origem, nos termos dos arts. 28 e 29 da Lei nº 8.112/1990.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme os arts. 28 e 29 da Lei nº 8.112/1990, a recondução é o retorno do servidor estável ao cargo de origem decorrente de inabilitação em estágio probatório ou reintegração do anterior ocupante.',
    },
    {
      id: 'cp-11-3-2',
      pergunta: 'Micro-Checkpoint 2: Diferença Técnica entre Requisição e Cessão de Servidores',
      item: 'A requisição de servidor público federal para a Presidência da República ou para a Justiça Eleitoral constitui ato dotado de caráter compulsório e irrecusável pelo órgão de origem, ao passo que a cessão de servidor é ato de natureza discricionária subordinado à concordância do órgão cedente.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme o art. 93 da Lei nº 8.112/1990 c/c a Lei nº 9.007/1995 e a Lei nº 6.999/1982, a requisição é impositiva e irrecusável por força de lei, enquanto a cessão ordinária depende da anuência discricionária da autoridade de origem.',
    },
    {
      id: 'cp-11-3-3',
      pergunta: 'Micro-Checkpoint 3: Independência das Instâncias e Absolvição Criminal',
      item: 'A absolvição penal de um servidor público federal fundada na falta de provas suficientes para a condenação criminal vincula a esfera administrativa e impõe o arquivamento automático do processo administrativo disciplinar contra ele instaurado.',
      gabarito: 'E',
      justificativa: 'Errado! Conforme o art. 126 da Lei nº 8.112/1990 e a jurisprudência sumulada dos Tribunais Superiores, a sentença penal só vincula a esfera administrativa quando reconhecer categoricamente a inexistência material do fato ou a negativa de autoria. A absolvição por insuficiência de provas não impede a sanção disciplinar.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-11-3-1',
        periodo: '1990',
        disciplina: 'Estatuto dos Servidores',
        focoPrincipal: 'Promulgação da Lei nº 8.112/1990: Regime Jurídico Único dos servidores federais',
        figuraChave: 'Congresso Nacional',
      },
      {
        id: 'tl-11-3-2',
        periodo: '1995',
        disciplina: 'Regime de Requisição',
        focoPrincipal: 'Promulgação da Lei nº 9.007/1995 regulamentando a requisição de servidores na Administração Federal',
        figuraChave: 'Presidência da República',
      },
      {
        id: 'tl-11-3-3',
        periodo: '1998 / 2014',
        disciplina: 'Reforma e Súmula Vinculante',
        focoPrincipal: 'EC nº 19/1998 (estágio de 3 anos) e Súmula Vinculante 43 do STF (vedação de ascensão funcional)',
        figuraChave: 'STF / Congresso',
      },
    ],
    autores: [
      {
        id: 'aut-11-3-1',
        nome: 'José dos Santos Carvalho Filho',
        ano: '2023',
        obraPrincipal: 'Manual de Direito Administrativo (37ª edição)',
        ideiaChave: 'Distinção ontológica entre provimento originário e derivado, e limites das formas de movimentação funcional.',
        chipPegadinha: 'Tratar a promoção como forma puramente originária de provimento.',
      },
      {
        id: 'aut-11-3-2',
        nome: 'Maria Sylvia Zanella Di Pietro',
        ano: '2023',
        obraPrincipal: 'Direito Administrativo',
        ideiaChave: 'Teoria da independência das instâncias e limites da coisa julgada penal absolutória sobre o PAD.',
        chipPegadinha: 'Afirmar que a absolvição por atipicidade penal obriga a anulação da demissão administrativa.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-11-3-1',
        afirmacao: 'A readaptação de servidor público federal é forma de provimento derivado de cargo público, não gerando, contudo, a vacância do cargo anteriormente ocupado.',
        gabarito: 'E',
        porQue: 'A readaptação (assim como a promoção) é simultaneamente forma de provimento do novo cargo e forma de vacância do cargo anterior (art. 33, VI da Lei nº 8.112/90).',
      },
      {
        id: 'peg-11-3-2',
        afirmacao: 'O órgão de lotação de origem de um servidor público federal pode negar, por motivos de conveniência e oportunidade do serviço, a requisição expedida pela Justiça Eleitoral para auxílio em cartório eleitoral.',
        gabarito: 'E',
        porQue: 'A requisição eleitoral (Lei nº 6.999/1982 e art. 30, XIII da Lei nº 4.737/1965) é ato compulsório e irrecusável pelo órgão de origem, não se admitindo recusa por conveniência administrativa.',
      },
      {
        id: 'peg-11-3-3',
        afirmacao: 'O cargo de Analista Legislativo - Bibliotecário, por exigir diploma de graduação de nível superior e conhecimento técnico específico, permite a acumulação constitucional com um cargo de professor, desde que comprovada a compatibilidade de horários.',
        gabarito: 'C',
        porQue: 'Correto! A jurisprudência consolidada do STJ e do STF enquadra os cargos de nível superior com atribuições científicas e técnicas na exceção da alínea "b" do inciso XVI do art. 37 da CF/88.',
      },
    ],
  },
};


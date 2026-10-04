import type { ModuloFilho } from '../../../domain/types';

export const submodulo113: ModuloFilho = {
  id: 'sub-11-3',
  numero: '11.3',
  titulo: 'Agentes Públicos e Regime Jurídico Único (Lei nº 8.112/1990)',
  titulo_curto: 'Agentes Públicos e Lei 8.112/90',
  descricaoCurta: 'Classificação de agentes públicos. Cargo, emprego e função pública. Provimento (4R + PAN) e vacância (PADRE PF). Estabilidade constitucional. Remoção vs. Redistribuição. Acumulação remunerada de cargos. Direitos, vantagens e independência das instâncias de responsabilização.',
  tempoEstimadoMinutos: 45,
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

### 4. Remoção vs. Redistribuição

* **Remoção (Art. 36):** Deslocamento do **servidor**, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede. Hipóteses a pedido independentes do interesse da administração:
  1. Para acompanhar cônjuge ou companheiro, também servidor público, que foi deslocado no interesse da administração;
  2. Por motivo de saúde do próprio servidor, cônjuge, companheiro ou dependente que viva às suas expensas, comprovado por junta médica oficial;
  3. Em virtude de processo seletivo interno de remoção promovido pelo órgão.
* **Redistribuição (Art. 37):** Deslocamento do **cargo de provimento efetivo**, ocupado ou vago, para outro órgão ou entidade do mesmo Poder, com prévia apreciação do órgão central do SIPEC, estritamente no interesse da administração.

---

### 5. Acumulação Remunerada de Cargos e Teto Constitucional

A Constituição de 1988 (art. 37, XVI) veda terminantemente a acumulação remunerada de cargos públicos, exceto quando houver **compatibilidade de horários**, observada a vedação ao extrapolamento do teto remuneratório constitucional (art. 37, XI - subsídio dos Ministros do STF):
1. Dois cargos de professor;
2. Um cargo de professor com outro técnico ou científico (o cargo de Analista Legislativo - Bibliotecário possui natureza estritamente técnica/científica);
3. Dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.

---

### 6. Responsabilidade Civil, Penal e Administrativa

O servidor público federal responde em três esferas distintas e independentes:
* **Civil:** Decorre de conduta omissiva ou comissiva, dolosa ou culposa, que resulte em prejuízo ao erário ou a terceiros. A indenização ao terceiro é paga pelo Estado, que move **ação regressiva** contra o servidor (CF/88, art. 37, § 6º).
* **Penal:** Decorre da prática de crimes funcionais tipificados no Código Penal ou leis extravagantes.
* **Administrativa:** Decorre de infração disciplinar apurada em processo administrativo disciplinar (PAD) ou sindicância.
* **Comunicabilidade entre as Instâncias:** As instâncias não se comunicam, SALVO quando a sentença penal transitada em julgado absolver o servidor por:
  1. **Negativa da existência material do fato** (o crime não existiu);
  2. **Negativa categórica de autoria** (o servidor não foi o autor).
  * A absolvição penal por insuficiência de provas ou ausência de tipicidade criminal **não impede** a demissão do servidor na via administrativa.`,
  checkpoints: [
    {
      id: 'cp-11-3-1',
      pergunta: 'Micro-Checkpoint 1: Recondução e Reintegração de Servidor Estável',
      item: 'Servidor estável da Câmara dos Deputados que tomar posse em outro cargo público inacumulável e for reprovado no respectivo estágio probatório tem direito à recondução ao cargo de origem, mesmo que este já tenha sido provido por novo servidor.',
      gabarito: 'C',
      justificativa: 'Correto! A recondução é o retorno do servidor estável ao cargo de origem em razão de inabilitação em estágio probatório. Se o cargo de origem estiver ocupado, o ocupante subsequente será reconduzido ao seu cargo anterior (sem direito a indenização), aproveitado em outro cargo ou posto em disponibilidade.',
    },
    {
      id: 'cp-11-3-2',
      pergunta: 'Micro-Checkpoint 2: Diferença Técnica entre Remoção e Redistribuição',
      item: 'A redistribuição consiste no deslocamento do servidor a pedido ou de ofício no âmbito do mesmo quadro de pessoal, ao passo que a remoção enseja a transferência definitiva do cargo efetivo para outro órgão do mesmo Poder.',
      gabarito: 'E',
      justificativa: 'Errado! O Cebraspe inverteu deliberadamente os conceitos: a REMOÇÃO é o deslocamento do servidor (no mesmo quadro); a REDISTRIBUIÇÃO é o deslocamento do cargo efetivo (ocupado ou vago) para outro órgão do mesmo Poder.',
    },
    {
      id: 'cp-11-3-3',
      pergunta: 'Micro-Checkpoint 3: Independência das Instâncias e Absolvição Criminal',
      item: 'A absolvição penal de um servidor público federal fundada na falta de provas suficientes para a condenação criminal vincula a esfera administrativa e impõe o arquivamento automático do processo administrativo disciplinar contra ele instaurado.',
      gabarito: 'E',
      justificativa: 'Errado! A sentença penal só vincula a esfera administrativa se comprovar a inexistência do fato ou a negativa categórica de autoria (art. 126 da Lei nº 8.112/90). A absolvição por insuficiência de provas não afasta a punição disciplinar.',
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
        periodo: '1998',
        disciplina: 'Reforma Constitucional',
        focoPrincipal: 'EC nº 19/1998: alteração do estágio probatório de 2 para 3 anos para aquisição da estabilidade',
        figuraChave: 'Emenda Administrativa',
      },
      {
        id: 'tl-11-3-3',
        periodo: '2014',
        disciplina: 'Jurisprudência Vinculante',
        focoPrincipal: 'Súmula Vinculante 43 do STF: inconstitucionalidade da ascensão e transferência funcional',
        figuraChave: 'STF',
      },
    ],
    autores: [
      {
        id: 'aut-11-3-1',
        nome: 'José dos Santos Carvalho Filho',
        ano: '2023',
        obraPrincipal: 'Manual de Direito Administrativo (37ª edição)',
        ideiaChave: 'Distinção ontológica entre provimento originário e derivado, com ênfase na vedação de provimento derivado vertical.',
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
        afirmacao: 'O servidor estável investido em mandato de Deputado Federal ficará afastado do seu cargo efetivo durante o exercício parlamentar, sendo seu tempo de serviço contado para todos os efeitos legais, inclusive para promoção por merecimento.',
        gabarito: 'E',
        porQue: 'Nos termos do art. 38, IV, da CF/88 e do art. 94 da Lei nº 8.112/90, o tempo de mandato eletivo é contado para todos os efeitos legais, EXCETO para promoção por merecimento (pois promoção por merecimento exige exercício fático das funções do cargo).',
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

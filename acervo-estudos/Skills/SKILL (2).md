---
name: "Análise de risco e prognóstico de causa"
description: "Monta o memorando de risco de uma causa: mapeia teses e vulnerabilidades, avalia prova e ônus, classifica o risco por matriz de probabilidade e impacto, traduz o resultado em provisão contábil na linguagem do CPC 25 (provável, possível, remota), projeta cenários com custo e sucumbência e entrega a comunicação ao cliente sem prometer resultado. Use quando o usuário pedir análise de viabilidade, prognóstico, risco processual, parecer de mérito, matriz de cenários, provisão de contingência, opinião legal para auditoria ou decisão entre litigar, negociar e não ingressar. Acionar também quando disser 'qual a chance disso', 'vale a pena entrar', 'quanto isso pode custar se perder', 'a auditoria pediu a classificação' ou 'devo fazer acordo'. NÃO usar para redigir a peça, calcular prazo processual, pesquisar jurisprudência do zero, nem para gerar número de probabilidade sem base informada."
---

# Análise de risco e prognóstico de causa

## Função

Produzir o **memorando de risco** de uma causa, para o advogado responsável e, em versão adaptada, para o cliente. Cobre mérito, prova, custo, tempo, cenários, classificação de contingência e recomendação estratégica.

Fora do escopo: garantir resultado, inventar jurisprudência, criar percentual sem base declarada, substituir a decisão do advogado responsável ou a classificação final do auditor. Probabilidade aqui é **avaliação técnica fundamentada**, não previsão.

Toda estimativa numérica é acompanhada da **premissa que a sustenta**. Número sem premissa é chute com aparência de método, e em memorando levado a auditoria ou a conselho isso vira problema.

## Quando acionar

**Gatilhos explícitos:** "analisa o risco", "qual o prognóstico", "vale a pena entrar", "monta a matriz de cenários", "classifica a contingência", "a auditoria pediu a carta de risco", "devo aceitar o acordo".

**Gatilhos contextuais:** cliente empresarial pedindo consolidação de contingências para balanço; decisão entre recorrer e encerrar depois de sentença; proposta de acordo em mesa com prazo; caso novo de valor alto onde o custo de produção pesa; carteira de processos repetitivos que precisa de política de acordo.

## Quando NÃO acionar

- Redação de peça, recurso ou contestação.
- Contagem de prazo processual ou lançamento em agenda.
- Pesquisa de jurisprudência do zero. Esta skill **usa** a pesquisa, não a substitui.
- Triagem de lead novo sem documento nenhum. Sem fatos e sem prova o memorando seria ficção.
- Pedido de "chance em porcentagem" sem que o usuário forneça jurisprudência, prova e histórico. Nesse caso, explique o que falta.

## Princípios

1. **Toda probabilidade nasce de base declarada.** Precedente vinculante, jurisprudência do tribunal competente, prova disponível, histórico da parte contrária. Sem base, o campo fica "indeterminado" e a lacuna é registrada.
2. **Nunca invente julgado, súmula, tema repetitivo ou dispositivo.** Todo item citado precisa ser conferido na fonte antes de o memorando sair. Marque como "a validar" o que veio sem referência completa.
3. **Prova domina tese.** Tese excelente sem prova produz derrota; tese média com documento decisivo produz acordo bom. Pese a prova primeiro.
4. **Separe risco de mérito de risco processual.** Prescrição, ilegitimidade, incompetência e falta de interesse derrubam causa boa antes do mérito.
5. **Considere o custo do erro, não só a chance.** Risco de 15% com impacto de R$ 3 milhões pesa mais que 60% com impacto de R$ 20 mil.
6. **A parte contrária tem comportamento observável.** Litigante de massa com política de acordo, Fazenda que só transaciona por lei específica, adversário que recorre de tudo: isso muda cenário e horizonte.
7. **Tempo é parte do risco.** Dinheiro travado por anos, correção monetária, juros e risco de insolvência da outra parte entram na conta.
8. **Não prometa resultado nem prazo de tramitação.** Nem ao cliente, nem no memorando interno, nem em nota de rodapé.
9. **Diga o que muda a análise.** Todo memorando lista os gatilhos de reavaliação (nova prova, decisão em repetitivo, mudança de entendimento, proposta de acordo).
10. **Classificação para balanço tem regra própria.** Provável, possível e remota seguem o CPC 25 e não se confundem com o otimismo do responsável pelo caso.

## Dados de entrada

Complete com placeholder explícito o que faltar, nunca com suposição silenciosa.

```
1. IDENTIFICAÇÃO
   Área e tipo de ação | Polo do cliente (autor ou réu)
   Competência e vara ou tribunal | Fase atual
   Valor da causa (art. 292 do CPC) | Valor efetivamente em risco
   Número do processo, se já distribuído

2. FATOS
   Cronologia com datas | Versão do cliente | Narrativa provável do adversário
   Fatos incontroversos | Fatos controvertidos

3. PROVA
   Documental existente | Documento que falta e é obtível
   Testemunhas (quantas, vínculo, disponibilidade) | Perícia e especialidade
   Prova em poder da outra parte | Prova emprestada de outro processo

4. DIREITO
   Tese principal e teses subsidiárias
   Precedente vinculante aplicável (art. 927 do CPC), com referência completa
   Jurisprudência do tribunal competente, com órgão, número e ano
   Súmula aplicável | Tema repetitivo ou IRDR suspendendo casos

5. PARTE CONTRÁRIA
   Pessoa física, empresa, grupo, Fazenda ou concessionária
   Histórico de acordo | Capacidade de pagamento | Perfil recursal

6. CUSTO
   Custas iniciais | Perícia | Diligências | Honorários contratuais
   Exposição a sucumbência | Pedido de gratuidade (arts. 98 a 100 do CPC)
```

## Base para estimar

| Pilar | O que observar | Peso na avaliação |
|---|---|---|
| **Precedente vinculante** | Súmula vinculante, repetitivo, IRDR, controle concentrado (art. 927 do CPC) | Decisivo. Precedente vinculante contrário sem distinção possível derruba a tese, por boa que pareça |
| **Jurisprudência dominante** | Entendimento do tribunal **competente**, não de tribunal simpático. Volume, atualidade e órgão julgador | Alto. Cinco julgados de 2019 valem menos que dois de 2025 na câmara que vai julgar |
| **Prova disponível** | O que já existe em documento contra o que depende de produção futura | Alto. Prova documental completa costuma pesar mais que qualquer tese |
| **Ônus da prova** | Art. 373 do CPC e as inversões (art. 6º, VIII, do CDC; presunções trabalhistas como a da Súmula 338 do TST quando não há controle de ponto) | Alto. Quem carrega o ônus carrega o risco |
| **Comportamento da parte contrária** | Faz acordo em que fase, com que deságio; recorre de tudo; Fazenda com limitação legal para transacionar | Médio. Não muda o mérito, muda o cenário mais provável |
| **Risco processual próprio** | Prescrição e decadência, legitimidade, interesse, competência, valor da causa impugnável | Eliminatório. Verifique antes de qualquer estimativa de mérito |
| **Efeito de tempo e dinheiro** | Correção, juros, risco de insolvência, custo de oportunidade do valor travado | Médio a alto quando o horizonte é longo |

Horizonte de tramitação: use a média do tribunal competente publicada no **Justiça em Números do CNJ** e cite a fonte e o ano. Nunca afirme prazo próprio. Toda estimativa vem com a ressalva de pauta e de eventual suspensão por repetitivo.

## Faixas de risco

Critério objetivo para chegar à faixa. Se dois critérios apontarem para faixas diferentes, fica a mais conservadora e o conflito é registrado.

| Faixa | Critério | Leitura |
|---|---|---|
| **Alto risco de perda** (probabilidade de êxito abaixo de 20%) | Precedente vinculante contrário sem distinção; ou prova essencial inexistente e não obtível; ou preliminar eliminatória consistente contra o cliente | No polo ativo, reavaliar o ajuizamento. No polo passivo, priorizar acordo |
| **Risco relevante** (de 20% a 50%) | Jurisprudência dividida no tribunal competente; ou prova parcial dependente de testemunha ou perícia; ou tese sem precedente firme | Cenário de acordo tende a ser o mais racional |
| **Risco moderado** (de 50% a 80%) | Jurisprudência majoritária favorável no tribunal competente e prova documental principal existente, com pontos secundários em aberto | Litigar com estratégia de acordo em fase útil |
| **Baixo risco de perda** (acima de 80%) | Precedente vinculante ou súmula favorável, prova documental completa e fatos incontroversos | Litigar. Acordo só com deságio pequeno |

Duas regras que evitam o erro clássico: probabilidade abaixo de 20% não é zero, e acima de 80% não é certeza. Nenhuma faixa autoriza a palavra "garantido".

## Matriz de probabilidade e impacto

Impacto = exposição financeira total (condenação provável, correção, juros, sucumbência, custo de produção), ponderada pelo peso relativo no caixa do cliente.

| Probabilidade de perda | Impacto baixo | Impacto médio | Impacto alto |
|---|---|---|---|
| **Alta (acima de 50%)** | Atenção: resolver por acordo rápido, custo de gestão supera o valor | **Crítico**: acordo prioritário, provisão integral | **Crítico**: acordo prioritário, provisão integral, comunicar à governança |
| **Média (de 20% a 50%)** | Rotina: seguir com controle padrão | Atenção: acordo desejável, reforçar prova | **Crítico**: mesmo com chance menor, o valor exige estratégia dedicada e reforço probatório |
| **Baixa (abaixo de 20%)** | Rotina: defender, sem provisão | Rotina com monitoramento: divulgação se possível | Atenção: valor alto exige monitoramento próximo e reavaliação a cada decisão relevante |

Célula "crítico" nunca fica só no memorando: vira comunicação formal ao responsável do cliente com data.

## Provisão contábil

Linguagem do **CPC 25** (pronunciamento contábil de provisões e passivos contingentes, alinhado à IAS 37). Atenção ao homônimo: aqui CPC 25 é norma contábil, não o Código de Processo Civil.

| Classificação | Critério | Efeito no balanço | Exigência do jurídico |
|---|---|---|---|
| **Provável** | Perda mais provável que não, ou seja, acima de 50%, com valor estimável de forma confiável | Provisiona no passivo | Valor ou faixa, com memória de cálculo e fundamento |
| **Possível** | Perda possível mas não provável, aproximadamente de 20% a 50% | Não provisiona, divulga em nota explicativa | Descrição da natureza e estimativa de exposição, ou justificativa da impossibilidade de estimar |
| **Remota** | Perda improvável, abaixo de 20% | Não provisiona nem divulga | Fundamento registrado para o caso de questionamento do auditor |

Cuidados que aparecem em toda auditoria:

- Provável **sem valor estimável** ainda é provável. Divulgue a impossibilidade de estimativa em vez de silenciar.
- Reclassificar exige **fato novo**: decisão, prova, precedente, acordo. Pressão de fechamento de balanço não é fato novo.
- A classificação final é do cliente e do auditor. O jurídico entrega avaliação fundamentada, e a carta ao auditor precisa ser consistente com o que está no memorando.
- Caso de massa pode ser avaliado por **grupo homogêneo** com percentual histórico de perda, desde que o critério de agrupamento esteja escrito.

## Custo e exposição

- **Custas iniciais** variam por tribunal e são calculadas sobre o valor da causa. Confirme a tabela vigente do tribunal competente e cite a norma estadual, sem estimar de memória.
- **Sucumbência cível:** de 10% a 20% sobre a condenação ou o proveito econômico (art. 85, §2º, do CPC). Contra a Fazenda, faixas escalonadas do §3º. Na Justiça do Trabalho, de 5% a 15% (art. 791-A da CLT).
- **Perícia:** honorários adiantados pela parte que requereu, na forma do art. 95 do CPC. Perícia de engenharia e contábil costuma ser o item que inverte a viabilidade de causa de valor baixo.
- **Riscos acessórios:** multa por embargos protelatórios (art. 1.026, §2º, do CPC), multa em agravo interno manifestamente inadmissível (art. 1.021, §4º), litigância de má-fé (art. 81), custas por ausência injustificada em audiência trabalhista (art. 844, §2º, da CLT).
- **Valor esperado, sempre marcado como ilustrativo:** soma de (probabilidade do cenário multiplicada pelo resultado do cenário) menos custos. Só entra no memorando com as premissas listadas ao lado.

## Matriz de cenários

| Cenário | Probabilidade indicativa | Resultado econômico estimado | Horizonte | Premissa que sustenta |
|---|---|---|---|---|
| Êxito total | | | | |
| Êxito parcial | | | | |
| Acordo | | | | |
| Improcedência | | | | |
| Extinção sem mérito | | | | |

A soma das probabilidades fecha em 100%. Cenário de extinção sem mérito só sai da tabela quando não houver risco preliminar identificado.

## Recomendação

Escolha uma e apenas uma, com 3 bullets de razão e as condições que a mudariam:

- **Litigar:** faixa moderada ou baixa de risco, prova principal existente, proveito supera o custo de produção com folga.
- **Negociar:** faixa de risco relevante, prova dependente de produção futura, adversário com histórico de acordo, ou valor travado por muito tempo.
- **Não ingressar ou encerrar:** precedente vinculante contrário, prova essencial inexistente, preliminar eliminatória, ou custo maior que o proveito.

Feche com **gatilhos de reavaliação**: nova prova, decisão em repetitivo ou IRDR, mudança de entendimento no tribunal competente, proposta de acordo, alteração na capacidade de pagamento do adversário.

## Como comunicar risco ao cliente

| Não escrever | Escrever |
|---|---|
| "Vamos ganhar" | "A tese encontra apoio majoritário na jurisprudência atual do tribunal competente" |
| "É garantido" | "O precedente vinculante favorece a posição, o que reduz o risco de improcedência" |
| "Em 6 meses resolve" | "A média de tramitação nesse tipo de caso no tribunal, segundo o Justiça em Números do CNJ, é de X. A pauta pode alterar esse horizonte" |
| "Você recebe R$ 80 mil" | "O pedido é de R$ 80 mil. O valor efetivamente reconhecido depende da decisão e da prova produzida" |
| "Risco zero" | "Risco baixo de perda, o que não elimina a possibilidade de decisão desfavorável" |
| "O juiz é favorável a esse tipo de caso" | "As decisões recentes do órgão julgador têm seguido este entendimento" |

Toda versão ao cliente termina com uma frase de fecho: a análise é técnica, baseada nos elementos disponíveis nesta data, e será revista se qualquer premissa mudar.

## Formato da saída

```
MEMORANDO DE RISCO
Caso: [identificação] | Cliente: [nome] | Polo: [autor / réu]
Data-base: [dd/mm/aaaa] | Elaborado por: [nome] | Responsável: [nome / OAB]

1. RESUMO EXECUTIVO (5 linhas)
   Faixa de risco | Impacto | Classificação contábil | Recomendação

2. FATOS RELEVANTES
   Incontroversos | Controvertidos

3. MÉRITO
   Tese principal: força [alta / média / baixa] + 3 razões
   Teses subsidiárias e ordem de arguição
   Precedentes e súmulas (referência completa; marcar "a validar" o não conferido)
   Vulnerabilidades e mitigação

4. PROVA
   Existente | Lacuna crítica | A produzir | Ônus (art. 373 do CPC e inversões)

5. RISCO PROCESSUAL
   Prescrição e decadência | Legitimidade | Interesse | Competência

6. CUSTO E TEMPO
   Custas | Perícia | Sucumbência | Riscos acessórios | Horizonte com fonte

7. MATRIZ DE CENÁRIOS
   [tabela, somando 100%]

8. CLASSIFICAÇÃO
   Faixa de risco: [...] | Matriz probabilidade x impacto: [célula]
   Contingência (CPC 25): provável | possível | remota + fundamento

9. RECOMENDAÇÃO
   [litigar / negociar / não ingressar] + 3 razões + condições que mudariam

10. GATILHOS DE REAVALIAÇÃO
11. LACUNAS E PREMISSAS ASSUMIDAS
```

## Exemplo completo

**Entrada:** cliente é rede de varejo, ré em reclamação trabalhista. Ex-vendedora pede 2 anos de horas extras (R$ 62 mil com reflexos) e dano moral de R$ 20 mil por cobrança de metas. A empresa tem controle de ponto eletrônico de todo o período, mas os registros mostram jornada invariável, sem qualquer variação de minuto. Há duas testemunhas da autora, ambas ex-funcionárias com ações próprias contra a empresa. A empresa faz acordo em audiência inicial em cerca de 70% dos casos, segundo dado do próprio cliente.

**Saída resumida:**

```
1. RESUMO EXECUTIVO
Risco relevante quanto às horas extras (faixa de 20% a 50% de procedência parcial) e baixo
quanto ao dano moral. Impacto médio. Contingência: possível para horas extras, remota para
dano moral. Recomendação: negociar em audiência inicial.

3. MÉRITO
Horas extras: ponto invariável em todo o período atrai a discussão da Súmula 338, III, do TST
(registro que não reflete a jornada real permite presunção relativa em favor do empregado,
elidível por prova em contrário). Força da defesa: média.
Dano moral por metas: sem descrição de conduta abusiva individualizada, a jurisprudência
predominante exige exposição vexatória. Força da defesa: alta. Precedentes a validar antes
de encaminhar ao cliente.

4. PROVA
Favorável: 24 meses de controle eletrônico e recibos de horas extras eventuais.
Contra: invariabilidade dos registros, que é o ponto que sustenta a presunção.
Ônus: da empresa, quanto à jornada, por deter o controle.

8. CLASSIFICAÇÃO
Horas extras: possível (estimativa de exposição de R$ 18 mil a R$ 30 mil, considerando
procedência parcial provável em vez de integral).
Dano moral: remota.

9. RECOMENDAÇÃO
Negociar na audiência inicial. Razões: (a) o ônus quanto à jornada é da empresa e o ponto
invariável é o pior cenário probatório possível; (b) o histórico de acordo do próprio cliente
já é de 70%, e acordo tardio custa mais; (c) o dano moral tende a ser afastado, o que dá
margem para acordo apenas sobre a parcela de horas extras.
Condições que mudariam: prova de variação real da jornada em sistema paralelo; contradita
acolhida das duas testemunhas.
```

## Erros comuns

- **Dar percentual sem base.** "70% de chance" sem jurisprudência, prova e histórico é opinião vestida de método.
- **Citar julgado não conferido.** Referência incompleta vira invenção quando o cliente procura o inteiro teor.
- **Usar jurisprudência do tribunal errado.** Vale o entendimento de quem vai julgar.
- **Esquecer sucumbência e perícia**, e apresentar um valor esperado otimista que não sobrevive ao primeiro cálculo real.
- **Ignorar a preliminar.** Prescrição descoberta depois do memorando invalida tudo o que veio antes.
- **Confundir CPC 25 com o Código de Processo Civil** no texto do memorando.
- **Reclassificar contingência por conveniência de balanço**, sem fato novo.
- **Prometer prazo de tramitação** ou usar "vamos ganhar" na versão que vai ao cliente.
- **Cenários que não somam 100%** ou tabela sem o cenário de extinção sem mérito quando há risco preliminar.
- **Memorando sem data-base.** Análise de risco vence, e sem data ninguém sabe se ainda vale.

## Checklist final

- [ ] Risco processual (prescrição, legitimidade, competência) verificado antes do mérito
- [ ] Cada probabilidade acompanhada da base que a sustenta
- [ ] Precedentes com referência completa, com os não conferidos marcados como "a validar"
- [ ] Jurisprudência é do tribunal competente
- [ ] Ônus da prova atribuído com o dispositivo aplicável
- [ ] Comportamento da parte contrária considerado no cenário de acordo
- [ ] Custos incluindo custas, perícia, sucumbência e riscos acessórios
- [ ] Horizonte de tramitação com fonte citada, sem prazo próprio
- [ ] Matriz de cenários somando 100%
- [ ] Faixa de risco, célula da matriz e classificação CPC 25 coerentes entre si
- [ ] Uma única recomendação, com condições que a mudariam
- [ ] Gatilhos de reavaliação listados
- [ ] Lacunas e premissas assumidas registradas
- [ ] Versão ao cliente sem promessa de resultado, sem prazo e sem "garantido"
- [ ] Data-base e responsável identificados

---
name: "Revisão e análise de risco em contratos"
description: "Revisa contratos pela posição do cliente, classifica cláusula por severidade com critério objetivo, propõe redação de substituição e monta checklist de negociação. Use quando o usuário pedir revisão contratual, análise de risco, leitura de cláusula, cláusula abusiva, due diligence contratual, comparação de versões ou 'posso assinar isso'. Acionar também quando disser 'revisa esse contrato', 'o que tem de ruim aqui', 'me diz o que negociar' ou 'esse contrato me protege'. NÃO usar para redigir minuta nova (use o gerador de minutas), notificar a contraparte (use notificação extrajudicial) nem para emitir parecer formal assinado."
---

# Skill: Revisão e análise de risco em contratos

## Função

Apoiar o **advogado** na revisão de contrato já redigido: mapear risco, classificar severidade, propor redação de substituição e priorizar o que negociar antes da assinatura.

Escopo: contrato, aditivo, ordem de compra, proposta vinculante, termo de adesão, anexo técnico com força obrigacional.

Fora do escopo: parecer formal assinado, due diligence societária completa, valuation, cálculo tributário, negociação em nome do cliente. A skill não presta consultoria ao usuário final. Quem revisa, decide e assina é o advogado responsável.

## Quando acionar

- Contrato colado, anexado ou lido do Drive, com pedido de análise.
- Comparação entre a minuta enviada pela contraparte e a versão do escritório.
- Pedido de "checklist do que pedir" antes de assinar.
- Dúvida pontual sobre uma cláusula isolada (multa, foro, exclusividade, limitação de responsabilidade).

## Quando NÃO acionar

- Pedido de contrato novo do zero: é o gerador de minutas.
- Contrato já assinado e descumprido, com pedido de cobrança: é notificação extrajudicial.
- Análise de sentença, acórdão ou petição: é a skill de resumo de peças.
- Pedido de valor de honorário ou de precificação do serviço de revisão.

## Princípios

1. **Revisão tem lado.** A mesma cláusula é confortável para uma parte e tóxica para a outra. Sem saber a posição do cliente, a análise vira lista de curiosidades. Pergunte a posição antes de classificar qualquer coisa.
2. **Severidade por critério objetivo, não por impressão.** "Cláusula ruim" não orienta ninguém. Use os gatilhos da tabela de severidade e mostre o gatilho que disparou.
3. **Todo achado crítico vem com redação de substituição.** Apontar problema sem oferecer texto joga o trabalho de volta no advogado e atrasa a negociação.
4. **Silêncio do contrato é risco.** O que falta costuma custar mais que o que está escrito errado: ausência de índice de reajuste, de limite de responsabilidade, de critério de aceite, de cláusula de dados.
5. **Cite dispositivo só quando tiver certeza.** Se não tiver o número do artigo na ponta, descreva o instituto (boa-fé objetiva, exceção do contrato não cumprido, cláusula penal excessiva) sem inventar número, súmula ou tema repetitivo.
6. **Distinga nulidade de desequilíbrio.** Nulidade tem base legal expressa, sobretudo em relação de consumo (CDC, arts. 39 e 51). Desequilíbrio entre empresas costuma ser negociação, não invalidade. Misturar os dois queima credibilidade na mesa.
7. **Dado pessoal de terceiro não sai do contrato.** Qualificação completa, CPF, endereço, conta bancária e salário não vão para o relatório nem para exemplo. Use `[NOME COMPLETO]`, `[CPF]`, `[ENDEREÇO]`.
8. **Prioridade é entregável.** Três riscos e três ações no topo. Relatório de 40 achados sem ordem de importância não é usado.
9. **Data importa.** Contrato tem versão. Revisar minuta velha é o erro mais caro desta skill. Confirme data e versão antes de analisar.

## Fluxo

1. **Identificar** partes, objeto, natureza jurídica e regime (B2B, B2C sob CDC, trabalhista sob CLT, administrativo sob Lei 14.133/2021).
2. **Fixar a posição do cliente.** Se o usuário não disser, pergunte antes de seguir. Sem isso, pare.
3. **Ler o contrato inteiro antes de comentar a primeira cláusula.** Definição no início muda o sentido de cláusula do fim. Anexo costuma conter a obrigação real.
4. **Rodar o catálogo de risco** cláusula por cláusula, marcando o que existe, o que está ambíguo e o que falta.
5. **Aplicar o checklist do tipo de contrato** para achar as ausências.
6. **Classificar severidade** com o gatilho objetivo.
7. **Redigir substituição** para todo CRÍTICO e para o ATENÇÃO que o cliente tem poder de negociar.
8. **Calcular score de risco** e explicitar a conta.
9. **Montar checklist de negociação** separando o que é condição para assinar do que é desejável.
10. **Fechar com aviso** de revisão e assinatura pelo advogado responsável.

## Revisão por posição

| Cláusula | Prioridade de quem contrata (compra o serviço) | Prioridade de quem é contratado (presta) |
|---|---|---|
| Objeto e escopo | Escopo fechado, entregável mensurável | Escopo delimitado, fora do escopo vira aditivo pago |
| Preço e reajuste | Preço travado, sem repasse de custo aberto | Índice de reajuste anual, gatilho de recomposição |
| Prazo | Multa por atraso do prestador | Prazo condicionado a dependência do contratante |
| Aceite | Critério objetivo, direito de recusar entrega | Aceite tácito se não houver manifestação em X dias |
| Rescisão | Poder de sair sem multa com aviso prévio | Aviso prévio longo, multa proporcional, pagamento do executado |
| Responsabilidade | Sem limite, ou limite alto, indenização por indireto | Limite ao valor pago nos últimos 12 meses, exclusão de lucro cessante |
| Propriedade intelectual | Titularidade do resultado, licença perpétua | Cessão só após pagamento integral, retenção de ferramenta e know-how |
| Exclusividade | Exclusividade do fornecedor no segmento | Recusar exclusividade sem volume mínimo garantido |
| LGPD | Operador com dever de segurança e de comunicar incidente | Escopo de tratamento limitado à instrução recebida |
| Foro | Foro da própria sede | Foro da própria sede, ou arbitragem se houver capacidade de custeio |

Quando a posição é de **aderente** a contrato de adesão, a leitura muda: procure limitação de direito sem destaque, cláusula compromissória imposta e renúncia antecipada.

## Catálogo de cláusulas de risco

| Cláusula | Sinal de alerta | Severidade padrão | Referência |
|---|---|---|---|
| Rescisão | Resilição unilateral imotivada só para uma parte, efeito imediato, sem pagamento do já executado | CRÍTICO se unilateral e sem aviso; ATENÇÃO se aviso curto | Resilição unilateral e prazo compatível com o investimento feito (CC, art. 473) |
| Multa rescisória | Multa fixa igual ou superior ao saldo do contrato, cumulada com perdas e danos e com multa moratória | CRÍTICO se somatório passa o valor da obrigação principal | Cláusula penal não pode exceder a obrigação principal (CC, art. 412) e é redutível se excessiva (art. 413) |
| Multa moratória e juros | Percentual diário sem teto, juros acima do legal sem previsão contratual clara, cumulação com correção duplicada | ATENÇÃO; CRÍTICO em relação de consumo | Juros legais (CC, art. 406); abusividade em consumo (CDC, art. 51, IV) |
| Foro de eleição | Foro na comarca da contraparte, longe do cliente, em contrato de adesão | ATENÇÃO; CRÍTICO se aderente hipossuficiente | Eleição de foro e sua ineficácia quando abusiva em adesão (CPC, art. 63) |
| Arbitragem | Câmara caríssima, sede em outro país, imposta em contrato de adesão sem destaque nem visto específico | CRÍTICO em adesão sem o requisito formal; ATENÇÃO em B2B paritário | Lei 9.307/1996, art. 4º, §2º |
| Limitação de responsabilidade | Exclusão total de responsabilidade, teto simbólico, exclusão de dolo, limite só para uma parte | CRÍTICO se exonera integralmente ou se aplica ao consumidor | Vedação de exoneração em consumo (CDC, art. 51, I); dever de reparar (CC, art. 927) |
| Indenização e regresso | Obrigação de indenizar ilimitada, incluindo terceiro indeterminado, sem direito de defesa conjunta | CRÍTICO quando ilimitada e unilateral | Reparação civil (CC, art. 927) |
| Exclusividade | Exclusividade sem prazo, sem volume mínimo e sem contrapartida financeira | CRÍTICO para quem presta; ATENÇÃO se houver mínimo garantido | Função social do contrato (CC, art. 421) e boa-fé objetiva (art. 422) |
| Não concorrência | Prazo longo, território amplo, atividade genérica, sem indenização compensatória | CRÍTICO se pós-contratual, sem prazo e sem contrapartida | Instituto exige limite de tempo, espaço e atividade, com contrapartida quando restringe trabalho |
| Não solicitação de pessoal | Proibição de contratar qualquer empregado da outra parte por prazo indeterminado | ATENÇÃO | Restrição precisa ser delimitada e razoável |
| Reajuste | Ausência de índice, reajuste "conforme mercado", reajuste a critério exclusivo de uma parte | CRÍTICO se contrato longo sem índice; ATENÇÃO se índice sem periodicidade | Índice, periodicidade e data-base devem estar expressos |
| Reequilíbrio | Nenhuma via de recomposição em contrato longo exposto a câmbio ou insumo volátil | ATENÇÃO | Resolução ou revisão por onerosidade excessiva (CC, art. 478) |
| Pagamento condicionado | Pagamento vinculado a evento controlado apenas pelo devedor, ou a aceite sem prazo | CRÍTICO | Condição puramente potestativa e exceção do contrato não cumprido (CC, art. 476) |
| LGPD e dados | Nenhuma cláusula de tratamento, papéis não definidos, ausência de dever de comunicar incidente, transferência internacional sem base | CRÍTICO se há tratamento de dado pessoal e o contrato é silente | Lei 13.709/2018, arts. 6º, 39, 46 e 48 |
| Propriedade intelectual | Cessão total e antecipada, inclusive de ferramenta anterior, sem vinculação ao pagamento | CRÍTICO para quem presta | Cessão precisa de escopo, prazo, território e forma escritos |
| Confidencialidade | Prazo perpétuo com obrigação de destruir tudo, sem exceção para exigência legal e sem simetria | ATENÇÃO | Exceções usuais: informação pública, obtida de terceiro, exigida por autoridade |
| Força maior | Lista fechada que exclui evento previsível, ou que serve de escape genérico para o inadimplemento | ATENÇÃO | Evento deve ser necessário e imprevisível, com dever de mitigar e de comunicar |
| Cessão do contrato | Cessão livre para a contraparte e proibida para o cliente | ATENÇÃO | Assimetria injustificada |
| Renovação automática | Renovação automática com janela mínima de denúncia (5 dias) e prazo novo longo | ATENÇÃO; CRÍTICO em consumo | Janela de saída deve ser praticável |
| Garantias | Cumulação de caução, fiança e seguro; aval pessoal do sócio em contrato empresarial de baixo valor | ATENÇÃO; CRÍTICO em locação com garantia cumulada | Locação admite uma modalidade de garantia (Lei 8.245/1991, art. 37 e parágrafo único) |
| Alteração unilateral | Direito de alterar preço, escopo ou política a qualquer tempo, com efeito imediato | CRÍTICO | Alteração exige acordo, salvo prerrogativa legal expressa |

## Critério objetivo de severidade

| Grau | Gatilho objetivo (basta um) | Efeito no relatório |
|---|---|---|
| **CRÍTICO** | Nulidade provável com base legal expressa; exoneração total de responsabilidade; exposição patrimonial acima da receita do contrato; obrigação sem prazo, sem limite territorial ou sem contrapartida; perda de titularidade de ativo central; ausência de cláusula de dados quando há tratamento de dado pessoal | Vira condição para assinar, com redação de substituição obrigatória |
| **ATENÇÃO** | Ambiguidade que admite duas leituras opostas; assimetria de direito sem justificativa; prazo ou percentual fora do padrão de mercado; remissão a documento não anexado; cláusula que depende de comportamento futuro não regulado | Vira pedido de negociação, com sugestão de texto quando o cliente tem poder de barganha |
| **ADEQUADA** | Padrão de mercado para o tipo, o valor e a posição informada | Só aparece na lista de conferidas, sem comentário longo |

Quando faltar informação para classificar (valor do contrato, faturamento do cliente, volume esperado), marque `[VALIDAR COM O CLIENTE]` em vez de assumir.

## Redação sugerida de substituição

Para os achados mais graves, entregue texto pronto. Ajuste números ao caso.

```
1) RESCISÃO UNILATERAL SEM AVISO  (CRÍTICO)
Original: "A CONTRATANTE poderá rescindir este contrato a qualquer tempo,
sem qualquer ônus."
Sugerido: "Qualquer das partes poderá denunciar este contrato mediante
aviso prévio escrito de 30 (trinta) dias, permanecendo devidos os valores
correspondentes aos serviços efetivamente executados e às despesas
comprovadamente incorridas até a data da denúncia."

2) MULTA CUMULADA ACIMA DA OBRIGAÇÃO  (CRÍTICO)
Original: "multa de 100% do valor do contrato, sem prejuízo de perdas e
danos e da multa moratória."
Sugerido: "multa compensatória de 20% (vinte por cento) sobre o valor das
parcelas vincendas, limitada ao valor da obrigação principal, que não se
cumula com a multa moratória prevista na cláusula X."

3) EXONERAÇÃO TOTAL DE RESPONSABILIDADE  (CRÍTICO)
Original: "A CONTRATADA não responde por quaisquer danos decorrentes da
execução."
Sugerido: "A responsabilidade de cada parte por perdas e danos diretos
comprovados fica limitada ao total efetivamente pago nos 12 (doze) meses
anteriores ao evento. O limite não se aplica a dolo, fraude, violação de
confidencialidade e incidente de segurança com dado pessoal."

4) NÃO CONCORRÊNCIA SEM LIMITE  (CRÍTICO)
Original: "O CONTRATADO não poderá atuar no mesmo ramo após o término."
Sugerido: "Pelo prazo de 12 (doze) meses após o término, o CONTRATADO não
prestará serviços de [ATIVIDADE ESPECÍFICA] a [LISTA DE CONCORRENTES
IDENTIFICADOS] no território de [MUNICÍPIO/ESTADO], mediante pagamento
mensal de [VALOR] a título de compensação durante o período de restrição."

5) SILÊNCIO SOBRE TRATAMENTO DE DADOS  (CRÍTICO)
Inserir: "As partes qualificam-se como controlador e operador nos termos da
Lei 13.709/2018. O operador tratará dados pessoais exclusivamente conforme
instrução documentada do controlador, adotará as medidas de segurança do
art. 46 da Lei 13.709/2018, comunicará qualquer incidente de segurança em
até 24 (vinte e quatro) horas do conhecimento, não subcontratará
suboperador sem autorização escrita e eliminará os dados ao término do
contrato, salvo obrigação legal de guarda."

6) REAJUSTE SEM ÍNDICE  (ATENÇÃO)
Sugerido: "Os valores serão reajustados anualmente, na data de aniversário
do contrato, pela variação acumulada do [ÍNDICE], ou pelo índice que
legalmente o substituir."
```

## Checklist por tipo de contrato

**Prestação de serviços**
Escopo com entregável nomeado; critério e prazo de aceite; SLA com métrica e consequência; equipe-chave e substituição; preço, reajuste e reembolso de despesa; propriedade do resultado; subcontratação; ausência de vínculo empregatício; responsabilidade limitada; rescisão com aviso e pagamento do executado; cláusula de dados quando houver acesso a base do cliente.

**Locação (Lei 8.245/1991)**
Prazo e destinação; valor, encargos e quem paga IPTU, condomínio e seguro; garantia única (art. 37 e parágrafo único); multa proporcional ao tempo cumprido na devolução antecipada (art. 4º); benfeitoria e direito de retenção; vistoria de entrada e de saída; obrigações de conservação (arts. 22 e 23); direito de preferência na venda; renovatória em locação não residencial; prazo de denúncia (arts. 6º e 57).

**Sociedade e acordo de sócios**
Participação, integralização e prazo; deliberação e quórum, matérias de veto; administração e limites de alçada; distribuição de resultado; entrada de novo sócio, direito de preferência, *tag along* e *drag along*; saída, apuração de haveres e critério de avaliação; não concorrência com prazo e contrapartida; impasse e mecanismo de desempate; sucessão e falecimento; titularidade da propriedade intelectual desenvolvida por sócio.

**Fornecimento e compra recorrente**
Especificação técnica e amostra de referência; volume mínimo e máximo; prazo de entrega e local; transferência de risco; inspeção, recusa e devolução; garantia e prazo de vício; reajuste e repasse de insumo; exclusividade e contrapartida; hipótese de desabastecimento; penalidade simétrica por atraso e por recusa de compra; retomada de estoque na rescisão.

**NDA**
Definição do que é informação confidencial e o que está excluído; prazo de sigilo e prazo do contrato, que são diferentes; simetria (mútuo ou unilateral); permissão de compartilhamento interno e com assessor; obrigação em caso de ordem judicial; devolução ou destruição com prova; ausência de licença de propriedade intelectual implícita; consequência do descumprimento; foro.

**Contrato administrativo (Lei 14.133/2021)**
Cláusulas necessárias do art. 92; prerrogativas da Administração e reflexo no risco do particular; limite de acréscimo e supressão do art. 125; hipóteses de extinção do art. 137; sanções do art. 156 e efeito no impedimento de licitar; garantia contratual; reajuste e repactuação; matriz de risco quando houver.

## Score de risco

Escala de 1 a 10, com a conta explícita. Ponto de partida 1, somando:
`+3` por cada CRÍTICO estrutural (rescisão, responsabilidade, propriedade intelectual, dados);
`+2` por cada CRÍTICO periférico;
`+1` por cada ATENÇÃO relevante;
`-1` se o cliente tem alto poder de barganha e a contraparte já sinalizou flexibilidade.
Teto em 10. Sempre mostrar a soma, não só o número final.

## Formato da saída

````
# Análise de risco contratual
Contrato: [tipo] | Partes: [A] e [B] | Posição do cliente: [contratante/contratado/aderente]
Versão analisada: [nome do arquivo] | Data do documento: [data]
Regime: [B2B / consumo / trabalhista / administrativo]

## Resumo executivo
[8 a 12 linhas]
Top 3 riscos: 1) ... 2) ... 3) ...
Top 3 ações: 1) ... 2) ... 3) ...

## Score de risco: X/10
Conta: [1 base +3 rescisão unilateral +3 responsabilidade ilimitada +1 foro]

## Achados
### CRÍTICO
| Cláusula | Problema | Impacto prático | Fundamento |
|---|---|---|---|

Para cada CRÍTICO:
Cláusula X.Y
- Problema:
- Impacto prático (dinheiro, prazo, ativo):
- Redação sugerida: "..."
- Fundamento:
- A validar com o cliente:

### ATENÇÃO
[mesma estrutura, mais enxuta]

### ADEQUADA
[lista simples do que foi conferido e está padrão]

## Ausências relevantes
[cláusula que não existe e deveria existir]

## Checklist de negociação
Condição para assinar: [ ] ... [ ] ...
Desejável: [ ] ... [ ] ...
Ponto de concessão possível: [ ] ...

## Pendências
[documento, anexo ou informação que falta para fechar a análise]

> Análise de suporte à decisão. Revisão final, conferência de dispositivo
> vigente e assinatura são do advogado responsável.
````

## Exemplo completo

**Entrada:** cliente é agência de tecnologia (posição: contratada). Contrato de desenvolvimento de software com rede de varejo, valor de R$ 240.000,00 em 12 parcelas. Trechos recebidos:

```
9.1 A CONTRATANTE poderá rescindir o presente instrumento a qualquer tempo,
sem aviso e sem qualquer ônus.
11.2 Todo e qualquer resultado, código, ferramenta e metodologia utilizados
pela CONTRATADA passam à propriedade exclusiva da CONTRATANTE na assinatura.
12.4 A CONTRATADA responderá integralmente por quaisquer prejuízos, diretos
ou indiretos, inclusive lucros cessantes, sem limite de valor.
14.1 Fica eleito o foro da Comarca de [CIDADE DA CONTRATANTE].
```

**Saída resumida:**

```
Score de risco: 9/10
Conta: 1 base +3 (rescisão) +3 (responsabilidade) +2 (PI antecipada) +1 (foro)

CRÍTICO 9.1  Rescisão imotivada sem aviso e sem pagamento do executado.
  Impacto: até 11 parcelas (R$ 220.000,00) podem evaporar com equipe alocada.
  Sugerido: aviso prévio de 30 dias, pagamento do executado e das despesas
  comprovadas, e reembolso de custo de desmobilização de equipe dedicada.
  Fundamento: resilição unilateral exige prazo compatível com o investimento
  realizado (CC, art. 473) e boa-fé objetiva (CC, art. 422).

CRÍTICO 11.2  Cessão de ferramenta e metodologia preexistentes, na assinatura,
  antes de qualquer pagamento.
  Impacto: perda do ativo que sustenta os outros contratos da agência.
  Sugerido: cessão limitada ao código desenvolvido especificamente para o
  projeto, com efeito a partir do pagamento integral; ferramenta e biblioteca
  anteriores permanecem da CONTRATADA, com licença de uso não exclusiva,
  perpétua e limitada ao produto entregue.

CRÍTICO 12.4  Responsabilidade ilimitada, unilateral, incluindo indiretos.
  Sugerido: limite ao total pago nos 12 meses anteriores, exclusão de lucro
  cessante e de dano indireto, simetria para as duas partes, sem limite para
  dolo, fraude, violação de sigilo e incidente com dado pessoal.

ATENÇÃO 14.1  Foro na comarca da contraparte, em outro estado.
  Sugerido: foro da sede da CONTRATADA, ou foro do local de execução.

AUSÊNCIAS
- Nenhuma cláusula de tratamento de dados, embora o software processe cadastro
  de clientes do varejo. Inserir bloco LGPD (papéis, segurança, incidente,
  suboperador, eliminação).
- Sem critério e prazo de aceite: entrega fica em aberto e travará pagamento.
- Sem índice de reajuste em contrato de 12 meses.

CHECKLIST DE NEGOCIAÇÃO
Condição para assinar: 9.1, 11.2, 12.4, bloco LGPD, aceite tácito em 10 dias.
Desejável: foro, reajuste anual, teto de horas de suporte pós-entrega.
Concessão possível: multa moratória de 2% e juros de 1% ao mês a favor da
CONTRATANTE em caso de atraso na entrega, com teto de 10% do valor da etapa.
```

## Erros comuns

- Classificar sem saber a posição do cliente. Gera relatório que recomenda o oposto do interesse dele.
- Chamar de "abusiva" cláusula de contrato entre empresas com base no CDC. O regime tem que ser verificado antes.
- Apontar 30 achados sem hierarquia. O advogado não sabe por onde começar a negociação.
- Ignorar anexo e ordem de precedência entre documentos. A obrigação real costuma estar no anexo técnico.
- Analisar versão desatualizada porque havia dois arquivos parecidos na pasta.
- Copiar qualificação completa, conta bancária ou CPF das partes para o relatório.
- Inventar número de artigo para dar peso ao achado.
- Sugerir redação genérica ("cláusula deverá ser mais equilibrada") em vez de texto substituto.

## Checklist final

- [ ] Posição do cliente confirmada e escrita no relatório
- [ ] Regime jurídico identificado (B2B, consumo, trabalho, administrativo)
- [ ] Contrato lido por inteiro, incluindo anexos e ordem de precedência
- [ ] Catálogo de risco rodado e checklist do tipo aplicado
- [ ] Severidade com gatilho objetivo indicado
- [ ] Todo CRÍTICO com redação de substituição
- [ ] Ausências listadas em seção própria
- [ ] Score com a conta visível
- [ ] Checklist de negociação separado entre condição e desejável
- [ ] Nenhum dado pessoal de terceiro reproduzido
- [ ] Nenhum dispositivo citado sem certeza
- [ ] Aviso de revisão e assinatura pelo advogado responsável presente

## Conectores (se estiverem ativos)

Antes de pedir o texto colado, veja se o conector abaixo está disponível nesta conversa. Com conector, você analisa o contrato do escritório em vez de um resumo dele.

**Google Drive**
1. `search_files` pelo nome do contrato, pelo nome da contraparte ou pela pasta do cliente.
2. `get_file_metadata` para confirmar data e versão antes de ler. Revisar minuta velha é o erro mais caro aqui.
3. `read_file_content` no arquivo confirmado, e também no anexo técnico e no aditivo, se existirem.
4. `search_files` na pasta de modelos do escritório quando o objetivo for comparar a minuta da contraparte com o padrão da casa.
5. `create_file` do relatório de risco na pasta indicada, com nome do cliente e data, somente depois de confirmação explícita.

**Regras ao usar conector**
- Ler é livre. Escrever, salvar ou compartilhar exige confirmação explícita na mesma conversa.
- Nunca altere o arquivo original. A saída é sempre documento novo.
- Achou mais de uma versão? Liste as opções com data e pergunte qual vale antes de analisar.
- Não copie dado bancário nem qualificação completa das partes para o relatório salvo.
- Não salve nada na pasta de modelos do escritório.

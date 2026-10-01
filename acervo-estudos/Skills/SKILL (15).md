---
name: "Redação de notificações extrajudiciais"
description: "Redige notificação extrajudicial com fatos, fundamento, pedido mensurável, prazo razoável e consequência do silêncio, além de indicar o canal de envio com valor probatório adequado. Use quando o usuário pedir notificação extrajudicial, interpelação, constituição em mora, cobrança formal, cease and desist, notificação de rescisão, exigência de retratação ou aviso de desocupação. Acionar também quando disser 'notifica esse cara', 'quero cobrar formalmente antes de processar', 'mandar carta de cobrança' ou 'avisar que vou rescindir'. NÃO usar para petição inicial, para revisar contrato nem para negociar acordo em nome do cliente."
---

# Skill: Redação de notificações extrajudiciais

## Função

Redigir **notificação extrajudicial** para o advogado revisar, assinar e enviar: cobrança, constituição em mora, exigência de cumprimento de obrigação, rescisão contratual, cessação de uso indevido de marca ou conteúdo, retratação, aviso de desocupação.

A skill também avalia se **vale a pena notificar** e recomenda o **canal de envio** compatível com a prova que o caso vai exigir.

Fora do escopo: petição, medida cautelar, protesto de título (ato de cartório, não de redação), negociação com a contraparte, cálculo pericial de débito. A skill não presta consultoria ao usuário final. Revisão, assinatura e envio são do advogado responsável.

## Quando acionar

- Inadimplemento contratual com intenção de cobrar antes de ajuizar.
- Necessidade de constituir o devedor em mora quando a obrigação não tem termo certo.
- Obrigação de fazer ou de não fazer descumprida (entrega, correção de vício, remoção de conteúdo).
- Uso indevido de marca, nome empresarial, conteúdo autoral ou base de clientes.
- Rescisão contratual que depende de aviso prévio ou de prazo para purgar a mora.
- Locação: aviso de desocupação, cobrança de aluguel, exigência de reparo.

## Quando NÃO acionar

- **Já existe prazo processual correndo** e a medida cabível é peça, não carta.
- Título executivo líquido, com vencimento certo, e o cliente quer velocidade: protesto ou execução direta tende a ser mais eficiente que notificar.
- O objetivo real é intimidar sem intenção de cumprir a advertência. Notificação que anuncia medida que nunca vem queima a credibilidade da próxima.
- Risco de perda de prova ou de bem exige urgência. Notificar antecipa a defesa da outra parte e pode inviabilizar liminar.
- Relação em negociação ativa e produtiva. A carta formal pode romper acordo que estava perto.
- Valor da obrigação abaixo do custo de cobrança, sem interesse reputacional ou de precedente interno.

Quando a notificação não for recomendada, diga isso primeiro, com o motivo, e ofereça a alternativa. Depois, se o usuário mantiver o pedido, redija.

## Princípios

1. **Notificação é peça de instrução futura.** Tudo o que ela afirma pode ser usado contra o cliente. Só entra fato que o cliente consegue provar hoje.
2. **Pedido mensurável ou a carta não serve.** "Regularize a situação" não permite executar nada. Escreva valor, ação, data e forma de cumprimento.
3. **Prazo razoável e explícito.** Diga o número de dias e se são úteis ou corridos. Prazo impossível de cumprir transforma a notificação em prova de má-fé do notificante.
4. **Firmeza não é ameaça.** Anunciar medida judicial cabível é legítimo. Anunciar prisão, "processo criminal" genérico, negativação indevida, exposição a terceiros ou contato com clientes do devedor cruza a linha da cobrança abusiva (CDC, art. 42, e crime do art. 71 do CDC em relação de consumo) e pode configurar constrangimento ilegal ou extorsão (CP, arts. 146 e 158).
5. **Fundamento específico, nunca "legislação vigente".** Indique o dispositivo quando tiver certeza do número; quando não tiver, descreva o instituto (mora, resolução por inadimplemento, exceção do contrato não cumprido) sem inventar número, súmula ou tema.
6. **Notificação extrajudicial não interrompe a prescrição por si.** Interrompe o protesto judicial e o protesto cambial (CC, art. 202, II e III), ou o reconhecimento do débito pelo próprio devedor, ainda que extrajudicial (art. 202, VI). Se o prazo prescricional está perto do fim, avise o advogado no topo da entrega.
7. **Dado pessoal só o necessário.** Qualificar o destinatário é indispensável. Reproduzir CPF de terceiro, dado bancário, histórico médico ou conversa privada inteira não é. Em exemplo, sempre `[NOME COMPLETO]`, `[CPF]`, `[ENDEREÇO]`.
8. **Uma notificação, um objetivo.** Cobrar, rescindir e exigir retratação na mesma carta enfraquece os três. Separe, ou defina o pedido principal e trate o resto como consequência.
9. **Anexo é o que sustenta a carta.** Liste os anexos e confira se existem. Referência a documento que não vai junto convida a contraparte a negar o fato.

## Fluxo

1. **Classificar o cenário** (tabela de cenários abaixo).
2. **Testar se vale notificar** com a seção "Quando NÃO acionar".
3. **Coletar dados mínimos**: qualificação das partes, contrato ou origem da obrigação, cronologia dos fatos com datas, valor com memória de cálculo, provas disponíveis, pedido pretendido, prazo desejado, canal disponível.
4. **Verificar prazo material**: prescrição, decadência, prazo contratual de aviso, prazo legal específico.
5. **Escolher o tom** (1 a 3) e confirmar com o usuário se houver relação comercial a preservar.
6. **Redigir** na estrutura padrão.
7. **Recomendar o canal** de envio conforme o valor probatório necessário.
8. **Entregar** com checklist de conferência e aviso de revisão pelo advogado.

## Cenários e prazo razoável

| Cenário | Pedido típico | Prazo sugerido | Observação |
|---|---|---|---|
| Inadimplência de valor líquido | Pagar valor atualizado, com dados para pagamento | 5 a 10 dias corridos | Mora já constituída se havia vencimento certo (CC, art. 397, *caput*) |
| Obrigação sem termo certo | Cumprir e ficar constituído em mora | 10 a 15 dias | Sem termo, a mora depende de interpelação (CC, art. 397, parágrafo único) |
| Obrigação de fazer (entrega, correção, prestação de contas) | Executar a obrigação, com descrição do resultado esperado | 10 a 30 dias, conforme complexidade técnica | Descumprida, cabe execução por terceiro à custa do devedor ou perdas e danos (CC, arts. 247 e 249) |
| Vício em produto ou serviço (consumo) | Sanar o vício | 30 dias, o prazo legal do fornecedor | A reclamação comprovada obsta o prazo decadencial (CDC, art. 26, §2º, I). Registre a data |
| Rescisão por inadimplemento | Purgar a mora sob pena de resolução | 10 a 15 dias | Resolução com perdas e danos (CC, art. 475). Conferir prazo contratual próprio |
| Denúncia de contrato por prazo indeterminado | Comunicar o término | Aviso prévio contratual, ou prazo compatível com o investimento feito (CC, art. 473, parágrafo único) | Sem prazo compatível, a denúncia pode gerar indenização |
| Locação: desocupação | Entregar o imóvel | 30 dias (Lei 8.245/1991, arts. 6º e 57, conforme a hipótese) | Locação residencial após 30 meses tem regra própria no art. 46, §2º |
| Locação: aluguel em atraso | Pagar aluguel e encargos | 5 a 15 dias | Antecede despejo por falta de pagamento |
| Compromisso de compra e venda de imóvel loteado | Purgar a mora | 15 dias, por exigência do Decreto-lei 745/1969 | Prazo legal, não negociável para baixo |
| Uso indevido de marca | Cessar o uso, remover material, prestar contas do faturamento | 5 a 15 dias | Propriedade pela via do registro (Lei 9.279/1996, art. 129); perdas e danos no art. 209 |
| Uso indevido de conteúdo autoral | Remover, creditar ou licenciar | 5 a 10 dias | Lei 9.610/1998. Preserve a prova da publicação antes de notificar |
| Concorrência desleal ou captação de clientes | Cessar a conduta específica | 5 a 10 dias | Lei 9.279/1996, art. 195. Descreva a conduta, não a suspeita |
| Retratação de conteúdo ofensivo | Remover e publicar retificação, com texto anexo | 48 horas a 5 dias | Remoção por provedor depende de ordem judicial (Lei 12.965/2014, art. 19). A carta serve ao autor do conteúdo |
| Quebra de confidencialidade ou de não concorrência | Cessar, devolver ou destruir material, com declaração | 5 a 10 dias | Cheque a validade da restrição antes: prazo, território e contrapartida |
| Trabalhista (aviso de rescisão) | Cumprir verbas ou aviso prévio | Conforme CLT, art. 487 e Lei 12.506/2011 | Notificação não substitui homologação nem quitação |

Prazo abaixo de 48 horas só em urgência real e justificada no corpo da carta. Prazo acima de 30 dias sinaliza que não há urgência, e a contraparte lê isso.

## Estrutura padrão

1. **Título** com a natureza exata: `NOTIFICAÇÃO EXTRAJUDICIAL`, com subtítulo do objeto quando ajudar (`Constituição em mora`, `Cessação de uso de marca`).
2. **Destinatário qualificado**: nome ou razão social, CNPJ ou CPF, endereço completo, aos cuidados de representante legal identificado. Endereço errado é a causa número um de notificação inútil.
3. **Remetente e signatário**: cliente qualificado, advogado com OAB, indicação de que atua por procuração anexa.
4. **Síntese fática cronológica**, em itens numerados, com data em cada fato e remissão ao anexo que prova cada um. Sem adjetivo sobre a conduta da contraparte.
5. **Valor e memória de cálculo**, quando houver dinheiro: principal, correção, juros, multa, data-base do cálculo e total, com número e extenso.
6. **Fundamento jurídico** curto, ligando fato a instituto e ao dispositivo de que se tem certeza. Cite a cláusula do contrato pelo número.
7. **Pedido**, em destaque: o que fazer, quanto, como, até quando, para onde (dados de pagamento, e-mail para resposta, endereço para entrega).
8. **Prazo** com número de dias, natureza (úteis ou corridos) e termo inicial (recebimento desta).
9. **Consequência do silêncio**: medidas cabíveis, nomeadas e verdadeiras (ação de cobrança, execução, resolução do contrato, despejo, medida cautelar, protesto quando houver título). Nada de crime genérico.
10. **Ressalva de direitos**: a notificação não implica novação, renúncia, tolerância nem alteração de prazo contratual.
11. **Local, data, assinatura** do cliente ou do advogado, e **lista de anexos** numerada.

Quando o objetivo é preservar relação comercial, o pedido pode vir acompanhado de abertura para acordo, com prazo próprio, sem enfraquecer o prazo principal.

## Níveis de tom

| Nível | Uso | Marcadores de linguagem | Risco |
|---|---|---|---|
| **1 Amigável** | Relação continua, atraso pontual, cliente estratégico | "solicitamos a regularização", "permanecemos à disposição para tratar de composição" | Pode ser lida como aceite de atraso. Mantenha prazo e ressalva de direitos |
| **2 Firme** | Padrão da maioria dos casos | "notifica para que, no prazo de X dias", "sob pena de adoção das medidas cabíveis" | Nenhum relevante se o pedido for mensurável |
| **3 Contencioso** | Reincidência, má-fé aparente, risco de dissipação, prazo material curto | "resta constituído em mora", "serão adotadas as medidas judiciais cabíveis, incluindo [medida nomeada]" | Rompe a relação. Não use ameaça de exposição a terceiros nem de medida sem base |

Não existe nível 4. Insulto, ironia, adjetivo sobre caráter, ameaça de crime e promessa de "acabar com a reputação" não são tom: são risco de dano moral reverso e de nulidade da cobrança.

## Canais e valor probatório

| Canal | Prova que gera | Quando usar | Limite |
|---|---|---|---|
| Carta com AR (Aviso de Recebimento) | Entrega no endereço, com data e assinatura de quem recebeu | Padrão para cobrança e rescisão | Recebimento por terceiro no endereço é comum. Guarde o AR original |
| Registro de Títulos e Documentos (Lei 6.015/1973) | Notificação por oficial de registro, com certidão | Quando o caso exige prova robusta de conteúdo e de tentativa de entrega | Custo e prazo maiores. Confirme a abrangência territorial do cartório |
| Protesto de documento de dívida (Lei 9.492/1997) | Intimação pelo tabelionato e efeito de publicidade | Dívida líquida e certa, quando o objetivo é pressão legítima | Protesto indevido gera responsabilidade. Cheque valor, vencimento e legitimidade |
| Notificação por oficial de justiça em interpelação judicial | Fé pública e interrupção da prescrição (CC, art. 202, II) | Prescrição perto do fim, ou exigência legal de via judicial | Não é extrajudicial: exige peça e distribuição |
| E-mail | Envio e conteúdo. Recebimento depende de resposta, confirmação de leitura frágil ou canal previsto em contrato | Quando o contrato elege e-mail como canal válido de comunicação | Sem cláusula de comunicação, a contraparte nega recebimento. Envie também por outra via |
| WhatsApp | Registro de entrega e leitura no aplicativo, com número identificado | Complemento, ou única via viável quando o único contato conhecido é o número | Prova frágil isolada: número em nome de terceiro, mensagem apagada, celular de terceiro. Nunca use como via única em caso de valor relevante |
| Entrega em mão com protocolo | Recibo assinado no ato | Contraparte acessível, com recepção que protocola | Recusa de assinar exige testemunha ou registro alternativo |
| Edital | Última alternativa | Destinatário em local incerto, com tentativas anteriores documentadas | Quase sempre matéria de processo, não de carta |

Regra prática: **uma via robusta e uma via rápida**. AR ou cartório para a prova, e-mail ou WhatsApp para a velocidade, com a mesma redação e a mesma data. Registre no arquivo do caso a data de cada envio e o comprovante.

## Formato da saída

````
[MINUTA DA NOTIFICAÇÃO, texto corrido, pronta para copiar]

---
## Recomendação de canal
Via principal: [AR / cartório de RTD / protesto] porque [motivo probatório]
Via complementar: [e-mail / WhatsApp]
Endereço a confirmar: [fonte sugerida: contrato, cadastro, ficha cadastral]

## Alerta de prazo material
[prescrição, decadência, prazo contratual, prazo legal específico e o efeito]

## Checklist antes de enviar
- [ ] Valor conferido com a memória de cálculo até a data do envio
- [ ] Datas dos fatos conferidas nos documentos
- [ ] Endereço atual do destinatário confirmado
- [ ] Anexos existem, estão legíveis e estão numerados
- [ ] Procuração do cliente vigente
- [ ] Nenhuma afirmação sem prova disponível
- [ ] Nenhuma advertência sem base legal

> Minuta de trabalho. Não enviar sem conferência de valores, datas e endereço,
> e sem revisão e assinatura do advogado responsável.
````

## Exemplo completo

**Entrada:** cliente é fornecedor de mobiliário corporativo. Vendeu 40 estações de trabalho para uma empresa, com contrato assinado em 12/02/2026, entrega concluída em 20/03/2026, pagamento em três parcelas de R$ 18.400,00 com vencimentos em 30/03, 30/04 e 30/05/2026. A segunda e a terceira parcelas não foram pagas. Contrato prevê multa moratória de 2% e juros de 1% ao mês, cláusula 7.2. Cliente quer receber, e aceita parcelar. Relação comercial ainda interessa. Tom escolhido: 2.

**Saída (trechos):**

```
NOTIFICAÇÃO EXTRAJUDICIAL
Constituição em mora e cobrança de valores vencidos

À
[RAZÃO SOCIAL], inscrita no CNPJ sob o nº [CNPJ]
[ENDEREÇO COMPLETO]
A/C: [REPRESENTANTE LEGAL], [CARGO]

[RAZÃO SOCIAL DA NOTIFICANTE], inscrita no CNPJ sob o nº [CNPJ], por seu
advogado que subscreve (procuração anexa, doc. 01), vem NOTIFICAR V.Sas.
dos fatos e do pedido a seguir.

I. DOS FATOS
1. Em 12/02/2026 as partes firmaram o Contrato de Compra e Venda de
   Mobiliário Corporativo (doc. 02).
2. Em 20/03/2026 foi concluída a entrega das 40 (quarenta) estações de
   trabalho, com termo de recebimento assinado pela notificada (doc. 03).
3. A parcela vencida em 30/04/2026, no valor de R$ 18.400,00, não foi paga.
4. A parcela vencida em 30/05/2026, no valor de R$ 18.400,00, também não foi
   paga.
5. Em 08/06/2026 e em 22/06/2026 a notificante encaminhou cobrança
   administrativa por e-mail, sem resposta (doc. 04).

II. DO VALOR DEVIDO
Principal vencido .................. R$ 36.800,00
Multa moratória de 2% (cl. 7.2) .... R$    736,00
Juros de 1% ao mês (cl. 7.2) ....... R$ [CALCULAR ATÉ A DATA DO ENVIO]
Total apurado em [DATA] ............ R$ [TOTAL] ([TOTAL EM EXTENSO])

III. DO FUNDAMENTO
As parcelas tinham vencimento certo, de modo que a mora se operou pelo
simples inadimplemento (Código Civil, art. 397, caput). O inadimplemento
sujeita a devedora ao pagamento do principal com correção, juros e multa
convencionada (Código Civil, arts. 389 e 408, e cláusula 7.2 do contrato).

IV. DO PEDIDO E DO PRAZO
Fica a notificada instada a pagar o valor total apurado no prazo de
10 (dez) dias corridos, contados do recebimento desta, por meio de
[FORMA DE PAGAMENTO], conforme dados abaixo:
[DADOS PARA PAGAMENTO]
Havendo interesse em composição, a notificante recebe proposta de
parcelamento pelo e-mail [E-MAIL] dentro do mesmo prazo, sem que isso
suspenda o prazo aqui fixado.

V. DA CONSEQUÊNCIA DO SILÊNCIO
Decorrido o prazo sem pagamento ou acordo formalizado, a notificante adotará
as medidas judiciais cabíveis para a satisfação do crédito, com os acréscimos
legais, custas e honorários.

VI. DAS RESSALVAS
Esta notificação não implica novação, renúncia, concessão de prazo adicional
nem tolerância quanto às demais obrigações contratuais.

[CIDADE/UF], [DATA].
[ADVOGADO] - OAB/[UF] [NÚMERO]

ANEXOS: 01 procuração; 02 contrato; 03 termo de recebimento; 04 e-mails de
cobrança.
```

**Recomendação de canal:** AR como via principal, porque o contrato não elege e-mail como canal de comunicação e o caso pode virar ação de cobrança. E-mail como via complementar, no mesmo dia, para o endereço já usado nas cobranças administrativas.

**Alerta de prazo material:** cobrança de dívida líquida constante de instrumento particular prescreve em 5 anos (CC, art. 206, §5º, I). Sem risco imediato. Registre que esta notificação, por si, não interrompe a prescrição; se houver reconhecimento do débito pela devedora, ainda que por e-mail, guarde o documento (CC, art. 202, VI).

## Erros comuns

- Pedido vago: "regularize sua situação". Não permite verificar cumprimento nem sustentar mora.
- Valor sem memória de cálculo e sem data-base. A contraparte contesta o total e ganha tempo.
- Prazo sem dizer se é útil ou corrido, ou contado "desta data" quando a carta demora a chegar.
- Ameaçar prisão, boletim de ocorrência genérico, negativação sem base ou contato com clientes do devedor. Isso pode configurar cobrança abusiva (CDC, art. 42) e crime (CDC, art. 71).
- Afirmar fato sem prova em mãos, ou citar anexo que não vai junto.
- Somar três objetivos na mesma carta e não deixar claro qual é o pedido principal.
- Notificar quando o prazo prescricional está a poucos dias do fim, acreditando que a carta interrompe a prescrição.
- Enviar só por WhatsApp em caso de valor relevante.
- Endereço tirado de memória e não do contrato ou do cadastro atual.
- Reproduzir CPF, dado bancário de terceiro ou conversa privada inteira sem necessidade.
- Notificar antes de medida urgente, entregando a estratégia à contraparte.

## Checklist final

- [ ] Cenário classificado e decisão de notificar justificada
- [ ] Destinatário qualificado, com endereço atual conferido na fonte
- [ ] Fatos em ordem cronológica, com data e anexo por fato
- [ ] Valor com memória de cálculo, data-base, número e extenso
- [ ] Fundamento ligado ao fato, sem dispositivo incerto
- [ ] Pedido mensurável, com forma e destino do cumprimento
- [ ] Prazo com número de dias, natureza e termo inicial
- [ ] Consequência do silêncio verdadeira e nomeada
- [ ] Ressalva de novação e de tolerância presente
- [ ] Anexos listados, existentes e numerados
- [ ] Tom compatível com a relação e sem ameaça indevida
- [ ] Canal principal e complementar recomendados
- [ ] Prazo material (prescrição, decadência, prazo legal) verificado e sinalizado
- [ ] Nenhum dado pessoal de terceiro além do necessário
- [ ] Aviso de revisão, assinatura e envio pelo advogado responsável presente

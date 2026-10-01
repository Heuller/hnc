---
name: "Gerador de minutas contratuais"
description: "Gera minuta contratual completa e numerada, com sistema de placeholders, blocos condicionais por tipo de contratação e lista de pendências para o advogado fechar. Use quando o usuário pedir minuta, modelo de contrato, rascunho contratual, template jurídico, aditivo, distrato, NDA ou termo de prestação de serviços. Acionar também quando disser 'monta um contrato de', 'preciso de uma minuta', 'faz o modelo de' ou 'gera o aditivo'. NÃO usar para revisar contrato já redigido (use revisão de contratos), para notificar inadimplência nem para petição ou peça processual."
---

# Skill: Gerador de minutas contratuais

## Função

Redigir **minuta contratual** para o advogado revisar, ajustar e submeter à assinatura. A skill produz rascunho estruturado, numerado e com campos marcados, mais a lista do que falta conferir.

Escopo: contrato bilateral típico (serviços, fornecimento, locação, parceria, NDA, cessão, comodato), aditivo, distrato, termo de rescisão, instrumento particular de confissão de dívida.

Fora do escopo: instrumento que exige forma pública ou registro específico redigido sem apoio do advogado, contrato societário complexo com reorganização, instrumento em outro idioma sem revisão de quem domina o idioma, e qualquer orientação jurídica ao usuário final. A minuta é rascunho de trabalho. Revisão e assinatura são do advogado responsável.

## Quando acionar

- Pedido explícito de minuta, modelo, rascunho ou template de contrato.
- Pedido de aditivo, distrato ou termo de rescisão de contrato existente.
- Pedido de bloco isolado ("me dá só a cláusula de LGPD para esse contrato").
- Conversão de proposta comercial aprovada em instrumento contratual.

## Quando NÃO acionar

- Contrato da contraparte já pronto, com pedido de leitura: é revisão de contratos.
- Cobrança de contrato descumprido: é notificação extrajudicial.
- Documento processual, procuração para juízo ou peça: outras skills.
- Pedido de opinião sobre "qual contrato me protege mais" sem intenção de redigir. Nesse caso, colete os dados e devolva a escolha ao advogado.

## Princípios

1. **Coleta antes da redação.** Minuta gerada com metade dos dados vira retrabalho. Se faltar dado mínimo, liste o que falta e ofereça a minuta com placeholder, deixando claro o que ficou aberto.
2. **Placeholder é melhor que suposição.** Nunca invente CPF, CNPJ, endereço, valor, prazo, estado civil ou representante legal. Campo desconhecido entra como `[CPF]`, `[ENDEREÇO]`, `[VALOR]`.
3. **Dado pessoal de terceiro não vai para exemplo nem para log.** Em toda ilustração use `[NOME COMPLETO]`, `[CPF]`, `[ENDEREÇO]`. Se o usuário colar dado real, use no documento e não repita no corpo da resposta.
4. **Cláusula genérica é defeito, não economia.** Objeto, preço e prazo com texto vago são a origem da maioria das disputas. Force especificidade ou marque `[PREENCHER]`.
5. **Numeração hierárquica sempre.** Cláusula, item e subitem numerados (1, 1.1, 1.1.1). Contrato sem número não é negociável por e-mail nem citável em notificação.
6. **Regime muda o texto.** Consumo (CDC), trabalho (CLT), administrativo (Lei 14.133/2021) e B2B paritário admitem cláusulas diferentes. Confirme o regime antes de escrever limitação de responsabilidade e foro.
7. **Nota do advogado onde há risco de escolha.** Use `[NOTA DO ADVOGADO: ...]` para sinalizar decisão que a skill não pode tomar (percentual de multa, aceitar arbitragem, limitar responsabilidade em contrato de consumo).
8. **Nunca cite artigo de cuja numeração você não tem certeza.** Descreva o instituto. Contrato com dispositivo errado no corpo é passivo, não autoridade.
9. **Simetria como padrão.** Direito que só uma parte tem precisa de justificativa comercial explícita. Quando o cliente é a parte forte, marque `[NOTA DO ADVOGADO]` alertando sobre risco de abusividade.
10. **Minuta sai com aviso.** Todo entregável termina com o aviso de que o documento exige conferência do advogado antes de ir ao cliente ou à contraparte.

## Coleta mínima (7 a 10 dados)

Pergunte de uma vez, em lista curta. Se o usuário responder parcialmente, gere a minuta com placeholder no resto.

```
1. Tipo de contrato e regime (B2B, consumo, trabalhista, administrativo)
2. Posição do cliente (contratante ou contratado) e quem redige
3. Partes: razão social ou nome, CNPJ/CPF, endereço, representante e
   qualificação (PF: nacionalidade, estado civil, profissão)
4. Objeto: o que exatamente será entregue ou cedido, com entregável nomeado
5. Preço, forma e cronograma de pagamento; índice e periodicidade de reajuste
6. Prazo, início da vigência, renovação (automática ou não)
7. Rescisão: aviso prévio, hipóteses de resolução imediata, multa
8. Penalidade por atraso: multa moratória e juros
9. Há tratamento de dado pessoal? Há criação de propriedade intelectual?
   Há confidencialidade relevante? Há exclusividade?
10. Foro ou arbitragem; testemunhas; forma de assinatura (física ou eletrônica)
```

Faltando 1, 2, 4 ou 6, **não gere sem avisar**: são os campos que mudam a estrutura da minuta, não só o preenchimento.

## Fluxo

1. **Classificar** tipo, regime e posição do cliente.
2. **Coletar** os dados mínimos. Listar as lacunas.
3. **Selecionar os blocos condicionais** aplicáveis (tabela abaixo).
4. **Redigir** na ordem da estrutura padrão, numerando tudo.
5. **Marcar** placeholders e notas do advogado.
6. **Fechar** com lista de pendências e aviso de revisão.
7. **Salvar** só se o usuário pedir, e só depois de confirmação.

## Estrutura padrão da minuta

| # | Bloco | Sempre? | O que não pode faltar |
|---|---|---|---|
| 1 | Título e epígrafe | Sim | Natureza do instrumento no título, sem adjetivo |
| 2 | Qualificação das partes | Sim | Razão social, CNPJ/CPF, endereço, representante e instrumento de representação |
| 3 | Considerandos ou preâmbulo | Opcional | Só se houver histórico relevante para interpretação |
| 4 | Definições | Condicional | Contrato técnico, com sigla ou termo de negócio recorrente |
| 5 | Objeto e escopo | Sim | Entregável nomeado, o que está incluído e o que está fora |
| 6 | Obrigações das partes | Sim | Listas separadas, simétricas quando couber, com prazo em cada obrigação |
| 7 | Preço, faturamento e reajuste | Sim | Valor, vencimento, meio de pagamento, índice, periodicidade, tributos |
| 8 | Prazo, vigência e renovação | Sim | Data de início, duração, janela de denúncia praticável |
| 9 | Aceite e nível de serviço | Condicional | Critério objetivo de aceite, prazo de aceite tácito, métrica de SLA |
| 10 | Penalidades | Sim | Multa moratória, juros, multa compensatória, limite e não cumulação |
| 11 | Rescisão e resolução | Sim | Denúncia com aviso, resolução por inadimplemento, efeitos e devolução |
| 12 | Confidencialidade | Quase sempre | Definição, exceções, prazo autônomo do prazo do contrato |
| 13 | Proteção de dados (LGPD) | Condicional | Papéis, finalidade, segurança, incidente, suboperador, eliminação |
| 14 | Propriedade intelectual | Condicional | Titularidade, momento da cessão, licença, ativo preexistente |
| 15 | Responsabilidade | Sim | Limite, exclusões do limite, simetria |
| 16 | Força maior | Sim | Evento, dever de comunicar, dever de mitigar, suspensão e resolução |
| 17 | Não concorrência e não solicitação | Condicional | Prazo, território, atividade, contrapartida |
| 18 | Ausência de vínculo | Condicional | Serviços com equipe alocada, autonomia e responsabilidade trabalhista |
| 19 | Cessão e sucessão | Sim | Simetria, anuência prévia |
| 20 | Comunicações | Sim | Canal válido, endereço, e-mail, efeito da recusa de recebimento |
| 21 | Disposições gerais | Sim | Tolerância não é novação, nulidade parcial, integralidade do acordo |
| 22 | Foro ou arbitragem | Sim | Um dos dois, nunca os dois sem delimitação |
| 23 | Assinaturas e testemunhas | Sim | Local, data, campos de assinatura, testemunhas quando quiser título executivo |

Duas testemunhas fazem diferença: documento particular assinado pelo devedor e por duas testemunhas é título executivo extrajudicial (CPC, art. 784, III). Se o cliente quer poder executar sem ação de cobrança, inclua o bloco.

## Blocos condicionais por tipo de contratação

| Tipo | Blocos obrigatórios além do padrão | Cuidados |
|---|---|---|
| Prestação de serviços B2B | Aceite, SLA, equipe-chave, subcontratação, ausência de vínculo, propriedade do resultado | Definir se o resultado é cedido ou licenciado, e quando |
| Serviço para consumidor (CDC) | Informação clara de preço total, prazo, direito de arrependimento quando a distância, canal de atendimento | Não incluir exoneração de responsabilidade (CDC, art. 51, I); cláusula que limite direito precisa de destaque (CDC, art. 54, §4º); cláusula compromissória imposta é inválida em adesão (Lei 9.307/1996, art. 4º, §2º) |
| Fornecimento recorrente | Especificação técnica, volume mínimo e máximo, inspeção e recusa, garantia de vício, transferência de risco, reajuste de insumo | Penalidade simétrica: atraso do fornecedor e recusa de compra do cliente |
| Locação (Lei 8.245/1991) | Destinação, encargos, garantia única (art. 37 e parágrafo único), vistoria de entrada e saída, benfeitorias, preferência na venda | Multa por devolução antecipada deve ser proporcional ao tempo cumprido (art. 4º); denúncia com 30 dias nas hipóteses dos arts. 6º e 57 |
| Sociedade e acordo de sócios | Quórum e veto, alçada da administração, distribuição, preferência, *tag along*, *drag along*, saída e apuração de haveres, impasse | Não concorrência de sócio exige prazo, território e atividade delimitados |
| NDA | Definição e exclusões, prazo de sigilo autônomo, ordem judicial, devolução ou destruição, ausência de licença implícita | Sigilo mútuo é o padrão; unilateral só se o usuário pedir |
| Cessão de direitos autorais ou de software | Objeto da cessão, exclusividade, prazo, território, modalidades de uso, remuneração | Cessão precisa ser escrita e delimitada (Lei 9.610/1998); ausência de escopo restringe a cessão |
| Contratação de autônomo ou PJ | Autonomia, ausência de subordinação e de pessoalidade, forma de pagamento por entrega | `[NOTA DO ADVOGADO]` sobre risco de reconhecimento de vínculo; nulidade de ato que desvirtua a CLT (CLT, art. 9º) |
| Contrato de trabalho (CLT) | Função, jornada, salário, local, benefícios, período de experiência quando houver | Alteração contratual exige mútuo consentimento e não pode causar prejuízo (CLT, art. 468); aviso prévio conforme CLT, art. 487 e Lei 12.506/2011 |
| Contrato com a Administração (Lei 14.133/2021) | Cláusulas necessárias (art. 92), garantia, reajuste e repactuação, sanções (art. 156), extinção (art. 137) | Limite de acréscimo e supressão do art. 125 muda a matriz de risco do particular |
| Aditivo | Referência ao contrato original (data e partes), cláusulas alteradas por número, ratificação do restante | Nunca reescrever o contrato inteiro em aditivo |
| Distrato e termo de rescisão | Data de encerramento, acerto de valores, quitação recíproca, obrigações que sobrevivem | Quitação ampla precisa de decisão do advogado; marque `[NOTA DO ADVOGADO]` |
| Confissão de dívida | Origem do débito, valor com extenso, parcelamento, vencimento antecipado, juros e multa | Duas testemunhas para título executivo (CPC, art. 784, III) |

## Sistema de placeholders

Padrão único, em maiúsculas, entre colchetes, sem preenchimento fictício.

| Placeholder | Uso |
|---|---|
| `[NOME COMPLETO]`, `[RAZÃO SOCIAL]` | Identificação da parte |
| `[CPF]`, `[CNPJ]`, `[RG]`, `[OAB]` | Documento, sempre placeholder se não informado |
| `[ENDEREÇO]`, `[CEP]`, `[CIDADE/UF]` | Localização |
| `[ESTADO CIVIL]`, `[PROFISSÃO]`, `[NACIONALIDADE]` | Qualificação de pessoa física |
| `[REPRESENTANTE LEGAL]`, `[CARGO]` | Quem assina pela pessoa jurídica |
| `[VALOR]`, `[VALOR EM EXTENSO]` | Dinheiro. Sempre número e extenso na versão final |
| `[PRAZO]`, `[DATA DE INÍCIO]`, `[VIGÊNCIA]` | Tempo |
| `[ÍNDICE]`, `[PERCENTUAL]` | Reajuste e penalidade |
| `[ENTREGÁVEL]`, `[ESPECIFICAÇÃO TÉCNICA]` | Objeto |
| `[PREENCHER]` | Campo genérico que a skill não consegue nomear |
| `[NOTA DO ADVOGADO: ...]` | Decisão jurídica pendente, não é campo de preenchimento |
| `[VALIDAR COM O CLIENTE: ...]` | Informação comercial a confirmar |

Regras: nunca gerar número plausível para documento; nunca deixar placeholder dentro de cláusula sem que ele apareça na lista de pendências; nunca usar placeholder em cláusula de foro sem indicar a comarca sugerida entre parênteses.

## Formato da saída

````
[MINUTA COMPLETA em texto corrido numerado, pronta para copiar]

---
## Pendências para o advogado
Bloqueantes (a minuta não pode ir ao cliente sem isso):
- [ ] ...
A conferir com documento real:
- [ ] Contrato social e poderes do representante
- [ ] Comprovante de endereço e dados cadastrais
- [ ] ...
Decisões jurídicas pendentes:
- [ ] [NOTA DO ADVOGADO: ...]

## Blocos que ficaram de fora e por quê
- [bloco] : [motivo]

> Minuta de trabalho. Exige conferência de dados, adequação ao caso concreto
> e revisão do advogado responsável antes da assinatura.
````

## Exemplo completo

**Entrada do usuário:** "Preciso de uma minuta de prestação de serviços de social media. Meu cliente é a agência (contratada). Cliente final é uma clínica odontológica em Belo Horizonte. R$ 3.500,00 por mês, 12 meses, renovação automática. A agência vai ter acesso ao cadastro de pacientes para fazer campanha. Não sei ainda a multa."

**O que a skill responde antes de gerar:** faltam CNPJ e endereço das duas partes, representante da clínica, data de início, dia de vencimento e índice de reajuste. Gera com placeholder e sinaliza dois pontos que mudam a estrutura: acesso a dado de paciente exige bloco LGPD reforçado, e a titularidade do material criado precisa de definição.

**Trechos da minuta gerada:**

```
CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE GESTÃO DE MÍDIAS SOCIAIS

CONTRATANTE: [RAZÃO SOCIAL], pessoa jurídica de direito privado, inscrita no
CNPJ sob o nº [CNPJ], com sede em [ENDEREÇO], [CIDADE/UF], neste ato
representada por [REPRESENTANTE LEGAL], [CARGO], inscrito no CPF sob o
nº [CPF].
CONTRATADA: [RAZÃO SOCIAL], (...) [mesma estrutura].

1. DO OBJETO
1.1. A CONTRATADA prestará serviços de gestão de mídias sociais da
CONTRATANTE, compreendendo: (i) planejamento mensal de conteúdo; (ii)
produção de [QUANTIDADE] publicações por mês; (iii) gestão de campanhas
pagas, com verba de mídia custeada diretamente pela CONTRATANTE; (iv)
relatório mensal de desempenho.
1.2. Não integram o objeto: produção audiovisual em locação externa,
desenvolvimento de site, atendimento a pacientes e resposta a mensagem
privada, salvo aditivo escrito.

5. DO PREÇO E DO REAJUSTE
5.1. A CONTRATANTE pagará R$ 3.500,00 (três mil e quinhentos reais) por mês,
até o dia [DIA] de cada mês, mediante [MEIO DE PAGAMENTO].
5.2. Os valores serão reajustados a cada 12 (doze) meses pela variação
acumulada do [ÍNDICE], ou do índice que legalmente o substituir.
5.3. A verba de mídia não integra a remuneração da CONTRATADA.

8. DAS PENALIDADES
8.1. O atraso no pagamento sujeita a CONTRATANTE a multa moratória de
[PERCENTUAL]% e juros de [PERCENTUAL]% ao mês, além de correção monetária.
8.2. A rescisão sem observância do aviso prévio da cláusula 9.1 sujeita a
parte à multa compensatória equivalente a [PERCENTUAL]% das parcelas
vincendas, limitada ao valor da obrigação principal, sem cumulação com a
multa moratória da cláusula 8.1.
[NOTA DO ADVOGADO: definir os percentuais das cláusulas 8.1 e 8.2. Multa
compensatória acima do valor da obrigação principal é redutível
(CC, arts. 412 e 413).]

11. DA PROTEÇÃO DE DADOS PESSOAIS
11.1. Para a execução deste contrato, a CONTRATANTE atua como controladora e
a CONTRATADA como operadora de dados pessoais, nos termos da
Lei 13.709/2018.
11.2. A CONTRATADA tratará dados pessoais exclusivamente conforme instrução
documentada da CONTRATANTE e para a finalidade da cláusula 1.1.
11.3. É vedado à CONTRATADA utilizar dado de paciente para finalidade
diversa, incluindo prospecção própria ou enriquecimento de base.
11.4. A CONTRATADA adotará as medidas técnicas e administrativas de
segurança do art. 46 da Lei 13.709/2018 e comunicará à CONTRATANTE qualquer
incidente de segurança em até 24 (vinte e quatro) horas do conhecimento.
11.5. A CONTRATADA não subcontratará suboperador sem autorização escrita e
eliminará os dados ao término do contrato, salvo obrigação legal de guarda.
[NOTA DO ADVOGADO: dado de saúde é dado pessoal sensível. Avaliar se a
campanha realmente precisa de base de pacientes ou se público semelhante
resolve. Se a segmentação por condição de saúde for mantida, a base legal e
o registro da operação precisam de decisão do controlador.]

12. DA PROPRIEDADE INTELECTUAL
12.1. O material criado especificamente para a CONTRATANTE fica cedido a
ela, em caráter definitivo, a partir do pagamento integral da parcela
correspondente ao mês de criação.
12.2. Permanecem de titularidade da CONTRATADA metodologia, modelo de
relatório, biblioteca de arte e ferramenta preexistentes, licenciados à
CONTRATANTE apenas para uso das peças entregues.
```

**Pendências entregues junto:** CNPJ e endereço das partes, representante e poderes, dia de vencimento, índice de reajuste, quantidade de publicações, percentuais das cláusulas 8.1 e 8.2, decisão sobre base legal para dado de paciente, comarca do foro (sugestão: Belo Horizonte/MG, sede da CONTRATANTE).

## Erros comuns

- Gerar a minuta inteira sem apontar que faltavam dados estruturais, e o advogado descobrir na leitura.
- Preencher CPF, CNPJ ou endereço com número plausível. Isso passa por revisão e chega assinado errado.
- Copiar cláusula de limitação de responsabilidade de contrato B2B para contrato de consumo.
- Renovação automática com janela de denúncia de poucos dias. Vira armadilha e cai como abusiva em consumo.
- Multa compensatória, multa moratória e perdas e danos cumuladas sem teto.
- Prazo de confidencialidade amarrado ao prazo do contrato. O sigilo deve sobreviver ao fim.
- Contrato com equipe alocada em cliente sem cláusula de ausência de vínculo e sem autonomia descrita.
- Esquecer bloco LGPD quando há qualquer acesso a base de terceiros.
- Numeração quebrada depois de edição, com duas cláusulas 9.1.
- Salvar a minuta sobrescrevendo o modelo do escritório.

## Checklist final

- [ ] Tipo, regime e posição do cliente confirmados
- [ ] Dados mínimos coletados ou explicitamente marcados como pendência
- [ ] Todo placeholder no padrão maiúsculo entre colchetes e listado nas pendências
- [ ] Nenhum documento, valor ou data inventado
- [ ] Numeração hierárquica contínua e sem repetição
- [ ] Blocos condicionais do tipo aplicados; ausências justificadas
- [ ] Objeto com entregável nomeado e exclusões explícitas
- [ ] Preço, vencimento, índice e periodicidade de reajuste presentes
- [ ] Rescisão com aviso prévio, efeitos e penalidade sem cumulação indevida
- [ ] Bloco LGPD presente quando houver tratamento de dado pessoal
- [ ] Propriedade intelectual com momento da cessão definido
- [ ] Foro ou arbitragem, nunca os dois em conflito
- [ ] Testemunhas incluídas quando o cliente quiser título executivo
- [ ] Nenhum dado pessoal de terceiro repetido na resposta
- [ ] Aviso de revisão e assinatura pelo advogado responsável presente

## Conectores (se estiverem ativos)

O que separa uma minuta útil de um modelo de internet é a redação que o escritório já usa. É isso que o conector traz. Consulte a fonte antes de perguntar ao usuário.

**Google Drive**
1. `search_files` pelo modelo que o escritório usa para esse tipo de contrato, e também por contrato anterior com a mesma contraparte.
2. `get_file_metadata` para pegar a versão mais recente quando houver mais de um arquivo parecido.
3. `read_file_content` e siga a estrutura, a numeração e a redação do modelo encontrado. O modelo do escritório vence o genérico desta skill.
4. `create_file` da minuta na pasta indicada pelo usuário, com cliente, tipo e data no nome, somente depois de confirmação explícita.

**Chat Jurídico (MCP)**
1. `buscarContato` pelo nome ou telefone do cliente para recuperar a qualificação já cadastrada.
2. `listarPropriedadesDoContato` para os campos de cadastro que o escritório preenche (documento, endereço, representante).
3. `contexto_conversa` quando o pedido do cliente estiver na conversa de WhatsApp e o escopo precisar sair dali, não da memória.
4. `criarAnotacao` registrando que a minuta foi gerada e o que ficou pendente, somente depois de confirmação explícita.

**Regras ao usar conector**
- Ler é livre. Escrever, salvar, anotar ou enviar exige confirmação explícita na mesma conversa.
- Campo que o cadastro não tem entra como placeholder. Não invente dado de qualificação.
- Não sobrescreva o modelo do escritório nem salve minuta na pasta de modelos.
- Não repita CPF, endereço ou dado bancário no corpo da resposta. O dado entra no documento e permanece na fonte.
- Minuta gerada continua dependendo de conferência do advogado antes de ir ao cliente.

---
name: "Análise de legislação e compliance regulatório"
description: "Lê lei, medida provisória, projeto de lei e norma infralegal e extrai âmbito de aplicação, sujeitos obrigados, obrigações, prazos e vacatio legis, sanções, revogações e disposições transitórias, compara com a redação anterior, mapeia conflito com outras normas e o critério de solução, avalia impacto para o cliente e para o escritório e fecha em checklist operacional P0, P1 e P2 mais nota informativa. Use quando o usuário pedir análise de lei, o que muda com uma norma nova, mapeamento normativo, requisitos de conformidade, checklist de compliance, comparação de redação, acompanhamento de projeto de lei ou nota informativa para cliente. Acionar também quando disser 'saiu uma lei nova', 'isso já está valendo', 'quando entra em vigor', 'o que o cliente precisa fazer até tal data' ou 'essa norma conflita com aquela'. NÃO usar para analisar decisão judicial, para pesquisar precedente, nem para afirmar vigência sem conferência no texto oficial publicado."
---

# Análise de legislação e compliance regulatório

## Função

Ler um texto normativo e devolver ao advogado o que ele precisa para agir: quem está obrigado, a quê, a partir de quando, sob qual sanção, o que foi revogado, com o que a norma colide e o que muda na rotina do cliente e do escritório.

A skill organiza e prepara material de trabalho. Ela não presta consultoria ao cliente final, não substitui parecer regulatório específico e não dispensa a conferência do texto oficial publicado pelo advogado responsável.

**Fora do escopo:** análise de decisão judicial, pesquisa de precedentes, elaboração de contrato, política interna pronta, e afirmação sobre vigência sem consulta à fonte oficial.

## Quando acionar

- Publicou-se lei, medida provisória, decreto, resolução, instrução normativa ou portaria que afeta o cliente ou o escritório.
- É preciso saber o que muda em relação à redação anterior.
- O cliente pergunta se já precisa cumprir algo e a partir de quando.
- Há suspeita de conflito entre duas normas aplicáveis ao mesmo fato.
- É preciso acompanhar projeto de lei em tramitação e antecipar cenário.
- É preciso montar checklist de conformidade por setor ou por atividade.

## Quando NÃO acionar

- Não há texto normativo, apenas notícia sobre ele. Notícia de portal não é fonte. Peça o número, a data e a publicação oficial, ou trate como hipótese declarada.
- A questão é como os tribunais interpretam a norma. Isso é pesquisa de jurisprudência.
- A questão é aplicação da norma a decisão já proferida no caso. Isso é análise de decisão.
- O tema é de alta densidade regulatória e o usuário precisa de parecer opinativo assinado. Sinalize a necessidade de especialista regulatório.

## Princípios

1. **Nunca fabricar citação.** Não invente número de lei, de artigo, de decreto, de resolução, de projeto de lei nem data de publicação. Se o usuário não forneceu o texto e você não consultou a fonte oficial na conversa, descreva o instituto sem número e marque `[número e redação a conferir no texto oficial]`. Dizer que um artigo existe quando ele não existe leva o cliente a cumprir obrigação inexistente ou a ignorar obrigação real. É o risco número um desta skill.
2. **Redação vigente é a publicada, não a lembrada.** Norma sofre alteração por lei posterior, conversão de medida provisória, republicação e retificação. Toda análise indica onde conferir a redação consolidada: Planalto e LexML no âmbito federal, diário e portal oficial no âmbito estadual e municipal, e o Diário Oficial da União para a publicação original.
3. **Projeto de lei não é lei.** Enquanto tramita, a norma é cenário, não obrigação. Nunca redija comunicado ao cliente que trate texto em tramitação como exigível. Marque com destaque o estágio processual e o que pode mudar.
4. **Vigência, eficácia e aplicação no tempo são três perguntas distintas.** Norma pode estar vigente e sem eficácia plena, pode depender de regulamentação, pode ter vacatio em curso e pode ter regra própria de aplicação a fatos anteriores. Responda as três separadamente.
5. **Obrigação sem sujeito e sem prazo é inútil.** Toda obrigação extraída precisa dizer quem cumpre, o que faz, até quando e como comprova.
6. **Conflito se resolve por critério, não por preferência.** Aplique hierarquia, especialidade e cronologia, nessa ordem de peso, e registre o critério usado. Se os critérios apontarem para lados diferentes, declare a antinomia como controvertida em lugar de escolher em silêncio.
7. **Impacto tem dois destinatários.** O que muda para o cliente e o que muda para o escritório, incluindo prazos internos, cláusulas de contrato a revisar e comunicação a disparar.
8. **Sem alarmismo e sem minimização.** Risco se gradua em P0, P1 e P2, com o efeito concreto de cada nível. Nada de "atenção máxima" genérico.
9. **LGPD.** A nota informativa não reproduz dado pessoal de cliente nem dado sensível de operação. Em exemplos, use partes fictícias.

## Fluxo

### Etapa 1. Identificar a espécie normativa e o que checar nela

| Espécie | O que verificar primeiro | Ponto de falha comum |
|---|---|---|
| Emenda constitucional | Aprovação em dois turnos nas duas casas por três quintos (art. 60 da Constituição), regras de transição no próprio texto | Ignorar a regra de transição e aplicar o novo regime a situação já constituída |
| Lei complementar | Matéria reservada a lei complementar e quórum de maioria absoluta (art. 69 da Constituição) | Tratar como lei ordinária matéria reservada |
| Lei ordinária | Cláusula de vigência, cláusula de revogação, disposições transitórias | Presumir vigência imediata |
| Medida provisória | Prazo de vigência de 60 dias prorrogável uma vez, vedações materiais e efeitos da não conversão (art. 62 da Constituição) | Orientar cumprimento definitivo de regra que pode perder eficácia |
| Decreto regulamentar | Se apenas regulamenta ou se cria obrigação nova, o que extrapola a competência do art. 84, IV, da Constituição | Aceitar obrigação criada por decreto sem base legal |
| Resolução ou instrução normativa de agência | Competência normativa na lei de criação, existência de consulta pública e de análise de impacto regulatório, prazo de adequação | Confundir orientação técnica com obrigação sancionável |
| Portaria, ato de conselho profissional, provimento | Alcance subjetivo e força vinculante real | Tratar recomendação como norma |
| Norma estadual ou municipal | Competência do ente e coexistência com norma federal | Assumir que a federal esgota a matéria |

Registre também a data de publicação, o veículo oficial e se houve republicação ou retificação.

### Etapa 2. Ficha de extração

Preencha para cada norma analisada. Campo sem confirmação fica marcado.

- **Objeto.** O que a norma disciplina, em uma frase.
- **Âmbito de aplicação.** Territorial, material e temporal. O que ela expressamente exclui.
- **Sujeitos obrigados.** Quem é destinatário direto, quem é destinatário reflexo, quem está dispensado e com base em qual critério (porte, faturamento, atividade, natureza jurídica).
- **Obrigações.** Uma linha por obrigação, no formato: sujeito, verbo, objeto, prazo, forma de comprovação.
- **Vedações.** O que passa a ser proibido, com o marco temporal.
- **Prazos e vacatio legis.** Data de entrada em vigor, prazos de adequação, prazos periódicos de cumprimento. Sem cláusula expressa de vigência, aplica-se a regra geral da Lei de Introdução às Normas do Direito Brasileiro, que fixa entrada em vigor em 45 dias após a publicação, salvo disposição em contrário. A técnica legislativa exige cláusula de vigência com prazo razoável, reservando a vigência imediata a normas de pequena repercussão, conforme a lei complementar de técnica legislativa.
- **Sanções.** Natureza (administrativa, civil, penal), gradação, autoridade competente, existência de circunstância atenuante e agravante, e prazo de prescrição da pretensão punitiva, que deve ser conferido na norma específica.
- **Revogações.** Expressas, com o dispositivo revogado nomeado, e tácitas por incompatibilidade ou por regulação integral da matéria. A regra está no art. 2º da Lei de Introdução, que também afasta a repristinação automática. A boa técnica exige enumeração expressa das disposições revogadas.
- **Disposições transitórias.** Como ficam contratos em curso, processos administrativos pendentes e situações já constituídas.
- **Dependência de regulamentação.** Se a norma remete a ato posterior, identifique o ato, o órgão e se já foi editado. Obrigação que depende de regulamento inexistente não é exigível na parte dependente.

### Etapa 3. Vigência, eficácia e aplicação no tempo

- **Vacatio legis em curso.** Diga a data de início de vigência e o que o cliente deve fazer nesse intervalo.
- **Situações já constituídas.** A lei nova tem efeito imediato e geral, respeitados o ato jurídico perfeito, o direito adquirido e a coisa julgada, conforme o art. 6º da Lei de Introdução e o art. 5º, XXXVI, da Constituição.
- **Matéria tributária.** Verifique irretroatividade e as anterioridades do art. 150, III, da Constituição, incluindo a anterioridade de exercício e a de 90 dias, além da regra própria das contribuições sociais. Norma publicada em dezembro raramente produz efeito em janeiro.
- **Matéria penal.** Irretroatividade da lei mais severa e retroatividade da mais benéfica (art. 5º, XXXIX e XL, da Constituição).
- **Matéria processual.** Ato processual já praticado se rege pela lei do tempo em que foi praticado. Norma nova alcança atos futuros do processo em curso.
- **Medida provisória.** Se ainda não convertida, registre a data-limite e o que acontece com as relações jurídicas constituídas em caso de não conversão.

### Etapa 4. Comparação com a redação anterior

Tabela de-para, um dispositivo por linha. Sem esta tabela, o cliente não entende o que precisa mudar.

| Dispositivo | Redação anterior | Redação nova | Natureza da mudança | Ação exigida |
|---|---|---|---|---|
| Art. X | [transcrição ou "a conferir"] | [transcrição ou "a conferir"] | Ampliação de sujeitos obrigados | Reavaliar enquadramento do cliente |
| Art. Y | Prazo de 30 dias | Prazo de 15 dias | Redução de prazo | Ajustar fluxo interno e sistema |
| Art. Z | Sem sanção | Multa graduada | Criação de sanção | Priorizar adequação como P0 |

Natureza da mudança em quatro categorias: cria obrigação, altera obrigação existente, extingue obrigação, ou apenas reorganiza texto sem efeito material. A quarta categoria evita alarme desnecessário.

### Etapa 5. Conflito com outras normas

Liste os candidatos a conflito e resolva com critério explícito.

| Critério | Regra | Uso |
|---|---|---|
| Hierarquia | Norma superior prevalece | Decreto ou resolução que cria obrigação sem base legal, norma local que contraria lei nacional |
| Especialidade | Norma especial prevalece sobre a geral, e lei geral não revoga nem modifica a especial, conforme o art. 2º, §2º, da Lei de Introdução | Regime setorial contra regra geral |
| Cronologia | Norma posterior prevalece sobre a anterior de mesma hierarquia e mesmo grau de especialidade | Sucessão de leis sobre o mesmo objeto |

Casos que exigem tratamento próprio: relação de consumo, em que a norma protetiva convive com regimes setoriais e admite composição em lugar de exclusão. Relação de trabalho, em que a prevalência de instrumento coletivo sobre a lei tem limites definidos na própria CLT, cujos dispositivos devem ser conferidos. Norma infralegal que extrapola o poder regulamentar, situação em que o conflito não é de conteúdo, e sim de competência.

Quando os critérios apontam para soluções distintas, registre: "antinomia não resolvida por critério único, com risco de interpretação divergente", e indique a consequência prática de cada leitura.

### Etapa 6. Impacto

**Para o cliente.** Enquadramento (está obrigado, não está, ou depende de critério a apurar). Processos internos afetados. Sistemas e registros a ajustar. Contratos com cláusula a revisar. Custo estimado de adequação em termos qualitativos. Prazo mais curto do calendário.

**Para o escritório.** Teses e peças-padrão que precisam ser atualizadas. Contratos de prestação de serviço e políticas internas afetados. Clientes que precisam ser comunicados, agrupados por segmento. Prazos internos a lançar em agenda. Oportunidade de trabalho consultivo, quando houver.

### Etapa 7. Checklist operacional

| Prioridade | Critério | Exemplo de item |
|---|---|---|
| P0 | Descumprimento impede a operação, gera interdição, suspensão de atividade, nulidade de contrato ou sanção imediata | Obter registro obrigatório antes do início de vigência |
| P1 | Descumprimento gera multa relevante, autuação ou exposição contratual | Ajustar prazo de resposta e criar registro auditável |
| P2 | Melhoria de conformidade, reduz risco sem obrigação imediata | Revisar redação de cláusula informativa |

Cada item recebe: obrigação, base normativa com dispositivo, prazo, evidência de cumprimento a arquivar, área responsável (área, nunca pessoa nomeada) e situação.

### Etapa 8. Acompanhamento de tramitação

Quando o objeto é projeto de lei ou medida provisória em curso:

- Registre casa de origem, comissões pelas quais precisa passar, estágio atual, existência de regime de urgência e de relatoria designada.
- Sinalize que texto de comissão muda em plenário e que substitutivo altera a numeração de artigos, o que invalida qualquer análise feita sobre a versão anterior.
- Para medida provisória, registre a data-limite de conversão e o efeito do trancamento de pauta.
- Para projeto aprovado, registre o estágio de sanção ou veto, com os prazos e a possibilidade de derrubada de veto pelo Congresso, cujos prazos constam do art. 66 da Constituição.
- Fontes de acompanhamento: portais da Câmara dos Deputados, do Senado Federal e do Congresso Nacional no âmbito federal, e portais das assembleias legislativas e câmaras municipais nos demais âmbitos.
- Comunicação ao cliente sobre texto em tramitação sai sempre com a marca de cenário e com a data da consulta.

### Etapa 9. Entregáveis

Duas saídas, dois públicos. Nota técnica interna com dispositivo, tabela de-para e checklist. Nota informativa ao cliente, curta, sem jargão, dizendo o que mudou, se ele está obrigado, o que fazer e até quando.

## Formato da saída

```
ANALISE NORMATIVA
Norma: [especie, numero e data conforme o texto oficial, ou "informado pelo usuario, a conferir"]
Publicacao: [veiculo e data]   Republicacao ou retificacao: [sim / nao / a conferir]
Situacao: [vigente / vacatio em curso / em tramitacao / convertida / revogada]
Objeto em uma frase: [...]

1. AMBITO DE APLICACAO
Territorial / material / temporal: [...]
Exclusoes expressas: [...]

2. SUJEITOS OBRIGADOS
Diretos: [...]   Reflexos: [...]   Dispensados e criterio: [...]
Enquadramento do cliente: [obrigado / nao obrigado / a apurar por criterio X]

3. OBRIGACOES
| Sujeito | Obrigacao | Prazo | Comprovacao | Dispositivo |

4. VEDACOES E SANCOES
| Conduta vedada | Sancao | Natureza | Autoridade | Dispositivo |

5. VIGENCIA E APLICACAO NO TEMPO
Entrada em vigor: [...]   Vacatio: [...]
Prazos de adequacao: [...]
Situacoes ja constituidas: [...]
Dependencia de regulamentacao: [ato, orgao, editado ou nao]

6. REVOGACOES E TRANSITORIAS
Expressas: [...]   Tacitas provaveis: [...]
Regras de transicao: [...]

7. DE-PARA
| Dispositivo | Antes | Depois | Natureza da mudanca | Acao exigida |

8. CONFLITOS
| Norma em tensao | Ponto de choque | Criterio aplicavel | Solucao | Risco residual |

9. IMPACTO
Para o cliente: [...]
Para o escritorio: [...]

10. CHECKLIST
P0: [...]   P1: [...]   P2: [...]

11. A CONFERIR NA FONTE OFICIAL
[numeros, redacoes, datas, vigencia e regulamentacao pendentes]

12. NOTA INFORMATIVA AO CLIENTE
[texto curto, sem artigo de lei, com o que mudou, se se aplica a ele,
o que fazer, ate quando, e o que ainda depende de confirmacao]
```

## Exemplo completo

**Entrada.** O usuário informa que tramita projeto de lei estadual, ainda sem aprovação, obrigando prestadores de serviço continuado a manter canal digital de atendimento com fornecimento de número de protocolo em toda interação e resposta em prazo fixo, com multa administrativa por descumprimento. O cliente fictício é a Clínica Bem Viver Serviços Médicos Ltda.

**Saída resumida.**

- Situação: texto em tramitação. Nada é exigível ainda. A análise vale como cenário e a numeração de artigos pode mudar por substitutivo. Número do projeto, casa, comissão e estágio devem ser conferidos no portal da assembleia legislativa, com registro da data da consulta.
- Âmbito: competência estadual sobre proteção do consumidor coexiste com a norma federal de consumo, o que afasta a leitura de que a regra estadual invalida a federal e recomenda análise de compatibilidade em lugar de exclusão. Ponto a conferir: se o texto alcança atividade sujeita a regulação sanitária própria.
- Sujeitos obrigados: prestadores de serviço continuado no território estadual. O enquadramento da clínica depende do critério de continuidade adotado no texto e de eventual corte por porte, que precisa ser lido no dispositivo, não presumido.
- Obrigações extraídas: manter canal digital, gerar protocolo em toda interação, responder no prazo previsto, arquivar histórico por período determinado. Cada uma com prazo e forma de comprovação a confirmar na redação final.
- Sanção: multa administrativa graduada, com autoridade competente e critérios de dosimetria a conferir, além do prazo de prescrição da pretensão punitiva na norma estadual aplicável.
- Conflito potencial: se a norma estadual fixar prazo de resposta menor que o da regulamentação federal aplicável ao setor, prevalece o critério mais protetivo ao consumidor na leitura de convivência de fontes, com risco residual de questionamento por invasão de competência. Registrar como antinomia controvertida.
- Impacto para a clínica: ajuste no sistema de atendimento para gerar protocolo, definição de fluxo de resposta com registro auditável, treinamento da recepção, revisão da política de retenção de histórico à luz da proteção de dados pessoais, porque o registro obrigatório aumenta o volume de dado tratado.
- Impacto para o escritório: incluir o tema no monitoramento semanal, preparar nota informativa para a carteira de clientes prestadores de serviço continuado no estado, e revisar cláusula de atendimento nos contratos-padrão.
- Checklist: P0 nenhum, porque não há obrigação vigente. P1 preparar capacidade técnica de gerar protocolo, para não depender de prazo curto de adequação. P2 revisar textos de atendimento.
- Nota ao cliente: "Existe projeto de lei estadual em discussão que pode obrigar clínicas a registrar protocolo em todo atendimento digital e responder em prazo definido. Nada precisa ser cumprido agora. Estamos acompanhando e avisaremos se o texto for aprovado, com o prazo de adequação e o que será necessário no sistema."

## Erros comuns

- Citar número de lei ou de artigo de memória. Erro de um dígito muda a norma inteira.
- Tratar notícia de portal como texto normativo.
- Comunicar projeto de lei como se já estivesse valendo.
- Presumir vigência imediata quando a norma não traz cláusula de vigência.
- Ignorar dependência de regulamentação e cobrar do cliente obrigação ainda não exigível.
- Esquecer as anterioridades em matéria tributária.
- Analisar a versão de comissão e não perceber que o substitutivo renumerou os artigos.
- Concluir revogação tácita sem verificar se a norma anterior é especial.
- Entregar lista de obrigações sem prazo, sem sujeito e sem forma de comprovação.
- Classificar tudo como P0 e destruir a utilidade da priorização.
- Enviar ao cliente a nota técnica interna, com dispositivos e tabela de-para, em lugar da nota informativa.

## Checklist final

- [ ] Espécie normativa identificada, com veículo e data de publicação
- [ ] Situação declarada: vigente, em vacatio, em tramitação ou revogada
- [ ] Republicação ou retificação verificada
- [ ] Âmbito de aplicação e exclusões expressas registrados
- [ ] Sujeitos obrigados e enquadramento do cliente definidos ou marcados como a apurar
- [ ] Cada obrigação com sujeito, prazo e forma de comprovação
- [ ] Sanções com natureza, gradação e autoridade competente
- [ ] Entrada em vigor e prazos de adequação apurados
- [ ] Dependência de regulamentação verificada
- [ ] Revogações expressas nomeadas e tácitas avaliadas pelo critério de especialidade
- [ ] Tabela de-para preenchida quando houve alteração de redação
- [ ] Conflitos resolvidos com critério explícito, e antinomia controvertida declarada como tal
- [ ] Impacto separado entre cliente e escritório
- [ ] Checklist em P0, P1 e P2 com base normativa por item
- [ ] Nenhum número, redação ou data inventados. Tudo não confirmado marcado como a conferir
- [ ] Nota informativa ao cliente separada da nota técnica interna
- [ ] Nenhum dado pessoal identificável reproduzido

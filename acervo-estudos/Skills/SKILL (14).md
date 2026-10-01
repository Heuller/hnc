---
name: "Compliance LGPD para escritório de advocacia"
description: "Conduz diagnóstico de adequação à LGPD (Lei 13.709/2018) no próprio escritório: inventário de dados por canal, base legal de cada tratamento, prazo de retenção e descarte, resposta a pedido de titular, plano de incidente e checklist de auditoria com evidência. Use quando o usuário pedir diagnóstico LGPD, adequação à LGPD, política de privacidade, inventário de dados, registro de operações de tratamento, contrato com fornecedor ou plano de resposta a incidente. Acionar também quando disser 'vazou dado de cliente', 'um cliente pediu para apagar os dados dele', 'quanto tempo eu guardo o processo', 'preciso nomear encarregado' ou 'chegou ofício da ANPD'. NÃO usar para redigir peça de indenização por vazamento, parecer para cliente terceiro ou projeto de consultoria LGPD vendido pelo escritório: aqui o objeto é a casa do próprio escritório."
---

# Compliance LGPD para escritório de advocacia

## Função

Organizar a adequação do **próprio escritório** à Lei 13.709/2018: mapear o que é coletado, por qual canal, com qual finalidade e base legal; definir prazo de guarda; preparar resposta a titular e a incidente; produzir a documentação mínima que sustenta uma fiscalização.

A skill **organiza, checa e prepara**. Ela não presta consultoria jurídica, não emite parecer de compliance e não substitui o encarregado. A decisão sobre base legal, prazo de guarda e comunicação de incidente é sempre do responsável designado pelo escritório.

**Fora do escopo:** projeto de adequação vendido a cliente, relatório de impacto (RIPD) formal, defesa em processo sancionador da ANPD, cálculo de dano por vazamento.

## Quando acionar

- "Quero um diagnóstico LGPD do escritório"
- "Que base legal eu uso para o WhatsApp de atendimento?"
- "Quanto tempo guardo a pasta depois que o processo arquivou?"
- "Um ex-cliente pediu exclusão de todos os dados dele"
- "Vazou uma planilha de contatos, o que faço nas próximas horas?"
- "Preciso de cláusula de proteção de dados no contrato com o software jurídico"
- "Vou treinar a equipe, monta a pauta"

## Quando NÃO acionar

- Petição, defesa ou parecer para cliente do escritório (é trabalho jurídico, não compliance interno)
- Discussão doutrinária sobre a LGPD
- Auditoria de sistema com teste técnico de segurança (pentest, revisão de código)
- Pedido de valor de multa ou de dosimetria de sanção

## Princípios

1. **Escritório é controlador dos dados dos clientes.** Ele decide finalidade e meios do tratamento. Software jurídico, provedor de e-mail e nuvem são operadores. Sem essa separação clara, nenhum contrato nem resposta a titular fica coerente.

2. **Dado de cliente em processo tem base própria.** Tratamento para exercício regular de direitos em processo judicial, administrativo ou arbitral (art. 7, VI) e, quando o dado é sensível, a hipótese equivalente do art. 11, II. Isso vale para dado de saúde em ação previdenciária, dado criminal em defesa penal, dado de filiação sindical em reclamatória. **Não pedir consentimento onde a base é outra:** consentimento pode ser revogado, e o escritório não pode parar de tratar o dado no meio de um processo.

3. **Minimização vence formulário longo.** Cada campo pedido no site ou no WhatsApp precisa justificar por que existe. Coletar CPF na primeira mensagem, antes de saber se há caso, cria risco sem contrapartida.

4. **Sigilo profissional é camada adicional, não substituto.** O dever de sigilo do advogado convive com a LGPD e é mais rígido em alguns pontos. Atender a LGPD não autoriza expor informação sob sigilo, e invocar sigilo não dispensa transparência sobre o tratamento.

5. **Sem registro, não houve conformidade.** A lei exige registro das operações de tratamento (art. 37). Em escritório pequeno isso é uma planilha viva, revisada por data, não um documento bonito feito uma vez.

6. **Retenção tem prazo escrito.** "Guardamos tudo para sempre" é decisão de retenção, só que tomada por omissão e sem base. Cada categoria de dado precisa de prazo, gatilho de contagem e destino final.

7. **Incidente se resolve com plano pronto.** No dia do vazamento não há tempo de descobrir quem avisa, quem decide e o que se comunica. O plano precisa existir antes, com nome e telefone.

8. **Fornecedor sem contrato é risco assumido.** Se o software jurídico, o CRM de WhatsApp ou a nuvem tratam dado de cliente, precisa haver cláusula de proteção de dados, dever de sigilo, aviso de incidente e regra de devolução ou eliminação no fim do contrato.

9. **Equipe é a superfície de ataque real.** A maioria dos incidentes de escritório sai de WhatsApp pessoal, PDF enviado para o número errado e senha compartilhada, não de invasão sofisticada.

10. **Quando houver dúvida sobre base legal, registrar a dúvida.** Nunca preencher a planilha com uma base plausível só para fechar a linha. Marcar como pendente e escalar ao responsável.

## Fluxo

```
1. Escopo e papéis      →  2. Inventário por canal   →  3. Base legal por tratamento
        ↓                                                        ↓
6. Documentos e plano   ←  5. Direitos e incidente   ←  4. Retenção e descarte
        ↓
7. Checklist de auditoria com evidência
```

### Etapa 1: escopo e papéis

Levantar antes de qualquer análise:

- Número de advogados, estagiários, secretaria, terceirizados (contabilidade, TI, marketing)
- Sistemas em uso: software jurídico, CRM de WhatsApp, e-mail, nuvem, planilhas, backup
- Existe encarregado designado (art. 41)? Nome, e-mail público, quem substitui nas férias
- Há canal do titular publicado no site? Qual e-mail recebe?
- Houve incidente nos últimos 12 meses?

Se o escritório não tem encarregado, isso é o **primeiro gap**. Em banca pequena costuma ser o sócio administrador, com e-mail dedicado do tipo `privacidade@` publicado no site.

### Etapa 2: inventário de dados por canal

Preencher uma linha por canal. Este é o núcleo do trabalho, e é o que a maioria dos escritórios nunca fez.

| Canal | O que entra na prática | Onde fica | Quem acessa | Risco típico |
|---|---|---|---|---|
| WhatsApp de atendimento | Nome, telefone, relato do caso, foto de documento, print de conversa, áudio | Aparelho, nuvem do CRM, backup do WhatsApp | Recepção, advogado responsável | Aparelho pessoal, backup fora de controle, encaminhamento para grupo |
| Formulário do site | Nome, e-mail, telefone, área, descrição livre do problema | E-mail de destino, planilha, CRM | Quem lê a caixa de entrada | Descrição livre traz dado sensível não solicitado |
| E-mail | Contrato, procuração, documento pessoal em anexo, extrato | Caixa do provedor, pasta local | Todos com acesso à caixa compartilhada | Caixa compartilhada sem log, anexo em cópia oculta errada |
| Presencial e telefone | Qualificação completa, CPF, RG, endereço, estado civil | Ficha em papel, planilha, sistema | Recepção | Papel em mesa aberta, ficha antiga em gaveta |
| Processo e sistema jurídico | Qualificação, provas, laudo médico, antecedentes, dado bancário | Software jurídico, nuvem, pasta física | Equipe do caso | Acesso amplo demais dentro do sistema |
| Recrutamento | Currículo, foto, pretensão salarial | E-mail, Drive | Sócio, RH | Currículo guardado por anos sem finalidade |
| Financeiro e cobrança | CPF, dado bancário, chave PIX, valor devido | Planilha, banco, contabilidade | Financeiro, contador | Planilha compartilhada com link aberto |
| Marketing | Lista de e-mails, pixel, público de anúncio | Ferramenta de e-mail, Meta, Google | Agência, sócio | Lista de cliente usada para anúncio sem base |

Para cada linha, marcar se há **dado sensível** (art. 5, II): saúde, dado biométrico, dado genético, origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, vida sexual. Em escritório, saúde e dado criminal aparecem com frequência, e áudio de WhatsApp costuma conter os dois sem que ninguém tenha pedido.

Também marcar **dado de criança e adolescente**, que exige tratamento no melhor interesse e cuidado adicional na guarda e no compartilhamento.

### Etapa 3: base legal por tratamento

Base legal é por **tratamento**, não por pessoa. O mesmo cliente gera várias linhas.

| Tratamento | Base legal candidata | Cuidado |
|---|---|---|
| Triagem de quem chega pelo WhatsApp ou formulário | Procedimentos preliminares relacionados a contrato a pedido do titular (art. 7, V) | Quem não fecha contrato não vira lead de marketing pela mesma base |
| Execução do contrato de honorários | Execução de contrato (art. 7, V) | Cobre o serviço contratado, não campanha publicitária |
| Atuação no processo, incluindo dado sensível da parte e de terceiros | Exercício regular de direitos em processo (art. 7, VI; para sensível, art. 11, II) | Base robusta e não revogável por vontade do titular no curso do processo |
| Guarda de documento fiscal e contábil | Cumprimento de obrigação legal ou regulatória (art. 7, II) | Prazo vem da norma fiscal, não da vontade do escritório |
| Folha, ponto e admissão de funcionário | Cumprimento de obrigação legal (art. 7, II) e execução de contrato de trabalho | Dado de saúde de exame ocupacional exige tratamento específico |
| Newsletter e conteúdo para quem não é cliente | Consentimento (art. 7, I) | Precisa de opt-in registrado com data e de descadastramento em 1 clique |
| Remarketing e público personalizado em anúncio | Consentimento, ou legítimo interesse (art. 7, IX) com teste documentado | Não subir lista de cliente de processo para plataforma de anúncio |
| Currículo recebido sem vaga aberta | Consentimento, com prazo curto | Definir descarte, por exemplo 6 meses, e cumprir |
| Gravação de reunião ou de ligação | Consentimento, avisando antes | Aviso genérico no rodapé não substitui o aviso no início da chamada |

Quando a base escolhida é **legítimo interesse**, registrar em três linhas: qual o interesse, por que a expectativa do titular é compatível e qual salvaguarda foi adotada. Sem esse registro, a base não se sustenta.

### Etapa 4: retenção e descarte

Definir prazo, gatilho e destino. Os prazos abaixo são prática de mercado e servem como ponto de partida: confirmar com o contador e com o responsável antes de fixar.

| Categoria | Prazo sugerido | Contado de | Destino no fim |
|---|---|---|---|
| Pasta de caso encerrado (digital e física) | 5 anos | Arquivamento definitivo ou fim do último recurso | Eliminação, ou anonimização se quiser manter estatística |
| Contrato de honorários e comprovante de pagamento | 5 anos | Quitação | Eliminação |
| Documento fiscal e contábil | 5 anos | Fato gerador | Eliminação após aval do contador |
| Documento trabalhista de funcionário desligado | 5 anos, e mais tempo para o que a norma previdenciária exigir | Desligamento | Eliminação |
| Lead que não fechou contrato | 12 meses | Último contato | Eliminação, ou manter apenas nome e telefone com registro de recusa |
| Currículo sem vaga | 6 meses | Recebimento | Eliminação |
| Conversa de WhatsApp de atendimento | 24 meses | Última mensagem | Eliminação, preservando o que já entrou na pasta do caso |
| Lista de newsletter | Enquanto houver consentimento válido | Opt-in | Eliminação no descadastramento |
| Log de acesso a sistema | 12 meses | Registro | Eliminação |

Regras de execução do descarte:

- **Papel:** fragmentadora, nunca lixo comum. Registrar em ata simples: data, categoria, volume, quem executou.
- **Digital:** apagar no sistema, na lixeira, nas cópias em pasta pessoal e no backup segundo o ciclo do fornecedor. Backup que retém por 90 dias mantém o dado por 90 dias após o apagamento, e isso precisa constar na resposta ao titular.
- **Conservação apesar do pedido de exclusão:** há hipóteses de conservação, entre elas cumprimento de obrigação legal e uso exclusivo do controlador com dado anonimizado. Quando aplicar, dizer ao titular o que foi mantido e por quê.

### Etapa 5: direitos do titular e incidente

#### Pedido de titular, passo a passo

Direitos previstos no art. 18: confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dado desnecessário ou excessivo, portabilidade, eliminação de dado tratado com consentimento, informação sobre compartilhamento, informação sobre a possibilidade de não consentir, revogação do consentimento.

1. **Registrar a entrada** (dia 0): data, canal, identidade do requerente, qual direito foi exercido, texto do pedido. Uma linha na planilha de pedidos.
2. **Confirmar identidade** sem coletar mais dado do que o necessário. Se o pedido vem do e-mail já cadastrado, isso costuma bastar. Não pedir selfie com documento por padrão.
3. **Triar em 48 horas** quem responde: encarregado decide, equipe do caso levanta.
4. **Responder confirmação e acesso**: de forma imediata em formato simplificado, ou por declaração clara e completa no prazo legal de 15 dias contado do requerimento.
5. **Aplicar limite quando existir**: pedido de exclusão de dado que integra processo em curso ou que está sob guarda obrigatória é recusado de forma fundamentada, indicando a base e o prazo em que o dado será eliminado.
6. **Fechar com prova**: guardar a resposta enviada, a data e o que foi efetivamente feito no sistema. Sem essa evidência, o escritório não consegue demonstrar que atendeu.
7. **Informar o caminho da reclamação** à ANPD e aos órgãos de defesa do consumidor, quando o titular não concordar com a resposta.

Prazo interno recomendado: responder em 10 dias corridos, para sobrar folga dentro do prazo legal.

#### Incidente de segurança: primeiras 24 horas

Gatilho: perda, furto, acesso não autorizado, envio para destinatário errado, ransomware, publicação indevida, aparelho perdido com WhatsApp ativo.

| Janela | Ação | Responsável |
|---|---|---|
| 0 a 1 hora | Conter: cortar acesso, trocar senha, revogar sessão, desconectar aparelho, retirar link público | TI ou sócio administrador |
| 1 a 4 horas | Preservar evidência: print, log, e-mail, horário. Não apagar nada | Quem detectou, com o encarregado |
| 4 a 12 horas | Dimensionar: quantos titulares, quais categorias, houve dado sensível, houve dado de menor, o dado estava criptografado | Encarregado |
| 12 a 24 horas | Decidir comunicação, redigir comunicado ao titular e à ANPD, avisar seguradora e fornecedor envolvido | Encarregado com sócio responsável |
| Até o 3º dia útil | Comunicar à ANPD quando houver risco ou dano relevante ao titular. O regulamento da ANPD sobre comunicação de incidente fixa prazo curto, hoje contado em dias úteis a partir do conhecimento: confirmar o prazo vigente no site da ANPD antes de enviar | Encarregado |
| Após | Registrar causa raiz, medida corretiva e prazo. Revisar o plano | Encarregado |

O art. 48 exige comunicação ao titular e à autoridade quando o incidente puder acarretar risco ou dano relevante. Conteúdo mínimo do comunicado: descrição do que aconteceu, categorias de dados envolvidas, número aproximado de titulares, medidas técnicas de proteção que existiam, riscos, o que já foi feito, o que o titular deve fazer, canal de contato do encarregado.

Comunicado ao titular em linguagem simples, sem jargão e sem minimizar o fato. Não incluir no comunicado dado pessoal de outro titular.

### Etapa 6: fornecedores, contratos e treinamento

**Cláusula mínima com operador** (software jurídico, CRM, nuvem, contabilidade, agência):

- Objeto e finalidade do tratamento, com proibição de uso para finalidade própria do fornecedor
- Dever de sigilo estendido a empregados e subcontratados
- Necessidade de autorização prévia para subcontratar
- Obrigação de comunicar incidente ao escritório em prazo fixo, sugestão de 24 horas
- Cooperação em pedido de titular e em fiscalização
- Devolução ou eliminação comprovada dos dados no fim do contrato, com prazo
- Local de armazenamento e regra de transferência internacional
- Auditoria ou, no mínimo, apresentação de relatório de segurança

**Cláusula no contrato de honorários:** informar finalidade do tratamento, base legal do trabalho no processo, compartilhamento necessário com tribunal, perito e correspondente, prazo de guarda da pasta e canal do encarregado. Redação curta, sem pedir consentimento genérico para tudo.

**Treinamento de equipe**, pauta de 60 minutos, uma vez por semestre:

1. O que é dado pessoal e sensível, com exemplos tirados da rotina do escritório
2. Regra de WhatsApp: número corporativo, sem grupo com cliente, sem encaminhar documento de cliente para conversa pessoal
3. Regra de e-mail: conferir destinatário, usar cópia oculta em disparo, nunca anexar pasta inteira
4. Senha e segundo fator, com gerenciador de senha em vez de planilha
5. Mesa limpa, tela bloqueada, papel na fragmentadora
6. O que fazer nos primeiros 30 minutos de um incidente, e para quem ligar
7. Assinatura de termo de confidencialidade e de ciência da política interna

Registrar presença com data e assinatura. A lista de presença é a evidência do treinamento.

## Checklist de auditoria com evidência

Cada item precisa de evidência guardável. Sem evidência, marcar como não conforme.

| Item | Evidência esperada | Status |
|---|---|---|
| Encarregado designado e divulgado | Ato de nomeação assinado e página do site com o e-mail de contato | |
| Inventário de dados atualizado | Planilha com data da última revisão em até 12 meses | |
| Registro das operações de tratamento (art. 37) | Planilha por tratamento com finalidade, base legal, compartilhamento, retenção | |
| Política de privacidade publicada | URL, data de vigência e histórico de versões | |
| Aviso de privacidade no formulário e no WhatsApp | Print da tela e do texto da mensagem automática | |
| Base legal registrada por tratamento | Coluna preenchida, sem linha pendente | |
| Teste de legítimo interesse, onde usado | Documento de 1 página por tratamento | |
| Tabela de retenção aprovada | Documento assinado pelo sócio responsável | |
| Descarte executado no período | Ata de descarte com data e volume | |
| Fluxo de pedido de titular | Planilha de pedidos com data de entrada e de resposta | |
| Plano de incidente | Documento com nomes, telefones e prazos | |
| Contrato com cláusula de proteção de dados | Contratos assinados de cada operador ativo | |
| Controle de acesso por perfil no sistema jurídico | Print da matriz de permissões | |
| Segundo fator ativo em e-mail e sistema jurídico | Print da configuração | |
| Backup testado | Registro do último teste de restauração com data | |
| Treinamento no último semestre | Lista de presença assinada | |
| Termo de confidencialidade da equipe | Termos assinados, incluindo estagiários e terceirizados | |
| Transferência internacional mapeada | Lista de fornecedores com país de armazenamento | |

## Formato da saída

```
DIAGNÓSTICO LGPD
Escritório: [nome]  |  Data: [dd/mm/aaaa]  |  Responsável: [nome]
Papel predominante: controlador  |  Encarregado: [nome ou NÃO DESIGNADO]

1. INVENTÁRIO POR CANAL
[tabela: canal | dados | onde fica | quem acessa | sensível? | risco]

2. BASE LEGAL POR TRATAMENTO
[tabela: tratamento | finalidade | base legal | evidência | pendência]

3. RETENÇÃO
[tabela: categoria | prazo | gatilho | destino]

4. GAPS PRIORIZADOS
Crítico  (agir em 7 dias):   [item + por que é crítico + ação]
Alto     (30 dias):          [...]
Médio    (90 dias):          [...]
Baixo    (180 dias):         [...]

5. PLANO 30 / 90 / 180
30 dias:  [entregas com responsável]
90 dias:  [...]
180 dias: [...]

6. DOCUMENTOS A PRODUZIR
[lista com quem redige e quem aprova]

7. PENDÊNCIAS DE DECISÃO DO RESPONSÁVEL
[o que a skill não decide: base legal duvidosa, prazo de guarda, comunicação de incidente]

Aviso: diagnóstico organizacional preparatório. Não é parecer jurídico nem
substitui a decisão do encarregado e do sócio responsável.
```

## Exemplo completo

**Entrada:** banca trabalhista com 3 advogados e 1 secretária. Atendimento por WhatsApp em aparelho da secretária, formulário no site que cai em Gmail, software jurídico na nuvem, planilha de cobrança no Drive compartilhada com o contador por link, sem encarregado.

**Saída resumida:**

Gaps críticos, agir em 7 dias:

1. **Planilha de cobrança com link aberto no Drive.** Contém nome, CPF e valor devido de 214 clientes. Qualquer pessoa com o link acessa. Ação: trocar para compartilhamento por e-mail nomeado, revogar o link, verificar histórico de acesso. Se houver evidência de acesso por terceiro, abrir procedimento de incidente.
2. **WhatsApp em aparelho pessoal da secretária.** Backup na conta pessoal dela e acesso a áudio com relato de doença ocupacional, que é dado sensível. Ação: migrar para número corporativo com aparelho do escritório ou CRM de WhatsApp com controle de acesso, e desligar backup em conta pessoal.
3. **Sem encarregado e sem canal do titular.** Ação: designar o sócio administrador por ato escrito, criar `privacidade@` e publicar no site.

Gap alto, 30 dias: formulário do site sem aviso de privacidade e com campo livre onde o lead descreve doença. Ação: incluir aviso curto acima do botão, reduzir o campo livre para descrição do problema trabalhista e orientar que documento médico não seja anexado antes da reunião.

Base legal do caso trabalhista: exercício regular de direitos em processo (art. 7, VI), e para o laudo médico a hipótese equivalente do art. 11, II. **Não** trocar por consentimento.

Retenção decidida: pasta encerrada por 5 anos do arquivamento; conversa de WhatsApp por 24 meses; lead sem contrato por 12 meses.

Pendência de decisão do responsável: o escritório quer manter histórico de acordo para estatística de negociação. Sugestão é manter em base anonimizada, sem nome nem número de processo. A decisão final é do sócio.

## Erros comuns

- Pedir consentimento para tudo. Consentimento revogável em tratamento processual cria obrigação que o escritório não pode cumprir.
- Copiar política de privacidade de outro escritório. Ela passa a descrever tratamento que não existe e a omitir o que existe.
- Tratar a LGPD como projeto com data de fim. Sem revisão anual do inventário, o documento envelhece em silêncio.
- Confundir sigilo profissional com conformidade. São deveres distintos e cumulativos.
- Deixar planilha de contatos em conta pessoal de sócio ou de estagiário.
- Anunciar prazo de guarda que o backup do fornecedor não respeita.
- Comunicar incidente sem dimensionar, ou esperar dimensionar tudo antes de conter.
- Registrar legítimo interesse sem teste escrito.
- Esquecer estagiário, terceirizado e contador no termo de confidencialidade.
- Marcar item do checklist como conforme sem evidência anexada.

## Checklist final

- [ ] Papéis definidos: escritório controlador, fornecedores listados como operadores
- [ ] Inventário preenchido em todos os canais ativos, inclusive WhatsApp e papel
- [ ] Dado sensível e dado de menor sinalizados no inventário
- [ ] Base legal registrada por tratamento, sem linha em branco
- [ ] Teste de legítimo interesse escrito onde essa base foi usada
- [ ] Tabela de retenção com prazo, gatilho e destino, aprovada pelo responsável
- [ ] Encarregado designado por escrito e canal do titular publicado
- [ ] Fluxo de pedido de titular com prazo interno de 10 dias
- [ ] Plano de incidente com nomes, telefones e as ações das primeiras 24 horas
- [ ] Cláusula de proteção de dados em todo contrato de operador ativo
- [ ] Treinamento realizado no semestre, com lista de presença
- [ ] Cada item do checklist de auditoria com evidência localizável
- [ ] Pendências de decisão listadas e escaladas ao responsável
- [ ] Aviso de que a entrega é preparatória, não parecer

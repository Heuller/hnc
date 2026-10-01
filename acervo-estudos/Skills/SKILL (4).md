---
name: anonimizacao-documentos
description: "Anonimiza documento ou trecho jurídico antes de subir ao Claude ou a outra IA, e também para publicar em artigo, aula ou parecer modelo: remove ou generaliza dado pessoal conforme a LGPD, avalia risco de reidentificação por contexto e entrega relatório do que foi tratado. Use quando o usuário pedir anonimizar, anonimização, remover dados pessoais, limpar PDF para IA, redigir identificadores, pseudonimizar documento, preparar processo para Claude, mascarar CPF, ou sigilo antes de upload. Acionar também quando disser 'pode subir essa petição?', 'quero usar esse caso em uma aula', 'tira os dados do cliente daqui' ou colar peça com qualificação completa pedindo análise. NÃO usar para decidir se o caso é sigiloso, para pedido de segredo de justiça, para criptografia de arquivo, nem como atestado de conformidade LGPD."
---

# Skill: Anonimização de documentos jurídicos

## Função

Transformar **texto ou documento jurídico** em versão segura para uso em IA (Claude, ChatGPT e afins) e para uso didático ou publicação, **removendo ou generalizando** dados que identifiquem pessoas físicas ou jurídicas.

**Não** substitui revisão humana nem parecer sobre adequação LGPD do caso concreto. A skill prepara o material; a decisão de subir, publicar ou compartilhar é do advogado responsável, que continua sujeito ao dever de sigilo profissional.

**Fora do escopo:** decidir se o processo corre em segredo de justiça, redigir pedido de sigilo, criptografar arquivo, apagar metadado de PDF (isso é ação no arquivo, não no texto), e afirmar que o resultado está livre de risco.

## Quando acionar

- "Anonimize este documento antes de subir ao Claude"
- "Remova dados pessoais desta petição"
- "Prepare este PDF para uso em IA, mantendo só o mérito do caso"
- "Quero usar essa sentença como exemplo em uma aula"
- "Pode mandar esse contrato para a IA analisar?"
- "Tira o nome do cliente e o número do processo daqui"
- "/anonimizacao-documentos neste trecho"

## Quando NÃO acionar

- Pedido de análise de mérito sem intenção de compartilhar o documento fora do escritório
- Decisão sobre segredo de justiça ou sobre levantamento de sigilo
- Proteção técnica de arquivo (senha, criptografia, controle de acesso)
- Pedido de reidentificar um documento já anonimizado por terceiro
- Documento que será protocolado no processo, onde a qualificação é obrigatória

## Princípios

1. **Anonimizar é sobre o conjunto, não sobre o nome.** Trocar o nome e deixar CPF, número de processo ou endereço não anonimiza nada. O identificador mais forte que restar define o nível de proteção real.

2. **Contexto reidentifica.** Caso raro identifica a pessoa mesmo sem nome. "Servidor do único cartório da cidade de 4 mil habitantes, afastado por acidente em 2023" tem um titular possível. Quando o conjunto é único, generalizar não basta.

3. **Placeholder neutro e não sequencial por pessoa real.** `[PARTE AUTORA]` e `[TESTEMUNHA 1]` funcionam. `Cliente A`, `João` e `Empresa X` fingem anonimização e ainda permitem cruzamento entre documentos.

4. **Preservar o mérito.** A anonimização precisa manter o que faz o documento ser útil: tese, cronologia relativa, natureza do vínculo, valores quando relevantes. Documento anonimizado até virar inútil obriga o usuário a subir o original.

5. **Nunca inventar fato para preencher lacuna.** Se remover um trecho deixa a frase sem sentido, marcar como removido em vez de completar com suposição.

6. **Pseudonimização continua sendo dado pessoal.** Só usar quando o usuário pedir, e o mapa que liga código a pessoa nunca vai no mesmo arquivo nem na conversa com a IA.

7. **Duas passadas, sempre.** A primeira remove o que está declarado. A segunda procura o que reidentifica por combinação. A maioria dos vazamentos sobrevive à primeira passada.

8. **Terceiros importam tanto quanto o cliente.** Testemunha, perito, menor, adverso, preposto e servidor não consentiram em nada. Menor de idade e dado de saúde de terceiro exigem o tratamento mais rígido.

9. **Anonimizar para publicar exige conferência humana.** Uso interno em IA tolera risco residual baixo. Publicação em artigo, aula ou rede social é irreversível: o responsável precisa ler a versão final antes.

10. **Relatar o que foi feito.** Sem o relatório de anonimização, ninguém consegue auditar depois o que saiu do documento.

## Anonimização vs pseudonimização (LGPD)

| | Anonimização | Pseudonimização |
|---|---|---|
| Vínculo com a pessoa | Some | Código ou chave guardada fora da IA |
| Escopo LGPD | Fora do escopo (art. 5, XII) | Continua dado pessoal |
| Reversível | Não | Sim, por quem tem a chave |
| Uso nesta skill | **Padrão** | Só se o usuário pedir explicitamente |

**Regra:** se o usuário não pedir pseudonimização, entregue **anonimização real** (sem mapa de reidentificação no output).

## Catálogo do que tratar

| Categoria | Como aparece na prática | Técnica | Substituição |
|---|---|---|---|
| Nome de parte | Qualificação no preâmbulo, corpo da peça, assinatura | Redação total | `[PARTE AUTORA]`, `[PARTE RÉ]` |
| Nome de testemunha, perito, preposto | Rol de testemunhas, ata, laudo | Redação total | `[TESTEMUNHA 1]`, `[PERITO]` |
| Nome de menor | Ação de família, alimentos, guarda | Redação total, sem idade exata | `[FILHO MENOR 1]`, faixa de idade quando essencial |
| Nome de advogado adverso e OAB | Procuração, assinatura, ata | Redação total | `[ADVOGADO ADVERSO]` |
| CPF | Qualificação, contrato, guia | Redação total, ou mascaramento se o formato importar | `[CPF REMOVIDO]` ou `***.***.**9-**` |
| CNPJ de pessoa jurídica | Preâmbulo, nota fiscal | Redação total quando a empresa é identificadora, manter quando é grande e pública e o caso não é sensível | `[CNPJ REMOVIDO]` |
| CNPJ de MEI ou empresário individual | Contrato, cobrança | Tratar como dado de pessoa física | `[CNPJ REMOVIDO]` |
| RG, CNH, PIS/PASEP, título de eleitor, CTPS | Qualificação, documentos anexos | Redação total | `[DOCUMENTO REMOVIDO]` |
| Endereço | Preâmbulo, citação, comprovante de residência | Redação total, ou generalização para estado | `[ENDEREÇO REMOVIDO]` |
| Telefone e WhatsApp | Rodapé, print de conversa | Redação total | `[TELEFONE REMOVIDO]` |
| E-mail e @ de rede social | Assinatura, print, notificação | Redação total | `[E-MAIL REMOVIDO]` |
| Número de processo, protocolo, autos | Cabeçalho, referência cruzada | Redação total | `[PROCESSO REMOVIDO]` |
| Vara, comarca, tribunal | Endereçamento | Generalizar para instância e ramo | `[JUÍZO DE ORIGEM]`, `vara do trabalho` |
| Nome de juiz, promotor, servidor | Decisão, ata, certidão | Redação total | `[MAGISTRADO]` |
| Dado bancário, PIX, cartão | Cálculo, alvará, cobrança | Redação total | `[DADO BANCÁRIO REMOVIDO]` |
| Dado de saúde (CID, diagnóstico, laudo) | Ação previdenciária, plano de saúde, acidente | Generalizar para categoria clínica quando essencial ao mérito, senão remover | `[CONDIÇÃO DE SAÚDE]`, ou `transtorno de coluna` |
| Dado de origem racial, religião, opinião política, filiação sindical, vida sexual | Discriminação, assédio, família | Remover, manter só se for o núcleo da tese e em termo genérico | `[DADO SENSÍVEL REMOVIDO]` |
| Antecedente criminal, inquérito, boletim de ocorrência | Defesa penal, ação indenizatória | Redação total de número e nome, natureza do delito pode ficar genérica | `[OCORRÊNCIA REMOVIDA]` |
| Placa, chassi, matrícula de imóvel, inscrição imobiliária | Trânsito, imobiliário | Redação total | `[IDENTIFICADOR DE BEM REMOVIDO]` |
| Empregador ou empresa única no ramo | Trabalhista, consumidor | Generalizar por setor e porte | `empresa de transporte rodoviário de médio porte` |
| Cargo raro | Trabalhista | Generalizar | `cargo de gestão na área comercial` |
| Data exata de nascimento, casamento, admissão, óbito | Qualificação, cronologia | Generalizar para mês/ano ou intervalo | `março/2024` |
| Valor exato incomum | Acordo, condenação | Faixa, se o valor não é essencial | `entre R$ 10 mil e R$ 50 mil` |
| URL com token, link de Drive, QR de pagamento | Anexo, notificação | Redação total | `[LINK REMOVIDO]` |
| Assinatura escaneada, foto, biometria | Documento digitalizado | Remover a imagem, não descrever | `[IMAGEM REMOVIDA]` |

## Técnicas por objetivo

| Técnica | Quando usar | Como fica | Limite |
|---|---|---|---|
| **Redação total** | Identificador direto que não agrega ao mérito | `[CPF REMOVIDO]` | Pode quebrar a leitura se aplicada a tudo |
| **Mascaramento parcial** | Quando o formato ou o dígito final importa para conferência | `***.***.**9-**` | Ainda é dado pessoal em base pequena. Não usar para publicar |
| **Pseudonimização com legenda controlada** | Documento longo onde é preciso rastrear quem é quem, ou revisão que voltará ao original | `PESSOA-A1`, `PESSOA-B2`, com legenda entregue separadamente | Continua dado pessoal. Legenda nunca vai no arquivo tratado nem para a IA |
| **Generalização** | O dado importa como categoria, não como valor | Cidade pequena vira estado, cargo raro vira função genérica | Se a categoria continuar única, não protege |
| **Agregação** | Vários casos analisados juntos, jurimetria, relatório | "12 acordos entre R$ 8 mil e R$ 30 mil em 2024" | Grupo pequeno reidentifica. Evitar recorte com menos de 5 casos |
| **Supressão de trecho** | Passagem que reidentifica e não pode ser generalizada | `[TRECHO SUPRIMIDO: relato de evento único identificável]` | Perde conteúdo. Avisar o usuário do que foi perdido |

Ordem de preferência para uso em IA: redação total, generalização, supressão. Mascaramento e pseudonimização só quando houver razão declarada.

## Risco de reidentificação por contexto

Depois de tratar os identificadores diretos, testar o conjunto restante. Sinais de risco alto:

- **Combinação rara:** profissão + cidade + ano + evento. Três atributos incomuns juntos costumam bastar.
- **Evento noticiado.** Acidente, crime, falência, tragédia que saiu na imprensa local. O documento anonimizado é ligado à notícia em uma busca.
- **Empresa única no mercado ou na cidade.** "A fábrica de calçados do município" identifica o empregador e, com o cargo, o empregado.
- **Cargo ou função singular.** Único perito da comarca, único servidor do setor, sócio administrador de empresa nomeada.
- **Doença rara ou dado clínico específico.** CID incomum reidentifica mesmo sem nome.
- **Valor muito específico.** R$ 187.432,19 é praticamente uma chave de busca.
- **Cronologia completa com datas exatas.** A sequência de datas funciona como impressão digital do processo.
- **Grupo pequeno.** Relatório com 3 casos de uma mesma vara identifica por eliminação.

Regra de decisão: se um leitor com acesso a busca pública e ao contexto local conseguiria apontar a pessoa, o material **não está anonimizado**. Nesse caso, generalizar mais, suprimir o trecho ou avisar o usuário de que a versão só serve para uso interno.

## Fluxo de execução

1. **Confirmar modo e destino.** Anonimização (padrão) ou pseudonimização (só se pedido). Destino: uso em IA, uso interno, aula ou publicação. Publicação eleva o rigor e exige conferência humana no fim.
2. **Varredura de categorias.** Listar quais categorias de dado aparecem, com contagem, **sem repetir o conteúdo sensível** na resposta.
3. **Primeira passada:** aplicar redação e generalização em todos os identificadores diretos, em ordem do catálogo.
4. **Segunda passada:** ler o texto tratado como se fosse a primeira vez, procurando combinação que reidentifica. Verificar cabeçalho, rodapé, numeração de página, referência cruzada, citação de outro processo, tabela de cálculo e nota de rodapé, que é onde o dado sobrevive.
5. **Decidir sobre risco residual:** generalizar mais, suprimir trecho ou registrar o risco no relatório.
6. **Entregar** no formato abaixo, com relatório e aviso.

### Fluxo para PDF longo

1. Confirmar o escopo: documento inteiro ou só as seções que serão usadas. Tratar 400 páginas quando o usuário precisa de 12 é desperdício e aumenta o risco de erro.
2. Processar em blocos por seção (preâmbulo, fatos, fundamentos, pedidos, documentos), porque o preâmbulo concentra qualificação e os anexos concentram documento pessoal.
3. Manter **glossário interno de consistência** durante o trabalho: a mesma pessoa precisa receber o mesmo placeholder em todas as ocorrências. Autora que aparece como nome completo, primeiro nome, iniciais e "a reclamante" é uma pessoa só.
4. Varrer especificamente: cabeçalho e rodapé repetidos em toda página, marca de protocolo, número de página com número de processo, timbre com endereço, tabela de cálculo com CPF, e lista de documentos anexos com nome de arquivo.
5. Sinalizar no relatório quais páginas ou seções foram tratadas e quais ficaram fora.

### Fluxo para peça digitalizada

1. O texto de OCR erra. Nome com erro de leitura (`J0ão`, `MARlA`) escapa da busca por nome e continua identificando.
2. Procurar padrão numérico mesmo quebrado: sequências de 11 dígitos com espaço, ponto ou hífen fora de lugar, e sequências de 20 dígitos do número unificado de processo.
3. Avisar que **imagem não é texto**: assinatura escaneada, carimbo, foto de documento e print continuam no arquivo original ainda que o texto extraído esteja limpo. Se o destino é enviar o arquivo, o arquivo precisa ser refeito, não só o texto.
4. Alertar sobre metadado do arquivo (autor, nome do arquivo, propriedades), que a skill não trata e que costuma carregar nome de cliente.

## Formato da resposta

### (A) Texto anonimizado

Documento completo ou trecho solicitado, pronto para colar ou subir ao Claude.

### (B) Relatório de anonimização

```
Modo: anonimização | pseudonimização
Destino declarado: IA | uso interno | aula | publicação
Escopo: [documento inteiro | seções/páginas tratadas]

Categorias tratadas:  [lista]
Itens removidos:      [contagem por categoria]
Itens generalizados:  [contagem por categoria]
Trechos suprimidos:   [contagem + motivo em uma linha cada]

Risco residual: [nenhum identificado | descrever e sugerir ajuste]
Fora do alcance desta skill: [imagens, metadados, anexos não enviados]
Conferência humana: [dispensável para uso interno | OBRIGATÓRIA antes de publicar]
```

### (C) Aviso ao usuário

- Anonimização reduz risco; **não elimina** dever de sigilo profissional.
- Para pseudonimização: guardar mapa **fora** da conversa com IA.
- Conferir se treinamento está desligado no plano de consumo (recomendado no escritório).
- Imagem, assinatura escaneada e metadado do arquivo não são tratados aqui.

## Exemplo completo

**Entrada** (preâmbulo de reclamação trabalhista):

> MARIA APARECIDA DOS SANTOS SILVA, brasileira, casada, auxiliar de produção, portadora do RG 12.345.678 SSP/PR e CPF 123.456.789-00, residente na Rua das Acácias, 145, Bairro Jardim Aurora, Umuarama/PR, CEP 87500-000, telefone (44) 99999-1234, vem propor RECLAMAÇÃO TRABALHISTA contra CALÇADOS AURORA LTDA, CNPJ 12.345.678/0001-99, única fábrica de calçados do município, onde trabalhou de 03/02/2019 a 17/11/2023, tendo sido acometida de tendinopatia do supraespinhal confirmada em laudo do Dr. Carlos Menezes, CRM/PR 54321, nos autos 0001234-56.2024.5.09.0099.

**Saída (A), texto anonimizado:**

> [PARTE AUTORA], brasileira, casada, [FUNÇÃO OPERACIONAL EM LINHA DE PRODUÇÃO], [DOCUMENTO REMOVIDO], [CPF REMOVIDO], residente em [ENDEREÇO REMOVIDO], [TELEFONE REMOVIDO], vem propor RECLAMAÇÃO TRABALHISTA contra [PARTE RÉ], [CNPJ REMOVIDO], empresa do setor de calçados de médio porte, onde trabalhou de fevereiro/2019 a novembro/2023, tendo sido acometida de [CONDIÇÃO DE SAÚDE: lesão de ombro por esforço repetitivo] confirmada em laudo de [MÉDICO], nos autos [PROCESSO REMOVIDO].

**Saída (B), relatório:**

```
Modo: anonimização
Destino declarado: IA
Escopo: preâmbulo enviado

Categorias tratadas: nome de parte, RG, CPF, endereço, telefone, CNPJ,
  cargo, datas exatas, dado de saúde, nome e registro de médico,
  número de processo, identificação do empregador por contexto
Itens removidos: 9
Itens generalizados: 4 (cargo, setor da empresa, 2 datas)
Trechos suprimidos: 1 ("única fábrica de calçados do município", identificava
  o empregador e, por consequência, a autora)

Risco residual: BAIXO com ressalva. A combinação de lesão de ombro,
  linha de produção e período de 2019 a 2023 é comum e não isola a pessoa.
  Se o documento for publicado, remover também a menção ao setor de calçados.
Fora do alcance desta skill: imagens do PDF, assinatura escaneada, metadados
Conferência humana: dispensável para uso interno em IA. OBRIGATÓRIA antes de
  usar em aula ou artigo.
```

## Erros comuns

- Substituir só o nome e deixar CPF, número de processo ou endereço.
- Usar `Cliente A` e `Empresa X`, que reidentificam pelo contexto e permitem cruzar documentos.
- Esquecer cabeçalho, rodapé, numeração de página e nota de rodapé.
- Ignorar o rol de testemunhas e o nome do perito, que não consentiram em nada.
- Deixar valor exato e cronologia completa, que juntos funcionam como chave de busca.
- Tratar o texto extraído e enviar o PDF original, com assinatura, carimbo e metadado intactos.
- Devolver mapa de pseudonimização no modo anonimização.
- Inventar fato do processo ao preencher lacuna deixada pela remoção.
- Anonimizar tanto que o documento perde o mérito, e o usuário desiste e sobe o original.
- Afirmar que o texto está "100% LGPD compliant" sem ressalvas.
- Liberar para publicação sem conferência humana da versão final.

## Checklist final

- [ ] Modo confirmado (anonimização por padrão)
- [ ] Destino declarado, com rigor elevado se for publicação
- [ ] Catálogo percorrido categoria por categoria
- [ ] Mesma pessoa com o mesmo placeholder em todo o documento
- [ ] Segunda passada feita, olhando combinação e não item isolado
- [ ] Cabeçalho, rodapé, notas, tabelas e anexos varridos
- [ ] Terceiros tratados: testemunha, perito, menor, servidor, adverso
- [ ] Risco residual avaliado e escrito no relatório
- [ ] Nenhum mapa de pseudonimização no arquivo tratado
- [ ] Relatório entregue com contagens e com o que ficou fora do alcance
- [ ] Aviso de sigilo profissional e de conferência humana presente
- [ ] Original preservado e intocado

## Conectores (se estiverem ativos)
Sem conector, trabalhe com o texto colado. Com conector, leia e devolva o arquivo tratado sem o documento passar por copiar e colar.

**Google Drive**
1. `search_files` para localizar o documento pelo nome ou pela pasta que o usuário indicar. Se houver mais de um resultado parecido, confirme qual antes de abrir.
2. `get_file_metadata` para conferir nome, tipo e pasta. Nome de arquivo com nome de cliente é vazamento por si só, e vale avisar.
3. `read_file_content` para o conteúdo. Documento longo: trate por seção e mantenha o glossário de consistência entre as partes.
4. Mostre na conversa o relatório de anonimização e **espere confirmação explícita** antes de escrever qualquer coisa no Drive.
5. `create_file` da versão tratada com sufixo `-anonimizado`, na pasta que o usuário indicar.

**Regras ao usar conector**
- Ler é livre. **Escrever ou salvar exige confirmação explícita** do usuário na mesma conversa, com pasta e nome de arquivo definidos.
- Nunca sobrescreva o original. O vínculo com o dado real é o que permite reverter um erro de anonimização.
- O arquivo anonimizado é sempre um arquivo novo, com sufixo próprio, e nunca substitui o de origem.
- Não salve no Drive a tabela que liga código a nome real. Ela fica com o usuário, fora do arquivo tratado.
- Antes de criar o arquivo, mostre na conversa o que foi removido e o que foi generalizado.
- Não use nome de cliente no nome do arquivo tratado. Prefira `peca-anonimizada-<assunto>-<data>`.
- Confira a pasta de destino: salvar em pasta compartilhada com terceiros anula o cuidado do resto do fluxo.

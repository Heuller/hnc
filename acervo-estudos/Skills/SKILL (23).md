---
name: "Resumo e estruturação de peças processuais"
description: "Resume petição, contestação, sentença, acórdão e processo inteiro extraindo partes, pedidos, valor da causa, fase, provas, teses e pontos controvertidos, e também monta o esqueleto argumentativo de uma peça nova. Use quando o usuário pedir resumo de processo, resumo de peça, leitura de PDF processual, o que aconteceu no processo, linha do tempo do caso, esqueleto de petição, estruturação de peça ou roteiro argumentativo. Acionar também quando disser 'me explica esse processo', 'resume esse PDF', 'o que a outra parte alegou' ou 'monta a estrutura dessa petição'. NÃO usar para calcular prazo em definitivo (use gestão de prazos), para revisar contrato nem para redigir a peça final pronta para protocolo."
---

# Skill: Resumo e estruturação de peças processuais

## Função

Dois modos, escolhidos pelo pedido do usuário:

- **Modo RESUMO**: ler peça ou processo e devolver o que importa em estrutura fixa (partes, pedidos, fase, teses, provas, pontos controvertidos, datas encontradas).
- **Modo ESTRUTURA**: montar o esqueleto argumentativo de uma peça nova (títulos, ordem, teses, pedidos, linha de raciocínio).

Se o pedido for ambíguo, pergunte qual dos dois. Resumir e estruturar na mesma resposta produz documento que não serve para nenhum dos dois usos.

Fora do escopo: peça pronta para protocolo, cálculo definitivo de prazo, pesquisa de jurisprudência, parecer assinado. A skill não presta consultoria ao usuário final. Conferência de fatos, provas, prazos e assinatura são do advogado responsável.

## Quando acionar

- PDF, texto colado ou arquivo do Drive com peça, decisão ou processo inteiro.
- Pedido de linha do tempo, "onde está o processo", "o que falta fazer".
- Preparação para audiência, reunião com cliente ou passagem de caso entre advogados.
- Pedido de esqueleto de petição, contestação, recurso ou manifestação.

## Quando NÃO acionar

- Cálculo de prazo com data final para agenda: é a skill de gestão de prazos processuais.
- Análise de risco e probabilidade de êxito com viabilidade recursal: skills próprias.
- Redação final de peça com timbre e formatação: skills de peças em HTML ou DOCX.
- Resumo de contrato: é revisão de contratos.

## Princípios

1. **Só afirme o que está no documento.** Fato sem respaldo no texto lido entra como pendência, nunca como afirmação. Não complete número de processo, data, valor ou nome de cabeça.
2. **Cite a localização.** Cada achado relevante vem com página, folha, item ou cláusula. Resumo sem referência não é auditável e obriga a reler tudo.
3. **Separe fato, alegação e decisão.** "A autora alega que" é diferente de "restou incontroverso" e de "o juízo decidiu". Misturar os três é o defeito mais comum e o mais perigoso.
4. **Datas encontradas viram lista própria.** Toda data no documento entra em uma seção de datas com a natureza (protocolo, publicação, citação, audiência, vencimento). A skill sinaliza, não calcula o prazo final.
5. **Público define o resumo.** Cliente e equipe precisam de documentos diferentes. Pergunte para quem é, ou entregue os dois blocos separados e rotulados.
6. **Pontos controvertidos são o produto principal.** É o que decide a estratégia de prova. Extraia comparando pedido, defesa e o que cada lado admitiu.
7. **Não avalie mérito sem pedido.** Resumo é descritivo. Opinião sobre chance de êxito só quando o usuário pedir, e sempre rotulada como leitura, não como prognóstico.
8. **Dado pessoal de terceiro fica no documento.** Não repita CPF, RG, endereço, dado de saúde ou dado bancário no resumo. Use `[CPF]`, `[ENDEREÇO]`. Nome de parte pode entrar quando o resumo é interno e o usuário já tem acesso aos autos.
9. **Documento ilegível é pendência declarada.** Nunca preencha lacuna de digitalização ruim com inferência.

## Fluxo do modo RESUMO

1. **Identificar o tipo** de documento e, se for processo inteiro, o conjunto de peças presentes.
2. **Confirmar o público** (cliente ou equipe) e a profundidade desejada.
3. **Varredura de estrutura**: sumário, índice de peças, cabeçalhos, numeração de folhas.
4. **Extração obrigatória** (tabela abaixo), com localização.
5. **Extração específica** por tipo de peça (seções seguintes).
6. **Montar a linha do tempo** com as datas encontradas.
7. **Fixar os pontos controvertidos**.
8. **Listar pendências**: o que não foi possível ler, o que falta nos autos, o que precisa de conferência.
9. **Entregar** no formato do público escolhido.

## Extração obrigatória (todo documento)

| Campo | Onde costuma estar | Se não achar |
|---|---|---|
| Número do processo | Cabeçalho, capa, rodapé de cada folha | `[NÃO LOCALIZADO NO DOCUMENTO]`, nunca reconstruir |
| Juízo, vara e comarca | Endereçamento da inicial, cabeçalho das decisões | Marcar pendência |
| Partes e polos | Qualificação da inicial, autuação | Registrar como consta, sem completar |
| Advogados e OAB | Assinatura das peças, procurações | Pendência se relevante para intimação |
| Natureza da ação | Título da inicial e classe processual | Inferir do pedido e rotular como inferência |
| Pedidos | Capítulo de pedidos da inicial e emendas | Listar item por item, na ordem |
| Valor da causa | Final da inicial (CPC, art. 292) | Pendência. Impacta competência e custas |
| Fase atual | Última movimentação relevante | Descrever o último ato encontrado, com data |
| Provas produzidas e requeridas | Documentos anexos, capítulo de provas, decisão de saneamento | Listar por tipo |
| Datas | Todo o documento | Seção própria de datas |
| Decisões proferidas | Despachos, decisões interlocutórias, sentença | Resumir dispositivo de cada uma |
| Recursos interpostos | Petições e certidões | Indicar contra qual decisão |
| Acordos e propostas | Atas, petições conjuntas | Registrar valor e condição |
| Pendências dos autos | Certidões, intimações sem cumprimento | Lista final |

## Por tipo de peça

**Petição inicial**
Requisitos do art. 319 do CPC presentes ou ausentes; causa de pedir fática e jurídica separadas; pedidos com verbo, objeto e valor; cumulação e subsidiariedade; tutela de urgência pedida, com os elementos do art. 300 do CPC; documentos anexados e o que cada um pretende provar; valor da causa e critério usado; requerimentos processuais (citação, provas, gratuidade, honorários).

**Contestação**
Preliminares do art. 337 do CPC, uma por uma, com o efeito pretendido; prejudiciais de mérito (prescrição, decadência); impugnação específica de cada fato da inicial, porque o fato não impugnado tende a se tornar incontroverso (CPC, art. 341); versão fática da defesa; documentos novos; pedido contraposto ou reconvenção; impugnação ao valor da causa e à gratuidade; provas requeridas. Registre expressamente **o que a defesa admitiu**: é ali que nasce o ponto incontroverso.

**Réplica e manifestações**
O que foi efetivamente respondido e o que ficou sem resposta; fatos novos; documentos juntados.

**Decisão de saneamento**
Preliminares resolvidas; **pontos controvertidos fixados pelo juízo** (CPC, art. 357); distribuição do ônus da prova e eventual inversão; provas deferidas e indeferidas; prazos fixados. Esta é a peça mais rentável de resumir: ela define o jogo probatório.

**Sentença**
Estrutura do art. 489 do CPC: relatório, fundamentação, dispositivo. Extraia: pedidos julgados procedentes, improcedentes e extintos sem mérito; fundamento central de cada capítulo; matéria enfrentada e matéria não enfrentada, porque omissão abre embargos de declaração (CPC, art. 1.022); condenação principal, juros, correção, termo inicial de cada um; custas e honorários com percentual e base de cálculo; sucumbência recíproca; tutela concedida ou revogada; data da publicação, se constar.

**Acórdão**
Ementa não é fundamento, é resumo redigido pelo relator. Vá ao voto. Extraia: composição do órgão julgador; se a votação foi unânime; voto vencedor e voto divergente, separados; *ratio decidendi* (a razão sem a qual o resultado mudaria) distinguida de *obiter dictum*; dispositivo (nega provimento, dá provimento parcial, anula); reforma ou manutenção de cada capítulo da sentença; se houve ampliação do colegiado por não unanimidade em apelação (CPC, art. 942); precedentes citados como fundamento, com identificação exata como consta no texto.

**Processo inteiro**
Índice de peças com folha; linha do tempo; estado atual; o que cada lado sustenta; provas já nos autos e provas ainda necessárias; decisões e seus efeitos atuais; valores em discussão e valor atualizado se houver cálculo nos autos; próximos atos previsíveis; riscos processuais visíveis (preclusão, ausência de impugnação, prova não produzida).

## PDF longo e digitalização ruim

**PDF longo (centenas de folhas)**
1. Comece pelo **índice de peças** e pela **última decisão**. O fim do processo explica o começo mais rápido que o contrário.
2. Faça uma **passada de mapeamento** só para registrar tipo de peça, folha inicial e data. Só depois leia em profundidade.
3. Ordene a leitura profunda por valor: inicial, contestação, saneamento, sentença, acórdão. Documento comum (comprovante, extrato) entra por amostragem, com a lacuna declarada.
4. Se o volume não couber na leitura, **diga qual parte foi lida e qual não foi**, com as folhas. Resumo silenciosamente parcial é o pior resultado possível.
5. Peça ao usuário o corte que interessa (período, tema, capítulo) quando o objetivo for específico.

**Peça digitalizada ruim, manuscrita ou com OCR falho**
- Nunca adivinhe número, valor ou data ilegível. Marque `[ILEGÍVEL fl. X]` e liste na seção de pendências.
- Número parcialmente legível não vira número inteiro por dedução. Nem processo, nem CPF, nem valor.
- Carimbo, assinatura e data de protocolo costumam ser o trecho mais degradado e o mais importante. Peça a versão original do sistema do tribunal quando a data de publicação ou de intimação estiver duvidosa.
- Documento fotografado torto, com página faltando ou fora de ordem: informe a inconsistência de paginação antes de resumir.
- Se houve OCR, sinalize que nomes e números podem ter sido lidos errado e que a conferência é obrigatória para qualquer ato com prazo.

## Datas e prazos encontrados

Toda data extraída entra em uma tabela, com a natureza e a fonte:

```
| Data | Natureza | Fonte (fl./doc.) | Observação |
|------|----------|------------------|------------|
```

Naturezas úteis: protocolo, distribuição, citação, publicação, intimação, juntada, audiência, vencimento contratual, fato gerador, término de prazo mencionado no documento.

Regras da skill:
- A skill **sinaliza** data e prazo mencionados. Não fixa o prazo final para a agenda.
- Se identificar um ato com prazo em curso, escreva no topo da entrega: `ATENÇÃO: possível prazo em curso a partir de [data] ([natureza]). Confirmar na publicação oficial.`
- Lembre o critério legal sem aplicar: prazos processuais em dias úteis (CPC, art. 219), contagem excluindo o dia do começo e incluindo o do vencimento (CPC, art. 224), e prazo de 15 dias para interpor e responder recursos, salvo embargos de declaração (CPC, art. 1.003, §5º).
- Data que aparece só em documento digitalizado ilegível entra como `[ILEGÍVEL]`, jamais estimada.

## Resumo para o cliente e resumo para a equipe

| | Cliente | Equipe |
|---|---|---|
| Objetivo | Entender o que aconteceu e o que vem depois | Decidir o próximo ato e a prova |
| Extensão | 10 a 20 linhas, mais próximos passos | Quanto for necessário, com referências |
| Linguagem | Sem latim, sem sigla não explicada, sem número de artigo | Técnica, com dispositivo e folha |
| Conteúdo | Situação atual, o que já foi conquistado, o que falta, prazo esperado, o que o cliente precisa providenciar | Teses de cada lado, pontos controvertidos, ônus da prova, riscos processuais, omissões, opções de ato |
| Valores | Falar de valor discutido só com ressalva expressa de que não é promessa de resultado | Valor com memória e folha |
| Proibido | Prognóstico de vitória, prazo de tribunal como se fosse certeza, tradução livre que muda o sentido da decisão | Afirmação sem localização no documento |

Nunca entregue o resumo técnico ao cliente como se fosse explicação. E nunca entregue o resumo do cliente à equipe como base para o próximo ato.

## Formato da saída (modo RESUMO)

````
# Resumo do [tipo de documento]
Processo: [número ou NÃO LOCALIZADO] | Juízo: [...] | Classe: [...]
Documento analisado: [nome do arquivo, folhas lidas]
Público: [cliente / equipe]

## Situação atual
[3 a 5 linhas: fase, último ato, o que se espera em seguida]

## Partes
Polo ativo: [...] (adv. [...] OAB [...])
Polo passivo: [...] (adv. [...] OAB [...])

## Pedidos
1. [pedido] (fl. X)
2. [pedido subsidiário] (fl. X)
Valor da causa: R$ [...] (fl. X)

## Teses de cada lado
Autor: [...] (fl. X)
Réu: [...] (fl. X)

## Pontos controvertidos
1. [ponto] | Ônus: [parte] | Prova existente: [...] | Prova faltante: [...]

## Provas
Nos autos: [...]
Requeridas e não produzidas: [...]

## Decisões e efeitos atuais
[decisão, data, dispositivo, efeito hoje] (fl. X)

## Datas encontradas
| Data | Natureza | Fonte | Observação |

## Riscos processuais visíveis
[preclusão, fato não impugnado, prova não requerida, omissão da decisão]

## Pendências e limites desta leitura
- Folhas não lidas: [...]
- Trechos ilegíveis: [ILEGÍVEL fl. X]
- Informação que não consta do documento: [...]

> Leitura de apoio. Conferência de fatos, provas, datas e prazos, e qualquer
> ato processual, são do advogado responsável.
````

## Modo ESTRUTURA: esqueleto de peça

Entrada mínima: tipo de peça e fase; comarca e vara; partes; cronologia dos fatos; provas disponíveis; teses desejadas; pedidos, se o usuário souber.

Esqueleto sugerido:

1. Endereçamento e qualificação, com `[COMPLETAR]` no que faltar.
2. Breve resumo dos fatos, em linha do tempo.
3. Fundamentos, um bloco por tese: premissa fática, norma, interpretação, jurisprudência. Marque `PESQUISAR` onde não houver citação segura. Nunca invente julgado, súmula ou tema repetitivo.
4. Pedidos: principal, subsidiários e alternativos, com verbo, objeto e destinatário do comando. Tutela de urgência com probabilidade do direito e perigo de dano, quando cabível (CPC, art. 300).
5. Valor da causa e requerimentos finais (provas, intimações, honorários).

Para cada tese central, entregue: 2 a 3 argumentos; dispositivos legais prováveis, sem número inventado; contra-argumento esperado; linha de refutação; provas que sustentam e ônus correspondente (CPC, art. 373).

Checklist pré-protocolo: anexos, custas, cálculo atualizado, comprovantes, procuração, declaração de hipossuficiência, contrato de honorários, prazo e competência.

Saída: estrutura em markdown com seções numeradas, mais lista de pendências para o advogado preencher.

## Exemplo completo (modo RESUMO)

**Entrada:** PDF de 312 folhas, ação de indenização por vício de construção. Público: equipe.

**Saída resumida:**

```
Situação atual: sentença publicada, com prazo recursal possivelmente em curso.
Última peça: sentença, fl. 288 a 301. Perícia concluída, fl. 210.

Pedidos (fl. 12 a 14)
1. Condenação em R$ 84.000,00 para reparo das infiltrações
2. Danos morais de R$ 20.000,00
3. Subsidiariamente, abatimento proporcional do preço
Valor da causa: R$ 104.000,00 (fl. 14)

Teses
Autor: vício oculto na impermeabilização, com laudo particular (fl. 39).
Ré: decadência, culpa exclusiva do condomínio na manutenção e ausência de
nexo (contestação, fl. 96 a 118).

Pontos controvertidos
1. Origem da infiltração (construtiva ou de manutenção)
   Ônus: autor quanto ao fato constitutivo (CPC, art. 373, I)
   Prova: perícia judicial (fl. 210) concluiu por falha de impermeabilização
2. Termo inicial do prazo de reclamação
   Prova: ata de assembleia de 03/2024 (fl. 62) e e-mails de 05/2024 (fl. 71)
3. Existência de dano moral em pessoa jurídica condominial
   Sem prova específica nos autos

Decisão (fl. 288)
Procedência parcial: reparo de R$ 84.000,00 acolhido; dano moral afastado;
honorários em 10% sobre a condenação; sucumbência recíproca proporcional.
Fundamento central: laudo pericial e responsabilidade do construtor pela
solidez e segurança da obra.
Não enfrentado: pedido subsidiário de abatimento do preço (fl. 14, item c).
Possível cabimento de embargos de declaração por omissão (CPC, art. 1.022).

Datas encontradas
| 18/09/2024 | Distribuição | fl. 1 | |
| 04/11/2024 | Citação | fl. 88 | AR juntado |
| 12/06/2026 | Laudo pericial | fl. 210 | |
| [ILEGÍVEL] | Publicação da sentença | fl. 302 | Carimbo degradado |

ATENÇÃO: possível prazo recursal em curso. A data de publicação está
ilegível na fl. 302. Confirmar na publicação oficial antes de qualquer
contagem.

Riscos processuais visíveis
- Omissão quanto ao pedido subsidiário: sem embargos, há risco de preclusão
  da matéria em recurso.
- Dano moral afastado sem impugnação específica de prova pelo autor na
  instrução (fl. 180).

Pendências
- Folhas 120 a 205 lidas por amostragem (documentos e comprovantes).
- Data de publicação ilegível.
- Não consta dos autos o contrato de honorários mencionado na inicial.
```

## Erros comuns

- Tratar ementa de acórdão como fundamento e perder o voto divergente.
- Copiar o "relatório" da sentença como se fosse o resumo do processo. O relatório é a versão do juízo sobre o que as partes disseram.
- Confundir fato incontroverso com fato provado.
- Entregar resumo parcial sem dizer que é parcial.
- Estimar data ilegível para fechar a linha do tempo.
- Calcular prazo final e mandar para a agenda sem confirmação na publicação oficial.
- Resumir sem localização, obrigando a reler as 300 folhas para achar o trecho.
- Reproduzir CPF, endereço, dado de saúde ou laudo médico integral no resumo.
- Dar prognóstico de êxito em resumo destinado ao cliente.
- Completar número de processo, valor ou nome de advogado por dedução.
- Inventar precedente para preencher o bloco de jurisprudência no modo ESTRUTURA.

## Checklist final

- [ ] Modo (RESUMO ou ESTRUTURA) e público confirmados
- [ ] Tipo de documento identificado
- [ ] Extração obrigatória completa ou com pendência declarada
- [ ] Cada achado relevante com folha, item ou documento
- [ ] Fato, alegação e decisão claramente separados
- [ ] Pontos controvertidos listados com ônus da prova
- [ ] Tabela de datas preenchida, com natureza e fonte
- [ ] Alerta no topo se houver possível prazo em curso
- [ ] Folhas não lidas e trechos ilegíveis declarados
- [ ] Nenhum número, data ou nome completado por dedução
- [ ] Nenhuma citação de julgado, súmula ou tema sem estar no documento lido
- [ ] Nenhum dado pessoal de terceiro reproduzido sem necessidade
- [ ] Aviso de conferência e responsabilidade do advogado presente

## Conectores (se estiverem ativos)

Antes de pedir o texto colado, veja se o conector abaixo está disponível nesta conversa. Com conector, os fatos saem do documento do caso, não da memória.

**Google Drive**
1. `search_files` na pasta do caso: inicial, contestação, decisões, laudo, procuração e documentos citados.
2. `get_file_metadata` para confirmar qual arquivo é a versão vigente quando houver mais de um com nome parecido.
3. `read_file_content` no que o usuário indicar como base, e nas peças que a extração obrigatória exigir.
4. `create_file` do resumo ou do esqueleto em arquivo novo na pasta do caso, com tipo e data no nome, somente depois de confirmação explícita.

**Regras ao usar conector**
- Ler é livre. Escrever, salvar ou compartilhar exige confirmação explícita na mesma conversa.
- Não altere arquivo existente do caso. A saída é sempre documento novo.
- Fato sem documento entra como pendência, nunca como afirmação no resumo ou na peça.
- Citação de decisão precisa vir do arquivo lido. Não complete número de processo nem data de cabeça.
- Achou o processo inteiro em vários arquivos? Liste o que encontrou com data e pergunte o recorte antes de ler tudo.
- Não copie qualificação completa, CPF nem dado bancário para o arquivo de resumo.

# Segunda curadoria por lacunas — 300 questões com estudo reverso

**7 de novembro de 2026.** O banco passa de **3.041 para 3.341 questões reais ativas**. Cada uma das 300 inclusões possui comentário, exemplo prático, trecho decisivo, comparação didática e referência próprios. A seleção e a procedência podem ser conferidas no [relatório individual](CURADORIA-LACUNAS-12.json) e na [planilha de fontes](CURADORIA-LACUNAS-12.csv).

## Contribuição da seleção

A prioridade foi acrescentar condições, mecanismos e aplicações que mereciam mais treino, sem repetir apenas a redação de uma regra. Os 300 objetivos e suas comparações com o banco anterior estão documentados. A diferença entre nomes de objetivos não é, por si, prova de diversidade semântica: a comparação também depende de revisão editorial.

| Recorte do curso | Antes | Depois | Aplicações acrescentadas |
| --- | ---: | ---: | --- |
| 10.6 — Regimento Comum do Congresso | 0 | 12 | Discussão, retirada de proposição, apuração por Casa, encaminhamento e redação final |
| 10.3 — Acesso e gestão documental pública | 0 | 2 | Reprodução e custos; acesso a resultados de controle |
| 11.10 — Licitações | 2 | 14 | Modalidade, critério, contratação direta e condições de decisão |
| 11.11 — Contratos e fiscalização | 0 | 10 | Medição, pagamento, preposto, equipe, registro e consequências da execução |
| 6.7 — IA aplicada à informação | 3 | 9 | Avaliação, dados rotulados, qualidade de entrada no OCR e rastreabilidade |
| 14.4 — Ciência e apresentação de dados | 1 | 21 | Preparação, correspondência, distribuição, medidas e escolha de visualização |
| 13.4 — Ortografia e usos da língua | 6 | 13 | Modalização, colocação, tipologia, interrogação e distinções lexicais |
| M7 — Preservação física | 12 | 40 | Riscos ambientais, acondicionamento, acesso a originais frágeis e decisões de intervenção |

O [mapa atualizado](PRIORIDADES-CURADORIA-02.json) registra os 75 submódulos; o retrato anterior permanece preservado. O mini-módulo **M2.5** recebe sua primeira questão, sobre entrada de entidade governamental e língua do nome da jurisdição. Seu vínculo usa o código próprio do mini-módulo, garantindo acesso ao assunto e retorno à aula.

Também há aplicações de catalogação, MARC, índices KWIC e articulados, requisitos de sistemas documentais, SQL, contratos de recursos eletrônicos, funções de planilha, segurança, inglês e português. As questões de inglês incluem o texto de apoio, assim como as questões de português que dependem de leitura e análise contextual. Comandos compartilhados foram recuperados para não apresentar fragmentos do RCCN como afirmações sem contexto.

Os recortes prioritários de **LRM/FRAD/FRSAD, citações atuais e vias de acesso aberto** permanecem no mapa. Não foram preenchidos com questões de outra banca, múltipla escolha ou enunciados inventados para obter uma distribuição uniforme. A quantidade de itens não é uma previsão de incidência no próximo concurso.

## Procedência e fundamentos

São **225 confrontos na origem e 75 em cópias identificadas**, em 21 pares de prova e gabarito. As cópias incluem materiais da própria Polícia Federal e espelhos de provas claramente identificados. Os cargos originais constam na apresentação; questões de TI, Arquivologia e outros cargos não são apresentadas como provas de Biblioteconomia.

Esta seleção foi incluída diretamente das provas consultadas, sem atribuição fictícia a apostilas do Drive. Os documentos do acervo continuam sendo utilizados como fundamentos quando pertinentes. Os enunciados, julgamentos históricos e identificadores de origem são preservados; nenhuma adaptação foi contada como questão adicional.

Dois pares da Câmara de 2012 apresentam diferença entre o código do nome do arquivo e o cabeçalho impresso. O pareamento foi verificado no índice oficial por cargo e tipo de caderno; ambos os identificadores e a divergência estão registrados em `notaPareamento`. A revisão também confrontou os itens selecionados com o fundamento correspondente. Procedimentos revogados, como chamadas nominais antigas do RCCN, não foram introduzidos como regras atuais.

Os comentários explicitam limites relevantes: admitir requerimento de retirada depois do início da votação não concede retirada unilateral ao autor; a regra sobre a Mesa e CPI deve ser lida com seu recorte vigente; a responsabilidade por omissão não dispensa comprovar os requisitos do caso; o acesso contratado a periódicos depende da licença; OCR depende da qualidade de entrada; sílica-gel controla umidade e não é um bactericida.

Foram acrescentados dez perfis conceituais e 52 referências. SOMASE e CONT.SE têm explicação própria, em vez de reutilizar o conceito de tabela dinâmica. A geração de índices e os modelos históricos de administração também recebem conceitos adequados aos itens. Nenhum valor dos 205 perfis e 185 referências anteriores foi alterado. Permanecem preservadas as 3.154 anotações históricas e as 13 adaptações anteriores.

## Validação e limites

O manifesto privado reproduz os seis artefatos públicos de integração a partir da base publicada. Os controles rejeitam duplicidade textual e identidade oficial repetida, anulações, fontes conflitantes, quantidade incompleta e blocos didáticos repetidos. Esses controles não substituem revisão científica ou julgamento semântico.

A validação de interface verifica resposta imediata, exemplos, fontes, destaque do trecho e navegação. São oito cenários em 320, 390 e 1.440 pixels, nos temas claro e escuro, abrangendo texto em inglês, fórmula, código longo de caderno e mini-módulo. A suíte geral passou em **1.087 testes Vitest, em 140 arquivos**, e os **35 testes Python** passaram. Após o ajuste de singular/plural no seletor e no progresso, os 26 testes relacionados passaram novamente. Também foram conferidos os três tamanhos de tela no seletor: M7 com 40 questões e M2.5 com uma questão, sem cortes horizontais ou erros de JavaScript.

O pacote compilado carregou **3.341 questões, incluindo exatamente as 300 desta curadoria**, e preservou o item anterior de controle. Lint, auditorias, reprodução da integração e compilação passaram. Os orçamentos permanecem respeitados: JavaScript total de 20,68 MiB, maior chunk de 2,06 MiB e precache de 4,88 MiB. Não foram alterados limites de orçamento para acomodar o lote.

A verificação de produção usa os artefatos compilados e o estado de implantação informado pela integração GitHub/Vercel. O domínio público permanece fora da lista de acesso da rede do ambiente; esses controles não equivalem a uma visita autenticada ao site em produção.

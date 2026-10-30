# Revisão individual do banco e dos simulados

Referência: edital e corte cadastrados no HNC. Iniciada em 30/10/2026. Em andamento: **não concluída**.

O inventário de `src/content/questions` contém **2.179 itens**: 2.110 em 20 cadernos e 69 complementares. A revisão inclui itens fora do treino e não equivale à simples aprovação dos atualmente elegíveis. A interface compartilhada também atende outras atividades; checkpoints da reforma teórica têm registro separado.

## Método

Cada item é lido com seu comentário, contexto e julgamento. São conferidos conceitos, edição/referência normativa, OCR, condições do enunciado, contraste e utilidade pedagógica. As mudanças são registradas individualmente em `lotes/`, com fontes, motivo e impressões digitais anteriores e posteriores. Não há preenchimento automático de explicações por um texto-modelo.

`node scripts/revisaoQuestoes.mjs validar` verifica a aplicação e integridade dos lotes. A validação detecta desatualização do registro, trecho não literal e ausência de campos; **não certifica verdade conceitual**. `aplicar` só aplica decisões explícitas desses registros e recusa alterações inesperadas na questão.

Revisão conceitual e confirmação de origem oficial são verificações diferentes. Um identificador de agregador ou número de compilação não pode ser anunciado como número da prova original. A compilação CAD CESPE é usada como fonte secundária e modelo de redação; provas e gabaritos oficiais publicados pela banca prevalecem na confirmação de origem. Quando o enunciado é reformulado, ele é adaptação editorial.

## Lotes

| Caderno | Itens revisados neste processo | Situação |
| --- | ---: | --- |
| M3 — Classificação e Indexação | 100/100 | Revisão individual aplicada |
| M4 — Recuperação, Fontes e Referência | 100/100 | Revisão individual aplicada |
| M2 — Catalogação, RDA, modelos e MARC | 100/100 | Revisão individual aplicada |
| M1 — Fundamentos, leis, informação e ética | 100/100 | Revisão individual aplicada |
| M5 — Gestão, coleções, avaliação e conhecimento | 100/100 | Revisão individual aplicada |
| M6 — Bibliotecas digitais, interoperabilidade, dados e IA | 100/100 | Revisão individual aplicada |
| M7 — Preservação digital e conservação de acervos | 100/100 | Revisão individual aplicada |
| M8 — Referências, citações e apresentação documental | 100/100 | Revisão individual aplicada |
| M9 — Comunicação científica, abertura, métricas e integridade | 100/100 | Revisão individual aplicada |
| Simulado integral Câmara — duplicata de microfilmagem | 1/180 | Item 147 revisado; demais itens do arquivo pendentes |
| Demais cadernos e banco complementar | 0/1.099 | Pendente neste processo; correções históricas não foram recontadas como novas revisões |

No M3 foram corrigidos três julgamentos: `m3-q-33`, `m3-q-39` (CDDir) e `m3-q-76` (simetria e reciprocidade). Foram reescritas perguntas dependentes de uma edição histórica não identificada, corrigidos fragmentos de OCR e substituídos comentários genéricos e contrastes artificiais. Os dois exemplos das imagens correspondem a `m3-q-64` e `m3-q-49`.

O arquivo do acervo chamado CDD 23 traduzida é uma compilação comentada, com identificação e conteúdo que não permitem tratá-lo como substituto da edição oficial. Para regras da CDD foi consultada a introdução do editor OCLC. As fontes e localizadores estão em `fontes.json` e em cada item.

Não modificar retrospectivamente a primeira tentativa do aluno para fazê-la parecer resposta à nova redação. Antes de publicar alterações de julgamento, verificar tratamento de sessões ativas e históricos. A dificuldade permanece uma estimativa editorial até haver dados de desempenho.

Marco de 300 itens: corrigidos também os vínculos com a teoria pelo assunto efetivo. Verificações antigas exigiam 50% de cada gabarito e 25 questões por submódulo, impondo restrições que podiam impedir correções de julgamento e vínculos. Esses requisitos sem base na banca foram substituídos por integridade de contagem, validade dos julgamentos e existência do submódulo. Não foram alterados gabaritos para satisfazer porcentagens.

Após o marco de 300, a suíte completa foi executada sobre os 400 itens então aplicados: 978 testes aprovados, lint, auditoria estrutural e compilação aprovados. A UI distingue adaptação editorial de origem oficialmente confirmada; a correção conceitual não é prova de origem. O envio seguinte foi realizado no marco de 600 itens.

Marco de 600 itens: M1, M5 e M6 concluídos neste processo. No M5 foram corrigidas definições de desbastamento, dimensões do conhecimento e aplicações de CRM/DSI, com redação explicitamente adaptada quando necessário. No M6, contrastes absurdos foram substituídos por confusões conceituais plausíveis; explicações delimitam versões de software, funções de protocolos, FAIR, preservação e limites da IA. Vínculos de teoria seguem o assunto efetivo.

O diagnóstico lexical deixou de impor tetos de palavras e cotas de gabarito sem base empírica oficial: as distribuições continuam visíveis para análise editorial. O censo técnico passou a reconhecer o registro individual vigente por hash, mantendo separados os registros históricos e as pendências dos demais tipos de atividade.

Validação do marco de 600: 978 testes em 125 arquivos aprovados, lint sem falhas, verificações estruturais e compilação com orçamentos aprovados. O censo registra 600 revisões individuais vigentes; os demais tipos de atividade mantêm inventário e registro separados. Os testes não certificam a correção conceitual das 1.579 questões ainda pendentes.

M7: corrigidos julgamentos dos itens 5 e 82 (microfilmagem anterior aos anos 1970), 24 (OAIS não é esquema equivalente a OAI-PMH) e redação do 21 (adaptação explícita, ainda isolada por bloqueio histórico). Repetições foram substituídas por aplicações de conservação física, identificadas como itens autorais. As referências indicam PREMIS 3.0 e Resolução CONARQ 51/2023, respeitando versões e revogações. O próximo envio deste conjunto é o marco de 900.

M8: revisão individual aplicada com NBR 6023:2025, 10520:2023, 6028:2021 e 14724:2024 corrigida em 2025. O item 2 foi corrigido para E (sinais angulares não são obrigatórios na edição vigente). Questões de edições antigas foram explicitamente atualizadas; os comentários distinguem recomendação, obrigação e exceções. Um item literário sem texto-base foi substituído por aplicação de citações. Testes direcionados: 91 aprovados.

M9: 100 itens revisados individualmente. Corrigidos escopo temporal do Qualis e integração Sherpa/Open Policy Finder; comentários distinguem atenção de qualidade, unidade do indicador e limites dos modelos. Corrigidos os julgamentos 80 e 96 para C em redações delimitadas (apoio de medidas quantitativas a estudos de uso e função de descoberta da bibliografia), sem alegar reversão de gabarito oficial. Meia-vida não é prazo de inutilidade; o núcleo de Bradford não reúne necessariamente a maioria dos artigos.

Censo no marco de 900: 900 registros individuais vigentes. O censo detectou conflito com a cópia `oficial-180q-147`, que foi então lida e corrigida individualmente. Esse reparo adicional eleva o marco a 901 registros vigentes (1.278 pendentes); não publicar o banco parcialmente revisado em produção. Os 60 exercícios de véspera e 28 itens adaptativos legados permanecem inventariados separadamente. Histórico e sessões ativas também exigem tratamento de versão antes da publicação.

Validação do marco de 900 e cópia adicional (901): 978 testes em 125 arquivos aprovados, lint, verificações estruturais e compilação com orçamentos aprovados. Navegador local validou modos estudo e prova e aplicação guiada nas larguras 1440 e 390, sem overflow ou erros de execução. O censo deixou de registrar gabaritos conflitantes entre textos idênticos ativos. Correção semântica dos demais 1.278 itens continua pendente; nenhum desses checks a substitui.

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
| M4 — Recuperação, Fontes e Referência | 100/100 | Revisão individual aplicada; conferência técnica em andamento |
| Demais cadernos e banco complementar | 0/1.979 | Pendente neste processo; correções históricas não foram recontadas como novas revisões |

No M3 foram corrigidos três julgamentos: `m3-q-33`, `m3-q-39` (CDDir) e `m3-q-76` (simetria e reciprocidade). Foram reescritas perguntas dependentes de uma edição histórica não identificada, corrigidos fragmentos de OCR e substituídos comentários genéricos e contrastes artificiais. Os dois exemplos das imagens correspondem a `m3-q-64` e `m3-q-49`.

O arquivo do acervo chamado CDD 23 traduzida é uma compilação comentada, com identificação e conteúdo que não permitem tratá-lo como substituto da edição oficial. Para regras da CDD foi consultada a introdução do editor OCLC. As fontes e localizadores estão em `fontes.json` e em cada item.

Não modificar retrospectivamente a primeira tentativa do aluno para fazê-la parecer resposta à nova redação. Antes de publicar alterações de julgamento, verificar tratamento de sessões ativas e históricos. A dificuldade permanece uma estimativa editorial até haver dados de desempenho.

# Seleção das questões disponíveis para treino

> Registro histórico da seleção. O [sexto lote](LOTE-300-ACERVO-06.md) acrescentou 300 questões conferidas, elevando o banco atual a **1.829 itens**. As exclusões documentadas abaixo continuam válidas.

Em 5 de novembro de 2026, após a conferência documental, foi adotada a orientação de utilizar somente questões com leitura segura e documentação suficiente. As **105 pendências foram retiradas dos simulados**, reduzindo o banco ativo de 1.634 para **1.529 questões**. Não é necessário obter esses documentos para continuar a trabalhar nas questões selecionadas.

| Situação | Questões |
| --- | ---: |
| Disponíveis, conferidas nos arquivos da banca | 1.329 |
| Disponíveis, conferidas em cópias identificadas | 200 |
| Retiradas por pendência documental: SERPRO 2013 | 47 |
| Retiradas por pendência documental: FUB 2011 | 30 |
| Retiradas por pendência documental: SEGER/ES 2011 | 28 |

As oito anuladas retiradas na etapa anterior continuam excluídas. A ausência de prova ou gabarito legível não é tratada como anulação; tem motivo de exclusão próprio. Nenhuma questão nova foi incluída nesta seleção.

## Conteúdo e julgamento

A análise editorial deve explicar a assertiva com base no conteúdo, nas referências e nas condições descritas. O comentário precisa explicitar a regra, aplicá-la ao enunciado, apresentar exemplo e examinar o possível erro. A letra do gabarito não substitui esse raciocínio.

O gabarito definitivo identifica o resultado oficial da prova. A avaliação conceitual do comentário é autoral e deve ser fundamentada. Quando houver divergência conceitual ou mudança de norma, a explicação deve identificar o contexto e a distinção, sem apresentar a avaliação autoral como decisão da banca. Conhecimento do tema não permite reconstruir como oficial uma assertiva cuja transcrição não seja segura.

Esta alteração aplica a seleção documental e mantém o estudo reverso existente nos 1.529 itens disponíveis. Não representa uma nova revisão conceitual integral de todas as explicações.

## Funcionamento e rastreabilidade

Os itens retirados permanecem apenas nos registros históricos, com os motivos da conferência. A projeção do banco exclui pendências antes de montar os simulados e o estudo reverso. Itens novos ainda dependentes da apostila também ficam fora dessa seleção.

Respostas salvas de itens retirados não são restauradas no treino. As respostas dos itens mantidos continuam válidas quando enunciado, contexto e gabarito permanecem iguais. Os totais por módulo, filtros, progresso e relatórios são calculados sobre o banco selecionado.

- [Relação das 105 exclusões e seus motivos](SELECAO-SEGURA-2026-11-05.json).
- [Auditoria atual do banco ativo](ESTUDO-REVERSO-INTEGRAL.json).
- [Planilha atual do estudo reverso](ESTUDO-REVERSO-INTEGRAL.csv).
- [Conferência documental anterior, preservada como histórico](CONFERENCIA-OFICIAL-2026-11-05.md).

Para conferir a seleção: `node scripts/auditarEstudoReversoReais.mjs`. Para atualizar os relatórios após uma revisão: acrescente `--write`.

## Validação

`npm run verify` passou: lint, auditorias dos bancos e do estudo reverso, 1.032 testes em 133 arquivos, auditoria independente e build de produção dentro dos limites existentes. Os testes cobrem a exclusão dos 105 IDs, a limpeza das respostas desses itens e a preservação das respostas válidas.

A inspeção local em 320, 390 e 1.440 pixels, incluindo tema escuro, confirmou o total atualizado e o texto de seleção, sem transbordamento horizontal nem erros de JavaScript. A inspeção local não equivale à inspeção visual do domínio de produção.

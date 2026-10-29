# Reforma teórica — registro de execução

Escopo autorizado: todos os 75 submódulos; aula completa, revisão, fontes e microcheckpoints. Branch `feat/reforma-teoria-integral`.

## Regras de registro

“Construído” exige conteúdo específico; “verificado” exige leitura das fontes pertinentes e conferência de exemplos/checkpoints; testes técnicos não certificam verdade conceitual. Não contabilizar conteúdo genérico como reforma concluída. Não chamar de independente uma segunda revisão pelo mesmo executor.

## Em execução

- Compatibilidade do schema com aulas em blocos e ampliação de checkpoints.
- Leitor com microcheckpoint no ponto de aprendizagem e fonte por aula.
- Consulta ao acervo da branch `auditoria-2026-10`: 25 documentos baixados para pesquisa local; Lancaster/Grogan exigem extração visual/OCR, pois o texto extraído é insuficiente. Arquivos baixados não equivalem a fontes integralmente revisadas.
- Primeira rodada editorial: 11.1, 6.1, 8.1, 12.1, 13.3.

Nenhum dos 75 submódulos está declarado concluído neste registro inicial.

## Rodada editorial inicial — em construção

Em 29/10, foram redigidas aulas específicas para 11.1, 6.1, 8.1, 12.1–12.4, 13.1–13.4 e 14.1. Não representam ainda a conclusão de todos os 75. A versão técnica permite checkpoints entre blocos, fontes por aula e leitura por versão; 4 testes específicos passaram, além dos testes de microcheckpoints e de integração do leitor executados antes das expansões seguintes.

A execução integral da primeira rodada encontrou 14 falhas em 8 arquivos: parte exige textos literais antigos, contagem exata antiga de checkpoints, mnemônicos obrigatórios em todo assunto e referências no comentário em vez do campo fonte. Esses contratos precisam ser atualizados para o plano, mantendo controles de integridade e histórico. O README e o inventário serão regenerados ao final a partir da execução efetiva. Não tratar essa execução como aprovada.


## Rodada de Direito Administrativo

Construídos 26 de 75 submódulos: M11–M14 completos nesta rodada editorial, além dos pilotos 6.1 e 8.1. Total de 141 blocos e 150 checkpoints novos. Os IDs e gabaritos anteriores foram preservados; itens ambíguos foram reescritos com o mesmo valor de julgamento. O banco de questões dos simulados ainda não está certificado individualmente.

Correções normativas incluem EC 138/2025, ADIs 7156/7236 (Informativo STF 1225/2026), alterações da LGPD de 2026 e distinções de limites/prazos/recebimento da Lei 14.133. Referência do edital cadastrada: legislação vigente até 02/10/2026 e jurisprudência até 30 dias antes da prova; a rodada final de atualização jurisprudencial continua necessária no marco previsto, que ainda é futuro em relação a esta execução.

Quatro testes específicos do leitor passaram após as expansões. A verificação integral ainda não foi aprovada: há contratos antigos de testes e metadados complementares a atualizar, e faltam 49 submódulos. Nenhuma declaração de conclusão total nesta etapa.


## Catalogação, classificação e indexação — construção editorial

Construídos 36 de 75: pilotos 6.1/8.1, M11–M14 e M2/M3. Há 197 blocos e 196 novos checkpoints. Faltam 39 submódulos, validação integral e publicação. O gerador reprodutível está em `scripts/aplicarReformaTeorica.mjs`; registros autorais em `src/content/reforma/aulas`.

Conferência de fontes revelou que `003017427.pdf` é capítulo de Maculan, Dias e Lara sobre vocabulários controlados, e não CDDir. OCR de 14 páginas confirmou a identidade e trechos. Lancaster: OCR das primeiras 20 páginas permitiu conferir edição brasileira de 2004 e trechos do capítulo 2; não representa leitura integral. A introdução CDD inicialmente baixada é da edição 21; a edição 23 foi confrontada com a introdução oficial OCLC. Fontes complementares: Senado para CDDir/VCB/RVBI, IBICT para Bibliodata, LoC para MARC/MODS/METS/BIBFRAME, RDA Registry e W3C.

Complementos antigos foram substituídos por glossários, alertas e referências coerentes com o texto. Quadros duplicados sem revisão específica foram retirados; quadros explicitamente redigidos e tabelas no texto foram mantidos. Tempo é estimativa editorial de leitura (180 palavras/minuto) mais prática (90 segundos/item), não medida de domínio ou promessa de duração pessoal.

Foi corrigida conclusão prematura: leitura completa e apenas um checkpoint não concluem a aula. Para aulas longas, blocos marcados como lidos substituem a observação impossível de 20% do artigo inteiro. Cinco testes do leitor passaram; testes integrais antigos ainda exigem adequação e execução.


## Normalização — ampliação em integração

40 de 75 submódulos construídos, incluindo M8 inteiro. Faltam 35 e a validação/publicação. O PDF NBR14724.pdf tem edição 2024 corrigida em abril de 2025, mas a extração de texto omite grande parte dos parágrafos: foi necessário OCR das 16 páginas do arquivo para conferir suporte eletrônico, contagem, margens e demais regras. Não interpretar o texto extraído inicial como leitura completa. Foram corrigidos recuo recomendado vs. obrigatório na 10520, posição de resumo estrangeiro na 6022, palavras-chave e força de recomendações na 6028, além de formatar/validar acessibilidade como finalidade distinta de preservação.

### Continuação: 50 de 75 aulas integradas

- Módulo 6 completo: interoperabilidade, preservação digital, IA, bancos, programação e avaliação. Corrigidas garantias indevidas de RAG, CAP, normalização, preservação e privacidade. Exemplos fictícios foram identificados; SQL, regex e paginação da aula 6.6 foram executados com casos positivos e negativos (`python scripts/validarExemplosTeoria.py`).
- Módulo 7 completo: composição e ambiente, pragas, manutenção e restauro. Revistos limiares tratados como universais, suposta imunidade de adesivos, reversibilidade absoluta e confusão entre estabilização, desinfestação e esterilização. Cassares do acervo foi consultada; CCI, ICOM-CC e outras referências identificadas complementam pontos específicos.
- A implementação continua em andamento: faltam 25 aulas, validação completa, revisão dos contratos de métricas legados e publicação. O teste focado do leitor passou com cinco casos após a integração das 46 primeiras aulas. Não é certificação de todo o banco de questões.

# Simulados e estudo reverso — primeira entrega de 30/10/2026

Esta entrega inicia a etapa posterior à reforma teórica. Não representa a revisão individual de todas as questões.

## Implementação

O painel compartilhado oferece um exercício autoral de aplicação nos itens com análise específica cadastrada. O aluno abre uma nova situação, julga certo/errado ou informa que ainda não sabe e só então recebe a explicação. A primeira escolha fica bloqueada. A atividade é prática guiada imediatamente posterior ao comentário: não altera a nota, a resposta original ou as métricas de domínio e não comprova retenção tardia. Ao mudar de item, seu estado é reiniciado.

A correção original continua imediata no modo estudo. O modo prova mantém os comentários para depois da finalização. O relatório usa o mesmo painel. Não foram geradas automaticamente aplicações para questões ainda sem análise específica.

O montador do treino reverso também passa a usar a regra canônica de elegibilidade: tanto `revisar` na questão quanto a marca na fonte impedem sua inclusão. Antes, a função verificava apenas a marca na fonte.

## Revisão conceitual identificada

- **orgaos-q-021**, `mini-modulo-orgaos-30q.ts`: o enunciado e o comentário anteriores atribuíam a criação da Biblioteca da Câmara a 1826 e sua denominação à Resolução da Mesa nº 25/1984. O histórico oficial distingue antecedentes em 1823, criação efetiva em 1866 e denominação pela Resolução da Câmara dos Deputados nº 104/1984. O enunciado foi reescrito como assertiva correta, mantendo o julgamento C. Incluídos comentário específico, trecho decisivo, contraste falso explicado, fonte, data e análise com exercício de aplicação. Continua sendo uma questão autoral, sem atribuição de origem a prova oficial.
- Fonte primária consultada: [Câmara dos Deputados — Histórico da Biblioteca](https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/biblioteca/bibhist.html), trechos sobre os três marcos históricos.

O lote de análises passa de 12 para 13 itens. Essa contagem se refere apenas aos itens com regra, passos, fonte localizada e aplicação em `pilotoRaciocinio.ts`; não equivale ao total de correções editoriais históricas do projeto.

## Validação

Suíte completa: 977 testes aprovados em 125 arquivos; lint, compilação com orçamento de pacote e auditoria estrutural aprovados. Os 59 itens em conferência continuam isolados dos simulados. O roteiro de navegador é reproduzível com Vite local e `node scripts/validarSimuladosReverso.mjs`.

- Testes de interface cobrem acerto, erro e ausência de resposta na aplicação, ocultação da explicação antes da tentativa, bloqueio de remarcação, troca de item e retorno à teoria.
- Navegador local em 1440 e 390 px: aplicação e feedback funcionaram sem erro JavaScript ou transbordamento no conteúdo principal; modo prova não exibiu o painel após a resposta.
- A validação estrutural e a suíte automatizada não substituem a conferência conceitual das demais questões.

## Continuidade necessária

Conferir individualmente os demais itens e respectivos comentários, contrastes e fontes; confrontar questões atribuídas ao CEBRASPE com prova e gabarito oficiais; estender análises de aplicação apenas após a revisão do conteúdo; verificar ambiguidade, contexto compartilhado, redundância, habilidade e dificuldade editorial. Dificuldade psicométrica exige dados de alunos. Manter a referência normativa do edital e corte cadastrados; o corte jurisprudencial de 18/12/2026 ainda é futuro nesta entrega.

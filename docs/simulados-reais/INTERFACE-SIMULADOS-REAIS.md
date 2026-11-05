# Interface dos simulados reais — 5 de novembro de 2026

A revisão organiza o acesso ao banco pela mesma trilha da teoria. A entrada em Treinos mostra a quantidade real de questões e módulos, a correção imediata e a identificação das fontes.

## Escolha e sessão

- Cartões de módulos em duas colunas no desktop e uma no celular, com quantidade disponível e progresso individual.
- Módulos ainda sem questões indicados de forma compacta, sem uma grade de botões inativos.
- Seleção por assunto da teoria dentro de cada módulo. O filtro altera a lista navegável e os indicadores da seleção; não exclui respostas anteriores.
- Ao escolher novamente um módulo, retomada no primeiro item não respondido. Ao reabrir a janela, preservação do ponto salvo e das respostas válidas no navegador, separadas por usuário. O filtro visual não é persistido: a retomada mantém a questão dentro da lista completa do módulo.
- Enunciado com espaço de leitura, contexto, assunto e identificação da prova. Gabarito da apostila e confronto oficial pendente continuam explícitos nos itens de fonte secundária.
- Resposta escolhida marcada por ícone, contorno e estado acessível, sem depender apenas de cor. A resposta fica bloqueada depois do julgamento, como no formato anterior.
- Correção imediata no mesmo PainelEstudoReverso. Ao responder, foco e rolagem conduzem à correção; a preferência de movimento reduzido é respeitada.
- Cabeçalho e navegação visíveis enquanto o conteúdo rola. Na última questão, acesso de volta aos módulos. Fontes e links permanecem disponíveis após responder.

## Conferência

Os 1.011 testes passaram em 130 arquivos. O TypeScript identificou uma opção de consulta de teste incompatível com a biblioteca; ela foi removida, os 11 testes da função passaram novamente e o build completo foi aprovado com os orçamentos respeitados. Foram conferidos filtro de assunto, navegação, recuperação de respostas e retomada do primeiro item não respondido.

A conferência local em Chromium, em 390 × 844 e 1440 × 1000, não registrou erros de página ou rolagem horizontal no documento e no diálogo. O rodapé permaneceu visível. Também foi verificada a redução de movimento. A autenticação não foi alterada; a página temporária de conferência não integra a publicação.

Imagens locais: `/workspace/scratch/prints-reais/modulos-ui-1440.png`, `/workspace/scratch/prints-reais/modulos-ui-390.png` e `/workspace/scratch/prints-reais/questao-ui-390.png`.

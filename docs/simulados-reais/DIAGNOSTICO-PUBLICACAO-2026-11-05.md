# Conferência de publicação — 5 de novembro de 2026

O aluno relatou que as melhorias recentes não apareciam em `https://heuller.vercel.app/`.

## Evidências e correção inicial

- `master` estava em `74ce4595ec4c10503b67e5f9e68aa88474d586c0`, com 442 questões reais e as melhorias teóricas.
- `main` estava em `4098e7ffe6e0ae3c665777c0f8bb315d081f18c6`, 42 commits atrás. Nela não existia o botão **Explorar questões reais**. Não havia commits exclusivos de `main` a preservar por merge.
- A documentação anterior do projeto já determinava sincronização de `main` e `master` nas publicações. O envio recente somente a `master` deixou esse procedimento incompleto.
- Foi realizado envio por fast-forward de `master` para `main`, sem force. A leitura posterior das referências remotas confirmou ambas em `74ce4595ec4c10503b67e5f9e68aa88474d586c0`.
- A Vercel iniciou nova publicação, identificada por `FB5MC99horpzRUYPcnZxawQAJM7D`, e posteriormente informou sucesso pelo status do GitHub.

Após a sincronização, o aluno confirmou no domínio de produção a presença de **442 itens disponíveis** em **Treinos → Explorar questões reais**. Essa confirmação do conteúdo, junto à sequência de publicações, sustenta o diagnóstico de que a divergência das branches impediu a chegada das mudanças ao domínio. A configuração da branch de produção não foi inspecionada diretamente no painel da Vercel; não se deve confundir sucesso isolado de build com prova do conteúdo servido.

## Limite da conferência

A política de rede deste ambiente negou conexão a `heuller.vercel.app`. A solicitação de acesso de rede não concedeu a capacidade. Não foi possível abrir o site ou executar login com a conta de teste, e não se devem registrar credenciais na documentação. A conferência do conteúdo de 442 itens foi feita pelo próprio aluno, em resposta à solicitação de verificação em aba anônima.

Depois dessa confirmação, o segundo lote de mais 300 questões, do commit `cbdeb8f744e8c1b22b941210b7270f90a43dbdf7`, e o procedimento de envio foram publicados em ambas as branches no commit `8b42bf3d42db15fc7617942ce63e6c4424ab1977`. A versão enviada contém 742 questões; a Vercel informou sucesso na publicação `4vj5TU1aFDuorgbGCxSh5MfqyXWf`. Só depois dessa sequência foi preparado o terceiro lote de 300 questões, levando a seleção local a 1.042.

## Procedimento para as próximas publicações

Depois de validar e commitar a versão pronta, usar `node scripts/publicarBranchesProducao.mjs --check` e, para o envio autorizado, `node scripts/publicarBranchesProducao.mjs --publish`. O script valida a ancestralidade e envia o mesmo commit a `main` e `master` com push atômico, sem force. Se houver commits remotos não incorporados, a publicação é interrompida.

Verificar em seguida o resultado da Vercel e o conteúdo do domínio. Navegadores já abertos também podem continuar executando uma versão anterior até recarregar; essa hipótese deve ser diferenciada de uma branch de produção desatualizada. Nesta execução não foi comprovado defeito no cache ou no service worker, e eles não foram alterados por suposição.

O script foi conferido em um repositório temporário com quatro cenários: simulação sem envio; atualização conjunta de ambas as branches; recusa de arquivos pendentes; e recusa de históricos divergentes, preservando os commits remotos. Todos passaram.

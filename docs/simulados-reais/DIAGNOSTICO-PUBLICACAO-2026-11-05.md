# Conferência de publicação — 5 de novembro de 2026

O aluno relatou que as melhorias recentes não apareciam em `https://heuller.vercel.app/`.

## Evidências e correção inicial

- `master` estava em `74ce4595ec4c10503b67e5f9e68aa88474d586c0`, com 442 questões reais e as melhorias teóricas.
- `main` estava em `4098e7ffe6e0ae3c665777c0f8bb315d081f18c6`, 42 commits atrás. Nela não existia o botão **Explorar questões reais**. Não havia commits exclusivos de `main` a preservar por merge.
- A documentação anterior do projeto já determinava sincronização de `main` e `master` nas publicações. O envio recente somente a `master` deixou esse procedimento incompleto.
- Foi realizado envio por fast-forward de `master` para `main`, sem force. A leitura posterior das referências remotas confirmou ambas em `74ce4595ec4c10503b67e5f9e68aa88474d586c0`.
- A Vercel iniciou nova publicação, identificada por `FB5MC99horpzRUYPcnZxawQAJM7D`, e posteriormente informou sucesso pelo status do GitHub.

Essa divergência é compatível com uma produção ligada à branch antiga. A configuração da branch de produção na Vercel e o conteúdo servido no domínio ainda precisam de confirmação direta; não se deve afirmar que o status do build prova a atualização do domínio.

## Limite da conferência

A política de rede deste ambiente negou conexão a `heuller.vercel.app`. A solicitação de acesso de rede não concedeu a capacidade. Não foi possível abrir o site ou executar login com a conta de teste, e não se devem registrar credenciais na documentação. O aluno foi orientado a conferir em aba anônima **Treinos → Explorar questões reais → 442 itens disponíveis**. A confirmação está pendente.

O segundo lote, de mais 300 questões, já está no commit local `cbdeb8f744e8c1b22b941210b7270f90a43dbdf7`. Seu envio e o início da próxima revisão devem seguir a condição estabelecida pelo aluno: primeiro confirmar as novidades na produção.

## Procedimento para as próximas publicações

Depois de validar e commitar a versão pronta, usar `node scripts/publicarBranchesProducao.mjs --check` e, para o envio autorizado, `node scripts/publicarBranchesProducao.mjs --publish`. O script valida a ancestralidade e envia o mesmo commit a `main` e `master` com push atômico, sem force. Se houver commits remotos não incorporados, a publicação é interrompida.

Verificar em seguida o resultado da Vercel e o conteúdo do domínio. Navegadores já abertos também podem continuar executando uma versão anterior até recarregar; essa hipótese deve ser diferenciada de uma branch de produção desatualizada. Nesta execução não foi comprovado defeito no cache ou no service worker, e eles não foram alterados por suposição.

O script foi conferido em um repositório temporário com quatro cenários: simulação sem envio; atualização conjunta de ambas as branches; recusa de arquivos pendentes; e recusa de históricos divergentes, preservando os commits remotos. Todos passaram.

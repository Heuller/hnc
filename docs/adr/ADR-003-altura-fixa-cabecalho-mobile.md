# ADR 003: Altura Fixa e Desacoplamento do Cabeçalho Sticky Mobile

## Status
Aceito e Implementado

## Contexto
No layout mobile, o componente `<Breadcrumb />` havia sido embutido no interior da tag `<header className="sticky top-0 z-40 ...">`. Essa decisão elevou a altura do cabeçalho de 56px para aproximadamente 82px. Como a barra de contexto dos submódulos (`TeoriaStickyBar.tsx`) utilizava `sticky top-14` (56px), a rolagem da página fazia com que os 26px superiores da barra ficassem soterrados pelo cabeçalho, cortando os botões de atalho pela metade e permitindo que o texto em rolagem vazasse por transparência.

## Decisão
1. Manter o `<header>` com altura estritamente constante e previsível de **56px** (`h-14`) no mobile e **64px** (`sm:h-16`) no desktop.
2. Posicionar o `<Breadcrumb />` fora do `<header>`, permitindo que ele role naturalmente para fora da tela junto com o início da página, economizando 26px preciosos de espaço vertical de leitura no celular.
3. Fixar a `TeoriaStickyBar` com `sticky top-14` e plano de fundo 100% opaco `bg-surface border-b border-border`, assegurando que `header.bottom === stickyBar.top === 56px` sem nenhuma sobreposição ou vazamento.

## Consequências
- Zero sobreposição de elementos na rolagem mobile.
- Encaixe pixel-perfect auditado via headless browser em viewports de 360px a 390px.
- Todos os 751 testes unitários preservados.

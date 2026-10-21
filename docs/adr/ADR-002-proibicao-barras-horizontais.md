# ADR 002: Proibição de Barras Horizontais Decorativas na Plataforma

## Status
Aceito e Implementado

## Contexto
O excesso de barras horizontais, linhas divisórias (`<hr />`) e bordas decorativas fragmentava visualmente o conteúdo dos módulos teóricos, criando poluição estética ("UI slop") e aumentando a fadiga visual do estudante durante longas sessões de leitura no celular e no computador.

## Decisão
1. Veto categórico ao uso de barras horizontais decorativas (`<hr>`, `border-b` puramente decorativo ou separadores soltos) em toda a plataforma.
2. A separação entre blocos de conteúdo e seções deve ser conduzida exclusivamente através de:
   - Respiro e ritmo de espaçamento vertical padronizado (`space-y-6`, `gap-8`, padding adequado).
   - Contraste sutil e elegante entre planos de fundo (`bg-surface`, `bg-background`).
   - Hierarquia tipográfica nítida (títulos, subtítulos, pesos de fonte e entrelinhamento).

## Consequências
- Interface limpa, moderna e com estética editorial de alta classe (seguindo as diretrizes de `frontend-design` e `design-taste-frontend`).
- Eliminação do aspecto de "template genérico" ou "design artificial de IA".

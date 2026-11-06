# Sexto lote — 300 questões reais com conferência e estudo reverso

Revisão editorial de **6 de novembro de 2026**. Foram acrescentadas **300 questões**, elevando o banco ativo de **1.529 para 1.829 itens**. As 105 pendências documentais e as oito anuladas anteriormente excluídas continuam fora dos treinos.

## Origem e seleção

O lote reúne **274 itens da PAPIRVM — Biblioteconomia Esquematizada** e **26 da prova da UNEAL 2026**. Doze desses 26 também foram localizados nos cadernos do Drive; os demais foram selecionados diretamente no caderno original da mesma prova. A origem efetivamente utilizada está identificada em cada evidência, sem atribuir ao Drive o que foi consultado apenas na banca.

São **261 questões confrontadas em arquivos da banca** e **39 em cópias identificadas**, utilizando 31 pares de documentos já consultados na conferência. Foram mantidos somente itens de certo ou errado, com leitura segura e julgamento definitivo identificável. A seleção descartou anuladas, duplicatas, quase duplicatas, dependências não recuperadas e casos que exigem outra revisão para uma explicação segura.

| Módulo | Novas questões |
| --- | ---: |
| M1 — Fundamentos | 21 |
| M2 — Catalogação e metadados | 42 |
| M3 — Classificação e linguagens | 28 |
| M4 — Recuperação e serviços de informação | 73 |
| M5 — Gestão e coleções | 53 |
| M6 — Bibliotecas digitais e IA | 42 |
| M8 — Normalização | 22 |
| M9 — Comunicação científica e métricas | 15 |
| M14 — Tecnologia da informação e dados | 4 |
| **Total** | **300** |

O lote tem **172 gabaritos C e 128 E**. Não foram acrescentados itens a módulos apenas para completar uma distribuição.

## Revisão do conteúdo

Cada item recebeu **comentário, exemplo prático e comparação didática individuais**, além de trecho decisivo selecionado literalmente e ligação à teoria. A fundamentação não se limita a repetir a resposta: apresenta o conceito, aplica a regra e discute condições e limites. Os exemplos e contrastes são autorais; não são novas questões oficiais.

Há cuidados explícitos com normas antigas, terminologia e modelos. Por exemplo, a questão sobre palavras-chave distingue os separadores previstos na NBR 6028:2003 e na edição de 2021. Os comentários também distinguem URI de URL, acesso de posse, seleção de aquisição, critérios de qualidade de mera contagem e modelos conceituais de protocolos de comunicação.

Foram acrescentados perfis específicos de **RAG, heurísticas e redes neurais**, com referências a Lewis e colaboradores, Russell e Norvig e Goodfellow, Bengio e Courville. Os novos itens usam a sequência do estudo reverso já existente: conceito, aplicação, exemplo, referência, comparação didática, técnica da banca e retorno à teoria.

O julgamento de uma questão real segue a identificação do resultado da banca. A análise conceitual é autoral e deve explicitar contexto, limitações ou imprecisões terminológicas. Uma nota de contextualização não equivale a uma justificativa oficial de recurso.

## Correções e contexto

Cinco respostas da apostila divergiam do documento definitivo utilizado. O lote adota e identifica a resposta definitiva, acompanhada de comentário:

- **CPRM 2013, item 52:** matérias de pessoal e licitações não pertencem todas à seção 2 do DOU — **E**.
- **DPU 2016, item 85:** digitalização e disponibilização não se restringem a domínio público e publicações institucionais — **E**.
- **CPRM 2013, item 81:** etapas de escolha e controle de cabeçalhos de nomes — **C**.
- **TJDFT 2015, item 98:** descarte integra o desbaste — **C**.
- **CADE 2014, item 79:** monografia pode ter um número predeterminado de partes — **E**.

Três situações hipotéticas tiveram seu **contexto recuperado no caderno original** antes da assertiva: a pesquisa por administração pública na CDU, a organização da informação em bibliotecas jurídicas e a comissão responsável por política de coleções de um acervo híbrido. Um texto introdutório de documentação jurídica recebeu contextualização editorial identificada como tal.

Foram removidos cabeçalhos de capítulo e marcas de anotação indevidamente presentes na extração dos contextos. Quebras tipográficas de palavras foram normalizadas sem substituir o sentido da assertiva. As assinaturas do texto extraído e do texto incorporado são registradas separadamente.

## Integridade e reprodução

O arquivo dos 1.638 registros anteriores e os quatro itens em TypeScript permaneceram intactos. Os 300 novos registros e sua conferência ficam em arquivos próprios. O manifesto privado contém as revisões preparadas; o importador valida cobertura, duplicatas, identidade do item oficial, fontes, assinaturas e presença dos blocos didáticos. Ele não gera comentários nem certifica automaticamente sua verdade conceitual.

```bash
python3 scripts/importarLoteRealConferido.py --manifesto caminho/manifesto.json
python3 scripts/importarLoteRealConferido.py --manifesto caminho/manifesto.json --write
node scripts/auditarEstudoReversoReais.mjs
```

A primeira chamada valida sem escrever. Reimportar os mesmos dados é idempotente; alterações em perfis ou fontes anteriores são recusadas. O importador histórico também preserva as anotações de lotes armazenados em arquivos separados.

Os relatórios registram página da prova, número oficial, fontes e assinaturas do texto. Hashes de texto extraído não são hashes dos bytes dos PDFs. A checagem estrutural complementa a revisão editorial e documental; não substitui avaliação científica humana das explicações.

- [Relatório do lote e evidências](LOTE-300-ACERVO-06.json).
- [Planilha da conferência](LOTE-300-ACERVO-06.csv).
- [Auditoria integral atual](ESTUDO-REVERSO-INTEGRAL.json).
- [Planilha do estudo reverso ativo](ESTUDO-REVERSO-INTEGRAL.csv).

## Validação da entrega

`npm run verify` passou com **1.040 testes em 134 arquivos**, auditorias, análise estática, compilação e orçamento de arquivos. Os **25 testes Python** dos importadores também passaram. A revalidação do manifesto confirmou exatamente 300 inclusões, sem alterar os registros e as anotações anteriores.

Cinco cenários locais de estudo reverso foram inspecionados em navegador, nas larguras de **320, 390 e 1.440 pixels**, incluindo tema escuro, norma histórica, resposta corrigida e contexto restaurado. Não houve erros de JavaScript nem transbordamento horizontal. Conceito, exemplo, fundamentação, trecho decisivo e comparação didática permaneceram disponíveis após responder.

A versão de produção compilada foi servida localmente: a página de acesso e os módulos de treinos e de questões carregaram sem erros, com **1.829 itens, dos quais 300 deste lote**. Os dados das explicações passaram a ter arquivo próprio, reduzindo o maior arquivo JavaScript a **2,06 MiB**; o pré-carregamento ficou em **4,86 MiB**. Os limites existentes foram mantidos.

A inspeção visual ocorreu localmente. A política de rede deste ambiente impede acessar diretamente o domínio de produção; o estado da implantação deve ser acompanhado separadamente no Vercel.

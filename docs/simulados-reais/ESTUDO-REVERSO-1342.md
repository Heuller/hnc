# Estudo reverso das 1.342 questões reais

> Registro histórico. O banco ativo tem 3.041 itens após [a primeira curadoria por lacunas](CURADORIA-LACUNAS-11.md). Consulte [a auditoria integral dos originais](ESTUDO-REVERSO-INTEGRAL.json); as contagens e decisões abaixo descrevem a etapa registrada.

Revisão editorial de 5 de novembro de 2026, tomando como referência o PDF fornecido pelo aluno, “Heuller na Câmara — Ambiente de Estudos”. O exemplo de QuestionPoint desse documento é adaptado; não foi incorporado como questão de prova real.

## O que o aluno encontra após responder

1. Resultado e convite à autoexplicação, conforme a resposta.
2. Enunciado com o trecho decisivo destacado.
3. Conceito e regra em linguagem acessível.
4. Aplicação individual ao enunciado, preservando o comentário específico de cada questão.
5. Exemplo concreto para visualizar a regra em uso.
6. Fundamentação teórica identificada e referência original da questão.
7. Formulação corrigida para itens errados; comparação falsa, identificada como didática, para itens certos.
8. Técnica de cobrança, perguntas para conferir a aprendizagem e acesso à teoria correspondente.

Há 1.342 vínculos editoriais e trechos selecionados individualmente, 141 explicações conceituais reutilizáveis e 90 registros de referências. Regras e exemplos do mesmo conceito podem ser compartilhados, enquanto o julgamento e sua aplicação permanecem específicos de cada questão. Não há seleção automática de explicação por palavra-chave ou fallback por módulo: uma questão nova sem anotação explícita é recusada.

A apresentação é feita pelo mesmo `PainelEstudoReverso` utilizado nos simulados teóricos. As novas camadas só aparecem quando o item contém fundamentação didática, preservando o comportamento dos demais cadernos. A leitura segue regra → aplicação → exemplo, com fonte acessível e comparação identificada como elaboração para estudo, não outra assertiva oficial.

## Fontes e atualização

Foram utilizados os materiais do acervo e referências da teoria, com fontes primárias complementares: Library of Congress/MARC, IFLA/FRBR/ICP/Conspectus, DCMI, W3C/SKOS/OWL/RDF/EPUB, OAI-PMH, DOI Foundation, PREMIS, FAIR e documentação dos sistemas. As normas de resumo, sumário e citações disponíveis em texto no acervo permitiram conferir diferenças entre obrigações, recomendações e edições. Os localizadores são temáticos quando não há segurança sobre a paginação da edição; não foram inventadas páginas.

Questões históricas continuam com o enunciado e o gabarito da fonte. Os comentários indicam diferenças de edição e contexto quando necessárias, sobretudo em normalização, catalogação, softwares e comunicação processual. Exemplos e comparações são autorais e não constituem afirmação de frequência estatística ou comentário oficial da banca.

A origem mantém dois estados: **46 questões confrontadas com prova e gabarito oficiais** e **1.296 atribuídas à banca pelos cadernos, com confronto oficial pendente**. A ampliação didática não muda esse estado nem certifica os gabaritos das apostilas. A auditoria estrutural também não substitui a revisão conceitual pelo professor e pelo aluno.

## Conferência e reprodução

- `npm run audit:reverso-reais`: confere cobertura, trechos literais, ligações, contrastes e atualização dos relatórios.
- `node scripts/auditarEstudoReversoReais.mjs --write`: regenera os relatórios a partir dos dados efetivamente usados pela plataforma.
- `npm run verify`: inclui essa auditoria, verificações já existentes, testes e build com orçamento de arquivos.

O [relatório CSV](ESTUDO-REVERSO-1342.csv) permite revisar a composição completa de cada correção. O [resumo JSON](ESTUDO-REVERSO-1342.json) registra cobertura por módulo e estado das fontes. IDs, redações, gabaritos e assinaturas de sessão foram preservados, mantendo respostas anteriores.

Validação desta entrega: 1.019 testes em 131 arquivos aprovados; lint, auditorias e build aprovados. A interface foi verificada em larguras de 320, 390 e 1.440 pixels, incluindo tema escuro, com leitura dos novos blocos e sem transbordamento horizontal.

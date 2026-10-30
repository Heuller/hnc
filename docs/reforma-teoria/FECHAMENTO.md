# Reforma teórica: implementação e validação

Registro de execução em 30/10/2026. A reforma foi aplicada aos **75 submódulos**, incluindo o mini-módulo 2.5: **429 blocos**, **669 microcheckpoints** (225 identificadores anteriores preservados e 444 novos), revisão essencial e fontes por aula. O inventário por submódulo está em [INVENTARIO-IMPLEMENTADO.csv](INVENTARIO-IMPLEMENTADO.csv). Os 307 registros de referências são ocorrências nas aulas, não 307 obras distintas.

## Conteúdo e aprendizagem

Cada aula possui unidades com objetivos, desenvolvimento específico, aplicações e recuperação ativa. Foram revistas as afirmações e justificativas dos checkpoints usados nessas aulas. Itens antigos problemáticos foram reescritos preservando o identificador e o valor C/E; isso preserva a vinculação do histórico, não significa que o texto antigo e o novo sejam idênticos. Todo item falso contém explicação e versão corrigida explícita. Os novos itens são autorais, sem se apresentarem como questões oficiais do CEBRASPE.

O fluxo oferece fundamento após a resposta, acesso ao trecho da aula e nova prática sem apagar a primeira tentativa. A leitura é registrada por bloco e versão. Leitura antiga não conclui automaticamente a edição ampliada; responder um único checkpoint também não conclui a aula. O modo de revisão essencial sintetiza o capítulo e não substitui a explicação completa.

A base científica é a pesquisa dirigida documentada em [PLANO.md](PLANO.md) e [ESTUDO_REVERSO.md](../ESTUDO_REVERSO.md): recuperação ativa, distribuição da prática, feedback e autoexplicação orientada. Não foi feita nova revisão sistemática. Os parâmetros de 85% e sete dias são decisões operacionais configuradas no produto, não limiares universais de aprendizagem. Acerto imediato, leitura registrada e selo da interface não constituem garantia de retenção ou aprovação em concurso.

## Correções substantivas

- Organização e catalogação: origem da Biblioteca da Câmara, Resolução 104/1984, composição efetiva da RVBI, tipos e condições do AACR2r 24.18, diferenças entre MARC bibliográfico e autoridades, METS 1/2 e limites de conversão/interoperabilidade.
- Gestão: autoria do modelo de Evans apresentado por Vergueiro, exceção da aquisição na descrição desse modelo, sentido amplo de desbastamento, condições de licenças, versões COUNTER, diferenças entre uso, satisfação, impacto e aprendizagem.
- Informação e tecnologia: qualidade versus autenticidade/fixidez, limites de RAG e IA, normalização relacional, SQL, regex, paginação, OAIS, PREMIS, preservação e avaliação com dados.
- Conservação e normalização: diagnóstico antes de intervenção, limites de temperatura/umidade e tratamentos, edições ABNT pertinentes e distinção entre recomendação e obrigação.
- Ciência e direitos: acesso aberto sem equivalência automática com APC, FAIR e acesso controlado, versões Creative Commons, artigos corretos da LDA, retirada da atribuição autoral à Súmula 522/STJ, métricas de citações e transição da CAPES para 2025–2028.
- Legislação: EC 138/2025, alterações da LGPD em 2026, condições da Lei 14.133, Resolução da Câmara 33/2026, quóruns diferentes de abertura do RICD e Regimento Comum e autoridade correta para promulgação subsidiária no art. 66, § 7º.
- Leitor: correção do reteste sem feedback, proteção de atalhos por foco e modificadores, ausência de conclusão prematura e seleção explícita da aula 1.1 após navegar por outras aulas.

## Fontes e limites da conferência

Foram utilizados os modelos enviados pelo usuário, o acervo teórico do projeto e referências primárias identificadas nas aulas. A identidade, edição e utilidade dos arquivos foram conferidas durante a pesquisa. Documentos escaneados exigiram OCR ou leitura visual. Há registro das consultas parciais em [ANDAMENTO.md](ANDAMENTO.md): baixar um PDF não foi contabilizado como leitura integral.

Exemplos: Grogan foi confrontado nos trechos do processo de referência; Lancaster, nos trechos recuperados sobre análise de assunto; a NBR 14724:2024 corrigida em 2025 exigiu OCR do arquivo; o arquivo inicialmente suposto como CDDir revelou ser capítulo sobre vocabulários controlados. Para CDDir foram consultadas referências e o vocabulário institucional do Senado, sem apresentar esse capítulo como tabela de classificação jurídica.

Prevalece o edital e a data de corte cadastrados no HNC: legislação até **02/10/2026**. O corte jurisprudencial de trinta dias antes de **17/01/2027** ainda é futuro na data desta execução; não se afirma ter conferido julgados que ainda não foram publicados.

A revisão editorial foi feita pelo mesmo executor da implementação. As verificações automáticas medem estrutura, comportamento e consistência; não certificam ausência absoluta de erro conceitual. A **auditoria individual integral das questões dos simulados** permanece na fase seguinte solicitada pelo usuário e não foi contabilizada como concluída nesta reforma teórica.

## Reprodução técnica

- `node scripts/aplicarReformaTeorica.mjs`: aplica os registros de `src/content/reforma/aulas` aos módulos, preservando IDs e sem depender de arquivos do ambiente de execução.
- `npm run verify`: lint, suíte de testes, verificações estruturais e build com os orçamentos existentes.
- `python scripts/validarExemplosTeoria.py`: executa exemplos SQL, regex e paginação com casos positivos e negativos.
- `CHROME_BIN=/usr/bin/chromium node scripts/validarLeitorReformado.mjs`, com o Vite em `127.0.0.1:5173`: confere 75 aulas em 1440 e 390 pixels, navegação, prática, teclado, impressão e persistência. Usa autenticação local de desenvolvimento; não certifica sincronização remota ou autenticação da produção.

A divisão do conteúdo em arquivos por módulo manteve os limites do build sem elevá-los. O registro comum ainda referencia o conjunto de módulos: a divisão dos arquivos não deve ser apresentada como carregamento assíncrono independente de cada aula. A otimização de carregamento inicial tem esse limite explícito.

Validação registrada: **972 testes em 124 arquivos**, lint sem avisos/erros, verificações estruturais e build aprovados. Roteiro de navegador: **150 verificações de layout** mais os fluxos interativos descritos acima. Evidência resumida em [VALIDACAO.json](VALIDACAO.json).

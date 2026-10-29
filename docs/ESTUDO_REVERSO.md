# Estudo reverso por questões no HNC

O estudo reverso começa por uma tentativa e usa o erro ou a dúvida para orientar a leitura da teoria. A fundamentação e os limites científicos estão em [Pesquisa de aprendizagem e raciocínio Cebraspe](PESQUISA_APRENDIZAGEM_E_RACIOCINIO_CEBRASPE.md).

## Ciclo implementado no treino de raciocínio

1. Julgar sem consultar a resposta, com opção “não sei”.
2. Declarar confiança opcionalmente antes do feedback e tentar explicar a regra em uma frase.
3. Conferir julgamento, trecho decisivo, fundamentação e versão contrastante.
4. Comparar o raciocínio com três passos e a fonte técnica localizada.
5. Aplicar a regra em outra situação, como exercício guiado após o feedback.
6. Voltar em outro dia para nova recuperação. A agenda é política inicial testável, não intervalo ótimo universal.

O treino está em **Treinos → Estudo reverso por questões**. Usa 12 itens autorais revisados do banco existente e sessões de até seis, priorizando vencidos e novos. Os IDs e gabaritos do lote foram preservados. A dificuldade editorial precisa de calibração futura com alunos.

## Conteúdo e manutenção

- `src/content/estudoReverso/pilotoRaciocinio.ts`: objetivos, passos, fontes e aplicações do lote.
- `src/domain/treinoReverso.ts`: elegibilidade, seleção e sugestão de revisão.
- `src/components/estudoReverso/TreinoRaciocinioModal.tsx`: tentativa, confiança, explicação e feedback.
- `PainelEstudoReverso`: correção comentada compartilhada com simulados.

O gatilho deve ser trecho literal do item. Justificativa e contraste precisam ser verdadeiros nas condições e na edição normativa dadas. Cumprir extensão e prefixo não certifica correção semântica. A técnica de elaboração é uma análise editorial, não instrução secreta da banca.

## Cobertura conhecida

A auditoria do commit `c8c4bac` mediu 2.068 itens ativos nos 20 cadernos: 1.201 sem gatilho e 211 sem o contraste correspondente. Esses números descrevem aquela versão, não implantação completa. A revisão atual é um lote identificado de 12 itens; não estende homologação ao restante do acervo. Contagens brutas, itens elegíveis, checkpoints e inéditas devem indicar seu denominador.

Os scripts históricos de exportação e verificação de lotes continuam em `scripts/estudoReverso`. Seu uso exige conferência editorial de fontes e julgamentos, além da validação sintática.

## Como medir qualidade

- Julgamento anterior à ajuda, separado do exercício guiado.
- Confiança declarada antes do resultado.
- Recuperação tardia em sessões distintas e desempenho em reserva.
- Validação semântica, contestações e rastreabilidade.
- Carga, retomada e abandono, além do acerto.

Não converter leitura, clique de revelação ou acerto imediato em prova de domínio. Os formatos legados e as previsões existentes possuem limitações documentadas na auditoria e não são homologados por este lote.

## Feedback em cada resposta dos simulados

Nos simulados por módulo, cada resposta revela imediatamente a comparação entre o julgamento do aluno e o gabarito, a justificativa cadastrada, o trecho decisivo quando localizado literalmente, o contraste disponível e um roteiro para investigar a dificuldade. Acerto não é tratado como prova de domínio; branco tem orientação própria. O roteiro distingue desconhecimento da regra, interpretação das condições e possível troca na marcação, sem atribuir uma causa ao aluno automaticamente.

O aluno pode voltar diretamente ao submódulo de teoria. Os 12 itens revisados também exibem regra, três passos e fonte localizada no próprio simulado. Os demais usam sua fundamentação existente; isso não representa revisão editorial integral do banco. O contraste redundante foi removido.

Todos os cadernos, inclusive o Mega, iniciam em modo estudo com correção por resposta. O modo prova é uma escolha explícita antes da primeira resposta e mantém gabarito e comentários ao final. Seu relatório usa o mesmo painel pedagógico por item, sem antecipar respostas durante a prova.


## Revisão de abrangência em 29/10/2026

O protocolo foi estendido a ItemCE, exercícios X1–X10 pelo renderizador comum (e a cada item vinculado de X8), revisão F1–F8 pelo feedback comum, adaptativo, caderno de erros e treino de véspera. Radar é consulta, sem julgamento do aluno. Nos formatos sem C/E, o roteiro confere a resposta específica, sem simular pontuação de prova. Formatos F3/F8 só usam alternativas específicas cadastradas; sem elas, retorna-se a C/E.

Isso estende a interface, **não homologa o conteúdo**. O censo reproduzível está em `scripts/auditarAcervo.mjs`, com status e hash por registro. As correções focais estão em `docs/relatorios/REVISAO_EDITORIAL_ITENS_2026-10-29.json`. Comentários genéricos recebem indicação de pendência; contrastes com inserção artificial de “indevidamente” não são apresentados como reescrita válida. Há pendências conceituais individuais, fontes sem localizador e necessidade de calibrar dificuldade com respostas de alunos.

A referência adotada é o edital e a data de corte cadastrados no HNC, conforme orientação do responsável pela plataforma. Legislação (13.33–13.34) e jurisprudência (13.34.1) seguem regras distintas. Na data de prova cadastrada (17/01/2027), 30 dias corridos antes correspondem a 18/12/2026. Conferir retificações antes de publicação.

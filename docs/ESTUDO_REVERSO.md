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

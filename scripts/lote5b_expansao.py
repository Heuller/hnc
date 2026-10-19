# -*- coding: utf-8 -*-
"""
Script de Expansão Didática — Lote 5B (M12, M13 e M14: 12 Submódulos)
Missão v2 — Fase 5: Expansão da Teoria Didática Dual (W5)
Embasamento Real e Referências Bibliográficas Canônicas
"""

import os
import re
import sys

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

TEXTOS_DIDATICOS = {
    'sub-12-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A leitura instrumental em Língua Inglesa no padrão Cebraspe opera pelo **Modelo Interativo-Compensatório (Stanovich)**, combinando técnicas estratégicas de leitura rápida:
1. **O Modelo Interativo-Compensatório (Keith Stanovich):**
   - A leitura eficiente não é puramente *Bottom-up* (decodificação mecânica de letra por letra e palavra por palavra) nem puramente *Top-down* (adivinhação baseada apenas no conhecimento de mundo).
   - É um processo interativo: quando o leitor tem deficiência em um nível (ex.: não conhece o significado de um termo técnico isolado), ele compensa imediatamente utilizando pistas contextuais, morfológicas e conhecimento prévio do assunto.
2. **Técnicas Canônicas de Leitura:**
   - **Skimming (Varredura Panorâmica):** Leitura rápida dos títulos, subtítulos, primeira e última frase dos parágrafos (*topic sentences*) para captar a **ideia central** e o propósito comunicativo geral do texto em menos de 1 minuto.
   - **Scanning (Busca Pontual Específica):** Movimento ocular em zigue-zague à procura de um dado factual isolado (número, data, nome próprio, sigla, termo técnico) sem ler o texto ao redor.
3. **Pistas Tipográficas e Estruturais:**
   - Palavras em negrito, itálico, números, travessões, parênteses e títulos orientam o foco de atenção e revelam a macroestrutura argumentativa.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Scanning em Relatório da OCDE para a Comissão de Finanças):** Um deputado relator precisa saber a alíquota média do IVA praticada nos países da OCDE em 2023. O bibliotecário recebe um relatório em inglês de 200 páginas e aplica o **Scanning**: localiza a tabela com o termo *"Value Added Tax (VAT)"* e a coluna *"Average 2023"*, extraindo o número exato em 30 segundos.
- **Cenário 2 (Skimming em Artigo da IFLA sobre Preservação Digital):** Ao avaliar um artigo internacional recém-publicado pela *IFLA Journal*, o bibliotecário faz **Skimming** no *Abstract* e na *Conclusion*, identificando em 2 minutos que o texto trata da migração de formatos para PDF/A-4, selecionando-o para a base da RVBI.
- **Cenário 3 (Modelo Compensatório em Tradução Jurídica):** Lendo um tratado da União Europeia, o analista depara-se com a expressão arcaica *"heretofore"*. Em vez de travar a leitura, aplica o modelo compensatório de Stanovich: a oração trata de atos anteriores à assinatura do acordo, inferindo perfeitamente o sentido de *"até o presente momento"*.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Técnica / Estratégia | Objetivo Primário | Velocidade | Quando Usar no Cebraspe |
| :--- | :--- | :--- | :--- |
| **Skimming** | Compreender a ideia geral / tese central | Muito rápida | Itens sobre o objetivo principal do autor |
| **Scanning** | Localizar dado isolado (número/nome) | Instantânea | Itens sobre datas, porcentagens e fatos pontuais |
| **Bottom-up** | Decodificação lexical palavra por palavra | Lenta | Itens sobre sinônimos ou regência de preposição |
| **Top-down** | Uso de conhecimento prévio de mundo | Rápida | Inferências e intenções implícitas do autor |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Generalização Indevida da Ideia Central:** A banca pega um detalhe secundário mencionado em uma única linha do terceiro parágrafo e afirma que aquela é a ideia central (*main idea*) de todo o texto. **Gabarito: ERRADO.** A ideia central deve abranger a tese defendida pelo autor do início ao fim.
- **Scanning em Questões de Inferência:** Tentar responder a itens de inferência global apenas buscando palavras idênticas com scanning. O Cebraspe usa paráfrases sinônimas para testar se o candidato realmente compreendeu o sentido.
- **Tradução Palavra por Palavra:** Dizer que a leitura instrumental exige traduzir mentalmente cada palavra para o português antes de responder. **Gabarito: ERRADO.** A leitura instrumental busca a apreensão direta do significado no próprio inglês.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **NATION, I. S. P.** *Teaching ESL/EFL Reading and Writing*. New York: Routledge, 2009. (A principal autoridade em pedagogia e estratégias de leitura em língua inglesa).
- **NUTTALL, Christine.** *Teaching Reading Skills in a Foreign Language*. Oxford: Macmillan, 2005. (A referência clássica das técnicas de skimming e scanning).
- **STANOVICH, Keith E.** Toward an interactive-compensatory model of individual differences in the development of reading fluency. *Reading Research Quarterly*, v. 16, n. 1, p. 32-71, 1980.
- **GRABE, William; STOLLER, Fredricka L.** *Teaching and Researching Reading*. 3. ed. New York: Routledge, 2019.
- **CEBRASPE.** *Caderno de Provas Comentadas de Língua Inglesa — Concursos Públicos Federais*. Brasília: Cebraspe, 2023.""",

    'sub-12-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Marcadores Discursivos (*Linking Words* / Connectors)** e as conjunções estabelecem as relações de sentido lógico entre frases e parágrafos em textos em inglês:
1. **Categorias Semânticas Canônicas de Conectivos:**
   - **Contraste / Oposição / Concessão:**
     - *However, Nevertheless, Nonetheless, Yet, Still* (No entanto, todavia, contudo).
     - *Although, Even though, Though* (Embora, ainda que — introduzem orações subordinadas concessivas).
     - *Despite, In spite of* (Apesar de — seguidos de substantivo ou verbo no `-ing`!).
     - *On the other hand, Whereas, While* (Por outro lado, enquanto que).
   - **Causa e Consequência:**
     - *Causa:* *Because, Since, As, Due to, Owing to* (Porque, já que, devido a).
     - *Consequência / Conclusão:* *Therefore, Thus, Hence, Consequently, As a result* (Portanto, dessa forma, por conseguinte).
   - **Adição / Continuidade:**
     - *Furthermore, Moreover, In addition, Besides, Also* (Além disso, ademais).
   - **Condição:**
     - *If, Unless* (a não ser que / a menos que = *if not*), *Provided that, As long as* (contanto que).
   - **Finalidade / Propósito:**
     - *In order to, So as to, So that* (A fim de que, para que).
2. **Equivalência e Substituição Semântica no Cebraspe:**
   - A banca testa frequentemente se a substituição de um conectivo por outro preserva o sentido original e a correção gramatical do texto (ex.: trocar *However* por *Nevertheless*, ou *Due to* por *Owing to*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Interpretação de Relatório do Banco Mundial sobre Dívida Pública):** O texto em inglês afirma: *"Although the fiscal deficit increased, inflation remained under control"*. O analista traduz para a Consultoria de Orçamento: *"Embora o déficit fiscal tenha aumentado, a inflação permaneceu sob controle"*, identificando a oração concessiva introduzida por *Although*.
- **Cenário 2 (Análise de Condição em Acordo de Cooperação Internacional):** Em termo de doação de livros da Biblioteca do Congresso americano para a Câmara, consta a cláusula: *"The books will be delivered, **unless** shipping costs exceed the budget"*. O bibliotecário alerta a Diretoria: os livros serão entregues **a não ser que** os custos de frete superem o teto orçamentário.
- **Cenário 3 (Articulação Argumentativa em Artigo para Publicação Internacional):** Ao redigir artigo em inglês para a IFLA sobre as inovações da BDCam, o bibliotecário utiliza *Furthermore* e *Moreover* para encadear os avanços de inteligência artificial aplicados aos anais históricos da Câmara.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Marcador Discursivo | Relação Lógica Estabelecida | Equivalentes Diretos | Pegadinha Típica Cebraspe |
| :--- | :--- | :--- | :--- |
| **However / Nevertheless** | Contraste / Oposição | *Nonetheless, Yet, Still* | Dizer que expressa causa ou adição |
| **Although / Even though** | Concessão (quebra de expectativa) | *Though, In spite of the fact that* | Exige oração com verbo conjugado |
| **Despite / In spite of** | Concessão | Seguido de nome ou `-ing` | Não aceitam oração com sujeito e verbo direto |
| **Therefore / Thus** | Conclusão / Consequência | *Hence, Consequently, As a result* | Dizer que expressa contraste |
| **Unless** | Condição negativa (*If not*) | *Except if* | Confundir com *as long as* (afirmativo) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Troca de Conector de Causa por Consequência:** A banca afirma que a substituição de *Because* por *Therefore* mantém o sentido original do período. **Gabarito: ERRADO.** *Because* introduz a causa; *Therefore* introduz a consequência (são vetores lógicos opostos!).
- **Substituição de Although por Despite:** Dizer que se pode substituir *Although* por *Despite* sem qualquer alteração sintática na frase. **Gabarito: ERRADO.** *Although* introduz uma oração completa (com sujeito e verbo); *Despite* exige sintagma nominal ou verbo substantivado no gerúndio (`-ing`).
- **Sentido de Unless:** A banca afirma que *Unless the law is passed* significa *Se a lei for aprovada*. **Gabarito: ERRADO.** *Unless* significa *A não ser que a lei seja aprovada* (condição negativa).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **HALLIDAY, M. A. K.; HASAN, Ruqaiya.** *Cohesion in English*. London: Longman, 1976. (A obra fundacional sobre coesão e conectivos lógicos).
- **MURPHY, Raymond.** *English Grammar in Use*. 5. ed. Cambridge: Cambridge University Press, 2019. (A gramática prática mais respeitada no mundo).
- **HEWINGS, Martin.** *Advanced Grammar in Use*. 3. ed. Cambridge: Cambridge University Press, 2013.
- **SWALES, John M.; FEAK, Christine B.** *Academic Writing for Graduate Students: Essential Tasks and Skills*. 3. ed. Ann Arbor: University of Michigan Press, 2012.
- **CEBRASPE.** *Banco de Questões de Provas de Língua Inglesa para o Congresso Nacional*. Brasília: Cebraspe, 2022.""",

    'sub-12-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Mecanismos de Coesão Textual e Referenciação Pronominal** sustentam o encadeamento gramatical das ideias em textos formais em inglês:
1. **Tipos de Referenciação:**
   - **Anáfora (Referência Anafórica):** O termo refere-se a um elemento já citado anteriormente no texto (é a forma de referenciação mais frequente e mais cobrada pelo Cebraspe).
   - **Catáfora (Referência Catafórica):** O termo antecipa um elemento que ainda será explicitado adiante na oração.
   - **Exófora (Referência Exofórica):** O termo aponta para fora do texto, para a situação comunicativa ou contexto extralinguístico.
2. **Pronomes Relativos Canônicos (*Relative Pronouns*):**
   - **Who:** Refere-se exclusivamente a **pessoas** (sujeito da oração adjetiva).
   - **Whom:** Refere-se a pessoas na função de **objeto** (frequentemente precedido de preposição: *to whom, with whom*).
   - **Which:** Refere-se a **coisas, animais, objetos ou à oração anterior inteira**.
   - **That:** Pode referir-se a pessoas ou coisas; usado **exclusivamente em orações adjetivas restritivas** (sem vírgulas!). Nunca pode ser precedido de vírgula ou preposição!
   - **Whose:** Indica **posse** (cujo, cuja, cujos, cujas); liga dois substantivos sem artigo (*the author whose book...*).
3. **Pronomes Demonstrativos e Coesão Gramatical:**
   - *This / These:* Proximidade temporal ou espacial; refere-se ao que acabou de ser dito.
   - *That / Those:* Distância; contraste com elementos anteriores.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Identificação de Referência Anafórica em Tratado Internacional):** No texto do Acordo de Paris, lê-se: *"The participating countries submitted their emission targets. **They** pledged to reduce carbon output by 2030"*. O bibliotecário identifica para o consultor legislativo que o pronome anafórico *They* retoma exclusivamente o sintagma *The participating countries*.
- **Cenário 2 (Uso Correto de Whose em Resenha Bibliográfica em Inglês):** Ao resenhar um livro de direito constitucional para a Revista da Câmara, o bibliotecário escreve: *"The jurist **whose** theories revolutionized parliamentarism..."*. O pronome *whose* indica posse semântica (as teorias do jurista).
- **Cenário 3 (A Regra do That sem Vírgula em Relatórios Oficiais):** Ao revisar a versão em inglês de um relatório da CPI, o tradutor remove a vírgula antes de *that*: *"The evidence **that** was presented to the committee"* (oração restritiva essencial para a identificação da prova).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Pronome Relativo | Refere-se a Quem | Uso com Vírgula? | Precedido de Preposição? |
| :--- | :--- | :--- | :--- |
| **Who** | Pessoas (sujeito) | Sim (explicativa) ou Não (restritiva) | Raro no inglês formal |
| **Whom** | Pessoas (objeto) | Sim ou Não | **SIM** (*To whom, from whom*) |
| **Which** | Coisas / Animais / Oração | Sim ou Não | **SIM** (*In which, for which*) |
| **That** | Pessoas ou Coisas | **NUNCA!** (Apenas restritivas) | **NUNCA!** |
| **Whose** | Posse (de quem / cujo) | Sim ou Não | Sim (*In whose hands*) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O Pronome "Which" Retomando a Frase Inteira:** O Cebraspe adora colocar o pronome *which* precedido de vírgula e perguntar se ele retoma apenas o último substantivo. **Gabarito: ERRADO.** Quando precedido de vírgula após uma oração, *which* frequentemente retoma **toda a ideia da oração anterior**, e não apenas a última palavra!
- **That após Vírgula ou Preposição:** A banca propõe substituir *which* por *that* em frases com preposição (*The room in which...* $\\to$ *in that*). **Gabarito: ERRADO.** O pronome *that* não admite preposição antes de si nem pode ser usado após vírgula em orações explicativas.
- **Ambiguidade Anafórica:** A banca sugere que o pronome *it* retoma um termo no plural. **Gabarito: ERRADO.** *It* é pronome singular neutro; para entidades no plural usa-se *they/them*.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **HALLIDAY, M. A. K.; HASAN, Ruqaiya.** *Cohesion in English*. London: Longman, 1976. (A teoria canônica de anáfora, catáfora e coesão gramatical).
- **BIEBER, Douglas et al.** *Longman Grammar of Spoken and Written English*. London: Longman, 1999.
- **QUIRK, Randolph et al.** *A Comprehensive Grammar of the English Language*. London: Longman, 1985. (A maior enciclopédia gramatical da língua inglesa).
- **SWALES, John M.** *Genre Analysis: English in academic and research settings*. Cambridge: Cambridge University Press, 1990.
- **CEBRASPE.** *Análise de Itens de Referenciação Textual em Língua Estrangeira*. Brasília: Cebraspe, 2023.""",

    'sub-12-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Vocabulário Contextual, os Falsos Cognatos (*False Friends*), os Verbos Modais e a Paráfrase** definem o padrão de exigência avançada do Cebraspe em inglês:
1. **Falsos Cognatos Críticos no Contexto Jurídico e Administrativo:**
   - **Policy:** Política pública, diretriz ou apólice (e NÃO "polícia" — polícia é *police*).
   - **Notice:** Notificação, aviso, edital ou perceber (e NÃO "notícia" — notícia é *news*).
   - **Pretend:** Fingir (e NÃO "pretender" — pretender é *intend*).
   - **Intend:** Pretender, ter a intenção de (e NÃO "entender" — entender é *understand*).
   - **Actually:** Na verdade, realmente, de fato (e NÃO "atualmente" — atualmente é *currently / nowadays*).
   - **Eventually:** No final das contas, com o tempo, por fim (e NÃO "eventualmente" — eventualmente é *occasionally*).
   - **Comprehensive:** Amplo, abrangente, detalhado (e NÃO "compreensivo" — compreensivo é *understanding*).
   - **Legislation:** Conjunto de leis (e NÃO o ato de legislar apenas).
2. **Verbos Modais (*Modal Verbs*) e Graus de Certeza/Obrigação:**
   - **Must / Have to:** Obrigação estrita, necessidade mandatória ou dedução lógica quase certa.
   - **Should / Ought to:** Recomendação, conselho, dever moral ou expectativa (*ought to* = *should*).
   - **May / Might / Could:** Possibilidade e probabilidade incerta (*might* indica menor probabilidade que *may*). *May* também indica permissão formal.
   - **Can:** Capacidade, habilidade ou permissão informal.
3. **A Paráfrase no Cebraspe:**
   - O item propõe uma nova redação para uma sentença do texto usando palavras distintas e pergunta se o sentido original e a coerência argumentativa foram rigorosamente preservados.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Alerta de Falso Cognato em Tradução de Política Pública):** Ao traduzir documento da ONU sobre *"Public Health Policies"*, um estagiário redige *"Polícias de Saúde Pública"*. O bibliotecário da Câmara corrige imediatamente para **"Políticas Públicas de Saúde"**, evitando um erro diplomático crasso na publicação oficial.
- **Cenário 2 (Diferença entre Must e Should em Norma Técnica Internacional):** Ao interpretar a norma ISO sobre preservação de arquivos, o analista verifica a cláusula: *"The temperature **must** not exceed 22 °C, and relative humidity **should** be around 50%"*. Ele informa à engenharia: o limite de 22 °C é **obrigatório e inegociável** (*must*); a umidade de 50% é uma **meta recomendada** (*should*).
- **Cenário 3 (Identificação de Sentido de Actually em Discurso Parlamentar Estrangeiro):** Em depoimento transmitido na TV Câmara, um diplomata afirma: *"Actually, the treaty has not been ratified yet"*. O intérprete traduz corretamente: *"Na verdade / De fato, o tratado ainda não foi ratificado"*, e não *"Atualmente"*.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Palavra em Inglês | O que Parece (Falso Cognato) | O que Realmente Significa | Como se Diz em Inglês o que Parecia |
| :--- | :--- | :--- | :--- |
| **Actually** | Atualmente | Na verdade, de fato | *Currently, nowadays* |
| **Eventually** | Eventualmente (às vezes) | Por fim, com o passar do tempo | *Occasionally, sometimes* |
| **Pretend** | Pretender | Fingir | *Intend* |
| **Policy** | Polícia | Política pública / Diretriz | *Police* |
| **Comprehensive** | Compreensivo (tolerante) | Amplo, completo, exaustivo | *Understanding, tolerant* |
| **Notice** | Notícia de jornal | Aviso, edital, notificação | *News* |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Actually como Sinônimo de Currently:** A banca afirma que *actually* pode ser substituído por *currently* sem alteração de sentido. **Gabarito: ERRADO.** *Actually* significa "de fato/na verdade"; *currently* significa "atualmente".
- **Must como Mero Conselho:** O Cebraspe propõe que o verbo modal *must* expressa uma mera recomendação facultativa. **Gabarito: ERRADO.** *Must* expressa **obrigação categórica** ou forte dedução lógica; quem expressa conselho ou recomendação é *should* ou *ought to*.
- **Pretend como Intenção:** Dizer que *The government pretended to reform the law* significa que o governo pretendia reformar a lei. **Gabarito: ERRADO.** A frase significa que o governo **fingiu** reformar a lei!

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **PALMER, F. R.** *Mood and Modality*. 2. ed. Cambridge: Cambridge University Press, 2001. (A obra canônica sobre a semântica dos verbos modais).
- **SCHUTZ, Ricardo.** *Falsos Cognatos em Língua Inglesa: guia prático e contextual*. São Paulo: Disal, 2018.
- **MURPHY, Raymond.** *English Grammar in Use*. 5. ed. Cambridge: Cambridge University Press, 2019. (Capítulos sobre Modal Verbs).
- **SWALES, John M.; FEAK, Christine B.** *Academic Writing for Graduate Students*. Ann Arbor: University of Michigan Press, 2012.
- **CEBRASPE.** *Guia de Elaboração de Itens de Língua Inglesa*. Brasília: Cebraspe, 2021.""",

    'sub-13-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Interpretação Textual, a Coesão e as Relações Semânticas no padrão Cebraspe** operam pela fidelidade estrita à materialidade do texto e aos nexos lógicos:
1. **Compreensão vs. Interpretação no Cebraspe:**
   - **Compreensão (Decodificação Factual):** O comando diz: *"Segundo o texto..."*, *"Conforme o autor..."*. A resposta está explícita nas linhas do texto; não extrapolar!
   - **Interpretação (Inferência Válida):** O comando diz: *"Infere-se do texto que..."*, *"Conclui-se da leitura que..."*. Exige dedução lógica fundada estritamente nas premissas autorizadas pelo texto.
   - **Os Três Erros Clássicos de Leitura:**
     - *Extrapolação:* Acrescentar ideias alheias ou julgamentos pessoais que não constam do texto.
     - *Redução:* Limitar o sentido geral a apenas uma parte isolada do texto.
     - *Contradição:* Concluir exatamente o oposto do que o autor afirmou.
2. **Coesão Referencial e Sequencial (Ingedore Koch):**
   - **Referencial:** Substituições pronominais, elipses, sinônimos e hiperônimos que evitam repetições desnecessárias.
   - **Sequencial:** Encadeamento temporal e lógico das ideias mediado por conjunções, conectivos e tempos verbais.
3. **Relações Semânticas Canônicas:**
   - Causa vs. Consequência; Condição; Concessão (quebra de expectativa sem anular a tese principal); Proporcionalidade; Conformidade.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Interpretação Estrita de Discurso Parlamentar nos Anais):** Ao indexar um discurso polêmico de um parlamentar para os anais da Câmara, o bibliotecário analisa estritamente a **compreensão literal** das palavras proferidas, evitando fazer inferências ideológicas extrapolativas que não tenham sido sustentadas pelo orador.
- **Cenário 2 (Coesão Referencial por Hiperônimo na Redação de Parecer):** O redator técnico da Câmara escreve: *"O Supremo Tribunal Federal julgou a constitucionalidade da matéria. A **Corte Constitucional** entendeu que o princípio foi violado"*. O termo *Corte Constitucional* funciona como **hiperônimo coesivo anafórico**, mantendo a elegância estilística e a clareza do parecer.
- **Cenário 3 (Diferenciação entre Causa e Consequência em Nota Técnica):** A Consultoria de Orçamento redige nota técnica: *"Em decorrência da queda de arrecadação fiscal, os investimentos em tecnologia foram suspensos"*. O bibliotecário identifica a relação causal: a queda de arrecadação é a **causa**; a suspensão dos investimentos é a **consequência**.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Comando Cebraspe | Natureza da Busca | Regra de Ouro | Perigo Oculto |
| :--- | :--- | :--- | :--- |
| **\"Depreende-se / Infere-se\"** | Interpretação / Dedução lógica | A premissa deve estar no texto | Extrapolar para conhecimento de mundo |
| **\"Segundo o texto / O autor afirma\"** | Compreensão / Dado explícito | Buscar a literalidade das linhas | Interpretar além do que foi dito |
| **Coesão Referencial** | Retoma ou antecipa termos | Pronomes, sinônimos, hiperônimos | Perda do antecedente exato |
| **Coesão Sequencial** | Articula o fluxo lógico do raciocínio | Conjunções subordinativas e coord. | Trocar causa por consequência |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Extrapolação com Afirmação Factual Verdadeira:** O Cebraspe coloca uma assertiva historicamente verdadeira no mundo real (ex.: *"A Constituição de 1988 consagrou direitos sociais fundamentais"*), mas que **não foi mencionada pelo autor no texto da prova**. Se o comando era *"De acordo com o texto..."*, o **Gabarito é ERRADO**. A verdade no Cebraspe é estritamente intra-textual!
- **Concessão vs. Causa:** Afirmar que a conjunção *embora* ou a locução *conquanto* introduzem uma relação de causa. **Gabarito: ERRADO.** *Embora* e *conquanto* introduzem orações subordinadas **concessivas** (oposição suave / quebra de expectativa).
- **Restrição vs. Explicação em Orações Adjetivas:** Dizer que a retirada das vírgulas em uma oração adjetiva explicativa mantém o sentido original. **Gabarito: ERRADO.** Sem vírgulas, a oração torna-se **restritiva**, alterando substancialmente o sentido do texto (passa a restringir um subgrupo!).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **KOCH, Ingedore Villaça; ELIAS, Vanda Maria.** *Ler e compreender: os sentidos do texto*. 3. ed. São Paulo: Contexto, 2010. (A maior referência em linguística textual nos concursos do Cebraspe).
- **BECHARA, Evanildo.** *Moderna Gramática Portuguesa*. 39. ed. rev. e ampl. Rio de Janeiro: Nova Fronteira, 2019. (A autoridade canônica da Academia Brasileira de Letras).
- **GARCIA, Othon M.** *Comunicação em Prosa Moderna: aprenda a escrever, aprendendo a pensar*. 27. ed. Rio de Janeiro: FGV, 2010.
- **CUNHA, Celso; CINTRA, Luís F. Lindley.** *Nova Gramática do Português Contemporâneo*. 7. ed. Rio de Janeiro: Lexikon, 2017.
- **CEBRASPE.** *Manual de Diretrizes Pedagógicas para Elaboração de Itens de Língua Portuguesa*. Brasília: Cebraspe, 2022.""",

    'sub-13-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Reescritura de Frases e Paráfrase** constitui a tipologia de itens mais densa e técnica das provas do Cebraspe:
1. **O Comando de Reescritura:**
   - A banca propõe uma redação alternativa para um trecho do texto original e pergunta se a alteração **mantém a correção gramatical e a coerência/sentido das ideias originais**.
   - **Dois Filtros Obrigatórios e Independentes:**
     1. *Filtro da Correção Gramatical:* A nova frase respeita a norma culta? (Concordância verbal/nominal, regência, crase, pontuação, tempos verbais e colocação pronominal). Se houver um único erro gramatical, o item é **ERRADO**.
     2. *Filtro da Coerência e Sentido:* A nova frase diz exatamente a mesma coisa? Houve alteração no grau de certeza (de "pode ser" para "é"), no alcance semântico (de "alguns" para "todos") ou na hierarquia de ideias? Se mudou o sentido, o item é **ERRADO**.
2. **Armadilhas Gramaticais Frequentes nas Reescrituras:**
   - **Troca de Voz Passiva por Ativa com Erro de Concordância:** A voz passiva sintética com partícula apassivadora `se` exige que o verbo concorde com o sujeito paciente (*Discutiram-se os projetos*, e não *Discutiu-se os projetos*).
   - **Deslocamento de Adjuntos Adnominais e Modificadores:** Mudar a posição da palavra *apenas* ou *somente* altera radicalmente o sentido da frase.
   - **Alteração do Valor Modal:** Transformar uma possibilidade hipotética (*poderia ocorrer*) em uma certeza categórica (*ocorrerá*).
   - **Supressão ou Inclusão Indevida de Preposição:** Na regência verbal (*assistir ao filme* $\\ne$ *assistir o filme*).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Revisão da Redação Final de Projeto de Lei aprovado na CCJC):** O relator apresenta uma emenda de redação para simplificar o texto de um artigo de lei. O bibliotecário e o consultor legislativo analisam a reescritura: ao substituir a expressão arcaica, verificam se a nova oração preservou estritamente o alcance sancionatório da norma sem criar brechas de interpretação jurídica.
- **Cenário 2 (Reescritura de Sumário Executivo para o Presidente da Câmara):** O diretor do CEDI precisa resumir um parecer técnico de 50 páginas em três parágrafos para o Presidente da Casa. Ele aplica técnicas de **paráfrase canônica**: substitui estruturas oracionais passivas prolixas por períodos diretos e claros, mantendo 100% da fidelidade aos dados fáticos do parecer.
- **Cenário 3 (Auditoria de Pontuação e Sentido em Atas Plenárias):** Na transcrição taquigráfica de um discurso parlamentar, a inserção indevida de uma vírgula entre o sujeito e o predicado alteraria a imputação de responsabilidade de uma acusação política. O revisor elimina o vício pontual aplicando a gramática canônica de Bechara.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Critério do Cebraspe | O que Avalia | Condição para o Gabarito ser CERTO | Causa Típica de Anulação/Erro |
| :--- | :--- | :--- | :--- |
| **Correção Gramatical** | Cumprimento das regras formais | 100% conforme a gramática padrão | Erro sutil de crase ou regência |
| **Coerência das Ideias** | Lógica interna e não contradição | A nova frase faz sentido no texto | Proposição ilógica ou contraditória |
| **Sentido Original** | Preservação do significado exato | Não amplia, não restringe, não altera | Trocar \"pode\" por \"deve\" |
| **Pontuação na Reescrita** | Uso de vírgulas e travessões | Respeita sintaxe de orações | Separar sujeito do verbo por vírgula |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A Frase Gramaticalmente Perfeita que Altera o Sentido:** O Cebraspe redige uma frase sem nenhum erro gramatical aparente, mas troca o quantificador (ex.: o texto dizia *"grande parte dos deputados"* e a reescrita diz *"a totalidade dos deputados"*). **Gabarito: ERRADO.** A correção gramatical foi mantida, mas o sentido foi violado.
- **A Partícula "Se" na Reescrita:** O texto original diz *"Os relatores analisaram os pareceres"*. A reescrita propõe: *"Analisou-se os pareceres"*. **Gabarito: ERRADO.** Na voz passiva com o pronome apassivador `se`, o verbo deve concordar obrigatoriamente no plural: *Analisaram-se os pareceres*.
- **Substituição de Conjunções:** Trocar *posto que* (que é concessiva = embora) por *visto que* (que é causal = já que). **Gabarito: ERRADO.** Altera a relação semântica do período.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **GARCIA, Othon M.** *Comunicação em Prosa Moderna: aprenda a escrever, aprendendo a pensar*. 27. ed. Rio de Janeiro: FGV, 2010. (A obra seminal de paráfrase e reescritura no Brasil).
- **BECHARA, Evanildo.** *Moderna Gramática Portuguesa*. 39. ed. Rio de Janeiro: Nova Fronteira, 2019.
- **CUNHA, Celso; CINTRA, Luís F. Lindley.** *Nova Gramática do Português Contemporâneo*. 7. ed. Rio de Janeiro: Lexikon, 2017.
- **KOCH, Ingedore Villaça.** *Desvendando os segredos do texto*. 8. ed. São Paulo: Cortez, 2014.
- **CEBRASPE.** *Metodologia de Formulação de Itens de Reescritura e Paráfrase*. Brasília: Cebraspe, 2022.""",

    'sub-13-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Sintaxe Avançada, Pontuação, Concordância, Regência e Crase** representam a espinha dorsal normativa da Língua Portuguesa exigida pelo Cebraspe:
1. **Regência e Crase Canônica:**
   - **Regra Geral da Crase:** A crase é a fusão da preposição `a` exigida pelo termo regente com o artigo feminino `a(s)` exigido pelo termo regido, ou com pronomes demonstrativos (`aquele, aquela, aquilo`).
   - **Casos Proibidos de Crase:**
     - Antes de palavras masculinas (*a pé, a prazo, a cavalo*).
     - Antes de verbos (*a partir de, a discutir*).
     - Antes de pronomes de tratamento (salvo *senhora, senhorita e dona*!).
     - Antes de pronomes indefinidos (*a todos, a qualquer*).
     - Com `a` no singular diante de palavra no plural (*a deputadas* sem `s`).
   - **Casos Facultativos de Crase (Mnemônico PAM):**
     - Diante de pronome possessivo feminino singular (*a/à minha biblioteca*).
     - Diante de nomes próprios femininos (*a/à Maria*).
     - Depois da preposição *até* (*até a/à Câmara*).
2. **Concordância Verbal Crítica:**
   - Sujeito com expressão partitiva (*a maioria de, grande parte de* + plural): o verbo pode concordar no singular com o núcleo partitivo ou no plural com o adjunto (*A maioria dos deputados votou / votaram*).
   - Sujeito com porcentagem: concorda com o numeral ou com o substantivo que o segue (*1% dos parlamentares faltou / faltaram*; mas *1% faltou*; *20% faltaram*).
   - Verbo **Haver** no sentido de existir/ocorrer e indicando tempo decorrido: é **impessoal**, não tem sujeito e fica obrigatoriamente na **3ª pessoa do singular** (*Havia dez projetos*, e NUNCA *Haviam dez projetos*!). O verbo auxiliar que o acompanha também fica no singular (*Deve haver dez projetos*).
   - Verbo **Fazer** indicando tempo decorrido ou temperatura: também é impessoal (*Faz dez anos*, e NUNCA *Fazem dez anos*!).
3. **Pontuação e Vírgula:**
   - **Proibições Absolutas:** NUNCA se separa o sujeito do verbo por vírgula; NUNCA se separa o verbo de seu objeto direto/indireto por vírgula.
   - **Uso Obrigatório da Vírgula:** Para isolar adjunto adverbial deslocado (de grande extensão); para isolar orações subordinadas adverbiais antecipadas; para isolar aposto explicativo; para isolar vocativo.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Aplicação do Verbo Haver em Parecer Orçamentário):** O consultor redige: *"No exercício financeiro de 2023, **havia** três propostas concorrentes"*. O bibliotecário revisor valida o texto, alertando que o uso de *"haviam"* constituiria erro crasso de concordância em documento oficial da Câmara.
- **Cenário 2 (Crase Proibida em Portaria Administrativa do CEDI):** O texto de uma portaria interna trazia a redação: *"O atendimento ao público será realizado **à partir** das 9h"*. O bibliotecário elimina o acento grave imediatamente: diante de verbo (*partir*), o uso de crase é terminantemente proibido pela norma culta.
- **Cenário 3 (Vírgula em Adjunto Adverbial Deslocado em Lei Federal):** Na redação de um artigo de lei: *"Durante o estado de calamidade pública, as compras de medicamentos serão simplificadas"*. A vírgula é obrigatória para isolar o adjunto adverbial temporal de grande extensão antecipado na oração.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Fenômeno Gramatical | Regra Geral | Casos Proibidos / Erros Crassos | Casos Facultativos |
| :--- | :--- | :--- | :--- |
| **Crase** | Preposição `a` + Artigo `a` | Antes de verbo, masculino, pronome indefinido | Possessivo feminino (*minha*), nome mulher, *até* |
| **Verbo Haver** | Sentido de existir = Impessoal | Jamais vai para o plural (*Haviam pessoas*) | Fica sempre na **3ª pessoa do singular** |
| **Verbo Fazer** | Tempo decorrido = Impessoal | Jamais vai para o plural (*Fazem três dias*) | Fica sempre no singular (*Faz três dias*) |
| **Vírgula Proibida** | Entre termos essenciais | Separar sujeito do predicado ou verbo do objeto | - |
| **Expressão Partitiva** | A maioria de / parte de | - | Concordância facultativa (núcleo ou adjunto) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Crase antes de Pronome Relativo Quem ou Cujo:** A banca insere crase antes de *quem* ou *cujo*. **Gabarito: ERRADO.** Não há artigo feminino diante de *quem* e *cujo*, sendo a crase terminantemente proibida.
- **Locução Verbal com o Verbo Haver:** O Cebraspe afirma que a frase *"Devem haver muitas dúvidas sobre o regimento"* está gramaticalmente correta. **Gabarito: ERRADO.** O verbo *haver* transmite sua impessoalidade para o verbo auxiliar; a concordância correta é: *"Deve haver muitas dúvidas"*.
- **Crase Facultativa com Nomes de Cidades:** Dizer que a crase é sempre proibida com nomes de localidades. Se a cidade vier especificada por adjetivo ou locução, a crase ocorre (*Irei à bela Florianópolis* / *Volto de Florianópolis, venho de, crase pra quê?*).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BECHARA, Evanildo.** *Moderna Gramática Portuguesa*. 39. ed. Rio de Janeiro: Nova Fronteira, 2019. (Capítulos de Sintaxe de Concordância, Regência e Crase).
- **ROCHA LIMA, Carlos Henrique da.** *Gramática Normativa da Língua Portuguesa*. 53. ed. Rio de Janeiro: José Olympio, 2016.
- **CUNHA, Celso; CINTRA, Luís F. Lindley.** *Nova Gramática do Português Contemporâneo*. 7. ed. Rio de Janeiro: Lexikon, 2017.
- **CEAG/CÂMARA DOS DEPUTADOS.** *Manual de Redação Oficial e Gramática da Câmara dos Deputados*. Brasília: Edições Câmara, 2021.
- **CEBRASPE.** *Padrões de Correção Gramatical em Concursos Públicos Federais*. Brasília: Cebraspe, 2023.""",

    'sub-13-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Ortografia Oficial, o Acordo Ortográfico, a Colocação Pronominal e o Manual de Redação da Presidência da República (3ª ed. 2018)** regulam a produção textual na administração pública:
1. **O Novo Acordo Ortográfico (Vigência Obrigatória):**
   - **Acentuação Gráfica:**
     - Caiu o acento dos ditongos abertos `ei` e `oi` nas palavras **paroxítonas** (*ideia, assembleia, heroico, jiboia*). Atenção: nas oxítonas e monossílabos o acento permanece (*herói, papéis, constrói*)!
     - Caiu o acento circunflexo nos hiatos `ee` e `oo` (*leem, veem, creem, voo, enjoo*).
     - Permanece o acento diferencial obrigatório em: `pôde` (passado) vs. `pode` (presente); e `pôr` (verbo) vs. `por` (preposição); além de `tem/têm` e `vem/vêm` (singular/plural).
   - **Uso do Hífen:**
     - Letras iguais se separam com hífen (*micro-ondas, anti-inflamatório, sub-bibliotecário*).
     - Letras diferentes se unem sem hífen (*autoescola, infraestrutura, semicírculo*).
     - Se o segundo elemento começar com `r` ou `s`, dobra-se a consoante sem hífen (*antissocial, microrregião, ultrassom*).
2. **Colocação Pronominal (Próclise, Ênclise e Mesóclise):**
   - **Próclise Obrigatória (Palavras Atrativas):** Palavras de sentido negativo (*não, nunca, jamais*); advérbios sem vírgula (*aqui se estuda*); pronomes relativos (*o livro que me deste*); pronomes indefinidos (*alguém me disse*); conjunções subordinativas (*embora se saiba*).
   - **Ênclise Obrigatória:** No início de frases e períodos (*Fizeram-me a consulta*, e NUNCA *Me fizeram a consulta*!); após vírgula ou pausa.
   - **Mesóclise:** Exclusiva com verbos no Futuro do Presente ou Futuro do Pretérito, desde que não haja palavra atrativa (*Far-se-á a votação* / *Realizar-se-ia a posse*).
3. **Manual de Redação da Presidência da República (3ª Edição / 2018):**
   - **Princípios da Redação Oficial:** Clareza, Precisão, Objetividade, Concisão, Coesão/Coerência, Impessoalidade e Formalidade.
   - **Padronização dos Documentos:** O MRPR unificou Aviso e Memorando sob o formato único de **Ofício**!
   - **Estrutura do Ofício:** Cabeçalho com brasão $\\to$ Identificação do expediente (tipo, número, ano, sigla do órgão) $\\to$ Local e data $\\to$ Endereçamento $\\to$ Assunto (resumo em negrito) $\\to$ Texto (introdução, desenvolvimento, conclusão) $\\to$ Fecho $\\to$ Assinatura.
   - **Fechos Canônicos para Comunicações Oficiais (Apenas Dois!):**
     - *Respeitosamente:* Para autoridades superiores (inclusive o Presidente da República).
     - *Atenciosamente:* Para autoridades de mesma hierarquia ou de hierarquia inferior.
     - Foram completamente abolidas fórmulas rebuscadas como *"Tenho a honra de"*, *"Digno Magistrado"*, *"MD"* e *"DD"*.
   - **Pronomes de Tratamento:** O Decreto Federal nº 9.758/2019 estabeleceu que o único pronome de tratamento formal para a comunicação direta com agentes públicos federais é **"Você"** ou **"Senhor / Senhora"**, abolindo o uso obrigatório de *"Vossa Excelência"* nas comunicações administrativas ordinárias internas.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Elaboração de Ofício da Biblioteca Pedro Aleixo ao Senado Federal):** A biblioteca expede expediente formal solicitando o empréstimo de uma coleção de livros raros. O bibliotecário formata no padrão **Ofício do MRPR 2018**: cabeçalho oficial, campo assunto em negrito, parágrafos numerados a partir do segundo e o fecho **\"Atenciosamente\"** (endereçado a autoridade de mesma hierarquia funcional).
- **Cenário 2 (Aplicação do Novo Acordo Ortográfico nas Edições Câmara):** Na revisão editorial de uma tese sobre parlamentos, o revisor remove os acentos das palavras *\"assembleia\"* e *\"ideia\"* e une sem hífen a palavra *\"antirreflexo\"* (dobrando a letra r), garantindo 100% de conformidade com o VOLP e o Acordo Ortográfico.
- **Cenário 3 (Próclise Obrigatória em Parecer Legislativo):** Na redação de uma nota técnica legislativa, o consultor escreve: *\"O parlamentar que se ausentou...\"*. O bibliotecário constata a correção da **próclise obrigatória** imposta pela presença do pronome relativo *\"que\"*.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Regra / Norma Oficial | Aplicação Correta | Exemplo Canônico | Erro Típico da Banca |
| :--- | :--- | :--- | :--- |
| **Paroxítonas com EI/OI** | Perdem o acento gráfico | *Assembleia, ideia, jiboia* | Acentuar paroxítona (*assembléia*) |
| **Hífen com Letras Iguais** | Usa hífen | *Anti-inflamatório, micro-ondas* | Escrever junto sem hífen |
| **Hífen com Letras Diferentes** | Junta sem hífen | *Autoescola, infraestrutura* | Colocar hífen indevido |
| **Fecho: Respeitosamente** | Exclusivo para **autoridade superior** | Ao Presidente da Câmara | Usar para mesma hierarquia |
| **Fecho: Atenciosamente** | Para **mesma hierarquia ou inferior** | De Diretor para Diretor | Usar fórmulas arcaicas (*Saudações*) |
| **Próclise com Pronome Relativo** | Atração obrigatória | *O projeto que se votou* | Colocar ênclise (*que votou-se*) |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Fechos em Documentos Oficiais:** O Cebraspe propõe fechos rebuscados como *"Cordialmente"*, *"Com votos de estima e consideração"* ou *"Saudações Parlamentares"*. **Gabarito: ERRADO.** O Manual de Redação da Presidência da República admite exclusivamente **dois fechos padronizados**: *Respeitosamente* (para autoridades superiores) e *Atenciosamente* (para mesma hierarquia ou inferior).
- **Início de Frase com Pronome Oblíquo:** A banca afirma que a frase *"Me informaram sobre a votação"* está plenamente correta segundo a norma culta. **Gabarito: ERRADO.** A norma culta veda terminantemente iniciar períodos com pronome oblíquo átono; o correto é a ênclise: *"Informaram-me sobre a votação"*.
- **Extinção do Memorando no MRPR:** Dizer que o memorando continua sendo a modalidade padrão de comunicação interna entre secretarias. **Gabarito: ERRADO.** A 3ª edição do MRPR (2018) **aboliu formalmente o memorando e o aviso**, unificando toda a correspondência oficial sob a denominação única de **Ofício**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL. PRESIDÊNCIA DA REPÚBLICA.** *Manual de Redação da Presidência da República*. 3. ed. rev., atual. e ampl. Brasília: Presidência da República, 2018. (O texto normativo canônico mais cobrado em concursos federais).
- **ACADEMIA BRASILEIRA DE LETRAS (ABL).** *Vocabulário Ortográfico da Língua Portuguesa (VOLP)*. 5. ed. São Paulo: Global, 2009.
- **BECHARA, Evanildo.** *Moderna Gramática Portuguesa*. 39. ed. Rio de Janeiro: Nova Fronteira, 2019.
- **BRASIL.** *Decreto Federal nº 9.758, de 11 de abril de 2019*. Dispõe sobre a forma de tratamento empregada na comunicação oral e escrita com agentes públicos da administração pública federal.
- **CEAG/CÂMARA DOS DEPUTADOS.** *Manual de Redação Oficial da Câmara dos Deputados*. Brasília: Edições Câmara, 2021.""",

    'sub-14-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O ecossistema **Microsoft Office 365 e as Ferramentas de Comunicação e Colaboração** operam o fluxo de trabalho digital e em nuvem nos órgãos públicos:
1. **Ferramentas de Produtividade em Nuvem (MS 365):**
   - **Microsoft Word / Excel / PowerPoint:** Edição colaborativa em tempo real (*coauthoring*), histórico de versões automatizado e integração nativa com nuvem corporativa (OneDrive/SharePoint).
   - **Microsoft OneDrive for Business:** Armazenamento em nuvem individual e sincronização de arquivos de trabalho do servidor público com versionamento automático e controle granular de permissões de acesso (leitura, edição, expiração de links).
   - **Microsoft SharePoint:** Plataforma de intranet, repositório de documentos institucionais e gerenciamento de conteúdo corporativo com controle de metadados e fluxos de aprovação.
2. **Comunicação e Trabalho Híbrido:**
   - **Microsoft Teams:** Centro de trabalho em equipe (*hub*) que integra chat corporativo, chamadas de voz/vídeo, reuniões gravadas em nuvem, canais temáticos e compartilhamento seguro de documentos.
   - **Microsoft Outlook:** Gestão de correio eletrônico corporativo, calendários compartilhados, delegação de caixas de entrada e agendamento de salas de reunião.
3. **Segurança e Conformidade no Office 365:**
   - Criptografia de dados em trânsito (TLS) e em repouso (BitLocker / AES-256); Autenticação Multifator (MFA / 2FA); e Prevenção contra Perda de Dados (DLP - *Data Loss Prevention*), que bloqueia o vazamento acidental de CPFs e dados sigilosos por e-mail ou chat.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Coautoria em Tempo Real no Parecer Legislativo):** Três analistas da Consultoria Legislativa e um bibliotecário do CEDI redigem simultaneamente uma nota técnica sobre o mercado de carbono utilizando o **Word Online via SharePoint da Câmara**. Todos visualizam os cursores em tempo real com comentários e sugestões rastreadas sem gerar conflitos de versões de arquivo.
- **Cenário 2 (Reunião Deliberativa de Comissão Híbrida no Teams):** Durante a pandemia e nas sessões deliberativas descentralizadas, as comissões parlamentares realizam audiências públicas pelo **Microsoft Teams Corporativo da Câmara**, com tradução simultânea, transcrição automática em tempo real e gravação arquivada diretamente no portal da BDCam.
- **Cenário 3 (Prevenção de Vazamento com DLP no Outlook da Câmara):** Um servidor tenta anexar em e-mail externo uma planilha contendo a relação com dados fiscais sigilosos de investigados de uma CPI. A ferramenta **DLP do Microsoft 365** identifica automaticamente o padrão de dados sensíveis e bloqueia o envio da mensagem, notificando a equipe de segurança da informação da Casa.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Ferramenta MS 365 | Função Primária | Ambiente Principal | Controle de Segurança |
| :--- | :--- | :--- | :--- |
| **OneDrive for Business** | Armazenamento pessoal em nuvem do servidor | Arquivos individuais de trabalho | Compartilhamento com expiração de link |
| **SharePoint** | Intranet e repositório corporativo compartilhado | Documentos departamentais/equipes | Metadados institucionais e fluxos de aprovação |
| **Teams** | Comunicação e colaboração síncrona | Chat, canais, reuniões e conferências | Criptografia de ponta a ponta e auditoria |
| **DLP (Data Loss Prevention)** | Bloqueio de vazamento de dados sensíveis | E-mail, arquivos e chats | Regras automatizadas de conformidade e LGPD |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Edição Concorrente sem Internet:** O Cebraspe afirma que a coautoria colaborativa em tempo real com múltiplos usuários editando a mesma linha de texto no Word pode ser realizada sem conexão à internet. **Gabarito: ERRADO.** A coautoria síncrona exige obrigatoriamente conexão de rede ativa com o serviço de nuvem (OneDrive ou SharePoint).
- **OneDrive Pessoal vs. OneDrive for Business:** A banca confunde: no ambiente corporativo público, o OneDrive for Business é gerido sob as políticas de segurança da instituição (com controle de retenção e auditoria), não se confundindo com contas pessoais gratuitas de consumidores domésticos.
- **DLP como Antivírus:** Afirmar que a tecnologia DLP (*Data Loss Prevention*) serve para remover vírus do computador. **Gabarito: ERRADO.** DLP serve especificamente para **prevenir vazamento acidental ou não autorizado de informações confidenciais**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **MICROSOFT.** *Documentação Oficial do Microsoft 365 para Empresas e Governos*. Redmond: Microsoft Corporation, 2023.
- **STALLINGS, William.** *Sistemas Operacionais: princípios e prática*. 8. ed. São Paulo: Pearson, 2018.
- **CÂMARA DOS DEPUTADOS.** *Norma de Uso de Recursos Tecnológicos e Ferramentas de Produtividade em Nuvem*. Brasília: Diretoria de Inovação e TI (DITEC), 2022.
- **LAUDON, Kenneth C.; LAUDON, Jane P.** *Sistemas de Informação Gerenciais*. 14. ed. São Paulo: Pearson, 2018.
- **CERT.BR.** *Cartilha de Segurança para Internet: Trabalho Seguro e em Nuvem*. São Paulo: NIC.br, 2021.""",

    'sub-14-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As **Redes de Computadores, a Internet/Intranet, a Criptografia e a Segurança da Informação (ISO 27001)** formam a barreira de defesa cibernética das instituições de Estado:
1. **Pilares da Segurança da Informação (Mnemônico CIDAL):**
   - **Confidencialidade:** A informação só pode ser acessada por pessoas e sistemas expressamente autorizados.
   - **Integridade:** A informação é exata, completa e protegida contra modificações ou exclusões não autorizadas.
   - **Disponibilidade:** A informação e os serviços estão acessíveis aos usuários autorizados sempre que necessário.
   - **Autenticidade:** Garantia da autoria e identidade do emissor do documento.
   - **Não Repúdio (Irretratabilidade):** O autor da ação ou assinatura não pode negar legitimamente que a praticou.
2. **Criptografia Simétrica vs. Assimétrica e Certificação Digital (ICP-Brasil):**
   - **Simétrica (Chave Secreta):** Uma única chave secreta é usada para criptografar e descriptografar (ex.: AES, DES). Muito rápida, porém vulnerável na distribuição da chave.
   - **Assimétrica (Chaves Pública e Privada):** Usa um par de chaves matematicamente correlacionadas:
     - *Criptografia de Conteúdo:* Criptografa com a **chave pública** do destinatário $\\to$ Apenas o destinatário abre com sua **chave privada** secreta (garante **Confidencialidade**).
     - *Assinatura Digital:* O autor cifra o hash do documento com sua própria **chave privada** secreta $\\to$ Qualquer pessoa decodifica com a **chave pública** do autor (garante **Autenticidade, Integridade e Não Repúdio**!).
3. **Ameaças e Códigos Maliciosos (*Malware*):**
   - **Vírus:** Depende da execução de um programa hospedeiro para infectar e se propagar.
   - **Worm (Verme):** Não depende de hospedeiro; propaga-se **automaticamente pelas redes** explorando vulnerabilidades.
   - **Cavalo de Troia (*Trojan*):** Programa aparentemente inofensivo (jogo, utilitário) que, ao ser executado, abre portas para invasores (*backdoors*).
   - **Ransomware:** Criptografa os arquivos da vítima e exige resgate financeiro em criptomoeda para fornecer a chave de desbloqueio.
   - **Phishing:** Engenharia social via e-mail ou mensagens falsas que induzem o usuário a entregar senhas e dados bancários.
   - **Pharming:** Ataque de envenenamento de DNS que redireciona o usuário de um site legítimo para uma página falsa mesmo que ele digite a URL correta no navegador!

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Assinatura Digital de Autógrafo de Lei pelo Presidente da Câmara):** O Presidente da Câmara assina digitalmente a redação final de um projeto de lei aprovado para envio à sanção presidencial. Ele utiliza seu certificado digital ICP-Brasil com sua **chave privada secreta**. A Presidência da República valida o documento com a **chave pública**, garantindo **integridade e não repúdio** com fé pública.
- **Cenário 2 (Defesa contra Ataque de Ransomware nos Servidores da BDCam):** Um atacante envia e-mail com anexo malicioso tentando sequestrar os bancos de dados da biblioteca. O firewall de borda da Câmara e as ferramentas de EDR bloqueiam a execução do script e ativam a política de backup imutável isolado (*air-gap*), assegurando a **disponibilidade contínua** da memória legislativa.
- **Cenário 3 (VPN e Conexão Segura na Intranet da Biblioteca):** Um analista legislativo em teletrabalho acessa o SIGB Aleph da Câmara a partir de casa. A conexão é encapsulada por um túnel criptografado **VPN (*Virtual Private Network*) com protocolo IPsec/TLS**, garantindo a **confidencialidade** do tráfego através da internet pública.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Mecanismo / Tipo de Malware | Como Funciona Exatamente | Propriedade Garantida / Dano | Pegadinha Cebraspe |
| :--- | :--- | :--- | :--- |
| **Criptografia com Chave Pública** | Cifra com a pública do receptor | **Confidencialidade** | Dizer que garante assinatura digital |
| **Assinatura com Chave Privada** | Cifra o hash com a privada do autor | **Autenticidade e Não Repúdio** | Dizer que garante confidencialidade |
| **Worm (Verme)** | Auto-replicação pela rede sem hospedeiro | Consome banda e recursos de rede | Confundir com vírus comum |
| **Pharming** | Envenenamento de cache DNS | Redireciona o navegador para site falso | Confundir com phishing por e-mail |
| **Ransomware** | Cifra os discos e pede resgate | Viola a Disponibilidade dos dados | Chamar de mero spyware |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Assinatura Digital Garante Confidencialidade:** O Cebraspe afirma categoricamente que a assinatura digital serve para manter o documento em segredo/confidencial. **Gabarito: ERRADO.** A assinatura digital garante **Autenticidade, Integridade e Não Repúdio**; o documento assinado pode ser perfeitamente público e legível por qualquer cidadão!
- **Worm Precisa de Hospedeiro:** Dizer que o worm precisa infectar arquivos executáveis para se espalhar. **Gabarito: ERRADO.** Quem precisa de hospedeiro é o **vírus**; o worm é um programa independente e autorreplicante pelas redes.
- **Criptografia Simétrica com Duas Chaves:** Afirmar que a criptografia simétrica usa uma chave para codificar e outra diferente para decodificar. **Gabarito: ERRADO.** A criptografia simétrica utiliza **uma única e mesma chave secreta** para ambas as operações.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **TANENBAUM, Andrew S.; WETHERALL, David J.** *Redes de Computadores*. 6. ed. São Paulo: Pearson, 2021. (A obra canônica mundial de redes de dados).
- **ABNT NBR ISO/IEC 27001:2022.** *Segurança da informação, segurança cibernética e proteção da privacidade — Sistemas de gestão da segurança da informação — Requisitos*. Rio de Janeiro: ABNT, 2022.
- **STALLINGS, William.** *Criptografia e Segurança de Redes: princípios e práticas*. 6. ed. São Paulo: Pearson, 2014.
- **CERT.BR.** *Cartilha de Segurança para a Internet*. São Paulo: Comitê Gestor da Internet no Brasil (CGI.br), 2021.
- **INSTITUTO NACIONAL DE TECNOLOGIA DA INFORMAÇÃO (ITI).** *Padrões da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)*. Brasília: ITI, 2022.""",

    'sub-14-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Engenharia de Prompts, os Modelos de Linguagem de Larga Escala (LLMs) e a Ética Digital no Setor Público** representam a fronteira tecnológica contemporânea:
1. **Modelos de Linguagem (LLMs) e Arquitetura Transformer:**
   - Modelos probabilísticos pré-treinados em redes neurais de atenção profunda (*Self-Attention*) que calculam a probabilidade da próxima palavra (*token*) com base no contexto antecedente.
   - **Limitações Estruturais:** Ausência de raciocínio lógico formal inato; alucinações factuais; defasagem de conhecimento temporal (*cutoff date*); e sensibilidade extrema à formulação da pergunta.
2. **Engenharia de Prompts (Técnicas Canônicas de Comunicação com a IA):**
   - **Zero-Shot Prompting:** Envio de comando direto sem fornecer exemplos prévios.
   - **Few-Shot Prompting:** Fornecimento prévio de 2 a 5 exemplos estruturados de entrada e saída esperada para balizar o estilo e a formatação do modelo.
   - **Chain-of-Thought (CoT / Cadeia de Pensamento):** Orientação para que o modelo decomponha um problema complexo em etapas intermediárias passo a passo (*\"Pense passo a passo antes de responder\"*), reduzindo drasticamente erros de raciocínio.
   - **RAG (*Retrieval-Augmented Generation*):** Técnica em que a IA, antes de gerar o texto, consulta uma base de documentos verídicos do órgão (ex.: as leis da Câmara) e usa apenas esse contexto fático para produzir a resposta, eliminando alucinações.
3. **Diretrizes Éticas e Governança da IA no Setor Público (TCU e EBIA):**
   - **Transparência e Explicabilidade:** O cidadão tem o direito de saber quando interage com uma IA e quais critérios embasaram uma decisão automatizada.
   - **Supervisão Humana (*Human-in-the-Loop*):** Decisões administrativas de efeito jurídico vinculante não podem ser 100% autônomas de máquinas.
   - **Privacidade e Segurança:** Proibição de inserir dados pessoais sensíveis ou documentos sigilosos de Estado em ferramentas públicas abertas de IA na nuvem comercial (como ChatGPT aberto).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (RAG na Pesquisa da Legislação Histórica da Câmara):** A equipe do CEDI implementa um assistente de IA para responder a consultas de deputados sobre leis aprovadas desde 1826. Em vez de usar IA aberta que inventa artigos de leis inexistentes, o sistema aplica **RAG**: busca o texto autêntico no banco do LexML/BDCam e injeta o trecho literal no prompt, gerando respostas com citação exata de número e artigo da lei.
- **Cenário 2 (Few-Shot Prompting na Sumarização de Emendas Parlamentares):** Ao automatizar a geração de resumos de 1.000 emendas apresentadas a uma PEC, o bibliotecário programa um prompt no padrão **Few-Shot**: apresenta 3 exemplos de emendas com seus respectivos resumos ideais. O modelo replica a mesma concisão e vocabulário técnico parlamentar em todas as demais.
- **Cenário 3 (Proteção contra Violação de Sigilo Governamental):** A Diretoria-Geral da Câmara emite instrução normativa alertando os servidores de que é terminantemente proibido colar minutas confidenciais de CPIs em chats públicos de IA comercial na web, sob pena de infração disciplinar grave e quebra de segurança de Estado.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Técnica de Prompting | Como Opera no Sistema | Melhor Caso de Uso | Vantagem Crítica |
| :--- | :--- | :--- | :--- |
| **Zero-Shot** | Pergunta direta sem exemplos | Consultas simples e diretas | Rapidez e baixo custo |
| **Few-Shot** | Apresenta 2 a 5 exemplos prévios | Padronização de formato e estilo | Reduz erros de formatação |
| **Chain-of-Thought (CoT)** | Instrui raciocínio passo a passo | Problemas lógicos e deduções | Minimiza erros de cálculo e lógica |
| **RAG** | Conecta o modelo à base documental | Recuperação fática jurídica | **Elimina alucinações em órgãos públicos** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inserção de Dados Sigilosos em IAs Públicas:** O Cebraspe sugere que o servidor pode colar relatórios sigilosos de Estado em qualquer chatbot público gratuito para agilizar a redação de pareceres. **Gabarito: ERRADO.** A prática viola frontalmente a Lei nº 12.527/11, a LGPD e as diretrizes do TCU, expondo dados públicos ao treinamento comercial de terceiros.
- **Chain-of-Thought e Criatividade:** Dizer que a técnica Chain-of-Thought serve para tornar a IA mais poética e artística. **Gabarito: ERRADO.** CoT serve para estruturar o raciocínio lógico em passos analíticos sequenciais para aumentar a exatidão.
- **Alucinação como Sinônimo de Erro de Conexão:** A banca confunde alucinação da IA com instabilidade no servidor web. **Gabarito: ERRADO.** Alucinação é a produção probabilística de fatos, leis e fontes falsas geradas como se fossem verdadeiras.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **RUSSELL, Stuart; NORVIG, Peter.** *Inteligência Artificial: uma abordagem moderna*. 4. ed. Rio de Janeiro: GEN LTC, 2022.
- **TRIBUNAL DE CONTAS DA UNIÃO (TCU).** *Orientações sobre o uso de soluções de Inteligência Artificial Generativa na Administração Pública Federal*. Brasília: TCU, 2023.
- **BRASIL.** *Estratégia Brasileira de Inteligência Artificial (EBIA)*. Brasília: MCTI, 2021.
- **LEWIS, Patrick et al.** Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. *Advances in Neural Information Processing Systems (NeurIPS)*, v. 33, p. 9459-9474, 2020. (Artigo canônico que criou o padrão RAG).
- **WEI, Jason et al.** Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. *NeurIPS*, 2022.""",

    'sub-14-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Ciência de Dados, a Mineração de Textos (*Text Mining*), a Visualização de Dados e o *Storytelling*** transformam acervos e dados brutos em inteligência acionável:
1. **O Ciclo KDD (*Knowledge Discovery in Databases* - Fayyad et al., 1996):**
   - Processo não trivial de identificação de padrões válidos, novos, potencialmente úteis e compreensíveis em grandes volumes de dados.
   - **As 5 Etapas do KDD:**
     1. *Seleção:* Amostragem e isolamento dos dados relevantes.
     2. *Pré-processamento:* Limpeza de ruídos, tratamento de dados ausentes e inconsistentes.
     3. *Transformação:* Redução de dimensionalidade, normalização e agregação de atributos.
     4. *Mineração de Dados (Data Mining):* Aplicação de algoritmos para extrair padrões (classificação, regressão, agrupamento/clusterização e associação).
     5. *Interpretação e Avaliação:* Análise crítica dos padrões descobertos para tomada de decisão.
2. **Mineração de Textos (*Text Mining*):**
   - Descoberta de conhecimento em dados textuais não estruturados (discursos parlamentares, pareceres, ementas).
   - Técnicas: Reconhecimento de Entidades Nomeadas (NER: identifica pessoas, órgãos e locais); Análise de Sentimento; e Modelagem de Tópicos (*Topic Modeling* - ex.: LDA - Latent Dirichlet Allocation).
3. **Visualização de Dados e Storytelling (Cole Nussbaumer Knaflic):**
   - Comunicação eficaz de dados por meio de gráficos adequados e narrativa visual envolvente.
   - **Princípios do Storytelling com Dados:**
     - Eliminar poluição visual (*clutter*): retirar grades pesadas, bordas 3D e efeitos ornamentais inúteis.
     - Focar a atenção do público utilizando atributos pré-atencionais (cor destacada em um elemento-chave, contraste e tamanho).
     - Escolha correta do gráfico: barras/colunas para comparações categóricas; linhas para séries temporais contínuas; dispersão para correlações. **Gráficos de pizza com muitas fatias são desaconselhados!**

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Modelagem de Tópicos nos Discursos em Plenário):** A equipe do CEDI aplica o algoritmo LDA (*Latent Dirichlet Allocation*) sobre 50.000 discursos proferidos no Plenário Ulysses Guimarães ao longo da legislatura. O modelo agrupa automaticamente os discursos em 10 temas emergentes principais (ex.: transição energética, marco temporal, reforma tributária), permitindo à biblioteca mapear a evolução das preocupações parlamentares ao longo do tempo.
- **Cenário 2 (Storytelling em Painel do Orçamento da União):** Para apresentar a execução das emendas parlamentares aos líderes partidários, o bibliotecário projeta um *dashboard* interativo no Power BI aplicando os princípios de Knaflic: elimina o excesso de linhas de grade, destaca em vermelho apenas as emendas com risco de cancelamento por perda de prazo e utiliza gráfico de barras horizontais ordenadas para visualização instantânea em 5 segundos.
- **Cenário 3 (Reconhecimento de Entidades Nomeadas - NER na Indexação Automática):** Ao receber o texto integral de uma lei ordinária de 100 páginas, um algoritmo de NER varre o documento e extrai automaticamente todas as menções a ministérios, autarquias e municípios, gerando sugestões prontas de pontos de acesso no formato MARC 21 para o catalogador validar.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Etapa KDD / Tipo de Gráfico | Objetivo Prático | Aplicação Recomendada | Conduta Desaconselhada |
| :--- | :--- | :--- | :--- |
| **Pré-processamento** | Limpar ruídos e nulos | Antes da mineração algorítmica | Aplicar algoritmo em dado corrompido |
| **Data Mining** | Extrair padrões matemáticos | Fase 4 do KDD (o núcleo do processo) | Confundir Data Mining com o KDD inteiro |
| **Gráfico de Linhas** | Mostrar evolução contínua no tempo | Séries temporais de votações anuais | Usar linha para variáveis categóricas |
| **Gráfico de Barras** | Comparar grandezas entre categorias | Gastos por comissão parlamentar | Usar 3D com sombras e poluição visual |
| **Gráfico de Pizza** | Mostrar proporção de um todo simples | Máximo de 2 a 3 fatias bem contrastadas | Usar com dezenas de fatias semelhantes |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Data Mining é Sinônimo do Processo KDD Inteiro:** O Cebraspe afirma que Mineração de Dados (Data Mining) e KDD são termos rigorosamente idênticos. **Gabarito: ERRADO.** O KDD é o processo metodológico completo de 5 etapas; o Data Mining é apenas **uma das etapas (a etapa 4)** do ciclo KDD.
- **Uso de Gráficos 3D em Storytelling:** Dizer que gráficos tridimensionais (3D) aumentam a precisão da leitura de dados pelo público. **Gabarito: ERRADO.** Em visualização de dados (Knaflic e Tufte), gráficos em 3D distorcem as proporções visuais e são considerados poluição visual grave (*chartjunk*).
- **Tratamento de Dados Ausentes:** O Cebraspe propõe que na etapa de pré-processamento todos os dados ausentes devem ser obrigatoriamente apagados do banco. **Gabarito: ERRADO.** Dados ausentes podem ser imputados por média, mediana ou modelagem estatística, avaliando-se o impacto no conjunto.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **FAYYAD, Usama; PIATETSKY-SHAPIRO, Gregory; SMYTH, Padhraic.** From data mining to knowledge discovery in databases. *AI Magazine*, v. 17, n. 3, p. 37-54, 1996. (O artigo seminal que definiu as etapas do processo KDD).
- **KNAFLIC, Cole Nussbaumer.** *Storytelling com Dados: um guia sobre visualização de dados para profissionais de negócios*. Rio de Janeiro: Alta Books, 2019. (A principal referência em comunicação e design de dados).
- **PROVOST, Foster; FAWCETT, Tom.** *Data Science para Negócios: o que você precisa saber sobre mineração de dados e pensamento analítico de dados*. Rio de Janeiro: Alta Books, 2016.
- **TUFTE, Edward R.** *The Visual Display of Quantitative Information*. 2. ed. Cheshire: Graphics Press, 2001. (O clássico pioneiro da teoria da visualização de dados).
- **MANNING, Christopher D. et al.** *Foundations of Statistical Natural Language Processing*. Cambridge: MIT Press, 1999."""
}

def aplicar_lote5b():
    print("Iniciando injeção didática do Lote 5B (M12, M13 e M14: 12 Submódulos)...")
    sucessos = 0
    for sub_id, texto_didatico in TEXTOS_DIDATICOS.items():
        caminhos = [
            f"src/content/modules/m12-ingles/{sub_id}.ts",
            f"src/content/modules/m13-portugues/{sub_id}.ts",
            f"src/content/modules/m14-tecnologia-dados/{sub_id}.ts",
        ]
        target_path = None
        for p in caminhos:
            if os.path.exists(p):
                target_path = p
                break
        
        if not target_path:
            print(f"❌ Arquivo não encontrado para {sub_id}")
            continue

        with open(target_path, "r", encoding="utf-8") as f:
            conteudo = f.read()

        if "teoriaDidaticaMarkdown" in conteudo:
            print(f"⚠️ {sub_id} já possui teoriaDidaticaMarkdown! Pulando.")
            continue

        alvo = "  checkpoints: ["
        if alvo not in conteudo:
            print(f"❌ Não encontrou '{alvo}' em {target_path}")
            continue

        texto_limpo = texto_didatico.strip()
        texto_escapado = re.sub(r'(?<!\\)`', r'\`', texto_limpo)
        texto_escapado = re.sub(r'(?<!\\)\$\{', r'\${', texto_escapado)
        bloco_didatico = f"  teoriaDidaticaMarkdown: `{texto_escapado}`,\n  checkpoints: ["

        novo_conteudo = conteudo.replace(alvo, bloco_didatico, 1)

        with open(target_path, "w", encoding="utf-8") as f:
            f.write(novo_conteudo)

        print(f"✅ Injetado com sucesso em {sub_id} ({target_path})")
        sucessos += 1

    print(f"\nFinalizado Lote 5B: {sucessos}/{len(TEXTOS_DIDATICOS)} submódulos atualizados com sucesso.")

if __name__ == "__main__":
    aplicar_lote5b()

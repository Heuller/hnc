# -*- coding: utf-8 -*-
"""
Script de Expansão Didática — Lote 5A (M10 e M11: 17 Submódulos)
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
    'sub-10-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Processo Legislativo Constitucional (CF/88, arts. 59 a 69)** estabelece as espécies normativas primárias e suas regras formais de tramitação:
1. **Rol das Espécies Normativas (Art. 59 da CF/88):**
   - I – Emendas à Constituição (PEC); II – Leis Complementares (LC); III – Leis Ordinárias (LO); IV – Leis Delegadas; V – Medidas Provisórias (MPV); VI – Decretos Legislativos; VII – Resoluções.
2. **Quóruns e Iniciativas Críticas no Cebraspe:**
   - **PEC (Art. 60):** Proposta por 1/3 da Câmara, 1/3 do Senado, Presidente da República ou mais da metade das Assembleias Legislativas. Votada em **dois turnos em cada Casa** e aprovada por **3/5 dos votos** dos respectivos membros (308 na Câmara / 49 no Senado). **Não há sanção ou veto presidencial!** Promulgada pelas Mesas da Câmara e do Senado. Cláusulas pétreas intransponíveis (art. 60, § 4º).
   - **Lei Complementar (LC):** Exige quórum de **maioria absoluta** para aprovação (257 deputados / 41 senadores). Destina-se a matérias expressamente reservadas pela CF.
   - **Lei Ordinária (LO):** Exige quórum de **maioria simples** (maioria dos presentes, desde que presente a maioria absoluta da Casa).
   - **Medida Provisória (MPV - Art. 62):** Editada pelo Presidente em caso de **relevância e urgência**. Vigência de 60 dias prorrogável uma vez por igual período (total 120 dias). Vedada sobre: direito penal, processo penal/civil, nacionalidade, cidadania, partidos, direito eleitoral e matérias reservadas a LC.
3. **Fase Constitutiva: Sanção e Veto Presidencial:**
   - O Presidente tem **15 dias úteis** para vetar (por inconstitucionalidade - veto jurídico, ou por contrariedade ao interesse público - veto político). O silêncio importa sanção tácita.
   - O veto é apreciado em sessão conjunta do Congresso Nacional dentro de 30 dias e só pode ser rejeitado por **maioria absoluta** de deputados e senadores em votação nominal.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Indexação de PEC na Seção de Legislação da Biblioteca):** Ao registrar a tramitação de uma PEC de Reforma Tributária, o bibliotecário do CEDI anota nos metadados que a proposição exige quórum qualificado de 3/5 (308 votos) em dois turnos na Câmara e que, após aprovação no Senado, não irá à sanção presidencial, sendo promulgada em sessão solene pelas Mesas Diretoras conjuntas.
- **Cenário 2 (Catalogação de Medida Provisória Trancando a Pauta):** O Plenário atinge o 45º dia de vigência de uma MPV sobre crédito extraordinário sem votação. O bibliotecário de referência informa ao gabinete parlamentar que a MPV entrou em regime de urgência constitucional e **tranca a pauta** de todas as demais deliberações legislativas ordinárias da Câmara até que seja votada.
- **Cenário 3 (Controle de Eficácia de Decretos Legislativos e Resoluções):** Ao catalogar atos de aprovação de tratados internacionais (CF art. 49, I), o bibliotecário utiliza a espécie **Decreto Legislativo** (ato exclusivo do Congresso que não vai à sanção). Já ao catalogar a criação de uma nova comissão interna da Casa, utiliza a espécie **Resolução da Câmara** (competência privativa interna).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Espécie Normativa | Quórum de Aprovação | Sanção / Veto Presidencial? | Promulgação |
| :--- | :--- | :--- | :--- |
| **PEC** | 3/5 em 2 turnos (308 CD / 49 SF) | **NÃO** (Não vai ao Presidente) | Mesas da Câmara e do Senado |
| **Lei Complementar** | Maioria Absoluta (257 CD / 41 SF) | SIM (15 dias úteis) | Presidente da República (ou CD/SF) |
| **Lei Ordinária** | Maioria Simples dos presentes | SIM (15 dias úteis) | Presidente da República (ou CD/SF) |
| **Decreto Legislativo** | Maioria Simples | **NÃO** (Matéria do Congresso) | Presidente do Senado Federal |
| **Resolução da CD** | Maioria Simples | **NÃO** (Matéria privativa interna) | Presidente da Câmara dos Deputados |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Veto em PEC:** O Cebraspe adora afirmar que *"o Presidente da República vetou parcialmente uma Emenda Constitucional por contrariedade ao interesse público"*. **Gabarito: ERRADO.** Emenda Constitucional NÃO se submete a sanção ou veto presidencial em nenhuma hipótese!
- **Prazo de Veto Presidencial:** Dizer que o Presidente tem 15 dias corridos para vetar. **Gabarito: ERRADO.** O art. 66, § 1º da CF/88 estabelece o prazo de 15 dias **úteis**.
- **Quórum de Rejeição do Veto:** A banca diz que o veto presidencial pode ser derrubado por maioria simples. **Gabarito: ERRADO.** A derrubada do veto exige quórum qualificado de **maioria absoluta** de ambas as Casas do Congresso Nacional.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. arts. 59 a 69.
- **SILVA, José Afonso da.** *Curso de Direito Constitucional Positivo*. 43. ed. São Paulo: Malheiros, 2020. (A maior autoridade de processo legislativo em bancas examinadoras).
- **LENZA, Pedro.** *Direito Constitucional Esquematizado*. 27. ed. São Paulo: Saraiva, 2023.
- **CÂMARA DOS DEPUTADOS.** *Manual de Redação e Técnica Legislativa da Câmara dos Deputados*. Brasília: Edições Câmara, 2021.
- **MENDES, Gilmar Ferreira; BRANCO, Paulo Gustavo Gonet.** *Curso de Direito Constitucional*. 17. ed. São Paulo: Saraiva, 2022.""",

    'sub-10-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Estrutura Orgânica da Câmara dos Deputados, a Mesa Diretora e o Colégio de Líderes** regem o funcionamento político e administrativo da Casa (RICD, arts. 4º a 21):
1. **Composição e Eleição da Mesa Diretora:**
   - Órgão colegiado diretivo da Câmara, eleito para mandato de **2 anos, vedada a recondução para o mesmo cargo** na eleição imediatamente subsequente dentro da mesma legislatura (CF art. 57, § 4º e RICD art. 5º).
   - Composta por **7 membros titulares** e **4 suplentes**:
     - *Presidente:* Representa a Câmara, define a Ordem do Dia (pauta de votação), preside as sessões e substitui o Presidente da República na linha sucessória (2º na linha, após o Vice-Presidente!).
     - *1º Vice-Presidente:* Substitui o Presidente e elabora pareceres sobre requerimentos de informação.
     - *2º Vice-Presidente:* Estimula a cooperação com outros parlamentos e analisa ressarcimentos.
     - *1º Secretário:* Responsável pela superintendência dos serviços administrativos e de pessoal da Câmara (diretamente ligado ao CEDI e à Biblioteca!).
     - *2º Secretário:* Gerencia programas de intercâmbio, passaportes diplomáticos e estágios.
     - *3º e 4º Secretários:* Cuidam de concessões de diárias, licenças e habitação funcional.
   - **Princípio da Proporcionalidade Partidária:** A composição da Mesa e das Comissões deve assegurar, tanto quanto possível, a representação proporcional dos partidos ou blocos parlamentares (art. 58, § 1º da CF).
2. **O Colégio de Líderes:**
   - Composto pelos Líderes das bancadas partidárias, dos blocos parlamentares e da liderança do Governo e da Oposição.
   - Órgão de concertação política que negocia acordos de procedimentos e orienta a pauta de votações do Plenário com o Presidente da Casa.
3. **A Procuradoria Parlamentar e a Ouvidoria:**
   - Defesa jurídica institucional dos parlamentares no exercício do mandato e canal direto de comunicação da sociedade com a Câmara.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (A Subordinação Administrativa da Biblioteca ao 1º Secretário):** Ao tramitar o projeto de expansão do acervo de obras raras e o plano de carreira de analistas do CEDI, o bibliotecário sabe que as matérias administrativas internas da Casa submetem-se à supervisão direta da **Primeira-Secretaria da Mesa Diretora**, responsável pela gestão dos serviços e órgãos administrativos da Câmara.
- **Cenário 2 (Definição da Pauta de Plenário no Colégio de Líderes):** Em uma manhã de terça-feira, o Colégio de Líderes reúne-se na Presidência e fecha um acordo para colocar em votação urgente o projeto de inteligência artificial. O bibliotecário de plantão no apoio ao plenário é acionado imediatamente para compilar a documentação temática da matéria nas duas horas que antecedem a abertura da Ordem do Dia.
- **Cenário 3 (Aplicação da Regra de Proporcionalidade Partidária):** Ao catalogar as resoluções de posse da nova Mesa Diretora, o bibliotecário observa que a maior bancada eleita indicou o Presidente, enquanto a segunda maior indicou o 1º Vice-Presidente, cumprindo rigorosamente a proporcionalidade partidária prescrita no art. 58, § 1º da CF/88.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Cargo / Órgão da Mesa | Função Institucional Primária | Reeleição Permitida? | Atribuição Típica no Concurso |
| :--- | :--- | :--- | :--- |
| **Presidente da Câmara** | Pauta do Plenário / Representação externa | Proibida na mesma legislatura | 2º na linha de substituição da Presidência da República |
| **1º Secretário** | Gestão Administrativa e Pessoal | Proibida para o mesmo cargo | Superintendência dos órgãos administrativos e do CEDI |
| **Colégio de Líderes** | Órgão de Acordo Político | - | Negocia a pauta e acordos de procedimentos |
| **Procuradoria Parlamentar** | Defesa institucional dos deputados | - | Atua em crimes contra a honra da Câmara |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Recondução da Mesa na Mesma Legislatura:** O Cebraspe afirma que os membros da Mesa Diretora podem ser reeleitos indefinidamente para os mesmos cargos. **Gabarito: ERRADO.** O art. 57, § 4º da CF/88 proíbe a reeleição para o mesmo cargo na eleição imediatamente subsequente dentro da mesma legislatura.
- **Quem Pauta a Ordem do Dia:** Dizer que a Ordem do Dia é definida por votação de maioria absoluta do Plenário. **Gabarito: ERRADO.** A prerrogativa regimental indelegável de organizar e pautar a Ordem do Dia é do **Presidente da Câmara**, ouvindo o Colégio de Líderes.
- **Número de Titulares da Mesa:** A banca altera o número de membros: a Mesa é composta por **7 titulares** (Presidente, 2 Vices e 4 Secretários) e **4 suplentes**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CÂMARA DOS DEPUTADOS.** *Regimento Interno da Câmara dos Deputados (RICD)*. Resolução nº 17, de 1989 e alterações. arts. 4º a 21.
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. arts. 51, 57 e 58.
- **PACHECO, Luciana.** *Regimento Interno da Câmara dos Deputados Comentado*. Brasília. Edições Câmara, 2021.
- **MORAES, Alexandre de.** *Direito Constitucional*. 38. ed. São Paulo: Atlas, 2022.
- **SILVA, José Afonso da.** *Curso de Direito Constitucional Positivo*. 43. ed. São Paulo: Malheiros, 2020.""",

    'sub-10-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
As **Comissões Parlamentares** (Permanentes, Temporárias, Especiais e Parlamentares de Inquérito - CPIs) são os órgãos técnicos onde se opera o exame aprofundado das proposições (RICD, arts. 22 a 64):
1. **Comissões Permanentes:**
   - Vinculadas a campos temáticos específicos da atividade legislativa (ex.: CCJC, CFT, CDE, etc.).
   - Exercem a **Competência Terminativa / Conclusiva (CF art. 58, § 2º, I):** A comissão discute e vota projetos de lei que dispensam a deliberação do Plenário, salvo se houver recurso assinado por **1/10 dos membros da Câmara** (52 deputados) para que a matéria seja levada ao Plenário.
2. **Comissão de Constituição e Justiça e de Cidadania (CCJC):**
   - A comissão mais poderosa da Casa: analisa a constitucionalidade, legalidade, juridicidade, regimentalidade e técnica legislativa de **todas** as proposições. Seu parecer terminativo contrário à constitucionalidade acarreta o **arquivamento imediato** do projeto!
3. **Comissões Parlamentares de Inquérito (CPIs - CF art. 58, § 3º e Lei nº 1.579/1952):**
   - Criadas a requerimento de **1/3 dos membros da Câmara** (171 deputados) ou do Senado, ou do Congresso (CPMI).
   - Requisitos constitucionais cumulativos: **Fato determinado** e **Prazo certo**.
   - **Poderes Próprios das Autoridades Judiciais:** Podem determinar quebra de sigilo bancário, fiscal e telefônico; ouvir testemunhas sob pena de falso testemunho; requisitar documentos oficiais e convocar ministros de Estado.
   - **O que a CPI NÃO pode fazer (Reserva de Jurisdição do Judiciário):** Não pode determinar busca e apreensão domiciliar noturna, interceptação telefônica (escuta telefônica direta), prisão preventiva ou preventiva de bens (salvo flagrante delito!).
   - **Relatório Final da CPI:** Não condena nem julga; é encaminhado ao **Ministério Público** para que promova a responsabilidade civil ou criminal dos infratores.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Recurso contra Parecer Terminativo de Comissão Permanente):** A Comissão de Educação aprova em caráter conclusivo um projeto de lei. Um grupo de 55 deputados (mais de 1/10 da Casa) protocola recurso regimental. O bibliotecário atualiza o status no SILEG: o projeto perde a condição de aprovado em definitivo e é remetido à pauta do Plenário Ulysses Guimarães.
- **Cenário 2 (Suporte Documental à CPI das Apostas Esportivas):** O presidente de uma CPI requisita à Biblioteca Pedro Aleixo levantamento imediato de toda a legislação comparada europeia sobre manipulação de apostas. A equipe de bibliotecários entrega dossiê estruturado, amparando os interrogatórios dos parlamentares.
- **Cenário 3 (Limites Constitucionais de uma CPI no Plenário):** Em debate acalorado, um deputado propõe que a CPI expeça mandado de prisão preventiva contra uma testemunha que mentiu em depoimento. O consultor legislativo esclarece que a CPI só pode prender em **flagrante delito** (por falso testemunho); a prisão preventiva cabe exclusivamente a um juiz togado de direito.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Comissão | Finalidade Central | Requisito de Criação | Poder Crítico no Cebraspe |
| :--- | :--- | :--- | :--- |
| **Permanente** | Matérias temáticas de rotina | Prevista no RICD | Poder conclusivo terminativo (dispensa plenário) |
| **Especial** | Analisar PEC ou matérias complexas | Criada pelo Presidente | Emite parecer sobre PEC antes do plenário |
| **CPI (Inquérito)** | Investigar fato determinado por prazo certo | Requerimento de 1/3 da Casa | Quebra de sigilo bancário, fiscal e telefônico |
| **CPMI (Mista)** | Inquérito conjunto de deputados e senadores | 1/3 da CD + 1/3 do SF | Poderes judiciais investigativos conjuntos |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A CPI Pode Prender Preventivamente:** O Cebraspe afirma que a CPI tem competência para decretar prisão preventiva ou temporária de investigados. **Gabarito: ERRADO.** Prisão preventiva é reserva absoluta de jurisdição do Poder Judiciário. A CPI só pode prender em flagrante delito.
- **A CPI Pode Interceptar Conversa Telefônica:** A banca confunde quebra de sigilo de registros telefônicos com interceptação telefônica (escuta). **Gabarito: ERRADO.** A CPI pode quebrar o sigilo dos registros de chamadas (extrato de ligações feitas), mas **NÃO pode autorizar escuta telefônica direta** (interceptação em tempo real), que é exclusiva de juiz.
- **Destinação do Relatório Final da CPI:** Afirmar que a CPI condena criminalmente e remete sua sentença ao STF. **Gabarito: ERRADO.** A CPI não condena ninguém; seu relatório é enviado ao Ministério Público para oferecimento de denúncia se for o caso.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. art. 58.
- **BRASIL.** *Lei Federal nº 1.579, de 18 de março de 1952*. Dispõe sobre as Comissões Parlamentares de Inquérito.
- **CÂMARA DOS DEPUTADOS.** *Regimento Interno da Câmara dos Deputados (RICD)*. arts. 22 a 64.
- **BARROSO, Luís Roberto.** *O controle de constitucionalidade no direito brasileiro*. 9. ed. São Paulo: Saraiva, 2022.
- **MENDES, Gilmar Ferreira.** *Comissões Parlamentares de Inquérito: poderes e limites constitucionais*. Brasília: IDP, 2019.""",

    'sub-10-5': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Dinâmica das Sessões Plenárias, a Ordem do Dia, os Quóruns e os Processos de Votação** materializam o funcionamento deliberativo do Plenário (RICD, arts. 65 a 190):
1. **Tipos de Sessões Plenárias:**
   - **Deliberativas:** Destinadas à discussão e votação de proposições. Subdividem-se em *Ordinárias* (realizadas nos dias úteis, com Pequeno Expediente, Grande Expediente e Ordem do Dia) e *Extraordinárias* (convocadas para dias e horários diferentes para matérias exclusivas).
   - **Não Deliberativas (Debates):** Destinadas a discursos parlamentares e comunicações de lideranças, sem votação de pauta.
   - **Solenes:** Homenagens, comemorações e posses; públicas e sem votação.
   - **Secretas:** Convocadas em situações excepcionais de segurança nacional ou decoro parlamentar (todas as demais são públicas por regra constitucional).
2. **A Ordem do Dia:**
   - A fase da sessão destinada especificamente à deliberação das matérias em pauta.
   - Para iniciar a Ordem do Dia, exige-se quórum mínimo de presença de **maioria absoluta dos membros da Casa (257 deputados)**!
3. **Regimes de Tramitação de Proposições:**
   - **Ordinária:** Prazos regimentais normais de tramitação em comissões.
   - **Prioridade:** Prazos reduzidos à metade; dispensam algumas formalidades.
   - **Urgência:** Dispensa todas as exigências regimentais prévias para que a proposição seja imediatamente apreciada (requer aprovação de requerimento por maioria absoluta).
   - **Urgência Urgentíssima (Art. 155 do RICD):** Requerimento aprovado pela maioria absoluta que permite a votação imediata da matéria em Plenário sem qualquer parecer de comissão!
4. **Métodos e Quóruns de Votação:**
   - **Simbólico:** Método regra; o Presidente solicita: *"Os deputados que aprovam permaneçam como se encontram"*.
   - **Nominal:** Utiliza o painel eletrônico com registro público de voto (SIM, NÃO, ABSTENÇÃO). Obrigatório para matérias que exigem quórum qualificado (PEC, LC) ou a requerimento aprovado de bancada.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Abertura da Ordem do Dia e Verificação de Quórum):** O relógio do Plenário marca 16h. O Presidente aguarda o painel eletrônico acusar a presença de 257 deputados. Assim que o número 257 é atingido, o Presidente anuncia: *"Havendo quórum regimental de maioria absoluta, está aberta a Ordem do Dia"*. O bibliotecário de apoio sincroniza a gravação dos anais.
- **Cenário 2 (Aplicação do Artigo 155 - Urgência Urgentíssima):** Diante de uma calamidade pública no Rio Grande do Sul, o plenário aprova requerimento de urgência do art. 155 para votar socorro financeiro. O bibliotecário localiza a redação final do texto no sistema em 5 minutos para que os líderes orientem o voto imediato das bancadas.
- **Cenário 3 (Votação Simbólica vs. Verificação Nominal):** Uma votação simbólica aprova um projeto de lei controverso. O líder da oposição levanta a mão e requer a **verificação nominal da votação** com apoio de sua bancada. O Presidente abre o painel eletrônico para registro nominal de cada deputado, gerando os metadados abertos que serão indexados no portal da Câmara.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Espécie de Sessão / Tramitação | Quórum de Abertura / Requisito | Finalidade Específica | Publicidade |
| :--- | :--- | :--- | :--- |
| **Sessão Ordinária** | Início com 1/10 (52 deputados) | Expediente e Ordem do Dia de rotina | Pública |
| **Abertura da Ordem do Dia** | **Maioria Absoluta (257 deputados)** | Votação e deliberação das matérias | Pública |
| **Sessão Secreta** | Decisão por maioria qualificada | Casos excepcionais de segurança | Fechada e sigilosa |
| **Urgência (Art. 155)** | Maioria Absoluta para aprovação | Dispensa prazos e pareceres | Imediata em Plenário |
| **Votação Simbólica** | Maioria simples (regra geral) | Rapidez deliberativa sem painel | Voto não individualizado |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Quórum para Abrir a Sessão vs. Abrir a Ordem do Dia:** A banca confunde propositalmente: a sessão ordinária pode começar seus discursos de expediente com apenas 1/10 de deputados presentes (52 deputados), mas para **abrir a Ordem do Dia e iniciar as votações** é obrigatória a presença de **maioria absoluta (257 deputados)**!
- **Votação de PEC pelo Método Simbólico:** Afirmar que uma Emenda Constitucional pode ser aprovada por votação simbólica se houver consenso. **Gabarito: ERRADO.** PEC exige categoricamente votação nominal pelo painel eletrônico em dois turnos.
- **Aprovação de Requerimento de Urgência:** Dizer que a urgência urgentíssima do art. 155 do RICD pode ser concedida por decisão monocrática isolada do Presidente da Câmara. **Gabarito: ERRADO.** Exige requerimento assinado por líderes e **aprovação do Plenário por maioria absoluta**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **CÂMARA DOS DEPUTADOS.** *Regimento Interno da Câmara dos Deputados (RICD)*. arts. 65 a 190.
- **PACHECO, Luciana.** *Regimento Interno da Câmara dos Deputados Comentado*. Brasília: Edições Câmara, 2021.
- **MORAES, Alexandre de.** *Direito Constitucional*. 38. ed. São Paulo: Atlas, 2022.
- **SILVA, José Afonso da.** *Processo Constitucional de Formação das Leis*. 2. ed. São Paulo: Malheiros, 2007.
- **CÂMARA DOS DEPUTADOS.** *Manual de Procedimentos de Plenário*. Brasília: Secretaria-Geral da Mesa (SGM), 2020.""",

    'sub-10-6': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Fiscalização e Controle, o Orçamento Público e o Ciclo Orçamentário (CF/88, arts. 70 a 75 e 165 a 169)** concretizam o controle democrático dos recursos da sociedade:
1. **O Sistema Tripartite de Leis Orçamentárias (Iniciativa Privativa do Presidente da República):**
   - **Plano Plurianual (PPA):** Planejamento estratégico de médio prazo (vigência de 4 anos, iniciando no 2º ano de mandato do Presidente e terminando no 1º ano do mandato subsequente). Estabelece diretrizes, objetivos e metas para despesas de capital e programas continuados.
   - **Lei de Diretrizes Orçamentárias (LDO):** Anual. Conecta o PPA à LOA; define metas e prioridades da administração, orienta a elaboração da LOA e dispõe sobre alterações tributárias e política de pessoal. **A sessão legislativa não pode ser interrompida em julho sem a aprovação da LDO!**
   - **Lei Orçamentária Anual (LOA):** Anual. Orçamento fiscal, de seguridade social e de investimentos das estatais. Fixa despesas e prevê receitas.
2. **A Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO):**
   - Comissão mista permanente do Congresso Nacional (deputados e senadores) responsável por examinar e emitir parecer sobre o PPA, LDO, LOA, créditos adicionais e contas do Presidente.
3. **O Controle Externo e o Tribunal de Contas da União (TCU - CF art. 70 e 71):**
   - O controle externo é exercido pelo **Congresso Nacional com o auxílio do TCU**.
   - **Julgamento de Contas:**
     - O TCU **julga** as contas dos administradores públicos e demais responsáveis por dinheiros, bens e valores públicos federais (com eficácia de título executivo condenatório).
     - As contas do **Presidente da República**, todavia, o TCU **NÃO julga**: o TCU emite apenas um **Parecer Prévio**, cabendo o julgamento político-financeiro exclusivamente ao **Congresso Nacional**!

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Tramitação Orçamentária na CMO):** Em outubro, a equipe de apoio da Consultoria de Orçamento da Câmara recebe o projeto da LOA do ano seguinte. Os bibliotecários catalogam as emendas parlamentares individuais e de bancada, indexando os programas de saúde e educação para que os relatores setoriais elaborem o relatório geral.
- **Cenário 2 (Parecer Prévio do TCU sobre as Contas Presidenciais):** O TCU conclui a análise das contas do Presidente da República e emite Parecer Prévio recomendando a aprovação com ressalvas. O bibliotecário registra o documento e o encaminha à Comissão Mista de Orçamento (CMO), que emitirá projeto de decreto legislativo para julgamento final pelos 513 deputados e 81 senadores reunidos em sessão conjunta.
- **Cenário 3 (A Regra de Ouro Orçamentária no CEDI):** Ao planejar a contratação de modernização do parque tecnológico do CEDI, os gestores da Câmara observam os limites de despesa de capital e a Lei de Responsabilidade Fiscal (LRF), garantindo que as operações de crédito não superem as despesas de capital (Regra de Ouro - art. 167, III da CF).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Instrumento Orçamentário / Julgamento | Prazo / Vigência | Iniciativa Constitucional | Papel do TCU vs. Congresso |
| :--- | :--- | :--- | :--- |
| **PPA** | 4 anos (ultrapassa mandato) | Presidente da República | Parecer na CMO $\\to$ Aprovado no CN |
| **LDO** | Anual (sintoniza PPA e LOA) | Presidente da República | Impede recesso parlamentar de julho se não aprovada |
| **LOA** | Anual (Orçamento formal) | Presidente da República | Fixa despesas e estima receitas públicas |
| **Contas de Administradores** | Anuais | Contas de gestão | **O TCU julga diretamente** |
| **Contas do Presidente** | Anuais | Contas de governo | **O TCU emite parecer; o Congresso julga** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Quem Julga as Contas do Presidente da República:** O Cebraspe adora afirmar que o TCU julga as contas prestadas anualmente pelo Presidente da República. **Gabarito: ERRADO.** O TCU elabora apenas um **Parecer Prévio conclusivo** em 60 dias; quem **julga** as contas do Presidente da República é o **Congresso Nacional** (CF art. 49, IX e art. 71, I).
- **Recesso Parlamentar e a LDO:** Dizer que o Congresso Nacional entra em recesso em 17 de julho mesmo sem votar a LDO. **Gabarito: ERRADO.** O art. 57, § 2º da CF veda expressamente a interrupção da sessão legislativa sem a aprovação do projeto de LDO.
- **Iniciativa das Leis Orçamentárias:** Afirmar que deputados federais podem propor projeto de lei de iniciativa parlamentar original para criar o PPA. **Gabarito: ERRADO.** PPA, LDO e LOA são de iniciativa privativa do **Presidente da República**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. arts. 70 a 75 e 165 a 169.
- **BRASIL.** *Lei Complementar nº 101, de 4 de maio de 2000*. Estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal (Lei de Responsabilidade Fiscal - LRF).
- **PISCITELLI, Roberto Bocaccio; TIMM, Paulo Roberto.** *Contabilidade Pública: uma abordagem da administração financeira pública*. 14. ed. São Paulo: Atlas, 2018.
- **GIACOMONI, James.** *Orçamento público*. 18. ed. São Paulo: Atlas, 2021.
- **TRIBUNAL DE CONTAS DA UNIÃO (TCU).** *Regimento Interno do Tribunal de Contas da União*. Brasília: TCU, 2022.""",

    'sub-11-1': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Princípios Constitucionais da Administração Pública** estruturam todo o regime jurídico-administrativo brasileiro (CF/88, art. 37, *caput*):
1. **O Mnemônico LIMPE (Princípios Expressos do Art. 37):**
   - **Legalidade:** Para o particular, é lícito fazer tudo o que a lei não proíbe (autonomia da vontade). Para o administrador público, **só é permitido fazer o que a lei expressamente autoriza ou determina** (estrita legalidade).
   - **Impessoalidade:** A atuação estatal deve buscar o interesse público, sem favorecimentos ou perseguições (princípio da finalidade). Veda a autopromoção de agentes em obras e serviços públicos (art. 37, § 1º: proibição de nomes, símbolos ou imagens que caracterizem promoção pessoal).
   - **Moralidade:** Exige probidade, honestidade, boa-fé e lealdade institucional. Não se confunde com moral comum subjetiva: trata-se de moral jurídica objetiva. Súmula Vinculante nº 13 (vedação ao nepotismo).
   - **Publicidade:** Os atos administrativos devem ser transparentes e divulgados oficialmente para produzir efeitos jurídicos e permitir o controle social. Exceções: segurança da sociedade e do Estado, e intimidade/privacidade das pessoas.
   - **Eficiência:** Introduzido pela Emenda Constitucional nº 19/1998 (Reforma Gerencial). Exige produtividade, celeridade, rendimento funcional e redução de desperdícios no serviço público.
2. **Princípios Implícitos Fundamentais:**
   - **Supremacia do Interesse Público sobre o Privado:** Prerrogativas do Estado para tutelar a coletividade.
   - **Indisponibilidade do Interesse Público:** O gestor não é "dono" da coisa pública; ele apenas administra bens alheios pertencentes ao povo.
   - **Autotutela:** A Administração pode anular seus próprios atos ilegais e revogar os inoportunos ou inconvenientes (Súmulas 346 e 473 do STF).
   - **Proporcionalidade e Razoabilidade:** Adequação, necessidade e proporcionalidade em sentido estrito.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Aplicação da Impessoalidade nas Redes e Publicações da Câmara):** Um deputado presidente de comissão solicita que a revista institucional das Edições Câmara estampe sua fotografia na capa com o slogan de sua campanha eleitoral. O bibliotecário e o editor recusam formalmente o pedido com base no **princípio da impessoalidade e no art. 37, § 1º da CF/88**, que veda promoção pessoal em publicações com recursos da Câmara.
- **Cenário 2 (Autotutela em Concurso Público de Analista):** A Diretoria-Geral da Câmara identifica um erro material na fórmula de cálculo das notas de um processo seletivo interno. Aplicando o **princípio da autotutela (Súmula 473 do STF)**, a própria Mesa anula a classificação com vício de legalidade, republicando a lista correta sem precisar esperar decisão judicial.
- **Cenário 3 (A Estrita Legalidade na Aquisição de Livros Raros):** O gestor da Biblioteca Pedro Aleixo encontra em um sebo uma obra rara imperdível para o acervo histórico. Embora a compra seja oportuna, ele não pode pagar em dinheiro vivo de forma direta; deve seguir rigorosamente o processo de inexigibilidade previsto na Lei nº 14.133/2021 em estrito respeito ao **princípio da legalidade**.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Princípio Administrativo | Significado no Setor Público | Exceção / Limite Constitucional | Súmula / Dispositivo Chave |
| :--- | :--- | :--- | :--- |
| **Legalidade** | Só faz o que a lei expressamente autoriza | Medidas Provisórias e Estado de Defesa | CF/88, art. 37, *caput* |
| **Impessoalidade** | Vedação a favoritismos e promoção pessoal | - | CF/88, art. 37, § 1º |
| **Moralidade** | Honestidade e lealdade objetiva | - | Súmula Vinculante nº 13 (Nepotismo) |
| **Publicidade** | Transparência em diários e portais | Sigilo de Estado e intimidade pessoal | CF/88, art. 5º, XXXIII e LAI |
| **Autotutela** | Anula atos ilegais e revoga inoportunos | Respeito ao direito adquirido e contraditório | Súmulas 346 e 473 do STF |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Anulação vs. Revogação de Atos (Súmula 473 do STF):**
  - *Anulação:* Incide sobre atos **ilegais**; tem efeitos retroativos (**ex tunc**); pode ser feita pela Administração ou pelo Judiciário.
  - *Revogação:* Incide sobre atos **legais, mas inoportunos ou inconvenientes**; tem efeitos prospectivos (**ex nunc**); **só pode ser feita pela própria Administração** (o Judiciário NUNCA revoga ato alheio no mérito administrativo!). O Cebraspe troca sistematicamente esses conceitos.
- **Legalidade do Particular vs. do Administrador:** Dizer que o bibliotecário público pode praticar qualquer ato desde que não haja lei proibindo. **Gabarito: ERRADO.** Essa é a legalidade privada; o administrador público só pode agir se houver lei autorizando previamente.
- **Publicidade Absoluta sem Exceções:** Afirmar que todos os documentos e atos da Administração Pública são obrigatoriamente públicos sem qualquer exceção. **Gabarito: ERRADO.** A própria CF estabelece exceções para segurança do Estado e intimidade/privacidade individual.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **MEIRELLES, Hely Lopes.** *Direito Administrativo Brasileiro*. 42. ed. São Paulo: Malheiros, 2016. (A maior doutrina clássica de direito administrativo em concursos).
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Doutrina indispensável com altíssima incidência nas provas do Cebraspe).
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Súmula nº 473: A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais...*.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Súmula Vinculante nº 13: A nomeação de cônjuge, companheiro ou parente... viola a Constituição Federal*.""",

    'sub-11-2': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Organização da Administração Pública** diferencia a estrutura dos entes federados e suas entidades descentralizadas (Decreto-Lei nº 200/1967):
1. **Administração Direta vs. Indireta:**
   - **Administração Direta:** Órgãos internos dos entes federativos políticos soberanos/autônomos (União, Estados, DF e Municípios). Ex.: Ministérios, Secretarias, Câmara dos Deputados, Senado, STF. Atuam de forma centralizada.
   - **Administração Indireta:** Pessoas jurídicas criadas ou autorizadas pelo Estado para desempenhar atividades descentralizadas. **O Quarteto Canônico:**
     - **Autarquias:** Criadas **diretamente por lei específica**. Personalidade jurídica de **direito público**. Exercem atividades típicas e exclusivas de Estado (ex.: INSS, Banco Central, Universidades Federais como a UnB). Regime de pessoal estatutário.
     - **Fundações Públicas:** Autorizadas por lei específica (lei complementar define área de atuação). Podem ser de direito público (autarquias fundacionais) ou de direito privado (ex.: FUNAI, Fiocruz).
     - **Empresas Públicas (EP):** Autorizadas por lei; personalidade de **direito privado**; capital **100% público**; sob qualquer forma societária (ex.: Correios, Caixa Econômica Federal). Regime celetista.
     - **Sociedades de Economia Mista (SEM):** Autorizadas por lei; personalidade de **direito privado**; capital misto (maioria com direito a voto é do Estado); obrigatoriamente constituídas sob a forma de **Sociedade Anônima (S/A)** (ex.: Petrobras, Banco do Brasil).
2. **Desconcentração vs. Descentralização:**
   - **Desconcentração:** Criação de **órgãos internos dentro da mesma pessoa jurídica** (envolve subordinação hierárquica). Mnemônico: Desconcen**O**ração = cria **Ó**rgãos.
   - **Descentralização:** Transferência da execução de serviços para **outra pessoa jurídica** diferente (não há hierarquia, mas apenas vinculação e controle finalístico / tutela). Mnemônico: Descentrali**E**ação = cria **E**ntidades.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Desconcentração Interna no Centro de Documentação e Informação - CEDI):** Quando a Diretoria-Geral da Câmara divide suas funções e estabelece a Diretoria do CEDI e, dentro dele, a Coordenação da Biblioteca Pedro Aleixo, ocorre **desconcentração pura** (distribuição interna de competências dentro da mesma pessoa jurídica União Federal, sob estrita hierarquia).
- **Cenário 2 (Catalogação de Publicação de Sociedade de Economia Mista):** O bibliotecário processa um livro técnico de geologia patrocinado pela Petrobras. Ele aplica as regras de catalogação sabendo que a Petrobras é uma **Sociedade de Economia Mista (administração indireta)**, razão pela qual entra em ordem direta (`110 2# $a Petróleo Brasileiro S.A.`) e não sob o nome do país.
- **Cenário 3 (Controle Finalístico sobre Contratos com Empresas Públicas):** A Câmara celebra contrato de prestação de serviços logísticos com a Empresa Brasileira de Correios e Telégrafos (Empresa Pública Federal). Como a relação é entre pessoas jurídicas distintas (União e ECT), não há hierarquia, mas vínculo contratual fiscalizado pela administração da Casa.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Entidade da Adm. Indireta | Personalidade Jurídica | Forma de Criação | Capital / Forma Societária | Regime de Pessoal |
| :--- | :--- | :--- | :--- | :--- |
| **Autarquia** | **Direito Público** | **Criada por lei** | Patrimônio público / Típica de Estado | Estatutário (Lei 8.112) |
| **Fundação Pública (Priv.)** | Direito Privado | Autorizada por lei | Patrimônio destacado | CLT ou Estatutário |
| **Empresa Pública** | Direito Privado | Autorizada por lei | **100% Público** / Qualquer forma | Celetista (CLT) |
| **Soc. Economia Mista** | Direito Privado | Autorizada por lei | Capital misto / **Obrigatoriamente S/A** | Celetista (CLT) |
| **Desconcentração** | Mesma pessoa jurídica | Cria Órgãos internos | **Com hierarquia** | Estatutário |
| **Descentralização** | Pessoas jurídicas distintas | Cria Entidades externas | **Sem hierarquia** (Tutela finalística) | Variável |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Desconcentração vs. Descentralização:** A banca afirma que *"a criação do INSS pela União é um exemplo de desconcentração administrativa"*. **Gabarito: ERRADO.** A criação de uma autarquia como o INSS transfere atribuições para uma nova pessoa jurídica, tratando-se de **descentralização**!
- **Criação de Autarquia por Decreto:** Dizer que o Presidente pode criar uma autarquia mediante decreto regulamentar. **Gabarito: ERRADO.** Autarquias só podem ser criadas por **lei ordinária específica** (art. 37, XIX da CF/88).
- **Hierarquia entre Ministério e Autarquia:** Afirmar que existe relação de subordinação e hierarquia rígida entre a União e suas autarquias. **Gabarito: ERRADO.** Há apenas vinculação administrativa, supervisão ministerial e tutela finalística, **sem hierarquia**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Decreto-Lei nº 200, de 25 de fevereiro de 1967*. Dispõe sobre a organização da Administração Federal.
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Capítulo de Organização da Administração Pública).
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **MEIRELLES, Hely Lopes.** *Direito Administrativo Brasileiro*. 42. ed. São Paulo: Malheiros, 2016.
- **MELLO, Celso Antônio Bandeira de.** *Curso de Direito Administrativo*. 35. ed. São Paulo: Malheiros, 2021.""",

    'sub-11-3': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Regime Jurídico Único dos Servidores Públicos Civis da União (Lei Federal nº 8.112/1990)** estabelece o estatuto aplicável ao Analista Legislativo da Câmara dos Deputados:
1. **Formas de Provimento de Cargo Público (Art. 8º):**
   - **Nomeação:** A **única forma originária** de provimento (em caráter efetivo mediante concurso público ou em comissão para cargos de confiança).
   - **Formas Derivadas Canônicas (Mnemônico 4R + PAA):**
     - **Promoção:** Elevação funcional na mesma carreira.
     - **Readaptação:** Investidura em cargo de atribuições compatíveis com limitação física ou mental sofrida pelo servidor.
     - **Reversão:** Retorno do aposentado ao serviço ativo (de ofício no interesse da administração ou a pedido se cessada a invalidez).
     - **Reintegração:** Retorno do servidor estável demitido ilegalmente, com **ressarcimento integral** de todas as vantagens salariais, após anulação da demissão em decisão judicial ou administrativa.
     - **Recondução:** Retorno do servidor estável ao cargo anteriormente ocupado em decorrência de: a) inabilitação em estágio probatório em outro cargo; ou b) reintegração do ocupante anterior.
     - **Aproveitamento:** Retorno do servidor em disponibilidade em cargo compatível.
2. **Posse e Exercício (Prazos Críticos):**
   - **Nomeação $\\to$ Posse:** Prazo de **30 dias** contados da publicação oficial. A posse pode se dar por procuração específica. Se não tomar posse: a nomeação é tornada sem efeito!
   - **Posse $\\to$ Exercício:** Prazo de **15 dias** contados da posse. O exercício exige presença física. Se não entrar em exercício no prazo: o servidor é **exonerado**!
3. **Estágio Probatório e Estabilidade:**
   - Duração de **3 anos (36 meses)** de efetivo exercício (Súmula Vinculante nº 21 do STF e CF art. 41). Fatores de avaliação: Assiduidade, Disciplina, Capacidade de iniciativa, Produtividade e Responsabilidade.
4. **Vencimento vs. Remuneração:**
   - *Vencimento:* Retribuição pecuniária básica fixada em lei.
   - *Remuneração:* Vencimento do cargo efetivo acrescido das vantagens pecuniárias permanentes. Irredutibilidade de vencimentos ressalvado o teto constitucional (subsídio dos Ministros do STF).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Posse e Entrada em Exercício do Concursado na Câmara):** Richard é nomeado Analista Legislativo - Biblioteconomia no Diário Oficial. Ele tem até **30 dias** para apresentar seus documentos e tomar posse perante o Diretor do Departamento de Recursos Humanos. Após assinar o termo de posse, tem o prazo de **15 dias** para se apresentar fisicamente na Biblioteca Pedro Aleixo e iniciar o exercício de suas atividades técnicas.
- **Cenário 2 (Recondução após Estágio Probatório em Outro Cargo):** Um bibliotecário estável da Câmara é aprovado no concurso de Auditor Fiscal e pede vacância por posse em cargo inacumulável. Durante o estágio probatório no novo órgão, desiste ou é inabilitado na avaliação: ele tem o direito constitucional garantido de ser **reconduzido** ao seu antigo cargo de Analista na Câmara dos Deputados, reassumindo sua estabilidade.
- **Cenário 3 (Readaptação de Servidor com LER/DORT):** Um bibliotecário com 15 anos de catalogação manual intensa desenvolve lesão por esforço repetitivo grave comprovada por junta médica pericial oficial. A Câmara opera a **readaptação**, transferindo o servidor para o serviço de planejamento bibliográfico ou curadoria cultural, em cargo com atribuições e vencimentos compatíveis.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Instituto da Lei 8.112 | O que Acontece Exatamente | Requisito Principal | Consequência Pecuniária |
| :--- | :--- | :--- | :--- |
| **Reintegração** | Retorno de demitido ilegalmente | Decisão judicial ou administrativa | **Ressarcimento de todos os salários** |
| **Recondução** | Retorno de servidor estável ao cargo anterior | Inabilitação em estágio ou reintegração | Volta ao cargo sem indenização retroativa |
| **Reversão** | Retorno de aposentado à ativa | Junta médica (invalidez) ou interesse público | Volta a receber remuneração da ativa |
| **Readaptação** | Investidura em cargo compatível | Limitação física ou mental | Mantém vencimentos do cargo |
| **Não Tomar Posse (30 d)** | Não compareceu para assinar | Prazo de 30 dias expirou | Nomeação tornada **sem efeito** |
| **Não Entrar em Exercício (15 d)** | Tomou posse, mas não foi trabalhar | Prazo de 15 dias expirou | Servidor é **exonerado** |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Consequência do Não Comparecimento:** A banca afirma que quem toma posse e não entra em exercício tem a nomeação tornada sem efeito. **Gabarito: ERRADO.** Se tomou posse e não foi trabalhar em 15 dias, ele já é servidor público formal e, portanto, é **exonerado**! A nomeação só é tornada sem efeito se o candidato sequer tomar posse no prazo de 30 dias.
- **Duração do Estágio Probatório:** O texto original da Lei 8.112 dizia 24 meses, mas a Emenda Constitucional nº 19/98 elevou a estabilidade para 3 anos. O STF pacificou na Súmula Vinculante 21 que o estágio probatório dura obrigatoriamente **3 anos (36 meses)**.
- **Ascensão e Transferência como Formas de Provimento:** O Cebraspe coloca "ascensão" ou "transferência" como formas legítimas de provimento derivado. **Gabarito: ERRADO.** Ambas foram declaradas **inconstitucionais pelo STF (Súmula Vinculante nº 43)** por violarem a exigência de concurso público!

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 8.112, de 11 de dezembro de 1990*. Dispõe sobre o regime jurídico dos servidores públicos civis da União, das autarquias e das fundações públicas federais.
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Capítulo de Servidores Públicos).
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Súmula Vinculante nº 21: É constitucional a exigência de 3 anos de efetivo exercício para a aquisição da estabilidade*.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Súmula Vinculante nº 43: É inconstitucional toda modalidade de provimento que propicie ao servidor investir-se, sem prévia aprovação em concurso público...*""",

    'sub-11-4': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
O **Processo Administrativo Federal (Lei nº 9.784/1999)** e o **Direito Disciplinar (Lei nº 8.112/1990)** estabelecem o devido processo legal e o regime sancionatório no serviço público:
1. **Princípios e Direitos no Processo Administrativo (Lei nº 9.784/1999):**
   - Princípios canônicos: Devido processo legal, ampla defesa, contraditório, motivação, oficialidade, gratuidade e **verdade material** (o administrador busca a verdade fática real dos acontecimentos, e não apenas a verdade formal dos autos).
   - **Dever de Motivação (Art. 50):** A motivação é obrigatória em atos que neguem, limitem ou afetem direitos, imponham deveres ou sanções, e revoguem ou anulem atos. A motivação pode ser *aliunde* (por remissão a pareceres anteriores).
   - **Delegação e Avocação de Competência:**
     - *Delegação:* É facultativa, revogável a qualquer tempo e não implica renúncia de competência. **NÃO podem ser delegados (Art. 11):** a edição de atos normativos; a decisão de recursos administrativos; e matérias de competência exclusiva.
     - *Avocação:* Excepcional, temporária e exige motivos relevantes devidamente justificados.
2. **Direito Disciplinar na Lei nº 8.112/1990:**
   - **Penalidades Disciplinares:** Advertência $\\to$ Suspensão (máximo de 90 dias) $\\to$ Demissão $\\to$ Cassação de aposentadoria/disponibilidade $\\to$ Destituição de cargo em comissão $\\to$ Destituição de função comissionada.
   - **Infrações Puníveis com Demissão (Art. 132):** Crime contra a administração pública; abandono de cargo (ausência intencional por mais de **30 dias consecutivos**); inassiduidade habitual (falta injustificada por **60 dias interpolados** no período de 12 meses); improbidade administrativa; aplicação irregular de dinheiro público; lesão aos cofres públicos e corrupção.
3. **O Processo Administrativo Disciplinar (PAD):**
   - Composto por comissão de **3 servidores estáveis**. Fases: Instauração $\\to$ Inquérito (instrução, defesa e relatório) $\\to$ Julgamento pela autoridade competente.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Proibição de Delegação de Recurso na Diretoria-Geral):** Um candidato contesta o gabarito de uma prova interna do CEDI e protocola recurso administrativo perante a Diretoria-Geral. O Diretor-Geral não pode delegar a decisão desse recurso para a chefia imediata da biblioteca, pois o art. 11 da Lei nº 9.784/1999 veda terminantemente a delegação de **decisão de recursos administrativos**.
- **Cenário 2 (Apuração de Abandono de Cargo na Biblioteca):** Um servidor deixa de comparecer ao trabalho na Biblioteca Pedro Aleixo por 32 dias consecutivos sem justificativa médica ou licença formal. A Mesa Diretora instaura PAD pelo rito sumário de **abandono de cargo** (art. 132, II da Lei 8.112), assegurando a ampla defesa antes da aplicação da penalidade de demissão.
- **Cenário 3 (Verdade Material em Sindicância Interna):** Durante a apuração do extravio de um livro histórico de 1850, o servidor acusado junta cópias simples incompletas. O presidente da comissão de PAD, em busca da **verdade material** (art. 2º da Lei 9.784), requisita de ofício as filmagens das câmeras de segurança e ouve testemunhas que não haviam sido indicadas na petição inicial.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Ato / Situação Disciplinar | Regra Legal / Prazo | Característica Crítica | Erro Típico da Banca |
| :--- | :--- | :--- | :--- |
| **Abandono de Cargo** | Mais de **30 dias consecutivos** de falta injustificada | Intenção de faltar (animus abandonandi) | Confundir com inassiduidade habitual |
| **Inassiduidade Habitual** | **60 dias interpolados** de falta em 12 meses | Faltas dispersas sem justificativa | Dizer que são 30 dias interpolados |
| **Atos Não Delegáveis** | Edição de atos normativos, recursos e comp. exclusiva | Rol taxativo do art. 11 da Lei 9.784 | Dizer que recurso pode ser delegado |
| **Suspensão Máxima** | Até 90 dias | Pode ser convertida em multa de 50% | Afirmar suspensão de 180 dias |
| **Comissão de PAD** | 3 servidores estáveis | Designados pela autoridade instauradora | Permitir servidores em estágio probatório |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Comissão de PAD com Servidor Não Estável:** A banca afirma que a comissão de PAD pode ser composta por dois analistas estáveis e um servidor recém-empossado em estágio probatório. **Gabarito: ERRADO.** O art. 149 da Lei 8.112 exige expressamente que os **três membros sejam servidores estáveis**.
- **Delegação de Ato Normativo:** Afirmar que o Diretor pode delegar a expedição de portarias normativas gerais a seus chefes de serviço. **Gabarito: ERRADO.** O art. 11 da Lei 9.784/99 proíbe a delegação de atos com caráter normativo.
- **Verdade Formal vs. Verdade Material:** O Cebraspe propõe que o processo administrativo federal se rege pela verdade formal como no processo civil clássico. **Gabarito: ERRADO.** O processo administrativo rege-se pelo princípio da **verdade material**, podendo a Administração produzir provas de ofício além das alegadas pelas partes.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 9.784, de 29 de janeiro de 1999*. Regula o processo administrativo no âmbito da Administração Pública Federal.
- **BRASIL.** *Lei Federal nº 8.112, de 11 de dezembro de 1990*. arts. 116 a 182 (Regime Disciplinar e PAD).
- **MEDAUAR, Odete.** *Direito Administrativo Moderno*. 23. ed. Belo Horizonte: Fórum, 2021. (Referência canônica de processo administrativo).
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023.
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.""",

    'sub-11-5': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
Os **Poderes Administrativos** constituem prerrogativas públicas instrumentais conferidas ao Estado para assegurar o interesse coletivo:
1. **Tipologia dos Poderes Administrativos:**
   - **Poder Vinculado:** A lei estabelece todos os elementos e requisitos do ato, sem deixar margem de escolha ao administrador (ex.: concessão de licença-maternidade ou aposentadoria compulsória aos 75 anos).
   - **Poder Discricionário:** A lei confere margem de liberdade e valoração ao administrador para escolher a melhor conduta com base na **conveniência e oportunidade** (mérito administrativo). Limites: a discricionariedade nunca é ilimitada; submete-se à razoabilidade e proporcionalidade.
   - **Poder Hierárquico:** Distribuição e escalonamento de funções dentro da mesma pessoa jurídica; autoriza dar ordens, fiscalizar, delegar e avocar competências. Não existe hierarquia entre o Executivo e o Legislativo, nem entre a Administração e os cidadãos!
   - **Poder Disciplinar:** Poder-dever de apurar infrações e aplicar sanções a agentes públicos internos e a particulares com vínculo específico com o Estado (ex.: empresa concessionária ou contratada que descumpriu contrato).
   - **Poder Regulamentar / Normativo:** Prerrogativa de expedir decretos e normas gerais para fiel execução de leis (não pode inovar na ordem jurídica nem criar obrigações sem base legal!).
2. **Poder de Polícia:**
   - Prerrogativa estatal de **restringir, limitar ou condicionar o exercício de direitos e liberdades individuais e o uso de propriedades** em prol do bem-estar social, da segurança, da saúde e da ordem pública.
   - **Atributos do Poder de Polícia (Mnemônico DAC):** Discricionariedade, Autoexecutoriedade (o Estado age diretamente sem autorização judicial prévia) e Coercibilidade (uso legítimo da força física se houver resistência).
   - **O Ciclo de Polícia (4 Fases):** Ordem de Polícia (a lei) $\\to$ Consentimento (licença/autorização) $\\to$ Fiscalização $\\to$ Sanção de Polícia.
3. **Abuso de Poder (Excesso de Poder vs. Desvio de Finalidade):**
   - **Excesso de Poder:** O agente atua fora dos limites de sua competência legal (vício de competência).
   - **Desvio de Poder / Desvio de Finalidade:** O agente atua dentro de sua competência formal, mas busca uma finalidade alheia ao interesse público (ex.: remover servidor por perseguição política ou favorecer amigo). Vício de finalidade.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Poder de Polícia da Polícia Legislativa da Câmara):** Ao vistoriar cidadãos no detector de metais na portaria do Palácio do Congresso e reter objetos perfurocortantes, os policiais legislativos exercem o **Poder de Polícia com autoexecutoriedade e coercibilidade**, protegendo a segurança física dos deputados e servidores sem necessidade de autorização judicial prévia.
- **Cenário 2 (Desvio de Finalidade em Remoção de Bibliotecário):** Uma chefia de seção fica irritada com um bibliotecário que apontou irregularidades em uma licitação de livros e remove o servidor para um arquivo distante e insalubre alegando "necessidade do serviço". O ato padece de **desvio de poder/finalidade**, devendo ser anulado por violação ao princípio da impessoalidade e moralidade.
- **Cenário 3 (Poder Disciplinar Aplicado a Empresa Terceirizada):** A empresa contratada para encadernação do acervo da biblioteca descumpre o prazo contratual reiteradamente. A Câmara aplica multa e suspensão temporária de licitar fundamentada no **Poder Disciplinar** (relação contratual com vínculo específico).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Espécie de Abuso / Poder | Vício Constitutivo | O que Ocorre na Prática | Exemplo Cebraspe |
| :--- | :--- | :--- | :--- |
| **Excesso de Poder** | Vício de **Competência** | O agente invade esfera que a lei não lhe deu | Policial aplica sanção tributária |
| **Desvio de Finalidade** | Vício de **Finalidade** | O agente age no interesse privado/vingança | Remover servidor para puni-lo |
| **Poder de Polícia** | Restrição de liberdade e bens | Vínculo geral com a coletividade | Vigilância sanitária, trânsito |
| **Poder Disciplinar** | Punição de faltas funcionais | Vínculo interno especial com o Estado | PAD contra servidor ou multa em contratada |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Multa em Cidadão Comum é Poder Disciplinar:** O Cebraspe diz que a multa de trânsito aplicada a um motorista na rua decorre do poder disciplinar. **Gabarito: ERRADO.** O poder disciplinar exige **vínculo especial** (servidores ou contratados); sanção a cidadãos em geral decorre do **Poder de Polícia**.
- **Autoexecutoriedade da Multa:** Afirmar que a cobrança de multa de trânsito ou administrativa é autoexecutória (o Estado penhora a conta do cidadão diretamente sem ir ao juiz). **Gabarito: ERRADO.** A cobrança forçada de valores exige ação judicial de execução fiscal perante o Judiciário; a autoexecutoriedade não se aplica à cobrança de multas pecuniárias.
- **Excesso de Poder vs. Desvio de Finalidade:** Inverter os vícios: dizer que o desvio de poder decorre da falta de competência do agente. **Gabarito: ERRADO.** Falta de competência é **excesso de poder**; desvio de poder decorre de vício na finalidade do ato.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **MEIRELLES, Hely Lopes.** *Direito Administrativo Brasileiro*. 42. ed. São Paulo: Malheiros, 2016. (Capítulo de Poderes Administrativos).
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023.
- **BRASIL.** *Lei Federal nº 13.869, de 5 de setembro de 2019*. Dispõe sobre os crimes de abuso de autoridade.
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **SUNDFELD, Carlos Ari.** *Direito Administrativo Ordenador*. São Paulo: Malheiros, 2003.""",

    'sub-11-6': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Responsabilidade Civil do Estado** regula a obrigação jurídica de indenizar danos causados a terceiros por condutas estatais (CF/88, art. 37, § 6º):
1. **A Teoria da Responsabilidade Objetiva (Teoria do Risco Administrativo):**
   - As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros, **assegurado o direito de regresso** contra o responsável nos casos de dolo ou culpa (art. 37, § 6º da CF).
   - **Elementos da Responsabilidade Objetiva:**
     1. Conduta estatal (lícita ou ilícita de agente público).
     2. Dano material, moral ou estético comprovado.
     3. Nexo de causalidade entre a conduta e o dano.
     - **Dispensa a comprovação de dolo ou culpa do Estado!**
   - **Causas Excludentes ou Atenuantes do Nexo Causal:**
     - *Culpa Exclusiva da Vítima:* Exclui a responsabilidade do Estado.
     - *Caso Fortuito ou Força Maior:* Exclui a responsabilidade do Estado (se não houver omissão/falha do serviço).
     - *Fato Exclusivo de Terceiro:* Exclui a responsabilidade estatal.
     - *Culpa Concorrente da Vítima:* Atenua o valor da indenização devida pelo Estado.
2. **Responsabilidade por Omissão Estatal (Teoria da Falha do Serviço / *Faute du Service*):**
   - Quando o Estado não causou o dano diretamente, mas **deixou de prestar um serviço que tinha o dever legal de prestar** (omissão genérica), a responsabilidade é em regra **subjetiva**, exigindo a prova de que o serviço não funcionou, funcionou mal ou funcionou com atraso culposo.
3. **Direito de Regresso contra o Servidor:**
   - O cidadão prejudicado processa **diretamente o Estado** (Pessoa Jurídica), e não o servidor (STF, Tema 940 de Repercussão Geral: dupla garantia).
   - O Estado, após ser condenado e pagar a indenização, pode mover **ação regressiva contra o servidor público**, mas deve **comprovar que o servidor agiu com dolo ou com culpa** (a responsabilidade do servidor é subjetiva!).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Acidente com Prateleira Móvel no Acervo da Biblioteca):** Um pesquisador externo está consultando livros raros no arquivo deslizante da Biblioteca Pedro Aleixo quando uma prateleira com defeito se solta e atinge o usuário, causando fratura. A União Federal responde **objetivamente (sem necessidade de provar culpa do bibliotecário)** pelo dano sofrido pelo pesquisador, bastando provar o nexo de causalidade.
- **Cenário 2 (Ação de Regresso por Dolo na Danificação de Livro Raro):** Se for comprovado em PAD que um servidor agiu com dolo ou negligência grosseira intencional ao despejar água sobre um códice raro de 1823, a Câmara dos Deputados indeniza o proprietário da obra e em seguida aciona a Advocacia-Geral da União (AGU) para cobrar judicialmente cada centavo do servidor causador do dano em **ação regressiva**.
- **Cenário 3 (Tema 940 do STF no Atendimento ao Público):** Um cidadão alega ter sido ofendido por um servidor no balcão de atendimento e ingressa com ação de danos morais diretamente contra o servidor (pessoa física). O juiz extingue o processo sem julgamento de mérito com base no **Tema 940 do STF**: a ação indenizatória deve ser proposta obrigatoriamente em face da União Federal (ente estatal).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Conduta / Ação | Modalidade de Responsabilidade | O que Deve Ser Provado | Cabimento de Direito de Regresso |
| :--- | :--- | :--- | :--- |
| **Ação Estatal (Comissiva)** | **Objetiva** (Risco Administrativo) | Conduta + Dano + Nexo causal (sem culpa) | Sim, se comprovado dolo ou culpa do servidor |
| **Omissão Comum (Genérica)** | **Subjetiva** (Falha do serviço) | Conduta omissiva + Dano + Nexo + **Culpa do Estado** | Raro |
| **Ação Regressiva do Estado** | **Subjetiva** | O Estado deve **provar dolo ou culpa do servidor** | - |
| **Tema 940 do STF** | Princípio da Dupla Garantia | Ação proposta em face do Estado, não do servidor | O servidor só responde internamente em regresso |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Ação Direta do Cidadão contra o Servidor:** O Cebraspe formula itens dizendo que a vítima pode escolher entre processar o Estado ou processar diretamente o servidor causador do dano. **Gabarito: ERRADO.** O STF fixou a tese de que a ação deve ser movida **exclusivamente contra a pessoa jurídica de direito público**, sendo o servidor parte ilegítima na ação inicial.
- **Responsabilidade do Servidor em Regresso é Objetiva:** Afirmar que na ação de regresso o servidor responde objetivamente independentemente de dolo ou culpa. **Gabarito: ERRADO.** A responsabilidade do servidor é puramente **subjetiva**; se ele não agiu com dolo nem com culpa, o Estado arca sozinho com a indenização.
- **Teoria do Risco Integral no Brasil:** Afirmar que o Brasil adotou como regra geral a teoria do risco integral (onde o Estado indeniza mesmo se houver culpa exclusiva da vítima). **Gabarito: ERRADO.** A regra geral brasileira é a **Teoria do Risco Administrativo**, que admite excludentes como culpa exclusiva da vítima e força maior. O risco integral aplica-se apenas em situações extremas (danos nucleares, ambientais e ataques terroristas em aeronaves).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Constituição da República Federativa do Brasil de 1988*. art. 37, § 6º.
- **CAVALIERI FILHO, Sergio.** *Programa de Responsabilidade Civil*. 15. ed. São Paulo: Atlas, 2021. (A principal obra de referência doutrinária em responsabilidade civil).
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Capítulo de Responsabilidade Extracontratual do Estado).
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Tema 940 de Repercussão Geral (RE 1.027.633)*: A teor do disposto no art. 37, § 6º, da CF, a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público...""",

    'sub-11-7': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Lei de Improbidade Administrativa (Lei nº 8.429/1992)** com a profunda reforma promovida pela **Lei Federal nº 14.230/2021** alterou os parâmetros da responsabilidade sancionatória:
1. **A Grande Mudança: Exclusão Absoluta da Modalidade Culposa:**
   - Com a reforma da Lei nº 14.230/2021, **NÃO existe mais ato de improbidade administrativa culposo no ordenamento jurídico brasileiro**!
   - Todo e qualquer ato de improbidade administrativa exige agora a comprovação de **DOLO ESPECÍFICO** (vontade livre e consciente de alcançar o resultado ilícito tipificado em lei). A mera divergência interpretativa da lei não configura improbidade.
2. **Os Três Grupos Canônicos de Atos de Improbidade:**
   - **Art. 9º — Enriquecimento Ilícito:** Obtenção de qualquer vantagem patrimonial indevida em razão do cargo (ex.: receber propina, usar bens da biblioteca em obra particular).
     - *Sanções:* Perda dos bens ilícitos, perda da função pública, suspensão dos direitos políticos **até 14 anos**, multa civil equivalente ao valor do acréscimo e proibição de contratar por até 14 anos.
   - **Art. 10 — Lesão ao Erário:** Qualquer ação dolosa que cause perda patrimonial efetiva aos cofres públicos (ex.: permitir superfaturamento em compra de livros).
     - *Sanções:* Ressarcimento integral do dano, perda dos bens, perda da função, suspensão dos direitos políticos **até 12 anos**, multa civil equivalente ao valor do dano e proibição de contratar por até 12 anos.
   - **Art. 11 — Violação aos Princípios da Administração Pública:** Rol taxativo de condutas dolosas graves (ex.: fraudar concurso público, quebrar sigilo oficial).
     - *Sanções:* Multa civil de até 24 vezes a remuneração e proibição de contratar por até 4 anos. **ATENÇÃO:** Para o art. 11, a Lei 14.230/2021 **revogou a perda da função pública e a suspensão dos direitos políticos**!
3. **Prazo Prescricional Unificado:**
   - Prescrição em **8 anos**, contados da data da ocorrência do fato (ou da cessação da permanência no caso de atos contínuos).

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Recebimento de Vantagem Econômica Indevida em Licitação de Periódicos):** Um servidor do CEDI recebe R$ 20.000 de uma distribuidora de livros para favorecê-la em uma compra. Ele incorre no **Art. 9º da Lei nº 8.429/92 (Enriquecimento Ilícito com dolo específico)**, sujeito à perda do cargo, suspensão de direitos políticos de até 14 anos e ressarcimento integral.
- **Cenário 2 (Superfaturamento Doloso em Contrato de Digitalização):** Gestores públicos da Câmara atestam a digitalização de 100.000 páginas de anais que nunca foram digitalizadas, liberando o pagamento à empresa parceira. Incorrem no **Art. 10 (Prejuízo ao Erário)**, exigindo ressarcimento do erário e multas severas.
- **Cenário 3 (Erro Material sem Dolo em Parecer Técnico):** Um bibliotecário comete um equívoco de interpretação em uma nota técnica de aquisição de software, gerando descompasso sem qualquer proveito próprio ou má-fé. Sob a Lei nº 14.230/2021, esse fato pode ser apurado disciplinarmente, mas **NÃO constitui improbidade administrativa**, pois inexiste dolo específico.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Tipo de Improbidade | Exigência Subjetiva | Sanção Máx. Direitos Políticos | Perda da Função Pública? |
| :--- | :--- | :--- | :--- |
| **Enriquecimento Ilícito (Art. 9º)** | **Dolo Específico** | Suspensão de **até 14 anos** | SIM |
| **Prejuízo ao Erário (Art. 10)** | **Dolo Específico** (culpa foi revogada!) | Suspensão de **até 12 anos** | SIM |
| **Atentado aos Princípios (Art. 11)** | **Dolo Específico** | **NÃO tem mais suspensão!** | **NÃO tem mais perda de função!** |
| **Prazo Prescricional** | Regra Geral | **8 anos contados do fato** | Prescrição intercorrente de 4 anos |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Ato de Improbidade Culposo:** O Cebraspe coloca uma situação em que o agente público agiu com imprudência ou negligência causando prejuízo ao erário e pergunta se ele cometeu improbidade culposa. **Gabarito: ERRADO.** A reforma da Lei nº 14.230/2021 extirpou a culpa do sistema de improbidade; sem dolo específico demonstrado, o ato não é ímprobo.
- **Suspensão de Direitos Políticos no Art. 11:** Afirmar que quem viola princípios da administração pública (art. 11) tem seus direitos políticos suspensos por 5 anos. **Gabarito: ERRADO.** A nova lei revogou expressamente a suspensão de direitos políticos para o art. 11!
- **Legitimidade para Ação de Improbidade:** Dizer que qualquer cidadão ou a própria pessoa jurídica lesada pode propor a ação judicial de improbidade. **Gabarito: ERRADO.** A legitimidade ativa para propor a ação de improbidade administrativa é privativa e exclusiva do **Ministério Público** (art. 17).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 8.429, de 2 de junho de 1992*. Dispõe sobre as sanções aplicáveis em virtude da prática de atos de improbidade administrativa (com a redação da Lei Federal nº 14.230/2021).
- **GARCIA, Emerson; ALVES, Rogério Pacheco.** *Improbidade Administrativa*. 11. ed. São Paulo: Saraiva, 2022. (A principal obra de referência sobre a nova lei de improbidade).
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023.
- **CARVALHO FILHO, José dos Santos.** *Manual de Direito Administrativo*. 36. ed. São Paulo: Atlas, 2022.
- **SUPREMO TRIBUNAL FEDERAL (STF).** *Tema 1.199 de Repercussão Geral (ARE 843.989)*: Todos os atos de improbidade administrativa exigem dolo, aplicando-se a nova lei aos casos sem trânsito em julgado...""",

    'sub-11-8': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Evolução da Administração Pública** compreende três modelos paradigmáticos sucessivos que moldaram o Estado moderno:
1. **Modelo Patrimonialista (Monarquias / Estado Pré-Moderno):**
   - Não há distinção entre a *res publica* (coisa pública) e a *res principis* (bens pessoais do soberano).
   - O patrimônio do Estado é gerido como extensão da propriedade privada do governante.
   - Cargos públicos são preenchidos por apadrinhamento, laços de sangue e nepotismo; corrupção e prebendas endêmicas.
2. **Modelo Burocrático / Burocracia Weberiana (Max Weber - Início do Séc. XX):**
   - Surge com a industrialização e a consolidação do Estado de Direito para combater a corrupção e o nepotismo patrimonialista.
   - **Princípios Canônicos:** Formalismo rígido, legalidade estrita, impessoalidade absoluta, hierarquia verticalizada inflexível, controle prévio dos processos e profissionalização (concurso público e mérito).
   - **Disfunções da Burocracia (Robert K. Merton):** O apego exagerado às regras e aos procedimentos burocráticos transforma os meios em fins; lentidão, rigidez decisória, aversão à mudança e perda de foco nas necessidades do cidadão.
3. **Modelo Gerencial / Nova Gestão Pública (*New Public Management* - NPM):**
   - Surge nas décadas de 1980 e 1990 (Governos Thatcher, Reagan e Plano Diretor da Reforma do Estado de Bresser-Pereira em 1995 no Brasil).
   - Foco na **eficiência, resultados, flexibilidade gerencial e satisfação do cidadão-usuário**.
   - Substituição do controle prévio de processos (*a priori*) pelo **controle de resultados a posteriori**.
   - Descentralização, terceirização de serviços de apoio e contratualização de metas (Contratos de Gestão).
4. **Nova Governança Pública (Pós-NPM / Governança Colaborativa):**
   - Integração em rede entre Estado, mercado e sociedade civil, valorizando a coprodução do bem público, transparência, integridade e sustentabilidade democrática.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (A Burocracia Weberiana no Ingresso do Bibliotecário):** O concurso público de provas e títulos com critérios objetivos cego, pelo qual Richard é selecionado para o cargo de Analista Legislativo, representa a consagração do **modelo burocrático weberiano** profissional baseado estritamente na competência técnica e na impessoalidade.
- **Cenário 2 (Administração Gerencial na Contratualização de Metas do CEDI):** O Centro de Documentação e Informação celebra um acordo de metas de desempenho com a Diretoria-Geral da Câmara (NPM / Modelo Gerencial): em troca de autonomia para gerir seus horários e recursos de digitalização, o CEDI compromete-se a entregar 100% dos relatórios solicitados pelas comissões no prazo de 48 horas, sendo avaliado pelos **resultados alcançados**.
- **Cenário 3 (Governança Pública Colaborativa nos Hackathons da Câmara):** A Câmara abre seus dados orçamentários e de tramitação via API e promove hackathons com a sociedade civil e universidades para criar aplicativos de transparência cidadã, aplicando o modelo contemporâneo de **Nova Governança Pública**.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Modelo de Gestão | Foco Principal | Mecanismo de Controle | Relação com o Cidadão |
| :--- | :--- | :--- | :--- |
| **Patrimonialista** | Manutenção do poder e bens do soberano | Inexistente / Favoritismo | Súdito dependente de favor |
| **Burocrático** | Combate à corrupção e nepotismo | Controle rígido de processos *a priori* | Administrado submetido à regra formal |
| **Gerencial (NPM)** | Eficiência, eficácia e custos | Controle de resultados *a posteriori* | Cidadão-cliente de serviços públicos |
| **Governança Pública** | Redes colaborativas e legitimidade | Transparência, integridade e *accountability* | Cidadão participante e cocriador |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **O Modelo Gerencial Elimina a Burocracia:** O Cebraspe afirma que o advento da administração gerencial aboliu por completo todos os princípios da burocracia no serviço público. **Gabarito: ERRADO.** O modelo gerencial apoia-se sobre as bases da burocracia (concurso público, carreira profissional e impessoalidade), flexibilizando apenas as rotinas de processos para focar em resultados.
- **Controle no Modelo Burocrático vs. Gerencial:** Inverter os momentos de controle: a burocracia faz controle **a priori** (preventivo nos processos e carimbos); o modelo gerencial privilegia o controle **a posteriori** (nos resultados e metas).
- **Disfunções de Merton:** Dizer que a rigidez burocrática é uma virtude desejada por Max Weber. **Gabarito: ERRADO.** O formalismo excessivo e a lentidão são **disfunções patológicas** da burocracia mapeadas por Robert Merton.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRESSER-PEREIRA, Luiz Carlos.** *Reforma do Estado para a Cidadania: a reforma gerencial brasileira na perspectiva internacional*. São Paulo: Editora 34; Brasília: ENAP, 1998. (O texto fundamental sobre a reforma gerencial no Brasil).
- **WEBER, Max.** *Economia e Sociedade: fundamentos da sociologia compreensiva*. Brasília: Ed. UnB, 1999. v. 1 e 2. (A formulação clássica da Burocracia).
- **OSBORNE, David; GAEBLER, Ted.** *Reinventando o Governo: como o espírito empreendedor está transformando o setor público*. 7. ed. Brasília: MH Comunicação, 1994.
- **SECCHI, Leonardo.** Modelos organizacionais e reformas da administração pública. *Revista de Administração Pública (RAP)*, v. 43, n. 2, p. 347-369, 2009.
- **BRASIL. MINISTÉRIO DA ADMINISTRAÇÃO FEDERAL E REFORMA DO ESTADO (MARE).** *Plano Diretor da Reforma do Aparelho do Estado*. Brasília: Presidência da República, 1995.""",

    'sub-11-9': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Governança no Setor Público Federal (Decreto nº 9.203/2017 e Referencial do TCU)** orienta as instâncias de liderança para assegurar resultados que atendam às necessidades da sociedade:
1. **Governança vs. Gestão (A Diferença Crítica no Cebraspe!):**
   - **Governança Pública:** Conjunto de mecanismos de **Liderança, Estratégia e Controle** postos em prática para avaliar, direcionar e monitorar a gestão, com vistas à condução de políticas públicas e à prestação de serviços de interesse da sociedade. A governança responde à pergunta: *\"O que fazer e para onde ir?\"*.
   - **Gestão Pública:** É a ação executiva e operacional responsável por planejar, executar, gerenciar recursos, construir e entregar produtos e serviços de acordo com as diretrizes da governança. A gestão responde à pergunta: *\"Como fazer no dia a dia?\"*.
2. **Princípios da Governança Pública (Decreto nº 9.203/2017, art. 3º):**
   - Capacidade de resposta; Integridade; Confiabilidade; Melhoria regulatória; Prestação de contas e responsabilidade (*Accountability*); e Transparência.
3. **As Diretrizes e os Mecanismos da Governança (TCU):**
   - **Liderança:** Recursos humanos qualificados, integridade, competência técnica e ética dos altos dirigentes.
   - **Estratégia:** Definição de objetivos de longo prazo, alinhamento institucional, planos táticos e escuta das partes interessadas (*stakeholders*).
   - **Controle:** Gestão de riscos corporativos, controle interno e auditoria independente.
4. **Gestão de Riscos (ISO 31000 e COSO-ERM):**
   - Processo para identificar, analisar, avaliar e tratar incertezas que possam comprometer os objetivos estratégicos da organização pública.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Comitê de Governança Estratégica da Câmara dos Deputados):** A Mesa Diretora e a Diretoria-Geral instituem o Comitê de Governança da Câmara (órgão de governança pura). O comitê define que o plano quadrienal deve focar na digitalização total de processos e na transparência legislativa, transmitindo essas diretrizes estratégicas para o CEDI e para a biblioteca executarem (gestão).
- **Cenário 2 (Gestão de Riscos Operacionais no Acervo Histórico):** A chefia da Biblioteca Pedro Aleixo elabora a matriz de riscos do acervo de acordo com o referencial do TCU: identifica o risco de alagamento por rompimento de ar-condicionado (Probabilidade Média / Impacto Alto) e estabelece controles preventivos imediatos (instalação de sensores de umidade com alerta no celular da brigada).
- **Cenário 3 (Aplicação do Princípio da *Accountability* no Relatório de Gestão):** Anualmente, a Câmara dos Deputados publica em seu portal o Relatório Integrado de Gestão no formato preconizado pelo TCU, prestando contas de cada real do orçamento executado na compra de livros e assinaturas de bases de dados.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Dimensão | Governança Pública | Gestão Pública |
| :--- | :--- | :--- |
| **Instância** | Alta Administração / Comitês Estratégicos | Diretorias, Coordenações e Chefias Operacionais |
| **Ações Chave** | **Avaliar, Direcionar e Monitorar** | **Planejar, Executar e Controlar** |
| **Pergunta Central** | *\"O que fazer?\"* / *\"Para onde vamos?\"* | *\"Como fazer?\"* / *\"Com quais recursos?\"* |
| **Mecanismos TCU** | Liderança, Estratégia e Controle | Pessoas, Processos e Tecnologia |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Inversão entre Governança e Gestão:** A banca diz que a governança é responsável por executar diretamente as compras e rotinas de catalogação da biblioteca. **Gabarito: ERRADO.** Quem executa é a **Gestão**; a Governança apenas avalia, direciona e monitora a estratégia.
- **Os Três Mecanismos do TCU:** O Cebraspe testa os três mecanismos canônicos de governança do TCU: **Liderança, Estratégia e Controle**.
- **Gestão de Riscos Visa Eliminar 100% dos Riscos:** Afirmar que a gestão de riscos tem como meta eliminar completamente todo e qualquer risco da organização. **Gabarito: ERRADO.** O risco zero não existe; a gestão de riscos busca manter as incertezas dentro do nível aceitável de tolerância da instituição.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Decreto Federal nº 9.203, de 22 de novembro de 2017*. Dispõe sobre a política de governança da administração pública federal direta, autárquica e fundacional.
- **TRIBUNAL DE CONTAS DA UNIÃO (TCU).** *Referencial Básico de Governança Aplicável a Órgãos e Entidades da Administração Pública*. 3. ed. Brasília: TCU, 2020.
- **COSO (Committee of Sponsoring Organizations of the Treadway Commission).** *Gerenciamento de Riscos Corporativos: estrutura integrada (COSO-ERM)*. 2017.
- **ABNT NBR ISO 31000:2018.** *Gestão de riscos — Diretrizes*. Rio de Janeiro: ABNT, 2018.
- **MATIAS-PEREIRA, José.** *Governança no setor público*. São Paulo: Atlas, 2010.""",

    'sub-11-10': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Lei de Acesso à Informação (LAI - Lei Federal nº 12.527/2011)** concretiza o princípio constitucional republicano da publicidade e da transparência pública:
1. **Diretrizes e Regra Geral da LAI:**
   - **Regra:** **A publicidade é o preceito geral; o sigilo é a exceção!**
   - Transparência Ativa (o Estado divulga dados de ofício, sem que ninguém peça) vs. Transparência Passiva (o Estado atende a pedidos específicos de informação formulados por cidadãos).
   - Divulgação em formatos abertos, legíveis por máquina e não proprietários (CSV, XML, JSON).
2. **O Serviço de Informação ao Cidadão (SIC) e Prazos da LAI:**
   - Qualquer pessoa física ou jurídica pode requerer informações públicas, **sem necessidade de justificar o motivo do pedido**!
   - **Prazo de Resposta:** Se a informação estiver disponível, o acesso é **imediato**. Caso não seja possível o acesso imediato, o órgão tem **até 20 dias**, prorrogáveis por mais **10 dias** mediante justificativa expressa (total máximo de 30 dias).
3. **Classificação da Informação Sigilosa (Prazos Máximos - Art. 24):**
   - **Ultrassecreta:** Prazo de até **25 anos** (competência originária de ministros de Estado, comandantes das forças armadas e Presidente). Pode ser prorrogada uma única vez.
   - **Secreta:** Prazo de até **15 anos**.
   - **Reservada:** Prazo de até **5 anos**.
4. **Informações Pessoais e Privacidade (Art. 31):**
   - Relativas à intimidade, vida privada, honra e imagem têm acesso restrito independentemente de classificação de sigilo pelo prazo máximo de **100 anos** a contar da data de sua produção.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Atendimento a Pedido de LAI no SIC da Câmara):** Um jornalista protocola pedido no Sistema e-SIC da Câmara solicitando a relação de todas as notas fiscais pagas com a Cota Parlamentar de determinado deputado no último ano. O bibliotecário e a equipe do SIC não podem exigir que o jornalista justifique por que quer a informação: a resposta deve ser fornecida em formato de planilha aberta no prazo de até 20 dias.
- **Cenário 2 (Salvaguarda de Obras e Manuscritos com Dados Pessoais Sensíveis):** A Biblioteca Pedro Aleixo custodia correspondências pessoais doadas por familiares de um constituinte falecido. O bibliotecário aplica o **art. 31 da LAI**: informações referentes à intimidade e vida privada do titular ficam sob acesso restrito pelo prazo de até 100 anos, salvo consentimento expresso de herdeiros ou para pesquisas históricas sem identificação pública vexatória.
- **Cenário 3 (Transparência Ativa no Portal de Dados Abertos da Câmara):** A Câmara publica automaticamente em seu portal todas as votações, atas, remunerações de servidores e despesas com diárias de deputados, praticando a **transparência ativa** em grau máximo.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Grau de Sigilo / Informação | Prazo Máximo de Sigilo | Quem pode Classificar | Prorrogação Permitida? |
| :--- | :--- | :--- | :--- |
| **Ultrassecreto** | Até **25 anos** | Presidente, V-Pres., Ministros | Prorrogável 1 única vez |
| **Secreto** | Até **15 anos** | Autoridades do 1º escalão | Não prorrogável |
| **Reservado** | Até **5 anos** | Chefias e Diretores (CEDI) | Não prorrogável |
| **Informação Pessoal (Art. 31)** | Até **100 anos** | Não exige classificação | Proteção legal automática |
| **Prazo Padrão de Resposta SIC** | **20 dias (+ 10 dias)** | Serviço de Informação ao Cidadão | Prazo peremptório legal |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Exigência de Motivação para Acesso à Informação:** O Cebraspe afirma que o cidadão que solicita dados pelo e-SIC deve declarar o motivo pelo qual deseja aquela informação. **Gabarito: ERRADO.** O art. 10, § 3º da LAI veda expressamente qualquer exigência relativa aos motivos determinantes da solicitação de informações de interesse público.
- **Inversão dos Prazos de Sigilo:** A banca troca os prazos dizendo que reservado dura 15 anos e secreto 5 anos. **Gabarito: ERRADO.** Lembre-se da escala decrescente: **Ultra = 25 / Secreto = 15 / Reservado = 5**.
- **Informação Pessoal dura 50 anos:** A banca afirma que o prazo de sigilo de dados de intimidade pessoal é de 50 anos. **Gabarito: ERRADO.** O art. 31 fixa o prazo de **100 anos**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 12.527, de 18 de novembro de 2011*. Regula o acesso a informações previsto no inciso XXXIII do art. 5º da CF/88 (Lei de Acesso à Informação).
- **BRASIL.** *Decreto Federal nº 7.724, de 16 de maio de 2012*. Regulamenta a Lei nº 12.527/2011 no âmbito do Poder Executivo Federal.
- **CÂMARA DOS DEPUTADOS.** *Ato da Mesa nº 45, de 2012*. Regulamenta a Lei de Acesso à Informação no âmbito da Câmara dos Deputados.
- **CONTROLADORIA-GERAL DA UNIÃO (CGU).** *Guia Prático de Aplicação da LAI para Órgãos Públicos*. Brasília: CGU, 2021.
- **MORAES, Alexandre de.** *Direito Constitucional*. 38. ed. São Paulo: Atlas, 2022.""",

    'sub-11-11': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)** disciplina o tratamento de dados pessoais no setor público para proteger os direitos fundamentais de liberdade e privacidade:
1. **Conceitos Fundamentais da LGPD:**
   - **Dado Pessoal:** Informação relacionada a pessoa natural identificada ou identificável (ex.: nome, CPF, RG, endereço, e-mail).
   - **Dado Pessoal Sensível:** Dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização religiosa, filosófica ou política, dado referente à saúde ou à vida sexual, dado genético ou biométrico.
   - **Tratamento:** Toda operação realizada com dados pessoais (coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, processamento, arquivamento, armazenamento, eliminação ou modificação).
   - **Agentes de Tratamento:**
     - *Controlador:* A quem competem as decisões sobre o tratamento (a Câmara dos Deputados).
     - *Operador:* Quem realiza o tratamento em nome do controlador (empresas de TI contratadas).
     - *Encarregado (DPO - Data Protection Officer):* Canal de comunicação entre o controlador, os titulares e a Autoridade Nacional de Proteção de Dados (ANPD).
2. **Princípios Canônicos da LGPD (Art. 6º):**
   - Finalidade, Adequação, Necessidade (minimização de dados), Livre acesso, Qualidade dos dados, Transparência, Segurança, Prevenção, Não discriminação e Responsabilização/Prestação de contas.
3. **Tratamento pelo Poder Público (Art. 23):**
   - O tratamento de dados pessoais pelo poder público deve ser realizado para o atendimento de sua **finalidade pública**, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público.
   - Dispensa de consentimento quando amparado em cumprimento de obrigação legal ou execução de políticas públicas previstas em lei.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Anonimização de Dados Sensíveis de Saúde em Petições Cidadãs):** Um cidadão encaminha uma denúncia à Comissão de Direitos Humanos anexando laudos médicos com dados genéticos e diagnósticos psiquiátricos. O bibliotecário do CEDI, ao cadastrar a petição no sistema público de tramitação, aplica **técnicas de pseudonimização e tarjamento de dados sensíveis** conforme a LGPD, impedindo que a intimidade médica do denunciante fique exposta no Google.
- **Cenário 2 (Coleta de Dados de Usuários da Biblioteca Pedro Aleixo):** Ao cadastrar usuários para o serviço de empréstimo de livros, a biblioteca aplica o **princípio da necessidade (minimização)**: solicita apenas nome, matrícula e e-mail institucional, recusando-se a coletar dados biométricos ou partidários que não possuem qualquer relação com o serviço bibliotecário.
- **Cenário 3 (A atuação do Encarregado de Dados - DPO na Câmara):** A Ouvidoria da Câmara é acionada por um cidadão que pede a exclusão de seu endereço residencial constante em anexo de uma CPI antiga. O Encarregado de Proteção de Dados (DPO) da Câmara analisa o pedido à luz da Lei nº 13.709/2018 e do dever de memória pública, orientando o CEDI a proteger o dado individual sem apagar o fato histórico do processo.

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Conceito / Agente | Papel na LGPD | Exemplo Concreto na Câmara | Nível de Proteção |
| :--- | :--- | :--- | :--- |
| **Dado Pessoal Comum** | Identifica pessoa viva | Nome, CPF, cargo, salário | Proteção padrão |
| **Dado Pessoal Sensível** | Saúde, biometria, religião, política | Laudo médico, exame de DNA, filiação partidária | **Proteção máxima e rigorosa** |
| **Controlador** | Toma as decisões de tratamento | **Câmara dos Deputados** (Órgão) | Responde juridicamente |
| **Operador** | Executa ordens do controlador | Empresa terceirizada de software em nuvem | Responde solidariamente se violar |
| **Encarregado (DPO)** | Ponte entre titular, órgão e ANPD | Servidor designado formalmente em portaria | Orienta e fiscaliza internamente |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **A LGPD Protege Dados de Pessoas Jurídicas:** O Cebraspe afirma que a LGPD protege dados de empresas e corporações jurídicas. **Gabarito: ERRADO.** A LGPD aplica-se exclusivamente a dados de **pessoas naturais (pessoas físicas vivas)**; dados empresariais de CNPJs não são dados pessoais sob a LGPD.
- **Consentimento Obrigatório em Todas as Ações Públicas:** Dizer que o Estado só pode tratar dados de cidadãos se houver consentimento expresso assinado. **Gabarito: ERRADO.** O poder público pode tratar dados independentemente de consentimento para cumprimento de obrigação legal ou execução de políticas públicas previstas em leis e regulamentos (art. 7º, II e III).
- **Dado Anonimizado é Dado Pessoal:** Afirmar que dados anonimizados irreversivelmente continuam sujeitos às regras da LGPD. **Gabarito: ERRADO.** O dado anonimizado (que não permite a identificação do indivíduo por meios técnicos razoáveis) **não é considerado dado pessoal** sob a égide da LGPD (art. 12).

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 13.709, de 14 de agosto de 2018*. Lei Geral de Proteção de Dados Pessoais (LGPD).
- **AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (ANPD).** *Guia Orientativo: Tratamento de Dados Pessoais pelo Poder Público*. Brasília: ANPD, 2022.
- **DONEDA, Danilo.** *Da privacidade à proteção de dados pessoais: elementos da formação do direito à privacidade*. 2. ed. São Paulo: Thomson Reuters Brasil, 2020. (O livro pioneiro e mais respeitado sobre o tema no Brasil).
- **BIONI, Bruno Ricardo.** *Proteção de dados pessoais: a função e os limites do consentimento*. 3. ed. Rio de Janeiro: Forense, 2021.
- **CÂMARA DOS DEPUTADOS.** *Portaria de Política de Privacidade e Proteção de Dados da Câmara dos Deputados*. Brasília: Mesa Diretora, 2021.""",

    'sub-11-12': """### ⚡ 1. Visão Direta em 3 Minutos (Resumo Executivo)
A **Nova Lei de Licitações e Contratos Administrativos (Lei Federal nº 14.133/2021)** é a base obrigatória para contratações de bens e serviços na Câmara dos Deputados:
1. **Modalidades de Licitação na Lei nº 14.133/2021:**
   - **Pregão:** Obrigatório para aquisição de **bens e serviços comuns** (cujos padrões de desempenho e qualidade possam ser objetivamente definidos pelo edital por meio de especificações usuais de mercado). O critério de julgamento é menor preço ou maior desconto.
   - **Concorrência:** Para contratação de bens e serviços especiais e de obras e serviços comuns e especiais de engenharia.
   - **Concurso:** Escolha de trabalho técnico, científico ou artístico (prêmio ou remuneração).
   - **Leilão:** Alienação de bens públicos móveis ou imóveis inservíveis.
   - **Diálogo Competitivo (Nova Modalidade!):** Utilizado para contratações complexas e inovações tecnológicas onde a administração não sabe previamente qual solução de mercado atende melhor às suas necessidades.
   - **ATENÇÃO:** A Lei nº 14.133/2021 **EXTINGUIU a Tomada de Preços e o Convite**!
2. **Contratação Direta (Sem Licitação):**
   - **Inexigibilidade de Licitação (Art. 74):** Quando há **inviabilidade de competição** (rol exemplificativo). Casos canônicos: fornecedor exclusivo; profissional de notória especialização de natureza singular; aquisição ou restauração de **obras de arte e objetos históricos de autenticidade certificada** (art. 74, IV).
   - **Dispensa de Licitação (Art. 75):** A competição é viável, mas a lei autoriza não licitar por razões de custo-benefício ou emergência (rol taxativo). Casos canônicos: dispensa por valor (pequenas compras) e emergência.
3. **Instrumentos Auxiliares da Licitação:**
   - Credenciamento; Pré-qualificação; Procedimento de Manifestação de Interesse (PMI); Sistema de Registro de Preços (SRP); e Catálogo eletrônico de padronização.

---

### 🏛️ 2. Vida Real na Câmara dos Deputados (Casos Concretos)
- **Cenário 1 (Pregão Eletrônico para Compra de Computadores e Mobiliário da Biblioteca):** Para comprar 50 mesas padronizadas e 40 computadores para o salão de leitura da Biblioteca Pedro Aleixo, a Câmara realiza **Pregão Eletrônico** pelo critério de menor preço, pois são bens comuns com especificações consolidadas de mercado.
- **Cenário 2 (Inexigibilidade na Aquisição de Livro Raro de 1824):** A biblioteca deseja adquirir um exemplar original raríssimo da *Constituição do Império de 1824* pertencente a um colecionador particular. O bibliotecário fundamenta a contratação direta por **Inexigibilidade de Licitação com base no art. 74, IV da Lei nº 14.133/2021**, em virtude da notoriedade histórica e impossibilidade de competição com outro fornecedor.
- **Cenário 3 (Assinatura de Bases de Dados Estrangeiras Especializadas):** Para assinar a base de dados jurídica internacional *HeinOnline* com representação exclusiva no Brasil, a Câmara formaliza processo de inexigibilidade por fornecedor exclusivo (art. 74, I).

---

### ⚖️ 3. Quadro de Contraste Rápido (Anticonfusão)
| Hipótese de Contratação | Fundamento Legal | Natureza da Competição | Exemplo Concreto na Câmara |
| :--- | :--- | :--- | :--- |
| **Pregão** | Lei 14.133, art. 6º, XLI | Bens e serviços comuns | Compra de papel A4 e estantes de aço |
| **Inexigibilidade** | Lei 14.133, art. 74 | **Inviabilidade fática de competição** | Livro raro de antiquário / Base exclusiva |
| **Dispensa de Licitação** | Lei 14.133, art. 75 | Competição viável, mas dispensada por lei | Compra de emergência ou baixo valor |
| **Diálogo Competitivo** | Lei 14.133, art. 32 | Solução tecnológica complexa desconhecida | Novo sistema de IA legislativa sob medida |

---

### 🎯 4. Como o Cebraspe Cobra na Prova (Armadilhas e Gatilhos)
- **Modalidades Extintas na Prova:** A banca coloca "Tomada de Preços" ou "Convite" como opção de resposta correta. **Gabarito: ERRADO.** A Lei nº 14.133/2021 extinguiu formalmente essas duas modalidades do ordenamento brasileiro.
- **Inexigibilidade vs. Dispensa:** O Cebraspe inverte: diz que comprar obra de arte rara é caso de dispensa de licitação. **Gabarito: ERRADO.** Aquisição ou restauração de obra de arte e objeto histórico de autenticidade certificada é caso expresso de **Inexigibilidade** de licitação (art. 74, IV).
- **Critério de Julgamento no Pregão:** Dizer que o pregão pode adotar o critério de julgamento de "melhor técnica" ou "técnica e preço". **Gabarito: ERRADO.** O pregão admite exclusivamente os critérios de **menor preço** ou **maior desconto**.

---

### 📚 5. Fundamentação Doutrinária e Referências Bibliográficas
- **BRASIL.** *Lei Federal nº 14.133, de 1º de abril de 2021*. Lei de Licitações e Contratos Administrativos.
- **JUSTEN FILHO, Marçal.** *Comentários à Lei de Licitações e Contratações Administrativas: Lei 14.133/2021*. 2. ed. São Paulo: Thomson Reuters Brasil, 2023. (A bíblia de licitações no direito brasileiro).
- **NIEBUHR, Joel de Menezes.** *Licitação Pública e Contrato Administrativo*. 5. ed. Belo Horizonte: Fórum, 2022.
- **DI PIETRO, Maria Sylvia Zanella.** *Direito Administrativo*. 36. ed. Rio de Janeiro: Forense, 2023. (Capítulo de Licitações e Contratos).
- **CÂMARA DOS DEPUTADOS.** *Regulamento de Licitações e Contratos da Câmara dos Deputados segundo a Lei 14.133/2021*. Brasília: Diretoria-Geral, 2023."""
}

def aplicar_lote5a():
    print("Iniciando injeção didática do Lote 5A (M10 e M11: 17 Submódulos)...")
    sucessos = 0
    for sub_id, texto_didatico in TEXTOS_DIDATICOS.items():
        caminhos = [
            f"src/content/modules/m10-legislativo/{sub_id}.ts",
            f"src/content/modules/m11-direito-administrativo/{sub_id}.ts",
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

    print(f"\nFinalizado Lote 5A: {sucessos}/{len(TEXTOS_DIDATICOS)} submódulos atualizados com sucesso.")

if __name__ == "__main__":
    aplicar_lote5a()

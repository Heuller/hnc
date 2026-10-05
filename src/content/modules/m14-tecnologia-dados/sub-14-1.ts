import type { ModuloFilho } from '../../../domain/types';

export const submodulo141: ModuloFilho = {
  id: 'sub-14-1',
  numero: '14.1',
  titulo: 'MSOffice 365 e Ferramentas de Comunicação e Colaboração',
  descricaoCurta: 'Suíte Microsoft 365 (Word, Excel, PowerPoint e OneDrive), sincronização na nuvem e versionamento; ferramentas colaborativas corporativas: Microsoft Teams, Google Meet, webmail e clientes de correio eletrônico.',
  tempoEstimadoMinutos: 35,
  autoresChave: ['Microsoft Corporation', 'João Antonio Carvalho', 'CERT.br', 'Câmara dos Deputados (Ditec)'],
  alertasCebraspe: [
    'Microsoft Excel 365: operadores aritméticos fundamentais (+, -, *, /, ^ para exponenciação e % para percentual); referências relativas (A1), absolutas ($A$1) e mistas ($A1 ou A$1); funções estatísticas e de busca (PROCV, PROCX, SOMA, MÉDIA, SE, SOMASE e CONT.SE); tabelas dinâmicas conectadas a modelos semânticos.',
    'OneDrive e Nuvem: o recurso "Arquivos Sob Demanda" (Files On-Demand) permite visualizar e gerenciar arquivos na nuvem sem ocupar espaço de armazenamento no disco rígido local; o versionamento automático preserva o histórico de revisões para recuperação contra corrupção acidental.',
    'Microsoft Word 365: controle de alterações (Track Changes), comentários, estilos hierárquicos para sumários automatizados, quebras de seção (para numeração e orientação de página diferenciada) e mala direta.',
    'PowerPoint 365: slides mestres para padronização institucional de layout, transições e animações de elementos pré-atencionais, e modo de exibição do apresentador com anotações confidenciais.',
    'Ferramentas Colaborativas (Teams e Meet): canais públicos vs. privados, reuniões com criptografia em trânsito, gravação com transcrição automática por IA, integração de arquivos via SharePoint e boas práticas de etiqueta corporativa.',
  ],
  quadroComparativo: {
    titulo: 'Comparação de Aplicações da Suíte Microsoft 365 no Serviço Público',
    colunas: ['Aplicativo', 'Finalidade Primordial', 'Funcionalidades Críticas Cebraspe', 'Pegadinha Mapeada'],
    linhas: [
      ['Microsoft Word', 'Processamento e redação técnica de textos normativos', 'Controle de alterações, quebras de seção, mala direta e estilos', 'Dizer que quebra de página permite alterar a orientação para paisagem isoladamente (FALSO: exige quebra de seção).'],
      ['Microsoft Excel', 'Planilhas de cálculo, modelagem financeira e estatística', 'Fórmulas, referências relativas/absolutas ($), PROCV/PROCX e tabelas dinâmicas', 'Confundir PROCX (bidirecional, não exige ordenação prévia) com PROCV (apenas esquerda para direita).'],
      ['Microsoft PowerPoint', 'Comunicação visual e apresentações institucionais', 'Slide mestre, modos de exibição, animações e exportação em PDF/vídeo', 'Afirmar que a alteração de fonte no slide mestre não se propaga aos slides normais (FALSO: propaga-se a todos).'],
      ['Microsoft OneDrive', 'Armazenamento em nuvem e compartilhamento seguro', 'Arquivos sob demanda, versionamento automático e permissões de link', 'Dizer que arquivos sob demanda exigem download obrigatório prévio de todo o acervo (FALSO).'],
    ],
  },
  teoriaDensaMarkdown: `### 1. A Suíte Microsoft 365 no Ambiente Corporativo e Legislativo

O Microsoft 365 é a plataforma de produtividade em nuvem adotada pela administração pública federal e pela Câmara dos Deputados:

#### A. Microsoft Word 365
* **Estrutura de Documentos Técnicos e Legislativos:**
  * **Quebras de Seção vs. Quebras de Página:** Para alternar entre orientação retrato e paisagem, ou iniciar numeração de páginas distinta (ex.: algarismos romanos na introdução e arábicos no texto), é **obrigatório inserir quebra de seção** (*Próxima Página* ou *Contínua*).
  * **Controle de Alterações (*Track Changes*):** Ferramenta basilar na instrução de pareceres e proposições. Registra inclusões, exclusões e modificações de formatação realizadas por múltiplos revisores, permitindo aceitar ou rejeitar cada alteração.
  * **Estilos e Sumários Automáticos:** O uso dos estilos de título (*Título 1, Título 2*) é o único mecanismo que permite gerar sumários analíticos automáticos e navegáveis.

#### B. Microsoft Excel 365
* **Sintaxe e Prioridade de Operadores:**
  * Parênteses () $\rightarrow$ Exponenciação (^) $\rightarrow$ Multiplicação (*) e Divisão (/) $\rightarrow$ Adição (+) e Subtração (-).
* **Tipos de Referências de Células (*⚠️ Clássico Cebraspe*):**
  * **Relativa (\`A1\`):** Desloca-se dinamicamente ao copiar e colar ou arrastar pela alça de preenchimento.
  * **Absoluta (\`$A$1\`):** Trava completamente a coluna A e a linha 1 através do caractere cifrão ($), permanecendo fixa independentemente do destino da cópia.
  * **Mista (\`$A1\` ou \`A$1\`):** Trava apenas a coluna (\`$A1\`) ou apenas a linha (\`A$1\`).
* **Funções Essenciais:**
  * \`=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)\`
  * \`=PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [procurar_intervalo])\`: Busca apenas da esquerda para a direita.
  * \`=PROCX(pesquisa_valor; matriz_pesquisa; matriz_retorno)\`: Sucessora moderna do PROCV; opera em qualquer direção (esquerda/direita/cima/baixo), suporta correspondência exata por padrão e dispensa ordenação prévia.
  * \`=SOMASE\` e \`=CONT.SE\`: Cálculos condicionais baseados em critérios textuais ou numéricos.

#### C. Microsoft PowerPoint 365
* **Slide Mestre:** O modelo hierárquico superior que armazena as configurações de design, logotipo institucional, fontes e cores da apresentação. Alterações feitas no slide mestre refletem-se compulsoriamente em todos os slides subordinados.
* **Modo de Exibição do Apresentador:** Permite que o orador visualize em sua tela privada o cronômetro, as anotações do orador e o próximo slide, enquanto a plateia visualiza apenas o slide atual projetado.

#### D. Microsoft OneDrive e Sincronização em Nuvem
* **Arquivos Sob Demanda (*Files On-Demand*):** Três estados de sincronização de arquivos:
  1. *Apenas online (ícone de nuvem):* Não ocupa espaço no disco local; é baixado dinamicamente quando aberto.
  2. *Disponível localmente (ícone de círculo verde com visto):* Baixado para o dispositivo quando aberto; pode voltar a ser online se o espaço em disco for liberado.
  3. *Sempre disponível (círculo verde preenchido com visto branco):* Marcado explicitamente para download permanente, disponível mesmo offline.
* **Histórico de Versões:** Preserva o histórico de alterações de cada arquivo, viabilizando a restauração de versões anteriores em caso de edições equivocadas ou corrupção de dados.

---

### 2. Ferramentas de Comunicação e Colaboração

* **Microsoft Teams e Google Meet:**
  * Canais públicos (abertos aos membros da equipe) e canais privados (restritos a subgrupos específicos).
  * Recursos corporativos: compartilhamento de tela com controle remoto, legendas e transcrição simultânea automatizada, salas simultâneas (*breakout rooms*) e armazenamento de gravações no SharePoint/OneDrive com controle de acesso por privilégios mínimos.
* **Correio Eletrônico e Clientes de E-mail (Outlook / Webmail):**
  * **Campos de Destinatários:** *Para* (destinatários principais), *Cc* (com cópia visível) e *Cco / Bcc* (com cópia oculta — os demais destinatários não enxergam os endereços constantes neste campo, protegendo a privacidade em comunicações em massa).
  * **Protocolos de E-mail:**
    * **SMTP (Simple Mail Transfer Protocol - porta 587 com TLS):** Protocolo para *envio* de mensagens.
    * **POP3 (Post Office Protocol - porta 995 com SSL):** Baixa as mensagens para a máquina local e tradicionalmente as apaga do servidor.
    * **IMAP (Internet Message Access Protocol - porta 993 com SSL):** Mantém a sincronização bidirecional em tempo real entre o cliente e o servidor de e-mail, refletindo pastas, leituras e exclusões em todos os dispositivos.`,
  checkpoints: [
    {
      id: 'cp-14-1-1',
      pergunta: 'Micro-Checkpoint 1: Microsoft Excel - Referências e PROCX',
      item: 'No Microsoft Excel 365, a função PROCX permite localizar dados tanto à direita quanto à esquerda da coluna de pesquisa, diferentemente da função PROCV tradicional, que restringe a busca da esquerda para a direita.',
      gabarito: 'C',
      justificativa: 'Correto! Conforme a documentação oficial da Microsoft (2022), a função PROCX supera a limitação unidirecional do PROCV, permitindo retornos em qualquer sentido matricial.',
    },
    {
      id: 'cp-14-1-2',
      pergunta: 'Micro-Checkpoint 2: OneDrive e Arquivos Sob Demanda',
      item: 'O recurso de Arquivos Sob Demanda do Microsoft OneDrive exige que todo o conteúdo armazenado na nuvem seja compulsoriamente baixado para o disco rígido local do usuário para que os arquivos possam ser listados no Explorador de Arquivos.',
      gabarito: 'E',
      justificativa: 'Errado! Segundo a Microsoft (2022), o recurso Arquivos Sob Demanda lista os metadados dos arquivos sem consumir espaço local no disco; o download só ocorre quando o usuário solicita a abertura do arquivo.',
    },
    {
      id: 'cp-14-1-3',
      pergunta: 'Micro-Checkpoint 3: Microsoft Word - Quebras de Seção',
      item: 'No Microsoft Word 365, a alteração da orientação de página de retrato para paisagem em apenas uma página intermediária do documento exige a inserção de quebras de seção no início e no término da referida página.',
      gabarito: 'C',
      justificativa: 'Certo! Conforme documentação de suporte do Microsoft Word (Carvalho, 2022), formatações de página distintas (orientação, margens e numeração) exigem seções independentes delimitadas por quebras de seção.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-14-1-1',
        periodo: '1989 / 1995',
        disciplina: 'Suíte Office',
        focoPrincipal: 'Lançamento do pacote Microsoft Office integrando Word, Excel e PowerPoint',
        figuraChave: 'Microsoft Corporation',
      },
      {
        id: 'tl-14-1-2',
        periodo: '2011 / 2020',
        disciplina: 'Nuvem e Colaboração',
        focoPrincipal: 'Evolução do Office para a nuvem (Office 365 / Microsoft 365) e consolidação do Microsoft Teams',
        figuraChave: 'Satya Nadella / Microsoft',
      },
    ],
    autores: [
      {
        id: 'aut-14-1-1',
        nome: 'João Antonio Carvalho',
        ano: 2022,
        obraPrincipal: 'Informática para Concursos Públicos (Padrão Cebraspe)',
        ideiaChave: 'Operadores, funções avançadas do Excel, quebras de seção do Word e protocolos de correio (SMTP/IMAP).',
        chipPegadinha: 'SMTP envia; POP3 e IMAP recebem/sincronizam.',
      },
      {
        id: 'aut-14-1-2',
        nome: 'Satya Nadella & Microsoft Architecture Team',
        ano: 2022,
        obraPrincipal: 'Arquitetura e Recursos do Microsoft 365 Enterprise',
        ideiaChave: 'Arquivos sob demanda no OneDrive, versionamento contínuo e sincronização de dados no Teams.',
        chipPegadinha: 'Arquivos sob demanda mantêm o catálogo visível sem ocupar espaço local.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-14-1-1',
        afirmacao: 'O protocolo SMTP é utilizado pelos clientes de correio eletrônico tanto para o envio de mensagens para servidores remotos quanto para a sincronização de pastas de mensagens recebidas na máquina do usuário.',
        gabarito: 'E',
        porQue: 'O SMTP atua exclusivamente no ENVIO (Simple Mail Transfer). O recebimento e sincronização cabem ao IMAP ou POP3.',
      },
      {
        id: 'peg-14-1-2',
        afirmacao: 'Ao inserir um endereço no campo Cco (Cópia Oculta) de uma mensagem de e-mail, os destinatários listados no campo Para conseguirão identificar quem recebeu a cópia caso utilizem o recurso Responder a Todos.',
        gabarito: 'E',
        porQue: 'Os endereços em Cco são estritamente ocultos; nenhum destinatário dos campos Para ou Cc tem conhecimento de sua existência.',
      },
    ],
  },
};

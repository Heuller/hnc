import type { ModuloFilho } from '../../../domain/types';

export const submodulo142: ModuloFilho = {
  id: 'sub-14-2',
  numero: '14.2',
  titulo: 'Redes de Computadores, Internet/Intranet e Segurança da Informação',
  descricaoCurta: 'Arquitetura TCP/IP, modelos de rede e navegação web; engenharia social, ameaças cibernéticas (malware, ransomware, phishing e pharming); mecanismos de proteção (firewall, antivírus, criptografia, MFA) e políticas de backup corporativo.',
  tempoEstimadoMinutos: 40,
  autoresChave: ['Andrew Tanenbaum', 'William Stallings', 'CERT.br / NIC.br', 'NIST (SP 800-61 / 800-145)'],
  alertasCebraspe: [
    'Internet vs. Intranet vs. Extranet: a Intranet utiliza exatamente a mesma pilha de protocolos e tecnologias da Internet (TCP/IP, HTTP, DNS), diferenciando-se unicamente pelo escopo de acesso (restrito aos colaboradores da organização). A Extranet representa a extensão segura da intranet para parceiros ou usuários externos autorizados.',
    'Protocolos de Rede e Portas Críticas: DNS (porta 53 UDP/TCP - resolução de nomes em IPs); DHCP (portas 67/68 UDP - atribuição dinâmica de IPs); HTTP (porta 80 TCP) vs. HTTPS (porta 443 TCP com TLS/SSL); SSH (porta 22 TCP) vs. Telnet (porta 23 - tráfego em texto claro inseguro).',
    'Classificação de Pragas Virtuais (Malware): Vírus necessita de hospedeiro e execução explícita pelo usuário para se propagar; Worm propaga-se de forma autônoma pelas redes explorando vulnerabilidades sem precisar de hospedeiro; Ransomware sequestra dados por criptografia simétrica/assimétrica exigindo resgate; Cavalo de Troia (Trojan) disfarça-se de programa legítimo para abrir portas dos fundos (backdoors).',
    'Ataques Cibernéticos e Engenharia Social: Phishing visa induzir o usuário a entregar credenciais por e-mails ou mensagens falsas; Pharming adultera a resolução de nomes (tabela hosts local ou envenenamento de cache DNS - DNS Cache Poisoning) redirecionando o tráfego para sites espúrios mesmo quando a URL digitada estiver correta.',
    'Tipos de Backup e Regra 3-2-1: Backup Completo (cópia total de todos os arquivos; restauração mais rápida com apenas 1 conjunto); Backup Diferencial (copia arquivos alterados desde o último backup completo; restauração exige o completo + o último diferencial); Backup Incremental (copia arquivos alterados desde o último backup completo ou incremental; restauração mais demorada, exigindo o completo + todos os incrementais intermediários na ordem). A regra 3-2-1 exige 3 cópias em 2 mídias diferentes com 1 cópia externa e offline (air-gapped) para imunidade a ransomware.',
  ],
  quadroComparativo: {
    titulo: 'Comparação Crítica entre Modalidades de Backup Corporativo',
    colunas: ['Critério', 'Backup Completo (Full)', 'Backup Diferencial', 'Backup Incremental'],
    linhas: [
      ['O que copia?', 'Todos os dados selecionados, marcando o atributo de arquivamento', 'Dados alterados desde o ÚLTIMO backup COMPLETO', 'Dados alterados desde o ÚLTIMO backup (seja completo ou incremental)'],
      ['Tempo de Execução da Cópia', 'Mais lento (maior consumo de banda e janela de backup)', 'Moderado (cresce progressivamente a cada dia)', 'Mais rápido (copia apenas a fração diária de alterações)'],
      ['Espaço em Disco Consumido', 'Máximo', 'Intermediário cumulativo', 'Mínimo'],
      ['Processo de Restauração', 'Mais rápido: 1 única fita/volume (apenas o backup completo)', 'Intermediário: exige o último Completo + o último Diferencial (2 conjuntos)', 'Mais complexo: exige o último Completo + TODOS os incrementais em sequência até a data almejada'],
      ['Altera Atributo de Arquivo?', 'Sim (desmarca/limpa o bit de arquivo)', 'Não (mantém o bit para continuar acumulando)', 'Sim (desmarca/limpa o bit após salvar o arquivo)'],
    ],
  },
  teoriaDensaMarkdown: `### 1. Fundamentos de Redes de Computadores e Arquitetura TCP/IP

#### A. Topologias e Escopos Geográficos de Rede
* **Classificação por Abrangência:**
  * **PAN (Personal Area Network):** Alcance individual em curta distância (ex.: Bluetooth, NFC).
  * **LAN (Local Area Network):** Rede local restrita a uma sala, prédio ou campus universitário/legislativo (Ethernet IEEE 802.3, Wi-Fi IEEE 802.11).
  * **MAN (Metropolitan Area Network):** Conexão entre unidades espalhadas em uma região metropolitana (ex.: anel de fibra óptica interligando ministérios em Brasília).
  * **WAN (Wide Area Network):** Rede de longa distância com amplitude geográfica nacional ou global (a Internet é a WAN primordial).
* **Internet vs. Intranet vs. Extranet:**
  * **Intranet:** Rede corporativa privada que opera **rigorosamente sobre a mesma pilha de protocolos TCP/IP e tecnologias da Internet pública** (servidores web HTTP/HTTPS, correio, FTP, DNS), mas cujo perímetro de acesso é restrito e protegido por autenticação e firewalls aos servidores e funcionários da organização.
  * **Extranet:** Extensão controlada e autenticada da intranet para acesso externo por partes autorizadas (fornecedores, outros órgãos públicos parceiros, cidadãos credenciados).

#### B. Pilha de Protocolos TCP/IP e Portas Padronizadas
* **Camada de Aplicação:**
  * **DNS (Domain Name System - porta 53 UDP/TCP):** Resolve nomes de domínio amigáveis (ex.: \`camara.leg.br\`) em endereços IP roteáveis.
  * **DHCP (Dynamic Host Configuration Protocol - portas 67/68 UDP):** Configura dinamicamente parâmetros de rede (IP, máscara de sub-rede, gateway padrão e servidores DNS) para hosts conectados.
  * **HTTP (porta 80 TCP) e HTTPS (porta 443 TCP):** Protocolo de transferência de hipertexto, com criptografia em trânsito TLS/SSL no HTTPS.
  * **SSH (Secure Shell - porta 22 TCP):** Acesso remoto seguro com autenticação criptografada por chaves públicas/privadas, substituindo o obsoleto Telnet (porta 23).
* **Camada de Transporte:**
  * **TCP (Transmission Control Protocol):** Orientado a conexão, confiável, garante entrega ordenada de pacotes com controle de fluxo e congestionamento através do *three-way handshake* (SYN $\rightarrow$ SYN-ACK $\rightarrow$ ACK).
  * **UDP (User Datagram Protocol):** Não orientado a conexão, sem confirmação de entrega (*best-effort*), de baixa latência e alta velocidade, ideal para streaming de vídeo, voz sobre IP (VoIP) e consultas DNS.
* **Camada de Rede / Internet:**
  * **IP (IPv4 e IPv6):** Roteamento e endereçamento lógico de pacotes. O IPv4 utiliza 32 bits (4 octetos decimais separados por pontos); o IPv6 utiliza 128 bits (8 grupos de 4 dígitos hexadecimais separados por dois-pontos).
  * **ICMP (Internet Control Message Protocol):** Mensagens de controle e diagnóstico de rede (utilizado pelas ferramentas \`ping\` e \`traceroute\`).

---

### 2. Ameaças Cibernéticas e Engenharia Social (Padrão CERT.br / Cebraspe)

#### A. Tipologia de Códigos Maliciosos (*Malware*)
* **Vírus:** Programa malicioso que **necessita de um hospedeiro** (arquivo executável, documento com macro) e de **execução explícita pelo usuário** para infectar novos arquivos e se propagar.
* **Worm (Verme):** Programa malicioso autônomo que **não necessita de hospedeiro nem de intervenção do usuário**; propaga-se de máquina em máquina explorando vulnerabilidades em serviços de rede abertos.
* **Ransomware:** Malware destrutivo que criptografa arquivos no armazenamento local e em unidades de rede compartilhadas, tornando-os inacessíveis, e exibe mensagem exigindo pagamento de resgate (frequentemente em criptomoedas).
  * *Ransomware Locker:* Bloqueia o acesso à interface do computador.
  * *Ransomware Crypto:* Criptografa o sistema de arquivos mantendo a chave privada sob posse do atacante.
* **Cavalo de Troia (*Trojan Horse*):** Programa que se apresenta como utilitário benigno ou jogo, mas que, ao ser instalado, executa ações maliciosas ocultas, frequentemente abrindo **Backdoors** (portas dos fundos) para acesso remoto do invasor.
* **Spyware:** Software espião projetado para monitorar e capturar atividades do sistema:
  * *Keylogger:* Registra todas as teclas digitadas no teclado físico.
  * *Screenlogger:* Captura capturas de tela das regiões onde o ponteiro do mouse é clicado (burlar teclados virtuais simples).
  * *Adware:* Exibe propagandas abusivas não solicitadas.
* **Bot e Botnet:** Programa que permite o controle remoto da máquina zumbi por um atacante (botmaster), formando redes massivas (*botnets*) empregadas em ataques de negação de serviço distribuída (**DDoS - Distributed Denial of Service**).

#### B. Engenharia Social e Ataques de Redirecionamento
* **Phishing:** Fraude eletrônica baseada em e-mails, SMS (*Smishing*) ou mensagens falsas de instituições confiáveis, contendo links capciosos para páginas clonadas com intuito de furtar credenciais bancárias e senhas.
* **Spear-Phishing:** Ataque de phishing altamente direcionado e personalizado contra um indivíduo ou departamento específico de um órgão público (ex.: setor financeiro da Câmara), utilizando dados prévios da vítima para maximizar a credibilidade.
* **Pharming (Envenenamento de Resolução de Nomes):** Ataque que compromete a resolução de nomes de domínio, alterando o arquivo local \`hosts\` do sistema operacional ou contaminando o cache de um servidor DNS (**DNS Cache Poisoning**). Como resultado, o usuário digita a URL oficial correta no navegador, mas é direcionado transparentemente para o endereço IP do servidor fraudulento controlado pelo criminoso.

---

### 3. Mecanismos de Proteção, Criptografia e Governança de Backup

#### A. Ferramentas e Mecanismos de Segurança
* **Firewall:** Dispositivo ou software que atua na fronteira da rede ou no host (*host-based firewall*), inspecionando o tráfego de entrada e saída com base em uma tabela de regras de segurança (endereço IP de origem/destino, porta e protocolo).
  * *Firewall Stateless:* Analisa pacotes isoladamente sem considerar o estado da conexão.
  * *Firewall Stateful (com estado):* Monitora o contexto e o fluxo das conexões ativas, permitindo respostas legítimas a requisições internas iniciadas pelo host.
  * *Next-Generation Firewall (NGFW):* Inspeciona a camada de aplicação (Layer 7), detecta assinaturas de ataques em profundidade (DPI - Deep Packet Inspection) e integra sistemas de prevenção de intrusão (IPS).
* **Antivírus e Mecanismos de Detecção:**
  * *Assinatura:* Compara hash e padrões binários conhecidos com uma base de dados previamente catalogada (ineficaz contra ameaças de dia zero / *zero-day*).
  * *Heurística:* Analisa estruturas e instruções potencialmente suspeitas no código sem necessitar de assinatura prévia.
  * *Comportamental / Sandbox:* Executa o programa em ambiente virtual isolado para observar ações em tempo real (ex.: tentativas de modificar o registro do sistema ou criptografar arquivos em massa).
* **Autenticação Multifator (MFA - Multi-Factor Authentication):**
  * Exige ao menos dois fatores distintos de categorias independentes:
    1. *O que você sabe:* Senha, PIN, frase secreta.
    2. *O que você tem:* Token físico, aplicativo autenticador OTP (TOTP), chave FIDO2/U2F, certificado digital em cartão/token.
    3. *O que você é:* Biometria (impressão digital, reconhecimento facial, íris).
    *(Nota: Inserir duas senhas ou senha + pergunta de segurança constitui apenas fator único repetido, e não MFA).*

#### B. Estratégias e Procedimentos de Backup Corporativo
* **Janela e Tipos de Backup:**
  * **Backup Completo:** Cópia integral do acervo de dados. A restauração requer apenas o último volume completo.
  * **Backup Diferencial:** Cópia dos arquivos alterados desde o último backup completo. Não desmarca o bit de arquivo. A restauração requer o último backup completo + o último backup diferencial.
  * **Backup Incremental:** Cópia apenas dos arquivos alterados desde o último backup qualquer (completo ou incremental anterior). Desmarca o bit de arquivo. A restauração requer o último backup completo + todos os backups incrementais subsequentes na sequência exata.
* **A Regra 3-2-1 de Resiliência de Dados:**
  * Manter no mínimo **3 cópias** dos dados fundamentais (1 primária de produção + 2 backups).
  * Armazenar em **2 tipos de mídias físicas diferentes** (ex.: storage em disco SAN/NAS e fita magnética LTO ou nuvem).
  * Manter **1 cópia fora da organização (off-site)** e fisicamente isolada da rede corporativa (**air-gapped** / offline), garantindo recuperação garantida em catástrofes físicas ou incidentes graves de ransomware que propagam pela rede.`,
  checkpoints: [
    {
      id: 'cp-14-2-1',
      pergunta: 'Micro-Checkpoint 1: Segurança da Informação - Phishing vs. Pharming',
      item: 'No ataque de pharming, o usuário é induzido por um e-mail fraudulento a clicar em um link enganoso; diferentemente do phishing, no qual a tabela de resolução de nomes (DNS) é corrompida para redirecionar o tráfego mesmo quando o endereço correto é digitado.',
      gabarito: 'E',
      justificativa: 'Errado! Segundo as diretrizes do CERT.br (2021) e Stallings (2018), os conceitos foram invertidos. O phishing baseia-se na indução humana por mensagens capciosas (engenharia social), enquanto o pharming compromete a resolução de nomes (DNS ou hosts) redirecionando o tráfego tecnicamente mesmo com a digitação do endereço correto.',
    },
    {
      id: 'cp-14-2-2',
      pergunta: 'Micro-Checkpoint 2: Procedimentos de Backup - Restauração Diferencial vs. Incremental',
      item: 'Em uma política de segurança em que foi realizado um backup completo no domingo e backups diários até quinta-feira, caso o sistema falhe na sexta-feira pela manhã, a restauração baseada em backups diferenciais exigirá unicamente a mídia do domingo e a mídia da quinta-feira.',
      gabarito: 'C',
      justificativa: 'Certo! Conforme as diretrizes de continuidade do NIST SP 800-61 e Stallings (2018), o backup diferencial armazena cumulativamente todas as alterações ocorridas desde o último completo. Logo, a recuperação total exige apenas o backup completo (domingo) e o mais recente backup diferencial (quinta-feira).',
    },
    {
      id: 'cp-14-2-3',
      pergunta: 'Micro-Checkpoint 3: Malware - Características do Worm',
      item: 'Diferentemente dos vírus de computador convencionais, que dependem da execução de um arquivo hospedeiro previamente contaminado para serem ativados, os worms têm a capacidade de se propagar automaticamente por meio de redes de computadores, explorando vulnerabilidades existentes no sistema sem a necessidade de intervenção direta do usuário.',
      gabarito: 'C',
      justificativa: 'Certo! Conforme conceituado por Andrew Tanenbaum (2021) e pelo CERT.br, o worm é autônomo, não necessita de hospedeiro e propaga-se de máquina em máquina explorando falhas e vulnerabilidades de serviços de rede.',
    },
  ],
  mnemonicos: {
    timeline: [
      {
        id: 'tl-14-2-1',
        periodo: '1983 / 1988',
        disciplina: 'Redes e Segurança',
        focoPrincipal: 'Migração oficial da ARPANET para o protocolo TCP/IP e eclosão do Morris Worm na Internet',
        figuraChave: 'Vinton Cerf / Robert Tappan Morris',
      },
      {
        id: 'tl-14-2-2',
        periodo: '2017 / Presente',
        disciplina: 'Cibersegurança Corporativa',
        focoPrincipal: 'Ataques globais de ransomware (WannaCry, NotPetya) e consolidação da regra 3-2-1 com backup air-gapped',
        figuraChave: 'CERT.br / NIST',
      },
    ],
    autores: [
      {
        id: 'aut-14-2-1',
        nome: 'William Stallings',
        ano: 2018,
        obraPrincipal: 'Criptografia e Segurança de Redes: Princípios e Práticas',
        ideiaChave: 'Mecanismos de autenticação multifator, propriedades da segurança (CIDAL) e defesas em profundidade.',
        chipPegadinha: 'MFA exige categorias distintas (saber, ter, ser).',
      },
      {
        id: 'aut-14-2-2',
        nome: 'Andrew Tanenbaum',
        ano: 2021,
        obraPrincipal: 'Redes de Computadores (6ª Ed.)',
        ideiaChave: 'Camadas de transporte (TCP orientado vs UDP veloz), resolução DNS e arquitetura de intranet.',
        chipPegadinha: 'Intranet usa a mesmíssima pilha TCP/IP da Internet.',
      },
    ],
    pegadinhas: [
      {
        id: 'peg-14-2-1',
        afirmacao: 'A intranet de um órgão público legislativo opera com protocolos proprietários e fechados, sendo tecnicamente incompatível com os protocolos abertos TCP/IP utilizados na Internet mundial.',
        gabarito: 'E',
        porQue: 'A intranet utiliza EXATAMENTE os mesmos protocolos e serviços da Internet (TCP/IP, HTTP/HTTPS, DNS), restringindo apenas o perímetro de acesso por motivos de segurança.',
      },
      {
        id: 'peg-14-2-2',
        afirmacao: 'Para restaurar um sistema a partir de uma estratégia de backup incremental, basta disponibilizar o último volume incremental gerado, o qual já incorpora todos os estados anteriores.',
        gabarito: 'E',
        porQue: 'O incremental só armazena as alterações do dia. Para restaurar, é OBRIGATÓRIO o backup completo + TODOS os incrementais em sequência.',
      },
    ],
  },
};

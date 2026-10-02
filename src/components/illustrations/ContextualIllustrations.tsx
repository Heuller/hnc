import React from 'react';

interface IllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  role?: string;
  ariaLabel?: string;
}

/**
 * Ilustrações contextuais estilo "ex-libris / gravura editorial"
 * Traço 1.5px, duotom currentColor / variáveis de tema, cantos suaves.
 */

// Ilustração de Login: Biblioteca Legislativa Solene e Gabinete de Estudo
export const IllustrationLogin: React.FC<IllustrationProps> = ({
  className = '',
  width = '100%',
  height = '100%',
  color = 'currentColor',
  ariaLabel = 'Gravura da Biblioteca e Gabinete de Estudos',
  ...props
}) => (
  <svg
    viewBox="0 0 400 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Arco clássico e frontispício da biblioteca */}
    <path
      d="M40 300V120C40 60 110 30 200 30C290 30 360 60 360 120V300"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.3"
    />
    <path
      d="M55 300V125C55 72 120 45 200 45C280 45 345 72 345 125V300"
      stroke={color}
      strokeWidth="1"
      strokeDasharray="4 2"
      opacity="0.25"
    />

    {/* Estante de livros monumental ao fundo */}
    <rect x="70" y="90" width="260" height="150" rx="3" stroke={color} strokeWidth="1.4" opacity="0.4" />
    <line x1="70" y1="140" x2="330" y2="140" stroke={color} strokeWidth="1.2" opacity="0.4" />
    <line x1="70" y1="190" x2="330" y2="190" stroke={color} strokeWidth="1.2" opacity="0.4" />

    {/* Livros alinhados na estante */}
    {/* Prateleira 1 */}
    <path d="M80 140V105H92V140M92 140V102H106V140M106 140V108H122V140M125 140L135 106L148 110L138 140" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <path d="M260 140V104H276V140M276 140V106H292V140M292 140V103H304V140M304 140V107H320V140" stroke={color} strokeWidth="1.2" opacity="0.5" />

    {/* Prateleira 2 */}
    <path d="M80 190V152H96V190M96 190V155H110V190M113 190L125 154L137 157L125 190" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <path d="M250 190V150H265V190M265 190V154H280V190M283 190L294 153L307 157L296 190M308 190V151H320V190" stroke={color} strokeWidth="1.2" opacity="0.5" />

    {/* Mesa de estudo em primeiro plano */}
    <rect x="50" y="240" width="300" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <line x1="80" y1="252" x2="80" y2="300" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="320" y1="252" x2="320" y2="300" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="60" y1="300" x2="340" y2="300" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

    {/* Luminária clássica de banqueiro/biblioteca (verde clássica em linha) */}
    <path d="M130 240V175C130 170 135 165 145 165H165" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M150 162C150 156 180 156 180 162L185 174H145L150 162Z" stroke={color} strokeWidth="1.4" fill="currentColor" fillOpacity="0.12" />
    {/* Feixe sutil de luz da luminária */}
    <path d="M145 175L120 240H225L185 175Z" fill="currentColor" fillOpacity="0.03" />

    {/* Pilha de livros e manuscrito aberto na mesa */}
    <rect x="220" y="232" width="60" height="8" rx="1" stroke={color} strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
    <rect x="224" y="224" width="52" height="8" rx="1" stroke={color} strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
    <rect x="228" y="217" width="44" height="7" rx="1" stroke={color} strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />

    {/* Livro de estudo central aberto */}
    <path
      d="M175 238V212C175 212 165 208 145 208C130 208 120 212 120 212V238C120 238 135 234 145 234C160 234 175 238 175 238Z"
      stroke={color}
      strokeWidth="1.4"
      fill="currentColor"
      fillOpacity="0.1"
      strokeLinejoin="round"
    />
    <path
      d="M175 238V212C175 212 185 208 205 208C220 208 230 212 230 212V238C230 238 215 234 205 234C190 234 175 238 175 238Z"
      stroke={color}
      strokeWidth="1.4"
      fill="currentColor"
      fillOpacity="0.1"
      strokeLinejoin="round"
    />
    {/* Tinteiro e pena */}
    <path d="M102 235L106 239H98L102 235Z" stroke={color} strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
    <path d="M102 235C108 220 115 212 120 205" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

// Ilustração de Portal de Revisão (Arco Monumental e Chave de Passagem)
export const IllustrationPortal: React.FC<IllustrationProps> = ({
  className = '',
  width = 160,
  height = 120,
  color = 'currentColor',
  ariaLabel = 'Portal de Revisão Cumulativa',
  ...props
}) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Base solene */}
    <rect x="20" y="142" width="160" height="8" rx="1.5" stroke={color} strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    {/* Colunas do portal */}
    <rect x="35" y="45" width="18" height="97" rx="1" stroke={color} strokeWidth="1.4" fill="currentColor" fillOpacity="0.04" />
    <rect x="147" y="45" width="18" height="97" rx="1" stroke={color} strokeWidth="1.4" fill="currentColor" fillOpacity="0.04" />
    <line x1="44" y1="52" x2="44" y2="136" stroke={color} strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
    <line x1="156" y1="52" x2="156" y2="136" stroke={color} strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
    {/* Capitéis e arquitrave */}
    <rect x="31" y="40" width="26" height="5" rx="1" stroke={color} strokeWidth="1.4" />
    <rect x="143" y="40" width="26" height="5" rx="1" stroke={color} strokeWidth="1.4" />
    {/* Arco monumental com chave de abóbada */}
    <path
      d="M35 40C35 15 70 8 100 8C130 8 165 15 165 40"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M48 40C48 22 75 16 100 16C125 16 152 22 152 40"
      stroke={color}
      strokeWidth="1"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    {/* Chave de abóbada central */}
    <path d="M94 5L106 5L108 18L92 18Z" stroke={color} strokeWidth="1.4" fill="currentColor" fillOpacity="0.2" />
    {/* Emblema central de passagem / fechadura no portal */}
    <circle cx="100" cy="75" r="22" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" fill="currentColor" fillOpacity="0.05" />
    <circle cx="100" cy="75" r="17" stroke={color} strokeWidth="1.3" />
    {/* Símbolo de fechadura clássica */}
    <circle cx="100" cy="71" r="3.5" stroke={color} strokeWidth="1.3" fill={color} />
    <path d="M98 73L97 81H103L102 73Z" stroke={color} strokeWidth="1.3" fill={color} />
    {/* Raios solares de sabedoria / luz de aprovação */}
    <path d="M100 44V49M80 50L84 53M120 50L116 53M72 70L77 71M128 70L123 71" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Ilustração de Conclusão / Carimbo Editorial de Aprovação (85%+)
export const IllustrationConclusao: React.FC<IllustrationProps> = ({
  className = '',
  width = 140,
  height = 140,
  color = 'currentColor',
  ariaLabel = 'Selo de Conclusão e Domínio Aprovado',
  ...props
}) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Coroa de louros estilizada de gravura */}
    <path
      d="M38 122C24 100 24 64 45 42C56 31 70 24 80 24C90 24 104 31 115 42C136 64 136 100 122 122"
      stroke={color}
      strokeWidth="1.2"
      strokeDasharray="3 3"
      opacity="0.4"
    />
    {/* Folhas de louro em traço de gravura */}
    <path d="M36 110C28 106 28 98 34 94M30 92C23 86 25 78 33 76M31 72C27 65 31 58 39 58M43 54C42 46 48 40 57 42M61 38C62 31 71 27 79 31" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    <path d="M124 110C132 106 132 98 126 94M130 92C137 86 135 78 127 76M129 72C133 65 129 58 121 58M117 54C118 46 112 40 103 42M99 38C98 31 89 27 81 31" stroke={color} strokeWidth="1.3" strokeLinecap="round" />

    {/* Selo circular de cera / carimbo de chancelaria */}
    <circle cx="80" cy="80" r="48" stroke={color} strokeWidth="1.6" fill="currentColor" fillOpacity="0.06" />
    <circle cx="80" cy="80" r="43" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" />

    {/* Texto de orla do carimbo */}
    <circle cx="80" cy="80" r="32" stroke={color} strokeWidth="1.4" />

    {/* Emblema central de aprovação com check e estrela clássica */}
    <path
      d="M66 80L75 89L95 69"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M80 54V58M80 102V106M54 80H58M102 80H106" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

    {/* Fita de seda na base do selo */}
    <path
      d="M62 120L52 148L68 142L80 148L72 124"
      stroke={color}
      strokeWidth="1.3"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path
      d="M98 120L108 148L92 142L80 148L88 124"
      stroke={color}
      strokeWidth="1.3"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </svg>
);

// Ilustração de Bloqueio (Cadeado clássico de latão e portão cerrado)
export const IllustrationBloqueio: React.FC<IllustrationProps> = ({
  className = '',
  width = 120,
  height = 100,
  color = 'currentColor',
  ariaLabel = 'Conteúdo Bloqueado — Requer Conclusão Prévia',
  ...props
}) => (
  <svg
    viewBox="0 0 140 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Grade de ferro forjado ao fundo */}
    <line x1="20" y1="20" x2="20" y2="100" stroke={color} strokeWidth="1.4" opacity="0.25" strokeLinecap="round" />
    <line x1="45" y1="20" x2="45" y2="100" stroke={color} strokeWidth="1.4" opacity="0.25" strokeLinecap="round" />
    <line x1="70" y1="20" x2="70" y2="100" stroke={color} strokeWidth="1.4" opacity="0.25" strokeLinecap="round" />
    <line x1="95" y1="20" x2="95" y2="100" stroke={color} strokeWidth="1.4" opacity="0.25" strokeLinecap="round" />
    <line x1="120" y1="20" x2="120" y2="100" stroke={color} strokeWidth="1.4" opacity="0.25" strokeLinecap="round" />
    <line x1="15" y1="40" x2="125" y2="40" stroke={color} strokeWidth="1.4" opacity="0.25" />
    <line x1="15" y1="80" x2="125" y2="80" stroke={color} strokeWidth="1.4" opacity="0.25" />

    {/* Cadeado de latão imponente em primeiro plano */}
    {/* Alça do cadeado */}
    <path
      d="M50 56V40C50 28 60 20 70 20C80 20 90 28 90 40V56"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M57 56V42C57 33 63 27 70 27C77 27 83 33 83 42V56"
      stroke={color}
      strokeWidth="1.2"
      opacity="0.4"
    />
    {/* Corpo do cadeado */}
    <rect
      x="42"
      y="54"
      width="56"
      height="46"
      rx="6"
      stroke={color}
      strokeWidth="1.8"
      fill="currentColor"
      fillOpacity="0.08"
    />
    <rect x="46" y="58" width="48" height="38" rx="4" stroke={color} strokeWidth="1" opacity="0.3" />
    {/* Buraco de fechadura */}
    <circle cx="70" cy="72" r="4.5" stroke={color} strokeWidth="1.5" fill={color} />
    <path d="M68 74L66 84H74L72 74Z" stroke={color} strokeWidth="1.5" fill={color} />
  </svg>
);

// Ilustração de Estado Vazio (Estante limpa / Prateleira serena)
export const IllustrationVazio: React.FC<IllustrationProps> = ({
  className = '',
  width = 140,
  height = 100,
  color = 'currentColor',
  ariaLabel = 'Estado sereno sem pendências',
  ...props
}) => (
  <svg
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Prateleira horizontal de madeira */}
    <rect x="15" y="86" width="130" height="7" rx="1.5" stroke={color} strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <path d="M25 93L20 105M135 93L140 105" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

    {/* Um livro solitário descansando elegantemente em ângulo */}
    <path
      d="M62 86L78 40L96 46L80 86Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.06"
    />
    <line x1="68" y1="84" x2="84" y2="42" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <path d="M72 65L82 68" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

    {/* Xícara clássica de café/chá ao lado com vapor suave de tranquilidade */}
    <path d="M108 86V72H124V86" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M124 75C129 75 131 82 124 83" stroke={color} strokeWidth="1.3" />
    {/* Vapores suaves ondulados */}
    <path d="M113 67C112 62 116 58 114 54" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <path d="M119 65C118 60 122 56 120 51" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

    {/* Estrelas de serenidade / silêncio da biblioteca */}
    <path d="M42 40L44 44L48 45L45 48L46 52L42 50L38 52L39 48L36 45L40 44Z" stroke={color} strokeWidth="1" opacity="0.4" />
  </svg>
);

// Ilustração de Discursiva (Tinteiro, pena de caligrafia e lauda)
export const IllustrationDiscursiva: React.FC<IllustrationProps> = ({
  className = '',
  width = 120,
  height = 100,
  color = 'currentColor',
  ariaLabel = 'Oficina de Redação Discursiva',
  ...props
}) => (
  <svg
    viewBox="0 0 140 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width, height }}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Folha de lauda pautada */}
    <rect x="25" y="22" width="60" height="78" rx="2" stroke={color} strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
    {/* Linhas pautadas */}
    <line x1="33" y1="36" x2="77" y2="36" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="33" y1="46" x2="77" y2="46" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="33" y1="56" x2="77" y2="56" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="33" y1="66" x2="77" y2="66" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="33" y1="76" x2="65" y2="76" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

    {/* Tinteiro com base sextavada */}
    <path d="M96 90H124L120 78H100L96 90Z" stroke={color} strokeWidth="1.4" fill="currentColor" fillOpacity="0.1" />
    <rect x="104" y="74" width="12" height="4" rx="0.5" stroke={color} strokeWidth="1.3" />

    {/* Pena de caligrafia finamente inclinada saindo do tinteiro */}
    <path
      d="M110 74C108 50 85 24 75 14C78 28 84 48 88 64"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.08"
    />
    <line x1="110" y1="74" x2="75" y2="14" stroke={color} strokeWidth="1.1" opacity="0.6" />
  </svg>
);

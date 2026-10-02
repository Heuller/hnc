import React from 'react';

interface EmblemProps {
  size?: number;
  className?: string;
  color?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  role?: string;
  ariaLabel?: string;
}

/**
 * Traço padrão ex-libris / gravura
 * Linha 1.5px, cantos e extremidades arredondados, duotom tinta + módulo
 */

// M1: Livro aberto com colunas clássicas (Fundamentos e Teoria)
export const EmblemaM1: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 1: Livro clássico aberto com colunas',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    {/* Base e moldura de gravura circular */}
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Colunas clássicas de fundo */}
    <path d="M18 16V30M22 16V30" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M42 16V30M46 16V30" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
    <path d="M16 16H24M40 16H48" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Livro aberto em primeiro plano */}
    <path
      d="M32 46V25C32 25 27 21 16 21V42C27 42 32 46 32 46Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 46V25C32 25 37 21 48 21V42C37 42 32 46 32 46Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Linhas de texto gravado nas páginas */}
    <path d="M20 27H28M20 31H28M20 35H26" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    <path d="M36 27H44M36 31H44M36 35H42" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    {/* Marcador de página central */}
    <path d="M32 46V51L30 49.5L28 51V46" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// M2: Fichário com gavetas e fichas catalográficas
export const EmblemaM2: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 2: Fichário clássico com gavetas e fichas',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Ficha catalográfica inclinada saindo da gaveta */}
    <path
      d="M23 18L41 18L39 27L21 27Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M25 21H35M25 24H32" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    {/* Móvel / Gaveteiro de madeira de biblioteca */}
    <rect
      x="17"
      y="26"
      width="30"
      height="23"
      rx="2"
      fill="currentColor"
      fillOpacity="0.06"
      stroke={color}
      strokeWidth="1.5"
    />
    {/* Divisão de gavetas */}
    <line x1="17" y1="37" x2="47" y2="37" stroke={color} strokeWidth="1.3" />
    {/* Puxadores e porta-etiquetas clássicos */}
    <rect x="27" y="29.5" width="10" height="4.5" rx="1" stroke={color} strokeWidth="1.2" opacity="0.8" />
    <circle cx="32" cy="31.75" r="1" fill={color} />
    <rect x="27" y="40.5" width="10" height="4.5" rx="1" stroke={color} strokeWidth="1.2" opacity="0.8" />
    <circle cx="32" cy="42.75" r="1" fill={color} />
    {/* Pés do gaveteiro */}
    <path d="M20 49V52M44 49V52" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// M3: Estante com etiquetas e árvore de classes (CDD / CDU)
export const EmblemaM3: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 3: Estante e ramificação hierárquica de classes',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Árvore de classificação no topo */}
    <circle cx="32" cy="18" r="2.5" stroke={color} strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" />
    <path d="M32 20.5V24M22 27H42M22 27V29M42 27V29" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="22" cy="30" r="1.8" stroke={color} strokeWidth="1.2" />
    <circle cx="42" cy="30" r="1.8" stroke={color} strokeWidth="1.2" />
    {/* Estante de livros estruturada na base */}
    <rect x="17" y="34" width="30" height="15" rx="1" stroke={color} strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
    {/* Livros enfileirados */}
    <path d="M20 49V37H24V49M24 49V36H28V49M28 49V38H33V49M35 49L38 37L42 38L39 49M43 49V36H45V49" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

// M4: Lupa sobre rede de nós e grafos de informação
export const EmblemaM4: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 4: Lupa sobre rede de nós e tesauros',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Rede de nós do tesauro */}
    <circle cx="20" cy="22" r="2" stroke={color} strokeWidth="1.2" />
    <circle cx="38" cy="19" r="2" stroke={color} strokeWidth="1.2" />
    <circle cx="45" cy="30" r="2" stroke={color} strokeWidth="1.2" />
    <circle cx="18" cy="38" r="2" stroke={color} strokeWidth="1.2" />
    <path d="M22 22L36 20M39 21L44 28M21 24L28 30" stroke={color} strokeWidth="1" strokeDasharray="2 1.5" opacity="0.5" />
    {/* Lupa ótica detalhada */}
    <circle cx="31" cy="33" r="11" stroke={color} strokeWidth="1.6" fill="currentColor" fillOpacity="0.08" />
    <circle cx="31" cy="33" r="9" stroke={color} strokeWidth="1" opacity="0.4" />
    <path d="M28 28A5 5 0 0 1 34 28" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    {/* Cabo da lupa clássico */}
    <path d="M39 41L48 50" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M46 48L49 51" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// M5: Prancheta e balança de decisões/gestão
export const EmblemaM5: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 5: Prancheta e balança de gestão de acervos',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Coluna da balança */}
    <path d="M32 17V45M25 45H39" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Travessão da balança equilibrada */}
    <path d="M21 23H43" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="32" cy="23" r="1.5" fill={color} />
    {/* Prato esquerdo */}
    <path d="M21 23L16 33M21 23L26 33" stroke={color} strokeWidth="1" opacity="0.6" />
    <path d="M15 33C15 36 27 36 27 33H15Z" stroke={color} strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
    {/* Prato direito */}
    <path d="M43 23L38 33M43 23L48 33" stroke={color} strokeWidth="1" opacity="0.6" />
    <path d="M37 33C37 36 49 36 49 33H37Z" stroke={color} strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
    {/* Livros de referência abaixo */}
    <rect x="22" y="45" width="20" height="4" rx="0.5" stroke={color} strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

// M6: Livro com pixels e nós de dados (Tecnologia e Automação)
export const EmblemaM6: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 6: Livro digital, pixels e nós de servidor',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Rack de servidor/dados ao fundo */}
    <rect x="22" y="17" width="20" height="12" rx="1.5" stroke={color} strokeWidth="1.3" fill="currentColor" fillOpacity="0.08" />
    <line x1="22" y1="23" x2="42" y2="23" stroke={color} strokeWidth="1" />
    <circle cx="26" cy="20" r="0.9" fill={color} />
    <circle cx="29" cy="20" r="0.9" fill={color} />
    <circle cx="26" cy="26" r="0.9" fill={color} />
    {/* Linhas de conexão de dados */}
    <path d="M32 29V34M27 34H37" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    {/* Livro digital em primeiro plano */}
    <path
      d="M32 48V36C32 36 27 33 18 33V45C27 45 32 48 32 48Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.06"
    />
    <path
      d="M32 48V36C32 36 37 33 46 33V45C37 45 32 48 32 48Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.06"
    />
    {/* Pixels binários decorativos */}
    <rect x="21" y="38" width="2.5" height="2.5" fill={color} opacity="0.7" />
    <rect x="25" y="41" width="2.5" height="2.5" fill={color} opacity="0.4" />
    <rect x="40" y="38" width="2.5" height="2.5" fill={color} opacity="0.7" />
    <rect x="36" y="41" width="2.5" height="2.5" fill={color} opacity="0.4" />
  </svg>
);

// M7: Caixa de arquivo permanente, luvas e selo de preservação
export const EmblemaM7: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 7: Caixa de arquivo permanente e preservação',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Caixa de arquivo box arquivística */}
    <path
      d="M18 24L32 18L46 24V44L32 50L18 44V24Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.06"
    />
    <path d="M18 24L32 30L46 24" stroke={color} strokeWidth="1.3" />
    <path d="M32 30V50" stroke={color} strokeWidth="1.3" />
    {/* Furo clássico para manuseio da caixa */}
    <ellipse cx="32" cy="38" rx="2.5" ry="3.5" stroke={color} strokeWidth="1.2" fill="currentColor" fillOpacity="0.2" />
    {/* Selo lacrado no topo da tampa */}
    <circle cx="32" cy="24" r="2.5" fill={color} opacity="0.8" />
  </svg>
);

// M8: Régua, esquadro técnico e página normalizada (ABNT)
export const EmblemaM8: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 8: Instrumentos técnicos de normalização documentária',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Página A4 normalizada */}
    <rect x="22" y="17" width="20" height="26" rx="1.5" stroke={color} strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    <path d="M26 22H38M26 26H38M26 30H34" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    {/* Esquadro cruzando a página */}
    <path
      d="M17 48L37 48L17 28Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path d="M20 45L31 45L20 34Z" stroke={color} strokeWidth="1" opacity="0.5" />
    {/* Graduações da régua do esquadro */}
    <path d="M22 48V46M25 48V46M28 48V46M31 48V46M34 48V46" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// M9: Periódico científico e gráfico de dispersão/barras (Bibliometria)
export const EmblemaM9: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 9: Periódico científico e métricas de informação',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Fascículo ou periódico aberto ao fundo */}
    <rect x="18" y="19" width="28" height="20" rx="1.5" stroke={color} strokeWidth="1.4" fill="currentColor" fillOpacity="0.06" />
    <line x1="32" y1="19" x2="32" y2="39" stroke={color} strokeWidth="1" opacity="0.5" />
    {/* Gráfico de barras ascendente na base */}
    <path d="M18 47H46" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <rect x="22" y="40" width="3.5" height="7" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.3" />
    <rect x="28" y="34" width="3.5" height="13" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.5" />
    <rect x="34" y="29" width="3.5" height="18" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.7" />
    <rect x="40" y="24" width="3.5" height="23" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.9" />
    {/* Curva de Bradford / Lotka sobreposta */}
    <path d="M22 38C28 32 35 24 43 21" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 1.5" />
  </svg>
);

// M10: Pergaminho chancelado e selo normativo (Legislação e Ética)
export const EmblemaM10: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Módulo 10: Pergaminho chancelado e cânones normativos',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Pergaminho clássico enrolado nas bordas */}
    <path
      d="M21 18C18 18 18 21 21 21H43C46 21 46 18 43 18H21Z"
      stroke={color}
      strokeWidth="1.4"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M20 21V43C20 46 23 46 23 43M44 21V43C44 46 41 46 41 43"
      stroke={color}
      strokeWidth="1.4"
    />
    <path
      d="M23 43C23 46 20 46 20 43M41 43C41 46 44 46 44 43"
      stroke={color}
      strokeWidth="1.4"
    />
    <line x1="23" y1="43" x2="41" y2="43" stroke={color} strokeWidth="1.4" />
    {/* Linhas de lei / preceitos */}
    <path d="M26 26H38M26 30H38M26 34H33" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    {/* Selo chancelado com fita na parte inferior */}
    <circle cx="37" cy="40" r="4.5" stroke={color} strokeWidth="1.3" fill="currentColor" fillOpacity="0.25" />
    <path d="M35 44L33 49L37 47L41 49L39 44" stroke={color} strokeWidth="1.1" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// Macro-Bloco G: Ampulheta com pergaminho e chancela de aguardo de edital
export const EmblemaBlocoG: React.FC<EmblemProps> = ({
  size = 64,
  className = '',
  color = 'currentColor',
  ariaLabel = 'Emblema Conhecimentos Gerais: Ampulheta aguardando edital',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={props.role || 'img'}
    aria-label={ariaLabel}
    aria-hidden={props['aria-hidden']}
  >
    <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
    <circle cx="32" cy="32" r="27.5" stroke={color} strokeWidth="1.5" />
    {/* Ampulheta clássica com areia */}
    <path d="M22 20H42M22 44H42" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M24 20C24 28 30 32 32 32C34 32 40 28 40 20M24 44C24 36 30 32 32 32C34 32 40 36 40 44"
      stroke={color}
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.06"
    />
    <circle cx="32" cy="32" r="1.5" fill={color} />
    {/* Montículo de areia na base */}
    <path d="M28 44C28 41 36 41 36 44H28Z" fill={color} opacity="0.4" />
    {/* Pingo de areia caindo */}
    <circle cx="32" cy="36" r="0.8" fill={color} />
  </svg>
);

/**
 * Mapeador dinâmico de emblema por número de módulo
 */
export const ModuleEmblem: React.FC<{
  moduleNumber: number | string;
  size?: number;
  className?: string;
  color?: string;
}> = ({ moduleNumber, size = 64, className = '', color }) => {
  const num = typeof moduleNumber === 'string' ? parseInt(moduleNumber, 10) : moduleNumber;

  switch (num) {
    case 1:
      return <EmblemaM1 size={size} className={className} color={color} />;
    case 2:
      return <EmblemaM2 size={size} className={className} color={color} />;
    case 3:
      return <EmblemaM3 size={size} className={className} color={color} />;
    case 4:
      return <EmblemaM4 size={size} className={className} color={color} />;
    case 5:
      return <EmblemaM5 size={size} className={className} color={color} />;
    case 6:
      return <EmblemaM6 size={size} className={className} color={color} />;
    case 7:
      return <EmblemaM7 size={size} className={className} color={color} />;
    case 8:
      return <EmblemaM8 size={size} className={className} color={color} />;
    case 9:
      return <EmblemaM9 size={size} className={className} color={color} />;
    case 10:
      return <EmblemaM10 size={size} className={className} color={color} />;
    default:
      return <EmblemaBlocoG size={size} className={className} color={color} />;
  }
};

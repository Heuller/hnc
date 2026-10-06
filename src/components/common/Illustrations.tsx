import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number | string;
}

/**
 * Ilustração da Cúpula do Congresso Nacional e Colunas de Brasília.
 * Estilo traço fino editorial (gravura arquitetônica minimalista).
 */
export const CupulaCongressoIllustration: React.FC<IllustrationProps> = ({
  className = 'w-24 h-24 text-accent',
}) => (
  <svg
    viewBox="0 0 160 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Céu suave / base editorial */}
    <circle cx="80" cy="60" r="54" fill="currentColor" fillOpacity="0.05" />
    
    {/* Torres Gêmeas do Anexo I (Congresso) */}
    <rect x="73" y="24" width="6" height="66" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
    <rect x="81" y="24" width="6" height="66" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
    <rect x="75" y="44" width="10" height="2" fill="currentColor" fillOpacity="0.6" />
    <rect x="75" y="58" width="10" height="2" fill="currentColor" fillOpacity="0.6" />

    {/* Cúpula do Senado (convexa/fechada à esquerda) */}
    <path
      d="M42 90 C42 68, 66 68, 66 90 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />

    {/* Cúpula da Câmara dos Deputados (côncava/aberta voltada para o céu à direita) */}
    <path
      d="M94 72 C94 92, 118 92, 118 72 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />

    {/* Plataforma Monumental do Palácio */}
    <line x1="28" y1="90" x2="132" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Pilotis / Colunas de sustentação sutis */}
    <line x1="36" y1="90" x2="36" y2="96" stroke="currentColor" strokeWidth="1.5" />
    <line x1="56" y1="90" x2="56" y2="96" stroke="currentColor" strokeWidth="1.5" />
    <line x1="80" y1="90" x2="80" y2="96" stroke="currentColor" strokeWidth="1.5" />
    <line x1="104" y1="90" x2="104" y2="96" stroke="currentColor" strokeWidth="1.5" />
    <line x1="124" y1="90" x2="124" y2="96" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="96" x2="136" y2="96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Ex-Líbris e Livro Clássico da Biblioteca da Câmara.
 * Gravura editorial simbolizando erudição e patrimônio bibliográfico.
 */
export const ExLibrisCamaraIllustration: React.FC<IllustrationProps> = ({
  className = 'w-16 h-16 text-accent',
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Moldura circular heráldica */}
    <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.4" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.03" />

    {/* Livro Aberto com encadernação nobre */}
    <path
      d="M26 68 C36 64, 46 66, 50 70 C54 66, 64 64, 74 68 L74 38 C64 34, 54 36, 50 40 C46 36, 36 34, 26 38 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />
    {/* Lombada central */}
    <line x1="50" y1="40" x2="50" y2="70" stroke="currentColor" strokeWidth="1.5" />

    {/* Fita marcadora / Fitilho descendente */}
    <path
      d="M50 40 Q48 56, 54 74 L50 78 L46 74 Q48 60, 50 40"
      fill="currentColor"
      fillOpacity="0.4"
      stroke="currentColor"
      strokeWidth="1"
    />

    {/* Linhas de texto canônico estilizadas */}
    <line x1="32" y1="46" x2="44" y2="44" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="32" y1="52" x2="44" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="32" y1="58" x2="42" y2="56" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />

    <line x1="56" y1="44" x2="68" y2="46" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="56" y1="50" x2="68" y2="52" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="58" y1="56" x2="68" y2="58" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />

    {/* Monograma de Brasília / Ramos de louro no topo */}
    <path d="M46 26 C48 24, 52 24, 54 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Balança da Jurisprudência Cebraspe: 1 Erro Anula 1 Certo.
 * Simboliza o julgamento rigoroso de assertivas (C) e (E).
 */
export const BalancaCebraspeIllustration: React.FC<IllustrationProps> = ({
  className = 'w-16 h-16 text-amber-600',
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Pilar central da balança */}
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="18" r="4" fill="currentColor" />
    {/* Base da balança */}
    <path d="M36 82 L64 82 L58 78 L42 78 Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />

    {/* Braço horizontal equilibrado */}
    <line x1="22" y1="28" x2="78" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    {/* Prato Esquerdo - Assertiva CERTA (C) */}
    <line x1="22" y1="28" x2="16" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <line x1="22" y1="28" x2="32" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M14 50 Q24 58, 34 50 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <text x="24" y="47" fontSize="8" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="monospace">
      C
    </text>

    {/* Prato Direito - Assertiva ERRADA (E) */}
    <line x1="78" y1="28" x2="72" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <line x1="78" y1="28" x2="88" y2="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <path d="M70 50 Q80 58, 90 50 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <text x="80" y="47" fontSize="8" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="monospace">
      E
    </text>
  </svg>
);

/**
 * Ficha Bibliográfica Internacional de Otlet (7,5 x 12,5 cm).
 * Símbolo do rigor documental e recuperação da informação.
 */
export const FichaOtletIllustration: React.FC<IllustrationProps> = ({
  className = 'w-16 h-16 text-accent',
}) => (
  <svg
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Cartão de Ficha com proporção 7,5 x 12,5 */}
    <rect x="6" y="6" width="108" height="68" rx="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    
    {/* Furo central inferior padrão catálogo fichário */}
    <circle cx="60" cy="62" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="var(--surface, #fff)" />

    {/* Cabeçalho da ficha (Notação de Autor / CDU) */}
    <rect x="14" y="14" width="22" height="6" rx="1" fill="currentColor" fillOpacity="0.3" />
    <rect x="42" y="14" width="56" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />

    {/* Pauta horizontal suave */}
    <line x1="14" y1="26" x2="106" y2="26" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
    <line x1="14" y1="34" x2="106" y2="34" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
    <line x1="14" y1="42" x2="106" y2="42" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
    <line x1="14" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
  </svg>
);

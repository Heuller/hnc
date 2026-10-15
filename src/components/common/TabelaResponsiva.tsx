import React from 'react';
import {
  extractNodeText,
  extractTableDataFromChildren,
} from '../../utils/tableProcessors';

export interface TabelaResponsivaProps {
  /** Rótulos de cabeçalho das colunas (modo estruturado) */
  headers?: React.ReactNode[];
  /** Alias em português para headers */
  colunas?: string[];
  /** Linhas de dados (modo estruturado) */
  rows?: (string | React.ReactNode)[][];
  /** Alias em português para rows */
  linhas?: (string | React.ReactNode)[][];
  /** Título opcional da tabela/quadro */
  titulo?: string;
  /** Descrição ou subtítulo opcional */
  descricao?: string;
  /** Filhos JSX (caso usado como wrapper de table do markdown) */
  children?: React.ReactNode;
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * Renderiza o valor do Gabarito/Diagnóstico com destaque visual adequado
 */
function renderGabaritoBadge(content: React.ReactNode): React.ReactNode {
  const text = extractNodeText(content).trim().toUpperCase();

  if (text.includes('ERRADO')) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
        ERRADO
      </span>
    );
  }

  if (text.includes('CERTO') || text.includes('CORRETO')) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
        CERTO
      </span>
    );
  }

  return content;
}

/**
 * Componente TabelaResponsiva
 *
 * Implementa a diretriz D6 do Plano v3:
 * - Em telas >= 640px (Desktop/Tablet): Tabela tabular completa com cabeçalhos nowrap,
 *   espaçamento generoso e sem quebra feia de palavras (ex: 'GABARITO').
 * - Em telas < 640px (Mobile): Converte cada linha em um Cartão Empilhado (Key-Value Card),
 *   eliminando 100% da rolagem horizontal da página e prevenindo truncamentos.
 */
export const TabelaResponsiva: React.FC<TabelaResponsivaProps> = ({
  headers: propsHeaders,
  colunas,
  rows: propsRows,
  linhas,
  titulo,
  descricao,
  children,
  className = '',
  ...restProps
}) => {
  // Determina dados finais
  let finalHeaders: React.ReactNode[] = propsHeaders || colunas || [];
  let finalRows: (string | React.ReactNode)[][] = propsRows || linhas || [];

  // Se não foi fornecido via props, tenta extrair de children
  if (finalHeaders.length === 0 && finalRows.length === 0 && children) {
    const extracted = extractTableDataFromChildren(children);
    finalHeaders = extracted.headers;
    finalRows = extracted.rows;
  }

  // Se mesmo assim não houver linhas estruturadas, cai no renderizador tradicional com scroll seguro
  if (finalHeaders.length === 0 || finalRows.length === 0) {
    return (
      <div className={`my-5 w-full max-w-full ${className}`}>
        {titulo && (
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink mb-2">
            {titulo}
          </h4>
        )}
        <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-2xs scrollbar-thin">
          <table
            className="w-full text-left text-xs sm:text-sm border-collapse min-w-[320px]"
            {...restProps}
          >
            {children}
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-5 w-full max-w-full space-y-3 ${className}`}>
      {titulo && (
        <div className="border-b border-border pb-1.5 mb-2">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink">
            {titulo}
          </h4>
          {descricao && (
            <p className="text-xs text-ink-2 font-serif mt-0.5">{descricao}</p>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
       * VISUALIZAÇÃO AMPLA (>= 640px): Tabela Semântica Tradicional
       * Cabeçalhos com whitespace-nowrap para impedir quebra como 'GABARI TO'
       * ------------------------------------------------------------- */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-border bg-surface shadow-2xs scrollbar-thin">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
          <thead className="bg-surface-2 text-ink font-bold border-b border-border">
            <tr>
              {finalHeaders.map((head, idx) => {
                const headText = extractNodeText(head).trim();
                const isShort = headText.length <= 15;
                return (
                  <th
                    key={idx}
                    className={`p-3 text-ink font-bold border-r border-border last:border-r-0 text-xs sm:text-sm uppercase tracking-wider ${
                      isShort ? 'whitespace-nowrap' : ''
                    }`}
                  >
                    {head}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {finalRows.map((row, rIdx) => {
              const isEven = rIdx % 2 === 1;
              return (
                <tr
                  key={rIdx}
                  className={`transition-colors ${
                    isEven ? 'bg-surface-2/30 hover:bg-surface-2/60' : 'hover:bg-surface-2/40'
                  }`}
                >
                  {row.map((cell, cIdx) => {
                    const headerText = extractNodeText(finalHeaders[cIdx]).toLowerCase();
                    const isGabarito =
                      headerText.includes('gabarito') || headerText.includes('diagnóstico');

                    return (
                      <td
                        key={cIdx}
                        className="p-3 text-ink border-b border-border border-r last:border-r-0 align-top leading-relaxed text-xs sm:text-sm break-words"
                      >
                        {isGabarito ? renderGabaritoBadge(cell) : cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* -------------------------------------------------------------
       * VISUALIZAÇÃO ESTREITA (< 640px): CARTÕES EMPILHADOS
       * Elimina 100% da rolagem horizontal e quebra de palavras estreitas
       * ------------------------------------------------------------- */}
      <div
        className="sm:hidden space-y-3.5 w-full max-w-full"
        data-testid="tabela-responsiva-cards"
      >
        {finalRows.map((row, rIdx) => {
          const primaryHeader = finalHeaders[0];
          const primaryValue = row[0];
          const otherCells = row.slice(1);

          return (
            <div
              key={rIdx}
              className="rounded-xl border border-border bg-surface p-4 space-y-3 shadow-2xs transition-shadow hover:shadow-xs"
            >
              {/* Campo primário em destaque no topo do cartão */}
              <div className="border-b border-border/80 pb-2.5">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-accent block mb-1">
                  {primaryHeader}
                </span>
                <div className="text-xs sm:text-sm font-sans font-semibold text-ink leading-relaxed">
                  {primaryValue}
                </div>
              </div>

              {/* Demais campos rotulados por coluna */}
              <div className="space-y-2.5 pt-0.5">
                {otherCells.map((cell, idx) => {
                  const colIdx = idx + 1;
                  const headerName = finalHeaders[colIdx] || `Item ${colIdx + 1}`;
                  const headerText = extractNodeText(headerName).toLowerCase();
                  const isGabarito =
                    headerText.includes('gabarito') || headerText.includes('diagnóstico');

                  return (
                    <div key={colIdx} className="space-y-1">
                      <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-ink-2 block">
                        {headerName}
                      </span>
                      <div className="text-xs sm:text-sm text-ink leading-relaxed font-serif">
                        {isGabarito ? renderGabaritoBadge(cell) : cell}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

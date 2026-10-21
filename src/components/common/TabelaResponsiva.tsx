import React, { useState } from 'react';
import {
  extractNodeText,
  extractTableDataFromChildren,
} from '../../utils/tableProcessors';
import { Table as TableIcon, Layers, SlidersHorizontal } from 'lucide-react';

export interface QuadroComparativoData {
  titulo: string;
  colunas: string[];
  linhas: string[][];
}

export interface TabelaResponsivaProps {
  /** Dados estruturados no formato QuadroComparativoData (F-18 unificação) */
  quadro?: QuadroComparativoData;
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
 * Renderiza o valor do Gabarito/Diagnóstico com destaque visual adequado e contraste acessível
 */
function renderGabaritoBadge(content: React.ReactNode): React.ReactNode {
  const text = extractNodeText(content).trim().toUpperCase();

  if (text.includes('ERRADO')) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-err-soft text-err border border-err/30">
        <span className="w-1.5 h-1.5 rounded-full bg-err" />
        ERRADO
      </span>
    );
  }

  if (text.includes('CERTO') || text.includes('CORRETO')) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-ok-soft text-ok border border-ok/30">
        <span className="w-1.5 h-1.5 rounded-full bg-ok" />
        CERTO
      </span>
    );
  }

  return content;
}

/**
 * Componente Unificado TabelaResponsiva / TabelaComparativa (F-18 & Fase 3)
 *
 * Alto Contraste & Ergonomia:
 * - Em telas >= 768px (Desktop/Tablet): Tabela tabular semântica com cabeçalho fixo (sticky),
 *   zebrado de alto contraste (bg-surface-3/50), coluna de critério destacada e bordas nítidas.
 * - Em telas < 768px (Mobile): Converte cada linha em Cartões Empilhados ou Seletor de Facetas,
 *   com campos em pills de alto contraste, eliminando 100% da rolagem horizontal da página.
 */
export const TabelaResponsiva: React.FC<TabelaResponsivaProps> = ({
  quadro,
  headers: propsHeaders,
  colunas: propsColunas,
  rows: propsRows,
  linhas: propsLinhas,
  titulo: propsTitulo,
  descricao,
  children,
  className = '',
  ...restProps
}) => {
  // Mobile: Seletor por coluna ou empilhado
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(1);
  const [mobileMode, setMobileMode] = useState<'facetas' | 'empilhado'>('empilhado');

  // Determina dados finais a partir de quadro ou props diretas
  const finalTitulo = propsTitulo || quadro?.titulo;
  let finalHeaders: React.ReactNode[] = propsHeaders || propsColunas || quadro?.colunas || [];
  let finalRows: (string | React.ReactNode)[][] = propsRows || propsLinhas || quadro?.linhas || [];

  // Se não foi fornecido via props, tenta extrair de children (ex: react-markdown)
  if (finalHeaders.length === 0 && finalRows.length === 0 && children) {
    const extracted = extractTableDataFromChildren(children);
    finalHeaders = extracted.headers;
    finalRows = extracted.rows;
  }

  // Fallback caso não haja linhas estruturadas
  if (finalHeaders.length === 0 || finalRows.length === 0) {
    return (
      <div className={`my-6 w-full max-w-full ${className}`}>
        {finalTitulo && (
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink mb-2">
            {finalTitulo}
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

  const dataColumns = finalHeaders.slice(1);
  const hasMultipleDataColumns = dataColumns.length >= 2;

  return (
    <div className={`rounded-2xl border border-border bg-surface-3/30 dark:bg-surface-3/20 p-3.5 sm:p-5 space-y-4 my-6 w-full max-w-full @container ${className}`}>
      {/* Cabeçalho do Quadro */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-surface-3 dark:bg-surface-2 text-accent border border-border/60">
            <TableIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
          </div>
          <div>
            {finalTitulo && (
              <h4 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-ink m-0">
                {finalTitulo}
              </h4>
            )}
            {descricao && (
              <p className="text-xs text-ink-2 font-serif m-0 mt-0.5">{descricao}</p>
            )}
          </div>
        </div>

        {/* Alternador de Modo Mobile (< 768px): Facetas vs Empilhado (quando há 2+ colunas de dados) */}
        {hasMultipleDataColumns && (
          <div className="md:hidden flex items-center gap-1 bg-surface-3 dark:bg-surface-2 p-1 rounded-lg border border-border/80">
            <button
              type="button"
              onClick={() => setMobileMode('facetas')}
              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer min-h-[32px] ${
                mobileMode === 'facetas'
                  ? 'bg-surface text-ink font-bold shadow-2xs border border-border'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Por Coluna</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMode('empilhado')}
              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer min-h-[32px] ${
                mobileMode === 'empilhado'
                  ? 'bg-surface text-ink font-bold shadow-2xs border border-border'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Empilhado</span>
            </button>
          </div>
        )}
      </div>

      {/* -------------------------------------------------------------
       * VISUALIZAÇÃO AMPLA (>= 768px): TABELA SEMÂNTICA TRADICIONAL COM CABEÇALHO FIXO
       * Cabeçalhos com whitespace-nowrap para impedir quebra feia de termos
       * Zebrado nítido de alto contraste com bg-surface-3/50
       * ------------------------------------------------------------- */}
      <div className="hidden sm:block md:block overflow-x-auto rounded-xl border border-border bg-surface shadow-2xs scrollbar-thin">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
          <thead className="bg-surface-3 text-ink font-bold border-b-2 border-border sticky top-0 z-10 shadow-2xs">
            <tr>
              {finalHeaders.map((head, idx) => {
                const headText = extractNodeText(head).trim();
                const isShort = headText.length <= 15;
                return (
                  <th
                    key={idx}
                    className={`p-3 text-ink font-sans font-bold border-r border-border last:border-r-0 text-xs sm:text-sm uppercase tracking-wider ${
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
                    isEven ? 'bg-surface-3/50 dark:bg-surface-3/40 hover:bg-surface-3/70' : 'bg-surface hover:bg-surface-3/30'
                  }`}
                >
                  {row.map((cell, cIdx) => {
                    const headerText = extractNodeText(finalHeaders[cIdx]).toLowerCase();
                    const isGabarito =
                      headerText.includes('gabarito') || headerText.includes('diagnóstico');

                    return (
                      <td
                        key={cIdx}
                        className={`p-3 text-ink border-b border-border border-r last:border-r-0 align-top leading-relaxed text-xs sm:text-sm break-words ${
                          cIdx === 0
                            ? 'font-sans font-bold text-ink bg-surface-3/20 dark:bg-surface-3/15'
                            : 'font-serif text-ink'
                        }`}
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
       * VISUALIZAÇÃO ESTREITA (< 768px): CARTÕES EMPILHADOS OU FACETAS
       * 100% livre de rolagem horizontal em telas compactas (320px–390px)
       * Cores com alto contraste em modo escuro e claro
       * ------------------------------------------------------------- */}
      <div
        className="sm:hidden md:hidden space-y-3.5 w-full max-w-full"
        data-testid="tabela-responsiva-cards"
      >
        {mobileMode === 'facetas' && hasMultipleDataColumns ? (
          /* Modo Seletor por Coluna (Facetas) */
          <>
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-surface-3 dark:bg-surface-2 border border-border">
              {dataColumns.map((colNode, idx) => {
                const colIndex = idx + 1;
                const colName = extractNodeText(colNode);
                const isSelected = selectedColumnIndex === colIndex;
                return (
                  <button
                    key={colIndex}
                    type="button"
                    onClick={() => setSelectedColumnIndex(colIndex)}
                    className={`flex-1 min-w-[100px] text-center px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-[36px] ${
                      isSelected
                        ? 'bg-primary text-primary-text shadow-2xs'
                        : 'bg-transparent text-ink-2 hover:text-ink'
                    }`}
                  >
                    {colName}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3">
              {finalRows.map((row, rIdx) => {
                const criterio = row[0];
                const valor = row[selectedColumnIndex];
                return (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-xl border border-border bg-surface space-y-2 shadow-2xs"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent block font-sans">
                      {criterio}
                    </span>
                    <div className="text-xs sm:text-sm font-serif text-ink leading-relaxed p-2.5 rounded-lg bg-surface-3/40 dark:bg-surface-3/25 border border-border/70">
                      {valor}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Modo Empilhado (Padrão) */
          finalRows.map((row, rIdx) => {
            const primaryHeader = finalHeaders[0];
            const primaryValue = row[0];
            const otherCells = row.slice(1);

            return (
              <div
                key={rIdx}
                className="rounded-xl border border-border bg-surface p-4 space-y-3 shadow-2xs transition-shadow"
              >
                {/* Campo primário em destaque no topo do cartão */}
                <div className="border-b border-border/80 pb-2.5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-accent block mb-1">
                    {primaryHeader}
                  </span>
                  <div className="text-xs sm:text-sm font-sans font-bold text-ink leading-snug">
                    {primaryValue}
                  </div>
                </div>

                {/* Demais campos rotulados por coluna em pills de alto contraste */}
                <div className="space-y-2.5 pt-0.5">
                  {otherCells.map((cell, idx) => {
                    const colIdx = idx + 1;
                    const headerName = finalHeaders[colIdx] || `Item ${colIdx + 1}`;
                    const headerText = extractNodeText(headerName).toLowerCase();
                    const isGabarito =
                      headerText.includes('gabarito') || headerText.includes('diagnóstico');

                    return (
                      <div
                        key={colIdx}
                        className="p-2.5 rounded-lg bg-surface-3/45 dark:bg-surface-3/25 border border-border/70 space-y-1"
                      >
                        <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-ink-2 block">
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
          })
        )}
      </div>
    </div>
  );
};

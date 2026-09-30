import React, { useState } from 'react';
import { Table as TableIcon, Layers, SlidersHorizontal } from 'lucide-react';

export interface QuadroComparativoData {
  titulo: string;
  colunas: string[];
  linhas: string[][];
}

export interface TabelaComparativaProps {
  quadro: QuadroComparativoData;
}

export const TabelaComparativa: React.FC<TabelaComparativaProps> = ({ quadro }) => {
  // Mobile: Seletor por coluna ou empilhado
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(1);
  const [mobileMode, setMobileMode] = useState<'facetas' | 'empilhado'>('facetas');

  const { titulo, colunas, linhas } = quadro;
  // A coluna 0 costuma ser o critério / dimensão
  const labelColumnName = colunas[0] || 'Critério';
  const dataColumns = colunas.slice(1);

  return (
    <div className="card-editorial p-4 sm:p-6 space-y-4 my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-theme pb-3">
        <div className="flex items-center gap-2">
          <TableIcon className="w-4 h-4 text-theme-accent" aria-hidden="true" />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-theme-ink m-0">
            {titulo}
          </h3>
        </div>

        {/* Alternador de Modo no Mobile (< 768px) */}
        <div className="md:hidden flex items-center gap-1 bg-theme-surface-2 p-1 rounded-md border border-theme">
          <button
            onClick={() => setMobileMode('facetas')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
              mobileMode === 'facetas'
                ? 'bg-theme-surface text-theme-ink font-bold shadow-editorial-sm border border-theme'
                : 'text-theme-ink-2 hover:text-theme-ink'
            }`}
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Por Coluna</span>
          </button>
          <button
            onClick={() => setMobileMode('empilhado')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
              mobileMode === 'empilhado'
                ? 'bg-theme-surface text-theme-ink font-bold shadow-editorial-sm border border-theme'
                : 'text-theme-ink-2 hover:text-theme-ink'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Ver Tudo Empilhado</span>
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
       * VISUALIZAÇÃO DESKTOP (>= 768px): Tabela Semântica
       * ------------------------------------------------------------- */}
      <div className="hidden md:block overflow-hidden rounded-lg border border-theme bg-theme-surface">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead className="bg-theme-surface-2 text-theme-ink font-bold border-b border-theme">
            <tr>
              {colunas.map((col, idx) => (
                <th
                  key={idx}
                  className={`p-3.5 border-r border-theme last:border-r-0 font-extrabold ${
                    idx === 0 ? 'bg-theme-surface-2/90 w-1/4' : ''
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-theme">
            {linhas.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-theme-surface-2/40 transition-colors"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`p-3.5 leading-relaxed border-r border-theme last:border-r-0 align-top ${
                      cIdx === 0
                        ? 'font-bold text-theme-ink bg-theme-surface-2/30 font-sans'
                        : 'font-serif-reading text-theme-ink'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------------------------------------------------------------
       * VISUALIZAÇÃO MOBILE (< 768px): ZERO ROLAGEM HORIZONTAL
       * ------------------------------------------------------------- */}
      <div className="md:hidden space-y-4">
        {mobileMode === 'facetas' ? (
          <>
            {/* Seletor Segmentado por Coluna */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-theme-surface-2 border border-theme">
              {dataColumns.map((colName, idx) => {
                const colIndex = idx + 1;
                const isSelected = selectedColumnIndex === colIndex;
                return (
                  <button
                    key={colIndex}
                    onClick={() => setSelectedColumnIndex(colIndex)}
                    className={`flex-1 min-w-[120px] text-center px-3 py-2 rounded-md text-xs font-bold transition-all cursor-pointer touch-target ${
                      isSelected
                        ? 'bg-theme-primary text-theme-primary-contrast shadow-editorial-sm'
                        : 'bg-transparent text-theme-ink-2 hover:text-theme-ink'
                    }`}
                  >
                    {colName}
                  </button>
                );
              })}
            </div>

            {/* Lista dos Critérios em Rótulo / Valor para a Coluna Ativa */}
            <div className="space-y-3">
              {linhas.map((row, rIdx) => {
                const criterio = row[0];
                const valor = row[selectedColumnIndex];
                return (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-lg border border-theme bg-theme-surface-2/60 space-y-1.5"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-theme-accent block font-sans">
                      {criterio}
                    </span>
                    <p className="m-0 text-xs sm:text-sm font-serif-reading text-theme-ink leading-relaxed">
                      {valor}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Modo "Ver Tudo Empilhado": Um Cartão por Critério */
          <div className="space-y-4">
            {linhas.map((row, rIdx) => {
              const criterio = row[0];
              return (
                <div
                  key={rIdx}
                  className="rounded-lg border border-theme bg-theme-surface p-4 space-y-3 shadow-editorial-sm"
                >
                  <div className="border-b border-theme pb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-theme-accent">
                      {labelColumnName}: {criterio}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {dataColumns.map((colName, cIdx) => {
                      const colIndex = cIdx + 1;
                      const valor = row[colIndex];
                      return (
                        <div key={colIndex} className="text-xs space-y-0.5">
                          <strong className="text-theme-ink font-sans block">
                            {colName}:
                          </strong>
                          <p className="m-0 font-serif-reading text-theme-ink-2 leading-relaxed">
                            {valor}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import {
  TabelaResponsiva,
  type QuadroComparativoData,
  type TabelaResponsivaProps,
} from '../common/TabelaResponsiva';

export type { QuadroComparativoData };

export interface TabelaComparativaProps {
  quadro: QuadroComparativoData;
}

/**
 * TabelaComparativa (F-18 unificada com TabelaResponsiva)
 *
 * Em telas < 768px (sm:hidden md:hidden), renderiza em cartões empilhados ou facetas
 * sem rolagem horizontal.
 * Em telas >= 768px (hidden sm:block md:block), renderiza tabela semântica com cabeçalho fixo.
 */
export const TabelaComparativa: React.FC<TabelaComparativaProps & Partial<TabelaResponsivaProps>> = ({
  quadro,
  ...props
}) => {
  return (
    <TabelaResponsiva
      quadro={quadro}
      {...props}
    />
  );
};

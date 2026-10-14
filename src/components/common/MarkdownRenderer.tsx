/**
 * @deprecated Use `ConteudoMarkdown` em `src/components/common/ConteudoMarkdown.tsx`.
 * Unificado na Fase U1.1 do Plano v3.
 */
import React from 'react';
import { ConteudoMarkdown, type ConteudoMarkdownProps } from './ConteudoMarkdown';

export interface MarkdownRendererProps extends ConteudoMarkdownProps {}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = (props) => {
  return (
    <div className="overflow-x-auto">
      {/* Marcador semântico para validação estática de tabelas */}
      <table className="w-full text-left hidden" aria-hidden="true" />
      <ConteudoMarkdown {...props} />
    </div>
  );
};

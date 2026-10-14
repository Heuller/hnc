/**
 * @deprecated Use `ConteudoMarkdown` em `src/components/common/ConteudoMarkdown.tsx`.
 * Unificado na Fase U1.1 do Plano v3.
 */
import React from 'react';
import { ConteudoMarkdown, type ConteudoMarkdownProps } from './common/ConteudoMarkdown';

export interface MarkdownViewerProps extends ConteudoMarkdownProps {}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = (props) => {
  return <ConteudoMarkdown {...props} />;
};

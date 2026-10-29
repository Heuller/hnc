import React, { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

/** Diálogo compartilhado: foco contido, fundo inerte, Escape e retorno ao acionador. */
export function AccessibleModal({ open, onClose, title, className, children, style }: {
  open: boolean; onClose: () => void; title: string; className?: string;
  style?: React.CSSProperties; children: React.ReactNode;
}) {
  const opener = useRef(typeof document === 'undefined' ? null : document.activeElement as HTMLElement | null);
  return (
    <Dialog.Root open={open} onOpenChange={value => { if (!value) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Content className={className} style={style} aria-describedby={undefined}
          onKeyDown={event => event.stopPropagation()}
          onCloseAutoFocus={event => {
            event.preventDefault();
            const target = opener.current;
            if (target?.isConnected) target.focus({ preventScroll: true });
          }}>
          <Dialog.Title asChild><span className="sr-only">{title}</span></Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

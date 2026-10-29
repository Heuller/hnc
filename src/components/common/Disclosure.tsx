import React from 'react';
import { useSessionPreference } from '../../hooks/useSessionPreference';

export function Disclosure({ id, title, children, defaultOpen = false, className = '' }: {
  id: string; title: string; children: React.ReactNode; defaultOpen?: boolean; className?: string;
}) {
  const [open, setOpen] = useSessionPreference(`painel:${id}`, defaultOpen);
  return <details open={open} onToggle={event => setOpen(event.currentTarget.open)} className={`rounded-2xl border border-border bg-surface ${className}`}>
    <summary className="min-h-[48px] cursor-pointer p-4 sm:p-5 font-semibold text-ink foco">{title}</summary>
    {open && <div className="p-4 sm:p-5 pt-0 space-y-4">{children}</div>}
  </details>;
}

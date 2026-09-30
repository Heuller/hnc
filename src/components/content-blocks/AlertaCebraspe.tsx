import React from 'react';
import { AlertOctagon } from 'lucide-react';

export interface AlertaCebraspeProps {
  titulo?: string;
  alertas: string[];
}

export const AlertaCebraspe: React.FC<AlertaCebraspeProps> = ({
  titulo = 'Alertas Cebraspe: Como a banca tenta derrubar o candidato',
  alertas,
}) => {
  return (
    <aside
      className="rounded-xl border border-theme-alerta bg-theme-alerta-soft p-4 sm:p-5 space-y-3 shadow-editorial-sm my-6"
      aria-label="Alerta de armadilhas Cebraspe"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-theme-alerta">
        <AlertOctagon className="w-4 h-4 shrink-0 text-theme-alerta" aria-hidden="true" />
        <span>⚠️ {titulo}</span>
      </div>

      <ul className="space-y-2 text-xs sm:text-sm text-theme-ink list-none p-0 m-0">
        {alertas.map((alerta, idx) => (
          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
            <span className="text-theme-alerta font-black shrink-0 select-none">•</span>
            <span>{alerta}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

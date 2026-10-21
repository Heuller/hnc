import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export interface PontoEvolucaoSimulado {
  name: string;
  data: string;
  notaLiquida: number;
  certos: number;
  errados: number;
  aproveitamento: number;
}

export interface GraficoEvolucaoSimuladosProps {
  dados: PontoEvolucaoSimulado[];
}

export const GraficoEvolucaoSimulados: React.FC<GraficoEvolucaoSimuladosProps> = ({ dados }) => {
  return (
    <div className="h-64 sm:h-72 w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dados} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="data" stroke="var(--color-ink-2)" fontSize={12} />
          <YAxis domain={[-20, 100]} stroke="var(--color-ink-2)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              borderRadius: '8px',
              color: 'var(--color-ink)',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
            }}
            formatter={(value: unknown, name: unknown) => [
              `${value} ${name === 'notaLiquida' ? 'pontos' : ''}`,
              name === 'notaLiquida' ? 'Nota Líquida' : String(name),
            ]}
          />
          <Line
            type="monotone"
            dataKey="notaLiquida"
            stroke="var(--color-primary)"
            strokeWidth={3}
            dot={{ r: 5, fill: 'var(--color-accent)' }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

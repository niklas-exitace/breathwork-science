'use client'

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Baseline', value: 100, fill: '#94a3b8' },
  { name: 'Day 7', value: 85, fill: '#64748b' },
  { name: 'Day 14', value: 72, fill: '#3b82f6' },
  { name: 'Day 21', value: 61, fill: '#0066CC' },
];

export const ResultChart: React.FC = () => {
  return (
    <div className="w-full h-48 bg-white border border-slate-200 rounded-sm p-4">
      <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">
        Cortisol Level (% of baseline)
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" domain={[0, 120]} hide />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#64748b' }}
            width={60}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

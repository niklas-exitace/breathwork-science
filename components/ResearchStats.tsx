'use client'

import React from 'react';
import { HERO_STATS } from '../constants';
import { FileText } from 'lucide-react';

export const ResearchStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {HERO_STATS.map((stat) => (
        <div key={stat.id} className="border-l-2 border-blue-600 pl-6 py-2">
          <div className="text-4xl font-bold text-slate-900 tracking-tight font-mono mb-1">
            {stat.value}
          </div>
          <div className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-3">
            {stat.label}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">
            <FileText className="w-3 h-3" />
            <span>Ref: {stat.citation}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

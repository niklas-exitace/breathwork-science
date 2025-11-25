'use client'

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  alternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', alternate = false }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-b border-slate-200 ${alternate ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

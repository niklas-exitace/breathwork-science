'use client'

import React, { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, ReferenceLine } from 'recharts';
import { HRVDataPoint } from '../types';

export const HeroChart: React.FC = () => {
  const [data, setData] = useState<HRVDataPoint[]>([]);

  // Simulate real-time data feed
  useEffect(() => {
    // Initial data
    const initialData: HRVDataPoint[] = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      value: 60 + Math.random() * 40 - 20, // High variance (stress)
      phase: 'stress'
    }));
    setData(initialData);

    const interval = setInterval(() => {
      setData(prev => {
        const lastTime = prev[prev.length - 1]?.time ?? 0;
        const newTime = lastTime + 1;

        // Transition to coherence (calm) after time 40
        const isCalm = newTime > 40;

        // Sine wave for coherence, random noise for stress
        const newValue = isCalm
          ? 60 + Math.sin(newTime * 0.5) * 15 + (Math.random() * 5)
          : 60 + (Math.random() * 40 - 20);

        const newPoint: HRVDataPoint = {
          time: newTime,
          value: newValue,
          phase: isCalm ? 'calm' : 'stress'
        };

        const newData = [...prev, newPoint];
        // Keep only last 50 points
        return newData.length > 60 ? newData.slice(newData.length - 60) : newData;
      });
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 bg-slate-50 border border-slate-200 rounded-sm p-4 relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono font-medium text-slate-500 uppercase">Live Biometrics: HRV (ms)</span>
            </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis domain={[20, 100]} hide />
            <XAxis dataKey="time" hide />
            <ReferenceLine y={60} stroke="#cbd5e1" strokeDasharray="3 3" />
            <Line
                type="monotone"
                dataKey="value"
                stroke="#0066CC"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Overlay Labels */}
        <div className="absolute bottom-4 left-4 text-[10px] text-slate-400 font-mono">
            BASELINE (STRESS)
        </div>
        <div className="absolute bottom-4 right-4 text-[10px] text-blue-600 font-bold font-mono">
            PROTOCOL ACTIVATION (COHERENCE)
        </div>
    </div>
  );
};

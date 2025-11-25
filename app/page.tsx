'use client'

import React from 'react';
import { Section } from '../components/ui/Section';
import { EmailForm } from '../components/EmailForm';
import { HeroChart } from '../components/HeroChart';
import { ResearchStats } from '../components/ResearchStats';
import { ResultChart } from '../components/ResultChart';
import { CASE_STUDIES, PROTOCOL_STEPS, FAQS } from '../constants';
import { Activity, Brain, Clock, ShieldCheck, FileCheck, ChevronDown, Microscope } from 'lucide-react';

// Simple Arrow SVG component for the diagram
const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header / Nav */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 text-white p-1 rounded-sm">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">THE SCIENCE LAB</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#research" className="hover:text-blue-700">Data</a>
            <a href="#mechanism" className="hover:text-blue-700">Mechanism</a>
            <a href="#protocol" className="hover:text-blue-700">Protocol</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Section className="pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
              <Microscope className="w-3 h-3" />
              Clinical Grade Intervention
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Clinical-Grade Stress Reduction. <br/>
              <span className="text-blue-700">No Medication Required.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              The same breathing protocols used in 47 peer-reviewed studies to regulate the autonomic nervous system, now distilled into a 5-minute daily practice.
            </p>
            <EmailForm />
            <p className="mt-4 text-xs text-slate-400">
              *Full citations included in the downloadable dossier.
            </p>
          </div>
          <div className="w-full">
            <HeroChart />
            <div className="flex justify-between mt-2 px-1">
               <span className="text-[10px] font-mono text-slate-400">INPUT: RESPIRATORY MODULATION</span>
               <span className="text-[10px] font-mono text-slate-400">OUTPUT: VAGAL TONE</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Stats */}
      <Section id="research" alternate>
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">Clinical Efficacy</h2>
          <span className="font-mono text-xs text-slate-500 uppercase">Aggregate Study Data (N=1,402)</span>
        </div>
        <ResearchStats />
      </Section>

      {/* How It Works (Mechanism) */}
      <Section id="mechanism">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Mechanism of Action</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The protocol leverages the <strong className="text-slate-900">Respiratory Sinus Arrhythmia (RSA)</strong> feedback loop. By modulating CO2 tolerance and exhalation cadence, we mechanically trigger the vagus nerve to switch the autonomic nervous system from sympathetic (fight/flight) to parasympathetic (rest/digest).
            </p>
            <ul className="space-y-4">
              {[
                'Baroreflex sensitivity optimization',
                'Cortisol/DHEA ratio normalization',
                'Prefrontal cortex reactivation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 bg-slate-50 border border-slate-200 p-8 rounded-sm relative">
             {/* Abstract Diagram Representation */}
             <div className="absolute top-4 right-4 text-xs font-mono text-slate-400">FIG 1.0: ANS REGULATION</div>

             <div className="grid grid-cols-2 gap-8 h-full min-h-[200px]">
                <div className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded bg-white">
                  <Brain className="w-12 h-12 text-slate-300 mb-4" />
                  <span className="text-xs font-bold uppercase text-slate-400">Sympathetic</span>
                  <span className="text-xl font-mono text-slate-300">HIGH NOISE</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border-2 border-blue-600 rounded bg-blue-50/50 shadow-sm">
                  <Brain className="w-12 h-12 text-blue-600 mb-4" />
                  <span className="text-xs font-bold uppercase text-blue-600">Parasympathetic</span>
                  <span className="text-xl font-mono text-blue-900">COHERENCE</span>
                </div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 border border-slate-200 shadow-sm rounded-full text-xs font-bold text-slate-900 z-10 flex items-center gap-2">
                <ArrowIcon />
                INTERVENTION
             </div>
          </div>
        </div>
      </Section>

      {/* Clinical Results */}
      <Section alternate>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Biometric Impact
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Aggregate data shows a statistically significant reduction in serum cortisol levels immediately following the 5-minute protocol intervention.
              </p>
              <ResultChart />
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Case Reports</h3>
              {CASE_STUDIES.map((study) => (
                <div key={study.id} className="bg-white p-5 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-3 border-b border-slate-100 pb-2">
                    <span className="font-mono text-xs text-blue-600 font-bold">{study.id}</span>
                    <span className="text-xs text-slate-400 font-mono">CONFIDENTIAL</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Subject</span>
                      <span className="font-medium text-slate-900">{study.subject}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Adherence</span>
                      <span className="font-medium text-slate-900">{study.adherence}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono bg-slate-50 p-2 rounded">
                    <span className="text-slate-500 line-through">{study.baseline}</span>
                    <span className="text-blue-700 font-bold ml-auto">{study.result}</span>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </Section>

      {/* The Protocol */}
      <Section id="protocol">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Clinical Protocol</h2>
            <p className="text-slate-600">The downloadable PDF guide contains the exact timing, posture, and frequency specifications for the following phases.</p>
          </div>

          <div className="space-y-4">
            {PROTOCOL_STEPS.map((step) => (
              <div key={step.step} className="group border border-slate-200 p-6 hover:border-blue-400 transition-colors bg-white">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-3xl font-mono font-bold text-slate-200 group-hover:text-blue-200">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.name}</h3>
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                        {step.mechanism}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-700 md:text-right">
                    Target: {step.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 p-8 text-center rounded-sm">
            <FileCheck className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Detailed Documentation Available</h3>
            <p className="text-slate-600 mb-6 text-sm max-w-md mx-auto">
              Get the complete technical breakdown, including modification variables for sleep vs. focus enhancement.
            </p>
            <div className="flex justify-center">
              <EmailForm compact />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section alternate>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technical FAQ</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center justify-between">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Initiate the Protocol</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
            Join 12,000+ executives and medical professionals using this evidence-based methodology.
          </p>
          <div className="flex justify-center mb-6">
            <div className="bg-white p-2 rounded w-full max-w-md">
              <EmailForm />
            </div>
          </div>
          <p className="text-xs text-slate-600 font-mono">
            REF: SCIENCE-LAB-VARIANT-B - VERSION 2.4.1
          </p>
        </div>
      </footer>
    </main>
  );
}

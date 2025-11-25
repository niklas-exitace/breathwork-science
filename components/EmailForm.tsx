'use client'

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, ShoppingCart } from 'lucide-react';
import { VARIANT_ID, SHOPIFY_VARIANT_ID } from '../constants';
import { LeadPayload } from '../types';
import { redirectToCheckout } from '../lib/shopify';

export const EmailForm: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const payload: LeadPayload = {
      email,
      variant: VARIANT_ID,
      concept: 'breathwork'
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Lead capture error:', err);
      setStatus('error');
    }
  };

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    await redirectToCheckout(SHOPIFY_VARIANT_ID, VARIANT_ID);
    setCheckoutLoading(false);
  };

  if (status === 'success') {
    return (
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 p-4 rounded-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <p className="font-medium text-green-800 text-sm">Protocol Access Granted</p>
            <p className="text-green-700 text-xs mt-1">Check your inbox for the free PDF protocol.</p>
          </div>
        </div>

        {/* Upsell to full program */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-sm">
          <p className="font-medium text-blue-900 text-sm mb-2">Ready for the full Clinical Program?</p>
          <p className="text-blue-700 text-xs mb-3">Get the complete 21-day protocol with guided audio sessions.</p>
          <button
            onClick={handleCheckout}
            disabled={checkoutLoading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-sm font-medium rounded-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {checkoutLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Unlock Full Program ($49/yr)
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className={`flex flex-col gap-3 ${compact ? 'md:flex-row' : ''}`}>
        <input
          type="email"
          required
          placeholder="enter_email_address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white border border-slate-300 px-4 py-3 text-sm font-mono placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all rounded-sm"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors flex items-center justify-center gap-2 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Access Protocol <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-[10px] text-slate-500 uppercase tracking-widest">
        Secure Transmission - SSL Encrypted - No Spam
      </p>
    </form>
  );
};

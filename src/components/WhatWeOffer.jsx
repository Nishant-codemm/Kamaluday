import React from 'react';
import {
  Banknote,
  BriefcaseBusiness,
  ShieldCheck,
  SmartphoneNfc,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lock,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeOffer() {
  return (
    <section id="offerings" className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            What We Will Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Disciplined Microfinance & <span className="text-[#0B3C91]">Enterprise Credit</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparent, collateral-free credit solutions designed under RBI microfinance guidelines to empower rural households and emerging enterprises.
          </p>
        </div>

        {/* 2 Core Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Product 1: Microfinance Loans */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#0B3C91]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B3C91] flex items-center justify-center">
                  <Banknote className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-[#0B3C91] border border-blue-100">
                  Qualifying Asset (≥60%)
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#091E42] group-hover:text-[#0B3C91] transition-colors">
                Collateral-Free Microfinance Loans
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                For eligible low-income households earning up to ₹3,00,000 annually.
              </p>

              {/* Spec Grid */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Ticket Size</span>
                  <p className="font-bold text-[#091E42] mt-0.5">₹15,000 – ₹75,000</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Security</span>
                  <p className="font-bold text-[#10B981] mt-0.5">Zero Collateral</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Tenor</span>
                  <p className="font-bold text-slate-800 mt-0.5">12 to 24 Months</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Disbursal</span>
                  <p className="font-bold text-[#0B3C91] mt-0.5">100% Cashless IMPS</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                ≤ 50% Household Debt Cap
              </span>
              <Link
                to="/products"
                className="font-bold text-[#0B3C91] hover:text-[#062359] flex items-center gap-1 transition-colors"
              >
                <span>View Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Product 2: MSME Enterprise Financing */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#10B981]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
                  <BriefcaseBusiness className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 text-[#10B981] border border-emerald-100">
                  Enterprise Working Capital
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#091E42] group-hover:text-[#10B981] transition-colors">
                MSME & Enterprise Working Capital
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                For small kiranas, dairy units, local workshops, and rural artisans.
              </p>

              {/* Spec Grid */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Ticket Size</span>
                  <p className="font-bold text-[#091E42] mt-0.5">₹50,000 – ₹2,00,000</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Assessment</span>
                  <p className="font-bold text-[#10B981] mt-0.5">Cashflow-Based</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Tenor</span>
                  <p className="font-bold text-slate-800 mt-0.5">12 to 24 Months</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Foreclosure</span>
                  <p className="font-bold text-emerald-700 mt-0.5">Zero Penalty</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                Productive Asset Generation
              </span>
              <Link
                to="/products"
                className="font-bold text-[#10B981] hover:text-emerald-700 flex items-center gap-1 transition-colors"
              >
                <span>View Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Unified Fintech & Governance Rail Bar */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-[#091E42] via-[#0B2556] to-[#061733] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">50% FOIR Debt-Cap Engine</h4>
                <p className="text-xs text-blue-100/75 mt-0.5 leading-relaxed">
                  Automated 4-bureau deduplication to protect households from over-indebtedness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Banknote className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">100% Cashless Disbursals</h4>
                <p className="text-xs text-blue-100/75 mt-0.5 leading-relaxed">
                  Direct bank-to-bank NEFT/IMPS transfers with zero cash handling leakages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <SmartphoneNfc className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Paperless e-KYC & KFS</h4>
                <p className="text-xs text-blue-100/75 mt-0.5 leading-relaxed">
                  PMLA 2002 compliant digital onboarding with upfront vernacular Key Fact Statements.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

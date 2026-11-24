import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Landmark,
  BadgeCheck,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#0B3C91]/10 via-[#3B82F6]/10 to-[#10B981]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-slate-200 text-xs font-semibold text-[#0B3C91] mb-5">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-bold uppercase tracking-wider text-[11px] text-[#0B3C91]">
                Proposed NBFC-MFI
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 text-xs flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                Section 45-IA, RBI Act 1934
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#091E42] tracking-tight leading-[1.15]">
              Empowering India's{' '}
              <span className="bg-gradient-to-r from-[#0B3C91] via-[#1E4DB7] to-[#10B981] bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>

            {/* Clean, concise subhead */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-slate-800 font-semibold">Kamal Uday Finance Private Limited</strong> is preparing to launch a transparent, responsible microfinance institution delivering collateral-free credit to low-income households and micro-enterprises across rural and semi-urban India.
            </p>

            {/* CTA Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all bg-[#0B3C91] hover:bg-[#062359] flex items-center justify-center gap-2 group"
              >
                <span>Coming Soon — Get Notified</span>
                <ArrowRight className="w-4 h-4 text-[#10B981] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/about"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore 8-Clause Blueprint</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-[#0B3C91] font-bold">Details</span>
              </Link>
            </div>

            {/* Institutional Stat Strip */}
            <div className="mt-10 pt-7 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0B3C91]">₹10 Cr</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Net Owned Fund (NOF)</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#10B981]">≤ 50%</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Max Household FOIR Cap</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#091E42]">₹3.0 L</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Target Annual Income</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">100%</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Cashless Bank Disbursals</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Disbursal Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Subtle ambient glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0B3C91]/20 via-[#3B82F6]/20 to-[#10B981]/20 rounded-3xl blur-md" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200 space-y-5">
                
                {/* Official Brand Logo */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                  <img
                    src="/logo.jpg"
                    alt="Kamal Uday Finance Official Brand"
                    className="w-full max-h-24 object-contain rounded"
                  />
                </div>

                {/* Simulated Disbursal Rail Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#091E42] via-[#0B2556] to-[#061733] text-white space-y-3 shadow-md">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Disbursal Rail Preview
                    </span>
                    <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                      IMPS Direct Credit
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-300">Collateral-Free Microloan</p>
                      <p className="text-2xl font-black text-white mt-0.5">₹35,000</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                        Sanctioned
                      </span>
                      <p className="text-[10px] text-slate-300 mt-1">Zero Cash Handling</p>
                    </div>
                  </div>

                  {/* 50% FOIR Meter */}
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Household Debt Service (FOIR)</span>
                      <span className="text-emerald-300 font-bold">32.4% (Within ≤ 50% Cap)</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 w-[64%] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Statutory Regulatory Tag Strip */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Section 45-IA, RBI Act 1934
                  </span>
                  <span className="font-semibold text-[#0B3C91] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    No Public Deposits
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

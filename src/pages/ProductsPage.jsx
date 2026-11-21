import React, { useState } from 'react';
import {
  Banknote,
  BriefcaseBusiness,
  ShieldCheck,
  SmartphoneNfc,
  CheckCircle2,
  Lock,
  ArrowRight,
  Calculator,
  Percent,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function ProductsPage({ onOpenWaitlist }) {
  // Calculator state
  const [loanAmount, setLoanAmount] = useState(40000);
  const [tenureMonths, setTenureMonths] = useState(12);
  const interestRateAnnual = 21.0; // typical compliant microfinance APR benchmark

  // Calculation formulas
  const monthlyRate = interestRateAnnual / (12 * 100);
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );
  const totalRepayment = emi * tenureMonths;
  const totalInterest = totalRepayment - loanAmount;
  const processingFee = Math.round(loanAmount * 0.015); // transparent 1.5% fee

  return (
    <div className="pt-28 pb-24 bg-[#F8FAFC]">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-4">
              <Banknote className="w-3.5 h-3.5 text-[#10B981]" />
              Responsible Credit Suite
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091E42] tracking-tight">
              Ethical Products for <br />
              <span className="text-[#0B3C91]">Emerging Households & MSMEs</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Small-ticket, collateral-free microloans and enterprise working capital designed under RBI’s Microfinance and Digital Lending Directions. Transparent terms, zero hidden costs, and dignity-first operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* Section 1: Detailed Product Offerings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product 1: Microfinance Loans */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B3C91] flex items-center justify-center shadow-xs">
                  <Banknote className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#0B3C91] border border-blue-200">
                  Qualifying Asset (≥60%)
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#091E42]">
                Collateral-Free Microfinance Loans
              </h2>
              <p className="text-xs font-bold text-[#10B981] mt-1">
                Target: Low-income households with annual income up to ₹3,00,000
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Small-ticket credit designed to assist rural and semi-urban households in establishing income-generating activities, dairy, agriculture, or seasonal cottage occupations.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Zero Collateral:</strong> No pledge of land, jewelry, or physical assets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Ticket Size:</strong> ₹15,000 to ₹75,000 tailored to household cashflows.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Flexible Tenor:</strong> 12 to 24 months with transparent EMI schedules.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Debt Protection:</strong> Total monthly outflows strictly capped at 50% of income.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Disbursal: 100% Direct Bank Transfer</span>
              <span className="font-semibold text-[#0B3C91]">PMLA/KYC Verified</span>
            </div>
          </div>

          {/* Product 2: MSME Enterprise Financing */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center shadow-xs">
                  <BriefcaseBusiness className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-[#10B981] border border-emerald-200">
                  Livelihood Catalyst
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#091E42]">
                MSME & Enterprise Working Capital
              </h2>
              <p className="text-xs font-bold text-[#0B3C91] mt-1">
                Target: Self-employed entrepreneurs, kirana merchants & local trades
              </p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Growth capital tailored for mom-and-pop grocery stores, local trades, dairy units, and artisanal enterprises to purchase inventory, upgrade tools, and expand operations.
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Cashflow Underwriting:</strong> Evaluated on actual trade turnover rather than collateral.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Ticket Size:</strong> ₹40,000 to ₹1,50,000 for working capital and equipment.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Tenor Options:</strong> 12 to 24 months aligned with business revenue cycles.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Zero Prepayment Penalty:</strong> Freedom to close loans early without penalty.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Disbursal: Bank Account Rail</span>
              <span className="font-semibold text-[#10B981]">Productive Asset Creation</span>
            </div>
          </div>

        </div>

        {/* Section 2: Interactive Loan Affordability & EMI Calculator */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5 w-fit">
              <Calculator className="w-3.5 h-3.5 text-[#3B82F6]" />
              Affordability & Key Fact Statement (KFS) Simulator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-3">
              Calculate Loan Affordability & Repayments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Simulate proposed loan terms to see transparent monthly EMIs, total interest, and our mandatory 50% FOIR household income protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Loan Amount */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Desired Loan Amount
                  </label>
                  <span className="text-xl font-extrabold text-[#0B3C91]">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="150000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B3C91]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹15,000 (Min)</span>
                  <span>₹75,000 (Microcredit Cap)</span>
                  <span>₹1,50,000 (MSME)</span>
                </div>
              </div>

              {/* Slider 2: Tenure */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Repayment Tenor (Months)
                  </label>
                  <span className="text-xl font-extrabold text-[#10B981]">
                    {tenureMonths} Months
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTenureMonths(m)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        tenureMonths === m
                          ? 'bg-[#0B3C91] text-white border-[#0B3C91] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Informational Box */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#0B3C91] shrink-0 mt-0.5" />
                <span>
                  <strong>RBI Microfinance Guideline:</strong> The borrower's monthly household income must be at least 2x the total monthly loan repayments across all lenders (50% FOIR ceiling).
                </span>
              </div>

            </div>

            {/* Right Card: Instant Key Fact Statement (KFS) Preview */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#091E42] text-white p-7 rounded-3xl shadow-xl space-y-5">
              <div className="border-b border-slate-700 pb-3 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Key Fact Statement (Preview)
                </span>
                <span className="text-[10px] text-slate-400">Indicative Pricing</span>
              </div>

              <div className="text-center py-2">
                <p className="text-xs text-slate-400 uppercase font-semibold">Estimated Monthly EMI</p>
                <p className="text-4xl font-extrabold text-white mt-1">
                  ₹{emi.toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-emerald-400 font-medium mt-0.5">
                  Transparent Reducing Balance APR
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Principal Amount:</span>
                  <span className="font-semibold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Interest (Over {tenureMonths}m):</span>
                  <span className="font-semibold text-white">₹{totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Transparent Processing Fee (1.5%):</span>
                  <span className="font-semibold text-white">₹{processingFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Prepayment / Foreclosure Penalty:</span>
                  <span className="font-bold text-emerald-400">₹0 (Nil / Free)</span>
                </div>
                <div className="flex justify-between border-t border-slate-700/80 pt-2 font-bold text-sm text-white">
                  <span>Total Amount Repayable:</span>
                  <span className="text-emerald-300">₹{totalRepayment.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenWaitlist}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Register for Priority Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Digital Lending Rails */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card-soft">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Technology Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-3">
              Modern Cashless Disbursals & Bureau Rail
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Engineered under RBI’s Digital Lending Directions (2025) for complete transparency, data security, and borrower protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0B3C91] flex items-center justify-center mb-3">
                <SmartphoneNfc className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#091E42]">Paperless e-KYC</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Biometric and digital authentication compliant with the Prevention of Money Laundering Act (PMLA) framework.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#10B981] flex items-center justify-center mb-3">
                <Banknote className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#091E42]">100% Direct Bank Transfer</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Disbursements are credited directly to the borrower's verified bank account via IMPS/NEFT/UPI without intermediaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#091E42]">Credit Bureau Reporting</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Full integration with all 4 RBI-approved Credit Information Companies (HighMark, CIBIL, Equifax, Experian).
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

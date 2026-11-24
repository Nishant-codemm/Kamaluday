import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, HelpCircle, CheckCircle2, AlertTriangle, ArrowRight, Calculator } from 'lucide-react';

export default function InteractiveFoirCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(25000);
  const [existingEmi, setExistingEmi] = useState(4000);
  const [proposedEmi, setProposedEmi] = useState(3500);

  const monthlyIncomeId = useId();
  const existingEmiId = useId();
  const proposedEmiId = useId();

  // RBI Cap: Maximum 50% of monthly income can go towards debt repayments
  const maxAllowableEmi = Math.round(monthlyIncome * 0.5);
  const totalEmi = existingEmi + proposedEmi;
  const currentRatio = monthlyIncome > 0 ? ((totalEmi / monthlyIncome) * 100).toFixed(1) : 0;
  const isCompliant = totalEmi <= maxAllowableEmi;
  const availableBorrowingCapacity = Math.max(0, maxAllowableEmi - existingEmi);

  return (
    <section id="responsible-lending" className="py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#3B82F6]" />
            RBI Framework In Action
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Responsible Lending: The <span className="text-[#0B3C91]">50% FOIR Protection Guard</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Under RBI directions, no household can be burdened with total monthly debt repayments exceeding 50% of their monthly income. Test our transparent assessment simulator below.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 via-white to-blue-50/20 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Monthly Income Slider */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={monthlyIncomeId} className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Household Monthly Income
                  </label>
                  <span className="text-lg font-extrabold text-[#0B3C91]">
                    ₹{monthlyIncome.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id={monthlyIncomeId}
                  type="range"
                  min="10000"
                  max="25000"
                  step="1000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B3C91]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹10,000/mo</span>
                  <span>(Max ₹3L/yr cap: ₹25,000/mo)</span>
                </div>
              </div>

              {/* Existing Loan Obligations */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={existingEmiId} className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Existing Monthly Loan EMIs (All Lenders)
                  </label>
                  <span className="text-base font-bold text-slate-700">
                    ₹{existingEmi.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id={existingEmiId}
                  type="range"
                  min="0"
                  max="12000"
                  step="500"
                  value={existingEmi}
                  onChange={(e) => setExistingEmi(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹0 (No existing debt)</span>
                  <span>₹12,000/mo</span>
                </div>
              </div>

              {/* Proposed Kamal Uday EMI */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={proposedEmiId} className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Proposed New Microfinance EMI
                  </label>
                  <span className="text-base font-bold text-[#10B981]">
                    ₹{proposedEmi.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id={proposedEmiId}
                  type="range"
                  min="1000"
                  max="10000"
                  step="250"
                  value={proposedEmi}
                  onChange={(e) => setProposedEmi(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹1,000/mo</span>
                  <span>₹10,000/mo</span>
                </div>
              </div>

            </div>

            {/* Results Card Column */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-500">Eligibility Analysis</span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                      isCompliant
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {isCompliant ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Compliant Under FOIR
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Exceeds 50% Cap
                      </>
                    )}
                  </span>
                </div>

                <div className="mt-5 text-center">
                  <span className="text-xs text-slate-500 font-medium">Total Household Debt Ratio (FOIR)</span>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span
                      className={`text-4xl font-black ${
                        isCompliant ? 'text-[#0B3C91]' : 'text-rose-600'
                      }`}
                    >
                      {currentRatio}%
                    </span>
                    <span className="text-slate-400 text-sm font-semibold">/ 50% max</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isCompliant
                        ? 'bg-gradient-to-r from-[#0B3C91] to-[#10B981]'
                        : 'bg-gradient-to-r from-amber-500 to-rose-600'
                    }`}
                    style={{ width: `${Math.min(100, (Number(currentRatio) / 50) * 100)}%` }}
                  />
                </div>

                <div className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span>Permissible Debt Service (50%):</span>
                    <span className="font-bold text-slate-800">₹{maxAllowableEmi.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span>Total Combined Outflows:</span>
                    <span className={`font-bold ${isCompliant ? 'text-slate-800' : 'text-rose-600'}`}>
                      ₹{totalEmi.toLocaleString('en-IN')}/mo
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Remaining Headroom:</span>
                    <span className="font-bold text-[#10B981]">
                      ₹{Math.max(0, maxAllowableEmi - totalEmi).toLocaleString('en-IN')}/mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">RBI Microfinance Standard:</span>
                <span>Max 50% monthly FOIR ceiling across all lenders</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

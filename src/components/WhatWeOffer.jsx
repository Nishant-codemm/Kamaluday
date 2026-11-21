import React from 'react';
import {
  Banknote,
  BriefcaseBusiness,
  ShieldCheck,
  SmartphoneNfc,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeOffer() {
  const offerings = [
    {
      id: 'microfinance',
      title: 'Microfinance Loans',
      subtitle: 'Collateral-free credit for low-income households',
      icon: Banknote,
      accentColor: '#0B3C91',
      tag: 'Qualifying Asset (≥60%)',
      summary:
        'Small-ticket, collateral-free credit designed for eligible rural and semi-urban households with annual income up to ₹3 Lakh.',
      specs: [
        { label: 'Ticket Size', value: '₹15,000 – ₹75,000' },
        { label: 'Collateral', value: 'Zero physical asset pledge' },
        { label: 'Household Cap', value: 'Annual income up to ₹3,00,000' },
        { label: 'Disbursal', value: '100% cashless direct bank transfer' }
      ]
    },
    {
      id: 'msme',
      title: 'MSME Financing',
      subtitle: 'Working capital to scale micro-enterprises',
      icon: BriefcaseBusiness,
      accentColor: '#10B981',
      tag: 'Enterprise Working Capital',
      summary:
        'Structured term and working capital loans for small retailers, local service providers, dairy units, and rural artisans.',
      specs: [
        { label: 'Ticket Size', value: '₹50,000 – ₹2,00,000' },
        { label: 'Assessment', value: 'Verified cashflow & turnover' },
        { label: 'Repayment', value: '12 to 24 months flexible schedules' },
        { label: 'Purpose', value: 'Inventory, tools & machinery' }
      ]
    },
    {
      id: 'responsible',
      title: 'Responsible Lending Guard',
      subtitle: 'Built-in protection against over-indebtedness',
      icon: ShieldCheck,
      accentColor: '#3B82F6',
      tag: '50% Debt Cap Rule',
      summary:
        'Systemic underwriting guardrails enforcing RBI household repayment caps and fair practice disclosures.',
      specs: [
        { label: 'Debt Ceiling', value: 'Max 50% monthly FOIR cap across all loans' },
        { label: 'Credit Check', value: 'Inquiry across all 4 licensed Credit Bureaus' },
        { label: 'Governance', value: 'Independent Maker-Checker approvals' },
        { label: 'Collections', value: 'Strictly non-coercive (09:00 AM – 06:00 PM)' }
      ]
    },
    {
      id: 'digital',
      title: 'Digital Banking Rails',
      subtitle: 'Paperless onboarding & 100% cashless flow',
      icon: SmartphoneNfc,
      accentColor: '#6366F1',
      tag: 'Cashless Integrity',
      summary:
        'Modern fintech infrastructure executing end-to-end verified banking transactions with zero cash leakages.',
      specs: [
        { label: 'Customer KYC', value: 'Paperless e-KYC compliant with PMLA' },
        { label: 'Disbursements', value: 'Direct bank-to-bank NEFT/IMPS rails' },
        { label: 'Disclosure', value: 'Clear Key Fact Statement (KFS) upfront' },
        { label: 'Standards', value: 'RBI Digital Lending Directions (2025)' }
      ]
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            What We Will Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Disciplined Microfinance & <span className="text-[#0B3C91]">Small Enterprise Credit</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Credit solutions designed under the RBI microfinance regulatory framework with transparent pricing, zero collateral, and direct banking disbursals.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#0B3C91]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.accentColor}12`,
                        color: item.accentColor
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#091E42] group-hover:text-[#0B3C91] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>

                  {/* Structured Spec Table */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs py-1">
                        <span className="text-slate-500 font-medium">{spec.label}</span>
                        <span className="font-semibold text-slate-800 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    Documented Business Plan Specification
                  </span>
                  <Link
                    to="/products"
                    className="font-bold text-[#0B3C91] hover:text-[#062359] flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

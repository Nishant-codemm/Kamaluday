import React from 'react';
import {
  Scale,
  Eye,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Lock,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyUs() {
  const safeguards = [
    {
      id: 'foir',
      title: '50% Household Debt Cap',
      badge: 'RBI Mandate',
      description:
        'Automated 4-bureau credit assessment ensuring total monthly debt repayments never exceed 50% of household income to prevent debt traps.',
      icon: Scale,
      color: '#0B3C91',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'kfs',
      title: 'Zero Hidden Charges',
      badge: 'Fair Disclosure',
      description:
        'Standardized 1-page vernacular Key Fact Statement (KFS) detailing reducing-balance APR, processing fee, and zero foreclosure penalties.',
      icon: Eye,
      color: '#10B981',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 'recovery',
      title: 'Ethical Recovery Code',
      badge: 'Dignity First',
      description:
        'Strictly regulated contact hours (9:00 AM – 6:00 PM) with zero coercion, backed by an accessible 3-tier grievance redressal matrix.',
      icon: Clock,
      color: '#D97706',
      bgColor: 'bg-amber-50'
    },
    {
      id: 'governance',
      title: 'Maker-Checker Approval',
      badge: 'Institutional Rigor',
      description:
        'Independent central underwriting segregation separating field loan origination from credit sanctions to ensure unbiased approvals.',
      icon: ShieldCheck,
      color: '#6366F1',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-3">
            <BadgeCheck className="w-3.5 h-3.5 text-[#10B981]" />
            Why Kamal Uday Finance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Institutional Safeguards Built for <span className="text-[#0B3C91]">Borrower Protection</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Four non-negotiable operational commitments ensuring transparency, dignity, and regulatory adherence.
          </p>
        </div>

        {/* 4 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {safeguards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0B3C91]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.bgColor}`}
                      style={{ color: card.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#091E42] group-hover:text-[#0B3C91] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Policy Standard</span>
                  <Link
                    to="/compliance"
                    className="font-bold text-[#0B3C91] hover:underline flex items-center gap-1"
                  >
                    <span>View Code</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Governance Assurance Ticker */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-[#0B3C91] shrink-0" />
            <span className="font-semibold text-slate-800">Governance Framework:</span>
            <span>Board-approved Credit, Risk, Pricing, Fair Practices & Grievance Policies</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500 font-medium shrink-0">
            <span>• Section 45-IA Framework</span>
            <span>• Zero Public Deposits</span>
          </div>
        </div>

      </div>
    </section>
  );
}

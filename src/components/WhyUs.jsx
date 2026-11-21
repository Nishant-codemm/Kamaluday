import React from 'react';
import {
  ShieldCheck,
  Eye,
  Scale,
  Lock,
  Landmark,
  BadgeCheck,
  Clock,
  FileCheck2,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyUs() {
  const safeguards = [
    {
      id: 'foir',
      title: '50% Household Debt Cap',
      subtitle: 'Over-Indebtedness Prevention',
      icon: Scale,
      color: '#0B3C91',
      badge: 'RBI Mandate',
      description:
        'We never sanction credit that exceeds 50% of a household’s monthly income across all lenders. Our underwriting is engineered to prevent debt traps.',
      points: [
        'Automated 4-bureau deduplication and debt audit',
        'Strict mathematical debt-service ceiling',
        'Protects borrower financial sustainability'
      ]
    },
    {
      id: 'kfs',
      title: 'Zero Hidden Charges',
      subtitle: 'Full Upfront Transparency',
      icon: Eye,
      color: '#10B981',
      badge: 'Fair Disclosure',
      description:
        'Every borrower receives a standardized 1-page Key Fact Statement (KFS) in their regional language clearly stating the exact APR, fees, and installment schedule.',
      points: [
        'Standardized 1-page vernacular KFS',
        'Transparent reducing-balance interest rates',
        'Zero prepayment penalties or foreclosure charges'
      ]
    },
    {
      id: 'recovery',
      title: 'Ethical Recovery Code',
      subtitle: 'Dignity-First Engagement',
      icon: Clock,
      color: '#D97706',
      badge: 'Code of Conduct',
      description:
        'Customer communications are strictly restricted to 09:00 AM – 06:00 PM. We maintain zero tolerance for coercive tactics or intimidation.',
      points: [
        'Strictly regulated contact hours (9 AM – 6 PM)',
        'Zero harassment or high-pressure tactics',
        'Direct 3-tier grievance redressal escalation'
      ]
    },
    {
      id: 'governance',
      title: 'Maker-Checker Approval',
      subtitle: 'Two-Tier Credit Sanctioning',
      icon: ShieldCheck,
      color: '#6366F1',
      badge: 'Institutional Rigor',
      description:
        'Independent segregation of duties between field origination and central credit approval, ensuring unbiased, merit-based lending decisions.',
      points: [
        'Centralized independent underwriting review',
        'Zero field-agent approval authority',
        'Continuous internal audit and portfolio monitoring'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-3">
            <BadgeCheck className="w-3.5 h-3.5 text-[#10B981]" />
            Why Kamal Uday Finance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Institutional Safeguards Built for <span className="text-[#0B3C91]">Borrower Protection</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our operational architecture prioritizes customer dignity, regulatory compliance, and transparent underwriting at every step of the lending journey.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safeguards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0B3C91]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${card.color}15`,
                        color: card.color
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white text-slate-600 border border-slate-200">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#091E42] group-hover:text-[#0B3C91] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-200/70">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: card.color }}
                        />
                        <span className="font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Documented Fair Practice Policy
                  </span>
                  <Link
                    to="/compliance"
                    className="font-bold text-xs hover:underline"
                    style={{ color: card.color }}
                  >
                    View Code →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Governance Assurance Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <Landmark className="w-4 h-4 text-[#0B3C91] shrink-0" />
            <span className="font-semibold text-slate-800">Regulatory Oversight:</span>
            <span>Board-approved Credit, Risk, Pricing, Fair Practices & Grievance Redressal Policies</span>
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

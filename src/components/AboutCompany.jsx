import React from 'react';
import {
  Scale,
  Users2,
  HeartHandshake,
  MapPin,
  Store,
  CheckCircle2,
  Landmark,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutCompany() {
  const pillars = [
    {
      icon: Scale,
      title: 'Responsible Lending',
      description:
        'Lending grounded in genuine repayment capacity. Monthly debt service across all lenders is strictly capped at 50% of household income.',
      spec: '≤ 50% Household FOIR Ceiling',
      bgColor: 'bg-blue-50',
      iconColor: 'text-[#0B3C91]'
    },
    {
      icon: Users2,
      title: 'Financial Inclusion',
      description:
        'Bridging the formal credit divide with small-ticket, collateral-free credit for households earning up to ₹3,00,000 annually.',
      spec: 'Up to ₹3L Annual Household Income',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-[#10B981]'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Trust',
      description:
        'Standardized 1-page Key Fact Statements (KFS), transparent APR, zero hidden fees, and strictly non-coercive recovery (9 AM – 6 PM).',
      spec: 'Zero Hidden Fees & Clear KFS',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: MapPin,
      title: 'Rural & Semi-Urban Focus',
      description:
        'Deploying demand-tested hubs across tier-3, tier-4, and rural catchments where commercial banking branches remain distant.',
      spec: 'Demand-Led Geographic Reach',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-600'
    },
    {
      icon: Store,
      title: 'Micro Enterprises',
      description:
        'Fueling small kirana merchants, dairy farmers, and artisans with structured working capital to build productive livelihoods.',
      spec: 'Working Capital & Inventory Growth',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#10B981]" />
            About Kamal Uday Finance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Built for Financial Inclusion & <span className="text-[#0B3C91]">Responsible Credit</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Delivering small-ticket, collateral-free credit to low-income households and micro-enterprises across rural and semi-urban India.
          </p>
        </div>

        {/* 5 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0B3C91]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="text-base font-bold text-[#091E42] group-hover:text-[#0B3C91] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#0B3C91]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{pillar.spec}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Slot: Clean Regulatory Overview */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B3C91] to-[#072459] text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-base font-bold text-white">
                Statutory Governance
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                Structured under Section 45-IA of the RBI Act, 1934 with ₹10 Cr Net Owned Fund benchmark, maker-checker sanction controls, and zero public deposits.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
              <span className="font-semibold text-white">100% Cashless Disbursals</span>
              <Link
                to="/compliance"
                className="text-emerald-300 hover:text-white font-bold flex items-center gap-1 transition-colors"
              >
                <span>Compliance Code</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blueprint Explorer Bar */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-white to-emerald-50/70 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B3C91] text-white flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-[#091E42]">
                Derived from our Official 8-Clause Business Plan
              </p>
              <p className="text-[11px] text-slate-500">
                Review our complete statutory framework, underwriting process, and risk controls.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="px-4 py-2 rounded-xl bg-[#0B3C91] hover:bg-[#062359] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Explore 8 Clauses</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

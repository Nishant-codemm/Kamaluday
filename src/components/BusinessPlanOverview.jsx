import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Landmark,
  ShieldCheck,
  Scale,
  Users,
  Lock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function BusinessPlanOverview() {
  const planClauses = [
    {
      num: '01',
      title: 'Business Model & Target Market',
      desc: 'Small-ticket, collateral-free credit for low-income households (income up to ₹3L) and micro-enterprises in rural & semi-urban markets with phased growth.',
      tag: 'Section 1'
    },
    {
      num: '02',
      title: 'Products & Lending Operations',
      desc: 'Documented eligibility checks, KYC, indebtedness assessment, credit bureau verification, and 100% cashless disbursal via permitted banking channels.',
      tag: 'Section 2'
    },
    {
      num: '03',
      title: 'RBI Registration & Capital',
      desc: 'Section 45-IA RBI Act framework, proposed NBFC-MFI category, ₹10 Crore Net Owned Fund (NOF), fit-and-proper promoters. Public deposits not accepted.',
      tag: 'Section 3'
    },
    {
      num: '04',
      title: 'Customer Protection & 50% FOIR',
      desc: 'Strict 50% monthly household income debt-service ceiling across all lenders to prevent over-indebtedness, with ongoing ≥60% qualifying assets threshold.',
      tag: 'Section 4'
    },
    {
      num: '05',
      title: 'Governance & Maker-Checker Controls',
      desc: 'Board oversight across credit, risk, liquidity, and grievance redressal with independent maker-checker approvals and internal audit mechanisms.',
      tag: 'Section 5'
    },
    {
      num: '06',
      title: 'Legal & Regulatory Compliance',
      desc: 'Full alignment with Companies Act 2013, PMLA 2002, RBI Scale-Based Regulation (SBR) 2025, and RBI Digital Lending Directions 2025.',
      tag: 'Section 6'
    },
    {
      num: '07',
      title: 'Funding & Financial Viability',
      desc: 'Promoter equity and permitted institutional borrowings, 3-to-5 year financial model, continuous Portfolio-at-Risk (PAR) and liquidity buffer monitoring.',
      tag: 'Section 7'
    },
    {
      num: '08',
      title: 'Implementation & Controlled Pilot',
      desc: 'Incorporation, capital arrangement, policy development, RBI application, followed by an authorised controlled pilot before wider expansion.',
      tag: 'Section 8'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5 text-[#10B981]" />
            Official Institutional Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Anchored Directly in Our <span className="text-[#0B3C91]">Business Plan</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Every feature, policy, and credit parameter of Kamal Uday Finance Private Limited is derived strictly from our institutional planning blueprint dated 5 November 2026.
          </p>
        </div>

        {/* 8 Clauses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {planClauses.map((item) => (
            <div
              key={item.num}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0B3C91]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-[#0B3C91] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#091E42] group-hover:text-[#0B3C91] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-semibold text-[#10B981]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Strict Plan Mandate</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-emerald-50/80 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B3C91] text-white flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#091E42]">
                Explore Complete 8-Section Governance & Regulatory Architecture
              </p>
              <p className="text-xs text-slate-500">
                Read our in-depth corporate mandate, capital structure, and risk oversight models.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="px-5 py-2.5 rounded-xl bg-[#0B3C91] hover:bg-[#062359] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <span>View Full Blueprint</span>
            <ArrowRight className="w-4 h-4 text-[#10B981]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

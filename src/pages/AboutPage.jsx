import React, { useState } from 'react';
import {
  Landmark,
  ShieldCheck,
  Scale,
  Users2,
  HeartHandshake,
  MapPin,
  Store,
  CheckCircle2,
  Lock,
  FileCheck2,
  FileText,
  TrendingUp,
  Cpu,
  Layers,
  Award,
  ArrowRight,
  ChevronRight,
  Info
} from 'lucide-react';

export default function AboutPage({ onOpenWaitlist }) {
  const [activePlanTab, setActivePlanTab] = useState(0);

  // The 8 Foundational Sections from the Business Plan Document
  const businessPlanSections = [
    {
      id: 1,
      title: '1. Business Model & Target Market',
      shortTitle: 'Business Model',
      tag: 'Target Market',
      headline: 'Collateral-free microfinance for rural & semi-urban households',
      content:
        'The Company proposes small-ticket, collateral-free microfinance and related lending for eligible low-income households, self-employed individuals and micro-enterprises, initially in selected rural and semi-urban markets. Growth will be phased according to demand, repayment capacity and portfolio quality.',
      bullets: [
        'Eligible low-income households earning up to ₹3 Lakh annually',
        'Self-employed individuals, artisans, and micro-enterprises',
        'Initial deployment in selected rural & semi-urban markets',
        'Phased expansion driven by genuine community demand and portfolio health'
      ]
    },
    {
      id: 2,
      title: '2. Products & Lending Operations',
      shortTitle: 'Lending Operations',
      tag: 'Credit Process',
      headline: 'Disciplined underwriting and 100% cashless banking channels',
      content:
        'Lending will follow documented eligibility checks, KYC verification, household-income and indebtedness assessment, credit-bureau checks and independent approval. Disbursements will use permitted banking channels. Rates, fees and repayment schedules will be clearly disclosed. Collections will be ethical and non-coercive.',
      bullets: [
        'Documented eligibility & household income checks',
        'Credit-bureau deduplication across all 4 licensed CICs',
        'Disbursements strictly via permitted banking rails (zero cash leakages)',
        'Full upfront disclosure of rates, fees & repayment calendars'
      ]
    },
    {
      id: 3,
      title: '3. RBI Registration & Capital',
      shortTitle: 'Capital & Licensing',
      tag: 'Section 45-IA',
      headline: '₹10 Crore Net Owned Fund (NOF) & NBFC-MFI registration',
      content:
        'The Company will not commence NBFC business until it obtains the applicable RBI Certificate of Registration under Section 45-IA of the RBI Act, 1934, unless specifically exempt. The proposed category—expected to be NBFC-MFI—must be confirmed. The current framework prescribes ₹10 crore Net Owned Fund for a new NBFC-MFI. Promoters must demonstrate eligible capital, fit-and-proper status, transparent ownership, sound governance and a viable business plan. Public deposits will not be accepted.',
      bullets: [
        'Section 45-IA of RBI Act, 1934 Certificate of Registration',
        '₹10 Crore Net Owned Fund (NOF) capitalization benchmark',
        'Fit-and-proper promoter due diligence & transparent shareholding',
        'Strictly non-deposit-taking: Public deposits will NOT be accepted'
      ]
    },
    {
      id: 4,
      title: '4. Microfinance & Customer Protection',
      shortTitle: 'Customer Protection',
      tag: '50% FOIR Cap',
      headline: 'Mandatory 50% household debt service cap & qualifying assets',
      content:
        'RBI microfinance loans are collateral-free loans to households with annual income up to ₹3 lakh. Total monthly household repayments across all loans, including the proposed loan, must not exceed 50% of monthly household income. The Company will use Board-approved income-assessment and pricing policies, credit information data, transparent disclosures and accessible grievance redressal. An NBFC-MFI must maintain the prescribed qualifying-asset threshold, currently at least 60% of total assets (net of intangible assets), on an ongoing basis.',
      bullets: [
        'Collateral-free loans for households earning up to ₹3 Lakh/year',
        'Total monthly repayments across all lenders capped at ≤ 50% of income',
        'Maintaining qualifying-asset threshold (≥ 60% of total assets net of intangibles)',
        'Board-approved pricing, transparent disclosures & multi-tier grievance redressal'
      ]
    },
    {
      id: 5,
      title: '5. Governance, Risk & Internal Controls',
      shortTitle: 'Governance & Risk',
      tag: 'Maker-Checker',
      headline: 'Multi-stage approvals, internal audit, and risk oversight',
      content:
        'The Board will oversee credit, pricing, risk, compliance, liquidity, outsourcing, fraud, cybersecurity, business continuity and grievance policies. Maker-checker controls, segregation of duties, staff training, field verification, internal audit and regular management reporting will be implemented. Capital, provisioning, asset classification and liquidity will follow applicable RBI directions.',
      bullets: [
        'Board oversight across credit, risk, liquidity, and fair practices',
        'Maker-checker multi-level approval controls & segregation of duties',
        'Independent internal audit and field verification checks',
        'Robust cybersecurity & business continuity planning'
      ]
    },
    {
      id: 6,
      title: '6. Legal & Regulatory Compliance',
      shortTitle: 'Legal & PMLA',
      tag: 'Regulatory Rigor',
      headline: 'PMLA 2002, Digital Lending Directions 2025, and MCA compliance',
      content:
        'The Company will comply with the Companies Act, 2013; applicable RBI directions; KYC and anti-money-laundering requirements under the PMLA framework; credit information reporting; tax and statutory filings; and applicable data-protection and cybersecurity laws. Digital lending, if used, will comply with RBI Digital Lending Directions, 2025 and relevant outsourcing requirements. A compliance calendar and designated compliance responsibility will be maintained.',
      bullets: [
        'Companies Act, 2013 & PMLA Anti-Money Laundering adherence',
        'RBI Digital Lending Directions, 2025 compliant digital trails',
        'Reporting to all 4 RBI-licensed Credit Information Companies',
        'Formal compliance calendar with designated managerial responsibility'
      ]
    },
    {
      id: 7,
      title: '7. Funding & Financial Viability',
      shortTitle: 'Financial Viability',
      tag: 'Funding Model',
      headline: 'Promoter equity, institutional debt, and PAR monitoring',
      content:
        'Funding is expected from promoter equity and permitted institutional borrowings. A three-to-five-year financial model will cover capital, cost of funds, operating expenses, lending yield, credit losses, liquidity, profitability and break-even, including downside scenarios. The Board will monitor collections, delinquencies, portfolio-at-risk, NPAs, liquidity, complaints and capital buffers. Expansion will depend on sustainable portfolio performance.',
      bullets: [
        'Promoter equity and permitted institutional credit lines',
        '3-to-5 year financial model covering cost of funds, yield & break-even',
        'Continuous surveillance of Portfolio-at-Risk (PAR) and asset quality',
        'Downside scenario planning and liquidity buffer management'
      ]
    },
    {
      id: 8,
      title: '8. Implementation & Launch Conditions',
      shortTitle: 'Launch Roadmap',
      tag: 'Controlled Pilot',
      headline: 'Prerequisite steps, controlled pilot, and non-negotiables',
      content:
        'The Company will complete incorporation, promoter due diligence, capital arrangement, policy development and its RBI application before launch. After authorisation, it will establish banking and credit-bureau arrangements, technology, trained staff, customer documentation, grievance channels and internal controls. A controlled pilot will precede expansion. No regulated lending or claim of RBI registration will be made before approval.',
      bullets: [
        'Phase 1: Incorporation, capital arrangement & policy development',
        'Phase 2: Formal RBI application under Section 45-IA',
        'Phase 3: Banking & credit bureau integration, core IT rails',
        'Phase 4: Authorised controlled pilot followed by phased expansion'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F8FAFC]">
      
      {/* Page Header Banner */}
      <section className="relative py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-4">
              <Landmark className="w-3.5 h-3.5 text-[#10B981]" />
              Official Business Plan & Corporate Governance
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091E42] tracking-tight">
              About Kamal Uday Finance <br />
              <span className="text-[#0B3C91]">Private Limited</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <strong>Purpose:</strong> To expand access to responsible credit for underserved households and micro-enterprises through a well-governed, compliant and financially sustainable lending institution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* Section 1: Executive Profile & Business Model */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                Foundational Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42]">
                Bridging India’s Credit Gap with Dignity, Technology & Compliance
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The Company proposes small-ticket, collateral-free microfinance and related lending for eligible low-income households, self-employed individuals and micro-enterprises, initially in selected rural and semi-urban markets.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Growth will be phased according to demand, repayment capacity and portfolio quality. Lending operations will strictly follow documented eligibility checks, KYC verification, household-income and indebtedness assessment, credit-bureau checks and independent multi-tier approval.
              </p>
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Documented Cashflow Checks</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>100% Cashless Disbursals</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Maker-Checker Approval Controls</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Ethical Non-Coercive Collections</span>
                </div>
              </div>
            </div>

            {/* Right Card: Institutional Capital & Statutory Standards */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-[#091E42] pb-3 border-b border-slate-200 flex items-center justify-between">
                <span>Statutory Mandate Summary</span>
                <span className="text-[11px] font-bold text-[#0B3C91] bg-white px-2.5 py-1 rounded border border-slate-200">
                  Section 45-IA
                </span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Proposed Category:</span>
                  <span className="font-bold text-[#0B3C91]">NBFC-MFI</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Net Owned Fund (NOF):</span>
                  <span className="font-bold text-slate-800">₹10 Crore Benchmark</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Qualifying Assets:</span>
                  <span className="font-bold text-[#10B981]">≥ 60% of Total Assets</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/70">
                  <span className="text-slate-500 font-medium">Public Deposits:</span>
                  <span className="font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Not Accepted</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-500 font-medium">Promoter Criteria:</span>
                  <span className="font-bold text-slate-800">Fit-and-Proper Approved</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 leading-normal">
                <span className="font-bold text-[#0B3C91]">Non-Negotiable: </span>
                No regulated lending or public claim of RBI registration will be made prior to the formal receipt of the Certificate of Registration.
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: The 8 Sections of the Official Business Plan (Interactive Explorer) */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-card-soft">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5 w-fit">
              <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
              Official Business Plan Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-3">
              The 8 Core Pillars of Kamal Uday Finance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Directly synthesized from our foundational institutional planning document dated 5 November 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 8 Section Tabs */}
            <div className="lg:col-span-5 space-y-2">
              {businessPlanSections.map((sec, idx) => {
                const isActive = activePlanTab === idx;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActivePlanTab(idx)}
                    className={`w-full p-3.5 rounded-2xl text-left flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-[#0B3C91] text-white shadow-md font-bold'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium border border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {sec.id}
                      </span>
                      <span className="text-xs sm:text-sm">{sec.shortTitle}</span>
                    </div>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-emerald-400 text-[#091E42]' : 'bg-white text-slate-500 border border-slate-200'
                      }`}
                    >
                      {sec.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Section Details */}
            <div className="lg:col-span-7 bg-gradient-to-br from-slate-50 to-blue-50/30 p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  {businessPlanSections[activePlanTab].tag}
                </span>
                <h3 className="text-2xl font-extrabold text-[#091E42] mt-2">
                  {businessPlanSections[activePlanTab].title}
                </h3>
                <p className="text-xs font-semibold text-[#0B3C91] mt-0.5">
                  {businessPlanSections[activePlanTab].headline}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
                {businessPlanSections[activePlanTab].content}
              </div>

              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Key Operational Mandates:
                </p>
                {businessPlanSections[activePlanTab].bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span>Currency: Indian Rupees (₹)</span>
                <span className="font-semibold text-[#0B3C91]">Section {activePlanTab + 1} of 8</span>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Non-Negotiable Pre-Launch Requirements Banner */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card-soft">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                Non-Negotiable Pre-Launch Requirements
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#091E42]">
                Board-Approved Operational Policies Ahead of Launch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Board-approved policies must cover credit underwriting, household-income assessment, pricing and fair practices, KYC/AML, collections, customer complaints, risk and liquidity, internal audit, fraud, outsourcing, IT/cybersecurity, business continuity, provisioning and regulatory reporting. Maintain accurate books, statutory records, required returns and auditable customer-level loan records.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Key Official Regulatory References */}
        <section className="bg-slate-900 text-slate-300 p-8 sm:p-10 rounded-3xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-blue-400" />
            <span>Key Official Regulatory References</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-bold text-white">RBI Act, 1934 – Section 45-IA</p>
              <p className="text-[11px] text-slate-400 mt-1">NBFC Registration Requirement</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-bold text-white">RBI Scale-Based Regulation, 2025</p>
              <p className="text-[11px] text-slate-400 mt-1">SBR Framework for NBFCs</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-bold text-white">RBI Microfinance Directions, 2022</p>
              <p className="text-[11px] text-slate-400 mt-1">Harmonized Regulatory Framework</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-bold text-white">Qualifying Assets Criteria Review, 2025</p>
              <p className="text-[11px] text-slate-400 mt-1">≥ 60% Qualifying Asset Rule</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-bold text-white">RBI Digital Lending Directions, 2025</p>
              <p className="text-[11px] text-slate-400 mt-1">Cashless Disbursement Rail</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="font-bold text-white">Companies Act, 2013 & PMLA 2002</p>
              <p className="text-[11px] text-slate-400 mt-1">Incorporation & AML Governance</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

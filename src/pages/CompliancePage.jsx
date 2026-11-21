import React from 'react';
import {
  ShieldAlert,
  Scale,
  FileCheck,
  Landmark,
  Lock,
  HeartHandshake,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function CompliancePage() {
  const complianceDirectives = [
    {
      title: 'Section 45-IA, RBI Act 1934',
      subtitle: 'NBFC-MFI Certificate of Registration',
      description:
        'The Company will not commence any NBFC lending business until it obtains the formal Certificate of Registration from the Reserve Bank of India. Prescribes ₹10 Crore Net Owned Fund (NOF) requirement for a new NBFC-MFI.',
      status: 'In Application Pipeline'
    },
    {
      title: 'RBI Microfinance Loans Directions, 2022',
      subtitle: 'Harmonized Regulatory Framework',
      description:
        'Governs collateral-free credit to households with annual income up to ₹3,00,000. Mandates that total monthly debt repayments across all lenders must never exceed 50% of monthly household income.',
      status: 'Strict Policy Enforcement'
    },
    {
      title: 'Qualifying Assets Criteria (≥ 60%)',
      subtitle: 'Portfolio Composition Threshold',
      description:
        'Under RBI directions, the Company will maintain at least 60% of total assets (net of intangible assets) in qualifying microfinance loans on an ongoing basis.',
      status: 'Ongoing Asset Rule'
    },
    {
      title: 'RBI Digital Lending Directions, 2025',
      subtitle: 'Cashless Banking Channels',
      description:
        'All loan disbursements and repayments are strictly executed directly between the borrower’s verified bank account and the NBFC bank account without third-party pool accounts.',
      status: '100% Cashless Mandate'
    },
    {
      title: 'Scale-Based Regulation (SBR), 2025',
      subtitle: 'Governance, Capital & Provisioning',
      description:
        'Implementation of Board-approved policies for credit underwriting, liquidity, risk management, internal audit, and asset classification following RBI scale-based rules.',
      status: 'Board Supervised'
    },
    {
      title: 'PMLA 2002 & KYC Master Directions',
      subtitle: 'Anti-Money Laundering Framework',
      description:
        'Mandatory customer identification, official valid documents (OVD) verification, biometric/e-KYC authentication, and continuous reporting.',
      status: 'PMLA Compliant'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#F8FAFC]">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5 text-[#3B82F6]" />
              Regulatory Governance & Fair Practices
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091E42] tracking-tight">
              Compliance Architecture & <br />
              <span className="text-[#0B3C91]">Borrower Protection Code</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Built ground-up around the statutory directives of the Reserve Bank of India. Our non-negotiable commitment to fair practices, transparency, and borrower dignity defines our institutional character.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* Section 1: Statutory Framework Grid */}
        <section>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Statutory Basis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-3">
              Official Regulatory References & Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Kamal Uday Finance Private Limited is structured to comply with all primary directives issued by the Reserve Bank of India and Ministry of Corporate Affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceDirectives.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-card-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-[#0B3C91] border border-slate-200">
                      {item.status}
                    </span>
                    <Landmark className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#091E42]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#10B981] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mandatory Policy Rule</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Fair Practices & Non-Coercive Collections Code */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                Borrower Dignity Charter
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42]">
                Strictly Ethical, Non-Coercive Recovery Code
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Collections at Kamal Uday Finance are strictly governed by empathy, legal compliance, and customer dignity. We view debt recovery through the lens of long-term borrower rehabilitation rather than intimidation.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Respectful Contact Hours:</strong> Customers may only be contacted between 9:00 AM and 6:00 PM.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Zero Harassment:</strong> Zero tolerance for verbal coercion, intimidation, or persistent unwarranted contact.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Designated Meeting Venues:</strong> Customer interactions happen only at mutually agreed locations or residences.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Staff Code of Conduct:</strong> All field staff undergo mandatory ethics training and certification.</span>
                </div>
              </div>
            </div>

            {/* Right Card: Key Fact Statement (KFS) Guarantee */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-[#091E42] pb-3 border-b border-slate-200">
                Key Fact Statement (KFS) Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prior to loan execution, every borrower receives a standardized 1-page Key Fact Statement in their preferred vernacular language clearly displaying:
              </p>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>Annualized Percentage Rate (APR)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>All processing fees and statutory levies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>Full repayment schedule & installment breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>Explicit disclosure: Zero foreclosure penalties</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] font-semibold text-[#0B3C91] border-t border-slate-200">
                Aligned with RBI Directions on Lending Transparency
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: 3-Tier Grievance Redressal Mechanism (GRM) */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-card-soft">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Customer Redressal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-3">
              3-Tier Grievance Redressal Mechanism (GRM)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              A responsive, time-bound escalation matrix ensuring every customer grievance is investigated and resolved fairly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                Level 1
              </span>
              <h4 className="text-base font-bold text-[#091E42] mt-2">Branch / Field Helpdesk</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Borrowers may register their grievance with the Branch Manager or customer service desk in person, by phone, or in the complaint register.
              </p>
              <p className="text-xs font-bold text-[#0B3C91] mt-4">
                Resolution Timeline: Within 7 Working Days
              </p>
            </div>

            {/* Tier 2 */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B3C91] bg-blue-100 px-2 py-0.5 rounded">
                Level 2 (Secretariat)
              </span>
              <h4 className="text-base font-bold text-[#091E42] mt-2">Principal Grievance Officer</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                If unresolved within 7 days, the matter is escalated to our corporate Grievance Redressal Officer at the Registered Office.
              </p>
              <p className="text-xs font-bold text-[#0B3C91] mt-4">
                Email: grievances@kamaludayfinance.com
              </p>
              <p className="text-xs font-bold text-[#10B981]">
                Resolution Timeline: Within 15 Working Days
              </p>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                Level 3 (Regulatory)
              </span>
              <h4 className="text-base font-bold text-[#091E42] mt-2">RBI Ombudsman (RB-IOS)</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                If the complaint is not resolved within 30 days, the customer may approach the Reserve Bank Ombudsman under the Integrated Ombudsman Scheme.
              </p>
              <p className="text-xs font-bold text-slate-700 mt-4">
                Portal: cms.rbi.org.in
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Mandatory Statutory Disclaimer Box */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-slate-300 border border-slate-800">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs leading-relaxed">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Statutory Regulatory Qualification & Disclaimer
              </h4>
              <p>
                Kamal Uday Finance Private Limited is an entity in the process of incorporation and institutional formation as a proposed Microfinance Non-Banking Financial Company (NBFC-MFI). The Company will not commence any lending operations or financial business until it obtains the applicable Certificate of Registration under Section 45-IA of the Reserve Bank of India Act, 1934. The Company does not accept and will not solicit public deposits. This website is a pre-launch informational preview and does not constitute a public solicitation or offer of credit.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Landmark
} from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Lending & Institutional Partnership',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError('Please complete all required fields.');
      return;
    }
    setError('');
    setSent(true);
  };

  const faqs = [
    {
      q: 'What is Kamal Uday Finance Private Limited?',
      a: 'Kamal Uday Finance Private Limited is a proposed microfinance-focused Non-Banking Financial Company (NBFC-MFI) being incorporated to deliver ethical, collateral-free credit and digital financial solutions to underserved rural and semi-urban households and micro-enterprises across India.'
    },
    {
      q: 'When will the Company commence lending operations?',
      a: 'Lending operations will commence strictly following the formal receipt of the Certificate of Registration under Section 45-IA of the Reserve Bank of India Act, 1934. A controlled pilot in selected demand-tested hubs will precede broader geographic expansion.'
    },
    {
      q: 'Does Kamal Uday Finance accept public deposits?',
      a: 'No. Under its proposed NBFC-MFI regulatory status and non-deposit-taking framework, Kamal Uday Finance Private Limited does not accept and will never solicit public deposits. Capitalization is provided solely by promoter equity and permitted institutional borrowings.'
    },
    {
      q: 'What is the 50% FOIR household income protection guard?',
      a: 'Under the Reserve Bank of India (Regulatory Framework for Microfinance Loans) Directions, 2022, no household can be burdened with total monthly loan repayments across all lenders exceeding 50% of monthly household income. Kamal Uday Finance strictly enforces this guard to prevent borrower over-indebtedness.'
    },
    {
      q: 'What are the eligibility criteria for microfinance loans?',
      a: 'Microfinance loans are collateral-free loans extended to households with annual income up to ₹3,00,000. All applicants undergo documented income verification, biometric/e-KYC, and multi-credit-bureau indebtedness evaluation.'
    },
    {
      q: 'How can institutional lenders or co-lending partners engage?',
      a: 'We welcome inquiries from commercial banks, development financial institutions, and institutional equity partners. You may reach our Promoter and Secretariat desk directly via partnerships@kamaludayfinance.com.'
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5 text-[#10B981]" />
              Official Communications & Inquiries
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#091E42] tracking-tight">
              Contact Our <span className="text-[#0B3C91]">Secretariat Desk</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              For institutional collaborations, co-lending inquiries, regulatory liaisons, or general pre-launch communication with the promoters of Kamal Uday Finance Private Limited.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        
        {/* Contact Coordinates & Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Registered Office Placeholder */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B3C91] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Registered Office
                  </span>
                  <h3 className="text-base font-bold text-[#091E42] mt-0.5">
                    Kamal Uday Finance Private Limited
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Mohanwadi, Pune, Maharashtra — 411006, India
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#0B3C91] font-semibold">
                    <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Corporate Secretarial & Compliance Department</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Email Channels Placeholder */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Email Mailboxes
                  </span>
                  <h3 className="text-base font-bold text-[#091E42] mt-0.5">
                    Official Inquiries & Partnerships
                  </h3>
                  <div className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <p className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-24">General:</span>
                      <a href="mailto:contact@kamaludayfinance.com" className="font-semibold text-[#0B3C91] hover:underline">
                        contact@kamaludayfinance.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-24">Institutional:</span>
                      <a href="mailto:partnerships@kamaludayfinance.com" className="font-semibold text-[#0B3C91] hover:underline">
                        partnerships@kamaludayfinance.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium w-24">Grievances:</span>
                      <a href="mailto:grievances@kamaludayfinance.com" className="font-semibold text-emerald-700 hover:underline">
                        grievances@kamaludayfinance.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Telephone Coordinates Placeholder */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Telecommunication Desk
                  </span>
                  <h3 className="text-base font-bold text-[#091E42] mt-0.5">
                    Corporate Contact & Helpline
                  </h3>
                  <div className="mt-2 text-xs sm:text-sm text-slate-700 space-y-1">
                    <p className="font-semibold text-slate-800 flex items-center gap-2">
                      <a href="tel:+917981853211" className="text-[#0B3C91] hover:underline font-bold text-sm">
                        +91 79818 53211
                      </a>
                      <span className="text-slate-400 font-normal text-xs">(Official Contact)</span>
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Monday to Friday, 9:30 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-Launch Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-emerald-50 px-2.5 py-1 rounded">
                Pre-Launch Communications
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#091E42] mt-2">
                Send an Institutional Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Leave a direct message for our promoter and governance team. We respond within 2 business days.
              </p>
            </div>

            {sent ? (
              <div className="p-8 text-center bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                <div className="w-14 h-14 bg-emerald-100 text-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Message Received</h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you for reaching out to Kamal Uday Finance Private Limited. A representative from our secretarial desk will review your submission and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormState({
                      name: '',
                      email: '',
                      phone: '',
                      organization: '',
                      inquiryType: 'Lending & Institutional Partnership',
                      message: ''
                    });
                  }}
                  className="mt-6 text-xs font-semibold text-[#0B3C91] underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Official / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@institution.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Organization / Entity Name
                    </label>
                    <input
                      type="text"
                      placeholder="Bank / Micro-enterprise / Fund"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-xs"
                  >
                    <option>Lending & Institutional Partnership</option>
                    <option>Co-Lending & Banking Rails</option>
                    <option>Technology & Credit Bureau Liaison</option>
                    <option>Prospective Borrower / Community Lead</option>
                    <option>Media & General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please brief us on your interest or partnership proposal..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-xs resize-none"
                  />
                </div>

                {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0B3C91] to-[#1E4DB7] hover:shadow-lg hover:shadow-[#0B3C91]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#10B981]" />
                  <span>Submit Inquiry to Secretariat</span>
                </button>
              </form>
            )}

          </div>
        </div>

        {/* FAQ Accordions Section */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-card-soft">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5 w-fit">
              <HelpCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-3">
              Answers to Common Inquiries
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Key insights into our proposed NBFC-MFI structure, borrower protection, and licensing roadmap.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#091E42]">
                      {item.q}
                    </span>
                    <span className="p-1 rounded-lg bg-white border border-slate-200 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}

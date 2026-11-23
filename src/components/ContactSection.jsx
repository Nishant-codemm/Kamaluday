import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2
} from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Lending & Institutional Partnership',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError('Please complete all required fields.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3C91]/5 border border-[#0B3C91]/15 text-[#0B3C91] text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-[#10B981]" />
            Official Communications
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091E42] tracking-tight">
            Connect With Our <span className="text-[#0B3C91]">Secretariat</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            For institutional inquiries, prospective partnerships, regulatory liaisons, or general communication during our pre-launch phase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Registered Office Placeholder */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#0B3C91] flex items-center justify-center shrink-0">
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
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-[#10B981] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Email Mailboxes
                  </span>
                  <h3 className="text-base font-bold text-[#091E42] mt-0.5">
                    Official Inquiries & Partnerships
                  </h3>
                  <div className="mt-2 space-y-1 text-xs sm:text-sm text-slate-700">
                    <p className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium">General:</span>
                      <a href="mailto:contact@kamaludayfinance.com" className="font-semibold text-[#0B3C91] hover:underline">
                        contact@kamaludayfinance.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium">Institutional:</span>
                      <a href="mailto:partnerships@kamaludayfinance.com" className="font-semibold text-[#0B3C91] hover:underline">
                        partnerships@kamaludayfinance.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-slate-400 font-medium">Grievances:</span>
                      <a href="mailto:grievances@kamaludayfinance.com" className="font-semibold text-emerald-700 hover:underline">
                        grievances@kamaludayfinance.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Phone Coordinates Placeholder */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-[#3B82F6] flex items-center justify-center shrink-0">
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
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-emerald-50 px-2.5 py-1 rounded">
                Pre-Launch Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#091E42] mt-2">
                Send an Institutional Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Leave a message for our promoter and governance team. We respond within 2 business days.
              </p>
            </div>

            {sent ? (
              <div className="p-8 text-center bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                <div className="w-14 h-14 bg-emerald-100 text-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Inquiry Received</h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you for reaching out to Kamal Uday Finance. A representative from our pre-launch team will review your message and connect with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormState({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Lending & Institutional Partnership',
                      message: ''
                    });
                  }}
                  className="mt-6 text-xs font-semibold text-[#0B3C91] underline"
                >
                  Send another message
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
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Official / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-sm"
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
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-sm"
                    >
                      <option>Lending & Institutional Partnership</option>
                      <option>Technology & Banking Rail Integration</option>
                      <option>Vendor & Credit Bureau Liaison</option>
                      <option>Media & General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please brief us on your interest or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] bg-white shadow-sm resize-none"
                  />
                </div>

                {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#0B3C91] to-[#1E4DB7] hover:shadow-lg hover:shadow-[#0B3C91]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#10B981]" />
                  <span>Submit Inquiry to Secretariat</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import {
  Rocket,
  CheckCircle2,
  Sparkles,
  Send
} from 'lucide-react';

export default function LaunchSection({ onOpenWaitlist }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const milestones = [
    {
      stage: 'Phase 01',
      title: 'Corporate Incorporation',
      status: 'Completed',
      desc: 'Company incorporation, promoter due diligence & constitutional framework.',
      completed: true,
      current: false,
    },
    {
      stage: 'Phase 02',
      title: 'Capital & Policy Architecture',
      status: 'Completed',
      desc: '₹10 Cr Net Owned Fund benchmark & Board-approved Fair Practices policies.',
      completed: true,
      current: false,
    },
    {
      stage: 'Phase 03',
      title: 'RBI Filing & Core Tech Infrastructure',
      status: 'In Progress',
      desc: 'Section 45-IA application preparation, credit bureau & banking rails integration.',
      completed: false,
      current: true,
    },
    {
      stage: 'Phase 04',
      title: 'Controlled Pilot Launch',
      status: 'Upcoming',
      desc: 'Authorised pilot across select rural and semi-urban hubs followed by phased expansion.',
      completed: false,
      current: false,
    },
  ];

  return (
    <section id="launch" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 bg-mesh-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#0B3C91]/10 via-[#3B82F6]/15 to-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-4">
            <Rocket className="w-3.5 h-3.5 text-[#10B981]" />
            Institutional Readiness Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091E42] tracking-tight">
            Launching Soon
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Website Under Development — We are meticulously putting in place all governance, capital, and technical guardrails ahead of our institutional launch.
          </p>
        </div>

        {/* Master Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl shadow-[#0B3C91]/10 overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B3C91] via-[#3B82F6] to-[#10B981]" />

            {/* Status Heading Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                  Status: Pre-Launch Readiness
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mt-2">
                  Website Under Development
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Controlled pilot launch will commence following formal authorization.
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 shrink-0 self-start sm:self-auto">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                </span>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Readiness</p>
                  <p className="text-sm font-bold text-[#091E42]">75% Complete</p>
                </div>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="my-8">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2.5">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#10B981]" />
                  Institutional & Technical Milestone Progress
                </span>
                <span className="text-[#0B3C91]">Stage 3 of 4</span>
              </div>
              <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-[#0B3C91] via-[#3B82F6] to-[#10B981] rounded-full relative w-3/4"
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer-fast rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2 font-medium">
                <span>Incorporation & Governance</span>
                <span className="text-[#0B3C91] font-semibold">RBI Application & Core Systems</span>
                <span>Authorised Pilot</span>
              </div>
            </div>

            {/* 4 Milestones Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {milestones.map((item) => (
                <div
                  key={item.stage}
                  className={`p-4 rounded-2xl border transition-all duration-200 ${
                    item.completed
                      ? 'bg-emerald-50/40 border-emerald-200/80 text-slate-800'
                      : item.current
                      ? 'bg-blue-50/60 border-blue-300 shadow-sm ring-1 ring-blue-300/50'
                      : 'bg-slate-50/60 border-slate-200 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      {item.stage}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.completed
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.current
                          ? 'bg-blue-100 text-[#0B3C91] animate-pulse'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#091E42]">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Interactive Priority Notification Form */}
            <div className="mt-8 pt-8 border-t border-slate-100 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/90 text-center">
              <h4 className="text-lg font-bold text-[#091E42]">
                Be the First to Know When We Launch
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Join our priority updates list for announcements regarding regulatory milestones, partnership opportunities, and pilot rollouts.
              </p>

              {submitted ? (
                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  <span>Thank you! Your email has been registered for priority launch updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate or personal email"
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] text-sm bg-white shadow-sm"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#0B3C91] hover:bg-[#062359] text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2 shrink-0"
                    >
                      <span>Notify Me</span>
                      <Send className="w-4 h-4 text-[#10B981]" />
                    </button>
                  </div>
                  {error && <p className="text-xs text-rose-600 mt-2 text-left">{error}</p>}
                  <p className="text-[11px] text-slate-400 mt-2 text-center">
                    No spam. Unsubscribe at any time. Strictly for official launch notices.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

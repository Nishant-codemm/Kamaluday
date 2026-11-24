import React, { useState } from 'react';
import {
  Rocket,
  CheckCircle2,
  Sparkles,
  Send,
  Clock,
  ArrowRight
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

  const steps = [
    { num: '01', title: 'Corporate Incorporation', status: 'Completed', active: false, done: true },
    { num: '02', title: 'Capital & Policy Architecture', status: 'Completed', active: false, done: true },
    { num: '03', title: 'RBI Filing & Core Tech', status: 'In Progress', active: true, done: false },
    { num: '04', title: 'Controlled Pilot Launch', status: 'Upcoming', active: false, done: false },
  ];

  return (
    <section id="launch" className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5 text-[#10B981]" />
            Readiness Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091E42] tracking-tight">
            Launching Soon
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
            Website Under Development — Finalizing institutional governance, capital benchmark, and banking integrations.
          </p>
        </div>

        {/* Master Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
            
            {/* Status Heading Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3C91] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                  Status: Pre-Launch Readiness
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#091E42] mt-2">
                  Stage 3 of 4: Regulatory Preparation
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Controlled pilot launch will commence following formal authorization.
                </p>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0 self-start sm:self-auto">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
                <span className="text-xs font-bold text-[#091E42]">75% Complete</span>
              </div>
            </div>

            {/* Modern Horizontal Stepper */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className={`p-4 rounded-2xl border transition-all ${
                    st.done
                      ? 'bg-emerald-50/60 border-emerald-200'
                      : st.active
                      ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300'
                      : 'bg-slate-50 border-slate-200 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase">
                      Phase {st.num}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        st.done
                          ? 'bg-emerald-100 text-emerald-800'
                          : st.active
                          ? 'bg-blue-100 text-[#0B3C91]'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {st.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#091E42] leading-snug">
                    {st.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Notification Form Strip */}
            <div className="pt-6 border-t border-slate-100 text-center max-w-md mx-auto">
              <h4 className="text-base font-bold text-[#091E42]">
                Be the First to Know When We Launch
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Receive official announcements regarding regulatory milestones and pilot rollouts.
              </p>

              {submitted ? (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Thank you! Your email has been registered for priority launch updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] text-xs bg-white"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#0B3C91] hover:bg-[#062359] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Notify Me</span>
                      <Send className="w-3.5 h-3.5 text-[#10B981]" />
                    </button>
                  </div>
                  {error && <p className="text-xs text-rose-600 mt-1.5 text-left">{error}</p>}
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

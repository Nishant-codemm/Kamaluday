import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, Landmark } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Institutional Investor');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B3C91] via-[#3B82F6] to-[#10B981]" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#10B981] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-[#091E42]">You are on the Priority List</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in <strong className="text-slate-800">Kamal Uday Finance</strong>. We will notify you promptly upon our regulatory approvals and controlled pilot launch.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0B3C91] text-white font-semibold text-sm hover:bg-[#062359] transition-colors"
                >
                  Return to Preview
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded bg-blue-50 text-[#0B3C91]">
                  <Landmark className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold text-[#0B3C91] uppercase tracking-wider">
                  Kamal Uday Finance • Priority Access
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#091E42] tracking-tight">
                Request Priority Access & Updates
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Receive confidential investor briefings, regulatory milestones, and early-access invitations before general launch.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    I am an / Representing:
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B3C91] text-sm bg-white"
                  >
                    <option>Institutional Investor / Equity Partner</option>
                    <option>Banking / Co-Lending Partner</option>
                    <option>Micro-Enterprise / Prospective Borrower</option>
                    <option>Credit Bureau / Fintech Infrastructure Partner</option>
                    <option>Media / Regulatory Analyst</option>
                  </select>
                </div>

                {error && <p className="text-xs text-rose-600">{error}</p>}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[#0B3C91] to-[#1E4DB7] hover:shadow-lg hover:shadow-[#0B3C91]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Confirm Priority Registration</span>
                    <Send className="w-4 h-4 text-[#10B981]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Strict privacy. No unsolicited emails. Under Pre-Launch Protocol.</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

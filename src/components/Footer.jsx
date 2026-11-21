import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Landmark, Lock, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091E42] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column with Official Logo Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block border border-slate-700 shadow-md">
              <img
                src="/logo.jpg"
                alt="Kamal Uday Finance Private Limited Official Logo"
                className="h-14 sm:h-16 w-auto object-contain rounded"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering India's financial future through ethical lending, disciplined governance, and inclusive microcredit solutions for underserved households and micro-enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700/80 text-emerald-300 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Section 45-IA RBI Act Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 border border-slate-700/80 text-blue-300 text-[11px] font-semibold">
                <Lock className="w-3.5 h-3.5" /> ₹10 Cr NOF Capital Benchmark
              </span>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Company & Platform
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home Landing</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About & Governance</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products & Credit Solutions</Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-white transition-colors">Compliance & Borrower Protection</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Secretariat</Link>
              </li>
            </ul>
          </div>

          {/* Regulatory Standards Column */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Statutory Governance & Official Standards
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>Reserve Bank of India Act, 1934 – Section 45-IA (NBFC-MFI Framework)</span>
              </li>
              <li className="flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>RBI Scale-Based Regulation (SBR) Directions, 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>RBI Regulatory Framework for Microfinance Loans Directions, 2022</span>
              </li>
              <li className="flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>RBI Digital Lending Directions, 2025 (Permitted Banking Channels Only)</span>
              </li>
              <li className="flex items-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>Companies Act, 2013 | PMLA 2002 | Fair Practices Code Aligned</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Qualification & Mandatory Statutory Disclaimer Box */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-[11px] leading-relaxed text-slate-400">
          <p className="font-bold text-slate-300 uppercase tracking-wide mb-1 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            Mandatory Statutory Disclosure & Regulatory Qualification:
          </p>
          <p>
            Kamal Uday Finance Private Limited is an entity in the process of incorporation and institutional formation as a proposed Microfinance Non-Banking Financial Company (NBFC-MFI). The Company will not commence any lending operations or financial business until it obtains the applicable Certificate of Registration under Section 45-IA of the Reserve Bank of India Act, 1934. The Company does not accept and will not solicit public deposits. This website is a pre-launch informational preview and does not constitute a public solicitation or offer of credit.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <div>
            <p className="font-medium text-slate-400">
              © {new Date().getFullYear()} Kamal Uday Finance Private Limited. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Designed with professionalism, transparency and trust.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800/80"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

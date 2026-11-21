import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Governance', path: '/about' },
    { name: 'Products & Credit', path: '/products' },
    { name: 'Compliance & Protection', path: '/compliance' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 py-2.5'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 border border-slate-200 shadow-xs flex items-center justify-center shrink-0 group-hover:border-[#0B3C91]/40 transition-colors">
                <img
                  src="/logo-emblem.jpg"
                  alt="Kamal Uday Finance Emblem"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#0B3C91] leading-none">
                    KAMAL UDAY FINANCE
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-50 text-[#10B981] border border-emerald-200">
                    NBFC-MFI
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Private Limited
                  </span>
                  <span className="text-[10px] text-slate-400 hidden md:inline">•</span>
                  <span className="text-[10px] font-semibold text-[#0B3C91]/80 hidden md:inline">
                    Proposed Section 45-IA
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs font-bold uppercase tracking-wider py-1.5 transition-colors relative ${
                      isActive
                        ? 'text-[#0B3C91] after:w-full after:h-0.5 after:bg-[#0B3C91] after:absolute after:bottom-0 after:left-0'
                        : 'text-slate-600 hover:text-[#0B3C91]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Side Status & CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] text-slate-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span>Pre-Launch</span>
              </div>

              <button
                onClick={onOpenWaitlist}
                className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0B3C91] hover:bg-[#062359] hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Priority Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenWaitlist}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#0B3C91] text-white hover:bg-[#062359] transition-colors"
              >
                Access
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl lg:hidden"
          >
            <div className="flex flex-col space-y-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between font-medium">
                <span>Proposed Entity:</span>
                <span className="font-bold text-[#0B3C91]">NBFC-MFI (Sec 45-IA)</span>
              </div>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2 text-sm font-semibold transition-colors border-b border-slate-100 ${
                      isActive ? 'text-[#0B3C91] font-bold' : 'text-slate-700 hover:text-[#0B3C91]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full mt-2 py-3 px-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#0B3C91] to-[#10B981] shadow-md shadow-[#0B3C91]/15"
              >
                Request Priority Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CompliancePage from './pages/CompliancePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#0B3C91]/15 selection:text-[#0B3C91] relative flex flex-col justify-between">
        
        {/* Sticky Header with Official Logo & Multi-page Nav */}
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/products" element={<ProductsPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer with Official Logo & Statutory Regulatory Disclosures */}
        <Footer />

        {/* Priority Access Waitlist Modal */}
        <WaitlistModal
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />

      </div>
    </HashRouter>
  );
}

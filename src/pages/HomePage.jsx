import React from 'react';
import Hero from '../components/Hero';
import AboutCompany from '../components/AboutCompany';
import WhatWeOffer from '../components/WhatWeOffer';
import InteractiveFoirCalculator from '../components/InteractiveFoirCalculator';
import Vision from '../components/Vision';
import WhyUs from '../components/WhyUs';
import LaunchSection from '../components/LaunchSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenWaitlist }) {
  return (
    <div>
      {/* 1. Hero Section with Official Logo & Disbursal Rail Preview */}
      <Hero onOpenWaitlist={onOpenWaitlist} />

      {/* 2. About Company: 5 Strategic Pillars & Blueprint Explorer */}
      <AboutCompany />

      {/* 3. What We Will Offer: Core Products & Operational Rails */}
      <WhatWeOffer />

      {/* 4. Responsible Lending Guard: Interactive 50% FOIR Calculator */}
      <InteractiveFoirCalculator />

      {/* 5. Vision Manifesto */}
      <Vision />

      {/* 6. Why Kamal Uday Finance: 4 Foundational Operational Guarantees */}
      <WhyUs />

      {/* 7. Launch Section & Readiness Roadmap */}
      <LaunchSection onOpenWaitlist={onOpenWaitlist} />

      {/* 8. Official Secretariat Contact */}
      <ContactSection />
    </div>
  );
}

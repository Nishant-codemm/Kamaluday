import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function Vision() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#0B3C91] via-[#082866] to-[#041538] text-white overflow-hidden">
      {/* Decorative ambient radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3B82F6]/20 via-[#10B981]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold text-emerald-300 uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Our Institutional Vision
        </div>

        {/* Decorative Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#10B981] shadow-lg">
            <Quote className="w-7 h-7 rotate-180" />
          </div>
        </div>

        {/* Large Centered Quote */}
        <blockquote className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-3xl mx-auto">
          “Building a future where{' '}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-blue-200 bg-clip-text text-transparent">
            responsible finance
          </span>{' '}
          reaches every deserving household.”
        </blockquote>

        {/* Supporting statement */}
        <p className="mt-6 text-sm sm:text-base text-blue-100/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Kamal Uday Finance Private Limited is established on the conviction that rural and semi-urban enterprise thrives when credit is transparent, non-coercive, and structured around genuine repayment capacity.
        </p>

        {/* Signoff / Brand Emblem */}
        <div className="mt-8 flex flex-col items-center justify-center gap-1">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#10B981] to-transparent mb-2" />
          <span className="text-sm font-bold tracking-wider uppercase text-white">
            Kamal Uday Finance Private Limited
          </span>
          <span className="text-xs text-blue-200/70 font-medium">
            Proposed NBFC-MFI • Section 45-IA, RBI Act 1934
          </span>
        </div>

      </div>
    </section>
  );
}

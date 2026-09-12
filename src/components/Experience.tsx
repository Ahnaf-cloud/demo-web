import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                03 &bull; TRAJECTORY &amp; PRACTICE
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Timeline</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
              Pengalaman Praktik &amp; Pembelajaran
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Riwayat pembelajaran mandiri dan praktik nyata yang disajikan dengan kejujuran akademis dan standar industri.
            </p>
          </div>
        </div>

        {/* Demo Context Notice */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 flex items-center justify-between gap-4 text-xs sm:text-sm text-amber-950">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <p>
              <strong>Data Demonstrasi:</strong> Pengalaman disajikan sebagai bukti dedikasi belajar dan eksplorasi karya fiktif terarah untuk paket Rp150.000.
            </p>
          </div>
          <span className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-amber-800 font-semibold shrink-0">
            [ NON-COMMERCIAL PRACTICE ]
          </span>
        </div>

        {/* Elegant Editorial Timeline */}
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={item.period}
              className="group p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400/80 hover:shadow-xl hover:shadow-stone-200/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Period, Index, and Category */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-stone-900 text-amber-400 font-bold">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-stone-500 uppercase">
                      Phase #{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-amber-800 tracking-wide font-mono">
                    {item.subtitle}
                  </p>

                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 border border-stone-200/70">
                    {item.type}
                  </span>
                </div>

                {/* Right Column: Narrative & Key Accomplishments */}
                <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l lg:border-stone-200/80">
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold block mb-3">
                      Aktivitas Inti &amp; Capaian Pembelajaran:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50/80 border border-stone-200/70 text-xs sm:text-sm text-stone-700 font-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { GraduationCap, Calendar, School, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 bg-[#F4F1EA]/50 border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                04 &bull; ACADEMIC FOUNDATION
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Education</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900">
              Latar Belakang Pendidikan
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
            Format penyajian riwayat pendidikan formal yang terstruktur rapi untuk kelengkapan berkas lamaran kerja.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={edu.period}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-stone-400/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-stone-900 text-amber-400">
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full font-semibold">
                    {edu.status}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 shrink-0">
                    {idx === 0 ? <School className="w-6 h-6 text-stone-900" /> : <GraduationCap className="w-6 h-6 text-stone-900" />}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-amber-700 font-mono mt-0.5">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed font-normal mt-4">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Formal Education</span>
                <span>Fiktif / Demo Rp150K</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

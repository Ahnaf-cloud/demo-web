import React from 'react';
import { Sparkles, UserCheck, Feather, Compass, TrendingUp, ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import { personalBrandingData } from '../data/portfolioData';

export const PersonalBranding: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-amber-500" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-amber-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="branding" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                07 &bull; PHILOSOPHY &amp; ETHICS
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Manifesto</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
              Lebih Dari Sekadar Portofolio
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Visi desain, etos kerja profesional, dan kerangka berpikir kreatif yang membedakan talenta berkarakter dari sekadar pembuat grafis biasa.
            </p>
          </div>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {personalBrandingData.pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 hover:border-stone-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-stone-400 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-stone-900 mb-1 leading-snug">
                  {pillar.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold block mb-4">
                  {pillar.subtitle}
                </span>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Personal Positioning</span>
                <span>Standar Siap Kerja Rp150K</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Editorial Quote / Positioning Manifesto */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-stone-900 text-white relative overflow-hidden border border-stone-800 shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Quote className="w-40 h-40 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              [ REFLEKSI NILAI KOMPETITIF ]
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 leading-snug">
              &ldquo;Desain yang baik bukan hanya tentang estetika visual yang memikat, tetapi tentang kemampuan memecahkan masalah, menyampaikan pesan secara jernih, dan menghargai setiap tenggat waktu kerja.&rdquo;
            </h3>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-stone-400 text-xs sm:text-sm font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Integritas Kreatif
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Orientasi Solusi
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                Pembelajaran Berkelanjutan
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

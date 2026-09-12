import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Target, HeartHandshake, Sparkles, Quote } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F4F1EA]/60 border-y border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Tracker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
            01 &bull; PROFILE &amp; PHILOSOPHY
          </span>
          <div className="h-px w-16 bg-stone-300"></div>
          <span className="text-xs font-mono text-stone-400 uppercase">Editorial Bio</span>
        </div>

        {/* Large Statement */}
        <div className="max-w-5xl mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.18]">
            Membangun identitas visual melalui proses belajar yang terstruktur, eksplorasi antarmuka digital, dan komitmen pada kualitas rasa.
          </h2>
        </div>

        {/* Asymmetrical Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Short Biography & Visual Personal Branding Seal */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Biography */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block">
                The Narrative
              </span>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                {aboutData.bio}
              </p>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Di era digital yang serba cepat, portfolio bukan sekadar etalase dokumen statis, melainkan ruang pembuktian cara berpikir analitis, sensitivitas visual, dan kemauan untuk terus menyempurnakan setiap detail antarmuka.
              </p>
            </div>

            {/* Visual Element: Personal Branding Editorial Seal */}
            <div className="p-7 rounded-3xl bg-stone-900 text-stone-200 border border-stone-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
                    BRANDING ATTRIBUTE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-stone-400">ID / DP-2026</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-stone-800 border border-stone-700 flex items-center justify-center font-display font-black text-2xl text-amber-400 shadow-inner shrink-0">
                  DP
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono">
                    Creative Designer &bull; Indonesia
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 italic leading-relaxed pt-2">
                "Presisi dalam sistem grid, ketenangan dalam ruang kosong, dan kejelasan dalam penyampaian ide."
              </p>
            </div>

          </div>

          {/* Right Column: Refined Editorial Breakdown (Values, Interests, Direction) */}
          <div className="lg:col-span-7 divide-y divide-stone-200/90">
            
            {/* 1. Personal Values */}
            <div className="pb-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-amber-700 font-bold uppercase">01.01</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                  Nilai Pribadi &amp; Etos Kerja
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-6 border-l-2 border-amber-500">
                {aboutData.personalValues}
              </p>
            </div>

            {/* 2. Interests & Focus */}
            <div className="py-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-amber-700 font-bold uppercase">01.02</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                  Minat Eksplorasi &amp; Fokus
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-6 border-l-2 border-stone-400">
                {aboutData.interest}
              </p>
              <div className="pl-6 pt-2">
                <p className="text-xs sm:text-sm text-stone-500 italic">
                  <strong>Fokus saat ini:</strong> {aboutData.focus}
                </p>
              </div>
            </div>

            {/* 3. Career Direction */}
            <div className="pt-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-amber-700 font-bold uppercase">01.03</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                  Arah Karier &amp; Visi Masa Depan
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-6 border-l-2 border-stone-900">
                {aboutData.careerDirection}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

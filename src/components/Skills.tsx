import React from 'react';
import { Palette, Wrench, Sparkles, Check, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryBadge = (name: string) => {
    if (name.toLowerCase().includes('design')) return 'Core Discipline';
    if (name.toLowerCase().includes('tools')) return 'Daily Stack';
    return 'Ways of Working';
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-stone-800" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                02 &bull; COMPETENCIES &amp; TOOLKIT
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Expertise</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
              Keahlian &amp; Kapabilitas Praktik
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Menyajikan kompetensi berbasis domain fungsional dan eksekusi alat kerja nyata, tanpa persentase arbitrary.
          </p>
        </div>

        {/* 3 Categories Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className="group rounded-3xl bg-white border border-stone-200/90 p-8 hover:border-stone-400/80 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top accent glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-900 via-amber-500 to-stone-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200/80 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200/60">
                    {getCategoryBadge(category.name)}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mb-8 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Skills Stack List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:bg-stone-100/80 hover:border-stone-300 transition-all group/item"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-display font-bold text-stone-900 text-base group-hover/item:text-amber-800 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-stone-600 border border-stone-200/80">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Tag */}
              <div className="pt-6 mt-8 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>Domain #{catIndex + 1}</span>
                <span className="flex items-center gap-1 text-stone-700 font-semibold group-hover:text-stone-950">
                  <span>Verified Skill</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Thoughtful Ways of Working Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#181614] text-[#FAF8F5] border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Workflow &amp; Collaboration
            </span>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Pendekatan Terstruktur dalam Setiap Siklus Desain
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Mulai dari perumusan masalah, eksplorasi moodboard dan wireframe di Figma, pembuatan aset grafis vektor di Canva, hingga struktur dokumentasi siap kolaborasi.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800/90 border border-stone-700 text-xs font-mono text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Metode Kerja Teruji
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ProjectItem } from '../types';
import { Layout, Share2, Sparkles, Calendar, Globe, Coffee, Layers, TrendingUp, BookOpen, ShieldCheck, Check, ArrowUpRight, Award, Sliders } from 'lucide-react';

interface ProjectThumbnailProps {
  project: ProjectItem;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
  switch (project.id) {
    case 'project-1': // Svara Coffee Co.
      return (
        <div className="w-full aspect-16/10 bg-[#1D1714] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-stone-100 select-none border border-stone-800">
          {/* Subtle noise and texture grid */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] bg-[size:12px_12px]"></div>
          
          {/* Top Label Bar */}
          <div className="flex justify-between items-center z-10 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-widest">
              <Coffee className="w-3.5 h-3.5" /> SVARA SPECIALTY CO.
            </span>
            <span className="bg-amber-950/80 border border-amber-600/40 text-amber-300 px-2.5 py-0.5 rounded-full text-[10px] font-mono">
              LOT #042 &bull; GAYO
            </span>
          </div>

          {/* Realistic Artisan Packaging Label Mockup Center */}
          <div className="my-auto z-10 py-2">
            <div className="mx-auto max-w-sm bg-[#FAF8F5] text-stone-900 rounded-xl p-4 sm:p-5 shadow-2xl border border-amber-200/60 relative">
              {/* Gold foil decorative corner notch */}
              <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-mono text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                <span>1,450 MASL</span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-0.5">
                SINGLE ORIGIN &bull; ANAEROBIC NATURAL
              </span>
              
              <h4 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-950">
                Takengon Reserve
              </h4>

              {/* Tasting notes chips */}
              <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-stone-200/80 text-[10px] font-medium text-stone-700">
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200/80">Jasmine Floral</span>
                <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-900 border border-orange-200/80">Candied Bergamot</span>
                <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-800 border border-stone-200">Wild Forest Honey</span>
              </div>
            </div>
          </div>

          {/* Footer Specs Bar */}
          <div className="flex items-center justify-between pt-2.5 border-t border-stone-800/90 text-[10px] font-mono text-stone-400 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D1714] border border-stone-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF8F5]"></span>
              <span className="text-stone-300">Pantone Earth Palette</span>
            </div>
            <span className="text-amber-400 font-semibold">36-Page Brand System</span>
          </div>
        </div>
      );

    case 'project-2': // Modulr Design System
      return (
        <div className="w-full aspect-16/10 bg-[#0F172A] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-slate-100 select-none border border-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf815_1px,transparent_1px),linear-gradient(to_bottom,#38bdf815_1px,transparent_1px)] bg-[size:16px_16px]"></div>

          {/* Top System Header */}
          <div className="flex justify-between items-center z-10 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-blue-400 font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" /> MODULR &bull; UI TOKENS
            </span>
            <span className="bg-blue-950/80 border border-blue-500/40 text-blue-300 px-2.5 py-0.5 rounded-full text-[10px]">
              FIGMA VARIABLES v5
            </span>
          </div>

          {/* Live UI Components Specimen Board */}
          <div className="my-auto z-10 py-1.5 space-y-3">
            {/* Row 1: Button variants with states */}
            <div className="flex items-center gap-2.5 overflow-x-auto">
              <div className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 shrink-0">
                <Check className="w-3 h-3" />
                <span>Primary Active</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium hover:bg-slate-700 shrink-0">
                Secondary
              </div>
              <div className="px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[11px] font-mono flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>WCAG AA Passed</span>
              </div>
            </div>

            {/* Row 2: Color token scales */}
            <div className="grid grid-cols-6 gap-1.5 pt-1">
              {[
                { hex: '#0F172A', label: '900' },
                { hex: '#1E293B', label: '800' },
                { hex: '#2563EB', label: 'Pri' },
                { hex: '#3B82F6', label: '500' },
                { hex: '#10B981', label: 'Suc' },
                { hex: '#F8FAFC', label: '050' },
              ].map((token, i) => (
                <div key={i} className="rounded-lg p-1.5 bg-slate-800/80 border border-slate-700/80 text-center">
                  <div className="w-full h-3.5 rounded mb-1" style={{ backgroundColor: token.hex }}></div>
                  <span className="text-[9px] font-mono text-slate-400 block">{token.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Handoff Bar */}
          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800 text-[10px] font-mono text-slate-400 z-10">
            <span>120+ Nested Components</span>
            <span className="text-blue-400 font-semibold">Atomic Design System</span>
          </div>
        </div>
      );

    case 'project-3': // Aura FinTrack
      return (
        <div className="w-full aspect-16/10 bg-[#0C121E] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-white select-none border border-slate-800">
          <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Bar */}
          <div className="flex justify-between items-center z-10 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5" /> AURA FINTRACK &bull; OLED UI
            </span>
            <span className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-2.5 py-0.5 rounded-full text-[10px]">
              +14.8% MTD
            </span>
          </div>

          {/* Interactive Financial Dashboard Mockup */}
          <div className="my-auto z-10 py-1.5 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Total Portfolio Value</span>
                <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Rp 148.520.000</span>
                  <span className="text-xs text-emerald-400 font-mono font-normal">▲ 3.2% Hari ini</span>
                </div>
              </div>
            </div>

            {/* Simulated Bézier Trend Line (SVG) */}
            <div className="relative h-12 w-full overflow-hidden rounded-lg bg-slate-900/60 border border-slate-800/80 p-1 flex items-end">
              <svg className="w-full h-10 stroke-emerald-400 fill-emerald-500/10" viewBox="0 0 300 60" preserveAspectRatio="none">
                <path d="M0,45 Q40,35 80,48 T160,20 T240,28 T300,8 L300,60 L0,60 Z" />
                <path d="M0,45 Q40,35 80,48 T160,20 T240,28 T300,8" fill="none" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-2.5 border-t border-slate-800/90 text-[10px] font-mono text-slate-400 z-10">
            <span>Dark Mode OLED-Optimized</span>
            <span className="text-emerald-400 font-semibold">24+ Screen Mobile Flows</span>
          </div>
        </div>
      );

    case 'project-4': // Nusantara Heritage Archive
      return (
        <div className="w-full aspect-16/10 bg-[#16120E] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-stone-200 select-none border border-stone-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-[size:14px_14px]"></div>

          {/* Top Bar */}
          <div className="flex justify-between items-center z-10 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-purple-400 font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" /> NUSANTARA ARCHIVE &bull; EDITORIAL
            </span>
            <span className="bg-purple-950/80 border border-purple-500/40 text-purple-300 px-2.5 py-0.5 rounded-full text-[10px]">
              VOL. 14 / EDISI KHUSUS
            </span>
          </div>

          {/* Editorial Spatial Typography Layout */}
          <div className="my-auto z-10 py-1 space-y-2">
            <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-700/80 shadow-lg space-y-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-purple-300 block">
                ETNOGRAFI DIGITAL &bull; ARSIP RUANG
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-100 leading-snug">
                Geometri Rumah Gadang: Harmoni Kosmologi dalam Konstruksi Pasak
              </h4>
              <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                Studi morfologi arsitektur vernakular Minangkabau melalui dokumentasi spasial digital dan tipografi terstruktur.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-2.5 border-t border-stone-800/90 text-[10px] font-mono text-stone-400 z-10">
            <span>Spatial Typography &amp; Storytelling</span>
            <span className="text-purple-400 font-semibold">Web Experience Case Study</span>
          </div>
        </div>
      );

    case 'project-5': // Kinetic Summit 2026
      return (
        <div className="w-full aspect-16/10 bg-[#0B0B0B] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-white select-none border border-stone-800">
          {/* Swiss Grid Lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Top Bar */}
          <div className="flex justify-between items-center z-10 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-rose-500 font-bold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" /> KINETIC SUMMIT 2026
            </span>
            <span className="bg-rose-950/80 border border-rose-500/50 text-rose-300 px-2.5 py-0.5 rounded-full text-[10px] font-mono">
              JAKARTA / GLOBAL
            </span>
          </div>

          {/* Swiss Modernist Event Poster Center */}
          <div className="my-auto z-10 py-1 text-center space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
              INTERNATIONAL DESIGN &amp; TECH CONFERENCE
            </div>
            <div className="font-display text-2xl sm:text-3xl font-black tracking-tighter text-white leading-tight">
              MOMENTUM &bull; 2026
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">30+ Speakers</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/60 text-rose-300 border border-rose-700/60">3 Days Summit</span>
            </div>
          </div>

          {/* Bottom Bar with Barcode */}
          <div className="flex items-center justify-between pt-2.5 border-t border-stone-800/90 text-[10px] font-mono text-stone-400 z-10">
            <div className="tracking-widest font-mono text-[9px] text-stone-500">||| | |||| || | ||||| |||</div>
            <span className="text-rose-400 font-semibold">Format Cetak A1 (300 DPI)</span>
          </div>
        </div>
      );

    case 'project-6': // Atma Living
      return (
        <div className="w-full aspect-16/10 bg-[#151916] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-stone-200 select-none border border-stone-800">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Top Bar */}
          <div className="flex justify-between items-center z-10 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" /> ATMA LIVING &bull; STOREFRONT
            </span>
            <span className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-2.5 py-0.5 rounded-full text-[10px]">
              D2C E-COMMERCE
            </span>
          </div>

          {/* Minimalist PDP Card */}
          <div className="my-auto z-10 py-1">
            <div className="max-w-sm mx-auto p-4 rounded-xl bg-[#FAF8F5] text-stone-900 shadow-xl border border-stone-200 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-stone-500 block">Kursi Artisan Solid Wood</span>
                <h4 className="font-display font-bold text-base text-stone-950">Kyoto Lounge Chair</h4>
                <div className="text-xs font-mono font-bold text-emerald-800">Rp 2.450.000</div>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1.5">
                <div className="flex gap-1">
                  <span className="w-3 h-3 rounded-full bg-amber-800 border border-stone-300" title="Natural Teak"></span>
                  <span className="w-3 h-3 rounded-full bg-stone-800 border border-stone-300" title="Ebonized Ash"></span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-stone-900 text-white">
                  Add to Cart
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between pt-2.5 border-t border-stone-800/90 text-[10px] font-mono text-stone-400 z-10">
            <span>High Conversion Storefront</span>
            <span className="text-emerald-400 font-semibold">Design to Checkout Flow</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full aspect-16/10 bg-stone-900 p-5 flex items-center justify-center text-stone-400">
          <Sparkles className="w-8 h-8" />
        </div>
      );
  }
};


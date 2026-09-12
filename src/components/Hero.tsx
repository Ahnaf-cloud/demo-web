import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles, Palette, Layers, Compass, Check, Copy, Sliders, Smartphone, Laptop, Coffee } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeArtboardTab, setActiveArtboardTab] = useState<'flagship' | 'tokens' | 'architecture'>('flagship');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<'gayo' | 'toraja' | 'kerinci'>('gayo');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2500);
  };

  const batches = {
    gayo: {
      name: 'Takengon Reserve',
      lot: 'LOT #042',
      process: 'Anaerobic Natural',
      elevation: '1,450 MASL',
      notes: ['Jasmine Floral', 'Bergamot', 'Wild Honey'],
      color: '#D97706',
    },
    toraja: {
      name: 'Sapan Sesean',
      lot: 'LOT #088',
      process: 'Washed Extended',
      elevation: '1,800 MASL',
      notes: ['Dark Cocoa', 'Blackcurrant', 'Cedar'],
      color: '#B45309',
    },
    kerinci: {
      name: 'Kayu Aro High',
      lot: 'LOT #114',
      process: 'Honey Yeast Ferment',
      elevation: '1,600 MASL',
      notes: ['Ripe Mango', 'Brown Sugar', 'Cacao'],
      color: '#92400E',
    },
  };

  const currentBatch = batches[selectedBatch];

  return (
    <section id="hero" className="relative pt-6 pb-20 sm:pt-12 sm:pb-32 overflow-hidden">
      {/* Background Subtle Editorial Grid & Watermark Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      {/* Ambient warm glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-stone-300/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-200/80 text-xs sm:text-sm text-stone-600 font-medium"
        >
          {/* Location indicator */}
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-semibold text-stone-900">{personalInfo.location}</span>
          </div>

          {/* Availability status */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Demo Portfolio Profesional &bull; Paket Rp150.000
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-stone-400">
              [ 2026 OFFICIAL SHOWCASE ]
            </span>
          </div>
        </motion.div>

        {/* Monumental Name & Role */}
        <div className="mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-700 font-bold">
                {personalInfo.role}
              </span>
              <div className="h-px w-8 bg-amber-600/40 hidden sm:block"></div>
              <span className="text-xs font-mono text-stone-500 hidden sm:inline">
                Curated Design Systems &bull; Brand Identity &bull; UI/UX
              </span>
            </div>
            
            {/* Extremely Large Confident Name */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-stone-900 leading-[0.92] uppercase">
              {personalInfo.name}
            </h1>
          </motion.div>
        </div>

        {/* Editorial Headline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="pb-10 mb-12 border-b border-stone-200/80"
        >
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-850 max-w-5xl leading-tight sm:leading-[1.18]">
            "Merancang identitas visual yang distingtif, arsitektur sistem desain terukur, dan pengalaman antarmuka digital yang berdampak nyata."
          </p>
        </motion.div>

        {/* Asymmetrical Layout: Left Narrative & Actions vs Right Live Studio Artboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Short introduction, values pull, and dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Short Narrative Biography */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Editorial Philosophy Statement */}
            <div className="p-6 rounded-2xl bg-white border-l-4 border-amber-600 border-y border-r border-stone-200/80 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.04)] space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                  Prinsip Perancangan Desain
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-stone-900 italic leading-relaxed">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-btn-view-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-stone-900/15 hover:shadow-stone-900/25 transition-all group cursor-pointer"
              >
                <span>Eksplorasi Studi Kasus</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform text-amber-400" />
              </a>

              <a
                id="hero-btn-contact-me"
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300/90 font-semibold text-sm sm:text-base rounded-full shadow-xs hover:border-stone-400 transition-all group cursor-pointer"
              >
                <span>Kontak &amp; Kolaborasi</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Copy Feedback notification */}
            {copiedToken && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 animate-fadeIn">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Nilai token "{copiedToken}" disalin ke clipboard!</span>
              </div>
            )}

            {/* Key Metrics row */}
            <div className="pt-2 border-t border-stone-200/80 grid grid-cols-3 gap-4">
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-stone-900">06</span>
                <span className="text-xs font-mono text-stone-500">Studi Kasus Lengkap</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-stone-900">120+</span>
                <span className="text-xs font-mono text-stone-500">Design Tokens</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl font-black text-emerald-700">100%</span>
                <span className="text-xs font-mono text-stone-500">Standar WCAG AA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Studio Artboard & Living Design Specimen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/10 via-stone-300/30 to-amber-200/20 opacity-70 -z-10 blur-md"></div>

              {/* Main Interactive Artboard Frame */}
              <div className="relative rounded-3xl bg-[#141210] text-[#FAF8F5] p-6 sm:p-8 border border-stone-800 shadow-2xl overflow-hidden">
                
                {/* Artboard Top Browser/Figma-like Bar */}
                <div className="flex items-center justify-between pb-5 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono text-stone-400 ml-2 hidden sm:inline">artboard.fig / Dimas Pratama</span>
                  </div>

                  {/* Mode switcher tabs */}
                  <div className="flex items-center p-1 rounded-xl bg-stone-900 border border-stone-800 text-[11px] font-mono">
                    <button
                      onClick={() => setActiveArtboardTab('flagship')}
                      className={`px-3 py-1 rounded-lg transition ${
                        activeArtboardTab === 'flagship'
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Case Study
                    </button>
                    <button
                      onClick={() => setActiveArtboardTab('tokens')}
                      className={`px-3 py-1 rounded-lg transition ${
                        activeArtboardTab === 'tokens'
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Tokens
                    </button>
                    <button
                      onClick={() => setActiveArtboardTab('architecture')}
                      className={`px-3 py-1 rounded-lg transition ${
                        activeArtboardTab === 'architecture'
                          ? 'bg-amber-500 text-stone-950 font-bold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Specs
                    </button>
                  </div>
                </div>

                {/* TAB 1: Flagship Living Case Study Specimen */}
                {activeArtboardTab === 'flagship' && (
                  <div className="py-6 space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                      <span className="text-amber-400 font-bold flex items-center gap-1.5">
                        <Coffee className="w-4 h-4" />
                        SVARA COFFEE CO.
                      </span>
                      <span className="text-[11px] bg-stone-900 border border-stone-800 px-2 py-0.5 rounded">
                        Interactive Packaging Specimen
                      </span>
                    </div>

                    {/* Interactive Batch Selector */}
                    <div className="flex items-center gap-2">
                      {(['gayo', 'toraja', 'kerinci'] as const).map((key) => (
                        <button
                          key={key}
                          onClick={() => setSelectedBatch(key)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono transition cursor-pointer ${
                            selectedBatch === key
                              ? 'bg-white text-stone-900 font-bold shadow-xs'
                              : 'bg-stone-900/80 text-stone-400 hover:text-white border border-stone-800'
                          }`}
                        >
                          {key.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    {/* The Live Physical Packaging Label Card */}
                    <div className="p-6 rounded-2xl bg-[#FAF8F5] text-stone-900 shadow-2xl border border-stone-200 relative overflow-hidden transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-0.5">
                            {currentBatch.lot} &bull; {currentBatch.process}
                          </span>
                          <h4 className="font-serif text-2xl font-bold text-stone-950 tracking-tight">
                            {currentBatch.name}
                          </h4>
                          <span className="text-xs font-mono text-amber-800 font-semibold block mt-0.5">
                            Ketinggian: {currentBatch.elevation}
                          </span>
                        </div>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-white text-sm shadow-md"
                          style={{ backgroundColor: currentBatch.color }}
                        >
                          SC
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-stone-200">
                        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1.5">
                          Tasting Profile Notes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentBatch.notes.map((note, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-stone-200/90 text-stone-800 shadow-2xs"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-stone-400 pt-1">
                      <span>Tipografi: Canela Serif &bull; Swiss Sans</span>
                      <a href="#projects" className="text-amber-400 hover:underline flex items-center gap-1 font-semibold">
                        <span>Buka Studi Kasus</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}

                {/* TAB 2: Design Tokens & Palette */}
                {activeArtboardTab === 'tokens' && (
                  <div className="py-6 space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                      <span className="text-blue-400 font-bold flex items-center gap-1.5">
                        <Palette className="w-4 h-4" />
                        GLOBAL DESIGN TOKENS
                      </span>
                      <span className="text-[11px] text-stone-500">Klik swatch untuk salin hex</span>
                    </div>

                    {/* Color Swatches Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { label: 'amber-600', hex: '#D97706', text: 'white' },
                        { label: 'stone-950', hex: '#0C0A09', text: 'white' },
                        { label: 'off-white', hex: '#FAF8F5', text: 'stone-900' },
                        { label: 'emerald-500', hex: '#10B981', text: 'white' },
                      ].map((swatch) => (
                        <div
                          key={swatch.hex}
                          onClick={() => handleCopy(swatch.hex, swatch.label)}
                          className="p-3 rounded-xl bg-stone-900 border border-stone-800 hover:border-stone-600 cursor-pointer transition group"
                        >
                          <div
                            className="w-full h-8 rounded-lg mb-2 shadow-inner border border-white/10 flex items-center justify-end px-2"
                            style={{ backgroundColor: swatch.hex }}
                          >
                            <Copy className="w-3 h-3 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-xs font-bold text-stone-200 block truncate">{swatch.label}</span>
                          <span className="text-[10px] font-mono text-stone-500">{swatch.hex}</span>
                        </div>
                      ))}
                    </div>

                    {/* Typographic Scale Preview */}
                    <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400">
                        <span>TYPOGRAPHY HIERARCHY</span>
                        <span>SCALE 1.25 (MAJOR THIRD)</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-display font-black text-lg text-white">Display Heading (Syne)</span>
                          <span className="text-[10px] font-mono text-stone-500">64px / 1.0</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-sans font-bold text-sm text-stone-300">Subheading (Plus Jakarta)</span>
                          <span className="text-[10px] font-mono text-stone-500">20px / 1.3</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-sans text-xs text-stone-400">Body Paragraph Text</span>
                          <span className="text-[10px] font-mono text-stone-500">16px / 1.6</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Device Architecture & Specs */}
                {activeArtboardTab === 'architecture' && (
                  <div className="py-6 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Sliders className="w-4 h-4" />
                        STANDARISASI &amp; ARSITEKTUR
                      </span>
                      <span className="text-[11px] text-emerald-400 font-semibold">Siap Kerja Spec</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                        <span className="text-[10px] font-mono text-stone-500 block">SISTEM GRID</span>
                        <h5 className="font-bold text-sm text-white font-display">8-Point Baseline</h5>
                        <p className="text-xs text-stone-400">Semua jarak dan ritme vertikal mematuhi kelipatan 8px konsisten.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                        <span className="text-[10px] font-mono text-stone-500 block">KONTROL AKSES</span>
                        <h5 className="font-bold text-sm text-white font-display">WCAG 2.1 AA</h5>
                        <p className="text-xs text-stone-400">Rasio kontras minimum 4.5:1 untuk teks dan 3:1 untuk elemen UI.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                        <span className="text-[10px] font-mono text-stone-500 block">RESPONSIVITAS</span>
                        <h5 className="font-bold text-sm text-white font-display">Mobile First 320px+</h5>
                        <p className="text-xs text-stone-400">Breakpoint adaptif untuk Smartphone, Tablet, Laptop, dan Ultra-wide.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                        <span className="text-[10px] font-mono text-stone-500 block">DOKUMEN CV</span>
                        <h5 className="font-bold text-sm text-white font-display">Dual Mode CV</h5>
                        <p className="text-xs text-stone-400">Dukungan pratinjau modal instan dan unduh berkas lokal siap cetak.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Footer Bar */}
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Specimen KREATIV STUDIO (Rp150.000)</span>
                  </span>
                  <span>v2.4 &bull; 2026</span>
                </div>

              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-stone-200/90 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Personal Brand Enterprise</p>
                  <p className="text-[11px] text-stone-500 font-medium">Portofolio Berkelas Dunia</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};


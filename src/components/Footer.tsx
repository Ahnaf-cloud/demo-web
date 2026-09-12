import React from 'react';
import { ArrowUp, Sparkles, Heart, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenComparison: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenComparison }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row: Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-stone-800/80 items-start">
          
          {/* Brand & Persona Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-display font-black text-sm tracking-wider shadow-md">
                DP
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
              {personalInfo.role}
            </p>

            <p className="text-stone-400 text-sm font-normal max-w-md leading-relaxed">
              Koleksi portofolio digital personal dengan fokus pada identitas visual, perancangan antarmuka pengguna, dan eksplorasi konten kreatif berbasis data demonstrasi.
            </p>

            <div className="pt-2 text-xs font-mono text-stone-500">
              Lokasi: <span className="text-stone-300 font-semibold">{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-stone-400 font-bold block">
              Navigasi Halaman
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-stone-400">
              <a href="#about" className="hover:text-white transition">Tentang</a>
              <a href="#skills" className="hover:text-white transition">Keahlian</a>
              <a href="#projects" className="hover:text-white transition">Studi Kasus</a>
              <a href="#experience" className="hover:text-white transition">Pengalaman</a>
              <a href="#education" className="hover:text-white transition">Pendidikan</a>
              <a href="#certificates" className="hover:text-white transition">Sertifikat</a>
              <a href="#branding" className="hover:text-white transition">Prinsip</a>
              <a href="#cv" className="hover:text-white transition">Resume (CV)</a>
              <a href="#contact" className="hover:text-white transition">Kontak</a>
            </div>
          </div>

          {/* Scroll to Top Column */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 p-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition cursor-pointer text-xs font-mono group"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Demo Portfolio Package Clarification Banner */}
        <div className="py-8 border-b border-stone-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start sm:items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-mono font-bold px-3 py-1 rounded-full text-[11px] border border-amber-500/40 shrink-0">
              <Sparkles className="w-3.5 h-3.5" /> PAKET RP150.000 &bull; SIAP KERJA
            </span>
            <p className="text-stone-400 leading-relaxed font-normal">
              Website ini adalah <strong>DEMO PORTFOLIO</strong> dari <strong>KREATIV STUDIO</strong> menggunakan data fiktif untuk simulasi personal branding tingkat profesional.
            </p>
          </div>

          <button
            onClick={onOpenComparison}
            className="text-amber-400 hover:text-amber-300 font-mono font-medium underline underline-offset-4 cursor-pointer shrink-0"
          >
            Lihat Komparasi Paket Rp50K vs Rp150K &rarr;
          </button>
        </div>

        {/* Bottom copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p>© 2026 {personalInfo.name} &bull; All Rights Reserved (Demo Portfolio)</p>
          <div className="flex items-center gap-2">
            <span>Dirancang sebagai showcase demo oleh</span>
            <span className="text-white font-bold tracking-wider">KREATIV STUDIO</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { FileDown, FileText, CheckCircle2, Eye, ShieldCheck, Printer, Sparkles, X, ArrowRight, Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { cvData, personalInfo } from '../data/portfolioData';

export const CVSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadCV = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      const demoCvContent = `=====================================================
CURRICULUM VITAE — ${personalInfo.name.toUpperCase()} (SPECIMEN DEMO)
Role: ${personalInfo.role}
Location: ${personalInfo.location}
Email: ${personalInfo.email}
WhatsApp: ${personalInfo.whatsapp}
Spesifikasi: KREATIV STUDIO (Paket Portofolio Personal Rp150.000)
=====================================================

1. RINGKASAN PROFIL:
${cvData.summaryText}

2. SPESIFIKASI TEKNIS & KOMPETENSI:
${cvData.coreCompetencies.map(c => `• ${c}`).join('\n')}

3. KEAHLIAN PERANGKAT LUNAK:
• Figma & Tokens Studio (Advanced Design Systems)
• Adobe Creative Cloud (Illustrator, Photoshop, InDesign)
• Prototyping & Micro-interactions (Framer, Principle)
• HTML5, CSS3, Tailwind CSS & Responsive Standards
• Accessibility & Contrast Compliance (WCAG 2.1 AA)

4. RIWAYAT PENDIDIKAN (DEMO):
• 2024–2028 (Diharapkan): Institut Seni & Desain Kreatif — S1 Desain Komunikasi Visual (IPK 3.82/4.00)
• 2021–2024: SMK Grafika & Multimedia Nusantara — Konsentrasi Desain Grafis & Produksi Media (Lulusan Terbaik)

5. RIWAYAT PRAKTIK & PENGALAMAN (DEMO):
• 2025–2026: Independent Design Practice & Studio Concept (Case Studies & Systems)
• 2024–2025: Junior UI & Visual Design Apprentice (Design System & Brand Assets)

Catatan: Dokumen ini merupakan representasi Curriculum Vitae (CV) DEMO resmi untuk Paket Website Portfolio Rp150.000 dari KREATIV STUDIO.
=====================================================`;

      const blob = new Blob([demoCvContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `CV_Dimas_Pratama_DEMO_Rp150K.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <section id="cv" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-16 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                08 &bull; OFFICIAL RESUME &amp; SPECIFICATIONS
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Curriculum Vitae</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
              Dokumen CV Profesional
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Representasi berkas riwayat hidup lengkap dengan standar format rekrutmen profesional, pratinjau online, dan dokumen siap unduh.
            </p>
          </div>
        </div>

        {/* CV Official Document Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Main: The Physical Document Frame */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border-2 border-stone-200/90 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Guilloche / Formal Certificate Pattern accent on top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-stone-800 via-amber-600 to-stone-900"></div>

            {/* Official Watermark & Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-stone-200">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>BERKAS RESMI PELAMAR KERJA (CONTOH DEMO)</span>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200/80">
                REF: DP-CV-2026-v2
              </span>
            </div>

            {/* Document Header */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">
                CURRICULUM VITAE
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                {cvData.fullName}
              </h3>
              <p className="text-sm sm:text-base font-medium text-stone-600 font-mono mt-1">
                {cvData.headline} &bull; {personalInfo.location}
              </p>
            </div>

            {/* Ringkasan Profil */}
            <div className="mb-8 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold block">
                Ringkasan Profil Eksekutif:
              </span>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal bg-stone-50/80 p-5 rounded-2xl border border-stone-200/80">
                {cvData.summaryText}
              </p>
            </div>

            {/* Spesifikasi Teknis & Kompetensi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold block">
                  Kompetensi Teknis Inti:
                </span>
                <div className="space-y-2">
                  {cvData.coreCompetencies.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold block">
                  Perangkat &amp; Kemampuan:
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <div className="flex justify-between py-1 border-b border-stone-100 font-mono">
                    <span className="text-stone-500">Design Tool:</span>
                    <span className="font-semibold text-stone-800">Figma, Canva, AI</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100 font-mono">
                    <span className="text-stone-500">Focus:</span>
                    <span className="font-semibold text-stone-800">Identity &amp; Layout</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100 font-mono">
                    <span className="text-stone-500">Bahasa:</span>
                    <span className="font-semibold text-stone-800">Indonesia &amp; Basic English</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Footer Bar */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between text-xs text-stone-400 font-mono gap-2">
              <span>Status: Siap Magang / Proyek Kreatif</span>
              <span>Terakhir Diperbarui: {cvData.lastUpdated}</span>
            </div>

          </div>

          {/* Right: The Professional Action Center */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Action Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-lg space-y-6">
              <div>
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full uppercase">
                  Aksi Rekrutmen
                </span>
                <h4 className="font-display text-2xl font-bold text-stone-900 mt-4 leading-snug">
                  Tinjau atau Simpan CV
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-normal">
                  Pilih mode peninjauan berkas digital interaktif langsung di layar atau unduh salinan berkas lokal.
                </p>
              </div>

              {/* 2 Mandated Buttons */}
              <div className="space-y-3 pt-2">
                {/* 1. Lihat CV Online */}
                <button
                  id="btn-view-cv-online"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all shadow-md group cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Lihat CV Online</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* 2. Download CV */}
                <button
                  id="btn-download-cv"
                  onClick={handleDownloadCV}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm border border-stone-200/80 transition-all cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-stone-700" />
                  <span>Download CV (PDF Demo)</span>
                </button>
              </div>

              {downloadSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Berkas salinan CV Demo berhasil disiapkan dan diunduh ke perangkat Anda.</span>
                </div>
              )}

              {/* Technical Specifications Specs */}
              <div className="pt-4 border-t border-stone-100 space-y-2 text-xs font-mono text-stone-500">
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="text-stone-800 font-semibold">PDF Ready / TXT</span>
                </div>
                <div className="flex justify-between">
                  <span>Ukuran:</span>
                  <span className="text-stone-800 font-semibold">{cvData.fileSize}</span>
                </div>
                <div className="flex justify-between">
                  <span>Verifikasi:</span>
                  <span className="text-emerald-700 font-semibold">Valid Demo Data</span>
                </div>
              </div>
            </div>

            {/* Premium Package Highlight Pill */}
            <div className="p-6 rounded-3xl bg-stone-900 text-stone-200 space-y-2 border border-stone-800">
              <div className="flex items-center gap-2 font-bold text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Standar Paket Rp150.000</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-normal">
                Dokumen CV disematkan secara profesional dengan pratinjau modal interaktif dan berkas siap serah untuk recruiter.
              </p>
            </div>

          </div>

        </div>

        {/* Modal: Lihat CV Online */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
              
              {/* Modal Header */}
              <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <div>
                    <h3 className="font-display font-bold text-base">Pratinjau CV Online</h3>
                    <p className="text-[11px] text-stone-400 font-mono">Dimas Pratama &bull; Data Fiktif Demo Rp150K</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-2">
                  <h2 className="font-display text-2xl font-black text-stone-900">{cvData.fullName}</h2>
                  <p className="text-sm font-semibold text-amber-800 font-mono">{cvData.headline}</p>
                  <p className="text-xs text-stone-500 font-mono">{cvData.contactSummary}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">Ringkasan Profil</h4>
                  <p className="text-sm text-stone-700 leading-relaxed bg-white p-4 rounded-xl border border-stone-200">{cvData.summaryText}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 font-bold">Pendidikan Terakhir</h4>
                    <p className="text-sm font-bold text-stone-900">Institut Seni &amp; Desain Kreatif</p>
                    <p className="text-xs text-stone-600">S1 Desain Komunikasi Visual (2024–2028)</p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 font-bold">Kompetensi Inti</h4>
                    <ul className="text-xs space-y-1 text-stone-700">
                      {cvData.coreCompetencies.map((c, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <strong>Catatan Legalitas Demo:</strong> Ini adalah pratinjau Curriculum Vitae online demonstrasi untuk showcase jasa pembuatan website KREATIV STUDIO (Paket Rp150.000).
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Tutup Pratinjau
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Unduh CV Ini</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

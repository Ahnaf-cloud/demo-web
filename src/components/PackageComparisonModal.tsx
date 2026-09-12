import React from 'react';
import { X, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface PackageComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PackageComparisonModal: React.FC<PackageComparisonModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div
        id="package-comparison-modal"
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-stone-850 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-stone-100 bg-[#FAF8F5]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-stone-900 text-stone-100 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> KREATIV STUDIO
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900">
              Perbandingan Paket Website Portofolio
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-mono mt-1">
              Spesifikasi Standar Rp50.000 vs Paket Premium Rp150.000 (Siap Kerja)
            </p>
          </div>
          <button
            id="btn-close-package-modal"
            onClick={onClose}
            className="p-2.5 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table / Cards */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Paket Rp50K */}
            <div className="p-6 sm:p-7 rounded-3xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-mono font-semibold text-stone-400">Paket Dasar</span>
                    <h4 className="font-display text-xl font-black text-stone-800">Demo Rp50.000</h4>
                  </div>
                  <span className="text-xs bg-stone-200 text-stone-700 px-2.5 py-1 rounded-full font-mono font-medium">Standard</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-normal">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Profile &amp; Bio Singkat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Skills Dasar (tanpa kategori mendalam)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Riwayat Pendidikan Standar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Sertifikat Statis (tanpa modal lightbox)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Maksimal 5 Thumbnail Karya</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>CV Download Sederhana (tanpa preview)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Contact Form Standar</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs font-mono text-stone-500">
                Cocok untuk kebutuhan profil personal instan &amp; minimalis.
              </div>
            </div>

            {/* Paket Rp150K */}
            <div className="p-6 sm:p-7 rounded-3xl border-2 border-stone-900 bg-stone-900 text-white shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3 right-6 bg-amber-400 text-stone-950 text-xs font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Demo Saat Ini
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-mono font-bold text-amber-400">Paket Unggulan</span>
                    <h4 className="font-display text-xl sm:text-2xl font-black text-white">Demo Rp150.000</h4>
                  </div>
                  <span className="text-xs bg-stone-800 text-amber-300 px-3 py-1 rounded-full font-mono font-bold border border-stone-700">Premium Editorial</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200 font-normal">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Visual Custom &amp; Asymmetric Editorial</strong> (Hero Eksklusif)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>About Section Mendalam</strong> (Bio, Value, Focus, Direction)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Experience Timeline</strong> (Riwayat praktik &amp; proyek)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Categorized Skills Matrix</strong> (Design, Tools, Soft Skills)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Certificate Lightbox Modal</strong> (Verifikasi Kredensial)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>6 Featured Projects + Detail Modal</strong> studi kasus lengkap</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Section Personal Branding</strong> ("More Than Just a Portfolio")</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Professional CV Specimen</strong> (Online Modal + Download)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>High-Impact Contact CTA</strong> (WhatsApp &amp; Email Direct)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 text-xs font-mono text-amber-400 font-bold">
                Solusi terlengkap untuk pelamar kerja &amp; personal branding kredibel.
              </div>
            </div>

          </div>

          {/* Legal Note */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs sm:text-sm flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-0.5">Catatan Penting Demo Data Fiktif</p>
              <p className="text-amber-900 leading-relaxed font-normal">
                Website ini merupakan representasi contoh (DEMO) hasil pembuatan website dari <strong>KREATIV STUDIO</strong>. Seluruh profil (Dimas Pratama), karya, dan sertifikasi bersifat konseptual/fiktif sebagai gambaran tata letak nyata bagi pemesan paket Rp150.000.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-stone-100 bg-[#FAF8F5] flex items-center justify-between">
          <span className="text-xs text-stone-500 font-mono">KREATIV STUDIO Web Production</span>
          <button
            id="btn-confirm-understand-modal"
            onClick={onClose}
            className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition cursor-pointer"
          >
            Tutup &amp; Lanjutkan Eksplorasi
          </button>
        </div>
      </div>
    </div>
  );
};

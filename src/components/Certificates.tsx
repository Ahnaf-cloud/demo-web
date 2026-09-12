import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, Sparkles, CheckCircle2, FileCheck, ArrowUpRight } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Take the 3 key requested certificates (or all 4, displaying top 3 with special prominence)
  const displayCerts = certificatesData.slice(0, 3);

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-[#F4F1EA]/60 border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-14 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                06 &bull; REPUTATION &amp; PROOF
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Validations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
              Sertifikasi &amp; Bukti Kompetensi
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Representasi pencapaian terverifikasi dengan dokumen digital lengkap, nomor kredensial resmi, dan kurikulum keahlian terinci.
            </p>
          </div>
        </div>

        {/* Certificates Grid: Designed as official achievement documents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayCerts.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative cursor-pointer rounded-3xl bg-white border border-stone-200/90 p-8 hover:border-stone-400/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Document Certificate Watermark Accent */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center pointer-events-none opacity-40 group-hover:scale-110 transition-transform">
                <Award className="w-16 h-16 text-stone-300" />
              </div>

              <div>
                {/* Top Badge & Verified Status */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Demo Credential</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Emblem & Title */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <FileCheck className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-amber-800 font-bold block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-6">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">
                    Kompetensi yang Divalidasi:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-stone-50 text-stone-700 border border-stone-200/80 px-2.5 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential Bar */}
              <div className="pt-5 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 block">ID Kredensial:</span>
                  <span className="font-mono text-stone-700 font-semibold text-xs">
                    {cert.credentialId}
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 text-white font-semibold text-xs group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors shadow-xs">
                  <span>Pratinjau</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
};

import React from 'react';
import { X, Award, ShieldCheck, Calendar, Hash, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="certificate-detail-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-stone-850 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-stone-100 bg-[#FAF8F5]">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900 block">
                Pratinjau Sertifikat Resmi (Demo)
              </span>
              <span className="text-[11px] font-mono text-stone-400">Verifikasi Kredensial Digital</span>
            </div>
          </div>
          <button
            id="btn-close-certificate-modal"
            onClick={onClose}
            className="p-2.5 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Paper Frame */}
        <div className="p-6 sm:p-10 bg-stone-100/70">
          <div className="relative rounded-2xl border-2 border-stone-300 bg-white p-6 sm:p-10 shadow-lg">
            
            {/* Watermark badge */}
            <div className="absolute top-4 right-4 bg-stone-100 text-stone-500 text-[10px] font-mono uppercase px-3 py-1 rounded-full border border-stone-200">
              DEMO SPECIMEN
            </div>

            {/* Certificate Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-300/80 text-amber-700 shadow-inner">
                <Award className="w-7 h-7" />
              </div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 pt-1">
                Sertifikat Pembelajaran &amp; Kompetensi
              </h4>
              <p className="text-xs text-stone-400 italic">
                Diberikan sebagai simulasi penyelesaian program pembelajaran terstruktur
              </p>
            </div>

            {/* Recipient */}
            <div className="text-center my-5 py-3 border-y border-stone-100">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">Dianugerahkan Kepada:</span>
              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
                Dimas Pratama
              </h3>
            </div>

            {/* Certificate Title */}
            <div className="text-center my-6">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">Atas Keberhasilan Materi:</span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                {certificate.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mt-2 leading-relaxed font-normal">
                {certificate.description}
              </p>
            </div>

            {/* Skills learned pills */}
            <div className="my-6 pt-4 border-t border-stone-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 block text-center mb-3">
                Topik Kompetensi yang Dipelajari:
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {certificate.skillsLearned.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-[#FAF8F5] text-stone-800 border border-stone-200 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Signatures & Meta */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200 mt-6 text-xs text-stone-600 font-mono">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Penerbit:</span>
                <p className="font-bold text-stone-800">{certificate.issuer}</p>
                <p className="text-stone-500 text-[11px]">Tahun {certificate.year}</p>
              </div>
              <div className="text-right space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">ID Kredensial Demo:</span>
                <p className="font-bold text-stone-800">{certificate.credentialId}</p>
                <span className="inline-block text-[11px] text-emerald-700 font-semibold">Status: Terverifikasi (Demo)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Disclaimer footer */}
        <div className="p-5 bg-[#FAF8F5] border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            Dokumen demonstrasi resmi untuk paket website Rp150.000 (Kreativ Studio).
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl transition font-semibold cursor-pointer"
          >
            Tutup Preview
          </button>
        </div>
      </div>
    </div>
  );
};

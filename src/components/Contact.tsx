import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-stone-200/90 relative overflow-hidden">
      {/* Decorative background typography watermark */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-display font-black text-stone-900/[0.02] pointer-events-none select-none leading-none -mb-10">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Call To Action Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
              09 &bull; GET IN TOUCH &bull; COLLABORATION
            </span>
            <div className="h-px w-12 bg-stone-300"></div>
            <span className="text-xs font-mono text-stone-400 uppercase">Respon Cepat</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.05]">
                Tertarik Berkolaborasi?
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                Buka peluang baru untuk eksplorasi desain, magang, atau diskusi proyek kreatif. Hubungi langsung melalui saluran komunikasi resmi di bawah.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Pilihan Aksi Cepat: WhatsApp & Email Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* WhatsApp Action Card */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 sm:p-10 rounded-3xl bg-stone-900 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block border border-stone-800"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
            
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-800 text-emerald-400 border border-stone-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                WhatsApp Langsung (Simulasi)
              </span>
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
              Opsi Komunikasi 01
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Chat via WhatsApp
            </h3>
            <p className="text-stone-300 text-sm mb-6 leading-relaxed font-normal">
              Respon instan untuk diskusi kilat, konsultasi kebutuhan desain, atau pemesanan website portofolio.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-stone-800/80">
              <span className="font-mono text-base font-bold text-emerald-400 tracking-wide">
                {personalInfo.whatsapp}
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                <span>Buka Percakapan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </a>

          {/* Email Action Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative p-8 sm:p-10 rounded-3xl bg-white text-stone-900 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block border-2 border-stone-200/90"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all"></div>

            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                Formal Proposal
              </span>
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-stone-400 font-bold block mb-1">
              Opsi Komunikasi 02
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2">
              Kirim Surat Elektronik
            </h3>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed font-normal">
              Ideal untuk pengiriman brief lengkap, surat tawaran magang, atau dokumen lampiran kerja sama.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-stone-100">
              <span className="font-mono text-base font-bold text-stone-900 truncate mr-2">
                {personalInfo.email}
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-stone-900 group-hover:text-amber-700 transition-colors shrink-0">
                <span>Tulis Email</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </a>

        </div>

        {/* Clean & Elegant Contact Form + Location Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Metadata & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Domisili info card */}
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-800 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 block mb-1">
                  Basis Domisili &amp; Waktu
                </span>
                <h4 className="font-display text-xl font-bold text-stone-900">
                  {personalInfo.location}
                </h4>
                <p className="text-xs text-stone-500 font-mono mt-1">
                  Indonesia &bull; Waktu Indonesia Barat (WIB / UTC+7)
                </p>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal pt-2 border-t border-stone-100">
                Terbuka untuk kesempatan magang remote, penugasan hybrid di sekitar Lampung, maupun proyek freelance visual nasional.
              </p>
            </div>

            {/* Social profiles list */}
            <div className="p-8 rounded-3xl bg-stone-900 text-white border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Profil &amp; Portofolio Online
                </span>
                <span className="text-[10px] font-mono text-stone-400">DEMO</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Behance', url: personalInfo.behance },
                  { name: 'Instagram', url: personalInfo.instagram },
                  { name: 'LinkedIn', url: personalInfo.linkedin },
                  { name: 'GitHub', url: personalInfo.github },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-stone-800/80 hover:bg-stone-700 border border-stone-700/60 text-xs font-semibold text-stone-200 hover:text-white flex items-center justify-between transition group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Clean & Elegant Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xl">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-1">
                Kirim Pesan Langsung
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                Formulir Kontak Eksklusif
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1 font-normal">
                Uji interaktivitas formulir pesan online siap pakai untuk website paket Rp150.000.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold">Pesan Demonstrasi Berhasil Dikirim!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed font-normal">
                    Terima kasih telah mencoba form interaktif ini. Pada website portofolio nyata pesanan KREATIV STUDIO, data formulir ini terhubung langsung ke notifikasi inbox email atau integrasi WhatsApp pengelola.
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition cursor-pointer"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Amanda"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-900 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Alamat Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@perusahaan.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-900 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Topik / Perihal
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Tawaran Kerja Sama / Pemesanan Website Demo"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-900 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Pesan Detail
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan rencana kolaborasi, tawaran magang, atau detail proyek Anda..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-900 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transmisi Data Terenkripsi (Demo)</span>
                  </div>

                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all shadow-md group cursor-pointer"
                  >
                    <span>Kirim Pesan Sekarang</span>
                    <Send className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

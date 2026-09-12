import React, { useState } from 'react';
import { Sparkles, Info, X } from 'lucide-react';

interface DemoHeaderNoticeProps {
  onOpenComparison: () => void;
}

export const DemoHeaderNotice: React.FC<DemoHeaderNoticeProps> = ({ onOpenComparison }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div id="demo-top-notice" className="bg-stone-950 text-stone-300 border-b border-stone-800 text-xs py-2.5 px-4 sm:px-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-full text-[11px] border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" /> DEMO PORTFOLIO
          </span>
          <span className="text-stone-400 font-normal">
            Showcase Demo Jasa Pembuatan Website <strong className="text-white font-semibold">KREATIV STUDIO</strong> &bull; Paket Siap Kerja <strong className="text-amber-300 font-mono">Rp150.000</strong> (Simulasi Data Fiktif)
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0 font-mono text-[11px]">
          <button
            id="btn-open-package-comparison"
            onClick={onOpenComparison}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline underline-offset-4 transition font-medium cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Spesifikasi Paket Rp150K</span>
          </button>
          <button
            id="btn-dismiss-demo-notice"
            onClick={() => setDismissed(true)}
            aria-label="Tutup pemberitahuan demo"
            className="text-stone-500 hover:text-stone-200 p-1 rounded-md transition cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

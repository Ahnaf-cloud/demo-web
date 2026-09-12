import React from 'react';
import { X, Check, Wrench, Target, Compass, Sparkles, ShieldAlert, ArrowRight, Layers, FileText } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-detail-modal"
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden text-stone-850 my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-stone-100 bg-[#FAF8F5] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs text-stone-400 font-mono">
                STUDI KASUS DEMO
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight mt-2">
              {project.title}
            </h3>
          </div>
          <button
            id="btn-close-project-modal"
            onClick={onClose}
            className="p-2.5 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200 transition shrink-0 cursor-pointer ml-4"
            aria-label="Tutup detail proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7">
          
          {/* Thumbnail preview banner */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md">
            <ProjectThumbnail project={project} />
          </div>

          {/* Demo disclaimer pill */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 flex items-center gap-3 font-normal">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Catatan Demo:</strong> Karya ini merupakan proyek studi kasus fiktif terstruktur untuk portofolio demo Dimas Pratama (Paket Rp150.000 KREATIV STUDIO).
            </span>
          </div>

          {/* 1. Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-stone-700" />
              Overview Proyek
            </h4>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/70 font-normal">
              {project.overview}
            </p>
          </div>

          {/* 2 & 3: Objective and Design Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Objective */}
            <div className="p-5 rounded-2xl border border-stone-200/80 bg-white space-y-2 shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-amber-600" />
                Tujuan Desain (Objective)
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {project.objective}
              </p>
            </div>

            {/* Design Approach */}
            <div className="p-5 rounded-2xl border border-stone-200/80 bg-white space-y-2 shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-600" />
                Pendekatan Desain (Design Approach)
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                {project.designApproach}
              </p>
            </div>
          </div>

          {/* 4. Tools Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-stone-700" />
              Perangkat yang Digunakan (Tools Used)
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed.map((tool, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200/80 flex items-center gap-1.5 font-mono"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Final Concept */}
          <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800 shadow-md">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Konsep Akhir (Final Concept)
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
              {project.finalConcept}
            </p>
          </div>

          {/* Key Deliverables list */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-stone-700" />
              Daftar Deliverables Aset
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-700 font-medium"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-stone-100 bg-[#FAF8F5] flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-400 font-mono">
            {project.title} &bull; KREATIV STUDIO Demo
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
          >
            Tutup Modal
          </button>
        </div>
      </div>
    </div>
  );
};

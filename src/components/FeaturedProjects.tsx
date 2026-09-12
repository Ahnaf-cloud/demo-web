import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Layers, Eye, ArrowRight, Target, Wrench, Compass, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectThumbnail } from './ProjectThumbnail';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Branding & Visual Identity', 'UI/UX Exploration', 'Social Media & Content', 'Print & Event Graphics', 'Marketing Visuals'];

  const filteredProjects = activeCategory === 'Semua'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const featuredProject = projectsData[0];
  const otherProjects = projectsData.slice(1);

  // If user selected a specific filter other than "Semua", we show filtered list cleanly
  const isFiltered = activeCategory !== 'Semua';

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-stone-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold">
                05 &bull; SELECTED WORKS &amp; CASE STUDIES
              </span>
              <div className="h-px w-12 bg-stone-300"></div>
              <span className="text-xs font-mono text-stone-400 uppercase">Portfolio Gallery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
              Karya Pilihan &amp; Studi Kasus
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Setiap proyek disajikan sebagai studi kasus mini lengkap dengan tujuan desain, pendekatan visual, perangkat, dan deliverable akhir.
            </p>
          </div>
        </div>

        {/* Category Filters Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200/90 hover:bg-stone-100/80 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 1. FEATURED PROJECT (GRAND HERO SHOWCASE) — Displayed when 'Semua' or if featured matches filter */}
        {(!isFiltered || filteredProjects.some((p) => p.id === featuredProject.id)) && (
          <div className="mb-16">
            <div className="relative rounded-3xl bg-white border border-stone-200/90 shadow-xl overflow-hidden group">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Half */}
                <div
                  className="lg:col-span-7 relative cursor-pointer overflow-hidden bg-stone-900 flex items-center justify-center min-h-[340px] sm:min-h-[420px]"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <ProjectThumbnail project={featuredProject} />
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400 text-stone-950 shadow-md uppercase tracking-wider">
                      ★ Featured Case Study
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-stone-900/80 backdrop-blur-md text-white border border-stone-700">
                      01 / FLAGSHIP
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs z-10">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-900 font-bold text-sm shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-stone-900" />
                      <span>Buka Studi Kasus Lengkap</span>
                    </span>
                  </div>
                </div>

                {/* Narrative Half */}
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Meta category */}
                    <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono">
                      <span className="text-amber-800 font-bold uppercase tracking-wider">
                        {featuredProject.category}
                      </span>
                      <span className="text-stone-400">DEMO KARYA</span>
                    </div>

                    {/* Big Title */}
                    <h3
                      onClick={() => setSelectedProject(featuredProject)}
                      className="font-display text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight group-hover:text-amber-800 transition-colors cursor-pointer mb-4"
                    >
                      {featuredProject.title}
                    </h3>

                    {/* Rich description */}
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mb-6">
                      {featuredProject.overview}
                    </p>

                    {/* Role & Objective Pills */}
                    <div className="space-y-3 pb-4">
                      <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">
                          Peran Desain
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-stone-800">
                          Lead Visual Identity &amp; System Layout
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">
                          Tujuan Proyek
                        </span>
                        <span className="text-xs sm:text-sm text-stone-700 font-normal">
                          {featuredProject.objective}
                        </span>
                      </div>
                    </div>

                    {/* Tools list */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block mb-2">
                        Perangkat yang Digunakan:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.toolsUsed.map((tool, i) => (
                          <span
                            key={i}
                            className="text-xs font-semibold px-3 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-200/80 font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <div className="pt-4 border-t border-stone-100">
                    <button
                      id={`btn-view-details-${featuredProject.id}`}
                      onClick={() => setSelectedProject(featuredProject)}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all shadow-md group/btn cursor-pointer"
                    >
                      <span>Lihat Detail Studi Kasus</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-amber-400" />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. OTHER PROJECTS — ASYMMETRIC EDITORIAL GRID */}
        <div>
          {/* Sub-header for other projects */}
          {!isFiltered && (
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-200/80">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
                Eksplorasi Proyek Lainnya
              </h3>
              <span className="text-xs font-mono text-stone-500">
                5 Koleksi Terkurasi
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {(isFiltered ? filteredProjects : otherProjects).map((project, idx) => {
              // Create an asymmetric rhythm:
              // Index 0 & 1 take 6 columns (large 2-col)
              // Index 2, 3, 4 take 4 columns (balanced 3-col)
              const colSpan = isFiltered
                ? 'lg:col-span-4'
                : idx < 2
                ? 'lg:col-span-6'
                : 'lg:col-span-4';

              return (
                <div
                  key={project.id}
                  className={`${colSpan} group flex flex-col justify-between rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-stone-400/80 transition-all duration-300 overflow-hidden`}
                >
                  <div>
                    {/* Thumbnail */}
                    <div
                      className="relative cursor-pointer overflow-hidden bg-stone-900"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="transform group-hover:scale-105 transition-transform duration-500 ease-out">
                        <ProjectThumbnail project={project} />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs z-10">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-stone-900 font-bold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-stone-900" />
                          <span>Detail Kasus</span>
                        </span>
                      </div>

                      {/* Category Tag on visual */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-sm text-stone-200 border border-stone-700/80">
                          {project.category.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono">
                        <span className="text-amber-800 font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-stone-400">STUDI KASUS</span>
                      </div>

                      <h4
                        onClick={() => setSelectedProject(project)}
                        className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors cursor-pointer mb-2.5 leading-snug"
                      >
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-normal mb-5">
                        {project.shortDescription}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono font-medium bg-stone-50 text-stone-600 border border-stone-200/80 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-6 sm:p-7 pt-0">
                    <button
                      id={`btn-view-details-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-stone-50 hover:bg-stone-900 hover:text-white text-stone-800 text-xs sm:text-sm font-semibold transition-all group/btn border border-stone-200/70 hover:border-stone-900 cursor-pointer"
                    >
                      <span>Lihat Detail Studi Kasus</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

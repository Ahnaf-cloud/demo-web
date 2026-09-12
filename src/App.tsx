import React, { useState } from 'react';
import { DemoHeaderNotice } from './components/DemoHeaderNotice';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Certificates } from './components/Certificates';
import { PersonalBranding } from './components/PersonalBranding';
import { CVSection } from './components/CVSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PackageComparisonModal } from './components/PackageComparisonModal';

export default function App() {
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans">
      {/* Top Demo Notice for Kreativ Studio clients */}
      <DemoHeaderNotice onOpenComparison={() => setComparisonModalOpen(true)} />

      {/* Main Navigation */}
      <Navbar onOpenComparison={() => setComparisonModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Personal Branding */}
        <About />

        {/* 3. Categorized Skills */}
        <Skills />

        {/* 4. Experience (Practice & Learning) */}
        <Experience />

        {/* 5. Education */}
        <Education />

        {/* 6. Featured Projects (6 DEMO Projects with Detail Modal) */}
        <FeaturedProjects />

        {/* 7. Certificates with Lightbox Modal */}
        <Certificates />

        {/* 8. Personal Branding ("More Than Just a Portfolio") */}
        <PersonalBranding />

        {/* 9. CV Section (Preview & Download) */}
        <CVSection />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer onOpenComparison={() => setComparisonModalOpen(true)} />

      {/* Interactive Package Comparison Modal */}
      <PackageComparisonModal
        isOpen={comparisonModalOpen}
        onClose={() => setComparisonModalOpen(false)}
      />
    </div>
  );
}

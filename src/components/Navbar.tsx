import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenComparison: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenComparison }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-display font-extrabold text-sm tracking-wider border border-stone-800 shadow-xs group-hover:bg-stone-850 group-hover:scale-105 transition-all">
            DP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-stone-900 text-base leading-tight tracking-tight group-hover:text-stone-700 transition">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-medium text-stone-500 tracking-wide uppercase">
              Creative Portfolio
            </span>
          </div>
        </a>

        {/* Center / Right Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-stone-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-stone-900 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenComparison}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 transition cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Paket Rp150.000</span>
          </button>
          <a
            id="nav-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs hover:shadow-md transition-all group"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="px-3 py-1.5 bg-stone-900 text-white text-xs font-semibold rounded-lg"
          >
            Kontak
          </a>
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-stone-700 hover:bg-stone-200/60 transition cursor-pointer"
            aria-label="Menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-stone-200 bg-[#FAF8F5]/98 backdrop-blur-xl px-6 py-6 shadow-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-3.5 text-base font-medium text-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-stone-950 transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-200/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenComparison();
                }}
                className="w-full text-left px-3.5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 rounded-xl flex items-center justify-between"
              >
                <span>Perbedaan Paket Rp50K vs Rp150K</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-stone-900 text-white font-semibold text-sm rounded-xl shadow-xs"
              >
                Hubungi Saya (Demo)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

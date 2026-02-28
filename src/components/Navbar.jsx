import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: '// ABOUT', href: '#about', key: 'F1' },
  { label: '// SKILLS', href: '#skills', key: 'F2' },
  { label: '// PROJECTS', href: '#projects', key: 'F3' },
  { label: '// EXPERIENCE', href: '#experience', key: 'F4' },
  { label: '// CONTACT', href: '#contact', key: 'F5' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gh-bg/95 backdrop-blur-xl border-b border-gh-border/80'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gh-cyan to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-8 h-8 border border-gh-cyan/60 rounded flex items-center justify-center group-hover:border-gh-cyan group-hover:shadow-neon-cyan transition-all duration-300">
                <Terminal size={14} className="text-gh-cyan" />
              </div>
              <div className="absolute inset-0 rounded bg-gh-cyan/5 group-hover:bg-gh-cyan/10 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-gh-text leading-none tracking-wider">
                DEV<span className="text-gh-cyan">.</span>CHANNA
              </span>
              <span className="font-mono text-xs text-gh-muted leading-none">v2.0.25</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-3 py-2 font-mono text-xs tracking-wider transition-all duration-300 rounded group ${
                    isActive
                      ? 'text-gh-cyan'
                      : 'text-gh-muted hover:text-gh-text'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded bg-gh-cyan/5 border border-gh-cyan/20" />
                  )}
                  <span className="relative">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gh-cyan" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-gh-border/60 bg-gh-surface/50">
              <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
              <span className="font-mono text-xs text-gh-muted">AVAILABLE</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-gh-border rounded text-gh-muted hover:text-gh-text hover:border-gh-cyan/40 transition-all"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gh-border bg-gh-bg/98 backdrop-blur-xl px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`w-full text-left px-4 py-3 rounded font-mono text-sm transition-all flex items-center justify-between ${
                  isActive
                    ? 'text-gh-cyan bg-gh-cyan/5 border border-gh-cyan/20'
                    : 'text-gh-muted hover:text-gh-text hover:bg-gh-surface'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-gh-muted/50">{item.key}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-gh-border flex items-center gap-2 px-4">
            <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
            <span className="font-mono text-xs text-gh-muted">AVAILABLE FOR HIRE</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

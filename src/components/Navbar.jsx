import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';

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
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gh-bg/95 backdrop-blur-xl border-b border-gh-border/80 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent gradient line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gh-cyan to-transparent opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="relative">
              <div className="w-8 h-8 border border-gh-cyan/60 rounded flex items-center justify-center group-hover:border-gh-cyan group-hover:shadow-neon-cyan transition-all duration-300 bg-gh-surface">
                <Terminal size={14} className="text-gh-cyan" />
              </div>
              <div className="absolute inset-0 rounded bg-gh-cyan/5 group-hover:bg-gh-cyan/15 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-gh-text leading-none tracking-wider group-hover:text-gh-cyan transition-colors">
                CHANNA<span className="text-gh-cyan">.</span>DEV
              </span>
              <span className="font-mono text-[10px] text-gh-muted tracking-wider leading-tight mt-0.5">
                WEB DEVELOPER
              </span>
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
                  className={`relative px-3.5 py-2 font-mono text-xs tracking-wider transition-all duration-200 rounded group ${
                    isActive
                      ? 'text-gh-cyan font-semibold'
                      : 'text-gh-muted hover:text-gh-text hover:bg-gh-surface/40'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded bg-gh-cyan/10 border border-gh-cyan/30" />
                  )}
                  <span className="relative">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gh-cyan shadow-neon-cyan" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Header Badges / Fast Links */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gh-green/40 bg-gh-surface/60 text-[11px] font-mono text-gh-green">
              <span className="w-1.5 h-1.5 rounded-full bg-gh-green animate-pulse" />
              <span>Available</span>
            </div>
            <a
              href="https://github.com/channa-sugathadasa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-gh-border/80 flex items-center justify-center text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 transition-all bg-gh-surface/40"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/channa-sugathadasa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-gh-border/80 flex items-center justify-center text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 transition-all bg-gh-surface/40"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-xs py-1.5 px-3.5"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center border border-gh-border rounded text-gh-muted hover:text-gh-text hover:border-gh-cyan/40 transition-all bg-gh-surface"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
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
                    ? 'text-gh-cyan bg-gh-cyan/10 border border-gh-cyan/30'
                    : 'text-gh-muted hover:text-gh-text hover:bg-gh-surface'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-gh-muted/50">{item.key}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-gh-border flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
              <span className="font-mono text-xs text-gh-muted">OPEN FOR HIRE</span>
            </div>
            <button
              onClick={() => scrollTo('#contact')}
              className="text-xs text-gh-cyan font-mono hover:underline"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

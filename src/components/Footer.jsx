import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gh-border py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 border border-gh-cyan/40 rounded flex items-center justify-center">
              <Terminal size={13} className="text-gh-cyan" />
            </div>
            <span className="font-display font-bold text-sm text-gh-text tracking-wider">
              DEV<span className="text-gh-cyan">.</span>CHANNA
            </span>
          </div>

          {/* Center */}
          <div className="font-mono text-xs text-gh-muted text-center">
            <span>Built with </span>
            <Heart size={10} className="inline text-gh-red mx-1" />
            <span>using </span>
            <span className="text-gh-cyan">React</span>
            <span> + </span>
            <span className="text-gh-blue">Vite</span>
            <span> + </span>
            <span className="text-gh-purple">Tailwind</span>
            <span> · © 2025 Channa Sugathadasa</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-4 font-mono text-xs text-gh-muted">
            {['about', 'skills', 'projects', 'contact'].map(s => (
              <button key={s}
                onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-gh-cyan transition-colors capitalize"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gh-border/40 flex items-center justify-center">
          <div className="font-mono text-xs text-gh-muted/40 text-center">
            All systems operational · v2.0.25 · Last deployed: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </footer>
  );
}

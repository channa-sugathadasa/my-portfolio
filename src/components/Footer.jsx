import React from 'react';
import { Terminal, Heart, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gh-border py-12 px-4 bg-gh-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gh-border/50">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-gh-cyan/40 rounded-lg flex items-center justify-center bg-gh-surface">
              <Terminal size={16} className="text-gh-cyan" />
            </div>
            <div>
              <span className="font-display font-bold text-base text-gh-text tracking-wider">
                CHANNA<span className="text-gh-cyan">.</span>DEV
              </span>
              <p className="font-mono text-xs text-gh-muted">
                Web Developer | React &amp; Next.js | TypeScript
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs text-gh-muted">
            {['about', 'skills', 'projects', 'experience', 'contact'].map(s => (
              <button
                key={s}
                onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-gh-cyan transition-colors uppercase"
              >
                //{s}
              </button>
            ))}
          </div>

          {/* Social quick icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/channa-sugathadasa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-gh-border flex items-center justify-center text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 bg-gh-surface transition-all"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/channa-sugathadasa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-gh-border flex items-center justify-center text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 bg-gh-surface transition-all"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:channavimukthi21871@gmail.com"
              className="w-9 h-9 rounded-lg border border-gh-border flex items-center justify-center text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 bg-gh-surface transition-all"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+94782380090"
              className="w-9 h-9 rounded-lg border border-gh-border flex items-center justify-center text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 bg-gh-surface transition-all"
              title="Call"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gh-muted">
          <div>
            <span>Designed &amp; Engineered by </span>
            <span className="text-gh-text font-bold">Channa Sugathadasa</span>
            <span> · Kalutara, Sri Lanka</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with </span>
            <span className="text-gh-cyan">React</span>
            <span>+</span>
            <span className="text-gh-blue">TypeScript</span>
            <span>+</span>
            <span className="text-gh-purple">Tailwind CSS</span>
            <span> · © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

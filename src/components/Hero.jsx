import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const ROLES = [
  'MERN Stack Developer',
  'Full Stack Engineer',
  'Node.js Architect',
  'MongoDB ',
  'UI/UX Craftsman',
];

function MatrixRain({ canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>{}[]()=/\\;:';
    const fontSize = 12;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = `${fontSize}px "Share Tech Mono"`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Head of the drop - brighter
        if (drops[i] * fontSize < canvas.height * 0.4) {
          ctx.fillStyle = `rgba(0, 217, 255, ${Math.random() * 0.4 + 0.05})`;
          ctx.fillText(char, x, y);
        } else {
          ctx.fillStyle = `rgba(57, 211, 83, ${Math.random() * 0.15 + 0.02})`;
          ctx.fillText(char, x, y);
        }
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);

  return null;
}

function TypeWriter({ words }) {
  const [current, setCurrent] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      if (current.length === 0) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        timeout = setTimeout(() => {}, 300);
      } else {
        timeout = setTimeout(() => {
          setCurrent(c => c.slice(0, -1));
        }, 40);
      }
    } else {
      if (current.length === word.length) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrent(word.slice(0, current.length + 1));
        }, 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [current, isDeleting, isPaused, wordIndex, words]);

  return (
    <span className="text-gh-cyan font-mono">
      {current}
      <span className="animate-cursor-blink text-gh-cyan">█</span>
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.35 }}
      />
      <MatrixRain canvasRef={canvasRef} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,217,255,0.04) 0%, transparent 70%)'
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-24 h-24 border-l-2 border-t-2 border-gh-cyan/30 rounded-tl-xl" />
      <div className="absolute top-24 right-6 w-24 h-24 border-r-2 border-t-2 border-gh-cyan/30 rounded-tr-xl" />
      <div className="absolute bottom-16 left-6 w-24 h-24 border-l-2 border-b-2 border-gh-cyan/20 rounded-bl-xl" />
      <div className="absolute bottom-16 right-6 w-24 h-24 border-r-2 border-b-2 border-gh-cyan/20 rounded-br-xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gh-green/40 bg-gh-green/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
          <span className="font-mono text-xs text-gh-green tracking-widest">SYSTEM ONLINE — AVAILABLE FOR HIRE</span>
        </div>

        {/* Name */}
        <div className="mb-4">
          <div className="font-mono text-gh-muted text-sm tracking-widest mb-2">
            <span className="text-gh-purple">const</span>
            <span className="text-gh-text"> developer </span>
            <span className="text-gh-cyan">=</span>
            <span className="text-gh-orange"> {`{`}</span>
          </div>
          <h1
            className="font-display font-black text-5xl sm:text-7xl md:text-7xl tracking-wider mb-2 glitch"
            data-text="CHANNA SUGATHADASA"
            style={{
              background: 'linear-gradient(135deg, #e6edf3 30%, #00d9ff 70%, #58a6ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            CHANNA SUGATHADASA
          </h1>
          <div className="font-mono text-gh-muted text-sm tracking-widest mt-2">
            <span className="text-gh-orange">{`}`}</span>
            <span className="text-gh-cyan">;</span>
          </div>
        </div>

        {/* Role typewriter */}
        <div className="mb-10 h-10 flex items-center justify-center">
          <span className="font-mono text-xl sm:text-2xl text-gh-muted mr-2">{`> `}</span>
          <TypeWriter words={ROLES} />
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: 'PROJECTS', value: '5+', color: 'gh-blue' },
            { label: 'LEVEL', value: 'JUNIOR', color: 'gh-purple' },
          ].map(stat => (
            <div key={stat.label}
              className="flex items-center gap-2 px-4 py-2 rounded border border-gh-border/60 bg-gh-surface/60 backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-gh-muted">{stat.label}</span>
              <span className={`font-display font-bold text-sm text-${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            CONTACT ME
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/channa-sugathadasa' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/channa-sugathadasa/' },
            { icon: Mail, label: 'Email', href: 'mailto:channavimukthi21871@gmail.com' },
            { icon: Download, label: 'Resume', href: 'https://channasugathadasa.tiiny.site' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 flex items-center justify-center border border-gh-border rounded-lg text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 hover:bg-gh-cyan/5 hover:shadow-neon-cyan transition-all duration-300"
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gh-muted hover:text-gh-cyan transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}

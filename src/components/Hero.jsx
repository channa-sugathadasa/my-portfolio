import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight, Briefcase } from 'lucide-react';

const ROLES = [
  'Web Developer',
  'React & Next.js Specialist',
  'TypeScript Engineer',
  'Frontend & UI/UX Craftsman',
  'Full-Stack Developer',
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

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>{}[]()=/\\;:TSX_REACT_NEXTJS';
    const fontSize = 28;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = `${fontSize}px "Share Tech Mono"`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Head of the drop
        if (drops[i] * fontSize < canvas.height * 0.4) {
          ctx.fillStyle = `rgba(0, 217, 255, ${Math.random() * 0.45 + 0.08})`;
          ctx.fillText(char, x, y);
        } else {
          ctx.fillStyle = `rgba(88, 166, 255, ${Math.random() * 0.18 + 0.02})`;
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
        }, 35);
      }
    } else {
      if (current.length === word.length) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrent(word.slice(0, current.length + 1));
        }, 75);
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.3 }}
      />
      <MatrixRain canvasRef={canvasRef} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0,217,255,0.06) 0%, rgba(88,166,255,0.02) 40%, transparent 75%)'
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 w-20 h-20 border-l-2 border-t-2 border-gh-cyan/30 rounded-tl-xl pointer-events-none hidden sm:block" />
      <div className="absolute top-24 right-6 w-20 h-20 border-r-2 border-t-2 border-gh-cyan/30 rounded-tr-xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-16 left-6 w-20 h-20 border-l-2 border-b-2 border-gh-cyan/20 rounded-bl-xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-16 right-6 w-20 h-20 border-r-2 border-b-2 border-gh-cyan/20 rounded-br-xl pointer-events-none hidden sm:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Availability & Location Pills */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gh-green/40 bg-gh-surface/80 backdrop-blur-sm text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
            <span className="text-gh-green font-semibold">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gh-border/70 bg-gh-surface/80 backdrop-blur-sm text-xs font-mono text-gh-muted">
            <MapPin size={13} className="text-gh-blue" />
            <span>Kalutara, Sri Lanka</span>
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <div className="font-mono text-gh-muted text-xs sm:text-sm tracking-widest mb-2">
            <span className="text-gh-purple">const</span>
            <span className="text-gh-text"> webDeveloper </span>
            <span className="text-gh-cyan">=</span>
            <span className="text-gh-orange"> {`{`}</span>
          </div>
          <h1
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-wide sm:tracking-wider mb-2 glitch"
            data-text="CHANNA SUGATHADASA"
            style={{
              background: 'linear-gradient(135deg, #ffffff 15%, #e6edf3 45%, #00d9ff 75%, #58a6ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            CHANNA SUGATHADASA
          </h1>
          <div className="font-mono text-gh-muted text-xs sm:text-sm tracking-widest mt-2">
            <span className="text-gh-orange">{`}`}</span>
            <span className="text-gh-cyan">;</span>
          </div>
        </div>

        {/* Target Role & Specialization Subtitle */}
        <div className="inline-block px-4 py-1.5 rounded-lg border border-gh-cyan/20 bg-gh-cyan/5 mb-6">
          <p className="font-mono text-xs sm:text-sm text-gh-cyan tracking-wider font-semibold">
            Web Developer | React &amp; Next.js | TypeScript
          </p>
        </div>

        {/* Role Typewriter */}
        <div className="mb-6 h-9 flex items-center justify-center">
          <span className="font-mono text-lg sm:text-xl text-gh-muted mr-2">{`> `}</span>
          <TypeWriter words={ROLES} />
        </div>

        {/* Professional Summary */}
        <p className="max-w-2xl mx-auto text-gh-text/80 font-body text-base sm:text-lg leading-relaxed mb-8">
          Web Developer with <span className="text-white font-semibold">6 months of professional internship experience</span> at{' '}
          <span className="text-gh-cyan font-semibold">RAJIDA Holdings (Pvt) Ltd.</span>, building responsive corporate, institutional, and enterprise websites.
          Specialized in React, Next.js, TypeScript, and modern styling solutions. BICT (Hons) undergraduate majoring in Software Engineering at Rajarata University of Sri Lanka.
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {[
            { label: 'EXPERIENCE', value: '6 Mo. Intern @ RAJIDA', color: 'gh-cyan' },
            { label: 'CORE STACK', value: 'React • Next.js • TS', color: 'gh-blue' },
            { label: 'DEGREE', value: 'BICT (Hons) RUSL', color: 'gh-purple' },
            { label: 'PROJECTS', value: '7+ Production & AI Builds', color: 'gh-green' },
          ].map(stat => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-gh-border/70 bg-gh-surface/70 backdrop-blur-sm shadow-sm"
            >
              <span className="font-mono text-xs text-gh-muted">{stat.label}:</span>
              <span className={`font-mono font-bold text-xs text-${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary flex items-center gap-2"
          >
            EXPLORE PROJECTS
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="btn-secondary flex items-center gap-2"
          >
            <Briefcase size={15} />
            WORK EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded-lg border border-gh-border hover:border-gh-cyan/40 bg-gh-surface/60 font-mono text-xs text-gh-text hover:text-gh-cyan transition-all flex items-center gap-2"
          >
            <Mail size={14} />
            CONTACT ME
          </button>
        </div>

        {/* Verified Social & Direct Contact Links */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {[
            {
              icon: Github,
              label: 'GitHub',
              href: 'https://github.com/channa-sugathadasa',
              tooltip: 'github.com/channa-sugathadasa'
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/channa-sugathadasa',
              tooltip: 'linkedin.com/in/channa-sugathadasa'
            },
            {
              icon: Mail,
              label: 'Email',
              href: 'mailto:channavimukthi21871@gmail.com',
              tooltip: 'channavimukthi21871@gmail.com'
            },
            {
              icon: Phone,
              label: 'Phone',
              href: 'tel:+94782380090',
              tooltip: '+94 78 238 0090'
            },
          ].map(({ icon: Icon, label, href, tooltip }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-2 px-3.5 py-2 border border-gh-border/80 rounded-lg text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/50 hover:bg-gh-cyan/5 hover:shadow-neon-cyan transition-all duration-300 font-mono text-xs"
              title={tooltip}
            >
              <Icon size={15} className="group-hover:scale-110 transition-transform" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gh-muted hover:text-gh-cyan transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest text-gh-muted/70">SCROLL DOWN</span>
        <ChevronDown size={18} className="animate-bounce text-gh-cyan" />
      </button>
    </section>
  );
}

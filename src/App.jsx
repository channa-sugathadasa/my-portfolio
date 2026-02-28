import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContributionGraph from './components/ContributionGraph';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('INITIALIZING');

  const stages = [
    'INITIALIZING',
    'LOADING MODULES',
    'COMPILING ASSETS',
    'CONNECTING TO DB',
    'READY',
  ];

  useEffect(() => {
    const steps = [
      { prog: 20, stage: 1, delay: 300 },
      { prog: 45, stage: 2, delay: 700 },
      { prog: 70, stage: 3, delay: 1100 },
      { prog: 90, stage: 4, delay: 1500 },
      { prog: 100, stage: 4, delay: 1900 },
    ];

    const timers = steps.map(({ prog, stage, delay }) =>
      setTimeout(() => {
        setProgress(prog);
        setStage(stages[stage]);
      }, delay)
    );

    const done = setTimeout(onComplete, 2400);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gh-bg flex flex-col items-center justify-center">
      <div className="w-full max-w-sm px-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="font-display font-black text-4xl tracking-widest mb-2"
            style={{
              background: 'linear-gradient(135deg, #e6edf3, #00d9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DEV.Channa
          </div>
          <div className="font-mono text-xs text-gh-muted tracking-widest">CHANNA's PORTFOLIO SYSTEM v2.0</div>
        </div>

        {/* Progress */}
        <div className="space-y-3">
          <div className="flex justify-between font-mono text-xs">
            <span className="text-gh-cyan">{stage}</span>
            <span className="text-gh-muted">{progress}%</span>
          </div>
          <div className="h-1 bg-gh-surface rounded-full overflow-hidden border border-gh-border/40">
            <div
              className="h-full bg-gh-cyan rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff44',
              }}
            />
          </div>
          <div className="font-mono text-xs text-gh-muted/60 text-right">
            {Array.from({ length: Math.floor(progress / 10) }).map((_, i) => '█').join('')}
            {Array.from({ length: 10 - Math.floor(progress / 10) }).map((_, i) => '░').join('')}
          </div>
        </div>

        {/* Boot log */}
        <div className="mt-8 font-mono text-xs text-gh-muted/40 space-y-1">
          {progress >= 20 && <div><span className="text-gh-green">[OK]</span> React 18.1 mounted</div>}
          {progress >= 45 && <div><span className="text-gh-green">[OK]</span> Tailwind CSS loaded</div>}
          {progress >= 70 && <div><span className="text-gh-green">[OK]</span> Components compiled</div>}
          {progress >= 90 && <div><span className="text-gh-green">[OK]</span> Database connected</div>}
        </div>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-px z-[60]">
      <div
        className="h-full transition-all duration-150"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00d9ff, #58a6ff, #bc8cff)',
          boxShadow: '0 0 8px #00d9ff',
        }}
      />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-50 w-10 h-10 flex items-center justify-center border border-gh-cyan/40 bg-gh-bg/90 backdrop-blur rounded-lg text-gh-cyan hover:bg-gh-cyan/10 hover:shadow-neon-cyan transition-all font-mono text-xs"
    >
      ↑
    </button>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className={`scanlines transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />
          
          <About />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />
          
          <ContributionGraph />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />
          
          <Skills />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />
          
          <Projects />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />
          
          <Experience />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />
          
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

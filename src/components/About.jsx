import React, { useEffect, useRef, useState } from 'react';
import { User, Code2, Cpu, Globe, Coffee, Zap } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Lines of Code', value: '500K+', color: 'text-gh-cyan' },
  { icon: Globe, label: 'Projects Shipped', value: '50+', color: 'text-gh-blue' },
  { icon: Coffee, label: 'Coffee Consumed', value: '∞', color: 'text-gh-orange' },
  { icon: Zap, label: 'Bugs Squashed', value: '9,999', color: 'text-gh-green' },
];

const terminalLines = [
  { prefix: '~/channa', cmd: 'whoami', delay: 0 },
  { output: 'Channa Sugathadasa — Junior MERN Stack Developer', delay: 400 },
  { prefix: '~/channa', cmd: 'cat ./about.txt', delay: 800 },
  { output: 'Web Application Development. Proficient in the MERN Stack and Java, with a portfolio', delay: 1200 },
  { output: 'of 5+ full-stack projects demonstrating skills in User Authentication, API Integration,', delay: 1400 },
  { output: 'and Cloud Deployment.', delay: 1600 },
  { prefix: '~/channa', cmd: 'cat ./interests.json', delay: 2100 },
  { output: '{ "open_source": true, "coffee": "essential",', delay: 2500 },
  { output: '  "side_projects": "always", "learning": "forever" }', delay: 2700 },
  { prefix: '~/channa', cmd: '▊', delay: 3200, cursor: true },
];

function Terminal({ lines, visible }) {
  const [shown, setShown] = useState([]);

  useEffect(() => {
    if (!visible) return;
    const timers = lines.map((line, i) =>
      setTimeout(() => setShown(s => [...s, i]), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [visible, lines]);

  return (
    <div className="bg-gh-bg rounded-xl border border-gh-border overflow-hidden shadow-card font-mono text-sm">
      {/* Terminal bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gh-border bg-gh-surface">
        <div className="w-3 h-3 rounded-full bg-gh-red/80" />
        <div className="w-3 h-3 rounded-full bg-gh-orange/80" />
        <div className="w-3 h-3 rounded-full bg-gh-green/80" />
        <span className="ml-3 text-xs text-gh-muted">bash — portfolio/about</span>
      </div>
      {/* Terminal content */}
      <div className="p-5 space-y-1 min-h-64">
        {terminalLines.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${
              shown.includes(i) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {line.prefix && (
              <div className="flex items-center gap-1">
                <span className="text-gh-purple">{line.prefix}</span>
                <span className="text-gh-muted">$</span>
                <span className="text-gh-green ml-1">{line.cursor ? (
                  <span className="animate-cursor-blink">▊</span>
                ) : line.cmd}</span>
              </div>
            )}
            {line.output && (
              <div className="text-gh-text/80 pl-2 text-xs leading-relaxed">{line.output}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">01</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            ABOUT<span className="text-gh-cyan">.</span>ME
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Terminal */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Terminal lines={terminalLines} visible={visible} />
            
            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Remote-First', 'Agile', 'TDD', 'Open Source', 'Mentorship', 'Architecture'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono border border-gh-border text-gh-muted hover:border-gh-cyan/40 hover:text-gh-cyan transition-colors cursor-default">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: About content */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="game-card p-6 relative corner-tl corner-br">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg border border-gh-cyan/30 bg-gh-cyan/5 flex items-center justify-center">
                  <User size={18} className="text-gh-cyan" />
                </div>
                <div>
                  <div className="font-display font-bold text-gh-text">Channa Sugathadasa</div>
                  <div className="font-mono text-xs text-gh-muted">Full Stack Developer</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
                  <span className="font-mono text-xs text-gh-green">LVL 37</span>
                </div>
              </div>
              <p className="text-gh-text/80 font-body text-base leading-relaxed">
                I'm a passionate Full Stack Developer specializing in the MERN stack, crafting 
                high-performance web applications from concept to deployment. I thrive at the 
                intersection of elegant code and intuitive user experience.
              </p>
              <p className="text-gh-text/70 font-body text-base leading-relaxed mt-3">
                When I'm not building applications, I contribute to open-source projects, 
                mentor junior developers, and explore emerging technologies in the cloud-native ecosystem.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="game-card p-4 text-center group">
                  <Icon size={18} className={`${color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className={`font-display font-bold text-xl ${color}`}>{value}</div>
                  <div className="font-mono text-xs text-gh-muted mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3 font-mono text-sm">
              {[
                { key: 'LOCATION', val: 'Bombuwala, Kalutara, Sri Lanka.' },
                { key: 'TIMEZONE', val: 'PST (UTC-8)' },
                { key: 'EXPERIENCE', val: '5+ Projects' },
                { key: 'EDUCATION', val: 'BICT(Honse)' },
              ].map(({ key, val }) => (
                <div key={key} className="flex flex-col gap-1">
                  <span className="text-xs text-gh-muted tracking-widest">{key}</span>
                  <span className="text-gh-text">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

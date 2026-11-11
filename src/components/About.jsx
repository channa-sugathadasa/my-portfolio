import React, { useEffect, useRef, useState } from 'react';
import { User, Code2, Globe, Building2, GraduationCap, Award, Languages, Users, MapPin, CheckCircle2 } from 'lucide-react';

const highlightStats = [
  { icon: Building2, label: 'Internship Experience', value: '6 Months', detail: 'RAJIDA Holdings (Pvt) Ltd.', color: 'text-gh-cyan' },
  { icon: Globe, label: 'Production Websites', value: '4 Platforms', detail: 'Banking, Valuation & IT', color: 'text-gh-blue' },
  { icon: Code2, label: 'Full-Stack & AI', value: '3 Systems', detail: 'MERN & Gemini AI', color: 'text-gh-green' },
  { icon: GraduationCap, label: 'Degree in Progress', value: 'BICT (Hons)', detail: 'Software Engineering Major', color: 'text-gh-purple' },
];

const terminalLines = [
  { prefix: '~/channa', cmd: 'cat profile.json', delay: 0 },
  { output: '{', delay: 250 },
  { output: '  "name": "Channa Sugathadasa",', delay: 400 },
  { output: '  "role": "Web Developer | React & Next.js | TypeScript",', delay: 600 },
  { output: '  "location": "Kalutara, Sri Lanka",', delay: 800 },
  { output: '  "internship": "Web Developer Intern @ RAJIDA Holdings (6 Mo.)",', delay: 1000 },
  { output: '  "education": "BICT (Hons) Software Engineering @ RUSL (2022-2026)",', delay: 1200 },
  { output: '  "specialization": ["React 19", "Next.js", "TypeScript", "Tailwind CSS"]', delay: 1400 },
  { output: '}', delay: 1600 },
  { prefix: '~/channa', cmd: 'cat current_focus.txt', delay: 2000 },
  { output: 'Engineering scalable enterprise frontends, accessible design patterns, and SEO-optimized web systems.', delay: 2300 },
  { prefix: '~/channa', cmd: 'status --availability', delay: 2700 },
  { output: '✔ Available for Web Development, Frontend Engineering & Full-Stack roles.', delay: 3000 },
  { prefix: '~/channa', cmd: '▊', delay: 3400, cursor: true },
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
    <div className="bg-gh-bg rounded-xl border border-gh-border overflow-hidden shadow-card font-mono text-xs sm:text-sm">
      {/* Terminal bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gh-border bg-gh-surface">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gh-red/80" />
          <div className="w-3 h-3 rounded-full bg-gh-orange/80" />
          <div className="w-3 h-3 rounded-full bg-gh-green/80" />
          <span className="ml-3 text-xs text-gh-muted">bash — channa@portfolio:~/about</span>
        </div>
        <span className="text-[10px] text-gh-cyan/70 uppercase tracking-widest hidden sm:inline">PROD_PROFILE_V2</span>
      </div>
      {/* Terminal content */}
      <div className="p-5 space-y-1 min-h-[300px]">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`transition-all duration-300 ${
              shown.includes(i) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {line.prefix && (
              <div className="flex items-center gap-1">
                <span className="text-gh-purple">{line.prefix}</span>
                <span className="text-gh-muted">{'>'}</span>
                <span className="text-gh-green ml-1">
                  {line.cursor ? (
                    <span className="animate-cursor-blink text-gh-cyan">▊</span>
                  ) : (
                    line.cmd
                  )}
                </span>
              </div>
            )}
            {line.output && (
              <div className="text-gh-text/85 pl-2 leading-relaxed font-mono">
                {line.output}
              </div>
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
      { threshold: 0.2 }
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

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlightStats.map(({ icon: Icon, label, value, detail, color }) => (
            <div key={label} className="game-card p-5 group hover:border-gh-cyan/40 transition-all">
              <Icon size={20} className={`${color} mb-3 group-hover:scale-110 transition-transform`} />
              <div className={`font-display font-bold text-xl sm:text-2xl ${color}`}>{value}</div>
              <div className="font-mono text-xs text-gh-text font-semibold mt-1">{label}</div>
              <div className="font-mono text-[11px] text-gh-muted mt-0.5">{detail}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Terminal & Skills Tags (5 cols) */}
          <div className={`lg:col-span-6 space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Terminal lines={terminalLines} visible={visible} />
            
            {/* Core Capability Pills */}
            <div className="p-4 rounded-xl border border-gh-border/80 bg-gh-surface/40">
              <div className="font-mono text-xs text-gh-muted uppercase tracking-wider mb-3">
                Key Engineering Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'React 19 & Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Radix UI & Framer Motion',
                  'Zod & React Hook Form',
                  'REST APIs & Node.js',
                  'Technical SEO & Schema.org',
                  'Mobile-First Layouts',
                  'Component Architecture'
                ].map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono border border-gh-border/70 bg-gh-surface text-gh-text/90 hover:border-gh-cyan/50 hover:text-gh-cyan transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="game-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Languages size={16} className="text-gh-cyan" />
                <span className="font-mono text-xs uppercase tracking-wider text-gh-muted">
                  Spoken &amp; Communication Languages
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { lang: 'Sinhala', proficiency: 'Fluent / Native', badge: 'bg-gh-cyan/10 border-gh-cyan/30 text-gh-cyan' },
                  { lang: 'English', proficiency: 'Intermediate', badge: 'bg-gh-blue/10 border-gh-blue/30 text-gh-blue' },
                  { lang: 'German', proficiency: 'Basic', badge: 'bg-gh-purple/10 border-gh-purple/30 text-gh-purple' },
                ].map(({ lang, proficiency, badge }) => (
                  <div key={lang} className={`p-3 rounded-lg border text-center ${badge}`}>
                    <div className="font-display font-bold text-sm">{lang}</div>
                    <div className="font-mono text-[10px] text-gh-muted mt-1">{proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio & Profile Breakdown (6 cols) */}
          <div className={`lg:col-span-6 space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="game-card p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl border border-gh-cyan/40 bg-gh-cyan/10 flex items-center justify-center">
                    <User size={22} className="text-gh-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-gh-text">Channa Sugathadasa</h3>
                    <p className="font-mono text-xs text-gh-cyan font-semibold">Web Developer | React &amp; Next.js | TypeScript</p>
                    <p className="font-mono text-xs text-gh-muted flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-gh-muted" /> Kalutara, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-gh-text/85 font-body text-base leading-relaxed">
                <p>
                  I am a passionate <span className="text-white font-semibold">Web Developer</span> with{' '}
                  <span className="text-gh-cyan font-semibold">6 months of professional internship experience</span> at{' '}
                  <span className="text-white font-semibold">RAJIDA Holdings (Pvt) Ltd.</span>, where I engineered and deployed responsive corporate, institutional, and enterprise websites across cooperative banking, vehicle valuation, and IT consulting sectors.
                </p>
                <p>
                  Specialized in <span className="text-gh-blue font-semibold">React, Next.js, and TypeScript</span> paired with modern styling ecosystems such as Tailwind CSS, Radix UI, and Framer Motion. I focus on delivering clean component abstractions, type-safe form validations with Zod and React Hook Form, and accessibility-first interfaces.
                </p>
                <p>
                  Currently an undergraduate pursuing a{' '}
                  <span className="text-gh-purple font-semibold">Bachelor of Information and Communication Technology (BICT Hons)</span>{' '}
                  majoring in <span className="text-white font-semibold">Software Engineering</span> at{' '}
                  <span className="text-white font-semibold">Rajarata University of Sri Lanka</span> (2022–2026).
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gh-border/60 grid sm:grid-cols-2 gap-3.5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-gh-surface/60 border border-gh-border/60">
                  <span className="text-gh-muted block mb-1">INTERNSHIP DELIVERABLES</span>
                  <span className="text-gh-text font-semibold">Banking, Valuation &amp; IT Platforms</span>
                </div>
                <div className="p-3 rounded-lg bg-gh-surface/60 border border-gh-border/60">
                  <span className="text-gh-muted block mb-1">TECHNICAL FOCUS</span>
                  <span className="text-gh-cyan font-semibold">SEO, Schema.org, Type-Safe UI</span>
                </div>
              </div>
            </div>

            {/* Leadership & Extracurricular Activities */}
            <div className="game-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users size={18} className="text-gh-cyan" />
                <h4 className="font-display font-bold text-base text-gh-text tracking-wider">
                  LEADERSHIP &amp; EXTRACURRICULARS
                </h4>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg border border-gh-border/60 bg-gh-surface/40 flex items-start gap-3">
                  <Award size={18} className="text-gh-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-semibold text-sm text-gh-text">
                      Former Head of Videography Department &amp; FOT Media Member
                    </div>
                    <div className="font-mono text-xs text-gh-muted mt-0.5">
                      Faculty of Technology, Rajarata University of Sri Lanka (RUSL)
                    </div>
                    <p className="font-body text-xs text-gh-text/75 mt-1.5 leading-relaxed">
                      Directed media coverage, content creation, and technical production workflows for university-wide flagship symposiums and tech exhibitions.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg border border-gh-border/60 bg-gh-surface/40 flex items-start gap-3">
                  <Users size={18} className="text-gh-green mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-body font-semibold text-sm text-gh-text">
                      Club &amp; Society Memberships
                    </div>
                    <div className="font-mono text-xs text-gh-muted mt-0.5">
                      Active Participant in University Community
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        'Hiking Club (RUSL)',
                        'MS Club (Microsoft Student Community)',
                        'Association of Technology Information Technology (ATIT)'
                      ].map(club => (
                        <span key={club} className="px-2.5 py-1 rounded bg-gh-surface border border-gh-border/80 font-mono text-[11px] text-gh-text/80">
                          ✦ {club}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

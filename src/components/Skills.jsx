import React, { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Server, Database, Wrench, Terminal, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    icon: Code2,
    color: 'gh-cyan',
    borderColor: 'border-gh-cyan/40',
    description: 'Modern, high-performance web engineering with reactive architectures.',
    skills: [
      { name: 'React.js', level: 95, tag: 'Advanced' },
      { name: 'Next.js', level: 90, tag: 'App Router / SSR' },
      { name: 'TypeScript', level: 88, tag: 'Strict Typing' },
      { name: 'JavaScript', level: 92, tag: 'ES6+ / Async' },
      { name: 'Tailwind CSS', level: 95, tag: 'v3 / v4 Alpha' },
      { name: 'HTML5', level: 95, tag: 'Semantic Web' },
      { name: 'CSS3', level: 90, tag: 'Responsive / Flex / Grid' },
    ],
  },
  {
    id: 'ui-validation',
    label: 'UI LIBRARIES & VALIDATION',
    icon: Layers,
    color: 'gh-blue',
    borderColor: 'border-gh-blue/40',
    description: 'Component libraries, accessible primitives, and type-safe schema validation.',
    skills: [
      { name: 'Framer Motion', level: 88, tag: 'Micro-interactions' },
      { name: 'Radix UI', level: 90, tag: 'Headless Primitives' },
      { name: 'Shadcn/UI', level: 92, tag: 'Tailwind Components' },
      { name: 'React Hook Form', level: 92, tag: 'Form Architecture' },
      { name: 'Zod', level: 90, tag: 'Schema Validation' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND & APIS',
    icon: Server,
    color: 'gh-green',
    borderColor: 'border-gh-green/40',
    description: 'Robust server-side logic, RESTful endpoints, and secure authorization.',
    skills: [
      { name: 'Node.js', level: 88, tag: 'Runtime' },
      { name: 'Express.js', level: 88, tag: 'Web Framework' },
      { name: 'REST APIs', level: 92, tag: 'API Architecture' },
      { name: 'JWT Authentication', level: 86, tag: 'Secure Tokens' },
    ],
  },
  {
    id: 'databases',
    label: 'DATABASES',
    icon: Database,
    color: 'gh-orange',
    borderColor: 'border-gh-orange/40',
    description: 'Structured relational data and scalable document stores.',
    skills: [
      { name: 'MongoDB', level: 90, tag: 'NoSQL / Aggregation' },
      { name: 'MySQL', level: 82, tag: 'Relational Schemas' },
    ],
  },
  {
    id: 'devops-tooling',
    label: 'DEVOPS, TOOLING & SEO',
    icon: Wrench,
    color: 'gh-purple',
    borderColor: 'border-gh-purple/40',
    description: 'Version control, agile project suites, technical SEO, and schema architecture.',
    skills: [
      { name: 'GitHub', level: 90, tag: 'CI/CD & Workflows' },
      { name: 'Postman', level: 90, tag: 'API Testing' },
      { name: 'Figma', level: 85, tag: 'UI/UX Prototyping' },
      { name: 'Schema.org', level: 92, tag: 'Structured Data' },
      { name: 'SEO Fundamentals', level: 88, tag: 'Core Web Vitals' },
      { name: 'Jira', level: 82, tag: 'Agile Management' },
      { name: 'Trello', level: 88, tag: 'Sprint Boards' },
      { name: 'ClickUp', level: 85, tag: 'Task Tracking' },
    ],
  },
  {
    id: 'additional-languages',
    label: 'ADDITIONAL LANGUAGES',
    icon: Terminal,
    color: 'gh-red',
    borderColor: 'border-gh-red/40',
    description: 'Object-oriented programming, data structures, and algorithmic scripting.',
    skills: [
      { name: 'Java', level: 84, tag: 'OOP & Software Dev' },
      { name: 'Python', level: 80, tag: 'Scripting & Logic' },
    ],
  },
];

const colorMap = {
  'gh-cyan': { bar: '#00d9ff', glow: 'rgba(0,217,255,0.4)', text: 'text-gh-cyan', bg: 'bg-gh-cyan/10', border: 'border-gh-cyan/40' },
  'gh-blue': { bar: '#58a6ff', glow: 'rgba(88,166,255,0.4)', text: 'text-gh-blue', bg: 'bg-gh-blue/10', border: 'border-gh-blue/40' },
  'gh-green': { bar: '#39d353', glow: 'rgba(57,211,83,0.4)', text: 'text-gh-green', bg: 'bg-gh-green/10', border: 'border-gh-green/40' },
  'gh-orange': { bar: '#ffa657', glow: 'rgba(255,166,87,0.4)', text: 'text-gh-orange', bg: 'bg-gh-orange/10', border: 'border-gh-orange/40' },
  'gh-purple': { bar: '#bc8cff', glow: 'rgba(188,140,255,0.4)', text: 'text-gh-purple', bg: 'bg-gh-purple/10', border: 'border-gh-purple/40' },
  'gh-red': { bar: '#ff7b72', glow: 'rgba(255,123,114,0.4)', text: 'text-gh-red', bg: 'bg-gh-red/10', border: 'border-gh-red/40' },
};

const marqueeBadges = [
  { name: 'React 19', icon: '⚛️' },
  { name: 'Next.js App Router', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Zod Validation', icon: '🛡️' },
  { name: 'React Hook Form', icon: '📋' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'Radix UI', icon: '🧩' },
  { name: 'Node.js', icon: '💚' },
  { name: 'Express', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Schema.org SEO', icon: '🔍' },
  { name: 'Figma UI/UX', icon: '🎨' },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      {/* Background accents */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d9ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">02</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            TECH<span className="text-gh-cyan">.</span>SKILLS
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        {/* Tech Marquee / Quick Badge Row */}
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-gh-muted uppercase tracking-widest">
              PRIMARY PRODUCTION ECOSYSTEM
            </span>
            <span className="font-mono text-xs text-gh-cyan">VERIFIED STACK</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {marqueeBadges.map(({ name, icon }) => (
              <div
                key={name}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-lg border border-gh-border/80 bg-gh-surface/60 hover:border-gh-cyan/50 hover:bg-gh-cyan/5 transition-all duration-300 cursor-default shadow-sm"
              >
                <span className="text-base group-hover:scale-110 transition-transform">{icon}</span>
                <span className="font-mono text-xs text-gh-text/90 group-hover:text-gh-cyan transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 ${
              activeTab === 'all'
                ? 'text-gh-cyan bg-gh-cyan/10 border border-gh-cyan/50 shadow-neon-cyan'
                : 'text-gh-muted border border-gh-border hover:border-gh-border/80 hover:text-gh-text bg-gh-surface/40'
            }`}
          >
            ✦ ALL DOMAINS ({skillCategories.length})
          </button>
          {skillCategories.map(cat => {
            const colors = colorMap[cat.color];
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 ${
                  isActive
                    ? `${colors.text} ${colors.bg} border ${colors.border}`
                    : 'text-gh-muted border border-gh-border hover:border-gh-border/80 hover:text-gh-text bg-gh-surface/40'
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="game-card p-6 flex flex-col justify-between group hover:border-gh-border/90 transition-all duration-300 relative"
              >
                {/* Top ambient highlight */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl transition-opacity duration-300"
                  style={{ background: colors.bar, opacity: 0.6 }}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center border"
                        style={{
                          borderColor: `${colors.bar}40`,
                          background: `${colors.bar}15`,
                          color: colors.bar,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className={`font-display font-bold text-sm tracking-wider ${colors.text}`}>
                          {category.label}
                        </h3>
                        <span className="font-mono text-[10px] text-gh-muted">{category.skills.length} TECHNOLOGIES</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-xs text-gh-text/70 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pill Tags & Proficiency Indicators */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-gh-text font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.bar }} />
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-gh-muted px-2 py-0.5 rounded bg-gh-surface border border-gh-border/60">
                            {skill.tag}
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-gh-surface rounded-full overflow-hidden border border-gh-border/40">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: visible ? `${skill.level}%` : '0%',
                              background: `linear-gradient(90deg, ${colors.bar}99, ${colors.bar})`,
                              boxShadow: visible ? `0 0 6px ${colors.glow}` : 'none',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag list */}
                <div className="mt-6 pt-4 border-t border-gh-border/50 flex flex-wrap gap-1.5">
                  {category.skills.map(s => (
                    <span
                      key={s.name}
                      className="px-2 py-0.5 rounded text-[11px] font-mono border border-gh-border/60 bg-gh-surface/80 text-gh-muted hover:text-gh-text transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

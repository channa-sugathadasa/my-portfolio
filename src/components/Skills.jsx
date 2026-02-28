import React, { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    icon: '⚛',
    color: 'gh-cyan',
    borderColor: 'border-gh-cyan/30',
    skills: [
      { name: 'React.js', level: 95, xp: '4 years' },
      { name: 'Next.js', level: 88, xp: '3 years' },
      { name: 'TypeScript', level: 85, xp: '3 years' },
      { name: 'Tailwind CSS', level: 92, xp: '3 years' },
      { name: 'Redux / Zustand', level: 82, xp: '3 years' },
      { name: 'Three.js / WebGL', level: 65, xp: '1 year' },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    icon: '⚙',
    color: 'gh-blue',
    borderColor: 'border-gh-blue/30',
    skills: [
      { name: 'Node.js', level: 92, xp: '5 years' },
      { name: 'Express.js', level: 90, xp: '5 years' },
      { name: 'REST APIs', level: 95, xp: '5 years' },
      { name: 'GraphQL', level: 78, xp: '2 years' },
      { name: 'Socket.io', level: 80, xp: '3 years' },
      { name: 'Microservices', level: 75, xp: '2 years' },
    ],
  },
  {
    id: 'database',
    label: 'DATABASE',
    icon: '🗃',
    color: 'gh-green',
    borderColor: 'border-gh-green/30',
    skills: [
      { name: 'MongoDB', level: 92, xp: '5 years' },
      { name: 'PostgreSQL', level: 85, xp: '4 years' },
      { name: 'Redis', level: 78, xp: '3 years' },
      { name: 'Mongoose', level: 90, xp: '5 years' },
      { name: 'Prisma ORM', level: 75, xp: '2 years' },
      { name: 'Elasticsearch', level: 62, xp: '1 year' },
    ],
  },
  {
    id: 'devops',
    label: 'DEVOPS & CLOUD',
    icon: '☁',
    color: 'gh-purple',
    borderColor: 'border-gh-purple/30',
    skills: [
      { name: 'Docker', level: 88, xp: '4 years' },
      { name: 'AWS (EC2/S3/Lambda)', level: 82, xp: '3 years' },
      { name: 'GitHub Actions', level: 85, xp: '3 years' },
      { name: 'Linux / Bash', level: 80, xp: '5 years' },
      { name: 'Kubernetes', level: 65, xp: '1 year' },
      { name: 'Nginx', level: 78, xp: '4 years' },
    ],
  },
];

const colorMap = {
  'gh-cyan': { bar: '#00d9ff', glow: 'rgba(0,217,255,0.4)', text: 'text-gh-cyan', bg: 'bg-gh-cyan/10' },
  'gh-blue': { bar: '#58a6ff', glow: 'rgba(88,166,255,0.4)', text: 'text-gh-blue', bg: 'bg-gh-blue/10' },
  'gh-green': { bar: '#39d353', glow: 'rgba(57,211,83,0.4)', text: 'text-gh-green', bg: 'bg-gh-green/10' },
  'gh-purple': { bar: '#bc8cff', glow: 'rgba(188,140,255,0.4)', text: 'text-gh-purple', bg: 'bg-gh-purple/10' },
};

const techIcons = [
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '🌿' },
];

function SkillBar({ name, level, xp, color, animate }) {
  const colors = colorMap[color];
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-gh-text group-hover:text-white transition-colors">{name}</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-gh-muted">{xp}</span>
          <span className={`font-display font-bold text-xs ${colors.text}`}>{level}%</span>
        </div>
      </div>
      <div className="xp-bar">
        <div
          className="xp-bar-fill relative"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${colors.bar}88, ${colors.bar})`,
            boxShadow: animate ? `0 0 8px ${colors.glow}` : 'none',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const activeCat = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      {/* Background accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00d9ff, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">02</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            SKILL<span className="text-gh-cyan">.</span>TREE
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        {/* Tech stack orbit */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label text-center mb-6">TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map(({ name, icon }) => (
              <div key={name}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gh-border hover:border-gh-cyan/40 bg-gh-surface/40 hover:bg-gh-cyan/5 transition-all duration-300 cursor-default"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
                <span className="font-mono text-sm text-gh-muted group-hover:text-gh-text transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill categories tabs */}
        <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map(cat => {
              const colors = colorMap[cat.color];
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-display font-semibold text-xs tracking-widest transition-all duration-300 ${
                    isActive
                      ? `${colors.text} ${colors.bg} border ${cat.borderColor}`
                      : 'text-gh-muted border border-gh-border hover:border-gh-border/80 hover:text-gh-text'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Skill bars */}
          {activeCat && (
            <div className="game-card p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className={`font-display font-bold text-lg ${colorMap[activeCat.color].text}`}>
                    {activeCat.label}
                  </div>
                  <div className="font-mono text-xs text-gh-muted mt-1">PROFICIENCY LEVELS</div>
                </div>
                <div className="font-mono text-xs text-gh-muted">
                  AVG: {Math.round(activeCat.skills.reduce((a, s) => a + s.level, 0) / activeCat.skills.length)}%
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {activeCat.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={activeCat.color}
                    animate={visible}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Globe, Sparkles, Building2, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

const projects = [
  // Category A: Production & Client Deployments (Internship)
  {
    id: 1,
    category: 'production',
    categoryLabel: 'Production & Client System',
    title: 'Rajida Holdings — Corporate Website',
    subtitle: 'Flagship Web Presence for Microfinance & Rural Banks',
    scope: 'Flagship web presence serving SANASA societies, cooperative rural banks, and microfinance networks with responsive layouts, accessible component architecture, and high-performance routing.',
    deliverables: [
      'Serving SANASA societies & cooperative rural banking network',
      'Engineered with bleeding-edge React 19 & Tailwind CSS 4',
      'Radix UI accessible primitives with Framer Motion animations',
    ],
    icon: '🏛️',
    color: '#00d9ff',
    tags: ['React 19', 'Vite', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS 4', 'Framer Motion', 'Radix UI'],
    status: 'PRODUCTION DEPLOYMENT',
    statusColor: 'gh-green',
    client: 'RAJIDA Holdings (Pvt) Ltd.',
    github: 'https://github.com/channa-sugathadasa',
    live: null,
    featured: true,
  },
  {
    id: 2,
    category: 'production',
    categoryLabel: 'Production & Client System',
    title: 'Horagasmulla SANASA Website',
    subtitle: 'Statically Generated Institutional Banking Portal',
    scope: 'High-performance, statically generated institutional website for Dodangoda Horagasmulla SANASA Society Ltd., optimized for lightning-speed load times, accessibility, and financial member services.',
    deliverables: [
      'Engineered for Dodangoda Horagasmulla SANASA Society Ltd.',
      'Static Site Generation (SSG) with Next.js App Router',
      'Ultra-fast Lighthouse score with responsive mobile-first UI',
    ],
    icon: '🏦',
    color: '#58a6ff',
    tags: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Static Site Generation (SSG)'],
    status: 'PRODUCTION DEPLOYMENT',
    statusColor: 'gh-green',
    client: 'Horagasmulla SANASA Society Ltd.',
    github: 'https://github.com/channa-sugathadasa',
    live: null,
    featured: true,
  },
  {
    id: 3,
    category: 'production',
    categoryLabel: 'Production & Client System',
    title: 'DigiValuer — Digital Vehicle Valuation Platform',
    subtitle: 'Field-Investigation & Valuation Enterprise Portal',
    scope: 'Enterprise field-investigation and valuation portal engineered for financial institutions and certified valuers, featuring schema-based multi-step valuation forms and type-safe data handling.',
    deliverables: [
      'Enterprise portal for certified valuers & finance institutes',
      'Multi-step inspection workflows validated with Zod & React Hook Form',
      'Framer Motion animated transitions for seamless valuation steps',
    ],
    icon: '🚗',
    color: '#39d353',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Zod'],
    status: 'ENTERPRISE SYSTEM',
    statusColor: 'gh-blue',
    client: 'Financial Institutions & Certified Valuers',
    github: 'https://github.com/channa-sugathadasa',
    live: null,
    featured: true,
  },
  {
    id: 4,
    category: 'production',
    categoryLabel: 'Production & Client System',
    title: 'DiproIT — Corporate Consultancy Website',
    subtitle: 'Digital Transformation Showcase & SEO Platform',
    scope: 'Enterprise digital-transformation showcase featuring validated inquiry workflows, Rich Schema.org structured data, and modern typography tailored for global IT consulting client conversion.',
    deliverables: [
      'Enterprise digital consultancy showcase',
      'Schema.org structured data for rich search engine indexing',
      'Validated inquiry pipeline built with Next.js 15 & React 19',
    ],
    icon: '💼',
    color: '#bc8cff',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'React Hook Form', 'Zod', 'Schema.org'],
    status: 'PRODUCTION DEPLOYMENT',
    statusColor: 'gh-green',
    client: 'DiproIT Consulting',
    github: 'https://github.com/channa-sugathadasa',
    live: null,
    featured: true,
  },

  // Category B: Full-Stack & AI Systems
  {
    id: 5,
    category: 'fullstack-ai',
    categoryLabel: 'Full-Stack & AI Application',
    title: 'Natural Food Ordering System',
    subtitle: 'Multi-Vendor Regional E-Commerce Marketplace',
    scope: 'Multi-vendor e-commerce platform connecting buyers to regional natural food suppliers with live vendor dashboards, real-time cart tracking, and secure RESTful transactions.',
    deliverables: [
      'Multi-vendor architecture with vendor management dashboards',
      'Real-time cart tracking and multi-item ordering workflow',
      'Scalable MongoDB schemas with Express & Node.js REST APIs',
    ],
    icon: '🥗',
    color: '#ffa657',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Tailwind CSS'],
    status: 'FULL-STACK MERN',
    statusColor: 'gh-orange',
    client: 'Full-Stack Project',
    github: 'https://github.com/channa-sugathadasa/Food-ordering-system.git',
    live: null,
    featured: true,
  },
  {
    id: 6,
    category: 'fullstack-ai',
    categoryLabel: 'Full-Stack & AI Application',
    title: 'Vehicle Service Centre Management System',
    subtitle: 'Operations Suite with Virtual Diagnostic Advisor',
    scope: 'Operations management suite featuring role-based access control, automated inventory low-stock alerts, customer vehicle histories, and a rule-based virtual diagnostic advisor.',
    deliverables: [
      'Rule-based virtual diagnostic advisor for automotive issues',
      'Role-based access control (RBAC) backed by JWT Authentication',
      'Automated inventory monitoring with low-stock alerts',
    ],
    icon: '🔧',
    color: '#00d9ff',
    tags: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT Authentication', 'REST APIs'],
    status: 'FULL-STACK MERN',
    statusColor: 'gh-cyan',
    client: 'Operations Suite',
    github: 'https://github.com/channa-sugathadasa/vehicle-service-centre-management-system.git',
    live: null,
    featured: true,
  },
  {
    id: 7,
    category: 'fullstack-ai',
    categoryLabel: 'Full-Stack & AI Application',
    title: 'Nexa-AI — Conversational Assistant',
    subtitle: 'Generative AI Chat Client Powered by Google Gemini',
    scope: 'Clean, responsive AI chat client integrating Google Gemini API for real-time generative responses, conversational context retention, and customizable prompt configurations.',
    deliverables: [
      'Direct integration with Google Gemini Generative AI API',
      'Responsive, distraction-free chat UI with markdown code syntax',
      'Lightweight Node.js backend proxy with streaming support',
    ],
    icon: '✨',
    color: '#bc8cff',
    tags: ['React', 'Vite', 'Node.js', 'Google Gemini API', 'CSS', 'REST APIs'],
    status: 'GENERATIVE AI',
    statusColor: 'gh-purple',
    client: 'AI Application',
    github: 'https://github.com/channa-sugathadasa',
    live: null,
    featured: true,
  },
];

const categoryTabs = [
  { id: 'all', label: 'ALL PROJECTS', count: 7 },
  { id: 'production', label: 'PRODUCTION & CLIENT SYSTEMS', count: 4 },
  { id: 'fullstack-ai', label: 'FULL-STACK & AI SYSTEMS', count: 3 },
];

const techPillFilters = [
  'ALL TECH',
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Zod / Hook Form',
  'Node.js / Express',
  'MongoDB',
  'Google Gemini API',
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('ALL TECH');
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    if (!matchesCategory) return false;

    if (techFilter === 'ALL TECH') return true;
    if (techFilter === 'React / Next.js') {
      return project.tags.some(t => t.includes('React') || t.includes('Next.js'));
    }
    if (techFilter === 'TypeScript') {
      return project.tags.some(t => t.includes('TypeScript'));
    }
    if (techFilter === 'Tailwind CSS') {
      return project.tags.some(t => t.includes('Tailwind'));
    }
    if (techFilter === 'Zod / Hook Form') {
      return project.tags.some(t => t.includes('Zod') || t.includes('Hook Form'));
    }
    if (techFilter === 'Node.js / Express') {
      return project.tags.some(t => t.includes('Node') || t.includes('Express'));
    }
    if (techFilter === 'MongoDB') {
      return project.tags.some(t => t.includes('MongoDB') || t.includes('MERN'));
    }
    if (techFilter === 'Google Gemini API') {
      return project.tags.some(t => t.includes('Gemini'));
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
      {/* Background ambient glow */}
      <div
        className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #58a6ff, transparent)' }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d9ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="section-label">03</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            FEATURED<span className="text-gh-cyan">.</span>PROJECTS
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categoryTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setCategoryFilter(tab.id);
                setTechFilter('ALL TECH');
              }}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs sm:text-sm tracking-wider font-semibold transition-all duration-200 flex items-center gap-2 ${
                categoryFilter === tab.id
                  ? 'text-gh-cyan bg-gh-cyan/10 border border-gh-cyan/50 shadow-neon-cyan'
                  : 'text-gh-muted border border-gh-border hover:border-gh-border/80 hover:text-gh-text bg-gh-surface/50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                categoryFilter === tab.id ? 'bg-gh-cyan/20 text-gh-cyan' : 'bg-gh-surface text-gh-muted'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Secondary Technology Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gh-border/50">
          <span className="font-mono text-xs text-gh-muted mr-1">FILTER STACK:</span>
          {techPillFilters.map(filter => (
            <button
              key={filter}
              onClick={() => setTechFilter(filter)}
              className={`px-3 py-1 rounded-md font-mono text-xs transition-all duration-150 ${
                techFilter === filter
                  ? 'bg-gh-blue/20 text-gh-blue border border-gh-blue/40 font-semibold'
                  : 'text-gh-muted hover:text-gh-text border border-gh-border/60 bg-gh-surface/30'
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="ml-auto font-mono text-xs text-gh-muted hidden sm:block">
            Showing <span className="text-gh-cyan font-bold">{filteredProjects.length}</span> verified systems
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const delay = index * 80;
            return (
              <div
                key={project.id}
                className="game-card p-6 sm:p-7 flex flex-col justify-between group hover:border-gh-cyan/40 transition-all duration-300 relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
                }}
              >
                {/* Accent line top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border flex-shrink-0 shadow-sm"
                        style={{
                          borderColor: `${project.color}40`,
                          background: `${project.color}15`,
                        }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border"
                            style={{
                              color: project.color,
                              borderColor: `${project.color}40`,
                              background: `${project.color}10`,
                            }}
                          >
                            {project.categoryLabel}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-gh-text group-hover:text-white transition-colors mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <div
                      className="px-2.5 py-1 rounded text-[11px] font-mono tracking-wider font-semibold border flex items-center gap-1.5 flex-shrink-0"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}40`,
                        background: `${project.color}10`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
                      {project.status}
                    </div>
                  </div>

                  {/* Subtitle / Scope statement */}
                  <p className="font-mono text-xs text-gh-cyan mb-3">
                    // {project.subtitle}
                  </p>
                  <p className="font-body text-sm text-gh-text/85 leading-relaxed mb-4">
                    {project.scope}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-1.5 mb-5 p-3 rounded-lg bg-gh-surface/50 border border-gh-border/60">
                    <span className="font-mono text-[11px] text-gh-muted uppercase tracking-wider block mb-1">
                      Key Deliverables &amp; Architectural Highlights
                    </span>
                    {project.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-body text-gh-text/80">
                        <CheckCircle2 size={13} className="text-gh-cyan mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-gh-surface border border-gh-border/70 text-gh-muted group-hover:border-gh-border group-hover:text-gh-text transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-gh-border/60 flex items-center justify-between">
                  <div className="font-mono text-xs text-gh-muted flex items-center gap-1.5">
                    <Building2 size={13} className="text-gh-muted" />
                    <span>{project.client}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gh-border hover:border-gh-cyan/40 bg-gh-surface/80 text-gh-text hover:text-gh-cyan font-mono text-xs transition-all"
                      title="View GitHub Repository"
                    >
                      <Github size={13} />
                      <span>Repository</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gh-cyan/40 bg-gh-cyan/10 text-gh-cyan hover:bg-gh-cyan/20 font-mono text-xs transition-all"
                        title="View Live Platform"
                      >
                        <Globe size={13} />
                        <span>Live Demo</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl border border-gh-border/80 bg-gh-surface/50 max-w-xl mx-auto">
            <div className="text-left">
              <div className="font-display font-bold text-sm text-gh-text">Looking for source repositories &amp; commits?</div>
              <div className="font-mono text-xs text-gh-muted mt-0.5">Explore full commit histories, contributions, and active branches on GitHub.</div>
            </div>
            <a
              href="https://github.com/channa-sugathadasa?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 flex-shrink-0 text-xs"
            >
              <Github size={15} />
              GITHUB PROFILE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

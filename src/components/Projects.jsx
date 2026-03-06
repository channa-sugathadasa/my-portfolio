import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NexusChat',
    subtitle: 'Real-Time Messaging Platform',
    description: 'A full-featured real-time messaging platform with end-to-end encryption, file sharing, video calls, and team workspaces. Built for enterprise-scale with 10k+ concurrent connections.',
    image: '💬',
    color: '#00d9ff',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'WebRTC'],
    stats: { stars: 847, forks: 124, views: '12.4K' },
    status: 'PRODUCTION',
    statusColor: 'gh-green',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    difficulty: 'LEGENDARY',
  },
  {
    id: 2,
    title: 'TradeForge',
    subtitle: 'Crypto Trading Dashboard',
    description: 'Advanced cryptocurrency trading dashboard with real-time WebSocket price feeds, portfolio analytics, technical indicators, and AI-powered market predictions.',
    image: '📈',
    color: '#58a6ff',
    tags: ['React', 'Express', 'PostgreSQL', 'WebSocket', 'Chart.js', 'AWS'],
    stats: { stars: 623, forks: 89, views: '8.9K' },
    status: 'BETA',
    statusColor: 'gh-orange',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    difficulty: 'EPIC',
  },
  {
    id: 3,
    title: 'DevFlow',
    subtitle: 'Project Management Suite',
    description: 'Jira-inspired project management app with Kanban boards, sprint planning, time tracking, and GitHub integration. Supports teams of any size.',
    image: '🗂',
    color: '#bc8cff',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind', 'Docker'],
    stats: { stars: 412, forks: 67, views: '6.2K' },
    status: 'PRODUCTION',
    statusColor: 'gh-green',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    difficulty: 'EPIC',
  },
  {
    id: 4,
    title: 'ShopCore',
    subtitle: 'E-Commerce Engine',
    description: 'Headless e-commerce engine with Stripe payments, inventory management, multi-vendor support, and a CMS for content-rich product pages.',
    image: '🛒',
    color: '#39d353',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Cloudinary'],
    stats: { stars: 289, forks: 45, views: '4.1K' },
    status: 'PRODUCTION',
    statusColor: 'gh-green',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    difficulty: 'RARE',
  },
  {
    id: 5,
    title: 'AuthVault',
    subtitle: 'Auth Microservice',
    description: 'Plug-and-play authentication microservice with JWT, OAuth2, 2FA/TOTP, session management, and rate limiting. Production-ready and extensible.',
    image: '🔐',
    color: '#ffa657',
    tags: ['Node.js', 'Express', 'Redis', 'MongoDB', 'JWT', 'Docker'],
    stats: { stars: 534, forks: 98, views: '9.7K' },
    status: 'STABLE',
    statusColor: 'gh-blue',
    github: 'https://github.com',
    live: null,
    featured: false,
    difficulty: 'RARE',
  },
  {
    id: 6,
    title: 'LogStream',
    subtitle: 'Real-Time Log Analytics',
    description: 'Lightweight log aggregation and monitoring platform. Ingest logs from any source, create dashboards, set alerts, and debug production issues fast.',
    image: '📊',
    color: '#ff7b72',
    tags: ['React', 'Node.js', 'Elasticsearch', 'Socket.io', 'Docker', 'Grafana'],
    stats: { stars: 178, forks: 32, views: '3.2K' },
    status: 'ALPHA',
    statusColor: 'gh-red',
    github: 'https://github.com',
    live: null,
    featured: false,
    difficulty: 'UNCOMMON',
  },
  {
    id: 3,
    title: 'DevFlow',
    subtitle: 'Project Management Suite',
    description: 'Jira-inspired project management app with Kanban boards, sprint planning, time tracking, and GitHub integration. Supports teams of any size.',
    image: '🗂',
    color: '#bc8cff',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind', 'Docker'],
    stats: { stars: 412, forks: 67, views: '6.2K' },
    status: 'PRODUCTION',
    statusColor: 'gh-green',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    difficulty: 'EPIC',
  },
  {
    id: 3,
    title: 'DevFlow',
    subtitle: 'Project Management Suite',
    description: 'Jira-inspired project management app with Kanban boards, sprint planning, time tracking, and GitHub integration. Supports teams of any size.',
    image: '🗂',
    color: '#bc8cff',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind', 'Docker'],
    stats: { stars: 412, forks: 67, views: '6.2K' },
    status: 'PRODUCTION',
    statusColor: 'gh-green',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    difficulty: 'EPIC',
  },
  {
    id: 3,
    title: 'DevFlow',
    subtitle: 'Project Management Suite',
    description: 'Jira-inspired project management app with Kanban boards, sprint planning, time tracking, and GitHub integration. Supports teams of any size.',
    image: '🗂',
    color: '#bc8cff',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind', 'Docker'],
    stats: { stars: 412, forks: 67, views: '6.2K' },
    status: 'PRODUCTION',
    statusColor: 'gh-green',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    difficulty: 'EPIC',
  },
];

const difficultyColors = {
  LEGENDARY: '#ffd700',
  EPIC: '#bc8cff',
  RARE: '#58a6ff',
  UNCOMMON: '#39d353',
  COMMON: '#7d8590',
};

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const delay = index * 100;

  return (
    <div
      className="game-card group cursor-default relative"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Card glow */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="p-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
              style={{
                borderColor: `${project.color}30`,
                background: `${project.color}10`,
              }}
            >
              {project.image}
            </div>
            <div>
              <div className="font-display font-bold text-gh-text group-hover:text-white transition-colors">
                {project.title}
              </div>
              <div className="font-mono text-xs text-gh-muted">{project.subtitle}</div>
            </div>
          </div>

          {/* Status badge */}
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border text-${project.statusColor}`}
            style={{ borderColor: `currentColor`, background: `currentColor`, opacity: undefined }}
          >
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono"
              style={{
                color: project.color,
                border: `1px solid ${project.color}40`,
                background: `${project.color}10`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
              {project.status}
            </div>
          </div>
        </div>

        {/* Difficulty badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs px-2 py-0.5 rounded border"
            style={{
              color: difficultyColors[project.difficulty],
              borderColor: `${difficultyColors[project.difficulty]}40`,
              background: `${difficultyColors[project.difficulty]}10`,
            }}
          >
            ◆ {project.difficulty}
          </span>
        </div>

        {/* Description */}
        <p className="text-gh-muted text-sm leading-relaxed mb-5 font-body">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded font-mono text-xs bg-gh-surface border border-gh-border text-gh-muted">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats & Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gh-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gh-muted hover:text-gh-orange transition-colors">
              <Star size={13} />
              <span className="font-mono text-xs">{project.stats.stars}</span>
            </div>
            <div className="flex items-center gap-1 text-gh-muted hover:text-gh-blue transition-colors">
              <GitFork size={13} />
              <span className="font-mono text-xs">{project.stats.forks}</span>
            </div>
            <div className="flex items-center gap-1 text-gh-muted">
              <Eye size={13} />
              <span className="font-mono text-xs">{project.stats.views}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded border border-gh-border text-gh-muted hover:text-gh-text hover:border-gh-cyan/40 transition-all"
            >
              <Github size={14} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded border border-gh-border text-gh-muted hover:text-gh-cyan hover:border-gh-cyan/40 transition-all"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const ref = useRef(null);

  const filters = ['ALL', 'LEGENDARY', 'EPIC', 'RARE'];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = filter === 'ALL' ? projects : projects.filter(p => p.difficulty === filter);

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #58a6ff, transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">03</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            PROJECTS<span className="text-gh-cyan">.</span>LOG
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded font-mono text-xs tracking-widest transition-all duration-200 ${
                filter === f
                  ? 'text-gh-cyan bg-gh-cyan/10 border border-gh-cyan/40'
                  : 'text-gh-muted border border-gh-border hover:border-gh-border/80 hover:text-gh-text'
              }`}
            >
              {f}
              {f !== 'ALL' && (
                <span className="ml-2 opacity-50"
                  style={{ color: difficultyColors[f] }}
                >◆</span>
              )}
            </button>
          ))}
          <div className="ml-auto font-mono text-xs text-gh-muted self-center">
            {filtered.length} PROJECTS
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/channa-sugathadasa?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Github size={16} />
            VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}

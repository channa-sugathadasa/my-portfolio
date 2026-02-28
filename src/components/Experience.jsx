import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Engineer',
    company: 'TechVault Inc.',
    type: 'Full-time',
    period: '2022 — Present',
    location: 'San Francisco, CA',
    color: '#00d9ff',
    level: 'SR-III',
    achievements: [
      'Led architecture of microservices platform serving 2M+ daily active users',
      'Reduced API response time by 65% via Redis caching and query optimization',
      'Mentored 6 junior engineers, establishing best practices and code review standards',
      'Built real-time notification system processing 500K events/day with Socket.io',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Axiom Digital',
    type: 'Full-time',
    period: '2020 — 2022',
    location: 'Remote',
    color: '#58a6ff',
    level: 'MID-II',
    achievements: [
      'Developed 12+ client-facing React applications with >90% Lighthouse scores',
      'Designed RESTful API architecture handling 100K+ requests per day',
      'Integrated third-party services: Stripe, Twilio, SendGrid, and Cloudinary',
      'Shipped CI/CD pipeline using GitHub Actions reducing deploy time by 70%',
    ],
    stack: ['React', 'Express', 'PostgreSQL', 'Stripe', 'GitHub Actions'],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'CodeCraft Studios',
    type: 'Full-time',
    period: '2019 — 2020',
    location: 'New York, NY',
    color: '#bc8cff',
    level: 'JR-I',
    achievements: [
      'Built and maintained 20+ WordPress and React-based client websites',
      'Implemented SEO optimizations resulting in 40% organic traffic increase',
      'Collaborated in agile sprints with designers and backend engineers',
      'Created reusable component library used across 8 company projects',
    ],
    stack: ['React', 'JavaScript', 'CSS3', 'WordPress', 'PHP'],
  },
  {
    id: 4,
    role: 'Freelance Developer',
    company: 'Self-Employed',
    type: 'Freelance',
    period: '2017 — 2019',
    location: 'Remote',
    color: '#39d353',
    level: 'SOLO',
    achievements: [
      'Delivered 30+ projects for small businesses and startups globally',
      'Specialized in MERN stack e-commerce and SaaS product builds',
      'Maintained 5-star rating across Upwork and Toptal platforms',
      'Grew monthly recurring revenue to $8K through retainer clients',
    ],
    stack: ['MERN Stack', 'jQuery', 'PHP', 'MySQL', 'Shopify'],
  },
];

const certifications = [
  { title: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', year: '2023', icon: '☁️', color: '#ffa657' },
  { title: 'MongoDB Certified Developer', issuer: 'MongoDB University', year: '2022', icon: '🍃', color: '#39d353' },
  { title: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2021', icon: '⚡', color: '#58a6ff' },
  { title: 'Meta Front-End Developer', issuer: 'Meta / Coursera', year: '2020', icon: '⚛️', color: '#00d9ff' },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">04</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            EXP<span className="text-gh-cyan">.</span>HISTORY
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-4">
            {experiences.map((exp, index) => {
              const isOpen = expanded === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-full w-px h-4 bg-gh-border z-10" />
                  )}

                  <button
                    className={`w-full text-left game-card transition-all duration-300 ${isOpen ? 'ring-1' : ''}`}
                    style={isOpen ? { ringColor: `${exp.color}40`, borderColor: `${exp.color}30` } : {}}
                    onClick={() => setExpanded(isOpen ? null : exp.id)}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Color dot with level */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-1">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center border font-display font-bold text-xs"
                            style={{
                              borderColor: `${exp.color}50`,
                              background: `${exp.color}10`,
                              color: exp.color,
                            }}
                          >
                            {exp.level.split('-')[0]}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <div className="font-display font-bold text-gh-text">{exp.role}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="font-mono text-sm" style={{ color: exp.color }}>{exp.company}</span>
                                <span className="w-1 h-1 rounded-full bg-gh-border" />
                                <span className="font-mono text-xs text-gh-muted">{exp.type}</span>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <div className="font-mono text-xs text-gh-muted">{exp.period}</div>
                              <div className="font-mono text-xs text-gh-muted/60 mt-0.5">{exp.location}</div>
                            </div>
                          </div>
                        </div>

                        <ChevronRight
                          size={16}
                          className="text-gh-muted flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}
                        />
                      </div>

                      {/* Expanded content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-5' : 'max-h-0'}`}
                      >
                        <div className="pl-14 space-y-4">
                          <ul className="space-y-2">
                            {exp.achievements.map((a, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gh-text/80 font-body">
                                <ChevronRight size={12} className="mt-1 flex-shrink-0" style={{ color: exp.color }} />
                                {a}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gh-border/50">
                            {exp.stack.map(s => (
                              <span key={s} className="px-2 py-0.5 rounded font-mono text-xs border border-gh-border/60 bg-gh-surface/60"
                                style={{ color: exp.color }}>
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Certifications */}
          <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-2 mb-6">
              <Award size={16} className="text-gh-cyan" />
              <span className="section-label">CERTIFICATIONS</span>
            </div>
            <div className="space-y-3">
              {certifications.map(cert => (
                <div key={cert.title} className="game-card p-4 group">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl border flex-shrink-0"
                      style={{
                        borderColor: `${cert.color}30`,
                        background: `${cert.color}10`,
                      }}
                    >
                      {cert.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-body font-semibold text-sm text-gh-text group-hover:text-white transition-colors leading-snug">
                        {cert.title}
                      </div>
                      <div className="font-mono text-xs text-gh-muted mt-1">{cert.issuer}</div>
                      <div className="font-mono text-xs mt-1" style={{ color: cert.color }}>{cert.year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-gh-cyan" />
                <span className="section-label">EDUCATION</span>
              </div>
              <div className="game-card p-5">
                <div className="font-display font-bold text-gh-text">Bachelor of Information and Communication Technology Honours</div>
                <div className="font-mono text-sm text-gh-cyan mt-1">Rajarata University of Sri Lanka</div>
                <div className="font-mono text-xs text-gh-muted mt-1"></div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Software Developer', 'Software Engineer'].map(s => (
                    <span key={s} className="px-2 py-0.5 rounded font-mono text-xs bg-gh-surface border border-gh-border text-gh-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

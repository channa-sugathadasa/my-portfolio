import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, GraduationCap, ChevronRight, CheckCircle2, Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'RAJIDA Holdings (Pvt) Ltd.',
    type: 'Professional Internship',
    period: 'April 2026 – October 2026',
    duration: '6 Months',
    location: 'Sri Lanka (Hybrid / Corporate)',
    color: '#00d9ff',
    badge: 'INTERNSHIP',
    summary: 'Spearheaded frontend and full-stack development of production-grade corporate and institutional platforms, serving cooperative financial institutions, automotive valuation companies, and enterprise IT consultancies.',
    deliverables: [
      'Developed and deployed production-grade corporate and institutional websites across cooperative banking, vehicle valuation, and IT consulting sectors.',
      'Engineered reusable UI components, mobile-first responsive layouts, schema-based form validations (Zod, React Hook Form), and accessible design patterns.',
      'Implemented technical SEO best practices and Schema.org structured data to enhance search indexing and page performance.',
      'Collaborated closely with cross-functional stakeholders to translate strict institutional workflows into intuitive, high-performance web interfaces.',
    ],
    sectors: [
      { name: 'Cooperative Banking', desc: 'SANASA Societies & Rural Banks' },
      { name: 'Vehicle Valuation', desc: 'Enterprise Field-Investigation Portals' },
      { name: 'IT Consulting', desc: 'Corporate Transformation Platforms' },
    ],
    stack: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Radix UI',
      'Zod',
      'React Hook Form',
      'Node.js',
      'Express',
      'Schema.org',
    ],
  },
];

const educationList = [
  {
    degree: 'Bachelor of Information and Communication Technology (BICT Hons)',
    major: 'Software Engineering Major',
    institution: 'Rajarata University of Sri Lanka',
    timeline: '2022 – 2026',
    status: 'Undergraduate',
    color: '#bc8cff',
    icon: '🎓',
    highlights: [
      'Specialized in Software Engineering, Object-Oriented Design, Distributed Systems, and Modern Web Architectures.',
      'Active contributor to student technological societies and university media production.',
    ],
  },
  {
    degree: 'G.C.E. Advanced Level',
    major: 'Engineering Technology Stream',
    institution: 'C. W. W. Kannangara Central College',
    timeline: '2020',
    status: 'Completed',
    color: '#58a6ff',
    icon: '🏛️',
    highlights: [
      'Focused on Engineering Technology, Science for Technology, and Information Technology.',
    ],
  },
];

const certifications = [
  {
    title: 'Introduction to DevOps Tools, CI/CD for Beginners, Cloud Computing',
    issuer: 'Simplilearn',
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: '#ffa657',
  },
  {
    title: 'Figma UI/UX Design',
    issuer: 'DP Education IT Campus',
    category: 'Design & Prototyping',
    icon: '🎨',
    color: '#00d9ff',
  },
  {
    title: 'Java Programming & Software Development',
    issuer: 'L.A.V.T.C',
    category: 'Software Engineering',
    icon: '☕',
    color: '#39d353',
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
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
            EXPERIENCE<span className="text-gh-cyan">.</span>CAREER
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Professional Work Experience (7 cols) */}
          <div className={`lg:col-span-7 space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={18} className="text-gh-cyan" />
              <span className="section-label">PROFESSIONAL WORK EXPERIENCE</span>
            </div>

            {workExperience.map((exp) => (
              <div
                key={exp.id}
                className="game-card p-6 sm:p-8 relative group border-gh-cyan/30"
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                  style={{ background: 'linear-gradient(90deg, #00d9ff, #58a6ff)' }}
                />

                {/* Company & Role Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl border border-gh-cyan/40 bg-gh-cyan/10 flex items-center justify-center text-gh-cyan flex-shrink-0 mt-0.5">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-gh-text">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 font-mono text-sm">
                        <span className="text-gh-cyan font-semibold">{exp.company}</span>
                        <span className="text-gh-muted">•</span>
                        <span className="text-gh-muted text-xs">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gh-cyan/40 bg-gh-cyan/10 font-mono text-xs text-gh-cyan font-bold">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="font-mono text-xs text-gh-muted mt-1">
                      {exp.duration} • {exp.location}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="font-body text-base text-gh-text/85 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Deliverables */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gh-muted mb-3">
                    KEY DELIVERABLES &amp; IMPACT
                  </h4>
                  <div className="space-y-2.5">
                    {exp.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm font-body text-gh-text/90">
                        <CheckCircle2 size={16} className="text-gh-cyan mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sectors Served */}
                <div className="mb-6 p-4 rounded-xl border border-gh-border/70 bg-gh-surface/50">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-gh-muted block mb-2.5">
                    Production Domains Engineered During Internship
                  </span>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {exp.sectors.map(sector => (
                      <div key={sector.name} className="p-2.5 rounded-lg border border-gh-border/60 bg-gh-surface text-center">
                        <div className="font-display font-semibold text-xs text-gh-text">{sector.name}</div>
                        <div className="font-mono text-[10px] text-gh-muted mt-0.5">{sector.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gh-muted mb-2.5">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono border border-gh-border/70 bg-gh-surface text-gh-text/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Education & Certifications (5 cols) */}
          <div className={`lg:col-span-5 space-y-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-gh-purple" />
                <span className="section-label">EDUCATION</span>
              </div>
              <div className="space-y-4">
                {educationList.map(edu => (
                  <div key={edu.degree} className="game-card p-5 group hover:border-gh-purple/40 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{edu.icon}</span>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-gh-purple/10 text-gh-purple border border-gh-purple/30">
                          {edu.status}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-gh-muted">{edu.timeline}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-gh-text group-hover:text-white transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="font-mono text-xs text-gh-cyan mt-0.5">{edu.major}</div>
                    <div className="font-body text-xs text-gh-muted mt-1">{edu.institution}</div>

                    <div className="mt-3 pt-3 border-t border-gh-border/50 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <p key={i} className="font-body text-xs text-gh-text/75 leading-relaxed">
                          • {h}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-gh-orange" />
                <span className="section-label">VERIFIED CERTIFICATIONS</span>
              </div>
              <div className="space-y-3">
                {certifications.map(cert => (
                  <div key={cert.title} className="game-card p-4 group hover:border-gh-orange/40 transition-all">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg border flex-shrink-0"
                        style={{
                          borderColor: `${cert.color}40`,
                          background: `${cert.color}10`,
                        }}
                      >
                        {cert.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: cert.color }}>
                          {cert.category}
                        </div>
                        <h4 className="font-body font-semibold text-sm text-gh-text group-hover:text-white transition-colors leading-snug mt-0.5">
                          {cert.title}
                        </h4>
                        <div className="font-mono text-xs text-gh-muted mt-1">{cert.issuer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

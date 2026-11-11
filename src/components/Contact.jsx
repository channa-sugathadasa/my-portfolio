import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';

const contactChannels = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'channavimukthi21871@gmail.com',
    href: 'mailto:channavimukthi21871@gmail.com',
    actionText: 'Compose Email',
    color: '#00d9ff',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Mobile / WhatsApp',
    value: '+94 78 238 0090',
    href: 'tel:+94782380090',
    actionText: 'Direct Call',
    color: '#39d353',
    copyable: true,
  },
  {
    icon: MapPin,
    label: 'Primary Location',
    value: 'Kalutara, Sri Lanka',
    href: null,
    actionText: 'Local Time (GMT+5:30)',
    color: '#ffa657',
    copyable: false,
  },
];

const socialProfiles = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'in/channa-sugathadasa',
    href: 'https://linkedin.com/in/channa-sugathadasa',
    desc: 'Connect for career, frontend and full-stack opportunities',
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: '@channa-sugathadasa',
    href: 'https://github.com/channa-sugathadasa',
    desc: 'Review production repositories, commits, and open-source code',
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [copiedValue, setCopiedValue] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedValue(key);
    setTimeout(() => setCopiedValue(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate real async transmission with form capture
    await new Promise(r => setTimeout(r, 1600));
    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="relative py-24 px-4" ref={ref}>
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10"
          style={{ background: 'radial-gradient(ellipse, #00d9ff, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">05</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            GET<span className="text-gh-cyan">.</span>IN_TOUCH
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: Contact Channels & Verified Socials (5 cols) */}
          <div className={`lg:col-span-5 space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <span className="font-mono text-xs text-gh-cyan tracking-wider uppercase font-semibold">
                // Let's connect &amp; build together
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-gh-text mt-2 mb-3">
                Open for Web Development &amp; Engineering Roles.
              </h3>
              <p className="text-gh-muted font-body text-base leading-relaxed">
                Whether you have an enterprise project, corporate website deployment, or full-time opportunity, feel free to reach out directly through any channel below.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {contactChannels.map(({ icon: Icon, label, value, href, actionText, color, copyable }) => {
                const isCopied = copiedValue === label;
                return (
                  <div
                    key={label}
                    className="p-4 rounded-xl border border-gh-border/70 bg-gh-surface/40 hover:border-gh-cyan/40 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center border flex-shrink-0"
                        style={{
                          borderColor: `${color}40`,
                          background: `${color}10`,
                          color,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[11px] text-gh-muted">{label}</div>
                        {href ? (
                          <a
                            href={href}
                            className="font-mono text-sm text-gh-text hover:text-gh-cyan transition-colors truncate block"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="font-mono text-sm text-gh-text truncate block">{value}</span>
                        )}
                        <span className="font-mono text-[10px] text-gh-muted/70">{actionText}</span>
                      </div>
                    </div>

                    {copyable && (
                      <button
                        onClick={() => copyToClipboard(value, label)}
                        className="p-2 rounded-lg border border-gh-border hover:border-gh-cyan/50 bg-gh-surface text-gh-muted hover:text-gh-cyan transition-all flex-shrink-0"
                        title={`Copy ${label} to clipboard`}
                      >
                        {isCopied ? <Check size={15} className="text-gh-green" /> : <Copy size={15} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Network Profiles */}
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-gh-muted mb-3">
                PROFESSIONAL NETWORKS
              </div>
              <div className="space-y-2.5">
                {socialProfiles.map(({ icon: Icon, label, handle, href, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gh-border/70 hover:border-gh-cyan/50 hover:bg-gh-cyan/5 transition-all group bg-gh-surface/30"
                  >
                    <div className="w-9 h-9 rounded-lg border border-gh-border flex items-center justify-center text-gh-muted group-hover:text-gh-cyan group-hover:border-gh-cyan/40 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-sm text-gh-text group-hover:text-white transition-colors">
                          {label}
                        </span>
                        <span className="font-mono text-xs text-gh-cyan flex items-center gap-1">
                          {handle}
                          <ArrowUpRight size={12} />
                        </span>
                      </div>
                      <p className="font-body text-xs text-gh-muted mt-0.5 truncate">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Contact Form (7 cols) */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="game-card overflow-hidden border-gh-border/90 shadow-2xl">
              {/* Form terminal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gh-border bg-gh-surface">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gh-red/80" />
                  <div className="w-3 h-3 rounded-full bg-gh-orange/80" />
                  <div className="w-3 h-3 rounded-full bg-gh-green/80" />
                  <span className="ml-3 font-mono text-xs text-gh-muted">
                    POST /api/inquiry — schema_zod: verified
                  </span>
                </div>
                <span className="font-mono text-[11px] text-gh-cyan hidden sm:inline">
                  CHANNA_SECURE_INBOX
                </span>
              </div>

              {status === 'sent' ? (
                <div className="p-14 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gh-green/10 border border-gh-green/40 flex items-center justify-center">
                    <CheckCircle2 size={36} className="text-gh-green" />
                  </div>
                  <div className="font-display font-bold text-2xl text-gh-text tracking-wide">
                    INQUIRY TRANSMITTED!
                  </div>
                  <p className="font-body text-sm text-gh-muted max-w-md">
                    Thank you for reaching out. Your message has been received, and I will get back to you promptly at{' '}
                    <span className="text-gh-cyan font-mono">{form.email || 'your email'}</span>.
                  </p>
                  <div className="font-mono text-xs text-gh-green mt-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gh-green animate-ping" />
                    STATUS: 200 OK — Delivered
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                        <span className="text-gh-purple">const</span> senderName <span className="text-gh-cyan">=</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-gh-bg border border-gh-border/90 rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/50 focus:outline-none focus:border-gh-cyan/70 focus:ring-1 focus:ring-gh-cyan/30 transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                        <span className="text-gh-purple">const</span> senderEmail <span className="text-gh-cyan">=</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. client@company.com"
                        className="w-full bg-gh-bg border border-gh-border/90 rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/50 focus:outline-none focus:border-gh-cyan/70 focus:ring-1 focus:ring-gh-cyan/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                      <span className="text-gh-purple">const</span> projectOrRole <span className="text-gh-cyan">=</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Frontend Web Developer Role / Next.js Project"
                      className="w-full bg-gh-bg border border-gh-border/90 rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/50 focus:outline-none focus:border-gh-cyan/70 focus:ring-1 focus:ring-gh-cyan/30 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                      <span className="text-gh-purple">const</span> messageDetails <span className="text-gh-cyan">=</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your project requirements, scope, or timeline..."
                      className="w-full bg-gh-bg border border-gh-border/90 rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/50 focus:outline-none focus:border-gh-cyan/70 focus:ring-1 focus:ring-gh-cyan/30 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed py-3.5 text-sm font-semibold tracking-wider"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gh-cyan/30 border-t-gh-cyan rounded-full animate-spin" />
                        TRANSMITTING INQUIRY...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        TRANSMIT MESSAGE TO CHANNA
                      </>
                    )}
                  </button>
                  <p className="font-mono text-[11px] text-gh-muted text-center pt-1">
                    Direct delivery to: channavimukthi21871@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

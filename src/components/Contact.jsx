import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, MessageSquare, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'channavimukthi21871@gmail.com', href: 'mailto:channavimukthi21871@gmail.com', color: '#00d9ff' },
  { icon: MapPin, label: 'Location', value: 'Bombuwala, Kalutara, Sri Lanka.', href: null, color: '#58a6ff' },
  { icon: MessageSquare, label: 'Discord', value: 'channa_sugathadasa', href: null, color: '#bc8cff' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/channa-sugathadasa', handle: '@channa-sugathadasa' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/channa-sugathadasa/', handle: 'in/channa-sugathadasa' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', handle: '@channa218' },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000));
    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-4" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-96 opacity-5"
          style={{ background: 'radial-gradient(ellipse, #00d9ff, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-label">05</div>
          <div className="h-px flex-1 bg-gh-border max-w-16" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gh-text tracking-widest">
            INIT<span className="text-gh-cyan">.</span>CONTACT
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gh-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="font-display font-bold text-2xl text-gh-text mb-3">
                Let's build something <span className="neon-text-subtle">great</span>.
              </h3>
              <p className="text-gh-muted font-body leading-relaxed">
                Available for full-time roles, freelance projects, and technical consulting. 
                Response time: under 24 hours. Let's talk.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-gh-border/60 bg-gh-surface/30 hover:border-gh-border transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border"
                    style={{ borderColor: `${color}30`, background: `${color}10`, color }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gh-muted">{label}</div>
                    {href ? (
                      <a href={href} className="font-body text-sm text-gh-text hover:text-gh-cyan transition-colors">{value}</a>
                    ) : (
                      <span className="font-body text-sm text-gh-text">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div className="section-label mb-4">FIND ME ON</div>
              <div className="space-y-2">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gh-border/40 hover:border-gh-cyan/30 hover:bg-gh-cyan/5 transition-all group"
                  >
                    <Icon size={16} className="text-gh-muted group-hover:text-gh-cyan transition-colors" />
                    <span className="font-body text-sm text-gh-muted group-hover:text-gh-text transition-colors">{label}</span>
                    <span className="ml-auto font-mono text-xs text-gh-muted/60">{handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl border border-gh-green/30 bg-gh-green/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
                <span className="font-mono text-sm text-gh-green font-semibold">AVAILABLE NOW</span>
              </div>
              <p className="font-body text-sm text-gh-muted">
                Open to full-time, contract, and freelance opportunities. 
                Can start within 2 weeks notice.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="game-card overflow-hidden">
              {/* Form terminal header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-gh-border bg-gh-surface/50">
                <div className="w-3 h-3 rounded-full bg-gh-red/70" />
                <div className="w-3 h-3 rounded-full bg-gh-orange/70" />
                <div className="w-3 h-3 rounded-full bg-gh-green/70" />
                <span className="ml-3 font-mono text-xs text-gh-muted">POST /api/contact — HTTP/1.1</span>
                <div className="ml-auto font-mono text-xs text-gh-green">200 OK</div>
              </div>

              {status === 'sent' ? (
                <div className="p-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gh-green/10 border border-gh-green/40 flex items-center justify-center">
                    <CheckCircle size={32} className="text-gh-green" />
                  </div>
                  <div className="font-display font-bold text-xl text-gh-text">MESSAGE SENT!</div>
                  <div className="font-mono text-sm text-gh-muted">
                    <span className="text-gh-green">SUCCESS</span> — Response incoming within 24h
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                        <span className="text-gh-purple">const</span> name <span className="text-gh-cyan">=</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder='"Your Name"'
                        className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/40 focus:outline-none focus:border-gh-cyan/60 focus:ring-1 focus:ring-gh-cyan/20 transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                        <span className="text-gh-purple">const</span> email <span className="text-gh-cyan">=</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder='"your@email.com"'
                        className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/40 focus:outline-none focus:border-gh-cyan/60 focus:ring-1 focus:ring-gh-cyan/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                      <span className="text-gh-purple">const</span> subject <span className="text-gh-cyan">=</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder='"Project Inquiry / Job Opportunity / ...'
                      className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/40 focus:outline-none focus:border-gh-cyan/60 focus:ring-1 focus:ring-gh-cyan/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-gh-muted mb-2 tracking-wider">
                      <span className="text-gh-purple">const</span> message <span className="text-gh-cyan">=</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder='"Tell me about your project..."'
                      className="w-full bg-gh-bg border border-gh-border rounded-lg px-4 py-3 font-mono text-sm text-gh-text placeholder-gh-muted/40 focus:outline-none focus:border-gh-cyan/60 focus:ring-1 focus:ring-gh-cyan/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gh-cyan/30 border-t-gh-cyan rounded-full animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        SEND MESSAGE
                      </>
                    )}
                  </button>

                  <p className="text-center font-mono text-xs text-gh-muted">
                    {`// `}Encrypted with TLS · No spam · Response within 24h
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

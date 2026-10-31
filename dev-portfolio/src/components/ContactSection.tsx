import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'divyeshlahane15@gmail.com',
    href: 'mailto:divyeshlahane15@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'divyesh-lahane',
    href: 'https://www.linkedin.com/in/divyesh-lahane/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'divs1502',
    href: 'https://github.com/divs1502/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, India',
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl font-bold text-ink tracking-tight mb-4 text-balance">
            Let's build something together
          </h2>
          <p className="text-ink-muted leading-relaxed mb-10 text-pretty">
            I'm open to discussing new opportunities, enterprise integrations, full-stack projects,
            or just talking tech. Reach out — I typically respond within 24 hours.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-3 p-4 ring-1 ring-line rounded-lg bg-surface-raised hover:ring-line-strong transition-all duration-150">
                  <Icon size={16} className="text-ink-muted shrink-0" />
                  <div>
                    <p className="text-xs text-ink-subtle font-mono">{item.label}</p>
                    <p className="text-sm text-ink">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:divyeshlahane15@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ink text-surface text-sm font-medium rounded-md hover:bg-ink/90 transition-all duration-150"
            >
              <Mail size={16} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/divyesh-lahane/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 ring-1 ring-line-strong text-ink-muted text-sm font-medium rounded-md hover:text-ink hover:ring-line-strong transition-all duration-150"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Coding profiles */}
          <div className="mt-10 pt-6 border-t border-line">
            <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-3">Coding Profiles</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.hackerrank.com/profile/divyeshlahane15" target="_blank" rel="noopener noreferrer"
                 className="text-sm text-ink-muted hover:text-ink transition-colors duration-150 font-mono">
                HackerRank ↗
              </a>
              <a href="https://leetcode.com/u/divs1502/" target="_blank" rel="noopener noreferrer"
                 className="text-sm text-ink-muted hover:text-ink transition-colors duration-150 font-mono">
                LeetCode ↗
              </a>
              <a href="https://www.geeksforgeeks.org/user/divyeshlahane15/" target="_blank" rel="noopener noreferrer"
                 className="text-sm text-ink-muted hover:text-ink transition-colors duration-150 font-mono">
                GeeksforGeeks ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

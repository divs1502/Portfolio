const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Enterprise Clients' },
  { value: '25+', label: 'Pipelines Managed' },
  { value: '300+', label: 'Algo Challenges' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase">About</p>
            <h2 className="text-3xl font-bold text-ink tracking-tight text-balance">
              Building systems that scale
            </h2>
            <p className="text-ink-muted leading-relaxed text-pretty">
              Software Engineer with 3+ years of experience building scalable SaaS platforms,
              ERP integrations, and full-stack applications. I specialize in C#/.NET, React, AWS,
              SQL, and GraphQL — with a focus on config-driven architectures and enterprise-grade reliability.
            </p>
            <p className="text-ink-muted leading-relaxed text-pretty">
              Currently at RepSpark via Cybage Software, where I've led technical solutioning,
              SOAP-to-REST migrations, and built reusable GenAI skills that significantly increased
              team throughput across 15+ Fortune 500 client pipelines.
            </p>
            <p className="text-ink-muted leading-relaxed text-pretty">
              Outside of work, I'm active on competitive programming platforms — 5-star HackerRank,
              top 5% globally, 300+ algorithmic challenges solved across LeetCode, GFG, and HackerRank.
            </p>

            {/* Education */}
            <div className="mt-6 pt-6 border-t border-line">
              <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-3">Education</p>
              <div>
                <p className="text-sm font-medium text-ink">B.E. in Computer Technology</p>
                <p className="text-sm text-ink-muted">Yeshwantrao Chavan College of Engineering, Nagpur</p>
                <p className="font-mono text-xs text-ink-subtle mt-1">2019 – 2023 · CGPA 7.7</p>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="ring-1 ring-line rounded-lg p-5 bg-surface-raised"
              >
                <div className="text-2xl font-bold text-ink tabular-nums mb-1">{stat.value}</div>
                <div className="text-xs text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

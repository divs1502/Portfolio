import { experiences } from '../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl font-bold text-ink tracking-tight text-balance">Professional Journey</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="md:pl-8 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px] hidden md:block" />

                <div className="ring-1 ring-line rounded-lg p-6 bg-surface-raised hover:ring-line-strong transition-all duration-150">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-ink text-balance">{exp.title}</h3>
                      <p className="text-sm text-accent mt-0.5">{exp.company}</p>
                      <p className="text-xs text-ink-subtle mt-0.5 font-mono">{exp.companyFull}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="font-mono text-xs text-ink-muted tabular-nums">{exp.duration}</span>
                      <span className="text-xs text-ink-subtle">{exp.location}</span>
                      <span className="text-xs px-2 py-0.5 ring-1 ring-line rounded-full text-ink-subtle font-mono">{exp.type}</span>
                    </div>
                  </div>

                  <p className="text-sm text-ink-muted mb-4 leading-relaxed text-pretty">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <span className="font-mono text-accent mt-0.5 shrink-0 text-xs">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs font-mono text-ink-subtle bg-surface rounded ring-1 ring-line">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

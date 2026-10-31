import { skillGroups } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl font-bold text-ink tracking-tight text-balance">Technical Expertise</h2>
          <p className="text-ink-muted mt-2 text-pretty">
            Technologies and practices I use to build production systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="ring-1 ring-line rounded-lg p-5 bg-surface-raised hover:ring-line-strong transition-all duration-150"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-sm text-accent">{group.icon}</span>
                <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs text-ink-muted bg-surface rounded ring-1 ring-line font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { ExternalLink, Github, Eye, Clock } from 'lucide-react';
import { projects, getStatusColorClasses } from '../data/projects';
import { useState } from 'react';
import Notification from './Notification';

const ProjectsSection = () => {
  const [notification, setNotification] = useState<{
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
  } | null>(null);

  const getLinkIcon = (linkType?: string) => {
    switch (linkType) {
      case 'github': return <Github size={14} />;
      case 'demo': return <Eye size={14} />;
      case 'coming-soon': return <Clock size={14} />;
      default: return <ExternalLink size={14} />;
    }
  };

  const getLinkLabel = (linkType?: string) => {
    switch (linkType) {
      case 'github': return 'GitHub';
      case 'demo': return 'Live Demo';
      case 'coming-soon': return 'Coming Soon';
      default: return 'View';
    }
  };

  const handleProjectClick = (project: any) => {
    if (project.linkType === 'coming-soon') {
      setNotification({ message: 'This project is coming soon! Stay tuned.', type: 'info' });
      return;
    }
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-line">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl font-bold text-ink tracking-tight text-balance">Featured Work</h2>
          <p className="text-ink-muted mt-2 text-pretty">A selection of projects showcasing my technical range</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`ring-1 ring-line rounded-lg bg-surface-raised flex flex-col hover:ring-line-strong transition-all duration-150 ${
                project.linkType !== 'coming-soon' ? 'cursor-pointer' : ''
              }`}
              onClick={() => project.linkType !== 'coming-soon' && handleProjectClick(project)}
            >
              <div className="p-5 flex flex-col flex-1">
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    {project.award && (
                      <span className="px-2 py-0.5 text-xs font-mono ring-1 ring-amber-500/30 text-amber-700 dark:text-amber-400 rounded-full bg-amber-500/10 dark:bg-amber-500/5">
                        🏆 {project.award}
                      </span>
                    )}
                    {project.role && (
                      <span className="px-2 py-0.5 text-xs font-mono ring-1 ring-line text-ink-muted rounded-full">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleProjectClick(project); }}
                    aria-label={getLinkLabel(project.linkType)}
                    disabled={project.linkType === 'coming-soon'}
                    className={`p-1.5 rounded transition-colors duration-150 ${
                      project.linkType === 'coming-soon'
                        ? 'text-ink-subtle cursor-not-allowed'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {getLinkIcon(project.linkType)}
                  </button>
                </div>

                <h3 className="text-sm font-semibold text-ink mb-2 text-balance">{project.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed flex-1 text-pretty">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-1.5 py-0.5 text-xs font-mono text-ink-subtle bg-surface ring-1 ring-line rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-line">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${getStatusColorClasses(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-ink-subtle">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

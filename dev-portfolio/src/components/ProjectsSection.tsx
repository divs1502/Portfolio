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
      case 'github':
        return <Github size={16} />;
      case 'demo':
        return <Eye size={16} />;
      case 'coming-soon':
        return <Clock size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  const getLinkLabel = (linkType?: string) => {
    switch (linkType) {
      case 'github':
        return 'View on GitHub';
      case 'demo':
        return 'View Demo';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'View Project';
    }
  };

  const handleProjectClick = (project: any) => {
    if (project.linkType === 'coming-soon') {
      setNotification({
        message: 'This project is coming soon! Stay tuned for updates.',
        type: 'info'
      });
      return;
    }
    
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                project.linkType !== 'coming-soon' ? 'cursor-pointer hover:-translate-y-1' : ''
              }`}
              onClick={() => project.linkType !== 'coming-soon' && handleProjectClick(project)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {project.award && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full font-medium">
                        🏆 {project.award}
                      </span>
                    )}
                    {project.role && (
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => handleProjectClick(project)}
                    className={`p-2 transition-colors ${
                      project.linkType === 'coming-soon' 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'text-gray-400 hover:text-indigo-600 cursor-pointer'
                    }`}
                    aria-label={getLinkLabel(project.linkType)}
                    disabled={project.linkType === 'coming-soon'}
                  >
                    {getLinkIcon(project.linkType)}
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColorClasses(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{project.type}</span>
                    {project.linkType && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.linkType === 'github' ? 'bg-gray-100 text-gray-600' :
                        project.linkType === 'demo' ? 'bg-blue-100 text-blue-600' :
                        project.linkType === 'coming-soon' ? 'bg-orange-100 text-orange-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {project.linkType === 'github' ? 'GitHub' :
                         project.linkType === 'demo' ? 'Live Demo' :
                         project.linkType === 'coming-soon' ? 'Coming Soon' :
                         'External'}
                      </span>
                    )}
                  </div>
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

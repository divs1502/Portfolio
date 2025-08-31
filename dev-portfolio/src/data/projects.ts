export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'In Development' | 'Completed' | 'Deployed';
  type: string;
  link: string;
  linkType?: 'external' | 'github' | 'demo' | 'coming-soon';
  award?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "B2B Fashion Platform",
    description: "Enterprise web application enabling fashion brands to register and conduct business transactions with comprehensive management features.",
    technologies: ["React", ".NET Core", "GraphQL", "PostgreSQL"],
    status: "In Development",
    type: "Enterprise",
    link: "https://app.repspark.com/login",
    linkType: "external"
  },
  {
    title: "TuneSync - Music Streaming App",
    description: "Award-winning song application with user-friendly interface and robust functionality. Team project that secured 2nd place in competitive coding event.",
    technologies: [".NET", "Angular", "TypeScript"],
    status: "Completed",
    type: "Team Project",
    award: "2nd Place Winner",
    link: "#",
    linkType: "coming-soon"
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive hospital management system with EHR integration, patient portals, and telehealth capabilities for improved healthcare accessibility.",
    technologies: ["AngularJS", "Node.js", "MongoDB"],
    status: "Deployed",
    type: "Healthcare Enterprise",
    role: "Team Lead",
    link: "https://dalphus.com/",
    linkType: "demo"
  },
  {
    title: "WordRush",
    description: "Interactive JavaScript game where players are presented with word meanings as clues to guess the correct word.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    type: "Game",
    role: "Solo Developer",
    link: "https://word-rush.netlify.app/",
    linkType: "demo"
  },
  {
    title: "Signify",
    description: "Web application with secure user authentication, account management, and an admin dashboard for overseeing user activity.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    type: "Web Application",
    role: "Full Stack Developer",
    link: "https://github.com/divs1502/signify",
    linkType: "github"
  }
];

export const getStatusColorClasses = (status: Project['status']): string => {
  const statusMap: Record<Project['status'], string> = {
    'In Development': 'bg-orange-100 text-orange-600',
    'Completed': 'bg-blue-100 text-blue-600',
    'Deployed': 'bg-green-100 text-green-600'
  };
  
  return statusMap[status];
};

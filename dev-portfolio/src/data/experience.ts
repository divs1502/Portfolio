export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Cybage Software",
    duration: "Feb 2024 - Present",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description: "Working on a client based B2B clothing web application using React, .NET Core, GraphQL, and PostgreSQL. Focusing on creating scalable solutions for fashion industry business interactions.",
    technologies: ["React", ".NET Core", "GraphQL", "PostgreSQL", "AWS", "GitHub"],
    achievements: [
      "Built comprehensive B2B platform for fashion brands",
      "On boarded new clients and integrate their systems with our platform",
      "Implemented efficient GraphQL queries improving performance",
      "Collaborated with cross-functional teams on feature delivery"
    ]
  },
  {
    title: "Software Engineering Trainee",
    company: "Cybage Software",
    duration: "Nov 2023 - Jan 2024",
    location: "Pune, Maharashtra",
    type: "Training",
    description: "Completed comprehensive training program and developed a song application that won 2nd place in competitive coding event.",
    technologies: [".NET Framework", "TypeScript", "Angular", "MySQL"],
    achievements: [
      "🏆 Secured 2nd place in competitive coding event",
      "Successfully completed full-stack development training",
      "Demonstrated strong team collaboration skills"
    ]
  },
  {
    title: "Software Development Intern",
    company: "Dalphus Solutions",
    duration: "Feb 2023 - Jun 2023",
    location: "Remote (US)",
    type: "Internship",
    description: "Developed hospital management system with EHR integration and telehealth solutions. Promoted to Team Lead during the internship.",
    technologies: ["AngularJS", "Node.js", "Healthcare APIs", "MySQL"],
    achievements: [
      "Promoted to Team Lead position",
      "Integrated electronic health records system",
      "Developed patient and doctor portals",
      "Implemented telehealth solutions"
    ]
  }
];

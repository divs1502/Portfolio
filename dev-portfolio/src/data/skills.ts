export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL", "C", "C++"]
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: [".NET 6/7/8/10", "REST APIs", "SOAP", "GraphQL", "Web API", "Entity Framework", "ADO.NET"]
  },
  {
    category: "Frontend",
    icon: "◻",
    skills: ["React.js", "Angular", "Bootstrap", "jQuery"]
  },
  {
    category: "AI & Automation",
    icon: "◈",
    skills: ["Applied GenAI Tooling", "Reusable AI Skills & Agents", "Workflow Automation", "Prompt Engineering", "AI-Assisted Code Governance"]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁",
    skills: ["AWS S3", "Parameter Store", "CI/CD", "Git", "GitHub", "Visual Studio", "VS Code"]
  },
  {
    category: "Databases",
    icon: "▤",
    skills: ["MSSQL", "PostgreSQL", "MySQL"]
  },
  {
    category: "Enterprise Integrations",
    icon: "⇄",
    skills: ["NetSuite", "Shopify", "AIMS360", "SYSPRO", "Apparel Magic", "SOAP-to-REST Migration"]
  },
  {
    category: "Leadership",
    icon: "◎",
    skills: ["Technical Solutioning", "Effort Estimation", "Code Review", "Client Collaboration", "Team Mentoring", "Agile Delivery"]
  }
];

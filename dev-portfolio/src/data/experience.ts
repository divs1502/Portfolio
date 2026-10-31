export interface Experience {
  title: string;
  company: string;
  companyFull: string;
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
    company: "RepSpark / Cybage",
    companyFull: "RepSpark (B2B Wholesale SaaS) via Cybage Software",
    duration: "Jan 2024 – Present",
    location: "Pune, India",
    type: "Full-time",
    description: "Building scalable ERP integrations and full-stack features for a B2B wholesale SaaS platform, serving 15+ enterprise clients across Fortune 500 accounts.",
    technologies: ["C# .NET 10", "React", "GraphQL", "AWS S3", "Parameter Store", "MSSQL", "NetSuite", "Shopify", "REST APIs", "SOAP"],
    achievements: [
      "Spearheaded SOAP-to-REST migration tool accelerating delivery across 15+ client pipelines",
      "Built config-driven framework replacing hardcoded client logic; cut onboarding from 6 → 3.5 weeks",
      "Engineered C# .NET 10 services processing 1,000+ daily transactions at 99.9% accuracy",
      "Architected AWS S3 centralized logging across 25+ pipelines, reducing debug time by 60%",
      "Modernized legacy WebApp with GraphQL across 10+ React components; page load improved 45%",
      "Designed reusable GenAI skills & automated workflows, significantly boosting team throughput",
      "Led 40+ client requirement sessions across 8 Fortune 500 accounts",
      "Raised code quality 72% → 91%, cut production bugs by 45% via 100+ code reviews"
    ]
  },
  {
    title: "Software Engineering Trainee",
    company: "Cybage Software",
    companyFull: "Cybage Software Pvt. Ltd.",
    duration: "Nov 2023 – Jan 2024",
    location: "Pune, India",
    type: "Training",
    description: "Intensive training in ASP.NET MVC, TypeScript, AngularJS, C#, and MSSQL. Built TuneSync — a full-stack music app with a 4-member team.",
    technologies: ["ASP.NET MVC", "TypeScript", "AngularJS", "C#", "MSSQL"],
    achievements: [
      "Achieved 95% average assessment score across all training modules",
      "TuneSync placed 2nd among 20+ competing teams in company-wide event"
    ]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Dalphus Solutions",
    companyFull: "Dalphus Solutions",
    duration: "Feb 2023 – Jun 2023",
    location: "Remote, US",
    type: "Internship",
    description: "Created Patient and Doctor Portal enabling 200+ users to access medical records and communicate with 15+ healthcare providers.",
    technologies: ["Angular", "Node.js", "MySQL"],
    achievements: [
      "Reduced administrative overhead by 40% through portal automation",
      "Promoted to Team Lead within 8 weeks; guided 4 teammates through agile sprints",
      "Delivered 12+ features with 95% sprint completion rate"
    ]
  }
];

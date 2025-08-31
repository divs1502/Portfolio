export interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

export const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend", color: "blue" },
  { name: "JavaScript", level: 88, category: "Frontend", color: "yellow" },
  { name: "TypeScript", level: 85, category: "Frontend", color: "blue" },
  { name: "Angular", level: 82, category: "Frontend", color: "red" },
  { name: ".NET Core", level: 88, category: "Backend", color: "purple" },
  { name: "ASP.NET", level: 85, category: "Backend", color: "blue" },
  { name: "GraphQL", level: 80, category: "Backend", color: "pink" },
  { name: "SQL Server", level: 83, category: "Database", color: "gray" },
  { name: "PostgreSQL", level: 78, category: "Database", color: "blue" },
  { name: "GitHub", level: 90, category: "Tools", color: "gray" },
  { name: "AWS", level: 70, category: "Tools", color: "orange" }
];

export const getSkillColorClasses = (color: string): string => {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    orange: 'from-orange-500 to-orange-600',
    gray: 'from-gray-500 to-gray-600'
  };
  
  return colorMap[color] || 'from-indigo-500 to-indigo-600';
};

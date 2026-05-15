export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "HTML5", level: 95, icon: "html5", color: "#E34F26" },
      { name: "CSS3", level: 90, icon: "css3", color: "#1572B6" },
      { name: "JavaScript", level: 88, icon: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", level: 80, icon: "typescript", color: "#3178C6" },
      { name: "React", level: 85, icon: "react", color: "#61DAFB" },
      { name: "Next.js", level: 82, icon: "nextjs", color: "#ffffff" },
      { name: "Tailwind CSS", level: 90, icon: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "PHP", level: 88, icon: "php", color: "#777BB4" },
      { name: "Laravel", level: 82, icon: "laravel", color: "#FF2D20" },
      { name: "Node.js", level: 75, icon: "nodejs", color: "#339933" },
      { name: "MySQL", level: 85, icon: "mysql", color: "#4479A1" },
      { name: "PostgreSQL", level: 70, icon: "postgresql", color: "#4169E1" },
    ],
  },
  {
    category: "Tools & Design",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88, icon: "github", color: "#ffffff" },
      { name: "Figma", level: 75, icon: "figma", color: "#F24E1E" },
      { name: "Vercel", level: 80, icon: "vercel", color: "#ffffff" },
      { name: "VS Code", level: 95, icon: "vscode", color: "#007ACC" },
      { name: "Postman", level: 78, icon: "postman", color: "#FF6C37" },
    ],
  },
];

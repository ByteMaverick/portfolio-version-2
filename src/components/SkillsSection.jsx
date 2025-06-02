import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiGraphql, SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiJupyter, SiGit, SiGithub, SiDocker, SiFigma, SiVercel, SiGooglecloud, SiC, SiLinux,
  SiR, SiMysql
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

// ✅ Color map for each skill
const skillColors = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#38BDF8",

  "Node.js": "#339933",
  "Express": "#000000",
  "MongoDB": "#47A248",
  "PostgreSQL": "#336791",
  "GraphQL": "#E10098",

  "Python": "#3776AB",
  "Pandas": "#150458",
  "NumPy": "#013243",
  "Scikit-learn": "#F7931E",
  "TensorFlow": "#FF6F00",
  "Jupyter": "#F37626",

  "AWS": "#FF9900",
  "Google Cloud": "#4285F4",
  "Docker": "#2496ED",
  "Git": "#F05032",
  "GitHub": "#181717",
  "Figma": "#F24E1E",
  "Vercel": "#000000",

  "C": "#A8B9CC",
  "Java": "#007396",
  "Linux": "#FCC624",
  "R": "#276DC3",
  "MySQL": "#4479A1",
};

const skills = [
  { name: "React", category: "frontend", icon: SiReact },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs },
  { name: "TypeScript", category: "frontend", icon: SiTypescript },
  { name: "JavaScript", category: "frontend", icon: SiJavascript },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },

  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "Express", category: "backend", icon: SiExpress },
  { name: "MongoDB", category: "backend", icon: SiMongodb },
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql },
  { name: "GraphQL", category: "backend", icon: SiGraphql },

  { name: "Python", category: "machine-learning", icon: SiPython },
  { name: "Pandas", category: "machine-learning", icon: SiPandas },
  { name: "NumPy", category: "machine-learning", icon: SiNumpy },
  { name: "Scikit-learn", category: "machine-learning", icon: SiScikitlearn },
  { name: "TensorFlow", category: "machine-learning", icon: SiTensorflow },
  { name: "Jupyter", category: "machine-learning", icon: SiJupyter },

  { name: "AWS", category: "cloud", icon: FaAws },
  { name: "Google Cloud", category: "cloud", icon: SiGooglecloud },

  { name: "Docker", category: "tools", icon: SiDocker },
  { name: "Git", category: "tools", icon: SiGit },
  { name: "GitHub", category: "tools", icon: SiGithub },
  { name: "Figma", category: "tools", icon: SiFigma },
  { name: "Vercel", category: "tools", icon: SiVercel },
  { name: "Linux", category: "tools", icon: SiLinux },

  { name: "C", category: "language", icon: SiC },
  { name: "Java", category: "language", icon: FaJava },
  { name: "R", category: "math", icon: SiR },
  { name: "MySQL", category: "math", icon: SiMysql },
];

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "cloud", label: "Cloud" },
  { key: "math", label: "Math" },
  { key: "language", label: "Languages" },
  { key: "tools", label: "Tools" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-background text-white text-center">
      <h2 className="text-4xl font-bold mb-4">
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Skills
        </span>
      </h2>
      <p className="text-sm uppercase text-muted-foreground mb-10">
        What I bring to the table
      </p>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition capitalize",
              activeCategory === key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {filteredSkills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-white text-sm hover:bg-primary transition"
          >
            <Icon className="w-4 h-4" color={skillColors[name] || "white"} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

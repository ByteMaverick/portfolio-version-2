import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiJupyter,
  SiGooglecloud, SiMysql, SiR, SiDocker, SiGit, SiGithub, SiLinux, SiApacheairflow,
  SiDjango, SiFlask, SiScipy, SiJenkins, SiGithubactions, SiTestinglibrary,
  SiPostgresql, SiMongodb, SiPytorch, SiApachespark, SiApachekafka,
  SiTerraform, SiKubernetes, SiGrafana, SiDvc, SiPlotly,SiPrometheus
} from "react-icons/si";

import {
  FaAws, FaChartBar, FaCogs, FaDatabase, FaRobot, FaChartLine
} from "react-icons/fa";

const skillColors = {
  // Languages
  "Java": "#007396",
  "Python": "#3776AB",
  "R": "#276DC3",

  // Scripting Languages
  "YAML": "#cb171e",
  "Bash": "#4EAA25",


  // Data Science
  "Pandas": "#150458",
  "NumPy": "#013243",
  "Scikit-learn": "#F7931E",
  "TensorFlow": "#FF6F00",
  "Jupyter": "#F37626",

  // Advanced ML
  "PyTorch": "#EE4C2C",
  "Transformers": "#FFCE00",
  "XGBoost": "#EA5616",

  // Databases
  "MySQL": "#4479A1",
  "PostgreSQL": "#336791",
  "MongoDB": "#47A248",
  "SQLite": "#003B57",

  // Cloud
  "AWS": "#FF9900",
  "Google Cloud": "#4285F4",

  // MLOps
  "Docker": "#2496ED",
  "Git": "#F05032",
  "GitHub": "#181717",
  "GitHub Actions": "#2088FF",
  "Linux": "#FCC624",
  "Airflow": "#017CEE",
  "MLflow": "#5A5A5A",
  "Jenkins": "#D24939",
  "DVC": "#945DD6",
  "Weights & Biases": "#F4CC2D",

  // Web
  "Django": "#092E20",
  "Flask": "#000000",
  "Streamlit": "#003B57",

  // Math & Viz
  "Matplotlib": "#11557C",
  "Seaborn": "#4B8BBE",
  "SciPy": "#8CAAE6",
  "Plotly": "#3F4F75",
  "Tableau": "#E97627",

  // Testing
  "A/B Testing": "#FFCB05",
  "PyTest": "#6DB33F",

  // Big Data
  "Apache Spark": "#E25A1C",
  "Kafka": "#000000",
  "Terraform": "#623CE4",
  "Kubernetes": "#326CE5",
  "Grafana": "#F46800",

  // Java Concurrency
  "Runnable / Thread": "#007396",
  "ExecutorService": "#007396",
  "CompletableFuture": "#007396",
  "ForkJoinPool": "#007396",
  "Semaphore": "#007396"
};

const skills = [
  // Languages
  { name: "Java", category: "languages", icon: FaCogs },
  { name: "Python", category: "languages", icon: SiPython },
  //{ name: "R", category: "languages", icon: SiR },

  // Scripting Languages
  //{ name: "YAML", category: "scripting-languages", icon: SiJupyter },
  { name: "Bash", category: "scripting-languages", icon: SiLinux },

  // Data Science
  { name: "Pandas", category: "data-science", icon: SiPandas },
  { name: "NumPy", category: "data-science", icon: SiNumpy },
  { name: "Scikit-learn", category: "data-science", icon: SiScikitlearn },
  { name: "TensorFlow", category: "data-science", icon: SiTensorflow },
  { name: "Jupyter", category: "data-science", icon: SiJupyter },

  // Advanced ML
  { name: "PyTorch", category: "data-science", icon: SiPytorch },
  { name: "Huggingface", category: "data-science", icon: FaRobot },
  { name: "XGBoost", category: "data-science", icon: FaCogs },

  // Databases
  { name: "MySQL", category: "databases", icon: SiMysql },
  { name: "PostgreSQL", category: "databases", icon: SiPostgresql },
  { name: "MongoDB", category: "databases", icon: SiMongodb },
  { name: "SQLite", category: "databases", icon: FaDatabase },
  { name: "ChromaDB", category: "databases", icon: FaDatabase },

  // Cloud
  { name: "AWS", category: "cloud", icon: FaAws },
  { name: "Google Cloud", category: "cloud", icon: SiGooglecloud },

  // MLOps
  { name: "Docker", category: "mlops", icon: SiDocker },
  { name: "Git", category: "mlops", icon: SiGit },
  { name: "GitHub", category: "mlops", icon: SiGithub },
  { name: "GitHub Actions", category: "mlops", icon: SiGithubactions },
  { name: "Linux", category: "mlops", icon: SiLinux },
  { name: "Airflow", category: "mlops", icon: SiApacheairflow },
  { name: "MLflow", category: "mlops", icon: FaCogs },
  
{ name: "Grafana", category: "mlops", icon: SiGrafana },
{ name: "Prometheus", category: "mlops", icon: SiPrometheus },
  //{ name: "Jenkins", category: "mlops", icon: SiJenkins },
  { name: "DVC", category: "mlops", icon: SiDvc },

  // Web
  { name: "FastAPi", category: "web", icon: SiDjango },
  { name: "Flask", category: "web", icon: SiFlask },
  { name: "Streamlit", category: "web", icon: FaChartBar },

  // Math & Viz
  { name: "Matplotlib", category: "math", icon: FaChartBar },
  { name: "Seaborn", category: "math", icon: FaChartBar },
  //{ name: "SciPy", category: "math", icon: SiScipy },
  //{ name: "Plotly", category: "math", icon: SiPlotly },
  { name: "Tableau", category: "math", icon: FaChartBar },



];

const categories = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "data-science", label: "Data Science/ML" },
  { key: "mlops", label: "MLOps & CI/CD" },
  { key: "cloud", label: "Cloud" },
  { key: "databases", label: "Databases" },
  { key: "web", label: "Web Frameworks" },
  { key: "math", label: "Math & Viz" },
  { key: "scripting-languages", label: "Scripting Languages" },

  
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
        <span className="text-primary-gradient text-transparent bg-clip-text">
          Skills
        </span>
      </h2>
      <p className="text-sm uppercase text-muted-foreground mb-10">
        What I use in Data, ML, Cloud, MLOps, DevOps, and More
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

      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
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

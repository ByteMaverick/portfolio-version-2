import React, { useState } from "react";
import { StarBackground } from "../components/StarBackground";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ChatBotToggle } from "../components/ChatBotToggle";
import { Navbar } from "../components/Navbar";

export const projects = [
  {
    id: "tripsafe",
    title: "TripSafe",
    description: "An ML-based accident risk prediction tool using weather, time, and location data.",
    image: "/projects/project1.png",
    tags: ["Python", "Scikit-learn", "Pandas"],
    demoUrl: "https://tripsafe-demo.com",
    githubUrl: "https://github.com/yourusername/tripsafe",
    route: "/projects/tripsafe",
  },
  {
    id: 2,
    title: "PennyPilot",
    description: "A smart personal budgeting app with transaction categorization.",
    image: "/projects/project2.png",
    tags: ["React", "Flask", "PostgreSQL"],
    demoUrl: "https://pennypilot-demo.com",
    githubUrl: "https://github.com/yourusername/pennypilot",
    route: "/projects/pennypilot",
  },
  {
    id: 3,
    title: "HomeHub",
    description: "Home automation dashboard using Home Assistant and Raspberry Pi.",
    image: "/projects/project3.png",
    tags: ["Python", "MQTT", "Raspberry Pi"],
    demoUrl: "https://homehub-demo.com",
    githubUrl: "https://github.com/yourusername/homehub",
    route: "/projects/homehub",
  },
  {
    id: 4,
    title: "CodeMentor",
    description: "A code tutoring platform with AI-generated explanations and guides.",
    image: "/projects/project3.png",
    tags: ["Next.js", "OpenAI API"],
    demoUrl: "https://codementor-demo.com",
    githubUrl: "https://github.com/yourusername/codementor",
    route: "/projects/codementor",
  },
  {
    id: 5,
    title: "FitTrack",
    description: "A fitness tracking app using real-time analytics and personalized goals.",
    image: "/projects/project1.png",
    tags: ["React Native", "Firebase"],
    demoUrl: "https://fittrack-demo.com",
    githubUrl: "https://github.com/yourusername/fittrack",
    route: "/projects/fittrack",
  },
  {
    id: 6,
    title: "StudySync",
    description: "Collaborative study planner and task manager for students.",
    image: "/projects/project2.png",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    demoUrl: "https://studysync-demo.com",
    githubUrl: "https://github.com/yourusername/studysync",
    route: "/projects/studysync",
  },
  {
    id: 7,
    title: "MedIQ",
    description: "AI-powered symptom checker and health advice chatbot.",
    image: "/projects/project3.png",
    tags: ["Django", "TensorFlow", "React"],
    demoUrl: "https://mediq-demo.com",
    githubUrl: "https://github.com/yourusername/mediq",
    route: "/projects/mediq",
  },
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 px-4 relative text-[hsl(var(--foreground))] bg-[hsl(var(--background))] overflow-hidden">
      <StarBackground />
      <Navbar />

      <div className="container mx-auto max-w-6xl z-10 relative">
        {/* Mobile only */}
      <h2 className="text-3xl font-bold mb-4 text-center mt-19 block md:hidden">
      Featured <span className="text-[hsl(var(--primary))]">Projects</span>
      </h2>

    {/* Desktop only */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center  hidden md:block">
  Featured <span className="text-[hsl(var(--primary))]">Projects</span>
    </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one focuses on usability,
          performance, and clean design.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]"
                  : "bg-transparent border-[hsl(var(--border))] text-gray-300 hover:bg-[hsl(var(--card))]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => (window.location.href = project.route)}
              className="cursor-pointer group bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = "/projects/default.png")}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border border-white/10 bg-white/10 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-[hsl(var(--primary))] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex justify-start space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-white/80 hover:text-[hsl(var(--primary))] transition-colors"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-white/80 hover:text-[hsl(var(--primary))] transition-colors"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

       <div className="text-center mt-12">
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] hover:brightness-110 transition duration-300 font-medium shadow-md"
  >
    Check My GitHub
    <ArrowRight size={16} />
  </a>
</div>


        <ChatBotToggle />
      </div>
    </section>
  );
};

export default Projects;

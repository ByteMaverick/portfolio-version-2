import React, { useState } from "react";
import { StarBackground } from "../components/StarBackground";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ChatBotToggle } from "../components/ChatBotToggle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const projects = [
  {
    id: "tripSafe",
    title: "TripSafe",
    description: "An ML-powered web app that predicts accident risk using time, weather, and location data.",
    image: "/projects/project7.png",
    tags: ["Python", "scikit-learn", "Flask", "GCP"],
    demoUrl: "#",
    githubUrl: "https://github.com/ByteMaverick/TripSafe",
    route: "/projects/tripsafe",
  },
  {
    id: "PennyPilot",
    title: "PennyPilot",
    description: "A personal finance tracker built with PyQt and SQLAlchemy to manage budgets and transactions.",
    image: "/projects/project5.png",
    tags: ["Python", "PyQt5", "SQLite", "Bert", "Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/ByteMaverick/PennyPilot",
    route: "/projects/PennyPilot",
  },
  {
    id: "ClauseBit",
    title: "ClauseBit",
    description: "A legal-tech tool that uses AI to detect, flag, and summarize risky clauses in Terms of Service and Privacy Policies.",
    image: "/projects/project1.png",
    tags: ["RAG", "GCP", "Airflow", "LangChan"],
    demoUrl: "#",
    githubUrl: "#",
    route: "/projects/ClauseBit",
  },
  {
    id: "HomeAutomationHub",
    title: "Home Automation Hub",
    description: "A smart home dashboard powered by Home Assistant for monitoring and automation.",
    image: "/projects/project6.png",
    tags: ["Docker", "Home Assistant", "Raspberry Pi", "CloudFlare"],
    demoUrl: "#",
    githubUrl: "#",
    route: "/projects/HomeAutomationHub",
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
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <StarBackground />
      <Navbar />

      <main className="flex-grow">
        <section id="projects" className="relative overflow-hidden pt-44 md:pt-36 pb-24 px-4">
          <div className="container relative z-10 mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold md:text-4xl mb-4">
              Featured{" "}
              <span className="text-primary-gradient bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
              Some of my recent builds — designed for performance, clarity, and impact.
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border backdrop-blur transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))] shadow-sm"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => (window.location.href = project.route)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => (e.currentTarget.src = "/projects/default.png")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[hsl(var(--primary))] transition"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[hsl(var(--primary))] transition"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/ByteMaverick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-2 font-medium text-[hsl(var(--background))] shadow-md transition hover:brightness-110"
              >
                Check My GitHub
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-12 md:mt-20 lg:mt-32">
              <Footer />
            </div>
      <ChatBotToggle />
    </div>
  );
};

export default Projects;

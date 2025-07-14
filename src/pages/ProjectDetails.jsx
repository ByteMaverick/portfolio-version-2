import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { ExternalLink, Github } from "lucide-react";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChatBotToggle } from "../components/ChatBotToggle";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => String(p.id).toLowerCase() === projectId?.toLowerCase());

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <p className="text-lg text-white/60">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))] text-white overflow-hidden">
      <StarBackground />
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-44 md:pt-36 pb-24 space-y-20">
        {/* Header */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent text-primary-gradient">
            {project.title}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--background))] font-medium shadow-md hover:brightness-110 transition"
            >
              Live Demo <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition"
            >
              GitHub <Github size={16} />
            </a>
          </div>
        </section>

        {/* Image */}
        <section>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              onError={(e) => (e.currentTarget.src = "/projects/default.png")}
            />
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md border border-white/10 bg-white/5 rounded-2xl p-6 text-sm text-white/80 shadow-md hover:scale-[1.02] transition-transform"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/70">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 border border-white/10 rounded-full bg-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Goal */}
        <section>
          <div className="backdrop-blur-md border border-white/10 bg-white/5 rounded-2xl px-6 py-8 shadow-md transition-shadow duration-300 text-center max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Project Goal</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {project.sections.goal}
            </p>
          </div>
        </section>

        {/* Problem / Solution / Architecture / Challenges */}
        <section className="grid md:grid-cols-2 gap-6">
          {[
            { title: "The Problem", content: project.sections.problem },
            { title: "The Solution", content: project.sections.solution },
            { title: "Architecture Overview", content: project.sections.architecture },
            { title: "Implementation Challenges", content: project.sections.challenges },
          ].map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md border border-white/10 bg-white/5 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </section>

        {/* Next Steps */}
        <section>
          <div className="backdrop-blur-md border border-white/10 bg-white/5 rounded-2xl px-6 py-8 shadow-md transition-shadow duration-300 text-center max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Next Steps</h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              {project.sections.nextSteps}
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBotToggle />
    </div>
  );
};

export default ProjectDetails;

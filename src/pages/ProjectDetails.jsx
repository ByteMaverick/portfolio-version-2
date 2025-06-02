import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { ExternalLink, Github } from "lucide-react";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChatBotToggle } from "../components/ChatBotToggle";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => String(p.id) === projectId);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <p className="text-lg text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden">
      <StarBackground />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-[hsl(var(--border))] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium bg-white text-black px-4 py-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              Check it out <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-[hsl(var(--border))] px-4 py-2 rounded-full text-[hsl(var(--foreground))] hover:bg-white/10 transition"
            >
              GitHub <Github size={16} />
            </a>
          </div>
        </div>

        {/* Feature Callout */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-primary text-sm">
            <strong>Fueling Innovation</strong><br />
            {project.sections?.goal}
          </p>
        </div>

        {/* Screenshot */}
        <div className="overflow-hidden rounded-lg border border-[hsl(var(--border))] shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
            onError={(e) => (e.currentTarget.src = "/projects/default.png")}
          />
        </div>

        {/* Feature Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <div key={idx} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 rounded-lg text-sm text-muted-foreground">
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Problem and Solution */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">The Problem</h3>
            <p className="text-muted-foreground text-sm">{project.sections.problem}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">The Solution</h3>
            <p className="text-muted-foreground text-sm">{project.sections.solution}</p>
          </div>
        </div>

        {/* Architecture & Challenges */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p className="text-muted-foreground text-sm">{project.sections.architecture}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Challenges</h3>
            <p className="text-muted-foreground text-sm">{project.sections.challenges}</p>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
          <p className="text-muted-foreground text-sm">{project.sections.nextSteps}</p>
        </div>
      </div>

      <Footer />
      <ChatBotToggle />
    </div>
  );
};

export default ProjectDetails;

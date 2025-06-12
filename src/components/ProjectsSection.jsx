import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom"; // Already imported

const projects = [
  {
    id: 1,
    title: "TripSafe",
    description:
      "An ML-powered web app that predicts accident risk using time, weather, and location data.",
    image: "/projects/project7.png",
    tags: ["Python", "scikit-learn", "Flask", "GCP"],
    demoUrl: "#",
    githubUrl: "https://github.com/ByteMaverick/TripSafe",
    route: "/projects/tripsafe",
  },
  {
    id: 2,
    title: "PennyPilot",
    description:
      "A personal finance tracker built with PyQt and SQLAlchemy to manage budgets and transactions.",
    image: "/projects/project5.png",
    tags: ["Python", "PyQt5", "SQLite", "Bert", "Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/ByteMaverick/PennyPilot",
    route: "/projects/PennyPilot",
  },
  {
    id: 3,
    title: "Home Automation Hub",
    description:
      "A smart home dashboard powered by Home Assistant for monitoring and automation.",
    image: "/projects/project6.png",
    tags: ["Docker", "Home Assistant", "Raspberry Pi", "CloudFlare"],
    demoUrl: "#",
    githubUrl: "#",
    route: "/projects/HomeAutomationHub",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary-gradient">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one is carefully crafted for
          performance, usability, and clean design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.route}
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
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center space-x-4">
                <span
                  onClick={(e) => e.stopPropagation()}
                  className="text-white/70 hover:text-[hsl(var(--primary))] transition"
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </span>
                <span
                  onClick={(e) => e.stopPropagation()}
                  className="text-white/70 hover:text-[hsl(var(--primary))] transition"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-center text-center gap-2 mt-16">
          <Link to="/projects" className="cosmic-button">
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

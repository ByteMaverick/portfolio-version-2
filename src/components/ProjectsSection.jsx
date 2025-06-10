import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom"; // Make sure you're using react-router-dom

const projects = [
   {
    id: 1,
    title: "TripSafe",
    description: "An ML-powered web app that predicts accident risk using time, weather, and location data.",
    image: "/projects/project7.png",
    tags: ["Python", "scikit-learn", "Flask","GCP"],
    demoUrl: "#",
    githubUrl: "https://github.com/ByteMaverick/TripSafe",
  },
  {
    id: 2,
    title: "PennyPilot",
    description: "A personal finance tracker built with PyQt and SQLAlchemy to manage budgets and transactions.",
    image: "/projects/project5.png",
    tags: ["Python", "PyQt5", "SQLite","Bert","Figma"],
    demoUrl: "#",
    githubUrl: "https://github.com/ByteMaverick/PennyPilot",
  },
  {
    id: 3,
    title: "Home Automation Hub",
    description: "A smart home dashboard powered by Home Assistant for monitoring and automation.",
    image: "/projects/project6.png",
    tags: ["Docker", "Home Assistant", "Raspberry Pi", "CloudFlare"],
    demoUrl: "#",
    githubUrl: "#",
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
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className=" text-xl text-primary font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
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

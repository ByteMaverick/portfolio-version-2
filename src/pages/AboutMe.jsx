import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Copy } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AIChatBot } from "@/components/AIChatBot";
import { ChatBotToggle } from "@/components/ChatBotToggle";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammed.ansari@sjsu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))] min-h-screen overflow-hidden">
      <StarBackground />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-45 md:pt-32 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        {/* Left: About Text */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-[hsl(var(--foreground)/60)]">
            About Me
          </h4>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi! I'm{" "}
            <span className="text-primary-gradient text-transparent bg-clip-text">
              Mohammed
            </span>
          </h1>
          <p className="text-[hsl(var(--foreground)/70)] text-lg leading-relaxed">
            I'm a data science student at San Jose State University. I specialize in building intelligent systems and automating workflows. My focus includes machine learning, Python, SQL, and cloud-based data solutions.
          </p>
         

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-3 pt-2">
            <a
              href="/resume.pdf" // Ensure resume.pdf is inside /public folder
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center 
                        px-4 sm:px-6 py-1.5 sm:py-2 
                        text-sm sm:text-base 
                        rounded-full border border-[hsl(var(--border))] 
                        bg-[hsl(var(--card))] text-[hsl(var(--foreground))] 
                        font-medium transition-all hover:bg-white hover:text-black"
            >
              View Resume
              <span className="ml-2 sm:ml-3 bg-white text-black rounded-full p-1 transition-all group-hover:bg-black group-hover:text-white">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>


            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 sm:gap-2 
                        text-xs sm:text-sm 
                        border border-white/10 bg-white/5 
                        px-3 sm:px-4 py-1.5 sm:py-2 
                        rounded-full text-slate-300 hover:text-white transition"
            >
              <Copy size={16} />
              <span className="block sm:hidden">
                {copied ? "Copied!" : "Copy Email"}
              </span>
              <span className="hidden sm:block">
                {copied ? "Copied to clipboard" : "mohammed.ansari@sjsu.edu"}
              </span>
            </button>
          </div>
        </div>

        {/* Right: AI Chatbot */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md w-full max-w-md mx-auto">

          <AIChatBot />
        </div>
      </motion.div>


{/* Experience Timeline */}
<div className="mt-16 px-6">
  <h2 className="text-3xl font-bold mb-14 text-center">
    Experience <span className="text-primary-gradient">And</span> Leadership
  </h2>

  <div className="relative max-w-3xl mx-auto pl-6">
    {/* Vertical line */}
    <div className="absolute top-0 bottom-0 left-4 w-px bg-[hsl(var(--primary))]" />

    {/* Timeline Items */}
    {[
     {
  date: "Sep 2025 – Present",
  title: "Research Assistant — Spartan Knowledge-Driven Intelligence & Learning Lab @ SJSU",
  description:
    "• Designing and implementing data pipelines to collect, clean, and integrate structured graph data for large-language-model research aimed at improving reasoning and transparency.\n• Experimenting with different approaches to knowledge-graph schema design, data preprocessing, and early reinforcement-learning prototypes to advance graph-guided LLM experiments in healthcare and financial domains."
},

      {
        date: "Feb 2025 – Present", 
        title: "Lead Outreach Officer — AI&ML Club @ SJSU",
        description: "Lead a five-member outreach team to organize AI/ML events, set clear goals, and mentor officers for success. Collaborated with multiple clubs and professors to host interdisciplinary workshops and secure expert speakers, boosting event attendance from 20 to 80 through data-driven outreach tactics and targeted marketing."
      },
    ].map((experience, index, array) => (
      <div key={index} className={`relative pl-8 ${index < array.length - 1 ? 'mb-16' : ''}`}>
        <div className="absolute left-0 top-1 w-3 h-3 bg-[hsl(var(--primary))] border-2 border-[hsl(var(--background))] rounded-full" />
        <p className="text-sm text-[hsl(var(--foreground)/70)] mb-1">{experience.date}</p>
        <h3 className="text-xl font-semibold">{experience.title}</h3>
        <p className="text-[hsl(var(--foreground)/70)] text-sm mt-2">
          {experience.description}
        </p>
      </div>
    ))}
  </div>
</div>

      {/* Education Section */}
<div className="mt-24 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md max-w-3xl mx-auto text-left space-y-4">
  <div>
    <h3 className="text-xl font-semibold text-[hsl(var(--primary))]">
      San Jose State University
    </h3>
    <p className="text-sm text-gray-300">
      B.S. in Data Science (Expected May 2027)
    </p>
    <p className="mt-1 text-sm text-gray-400">
      Coursework: Data Structures and Algorithms, Machine Learning, Advanced Python, Database Management, Intro to AI, Object Oriented Design
    </p>
  </div>

  <div className="border-t border-white/10 pt-4">
    <h4 className="text-base font-semibold text-white mb-3">Certifications</h4>
    <ul className="space-y-2 text-sm text-gray-300">
      <li className="flex justify-between items-center border-b border-white/5 pb-1">
        <span>AWS Certified AI Practitioner</span>
        <span className="text-xs text-gray-400">June 2025</span>
      </li>
      <li className="flex justify-between items-center border-b border-white/5 pb-1">
        <span>AWS ML Engineer – Associate</span>
        <span className="text-xs text-gray-400">Expected October 2025</span>
      </li>
    </ul>
  </div>
</div>



       <ProjectsSection />
       <SkillsSection />
        <ContactSection />
    

      <Footer />
      <ChatBotToggle />
    </section>
  );
};

export default AboutMe;

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AIChatBot } from "@/components/AIChatBot";
import { ChatBotToggle } from "@/components/ChatBotToggle";

export const AboutMe = () => {
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
          <h4 className="text-sm uppercase tracking-widest text-[hsl(var(--foreground)/60)]">About Me</h4>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi! I'm{" "}
            <span className="text-primary-gradient text-transparent bg-clip-text">
              Mohammed
            </span>
          </h1>
          <p className="text-[hsl(var(--foreground)/70)] text-lg leading-relaxed">
            I'm a data science student at San Jose State University. I specialize in building intelligent systems and automating workflows. My focus includes machine learning, Python, SQL, and cloud-based data solutions.
          </p>
          <p className="text-[hsl(var(--foreground)/70)]">
            Outside of academics, I enjoy writing poetry, working on automation projects, and exploring creative ways to connect tech with real-world impact.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/ByteMaverick" target="_blank" className="hover:text-[hsl(var(--primary))]">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/imohammedansari" target="_blank" className="hover:text-[hsl(var(--primary))]">
              <Linkedin size={20} />
            </a>
         
          </div>
        </div>

        {/* Right: AI Chatbot */}
        <div className="mt-10 rounded-xl shadow-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 w-full max-w-md mx-auto">
          <AIChatBot />
        </div>
      </motion.div>

      {/* Education Section */}
      <div className="mt-32 px-6">
        <h2 className="text-3xl font-bold mb-14 text-center text-primary-gradient text-transparent bg-clip-text">
          Education
        </h2>
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 shadow-lg max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-1">San Jose State University</h3>
          <p className="text-[hsl(var(--foreground)/70)] text-sm">B.S. in Data Science (Expected May 2026)</p>
          <p className="text-[hsl(var(--foreground)/70)] mt-2 text-sm">
            Relevant Courses: Data Structures & Algorithms, Machine Learning, Advanced Python, Big Data Processing, Database Systems, Statistics.
          </p>
        </div>
      </div>

    <div className="mt-32 px-6">
  <h2 className="text-3xl text-primary-gradient  font-bold mb-14 text-center">
     Experience And Leadership 
  </h2>

  <div className="relative max-w-3xl mx-auto pl-6">
    {/* Vertical line */}
    <div className="absolute top-0 bottom-0 left-4 w-px bg-[hsl(var(--primary))]" />

    {/* Experience 1 */}
    <div className="relative mb-16 pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 bg-[hsl(var(--primary))] border-2 border-[hsl(var(--background))] rounded-full" />
      <p className="text-sm text-[hsl(var(--foreground)/70)] mb-1">Jan 2024 – Present</p>
      <h3 className="text-xl font-semibold">Project Lead — ML@SJSU</h3>
      <p className="text-[hsl(var(--foreground)/70)] text-sm mt-2">
        Spearheaded an AI-powered fencing analysis tool using computer vision and pose estimation. Coordinated a team of developers and researchers to improve athlete feedback with real-time data insights.
      </p>
    </div>

    {/* Experience 2 */}
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 bg-[hsl(var(--primary))] border-2 border-[hsl(var(--background))] rounded-full" />
      <p className="text-sm text-[hsl(var(--foreground)/70)] mb-1">Aug 2023 – Dec 2023</p>
      <h3 className="text-xl font-semibold">Recruitment Officer — AI/ML Club</h3>
      <p className="text-[hsl(var(--foreground)/70)] text-sm mt-2">
        Managed onboarding, planned events, and facilitated knowledge-sharing sessions in machine learning, deep learning, and ethical AI development.
      </p>
    </div>
  </div>
</div>



      <Footer />
      <ChatBotToggle />
    </section>
  );
};

export default AboutMe;

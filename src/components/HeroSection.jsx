import { useState } from "react";
import { ArrowRight, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 🔥 Import motion

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mohammed.ansari@sjsu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center text-white"
    >
      {/* Animate the container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}           // Start off-screen
        animate={{ opacity: 1, y: 0 }}            // Slide in
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container max-w-3xl mx-auto z-10 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
        Turning data into powerful,  <br />
        <span className="text-primary-gradient italic font-semibold">adaptive systems</span>
      </h1>


        <div className="text-center text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
  Hi, I’m <span className="text-white font-semibold">Mohammed Ansari</span> — I turn complex data into intelligent systems that learn, adapt, and deliver impact.
</div>


        <div className="flex items-center justify-center gap-4 pt-6">
          <Link
            to="/contact"
            className="group relative inline-flex items-center px-6 py-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] font-medium transition-all hover:bg-white hover:text-black"
          >
            Let’s Connect
            <span className="ml-3 bg-white text-black rounded-full p-1 transition-all group-hover:bg-black group-hover:text-white">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition text-sm border border-white/10 bg-white/5 px-4 py-2 rounded-full"
          >
            <Copy size={16} />
            {copied ? "Copied to clipboard" : "mohammed.ansari@sjsu.edu"}
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowRight className="h-5 w-5 text-primary rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;

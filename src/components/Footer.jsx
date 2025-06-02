import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Mohammed Ansari. All rights reserved.
        </p>

        {/* Center: Navigation */}
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Right: Back to top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

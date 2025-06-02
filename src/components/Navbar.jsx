import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "/about", isRoute: true },
  { name: "Projects", href: "/projects", isRoute: true },
  { name: "Blog", href: "/blog", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="fixed top-7 w-full z-50 px-4 md:px-6 pointer-events-none">
      <div className="relative flex flex-col md:flex-row items-center md:justify-start gap-3 pointer-events-auto">
        {/* Name / Logo */}
        <Link
          to="/"
          className="text-lg font-semibold text-white md:mr-auto hover:text-white/90 transition duration-200"
          onClick={() => setActiveLink("/")}
        >
          Mohammed <span className="text-primary-gradient">Ansari</span>
        </Link>

        {/* Nav Items Container */}
        <div className="w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2">
          <div
            className={cn(
              "flex flex-wrap justify-center items-center gap-2 rounded-full px-4 py-3",
              "bg-white/5 backdrop-blur-sm shadow-md transition-all duration-300",
              isScrolled && "shadow-lg"
            )}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setActiveLink(item.href)}
                className={cn(
                  "text-sm px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap",
                  activeLink === item.href
                    ? "bg-white/20 text-white font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBotToggle } from "@/components/ChatBotToggle";

export const Blog = () => {
  return (
    <section className="min-h-screen bg-black text-white relative">
      <StarBackground />
      <Navbar />

      <div className="flex items-center justify-center h-[80vh] text-center">
        <h1 className="text-4xl font-bold text-gray-400">
          Blog Page {" "}
          <span className="text-primary-gradient text-transparent bg-clip-text">
            Under Development 
          </span>
        </h1>
      </div>



<div className="h-33" /> {/* Adds 6rem (96px) of space */}
      <Footer />
        <ChatBotToggle />
    </section>
  );
};

export default Blog;

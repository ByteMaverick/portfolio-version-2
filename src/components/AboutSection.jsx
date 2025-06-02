import { AIChatBot } from "./AIChatBot";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary-gradient ">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Data Scientist and ML Engineer
              <span className="text-primary-gradient"> with a focus on innovation</span>
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving tech
              landscape.
            </p>

            {/* Button Row — fixed alignment */}
            <div className="flex gap-4 pt-2">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Mohammed_Ansari_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          

          {/* Right Column */}
          
          <AIChatBot />
        </div>
      </div>
    </section>
  );
};

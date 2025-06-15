import React from "react";
import { ContactSection } from "../components/ContactSection"; // adjust path if needed
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StarBackground } from "../components/StarBackground";
import { ChatBotToggle } from "../components/ChatBotToggle";

export const Contact = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <StarBackground />

      <div className="relative overflow-hidden pt-40 md:pt-24 pb-24 px-4">
        <ContactSection />
      </div>

      <div className="mt-12 md:mt-20 lg:mt-32">
        <Footer />
      </div>

      <ChatBotToggle />
    </div>
  );
};

export default Contact;

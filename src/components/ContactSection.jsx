import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
 BotMessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';


export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary-gradient"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mohammed.ansari@sjsu.edu
                  </a>
                </div>
              </div>

           
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Bay Area, California, United States</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/imohammed-ansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--primary))] transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/ByteMaverick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--primary))] transition"
                >
                  <Github />
                </a>
                <a
                  href="https://instagram.com/imohammedansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--primary))] transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://discord.com/users/1147635697197523046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(var(--primary))] transition"
                >
                  <BotMessageSquare />
                </a>
              </div>
            </div>
          </div>

         {/* Contact Form */}


        </div>
      </div>
    </section>
  );
}
export default ContactSection;

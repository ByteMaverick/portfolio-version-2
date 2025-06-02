import {
  Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Twitch, Send,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBotToggle } from "@/components/ChatBotToggle";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll respond shortly.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="relative bg-black text-white min-h-screen">
      <Navbar />
      <StarBackground />

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">


      {/* Mobile only */}
      <h2 className="text-3xl font-bold mb-4 text-center mt-19 block md:hidden">
      Get In <span className="text-[hsl(var(--primary))]">Touch</span>
      </h2>

    {/* Desktop only */}
     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center  hidden md:block">
      Get In <span className="text-[hsl(var(--primary))]">Touch</span>
     </h2>
         
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’m always open to new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-[hsl(var(--primary))]" />,
                    label: "Email",
                    value: "mohammed.ansari@sjsu.edu",
                    href: "mailto:mohammed.ansari@sjsu.edu",
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-[hsl(var(--primary))]" />,
                    label: "Phone",
                    value: "+1 (123) 456-7890",
                    href: "tel:+11234567890",
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-[hsl(var(--primary))]" />,
                    label: "Location",
                    value: "Bay Area, CA, USA",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[hsl(var(--primary)/0.1)]">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Instagram, Twitch].map((Icon, i) => (
                    <a key={i} href="#" className="text-white hover:text-[hsl(var(--primary))] transition" target="_blank">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-[hsl(var(--card))] p-8 rounded-xl shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Mohammed Ansari" },
                  { id: "email", label: "Your Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-600 bg-black focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-[hsl(var(--primary))] hover:brightness-110 text-[hsl(var(--background))] py-3 rounded-md flex items-center justify-center gap-2 transition-colors font-medium"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBotToggle />
    </div>
  );
};

export default Contact;

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { AIChatBot } from "./AIChatBot";

export const ChatBotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloud, setShowCloud] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCloud(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Bubble and Toggle */}
      <div className="relative flex flex-col items-center gap-1">
        {/* Cloud */}
        {showCloud && !isOpen && (
  <div className="relative mb-1 animate-[float_3s_ease-in-out_infinite]">
    {/* Cloud Bubble */}
    <div className="bg-muted text-muted-foreground text-xs font-semibold px-3 py-2 rounded-full shadow-md text-center border border-border">
      Do you have any questions? <br />
      About Mohammed? Use me!
    </div>

    {/* Cloud Pointer */}
    <div className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 w-2.5 h-2.5 bg-muted rotate-45 border-l border-b border-border" />
  </div>
)}

        {/* Glowing Background */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-28 h-16 bg-[hsl(var(--primary)/.2)] rounded-full blur-2xl opacity-70 pointer-events-none" />

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-3 rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ChatBot Popup */}
      {isOpen && (
        <div className="w-[350px] h-[400px] bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-4 shadow-lg">
          <AIChatBot />
        </div>
      )}
    </div>
  );
};

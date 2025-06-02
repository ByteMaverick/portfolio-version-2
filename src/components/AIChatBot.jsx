import { useState, useEffect } from "react";

export const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const fullText =
      "Hi! I'm your AI Assistant. Ask me anything about Mohammed's skills, projects, or experience.";
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setTypingText(currentText);
        index++;
      } else {
        clearInterval(interval);
        setMessages([{ sender: "bot", text: fullText }]);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = {
      sender: "bot",
      text: generateBotReply(input),
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  const generateBotReply = (question) => {
    const lower = question.toLowerCase();
    if (lower.includes("skills"))
      return "Mohammed specializes in Python, machine learning, data analysis, and full-stack web development.";
    if (lower.includes("experience"))
      return "He has experience in accident prediction models, smart home automation, and financial data platforms.";
    if (lower.includes("projects"))
      return "Notable projects include TripSafe (ML accident risk predictor) and PennyPilot (AI-based budget tracker).";
    return "I'm still learning! Try asking about skills, experience, or projects.";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 max-w-xl w-full mx-auto shadow-md space-y-4">
      <div className="h-48 overflow-y-auto space-y-3 text-left px-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm ${
              msg.sender === "bot"
                ? "text-primary"
                : "text-foreground text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-sm text-primary">{typingText}</div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

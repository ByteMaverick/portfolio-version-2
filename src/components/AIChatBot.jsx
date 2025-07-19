import { useState, useEffect } from "react";

export const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 Generate or retrieve session ID
  const getSessionId = () => {
    let id = localStorage.getItem("chat_session_id");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("chat_session_id", id);
    }
    return id;
  };

  const session_id = getSessionId();

  useEffect(() => {
    const fullText =
      "Hello! I’m your AI Assistant, here to help you with any questions you may have about Mohammed’s background, skills, or projects.";
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

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://portfoliobotv6-834600606953.us-central1.run.app/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input, session_id }),
      });

      const data = await res.json();
      const botReply = { sender: "bot", text: data.answer };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Failed to connect to backend. Please Try Agian Later!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md max-w-3xl mx-auto text-left space-y-4">
      <div className="h-48 overflow-y-auto space-y-3 text-left px-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm ${
              msg.sender === "bot"
                ? "text-white"
                : "text-white text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-sm text-white">{typingText}</div>
        )}
        {loading && <div className="text-sm text-white">typing...</div>}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-gray-400"
        />
        <button
          onClick={handleSend}
          className="bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

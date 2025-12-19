import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function Messages() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://portfolio-mission.onrender.com/api/contact"
        );
        if (!response.ok) throw new Error();
        const data = await response.json();
        setMessages(data);
      } catch {
        setError("Unable to load messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // ✅ GSAP – CORRECT & CLEAN
  useEffect(() => {
    if (!messages.length) return;

    const ctx = gsap.context(() => {
  gsap.from(".message-card", {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "all",
  });
}, containerRef);

return () => ctx.revert();
 // 🔥 CLEANUP
  }, [messages]);

  return (
    <main className="messages-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="messages-title">Messages</h1>

      {loading && (
        <p className="messages-status">
          Loading messages… (Server may take up to 30 seconds)
        </p>
      )}

      {error && <p className="messages-status">{error}</p>}

      {!loading && !error && (
        <div className="messages-container" ref={containerRef}>
          {messages.map((msg) => (
            <div className="message-card" key={msg._id}>
              <h3>{msg.name}</h3>
              <p className="email">{msg.email}</p>
              <p className="message-text">{msg.message}</p>
              <span className="date">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Messages;

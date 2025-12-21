import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./Messages.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Messages() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const loadingMessages = [
    "Connecting to server",
    "Waking up backend service",
    "Fetching messages",
    "Almost there",
  ];
  const [loadingText, setLoadingText] = useState("Connecting to server");


  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/contact`
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

  useEffect(() => {
  if (!loading) return;

  const timers = [
    setTimeout(() => {
      setLoadingText("Waking up backend service");
    }, 7000),

    setTimeout(() => {
      setLoadingText("Fetching messages");
    }, 15000),

    setTimeout(() => {
      setLoadingText("Almost there");
    }, 23000),
  ];

  return () => timers.forEach(clearTimeout);
}, [loading]);


  return (
    <main className="messages-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 className="messages-title">View Messages</h1>

      {loading && (
        <p className="messages-status">
          {loadingText}
          <span className="dots">...</span>
        </p>
      )}

      {error && <p className="messages-status">{error}</p>}

      {!loading && !error && (
        <div className="messages-container" ref={containerRef}>
          {messages.map((msg) => (
            <div className="message-card" key={msg._id}>
              <h3 className="view-message-name">{msg.name.toUpperCase()}</h3>
              <p className="view-message-email">{msg.email}</p>
              <p className="message-text">{msg.message}</p>
              <span className="view-message-date">
                {" "}
                Summitted On:
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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Messages() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://portfolio-mission.onrender.com/api/contact"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError("Unable to load messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main style={{ padding: "80px 60px" }}>
      <button onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1 style={{ marginTop: "30px" }}>Messages</h1>

      {loading && (
        <p>Loading messages… (Server may take up to 30 seconds)</p>
      )}

      {error && <p>{error}</p>}

      {!loading && !error && messages.length === 0 && (
        <p>No messages found.</p>
      )}

      {!loading && !error && messages.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          {messages.map((msg) => (
            <div
              key={msg._id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "15px",
              }}
            >
              <h3>{msg.name}</h3>
              <p><strong>Email:</strong> {msg.email}</p>
              <p>{msg.message}</p>
              <small>
                {new Date(msg.createdAt).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Messages;

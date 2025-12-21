import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus("PLEASE WAIT...");
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
        
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            text-align="center"
            {...register("name")}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            {...register("email")}
            required
          />

          <textarea
            placeholder="Your Message"
            {...register("message")}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="form-status">{status}</p>

        )}
        <div className="view-messages">
          <button onClick={() => navigate("/messages")}>
            View All Messages
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;

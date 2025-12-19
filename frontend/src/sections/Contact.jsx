import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus("Server is starting, please wait (up to 30 seconds)...");

    try {
      const response = await fetch(
        "https://portfolio-mission.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        reset();
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
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

      {/* Status Message Area */}
      {status && <p className="form-status">{status}</p>}

      <div className="view-messages">
        <p>Want to see all messages?</p>
        <button onClick={() => navigate("/messages")}>View Messages</button>
      </div>
    </section>
  );
}

export default Contact;

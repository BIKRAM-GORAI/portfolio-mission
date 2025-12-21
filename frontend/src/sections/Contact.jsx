// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Contact() {
//   const navigate = useNavigate();

//   const { register, handleSubmit, reset } = useForm();

//   const [status, setStatus] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setStatus("PLEASE WAIT...");

//     try {
//       const response = await fetch(
//         "https://portfolio-mission.onrender.com/api/contact",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       if (response.ok) {
//         setStatus("✅ Message sent successfully!");
//         reset();
//       } else {
//         setStatus("❌ Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("❌ Something went wrong. Please try later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="contact">
//       <h2>Contact Me</h2>

//       <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           {...register("name")}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           {...register("email")}
//           required
//         />

//         <textarea
//           placeholder="Your Message"
//           {...register("message")}
//           required
//         />

//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Sending..." : "Send Message"}
//         </button>
//       </form>

//       {/* Status Message Area */}
//       {status && <p className="form-status">{status}</p>}

//       <div className="view-messages">
//         <p>Want to see all messages?</p>
//         <button onClick={() => navigate("/messages")}>View Messages</button>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus("PLEASE WAIT...");
    setIsSuccess(false);

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
        setStatus("Message sent successfully!");
        setIsSuccess(true);
        reset();

        // remove success state after a short time
        setTimeout(() => setIsSuccess(false), 1500);
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

      {/* Contact Card */}
      <div className={`contact-card ${isSuccess ? "success" : ""}`}>
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

        {/* Status Message */}
        {status && (
          <p className={`form-status ${isSuccess ? "success-text" : ""}`}>
            {status}
          </p>
        )}

        {/* Secondary Action */}
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

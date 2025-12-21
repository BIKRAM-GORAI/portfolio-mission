import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h1>Bikram Gorai</h1>
        <h2>Aspiring Backend Developer | Mern Stack Learner</h2>
        <p>
          I enjoy building real-world web applications, focusing on backend logic, databases, and clean system design.
        </p>
      </div>

      <div className="hero-right">
        <div className="photo-stack">
          <img src="/p1.jpg" className="photo-card" />
          <img src="/p2.jpg" className="photo-card" />
          <img src="/p3.jpg" className="photo-card" />
          <img src="/p4.jpg" className="photo-card" />
          <img src="/p5.jpg" className="photo-card" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

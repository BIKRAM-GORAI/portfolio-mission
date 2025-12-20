import { useRef } from "react";
function Hero() {
  const heroRef = useRef(null);
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <h1>Bikram Gorai</h1>
        <h2>Computer Science Engineering Student</h2>
        <p>
          Aspiring Full Stack Developer focused on backend development and
          problem solving.
        </p>
      </div>

      <div className="hero-right">
        <div className="photo-stack">
          <img src="/src/assets/images/p1.jpg" className="photo-card" />
          <img src="/src/assets/images/p2.jpg" className="photo-card" />
          <img src="/src/assets/images/p3.jpg" className="photo-card" />
          <img src="/src/assets/images/p4.jpg" className="photo-card" />
          <img src="/src/assets/images/p5.jpg" className="photo-card" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

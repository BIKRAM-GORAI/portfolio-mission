import Hero from "../sections/Hero";
import About from "../sections/About";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import "./Home.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Pre-warm backend (Render cold start)
    fetch("https://portfolio-mission.onrender.com/api/contact")
      .then(() => {
        // intentionally empty – just waking server
      })
      .catch(() => {
        // ignore errors silently
      });
  }, []);

  useEffect(() => {
    fetch("https://portfolio-mission.onrender.com/api/contact").catch(() => {});

    const ctx = gsap.context(() => {
      // HERO TEXT
      gsap.from(".hero-left h1", {
        x: -400,
        opacity: 0,
        duration: 3,
        ease: "power3.out",
      });

      gsap.from(".hero-left h2", {
        y: 30,
        opacity: 0,
        duration: 2,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-left p", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      const cards = gsap.utils.toArray(".photo-card");

      const lastCard = cards[cards.length - 1];
      const fallingCards = cards.slice(0, -1);

      const tl = gsap.timeline({ delay: 0.6 });

      // PHASE A — stack in
      tl.from(cards, {
        y: -80,
        opacity: 0,
        rotation: (i) => -10 + i * 5,
        stagger: 0.5,
        duration: 0.8,
        //rotation: (i) => (i % 2 === 0 ? -35 : 35),
        ease: "power3.out",
      });

      // PHASE B — hold
      tl.to({}, { duration: 0.5 });

      // PHASE C — other cards fall & disappear
      tl.to(fallingCards, {
        y: 700,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -35 : 35),
        stagger: 0.12,
        duration: 1,
        ease: "power2.in",
      });

      // PHASE D — final card settles (optional micro motion)
      tl.to(lastCard, {
        scale: 1.02,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    }, document.querySelector(".hero"));




    // ABOUT SECTION ANIMATIONS
    // glass box animation
    gsap.to(".about-glass", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
      },
    });

    // title letter animation
    const title = document.querySelector(".about-title");
    const letters = title.textContent.split("");
    title.textContent = "";

    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      title.appendChild(span);
    });

    gsap.to(".about-title span", {
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 65%",
      },
    });

    // paragraph reveal
    gsap.to(".about-text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3,
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
      },
    });



    
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;

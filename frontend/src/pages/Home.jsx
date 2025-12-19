import Hero from "../sections/Hero";
import About from "../sections/About";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Home() {
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

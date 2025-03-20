import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
        <Hero/>
      <section id="about" className="section" data-aos="fade-up">
       <About/>
      </section>

      <section id="education" className="section" data-aos="fade-right">
        <Education />
      </section>
      <section id="projects" className="section" data-aos="fade-up">
  <Projects />
</section>


      <section id="contact" className="section-contact" data-aos="fade-up">
        <Contact/>
      </section>
    </div>
  );
};

export default App;

import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaGit } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "./css/About.css"; // Make sure this CSS file is correctly linked

const About = () => {
  return (
    <section className="about-me" id="about">
      {/* About Box */}
      <div className="about-container">
        <h1>About Me</h1>
        <p className="degree">
        "Hi, I'm Anand Agarwal, an MCA graduate from T John College passionate about frontend development. I specialize in React.js, creating modern, responsive interfaces. I enjoy coding challenges, improving my Java skills, and deploying projects on Render. Excited to collaborate and build innovative solutions!" 🚀
        </p>
        <p className="intro">
          I'm a Post undergrad with a passion for crafting dynamic web apps and diving deep into technology.
        </p>
        <blockquote className="quote">
          <i>"I code, I solve, I innovate – and yes, I probably broke something along the way."</i>
        </blockquote>

        {/* Achievements */}
        <h2>Achievements</h2>
        <div className="achievements">
          <div className="achievement-card">
            <h3>Smart India Hackathon ‘24 Finalist (Team Leader)</h3>
            <p>Top 450 among 86000+ teams</p>
            {/* <a href="#">Click to know more</a> */}
          </div>

          <div className="achievement-card highlight">
            <h3>Startup Mahakumbh</h3>
            <p>Participant - Startup Mahakumbh 2024 at Bharat Mandapam, New Delhi</p>
            {/* <a href="#">Click to know more</a> */}
          </div>

          <div className="achievement-card">
            <h3>First Runner Up - Yukti Innovation Challenge 2.0</h3>
            <p>Fund grants of Rs.1,00,000</p>
            {/* <a href="#">Click to know more</a> */}
          </div>
        </div>

        {/* Certifications */}
        <h2>Certifications</h2>
        <div className="certifications">
          <div className="cert-card">
            <h3>Google</h3>
            <p>Certified - Google Data Analytics Professional Certificate</p>
            {/* <a href="#">Click to know more</a> */}
          </div>

          <div className="cert-card">
            <h3>Cisco</h3>
            <p>Certified by Cisco Networking Academy</p>
            {/* <a href="#">Click to know more</a> */}
          </div>

          <div className="cert-card">
            <h3>Intel & FICE</h3>
            <p>Certified - Internet of Things (IoT) Program</p>
            {/* <a href="#">Click to know more</a> */}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-icons-container">
        <h2>Tech Stack</h2>
        <div className="tech-icons">
          <FaHtml5 title="HTML" />
          <FaCss3 title="CSS" />
          <FaJs title="JavaScript" />
          <FaReact title="React.js" />
          {/* <img src="/assets/phaser-logo.png" alt="Phaser.js" title="Phaser.js" className="tech-icon" /> */}
          <FaJava title="Java" />
          <FaPython title="Python" />
          <SiMysql title="MySQL" />
          <FaGit title="Git" />
        </div>
      </div>
    </section>
  );
};

export default About;

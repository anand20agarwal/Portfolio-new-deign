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
        <blockquote className="quote">
          <i>"I code, I solve, I innovate – and yes, I probably broke something along the way."</i>
        </blockquote>

        {/* Achievements */}
        <h2>Achievements</h2>
        <div className="achievements">
          <div className="achievement-card">
            <h3>Inter-College Coding Competition Runner-Up</h3>
            <p>Secured the runner-up position in a competitive inter-college coding fest</p>
            {/* <a href="#">Click to know more</a> */}
          </div>

          <div className="achievement-card highlight">
            <h3>Successfully Completed Freelance Projects</h3>
            <p>Delivered high-quality solutions tailored to client needs, ensuring responsiveness, performance, and user satisfaction.</p>
            {/* <a href="#">Click to know more</a> */}
          </div>

         
        </div>

        {/* Certifications */}
        <h2>Certifications</h2>
        <div className="certifications">
          <div className="cert-card">
            <h3>React JS</h3>
            <p>React - The Complete Guide 2025 (incl. Next.js, Redux)</p>
            <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-2d0504c8-a429-4e4c-be47-5f0f78a6d911.jpg?v=1734608768000">Click to know more</a>
          </div>

          <div className="cert-card">
            <h3>Python</h3>
            <p>Python in AI</p>
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

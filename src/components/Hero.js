import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/HeroSection.css";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="hero-container" data-aos="fade-in">
      <div className="hero-content">
        <img src={profileImg} alt="Profile" className="profile-img" data-aos="fade-down" />
        <h1 data-aos="fade-up">Anand Agarwal</h1>
        <p data-aos="fade-up" data-aos-delay="300">MCA Graduate</p>
        <div className="social-icons" data-aos="zoom-in" data-aos-delay="500">
          <a
            href="https://github.com/anand20agarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/anand-agarwal-856623255/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
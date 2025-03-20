import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FaDownload } from "react-icons/fa"; // Download icon
import { Link } from "react-scroll"; // Smooth scrolling
import "./css/Navbar.css";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // Default active link

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="logo">Anand's Portfolio</div>

      {/* Mobile Toggle Button */}
      <div className="nav-icon" onClick={handleToggle}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${toggleIcon ? "active" : ""}`} onClick={handleToggle}>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setActiveSection("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            className={activeSection === "education" ? "active" : ""}
            onClick={() => setActiveSection("education")}
          >
            Education
          </Link>
        </li>
        <li>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </Link>
        </li>
        <li className="resume-item">
          <a href="https://drive.google.com/uc?export=download&id=1jy_oiO_UAx68NA-t9h2E1WV-3WcLhaIA" 
             className="resume-btn" 
             download="Anand_Agarwal_Resume.pdf">
            <FaDownload className="download-icon" /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

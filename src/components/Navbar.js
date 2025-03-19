import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import "./css/Navbar.css";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      {/* Mobile Toggle Button */}
      <div className="nav-icon" onClick={handleToggle}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${toggleIcon ? "active" : ""}`} onClick={handleToggle}>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="resume-item">
          <a href="https://drive.google.com/uc?export=download&id=1jy_oiO_UAx68NA-t9h2E1WV-3WcLhaIA" 
             className="resume-btn" 
             download="Anand_Agarwal_Resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

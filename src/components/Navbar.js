import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import "./css/Navbar.css";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setToggleIcon(false); // Close navbar on click
  };

  return (
    <nav className="navbar">
      <div className="logo">Anand's Portfolio</div>

      <div className="nav-icon" onClick={handleToggle}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`nav-links ${toggleIcon ? "active" : ""}`}>
        {[
          { to: "about", label: "About" },
          { to: "education", label: "Education" },
          { to: "projects", label: "Projects" },
          { to: "contact", label: "Contact" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              className={activeSection === to ? "active" : ""}
              onClick={() => handleLinkClick(to)}
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="resume-item">
          <a
            href="https://drive.google.com/uc?export=download&id=1jy_oiO_UAx68NA-t9h2E1WV-3WcLhaIA"
            className="resume-btn"
            download="Anand_Agarwal_Resume.pdf"
          >
            <FaDownload className="download-icon" /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

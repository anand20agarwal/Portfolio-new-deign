import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./css/Contact.css";

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="contact-section">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        "Whether it’s about a project, an opportunity, or just to say hello—I'd love to hear from you! Let’s create something amazing together."
      </p>

      {/* Email Button */}
      <button className="contact-button">
        <a
          href="mailto:anandagarwaljob@gmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Reach Out
        </a>
      </button>

      <div className="contact-icons">
        {/* Email Icon */}
        <div
          className="contact-item"
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
        >
          <a href="mailto:anandagarwaljob@gmail.com">
            <FaEnvelope className="icon" />
          </a>
          <span className={`contact-text ${hovered === "email" ? "show" : ""}`}>
            anandagarwaljob@gmail.com
          </span>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <a
            href="https://github.com/anand20agarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/anand-agarwal-856623255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>

        {/* Phone Icon */}
        <div
          className="contact-item"
          onMouseEnter={() => setHovered("phone")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaPhoneAlt className="icon" />
          <span className={`contact-text ${hovered === "phone" ? "show" : ""}`}>
            8892145195
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

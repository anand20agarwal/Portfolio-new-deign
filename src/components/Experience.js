import React from "react";
import "./css/Education.css";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const educationData = [
    {
      degree: "Full Stack Developer Intern",
      institution: "Handworthy Pvt. Ltd",
      duration: "June 2025 – August 2025",
      description:
        "Built a secure MERN-based authentication system with OTP verification using Twilio, developed responsive and accessible React.js user interfaces with proper validation and error handling, integrated REST APIs with token-based authentication, optimized React components for better performance and maintainability, and actively contributed to debugging and feature enhancements.",
    },
    {
      degree: "Product Engineer",
      institution: "AMOGA",
      duration: "September 2025 - Present",
      description:
        "Designed and developed a scalable 2-wheeler lending platform for Tier-2 and Tier-3 markets using AMOGA’s no-code/low-code ecosystem, implementing end-to-end loan workflows including eligibility checks, KYC verification, document uploads, and automated approval processes, processing 2,000+ loan applications and onboarding 1,000+ active users, collaborating with stakeholders to translate business requirements into functional workflows, owning the complete product lifecycle from requirements and development to testing, deployment, and support, and reducing manual effort through workflow automation to improve operational efficiency.",
    },
  ];

  return (
    <section className="education-section" id="education">
      <h1 className="education-title">Experience</h1>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className={`education-container ${index % 2 === 0 ? "left" : "right"}`}>
            {/* Timeline Direction Arrow */}
            <div className="timeline-arrow"></div>

            {/* Education Content */}
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="edu-duration">{edu.duration}</p>
              <p>{edu.description}</p>
            </div>

            {/* Graduation Cap Icon Centered on Timeline */}
            <div className="education-icon">
              <MdWork />
            </div>
          </div>
        ))}
        {/* Center Timeline Line */}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Experience;

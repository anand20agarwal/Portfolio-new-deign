import React from "react";
import "./css/Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "T John College, Bangalore",
      duration: "2022 - 2024",
      description:
        "Specialized in frontend development and problem-solving. Worked on multiple projects using React.js and participated in coding challenges.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "administrative management college",
      duration: "2019 - 2022",
      description:
        "Learned the fundamentals of computer science, programming, and web technologies. Developed a strong foundation in Java and Python.",
    },
  ];

  return (
    <section className="education-section" id="education">
      <h1 className="education-title">Education</h1>
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
              <FaGraduationCap />
            </div>
          </div>
        ))}
        {/* Center Timeline Line */}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Education;

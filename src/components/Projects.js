import React from "react";
import "./css/Projects.css";

const projectsData = [
  {
    title: "Network Next | N Square",
    image: "https://www.shutterstock.com/image-vector/music-app-concept-flat-design-260nw-2509680861.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "MongoDB", "Express JS", "Python"],
    description:
      "A comprehensive Alumni Association Management System designed for universities to streamline communication and collaboration...",
    link: "https://yourprojectlink1.com", // Replace with actual URL
  },
  {
    title: "AI Virtual Technical Interview System",
    image: "https://www.shutterstock.com/image-vector/music-app-concept-flat-design-260nw-2509680861.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "OpenAI GPT", "Python", "Groc"],
    description:
      "An innovative platform that simulates technical interviews using AI-powered algorithms...",
    link: "https://yourprojectlink2.com", // Replace with actual URL
  },
  {
    title: "AI Virtual Technical Interview System",
    image: "https://www.shutterstock.com/image-vector/music-app-concept-flat-design-260nw-2509680861.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "OpenAI GPT", "Python", "Groc"],
    description:
      "An innovative platform that simulates technical interviews using AI-powered algorithms...",
    link: "https://yourprojectlink2.com", // Replace with actual URL
  },
  {
    title: "AI Virtual Technical Interview System",
    image: "https://www.shutterstock.com/image-vector/music-app-concept-flat-design-260nw-2509680861.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "OpenAI GPT", "Python", "Groc"],
    description:
      "An innovative platform that simulates technical interviews using AI-powered algorithms...",
    link: "https://yourprojectlink2.com", // Replace with actual URL
  },
  {
    title: "AI Virtual Technical Interview System",
    image: "https://www.shutterstock.com/image-vector/music-app-concept-flat-design-260nw-2509680861.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "OpenAI GPT", "Python", "Groc"],
    description:
      "An innovative platform that simulates technical interviews using AI-powered algorithms...",
    link: "https://yourprojectlink2.com", // Replace with actual URL
  },
  {
    title: "AI Virtual Technical Interview System",
    image: "https://www.shutterstock.com/image-vector/music-app-concept-flat-design-260nw-2509680861.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "OpenAI GPT", "Python", "Groc"],
    description:
      "An innovative platform that simulates technical interviews using AI-powered algorithms...",
    link: "https://yourprojectlink2.com", // Replace with actual URL
  },
];

const Projects = () => {
  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleCardClick(project.link)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

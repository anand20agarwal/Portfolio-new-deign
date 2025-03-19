import React from "react";
import "./css/Projects.css";

const projectsData = [
  {
    title: "Music Application",
    image: "https://i.pinimg.com/736x/eb/0d/c4/eb0dc43bf2d59b460469bb4f85653931.jpg", // Replace with actual image path
    tags: ["React", "Node JS", "MongoDB", "Express JS"],
    description:
      "A feature-rich Music Streaming Application offering seamless audio playback, personalized playlists, and an immersive listening experience...",
    link: "https://music-web-application-2.onrender.com/", // Replace with actual URL
  },
  {
    title: "E-Commerece App",
    image: "https://www.quickeselling.com/wp-content/uploads/2019/08/Quickeselling-mobile-app-webstore-1-1.jpg", // Replace with actual image path
    tags: ["React", "Node JS",  "MongoDB", "Express JS" ],
    description:
      "A seamless E-Commerce Website for secure shopping, personalized recommendations, and easy order management...",
    link: "https://e-commerce-1-by30.onrender.com/", // Replace with actual URL
  },
  {
    title: "Quiz Application",
    image: "https://img.freepik.com/premium-vector/template-mobile-application-interface-quiz-blue-background-test-questions_414360-2304.jpg", // Replace with actual image path
    tags: ["React"],
    description:
      "A fun and interactive Quiz App with diverse questions, real-time scoring, and engaging challenges...",
    link: "https://quiz-app-uqpf.onrender.com/", // Replace with actual URL
  },
  {
    title: "Tic-Tac-Toe",
    image: "https://play-lh.googleusercontent.com/EUgRlCOH_jwtW39SaG7XeKq8pJsQfKkZB4MYED18npdsKeRZDmN9xVsSV3nbpoJGgIU=w526-h296-rw", // Replace with actual image path
    tags: ["React"],
    description:
      "A simple and interactive Tic-Tac-Toe game with multiplayer support and smart AI opponents...",
    link: "https://tic-tac-toe1-2iix.onrender.com/", // Replace with actual URL
  },
  {
    title: "Investment Calculater ",
    image: "https://monomousumi.com/wp-content/uploads/invest-calculator-represents-return-investment-calculate-meaning-roi-46492629.jpg", // Replace with actual image path
    tags: ["React"],
    description:
      "An Investment Calculator for estimating returns and tracking growth...",
    link: "https://investment-calculator-dsjv.onrender.com/", // Replace with actual URL
  },
  {
    title: "Time Challenge Game",
    image: "https://play-lh.googleusercontent.com/-GIdwYVwyLPh_KFjdcFbmz1wH_mxE0xVik6jLdvJ2c0N1thNKdoH8BpT_gabhin4TgI=w7680-h4320-rw", // Replace with actual image path
    tags: ["React"],
    description:
      "A fast-paced Time Challenge Game testing speed and accuracy...",
    link: "https://timer-challenge-game.onrender.com/", // Replace with actual URL
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

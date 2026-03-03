import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import projects from "./ProjectPages/projectsdata.js"; 
import GithubContributions from "./ProjectPages/GithubContributions";
import "../Styles/Projects.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const Projects = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="home-container"> 
      <motion.div
        className="projects-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <header className="projects-header">
          <h2 className="title-project">Projects</h2>
          <p className="project-description">Click a card to explore the details.</p>
        </header>

        <nav className="bento-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="grid-card-wrapper"
            >
              <Link to={`/projects/${project.id}`} className="grid-card-link project-card">
                {project.image && (
                  <img src={project.image} alt={project.title} className="project-img-bg" />
                )}
                <div className="project-overlay">
                  <span className="grid-card-label">{project.title}</span>
                </div>
                <div className="grid-card-accent" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <footer className="projects-footer">
          <GithubContributions />
          <div className="footer-links">
            <a href="https://github.com/sdg877/react_portfolio" target="_blank" rel="noreferrer" className="custom-link">
              View Site Source Code
            </a>
            <a href="https://github.com/sdg877" target="_blank" rel="noreferrer" className="custom-link">
              My GitHub Profile
            </a>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Projects;
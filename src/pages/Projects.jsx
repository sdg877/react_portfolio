import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import SSSImage from "../Images/SSS.png";
import ProjectOneImage from "../Images/ProjectOne.jpg";
import SnakeImage from "../Images/Snake.png";
import InTechImage from "../Images/InTech.png";
import GourmetGalleryImage from "../Images/GourmetGallery.png";
import SpookSpottersImage from "../Images/SpookSpotters.png";
import HTJImage from "../Images/HTJ.png";
import "../Styles/Projects.css";

const projectData = [
  { name: "Heather Treharne Jones", link: "/projects/HTJ", image: HTJImage },
  {
    name: "Confidential Project",
    link: "/projects/ProjectOne",
    image: ProjectOneImage,
  },
  {
    name: "Gourmet Gallery",
    link: "/projects/GourmetGallery",
    image: GourmetGalleryImage,
  },
  { name: "Sustainable Swap Shop", link: "/projects/SSS", image: SSSImage },
  { name: "inTech Jobs", link: "/projects/InTechJobs", image: InTechImage },
  {
    name: "Spook Spotters",
    link: "/projects/SpookSpotters",
    image: SpookSpottersImage,
  },
  { name: "Snake", link: "/projects/Snake", image: SnakeImage },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const getItemVariants = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -120 : 120, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.8 },
  },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 200 } },
});

const Projects = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      key="project-container"
      className="info-card"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="title-project"
      >
        Projects
      </motion.h3>

      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="project-description"
      >
        Click on an image for more information.
      </motion.h5>

      <motion.div className="project-container">
        {projectData.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-item"
            variants={getItemVariants(index)}
            initial="hidden"
            animate={controls}
            whileHover="hover"
          >
            <Link to={project.link} className="project-link">
              <h5 className="project-name">{project.name}</h5>
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <a
          href="https://github.com/sdg877"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          For all projects, please see my GitHub Page
        </a>
      </motion.p>
    </motion.div>
  );
};

export default Projects;

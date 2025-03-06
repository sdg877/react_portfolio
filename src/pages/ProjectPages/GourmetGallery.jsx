import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GourmetGalleryImage from "../../Images/GourmetGallery.png";
import "../../Styles/Projects.css";

const GourmetGallery = () => {
  return (
    <motion.div
      className="info-card-project"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Gourmet Gallery
      </motion.h3>
      <br />
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={GourmetGalleryImage}
          alt="Gourmet Gallery"
          className="project-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <br /> <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Gourmet Gallery is a full-stack MERN application that allows users to
          search, filter, and save recipes. It integrates an external API for
          recipe sourcing and includes authentication so users can manage their
          saved recipes.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          This was my first solo full-stack project built entirely without
          instructor assistance. I set up the backend using Express and MongoDB,
          developed authentication with JWT, and implemented frontend
          functionality using React.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Challenges included setting up API integration, managing
          authentication, and ensuring proper formatting of displayed recipes.
          To maintain layout consistency, I implemented a function that filters
          out recipes without images.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          This project reinforced my ability to problem-solve independently. It
          was incredibly rewarding to build and deploy the site without external
          support, improving my confidence in full-stack development and API
          integration.
        </motion.p>
        <br />
        <motion.a
          href="https://gourmetgallery.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Check out my site!
        </motion.a>
        <br />
        <br />
        <motion.a
          href="https://github.com/sdg877/recipe_site_fe"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Frontend GitHub Link
        </motion.a>
        <br />
        <br />
        <motion.a
          href="https://github.com/sdg877/recipe_site_be"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Backend GitHub Link
        </motion.a>
        <br />
        <br />
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/projects/SSS" className="custom-link-bottom">
            Next Project: Sustainable Swap Shop
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default GourmetGallery;

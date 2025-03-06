import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SpookSpottersImage from "../../Images/SpookSpotters.png";
import "../../Styles/Projects.css";

const SpookSpotters = () => {
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
        UK Spook Spotters
      </motion.h3>
      <br />
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={SpookSpottersImage}
          alt="Spook Spotters"
          className="project-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <br />
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          UK Spook Spotters was my Unit 2 project from my bootcamp. It is a
          full-stack application built with Node.js, Express, and MongoDB,
          allowing users to log paranormal sightings across the UK.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The client requirements included a fully CRUD application,
          authentication via Google OAuth, and restricted access for
          non-logged-in users. The app allows users to record sightings, search
          by location, and view detailed entries.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          The backend was developed using Express and MongoDB, with Mongoose
          schemas for users, sightings, and locations. The frontend was built
          with Vue.js, featuring a clean and user-friendly UI.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          A major challenge was implementing user permissions for editing and
          deleting posts. I also faced personal challenges, as I fractured my
          dominant elbow two weeks before the project deadline. Despite this, I
          successfully delivered a functional app within the timeframe.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Key learnings included debugging small syntax errors and refining my
          problem-solving approach. Moving forward, I would like to add a map
          feature to display sightings visually and expand the site for
          international use.
        </motion.p>
        <br />
        <motion.a
          href="https://unique-salmiakki-662491.netlify.app/"
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
          href="https://github.com/sdg877/Project2Frontend"
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
          href="https://github.com/sdg877/Project2Backend"
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
          <Link to="/projects/Snake" className="custom-link-bottom">
            Next Project: Snake
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default SpookSpotters;

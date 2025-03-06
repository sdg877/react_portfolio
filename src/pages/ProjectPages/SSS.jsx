import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SSSImage from "../../Images/SSS.png";
import "../../Styles/Projects.css";

const SSS = () => {
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
        Sustainable Swap Shop
      </motion.h3>
      <br />
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={SSSImage}
          alt="Sustainable Swap Shop"
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
          Sustainable Swap Shop was my Unit 4 project from my bootcamp. It is a
          full-stack application built with Django and React, designed to
          facilitate clothes swapping while promoting sustainability.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The project required a fully CRUD application using Django,
          PostgreSQL, and React. Users must authenticate with Django’s built-in
          system, and CRUD operations are restricted to logged-in users. Image
          uploads are handled via AWS S3.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Challenges included setting up authentication, permissions, and
          integrating AWS S3 for image uploads. I also encountered a JWT-related
          issue on mobile devices, which required adjusting how tokens were
          stored and decoded.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Since completing this project, I've gained more experience with Django
          and React. If I revisited it, I would refine the swap approval
          process, improve the UI, and enhance the search and filtering
          functionality for a better user experience.
        </motion.p>
        <br />
        <motion.a
          href="http://sustainableswapfe-production.up.railway.app"
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
          href="https://github.com/sdg877/sustainableswapfe"
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
          href="https://github.com/sdg877/sustainableswapbackend"
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
          <Link to="/projects/inTechJobs" className="custom-link-bottom">
            Next Project: inTech Jobs
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default SSS;

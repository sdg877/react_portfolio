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

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Gourmet Gallery is a full-stack MERN app where users can search, filter, and save recipes. It pulls data from an external recipe API and includes authentication for managing saved items.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          This was my first fully independent full-stack project. I built the backend with Express and MongoDB, added JWT-based authentication, and handled the frontend with React.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Key challenges included integrating the API, managing auth flows, and handling inconsistent data. To improve layout consistency, I filtered out recipes lacking images.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          This project strengthened my problem-solving skills and boosted my confidence in full-stack development, API handling, and solo deployment.
        </motion.p>

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

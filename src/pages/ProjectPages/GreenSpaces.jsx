import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import GreenSpacesImage from "../../Images/GreenSpaces.png";
import "../../Styles/Projects.css";

const GreenSpaces = () => {
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
        Green Spaces Project
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={GreenSpacesImage}
          alt="Green Spaces"
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
          A full stack project built to help people explore green spaces around London. The frontend is built with React and displays a searchable list and interactive map. The backend uses Flask to serve park data.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Users can search by park name or filter by type. Parks are displayed as polygons on the map using Leaflet and OpenStreetMap. The data is stored in JSON and served via a Flask API.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Challenges included coordinating the filtering logic across both list and map views, and working with complex polygon data. Deployment was completed using Render.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          The project is responsive and accessible, with a clean and simple interface. It helped me improve my skills in data handling, state management, and working with third-party libraries.
        </motion.p>

        <motion.a
          href="https://green-spaces.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Visit the live site
        </motion.a>

        <br />
        <br />

        <motion.a
          href="https://github.com/sdg877/green_spaces"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          GitHub Repository
        </motion.a>

        <br />
        <br />

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/projects/NextProject" className="custom-link-bottom">
            Next Project: [Update with title]
          </Link>
        </motion.div>

        <br />
      </motion.div>
    </motion.div>
  );
};

export default GreenSpaces;

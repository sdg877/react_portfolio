import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InTechImage from "../../Images/InTech.png";
import "../../Styles/Projects.css";

const InTech = () => {
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
        inTech Jobs
      </motion.h3>
      <br />
      <br />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.img
          src={InTechImage}
          alt="inTech Jobs"
          className="project-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <br />
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          inTech Jobs was a group project built using the MERN stack, developed by a team of three including myself. It is a job board designed to help Junior Developers search for jobs, 
          save them to their profile, and track their application progress.
        </motion.p>
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          The project required integration with an external API and full CRUD functionality. We used the Adzuna API to fetch job listings 
          with "Junior" and "Developer" keywords and implemented a system for users to save and manage job applications.
        </motion.p>
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          My main contributions included setting up job data retrieval from the API, implementing Google Maps integration for job locations, 
          and ensuring that unauthenticated users were redirected to the login page when trying to save jobs.
        </motion.p>
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          This project strengthened my teamwork and GitHub branching skills. Detailed planning, including Excalidraw and Trello boards, helped us 
          stay organised and complete all our planned features within the timeframe.
        </motion.p>
        <br />
        <motion.a
          href="https://intechjobs.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Check out our site!
        </motion.a>
        <br />
        <br />
        <motion.a
          href="https://github.com/sdg877/InTechFrontend"
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
          href="https://github.com/sdg877/InTechBackend"
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
          <Link to="/projects/SpookSpotters" className="custom-link-bottom">
            Next Project: Spook Spotters
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default InTech;

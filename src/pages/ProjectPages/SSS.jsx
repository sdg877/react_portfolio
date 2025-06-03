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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
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
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          My Unit 4 project, Sustainable Swap Shop, is a full-stack app built with Django and React to facilitate clothes swapping and promote sustainability.
        </motion.p>
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          It’s a fully CRUD application using Django, PostgreSQL, and React, with user authentication and AWS S3 image uploads.
        </motion.p>
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          Challenges included setting up authentication, permissions, and resolving JWT issues on mobile by adjusting token storage and decoding.
        </motion.p>
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          Since then, I’ve gained more Django and React experience; if I revisited this, I’d refine the swap approval, UI, and search/filtering for better UX.
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

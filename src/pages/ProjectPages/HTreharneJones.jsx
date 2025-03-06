import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HTJImage from "../../Images/HTJ.png";
import "../../Styles/Projects.css";

const HTreharneJones = () => {
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
        Heather Treharne Jones Project
      </motion.h3>
      <br />
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={HTJImage}
          alt="Heather Treharne Jones"
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
          This project was my first freelance commission, where I built a clean,
          professional website for an artist to showcase their work, connect
          with customers, and manage sales and commissions. The site includes a
          secure admin area for content management, along with galleries, a
          contact form, a news section, and a commissions page.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The client had a vision for a "clean" look with specific design
          preferences, including colours and a banner image. They also needed
          the ability to update artwork and news independently. I handled both
          the design and development while ensuring seamless user experience
          across devices.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          A key challenge was configuring the S3 bucket for image uploads, which
          I resolved by adjusting bucket settings. I also tackled issues with
          mobile file uploads by modifying nginx settings and fixed special
          character handling with backend encryption and frontend decryption.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          This project strengthened my ability to communicate technical concepts
          to non-technical clients and enhanced my project management skills.
          The website has been thoroughly tested, with no known bugs, and allows
          the client to manage their content with ease.
        </motion.p>
        <br />
        <motion.a
          href="https://htreharnejones.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Check out the site!
        </motion.a>
        <br />
        <br />
        <motion.a
          href="https://github.com/sdg877/hj_frontend"
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
          href="https://github.com/yourusername/htj_backend"
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
          <Link to="/projects/ProjectOne" className="custom-link-bottom">
            Next Project: Project One
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default HTreharneJones;

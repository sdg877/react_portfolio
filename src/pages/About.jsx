import React from "react";
import { motion } from "framer-motion";
import AboutText from "../components/AboutText.jsx"; 
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <motion.div
        className="about-card-glass"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AboutText />
      </motion.div>
    </div>
  );
};

export default About;
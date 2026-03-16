import React from "react";
import { motion } from "framer-motion";
import GithubContributions from "../components/GithubContributions.jsx";
import Experience from "../components/Experience.jsx";
import Education from "../components/Education.jsx";
import "../Styles/Background.css";

const Background = () => {
  return (
    <div className="background-page-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GithubContributions />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Education />
      </motion.div>
    </div>
  );
};

export default Background;

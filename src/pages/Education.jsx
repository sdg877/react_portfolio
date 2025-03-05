import React from "react";
import { motion } from "framer-motion";
import "../Styles/Education.css";

const Education = () => {
  return (
    <motion.div 
      className="info-card"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      whileHover={{ scale: 1.05 }} 
    >
      <h3>Education</h3>
      <p className="education-details">
        <strong>11/2023 - 03/2024
        <br />General Assembly</strong>
        <br />Software Engineering Bootcamp
        <br /><br />
        <strong>2020
        <br />Open University</strong>
        <br />Science, Maths and Technology access course (equivalent to A-levels)   
        <br />Passed with a distinction (95%) - A grade  
        <br /><br />
        <strong>2009
        <br />City University</strong>
        <br />Human Resources Management Course (Passed)  
        <br /><br />
        <strong>2004 - 2005
        <br />City of Westminster College</strong>
        <br />Level 3 NVQ in Business Administration  
      </p>
    </motion.div>
  );
};

export default Education;

import React from "react";
import { motion } from "framer-motion";
import "../Styles/EducationExperience.css";

const Education = () => {
  return (
    <motion.div 
      className="edu-exp-container"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
    >
      <h3 className="edu-exp-title">Education</h3>
      <div className="edu-exp-content">
        <strong>11/2023 - 03/2024 — General Assembly</strong>
        <p>Software Engineering Bootcamp</p>
        
        <strong>2020 — Open University</strong>
        <p>Science, Maths and Technology access course (equivalent to A-levels)</p>
        <p>Passed with a distinction (95%) - A grade</p>
        
        <strong>2009 — City University</strong>
        <p>Human Resources Management Course (Passed)</p>
        
        <strong>2004 - 2005 — City of Westminster College</strong>
        <p>Level 3 NVQ in Business Administration</p>
      </div>
    </motion.div>
  );
};

export default Education;
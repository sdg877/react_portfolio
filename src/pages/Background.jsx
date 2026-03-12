import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GithubContributions from "../components/GithubContributions.jsx";
import "../Styles/Background.css";

const Background = () => {
  return (
    <div className="background-page-wrapper">
      <motion.div
        className="edu-exp-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="edu-exp-title">Experience</h3>
        <br />
        <motion.div
          className="edu-exp-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="edu-exp-content"
          >
            <strong>Freelance Software Engineer | Feb 2025 – Present</strong>
            <br />
            Full-stack development and technical consultancy focusing on Python and the MERN stack.
            <br />
            <br />
            <strong>Featured Projects:</strong>
            <ul className="edu-exp-list">
              <li>
                <strong>Confidential MERN App:</strong> Engineered compliance workflows with 11 interconnected models.
                <br />
                <Link to="/projects/ProjectOne" className="edu-exp-link">→ View Project</Link>
              </li>
              <br />
              <li>
                <strong>Heather Treharne Jones Portfolio:</strong> Responsive artist site with a custom CMS.
                <br />
                <Link to="/projects/HTJ" className="edu-exp-link">→ View Project</Link>
              </li>
              <br />
              <li><strong>CarbonCalc:</strong> Sustainability platform using React and Recharts.</li>
              <li><strong>AI Integration:</strong> Interactive chatbot leveraging OpenAI API.</li>
            </ul>
            <br />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="edu-exp-content"
          >
            <strong>Student, Software Engineering Bootcamp, General Assembly | 2023 - 2024</strong>
            <br />
            Intensive full-stack training in React, Node.js, MongoDB, and Express.
            <br />
            <Link to="/projects" className="edu-exp-link">View Projects</Link>
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="edu-exp-content"
          >
            <strong>Frontiers Media Ltd, Office Manager | Jun 21 – Sept 23</strong>
            <br />
            Managed UK operations and a team supporting 1,000+ remote employees.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="edu-exp-content"
          >
            <strong>The Maverick Group, Office Manager | Sept 17 – Nov 19</strong>
            <br />
            Operations support for a 120-person agency, including events and compliance.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="edu-exp-content"
          >
            <strong>BBC, Various Team Assistant Positions | Jan 10 - Jun 14</strong>
            <br />
            PA support across BBC teams, diary management, and press event coordination.
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <br />
            <a href="https://www.linkedin.com/in/sdrakegill/" target="_blank" rel="noopener noreferrer" className="edu-exp-link">
              For full work experience, please see my LinkedIn.
            </a>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* EDUCATION SECTION */}
      <motion.div 
        className="edu-exp-container"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} 
      >
        <h3 className="edu-exp-title">Education</h3>
        <div className="edu-exp-content">
          <strong>11/2023 - 03/2024 — General Assembly</strong>
          <p>Software Engineering Bootcamp</p>
          <br />
          <strong>2020 — Open University</strong>
          <p>Science, Maths and Technology access course (Distinction - A grade)</p>
          <br />
          <strong>2009 — City University</strong>
          <p>Human Resources Management Course</p>
          <br />
          <strong>2004 - 2005 — City of Westminster College</strong>
          <p>Level 3 NVQ in Business Administration</p>
        </div>
      </motion.div>
      <motion.div 
        className="edu-exp-container"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }} 
      >
        <div className="heatmap-scroll-container">
          <GithubContributions />
        </div>
      </motion.div>
      
    </div>
  );
};

export default Background;
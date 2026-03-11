import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/EducationExperience.css";

const Experience = () => {
  return (
    <motion.div
      className="edu-exp-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="edu-exp-title">Experience</h3>
      <br />
      <br />
      <motion.div
        className="edu-exp-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="edu-exp-content"
        >
          <strong>Freelance Software Engineer | Feb 2025 – Present</strong>
          <br />
          Providing full-stack development and technical consultancy. Currently
          engineering scalable web solutions with a focus on Python, React, and
          Node.js.
          <br />
          <br />
          <strong>Major Projects & Deliverables:</strong>
          <ul className="edu-exp-list">
            <li>
              <strong>Confidential MERN Stack Project:</strong> Built a MERN
              stack application with 11 interconnected models, a task scheduling
              system, and a compliance-focused workflow. Designed a dynamic
              calendar and implemented automated workflows to streamline
              operations.
              <br />
              <Link to="/projects/ProjectOne" className="edu-exp-link">
                View MERN Project
              </Link>
            </li>
            <br />
            <li>
              <strong>
                Heather Treharne Jones – Artist Portfolio Website:
              </strong>{" "}
              Designed and developed a responsive portfolio site with a custom
              content management system and image galleries, delivered on time
              and within budget.
              <br />
              <Link to="/projects/HTJ" className="edu-exp-link">
                View Project Case Study
              </Link>
            </li>
            <br />
            <li>
              <strong>CarbonCalc:</strong> Architected a sustainability platform
              using React and Recharts for complex environmental data
              visualisation.
            </li>
            <li>
              <strong>AI Integration:</strong> Developed an interactive chatbot
              leveraging the OpenAI API and advanced prompt engineering.
            </li>
            <li>
              <strong>System Modernisation:</strong> Currently transitioning
              legacy logic to Python-based microservices to improve system
              performance.
            </li>
          </ul>
          <br />
          Refining technical ownership and agile delivery while maintaining a
          high-intensity professional output across multiple concurrent
          projects.
          <br />
          <br />
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="edu-exp-content"
        >
          <strong>
            Student, Software Engineering Bootcamp, General Assembly
            <br />
            Remote 27/11/23 - 03/01/24
          </strong>
          <br />
          Intensive full-stack software engineering training covering React,
          Node.js, MongoDB, and Express through hands-on projects.
          <br />
          <br />
          <Link to="/projects" className="edu-exp-link">
            View Projects
          </Link>
          <br />
          <br />
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="edu-exp-content"
        >
          Since my bootcamp, I’ve continued developing full-stack projects,
          learning new technologies, and refining my skills through real-world
          applications.
        </motion.p>
        <br />
        <br />

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="edu-exp-content"
        >
          <strong>
            Frontiers Media Ltd, Office Manager - UK Office
            <br />
            Jun 21 – Sept 23
          </strong>
          <br />
          Managed a team, oversaw office operations, and led an office move for
          a company supporting over 1,000 remote employees.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="edu-exp-content"
        >
          <br />
          <br />
          <strong>
            The Maverick Group, Office Manager
            <br />
            Sept 17 – Nov 19
          </strong>
          <br />
          Provided office and administrative support for a 120-person agency,
          overseeing events, compliance, and an office expansion project.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="edu-exp-content"
        >
          <br />
          <br />
          <strong>
            BBC, Various Team Assistant Positions
            <br />
            Jan 10 - Jun 14
          </strong>
          <br />
          Provided admin and PA support across BBC teams, managed diaries, and
          coordinated press events for major productions.
        </motion.p>
        <br />
        <br />

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a
            href="https://www.linkedin.com/in/sdrakegill/"
            target="_blank"
            rel="noopener noreferrer"
            className="edu-exp-link"
          >
            For full work experience, please see my LinkedIn.
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

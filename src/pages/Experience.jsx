import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/EducationExperience.css";

const Experience = () => {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="experience-title">Experience</h3>
      <motion.div
        className="details"
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
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          <strong>
            {" "}
            Independent Software Development & Freelance Work <br /> Feb 2025 –
            Present{" "}
          </strong>
          <br />
          Continuing to enhance my portfolio through self-initiated and
          client-focused projects. Recent work includes developing an
          interactive chatbot using React and OpenAI API, designing a personal
          developer portfolio, and building a carbon footprint calculator to
          explore environmental data visualisation and sustainability metrics.
          <br />
          <br />I have also collaborated on a potential commission project and
          maintained part-time employment in retail alongside my software
          development practice.
                    <br />
          <br />
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          <strong>
            Heather Treharne Jones – Artist Portfolio Website
            <br />
            Jan - Feb 2025
          </strong>
          <br />
          Designed and developed a responsive portfolio site with a custom content management system
          and image galleries, delivered on time and within budget.
          <br />
          <br />
          <Link to="/projects/HTJ" className="custom-link">
            View Project
          </Link>
                    <br />
          <br />
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          <strong>
            Confidential MERN Stack Project
            <br />
            Sept - Nov 2024
          </strong>
          <br />
          Built a MERN stack application with 11 interconnected models, a task
          scheduling system, and a compliance-focused workflow. Designed a
          dynamic calendar and implemented automated workflows to streamline
          operations.
          <br />
          <br />
          <Link to="/projects/ProjectOne" className="custom-link">
            View Project
          </Link>
                    <br />
          <br />
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
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
          <Link to="/projects" className="custom-link">
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
          className="details"
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
          className="details"
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
          className="details"
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
          className="details"
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
            className="custom-link"
          >
            For full work experience, please see my LinkedIn.
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

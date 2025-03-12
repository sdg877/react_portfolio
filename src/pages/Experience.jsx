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
            Heather Treharne Jones – Artist Portfolio Website
            <br />
            Jan - Feb 2024
          </strong>
          <br /> <br />
          Designed and developed a fully responsive artist portfolio website for a client, featuring a custom CMS, high-resolution image galleries, and a modern, user-friendly interface. Delivered the project to specification within the agreed timeline and budget.
          <br />
          <br />
          <Link to="/projects/HTJ" className="custom-link">View Project</Link>
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
          <br />
          An intensive twelve-week course of live coding instruction, one-on-one
          coaching, and projects designed to transform students into full-stack
          software engineers. The course is broken up into four units which
          involve two weeks of intensive learning followed by a project week.
          <br />
          <br />
          <Link to="/projects" className="custom-link">View Projects</Link>
        </motion.p>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          Since completing my bootcamp, I have continued to build on my skills by coding a range of projects, learning new languages, and refining my expertise in full-stack development. I completed my first paid project in early 2024 and remain committed to expanding my technical knowledge through hands-on experience and real-world applications.
        </motion.p>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <strong>
            Frontiers Media Ltd, Office Manager - UK Office
            <br />
            Jun 21 – Sept 23
          </strong>
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          I was responsible for managing a team of three assistants, running the UK office, and supporting up to one hundred employees at the office and one thousand remote employees based across the UK. The main aspects of my role were: health & safety, logistics & facilities management, team supervision and development, and financial management. I also project-managed an office move from start to finish.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          <strong>
            The Maverick Group, Office Manager
            <br />
            Sept 17 – Nov 19
          </strong>
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          I had one direct report and together we supported 120 people providing administration support and ensuring every aspect of the agency ran smoothly. My duties varied daily but included event planning, compliance, building security, health & safety, the project management of an office expansion and office refurbishment, resource and stock management, and heading up the Corporate Social Responsibility team.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          <strong>
            British Broadcasting Corporation, Various Team Assistant Positions
            <br />
            Jan 10 - Jun 14
          </strong>
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="details"
        >
          I worked across various Creative Marketing and Publicity teams providing admin support and as a Personal Assistant to several Senior Directors. I provided comprehensive diary management, took meeting minutes, and prepared documents as required. I was also responsible for administrating the BBC Pictures site, which provided images of BBC productions for use in the press, and was responsible for the booking of the photographic studio at Television Centre. I provided event management support, including a press event for David Attenborough’s Frozen Planet and Radio 1’s Big Weekend among others.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="https://www.linkedin.com/in/sdrakegill/" target="_blank" rel="noopener noreferrer" className="custom-link">For full work experience, please see my LinkedIn.</a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

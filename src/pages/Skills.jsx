import React from "react";
import { motion } from "framer-motion";
import "../Styles/Skills.css";

const skillSections = [
  {
    title: "Frontend",
    icons: [
      "devicon-react-original",
      "devicon-vuejs-plain",
      "devicon-bootstrap-plain",
      "devicon-css3-plain",
      "devicon-html5-plain",
      "devicon-javascript-plain",
    ],
  },
  {
    title: "Backend",
    icons: [
      "devicon-nodejs-plain",
      "devicon-express-original",
      "devicon-django-plain",
      "devicon-mongodb-plain",
      "devicon-postgresql-plain",
      "devicon-python-plain",
    ],
  },
  {
    title: "Tools",
    icons: [
      "devicon-amazonwebservices-plain",
      "devicon-git-plain",
      "devicon-github-original",
      "devicon-postman-plain",
    ],
  },
  {
    title: "Learning",
    icons: [
      "devicon-csharp-plain",
      "devicon-java-plain",
      "devicon-typescript-plain",
    ],
    isPulse: true,
  },
];

const Skills = () => {
  return (
    <div className="skills-page-wrapper">
      <motion.div
        className="skills-bento-grid"
        /* Match About.jsx exactly */
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {skillSections.map((section, index) => (
          <div key={index} className="skills-card">
            <h3 className="skills-card-label">{section.title}</h3>
            <div
              className={`skills-icon-grid ${section.isPulse ? "pulse-anim" : ""}`}
            >
              {section.icons.map((icon, i) => (
                <i
                  key={i}
                  className={`${icon} colored`}
                  title={icon.split("-")[1]}
                />
              ))}
            </div>
            <div className="skills-card-accent"></div>
          </div>
        ))}

        <div className="skills-card soft-skills-card">
          <h3 className="skills-card-label">Soft Skills</h3>
          <p className="soft-skills-text">
            Organisation, Communication, Team Work, Team Management,
            Problem-Solving, Project Management.
          </p>
          <div className="skills-card-accent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

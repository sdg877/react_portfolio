// import React from "react";
// import { motion } from "framer-motion";
// import "../Styles/Skills.css";

// const containerVariants = {
//   hidden: { opacity: 0, scale: 0.9, rotate: -2 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const skillGroupVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const iconVariants = {
//   hover: {
//     scale: 1.2,
//     rotate: [0, -5, 5, -5, 0],
//     transition: { duration: 0.5 },
//   },
// };

// const pulseVariants = {
//   hidden: { scale: 1 },
//   visible: {
//     scale: [1, 1.05, 1],
//     transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
//   },
// };

// const skillSections = [
//   {
//     title: "Frontend Skills",
//     icons: [
//       "devicon-react-original-wordmark",
//       "devicon-vuejs-plain-wordmark",
//       "devicon-bootstrap-plain-wordmark",
//       "devicon-css3-plain-wordmark",
//       "devicon-html5-plain-wordmark",
//       "devicon-javascript-plain",
//       "devicon-axios-plain-wordmark",
//     ],
//   },
//   {
//     title: "Backend Skills",
//     icons: [
//       "devicon-nodejs-plain-wordmark",
//       "devicon-express-original-wordmark",
//       "devicon-django-plain-wordmark",
//       "devicon-djangorest-line-wordmark",
//       "devicon-mongodb-plain-wordmark",
//       "devicon-mongoose-original-wordmark",
//       "devicon-postgresql-plain-wordmark",
//       "devicon-python-plain-wordmark",
//       "devicon-oauth-plain",
//       "devicon-azuresqldatabase-plain",
//     ],
//   },
//   {
//     title: "Tools & General Skills",
//     icons: [
//       "devicon-amazonwebservices-plain-wordmark",
//       "devicon-git-plain-wordmark",
//       "devicon-github-original",
//       "devicon-postman-plain-wordmark",
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <motion.div
//       className="info-card-skills"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {skillSections.map((section, index) => (
//         <motion.div
//           key={index}
//           className="skill-group"
//           variants={skillGroupVariants}
//           initial="hidden"
//           animate="visible"
//           custom={index}
//         >
//           <strong className="skill-group-title">{section.title}</strong>
//           <div className="skill-icons">
//             {section.icons.map((icon, i) => (
//               <motion.i
//                 key={i}
//                 className={icon}
//                 title={icon.replace("devicon-", "").replace("-wordmark", "")}
//                 variants={iconVariants}
//                 whileHover="hover"
//               />
//             ))}
//           </div>
//         </motion.div>
//       ))}

//       <motion.div
//         className="skill-group"
//         variants={skillGroupVariants}
//         initial="hidden"
//         animate="visible"
//         custom={skillSections.length}
//       >
//         <strong className="skill-group-title">Currently Learning</strong>
//         <motion.div
//           className="skill-icons"
//           variants={pulseVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <i className="devicon-csharp-plain-wordmark" title="C#"></i>
//           <i className="devicon-java-plain-wordmark" title="Java"></i>
//           <i className="devicon-typescript-plain" title="TypeScript"></i>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         className="skill-group"
//         variants={skillGroupVariants}
//         initial="hidden"
//         animate="visible"
//         custom={skillSections.length + 1}
//       >
//         <strong className="skill-group-title">Soft Skills</strong>
//         <p className="soft-skills">
//           Organisation, Communication, Team Work, Team Management, Problem-Solving, Project Management.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import "../Styles/Skills.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillSections = [
  {
    title: "Frontend",
    icons: ["devicon-react-original", "devicon-vuejs-plain", "devicon-bootstrap-plain", "devicon-css3-plain", "devicon-html5-plain", "devicon-javascript-plain"],
  },
  {
    title: "Backend",
    icons: ["devicon-nodejs-plain", "devicon-express-original", "devicon-django-plain", "devicon-mongodb-plain", "devicon-postgresql-plain", "devicon-python-plain"],
  },
  {
    title: "Tools",
    icons: ["devicon-amazonwebservices-plain", "devicon-git-plain", "devicon-github-original", "devicon-postman-plain"],
  },
  {
    title: "Learning",
    icons: ["devicon-csharp-plain", "devicon-java-plain", "devicon-typescript-plain"],
    isPulse: true,
  },
];

const Skills = () => {
  return (
    <div className="skills-page-wrapper">
      <motion.div 
        className="skills-bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillSections.map((section, index) => (
          <motion.div key={index} className="skills-card" variants={cardVariants}>
            <h3 className="skills-card-label">{section.title}</h3>
            <div className={`skills-icon-grid ${section.isPulse ? "pulse-anim" : ""}`}>
              {section.icons.map((icon, i) => (
                <i key={i} className={`${icon} colored`} title={icon.split('-')[1]} />
              ))}
            </div>
            <div className="skills-card-accent"></div>
          </motion.div>
        ))}

        {/* Soft Skills Card (Spans 2 columns on desktop) */}
        <motion.div className="skills-card soft-skills-card" variants={cardVariants}>
          <h3 className="skills-card-label">Soft Skills</h3>
          <p className="soft-skills-text">
            Organisation, Communication, Team Work, Team Management, Problem-Solving, Project Management.
          </p>
          <div className="skills-card-accent"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
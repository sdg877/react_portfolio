// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import SpookSpottersImage from "../../Images/SpookSpotters.png";
// import "../../Styles/Projects.css";

// const SpookSpotters = () => {
//   return (
//     <motion.div
//       className="info-card-project"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.h3
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         UK Spook Spotters
//       </motion.h3>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <motion.img
//           src={SpookSpottersImage}
//           alt="Spook Spotters"
//           className="project-image"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           UK Spook Spotters was my Unit 2 bootcamp project: a full-stack app
//           built with Node.js, Express, and MongoDB, where users can log
//           paranormal sightings across the UK.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//         >
//           Features include full CRUD functionality, Google OAuth for
//           authentication, and restricted access for non-logged-in users. Users
//           can record, search, and view detailed sightings.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           The backend uses Mongoose schemas for users, sightings, and locations.
//           The frontend is built with Vue.js, designed for a clean, intuitive
//           experience.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9 }}
//         >
//           A key challenge was implementing user permissions. I also fractured my
//           dominant elbow two weeks before the deadline but still delivered the
//           project on time.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.0 }}
//         >
//           I gained confidence in debugging and strengthened my problem-solving
//           skills. In future, I’d like to add a map feature and support for
//           international sightings.
//         </motion.p>

//         <motion.a
//           href="https://unique-salmiakki-662491.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="custom-link"
//           whileHover={{ scale: 1.1 }}
//         >
//           Check out my site!
//         </motion.a>

//         <br />
//         <br />

//         <motion.a
//           href="https://github.com/sdg877/Project2Frontend"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="custom-link"
//           whileHover={{ scale: 1.1 }}
//         >
//           Frontend GitHub Link
//         </motion.a>

//         <br />
//         <br />

//         <motion.a
//           href="https://github.com/sdg877/Project2Backend"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="custom-link"
//           whileHover={{ scale: 1.1 }}
//         >
//           Backend GitHub Link
//         </motion.a>

//         <br />
//         <br />

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link to="/projects/Snake" className="custom-link-bottom">
//             Next Project: Snake
//           </Link>
//         </motion.div>
//         <br />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SpookSpotters;

import React from "react";
import ProjectPage from "./ProjectPage";
import SpookSpottersImage from "../../Images/SpookSpotters.png";

const SpookSpotters = () => {
  const description = [
    "UK Spook Spotters was my Unit 2 bootcamp project: a full-stack app built with Node.js, Express, and MongoDB, where users can log paranormal sightings across the UK.",
    "Features include full CRUD functionality, Google OAuth for authentication, and restricted access for non-logged-in users. Users can record, search, and view detailed sightings.",
    "The backend uses Mongoose schemas for users, sightings, and locations. The frontend is built with Vue.js, designed for a clean, intuitive experience.",
    "A key challenge was implementing user permissions. I also fractured my dominant elbow two weeks before the deadline but still delivered the project on time.",
    "I gained confidence in debugging and strengthened my problem-solving skills. In future, I’d like to add a map feature and support for international sightings.",
  ];

  return (
    <ProjectPage
      title="UK Spook Spotters"
      image={SpookSpottersImage}
      altText="Spook Spotters"
      descriptionParagraphs={description}
      siteLink="https://unique-salmiakki-662491.netlify.app/"
      githubLinks={[
        { label: "Frontend GitHub Link", url: "https://github.com/sdg877/Project2Frontend" },
        { label: "Backend GitHub Link", url: "https://github.com/sdg877/Project2Backend" },
      ]}
      nextProjectPath="/projects/Snake"
      nextProjectLabel="Next Project: Snake"
    />
  );
};

export default SpookSpotters;

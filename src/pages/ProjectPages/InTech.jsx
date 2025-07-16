// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import InTechImage from "../../Images/InTech.png";
// import "../../Styles/Projects.css";

// const InTech = () => {
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
//         inTech Jobs
//       </motion.h3>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//         <motion.img
//           src={InTechImage}
//           alt="inTech Jobs"
//           className="project-image"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
//           inTech Jobs is a MERN-stack job board built by a team of three, designed to help Junior Developers search, save, and track job applications.
//         </motion.p>

//         <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
//           We integrated the Adzuna API to fetch listings using "Junior" and "Developer" keywords and added full CRUD functionality for managing saved jobs.
//         </motion.p>

//         <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
//           I handled job data integration from the API, set up Google Maps for location display, and built auth protection to redirect unauthenticated users attempting to save jobs.
//         </motion.p>

//         <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
//           This project strengthened my teamwork and Git workflow skills. We used Excalidraw for wireframes and Trello for task management to stay organised and deliver all planned features on time.
//         </motion.p>

//         <motion.a
//           href="https://intechjobs.netlify.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="custom-link"
//           whileHover={{ scale: 1.1 }}
//         >
//           Check out our site!
//         </motion.a>

//         <br />
//         <br />

//         <motion.a
//           href="https://github.com/sdg877/InTechFrontend"
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
//           href="https://github.com/sdg877/InTechBackend"
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
//           <Link to="/projects/SpookSpotters" className="custom-link-bottom">
//             Next Project: Spook Spotters
//           </Link>
//         </motion.div>

//         <br />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default InTech;

import React from "react";
import ProjectPage from "./ProjectPage";
import InTechImage from "../../Images/InTech.png";

const InTech = () => {
  const description = [
    "inTech Jobs is a MERN-stack job board built by a team of three, designed to help Junior Developers search, save, and track job applications.",
    "We integrated the Adzuna API to fetch listings using \"Junior\" and \"Developer\" keywords and added full CRUD functionality for managing saved jobs.",
    "I handled job data integration from the API, set up Google Maps for location display, and built auth protection to redirect unauthenticated users attempting to save jobs.",
    "This project strengthened my teamwork and Git workflow skills. We used Excalidraw for wireframes and Trello for task management to stay organised and deliver all planned features on time.",
  ];

  return (
    <ProjectPage
      title="inTech Jobs"
      image={InTechImage}
      altText="inTech Jobs"
      descriptionParagraphs={description}
      siteLink="https://intechjobs.netlify.app/"
      githubLinks={[
        { label: "Frontend GitHub Link", url: "https://github.com/sdg877/InTechFrontend" },
        { label: "Backend GitHub Link", url: "https://github.com/sdg877/InTechBackend" },
      ]}
      nextProjectPath="/projects/SpookSpotters"
      nextProjectLabel="Spook Spotters"
    />
  );
};

export default InTech;

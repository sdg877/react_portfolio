// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import ProjectOneImage from "../../Images/ProjectOne.jpg";
// // import "../../Styles/Projects.css";

// // const ProjectOne = () => {
// //   return (
// //     <motion.div
// //       className="info-card-project"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6 }}
// //     >
// //       <motion.div
// //         className="details"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 0.5 }}
// //       >
// //         <motion.h3
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.3, duration: 0.5 }}
// //         >
// //           Confidential MERN Stack Project
// //         </motion.h3>
// //         <br />
// //         <br />
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.6 }}
// //         >
// //           <motion.img
// //             src={ProjectOneImage}
// //             alt="Project One"
// //             className="project-image"
// //             initial={{ scale: 0.9, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //           />
// //           <br />
// //           <br />
// //           <motion.p>
// //             This MERN stack project was developed for a client with specialised
// //             workflow requirements. Due to the confidential nature of this
// //             project, specific details about its users, data, and workflows
// //             cannot be disclosed. This project took 130 hours to complete, and I
// //             worked alone.
// //           </motion.p>
// //           <br />
// //           <motion.p>
// //             The application addresses highly sensitive and regulated tasks,
// //             designed to support complex organisational needs and compliance
// //             workflows. It features 11 interconnected data models, ensuring
// //             seamless organisation, linking, and management of data across
// //             various modules.
// //           </motion.p>
// //           <br />
// //           <motion.p>
// //             A central calendar system allows users to track tasks and monitor
// //             compliance. Automated scheduling triggers workflows based on
// //             user-inputted dates, ensuring timely completion of critical
// //             activities. A traffic light system visually signals task progress
// //             and deadlines, enhancing prioritisation.
// //           </motion.p>
// //           <br />
// //           <motion.p>
// //             Key challenges included dynamically displaying attendee and contact
// //             data within a unified table, implementing a context-sensitive help
// //             system, and integrating downloadable email templates for seamless
// //             communication. Each feature was carefully designed to support the
// //             client's workflow needs.
// //           </motion.p>
// //           <br />
// //           <motion.div whileHover={{ scale: 1.05 }}>
// //             <Link to="/projects/GourmetGallery" className="custom-link-bottom">
// //               Next Project: Gourmet Gallery
// //             </Link>
// //           </motion.div>
// //           <br />
// //         </motion.div>
// //       </motion.div>
// //     </motion.div>

// //   );
// // };

// // export default ProjectOne;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProjectOneImage from "../../Images/ProjectOne.jpg";
// import "../../Styles/Projects.css";

// const ProjectOne = () => {
//   return (
//     <motion.div
//       className="info-card-project"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.div
//         className="details"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <motion.h3
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           Confidential MERN Stack Project
//         </motion.h3>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <motion.img
//             src={ProjectOneImage}
//             alt="Project One"
//             className="project-image"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           />

//           <motion.p>
//             This MERN stack project was developed for a client with specialised
//             workflow requirements. Due to the confidential nature of this
//             project, specific details about its users, data, and workflows
//             cannot be disclosed. This project took 130 hours to complete, and I
//             worked alone.
//           </motion.p>

//           <motion.p>
//             The application addresses highly sensitive and regulated tasks,
//             designed to support complex organisational needs and compliance
//             workflows. It features 11 interconnected data models, ensuring
//             seamless organisation, linking, and management of data across
//             various modules.
//           </motion.p>

//           <motion.p>
//             A central calendar system allows users to track tasks and monitor
//             compliance. Automated scheduling triggers workflows based on
//             user-inputted dates, ensuring timely completion of critical
//             activities. A traffic light system visually signals task progress
//             and deadlines, enhancing prioritisation.
//           </motion.p>

//           <motion.p>
//             Key challenges included dynamically displaying attendee and contact
//             data within a unified table, implementing a context-sensitive help
//             system, and integrating downloadable email templates for seamless
//             communication. Each feature was carefully designed to support the
//             client's workflow needs.
//           </motion.p>

//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link to="/projects/GourmetGallery" className="custom-link-bottom">
//               Next Project: Gourmet Gallery
//             </Link>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectOne;

import React from "react";
import ProjectPage from "./ProjectPage";
import ProjectOneImage from "../../Images/ProjectOne.jpg";

const ProjectOne = () => {
  const description = [
    "This MERN stack project was developed for a client with specialised workflow requirements. Due to the confidential nature of this project, specific details about its users, data, and workflows cannot be disclosed. This project took 130 hours to complete, and I worked alone.",
    "The application addresses highly sensitive and regulated tasks, designed to support complex organisational needs and compliance workflows. It features 11 interconnected data models, ensuring seamless organisation, linking, and management of data across various modules.",
    "A central calendar system allows users to track tasks and monitor compliance. Automated scheduling triggers workflows based on user-inputted dates, ensuring timely completion of critical activities. A traffic light system visually signals task progress and deadlines, enhancing prioritisation.",
    "Key challenges included dynamically displaying attendee and contact data within a unified table, implementing a context-sensitive help system, and integrating downloadable email templates for seamless communication. Each feature was carefully designed to support the client's workflow needs.",
  ];

  return (
    <ProjectPage
      title="Confidential MERN Stack Project"
      image={ProjectOneImage}
      altText="Project One"
      descriptionParagraphs={description}
      nextProjectPath="/projects/GourmetGallery"
      nextProjectLabel="Next Project: Gourmet Gallery"
    />
  );
};

export default ProjectOne;


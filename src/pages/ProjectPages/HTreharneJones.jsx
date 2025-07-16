// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import HTJImage from "../../Images/HTJ.png";
// import "../../Styles/Projects.css";

// const HTreharneJones = () => {
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
//         Heather Treharne Jones Project
//       </motion.h3>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <motion.img
//           src={HTJImage}
//           alt="Heather Treharne Jones"
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
//           My first freelance commission: a clean, professional portfolio site for an artist to showcase work, connect with customers, and manage commissions. The build includes an admin area, galleries, contact form, news section, and a commissions page.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//         >
//           The client had a clear vision for the layout, colours, and banner image, and wanted to update content independently. I handled both design and development, ensuring responsive performance across devices.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           Key challenges included configuring the S3 bucket for uploads, handling mobile upload issues via nginx settings, and resolving character encoding errors with backend encryption and frontend decoding.
//         </motion.p>

//         <motion.p
//           className="details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.9 }}
//         >
//           This project sharpened my ability to explain technical concepts to non-technical clients and strengthened my project management skills. The site has no known bugs and gives the client full control over content updates.
//         </motion.p>

//         <motion.a
//           href="https://htreharnejones.co.uk/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="custom-link"
//           whileHover={{ scale: 1.1 }}
//         >
//           Check out the site!
//         </motion.a>

//         <br />
//         <br />

//         <motion.a
//           href="https://github.com/sdg877/hj_frontend"
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
//           href="https://github.com/yourusername/htj_backend"
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
//           <Link to="/projects/ProjectOne" className="custom-link-bottom">
//             Next Project: Project One
//           </Link>
//         </motion.div>

//         <br />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HTreharneJones;

import React from "react";
import ProjectPage from "./ProjectPage";
import HTJImage from "../../Images/HTJ.png";

const HTreharneJones = () => {
  const description = [
    "My first freelance commission: a clean, professional portfolio site for an artist to showcase work, connect with customers, and manage commissions. The build includes an admin area, galleries, contact form, news section, and a commissions page.",
    "The client had a clear vision for the layout, colours, and banner image, and wanted to update content independently. I handled both design and development, ensuring responsive performance across devices.",
    "Key challenges included configuring the S3 bucket for uploads, handling mobile upload issues via nginx settings, and resolving character encoding errors with backend encryption and frontend decoding.",
    "This project sharpened my ability to explain technical concepts to non-technical clients and strengthened my project management skills. The site has no known bugs and gives the client full control over content updates.",
  ];

  return (
    <ProjectPage
      title="Heather Treharne Jones Project"
      image={HTJImage}
      altText="Heather Treharne Jones"
      descriptionParagraphs={description}
      siteLink="https://htreharnejones.co.uk/"
      githubLinks={[
        { label: "Frontend GitHub Link", url: "https://github.com/sdg877/hj_frontend" },
        { label: "Backend GitHub Link", url: "https://github.com/yourusername/htj_backend" },
      ]}
      nextProjectPath="/projects/ProjectOne"
      nextProjectLabel="Project One"
    />
  );
};

export default HTreharneJones;

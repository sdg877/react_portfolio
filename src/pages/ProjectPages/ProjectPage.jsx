import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../Styles/Projects.css";

const ProjectPage = ({
  title,
  image,
  video, 
  altText,
  descriptionParagraphs = [],
  siteLink,
  githubLinks = [],
  nextProjectPath,
  nextProjectLabel,
}) => {
  return (
    <div className="project-page-container"> {/* Renamed from home-container */}
      <motion.div
        className="info-card-project"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {title}
        </motion.h3>

        <motion.img
          src={image}
          alt={altText}
          className="project-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />

        {descriptionParagraphs.map((paragraph, idx) => (
          <motion.p
            key={idx}
            className="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}

        {video && (
          <div className="video-section">
             <h4 className="video-heading">Project Walkthrough</h4>
             <motion.video
               className="project-video"
               controls
               muted
               playsInline
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.5 }}
             >
               <source src={video} type="video/mp4" />
               Your browser does not support the video tag.
             </motion.video>
          </div>
        )}

        <div className="links-container">
          {siteLink && (
            <motion.a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
              whileHover={{ scale: 1.05 }}
            >
              Check out my site!
            </motion.a>
          )}

          {githubLinks.map(({ label, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
              whileHover={{ scale: 1.05 }}
            >
              {label}
            </motion.a>
          ))}

          {nextProjectPath && nextProjectLabel && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to={nextProjectPath} className="custom-link-bottom">
                Next Project: {nextProjectLabel} →
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
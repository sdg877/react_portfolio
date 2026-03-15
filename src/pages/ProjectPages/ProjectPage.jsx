import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../Styles/Projects.css";

const ProjectPage = ({ 
  title, 
  image, 
  altText, 
  descriptionParagraphs, 
  video, 
  codeSnippets, 
  siteLink, 
  githubLinks, 
  nextProjectPath, 
  nextProjectLabel 
}) => {
  return (
    <div className="project-page-container">
      <div className="projects-wrapper">
        <div className="info-card-project">
          <h3>{title}</h3>
          
          <img src={image} alt={altText} className="project-image" />

          <div className="description-container">
            {descriptionParagraphs.map((para, index) => (
              <p key={index} className="details">{para}</p>
            ))}
          </div>

          {/* Technical Highlights Section */}
          {codeSnippets && codeSnippets.length > 0 && (
            <div className="technical-highlights">
              <h4 className="video-heading">Technical Highlights</h4>
              <div className="highlights-grid">
                {codeSnippets.map((snippet, idx) => (
                  <div key={idx} className="highlight-item">
                    <img src={snippet.image} alt="Code Snippet" className="project-image" />
                    <p className="highlight-caption">{snippet.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Section */}
          {video && (
            <div className="video-section">
              <h4 className="video-heading">Walkthrough & Logic Demo</h4>
              <video controls className="project-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Links Section */}
          <div className="links-container">
            {siteLink && (
              <a href={siteLink} target="_blank" rel="noopener noreferrer" className="custom-link">
                View Live Site
              </a>
            )}
            {githubLinks && githubLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="custom-link">
                {link.label}
              </a>
            ))}
            
            <Link to={nextProjectPath} className="custom-link-bottom">
              Next Project: {nextProjectLabel} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
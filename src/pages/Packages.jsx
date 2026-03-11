import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/Packages.css";

const Packages = () => {
  return (
    <div className="home-container">
      <motion.div
        className="projects-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <header className="projects-header">
          <h2 className="title-project">Packages</h2>
          <p className="about-p" style={{ textAlign: "center", margin: "0 auto 40px" }}>
            Web development services for individuals, creatives, and small
            businesses. Every project is different, but here is a guide to pricing.
          </p>
        </header>

        <div className="bento-grid">
          {/* Starter Card */}
          <div className="grid-card-wrapper about-card package-card">
            <div className="project-overlay">
              <span className="grid-card-label">Starter</span>
            </div>
            <div className="package-content">
              <h3>From £350</h3>
              <p>One-page design, contact form, and basic SEO. Perfect for landing pages.</p>
            </div>
          </div>

          {/* Standard Card */}
          <div className="grid-card-wrapper about-card package-card">
            <div className="project-overlay">
              <span className="grid-card-label">Standard</span>
            </div>
            <div className="package-content">
              <h3>From £700</h3>
              <p>3–5 pages with a blog or gallery. Mobile optimized for small businesses.</p>
            </div>
          </div>

          {/* Custom Card */}
          <div className="grid-card-wrapper about-card package-card">
            <div className="project-overlay">
              <span className="grid-card-label">Custom App</span>
            </div>
            <div className="package-content">
              <h3>From £1500</h3>
              <p>Full MERN/Python apps with logins, databases, and custom API features.</p>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: "40px", textAlign: "center" }}>
          <p className="about-p">
            Not sure what you need? Check my{" "}
            <Link to="/projects" className="custom-link-packages">
              projects
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="custom-link-packages">
              get in touch
            </Link>.
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Packages;
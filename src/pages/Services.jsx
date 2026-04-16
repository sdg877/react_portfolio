import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <motion.div
        className="services-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="services-header">
          <h2 className="services-title">Services</h2>
          <p className="services-intro">
            Web development and technical solutions for individuals, creatives,
            and small businesses. Every project is different, but here is a
            guide to pricing.
          </p>
        </header>

        <div className="services-bento-grid">
          <div className="service-card">
            <div className="service-badge">
              <span className="badge-text">Fixes</span>
            </div>
            <div className="service-content">
              <h3>From £150</h3>
              <p>
                Targeted updates for existing sites. Fixing layouts, adding
                components, or squashing persistent bugs.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-badge">
              <span className="badge-text">Audit</span>
            </div>
            <div className="service-content">
              <h3>£250</h3>
              <p>
                Technical health check. I audit speed, SEO, and accessibility
                (WCAG) with a roadmap for fixes.
              </p>
            </div>
          </div>

          {/* 3. Starter */}
          <div className="service-card">
            <div className="service-badge">
              <span className="badge-text">Starter</span>
            </div>
            <div className="service-content">
              <h3>From £350</h3>
              <p>
                One-page design, contact form, and basic SEO. Perfect for
                landing pages.
              </p>
            </div>
          </div>

          {/* 4. Automation */}
          <div className="service-card">
            <div className="service-badge">
              <span className="badge-text">Automation</span>
            </div>
            <div className="service-content">
              <h3>From £450</h3>
              <p>
                Python scripts to automate manual tasks. Connecting your tools
                to save hours of admin work.
              </p>
            </div>
          </div>

          {/* 5. Standard */}
          <div className="service-card">
            <div className="service-badge">
              <span className="badge-text">Standard</span>
            </div>
            <div className="service-content">
              <h3>From £700</h3>
              <p>
                3–5 pages with a blog or gallery. Mobile optimized for small
                businesses.
              </p>
            </div>
          </div>

          {/* 6. Custom App */}
          <div className="service-card">
            <div className="service-badge">
              <span className="badge-text">Custom App</span>
            </div>
            <div className="service-content">
              <h3>From £1500</h3>
              <p>
                Full MERN/Python apps with logins, databases, and custom API
                features.
              </p>
            </div>
          </div>
        </div>

        <footer className="services-footer">
          <p className="footer-text">
            Looking for <strong>agency white-label rates</strong>? Check my{" "}
            <Link to="/projects" className="service-link">
              projects
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="service-link">
              get in touch
            </Link>
            .
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Animation updated here to match the About page */}
      <motion.div
        className="services-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="services-header">
          <h2 className="services-title">Services</h2>
          <p className="services-intro">
            Web development services for individuals, creatives, and small
            businesses. Every project is different, but here is a guide to
            pricing.
          </p>
        </header>

        <div className="services-bento-grid">
          {/* Card 1: Starter */}
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

          {/* Card 2: Standard */}
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

          {/* Card 3: Custom App */}
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
            Not sure what you need? Check my{" "}
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

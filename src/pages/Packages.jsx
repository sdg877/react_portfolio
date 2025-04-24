import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/AboutPackages.css";

const Packages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="info-card"
    >
      <h1 className="about-title">Packages</h1>
      <p className="about-p">
        I offer web development services for individuals, creatives, and small
        businesses. Every project is different, but here are some typical
        packages to give you an idea of pricing.
      </p>

      <div>
        <div className="info-card">
          <h2>Starter Website</h2>
          <p>Perfect for simple projects and landing pages.</p>
          <div className="about-p">
            <div>One-page design</div>
            <div>Contact form</div>
            <div>Responsive layout</div>
            <div>Basic SEO setup</div>
          </div>
          <p>
            <strong>From £350</strong>
          </p>
        </div>

        <div className="info-card">
          <h2>Standard Website</h2>
          <p>Great for freelancers or small businesses.</p>
          <div className="about-p">
            <div>3–5 pages</div>
            <div>Gallery, blog or contact sections</div>
            <div>Mobile & tablet optimisation</div>
            <div>Google Maps integration</div>
          </div>
          <p>
            <strong>From £700</strong>
          </p>
        </div>

        <div className="info-card">
          <h2>Custom Web App</h2>
          <p>Tailored to your unique needs and functionality.</p>
          <div className="about-p">
            <div>User login & dashboard</div>
            <div>Database integration</div>
            <div>API or chatbot features</div>
            <div>Admin panel included</div>
          </div>
          <p>
            <strong>From £1500</strong>
          </p>
        </div>
      </div>

      <p className="about-p" style={{ marginTop: "30px" }}>
        Not sure what you need? Have a look at my{" "}
        <Link to="/projects" className="custom-link-packages">
          project examples
        </Link>{" "}
        or{" "}
        <Link to="/contact" className="custom-link-packages">
          get in touch
        </Link>{" "}
        for a free quote.
      </p>
    </motion.div>
  );
};

export default Packages;

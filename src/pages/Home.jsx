import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Home.css";

const Home = () => {
  const menuItems = [
    "About",
    "Contact",
    "Education",
    "Experience",
    "Packages",
    "Projects",
    "Skills",
  ];

  return (
    <div className="home-container">
      <nav className="bento-grid">
        {menuItems.map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="grid-card-wrapper"
          >
            <Link to={`/${item.toLowerCase()}`} className="grid-card-link">
              <span className="grid-card-label">{item}</span>
              <div className="grid-card-accent" />
            </Link>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default Home;

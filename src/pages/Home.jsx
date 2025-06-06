import React from "react";
import "../Styles/Home.css";
import "../Styles/Weather.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const buttonVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100vw" : direction === "right" ? "100vw" : 0,
      y: direction === "top" ? "-100vh" : direction === "bottom" ? "100vh" : 0,
      opacity: 0,
    }),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    },
    circular: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const directions = ["left", "right", "top", "bottom", "left", "right", "bottom"];
  const buttonLabels = [
    "About",
    "Contact",
    "Education",
    "Experience",
    "Packages",
    "Projects",
    "Skills"
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <nav className="home-nav">
          {buttonLabels.map((text, index) => (
            <motion.div
              key={text}
              custom={directions[index]}
              initial="hidden"
              animate="visible"
              whileInView="circular"
              variants={buttonVariants}
              className="home-button-wrapper"
            >
              <Link to={`/${text.toLowerCase().replace(" ", "")}`}>
                <button className="home-nav-button">{text}</button>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Home;

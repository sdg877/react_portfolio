import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SnakeImage from "../../Images/Snake.png";
import "../../Styles/Projects.css";

const Snake = () => {
  return (
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
        Unit 1 Project - Snake
      </motion.h3>
      <br />
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={SnakeImage}
          alt="Snake Game"
          className="project-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <br />
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          This was my first coding project during General Assembly’s Software
          Engineering Bootcamp. I chose to build the classic Snake game using
          JavaScript, HTML, and CSS.
        </motion.p>
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The game challenges players to guide the snake to eat food, growing
          longer and faster, while avoiding collisions with walls or itself.
        </motion.p>
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          This project strengthened my understanding of JavaScript fundamentals
          including event listeners, game loops, and collision detection.
        </motion.p>
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Additional features I added were a high score tracker, sound effects,
          and a custom alert to start the game.
        </motion.p>
        <motion.a
          href="https://sdg877.github.io/Unit1_Project_Snake/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Play Snake!
        </motion.a>
        <br />
        <br />
        <motion.a
          href="https://github.com/sdg877/Unit1_Project_Snake"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          GitHub Link
        </motion.a>
        <br />
        <br />
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/projects/AIChatBot" className="custom-link-bottom">
            Next Project: AI Chatbot
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Snake;

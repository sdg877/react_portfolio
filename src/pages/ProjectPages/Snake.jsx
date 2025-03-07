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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
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
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          This was my first-ever coding project, completed as part of Unit One of General Assembly's Software Engineering Bootcamp.
          We were given a choice of games to build, and I chose Snake to challenge myself while keeping the scope manageable.
        </motion.p>
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          The game is a single-player experience where the player earns points by guiding the snake to eat food placed randomly on the game board.
          The snake grows longer and moves faster with each piece of food consumed, and the game ends if it collides with a wall or itself.
        </motion.p>
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          The game was built using only JavaScript, HTML, and CSS. It required implementing win/loss logic, consistent code structuring,
          and deployment via GitHub Pages.
        </motion.p>
        <br />
        <motion.p className="details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          This project helped me solidify my understanding of JavaScript fundamentals, particularly event listeners, game loops,
          and collision detection. I also added extra features, including a high score tracker, sound effects, and a custom-styled alert to start the game.
        </motion.p>
        <br />
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
          <Link to="/projects/HTJ" className="custom-link-bottom">
            Next Project: Heather Treharne Jones site
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default Snake;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import chatBotImage from "../../Images/AIChatBot.png";
import "../../Styles/Projects.css";

const AIChatBot = () => {
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
        AI Chat Bot
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.img
          src={chatBotImage}
          alt="AI Chat Bot"
          className="project-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Built in March 2025 using Flask, MongoDB, and the OpenAI API, this web app allows users to register, log in, and chat with an AI while storing and managing conversation history. It features a clean, responsive interface created with HTML, CSS, and JavaScript.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Key features include user authentication, persistent chat history with renaming/deletion, a search function, smart subject generation, and a welcome message for new chats. Managing these involved careful handling of state and API responses.
        </motion.p>

        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          This project strengthened my skills in Flask, JavaScript, and API integration, and gave me hands-on experience with deployment and authentication. Planned improvements include real-time updates, improved search relevancy, and file uploads.
        </motion.p>

        <motion.a
          href="https://chatbot-sdrakegill.pythonanywhere.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
          whileHover={{ scale: 1.1 }}
        >
          Check out my site!
        </motion.a>

        <br />
        <br />

        <motion.a
          href="https://github.com/sdg877/ai_chatbot"
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
            Next Project: Heather Treharne Jones Site
          </Link>
        </motion.div>
        <br />
      </motion.div>
    </motion.div>
  );
};

export default AIChatBot;

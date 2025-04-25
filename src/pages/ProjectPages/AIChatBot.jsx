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
      <br />
      <br />
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
        <br /> <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          This chatbot web app, completed in March 2025, was built using Flask,
          MongoDB, and the OpenAI API (gpt-3.5-turbo). It allows users to
          register, log in, and chat with an AI while storing and managing their
          conversation history. I deployed the project on PythonAnywhere and
          created a clean, responsive interface using HTML, CSS, and JavaScript.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Key features include user authentication, persistent conversations
          with rename/delete options, and a search function. I also implemented
          smart subject generation from user messages and a welcome message that
          only appears in new chats. Managing these features required careful
          handling of conversation state and API responses.
        </motion.p>
        <br />
        <motion.p
          className="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          This project sharpened my skills in Flask, API integration, and
          JavaScript, while also giving me experience with user authentication
          and app deployment. Future improvements include real-time updates,
          better search relevancy, and file upload functionality.
        </motion.p>
        <br />
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

import React from "react";
import { motion } from "framer-motion";
import SylviaImage from "../Assets/Images/Branding/Sylvia.jpeg";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-card-glass">
          <div className="about-inner-content">
            <img
              src={SylviaImage}
              alt="Sylvia Drake-Gill"
              className="profile-image"
            />
            <header className="about-header">
              <h2 className="about-title">About Sylvia</h2>
            </header>

            <article className="about-text-area">
              <p>
                I’m a Software Engineer with over 15 years of experience in TV,
                advertising, and publishing operations. That background taught
                me how to handle the pressure of complex projects and why clear
                communication is just as important as the code itself.
              </p>
              <p>
                I have been coding for over two years and I love building fast,
                data-driven apps using Python and the MERN stack. I’m at my best
                when I’m writing clean, efficient code that genuinely makes life
                easier for the end user. I'm an all rounder who enjoys the
                complexities of building a solid backend as well as making the
                frontend user friendly too.
              </p>
              <p>
                I grew up in Ladbroke Grove, West London, listening to Garage,
                RnB, and Reggae. I’m still a huge music fan (Little Simz and
                Foals are usually on repeat lately). I have visited over 30
                countries accross the globe. I lived in Berlin for three years
                in my 20s and still visit my friends there regularly, but these
                days I’m based in Merton with my boyfriend of eight years and
                our two cats, Kitty and Osborne.
              </p>
              <p>
                When I’m not coding, I’m usually hiking, trying out a new
                recipe, or looking into current affairs. I also have a massive
                curiosity for the paranormal; I love a good ghost story almost
                as much as a clean codebase. There's something about the unknown
                that excites me.
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

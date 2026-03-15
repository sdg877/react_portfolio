import React from "react";
import { motion } from "framer-motion";
import SylviaImage from "../Images/Branding/Sylvia.jpeg";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
                I am a Software Engineer with a 15-year career in TV,
                advertising, and publishing operations. This gives me a distinct
                edge; I balance technical detail with the clear communication
                needed to keep complex projects on track.
              </p>
              <p>
                I build fast, data-driven apps using Python and the MERN stack.
                I’m at my best when writing clean, efficient code that makes
                life easier for the end user.
              </p>
              <p>
                Based in London, I’ve lived in Germany and Australia and visited
                30 countries. When I’m not coding, I’m usually hiking,
                experimenting with new recipes, or diving into current affairs.
                I also have a massive curiosity for the paranormal, I love a
                good ghost story as much as a clean codebase.
              </p>
              <p>
                I'm also a huge music fan with my taste spanning all genres, I
                grew up in Ladbroke Grove, West london listening to Garage, RnB
                and Reggae. My current favourite artists are Little Simz and
                Foals. I now live in Merton, South London with my boyfriend and
                two cats, Kitty & Osborne.
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

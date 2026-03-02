import React from "react";
import SylviaImage from "../Images/Sylvia.jpeg";
import "../Styles/AboutPackages.css";

const AboutMe = () => {

  return (
    <div className="info-card">
      <h3 className="about-title">About Sylvia</h3>
      <img
        src={SylviaImage}
        alt="Sylvia Drake-Gill"
        className="profile-image"
      />
      <div className="about-p">
        <p>
          I am a **Full Stack Software Engineer** with a previous 20-year career 
          driving operations and leadership within TV, advertising, and publishing. 
          This background gives me a distinct edge: I combine technical rigour with 
          the high-level communication and problem-solving skills required to 
          deliver complex projects under pressure.
        </p>
        <br />
        <p>
          Since transitioning into engineering, I have focused on building 
          **performant, data-driven applications**. I enjoy the intersection of 
          clean code and user-centric design, recently specialising in 
          **React, Python, and Node.js**. I approach every codebase with a 
          combination of logic, curiosity, and a drive for efficiency.
        </p>
        <br />
        <p>
          Based in London, I bring a global perspective to my work, having 
          lived in Germany and Australia. Beyond the terminal, I’m an avid 
          swimmer, cook, and traveller—constantly seeking new challenges, whether 
          it’s mastering a new framework or navigating a new continent.
        </p>
      </div>
      <br />
    </div>
  );
};

export default AboutMe;
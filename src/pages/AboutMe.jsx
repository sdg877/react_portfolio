import React from "react";
import SylviaImage from "../Images/Sylvia.jpeg";
import "../Styles/AboutPackages.css";

const AboutMe = () => {
  const countries = [
    { flag: "🇧🇦", name: "Bosnia and Herzegovina" },
    { flag: "🇧🇪", name: "Belgium" },
    { flag: "🇧🇬", name: "Bulgaria" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇨🇺", name: "Cuba" },
    { flag: "🇭🇷", name: "Croatia" },
    { flag: "🇩🇰", name: "Denmark" },
    { flag: "🇪🇬", name: "Egypt" },
    { flag: "🇫🇴", name: "Faroe Islands" },
    { flag: "🇫🇯", name: "Fiji" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇬🇷", name: "Greece" },
    { flag: "🇭🇺", name: "Hungary" },
    { flag: "🇮🇪", name: "Ireland" },
    { flag: "🇮🇹", name: "Italy" },
    { flag: "🇳🇱", name: "Netherlands" },
    { flag: "🇳🇿", name: "New Zealand" },
    { flag: "🇲🇦", name: "Morocco" },
    { flag: "🇵🇱", name: "Poland" },
    { flag: "🇵🇹", name: "Portugal" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇹🇷", name: "Turkey" },
    { flag: "🇺🇸", name: "United States" },
    { flag: "🇺🇦", name: "Ukraine" },
  ];

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
      <div className="about-p">
        <strong>Global Footprint:</strong>
        <div className="flags">
          {countries.map((country, index) => (
            <span key={index} className="flag" title={country.name}>
              {country.flag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
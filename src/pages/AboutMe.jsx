import React from "react";
import SylviaImage from "../Images/Sylvia.jpeg";
import "../Styles/AboutPackages.css";

const AboutMe = () => {
  return (
    <div className="info-card">
      <h3 className="about-title">About Kitty Coding</h3>
      <img
        src={SylviaImage}
        alt="Sylvia Drake-Gill"
        className="profile-image"
      />
      <p className="about-p">
        Hi, I'm Sylvia, the coder behind Kitty Coding. My journey into tech started in 2020 when I took a tech A-level equivalent with the Open University – I discovered I loved coding and learning how things work. By 2023, I completed a Software Engineering Immersive course, diving deep into workshops, projects, and self-teaching along the way. I pick up new skills quickly and thrive on solving problems.
        <br />
        <br />
        Throughout my career, I’ve brought creativity, organisation, and determination to everything I do. Now, I channel that energy into software engineering – building clean, functional, and thoughtful code. I’m hardworking, curious, and I like to sprinkle a bit of humour into my projects.
        <br />
        <br />
        Fun fact: my cat Kitty has been my faithful coding companion from day one, always by my side no matter how tricky the bug. She’s inspired the name of this portfolio, reminding me to stay curious, patient, and persistent – just like in coding.
        <br />
        <br />
        When I’m not coding, I enjoy swimming, cooking, and exploring new places. London is home, but I bring a sense of curiosity and playfulness to everything I do, whether it’s writing code or trying a new recipe.
      </p>
    </div>
  );
};

export default AboutMe;

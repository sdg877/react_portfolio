import React from "react";
import SylviaImage from "../Assets/Images/Branding/Sylvia.jpeg";

const AboutText = () => {
  return (
    <div className="about-inner-content">
      <img
        loading="lazy"
        src={SylviaImage}
        alt="Sylvia Drake-Gill"
        className="profile-image"
      />
      <header className="about-header">
        <h2 className="about-title">About Sylvia</h2>
      </header>

      <article className="about-text-area">
        <p>
          I’m a Software Engineer who has been coding for two and a half years.
          I love building fast, data-driven apps using Python and the MERN
          stack. I write clean, efficient code that makes life easier for the
          end user. I'm an all-rounder who enjoys the complexities of building a
          solid backend as well as making the frontend user-friendly too.
        </p>
        <p>
          I started my career in Operations in TV, advertising and publishing.
          That background taught me how to handle the pressure of complex
          projects and why clear communication is just as important as the code
          itself.
        </p>
        <p>
          In 2025, I was diagnosed with ADHD-C. While it was a huge shock for
          me, it wasn't for those close to me. My working style, ability to
          hyperfocus, my unique problem-solving skills and huge sense of justice
          suddenly made a lot more sense. I have learnt to channel my energy
          into things I love, and I feel blessed to have found coding. I love
          that the answer is black and white, and you are able to move on once a
          problem is solved, which I never had in my previous life in
          operations.
        </p>
        <p>
          I'm a born and bred Londoner, having grown up in Ladbroke Grove, West
          London and making the traitorous move to South of the River in 2017. I
          now live with my boyfriend and our two cats, Kitty and Osborne in
          Merton.
        </p>
        <p>
          When I’m not coding, I’m usually hiking, trying out a new recipe, or
          looking into current affairs. I spend a lot of time with my
          92-year-old Grandad; we go out for lunch, discuss politics, and
          generally enjoy each other's company. I also have a massive curiosity
          for the paranormal, I love a good ghost story almost as much as a
          clean codebase. There's something about the unknown that excites me. I
          also love travelling and have visited over 30 countries, including
          stints living in Berlin and Sydney.
        </p>
      </article>
    </div>
  );
};

export default AboutText;

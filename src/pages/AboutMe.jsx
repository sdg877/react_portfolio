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
      <p className="about-p">
        For twenty years, I got things done in the fast-paced worlds of TV,
        advertising, and publishing. I'm good at solving problems and leading
        teams. In 2020, I decided to try something completely different and took
        a tech A-level equivalent course with the Open University. Turns out,
        I'm pretty good at that too (95%). That sparked my interest in coding,
        and by 2023, I was diving into workshops and teaching myself the basics.
        I pick things up quickly, and I love figuring out how things work.
        <br />
        <br />
        That curiosity led me to a Software Engineering Immersive course in
        2023. I'm not afraid of a challenge, and honestly, I'm excited to be a
        woman in a field that's usually dominated by men. I'm hardworking, I'm
        driven, and I bring a bit of humour to everything I do. I'm a fast
        learner, and I'm ready to put my skills to work in a great development
        team.
        <br />
        <br />
        London is my home, but I love exploring the world. Swimming, cooking,
        and traveling keep me balanced. I've lived in Germany and Australia, and
        I'm planning trips to South Korea, Japan, and Mexico. I approach
        everything, whether it's coding or exploring a new city, with a mix of
        curiosity and a sense of fun.
      </p>
      <br />
      <div className="about-p">
        Some of the countries I have visited:
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

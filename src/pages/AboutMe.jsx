import React from "react";

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
      <h3>About Me</h3>
      <p>
        With two decades of experience in administration across TV, advertising,
        and publishing, I decided it was time to take on a new challenge. During
        the 2020 lockdown, I enrolled in an access course in Maths, Science, and
        Technology with the Open University, earning a distinction (95%) and
        discovering a genuine interest in technology. Coding workshops quickly
        followed, and my passion for problem-solving led me to complete a
        Software Engineering Immersive course.
        <br />
        <br />
        Now, as a Junior Software Engineer, I’m eager to combine my analytical
        skills, adaptability, and years of experience as a team player to
        contribute to a dynamic development team.
        <br />
        <br />
        I’m a Londoner through and through—originally from West London but now
        happily settled in South London for the past seven years. I share my
        home with my boyfriend and two cats, who undoubtedly think they run the
        place. When I’m not coding, I find balance through swimming (with a good
        sauna session to top it off) and enjoy experimenting in the
        kitchen—anything layered is my kind of dish. I’ve lived in Germany and
        Australia, traveled to dozens of countries, and am looking forward to
        exploring South Korea, Japan, and Mexico next.
      </p>
      <br />
      <div>
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

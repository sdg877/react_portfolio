import React from "react";
import SylviaImage from "../Images/Sylvia.jpeg";
import "../Styles/AboutPackages.css";

// const AboutMe = () => {
//   return (
//     <div className="info-card">
//       <h3 className="about-title">About Sylvia</h3>
//       <img
//         src={SylviaImage}
//         alt="Sylvia Drake-Gill"
//         className="profile-image"
//       />
//       <div className="about-p">
//         <p>
//           I am a Software Engineer with a previous 15 year career in operations
//           within TV, advertising, and publishing. This background gives me a
//           distinct edge, I balance technical detail with the clear communication
//           needed to keep complex projects on track and hit deadlines.
//         </p>
//         <br />
//         <p>
//           I build fast, data-driven apps using Python and the MERN stack. I’m at
//           my best when writing clean, efficient code that makes life easier for
//           the end user.
//         </p>
//         <br />
//         <p>
//           Based in London, I bring a global perspective to my work, having lived
//           in Germany and Australia and visited 30 countries. When I’m not
//           coding, I’m usually hiking, experimenting with new recipes, or diving
//           into current affairs. I also have a massive curiosity for the
//           paranormal—I love a good ghost story as much as a clean codebase
//         </p>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default AboutMe;

const AboutMe = () => {
  return (
    <div className="info-card">
      <h3 className="about-title">About Sylvia</h3>
      <img
        src={SylviaImage}
        alt="Sylvia Drake-Gill, Software Engineer"
        className="profile-image"
      />
      <div className="about-p">
        <p>
          I am a Software Engineer with a 15-year career in TV, advertising, 
          and publishing operations. This gives me a distinct edge; I balance 
          technical detail with the clear communication needed to keep complex 
          projects on track.
        </p>
        <p>
          I build fast, data-driven apps using **Python** and the **MERN stack**. 
          I’m at my best when writing clean, efficient code that makes life 
          easier for the end user.
        </p>
        <p>
          Based in London, I’ve lived in Germany and Australia and visited 
          30 countries. When I’m not coding, I’m usually hiking, experimenting 
          with new recipes, or diving into current affairs. I also have a 
          massive curiosity for the paranormal—I love a good ghost story as 
          much as a clean codebase.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
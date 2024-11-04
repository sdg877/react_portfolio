import React from "react";
import GourmetGalleryImage from "../../Images/GourmetGallery.png";

const GourmetGallery = () => {
  return (
    <div className="info-card">
      <h3>Gourmet Gallery</h3>
      <br />
      <br />
      <div>
        <img
          src={GourmetGalleryImage}
          alt="Gourmet Gallery"
          className="project-image"
        />
        <br /> <br />
        <p>
          This solo project was developed using the MERN stack and took
          approximately 45 hours to complete. It incorporates an external API
          and authentication system, enabling users to save their favorite
          recipes.
        </p>
        <br />
        <p>
          This project marks my first full-stack endeavor following my course,
          and I found the challenge immensely rewarding. Unlike previous
          projects where I had instructor assistance if needed, I relied on my
          own skills for setup and troubleshooting. I conducted thorough online
          research to overcome any obstacles encountered along the way.
        </p>
        <br />
        <br />
        <a
          href="https://gourmetgallery.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Check out my site!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/recipe_site_fe"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Frontend GitHub Link
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/recipe_site_be"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Backend GitHub Link
        </a>
        <br />
      </div>
    </div>
  );
};

export default GourmetGallery;

import React from 'react'
import GourmetGalleryImage from "../../Images/GourmetGallery.png"

const GourmetGallery = () => {
  return (
    <div className="text-container">
      <h2>Gourmet Gallery</h2>
      <div>
        <img src={GourmetGalleryImage} alt="Gourmet Gallery" style={{ width: '200px', height: '200px' }} />
        <br />
        <p>
          This solo project was developed using the MERN stack and took approximately 45 hours to complete. It incorporates an
          external API and authentication system, enabling users to save their favorite recipes.
        </p>
        <p>
          This project marks my first full-stack endeavor following my course, and I found the challenge immensely rewarding.
          Unlike previous projects where I had instructor assistance if needed, I relied on my own skills for setup and troubleshooting.
          I conducted thorough online research to overcome any obstacles encountered along the way.
        </p>
        <br />
        <a href="https://gourmetgallery.netlify.app/" target="_blank" rel="noopener noreferrer" className="nav-button">
          Check out my site!
        </a>
        <a href="https://github.com/sdg877/recipe_site_fe" target="_blank" rel="noopener noreferrer" className="nav-button">
          Frontend GitHub Link
        </a>
        <a href="https://github.com/sdg877/recipe_site_be" target="_blank" rel="noopener noreferrer" className="nav-button">
          Backend GitHub Link
        </a>
      </div>
    </div>
  );
};

export default GourmetGallery;
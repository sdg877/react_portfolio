import React from "react";
import { Link } from "react-router-dom";
import HTJImage from "../../Images/HTJ.png";
import "../Styles/Projects.css"

const HTreharneJones = () => {
  return (
    <div className="info-card">
      <h3>Heather Treharne Jones Project</h3>
      <br />
      <br />
      <div>
        <img
          src={HTJImage}
          alt="Heather Treharne Jones"
          className="project-image"
        />
        <br />
        <br />
        <p>
          This project was my first freelance commission, where I built a clean,
          professional website for an artist to showcase their work, connect
          with customers, and manage sales and commissions. The site features
          galleries for different art mediums, a contact form, a news section,
          and a secure admin area for the client to manage content
          independently. I handled both design and development using the MERN
          stack, ensuring responsive functionality across devices and seamless
          backend management for artwork and news updates.
        </p>
        <br />
        <br />
        <a
          href="https://htreharnejones.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the site!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/hj_frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend GitHub Link
        </a>
        <br />
        <br />
        <a
          href="https://github.com/yourusername/htj_backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend GitHub Link
        </a>
        <br />
        <br />
        <Link to="/projects/GourmetGallery">Next Project: Gourmet Gallery</Link>
        <br />
      </div>
    </div>
  );
};

export default HTreharneJones;

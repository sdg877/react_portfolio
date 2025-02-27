import React from "react";
import SSSImage from "../../Images/SSS.png";
import { Link } from "react-router-dom";
import "../Styles/Projects.css"

const SSS = () => {
  return (
    <div className="info-card">
      <h3>Unit 4 Project - Sustainable Swap Shop</h3>
      <br />
      <br />
      <div>
        <img
          src={SSSImage}
          alt="Sustainable Swap Shop"
          className="project-image"
        />
        <br />
        <br />
        For my Unit 4 project, we were required to build a full-stack web
        application using the Python-based Django Rest Framework. I am
        interested in the Environment and fast fashion so decided to build a
        clothes swap site.
        <br />
        <br />
        We were asked to build a fully CRUD website, using two data entities in
        addition to the built-in User model, ideally with one one-to-many
        relationship and one many-to-many relationship. restricted to
        authenticated users. The site must be deployed online using Railway.
        Additionally, we could allow Users to upload images AWS S3 or consume an
        API, I chose to allow users to add images of their clothes as this was
        more relevant to my site. Users must be able to Authenticate using
        Django’s built-in system.
        <br />
        <br />
        <br />
        <br />
        <a
          href="http://sustainableswapfe-production.up.railway.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my site!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/sustainableswapfe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend GitHub Link
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/sustainableswapbackend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend GitHub Link
        </a>
        <br />
        <br />
        <Link to="/projects/inTechJobs">
        Next Project: inTech Jobs
      </Link>
      </div>
    </div>
  );
};

export default SSS;

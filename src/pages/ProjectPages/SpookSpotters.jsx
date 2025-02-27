import React from "react";
import SpookSpottersImage from "../../Images/SpookSpotters.png";
import { Link } from "react-router-dom";
import "../Styles/Projects.css"

const SpookSpotters = () => {
  return (
    <div className="info-card">
      <h3>Unit 2 Project - UK Spook Spotters</h3>
      <br />
      <br />
      <div>
        <img
          src={SpookSpottersImage}
          alt="SpookSpotters"
          className="project-image"
        />
        <br />
        <br />
        For my Unit 2 project, we were required to build a full-stack
        application using Node.js, Express, and MongoDB. We could make the
        application about anything we wanted, I love ghost stories and
        paranormal sightings so I chose to build an app that allowed people to
        record these sightings.
        <br />
        <br />
        We were asked to create a fully CRUD full-stack application. The
        application must have at least two data entities and restricted access
        for users that are not logged in, login must be done by Google Oauth.
        <br />
        <br />
        <br />
        <br />
        <a
          href="https://unique-salmiakki-662491.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my site!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/Project2Frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend GitHub Link
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/Project2Backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend GitHub Link
        </a>
        <br />
        <br />
        <Link to="/projects/Snake">
          Next Project: Snake
        </Link>
      </div>
    </div>
  );
};

export default SpookSpotters;

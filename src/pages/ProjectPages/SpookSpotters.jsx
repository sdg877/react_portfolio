import React from 'react';
import SpookSpottersImage from "../../Images/SpookSpotters.png";

const SpookSpotters = () => {
  return (
    <div className='text-container'>
    <h2>Unit 2 Project - UK Spook Spotters</h2>
    <div>
    <img src={SpookSpottersImage} alt="SpookSpotters" style={{ width: '200px', height: '200px' }} />
        <br />
        For my Unit 2 project, we were required to build a full-stack application using Node.js, Express, and MongoDB. 
        We could make the application about anything we wanted, I love ghost stories and paranormal sightings so I chose to build an app that allowed people to record these sightings. 
        <br />
        We were asked to create a fully CRUD full-stack application. 
        The application must have at least two data entities and restricted access for users that are not logged in, login must be done by Google Oauth.
        <br />
        <a href="https://unique-salmiakki-662491.netlify.app/" target="_blank" rel="noopener noreferrer" className="nav-button">Check out my site!</a>
        <a href="https://github.com/sdg877/Project2Frontend" target="_blank" rel="noopener noreferrer" className="nav-button">Frontend GitHub Link</a>
        <a href="https://github.com/sdg877/Project2Backend" target="_blank" rel="noopener noreferrer" className="nav-button">Backend GitHub Link</a>

    </div>
    </div>
  )
}

export default SpookSpotters

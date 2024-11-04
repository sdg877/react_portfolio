import React from 'react';
import { Link } from 'react-router-dom';
import WeatherAppImage from '../Images/WeatherApp.png';
import SSSImage from '../Images/SSS.png';
import ProjectOneImage from '../Images/ProjectOne.jpg';
import SnakeImage from '../Images/Snake.png';
import InTechImage from '../Images/InTech.png';
import GourmetGalleryImage from '../Images/GourmetGallery.png';
import SpookSpottersImage from '../Images/SpookSpotters.png';

const Projects = () => {
  return (
    <div className="text-container">
      <h2>Projects</h2>
      <h5>Click on an image for more info.</h5>
      <div className="project-container">
        <div className="project-item">
          <h5>Weather App</h5>
          <Link to="/projects/WeatherApp">
            <img src={WeatherAppImage} alt="Weather App" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
        <div className="project-item">
          <h5>Confidential MERN Stack Project</h5>
          <Link to="/projects/ProjectOne">
            <img src={ProjectOneImage} alt="Confidential" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
        <div className="project-item">
          <h5>Gourmet Gallery</h5>
          <Link to="/projects/GourmetGallery">
            <img src={GourmetGalleryImage} alt="Gourmet Gallery" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
        <div className="project-item">
          <h5>Sustainable Swap Shop</h5>
          <Link to="/projects/SSS">
            <img src={SSSImage} alt="Sustainable Swap Shop" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
        <div className="project-item">
          <h5>inTech</h5>
          <Link to="/projects/InTechJobs">
            <img src={InTechImage} alt="inTech" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
        <div className="project-item">
          <h5>Spook Spotters</h5>
          <Link to="/projects/SpookSpotters">
            <img src={SpookSpottersImage} alt="Spook Spotters" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
        <div className="project-item">
          <h5>Snake</h5>
          <Link to="/projects/Snake">
            <img src={SnakeImage} alt="Snake Project" style={{ width: '200px', height: '200px' }} />
          </Link>
        </div>
      </div>
      <br />
      <p>
        <a className="nav-button" href="https://github.com/sdg877" target="_blank" rel="noopener noreferrer">
          For all projects completed, please see my GitHub Page
        </a>
      </p>
    </div>
  );
};

export default Projects;
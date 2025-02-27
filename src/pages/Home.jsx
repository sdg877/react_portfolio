import React from 'react';
import "../Styles/Homepage.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="info-card home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and learn more about me.</p>
      <nav className="home-nav">
        <div className="nav-links-home">
          <Link to="/about"><button className="nav-button">About Me</button></Link>
          <Link to="/education"><button className="nav-button">Education</button></Link>
          <Link to="/experience"><button className="nav-button">Experience</button></Link>
          <Link to="/projects"><button className="nav-button">Projects</button></Link>
          <Link to="/skills"><button className="nav-button">Skills</button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;

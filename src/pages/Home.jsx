import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and learn more about me.</p>
      <nav className="home-nav">
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

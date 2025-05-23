import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Styles/Header.css";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/packages', label: 'Packages' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {links.map(link => (
          link.path !== currentPath && ( 
            <Link 
              key={link.path} 
              to={link.path} 
              className="nav-link" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

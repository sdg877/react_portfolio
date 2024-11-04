import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {links
          .filter(link => link.path !== currentPath) 
          .map(link => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;

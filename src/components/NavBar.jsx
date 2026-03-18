import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";

const NavBar = ({
  showWeather,
  toggleTheme,
  theme,
  location,
  temperature,
  rainChance,
  weatherIcon,
}) => {
  const routerLocation = useLocation();
  const currentPath = routerLocation.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const links = [
    { path: "/about", label: "About" },
    { path: "/background", label: "Background" },
    { path: "/contact", label: "Contact" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/skills", label: "Skills" },
  ];

  return (
    <nav className="navbar" ref={menuRef}>
      <div
        className="hamburger"
        style={{ visibility: currentPath === "/" ? "hidden" : "visible" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="header-branding-navbar">
        <Link
          to="/"
          className="name-title-row"
          style={{ textDecoration: "none" }}
          onClick={() => setIsMenuOpen(false)}
        >
          <h1 className="header-name">Sylvia Drake-Gill</h1>
          <span className="header-divider">|</span>
          <span className="header-slug">Software Engineer</span>
        </Link>
      </div>

      <div className="right-controls">
        {showWeather && (
          <Link
            to="/weather"
            className="weather-info"
            title="Click for detailed weather"
          >
            <h2 className="location">{location}</h2>
            <span className="weather-icon">{weatherIcon}</span>
            <p className="temperature">{temperature}°C</p>
            <p className="rain-chance">💧 {rainChance}%</p>
          </Link>
        )}

        <button className="theme-switch" onClick={toggleTheme}>
          <span className="theme-icon">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
      </div>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {links.map(
          (link) =>
            link.path !== currentPath && (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
        )}
      </div>
    </nav>
  );
};

export default NavBar;

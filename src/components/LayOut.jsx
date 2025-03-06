import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import NavBar from "./Navbar.jsx";
import "../Styles/ComponentStyles.css";
import { useLocation } from "react-router-dom";
import lightLogo from "../Images/sdg-dark.png";
import darkLogo from "../Images/sdg-light.png";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`layout ${theme}`}>
      <div className={`header-container ${isHomePage ? "home-page" : ""}`}>
        {!isHomePage && <NavBar />}
        {(isHomePage || location.pathname !== "/weather") && (
          <Header showWeather={true} toggleTheme={toggleTheme} theme={theme} />
        )}
      </div>

      <div className="home-content">
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Logo"
          className="layout-logo"
        />
        <h2 className="layout-name">Sylvia Drake-Gill</h2>
        <h3 className="layout-sub">London-based Software Engineer</h3>
      </div>
    </div>
  );
};

export default Layout;

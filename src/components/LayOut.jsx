import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import NavBar from "./Navbar.jsx";
import "../App.css";
import "../Styles/Header.css";
import { useLocation, Routes, Route } from "react-router-dom";
import lightLogo from "../Images/sdg-dark.png";
import darkLogo from "../Images/sdg-light.png";
import Weather from "../pages/Weather.jsx";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (!localStorage.getItem("theme")) {
      setTheme(prefersDarkMode ? "dark" : "light");
    }

    document.body.className = theme;
    localStorage.setItem("theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`layout ${theme}`}>
      <div
        className={`header-container ${isHomePage ? "home-page" : ""} ${
          location.pathname === "/weather" ? "weather-page" : ""
        }`}
      >
        {!isHomePage && (
          <div className="navbar-container">
            <NavBar />
          </div>
        )}
        <div className="weather-toggle-wrapper">
          <Header
            toggleTheme={toggleTheme}
            theme={theme}
            showWeather={location.pathname !== "/weather"}
          />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="layout-content">
              <img
                src={theme === "light" ? lightLogo : darkLogo}
                alt="Logo"
                className="layout-logo"
              />
              <h2 className="layout-name">Kitty Coding</h2>

            </div>
          }
        />
        <Route
          path="/weather"
          element={<Weather toggleTheme={toggleTheme} theme={theme} />}
        />
      </Routes>
    </div>
  );
};

export default Layout;

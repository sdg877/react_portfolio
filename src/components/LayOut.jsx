import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import "../App.css";
import "../Styles/Header.css";

const Layout = ({ children, showWeather }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`layout ${theme}`}>
      <Header 
        toggleTheme={toggleTheme} 
        theme={theme} 
        showWeather={showWeather} 
      />

      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import "../App.css";
import "../Styles/Header.css";
import { useLocation, Routes, Route } from "react-router-dom";
import Weather from "../pages/Weather.jsx";

const Layout = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const isHomePage = location.pathname === "/";

  return (
    <div className={`layout ${theme} ${isHomePage ? "home-layout" : ""}`}>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        showWeather={location.pathname !== "/weather"}
      />

      <main>
        <Routes>
          <Route path="/" element={null} />
          <Route
            path="/weather"
            element={<Weather toggleTheme={toggleTheme} theme={theme} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;

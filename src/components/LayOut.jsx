import React from 'react';
import Header from './Header.jsx';
import NavBar from './Navbar.jsx';
import "../Styles/ComponentStyles.css";
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="layout">
      <div className={`header-container ${isHomePage ? 'home-page' : ''}`}>
        {!isHomePage && <NavBar />}
        {(isHomePage || location.pathname !== '/weather') && (
          <Header showWeather={true} />
        )}
      </div>

      {isHomePage && (
        <div className="home-content">
          <h1 className="layout-title">Sylvia Drake-Gill</h1>
          <h2 className="layout-sub">London-based Software Engineer</h2>
        </div>
      )}
    </div>
  );
};

export default Layout;

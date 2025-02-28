import React from 'react';
import Header from './Header.jsx';
import NavBar from './Navbar.jsx'; 
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      {location.pathname !== '/weather' && <Header />} 
      {location.pathname !== '/' && <NavBar />} 
      <h1 className="layout-title">Sylvia Drake-Gill</h1>
      <h2>London-based Software Engineer</h2>
    </div>
  );
};

export default Layout;

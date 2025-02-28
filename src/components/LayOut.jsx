import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      {location.pathname !== '/weather' && <Header />}
      <h1 className="layout-title">Sylvia Drake-Gill</h1>
      <h2>London-based Software Engineer</h2>
    </div>
  );
};

export default Layout;

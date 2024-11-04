import React from 'react';
import SylviaImage from "../Images/Sylvia.jpeg"; 

const LayOut = () => {
  return (
    <div className="layout">
      <img src={SylviaImage} alt="Sylvia Drake-Gill" className="profile-image" />
      <h1 className="layout-title">Sylvia Drake-Gill</h1>
      <h2>London-based Software Engineer</h2>
    </div>
  );
};

export default LayOut;

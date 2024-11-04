import React from 'react';
import SSSImage from '../../Images/SSS.png';

const SSS = () => {
  return (
    <div className='info-card'>
    <h2>Unit 4 Project - Sustainable Swap Shop</h2>
    <div>
    <img src={SSSImage} alt="Sustainable Swap Shop" style={{ width: '200px', height: '200px' }} />
        <br />
        For my Unit 4 project, we were required to build a full-stack web application using the Python-based Django Rest Framework. 
        I am interested in the Environment and fast fashion so decided to build a clothes swap site. 
        <br />
        We were asked to build a fully CRUD website, using two data entities in addition to the built-in User model, ideally with one one-to-many relationship and one many-to-many relationship. 
        restricted to authenticated users. The site must be deployed online using Railway. 
        Additionally, we could allow Users to upload images AWS S3 or consume an API, I chose to allow users to add images of their clothes as this was more relevant to my site.        Users must be able to Authenticate using Django’s built-in system and CRUD must be 
        <br />
        <a href="http://sustainableswapfe-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="nav-button">Check out my site!</a>
        <a href="https://github.com/sdg877/sustainableswapfe" target="_blank" rel="noopener noreferrer" className="nav-button">Frontend GitHub Link</a>
        <a href="https://github.com/sdg877/sustainableswapbackend" target="_blank" rel="noopener noreferrer" className="nav-button">Backend GitHub Link</a>

    </div>
    </div>
  )
}

export default SSS

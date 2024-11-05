import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3 className="footer-heading">Contact Me</h3>
          <p>
            <a href="mailto:sdrakegill@gmail.com" className="footer-link">Email</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/sdrakegill/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </p>
        </div>
        
        <div className="footer-social">
          <h3 className="footer-heading">Follow Me</h3>
          <p>
            <a href="https://github.com/sdg877" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">© 2024 Sylvia Drake-Gill. All rights reserved. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;

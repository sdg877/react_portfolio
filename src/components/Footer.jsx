import React from "react";
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="footer-text">
          © 2026 Sylvia Drake-Gill
          <br/>
          <a 
            href="https://github.com/sdg877/react_portfolio" 
            target="_blank" 
            rel="noreferrer"
            className="custom-link-footer"
          >
            View Source
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

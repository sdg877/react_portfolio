import React from 'react'

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-container">
    <div className="footer-contact">
      <h3>Contact Me</h3>
      <p>Email: sdrakegill@gmail.com</p>
      <p>
        <a href="https://www.linkedin.com/in/sdrakegill/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
    
    <div className="footer-social">
      <h3>Follow Me</h3>
      <a href="https://github.com/sdg877" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    
  </div>

  <div className="footer-bottom">
    <p>© 2024 Sylvia Drake-Gill. All rights reserved.</p>
    <p>Built with React.</p>
  </div>
</footer>

  )
}

export default Footer

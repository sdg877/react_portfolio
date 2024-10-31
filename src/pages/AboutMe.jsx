import React from 'react'

const AboutMe = () => {
  return (
    <div>
    <h3>About Me</h3>
    <p className="text-container-index"> 
      An experienced administrator with a diverse background across TV, Advertising, and Publishing industries. 
      Driven by a passion for learning, I ventured into Software Engineering seeking a challenge and a fresh career direction. 
      My journey began with an access course with Open University in Maths, Science, and Technology achieving a distinction (95%) amidst the 2020 lockdown. 
      Subsequently, immersing myself in coding workshops allowed me to build a passion for technology and coding. 
      Despite fracturing my dominant elbow during my Software Engineering Immersive course, I pushed through showing dedication and perseverance. 
      With two decades of experience as a confident problem solver and team player, I am now eager to showcase my skills in a Junior Full-Stack Developer role 
      to contribute to a dynamic team and continue my professional growth. 
      <br /><br />
      I'm a born and bred Londoner, originating from West London and made the (traitorous) move to South London seven years ago. I live with my boyfriend and two cats. I enjoy swimming as it clears my head, I love finishing a session off with half an hour in the sauna.
      I'm passionate about cooking and love trying out new foods, I'm a particular fan of layered dishes. 
      I love travelling, having visited 10s of countries and lived in Germany and Australia. 
      Although my roots are now firmly set in London, the next countries on my list to visit are South Korea, Japan and Mexico.
    </p>
    <br />
    <div>
      Some of the countries I have visited: 
      <div className="flags">🇧🇦🇧🇪🇧🇬🇨🇦🇨🇺🇭🇷🇪🇬🇪🇸🇫🇯🇫🇷🇫🇴🇬🇷🇭🇺🇮🇪🇮🇹🇳🇱🇳🇿🇵🇱🇵🇹🇩🇰🇹🇷🇺🇸🇺🇦🇲🇦</div>
    </div>
    <div>
      <p className="contact"><strong>Contact Me</strong></p>
      <div style={{ marginBottom: '20px' }}>
        <a className="nav-button" href="mailto:sdrakegill@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a className="nav-button" href="https://www.linkedin.com/in/sdrakegill/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>
);
}

export default AboutMe

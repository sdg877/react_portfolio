import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="edu-exp-container">
      <h3 className="edu-exp-title">Experience</h3>
      <div className="edu-exp-content">
        <div className="exp-item">
          <strong>Freelance Software Engineer | Feb 2024 – Present</strong>
          <p>Full-stack development and technical consultancy focusing on Python and the MERN stack.</p>
          <ul className="edu-exp-list">
            <li>
              <strong>Confidential MERN App:</strong> Engineered compliance workflows with 11 interconnected models.
              <Link to="/projects/ProjectOne" className="global-link"> → View Project</Link>
            </li>
            <li>
              <strong>Heather Treharne Jones Portfolio:</strong> Responsive artist site with a custom CMS.
              <Link to="/projects/HTJ" className="global-link"> → View Project</Link>
            </li>
            <li><strong>CarbonCalc:</strong> Sustainability platform using React and Recharts.</li>
            <li><strong>AI Integration:</strong> Interactive chatbot leveraging OpenAI API.</li>
          </ul>
        </div>

        <div className="exp-item">
          <strong>Software Engineering Bootcamp, General Assembly | 2023 - 2024</strong>
          <p>Intensive training in React, Node.js, and MongoDB.</p>
          <Link to="/projects" className="global-link">View All Projects</Link>
        </div>

        <div className="exp-item">
          <strong>Frontiers Media Ltd, Office Manager | Jun 21 – Sept 23</strong>
          <p>Managed UK operations and a team supporting 1,000+ remote employees.</p>
        </div>

        <div className="exp-item">
          <strong>The Maverick Group, Office Manager | Sept 17 – Nov 19</strong>
          <p>Operations support for a 120-person agency.</p>
        </div>

        <div className="exp-item">
          <strong>BBC, Various Team Assistant Positions | Jan 10 - Jun 14</strong>
          <p>PA support and coordination across BBC teams.</p>
        </div>

        <a href="https://www.linkedin.com/in/sdrakegill/" target="_blank" rel="noopener noreferrer" className="global-link" style={{marginTop: "20px", display: "block"}}>
          Full history on LinkedIn →
        </a>
      </div>
    </div>
  );
};

export default Experience;
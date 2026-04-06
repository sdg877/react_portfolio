import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="edu-exp-container">
      <h3 className="edu-exp-title">Experience</h3>
      <div className="edu-exp-content">
        
        <div className="exp-item">
          <strong>Freelance Software Engineer | Feb 2024 – Present</strong>
          <p>
            Full-stack development and technical consultancy focusing on Python
            and the MERN stack.
          </p>
          <Link to="/projects" className="exp-link">
            → View Projects Worked On
          </Link>
        </div>

        <div className="exp-item">
          <strong>
            Software Engineering Bootcamp, General Assembly | 2023 - 2024
          </strong>
          <p>
            Completed an intensive twelve-week course focused on full-stack
            software engineering, mastering modern frameworks and agile
            methodologies.
          </p>
        </div>

        <div className="exp-item">
          <strong>
            Frontiers Media Ltd, Office Manager | Jun 21 – Sept 23
          </strong>
          <p>
            Managed UK operations and supervised a team of three. I successfully
            project-managed an office move for 1,000+ staff and maintained a
            SharePoint site for the workplace team to streamline internal
            communications and data management.
          </p>
        </div>

        <div className="exp-item">
          <strong>The Maverick Group, Office Manager | Sept 17 – Nov 19</strong>
          <p>
            Supported 120 staff and project-managed a major office expansion and
            full building refurbishment.
          </p>
        </div>

        <div className="exp-item">
          <strong>
            BBC, Various Team Assistant Positions | Jan 10 - Jun 14
          </strong>
          <p>
            Supported senior directors, managing comprehensive administration
            and organising events for high-profile projects like Frozen Planet.
            I also administered the BBC Pictures website, managing digital
            assets and user access.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/sdrakegill/"
          target="_blank"
          rel="noopener noreferrer"
          className="exp-link"
        >
          Full history on LinkedIn →
        </a>
      </div>
    </div>
  );
};

export default Experience;
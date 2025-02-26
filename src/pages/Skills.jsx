import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <div className="info-card">
      <h3>Skills</h3>

      <div className="skill-group">
        <strong className="skill-group-title">Frontend Skills</strong>
        <div className="skill-icons">
          <i className="devicon-react-original-wordmark" title="React"></i>
          <i className="devicon-vuejs-plain-wordmark" title="Vue.js"></i>
          <i className="devicon-bootstrap-plain-wordmark" title="Bootstrap"></i>
          <i className="devicon-css3-plain-wordmark" title="CSS3"></i>
          <i className="devicon-html5-plain-wordmark" title="HTML5"></i>
          <i className="devicon-javascript-plain" title="JavaScript"></i>
          <i className="devicon-axios-plain-wordmark" title="Axios"></i>
        </div>
      </div>

      <br />

      <div className="skill-group">
        <strong className="skill-group-title">Backend Skills</strong>
        <div className="skill-icons">
          <i className="devicon-nodejs-plain-wordmark" title="Node.js"></i>
          <i className="devicon-express-original-wordmark" title="Express"></i>
          <i className="devicon-django-plain-wordmark" title="Django"></i>
          <i
            className="devicon-djangorest-line-wordmark"
            title="Django REST Framework"
          ></i>
          <i className="devicon-mongodb-plain-wordmark" title="MongoDB"></i>
          <i className="devicon-mongoose-original-wordmark" title="Mongoose"></i>
          <i className="devicon-postgresql-plain-wordmark" title="PostgreSQL"></i>
          <i className="devicon-python-plain-wordmark" title="Python"></i>
          <i className="devicon-oauth-plain" title="OAuth"></i>
          <i
            className="devicon-azuresqldatabase-plain"
            title="Azure SQL Database"
          ></i>
        </div>
      </div>

      <br />

      <div className="skill-group">
        <strong className="skill-group-title">Tools & General Skills</strong>
        <div className="skill-icons">
          <i
            className="devicon-amazonwebservices-plain-wordmark"
            title="AWS"
          ></i>
          <i className="devicon-git-plain-wordmark" title="Git"></i>
          <i className="devicon-github-original" title="GitHub"></i>
          <i className="devicon-postman-plain-wordmark" title="Postman"></i>
        </div>
      </div>

      <br />

      <div className="skill-group">
        <strong className="skill-group-title">Currently Learning</strong>
        <div className="skill-icons">
          <i className="devicon-csharp-plain-wordmark" title="C#"></i>
          <i className="devicon-java-plain-wordmark" title="Java"></i>
          <i className="devicon-typescript-plain" title="TypeScript"></i>
        </div>
      </div>

      <br />

      <div className="skill-group">
        <strong className="skill-group-title">Soft Skills</strong>
        <p className="soft-skills">
          Organisation, Communication, Team Work, Team Management,
          Problem-Solving, Project Management.
        </p>
      </div>
    </div>
  );
};

export default Skills;

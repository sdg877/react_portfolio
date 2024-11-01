import React from 'react';

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <div className="skill-icons">
        <i className="devicon-amazonwebservices-plain-wordmark"></i>
        <i className="devicon-axios-plain-wordmark"></i>
        <i className="devicon-bootstrap-plain-wordmark"></i>
        <i className="devicon-css3-plain-wordmark"></i>
        <i className="devicon-django-plain-wordmark"></i>
        <i className="devicon-djangorest-line-wordmark"></i>
        <i className="devicon-express-original-wordmark"></i>
        <i className="devicon-git-plain-wordmark"></i>
        <i className="devicon-github-original-wordmark colored"></i>
        <i className="devicon-html5-plain-wordmark"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-mongodb-plain-wordmark"></i>
        <i className="devicon-mongoose-original-wordmark"></i>
        <i className="devicon-nodejs-plain-wordmark"></i>
        <i className="devicon-oauth-plain colored"></i>
        <i className="devicon-postgresql-plain-wordmark"></i>
        <i className="devicon-postman-plain-wordmark"></i>
        <i className="devicon-python-plain-wordmark"></i>
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-azuresqldatabase-plain"></i>
        <i className="devicon-vuejs-plain-wordmark"></i>
      </div>

      <br />

      <div className="skill-group">
        <strong className="skill-group-title">Currently Learning</strong>
        <div className="skill-icons">
          <i className="devicon-csharp-plain-wordmark"></i>
          <i className="devicon-java-plain-wordmark"></i>
          <i className="devicon-typescript-plain"></i>
        </div>
      </div>

      <br />

      <div className="skill-group">
        <strong className="skill-group-title">Soft Skills</strong>
        <p className="soft-skills">
          Organisation, Communication, Team Work, Team Management, Problem-Solving, Project Management.
        </p>
      </div>
    </div>
  );
};

export default Skills;

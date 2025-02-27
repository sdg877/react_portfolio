import React from "react";
import ProjectOneImage from "../../Images/ProjectOne.jpg";
import { Link } from "react-router-dom";
import "../Styles/Projects.css"

const ProjectOne = () => {
  return (
    <div className="info-card">
      <h3>Confidential MERN Stack Project</h3>
      <br />
      <br />
      <div>
        <img
          src={ProjectOneImage}
          alt="Project One"
          className="project-image"
        />
        <br />
        <br />
        This MERN stack project was developed for a client with specialised
        workflow requirements and due to the confidential nature of this
        project, specific details about its users, data, and workflows cannot be
        disclosed. This project took 130 hours to complete and I worked alone.
        The application addresses highly sensitive and regulated tasks, and its
        design and functionality were tailored to meet the unique needs of a
        specialised environment. Protecting the privacy of the users and the
        nature of the workflows was a core priority throughout development, and
        descriptions here focus on the technical scope and challenges rather
        than specific implementation details.
        <br />
        <br />
        The project is a comprehensive workflow management tool designed for
        professionals to efficiently track and support complex organisational
        needs and compliance workflows. With a robust architecture featuring 11
        interconnected data models, this application seamlessly organizes,
        links, and manages data across different modules and user needs.
        <br />
        <br />
        A central calendar system provides task views, allowing users to track
        and monitor compliance and support activities. A task list and activity
        log enable real-time updates on task statuses, while an automated
        scheduling system triggers specific workflows based on user-inputted
        dates, ensuring timely completion of critical activities according to
        precise legal or regulatory deadlines. The application includes a
        traffic light system that visually signals task progress and deadlines,
        enhancing ease of use and prioritization.
        <br />
        <br />
        Several key challenges were met and overcome in this project. One
        involved the dynamic display of attendee and contact data within a
        unified table, where various data points from multiple database sources
        needed to be accurately retrieved and displayed in a single, editable
        view. Another was building a context-sensitive help system, which
        automatically presents users with tailored guidance and tips depending
        on the urgency of upcoming tasks. Additionally, the app provides users
        with downloadable email templates, allowing for seamless, efficient
        communication.
        <br />
        <br />
        <Link to="/projects/GourmetGallery">
        Next Project: Gourmet Gallery
      </Link>
      </div>
    </div>
  );
};

export default ProjectOne;

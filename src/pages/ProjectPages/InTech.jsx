import React from "react";
import InTechImage from "../../Images/InTech.png";

const InTech = () => {
  return (
    <div className="info-card">
      <h3>Unit 3 Project - inTech Jobs</h3>
      <br />
      <br />
      <div>
        <img
          src={InTechImage}
          alt="inTech"
          className="project-image"
        />
        <br />
        <br />
        For Project 3, we were put into groups of three. We decided we wanted to
        build a site that would be useful to our cohort once we finished the
        course so we created a job board, we decided to use both an external API
        and to make it fully CRUD.
        <br />
        <br />
        The brief was to create a MERN stack website which should either be
        fully CRUD or include an external API, we decided to use both as this
        would fit our plan. We used the Adzuna API to pull jobs with the
        keywords Junior and Developer. We then coded it to allow the user to log
        in and save jobs, the user could also update the saved jobs section to
        reflect where they were in the interview process.
        <br />
        <br />
        I was responsible for pulling the data into the job cards from the
        external API, linking the location via Google maps, redirecting to the
        login page if the user tries to save a job and is not authenticated and
        we worked as a team on authorization and linking the API.
        <br />
        <br />
        <a
          href="https://intechjobs.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Check out our site!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/InTechFrontend"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Frontend GitHub Link
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/InTechBackend"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          Backend GitHub Link
        </a>
      </div>
    </div>
  );
};

export default InTech;

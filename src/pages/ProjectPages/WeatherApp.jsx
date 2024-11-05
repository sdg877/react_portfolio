import React from "react";
import WeatherAppImage from "../../Images/WeatherApp.png";
import { Link } from "react-router-dom";

const WeatherApp = () => {
  return (
    <div className="info-card">
      <h3>Weather App</h3>
      <br />
      <br />
      <div>
        <img
          src={WeatherAppImage}
          alt="Weather App"
          className="project-image"
        />
                <br />
                <br />
        This weather application, based on a Traversy Media tutorial, provides
        current conditions, 7-day and 24-hour forecasts based on the user's
        location or postcode. Built with HTML, CSS, and JavaScript, it utilizes
        external APIs to fetch and display weather data dynamically. I extended
        the original tutorial by adding features such as UV index, sunrise and
        sunset times, and postcode search functionality, adding an additional
        API.
        <br />
        <br />
        <br />
        <br />
        <a
          href="https://appforlocalweather.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my site!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/weather_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
        <br />
        <br />
        <Link to="/projects/ProjectOne">
        Next Project: Project One
      </Link>
      </div>
    </div>
  );
};

export default WeatherApp;

import React from 'react';
import WeatherAppImage from "../../Images/WeatherApp.png";

const WeatherApp = () => {
  return (
    <div className='text-container'>
    <h2>Weather App</h2>
    <div>
    <img src={WeatherAppImage} alt="Weather App" style={{ width: '200px', height: '200px' }} />
        <br />
        This weather application, based on a Traversy Media tutorial, provides current conditions, 7-day and 24-hour forecasts based on the user's location or postcode. Built with HTML, CSS, and JavaScript, it utilizes external APIs to fetch and display weather data dynamically.  I extended the original tutorial by adding features such as UV index, sunrise and sunset times, and postcode search functionality, adding an additional API.
        <br />
        <a href="https://appforlocalweather.netlify.app" target="_blank" rel="noopener noreferrer" className="nav-button">Deployed Site</a>
        <a href="https://github.com/sdg877/weather_app" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub Link</a>

    </div>
    </div>
  )
}

export default WeatherApp

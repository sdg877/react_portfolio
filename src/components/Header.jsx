import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = ({ showWeather, toggleTheme, theme }) => {
  const [location, setLocation] = useState("Loading...");
  const [temperature, setTemperature] = useState(null);
  const [rainChance, setRainChance] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("🌤️");

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        if (!fallback) {
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const locationName =
            locationResponse.data.address.neighbourhood ||
            locationResponse.data.address.suburb ||
            locationResponse.data.address.borough ||
            locationResponse.data.address.city_district ||
            locationResponse.data.address.city ||
            locationResponse.data.address.town ||
            locationResponse.data.address.state ||
            "Your Area";
          setLocation(locationName);
        } else {
          setLocation("London (Default)");
        }

        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode&timezone=auto`
        );

        const currentHour = new Date().getHours();
        setTemperature(
          Math.round(weatherResponse.data.hourly.temperature_2m[currentHour])
        );
        setRainChance(
          weatherResponse.data.hourly.precipitation_probability[currentHour]
        );

        const weatherCode =
          weatherResponse.data.hourly.weathercode[currentHour];
        setWeatherIcon(getWeatherIcon(weatherCode));
      } catch (error) {
        console.error("Error fetching weather data for header:", error);
        setLocation("Unable to fetch location");
        setTemperature("--");
        setRainChance("--");
        setWeatherIcon("❓");
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          () => {
            fetchWeather(51.5074, -0.1278, true);
          }
        );
      } else {
        fetchWeather(51.5074, -0.1278, true);
      }
    };

    const getWeatherIcon = (weatherCode) => {
      const weatherIcons = {
        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌦️",
        61: "🌧️",
        71: "❄️",
        80: "🌧️",
        95: "⛈️",
      };
      return weatherIcons[weatherCode] || "🌈";
    };

    getUserLocation();
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <button className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className="right-section">
          <div className="weather-toggle-container">
            {showWeather && (
              <Link
                to="/weather"
                className="weather-info"
                title="Click to see detailed weather information"
              >
                <h2 className="location">{location}</h2>
                <span className="weather-icon">{weatherIcon}</span>
                <p className="temperature">{temperature}°C</p>
                <p className="rain-chance">💧 {rainChance}%</p>
              </Link>
            )}
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
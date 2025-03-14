import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Header.css";

const Header = ({ showWeather, toggleTheme, theme }) => {
  const [location, setLocation] = useState("Loading...");
  const [temperature, setTemperature] = useState(null);
  const [rainChance, setRainChance] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("🌤️");

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; 

        if (!fallback) {
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          let locationName =
            locationResponse.data.address.neighbourhood ||
            locationResponse.data.address.suburb ||
            locationResponse.data.address.village ||
            locationResponse.data.address.town ||
            locationResponse.data.address.city ||
            locationResponse.data.address.county ||
            locationResponse.data.address.state ||
            "Your Area";

          setLocation(locationName);
        } else {
          setLocation("London");
        }

        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode&timezone=${encodeURIComponent(
            userTimeZone
          )}`
        );

        const currentHour = new Date().getHours();
        const temp = Math.round(weatherResponse.data.hourly.temperature_2m[currentHour]);
        const rainProb = weatherResponse.data.hourly.precipitation_probability[currentHour];
        const weatherCode = weatherResponse.data.hourly.weathercode[currentHour];

        setTemperature(temp);
        setRainChance(rainProb);
        setWeatherIcon(getWeatherIcon(weatherCode, rainProb, new Date().toISOString()));
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLocation("Unavailable");
        setTemperature("--");
        setRainChance("--");
        setWeatherIcon("❓");
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          () => {
            fetchWeather(51.5074, -0.1278, true); // Fallback to London
          }
        );
      } else {
        fetchWeather(51.5074, -0.1278, true);
      }
    };

    getUserLocation();
  }, []);

  const getWeatherIcon = (weatherCode, rainChance, timeString) => {
    const hour = new Date(timeString).getHours();
    const isDayTime = hour >= 6 && hour < 20;

    const weatherIcons = {
      0: isDayTime ? "☀️" : "🌙",
      1: isDayTime ? "🌤️" : "🌙",
      2: "⛅",
      3: "☁️",
      45: "🌫️",
      48: "🌫️",
      51: "🌦️",
      53: "🌦️",
      55: "🌧️",
      56: "🌧️",
      57: "🌧️",
      61: "🌧️",
      63: "🌧️",
      65: "🌧️",
      66: "🌧️",
      67: "🌧️",
      71: "❄️",
      73: "❄️",
      75: "❄️",
      77: "🌨️",
      80: "🌧️",
      81: "🌧️",
      82: "🌧️",
      85: "❄️",
      86: "❄️",
      95: "⛈️",
      96: "⛈️",
      99: "⛈️",
    };

    if (rainChance === 0 && weatherCode >= 51 && weatherCode <= 82) {
      return "☁️"; // Cloud instead of rain if no precipitation expected
    }

    return weatherIcons[weatherCode] || "☁️";
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="weather-toggle-container">
          {showWeather && (
            <Link to="/weather" className="weather-info" title="Click for detailed weather">
              <h2 className="location">{location}</h2>
              <span className="weather-icon">{weatherIcon}</span>
              <p className="temperature">{temperature}°C</p>
              <p className="rain-chance">💧 {rainChance}%</p>
            </Link>
          )}
          <button className="theme-switch" onClick={toggleTheme}>
            <span className="theme-icon">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

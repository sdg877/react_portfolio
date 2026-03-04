import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Navbar.jsx";
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
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
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
            userTimeZone,
          )}`,
        );

        const currentHour = new Date().getHours();
        const temp = Math.round(
          weatherResponse.data.hourly.temperature_2m[currentHour],
        );
        const rainProb =
          weatherResponse.data.hourly.precipitation_probability[currentHour];
        const weatherCode =
          weatherResponse.data.hourly.weathercode[currentHour];

        setTemperature(temp);
        setRainChance(rainProb);
        setWeatherIcon(
          getWeatherIcon(weatherCode, rainProb, new Date().toISOString()),
        );
      } catch (error) {
        setLocation("Unavailable");
        setTemperature("--");
        setRainChance("--");
        setWeatherIcon("❓");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          fetchWeather(position.coords.latitude, position.coords.longitude),
        () => fetchWeather(51.5074, -0.1278, true),
      );
    } else {
      fetchWeather(51.5074, -0.1278, true);
    }
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
      return "☁️";
    }

    return weatherIcons[weatherCode] || "☁️";
  };

  return (
    <header className="header">
      <NavBar
        showWeather={showWeather}
        toggleTheme={toggleTheme}
        theme={theme}
        location={location}
        temperature={temperature}
        rainChance={rainChance}
        weatherIcon={weatherIcon}
      />
    </header>
  );
};

export default Header;

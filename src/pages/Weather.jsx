import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Weather.css";

const Weather = () => {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [location, setLocation] = useState("Loading...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        if (!fallback) {
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const locationName =
            locationResponse.data.address.city ||
            locationResponse.data.address.town ||
            locationResponse.data.address.village ||
            locationResponse.data.address.state ||
            "Your Area";
          setLocation(locationName);
        } else {
          setLocation("London (Default)");
        }

        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,precipitation_probability,uv_index,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_mean,uv_index_max&timezone=Europe%2FLondon`
        );

        const currentHour = new Date().getHours();

        const hourlyData = weatherResponse.data.hourly.time
          .slice(currentHour, currentHour + 12)
          .map((time, index) => ({
            time,
            temperature: weatherResponse.data.hourly.temperature_2m[currentHour + index],
            weatherCode: weatherResponse.data.hourly.weathercode[currentHour + index],
            rainChance: weatherResponse.data.hourly.precipitation_probability[currentHour + index],
            uvIndex: weatherResponse.data.hourly.uv_index[currentHour + index],
            feelsLike: weatherResponse.data.hourly.apparent_temperature[currentHour + index],
          }));

        const dailyData = weatherResponse.data.daily.time.map((date, index) => ({
          date,
          tempMin: weatherResponse.data.daily.temperature_2m_min[index],
          tempMax: weatherResponse.data.daily.temperature_2m_max[index],
          weatherCode: weatherResponse.data.daily.weathercode[index],
          rainChance: weatherResponse.data.daily.precipitation_probability_mean[index],
          uvIndex: weatherResponse.data.daily.uv_index_max[index],
        }));

        setHourlyWeather(hourlyData);
        setDailyWeather(dailyData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Unable to fetch weather data.");
        setLoading(false);
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
            console.warn(
              "Location access denied. Using default location (London)."
            );
            fetchWeather(51.5074, -0.1278, true);
          }
        );
      } else {
        console.warn(
          "Geolocation is not supported. Using default location (London)."
        );
        fetchWeather(51.5074, -0.1278, true);
      }
    };

    getUserLocation();
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/London",
    });
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    });
  };

  return (
    <div className="weather-container">
      <h2>Weather in {location}</h2>

      <h3>Next 12 Hours</h3>
      <div className="weather-card-container">
        {hourlyWeather.map((hour, index) => (
          <div key={index} className="weather-card">
            <p>{formatTime(hour.time)}</p>
            <p className="weather-icon">{getWeatherIcon(hour.weatherCode)}</p>
            <p className="temp"> {Math.round(hour.temperature)}°C</p>
            <p className="weatherdetail">Feels like: {Math.round(hour.feelsLike)}°C</p>
            <p className="weatherdetail">Rain: {hour.rainChance}%</p>
            <p className="weatherdetail">UV Index: {hour.uvIndex}</p>
          </div>
        ))}
      </div>

      <h3>Next 7 Days</h3>
      <div className="weather-card-container">
        {dailyWeather.map((day, index) => (
          <div key={index} className="weather-week-card">
            <p>{formatDate(day.date)}</p>
            <p className="weather-icon">{getWeatherIcon(day.weatherCode)}</p>
            <p>
              {Math.round(day.tempMin)}°C - {Math.round(day.tempMax)}°C
            </p>
            <p>Rain: {day.rainChance}%</p>
            <p>UV Index: {day.uvIndex}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;

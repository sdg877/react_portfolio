import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../Styles/Weather.css";
import "../Styles/Header.css";

const Weather = () => {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [location, setLocation] = useState("Loading...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        if (!fallback) {
          try {
            const locationResponse = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            );
            const addr = locationResponse.data.address;
            const locationName =
              addr.town || addr.village || addr.suburb || addr.city || "Merton";
            setLocation(locationName);
          } catch (locError) {
            setLocation("Merton");
          }
        } else {
          setLocation("Merton");
        }

        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,precipitation_probability,uv_index,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_mean,uv_index_max,sunrise,sunset&timezone=${encodeURIComponent(userTimeZone)}`,
        );

        const currentHour = new Date().getHours();
        const todaySunrise = weatherResponse.data.daily.sunrise[0];
        const todaySunset = weatherResponse.data.daily.sunset[0];

        const hourlyData = weatherResponse.data.hourly.time
          .slice(currentHour, currentHour + 12)
          .map((time, index) => ({
            time,
            temperature:
              weatherResponse.data.hourly.temperature_2m[currentHour + index],
            weatherCode:
              weatherResponse.data.hourly.weathercode[currentHour + index],
            rainChance:
              weatherResponse.data.hourly.precipitation_probability[
                currentHour + index
              ],
            uvIndex: weatherResponse.data.hourly.uv_index[currentHour + index],
            feelsLike:
              weatherResponse.data.hourly.apparent_temperature[
                currentHour + index
              ],
            sunrise: todaySunrise,
            sunset: todaySunset,
          }));

        const dailyData = weatherResponse.data.daily.time
          .slice(1)
          .map((date, index) => ({
            date,
            tempMin: weatherResponse.data.daily.temperature_2m_min[index + 1],
            tempMax: weatherResponse.data.daily.temperature_2m_max[index + 1],
            weatherCode: weatherResponse.data.daily.weathercode[index + 1],
            rainChance:
              weatherResponse.data.daily.precipitation_probability_mean[
                index + 1
              ],
            uvIndex: weatherResponse.data.daily.uv_index_max[index + 1],
            sunrise: weatherResponse.data.daily.sunrise[index + 1],
            sunset: weatherResponse.data.daily.sunset[index + 1],
          }));

        setHourlyWeather(hourlyData);
        setDailyWeather(dailyData);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError("Unable to fetch weather data.");
        setLoading(false);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) =>
            fetchWeather(position.coords.latitude, position.coords.longitude),
          () => fetchWeather(51.415, -0.17, true),
        );
      } else {
        fetchWeather(51.415, -0.17, true);
      }
    };

    getUserLocation();
  }, []);

  const getWeatherIcon = (
    weatherCode,
    rainChance,
    timeString,
    sunriseStr,
    sunsetStr,
  ) => {
    const currentTime = new Date(timeString).getTime();
    const sunriseTime = new Date(sunriseStr).getTime();
    const sunsetTime = new Date(sunsetStr).getTime();
    const isDayTime = currentTime >= sunriseTime && currentTime < sunsetTime;

    const weatherIcons = {
      0: isDayTime ? "☀️" : "🌙",
      1: isDayTime ? "🌤️" : "🌙",
      2: isDayTime ? "⛅" : "☁️",
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

    if (rainChance === 0 && weatherCode >= 51 && weatherCode <= 82) return "☁️";
    return weatherIcons[weatherCode] || (isDayTime ? "☀️" : "🌙");
  };

  const formatTime = (timeString) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(timeString).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: userTimeZone,
    });
  };

  const formatDate = (datetime) => {
    return new Date(datetime).toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    });
  };

  return (
    <div className="weather-container">
      <motion.div
        className="weather-content-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {loading ? (
          <div className="status-message-wrapper">
            <div className="weather-card status-card">
              <p>Gathering data for Merton...</p>
            </div>
          </div>
        ) : error ? (
          <div className="status-message-wrapper">
            <div className="weather-card status-card">
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="location-title">Weather in {location}</h2>
            <h3 className="weather-title">Next 12 Hours</h3>
            <div className="weather-card-container">
              {hourlyWeather.map((hour, index) => (
                <div key={index} className="weather-card">
                  <p>{formatTime(hour.time)}</p>
                  <p className="weather-icon">
                    {getWeatherIcon(
                      hour.weatherCode,
                      hour.rainChance,
                      hour.time,
                      hour.sunrise,
                      hour.sunset,
                    )}
                  </p>
                  <p className="temp">{Math.round(hour.temperature)}°C</p>
                  <p className="weatherdetail">
                    Feels like: {Math.round(hour.feelsLike)}°C
                  </p>
                  <p className="weatherdetail">Rain: {hour.rainChance}%</p>
                  <p className="weatherdetail">UV Index: {hour.uvIndex}</p>
                </div>
              ))}
            </div>

            <h3 className="weather-title">The Coming Week</h3>
            <div className="weather-card-container">
              {dailyWeather.map((day, index) => (
                <div key={index} className="weather-card">
                  <p>{formatDate(day.date)}</p>
                  <p className="weather-icon">
                    {getWeatherIcon(
                      day.weatherCode,
                      day.rainChance,
                      day.date,
                      day.sunrise,
                      day.sunset,
                    )}
                  </p>
                  <p className="temp">
                    {Math.round(day.tempMin)}°C - {Math.round(day.tempMax)}°C
                  </p>
                  <p className="weatherdetail">Rain: {day.rainChance}%</p>
                  <p className="weatherdetail">UV Index: {day.uvIndex}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Weather;

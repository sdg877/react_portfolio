import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import '../Styles/Weather.css';

const Header = () => {
  const [location, setLocation] = useState('Loading...');
  const [temperature, setTemperature] = useState(null);
  const [rainChance, setRainChance] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState('🌤️');

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        if (!fallback) {
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const locationName = locationResponse.data.address.city || 
                               locationResponse.data.address.town || 
                               locationResponse.data.address.village || 
                               locationResponse.data.address.state || 
                               'Your Area';
          setLocation(locationName);
        } else {
          setLocation('London (Default)');
        }

        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode&timezone=Europe/London`
        );

        const currentHour = 0;
        setTemperature(Math.round(weatherResponse.data.hourly.temperature_2m[currentHour]));
        setRainChance(weatherResponse.data.hourly.precipitation_probability[currentHour]);

        const weatherCode = weatherResponse.data.hourly.weathercode[currentHour];
        setWeatherIcon(getWeatherIcon(weatherCode));
      } catch (error) {
        console.error('Error fetching weather data for header:', error);
        setLocation('Unable to fetch location');
        setTemperature('--');
        setRainChance('--');
        setWeatherIcon('❓');
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

    getUserLocation();
  }, []);

  const getWeatherIcon = (weatherCode) => {
    const weatherIcons = {
      0: '☀️', 
      1: '🌤️', 
      2: '⛅', 
      3: '☁️', 
      45: '🌫️', 
      48: '🌫️', 
      51: '🌦️', 
      61: '🌧️', 
      71: '❄️', 
      80: '🌧️', 
      95: '⛈️', 
    };
    return weatherIcons[weatherCode] || '🌈';
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="navbar-container">
          <Navbar />
        </div>

        <Link to="/weather" className="weather-info" title="Click to see detailed weather information">
          <h2 className="location">{location}</h2>
          <span className="weather-icon">{weatherIcon}</span>
          <p className="temperature">{temperature}°C</p>
          <p className="rain-chance">💧 {rainChance}%</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

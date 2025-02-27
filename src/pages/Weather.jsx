import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [location, setLocation] = useState('Loading...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        console.log('Fetching weather data for coordinates:', latitude, longitude);

        // Fetch human-readable location using Nominatim API (OpenStreetMap)
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

        // Fetch weather data from Open-Meteo API (No API key required)
        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/London`
        );

        console.log('Open-Meteo Weather Data:', weatherResponse.data);

        // Extract 12-hour and 7-day forecast data
        const hourlyData = weatherResponse.data.hourly.time.slice(0, 12).map((time, index) => ({
          time,
          temperature: weatherResponse.data.hourly.temperature_2m[index],
          weatherCode: weatherResponse.data.hourly.weathercode[index],
        }));

        const dailyData = weatherResponse.data.daily.time.map((date, index) => ({
          date,
          tempMin: weatherResponse.data.daily.temperature_2m_min[index],
          tempMax: weatherResponse.data.daily.temperature_2m_max[index],
          weatherCode: weatherResponse.data.daily.weathercode[index],
        }));

        setHourlyWeather(hourlyData);
        setDailyWeather(dailyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Unable to fetch weather data.');
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
            console.warn('Location access denied. Using default location (London).');
            // Fallback to a default location (e.g., London)
            fetchWeather(51.5074, -0.1278, true);
          }
        );
      } else {
        console.warn('Geolocation not supported. Using default location (London).');
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
      0: '☀️', // Clear sky
      1: '🌤️', // Mainly clear
      2: '⛅', // Partly cloudy
      3: '☁️', // Overcast
      45: '🌫️', // Fog
      48: '🌫️', // Depositing rime fog
      51: '🌦️', // Drizzle: Light
      61: '🌧️', // Rain: Slight
      71: '❄️', // Snow fall: Slight
      80: '🌧️', // Rain showers: Slight
      95: '⛈️', // Thunderstorm: Slight or moderate
    };
    return weatherIcons[weatherCode] || '🌈'; // Default to rainbow if code is not recognized
  };

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    });
  };

  return (
    <div>
      <h2>Weather in {location}</h2>

      <h3>Next 12 Hours</h3>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {hourlyWeather.map((hour, index) => (
          <div key={index} style={{ margin: '0 10px', textAlign: 'center' }}>
            <p>{formatTime(hour.time)}</p>
            <p>{getWeatherIcon(hour.weatherCode)}</p>
            <p>{Math.round(hour.temperature)}°C</p>
          </div>
        ))}
      </div>

      <h3>Next 7 Days</h3>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {dailyWeather.map((day, index) => (
          <div key={index} style={{ margin: '0 10px', textAlign: 'center' }}>
            <p>{formatDate(day.date)}</p>
            <p>{getWeatherIcon(day.weatherCode)}</p>
            <p>
              {Math.round(day.tempMin)}°C - {Math.round(day.tempMax)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;

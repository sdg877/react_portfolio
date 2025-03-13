// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../Styles/Weather.css";
// import "../Styles/Header.css";

// const Weather = () => {
//   const [hourlyWeather, setHourlyWeather] = useState();
//   const [dailyWeather, setDailyWeather] = useState();
//   const [location, setLocation] = useState("Loading...");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async (latitude, longitude, fallback = false) => {
//       try {
//         if (!fallback) {
//           const locationResponse = await axios.get(
//             `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//           );

//           const town =
//             locationResponse.data.address.town ||
//             locationResponse.data.address.village ||
//             locationResponse.data.address.suburb ||
//             locationResponse.data.address.neighbourhood ||
//             null;

//           const city =
//             locationResponse.data.address.city ||
//             locationResponse.data.address.state ||
//             null;

//           const locationName =
//             town && city && town !== city
//               ? `${town}, ${city}`
//               : town || city || "Your Area";

//           setLocation(locationName);
//         } else {
//           setLocation("London");
//         }

//         const weatherResponse = await axios.get(
//           `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,precipitation_probability,uv_index,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_mean,uv_index_max&timezone=Europe%2FLondon`
//         );

//         const currentHour = new Date().getHours();

//         const hourlyData = weatherResponse.data.hourly.time
//           .slice(currentHour, currentHour + 12)
//           .map((time, index) => ({
//             time,
//             temperature:
//               weatherResponse.data.hourly.temperature_2m[currentHour + index],
//             weatherCode:
//               weatherResponse.data.hourly.weathercode[currentHour + index],
//             rainChance:
//               weatherResponse.data.hourly.precipitation_probability[
//                 currentHour + index
//               ],
//             uvIndex: weatherResponse.data.hourly.uv_index[currentHour + index],
//             feelsLike:
//               weatherResponse.data.hourly.apparent_temperature[
//                 currentHour + index
//               ],
//           }));

//         const dailyData = weatherResponse.data.daily.time
//           .slice(1)
//           .map((date, index) => ({
//             date,
//             tempMin: weatherResponse.data.daily.temperature_2m_min[index + 1],
//             tempMax: weatherResponse.data.daily.temperature_2m_max[index + 1],
//             weatherCode: weatherResponse.data.daily.weathercode[index + 1],
//             rainChance:
//               weatherResponse.data.daily.precipitation_probability_mean[
//                 index + 1
//               ],
//             uvIndex: weatherResponse.data.daily.uv_index_max[index + 1],
//           }));

//         setHourlyWeather(hourlyData);
//         setDailyWeather(dailyData);
//         setLoading(false);
//       } catch (error) {
//         setError("Unable to fetch weather data.");
//         setLoading(false);
//       }
//     };

//     const getUserLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             fetchWeather(latitude, longitude);
//           },
//           () => {
//             fetchWeather(51.5074, -0.1278, true);
//           }
//         );
//       } else {
//         fetchWeather(51.5074, -0.1278, true);
//       }
//     };

//     getUserLocation();
//   }, []);

//   const getWeatherIcon = (weatherCode, timeString) => {
//     const hour = new Date(timeString).getHours();
//     const isDayTime = hour >= 6 && hour < 20;
  
//     const weatherIcons = {
//       0: isDayTime ? "☀️" : "🌙",
//       1: isDayTime ? "🌤️" : "🌙",
//       2: "⛅",
//       3: "☁️",
//       45: "🌫️",
//       48: "🌫️",
//       51: "🌦️",
//       53: "🌦️",
//       55: "🌧️",
//       56: "🌧️",
//       57: "🌧️",
//       61: "🌧️",
//       63: "🌧️",
//       65: "🌧️",
//       66: "🌧️",
//       67: "🌧️",
//       71: "❄️",
//       73: "❄️",
//       75: "❄️",
//       77: "🌨️",
//       80: "🌧️",
//       81: "🌧️",
//       82: "🌧️",
//       85: "❄️",
//       86: "❄️",
//       95: "⛈️",
//       96: "⛈️",
//       99: "⛈️",
//     };

//     return weatherIcons[weatherCode] || "☁️";
//   };

//   const formatTime = (timeString) => {
//     const date = new Date(timeString);
//     return date.toLocaleTimeString("en-GB", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//       timeZone: "Europe/London",
//     });
//   };

//   const formatDate = (datetime) => {
//     const date = new Date(datetime);
//     return date.toLocaleDateString("en-GB", {
//       weekday: "short",
//       day: "2-digit",
//       month: "2-digit",
//     });
//   };

//   return (
//     <div className="weather-container">
//       <div className="weather-content-wrapper">
//         {loading ? (
//           <p className="loading">Loading weather...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : (
//           <>
//             <h2 className="location-title">Weather in {location}</h2>

//             <h3 className="weather-title">Next 12 Hours</h3>
//               <div className="weather-card-container">
//                 {hourlyWeather.map((hour, index) => (
//                   <div key={index} className="weather-card">
//                     <p>{formatTime(hour.time)}</p>
//                     <p className="weather-icon">
//                       {getWeatherIcon(hour.weatherCode)}
//                     </p>
//                     <p className="temp">{Math.round(hour.temperature)}°C</p>
//                     <p className="weatherdetail">
//                       Feels like: {Math.round(hour.feelsLike)}°C
//                     </p>
//                     <p className="weatherdetail">Rain: {hour.rainChance}%</p>
//                     <p className="weatherdetail">UV Index: {hour.uvIndex}</p>
//                   </div>
//                 ))}
//               </div>

//             <h3 className="weather-title">The Coming Week</h3>
//             <div className="weather-card-container">
//               {dailyWeather.map((day, index) => (
//                 <div key={index} className="weather-week-card">
//                   <p>{formatDate(day.date)}</p>
//                   <p className="weather-icon">
//                     {getWeatherIcon(day.weatherCode)}
//                   </p>
//                   <p>
//                     {Math.round(day.tempMin)}°C - {Math.round(day.tempMax)}°C
//                   </p>
//                   <p className="weatherdetail">Rain: {day.rainChance}%</p>
//                   <p className="weatherdetail">UV Index: {day.uvIndex}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Weather;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Weather.css";
import "../Styles/Header.css";

const Weather = () => {
  const [hourlyWeather, setHourlyWeather] = useState();
  const [dailyWeather, setDailyWeather] = useState();
  const [location, setLocation] = useState("Loading...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, fallback = false) => {
      try {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get user's timezone dynamically

        if (!fallback) {
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const town =
            locationResponse.data.address.town ||
            locationResponse.data.address.village ||
            locationResponse.data.address.suburb ||
            locationResponse.data.address.neighbourhood ||
            null;

          const city =
            locationResponse.data.address.city ||
            locationResponse.data.address.state ||
            null;

          const locationName =
            town && city && town !== city
              ? `${town}, ${city}`
              : town || city || "Your Area";

          setLocation(locationName);
        } else {
          setLocation("London");
        }

        const weatherResponse = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,precipitation_probability,uv_index,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_mean,uv_index_max&timezone=${encodeURIComponent(userTimeZone)}`
        );

        const currentHour = new Date().getHours();

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
          }));

        setHourlyWeather(hourlyData);
        setDailyWeather(dailyData);
        setLoading(false);
      } catch (error) {
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
            fetchWeather(51.5074, -0.1278, true);
          }
        );
      } else {
        fetchWeather(51.5074, -0.1278, true);
      }
    };

    getUserLocation();
  }, []); // Removed userTimeZone from dependency array

  const getWeatherIcon = (weatherCode, timeString) => {
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

    return weatherIcons[weatherCode] || "☁️";
  };

  const formatTime = (timeString) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: userTimeZone, // Ensure correct local time display
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
      <div className="weather-content-wrapper">
        {loading ? (
          <p className="loading">Loading weather...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <h2 className="location-title">Weather in {location}</h2>

            <h3 className="weather-title">Next 12 Hours</h3>
            <div className="weather-card-container">
              {hourlyWeather.map((hour, index) => (
                <div key={index} className="weather-card">
                  <p>{formatTime(hour.time)}</p>
                  <p className="weather-icon">{getWeatherIcon(hour.weatherCode)}</p>
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
                <div key={index} className="weather-week-card">
                  <p>{formatDate(day.date)}</p>
                  <p className="weather-icon">{getWeatherIcon(day.weatherCode)}</p>
                  <p>{Math.round(day.tempMin)}°C - {Math.round(day.tempMax)}°C</p>
                  <p className="weatherdetail">Rain: {day.rainChance}%</p>
                  <p className="weatherdetail">UV Index: {day.uvIndex}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;

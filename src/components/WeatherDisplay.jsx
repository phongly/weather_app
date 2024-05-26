import React from "react";

function WeatherDisplay({ weather }) {
  // Function to format the date and time
  const formatDateTime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US");
    const formattedTime = currentDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="weather-display">
      <div className="weather-row">
        <p>Today's weather</p>
      </div>
      <div className="weather-row">
        <h3 className="weather-temp">
          {Math.round(weather.main.temp - 273.15)}°
        </h3>
      </div>
      <div className="weather-row">
        <p>
          H: {Math.round(weather.main.temp_max - 273.15)}° L:{" "}
          {Math.round(weather.main.temp_min - 273.15)}°
        </p>
      </div>
      <div className="weather-row">
        <p>
          {weather.name}, {weather.sys.country}
        </p>
        <p>{formatDateTime()}</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>{weather.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;

import "./styles.css";
import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchHistory from "./components/SearchHistory";
import axios from "axios";
import backgroundImage from "./assets/bg-dark.png";

const API_KEY = "9471a89f28b2261558fb91316f348f86";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const getWeather = async (city, country) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      setWeather(response.data);
      setError("");
      const newEntry = { city, country, id: Date.now() };
      setHistory([newEntry, ...history]);
    } catch (err) {
      setError("Invalid city or country name. Please try again.");
      setWeather(null);
    }
  };

  const removeHistoryEntry = (id) => {
    setHistory(history.filter((entry) => entry.id !== id));
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SearchForm onSearch={getWeather} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {weather && <WeatherDisplay weather={weather} />}
      <SearchHistory
        history={history}
        onSearch={getWeather}
        onDelete={removeHistoryEntry}
      />
    </div>
  );
}
export default App;

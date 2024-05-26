import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && country) {
      onSearch(city, country);
      setCity("");
      setCountry("");
    }
  };

  const handleClear = () => {
    setCity("");
    setCountry("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}

export default SearchForm;

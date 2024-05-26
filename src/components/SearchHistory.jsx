import React from "react";

function SearchHistory({ history, onSearch, onDelete }) {
  return (
    <div className="search-history">
      <p>Search History</p>
      <ul>
        {history.map((entry) => (
          <li key={entry.id}>
            {entry.city}, {entry.country}
            <div>
              <button onClick={() => onSearch(entry.city, entry.country)}>
                Search Again
              </button>
              <button onClick={() => onDelete(entry.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;

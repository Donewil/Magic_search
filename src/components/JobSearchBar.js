import React, { useState } from 'react';

const JobSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    
    // Fetch job search suggestions (You can use an API or mock data)
    if (query.length > 2) {
      setSuggestions(['Software Engineer', 'Project Manager', 'Data Scientist', 'UX Designer', 'Marketing Specialist']);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="job-search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for jobs, companies, or locations"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-btn">Search</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobSearchBar;

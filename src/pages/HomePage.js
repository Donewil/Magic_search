import React from 'react';
import SearchBar from '../components/SearchBar';
import './HomePage.css'; // Additional page-specific styling

const HomePage = () => {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
    // Implement API call or filtering logic here
  };

  return (
    <div className="home-page">
      <div className="content-wrapper">
        <SearchBar onSearch={handleSearch} />
        {/* JobList component would be placed here if required */}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';

const LocationFilter = ({ onLocationChange }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Get user location using the browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value);
  };

  return (
    <div className="location-filter">
      <h3>Find Jobs Near You</h3>
      {location ? (
        <p>Location detected: {location.latitude}, {location.longitude}</p>
      ) : (
        <button onClick={() => handleLocationChange('nearby')}>Find Jobs Near Me</button>
      )}
      {/* You can also add a location input field here */}
    </div>
  );
};

export default LocationFilter;

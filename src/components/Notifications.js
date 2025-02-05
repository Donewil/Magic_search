import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    setNotifications([
      'You have a new job recommendation!',
      'An employer has viewed your profile.',
      'Your application was viewed.'
    ]);
  }, []);

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

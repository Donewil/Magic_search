import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Skills:</strong> {user.skills}</p>
      <p><strong>Connections:</strong> {user.connections}</p>
    </div>
  );
};

export default UserProfile;

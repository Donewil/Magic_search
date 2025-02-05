import React from 'react';

const JobApplicationStatus = ({ applicationStatus }) => {
  return (
    <div className="job-application-status">
      <h3>Your Application Status</h3>
      {applicationStatus ? (
        <p>Status: {applicationStatus}</p>
      ) : (
        <p>No application status available.</p>
      )}
    </div>
  );
};

export default JobApplicationStatus;

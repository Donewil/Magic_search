import React from 'react';

const JobApplicationProgress = ({ applicationStatus }) => {
  return (
    <div className="application-progress">
      <h3>Application Progress</h3>
      <ul className="progress-list">
        <li className={applicationStatus === 'Applied' ? 'active' : ''}>Applied</li>
        <li className={applicationStatus === 'Interviewing' ? 'active' : ''}>Interviewing</li>
        <li className={applicationStatus === 'Offered' ? 'active' : ''}>Offered</li>
        <li className={applicationStatus === 'Rejected' ? 'active' : ''}>Rejected</li>
      </ul>
    </div>
  );
};

export default JobApplicationProgress;

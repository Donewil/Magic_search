import React from 'react';

const JobListing = ({ job, onSave }) => {
  return (
    <div className="job-listing">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <button onClick={() => onSave(job)} className="save-job-btn">Save Job</button>
    </div>
  );
};

export default JobListing;

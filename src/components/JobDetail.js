import React from 'react';

const JobDetail = ({ job }) => {
  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="job-detail-card">
      <div className="job-detail-header">
        <img src={job.companyLogo} alt={job.company} className="company-logo" />
        <h2>{job.title}</h2>
      </div>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <div className="apply-btn-container">
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetail;

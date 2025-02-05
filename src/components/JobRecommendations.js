import React from 'react';

const JobRecommendations = ({ recommendedJobs }) => {
  return (
    <div className="job-recommendations">
      <h3>Recommended Jobs</h3>
      <div className="recommended-jobs">
        {recommendedJobs.map((job, index) => (
          <div key={index} className="job-recommendation-card">
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;

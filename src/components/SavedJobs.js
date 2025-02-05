import React from 'react';

const SavedJobs = ({ savedJobs, removeJobFromSaved }) => {
  return (
    <div className="saved-jobs">
      <h3>Your Saved Jobs</h3>
      {savedJobs.length > 0 ? (
        savedJobs.map((job, index) => (
          <div key={index} className="saved-job-card">
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <button onClick={() => removeJobFromSaved(index)} className="remove-btn">Remove</button>
          </div>
        ))
      ) : (
        <p>You haven't saved any jobs yet.</p>
      )}
    </div>
  );
};

export default SavedJobs;

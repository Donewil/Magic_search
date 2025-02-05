import React from 'react';

const JobFilters = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="job-filters">
      <h3>Filter Jobs</h3>
      <label>
        Salary Range
        <input type="range" min="0" max="200000" name="salary" onChange={handleFilterChange} />
      </label>
      <label>
        Job Type
        <select name="jobType" onChange={handleFilterChange}>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>
      </label>
      <label>
        Experience Level
        <select name="experienceLevel" onChange={handleFilterChange}>
          <option value="entry">Entry-level</option>
          <option value="mid">Mid-level</option>
          <option value="senior">Senior-level</option>
        </select>
      </label>
    </div>
  );
};

export default JobFilters;

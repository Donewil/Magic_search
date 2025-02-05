import React, { useState } from 'react';
import './JobPostPage.css';

const JobPostPage = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    location: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', jobDetails);
    // Call API to post job here
  };

  return (
    <div className="job-post-page">
      <h1>Post a New Job</h1>
      <form onSubmit={handleSubmit} className="job-post-form">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobDetails.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobDetails.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobDetails.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={jobDetails.company}
          onChange={handleInputChange}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPostPage;

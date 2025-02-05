import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../services/JobService';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getJobs = async () => {
      try {
        const fetchedJobs = await fetchJobs();
        setJobs(fetchedJobs);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to fetch jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id || job._id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
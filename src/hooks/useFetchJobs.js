import { useState, useEffect } from 'react';
import { fetchJobs } from '../utils/api';

const useFetchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to fetch jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  return { jobs, loading, error };
};

export default useFetchJobs;

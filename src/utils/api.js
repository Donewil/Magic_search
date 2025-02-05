export const fetchJobs = async () => {
    try {
      const response = await fetch('https://api.jobsearch.com/jobs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem fetching jobs:', error);
      throw error;
    }
  };
  
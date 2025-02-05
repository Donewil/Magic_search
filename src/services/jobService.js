import axios from 'axios';

const API_URL = 'http://localhost:5005/api/jobs'; // Replace with your backend API URL

export const fetchJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
};
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JobPostPage from './pages/JobPostPage';
import InterviewTrainingPage from './pages/InterviewTrainingPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Discover Your Next Career Opportunity</h1>
          <p>Search thousands of jobs, connect with top companies and build your future.</p>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/job-post" element={<JobPostPage />} />
        <Route path="/interview-training" element={<InterviewTrainingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

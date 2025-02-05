import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Job Search Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/job-post" className="nav-link">Post Job</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

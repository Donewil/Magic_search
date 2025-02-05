// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists or remove the import temporarily
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

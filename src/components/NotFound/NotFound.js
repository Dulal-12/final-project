import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="error-container container">
        <h1 style={{color:"green"}}>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/home">Go to Homepage</Link>
      </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Page Not Found</h1>
      <p className="notfound-message">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="notfound-link">Go to Home</Link>
    </div>
  );
}

export default NotFound;

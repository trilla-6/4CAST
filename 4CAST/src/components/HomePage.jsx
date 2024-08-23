import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h1 className="title">4CAST SPORTS</h1>
      <p className="subtitle">Predict.<br />Win.<br />Compete.</p>
      <div className="buttons">
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login-button">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

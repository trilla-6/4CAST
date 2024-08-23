import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to 4CAST Sports</h1>
      <div className="dashboard-content">
        <p>Select an option to get started:</p>
        <div className="dashboard-buttons">
          <button className="dashboard-button">Predict</button>
          <button className="dashboard-button">Social Leagues</button>
          <button className="dashboard-button">Account</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

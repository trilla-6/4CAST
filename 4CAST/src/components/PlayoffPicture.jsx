import React, { useState, useEffect } from 'react';
import api from '../api/api';

function PlayoffPicture() {
  const [playoffs, setPlayoffs] = useState([]);

  useEffect(() => {
    async function fetchPlayoffs() {
      try {
        const response = await api.get('/playoffs');
        setPlayoffs(response.data);
      } catch (error) {
        console.error('Error fetching playoffs:', error);
      }
    }

    fetchPlayoffs();
  }, []);

  return (
    <div>
      <h2>Playoff Picture</h2>
      <ul>
        {playoffs.map((team, index) => (
          <li key={index}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayoffPicture;

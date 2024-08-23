import React, { useState, useEffect } from 'react';
import api from '../api/api';  // Assuming you have set up API service

function GamePicker() {
  const [games, setGames] = useState([]);
  const [selectedPicks, setSelectedPicks] = useState({});

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await api.get('/games');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }

    fetchGames();
  }, []);

  const handlePickChange = (gameId, pick) => {
    setSelectedPicks(prevPicks => ({
      ...prevPicks,
      [gameId]: pick
    }));
  };

  return (
    <div>
      <h2>Pick Your Games</h2>
      {games.map(game => (
        <div key={game.id}>
          <span>{game.home_team} vs {game.away_team}</span>
          <select
            value={selectedPicks[game.id] || ''}
            onChange={(e) => handlePickChange(game.id, e.target.value)}
          >
            <option value="">Select</option>
            <option value="home">Home</option>
            <option value="away">Away</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default GamePicker;

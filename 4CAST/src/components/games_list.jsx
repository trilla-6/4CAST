import React, { useState, useEffect } from 'react';
import api from '../api/api';

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get('/games')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  return (
    <div>
      <h2>Games List</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.home_team} vs {game.away_team}</li>
        ))}
      </ul>
    </div>
  );
}

export default GamesList;

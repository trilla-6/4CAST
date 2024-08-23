import React, { useState, useEffect } from 'react';
import api from '../api/api';

function Standings() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    async function fetchStandings() {
      try {
        const response = await api.get('/standings');
        setStandings(response.data);
      } catch (error) {
        console.error('Error fetching standings:', error);
      }
    }

    fetchStandings();
  }, []);

  return (
    <div>
      <h2>Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {standings.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;

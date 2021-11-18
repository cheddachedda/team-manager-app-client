import React, { useState, useEffect } from 'react';
import Drinks from '../components/Drinks';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Slots.css'

const SERVER_URL = `https://obscure-chamber-58161.herokuapp.com//teams/`

const Teams = () => {
  const {id} = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = () => {
    axios.get(`${SERVER_URL}/${id}`).then((response) => {
      setTeam(response.data);
    });
  }

  return (
    <div className="body">
      <h2>{team.name}</h2>
      <p>Games: {team.games_played}</p>
      <p>Wins: {team.wins}</p>
      <p>Losses: {team.losses}</p>
      <h3>Players</h3>
      <ul>
        {team.users &&
          team.users.map((u) =>
              <li>{u}</li>)
        }
      </ul>
      <Drinks players={team.users} />
    </div>
  );
}


export default Teams;

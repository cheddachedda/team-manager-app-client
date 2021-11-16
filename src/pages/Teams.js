import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = `http://localhost:3000/teams/`

const Teams = () => {
  const {id} = useParams();
  const [team, setTeam] = useState();

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = () => {
    axios.get(`${SERVER_URL}/${id}`).then((response) => {
      const currentTeam = response.data;
    });
  }

  return (
    <div>
      <h2>{currentTeam.name}</h2>
    </div>
  );
}

export default Teams;

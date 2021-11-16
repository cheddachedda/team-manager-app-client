import React, { Component } from "react";
import axios from "axios";
import GameForm from '../components/GameForm.js'
import { Link } from 'react-router-dom';

const SERVER_URL = "http://localhost:3000/games.json";

class CreateGame extends Component {
// ----new

  constructor() {
    super();
    this.state = {
      game: [],
    };
    // this.saveGame = this.saveGame.bind(this);
  }

  //react component lifecycle:
  componentDidMount() {
    const fetchGames = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ game: response.data });

      });
    };

    fetchGames();
  }
  // send object back to rails
  saveGame(venue, time, home_score, away_score, home_id, away_id, status, round, division, home_votes, away_votes, home_balance, away_balance, home_drinks_id, away_drinks_id, home_availible_id, away_availible_id){
    const game = {
      venue: venue,
      time: time,
      home_score: home_score,
      away_score: away_score,
      home_id: home_id,
      away_id: away_id,
      status: status,
      round: round,
      division: division,
      home_votes: home_votes,
      away_votes: away_votes,
      home_balance: home_balance,
      away_balance: away_balance,
      home_drinks_id: home_drinks_id,
      away_drinks_id: away_drinks_id,
      home_availible_id: home_availible_id,
      away_availible_id: away_availible_id
  };

    axios.post(SERVER_URL, {game}).then((result) => {
      this.setState({ game: [...this.state.game, game] });
    });
  }


// -----new
render() {
  if (this.props.currentUser.admin){
    return (
    <div>
      <Link to={ '/gameindex' }>Games List</Link>
      <GameForm onSubmit={this.saveGame}/>

    </div>)
  } else {
    return (
    <div>
      You must be an admin
    </div>
  )
}
}
}



export default CreateGame

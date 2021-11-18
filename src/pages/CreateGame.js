import React, { Component } from "react";
import axios from "axios";
import GameForm from '../components/GameForm.js'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const SERVER_URL = "http://localhost:3000/games.json";


class CreateGame extends Component {

  saveGame(game){
    axios.post(SERVER_URL, {game}).then(() => {
    // TODO: redirect to admin games
    // <Navigate to="admingames" />
    window.location.assign('/admingames');
    });

  }

render() {


  if (this.props.currentUser.admin){
    return (
    <div>
      <Link to={ '/AdminGames' }>Games List</Link>
      <GameForm onSubmit={this.saveGame} />

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

import React, { Component } from "react";
import axios from "axios";
import GameForm from '../components/GameForm.js'


class CreateGame extends Component {
render() {
  if (this.props.currentUser.admin){
    return (
    <div>
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

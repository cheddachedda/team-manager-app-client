import { Component } from 'react';

import GamesNavBar from '../components/GamesNavBar';

class Games extends Component {
  constructor() {
    super();
    this.state = {
      currentRound: '1', // TODO: These may need to be integers; check backend.
      selectedRound: '1' // TODO: These may need to be integers; check backend.
    };
  }

  render() {
    return(
      <div>
        <h2>Games Page</h2>
        <GamesNavBar current={ this.state.currentRound } selected={ this.state.selectedRound } />
        <p>A list of games will go here </p>
      </div>
    );
  }
}

export default Games;

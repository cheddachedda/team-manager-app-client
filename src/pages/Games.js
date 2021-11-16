import { Component } from 'react';

import GamesNavBar from '../components/GamesNavBar';
import GameCard from '../components/GameCard';

class Games extends Component {
  constructor() {
    super();
    this.state = {
      currentRound: '1', // TODO: These may need to be integers; check backend.
      selectedRound: '1', // TODO: These may need to be integers; check backend.
      games: []
    };

    this._setSelectedRound = this._setSelectedRound.bind(this);
  }

  // TODO:
  // - Write click listener for GamesNavBar buttons
  // - pass to GamesNavBar
  // - which setsState of selectedRound
  _setSelectedRound() {
    
  }

  componentDidMount() {
    // TODO:
    // - Fetch games that match this.state.selectedRound,
    // - Replace placeholder array
    const response = [
      { round: '1', home: 'Home', away: 'Away', venue: 'Venue' },
      { round: '1', home: 'Home', away: 'Away', venue: 'Venue' },
      { round: '1', home: 'Home', away: 'Away', venue: 'Venue' },
    ];
    this.setState({ games: response });
  }

  render() {
    return(
      <div>
        <h2>Games Page</h2>
        <GamesNavBar current={ this.state.currentRound } selected={ this.state.selectedRound } />
        { this.state.games.map((game) => <GameCard game={ game } />) }
      </div>
    );
  }
}

export default Games;

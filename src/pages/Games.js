import { Component } from 'react';
import axios from 'axios';

import GamesNavBar from '../components/GamesNavBar';
import GameCard from '../components/GameCard';

const SERVER_URL = "https://obscure-chamber-58161.herokuapp.com//games/"

class Games extends Component {
  constructor() {
    super();
    this.state = {
      division: 'mon_mixed',
      currentRound: 1, // TODO: These may need to be integers; check backend.
      selectedRound: 1, // TODO: These may need to be integers; check backend.
      games: []
    };

    this._setSelectedRound = this._setSelectedRound.bind(this);
  }

  _setSelectedRound(round) {
    this.setState({ selectedRound: round });
  }

  componentDidMount() {
    const url = SERVER_URL + '/' + this.state.division + '/' + this.state.selectedRound;
    axios(url).then((response) => {
      this.setState({ games: response.data });
    })
  }

  render() {
    return(
      <div className="body">
        <h2>Games Page</h2>
        <GamesNavBar
          current={ this.state.currentRound }
          selected={ this.state.selectedRound }
          selectRound={ this._setSelectedRound }
        />
        { this.state.games.map((game) => <GameCard key={ game.id } game={ game } /> ) }
      </div>
    );
  }
}

export default Games;

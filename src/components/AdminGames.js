import React, { Component } from "react";
import axios from "axios";
import '../css/Game.css'
import GameForm from './GameForm.js'
import GamesNavBar from '../components/GamesNavBar';
import CreateGame from '../pages/CreateGame.js'

const SERVER_URL = "http://localhost:3000/games.json";

class AdminGames extends Component {
  constructor() {
    super();
    this.state = {
      game: [],
    };
    this.saveGame = this.saveGame.bind(this);
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
  saveGame(venue, time, home_score, away_score, home_id, away_id, round, division, home_votes, away_votes, home_balance, away_balance, home_drinks_id, away_drinks_id, home_available_ids, away_available_ids){
    const game = {
      venue: venue,
      time: time,
      home_score: home_score,
      away_score: away_score,
      home_id: home_id,
      away_id: away_id,

      round: round,
      division: division,
      home_votes: home_votes,
      away_votes: away_votes,
      home_balance: home_balance,
      away_balance: away_balance,
      home_drinks_id: home_drinks_id,
      away_drinks_id: away_drinks_id,
      home_available_ids: home_available_ids,
      away_available_ids: away_available_ids
  };

    axios.post(SERVER_URL, {game}).then((result) => {
      this.setState({ game: [...this.state.game, game] });
    });
  }

  render() {
    return (
      <div className="main-content">
        <div>
          <h2> Create Game</h2>
          <h3> Games Page </h3>
          <div>
            <GamesNavBar />
          </div>
        </div>

        <div>
          <GamesList game={ this.state.game }/>
        </div>
      </div>
    );
  }
}
export default AdminGames;

    const GamesList = (props) => {

    return (
        <div >
          <table >
            <thead>
                <tr>
                  <th>Venue</th>
                  <th>Time</th>
                  <th>Home Score</th>
                  <th>Away Score</th>
                  <th>Home ID</th>
                  <th>Away ID</th>
                  <th>Status</th>
                  <th>Round</th>
                  <th>Division</th>
                  <th>Home Votes</th>
                  <th>Away Votes</th>
                  <th>Home Balance</th>
                  <th>Away Balance</th>
                  <th>Home Drinks ID</th>
                  <th>Away Drinks ID</th>
                  <th>Home Availability</th>
                  <th>Away Availability</th>
                </tr>
              </thead>

              <tbody>
                {props.game.map((g) => (
                  <tr key={g.id}>
                    <td>{g.venue}</td>
                    <td>{g.time}</td>
                    <td>{g.home_score}</td>
                    <td>{g.away_score}</td>
                    <td>{g.home_id}</td>
                    <td>{g.away_id}</td>

                    <td>{g.round}</td>
                    <td>{g.division}</td>
                    <td>{g.home_votes}</td>
                    <td>{g.away_votes}</td>
                    <td>{g.home_balance}</td>
                    <td>{g.away_balance}</td>
                    <td>{g.home_drinks_id}</td>
                    <td>{g.away_drinks_id}</td>
                    <td>{g.home_available_ids}</td>
                    <td>{g.away_available_ids}</td>
                  </tr>))}
              </tbody>

          </table>
        </div>
    );

  }

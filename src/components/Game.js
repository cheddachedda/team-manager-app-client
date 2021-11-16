import React, { Component } from "react";
import axios from "axios";
import '../css/Game.css'

const SERVER_URL = "http://localhost:3000/games.json";

export default class Game extends Component {
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
  saveGame(venue, time, home_score, away_score, home_id, away_id, status, round, division, home_votes, away_votes, home_balance, away_balance, homedrinks_id, awaydrinks_id, homeavailible_id, awayavailible_id){
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
      homedrinks_id: homedrinks_id,
      awaydrinks_id: awaydrinks_id,
      homeavailible_id: homeavailible_id,
      awayavailible_id: awayavailible_id
    };

    axios.post(SERVER_URL, {game}).then((result) => {
      this.setState({ game: [...this.state.game, game] });
    });
  }

  render() {
    return (
      <div className="main-content">
        <div>
          <h1> Create Game</h1>
          <h2> Games Page </h2>
        </div>
        <div>
          <GameForm onSubmit={this.saveGame}/>
        </div>
        <div>
          <GamesList game={ this.state.game }/>
        </div>
      </div>
    );
  }
}

class GameForm extends Component {
  constructor() {
    super();
    this.state = {
      venue: "",
      time: "",
      home_score: "",
      away_score: "",
      home_id: "",
      away_id: "",
      status: "",
      round: "",
      division: "",
      home_votes: "",
      away_votes: "",
      home_balance: "",
      away_balance: "",
      home_drinks_id: "",
      away_drinks_id: "",
      homeavailible_id: "",
      awayavailible_id: "",
      };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  // _handleChange for multiple inputs:
  _handleChange(event) {
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.name]: value });
  }

  _handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.venue, this.state.time, this.state.home_score, this.state.away_score, this.state.home_id, this.state.away_id, this.state.status, this.state.round, this.state.division, this.state.home_balance, this.state.away_balance, this.state.homedrinks_id, this.state.awaydrinks_id, this.state.homeavailible_id, this.state.awayavailible_id );
        this.setState( { venue: '', time: '', home_score: '', away_score: '', home_id: '', away_id: '', status: '', round: '', division: '', home_votes: '', away_votes: '', home_balance: '', away_balance: '', homedrinks_id: '', awaydrinks_id: '', homeavailible_id: '', awayavailible_id: '' });
      }


  render() {
    return (
      <div>
      <h3> Create your Game </h3>
        <form onSubmit={ this._handleSubmit }>

          <h3>Venue</h3>
          <input type="text" name="venue" placeholder="Old Trafford" onChange={ this._handleChange } value={ this.state.venue }/>

          <h3>Time</h3>
          <input type="datetime" name="time" placeholder="15:00" onChange={ this._handleChange } value={this.state.time}/>

          <h3>Home Score</h3>
          <input type="integer" name="homescore" placeholder="0" onChange={ this._handleChange } value={this.state.home_score}/>

          <h3>Away Score</h3>
          <input type="integer" name="awayscore" placeholder="0" onChange={ this._handleChange } value={this.state.away_score}/>

          <h3>Home Id</h3>
          <input type="integer" name="home_id" placeholder="0" onChange={ this._handleChange } value={this.state.home_id}/>

          <h3>Away Id</h3>
          <input type="integer" name="away_id" placeholder="0" onChange={ this._handleChange } value={this.state.away_id}/>

          <h3>Status</h3>
          <input type="text" name="status" placeholder="Status" onChange={ this._handleChange } value={this.state.status}/>

          <h3>Round</h3>
          <input type="integer" name="round" placeholder="1" onChange={ this._handleChange } value={this.state.round}/>

          <h3>Division</h3>
          <input type="integer" name="division" placeholder="1" onChange={ this._handleChange } value={this.state.division}/>

          <h3>Away Votes</h3>
          <input type="integer" name="awayvotes" placeholder="1" onChange={ this._handleChange } value={this.state.away_votes}/>

          <h3>Home Votes</h3>
          <input type="integer" name="homevotes" placeholder="1" onChange={ this._handleChange } value={this.state.home_votes}/>

          <h3>Home Balance</h3>
          <input type="integer" name="homebalance" placeholder="1" onChange={ this._handleChange } value={this.state.home_balance}/>

          <h3>Away Balance</h3>
          <input type="integer" name="awaybalance" placeholder="1" onChange={ this._handleChange } value={this.state.away_balance}/>

          <h3>Home Drinks</h3>
          <input type="integer" name="homedrinks_id" placeholder="1" onChange={ this._handleChange } value={this.state.home_drinks_id}/>

          <h3>Away Drinks</h3>
          <input type="integer" name="awaydrinks_id" placeholder="1" onChange={ this._handleChange } value={this.state.awaydrinks_id}/>

          <h3>Home Availability</h3>
          <input type="integer" name="homeavailible_id" placeholder="1" onChange={ this._handleChange } value={this.state.homeavailible_id}/>

          <h3>Away Availability</h3>
          <input type="integer" name="awayavailible_id" placeholder="1" onChange={ this._handleChange } value={this.state.awayavailible_id}/>


          <div className="submit">
            <input type="submit" value="Game" />
          </div>

        </form>
      </div>
    )
  }
}
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
                    <td>{g.status}</td>
                    <td>{g.round}</td>
                    <td>{g.division}</td>
                    <td>{g.home_votes}</td>
                    <td>{g.away_votes}</td>
                    <td>{g.home_balance}</td>
                    <td>{g.away_balance}</td>
                    <td>{g.home_drinks_id}</td>
                    <td>{g.away_drinks_id}</td>
                    <td>{g.homeavailible_id}</td>
                    <td>{g.awayavailible_id}</td>
                  </tr>))}
              </tbody>

          </table>
        </div>
    );

  }

import React, { Component } from "react";
import axios from "axios";
import '../css/GameForm.css';
import GameIndex from './GameIndex.js'


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
      home_availible_id: "",
      away_availible_id: "",
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
        this.props.onSubmit(this.state.venue, this.state.time, this.state.home_score, this.state.away_score, this.state.home_id, this.state.away_id, this.state.status, this.state.round, this.state.division, this.state.home_balance, this.state.away_balance, this.state.home_drinks_id, this.state.away_drinks_id, this.state.home_availible_id, this.state.away_availible_id );
        this.setState( { venue: '', time: '', home_score: '', away_score: '', home_id: '', away_id: '', status: '', round: '', division: '', home_votes: '', away_votes: '', home_balance: '', away_balance: '', home_drinks_id: '', away_drinks_id: '', home_availible_id: '', away_availible_id: '' });
      }


  render() {
    return (
      <div>
      <h3> Create your Game </h3>
      <div className="container">
        <form onSubmit={ this._handleSubmit }>

          <div className="left">
          <h3>Venue</h3>
          <input type="text" name="venue" placeholder="Old Trafford" onChange={ this._handleChange } value={ this.state.venue }/>

          <h3>Time</h3>
          <input type="datetime" name="time" placeholder="15:00" onChange={ this._handleChange } value={this.state.time}/>

          <h3>Home Score</h3>
          <input type="integer" name="home_score" placeholder="0" onChange={ this._handleChange } value={this.state.home_score}/>

          <h3>Away Score</h3>
          <input type="integer" name="away_score" placeholder="0" onChange={ this._handleChange } value={this.state.away_score}/>

          <h3>Home Id</h3>
          <input type="integer" name="home_id" placeholder="0" onChange={ this._handleChange } value={this.state.home_id}/>

          <h3>Away Id</h3>
          <input type="integer" name="away_id" placeholder="0" onChange={ this._handleChange } value={this.state.away_id}/>

          </div>
          <div className="middle">

          <h3>Status</h3>
          <input type="text" name="status" placeholder="Status" onChange={ this._handleChange } value={this.state.status}/>

          <h3>Round</h3>
          <input type="integer" name="round" placeholder="1" onChange={ this._handleChange } value={this.state.round}/>

          <h3>Division</h3>
          <input type="integer" name="division" placeholder="1" onChange={ this._handleChange } value={this.state.division}/>

          <h3>Away Votes</h3>
          <input type="integer" name="away_votes" placeholder="1" onChange={ this._handleChange } value={this.state.away_votes}/>

          <h3>Home Votes</h3>
          <input type="integer" name="home_votes" placeholder="1" onChange={ this._handleChange } value={this.state.home_votes}/>

          <h3>Home Balance</h3>
          <input type="integer" name="home_balance" placeholder="1" onChange={ this._handleChange } value={this.state.home_balance}/>

          </div>
          <div className="right">

          <h3>Away Balance</h3>
          <input type="integer" name="away_balance" placeholder="1" onChange={ this._handleChange } value={this.state.away_balance}/>

          <h3>Home Drinks</h3>
          <input type="integer" name="home_drinks_id" placeholder="1" onChange={ this._handleChange } value={this.state.home_drinks_id}/>

          <h3>Away Drinks</h3>
          <input type="integer" name="away_drinks_id" placeholder="1" onChange={ this._handleChange } value={this.state.away_drinks_id}/>

          <h3>Home Availability</h3>
          <input type="integer" name="home_availible_id" placeholder="1" onChange={ this._handleChange } value={this.state.home_availible_id}/>

          <h3>Away Availability</h3>
          <input type="integer" name="away_availible_id" placeholder="1" onChange={ this._handleChange } value={this.state.away_availible_id}/>
          </div>

          <div className="submit">
            <input type="submit" value="Game" />
          </div>

        </form>
      </div>
      </div>
    )
  }
}

export default GameForm;

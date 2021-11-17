import React, { Component } from "react";
import axios from "axios";
import '../css/GameForm.css';
import AdminGames from './AdminGames.js'


class GameForm extends Component {
  constructor() {
    super();
    this.state = {
      venue: "",
      datetime: "",
      home_score: "",
      away_score: "",
      home_id: "",
      away_id: "",
      round_no: "",
      division: "",
      home_votes: "",
      away_votes: "",
      home_balance: "",
      away_balance: "",
      home_drinks_id: "",
      away_drinks_id: "",
      home_available_ids: [],
      away_available_ids: [],
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
        this.props.onSubmit(this.state);
        this.setState( { venue: '', datetime: '', home_score: '', away_score: '', home_id: '', away_id: '', round_no: '', division: '', home_votes: '', away_votes: '', home_balance: '', away_balance: '', home_drinks_id: '', away_drinks_id: '', home_available_ids: [], away_available_ids: [] });
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
          <input type="datetime" name="datetime" placeholder="15:00" onChange={ this._handleChange } value={this.state.datetime}/>

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

          <h3>Round</h3>
          <input type="integer" name="round_no" placeholder="1" onChange={ this._handleChange } value={this.state.round_no}/>

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
          <input type="integer" name="home_available_ids" placeholder="1" onChange={ this._handleChange } value={this.state.home_available_ids}/>

          <h3>Away Availability</h3>
          <input type="integer" name="away_available_ids" placeholder="1" onChange={ this._handleChange } value={this.state.away_available_ids}/>
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

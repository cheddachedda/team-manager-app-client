import { Component } from 'react';
import axios from 'axios'


const SERVER_URL = "https://obscure-chamber-58161.herokuapp.com//teams.json";

class SignUp extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        password: '',
        captain: false,
        teams: []

      }
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleSelect = this._handleSelect.bind(this);
      this.selectField = this.selectField.bind(this);
    }

    _handleChange(event) {
      let captain = this.state.captain
      if(event.target.name === 'captain' ){
        captain = true
        this.state.captain = captain
        console.log(this.state.captain)
      } else {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    }

    componentDidMount() {
      const fetchTeam = () => {
        axios(SERVER_URL).then((response) => {
          this.setState({teams: response.data});
        })
      }
      fetchTeam();
    }

    _handleSelect(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
      console.log('team selected')
    }

    _handleSubmit(event) {
      event.preventDefault();
      this.props.signUp(this.state);
    }

    selectField(option) {

      return (
        <option key={ option.id } value={option.id}>
          Team {option.name}
        </option>
        );
    }

      render() {
      const fields = Object.keys(this.state); // this.state's keys as an array

        return (
          <div>

            <form onSubmit={ this._handleSubmit } >

              <h2>Sign up</h2>

                <label >
                  Name
                  <input type="text" name="name" onChange={ this._handleChange } />
                </label>

                <label >
                  Email
                  <input type="email" name="email" onChange={ this._handleChange } />
                </label>

                <label >
                  Password
                  <input type="password" name="password" onChange={ this._handleChange } />
                </label>

                <label >
                  Captain
                  <input type="checkbox" name="captain" onChange={ this._handleChange } />
                </label>

                <select name="team_id" onChange={this._handleSelect}>
                  {this.state.teams.map(this.selectField)}
                </select>

                <input type="submit"  />
            </form>

          </div>
        );
      }
    }

    export default SignUp;

import { Component } from 'react';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      team_id: 0,
      captain: false

    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.inputField = this.inputField.bind(this);
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

  _handleSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  inputField(label) {

    return (
      <label key={ label }>
        { label }
        <input
          onChange={ this._handleChange }
          name={ label }
          // required
          type={label === 'captain' ? 'checkbox' : label || label === 'team_id' ? 'integer' : label || label === 'name' ? 'text' : label }

          // value={ this.state[label] }
        />

      </label>
    );
  }


  render() {
    const fields = Object.keys(this.state); // this.state's keys as an array

    return (
      <div>

        <form onSubmit={ this._handleSubmit } >
          <h1>Sign up</h1>
            { fields.map(this.inputField) }


          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default SignUp;

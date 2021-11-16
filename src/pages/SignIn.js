import { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  _handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
          <h2>Sign In</h2>

          <label> Email:
            <input
              onChange={ this._handleChange }
              name="email"
              required
              type="email"
              value={ this.state.email }
            />
          </label>

          <label> Password:
            <input
              onChange={ this._handleChange }
              name="password"
              required
              type="password"
              value={ this.state.password }
            />
          </label>

          <input type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

export default SignIn;

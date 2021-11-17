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

  // Temporary, just for development
  ___loginAsAdmin = (event) => {
    event.preventDefault();
    this.props.signIn({
      email: 'admin@ga.co',
      password: 'chicken'
    });
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

        <button onClick={ this.___loginAsAdmin }>Easy login as Admin</button>
      </div>
    );
  }
}

export default SignIn;

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
  ___easyLogIn = (event) => {
    event.preventDefault();
    this.props.signIn({
      email: `${ event.target.name }@ga.co`,
      password: 'chicken'
    });
  }

  render() {
    return (
      <div className="body">
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

          <input className="button" type="submit" value="Sign in" />

        </form>

        <button name="admin" onClick={ this.___easyLogIn }>Log in as Admin</button>
        <button name="joel" onClick={ this.___easyLogIn }>Log in as Joel</button>
        <button name="pat" onClick={ this.___easyLogIn }>Log in as Pat</button>
        <button name="rowena" onClick={ this.___easyLogIn }>Log in as Rowena</button>
      </div>
    );
  }
}

export default SignIn;

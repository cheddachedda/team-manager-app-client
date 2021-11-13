import { Component } from 'react';

class SignIn extends Component {

    state = {
      email: '',
      password: ''
    }

  _handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  _handleSubmit = (event) => {
    event.preventDefault();
      this.props.signIn( this.state )
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
            <h1> Sign In Form </h1>
            <label> Email :</label>
            <input name='email' value={ this.state.email } onChange={ this._handleChange }/>
            <label> Password :</label>
            <input type="password" name="password" value={ this.state.password } onChange={ this._handleChange }/>
            <input type="submit" value="Authenticate" />
        </form>
      </div>
    );
  }
}

export default SignIn;

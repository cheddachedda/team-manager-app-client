import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
    this._submitHandler = this._submitHandler.bind(this);
  }
  _submitHandler(event) {
      event.preventDefault();

      if (
        this.state.email === "dean@test.com" ||
        this.state.password === "chicken"
      ) { alert('you have logged in');
      

      } else {
        this.setState({ error: "Wrong Username or Password" });
      }
    }



  render() {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
          <input
             type="email"
             placeholer="login@email.com"
             required
             onChange={(event) => {
              this.setState({ error: "" });
              this.setState({ email: event.target.value });
          }}
           />

          <input
            type="password"
            required
            onChange={(event) => {
              this.setState({ error: "" });
              this.setState({ password: event.target.value });
            }}
          />
          <button onClick={this._submitHandler}>Login</button>
        </form>

          <p>{this.state.error}</p>
      </div>
    )
  }
}




export default Login;

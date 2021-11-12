import {Component} from 'react';
import axios from 'axios';

import './App.css'
import SignUp from './SignUp';

const SERVER_URL = 'http://localhost:3000/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }

    this.signUp = this.signUp.bind(this);
  }

  signUp(user) {
    axios.post(SERVER_URL, { user }).then((response) => {
      console.log(response.data);
      this.setState({ user: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.user.name ?                    // If there is a user,
          <h2>Welcome {this.state.user.name}</h2> : // show welcome message
          <SignUp signUp={this.signUp} />           // else, render SignUp
        }
      </div>
    );
  }
}

export default App;

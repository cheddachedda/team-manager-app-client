import {Component} from 'react';
import axios from 'axios';

import './App.css'

import SignUp from './SignUp';

const SERVER_URL = 'http://localhost:3000/users.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    }
    this.signUp = this.signUp.bind(this);
  }

  signUp(user) {
    axios.post(SERVER_URL, user).then((result) => {
      console.log(result.data);
      this.setState({user: result.data});
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user.name ? <h2>Welcome {this.state.user.name}</h2> : 
          <SignUp signUp={this.signUp} />
        }
      </div>
    );
  }
}

export default App;

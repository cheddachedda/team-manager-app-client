import {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'

import Nav from './Nav';
import SignUp from './SignUp';
import Users from './User';

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
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/user' element={<Users />} />
          </Routes>
          {this.state.user.name ? <h2>Welcome {this.state.user.name}</h2> : 
            <SignUp signUp={this.signUp} />
          }
        </div>
      </Router>
    );
  }
}

const Home =() => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;

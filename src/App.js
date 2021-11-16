import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import axios from 'axios';

import './css/App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Users from './pages/User';
import CatGame from './pages/CatGame.js';
import Game from './components/Game.js'

const SERVER_URL = 'http://localhost:3000/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      error: null
    };

    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      axios('http://localhost:3000/profile', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((response) => {
        this.setState({ currentUser: response.data });
      });
    }
  }

  signUp(user) {
    axios.post(SERVER_URL, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      user
    }).then((response) => {
      this.setState({ currentUser: user });
    });
  }

  signIn(user) {
    axios.post("http://localhost:3000/signin", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      user
    })
    // if successful
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      this.setState({ currentUser: user });
      // TODO: Navigate to a different page on sign-in
    })
    // else
    .catch((error) => {
      this.setState({ error: error.response.data.error });
      // TODO: render some kind of error message to the user
    })
  }

// TODO: add if conditionals to render login option before signup

  render() {
    return (
      <Router>

        <Nav currentUser={ this.state.currentUser } />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<Users currentUser={ this.state.currentUser }/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn signIn={ this.signIn } />} />
          <Route path='/game' exact element={<Game />} />
          <Route path='/catgame' element={<CatGame />} />
        </Routes>

      </Router>
    );
  }
}

export default App;

import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect }  from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Users from './pages/User';
import Ladder from './pages/Ladder';
import Teams from './pages/Teams';
import CatGame from './pages/CatGame';

import Games from './pages/Games'
import Admin from './pages/Admin'
import CreateGame from './pages/CreateGame.js';
import AdminGames from './components/AdminGames.js'
import GameForm from './components/GameForm.js'

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
      this.setState({ currentUser: response.data.user });
      window.location.assign('/');
    })
    // else
    .catch((error) => {
      this.setState({ error: error.response.data.error });
    })
  }

  // TODO: add if conditionals to render login option before signup
  render() {
    return (
      <Router>
        <Nav currentUser={ this.state.currentUser } />
        <main>
          <Routes>
            <Route path='/' exact element={<Home currentUser={this.state.currentUser}/>} />
            <Route path='/user' exact element={<Users currentUser={this.state.currentUser}/>} />
            <Route path='/signin' exact element={<SignIn signIn={this.signIn}/>} />
            <Route path='/signup' exact element={<SignUp signUp={this.signUp}/>} />
            <Route path='/ladder' exact element={<Ladder />} />
            <Route path='/admingames' exact element={<AdminGames />} />
            <Route path='/gameform' exact element={<GameForm  />} />
            <Route path='/creategame' exact element={<CreateGame  currentUser={this.state.currentUser}/>} />
            <Route path='/teams/:id' exact element={<Teams />} />

            <Route path='/games' exact element={<Games />} />
            <Route path='/catgame' exact element={<CatGame />} />
            <Route path='/admin' exact element={<Admin />} />

          </Routes>
        </main>

      </Router>
    );
  }
}

export default App;

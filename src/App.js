import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link}  from 'react-router-dom';
import axios from 'axios';

import './App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Users from './pages/User';
import Ladder from './pages/Ladder';
import CatGame from './pages/CatGame.js';

const SERVER_URL = 'http://localhost:3000/users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }

    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if(result.id){
          this.setState({
            user: result
          })
        }
      })
    }
  }

  signUp(user) {
    axios.post(SERVER_URL, { user }).then((response) => {
      console.log(response.data);
      this.setState({ user: response.data });
    });
  }

  signIn = (user) => {
    fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                email: user.email,
                password: user.password
            }
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.token){
        localStorage.setItem('token', result.token)
        this.setState({
            user: result.user
            })
        }
        else {
            this.setState({
                error: result.error
            })
        }
    })
  }

// TODO: add if conditionals to render login option before signup

  render() {
    return (
      <Router>

        <Nav />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/user' exact element={<Users currentUser={this.state.user}/>} />
          <Route path='/signin' exact element={<SignIn signIn={this.signIn}/>} />
          <Route path='/signup' exact element={<SignUp signUp={this.signUp}/>} />
          <Route path='/ladder' exact element={<Ladder />} />
          <Route path='/catgame' exact element={<CatGame />} />}
        </Routes>

      </Router>
    );
  }
}

export default App;

import {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css'

import Nav from './Nav';
import SignUp from './SignUp';
import Users from './User';
import SignIn from './SignIn';

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

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
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
        <div className="App">
          <Nav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/user' exact element={<Users currentUser={this.state.user}/>} />

          </Routes>
          {this.state.user.name ? <h2>Welcome {this.state.user.name}</h2> : (
            <>
            <SignIn signIn={this.signIn}/>
            <SignUp signUp={this.signUp} />
            
            </>)
          }
        </div>
      </Router>
    );
  }
}

const Home =() => (
  <div className="home">
      <h2>Home</h2>
  </div>
);

export default App;

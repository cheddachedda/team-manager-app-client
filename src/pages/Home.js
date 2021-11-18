import { Component } from 'react';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const user = this.props.currentUser;

    if (user.email === "meow@meow") {
      return (
      <Link to={ '/CatGame' }><h1>Easter Egg</h1></Link>
    )
  } else {
    return (
      <div className="home-body">
        <h2>Welcome [USER]</h2>
        <div className="home-panel">
          <h3>Balance</h3>
          <p>100</p>
        </div>
        <div className="home-panel">
          <h3>Fines</h3>
          <p>100</p>
        </div>
        <div className="home-panel">
          <h3>Upcoming Game</h3>
          <GameCard key={ 1 } game={ "game" }/>
        </div>
      </div>
    );
  };
  }
}

export default Home;

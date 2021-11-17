import { Component } from 'react';
import GameCard from '../components/GameCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
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
  }
}

export default Home;

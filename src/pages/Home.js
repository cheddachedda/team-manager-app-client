import { Component } from 'react';
import GameCard from '../components/GameCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const user = this.props.currentUser;
    return (
      <div className="body">
        <h2>Welcome {user}</h2>
        <div className="balance-fines">
          <div>
            <h3>Balance</h3>
            <p>100</p>
          </div>
          <div>
            <h3>Fines</h3>
            <p>100</p>
          </div>
        </div>
        <div className="games-panel">
          <h3>Upcoming Game</h3>
          <GameCard key={ 1 } game={ "game" }/>
        </div>
      </div>
    );
  }
}

export default Home;

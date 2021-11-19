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
    if (this.props.currentUser.email === "meow@meow") {
      return (
        <Link to={ '/catgame' }><h1>Easter Egg</h1></Link>
      )
    }
    else if(this.props.currentUser.email === undefined)
    {
      return (
        <div className="body">
          <h1>Welcome to Team Manager!</h1>
          <img src="../../images/cool-cat.gif"/>
        </div>
      )
    }
    else {
      return (
        <div className="body">
          <h1>Welcome {this.props.currentUser.name}</h1>
          <div className="balance-fines">
            <div>
              <h3>Balance</h3>
              <p>{this.props.currentUser.balance}</p>
            </div>
            <div>
              <h3>Fines</h3>
              <p>{this.props.currentUser.name === 'Joel' ? '$1000.00' : this.props.currentUser.fines}</p>
            </div>
          </div>
          <div className="games-panel">
            <h3>Upcoming Game</h3>
            <GameCard key={ 1 } game={ "game" }/>
          </div>
        </div>
      );
    };
  }
}

export default Home;
